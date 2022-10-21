---
title: Open Source Unsolved Security
description: the pointed-headed skeptics warned us
series: Killjoy
tags:
- Security
- Open Source
---

How do we cultivate software security talent?  Once we have it, how do we apply it to the right problems, in the right projects, at the right times, with sufficient support, forever?

Apparently not how open source does it now.

The solution to the open security confidence crisis isn't [standardized packing slips](https://en.wikipedia.org/wiki/Software_bill_of_materials), [a roving security inspectorate](https://openssf.org/), a [centrally planned sustainable-software economy](https://sovereigntechfund.de/en), or a [sign-off scheme](https://blog.tidelift.com/the-state-of-package-signing-across-package-managers).  It's not more software or another fundraiser.  This isn't actually a software problem.  It's much bigger than that.

But it is also, thankfully, a solved problem.  It's just that open source _unsolved_ it.

## Known Class

The software-security problem is a product-service quality problem.  Much as drivers need reliable cars and everyone wants competent dentistry, users need and want secure software.  Trouble is, consumers can't tell on their own, in a hurry, if a particular car is a lemon, a particular dentist's a klutz, or some piece of software's too riddled with vulns for their use case.

Users know best what security they need.  Developers know best how they've invested in security, and what investing more would cost.  To allocate security resources, we need to connect these signal paths.  Not just among vendors and customers, but among vendors' vendors and customers' customers, however many there may be.

The picture is complex, but the general problem has a general solution: legally enforceable promises from vendors to customers to cover them financially when things go wrong.  In legal terms, "warranties" and "indemnities".  Developers can promise users they'll make them whole when vulns or breaches cause harm.  These promises fit naturally in licenses, terms of service, support contracts, or completely separate agreements.  Businesspeople and lawyers know how to write them.  Courts know how to read and apply them.

Warranties and indemnities for software security encode security signals in price.  If users demand more security---more protection, in more situations---they negotiate for more protections and pay more for them.  The vendors, receiving the money, can better afford to secure and supply.  If they fail to invest proportionately and effectively, they can end up owing money back for the consequences.

## Network

With warranties and indemnities, each customer-vendor pair forms an edge in a network.  That network distributes resources.  The resource flows encode data about supply and demand for security.  Any particular edge can be completely opaque, such as under a nondisclosure agreement.  But it still conveys security-relevant signals and resources transitively.

For example, a web app framework developer can give a warranty to a SaaS provider that in turn indemnifies end users.  The end users needn't see or even know about the framework developer's warranty or price.  But the terms and price the website operator can offer aggregate the terms and prices of all of its vendors, including the framework dev.

Warranties and indemnities depend on a universal and mandatory system of justice that enforces private contracts---courts---but atop that platform, they facilitate autonomous, uncoordinated dealing.  The result in the large is a constellation of self-assembling, self-balancing, many-nodes, many-edges networks of responsibility-resource exchanges.  In other words, a market-based software supply chain.

People used to thinking about products and services that aren't given out free on the Web sometimes use "supply chain" language to talk about open source.  Especially when there's a problem, and they find themselves missing things supply chains provide, like warranties and indemnities.  But open-source as we know it isn't a supply chain.  It's just a distribution system.  Software passes from developer through any number of distributors to users, but the links only go one way.  Calling this system a "supply chain" is wishing it had features it does not.  Features you never paid for.

## Failures

Market-based supply chains do exhibit failure modes.  Those failures differ from those of public, non-market goods.  But many market failure modes also have well known solutions.  Our understanding of these solutions, while imperfect, is strong enough to make the go-to solution for public-good failures turning the public goods into market goods and solving those problems instead.

A few examples.

### Consumer Protection

Market-based supply chains frequently do a good job balancing risk and reward...until the last link in the chain.  There an organized group, like a company, often does business with individual consumers.  Consumers often lack skill and leverage to negotiate, and accept what's offered to them, one of a few such choices.  This leads to outrageous situations where consumers get badly hurt in utterly predictable and preventable ways, but take-or-leave-it terms say the seller doesn't have to pay for it.

Consumer protection laws---mandatory rules that impose warranty- and indemnity-like obligations in sales to end users---step in.  They essentially _mandate_ specific terms in vendor-consumer contracts, by patching the legal system that contracts "run on".  Sometimes they give individuals the right to sue for violation of basic standards.  Sometimes they let them team up, in "class actions", to overcome the trouble of organizing lots of individuals by making it opt-out instead of opt-in.  They may also let public officials or regulators sue on consumers' behalf, using government as the buying public's champion.  Sellers may charge more, but society as a whole can net out better.

We are beginning to see more of these kinds of laws for software as a service, implemented as security requirements under privacy laws.  Typical Google, Facebook, or Twitter users aren't going to drive hard, one-off bargains with public companies for better protection.  But they can vote for legislators who pass laws like the EU General Data Protection Regulation and California Consumer Privacy Act, which affect everyone's deal.  Naturally, we also see ramp-up in lobbying around whether these laws allow individuals, rather than just public officials or regulators, to sue, and whether they can use class actions.  Just as we see economic arguments about "freedom of contract" letting the market correct the companies wind down, without regulation.  It didn't happen.

### Insurance

Terms aside, we also see that vendors sometimes take customers' money, make all the right promises, and either pay themselves the money or simply fail to invest it as needed.  Comes a problem, customers end up with strong legal claims against vendors with little or nothing to sue for.  This tends to happen especially with young, small companies---so-called "fly by night" operations---which is part of big buyers prefer big vendors.

Warranties and indemnities work a bit like insurance.  But for this risk, cue the actual insurance industry.

If customers suspect a vendor will take their money for security but fail to prevent or pay out for a loss, they can insist the vendor carry insurance to cover.  This brings a third party into the picture.  It brings for accountability.

Insurance companies also charge money.  To figure out how much, they look at the commitments the vendor makes to customers and at what they do to control the risk.  If a customer has a problem and the vendor has to pay, the insurance company will cover the cost, up to the dollar limit on the policy.  But they will also likely increase the vendor's premium, or simply refuse to renew coverage.  This makes closing new deals with insurance requirements more expensive, or even impossible.

Couldn't a shady company just promise to carry insurance, like it promises to take care of security, and lie about both?  Of course.  The industry responded with "certificates of insurance", or attestations from insurers, addressed to beneficiaries like customers, that summarize what kind and how much insurance the vendor has in place.  Contracts requiring insurance also require certificates of insurance on request, though customers may or may not actually ask for them.

What about fly-by-night insurance companies?  They have been known to exist.  Which is why we also see contracts requiring insurance from insurers rated highly by agencies like A.M. Best and Standard & Poor's.  We have now reached core financial infrastructure.  Corruption scandals and errors do occur here, as well.  When they do, they're international news.

Broader financial mechanics aside, insurance can also perform a signaling function.  Both the value the customer puts on functionality and the value the customer puts on security get encoded in one price.  The vendor can't tell from one figure how many dollars the customer attributes to functionality, to security, or to other characteristics.  On the return end, the functionality of the software the customer gets back may be clear, but the degree of security may not be.

The customer's insistence on insurance can function as a side channel.  When a customer specifically asks for insurance covering security issues, they signal a higher need for security.  The vendor may charge the customer more, to cover part of the cost of insurance.  That's fine: the more security the customer needs, the more they should pay.  If multiple customers want the vendor insured, the vendor can spread the cost of the coverage across their bills.

### Certification

Insurance companies tend to insure for claims under contracts rather generally.  While big policies from big insurers might involve providing quite a bit of information on security practices, insurers don't typically specialize just in those risks.  But specialists there certainly are.  To make their assessments inteligible to rest of the market, including insurance companies' pricing tools, they frequently work within the frameworks of standards.

Customers may ask, or their regulators may require, that vendors adhere to specific security standards.  Some standards may come from law, like the "Security Rule" under the Health Insurance Portability and Accountability Act (HIPAA).  Others are effectively legislated by private groups or consortia providing infrastructure, like the Payment Card Industry Data Security Standard.  There are also more general security standards like System and Organization Controls from American Institute of Certified Public Accountants, to enable auditors to speak with confidence about what they're auditing.  At the most general is probably the ISO 27000 standards series, compliance with which is often used as a rough proxy for company maturity. Groups like [NIST](https://csrc.nist.gov/Projects/ssdf) and [CISA](https://www.cisa.gov/uscert/bsi/articles/knowledge/sdlc-process/secure-software-development-life-cycle-processes) have standards and frameworks specifically around secure software development processes.

Apart from what they actually require, a key point on standards is whether a vendor just gets to say that it complies, or promise to comply, or whether it will have to get some independent group to agree.  Yes, certifiers can also lie or be bought.  But as with insurance, risk to a conspiracy tends to scale with the number of conspirator.

Everyone bristles about how general, awkward, and expensive conforming to standards can be.  But they can serve an important function bridging the trust gap between those who know software development and those who just need to use it.  Often enough, strong reputation and other signs of reliability take off pressure to conform with standards.  On the other hand, where security really, really matters, even large companies sometimes find themselves not just promising compliance company-wide, but down to the level of individual credentials, like ["Certified Secure Software Lifecycle Professionals"](https://www.isc2.org/Certifications/CSSLP).

These things aren't for geek cred.  They're for anywhere else.

## Open Source

Open source licenses break the chain of security responsibility.  Customers don't pay developers for open source.  But neither do customer's get security assurances.  Security resources do not flow through open source distribution channels, and neither do price-encoded security signals.

I am a ridiculous person to be writing this on the Internet.  In the late 1990s and early 2000s, I was one of the kids with dial-up flaming the business meanies harping on open source as unprofessional, negligent, and unwise without "a vendor standing behind the product".

The idea that people would use software without paying for it wasn't crazy, naive, or unethical.   I didn't have any money.  It was awesome.  The idea that people would use software without getting any assurance of quality, safety, or reliability wasn't reckless, demeaning, or unprofessional.  I was doing nothing important, and my time spent was time spent learning, not time wasted.  As long as "user beware" meant more code for zero dollars, it was all good for me.

Every popular open source license says something like this, usually in `SHOUT CAPS`:

> The software is provided "as is", without warranty of any kind, express or implied.... In no event shall the developers be liable for any claim....

Here it is is modern translation, from the [Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0#no-liability):

> ***As far as the law allows, this software comes as is, without any warranty or condition, and no contributor will be liable to anyone for any damages related to this software or this license, under any kind of legal claim.***

There are no warranties.  There are no indemnities.  There is no liability.  Definitely none about security.

If the terms didn't mention liability at all, what would aggrieved users have to point to in court?  Why does a license have to say this at all?  Because the law, in its labyrinthine wisdom, sets some reasonable defaults.  When things get bought and sold, the law implies warranties to match reasonable expectations.

When people buy stuff, they tend to expect it to work, at least for a while.  They expect sellers to refund or replace if it doesn't work, at least for a while.  If a salesman helped them decide what they needed to buy, they expect what they bought to meet their need.  All this in the context of a "sale", which could be a straightforward trade of money for wares, but could also involve freebies in some greater context of overall exchange.  Hence the language in open source licenses, even though money often isn't directly involved.

Some jurisdictions, including [a few states of the USA](https://en.wikipedia.org/wiki/UCITA), and, I'm told, some foreign countries like Germany, actually insist on default warranties for software _no matter what software license terms may say_.  The warranties aren't defaults but requirements---the products-liability approach.  There have been big pushes, even in the United States, to apply more products-liability-style laws to software, at least when individual consumers are buying.  Under such laws, the common open source "no warranties" and "no liability" language can't actually do all that it says.  You can't zero out responsibility, even if you zero out price.  Which is why the Blue Oak Model language starts "as far as the law allows...".

## Missing Middle

We see two extremes: total disclaimers, on one hand, and mandatory protections, on the other.  As usual with extremes, mismatch errors of all types abound.

Under open licenses, nobody gets security assurances, even when software flows from Fortune 500 to Fortune 500, even in the context of clear business exchange.  All these firms know how to do that deal, and used to insist on those terms, before open source "ate the industry".

Under products-liability law, everyone gets security assurances, even when software passes from mendicant hacker to broke student, even in the context of anti-FAANG collaborative activism.  Some people don't need protection, and can't afford to pay for it.

The go-to justification for wiping out warranties on open source is that developers aren't charging.  Why take the risk for no reward?  Of course, we might also ask: Why make and maintain the software in the first place?

There's no reason warranties couldn't become just another form of loss-leading.  If my company wants to own a market segment by loss-leading a complement, no rule stops your company from swooping in and offering your own, competing project, plus a strong warranty of security.  You could even post bond, or take out insurance, and brag about that publicly.  Still a third competitor could move in, pointing out how much bigger their bank balance is than both of ours, and therefore how much better they can afford to "stand behind" their competing project.

Whether compensation is paid "for software" or called "a license fee" is irrelevant.  Whether comp takes the form of cash is orthogonal.  Selling software cheap can be an act of charity.  Think student discount or emerging-market pricing.  Giving it away can be the cruelest commercial ploy.  Think "commodify your complement" or malicious [product dumping](https://en.wikipedia.org/wiki/Dumping_(pricing_policy)).  In the end, people want software to do useful things.  They also want it to not leak their data, lend their hardware to malware gangs, or cause myriad other security mayhem.

The argument for using open source without guarantees where security matters boils down to "we get away with it"---an argument not from reason but experience.  We hear this reprised whenever assembly programmers bump into C programmers, C programmers bump into interpreted-language programmers, and just about anybody bumps into JavaScript programmers.  How do you trust all this code you're importing from somebody---anybody---and sell it customers.  Like you do.

TODO: Red Hat model, Tidelift model

TODO: leave the means up to the vendor

TODO: centralized/global-singleton security projects

TODO: "Given enough eyeballs, all bugs are shallow" proved far more fun to say than to live by, not least because so many of those eyeballs want zero days more than CVE kudos.