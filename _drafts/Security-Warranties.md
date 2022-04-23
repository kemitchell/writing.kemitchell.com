---
title: Warranties Solve Software Security
description: the open source skeptics warned us
series: Killjoy
tags:
- Security
- Open Source
---

How do we cultivate software security talent?  Once we have it, how do we get it applied to the right problems, in the right projects, at the right times, with the right material support, forever?

Apparently not how open source does it now.

The solution to the open source security crisis isn't [standardized packing slips](https://en.wikipedia.org/wiki/Software_bill_of_materials), [a centralized inspection agency](https://openssf.org/), or a [sign-off scheme](https://blog.tidelift.com/the-state-of-package-signing-across-package-managers).  It's not more software or another foundation.  Software security isn't actually a software problem.  It's much bigger than that.  But it is also, thankfully, a solved problem.  Open source _unsolved_ it.

## Known Class

The software-security conundrum is a specific instance in the general class of product-service quality problems.  Much as drivers need reliable cars and depositors need dependable banks, users need and want secure software.  But they can't tell on their own, in a hurry, if particular software's secure and will stay that way.

Software developers are best positioned to know, and to keep their software secure.  Especially with the help of security specialists.  But software _users_ are best positioned to know the value of software and how much is worth investing in security.  To allocate resources---the costs of developer attention and even scarcer security talent---we need these signal paths connected, to they can be balanced.  We need a bus to carry the signals.

Fortunately, the general product-service quality problem has a general solution: written guarantees, backed by money, enforced by courts.  In legal terms, "warranties" and "indemnities"---promises to cover customers financially when bad things happen.  For software security, this means promises from software vendors to cover customers financially when vulns and breaches cause them losses, written out and agreed in license agreements and terms of service.  In effect, software vendors writing software security insurance policies for their customers.

Warranties and indemnities encode security signals in price.  If users need more security coverage---higher dollar limit, coverage in more situations---they pay their vendors more for it.  The vendors can therefore afford to invest more in security.  If the vendors fail to spend accordingly, or spend unwisely, they end up owing their customers for the consequences.  Resources flow back from vendors to customers, from developer to users.

Links of that chain can be entirely confidential, covered by nondisclosure agreements, but still convey security-relevant signals and resources transitively.  A framework vendor can cover a website provider who in turn covers its own user-customers.  The end user-customers don't need to see the vendor-provider contract.

## Market System

Warranties and indemnities depend on institutions, namely public courts.  But they aren't any kind of centralized institution.  They're a means for linking nodes---developers, vendors, customers---in web-like networks.  The result in the large is a constellation of self-assembling, self-balancing, many-nodes, many-edges networks of insurance-like responsibility-resource exchanges.  In other words, a market-based supply chain.

Markets have known failure modes, albeit far fewer than public-goods crisis chasing.  Many known failure modes also have known mitigations.

For example, scurrilous vendors can take money, make promises, and undercapitalize their businesses or simply pocket their premiums, without investing in security.  Comes a problem, customers find themselves with strong legal claims against vendors with nothing to sue for.  Thus evolved insurance companies.

If customers suspect a vendor will charge more for security but fail to invest in prevention or pay out for loss, they can insist the vendor carry insurance to cover their obligations.  An insurance company will look at the commitments the vendor makes, as well as their security practices.  Those commitments and practices will inform the premium the insurance company charges.  If a customer has a problem and the vendor has to pay, the insurance company will cover it.  But they will likely also charge the vendor more, or refuse to keep insuring them.

Organizing a lot of small user-customers to bring many little claims against one big vendor.  Thus evolved class action, consumer protection, and industry-specific regulations.  These are nice problems to have, compared to "How do we figure out which project to focus on?" and "How do we get companies, identifies unknown, who are currently paying nothing, to pay for the security they need?"

## Open Source

In the late 1990s and early 2000s, I was one of the kids with dial-up flaming the business meanies who were harping on open source as unprofessional, negligent, and unwise without "a vendor standing behind the product".  The idea that people would use software without paying for it wasn't crazy, irrational, or unethical.  It was awesome.  I didn't have any money.  The idea that people would use software without getting any assurance of quality, safety, or reliability wasn't reckless, demeaning, or unprofessional.  It was great.  Nothing I was doing was all that important, and I actually _enjoyed_ burning time hunting bugs, bungling config files, and thrashing alternatives.

Open source is, by practical definition, free of charge.  The chain of "you get what you pay for" breaks at the boundary of open source.

So does the chain of security responsibility.  Every popular open source license says something like this, usually in `SHOUT CAPS`:

> The software is provided "as is", without warranty of any kind, express or implied....

Licenses say this because the law, in its labyrinthine wisdom, tends to have reasonable defaults.  When things get bought and sold, that means guarantees---warranties---along the lines of what people expect, not knowing the law.

When people buy stuff, they tend to expect it to work, at least for a while.  They expect sellers to refund or replace if it doesn't, at least for a while, if the problem's with the product, and not the user.  Some jurisdictions, including [a few states of the USA](https://en.wikipedia.org/wiki/UCITA), and, I'm told, some foreign countries like Germany, actually read in default warranties _no matter what software license terms may say_ say.  The warranties aren't defaults but mandatory.  In those jurisdictions, the common open source "no warranties at all" language can't actually do all it says.

The go-to justification for wiping out warranties on open source is precisely that developers do not get paid.  Why take the risk for no reward?  Of course, we might also ask: Why make and maintain the software in the first place?

There's no reason warranties couldn't become just another form of loss leading.  If my company wants to own a market segment by offering a loss-leader complement as open source, no rule stops your company from swooping in and offering your own, competing project, plus a strong warranty of security.  From posting bond or taking out insurance to back it.  From pointing out how much bigger your bank balance is, and therefore how much better able you are to "stand behind" the security of your product for its users.

The argument for accepting open source without any guarantees, not so much from reason but experience, boils down to "we get away with it."  We hear this reprised whenever assembly programmers bump into C programmers, C programmers bump into interpreted-language programmers, and just about anybody bumps into JavaScript programmers.  How do you trust all this code you're importing from somebody---anybody---else?  You do, and you get away it.

Kind of.
