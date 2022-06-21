---
date: 2022-04-22T12:32:39-07:00
title: EULAs Aren't Inherently Evil
description: proprietary done right can beat free and open for users
tags:
- Software Licensing
- Open Source
- Software Industry
---

Too many software developers simply cannot conceive that a dreaded "proprietary software license" could be reasonable, fair, and beneficial to users.  That they might rationally _prefer_ such terms, and paying for software, to free MIT or GPL for code they actually use.

It happens.  It's all about terms and circumstances.

Consider a "proprietary" deal like so:

- $n per year, annual term, renewing automatically, 90 days' notice to discontinue
- binary and source, delivered via download
- the customer gets the current version plus any new ones released while they're still paying
- the customer can keep using those versions after they stop paying, but not any newer releases
- the customer can run, patch, and run as patched, but not share with others
- patches must be shared and licensed back to the developer
- the seller guarantees the software will work as documented, won't be infected with malware, won't be riddled with security holes, won't contain plagiarized code
- the seller provides support and maintenance via e-mail, with a response-time service-level agreement
- if the developer discontinues the product, the versions the customer paid for fall back on a standard free-of-charge license, agreed in advance

There's nothing inherently abusive here.  Depending on the software, the price, and the competition, it's just a good deal or a bad one.  Those who take the deal aren't "locked in" by some dark legal magic.  They _could_ become dependent on the software and the vendor, for lack of competition or a failure to diversify.  Not due to any legal hooks hidden in the contract.

Through the lens of free and open source ideology, of course, it's the road to serfdom and a recipe for crapware.  Many "freedoms" are present, but some are not, and the matter is all-or-nothing.  The customer's debased, cast down to servitude, bound in chains of copyright.

But also, as we know, exceedingly unlikely to care.  Through the lens of lived industry experience, we see that what users reliably need and want, they get on this deal.  Plus a lot they can only hope for from open source in the best cases.

Of all the projects we use, we contribute to very few.  We fork-adopt fewer still.  We download software direct from where developers put it---GitHub, repositories, and project websites---rather than passing among friends.  We don't like paying just to try something out, but once we're in, we immediately start worrying whether the project will fall out from under us.  The question shifts from the software as such to all the life-support work to keep it usable---doc, bugs, maintenance, security, roadmap---and the other people we hope will do that work for us.

Those odds in mind, practically speaking, users under a proprietary deal like this concede a whole lot of nothing.  Permission for things they won't want to do.  Protections against problems they won't have.  In return, they get real benefits _within_ the folds of probability.  Consider:

- The customer gets source and permission to hack it.  This is way more normal in business-to-business software deals than hackers tend to think.

- The license is "perpetual".  The seller can't cut them off from what they already have, only future releases, services, and protections, with fair warning.

- The customer can fix bugs and make improvements.  Better yet, while they pay, they can foist this off on the seller.  What the customer could usually only hope for in the best case with open source---a timely response from a responsible person---they now get by right, under contract.

- If the seller drops the product, the customer can fork and maintain under fallback license.  Or hire someone else to do it.

- There's no "sustainability" mystery to leave unsolved and try not to think about.  The customer pays the developer.  Other would-be users face the same deal.

In short, instead of trampling developer interests in favor of immediate user interests, the license agreement _aligns_ their interests long-term.  The developer gets paid.  But they also take responsibility:

- If the software is unreliable, the seller will have to spend more on support and maintenance to meet its obligations.

- If the seller under-invests in development, customers won't renew and the seller will lose revenue.

- If the software's riddled with bugs or vulns, the customer can hold the seller responsible.  They don't have to wish on "best practices", free-for-open tool and service giveaways, or roving inspectorates funded by competitors.

The effect is something like a foundation where all the users actually donate.  The "foundation" is instead a company, which can can make a profit.  Like the users, most of the time.

---

I write a lot of legal terms, license agreements included.  Legal terms have _no inherent value_, good or ill.  Certainly no inherent _ethical_ value.  They matter only as applied, in some context, to move property and shape behavior.  They shape behavior by invoking sense of duty, staking reputation, and changing incentives.  They never set out the whole system of incentives.  They only alter some existing state.  Existing states vary widely!

In many circumstances, software users and software developers will _both_ be better off under balanced paid commercial terms informed by practical probabilities and market conditions than under easier-to-grok, intellectually pure terms at some "clean" extreme, be it permissive open-source or full-lockdown adhesion.  Out in the world, when more is involved and at stake than abstract principle, that often leads to more responsible, and more ethical, outcomes.  Savvy devs know this and account for it, recognizing when it applies.  It makes their self-interest that much more enlightened.

Sometimes The MIT License works best.  Often when the project is a slim-marginally valuable spin in a commodity category, or some big firm wants see it commoditized.  Sometimes lock-in-inducing commercial terms work best.  Often when the software's truly innovative, commercially differentiating, and took lots of work.  Frequently enough, the best choice for a project shifts over time, along with competitive circumstances.  Finding the fair, productive choice is in that sense an engineering problem.  "Correctness" is using the right tool to get the right outcome, not self-limiting to anointed means.

Free and open agitprop helped set off a productive explosion.  It also wreaked lasting perceptual damage.  The black-and-white, oddly essentialist view of software licensing helped polarize perception, build an audience, paint an enemy, and coalesce a movement.  Arguably, the new consumer software market of the 1990s worked into an extremely bad state, and needed an reaction to crack loose.

But the correction didn't set us down a middle course of more nuance, knowledge, and refinement.  It reinforced a stark, limited view of the industry---characteristic of young and commercially sheltered coders dealing entirely with dominant apps from megacorps, on one hand, and open source from hackers, on the other---as all relevant reality.  There wasn't any burgeoning gray area of independent software sales in this picture, just speckles of pure black and pure white---open-or-die shops hocking professional services, pure-play closed soaking up free dependencies, pure open core sprinkling on pure closed add-ons.  No experience of negotiation---engineering terms to circumstances---to speak of.  No rallying call to develop those chops.  We accepted that licensing mattered to our industry, defined its most important dividing line.  But we also accepted that it was out of our hands, that `LICENSE` was the one file in our repos we couldn't hack.

"Proprietary" paints all not-free-and-open terms the same, ominous black.  In fact it's the whole universe of hackable permutations and combinations, except a few "open" licenses, largely written ages ago.  A lot more is possible.
