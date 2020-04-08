---
title: The JavaScript Joke Was on Me
description: or, a few things learned the hard way
layout: post
tags:
- JavaScript
- Programming
---
I am not any good at writing JavaScript packages, but I'm not as bad as I used to be.

Here are some things I think I know about writing JavaScript packages for Node.js and the browser.  None of this comes from "first principles".  I screwed each of these things up over and over again until I noticed a pattern in the pain.  May you be spared!

<!--jump-->

## Primitiveness is Bliss

New package?  Use the first item below that provides just enough to get your job done.  If you're between two choices, shrink the job to fit one size down.

1. A JSON data file.  Yes, you can do this.  [Node.js will require it][Node.js Modules] just fine.  npm will package it with `{"main":"index.json"}` in `package.json`.  Use a `prepublish` script to generate the JSON if you like.
2. A single function that takes arguments and returns a useful object.
3. A single function that takes arguments and mutates one of them.  Mention what gets worked over in `README`.
4. A single function that takes arguments and a callback.
5. An object constructor function with methods on its prototype.
6. An object constructor function for an [event emitter][EventEmitter].
7. An object constructor function for a [stream][readable-stream].
8. A function or object that apes the interface of a related Node.js core module, like `fun().update(a, enc).digest(enc)` for a hash function.
9. An object whose only properties are functions described by (2), (3), and (4).  Publishing this kind of thing without a `README` is asking for trouble.
10. Are you _sure_?

[Node.js Modules]: https://nodejs.org/api/modules.html

[EventEmitter]: https://nodejs.org/api/events.html

[readable-stream]: https://github.com/nodejs/readable-stream

These are rudiments that folks who use JavaScript and Node.js have to learn and use whether they ever see your code.  They aren't perfect, but collectively, as a community, we know their flaws better than we'll ever know the virtues of a thousand other good patterns.

And they represent a pretty powerful menu of abstractions.  At the low end, they're very approachable.  At the high end, they play nicely with the single-threaded, event-reactive model of JavaScript, which Node.js purposefully exploited.

## Stick to the Obvious

Whenever possible, use functions of plain `Object` maps and `Array` lists of `String`, `Number`, `true`, `false`, and `null`---stuff you can round-trip with `JSON.parse(JSON.serialize(data))`.  If you really need binary, `TypedArray`.

JavaScript is a degenerate LISP.  This is what's left...plus `TypedArray`.

Avoid esoteric and cutting-edge language features whenever possible.  The latter include:

- any creative use of `this`, `bind`, `call`
- superficially appealing trivia, like `Object.freeze`, truthiness quirks, and loose equality
- inheritance deeper than one programmer-defined prototype
- returning or yielding data structures peculiar to a third-party library your users aren't likely to know well already
- `NaN`
- giving `undefined` specific meaning in context
- singletons
- any new language feature you have not seen someone else use tastefully in boring, important code

## Name Things Obviously

I am many times guilty of "clever" package naming.  And I have done the time...picking through my own profile pages trying to remember what I called my own code.

Fortunately, none of those ill-named packages are in much use by anyone else.  That would have put every nonnative speaker of English within their rights to sock me in the stomach.  All for names that didn't turn out very clever, after all.

There is an alternate universe where folks use npm, but everyone uses descriptive package names in their own namespace.  Things are better there.  Did I mention everybody sets `license` in `package.json`, too?

## Name Things, Obviously

Give variables and functions descriptive names.  People are very good at learning and using words and phrases.  Make opportunities to name more code.

If you catch yourself "translating" a concept into a long boolean expression, method call chain, or numerical computation, type `var` and a summary first.  Modern runtimes are not going to punish you for lifting an `if` statement's condition out into a variable.  Nor will they help you remember what `x` is, `n` does, or `buf` is meant to buffer.

`function` is a painfully long keyword that makes a made dash for your column limit every time you type it.  But seriously consider naming every function you write, even arguments to higher-order functions like `.map()`, `.filter()` and friends.  Break to a new line if you have to.  The most likely victim of failure here is you.

Maybe coders you idolize use stubby, mean-nothing variable names.  They may have faced a language barrier, or come up in a professional or academic context where short-name conventions were stronger. Maybe you fear, as I once did, that approachable code opens your work mode widely to criticism.  You'll be fine.  Writing code that's _worth_ criticizing is the challenge.

## The Async Gets in Everything

If you export a function that takes a function argument, someday, somebody, somewhere is going to want to pass a function that takes a callback.

Be kind to that person.  It's probably future-you.

## The Streams Must Flow

If you export a function that takes an argument of variable size for storage, transformation, or reduction, someday, somebody, somewhere is going to want to stream that data in.

Don't beat yourself up if you have to read the [readable-stream] doc again.  Everybody does it.  [It's a thing][streams-wg].

[streams-wg]: https://nodejs.org/en/about/working-groups/#streams

## Nobody Wants More Files

For packages, the fewer files, the better.  More than one Node.js module in a package is a warning sign.

This rule doesn't apply to projects that are really about gluing lots of other packages together.  There may be too much "glue" for one file, as there is in most website and back-end server projects.  If you've got squeeze-out, go ahead, clean it up.

There's no avoiding files for some features and services.  If you want to use [Travis CI], you need a `.travis.yml`.  If you want npm to `PATH` a [bin script], make a separate file with [shebang].  Separate your tests, because nobody wants to load those when they `require()` your code or pack their browser bundle.  Finally, some community conventions, like `README` and `LICENSE` files, are worth honoring.

[shebang]: https://en.wikipedia.org/wiki/Shebang_(Unix)

[Travis CI]: https://travis-ci.org

[bin script]: https://docs.npmjs.com/files/package.json#bin

Resist [configuration file accretion][deflect].  Express your personal preferences in your home directory and standards that apply to all involved---style checkers, tests, and coverage tools---in your test scripts.  Use `{"files":["index.js"]}` in `package.json` and global `$HOME/.gitignore` for common tooling byproducts.  Try [a style checker without configuration][standard], or stop caring about code style to begin with.  Set code coverage thresholds via command-line flags in [run scripts].

[deflect]: https://github.com/kemitchell/deflect.js

When your eyes no longer jump right to the filename you need, start asking what can go.  Some things were probably "fashionable" when the cruft piled up.  Have they held up?  If you need a pager to read `git ls-files` for your package, you're hoarding.

[standard]: https://www.npmjs.com/packages/standard

[run scripts]: https://docs.npmjs.com/cli/run-script

(Side Note:  I've put test suites for many of my packages, like [spdx-expression-parse], right in the `README`s, literate programming style.  [Tools][defence-cli] pull the code out and pipe to Node.js.  So far, so great, but I'm not yet ready to recommend it universally.)

[spdx-expression-parse]: https://www.npmjs.com/packages/spdx-expression-parse

[defence-cli]: https://www.npmjs.com/packages/defence-cli

## Use a Free CI Service

I use [Travis CI], mostly via the [Ruby CLI].  I like it very much.

[Ruby CLI]: https://rubygems.org/gems/travis

The important thing is to make sure some remote machine is testing your code from a blank slate on multiple runtimes, without the dubious benefits of your local working tree, `node_modules`, and configuration.  There is nothing you can do to completely stop screwing this stuff up, so have an automaton mock you discreetly when it happens again.

## Say "No" to Semantically Meaningless SemVers

[Semantic Versioning][semver] is swell.  It gives meaning---ehem, semantics---to version numbers.

Except major version zero.  Major version zero is a put-on:

> Major version zero (0.y.z) is for initial development. Anything may change at any time. The public API should not be considered stable. --- [Semantic Versioning 2.0.0, section 4][semver]

[semver]: http://semver.org/

Do not user major version zero.  Just go straight to `1.0.0`, and expect to hit `2.0.0` the same day.  You can have as many version bumps as you want.  Ain't nothing wrong with double-digits.

`npm version` makes this easy. `npm i -g np` makes it painless.  You can even get away without release notes if you're sneaky...but you didn't hear it from me.

---

To so many friends and fellow programmers who've taught me so much these past few years: Thank you.  These are my words, but they're ideas that belong to many, perhaps least to me.  The mistakes and blind alleys are mine.  [Let me know!](https://twitter.com/kemitchell)

I look forward to chuckling at this a little further on down the line...
