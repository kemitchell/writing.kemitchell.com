---
title: The Commercial Copyleft Bust-Up
description: new loopholes, licenses, and coalitions in open source
layout: post
tags:
- SSPL
- Open Source
- Licensing
- Copyleft
---

What's going on with new software license terms for businesses?

[Redis Labs has some.](https://redislabs.com/community/licenses/)  [Neo4j](https://github.com/neo4j/neo4j), [Dgraph](https://blog.dgraph.io/post/relicensing-dgraph/), and [Vespene](https://medium.com/@michaeldehaan/going-with-the-commons-clause-1bdab4c15e5d), too.  [Mongo did its own.](https://www.mongodb.com/licensing/server-side-public-license)  [Midas List guy's in favor.](https://techcrunch.com/2018/09/07/commons-clause-stops-open-source-abuse/)  [A brand new VC firm wants more.](https://changelog.com/podcast/320)  Why?

The two great camps of copyleft developers---software freedom activists and competitive upstarts---have split apart again.  Upstarts can no longer achieve their goals with activist copyleft licenses.  Activists don't feel the same pain.  So upstart copyleft developers are writing new terms for themselves.

That loss of cohesion---upstarts abandoning activist licenses, activists opposing upstart alternatives---threatens the balance that keeps open source broad-based.  Permissive developers, riding a decade of adoption success and wary of copyleft to begin with, wonder now more than ever whether why they abide copyleft complexity and copyleft politics.  Permissive points register all the more strongly with copyleft developers too busy arguing amongst themselves to answer them.

None of this is new.  Young software businesses with roots in open source have written new open-style licenses as long there's been "open source", and nearly as long as there's been "free software".  Historically, those new licenses act as an early warning signal, prompting efforts to patch and strengthen existing copyleft terms that both activists and upstarts can get behind.

We are seeing the signal.  But also signs that activist and business copyleft developers may not reunite this time.  Rather than rely on activist institutions for cover and cohesion, companies adopting new strong-copyleft terms may, for the first, time, choose to stand on their own indefinitely.

## User Bases

Newcomers learn quickly that open source can be permissive, or it can be copyleft.  But that has never been the whole story.  Reasons for those license choices vary.  Software developers choose permissive or copyleft licenses to achieve different goals, not just in resulting relationships between developer and users, but in relationships among developers, as well.

To understand the new terms, we need to understand the developer needs they address.  For that, we need to talk about licenses the way we talk about software: as implementations of specific functionality that license users---developers licensing software---adopt to meet particular goals.

To understand what the new terms say about the future of open source as a movement, we need to see open source for what it is: a banner raised by a coalition of diverse interests, beliefs, and goals, who've invested in it for the last twenty years.  We have to break apart its major, visible camps, and look at the underlying goals that united them around specific kinds of terms.

## Permissive

The permissive license user base comprises two historic segments.

The BSD school of hackerdom rejects intellectual property and its hassles.  Ideally, BSD school hackers wouldn't use licenses at all.  Intellectual property laws affecting software would be struck from the books, leaving developers free do use, change, and share whatever source code they find.  Short permissive licenses like BSD, MIT, and ISC offer the closest practical approximation.

Established or well capitalized businesses seek free passage in and out of corporate software silos.  Ideally, software they provide as loss leaders, share to defray development costs, or popularize for strategic advantage would painlessly and immediately flow to potential customers and contributors, especially those with capital and market position.  Permissive licenses like Apache 2.0 minimize friction from firm to firm.

Both BSD school hackers and established businesses choose permissive licenses.  But their differences of purpose show through in various ways.

Radical BSD school hackers choose stripped-down versions of old academic licenses like 0BSD/FPL, grating antilicenses like WTFPL, and bare assertions that their code is public domain.  The tone and the content of those terms scare away many established business users and contributors.

Established businesses prefer contract-style licenses that lawyers, and often only lawyers, can really read.  They particularly like licenses with robust patent terms, especially defensive termination provisions that let them sue on their patents in the event of a corporate standoff.  Length, style, and patent terms rankle BSD school hackers, who like licenses short, despise software patents, and decry firms for proliferating them.

BSD school hackers reject the very legal and contractual regimes at the core of established software company business models.  Established businesses abide BSD school hackers' insistence on openness, until it comes to what they sell.

But both BSD school hackers and established businesses want open source licenses that reverse legal defaults that otherwise restrict software.  Despite deep underlying tension, the permissive license user community remains strong.

## Copyleft

The copyleft license user base also comprises two historic segments.

Free software activists reject closed software as an ethical affront.  Ideally, they wouldn't need copyleft licenses at all.  The law would require that all source code be available and free.  AGPL comes as close as possible, preventing companies from locking up free software, at least in certain ways.

Competitive upstarts seek free access to open infrastructure and collaboration in their quests to establish themselves against established competitors.  Ideally, everyone who uses their work would contribute back, and those contributions wouldn't simple play into their competitors' hands.  Very strong copyleft licenses, like RPL, come as close as possible, requiring even more code back from others than activist licenses.

Both software freedom activists and competitive upstarts choose copyleft licenses.  In fact, in recent years, upstarts have mostly repurposed activist licenses, like AGPL and GPL.  But their underlying differences show through.

The most important free software activist organization, the Free Software Foundation, expounds a complex, esoteric code of licensing ethics.  That self-styled philosophy shapes its licenses.  FSF forms sport long, preachy, propagada preambles.  Their copyleft rules self-impose handicaps on how much others have to share back.  But upstarts often accept those shortcomings.  Sometimes for the benefit of license compatibility.  Sometimes for affinity with the activist cause.  Sometimes for inability to write and socialize their own shorter, stronger copyleft licenses.

Software freedom activists regard upstarts' pragmatism and competitiveness with unease.  They worry about companies that use copyleft to take privileged positions in projects, and begrudgingly accept use of their licenses for "selling exceptions", or vending private permission to build nonfree software with copyleft code.  For software freedom activists, copyleft is a means to software freedom, an invitation to do right, not a tool for excluding others, a toll booth for charging to do wrong.

Software freedom activists reject the asymmetric, license-based power dynamics that upstarts seek for defense against established competitors.  Competitive upstarts feel dragged into sanctimonious moralizing and a labyrinth of long, unorthodox, GPL-style terms.

In the end, both software freedom activists and competitive upstarts want license terms that require sharing back.  Tension between activists and upstarts is no more fundamental than between the BSD school and established companies.  But the copyleft user base is coming apart.

## Open Source

Ask people affiliated with the Open Source Initiative about free software, and many will tell you that it isn't really any different than open source.  Free software just preached too much fire and brimstone, missed the rebrand, and lost mindshare.

Ask folks affiliated with the Free Software Foundation about open source, and many will jump to tell just how different it is.  Open source strips free software of its values, pandering to the nonfree industry with promises of better, cheaper code, which doesn't happen without unifying community spirit.

That is the popular narrative of the birth of open source and the wooing of big business to the scene.  It's a story told from the perspectives of name-brand contenders---OSI and FSF---and their partisans.  Not the developers who choose free software and open source licenses.

Bringing open source to business, and business to open source, has been a process of long, slow, and occasionally sudden progress.  Since setting up the Open Source Initiative and coining "open source", decisions have been altogether less dramatic, more mixed, more organic.  Change had more to do with developments in software and the market more broadly, and the medium- and long-term effects of many small steps, than with dashing, newsworthy gambits.

## Cohesion

In that more nuanced history, we can see that the activist and upstart segments of the copyleft user base drew apart in the past, and eventually came back together.

In the end, the Open Source Initiative has approved every major license published by the Free Software Foundation.  Both organizations have also approved copyleft licenses drafted by upstarts, free of free software rhetoric, from Sleepycat to MPL to EPL.  But fairly early in open source history, circa 2002, OSI and FSF split on a particular kind of license: strong copyleft or "reciprocal" terms, drafted by companies and company-minded lawyers in business-law style, ignoring FSF's self-imposed limits on how much code copyleft could require sharing back, and when.  For a time, OSI became the institutional home of strong copyleft, approving licenses that met upstart needs, but exceeded FSF's comfort level.

None of those licenses achieved widespread popularity.  Several served as waystations for the specific companies, and even the specific software, for which they were drafted, on their way to GPL relicensing, later on.  Indeed, the business reciprocal licenses fell well short of perfection, in many respects.  But some remain the strongest choices for drawing patches back.  Some remain the most robust choices for closing the "ASP loophole", alias "SaaS loophole" or "Google problem".  All affected subsequent activist licenses.

Willingness to accommodate upstarts tracks much influential writing in the early years of the Open Source Initiative.  Part of achieving business acceptance of open source was putting open source's merits in loosely economic, business terms.  To break the link between open source and noncommercial or even anti-commercial attitudes, it helped mightily to theorize and demonstrate how open source could augment existing business models, or even power models of its own.  Before big companies flocked to the open source buffet, smaller companies, especially engineer-driven software firms where allied programmers held authority, went to work in the kitchen.  Individuals and small firms wrote the code that showed open source could produce and made open source software worth adopting.

In time, the Free Software Foundation succeeded in bringing many upstarts back into its fold with the Affero GPL.  Affero closed the loophole that allowed nonfree software to be made from GPL code if the resulting program was run to provide a network service, rather than sent to users for them to run for themselves.  However, outcry and fork threats from permissive-leaning interests kept the FSF from merging its new, stronger terms into mainline GPL at the next major update, version 3.  That in turn made it easy for software users to isolate AGPL as an aberration, an extremist diversion.  Such projects labeled themselves, using AGPL.  At the same time, for developers, AGPL took the top spot as the current, patched implementation of copyleft: a license that makes software available for use in free software, but not in proprietary software.  Many activists speak of AGPL as the real GPLv3 to this day.

Once again, competitive upstarts who couldn't afford to draft and propose their own terms adopted a good-enough activist license to meet their needs.  Many of these projects, it turns out, used little or no other GPLv3 or AGPLv3 software.  The point was keeping competitors out, not jumping in with the activists.  But upstarts welcomed allies in defending the new, stronger license as free and open source, and activists welcomed a broader base of support to overcome permissive-leaning objections.  In the end, an upstart company worked AGPLv3 through the Open Source Initiative's approval process.

## Bounty

AGPLv3 inherited the self-imposed limitations and complexities of Free Software Foundation licensing.  But for a time, none of that mattered.  Closed software companies dutifully banned AGPL by corporate policy, often on strength of reputation alone.  If they used AGPL software, they did so under alternative, commercial licenses bought from the upstarts, by procurement rather than policy.  Observing this, upstarts began adopting the license for like effect, also more or less by reputation.  Thus, AGPLv3 became, for a brief span, both bona fide and functionally "free for free software".

But only in practice.  As the value of commercially relevant software under AGPLv3 grew, so did incentives to find new loopholes, new ways to work AGPLv3 code into nonfree offerings.  In other words, to read its terms.  As with GPLv2 before it, broader adoption of AGPLv3 copyleft funded a de facto bug bounty: first big company to find a loophole wins first-established-mover advantage with the code.  AGPLv3's scope, length, and complexity made just that much more attack surface.  The attention of large firms put savvy legal counsel---the bounty hunters---on the job.

Once again, enterprise legal cracked the activist license.  They've found arguments sufficiently strong that both sides of a lawsuit would have to engage legal talent, and the enterprise can bring more of that firepower to a gunfight than an upstart.  That is the complaint we hear from some upstarts with new, stronger licenses.

We see it also in their terms.  Some, like Commons Clause, eschew the complexity of copyleft, and open source, by writing direct prohibitions on what their competitors are doing that they don't want to allow.  Conversely, MongoDB's Server Side Public License, reflecting their ability to field legal time and talent, strengthens copyleft, relying on a requirement to share code back to exclude competitors who service-ize the software.

There's an "API Loophole":  AGPLv3's arguably doesn't reach code in larger programs built with copyleft code if combination occurs by calls over standardized inter-process communication mechanisms, like local sockets or remote HTTP requests, rather than by linking to or changing copyleft code.  See especially the definitions of "modify" and "modified version" in section 0 and the first paragraph of section 13.

And there's a "Container Loophole":  AGPLv3 arguably doesn't reach reach beyond the specific system running it---physical, virtual, or containerized---to the broader constellation of networked systems comprising an application.  See especially the definitions of "Corresponding Source", "System Libraries", "Major Component", and "Standard Interface" in section 1.

For an upstart coming to AGPLv3 as a "free for free software" license, facing competition very well versed in containerization and API composition, these are terrible shortcomings.  The license fails to provide clarity for exactly the kind of software development incumbents are practicing, evangelizing, and selling on a service basis to the rest of the industry.

## Commercial

If it were just that simple, the answer would be clear enough:  Write a very strong copyleft license, and present it as a better approach for hardline software freedom activists, as well.  But that's not all that's going on in the new licenses from businesses.  Their competitor-excluding terms are stronger, at the outer limits, but also specifically targeted, selective.

Both Commons Clause and SSPL carve out permissive-license safe zones within otherwise commercial-use or copyleft rules.  Both aim to allow continued use of applications, like databases, API-composed into broader proprietary systems, like web applications, while simultaneously restricting or requiring service offerings of those applications to be made open.  In other words, loosely: permissive for integrators, restricted or strong-copyleft for service-izers.  Even as these new terms close API and container loopholes, they free the most direct use cases from copyleft.

A hybrid license that achieves that split clearly and effectively would afford best-of-both-both-worlds license functionality: a passport to broad corporate adoption, the established business benefit of a permissive terms, plus a competitor-excluding "free for free software" rule, the competitive upstart benefit of strong copyleft.  All with a claim to continued "open source" status.  The trick is setting the scope of the copyleft terms to permit uses the developer welcomes and require maximum reciprocity for uses they fear.  Not to mention establishing new bona fides as open source.

Such an approach spans permissive and copyleft user groups selectively.  It caters to the businesses, not the activists, on both sides.  BSD school hackers don't want even stronger, even more complex half-copyleft licenses.  FSF loyalists don't want philosophically indifferent, uncompromisingly strong, half-permissive terms.  SSPL isn't out to please either, and it won't.  If the commercial segments of current permissive and copyleft user bases come together in support, it doesn't have to.  Call it "commercial open source".  Call it what you like.  It intentionally permits building nonfree services, and it uses intellectual property rules to shape the commercial interests involved alone the way.

## Conflict

As within copyleft and permissive, there's inherent tension in the new, theoretical commercial open source license user base, too.  A basic business conflict of interest.

Many of the firms rushing to adopt new, selectively competitor-excluding terms do so to protect themselves against incumbent software companies.  The database developers, for example, grasp for defensive measures against platform-as-a-service providers.  Those cloud providers selectively release software under permissive terms to drive demand for paid products and services, create strategic advantage, and spread maintenance costs.  They also voraciously consume permissively licensed software from others.  At least in the short term, incumbent software companies would like their databases permissively licensed, thank you very much.  Which explains their legal efforts.  Loopholes turn copyleft software into permissive software, if you use it right.

An experiment like Commons Clause sparks far less interest, historically and theoretically, for openly departing from open source.  Getting the license functionality you want, with less risk of legal compromise down the line, is a lot easier if you can just describe the use cases you don't want to allow, say they're not allowed, and ignore whatever the open source police have to say about it.  But in the ongoing dialog between competitive upstarts and established companies in software, businesses willing to adopt those terms play an essential part.

Companies adopting Commons Clause---clumsily structured, oddly named, and all-around hackish as it may be---demonstrate that they won't succumb to pressure to license permissively, abide vulnerabilities in activist copyleft licenses, or forgo the benefits of open development.  They'll take the community heat from BSD school hackers.  They'll take the heat from software freedom activists.  And they'll take the heat from self-appointed gatekeepers, notably the Open Source Initiative and Free Software Foundation.

These voices ask:  Why won't these companies listen us?  The answer:  These companies aren't talking to you.  They're talking to their business competitors, across the table, and to potential business allies, on their side.  Generalist community action groups don't command a seat at the table, and don't offer value as mediators.  All three major cloud providers are marquee sponsors of the Open Source Initiative, and the last time the Free Software Foundation tried to strengthen its terms, it bowed to outside pressure.  Upstarts are ready to organize and speak for themselves.

Establishing willingness to stand their ground secures a platform for the argument that could bring established software businesses over into a new, permissive-copyleft-hybrid, pan-business, "commercial open source" coalition: enlightened self-interest.  Isn't it good for established software business, long term, to ensure upstarts access to community development and financial compensation?  Wouldn't ready access to both produce more valuable software for established providers to hock through their platforms and marketplaces?

Commons Clause is an entrenching tool.  SSPL is a settlement offer.  Incumbent software companies have bought the enlightened self-interest argument before.  It's how they ended up on the OSI website.  But they're also far more concerned with competition among themselves, to establish cloud computing positions, than with comparatively small operations turning out the apps customers want to run on those platforms this year.  Open source plays a role in current ground-game strategy, but it looks more like the OpenStack Foundation and the Cloud Native Computing Foundation---enterprise permissive users if there ever were any---than a VC portfolio of companies trying to sell enterprises add-on features and hosting.

## Reconciliation

A new, self-consciously commercial coalition in open source, operating at the level of the older permissive and copyleft coalitions we've known so far, would be something new.  If we wanted to bet on the past, instead, we'd take reconciliation within the copyleft user base.

In other words, a new, even stronger copyleft license that both software freedom activists and competitive upstarts could rally behind, in mutual support.  Probably another patch to GPL, like SSPL, but a patch the activist community could make its own.  An Affero GPL that FSF could make GNU Affero GPL, closing the API and container loopholes.

There is cause for doubt in the details.

I don't think the Free Software Foundation is of any mind to write a stronger copyleft license.  It is headed in decidedly the opposite direction.  More and more, the FSF has constrained itself to soft power, emphasized conciliation over enforcement, declined to make punitive examples, and accepted praise, attention, and stewardship of key but aging projects, rather than double down.  Doctrinally, they've stuck to dogma on license drafting, notably freedom zero absolutism and private changes, that prevent them from closing loopholes more robustly.  It's a young, angry movement where widespread computing, and software freedom, are new.  But only there, far from the industrial center of mass where SSPL is relevant, and FSF feels tired.

More concretely, the Free Software Foundation doesn't appear to share upstart business concern about API and container loopholes, as it once shared concern about the ASP loophole.  FSF partisans point to activist users of AGPLv3, as it stands now, and see nothing wrong.  In large part because activist projects under AGPLv3 don't offer nearly the bounty value that upstart projects do.  They have succeeded largely within a marginalized activist community.  And in large part because activist AGPLv3 developers' use case is different.  The license was written for them and by them.

That's not to say there's no hunger for a more extreme, streamlined copyleft license among radical activists.  There's plenty of frustration with the compromises FSF has made.  But here the cross-cutting nature of the new business-oriented licenses comes into play.  I don't perceive any activist demand for the peculiar combination of permissiveness and copyleft, and the specific line between them, that upstart open source database developers crave.  When software freedom activists want a permissive license, they use Apache 2.0.  In vanishing edge cases, they use LGPL.  The FSF position on "service as a software substitute" is that it's pernicious.  Why would activists want a license that allows making free code nonfree for the good kind of software---software you run for yourself---and requires keeping free code free for the bad kind---services substituting for real, installed software?  Activists, independent and small-scale, aren't living in the "new normal" of containerized, orchestrated service clusters deployed on paid infrastructure for thousands of dollars a month.

Overall, I'm sad to say that I think FSF has tightened its own bind.  It knows it needs allies, but it's keeping the wrong company, courting established business with lots of developers to spare, but no practical common interest.  Software freedom activism has trusted that purity of message will create a groundswell of support sufficient to turn the tide of permissive alternatives, thin-client computing, and the relegation of free approaches to tooling, back-end components, and building blocks for proprietary end-user applications.  It has optimized for taller pulpits from which to shout its message.  But it's drowned out as more economic interests join in and take over.  It can't match commercial volume.  Unless or until software freedom reality comes to be felt as a crisis, and not just understood as one, I don't think the Free Software Foundation has either a stronger license to give, or enough flexibility to accept anyone else's.

## Forward

Eliot Horowitz, who proposed the Server Side Public License for Open Source Initiative review on behalf of MongoDB, wrote in [an early response](http://lists.opensource.org/pipermail/license-review_lists.opensource.org/2018-October/003672.html):

> It's clear from some of the responses on this list that some believe copyleft should not be extended this far.  But we want the discussion to be clear:  Is this because doing so is impractical, or because it is not what all communities want from a normative viewpoint? ...
>
> If it is not what all communities want, then is it enough that some do?

That is the question.

He goes on:

> We expect that others will adopt our license if it is approved and we want them to have the chance to do that.

A whole class of upstart companies, many founded by open source developers, want to drive harder copyleft bargains with cloud providers offering to host their work.  Many believe in the outsized value open code can produce, but see from experience that companies standing tall in the industry will readily reach down to pick the low-hanging fruit, like hosting, at the expense of smaller companies that can only reach that high.

Can these companies, together, establish that open source can and should strengthen to meet their needs?  If acceptance requires a broader coalition, especially once that includes the very cloud providers these terms aim to stymie, SSPL isn't going anywhere fast.

But perhaps these upstarts manage to register the point of enlightened self-interest among the giants, and attract their support.  Would that be enough?  Orthodox Free Software Foundation critics will oppose.  So will anti-IP hackers.  If acceptance requires consensus, and consensus requires those voices, SSPL still isn't going anywhere.  Neither, frankly, is any other remotely interesting license.

Neither the Open Source Definition, the Debian Free Software Guidelines, nor the Free Software Definition offers a clear set of rules about how strong copyleft can be.  Their broad generalizations, written to pitch broad tents for a variety of licenses and license use cases, can't tell us whether SSPL is an open source license.  That is not a matter of technical conformance, but of conviction and acceptance.

There is no playbook for conviction and acceptance in open source.  Only history.  Yet, the history we have, the Old Testament of open source, was written before broad enterprise acceptance, before the weight and interest of those players came to bear not just on but within the community.  We are now in a decidedly different era, an era defined by enterprise adoption and the use of open source to make closed.

In that sense, the meaning of open source has already changed.  It is already commercial.  Open source has had its intended effect on commerce.  That initiative has reached its definition.  One way or another, commerce will now drive what open source means, and what it's worth.