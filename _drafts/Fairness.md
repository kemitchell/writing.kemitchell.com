---
title: Correct and Intuitive Fairness
description: how to make square deals in the future
tags:
- Drafting
- Law
- Licensing
---

Folks have finally got me working on a [free-until-you-make-it-big license](https://github.com/berneout/on-ramp-license/blob/master/license.md).  The terms make software free for noncommercial and small-business users, but also guarantee that paid licenses for big business will be available on fair terms.  Which leads directly to a devilish drafting doozy:

How do you say what will be fair ahead of time?

Standard-form, public software licensing makes this much harder.  We don't know who will use the license.  We don't what software they'll use it for.  We don't know who will _use_ that software, and we don't know what they'll use it to do.  We don't know what the relatively contributions to value that people actually end up paying for will be.

You don't know much of anything.

Without knowing much of anything, saying what _fair_ means backing up a step, and attacking it in general terms.  Set out some abstract criteria for fairness, and agree to make a deal that meets them criteria later.  That's most of the approach I've taken in my first sketch of the license.  Admit it or not, I'm defining "fair".

But there is another viable approach.  Set out terms that feel fair in and of themselves, without appeal to outside details, and rely on that overriding sense of fairness down the line.  Some of those outcomes won't be "correct", in the sense that deals meeting objective criteria of fairness might seem "correct".  But the intuitive sense of fairness will allow those involved to honor their commitments and to accept a wider margin of error for specific outcomes.

## Correctness

The toolkit of greatest mental availability for this problem is RAND: reasonable and nondiscriminatory.  RAND comes from patent lawyers, and more specifically patent lawyers who advise on technical standard setting.  Companies get involved in standards for many reasons.  But once they're involved, their selfish interest is to make the standard read on as many of their own patents as possible.  Once the standard gets adopted, the value of those patents goes up and the value of the standard goes down.

Companies solved this problem by promising---and requiring other companies to promise---that they will license any patents they get into codeveloped standards not on the best terms they can get, but on reasonable and nondiscriminatory terms.  Those licenses won't be _free_.  But they will be available to all comers.

In essence, RAND is a definition of fairness.  If a license, its price, and its legal terms are reasonable and nondiscriminatory, that counts as a fair license.  When US lawyers draft the agreements, rather than European lawyers, they often throw "fair" in explicitly. RAND becomes FRAND: fair, reasonable, and nondiscriminatory.

## Intuition

Those of us who spend a lot of time on the other extreme of the tech sector, with startups, routinely see a different approach to the future-fairness problem: equality.

When entrepreneurs cofound a startup company, they have no idea who will really do what, or how that will pan out for them.  But they have to apportion stock ownership.  With rare exception, seasoned venture capitalists I've heard and read prefer to see cofounders split ownership equally.

As a lawyer sometimes advising startup companies, I can see why.  When feelings about ownership arise, the best case isn't a rigorous, objective process of accounting, allocation, and final negotiation.  Every resource spent on account, allocation, and negotiation is a resource not spent on maximizing the venture's slim chance of outsize commercial success.

Moreover, it harshes the vibe.  Much as I avoid negotiating across from my clients too often---say about fees---and we all avoid rigorous bean accounting at restaurants with good friends, startup cofounders prize collegiality and a shared sense of purpose more than stray points on the cap table.  As long as the overall picture _feels_ fair, they needn't incur the costs of correctness.  Despite that picture being written out in invariably off-putting legal terms.

Equality can also make motivation at key junctures.  Good people who've been given an equal stake feel a natural social pressure to pull their weight.  Startups have more weight, especially early on, than they have people who could normally be expected to pull it.

## Application

An online software project doesn't know how many people will end up contributing, either to the project or to companies that use it.  But we could sketch some deals that achieve fairness intuitively without theorizing an objective definition based on criteria too costly to compute.

Consider this plain-terms deal:

> Users split net sales 50-50 with producers of the open work they used to make them, payable quarterly.

Consider a company, SoftyCo, that uses two pieces of open software in its web app, Fancy Framework and Loaded Library.  If SoftyCo makes $160 in net sales in Q1, SoftyCo keeps $80 and owes Fancy Framework and Loaded Library $40 each.  In other words, the company and its dependencies earn like equal partners.

Fancy Framework may have dependencies of its own.  Say they're Top-Shelf Templating, and Righteous Runtime.  If Fancy Framework has the same deals with its dependencies that SoftCo has with Fancy Framework, SoftyCo keeps $20 and owes Top-Shelf Templating and Righteous Runtime $10 each.

We'd likely want additional rules, but only for edge cases.  If a producer can't be paid, declines payment, or the cost of administering and making payment to them would outstrip what they're owed, their share is split among other producers.  So if Loaded Library declines payment, SoftyCo owes Fancy Framework $80 instead of $40, and Fancy owes Top-Shelf and Righteous $20 instead of $10.  The overall picture---equal splits between users and groups of producers---stays the same.

In some cases, this arrangement could be unfair to any of the players involved.  SoftyCo may use Fancy Framework for its core product and Loaded Library only for a relatively small feature, but end up paying them the same.  Conversely, Fancy Framework may be the work of one part-time developer, while Loaded Library may be millions of lines of code actively maintained by several full-time devs.  SoftyCo may bring far more value to its customers than Fancy Framework and Loaded Library.  Or SoftyCo may be a relatively thin veneer over what is really the hard work of its dependencies.

A RAND-like approach might produce better results in some of these cases.  But even in cases where the cost of applying that approach would make sense, I suspect many people will be satisfied to recognize the principles behind the easy split as valid, and leave it at that.  The more users of any given project, the less any particular case will seem to matter.

I haven't done a full paper-game analysis, but I suspect the incentives here, to the extent incentives override the general intuition, would be pretty good.  The one-to-many split between higher-level integrators like SoftyCo and lower-level producers like Fancy and Loaded could encourage intermediation: thin wrappers around others' work, for the purpose of taking a stake.  But higher-level integrators have every incentive to identify and disintermediate.  Insofar as wrapping or extending others' work _justifies_ a higher-level stake, the system encourages adapting generalized technology to specific use cases, improving usability, enhancing discoverability, and so on.  Virtues open software have typically lacked.

A variant of the system could forego those incentives by requiring equal splits between dependencies and those dependencies' dependencies.  SoftyCo would pay Fancy Framework $40, but Fancy would split that $40 equally with Top-Shelf Templating and Righteous Runtime.  Sometimes that will track closer to what RAND might decide, and sometimes it won't.  But more importantly, it sacrifices the consistency that people find intuitively fair.  Intuitively, Fancy should do unto Top-Shelf and Righteous as Fancy expects Softy to do unto Fancy.
