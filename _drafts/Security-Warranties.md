---
title: Warranties Solve Security at Scale
description: the open source skeptics warned us
tags:
- Security
- Open Source
---

How do you get a rare flock of nerds, with scarce, specialized talents, who require intense focus and attention, to bear down on all the right software, at all the right times, with the right material support, forever?

Then, once you've got that, how do you find and support still rarer nerds among that flock in reducing their scarce knowledge to analytic methods, techniques, tools, and training, to spread it out among novices and other kinds of specialists?

Apparently not how we're doing it now.

The solution to the software security crisis isn't [standardized packing slips](https://en.wikipedia.org/wiki/Software_bill_of_materials), [a centralized inspection agency](https://openssf.org/), or a [sign-off scheme](https://blog.tidelift.com/the-state-of-package-signing-across-package-managers).  It isn't more software.  Software security isn't actually a technical problem.  It's way more complex than that.  But it is also a solved problem.

Allocating talent, resources, and responsibility for software security is a specific instance of the general product-service quality problem.  Users need and want software, but they can't tell on their own, in a hurry, whether it's secure or reliable and will stay that way.  The developers are in the best position to know about that.  But the customers, channeling _their_ customers, not the upstream developers, know best how much security they need, or rather, how much they can afford to pay for.

This general problem has a general solution: written guarantees, backed by money, enforceable at law, of quality, safety, reliability, and other product attributes.  In other words, warranties and indemnities.  The tree of accountability can grow directly out of such written commitments between businesses.  Or it can take root in public law, in the form of consumer protections and other rights to sue companies---alone and en masse---when we are wronged.  In nearly any mature industry, both matter.

The result of decentralized warranty-indemnity contacting is a self-assembling, self-balancing, many-nodes, many-edges network of insurance-like responsibility-reward relationships.  In other words, a market-based supply chain.  Markets have well known failure modes, usually related to many-versus-one dynamics in consumer enforcement and capture of regulators, including politicians, by better organized interests.  But far fewer than public-goods crisis chasing.  When the latest-greatest know-how we have is giving vuln disclosures marketing campaigns so they can reach the right people by reaching pretty much everyone, we know we have a problem.

How to improve?  Software used where it matters should come with warranties and indemnities that the software---licensed or hosted---isn't flawed by design, full of holes, riddled with malware, built with back doors, or left in utter disrepair.  Those warranties and indemnities should live in license agreements and service contracts signed by solvent, sue-able companies, so when failures happen, vendors pay.  The customers benefiting from that assurance should, naturally, pay for their guarantees.  They should answer to their own customers, regulators, and incentives in securing sufficient warranties and deciding whether to fund redundant audits, require adherence to standards, or carry insurance.

In the late 1990s and early 2000s, I was one of the kids with dial-up flaming the business meanies harping on open source as professional negligent without a vendor "standing behind the product".  The idea that people would use software without paying for it wasn't crazy, irrational, or unethical.  It was awesome.  I didn't have any money.  The idea that people would use software without getting any assurance of quality, safety, or reliability wasn't reckless, demeaning, or unprofessional.  It was great.  Nothing I was doing was all that important, and I _enjoyed_ burning time hunting bugs, bungling config files, and thrashing between alternatives.

Open source is, by practical definition, free of charge.  In the overwhelming majority of cases, nothing flows back from users to producers.  But neither do guarantees of any kind flow from producers out to users.  Every popular open source license says something like this, usually in `SHOUT CAPS`:

> The software is provided "as is", without warranty of any kind, express or implied....

Licenses say this because the law, in its labyrinthine wisdom, tends to read in, or imply, all kinds of reasonable warranties for things we buy and sell, by default.  When people buy stuff, they tend to expect it to work, at least for a while, and for sellers to stand behind the product if it doesn't.  Some jurisdictions, including [a few states of the USA](https://en.wikipedia.org/wiki/UCITA), and, I'm told, some foreign countries, like Germany, actually read in default warranties _no matter what the license terms_ say.  In those jurisdictions, the common open source license language potentially can't actually do what it says.  Some warranties remain mandatory.

The justification for wiping out warranties on open source is precisely that developers do not get paid.  Why take the risk for no reward?  Of course, we might also ask: Why make and maintain the software for no reward in the first place?  And indeed there's no reason warranties couldn't become just another form of loss leading used to compete in the marketplace.  If my company wants to own a segment by offering loss-leader open source, no rule stops your company from swooping in and offering your own, competing project, plus a strong warranty of security.  From posting a bond or taking out insurance to back it, and bragging about it.  From pointing out how much bigger your bank balance is, and therefore how much better able you are to "stand behind" your work financially.

The argument against guarantees for open source, not so much from reason but experience, boils down to "We're getting away with it."  We see this in microcosm when assembly programmers bump into C programmers, C programmers bump into interpreted-language programmers, and just about anybody bumps into JavaScript programmers.  How do you trust all this code you're importing from somebody---anybody---else?  You do.  Like a thousand other companies and projects, some far further along the path than you.  And you get away with it.

Kind of.
