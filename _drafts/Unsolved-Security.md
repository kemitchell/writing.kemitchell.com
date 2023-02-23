---
title: Open Source Unsolved Security
description: the pointy-headed boss-types warned us
series: Killjoy
tags:
- Security
- Open Licensing
---

How do we grow software security talent?  Once we have it, how do we apply it to the right problems, in the right projects, at the right times, with the right support, forever?

Apparently not how open source does it now.

The solution to the open confidence crisis isn't [standardized packing slips](https://en.wikipedia.org/wiki/Software_bill_of_materials), [a roving security inspectorate](https://openssf.org/), a [centrally planned sustainable-software economy](https://sovereigntechfund.de/en), or a [sign-off scheme](https://blog.tidelift.com/the-state-of-package-signing-across-package-managers).  It's not more software or another foundation fundraiser.  This isn't actually a software problem.  It's much bigger than that.

It is also, thankfully, a solved problem.

Open source _unsolved_ it.

## Known Class

The software-security problem is a product-service quality problem.  People need secure software, but they can't tell how secure software is just by looking at it or trying it for a while.  The software's developers know best, but their incentive is to spout pure confidence.  More business---or "adoption"---for them.

To allocate resources effectively, we need input signals from developers and users, and we need those signals balanced.  Not just among users and developers, customers and vendors, but developers' developers and customers' customers, as well.  However long those chains may be.

The structure we want is complex, but we can grow it from simple, well characterized parts: legally enforceable promises from developers to users to cover them financially when things go wrong.  Lawyers call these "warranties" and "indemnities".  Think "we'll warrant that security holes get patched within thirty days."  Or "we need data-breach indemnity to buy this."

Lawyers and business people know how to write software warranties and indemnities.  They fit nicely into license agreements, terms of service, and support contracts.  The courts know how to read and enforce them.  They're a thing.  But they were relatively rare in the legal wilds of early software, because early software was an unreliable, scarcely functional mess rarely exposed to a networked environment.  Only recently have user expectations come neck-and-neck with more mature products.

## Network

Warranties and indemnities for software security encode signals about security in legal terms.  Terms in turn affect prices.

Users needing more security negotiate for stronger terms and pay more for them.  Sellers taking more responsibility demand more compensation, with which they can afford more security.  If they fail to invest, they can end up owing customers out-of-pocket for consequences.  If they invest wisely, they earn more take-home profit for their trouble.  A bounty on competence encourages more competence.  More security know-how develops, gets paid, and routes its way to needs most acute.

Deals balancing security risk and cost form edges in a kind of network.  The network routes software, terms, and money among buyers and sellers.  When their movements encode signals about security, the network becomes a Web of supply-demand info, too.

Any particular edge in the network can be a black box to all others.  A SaaS provider needn't publish the terms or the pricing for the framework it bought.  They might even sign a nondisclosure agreement against doing so.  But the network still learns and teaches.  The terms and prices the SaaS provider can offer reflect the terms and prices it can get.  Not individually, but in aggregate.  In the form relevant to shoppers for its "solution".

Each link of a network like this depends on a system of enforcement---for all those payments, warranties, and indemnities.  Governments provide these systems for user fees in the form of public courts.  The judges they hire enforce terms those governments write---public laws---but also terms that parties opt into---private contracts.  Each state makes its courts mandatory within the scope of its power, or jurisdiction.  Then they make deals with other governments on [enforcing](https://en.wikipedia.org/wiki/Full_Faith_and_Credit_Clause) [decisions](https://en.wikipedia.org/wiki/Convention_on_the_Recognition_and_Enforcement_of_Foreign_Arbitral_Awards) and [whose law will apply](https://en.wikipedia.org/wiki/Convention_on_the_Law_Applicable_to_Contractual_Obligations_1980).

The legal system for any given state is usually centralized and hierarchical.  But atop that platform, buyers and sellers weave their webs, freely, on their own.  There's no single brokerage through which to clear deals for software.  There's no judge or regulator to preapprove all their terms.  Buyers and sellers come and go, make deals and break them, falling back on the courts as needed.  The result is a constellation of self-assembling, self-healing, self-balancing exchanges.  Any particular route through that graph, in the form of a tree of suppliers down to you, is a "market-based supply chain".

## Interlude: Supply Chains

People used to procuring products and services professionally like to talk about "open source supply chains".  Some of this is "supply chain" being merely the nearest familiar concept available.  Too much of it is wishing aloud that open source had features it doesn't.

There aren't any warranties, indemnities, or service obligations in open source as such.  Companies don't get to be "adopters" at the start, when "customers" would pay, then then suddenly transform into "customers", when "adopters" would have no one else to blame.

Open source is a distribution system.  Think containerized shipping: some standards, some conventions, a whole lot of compatible infrastructure, and a gaggle of vendors, all vaguely unified by a buzzword.  A pretty big deal.  But not a supply chain.

Global trade in _computers_ is a supply chain.  It uses containerized shipping, among other kinds.  Many computers get moved in twenty-foot boxes through ports, ships, trains, and trucks.  But you don't file a warranty claim with [Maersk](https://en.wikipedia.org/wiki/Maersk) for dead pixels on your laptop.  You file with the store that sold it to you, or the company whose logo's on the lid.  That's your "supplier".  Who is not also your "distributor".

Starving open-source types, heed my call.  Every "open source supply chain" [Freudian slip](https://en.wikipedia.org/wiki/Freudian_slip) is a corporation whimpering for a warranty, imploring for an indemnity, sniveling for a support contract it doesn't want to admit it should have already.  It's a wish upon a star that you were in business as more than a flyby licensor.  The questions are, one, whether you can offer what they're missing, and two, what they'll pay for it.

Not whether they will pay.  These are responsible grown-up-types mewing.  They expect to pay.  They keep subconsciously forgetting they didn't.

## Failure Modes

All of this theory sounds pretty swell.  The emergent behaviors of market-based supply chains address product-service quality problems with prices and contracts.  But as we all know from actual life, market-based supply chains also exhibit failure modes.  They hit and hurt different from failures in public goods.

Fortunately, many well known market problems also have well known, market-compatible solutions.  So much so that the go-to policy fix for big public-goods problems is turning public goods into private ones and solving those problems instead.

## Market Failure: Consumer Abuse

Library Co. does a deal with Framework Inc.  Framework Inc. turns around does and makes its own, reasonable sale to Provider LLC.  But Provider sells to individuals, not companies.  The only terms Providers offer are terrible, leaving its customers more or less on their own for any security mishaps.  The customers mostly don't read terms, of course.  They can't negotiate.  Who needs bad news?

Individuals, and even consumer advocacy groups, can't go to the Provider and drive better deals.  So they go over their heads, to the government, instead.  They lobby for a "consumer-protection law" that forces balance on deals like those with Provider.

The new law patches the contract law sellers' terms run on.  It makes certain warranties or indemnities mandatory.  They may also add new wrongs to public law that people can sue companies for, as "torts".  They might also impose requirements to take basic security precautions, with liability for failures to comply.

These laws can let people sue individually.  They can let lawyers sue on their behalf through "class actions", which make collective action opt-out rather than opt-in.  They can empower attorneys general or state regulators to enforce on the public's behalf.  They can do some or all of the above.

Companies and their lobbyists will fight every step of the way.  Bitter competitors will unite in common front.  [A big, First-Amendment-shaped hole in competition law permits them to do this.](https://en.wikipedia.org/wiki/Noerr%E2%80%93Pennington_doctrine)

The United States used to have laws like this only in specific areas like [banking](https://en.wikipedia.org/wiki/Gramm%E2%80%93Leach%E2%80%93Bliley_Act), [credit](https://en.wikipedia.org/wiki/Fair_Credit_Reporting_Act), [health](https://en.wikipedia.org/wiki/Health_Insurance_Portability_and_Accountability_Act), [children](https://en.wikipedia.org/wiki/Children%27s_Online_Privacy_Protection_Act), [education](https://en.wikipedia.org/wiki/Family_Educational_Rights_and_Privacy_Act), and, after a dumb political scandal, [movie rentals](https://en.wikipedia.org/wiki/Video_Privacy_Protection_Act).  We are seeing more and more general data privacy-security laws lately, following the European Union's <abbr title="General Data Protection Regulation">GDPR</abbr> and the [California Privacy Protection Act](https://www.oag.ca.gov/privacy/ccpa).  Other US states are [rapidly piling on with their own consumer laws](https://iapp.org/resources/article/us-state-privacy-legislation-tracker/), often more effectively crippled by industry lobbies, which are playing from [both](https://netchoice.org/) [sides](https://progresschamber.org/) and angling to [override](https://en.wikipedia.org/wiki/Federal_preemption) it all [at the federal level](https://iapp.org/resources/article/us-federal-privacy-legislation-tracker/).  Meanwhile, the latest EU project, the Cyber Resiliency Act, addresses mandatory security practices head on, [threatening as it does to trample the "open" no-money-no-responsibility exception state](https://blog.tidelift.com/open-source-and-the-unintended-consequences-of-the-eus-cyber-resiliency-act).

These laws tilt _everyone's_ deal with big service providers, much as labor laws tilt our deals with employers and clients.  The leverage of big companies over consumers meets the even bigger leverage of the legislature.

## Market Failure: Deception

Some failures affect what terms buyers get in the first place.  Others attack how those terms do or don't work in practice.

Startup Inc. does a deal with Big Corporation.  The deal has all the security warranties Big wants.  But when Startup's code opens Big up to ransomware, and Big comes to collect for its hurt, Startup goes bankrupt.  Big has a solid legal claim for a couple million, but Startup doesn't have it.

Big's purchasing people should have looked at Startup's size and required some insurance.

Warranties and indemnities themselves work a bit like insurance.  When a bad thing happens, seller covers buyer.  But real insurance means an outside insurance company: insurer covers seller for bad befalling buyer.

Naturally, insurance companies charge for their coverage.  How much they charge depends on how they size up the insured and their customers.  When they insure against security problems, expect questionnaires about past breaches, security practices, employee training, and so on.  Expect questions about contract terms, prices, and customers.  The more they stand to cover, the more invasive the insurer's intercorporate tell-all.

Of course, insurance companies have also been known to go bust.  Enter rating agencies.  Savvy buyers, especially big companies, require not just insurance, but insurance of a certain kind, with certain limits, from insurers rated certain ways by agencies like A.M. Best or Standard & Poor's.  They also require rights to get certificates of insurance---written summaries, _from insurers_, of the coverage they've written _for customers_.  Even if they'll only actually ask if-when they get nervous.

We have now reached core financial infrastructure.  Ratings agencies have scandals, too.  They're international news.  Bad news.

## Market Failure: Prevention

So much for protection when bad things happen.  And that's hardly the whole game.  Software users of all sorts would clearly prefer avoiding security crises in the first place to falling on a firm contractual safety net.  And there are also some limits to what warranties, indemnities, and insurance can catch, monetarily and otherwise.

Upstart, Inc.'s a startup, but they seem responsible.  They offer broad indemnity and carry credible insurance.  But Big Co.'s taking a big, strategic risk on them.  What if something goes wrong, Big loses its market lead, and Rival Inc. seizes pole position at the critical moment?  Even a hefty insurance payout won't make up for that.

Big may ask Upstart not just to take responsibility for security _results_, but to meet standards for its security _practices_.  As a minimum test of corporate maturity, they might require compliance with the American Institute of Certified Public Accountants' System and Organization Controls.  Or they might take an ISO 27000-series standard instead.  Groups like [NIST](https://csrc.nist.gov/Projects/ssdf) and [CISA](https://www.cisa.gov/uscert/bsi/articles/knowledge/sdlc-process/secure-software-development-life-cycle-processes) publish frameworks specifically for secure software development.  Even pickier customers could require key staff maintain [individual certifications](https://www.isc2.org/Certifications/CSSLP).

Some standards only require a company to credibly claim compliance.  Others involve outside accountability, with auditors ticking the boxes.  As with involving an insurance company, reputable outside audit makes collusion harder to manage.  The more groups involved, the more expense, but the harder to sustain a conspiracy.

## Sounds Familiar

If you're in the software industry, likely none of these come really count as breaking news.  They're exactly what we've been doing for <abbr title="business-to-business">B2B</abbr> <abbr title="software as a service">SaaS</abbr> for years, and for niche commercial installed apps even longer.

Pick a random, famous vendor and go find their website.  You'll likely find a list of certs and standards squirreled away in their marketing pages.  If they post public terms of sale, they may or may not include meaningful protections.  But the people behind the "contract sales" link in "enterprise" column are likely sick of negotiating them.

Open source broke with these practices by standardizing on license terms that disclaim all warranties and liability.  That's the part of every license that reads something like this:

> The software is provided "as is", without warranty of any kind, express or implied.... In no event shall the developers be liable for any claim....

Usually these parts are in `SHOUT CAPS`, because even US contract laws imply some reasonable defaults, informed by widespread expectations.  You can override those defaults, which is what these disclaimer try to do.  But the overrides have to be called out from the rest of the text.  Lawyers interpreted that to mean `SHOUT CAPS`.

Some jurisdictions, including [a couple states of the USA](https://en.wikipedia.org/wiki/UCITA), and, I'm told, some foreign countries, actually insist on minimal warranties for software _no matter what software license terms say_.  These aren't defaults but mandatory features.  You can't `SHOUT CAPS` your way out of them.

There have also been pushes, even in the United States, to apply more products-liability rules to software, at least when customers are lone consumers rather than firms.  This is why more recent open licenses, like the [Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0#no-liability) and [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html#no-warranty), add qualifications like "as far as the law allows" and "unless required by applicable law".  Sometimes the law doesn't let you say and enforce quite _whatever_ you like.

In the early days of open source, when a lot more leading work was still done on free hacker cycles, it made intuitive sense that unpaid volunteers didn't want to write little insurance policies for whoever found their work online.  It also made sense that trying to was pointless.  They couldn't afford it, financially.  What they could stake was their reputation, which they did by publishing under their names, rather than secret pseudonyms.  They took risk in the same "currency" as they stood to gain, which happened to not be money.

Rep rather than money may seem reasonable enough with the errant-hacker archetype in mind.  But we don't call terms reasonable because one side's line makes sense.  We let both sides balance it out, disciplined by competition.

There's no inherent reason open developers can't stand behind open products with more than their names.  There's also no reason companies can't compete on security guarantees for open products.  Indirectly, they already do, every time they use their corporate name to push a project's profile.  Smaller players do similar, bragging on big, credible adopters byname.

If Facebook uses it, don't you feel a little safer about now, even if you don't like Facebook?  Safer than about that other project, with logos you've never seen before?

Rep is money like money is time.  Companies are spending plenty of time on open source.  Insofar as they're staking reputation, they could stake money, too.

## Ridiculous

I am a ridiculous person to be writing all this on the Internet.  In the late 1990s and early 2000s, I was one of the dial-up kids "battling" the business meanies calling open source bunk for lack of a vendor "standing behind the product".

The idea that people would use software without paying for it wasn't crazy.  I didn't have any money.  The idea that people would use software without getting any assurance of quality, safety, or reliability wasn't reckless to me.  I wasn't doing anything important, and any time spent was education, not waste.  As long as "user beware" meant more code available for zero dollars, it was all good for me---modulo not learning how markets address security when it matters.  Oracle's sales team could all go to Hell.

I wouldn't put Oracle's sales team in charge of public policy today, either.  But as fun as "given enough eyeballs, all bugs are shallow" was to [meme](https://en.wikipedia.org/wiki/Meme)-splain into comment boxes, it wasn't a full story, either.  The Internet grew up and built out.  The market in software begat a parallel market in vulns.  Ever more eyeballs started looking for zero days more than patch credits.

In short, reality reasserted itself.  Minds drew to the pure conceptual simplicity of 1990s-vintage openness, as an ideal and as implemented, like eyes draw to the crisp, bright lines of a clean white linen shirt.  But nature abhors it.  We've got our hands dirty now.  Absolutes take a price.
