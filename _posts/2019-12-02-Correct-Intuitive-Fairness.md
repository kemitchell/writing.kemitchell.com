---
title: Correct and Intuitive Fairness
description: How can a license say what "fair" is ahead of time?
series: Big Time License
tags:
- Drafting
- Law
- Licensing
---

Folks have finally got me sketching out a [free-until-you-make-it-big license](https://github.com/berneout/big-time-public-license/blob/master/license.md).  The gist is terms to make software free for noncommercial and small-business users, but also guarantee that paid licenses for big business will be available on fair terms.  Which leads directly to a devilish drafting doozy:

How do you say what "fair" is ahead of time?

Fixed-form public software licensing makes this much harder.  We don't know who will use the license.  We don't what software they'll use it for.  We don't know who will use that software, and we don't know what they'll use it to do.  We don't know what the relative contributions to value that people actually end up paying for will be.

We don't know much of anything.

Without knowing much of anything, saying what _fair_ is means taking a big step up the ladder of abstraction.  Set out some general criteria for fairness and agree to make a deal that meets them criteria later.  That's most of the approach I've taken in my first sketch of the license.  Admit it or not, I'm defining "fair".

But there is another viable approach.  Set out terms that feel fair in and of themselves, without appeal to highly variable, uncertain specifics, and rely on that overriding intuition to get the terms agreed in the present and honored in the future.

Some of the outcomes under an intuitive approach to fairness won't be correct, in the sense that deals meeting objective criteria of fairness might seem correct.  But the intuitive sense of fairness will allow those involved to accept a wider margin of error---in their favor and against---for specific outcomes.

## Correctness

The toolkit of greatest mental availability for this problem is RAND, for "reasonable and nondiscriminatory".  RAND comes from patent lawyers, specifically those advising big companies on technical standard setting.

Companies get involved in standards for many reasons.  But once they're involved, their natural interest is to make the standard read on as many of their own patents as possible.  Once the standard gets adopted, the value of those patents goes up, because everyone else has a new reason to need licenses for them.

When one company does this, it's a coup.  When all the companies do this, it's mutually assured obstruction.  So lawyers have companies promise---and requiring other companies to promise---to license any patents they get into standards not on the best terms they can get after the fact, but on reasonable and nondiscriminatory terms.  Those licenses won't be free.  But they will be generally available.

In essence, RAND is a definition of fairness.  If a license, its price, and its legal terms are reasonable and nondiscriminatory, that license counts as fair.  If a patent owner insists on unreasonable of discriminatory terms, that's unfair, and the victim can point back to pre-agreed language to say how.

In fact, when US lawyers draft the agreements, rather than European lawyers, they often throw "fair" in explicitly. RAND becomes FRAND, for fair, reasonable, and nondiscriminatory.  It's not entirely clear what "fair" adds to "nondiscriminatory" in context, but it gets to the overall point.

## Intuition

Those of us who spend a lot of time on the small side of the tech sector, with startups, routinely see a very different approach to the future-fairness problem: equality.

When entrepreneurs cofound a startup company, they have no real idea who will do what for how long, or how that will pan out.  But they have to apportion stock ownership.  With rare exception, seasoned venture capitalists I've heard and read prefer to see cofounders split equally.  Even if that means an even-numbered board that can deadlock.

As a lawyer who's advised startup companies, I can see why.  When misgivings about stock ownership come up, especially early on, the best case isn't a rigorous, objective process of accounting, allocation, and final negotiation.  Every resource spent on accounting, allocation, and negotiation is a resource not spent on maximizing the venture's slim chance of outsize commercial success.

Moreover, it harshes the vibe.    Every minute spent _across_ from one's cofounders, in conflict, is a bit of the early spark of the company squandered.  Much as I avoid negotiating across from my clients too often---say about fees---and most folks avoid rigorous whipping out calculators to split checks with good friends at restaurants, startup cofounders prize collegiality and a shared sense of purpose more than stray points on the cap table.  As long as the overall picture _feels_ fair, they needn't incur the high costs of computing, recomputing, and counter-computing correctness.

Equality can also make motivation at key junctures.  Good people who've been given an equal stake feel a natural inner pressure to pull equal weight.  Startups have more weight, especially early on, than they have people who could normally be expected to pull it.  They need motivation wherever they can get it.

## Application

An online software project doesn't know how many people will end up contributing, either to the project or to companies that use it.  Headcount equality isn't doable.  But we could still sketch some deals that achieve fairness intuitively without theorizing an objective definition based on costly criteria.

Consider this deal:

> Users split net sales 50-50 with producers of the open work they used to make the money, payable quarterly.

Consider a company, SoftyCo, that uses two pieces of open software in its web app, Fancy Framework and Loaded Library.  If SoftyCo makes $160 in net sales in Q1, SoftyCo keeps $80 and owes Fancy Framework and Loaded Library $40 each.  In other words, the company and its dependencies, as a group, earn like coequal partners.

Fancy Framework may have dependencies of its own.  Say they're Top-Shelf Templating and Righteous Runtime.  If Fancy Framework has the same deal with its dependencies that SoftCo has with Fancy Framework, SoftyCo keeps $20 and owes Top-Shelf Templating and Righteous Runtime $10 each.

We'd likely want additional rules for edge cases.  If a producer can't be paid, declines payment, or the cost of administering and making payment to them would outstrip what they're owed, their share is split among other producers.  So if Loaded Library declines payment, SoftyCo owes Fancy Framework $80 instead of $40, and Fancy owes Top-Shelf and Righteous $20 each instead of $10.  The overall picture---equal splits between users and groups of producers---still honors the overall intuition of fairness.

In some cases, this arrangement could be unfair to any of the players involved for any number of reasons.  SoftyCo may use Fancy Framework for its core product and Loaded Library only for a relatively small feature, but end up paying them the same.  Conversely, Fancy Framework may be the work of one part-time developer, while Loaded Library may be millions of lines of code actively maintained by several full-time devs.  SoftyCo may bring far more value to its customers than Fancy Framework and Loaded Library.  Or SoftyCo may be a relatively thin veneer over what is really the hard work of its dependencies.

A RAND-like approach could produce better results in some of these cases.  But even in cases where the cost of negotiating a RAND answer would make sense, I suspect many people and projects would be satisfied to recognize the principles behind the easy split they agreed to ahead of time as valid, and leave it at that.  The more users of any given project, the less any particular misfire will matter.  Overpayments can net out underpayments, and an overall trend toward tracking value can emerge.

I haven't done a full paper-game analysis, but I suspect the incentives here, to the extent incentives override intuition, would be pretty good.  The one-to-many split between higher-level integrators like SoftyCo and lower-level producers like Fancy and Loaded could encourage intermediation: thin wrappers around others' work for the purpose of commanding an integrator's stake.  But higher-level integrators have every incentive and capability to identify those maneuvers and disintermediate them.  If wrapping or extending others' work justifies a higher-level stake, the system encourages adapting generalized technology to specific use cases, improving usability, enhancing discoverability, and so on.  Virtues open software has typically lacked.

A variant of the system could forego those incentives by requiring equal splits between dependencies and those dependencies' dependencies.  SoftyCo would pay Fancy Framework $40, but Fancy would split that $40 equally three ways with Top-Shelf Templating and Righteous Runtime.  Sometimes that would track closer to what RAND might decide, and sometimes it wouldn't.  But more importantly, it would compromise consistency, and therefore the intuitive sense of fairness overall.  Fancy should do unto Top-Shelf and Righteous as Fancy expects Softy to do unto Fancy.

Don't code in transitive inequality.  'Tis the Golden Rule.
