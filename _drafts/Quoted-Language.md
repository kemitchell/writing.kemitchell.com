---
title: Quoted Language
---

Around the middle of last year, shortly after my own personal "this is going to last longer than I thought" pandemic moment, I started a stack of notecards for a book about lawyers and language.  The premise: to describe and illustrate the profoundly bizarre relationship lawyers develop with words, and to make that available to ill-advised laypeople foolish enough to expose their brains to permanent damage.

I've set the project aside now, because I struggle to think of anyone I dislike enough to recommend actually such a book.  But light exposures pose far lesser risk.  Especially, I think, where large chunks of my audience who _aren't_ lawyers already suffer similar perversions.

Many programmers and many lawyers share a peculiar, brazen dexterity mixing imperative language for different contexts and audiences.  Most people develop an innate sense that things must or should be said one way in some circumstances, and differently in others, to get what they want.  They may manage dimensions of personal familiarity, choice of language in multilingual circumstances, high and low tone, dialect, slang, and so on.  But it is rare, in first person experience, to mix language meant for one context with language meant for another in a single expression at a single time.  Especially where one utterance refers to, or depends on, another kind.

Let me be concrete.

## Brackets Galore

The vast majority of any contract form is language spelling out the obligations of the parties.  These are the things the parties tell each other they will do and enlist a court to hold them accountable for doing.

However, there's almost always structural text, such as headings, too.  A term at the back of the contract often makes clear that such headings are for "convenience only" and do not make up part of what a court is supposed to construe when deciding a lawsuit.  In other words, the section tells the court to ignore what the parties wrote and could see.

Often nearby at the back of the terms, another section may specify that the word "including" precedes examples _without_ any intent to say those are the only examples, or the only kinds of examples, that might apply.  Still another section may set out a "severability" rule for what to do if a particular part of the contract turns out to be illegal or impractical to enforce.

All of this language is at least nominally addressed to a single audience: the court.

Those who only see "finished" contracts may be surprised to learn that lawyers' forms often include a whole lot of language meant exclusively for the parties, or their lawyers, to read and use.  And lawyers have developed all manner of syntactic and typographic conventions, albeit not formally standardized, to set this language apart.

The simplest examples indicate blank spaces that need to be filled.  Frequently these appear as long underlined spaces, as on signature pages:

> Acknowledged and agreed.
>
> SomeCo, Inc.<br><br>
> By:    \_\_\_\_\_\_\_\_<br>
> Name:  \_\_\_\_\_\_\_\_<br>
> Title: \_\_\_\_\_\_\_\_<br>
> Date:  \_\_\_\_\_\_\_\_

But there is also a convention for setting blanks [in brackets].  Within brackets commonly appear short hints or even longish instructions on what to type over them.  Thus:

> At the Closing, the Purchaser will deliver payment of $[purchase price in dollars] (the "**Purchase Price**")...

Similar conventions prevail for various notes of a functional nature.  For example, say that a form for contract consulting includes a non-compete agreement.  During a negotiation, the consultant negotiates that sections away.  Rather than renumber every section that follows it, and then update any affected cross-references to sections by number, the consultant's lawyer may write:

> 13\. **Noncompete**. [Intentionally Omitted]

The parties then end up signing a complete document with terms that includes bracketed language.

This is also common with even more mundane uses.  For example, it's fairly common to see a bracketed marker at the end of the final page of a written agreement, just before the signature pages:

> [Signature pages follow.]

This is the remnant of a pre-digital kind of security device.  The idea being that no one can use a typewriter or a pen to slip new terms in after the final agreed terms, in remaining white space.

In the same vein, it's quite common to see written agreements that refer to attached "exhibits" or "schedules".  These are often other forms.  So, for example, an agreement for the purchase of a stock option might attach the form of an agreement for the purchase of the underlying stock as an exhibit.  The brackets come in when the content of the stock purchase agreement isn't actually included in the form of the option purchase agreement.  Instead, we see a page at the back like:

> **Exhibit A**
>
> **Form of Stock Purchase Agreement**
>
> [See attached.]

In the olden days, this would function as a reminder to the lawyer preparing the final contract package for signatures to throw the placeholder exhibit page in the trash and slip in a copy of the relevant form.  Nowadays, even when things do still get printed out, the brackets often stay, and another file with the form is simply dropped into the electronic signature request.

Personally, I'm in the habit of using {curly braces} for fill-in-the-blanks and other instructions that should _not_ end up in a final document sent out for signature, and [square braces] for notes, like [Intentionally Omitted] or [Signature pages follow.], that should.  That way I can do quick searches for curly braces to be sure I haven't missed any.

## Imperative to Who?

At first glance, a programmer is likely to see all these bracketed bits as code comments.  They aren't part of the operative part of the text, so they're set out by special syntax accordingly.  But many are, in fact, very operative.  They're instructions.  They aren't instructions to _a court_ eventually enforcing the agreement.  But they are very much instructions to the parties or their lawyers, on their way to closing the deal.

In that sense, a written agreement is a "program", or set of instructions, to more than one person, and more than one kind of lawyer, at more than one time, in more than one kind of context.  If things go badly, one lawyer will be a judge, arbitrator, or other designated "neutral", and their job will be to render a legal decision to resolve the dispute.  At other times, and in the run up to signing especially, the parties themselves and the lawyers for the parties will review and revise the document, potentially following instructions left for them in the text by the one who drafted it.

The analogies here are to concepts like "compile time" versus "runtime", preprocessors, code generators, macros, closures, and [quoting](https://en.wikipedia.org/wiki/Lisp_(programming_language)#Self-evaluating_forms_and_quoting) in LISP- and stack-based languages.  Lawyers do that, too, and rather fluently.

## Engineering

All of this gets a lot more interesting when we role-play the part of the _drafter_ of a form or other template, rather than the user.  Now all these possibilities of addressing imperative language to one person, time, and context or another become _choices_.

Consider, for example, the humble contract template.  Let's run with the consulting contract example.  Deep in the boilerplate at the back of the form, we might find a section with a heading something like "Waiver of Jury Trial".  This is a very common, general contract term used to tell a court that the parties agree to have any lawsuits heard and settled by a judge and a judge alone, without a jury—in a "bench trial".  Parties frequently add these kinds of terms because they think litigating that way will be more efficient.  Doing without a jury means not hiring a jury, and judges might more readily understand the context or the complexities of the legal terms involved.

California law does not enforce waivers of jury trial.  It is considered a fundamental right to have one's lawsuit heard before a jury of community members.  But California does allow courts to appoint "special masters", experts working for the court, rather than the parties, to help them come to specific conclusions, often about technical matters.  It's not exactly the same as having a judge hear the case without a jury.  And it's not always practical or available.  But some doing business under California law prefer to specify for them, for many of the same reasons deals under other states' laws often say judge only.

To deal with this in our contract consulting template, we need to incorporate some simple logic: if the contract is governed by California law, ask for a special master, otherwise agree to a bench trial.

There's no widely followed, rigorous convention for how to express this in a contract form, syntactically or substantively.  But it's fairly common to see drafters essentially shoehorning this logic into the convention they have: brackets.

> [Option A (California law governs): **Special Master**.  The parties agree....]
>
> [Option B (other law governs): **Waiver of Jury Trial**.  The parties agree....]

When the form assumes a particular "document assembly" system, the industry jargon for a "wizard" that asks a series of question and spits out a document based on a template, reflecting the answers, the drafter instead uses whatever convention, plugin, or separate software allows them express conditionality.

HotDocs was the storied stalwart among big law firms when I worked at a big law firm.  All its source files were RTF.  ContractExpress was the new, fancier, somehow even more expensive option, with a slicker UI.  The Form Tool's plugins for Word are my go-to recommendations for solo and small-firm lawyer colleagues who don't write software for fun.  My own build chains tend to use M4, Mustache, or perhaps embedded JavaScript is much more than if-then-else is needed.

But of course there's still another option: write the logic into the terms, and rely on the judge to "run" them.  Thus:

> 13\. **Lower-Cost Resolution**.
>
> (a) If this Agreement is governed by California law, the parties agree to appoint a special master.
>
> (b) If this Agreement is not governed by California law, the parties agree to waive their right to trial by jury.
