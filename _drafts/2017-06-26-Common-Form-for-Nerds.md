---
title: Common Form for Nerds
description: a sermon to the choir, for the salvation of their lawyers
layout: post
tags:
- Common Form
- Contracts
- Law
- Open Source
---

I've been working on an open-source software project called Common Form for a few years now.  The goal of Common Form is to build simple, reusable software tools to make legal contract drafting more open and collaborative, so folks end up with better contracts.

Anyone who works as a contracts lawyer, or with contracts lawyers, could name a half-dozen ways the practice could improve, off the cuff.  It's significantly tougher to build the tools and techniques to make those changes.  But the hard part is explaining how those tools and techniques can make a practical difference, so folks might actually use them to improve practice.

This is not the blog post where I solve that hard problem.  It's not even the blog post where I _describe_ or _consider_ that hard problem.  This is the blog post where I explain what I've built to those most capable of understanding it, and most likely to find merit in it---to other computer programmers.

## Make it Data

I liked "Code is Law" the first time I read it in Larry Lessig's book, and I still kind of like it, even though I know it's not really true and too cute by half.  At least as it gets bandied about by folks who write one, but not the other.

Going into law with a background in software, I was primed---too primed---to see all kinds of parallels.  They only go so far.  In the end, code is made of bits encoding discrete operations on still more, equally discrete, bits.  If something acts less than discrete on the way from input to output, that's an error, and the system is defective.  It ceases to be a "computer", as we intuitively understand that terms.  Contracts are made of natural language, a more fluid medium describing our very subjective experiences of life in all its abundant chaos and ambiguity.  "Does not compute" is the norm, albeit one we're taking chips out of.

That doesn't mean tricks and wisdom can't or don't translate from code writing to contract writing and back.  Contract language is more structured than most prose, and it uses a number of formal mechanisms more discreet, as far as they go, than typical writing.  "Articles", "Sections", enumerated list items, and other subdivisions of a contract nest, forming tree-like structures, at least when carefully tended.  Cross-references point to specific points within those trees.  Definitions give meanings referred to by use of the defined term.  And so on.

It's all a bit LISP-like, if you replace every level of indent with the appropriate parenthesis.  So even if all the rest of the ASCII content of a legal contract is "natural language", and therefore fuzzy and inscrutable to computers, at least so far, we can still encode those formal aspects of a contract, so software can store, process, combine, and otherwise manage their careful handling.

Here's a popular open-source-software license, Apache Version 2.0, broken out in this structured way:

<https://commonform.org/forms/5d912ab4e9be029a2b3d137aefeb918ad1f001463e0f554ca24008dc70494eb0>

And here it is, encoded in JSON:

<https://api.commonform.org/forms/5d912ab4e9be029a2b3d137aefeb918ad1f001463e0f554ca24008dc70494eb0>

Every subdivision---article, section, subsection, list item---has become a _form_.  Forms contain _content_.  Content is ASCII text strings, definition object, term-use objects, cross-reference objects, and fill-in-the-blank objects, as well as child-form objects that contain another form, with an optional heading.  Forms can also be "conspicuous", since formatting some legal terms differently than others, like the ALL CAPS parts of licenses.

Believe it or not, coming up with that schema---implemented [here](https://www.npmjs.com/package/commonform-validate)---and its semantics---terms and form headings are independent, case-sensitive namespaces, blanks are untagged, and so on---was the hardest part of the whole project.  I'm still not entirely sure I've got it right.  I made a lot of choices.  Two goals guided those choices:

1.  Make sure it's possible and straightforward to encode just about any well-structured form contract in current use, with minimal "shoehorning" into the strictures of the schema.

    There are better ways to structure contracts than what we do now, especially if we assume they'll be written, made, and managed with computers.  But we need a way to get there.

2.  You noticed the cryptographic digest in the links, didn't you?  You know where this is going.

    Try to make one, and only one, natural and proper encoding of any meaningful chunk of contract within the schema, so we can hash and treat the digest as identifying the language.

As in Git, Common Form uses hashes of leaves and branches to compute hashes of their parents.  Any contract and piece of contract corresponds to a hash, as in Git.  So here's just the give-others-a-license clause of Apache 2.0:

<https://commonform.org/forms/dc999d8d03048c36d4dc1a43e9ecddc973315bf61cd54e35c1d17086519e8fa9>

And here's the "Redistribution" section that contains it:

<https://commonform.org/forms/3dc7e971e2a334442139ac08e2efa1506a00e01e459efee067654b5201114116>

And here's the whole license again:

<https://commonform.org/forms/5d912ab4e9be029a2b3d137aefeb918ad1f001463e0f554ca24008dc70494eb0>

Unlike Git, Common Form uses SHA-256, rather than SHA-1.  More crucially, there is no distinction between types of data in Common Form.  Git has trees (directories) and blobs, hashes both, and stores them in the same hash-addressed, key-value store.  Common Form has only _forms_, which contain content, like Git blobs, but also inline links to other forms by hash, like Git trees.  Like Git trees, but unlike Git blobs, Common Form forms must conform to a strict schema.  There is no unstructured, hash-addressed data type in Common Form.

## Drudgework

Common Form's well-defined schema enables Common Form tools to automate all the most rote, annoying parts of contract drafting:

1.  Check every term used in the contract.  Is each one defined somewhere?

2.  Check every cross-reference in the contract.  Is it clear where it points?

3.  Given a tree, format it, contract-style.  Don't screw up any indentation, text styles, &c.

4.  Fill all the blanks in the form with these values.  Tell me if any remain blank.

5.  I think I've seen this form before.  Tell me if it's identical to this other form, or if it's different, how it's different.

In other words, because the schema ably represents the dull, formalistic, discrete conventions of contract drafting that produce the most rote, error-prone drafting chores, Common Form makes computers just as capable of doing the annoying contract chores as coding chores.  It's even easier to write these programs for Common Form data than most computer code, other than some LISPs, because there's no grammar to write or parser to generate.

Programs that _do_ focus on the natural language, but only in discrete chunks, like words and phrases, are also easy to write.  Colleagues have been particularly interested in programs that [call out needlessly word choices](https://www.npmjs.com/package/commonform-wordy), [mock dusty archaisms we can't seem to stop using](https://www.npmjs.com/package/commonform-archaic), and [identify one-hundred (100) percent pointless footguns](https://www.npmjs.com/package/doubleplus-numbers).  Crap work many lawyers spend a lot of time worrying about, and still screwing up, because they're human, gets delegated directly to the computers.

The result is a pretty compelling suite of `lint`-like tools that compose nicely and make the freeform nature of contract drafting a lot more manageable.  I have personally made countless changes to my own contracts under the unflinching eye of these programs, many of which I wrote myself.  To get a sense, click a few flags in the margin of this decidedly old-school contract form:

<https://commonform.org/publications/kemitchell/orthodox-california-release-for-payment/latest>

I've released quite a few open legal forms that I'm very proud of.  Most of these involved so much original writing, or so much rewriting and restructuring, that I couldn't imagine finishing or having sufficient confidence in them to make a viable project.  The capacity for reuse, recombination, and a kind of software-enabled continuous integration of sorts rings all the programming bells.

## On Rails, Off the Rails

That's where things went very right, and very wrong.  A [command-line tool](https://www.npmjs.com/package/commonform-cli).  A [markup language](https://www.npmjs.com/package/commonform-markup).  A [templating preprocessor](https://www.npmjs.com/package/cftemplate).  [Rendering to lesser formats](https://www.npmjs.com/package/commonform-docx).  [Numbering schemes](https://www.npmjs.com/package/abstract-numbering).  The end result?  [Increasing large `Makefiles`](https://github.com/Ironsides/ironsides/blob/master/Makefile) that got a lot of work done, which even other programmers, to say nothing of other lawyers, wouldn't find very approachable.

I run Linux on all my machines, and love Unix tools.  I had an itch, I found a way to scratch it, and I automated the bejesus out of it---basically built my very own battery-powered, Sharper-Image-esque back scratcher.  Highly effective.  But too nerdy to figure out, or perhaps be seen with.

## Realism

The only vaguely realistic part of all of this was JavaScript.  It's a silly language.  But it works in web browsers and writes nice web servers.  It was clear from the get-go that's where the software had to go, if other lawyers and clients were ever going to use it.

The bridge between what I want to use, and what I actually need to write to make a damn difference, is the back end.

There is an [Node.js API server](https://www.npmjs.com/package/commonform-server), using a purpose built, flat-file [database](https://www.npmjs.com/package/tcp-log-server), running at <https://api.commonform.org>.  It's a mashup of GitHub and a package repository like npm, with form storage, projects, versioning, comments, and notifications.

The back-end server stores forms.  It's easy enough to pull those down for command-line clients.  But the real payoff is a web interface.  That's <https://commonform.org>.

It's a directory browser for form publishers and their projects.  It's a form viewer, with built-in support for filling in blanks and saving Word files, all client side.  In fact, it's all client side.  The only back-end trickery is aliasing, redirecting all paths back to the same HTML, so JavaScript can show what needs showing.

Unfortunately, it is also an editor.  A structured editor.  Using `contenteditable`, which I'm not entirely convinced is a terrible idea in this case.

## Indulgent Futurism
