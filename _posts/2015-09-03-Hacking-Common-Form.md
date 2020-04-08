---
title: Hacking Common Form
description: Overview of existing Common Form software for programmers
layout: post
tags:
- Common Form
- Programming
---
A few folks have expressed interest in hacking on Common Form. They've also expressed some concern about a perceived lack of comments and documents.

Guilty as charged. Here's an overview.

<!--jump-->

## JavaScript and npm

My own work on Common Form is exclusively in JavaScript, targeting web browsers, and, in the interim, [Node.js](https://nodejs.org). I make heavy use of [npm](https://npmjs.com), the package manager for Node.js.

There are two things you should know about Node and npm before jumping into Common Form code:

1. The code takes advantage of [Node.js' recursive dependency resolution](https://nodejs.org/api/modules.html). In short, any call to `require('x')` to load code from elsewhere kicks off a search for a folder called "x" within a folder called "node_modules" in the same directory as the source code containing the `require` call. Any `require` calls in code you `require` will start looking for dependencies _in their own directories_, not at the top level of your project. npm installs packages together with their dependencies in recursive fashion, so that each package gets the versions of its dependencies specified in its `package.json` metadata file.

2. [Browserify](http://browserify.org) bundles npm modules together for running in web browsers. It statically analyzes code for `require` calls, and defines `require` in the browser bundle to return code it has found and packaged. Essentially, Browserify allows Common Form to use npm and Node's built-in module system to build web browser code.

There are lots of Common Form modules, which you can [find in the npm public registry](https://www.npmjs.com/search?q=commonform) and on [GitHub](https://github.com/commonform). I try to keep my packages as tiny as possible, with each performing a useful task for users or other packages. The best export just a single JavaScript function, with tests written right into the README file. [commonform-validate][commonform-validate] is an example.

## Packages

The packages I've written can be broken up into a few categories. Ignoring for the time being the packages used to run a Common Form API server:

### Object Schema Validation

Common Form is, at its core, a very simple schema for bits of contract text. Those simple parts can be composed nicely into full-featured documents, but the schema for each individual part is rigorously enforced.

[commonform-validate][commonform-validate] exports validation predicate functions for the core Common Form objects: forms, text, definitions, uses, blanks, references, and children. They enforce the schema for Common Forms.

[commonform-predicate][commonform-predicate] exports shorthand functions used to distinguish different kinds of content objects within forms. Those functions don't perform validation, which can be expensive, so they're a faster choice when code can assume a form object is valid.

### Content-Addressable Hashing of Form Objects

In order to ensure that hashing two equivalent forms produces the same digest, Common Form has to lock down how form objects are serialized and hashed.

[commonform-serialize][commonform-serialize] is a custom `JSON.stringify` that accepts only arguments made entirely out of `Object`, `Array`, and `String`. All valid Common Forms meet those criteria. The algorithm prints `Object` properties sorted by key, so equivalent `Object`s are always stringified in the same way. The output is a subset of JSON.

[commonform-hash][commonform-hash] exports the hash function used to create content digests. Currently SHA256. Works on Node.js and in the browser.

[commonform-normalize][commonform-normalize] (as in [database normalization](https://en.wikipedia.org/wiki/Database_normalization)) converts nested form objects into a [Merkle tree](https://en.wikipedia.org/wiki/Merkle_tree), returning a map from content digest to normalized form object and the Merkle root. This is the core function for hashing forms, whether on a server, at the command line, or in the browser.

### Rendering Forms Into Other Formats

#### Renderers

Renders take a form, a map with fill-in-the-blank values, and optional rendering options. They return a rendering of the form in another format.

[commonform-latex][commonform-latex] outputs [LaTeX](https://en.wikipedia.org/wiki/LaTeX).

[commonform-tex][commonform-tex] outputs [plain TeX](https://en.wikipedia.org/wiki/TeX).

[commonform-docx][commonform-docx] outputs Microsoft Word compatible Office Open XML (.docx).

[commonform-markdown][commonform-markdown] outputs really clunky [Markdown](http://commonmark.org/).

[commonform-markup][commonform-markup] generates (and parses) Common Form's own plain text markup format. I'll rewrite it with a [parsing expression grammar](https://en.wikipedia.org/wiki/Parsing_expression_grammar) someday.

[commonform-html][commonform-html] generates HTML4 and HTML5.

[commonform-terminal][commonform-terminal] outputs plain text with ANSI terminal color codes.

#### Rendering Helper Functions

As I built the renderers, I occasionally pulled common code out into separate packages.

[commonform-resolve][commonform-resolve] adds properties to forms and their content objects to indicate their numbering, whether blanks have been filled in, etc. Used directly or indirectly by nearly all renderers.

[commonform-number][commonform-number] adds properties to forms indicating their numbering using data that the numbering styles can convert to plain-text numbers.

[commonform-flatten][commonform-flatten] transforms a form into an `Array` of paragraph-like objects with depth and numbering properties. Used by renderers, like [commonform-docx][commonform-docx] and [commonform-terminal][commonform-terminal], that target formats that model content as a stream or list of elements.

[commonform-group-series][commonform-group-series] transforms forms' content arrays into lists of objects that are either paragraphs containing text, uses, definitions, references, and blanks, and series containing contiguous child forms. Used by [commonform-number][commonform-number], [commonform-resolve][commonform-resolve], and [commonform-html][commonform-html] (which doesn't number forms).

[commonform-analyze][commonform-analyze] recurses a form and produces a useful report about what headings, terms, and blanks are used, defined, and referenced, with relevant numberings showing where these things happen. [commonform-lint][commonform-lint] uses that report to do its structural integrity checks.

### Numbering Styles

Numbering styles are functions that take an [abstract numbering](https://www.npmjs.com/packages/abstract-numbering) argument and a flag for whether to return a full reference (like "Section 1(a)") or just a short number for a particular form (like "(a)"). They return strings.

[outline-numbering][outline-numbering] returns "Section 1(a)(i)" style strings.

[decimal-numbering][decimal-numbering] returns "Section 1.1.1" style strings.

[agreement-schedules-exhibits-numbering][agreement-schedules-exhibits-numbering] extends [outline-numbering][outline-numbering] for situations where a form contains an agreement, list of schedules, and exhibits in exactly that order.

[resolutions-schedules-exhibits-numbering][agreement-schedules-exhibits-numbering] extends [outline-numbering][outline-numbering] for situations where a form contains formal resolutions, list of schedules, and exhibits in exactly that order.

### Annotating Forms with Useful Messages

#### Annotators

"Annotators" take a form and return an `Array` of [annotations](https://github.com/commonform/commonform-annotations):

0. [commonform-critique][commonform-critique] --- Suggests style improvements. Uses [wordy-words][wordy-words], a list of wordy English words and phrases and their shorter equivalents.

0. [commonform-archaic][commonform-archaic] --- Points out archaisms in form text. Used by [commonform-critique][commonform-critique]. Based on [american-legal-archaisms][american-legal-archaisms], a list of common archaisms.

0. [commonform-lint][commonform-lint] --- Points out structural errors, like broken cross-references and extra defined terms.

#### Helper Functions

0. [commonform-phrase-annotator][commonform-phrase-annotator] --- Helper function for building annotators based on string searches. Used by [commonform-archaic][commonform-archaic].

0. [commonform-regexp-annotator][commonform-regexp-annotator] --- Helper function for building annotators based on regular-expression searches.

0. [commonform-treeify-annotations][commonform-treeify-annotations] --- Converts an `Array` of annotations, each of which has a `path` property indicating what part of a nested form it applies to, and creates a tree of the same shape as the form with lists of annotations embedded within. Used in the web interface at [commonform.org](https://commonform.org).

#### Command-Line Interface

[commonform-cli][commonform-cli] installs the `commonform` program with commands for hashing, rendering, and annotating forms.

## Getting Your Feet Wet

If you'd like to try a small project with Common Form to get your head around JavaScript or the architecture, here are a few suggestions:

1. Write an annotator that highlights pet peeve phrases or style choices. I'll be more than happy to help you add it to the command-line interface.

2. Tweak a renderer to better suit your style preferences.

3. Build a program that takes a form as input and outputs a useful summary of reference guide, like a table of contents, table of defined terms, or a graphic showing relationships between provisions.

4. Have a look at [the GitHub issues I've tagged "help wanted"](https://github.com/issues?utf8=%E2%9C%93&q=is%3Aopen+is%3Aissue+user%3Acommonform+label%3A%22help+wanted%22). I try and create issues for feature ideas or code improvements as they come to me.

[agreement-schedules-exhibits-numbering]: https://npmjs.com/packages/agreement-schedules-exhibits-numbering
[american-legal-archaisms]: https://npmjs.com/packages/american-legal-archaisms
[commonform-analyze]: https://npmjs.com/packages/commonform-analyze
[commonform-archaic]: https://npmjs.com/packages/commonform-archaic
[commonform-cli]: https://npmjs.com/packages/commonform-cli
[commonform-critique]: https://npmjs.com/packages/commonform-critique
[commonform-critique]: https://npmjs.com/packages/commonform-critique
[commonform-docx]: https://npmjs.com/packages/commonform-docx
[commonform-flatten]: https://npmjs.com/packages/commonform-flatten
[commonform-group-series]: https://npmjs.com/packages/commonform-group-series
[commonform-hash]: https://npmjs.com/packages/commonform-hash
[commonform-html]: https://npmjs.com/packages/commonform-html
[commonform-latex]: https://npmjs.com/packages/commonform-latex
[commonform-lint]: https://npmjs.com/packages/commonform-lint
[commonform-markdown]: https://npmjs.com/packages/commonform-markdown
[commonform-markup]: https://npmjs.com/packages/commonform-markup
[commonform-normalize]: https://npmjs.com/packages/commonform-normalize
[commonform-number]: https://npmjs.com/packages/commonform-number
[commonform-phrase-annotator]: https://npmjs.com/packages/commonform-phrase-annotator
[commonform-predicate]: https://npmjs.com/packages/commonform-validate
[commonform-regexp-annotator]: https://npmjs.com/packages/commonform-regexp-annotator
[commonform-resolve]: https://npmjs.com/packages/commonform-resolve
[commonform-serialize]: https://npmjs.com/packages/commonform-serialize
[commonform-serve-leveldb]: https://npmjs.com/packages/commonform-serve-leveldb
[commonform-serve-memory]: https://npmjs.com/packages/commonform-serve-memory
[commonform-serve-postgres]: https://npmjs.com/packages/commonform-serve-postgres
[commonform-serve]: https://npmjs.com/packages/commonform-serve
[commonform-serve]: https://npmjs.com/packages/comonform-serve
[commonform-terminal]: https://npmjs.com/packages/commonform-terminal
[commonform-tex]: https://npmjs.com/packages/commonform-tex
[commonform-treeify-annotations]: https://npmjs.com/packages/commonform-treeify-annotations
[commonform-validate]: https://npmjs.com/packages/commonform-validate
[decimal-numbering]: https://npmjs.com/packages/decimal-numbering
[level-commonform]: level-commonform
[outline-numbering]: https://npmjs.com/packages/outline-numbering
[resolutions-schedules-exhibits-numbering]: https://npmjs.com/packages/resolutions-schedules-exhibits-numbering
[wordy-words]: https://npmjs.com/packages/wordy-words
