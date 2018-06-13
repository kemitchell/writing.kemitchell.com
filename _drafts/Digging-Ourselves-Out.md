---
title: Digging Contracts Out of the Hole
description:
layout: post
tags:
- Common Form
- Contracts
- Law
---

Fellow deals lawyer, how many different choice-of-law clauses did you send out last year?

I have no idea, myself.  And for a professional wordsmith, I feel a bit a fraud.  Sure, choice-of-law is pretty humdrum.  But especially so, shouldn't I have _one_ choice-of-law clause, the best one I know of, for each state whose law I tend to choose?  It doesn't stop there, of course.  Bolt-on nondisclosure sections.  Warranty disclaimers.  Indemnities.  Indemnity procedures.  So many bits and pieces, all suspiciously _diverse_.  When I'm sending out turn one, shouldn't my best work read more consistently, across deals and over time?

I don't know how many choice-of law clauses I sent out last year.  But I will know this year.  I've invested in tools for the job.  Tools that make reusing my best bits efficient.  Tools for sharing that work, and improving it.  I want to put those tools in the hands of every lawyer who wants to improve the craft, right now, for free.

# Toolkit

Maybe, long term, Ken Adams ends up writing all our indemnification provisions, and contract drafting looks more like building an outfit from a catalog than altering garments picked up secondhand.  That would certainly work out more efficiently.  But how will Ken's work make it into our own?  When his views evolve---along with his language---will we all have to copy and paste from a blog or a book into a million far-flung Word documents?  How will we dissent, if he's wrong?  How will the next Ken Adams start _their_ schism, and publish their own ready-made language?

Computers.  Not because computers solve every problem---they don't---but because they're ideally suited to the task.  Not by intelligence, artificial or otherwise.  Computers are fundamentally dumb machines, and know nothing of contracts or their structure.  But a few simple tools, understandable by people and administrable by machines, will let us get the dirty work done quick, all while keeping our hands clean.

## Typing Conventions

Microsoft Word is where content goes to die.  The only way in and out is copy-and-paste.  Copy-and-paste is as rote as it gets.

When we paste clauses into our contracts, we know we can never stop there.  There's formatting to do.  Definitions and references to check.  Terms to replace.  Blanks to fill.  Alternatives to select and delete.  Computers could do all that mechanical work, if only they could recognize the structure of the text---subdivisions, definitions, term uses, references, and so on---as we do.

To enlist the computer's help, we need conventions for telling it structure, not just text and formatting.  In particular, we need a way to describe the boundaries of sections, articles, and other subdivisions, as well as where key structural elements like defined-terms, definitions, references, blanks, and headings appear.  We can do that with very simple typing programs that understand typing conventions.

For example, a definition from a data processing agreement under GDPR:

> \"\"Restricted Transfer\"\" means a transfer of \<Company Personal Data\> from any \<Company Group Member\> to a \<Contracted Processor\>, or an onward transfer of \<Company Personal Data\> from a \<Contracted Processor\> to a \<Contracted Processor\>, or between two establishments of a \<Contracted Processor\>, in each case, where such transfer would be prohibited by \<Data Protection Laws\> (or by the terms of data transfer agreements put in place to address the data transfer restrictions of \<Data Protection Laws\>) in the absence of the \<Standard Contractual Clauses\> too be established under {Terms for Restricted Transfers} or {Restricted Transfers}.

Terms in double-double quotes, like `""Restricted Transfer""`, indicate definitions.  "Restricted Transfer" is being defined.

Terms in angle-brackets, like `<Company Personal Data>`, indicate uses of defined terms.  "Company Personal Data" is being used, and we expect it's defined elsewhere.

Terms in curly braces, like `{Terms for Restricted Transfers}`, indicate references to other parts of the document, by heading.

Some provisions, such as this buy-sell clause from a stock purchase agreement, need fill-in-the-blanks:

> Subject to this agreement, on the date of this agreement or on another date agreed on by the parties (the \"\"Purchase Date\"\"), the \<Company\> shall issue and sell to \<You\>, and \<You\> shall buy from the \<Company\>, \[Number of Shares\] shares of the \<Company\>'s common stock (\"\"Your Shares\"\").

Placeholders in square brackets, like `[Number of Shares]`, indicate fill-in-the-blanks.  Here, the number of shares bought and sold.

These conventions enable computers to look at what you type, and understand its structure.  Knowing that structure, computers can check that all the terms you try to use are defined, that you define each term only once, and that every section you reference exists in your document.  With data indicating the section-and-heading structure of your document, computers can number and format documents automatically.  Upshot: No more technical edits.  No more dumb technical errors.

For an example, here is [a commercial NDA](https://commonform.org/edit?from=ad495b6fc0492c7faa7d95d3e24df376972219fd4c436b51bc1d3dcc022e9237) with all its structural elements typed out.  Here's [the same form](https://commonform.org/rxnda/b-2w-b2b/1e1c), formatted handsomely for the World Wide Web.  And [here's the same again](https://commonform.org/rxnda/b-2w-b2b/1e1c?format=docx), automatically formatted for Word, on demand.

We can go further, and use the computer to perform routine checks on content.  Here's [an orthodox settlement agreement under California law](https://commonform.org/forms/6e9a4a77f935b30123b86047fab3e56a5fa561a63c0e6a6789e527b473567ebb), automatically annotated with feedback about archaic terms, wordy phrases, and guidance from _A Manual of Style for Contract Drafting_.

Anybody's computer can perform those checks in real time, as they draft.  Real-time feedback will change the way you draft contracts.  Forget about formatting.  Forget about numbering.  Forget about keeping lists of defined terms, or a table of contents.  Computers are better at those things than you are, no matter how good you are.  And you have better things to think about.  Things the computer cannot do.

All these tools are free to use on [commonform .org](https://commonform.org).  If you'd like an account for saving drafts to the site, rather than just browsing them, [send me an e-mail](mailto:kyle@kemitchell.com).  I'll be happy to set you up and answer your questions.

## Contract Components

Typing out contract language in a consistent, computer-understandable way makes it easier to share.  But it doesn't necessarily make reusing language more efficient.  You can paste language into a form on [commonform.org](https://commonform.org), and you'll get immediate feedback about structural problems it has, in context.  But any kind of copy-and-paste remains a very manual process.  It doesn't do enough to make sharing, reusing, and updating bits of language automatic and seamless.

Folks with accounts on [commonform.org](https://commonform.org) can save work to the site in two ways.  One works a bit like Google Docs: Save a form to the site, receive a link to the form that you can bookmark, and either keep the link private or share it with others.  But account holders can also publish forms under their own names, for everyone to find.  Here's [a list of forms that I've published under my account](https://commonform.org/kemitchell), `kemitchell`.

I published each of those forms under my account name, as well as a project name.  Some of those forms, like [[`safe-discount`](https://commonform.org/kemitchell/safe-discount), a startup investment instrument, and [`slipstream`](https://commonform.org/kemitchell/slipstream), an agreement for software-as-a-service and licensing, are complete documents.  But other publications are mere snippets, meant to be reused as components of many forms.

For example, here is [a copyright "work made for hire" clause, with an exception to avoid unexpected results under peculiar California employment law](https://commonform.org/kemitchell/work-made-for-hire-unless-employment/1e1c).  I've used that component in the intellectual property section of one of my forms, [`fairshake`, a plain-language independent contractor-consultant contract](https://commonform.org/kemitchell/fairshake/1e1u2d#heading:Intellectual%20Property).  The site displays not just the text of the component, but also a note that it _is_ a component, and who published it.

You may also notice that the terms of the component in my form aren't _exactly_ the same as the terms in the component.  The component itself uses the terms "Work" and "Party Making Work".  The form replaces those terms with "New Intellectual Property" and "Contractor", the terms used throughout that form.

Thanks to the typing conventions, [commonform.org](https://commonform.org) knows which parts of the component are defined terms.  It also knows which definitions appear in the form.  It knows that the form reuses the work-made-for-hire language as a component, inserts its text automatically, and handles replacement of terms and references to make it fit in.  If the component contains _other_ components, like Russian nesting dolls, it handles insertion and replacement of those components, too.

The system works a bit like incorporation by reference, with the computer automatically turning references into text.  When you read a form that uses components on [commonform.org](https://commonform.org), you see both the text of each component, and also a note that it comes from a component.  When you download a Word copy, the notes disappear, and all you see is one, whole, consistent document.

## Reviewers Editions

Typing conventions and components make everyone with a [commonform.org](https://commonform.org) account a legal publisher, as well as a power shopper of legal language.  If I publish my preferred limitation of liability, anyone can seamlessly incorporate it into their own work as a component.  I can see what they've published, and reuse their work without pasting terms.

What happens when I find a way to improve my standard limitation of liability, and publish revised language?

[commonform.org](https://commonform.org) uses a system called [Reviewers Editions](http://reviewersedition.org/) to number revisions.  There are just four kinds of numbers to think about: editions, updates, corrections, and drafts.  The Reviewers Edition `1e` means "first edition".  `1e2u` means "second update to the first edition".  `3e2d` means "second draft of the third edition".  Don't belabor the notation now.  You'll pick it up by exposure alone.

As publishers update their language, they increase one Reviewers Edition number for each revision.  Which number they increase sends a clear message about the changes they've made.  When a publisher increases the edition number, say from `2e` to `3e`, they tell others using that language should review the whole new third edition, to make sure it still meets their needs.  When a publisher increases an update number, say from `5e1u` to `5e2u`, they tell users of `5e1u` to compare to the new update, and review the parts that changed.  Increasing a correction number, say from `4e2u` to `4e2u1c`, lets users know that _everyone_ using `4e2u` should use `4e2u1c` instead, often because it fixes a spelling or other technical or typographical error.  Drafts like `5e1d` allow publishers to float new changes for discussion, without telling anyone to use the new language yet.

Reviewers Editions primarily help drafters communicate about changes to other drafters.  But computers can also understand the basics signals they send.

For example, forms on [commonform.org](https://commonform.org) that use components can choose to use either specific versions of those components, or to automatically update with any corrections.  The `fairshake` consulting form I mentioned above uses `1e1c` of `work-made-for-hire-unless-employment` by `kemitchell`, with automatic updates.  If I find a typo in `1e1c` tomorrow, and publish a new `1e2c`, `fairshake` will incorporate that fix automatically.  So will any other form on [commonform.org](https://commonform.org) that opts into automatic upgrades.

What about revisions that result in new editions or updates, rather than corrections?

Anyone with a [commonform.org](https://commonform.org) account can subscribe to notifications about the forms they publish.  When a component used in the form gets revised, the site sends a notification e-mail.  The publisher can [compare new language to old online](https://commonform.org/compare/5fd90cf89aa4ee976583c0183dd6660a72bf22e86a3be0e8913f6622328fe24a/1b048f6c4cf0df69e364dd8bcc93a792b644aef243398d463a6202d1a0dbd43c), and decide whether or not to upgrade in their form.  In the next few weeks, I'll be working on simple pages that show possible upgrades and make it simple to upgrade with just a few clicks.

# Why?

As transactional lawyers, we understand the piece-part structure of contracts.  That understanding is widely held, but not really shared, and not effectively leveraged.  The most glaring manifestation is our failure to collaborate even with ourselves, on an individual basis, over time.  The costs of remembering what I've done before, and actually redeploying it, often outweigh the benefit I expect from replacing probably-good-enough with my current best.  Which is how so many of us end up hocking contracts, made to order, but from wilted, rotten language, and feeling like circumstance robs us of the chance to feel personally expressed in our work.  Even while our clients wince at the cost.

First-person failure sets us back a long way from effective collaboration.  Ideally, deals law would be a more social affair, with robust intercourse in ingredients, recipes, tools, and methods stoking competition at the cutting edge.  In other words, a bit more like other complex pursuits, from cookery to carpentry, no less complex at their pinnacles, and often just as competitive.  Even when _defined_ by competition, as in sport, other endeavors exact less collateral psychic damage, because camaraderie between bouts makes the practice itself rejuvenative.  Meanwhile, gaggles of lawyers flee their offices for bars also full of lawyers, where we drink and kvetch among the fellow afflicted to take out the sting of the day.  Substance-abuse CLE, and other symptomatic treatment, won't dig law out of its lonely hole.
