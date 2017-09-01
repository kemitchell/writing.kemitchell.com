---
title: Prescription Contracts
description: thinking about direct lawyer guidance on rxnda.com
layout: post
tags:
- RxNDA
- Contracts
- Confidentiality
---

One of the foundational ideas of [RxNDA](https://rxnda.com)---and an inspiration for the name---was the idea of attorneys "prescribing" form contracts for repeat self-administration by their clients.  Lawyer, like a doctor, prescribes with specificity.  RxNDA, like a good pharmacy, faithfully and accurately dispenses.

I'd like to talk about that concept, sketch a few thoughts on how I might implement it for nondisclosure agreements on rxnda.com, and delve a bit into why that turns out to be a deeper and more sensitive challenge than I expected.  And I'd like to welcome your feedback as to what you'd find useful, and how I should go about it.

A very short survey of the playing field.  Some contracts are one-offs, and some are, ideally, repeats.  A merger agreement for the purchase of a substantial business---probably a one-off, probably in some aspects "bespoke".  A license agreement for routine sales of a software product---perhaps just as bespoke, but tailored to minimize negotiation and closing delay and therefore aspirationally general and mid-line.

Nondisclosure agreements run that gamut.  RxNDA concerns itself primarily with points on the repeat-transaction side.  In affected San Francisco libertine style, I often refer to pre-deal, commercial NDAs as "contract-condoms": imperfect but expedient protections that are not so glaring or time-consuming as to totally spoil the hopping commercial mood.  It's about putting a basic level of information protection in place before switching from the usual standard operating standoffishness to a more freewheeling mode of debate, negotiation, and exchange.

RxNDA already puts quality form NDAs, in many permutations, optimized for ease of review and acceptance, [in everyone's hands](https://github.com/rxnda/rxnda-forms).  Even so, it's possible to bungle selecting the proper form, and filling in the blanks and signature-block details.  Even the simplest, highest-repetition use case involves choices, and repetition amplifies the consequences of early missteps that become long-held habits.

Ideally, I'd like to offer attorneys---I suppose I'd have to vet creds---the ability to create "prescriptions" that pair a particular choice of RxNDA form with commentary and pre-filled blanks.  And I'd like to offer a nice per-closing discount to NDAs sent and signed "on prescription".

One sketch of an implementation:

1.  Give vetted lawyers special credentials for creating prescriptions.

2.  Create a variation on the  send form with extra blanks for lawyer commentary.  Require the lawyer to enter the client's legal name, form, and jurisdiction in its signature block.

3.  Save a record with information from the form---a "prescription"---timestamp it, and bill the lawyer some flat fee, say $20.  Commit to a discounted per-NDA price, say $5, for the life of the prescription.

4.  Send the client an e-mail to a special link, like the countersign and cancellation links, that they can use to send NDAs on prescription.  Copy the lawyer.  Remind them to bookmark the link when they visit.

5.  Some set amount of time later, say six months, expire the prescription.  Send the lawyer and the client notifications.

This approach has some nice structural features:

1.  Expiration gives lawyers a helpful nudge to review their recommendations, keep them fresh, and catch up on any revisions to the RxNDA standard forms.

2.  Locking sender identification prevents creating one prescription and handing out the on-prescription send link willy-nilly, undercutting the self-serve pricing.

And some serious downsides:

1.  I end up holding records that spell out who is whose lawyer.  My terms and privacy notice are (hopefully) very clear that I can't make any surprise _use_ of that information, other than to facilitate the prescription.  But that being the case, I'd rather not have it, if that can be avoided.

2.  I end up holding records that may contain attorney-client advice: any commentary to the form the lawyer provides in the prescription.  So does your e-mail host.  But again, ideally, I could relay that content without holding it, even temporarily.

3.  I won't relish checking bar numbers to ensure lawyers with lawyer credentials are, in fact, lawyers.  But if I give every user the power to create prescriptions, I've taken away the use-a-lawyer incentive.  I might be able to do something with state bar lawyer search databases.  A form that takes state and bar number, and sends credentials to the e-mail address in that state's database, for example.

4.  I'd keep information on users---notably sender identification---a lot longer than I do at present. Sending an NDA one-off, record of the offer gets deleted on countersigning or expiration.

I'd be very grateful to read what you think.

Would you use the system I've described?

Could you improve it?

A couple of variations, by way of example:

I might omit information about _which_ lawyer created a given prescription in my prescription records.  That could avoid having record of who is whose lawyer.  But it also makes it impossible to send prescription expiration notifications to the lawyer.  If I don't put the lawyer's name on the prescription, I can't tell who to notify, later.  Sending that notification to the _client_ is probably a good idea anyway, to let them know to stop using the link.  But the client would have to turn around and bother the lawyer for a new prescription.  Inconvenient, but a common occurrence with prescriptions of other kinds.

I might omit any added commentary from the lawyer from the prescription, and instead send it to the client by e-mail, with the link for on-prescription use.  That gets the message to the client once, but not every time they use the link.
