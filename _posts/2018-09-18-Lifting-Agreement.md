---
title: Quick Read of Tidelift's Lifting Agreement
description: nits picked in the developer terms for a new pay-the-devs company
layout: post
tags:
- Open Source
- Contracts
- Intellectual Property
---

**Reading this blog post is no substitute for talking to a lawyer who can assess your personal situation, review Tidelift's current, updated terms, ask you the right questions, and stand professionally accountable to you for resulting advice.  I will _not_ be your lawyer, or professionally responsible to you for legal advice, just because you read this blog post.**

[Tidelift](https://tidelift.com) is a start-up company trying to broker sideline service contracts between large corporate consumers of open source software and open source maintainers.  In conversation, I've described them as a kind of "adapter pattern" bridge between the enterprise and maintainers.  I've also generalized their approach as selling the future, or promises about work you _will_ do, as opposed to the past, or the work you've already done.  Dual licensing, and [License Zero](https://licensezero.com) especially, help developers monetize their past.  Which is why a single maintainer or project could conceivably take both approaches concurrently, as Tidelift themselves have pointed out.

A few days back, I noticed that Tidelift published its form contract for deals with maintainers.  Their lawyer's a friend and allied colleague, but I've resisted peppering him with all my questions about the model, which I take it they are still figuring out.  So I'm curious.  And of course I had to have a look at the terms.

Overall?  Not one whiff of evil.  But not many details, either.  Especially on my major question:   What, exactly, do Lifters sign up to do for Tidelift customers?  Evidently, this might be clarified in other documents, including attachments to the agreement not made public.  Tidelift have published some [documentation](https://tidelift.com/docs/lifting/tasks-overview) on point.  But it's not exactly sure how those tasks get papered, assigned, or completed, or how they connect to compensation.  Frankly, I'd be surprised if Tidelift have figured that out yet.

As for what we see in the agreement, a few first-read thoughts follow.  My headings correspond to section headings in the agreement.

## How will you identify yourself to Tidelift?

I don't think Tidelift mean to say that you have to provide _access_ or _credentials_ for your "revision control service accounts", but it would be nice if they clarified.  Scary thought.

## What can Tidelift do with that identifying information?

Maintainers really ought to read Tidelift's privacy policy.  Really-really.

I haven't yet.  Hopefully soon.

## Can Tidelift reject your application to be a Lifter?

This section describes an "application".  For what?  A contract?  Perhaps the maintainer fills out the Information Form, agrees to the terms unilaterally, and hands Tidelift an option to accept or not to accept, on their end?

That's mechanics, not substance.  But I scratched my head a few times.

## How much will you be paid?

The form doesn't actually say.

It does say  that Tidelift gets more or less total discretion to pay you what they please, or presumably even not to pay you, if you're deemed unworthy.  The payment policy this section refers to isn't public, as far as I can tell, but the snippet "then-current" implies it can change.  There aren't any specific rules for how or when that can happen, or how Tidelift have to notify of those changes.  As a maintainer, I'd want that transparency.

## How will you be paid?

Presumably, in arrears.

What happens if Tidelift makes a mistake computing fees, according to its policy?  How can the maintainer dispute a calculation, or the inputs to it?  Will Tidelift make that calculation, or its inputs, transparent?

If there are costs of payment method, who bears them?

What if Tidelift doesn't pay on time?  Late-payment interest?  Costs of collection?

## Do you need to grant Tidelift any rights to your software?

The answer here is "no".  And good on them for saying so, explicitly.

I think "yes" would also be an acceptable answer, if implemented correctly.  That might solve some other issues around enforcement and forgiveness, addressed below.

## Will you give Tidelift Subscribers a chance to fix their mistakes before suing them for violating the license on your open source code?

This section essentially writes the brand new [GPL Cooperation Commitment](https://gplcc.github.io/gplcc/) into the contract with Tidelift.  A few thoughts there:

Section 9.5 says "no third-party beneficiaries".  I'd read the combination to mean that breaking this commitment gives Tidelift a breach-of-contract claim against you, but doesn't do anything directly for the Tidelift subscriber.

Why not just have Lifters sign the Cooperation Commitment?  For one, it only applies to GPLv2, LGPLv2.1, and LGPLv2, while the Lifter's project may use any other license.  The Commitment also applies to all projects, where this commitment in the Lifter Agreement would only cover the "Project" covered by the agreement.

There is some awkwardness in applying the Cooperation Commitment language to other licenses.  It's not an expectation open source consumers have for, say, common permissive licenses, like MIT, BSD, and Apache.  The only meaty condition of those licenses is attribution, and open source consumers self-aware enough to sign up for something like Tidelift will already be well aware of that near-universal requirement.

A few nits in the language:

1.  The phrase "termination of your Project's license" is oddly specific, legally speaking.  It's GPL-speak.  What about enforcement for failure to satisfy conditions?  That's not termination, per se.  It's just infringement.
2. "Defensive Action" covers actions "initiated by the Subscriber".  What about their affiliates?
3. The second paragraph tracks the original language of the Cooperation Commitment in giving grace for first-time offenders, where first time means first time getting called out for a violation _by the Lifter in particular_.  A company may have trampled the exact same license a hundred times, and got a hundred violation notices, but if notice number one hundred and one is the first they've seen _from you_, they're still entitled to a pass if they cure in thirty days.  This is more a criticism of Cooperation Commitment, but Tidelift has a free hand in their own terms.

## What promises do you make about your contributions to the software?

Here's the real meat of the thing, at least in the terms we can see.  There is an exception to my generalization of Tidelift as monetizing open source contributors' future tense.  "Lifters" also give a promise about their past work, in the form of a certification, based on the [Developer Certificate of Origin](https://developercertificate.org/) originally drafted for the kernel, that they had the rights to contribute what they did.  By "contributions you have made", this promise, or warranty, covers all of a contributor's past work in the project.

Oddly, it doesn't seem to cover contributions you make _while your Tidelift contract continues_.  That's good for the Lifter, but frankly, I think it would be plenty reasonable for Tidelift to bring contributions under the warranty all during the term of the contract.  As reasonable as requiring an up-front payment for the Lifter, as compensation for granting the warranty for preexisting contributions, and some fixed, recurring, but probably small payment during the term, for new contributions coming under.  Unless the project already uses DCO or another affirmative contribution-license recording mechanism.  Which creates a somewhat perverse incentive not to.

Some projects make a living selling just warranties, especially the kind of warranty Tidelift takes here.  [SQLite](https://www.hwaci.com/cgi-bin/license-step1), for example, though they back it up with indemnity, closer in line with proprietary practice.  For those playing along, standard private licenses sold through License Zero do _not_ offer such a warranty, but could.

## What promises do you make about the quality of the services you provide?

The phrase "good and workmanlike manner" is one of those classic legal placeholders, which all lawyers see and use, and basically none can adequately explain.  I don't believe it has any specific, predictable meaning.  If you obviously screw up, by basically any sane standard, they can point to it.  But frankly, Tidelift can terminate your contract quickly for no reason anyway.

## What can Tidelift do if you violate your promises?

Basically, they can dock your pay, terminate your contract, or, crucially, _have you do the work again_.

We don't know what kind of work this is going to be, to begin with.  But if you're trying to assess how much work you're signing up to do, this language is relevant.

## How long does this agreement last?

The term of the agreement "will automatically renew", but the terms don't say for how long.  A period as long as the initial term?  Month-to-month?

Month-to-month would make sense, considering how quickly both sides can terminate.  But that being the case, why have an initial term to begin with?  Run it month-to-month, like a lease or an independent contractor agreement.  That would also avoid misleading Lifters into believing they're locked in with Tidelift, and Tidelift is locked in with them.

## How and when can this agreement be terminated?

Either side can walk away with thirty days' advanced notice.

Tidelift calls out violations of their code of conduct, as well manipulating and gaming behavior, specifically, and put them on a faster, ten-day termination track.  They're using usage measurement tools within subscribers' development environments to calculate payments.  They don't want anybody making that harder for them.

## What parts of the agreement will continue in effect if the agreement is terminated?

Good news and bad news.   By longstanding lawyerly tradition, bad news first.

This section provides that section 5.2, which gives Tidelift the right to dock you, terminate you, or make you reperform when you perform services badly.  Only one of those makes sense after termination: reperformance.  You may get called in to redo work, even after your contract terminates.  Depending on what services you promise to do, that could be a lot of work, or making momentous changes to your project.

The good news is that this section _doesn't_ say that the DCO-like warranty about your contributions to the project survives the term.  I would read that to mean that  even if that warranty _were_ read (or revised) to apply to contributions during the term, it _doesn't_ apply to contributions you make after your Tidelift contract terminates.  And that Tidelift's ability to hold you accountable for breaches of that warranty, whatever it covers, stops when your contract does.

## Can others perform the services for you?

This section prevents you paying other people to do the work you're supposed to do, but leaves open the possibility you might get others to do that work for free.  I could see that playing out well---as mentorship---or not so well---as exploitation.

## What is Confidential Information?

The nondisclosure agreement in this agreement is _one-way_, benefiting Tidelift only.  Tidelift does _not_ promise to keep your information confidential.  Depending in part on what their privacy policy says, they might be able to publish your earnings, to give an example.

If I were Tidelift, I'd add the usual statements for equitable remedies, to make sure the company can get a court order to stop unauthorized disclosure on the double, without having to argue that money damages would be enough to make it whole.

## What other legal terms apply to this agreement?

Mostly boilerplate, but in context, this one's important:

> There are no third-party beneficiaries.

In other words, only Tidelift and the Lifter can enforce the terms of the agreement in court.  Tidelift "Subscribers"---the companies paying Tidelift---can't claim the benefit of the DCO-like warranty or the Cooperation Commitment-like grace policy directly.

Unless, perhaps, Tidelift assigns the contract.  Which this section also makes clear Tidelift can do.
