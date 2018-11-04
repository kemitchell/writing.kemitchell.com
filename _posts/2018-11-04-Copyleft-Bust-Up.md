---
title: The Great Copyleft Bust-Up
description: new loopholes, licenses, and coalitions in open source
layout: post
tags:
- SSPL
- Open Source
- Licensing
- Copyleft
---

What's going on with new software license terms for businesses?

[Redis Labs has some.](https://redislabs.com/community/licenses/)  [Neo4j](https://github.com/neo4j/neo4j), [Dgraph](https://blog.dgraph.io/post/relicensing-dgraph/), and [Vespene](https://medium.com/@michaeldehaan/going-with-the-commons-clause-1bdab4c15e5d), too.  [Mongo did its own.](https://www.mongodb.com/licensing/server-side-public-license)  [Midas guy's in favor.](https://techcrunch.com/2018/09/07/commons-clause-stops-open-source-abuse/)  [A whole new VC firm wants more.](https://changelog.com/podcast/320)  Why?

The two great camps of copyleft developers---software freedom activists and competitive upstarts---have split apart again.  Upstarts can no longer achieve their goals with activist copyleft licenses.  Activists don't inhabit the same computing universe, or feel the same pain.  So upstart copyleft developers are writing new licenses for themselves, on their own.

That loss of copyleft cohesion threatens the historic balance that has kept open source broad-based.  Permissive developers, riding a decade of adoption success and wary of copyleft to begin with, wonder now more than ever whether why they abide copyleft complexity and politics.  Permissive points register all the more strongly, with copyleft developers too busy recriminating to answer them.

None of this is new.  Young software businesses with roots in open source have written new, open-style licenses as long there's been "open source", and nearly as long as there's been "free software".  Historically, those new licenses acted as an early warning signal, prompting efforts to patch and strengthen existing copyleft terms that both activists and upstarts could get behind.

We are seeing the signal.  But also signs that activist and business copyleft developers won't reunite.  Rather than rely on activist institutions for community cover and cohesion, companies adopting new strong-copyleft terms may, for the first, time, choose to stand on their own.  They are courting allies among larger businesses choosing open source, on pragmatic grounds.  They are setting the blessings of pre-corporate open source ideologies behind.

## Adoption

Newcomers learn quickly that open source can be permissive, or it can be copyleft.  But that has never been the whole story.  Reasons for each of those broad license choices vary.  Software developers choose permissive or copyleft licenses to achieve myriad goals, not just in relationships between developer and users, but in relationships among developers themselves.  There isn't one balance of power, but many.

To understand the new terms, we need to understand the developer needs they address.  To do that, we need to talk about licenses the way we talk about software.  Licenses implement specific legal features and functionality.  License users---developers licensing software---adopt specific implementations to meet diverse goals.

To understand what the new terms say about the future of open source as a movement, we need to see open source for what it is: a banner raised by a coalition of diverse ideologies, goals, and interests who've invested in it for the last twenty years.  We have to look through the binary permissive-copyleft dichotomy to the underlying requirements those license choices fulfill.

## Permissive

The permissive license user base comprises two historic segments.

The BSD school of hackerdom rejects intellectual property and its hassles.  Ideally, BSD school hackers wouldn't use licenses at all.  Intellectual property laws affecting software would be struck from the books, leaving developers free to use, change, and share whatever source code they find.  Short permissive licenses like BSD, MIT, and ISC offer the closest practical approximation.

Established and well capitalized businesses seek free passage in and out of corporate software silos.  Ideally, software they provide as loss leaders, share to defray development costs, or popularize for strategic advantage would painlessly and immediately flow to potential customers and potential contributors, especially big ones with substantial capital, engineering talent, and market influence.  Permissive licenses like Apache 2.0 minimize firm-to-firm friction.

Both BSD school hackers and established businesses choose permissive licenses.  But their differences of purpose show through, if we know where to look.

Radical BSD school hackers choose precariously stripped-down academic licenses like 0BSD/FPL, grating antilicenses like WTFPL, and bare assertions that their code is public domain.  Their tone and content scare away many established business users and contributors.

Established businesses prefer contract-style licenses that lawyers, and often only lawyers, can really read.  They particularly like licenses with robust patent grants, but also defensive termination provisions that let them sue on their patents in the event of a corporate standoff.  Length, style, and patent terms rankle BSD school hackers, who resent long terms, despise software patents, and decry firms for proliferating them.

BSD school hackers reject the very legal and contractual regimes at the core of established software company business models.  Established businesses abide BSD school hackers' insistence on openness, until it comes to what they sell.  But both BSD school hackers and established businesses want open source licenses that reverse legal defaults that otherwise restrict software.  Despite deep underlying tension, the permissive license user community continues to share terms.

## Copyleft

The copyleft license user base also breaks down in two storied camps.

Free software activists reject closed software as an ethical affront.  Ideally, they wouldn't need copyleft licenses at all.  The law would require that all software come with source code, and that all source code be free, as they define free.  AGPL comes as close as possible, serving as a kind of alternative software statute for the community.

Competitive upstarts seek free access to open infrastructure and collaboration in their quests to establish themselves.  Ideally, everyone who uses their work would contribute back, and those contributions wouldn't simply play into their more powerful competitors' hands.  Very strong copyleft licenses, like RPL, come as close as possible, requiring the most code back in the most situations.

Both software freedom activists and competitive upstarts choose copyleft licenses.  Their differences have been harder to spot, until recently, as upstarts tended to repurpose activist licenses for their own goals.  That was not always the case.

The most important free software activist organization, the Free Software Foundation, expounds a complex, esoteric code of licensing ethics.  Its self-styled philosophy shapes its licenses.  FSF terms sport long, preachy, propaganda preambles.  Their copyleft rules take self-imposed handicaps, limiting how much code they require back, and when.  But upstarts often accept those shortcomings.  Sometimes for the benefit of license compatibility.  Sometimes for affinity with the activist cause.  Sometimes for inability to write and socialize shorter, stronger copyleft licenses of their own.

Software freedom activists regard upstarts' competitiveness with unease.  They worry about companies that use copyleft to take privileged positions in projects.  They begrudgingly accept use of their licenses for "selling exceptions", or vending private permission to build nonfree software with copyleft code.  For software freedom activists, copyleft is a means to software freedom, an invitation to do right, not a tool for excluding others, a toll booth on the road to do wrong.  Competitive upstarts rankle at activists' sanctimonious moralizing, and pay a price for the quirky, labyrinthine drafting style of the GPLs.

In the end, both software freedom activists and competitive upstarts want license terms that require sharing back.  Tension between activists and upstarts is no more fundamental than between the BSD school and established companies.  But the copyleft user community is splitting apart.

## Narrative

Ask people affiliated with the Open Source Initiative about free software, and many will tell you that it isn't really any different from open source.  Free software just preached too much fire and brimstone, missed the rebrand, and lost mindshare.

Ask folks affiliated with the Free Software Foundation about open source, and many will jump to tell just how different it is.  Open source strips free software of its values, pandering to the nonfree industry with promises of better, cheaper code, which doesn't happen without unifying community spirit.

That is the compelling, insider narrative of the birth of open source and the wooing of big business to the scene.  It's a story of name-brand contenders---OSI and FSF---and their partisans.  Not the developers who choose free software and open source licenses.

Bringing open source to business, and business to open source, has been a process of long, slow, occasionally sudden progress.  Since setting up the Open Source Initiative and coining "open source", decisions have been altogether less dramatic, more mixed, more organic.  Change came as much with developments in software and the market more broadly, and the medium- and long-term effects of many small steps, than with dashing, newsworthy gambits.

## Cohesion

In that more nuanced history, we can see that the activist and upstart segments of the copyleft user base have split before.

In the end, the Open Source Initiative has approved every major license published by the Free Software Foundation.  Both organizations have also approved copyleft licenses drafted by upstarts, free of free software rhetoric, from Sleepycat on.  But fairly early in open source history, circa 2002, OSI and FSF parted ways on a particular kind of license: strong copyleft or "reciprocal" terms drafted for companies and business-contract style, ignoring FSF's self-imposed limits on how much code copyleft could require sharing back.  For a time, approving those licenses made OSI the institutional home of strong copyleft, responding to upstart needs outside FSF's comfort zone.

None of those licenses achieved widespread popularity.  Several served as waystations for the specific companies, and even the specific software, for which they were drafted, on their way to GPL relicensing.  Indeed, the business reciprocal licenses fell predictably short of perfection.  But they hit high water marks for requiring patches back and robust closure of the "ASP loophole", also known as the "SaaS loophole" or "Google problem".  They influenced later activist licenses that largely replaced them in practice.

Willingness to accommodate upstarts tracked an important line of propaganda in the early years of the Open Source Initiative.  Part of achieving business acceptance of open source was putting open source's merits in loosely economic, business terms.  To break the link between open source and noncommercial or even anti-commercial attitudes, it helped mightily to theorize and demonstrate how open source could augment existing business models, or even power models of its own.  Before big companies flocked to the open source buffet, smaller companies, especially engineer-driven software firms where allied programmers held authority, went to work in the kitchen.  Individuals and small firms wrote the code that showed open source could work, on the production side, and also made open source software worth using, on the adoption side.

In time, the Free Software Foundation succeeded in bringing many upstarts back into its fold with Affero GPL.  Affero closed the loophole that allowed nonfree software to be made from GPL code if the resulting program was run to provide a network service, rather than sent to users for them to run for themselves.  However, outcry and fork threats from permissive interests kept the FSF from merging its new, stronger terms into mainline GPL at the next major update, version 3.  The fork made it easy for software users to isolate AGPL as an aberration, an extremist diversion.  Such projects helpfully mark themselves, using AGPL, much as anti-IP extremists do, with WTFPL.  Nonetheless, on the developer side, AGPL took the top spot as the cutting-edge, best-patched, broadest-supported implementation of strong copyleft: a license that makes software available for use in free software, but not in proprietary software.  In the right company, many activists speak of AGPLv3 as the real GPLv3 to this day.

Once again, competitive upstarts who couldn't afford to draft and propose their own terms adopted a good-enough activist license to meet their needs.  Many of these projects, it turns out, used little or no other GPLv3 or AGPLv3 software.  The point was keeping competitors out, not jumping in with the activists.  But upstarts welcomed allies in defending the new, stronger license as free and open source, and activists welcomed a broader base of support to overcome permissive-leaning objections.  In the end, an upstart company worked AGPLv3 through the Open Source Initiative's approval process.  With permissive terms and interests ascendant, activists and upstarts needed each other.

## Bounty

AGPLv3 inherited the self-imposed limitations and complexities of Free Software Foundation license drafting.  But for a time, none of that mattered.  Closed software companies dutifully banned AGPL company wide, often on strength of reputation alone.  If they used AGPL software, they did so under alternative, private, commercial licenses, brought in by procurement rather than by policy.  Observing this, upstarts began adopting the license for like effect, also more or less by rep.  Thus, AGPLv3 became, for a brief span, both bona fide and functionally "free for free software".

But only in practice.  As the value of commercially relevant software under AGPLv3 grew, so did incentives to find new loopholes, new ways to work AGPLv3 code into nonfree offerings.  In other words, to actually read what it said.  As with GPLv2 before it, broader adoption of AGPLv3 copyleft funded a de facto bug bounty: find a loophole, win early-mover advantage with the code.  The bigger and more established the licensee, the more it could leverage that advantage.  AGPLv3's scope, length, and complexity made just that much more attack surface.  The attention of large firms put savvy legal counsel capable of assessing technical alternatives---the bounty hunters---on the job.

Once again, enterprise legal cracked the activist license.  They've found arguments sufficiently strong that both sides in a lawsuit would have to field legal talent.  Advantage: enterprise.  That is the complaint we hear from some upstarts with new, stronger licenses.

We see it also in their terms.  Some, like Commons Clause, eschew the complexity of open source by writing direct prohibitions on what their competitors are doing that they don't want to allow.  Conversely, MongoDB's Server Side Public License, reflecting means to field more legal time and talent, strengthens copyleft, relying on a requirement to share code back to exclude competitors who serviceize the software.

We could look at these terms as closing two related loopholes.

There's an <dfn id="api-loophole">API Loophole</dfn>:  AGPLv3 arguably does not reach code in larger programs built with copyleft code if combination occurs by calls over standardized inter-process communication mechanisms, like local sockets or remote HTTP requests, rather than by linking to or changing copyleft code.  See especially the definitions of "modify" and "modified version" in section 0 and the first paragraph of section 13.

There's a <dfn id="container-loophole">Container Loophole</dfn>:  AGPLv3 arguably doesn't reach beyond the specific system running it---physical, virtual, or containerized---to the broader constellation of networked systems comprising an application.  See especially the definitions of "Corresponding Source", "System Libraries", "Major Component", and "Standard Interface" in section 1.

For upstarts considering AGPLv3 as a "free for free software" implementation, facing competition well versed in API composition and containerization, these are critical bugs.  The license fails to provide clarity for exactly the kind of software development incumbents are practicing, evangelizing, and monetizing as service providers to the rest of the industry.

## Commercial

If it were just that simple, the answer would be clear enough:  Write a very strong copyleft license, and present it as a reunification license for hardline software freedom activists and upstarts.  That was the brief for the [Parity Public License](https://licensezero.com/licenses/parity) that I wrote for [License Zero](https://licensezer.com).  But stronger copyleft isn't all that's going on in the new terms like Commons Clause and SSPL.  Their competitor-excluding terms are stronger than AGPL, at their outer limits, but also specifically targeted, selective.

Both Commons Clause and SSPL carve out permissive-license safe zones within otherwise commercial-use or copyleft rules.  Both aim to allow continued use of applications, like databases, API-composed into broader proprietary systems, like web applications, while simultaneously restricting or requiring service offerings of those applications to be made open.  In other words, loosely: permissive for integrators, restricted or strong-copyleft for serviceizers.  Even as these new terms close API and container loopholes, they free the most direct development use cases from copyleft.

A hybrid license that achieves that split clearly and effectively would afford best-of-both-worlds license functionality for upstarts using open source projects as loss leaders to proprietary service offerings:

- a passport to broad corporate adoption, the established business benefit of a permissive terms

- a competitor-excluding "free for free software" rule, the competitive upstart benefit of strong copyleft

- continued "open source" status

The trick is setting the scope of the copyleft terms to permit uses the developer welcomes and require maximum reciprocity for uses they fear.  Not to mention making bona fides as open source.

Such an approach spans permissive and copyleft user groups selectively.  It caters to the business interests, not the activist causes, on both sides.  BSD school hackers don't want even stronger, wordier, half-copyleft licenses.  FSF loyalists don't want philosophically mute, uncompromisingly aggressive, half-permissive forks of their terms.  SSPL isn't out to please either ideology, and it won't.

If the commercial segments of current permissive and copyleft user bases come together in support, it doesn't have to.  Call it "commercial open source".  Call it what you like.  SSPL intentionally permits building nonfree services, and it uses intellectual property rules to exclude competition in facilitation, to support the developer, along the way.  There's a latent, underserved user base for both.

## Conflict

As within copyleft and permissive user bases, there's inherent tension in the new, theoretical commercial open source coalition, too.  A basic business conflict of interest.

Many of the firms rushing to adopt new, selectively competitor-excluding terms do so to protect themselves against incumbent software companies.  The database developers, for example, grasp for defenses against platform-as-a-service providers.  Those cloud providers' natural open source mode is selective release under permissive terms to drive demand for paid products and services, create strategic advantage, and spread maintenance costs.  They voraciously consume permissively licensed software from others.  All permissive, all the way.  At least in the short term, incumbent software companies would prefer their databases permissively licensed, thank you very much.  Which explains their legal-engineering efforts.  Loopholes turn copyleft software into permissive software.

Why would they approve anything else?

## Credibility

Between Commons Clause and SSPL, Commons Clause sparks far less interest, for licensing specialists.  Getting the license functionality you want, with less risk of compromise down the line, is a lot easier if you can just describe the use cases you don't want to allow, say they're not allowed, and ignore what the open source peanut gallery has to say about it.  But in the ongoing dialog between competitive upstarts and established companies in software, businesses willing to adopt those kinds of terms play an essential part.

Companies adopting Commons Clause---clumsily structured, oddly named, and all-around hackish as it may be---demonstrate that they won't succumb to pressure to license permissively, abide vulnerabilities in activist copyleft licenses, or forgo the benefits of open development.  They'll take the community heat from BSD school hackers.  They'll take the heat from software freedom activists.  And they'll take the heat from would-be gatekeepers, most notably the Open Source Initiative.

These voices ask:  Why won't these companies listen us?  The answer:  You're not a part of their conversation.  They're talking to their business competitors, across the table, and to potential business allies, on their side.  Generalist community groups don't have leverage to command a seat at that table, and don't offer value as mediators.  What can they offer?  All three major cloud providers are marquee sponsors of the Open Source Initiative.   The last time the Free Software Foundation tried to strengthen its terms, it bowed to outside pressure.  Upstarts are ready to organize and speak for themselves.

Establishing willingness to stand their ground secures a platform for the argument that could bring established software businesses over into a new, permissive-copyleft-hybrid, pan-business, "commercial open source" coalition: enlightened self-interest.  Isn't it good for established software business, long term, to ensure upstarts access to community development and financial compensation?  Wouldn't ready access to both produce more valuable software for established providers to hock through their platforms and marketplaces?  Wouldn't platforms prefer to let a healthy ecosystem populate their service-app stores, instead of doing it themselves?

Incumbent software companies have bought the enlightened self-interest argument before.  It's how they ended up on the OSI website.  But they're also far more concerned with competition among themselves, to establish cloud computing positions, than with the fates of comparatively micro-scale firms turning out the apps customers want to run on those platforms this year.  Open source plays a starring role in ground-game strategy for cloud firms, but it looks more like the OpenStack Foundation and the Cloud Native Computing Foundation---object lessons in enterprise permissive license adoption---than a VC portfolio of scrappy upstarts trying to sell add-on features and hosting.  Can cool, wise heads in the corporate fray sell diverse, long-term strategies, internally?

## Reconciliation

A new, self-consciously commercial coalition in open source, operating at the level of the older permissive and copyleft coalitions we've known so far, would be something new.  If we wanted to bet on the past, instead, we'd take reconciliation within the copyleft user base.

In other words, a new, even stronger copyleft license that both software freedom activists and competitive upstarts could rally behind, in mutual support.  Probably another patch to GPL, like SSPL, but a patch the activist community could make its own.  A Mongo GPL that FSF could make GNU Mongo GPL to close the API and container loopholes, as Affero GPL became GNU Affero GPL to close the ASP loophole.

There is cause for doubt in the details.

I don't think the Free Software Foundation is of any mind to write a stronger copyleft license right now.  It is headed in decidedly the opposite direction.  More and more, the FSF has constrained itself to soft power, emphasized conciliation over enforcement, declined to make punitive examples, and accepted praise, attention, and stewardship of key but aging projects, rather than double down and scare off fellow travelers.  Doctrinally, they've stuck to dogma on license drafting, notably freedom zero absolutism and private changes, that prevent them from closing the new loopholes robustly.  Software freedom is a young, angry movement where widespread computing, and software freedom, are also new.  But only there, far from the industry center of mass where SSPL is relevant, and FSF feels anachronistic.

More concretely, the Free Software Foundation doesn't appear to share upstart business concern about API and container loopholes, as it once shared concern about the ASP loophole.  FSF partisans point to activist users of AGPLv3 and see nothing wrong.  In large part because activist projects under AGPLv3 don't offer nearly the business bounty value that upstart projects do.  They have succeeded largely within a niche activist community, appealing to its interests and style of computing.  And in large part because activist AGPLv3 developers' use case is different.  The license was tailored to their needs, and will fit a while longer.

That's not to say there's no hunger for a more extreme, streamlined copyleft license among radical activists.  There's plenty of frustration with compromise.  But here the cross-cutting nature of the new business-oriented licenses blocks the path.

I don't perceive any activist demand for the peculiar combination of permissiveness and copyleft, and the specific line between, that upstart open source database developers crave.  When software freedom activists want a permissive license, they use Apache 2.0.  In vanishing edge cases, they use LGPL.  The FSF position on "service as a software substitute" is that it's pernicious.  Why would activists want a license that allows making free code nonfree for the good kind of software---software you run for yourself---and requires keeping free code free for the bad kind---services substituting for software you run for yourself?  Activists, independent and small-scale, aren't living in the "new normal" of containerized, orchestrated service clusters deployed on rented infrastructure.  They can't afford thousands of dollars in service charges a month.

Overall, I'm sad to say that I think FSF has tightened its own bind.  It knows it needs allies, but it's keeping the wrong company, courting established business with lots of developers to spare, but no practical common interest.  Software freedom activism has trusted that purity of message will create a groundswell of support sufficient to turn the tide of permissive alternatives, thin-client computing, and the relegation of free approaches to tooling, back-end components, and building blocks for proprietary end-user applications.  It has optimized for taller pulpits from which to preach its message.  But it's drowned out as more economic interests join in and take over, and can't match commercial volume.  Unless or until software freedom reality comes to be felt as a crisis, and not just understood as one, I don't think the Free Software Foundation has either a stronger license to give, or enough flexibility to accept someone else's.

## Initiative

Eliot Horowitz, who proposed the Server Side Public License for Open Source Initiative review on behalf of MongoDB, wrote in [an early response](http://lists.opensource.org/pipermail/license-review_lists.opensource.org/2018-October/003672.html):

> It's clear from some of the responses on this list that some believe copyleft should not be extended this far.  But we want the discussion to be clear:  Is this because doing so is impractical, or because it is not what all communities want from a normative viewpoint? ...
>
> If it is not what all communities want, then is it enough that some do?

That is the question.

He goes on:

> We expect that others will adopt our license if it is approved and we want them to have the chance to do that.

True.  A whole cohort of upstart companies, many founded by developers raised in open source, want to drive harder, selective copyleft bargains with cloud providers serviceizing their work.  Many believe in the outsized value open code can produce, but see from experience that companies standing tall in the industry will readily reach down to pick the low-hanging fruit, like hosting, at the expense of smaller companies that can only reach that high.  Upstarts have no ready license option to express that they need that opportunity for themselves, to keep working as they've been working.

Can the upstarts, together, establish that open source copyleft should strengthen and adapt to meet their specific needs?  If acceptance requires a broader coalition, especially one that includes the very cloud providers these terms aim to hinder, SSPL isn't going anywhere fast.

But perhaps these upstarts manage to register enlightened self-interest among the giants, and attract their support.  Would that be enough?  Orthodox Free Software Foundation activists will oppose.  So will anti-IP hackers.  If acceptance requires consensus, and consensus requires those voices, SSPL still isn't going anywhere.  Neither, frankly, is any other remotely interesting new license.

## Realpolitik

Neither the Open Source Definition, the Debian Free Software Guidelines, nor the Free Software Definition offers a clear limit for how strong or selective open source copyleft terms can be.  Their broad generalizations, written to pitch broad tents for a variety of licenses and license use cases, can't tell us whether SSPL is a free or open source license.  That is not a matter of technical conformance, but of credibility, clout, and acceptance.

There is no playbook for credibility, clout, and acceptance in open source.  Only history.  Yet, the history we have, the Old Testament of open source, was written before broad enterprise acceptance, before the weight and interest of those players came to bear not just on open development but within open development.  Before firms repurposed "open source", a means to sell community to companies, into a means for companies to sell software to other companies.

Open source has made a new covenant.   In the new era, open source is defined, more than anything, by corporate adoption and the use of open source to make closed.  Business projects have the credibility.  Business interests have the clout.  It's acceptance by business that moves code and makes decisions.  This is what newcomers learn that open source means, by experience.  That is why they teaching that it means, or ought to mean, anything else falls flat.

The meaning of open source has already changed.  Open source is already "commercial open source".  The initiative to bring open source to commerce was successful, ran its course.  Now the initiative belongs to industry, and industry's initiative is overwhelming.  Thus the software industry will shape open source, quite without any grand, coordinated plan, according to its needs.  SSPL, new paradigm or sidetrack, is merely symptomatic.  But regardless of SSPL's success or failure, the very viability of the notion proves a crucial point.

Activism, for software freedom or against intellectual property, no longer offers business value.  It created the preconditions and eventually catalyzed a change in industry, but industry now makes open source for itself, and participation is strategically essential, not ideologically desirable.  Industry needs good software and a way to get it cheap.  If calling that way "open source" helps, that is what business will do.
