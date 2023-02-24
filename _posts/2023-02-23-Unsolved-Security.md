---
date: 2023-02-23T18:15:38-08:00
title: Open Source Unsolved Security
description: the pointy-headed corpo-types warned us
series: Killjoy
tags:
- Security
- Open Licensing
---

How do we grow software security talent?  Once we have it, how do we apply it to the right problems, in the right projects, at the right times, with the right support, forever?

Apparently not how open source does it now.

The solution to the open confidence crisis isn't [standardized packing slips](https://en.wikipedia.org/wiki/Software_bill_of_materials), [a roving security inspectorate](https://openssf.org/), a [centrally planned sustainable-software economy](https://sovereigntechfund.de/en), or a [sign-off scheme](https://blog.tidelift.com/the-state-of-package-signing-across-package-managers).  It's not more software or another foundation fundraiser.  This isn't actually a software problem.  It's much bigger than that.

It is also, thankfully, a solved problem.

Open source _unsolved_ it.  Now it's crept back.

## Known Class

The software-security problem is a product-service quality problem.  People need secure software, but they can't tell how secure software is just by looking at it or trying it for a while.  The software's developers know best, but their incentive is to spout pure confidence.  More business---or "adoption"---for them.

To allocate resources effectively, we need input from developers and users, and we need those signals balanced.  Not just among users and developers, customers and vendors, but among developers' developers and customers' customers, too.  However long those chains may be.

The structure we want is complex, but we can grow it from simple, repeatable parts: legally enforceable promises from developers to users to cover them financially when things go wrong.  Lawyers call these "warranties" and "indemnities".  Think "we'll warrant that security holes get patched in thirty days."  Or "we need data-breach indemnity to buy this."

Lawyers and business people know how to write warranties and indemnities.  They fit nicely into license agreements, terms of service, and support contracts.  The courts know how to read those terms.  They're a thing.

They were relatively rare in the wilds of early software, because early software was an unreliable, scarcely functional mess rarely exposed to a networked environment.  Only recently has the industry matured, bringing user expectations up to near parity with other things we buy and sell.

## Network

Warranties and indemnities for software security encode signals about security in legal terms.  Terms in turn affect prices.

Users needing more security negotiate for stronger terms and pay more for them.  Sellers taking more responsibility demand more compensation, with which they can afford more security.  If they fail to invest, they can end up owing customers for consequences out-of-pocket.  When they invest wisely, they earn more take-home profit for their trouble.  A bounty on competence encourages competence.  Security know-how develops, gets paid, and routes its way to the most acute needs.

Deals balancing security risk and cost form edges in a kind of network.  The network routes software, terms, and money among buyers and sellers.

Any particular edge in the network can be a black box to all others.  A SaaS provider needn't publish the terms or the pricing for the framework it bought.  It might even sign a nondisclosure agreement against doing so.  But the network still learns and teaches from the deal.  The terms and prices the SaaS provider gives reflect the terms and prices it can get from all its suppliers.  Resources and requirements flow both ways through each firm.

Each link of a network like this depends on a system of enforcement for all the payments, warranties, and indemnities.  Governments provide these systems for user fees in the form of public courts.  The judges they hire enforce terms the governments write---public laws---but also terms autonomous parties opt into---private contracts.  Each state makes its courts mandatory within the scope of its power, or jurisdiction.  They may make deals with other governments, akin to [peering](https://en.wikipedia.org/wiki/Peering), on [enforcing](https://en.wikipedia.org/wiki/Full_Faith_and_Credit_Clause) each other's [decisions](https://en.wikipedia.org/wiki/Convention_on_the_Recognition_and_Enforcement_of_Foreign_Arbitral_Awards) and [whose laws apply](https://en.wikipedia.org/wiki/Convention_on_the_Law_Applicable_to_Contractual_Obligations_1980).

The legal system for any given state is usually centralized and hierarchical.  But atop that platform, buyers and sellers weave their webs, on their own.  There's no single brokerage through which to clear software purchases.  There's no judge or regulator to preapprove all their terms.  Buyers and sellers come and go, make deals and break them, falling back on the courts as needed.  The result is a constellation of self-assembling, self-healing, self-balancing exchanges.  Any particular route through that graph, in the form of a tree of suppliers down to a customer, is a "market-based supply chain".

## Interlude: Supply Chains

People used to procuring products and services professionally like to talk about "open source supply chains".  Some of this is "supply chain" being the nearest familiar concept available.  Too much of it is wishing aloud that open source had features it doesn't.

There aren't any warranties, indemnities, or service obligations in open source as such.  Companies don't get to be "adopters" at the start, when customers would have to pay, then, comes a problem, magically transmute into customers, when adopters would have no one else but themselves to blame.

Open source is a distribution system.  Think containerized shipping: some standards, some conventions, a whole lot of compatible infrastructure, and a gaggle of vendors, all vaguely unified by a buzzword.  A pretty big deal.  But not a supply chain.  Edges of the graph only point one way.

Global trade in _computers_ is a supply chain.  It uses containerized shipping, among other kinds.  Many computers get moved in twenty-foot boxes through ports, ships, trains, and trucks.  But you don't file a warranty claim with [Maersk](https://en.wikipedia.org/wiki/Maersk) for dead pixels.  You file with the store that sold you the laptop, or the company whose logo's on the lid.  That's your "supplier".

Starving open-source types, heed my call here.  Every "open source supply chain" is a corporation whimpering for a warranty, imploring for an indemnity, sniveling for a support contract it doesn't want to admit it should already have.  It's a corporate [Freudian slip](https://en.wikipedia.org/wiki/Freudian_slip) betraying a wish you were actually in business, and not just a licensing contributor.

The question is whether you can offer what they're missing for what they're willing to pay.  _Not_ whether they will pay.  These are responsible grown-up-types.  They expect to pay.  They keep subconsciously forgetting they haven't.

## Failure Modes

All of this theory sounds pretty swell.  The emergent behaviors of market-based supply chains address product-service quality problems with prices and contracts.  But as we all know from actual life, market-based supply chains also exhibit failure modes.  They hit and hurt different from failures in public goods.

Fortunately, many well known market problems also have well known, market-compatible solutions.  So much so that the go-to policy fix for big public-goods problems is turning public goods into private ones and solving those problems instead.

## Consumers Get Screwed

Library Co. does a deal with Framework Inc.  Framework Inc. turns around and makes its own, negotiated sale to Provider LLC.  But Provider sells to individuals, not companies.  The only terms Providers offers are heinous, leaving customers wholly on their own for any security mishaps.  The customers mostly don't read these terms, because they can't change them.

When individuals and consumer advocacy groups can't go to the Provider to drive better deals, they go to government instead.  They lobby for "consumer-protection laws" that forces more balanced on deals on providers.

Consumer-protection laws can "patch" the contract law sellers' terms run on to makes certain warranties or indemnities mandatory.  They can add new "torts" to public law that people can sue companies for committing.  They can even impose direct, affirmative requirements to take basic security precautions, with fines or other liability for failures to comply.

Consumer-protection laws can let people sue individually.  They can let them sue en masse through "class actions", which make collective action opt-out instead of opt-in.  They can empower attorneys general or state regulators to enforce on the public's behalf.  They can do some or all of the above.

Companies and their lobbyists will fight every step of the way.  Bitter competitors will unite as common front.  [A big, First-Amendment-shaped hole in competition law permits them to do this.](https://en.wikipedia.org/wiki/Noerr%E2%80%93Pennington_doctrine)

Many laws protecting security of consumers' data end up getting called "privacy laws", instead of consumer-protection laws.  The difference is largely semantic and historical.  If you are looking at a law that requires infosec practices from private entities, you are probably looking at some section of a "privacy law".

The United States used to have privacy laws only in specific areas, like [banking](https://en.wikipedia.org/wiki/Gramm%E2%80%93Leach%E2%80%93Bliley_Act), [credit](https://en.wikipedia.org/wiki/Fair_Credit_Reporting_Act), [health](https://en.wikipedia.org/wiki/Health_Insurance_Portability_and_Accountability_Act), [children](https://en.wikipedia.org/wiki/Children%27s_Online_Privacy_Protection_Act), [education](https://en.wikipedia.org/wiki/Family_Educational_Rights_and_Privacy_Act), and, after a dumb political scandal, [movie rentals](https://en.wikipedia.org/wiki/Video_Privacy_Protection_Act).  We are seeing more and more general data privacy-security laws lately, following the European Union's <abbr title="General Data Protection Regulation">GDPR</abbr> and the [California Privacy Protection Act](https://www.oag.ca.gov/privacy/ccpa).  Other US states are [rapidly piling on with their own consumer laws](https://iapp.org/resources/article/us-state-privacy-legislation-tracker/), often more effectively crippled by industry lobbies, which are playing from [both](https://netchoice.org/) [sides](https://progresschamber.org/) and angling to [override](https://en.wikipedia.org/wiki/Federal_preemption) it all [at the federal level](https://iapp.org/resources/article/us-federal-privacy-legislation-tracker/).  Meanwhile, the latest EU project, the Cyber Resiliency Act, mandates security practices head on, [threatening as it does to trample the "open" edge case](https://blog.tidelift.com/open-source-and-the-unintended-consequences-of-the-eus-cyber-resiliency-act) of no money down, no money back.

These laws tilt _everyone's_ deal with big service providers, much as labor laws tilt our deals with employers and clients.  The leverage of big companies over consumers meets the even bigger leverage of the legislature.

## Vendors Lie and Die

Some failures affect what terms buyers get in the first place.  Others attack how those terms do or don't actually work.

Startup Inc. does a deal with Big Corporation.  The deal has all the security warranties Big wants.  But when Startup's code opens Big up to ransomware, and Big comes to collect for its hurt, Startup goes bankrupt.  Big has a solid legal claim for a couple million, but Startup doesn't have it.

Big's purchasing people should have seen Startup's size and required some insurance.

Warranties and indemnities themselves work a bit like insurance.  When a bad thing happens, seller covers buyer.  But real insurance means an outside insurance company.   Seller covers buyer, but insurer picks up the check.  Or at least part of it.

Naturally, insurance companies charge for their coverage.  How much they charge depends on how they size up the risk.  When they insure against security problems, expect questionnaires about past breaches, current practices, training, systems, and so on.  Expect questions about contract terms, prices, and customers.  The more they stand to lose, the more invasive the corporate tell-all session.

Of course, insurance companies have also been known to go bust.  Enter rating agencies.  Savvy buyers, especially big companies, require not just insurance, but insurance of a certain kind, with certain limits, from insurers rated certain ways by agencies like A.M. Best or Standard & Poor's.  They also require rights to get certificates of insurance---written summaries from insurers of the coverage they've written for someone else, including when it took effect and how much it was good for.  Even if they'll only ever ask if they get nervous.

We have now reached core financial infrastructure.  Ratings agencies have scandals, too.  They're international news.  Bad news.

## Prevention and Cure

Software users of all sorts would clearly prefer avoiding security crises in the first place to falling on a firm contractual safety net.  And there are some limits to what warranties, indemnities, and insurance can catch, in dollar terms and otherwise.

Upstart, Inc.'s a startup, but they seem fairly responsible.  They offer broad indemnity and carry credible insurance.  But Big Co.'s taking a big, strategic risk on them.  What if something goes wrong, Big loses its market lead, and Rival Inc. seizes pole position at the critical moment?  Even a hefty insurance payout won't make up for the end of all management's dreams.

Big may ask Upstart to go beyond responsibility for security problems and commit to implement preventive security practices.  As a minimum test of corporate maturity, they might require compliance with the American Institute of Certified Public Accountants' System and Organization Controls.  Or they might take an ISO 27000-series standard instead.  Groups like [NIST](https://csrc.nist.gov/Projects/ssdf) and [CISA](https://www.cisa.gov/uscert/bsi/articles/knowledge/sdlc-process/secure-software-development-life-cycle-processes) publish frameworks specifically for secure software development.  Pickier customers could require key staff maintain [individual certs](https://www.isc2.org/Certifications/CSSLP).

Some standards only require a company to credibly claim compliance.  Others involve outside accountability, with auditors ticking the boxes.  As with involving an insurance company, reputable outside audit makes collusion harder to manage.  The more groups involved, the more expense, but the harder to sustain a conspiracy.

When the risk is particularly high, we can contract prevention as well as cure.

## Sounds Familiar

If you're in the software industry, none of these countermeasures likely come as breaking news.  They're exactly what we've been doing for <abbr title="business-to-business">B2B</abbr> <abbr title="software as a service">SaaS</abbr> for years.

Pick a random, famous service provider and go to their website.  You'll likely find a list of certs and standards squirreled away among their marketing pages.  If they post public terms of sale, those may or may not include meaningful protections.  But the people behind "contact sales" link in the "enterprise" column are probably sick of dickering them with those who will pay.

## The Break

Open source broke with these practices by standardizing on license terms that disclaim all warranties and liability.  That's the part of every license that reads something like this:

> The software is provided "as is", without warranty of any kind, express or implied.... In no event shall the developers be liable for any claim....

Usually these parts are in `SHOUT CAPS`, because even US contract laws imply some reasonable defaults, informed by widespread expectations, including the expectation that people will pay for valuable products.  You can override those defaults, which is what these disclaimers try to do.  But the overrides have to be called out in the text.  Lawyers interpreted that to mean `SHOUT CAPS`.

Some jurisdictions, including [a couple states of the USA](https://en.wikipedia.org/wiki/UCITA), and, I'm told, some foreign countries, actually insist on minimal warranties for software _no matter what software license terms say_.  These aren't defaults but mandatory features.  You can't `SHOUT CAPS` your way out of them.

There have also been pushes, even in the United States, to apply more products-liability rules to software, at least when customers are lone consumers.  This is why more recent open licenses, like the [Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0#no-liability) and [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html#no-warranty), add qualifications like "as far as the law allows" and "unless required by applicable law".  Sometimes the law doesn't let you say and enforce quite _whatever_ you like.

## Currency

In the early days of open source, when a lot more leading work was still done on free hacker cycles and idle mainframe time, it made intuitive sense that contributors didn't want to be gifting wee insurance policies to whoever happened upon their code.  Enforcing such terms would have been pointless, in any event.  There were not yet covered in money.

What early free and open coders could stake in early days was reputation.  They did this by publishing under known names.  As a result, they took their risk in the same "currency" they stood to gain in, which happened not to be money.  Annoying anti-tamper features of early licenses, like the [original "Artistic License" for Perl](https://opensource.org/license/artistic-1-0/), testify to concerns of these contributors.  They worried they'd be tarred with problems from ill-advised, "unofficial" patches.  So they required naming changes, lists of modifications, [credits, and no-endorsements clauses](https://spdx.org/licenses/BSD-4-Clause.html).

## Rep is Money

Rep rather than money may seem reasonable enough for [coders-errant](https://en.wikipedia.org/wiki/Knight-errant) archetypes of free software's heyday.  But when there are interests to balance, such as with security, we don't hear one side's argument, nod along if it makes sense, and stop there.  We let both sides negotiate, disciplined by competition.

There's no inherent reason developers "investing" in marketable reputation couldn't back up their work with monetary guarantees.  The issue isn't the mechanism, but the financial imbalance created by leverage: successful open devs become vastly outnumbered by their users.

More practically, there's no reason for-profit companies couldn't compete on security guarantees for open offerings.  They already do so indirectly, via reputation, each and every time they put their brands to public projects.  Smaller developers play a smaller game, bragging on big, notable adopters by name.  Between two open options, wouldn't you rather the one out of Meta, or the one that Google has adopted internally?  Even if you don't care much for big tech firms, they likely stand to lose more than you do.  And they have more to commit to secure development or security vetting.

Rep is money like money is time.  At sufficient scale, they become meaningfully exchangeable.  Companies are spending a lot of time developing open source.  They using their brands to propel and outcompete rival projects.  They could as easily stand behind free offerings with money, counting on making up the risk through more adoption, just as they do for engineering outlays now.  It just hasn't come to that.  Not yet.

## I Am Ridiculous

I am a ridiculous person to be writing all this on the Internet.  In the late 1990s and early 2000s, I was one of the dial-up kids "battling" the business meanies calling open source reckless for want of a vendor "standing behind the product".

The idea that people would use software without paying for it wasn't crazy _to me_.  After all, I didn't have any money.  And the idea that people would use software without getting any assurance of quality, safety, or reliability wasn't reckless _to me_.  I wasn't doing anything important.

Any time I spent thrashing on config files, twiddling ports, and patching source code was free education.  As long as "user beware" meant more code available for zero dollars, it was all good for me---modulo not learning how security works when it matters and you can't do it all yourself.  From where I was sitting, Mom's house, the people setting Microsoft and Oracle's sales quotas could all go to Hell.

I wouldn't put anybody's sales team in charge of policy today, either.  But as fun as "given enough eyeballs, all bugs are shallow" was to [meme](https://en.wikipedia.org/wiki/Meme)-splain into comment boxes, it was more of a pep-rally cheer than a revealed truth.  The Internet grew up and built out.  The market in software begat a parallel market in vulnerability.  Ever more eyeballs gazed across critical code, but more and more came looking for zero days more than patch credits.

Some of us play to make a name on GitHub, cashing in via VC or job offers.  Others guard anonymity like their lives, taking their pay in cryptodollars on the darknets.  The system we've built offers both games.  Trust breeds exploitation.  We tested how much trust we could get by with.  We've started finding the limits.

In short, reality reasserts itself.  Nature abhorred the pure simplicity of openness like it abhorred the righteous absolutism of enclosure.  But the world is a grody, grey kind of place, as we see it.  Stable states for the social whole are rarely very easy and pleasing for each of us alone.

So we'll seesaw back from open a bit toward closed again.  That is what we know how to do for security.  There's opportunity in making---intermediating, monopolizing---that transition.  But the greater bounty lies on understanding the logic of the balance.  Not just "how do we make open more secure?", but "what would a more securable kind of open look like?"
