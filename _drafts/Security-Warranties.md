---
title: Warranties Solve Software Security
description: the open source skeptics warned us
tags:
- Security
- Open Source
---

How do we get a rare flock of nerds, with scarce, specialized talent, bearing down on all the right problems, in all the right software, at all the right times, forever?

Apparently not how we're doing it now.

The solution to the software security crisis isn't [standardized packing slips](https://en.wikipedia.org/wiki/Software_bill_of_materials), [a centralized inspection agency](https://openssf.org/), or a [sign-off scheme](https://blog.tidelift.com/the-state-of-package-signing-across-package-managers).  It isn't more software.  Software security isn't actually a software problem.  It's way bigger than that.  But it is also, thankfully, a solved problem.  It's just that we unsolved it.  With open source.

Allocating talent, resources, and responsibility for software security is a specific instance of the general product-service quality problem.  Users need and want software, but they can't tell on their own, in a hurry, whether it's secure or reliable, or whether it will stay that way.  The developers are in the best position to know.  But the customers, and their customers in turn, see best how much ought to be invested making sure.  To allocate resources---money and security talent---we need to convolute these signal paths.

Fortunately, this general problem has a general solution: written guarantees of quality, safety, reliability, and other product attributes, backed by money, enforceable at law.  In other words, warranties and indemnities.  If a particular customer requires assurances of security, or a company fears lawsuits by consumers for faults, it can initiate a chain of these commitments spanning dozens of firms.  One firm's customer is another firms' vendor.  At each link, warranties and indemnities bind together.

The result of decentralized warranty-indemnity contacting is a self-assembling, self-balancing, many-nodes, many-edges network of insurance-like responsibility-reward relationships.  In other words, a market-based supply chain.  Markets have well known failure modes, usually related to many-versus-one dynamics in consumer enforcement and capture of regulators, including politicians, by better organized interests.  But far fewer than public-goods crisis chasing.  When the latest-greatest know-how we have is giving vuln disclosures marketing campaigns so they can reach the right people by reaching everyone, we know we have an information problem.

How to improve?  Software used where it matters should come with warranties and indemnities that the software---licensed or hosted---isn't flawed by design, full of holes, riddled with malware, built with back doors, or left in utter disrepair.  Those warranties and indemnities should live in license agreements and service contracts signed by solvent, lawsuit-worthy companies, so when failures happen, vendors can be made to pay, up and down the chain.

The customers benefiting from that assurance should, naturally, pay for their guarantees.  What they can pay, and what they are willing to pay, are essential information inputs to the system.  They enable buyers to price and secure appropriate protections, as well as audits, standards adherence, or insurance, to manage their risk.

In the late 1990s and early 2000s, I was one of the kids with dial-up flaming the business meanies harping on open source as professional negligent without a vendor "standing behind the product".  The idea that people would use software without paying for it wasn't crazy, irrational, or unethical.  It was awesome.  Because I didn't have any money.  Similarly, the idea that people would use software without getting any assurance of quality, safety, or reliability wasn't reckless, demeaning, or unprofessional.  It was great.  Because nothing I was doing was all that important anyway, and I actually _enjoyed_ burning time hunting bugs, bungling config files, and thrashing between alternatives.

Open source is, by practical definition, free of charge.  The chain of "you get what you pay for" breaks at the boundary of open source.

So does the chain of security responsibility.  Every popular open source license says something like this, usually in `SHOUT CAPS`:

> The software is provided "as is", without warranty of any kind, express or implied....

Licenses say this because the law, in its labyrinthine wisdom, tends to read in reasonable default rules.  In the chase of things bought and sold, that means reasonable warranties, along the lines of what people expect, not knowing the law.

When people buy stuff, they tend to expect it to work, at least for a while.  They expect sellers to refund, replace, and compensate if it doesn't.  Some jurisdictions, including [a few states of the USA](https://en.wikipedia.org/wiki/UCITA), and, I'm told, some foreign countries, like Germany, actually read in default warranties _no matter what the license terms_ say.  In those jurisdictions, the common open source license language potentially can't actually do what it says.  Some warranties remain mandatory.

The go-to justification for wiping out warranties on open source is precisely that developers do not get paid.  Why take the risk for no reward?  Of course, we might also ask: Why make and maintain the software for no reward in the first place

Indeed, there's no reason warranties couldn't become just another form of loss leading.  If my company wants to own a market segment by offering a loss-leader complement as open source, no rule stops your company from swooping in and offering your own, competing project, plus a strong warranty of security.  From posting bond or taking out insurance to back it.  From pointing out how much bigger your bank balance is, and therefore how much better able you are to "stand behind" the security of your product for its users.

The argument for accepting open source without any guarantees, not so much from reason but experience, boils down to "we get away with it."  We hear this reprised whenever assembly programmers bump into C programmers, C programmers bump into interpreted-language programmers, and just about anybody bumps into JavaScript programmers.  How do you trust all this code you're importing from somebody---anybody---else?  You do, and you get away it.

Kind of.
