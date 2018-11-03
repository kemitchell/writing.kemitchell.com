---
title: The Second Great Copyleft Breakup
description: new business licenses, the API loophole, and the coalition politics of open source
layout: post
---

What's going on with new software license terms for businesses?

[Redis Labs has some.](https://redislabs.com/community/licenses/)  [Neo4j](https://github.com/neo4j/neo4j), [Dgraph](https://blog.dgraph.io/post/relicensing-dgraph/), and [Vespene](https://medium.com/@michaeldehaan/going-with-the-commons-clause-1bdab4c15e5d), too.  [Mongo did its own.](https://www.mongodb.com/licensing/server-side-public-license)  [Midas List guy's in favor.](https://techcrunch.com/2018/09/07/commons-clause-stops-open-source-abuse/)  [A new VC firm wants more.](https://changelog.com/podcast/320)  Why?

The two great camps of copyleft developers---software freedom activists and competitive upstarts---have split apart again.  Upstarts can no longer achieve their goals with activist copyleft licenses.  Activists don't feel the same pain.  So upstart copyleft developers are writing new terms for themselves.

That loss of cohesion---upstarts abandoning activist licenses, activists opposing upstart alternatives---threatens the balance that keeps open source broad-based.  Permissive developers, riding a decade of adoption success and wary of copyleft to begin with, wonder now more than ever whether why they abide copyleft complexity and copyleft politics.  Permissive points register all the more strongly with copyleft developers too busy arguing amongst themselves to answer them.

None of this is new.  Young software businesses with roots in open source have written new open-style licenses as long there's been "open source", and nearly as long as there's been "free software".  Historically, those new licenses act as an early warning signal, prompting efforts to patch and strengthen existing copyleft terms that both activists and upstarts can get behind.  We are seeing the signal.  But also signs that activist and business copyleft developers may not reunite.  Rather than rely on activist institutions for credibility and cohesion, companies adopting new strong-copyleft terms may, for the first, time, choose to stand on their own.

## User Bases

Newcomers learn quickly that open source can be permissive, or it can be copyleft.  But that has never been the whole story.  Reasons for those license choices vary.  Software developers choose permissive or copyleft licenses to achieve different goals, not just in resulting relationships between developer and users, but in relationships between among developers, as well.

To understand the new terms, we need to understand the developer needs they address.  To do that, we need to talk about licenses the way we talk about software: as implementations of specific functionality that users---developers licensing their software---use to meet particular goals.

To understand what the new terms say about the future of open source as an idea and a movement, we need to see it for what it is: a coalition of diverse interests, beliefs, and goals.  We can start by taking a second look at permissive and copyleft license user bases as we know them, how they break down, and how old and new licenses garner their support.

## Permissive

The permissive license user base comprises two historic segments.

The BSD school of hackerdom rejects intellectual property and its hassles.  Ideally, BSD school hackers wouldn't need or use licenses at all.  Intellectual property laws affecting software would be struck from the books, leaving developers free do use, change, and share whatever source code they find.  Short permissive licenses like BSD, MIT, and ISC offer the closest practical approximation.

Meanwhile, established or well capitalized businesses seeks free passage in and out of corporate software silos.  Ideally, software they provide as loss leaders, share to defray development costs, or popularize for strategic advantage would painlessly and immediately flow to potential customers and contributors, especially other established or well capitalized businesses.  Permissive licenses like Apache 2.0 minimize friction from firm to firm.

Both BSD school hackers and established businesses choose permissive licenses.  But their differences of purpose show through in various ways.

Radical BSD school hackers choose stripped-down versions of old academic licenses like 0BSD/FPL, grating antilicenses like WTFPL, and bare assertions that their code is public domain.  The tone and the content of those terms scare away many established business users and contributors.

Established businesses prefer contract-style licenses that lawyers, and often only lawyers, can really read.  They particularly like licenses with robust patent terms, especially defensive termination provisions that let them sue on their patents in corporate standoffs.  Length, style, and patent terms rankle BSD school hackers, who like short licenses, despise software patents, and decry firms for stockpiling them by the thousands.

BSD school hackers reject the very legal and contractual regimes at the core of established software company business models.  Established businesses abide BSD school hackers' insistence on openness, until it comes to what they sell.

But both BSD school hackers and established businesses want open source licenses that reverse legal defaults that otherwise restrict software.  Despite deep underlying tension, the permissive license user community remains strong.

## Copyleft

The copyleft license user base also comprises two recognized segments.

Free software activists reject closed software as an ethical affront.  Ideally, they wouldn't need copyleft licenses at all.  The law would require that all source code be available and free.  Copyleft licenses like AGPL and GPL come as close as possible, preventing companies from locking up free software, at least some of the time.

Competitive upstarts seek free access to open infrastructure and collaboration in their quests to establish themselves.  Ideally, everyone who uses their work would contribute back, and those contributions wouldn't simple play into the hands of competitors.  Very strong copyleft licenses written by businesses, like RPL, come as close as possible, requiring users to share even more than activist licenses.

Both software freedom activists and competitive upstarts choose copyleft licenses.  In fact, in recent years, upstarts have mostly repurposed activist licenses, like AGPL and GPL.  But their underlying differences show through.

The most important free software activist organization, the Free Software Foundation, expounds a complex, esoteric code of licensing ethics.  That self-styled philosophy shapes its licenses.  FSF forms sport long, preachy propagada preambles.  Their copyleft rules self-impose handicaps on how much licensees have to share back.  But upstarts often accept those shortcomings.  Sometimes for the benefit of license compatibility.  Sometimes for affinity with the activist cause.  Sometimes for simple inability to write and socialize their own shorter, stronger copyleft licenses.

Software freedom activists regard upstarts' pragmatism and competitiveness with unease.  They worry about companies that use copyleft and contributor licensing to take privileged positions in projects, and begrudgingly accept use of their licenses for "selling exceptions", or vending private permission to build nonfree software with copyleft code.  For software freedom activists, copyleft is a means to software freedom, an invitation to do right, not a tool for excluding others, a toll booth charging to do wrong.

Software freedom activists reject the asymmetric, license-based power dynamics that upstarts seek for defense against established competitors.  Competitive upstarts feel dragged into sanctimonious moralizing and a labyrinth of long, unorthodox, GPL-style terms.

In the end, both software freedom activists and competitive upstarts want license terms that require sharing back.  Tension between activists and upstarts is no more fundamental than between the BSD school and established companies.  But the copyleft user base is coming apart at the seams.

## Open Source

Ask people affiliated with the Open Source Initiative about free software, and many will tell you that it isn't really any different.  Free software just preached too much fire and brimstone, missed the rebrand, and lost mindshare.

Ask folks affiliated with the Free Software Foundation about open source, and many will jump to tell just how different it is.  Open source strips free software of its values, pandering to the nonfree industry with promises of better, cheaper code, which doesn't happen without unifying community spirit.

That is the popular narrative of the birth of open source and the wooing of big business to the scene.  It's a story told from the perspectives of name-brand contenders---OSI and FSF---and their partisans.  Not the developers who choose free software and open source licenses.

Bringing open source to business, and business to open source, has been a process of long, slow, occasionally sudden progress.  Since setting up the Open Source Initiative and coining "open source", decisions have been altogether less dramatic, more mixed, more organic.  Change had more to do with developments in software and the market more broadly, and the medium- and long-term effects of many small steps, rather than dashing, newsworthy gambits.

## Cohesion

In that more nuanced history, we can see the activist and upstart segments of the copyleft user base draw apart and come back together.

In the end, the Open Source Initiative has approved every major license published by the Free Software Foundation.  Both organizations have also approved copyleft licenses drafted by upstarts, free of free software rhetoric, from Sleepycat on.  But fairly early in open source history, circa 2002, OSI and FSF split on a particular kind of license: strong copyleft or "reciprocal" terms, drafted by companies and company-minded lawyers in business-law style, ignoring FSF's self-imposed limits on how much code copyleft could require sharing back, and when.  For a time, OSI became the institutional home of strong copyleft, approving licenses that met upstart needs, but exceeded FSF's comfort level.

Relatively few of these licenses achieved lasting popularity.  Several served as waystations for the specific companies, and even the specific software, for which they were drafted, on their way to GPL relicensing, later on.  Indeed, the business reciprocal licenses fell well short of perfection, in many respects.  But some remain the strongest choices for drawing patches back.  Some remain the most robust choices for closing the "ASP loophole", alias "SaaS loophole" or "Google problem".

Willingness to accommodate upstarts tracks much influential writing in the early years of the Open Source Initiative.  Part of achieving business acceptance of open source was putting open source's merits in loosely economic, business terms.  To break the reputation link between "open source" and noncommercial, or even anti-commercial attitudes, it helped mightily to theorize and demonstrate how open source could augment existing business models, or even power models of its own.  Before big companies flocked to the open source buffet, smaller companies, especially engineer-driven software firms where programmers with deep community ties held authority, went to work in the kitchen.  Individuals and small firms wrote the code that showed open source could work and made open source software worth adopting.

In time, the Free Software Foundation succeeded in bringing many upstarts back into its fold with the Affero GPL.  Affero closed the loophole that allowed nonfree software to be made from GPL code if the resulting program was run to provide a network service, rather than sent to users for them to run for themselves.  However, outcry and fork threats from permissive-leaning interests kept the FSF from merging its new, stronger terms into mainline GPL at the next major update, version 3.  That in turn made it easy for software users to isolate AGPL as an aberration, an extremist diversion.  At the same time, for developers, AGPL gained recognition as the most current, robust implementation of copyleft: a license that makes software available for use in free software, but not in proprietary software.  Many activists speak of AGPL as the real GPLv3 to this day.

Once again, competitive upstarts who couldn't afford to draft and propose their own terms adopted a good-enough activist license to meet their needs.  Many of these projects, it turns out, used little or no other GPLv3 or AGPLv3 software.  The point was keeping competitors out, not jumping in with the activists.  But upstarts welcomed allies in defending the new, stronger license as free and open source, and activists welcomed a broader base of support, to overcome permissive-leaning objections.  In the end, an upstart company worked AGPLv3 through the Open Source Initiative's approval process, not the Free Software Foundation.

## Frustration

AGPLv3 inherited the self-imposed limitations and complexities of Free Software Foundation licensing.  But for a time, none of that mattered.  Closed software companies dutifully banned AGPLv3 by corporate policy, often on strength of reputation alone.  If they used AGPLv3 software, they did so under alternative, commercial licenses bought from the upstarts.  Observing this, upstarts began adopting the license for this effect, also more or less by reputation.  Thus, AGPLv3 was, for a brief span, both bona fide and functionally "free for free software".  But only in practice.

As the value of commercially relevant software under AGPLv3 grew, so did incentives to find new loopholes, new ways to work AGPLv3 code into nonfree offerings.  In other words, to read its terms.  As with GPLv2, broader adoption of AGPLv3 copyleft funded a de facto bug bounty: first big company to find a loophole wins first-established-mover advantage with the code.  AGPLv3's scope, length, and complexity made just that much more attack surface.  The attention of large firms put savvy legal counsel---the bounty hunters---on the job.

Once again, enterprise legal cracked the activist license.  That is the complaint we hear from some upstarts with new, stronger licenses.  We see it also in their terms.  Some, like Commons Clause, eschew the complexity of copyleft and open source neutrality by writing direct prohibitions on what their competitors are doing that they don't want to allow.  MongoDB's Server Side Public License, reflecting their ability to field legal time and talent, strengthens copyleft, relying on a requirement to share code back to exclude competitors who service-ize the software.

There's an "API Loophole":  AGPLv3 doesn't reach code in larger programs built with copyleft code if combination occurs by calls over standardized inter-process communication mechanisms, like local sockets or remote HTTP requests, rather than by linking to or changing copyleft code.

And there's a "Container Loophole":  AGPLv3 and other strong-copyleft licenses.

## Commercial

But that's not all that's going on in the new licenses.  Their competitor-excluding terms aren't just stronger, at their outer limits, but also targeted, selective.

Both Commons Clause and SSPL attempt to carve out permissive-license safe zones within otherwise commercial-use or copyleft rules.  Both aim to allow continued use of applications, especially databases, as integrated in broader proprietary applications, like web applications, while simultaneously restricting or requiring service offerings of those applications to be made open.  In other words, loosely: permissive for users making applications, restricted or strong-copyleft for users offering as a service.

A hybrid license that achieves that split clearly and effectively would afford best-of-both-both-worlds functionality, offering a passport to broad corporate adoption, the established business benefit of a permissive terms, plus a competitor-excluding "open for open source" rule, the competitive upstart benefit of strong copyleft.  All with a claim to continued "open source" status and its benefits.  The trick is setting the scope of the copyleft terms to permit uses the developer welcomes and require maximum reciprocity for uses they fear.  Not to mention arguing for community acceptance.

Such an approach spans permissive and copyleft user groups selectively.  It caters to the business wings, not the activist wings, of permissive and copyleft developer groups.  BSD school hackers will not want even more complex half-copyleft licenses.  Software freedom advocates will not want morally blinkered, half-permissive licenses.  SSPL isn't out to please those factions, and it won't.

## Conflict

As within copyleft and permissive, there's inherent tension in the new, theoretical commercial open source party, too.  A basic business conflict of interest.

Many of the firms rushing to adopt new, selectively competitor-excluding terms do so to protect themselves against incumbent software companies with insurmountable business advantages.  Database developers, for example, grasp for defensive measures against platform-as-a-service providers.  Those cloud providers selectively release software under permissive terms to drive demand for paid products and services, create strategic advantage, and spread maintenance costs.  They also voraciously consume permissively licensed software from others.  At least in the short term, incumbent software companies would like their databases permissive, or compromised copyleft, thank you very much.

An experiment like Commons Clause sparks far less interest, historically and theoretically, for openly departing from open source practice.  Getting the license functionality you want is a lot easier if you can just describe the use cases you don't want to license, say they're not allowed, and not worry about open source constraints or traditions.  But in the ongoing dialog between competitive upstarts and established companies in software, those terms serve an indispensable signaling function.

Companies adopting Commons Clause---clumsy, strange, and hackish as it may be---demonstrate that they won't succumb to pressure to license permissively, accept the limits of activist copyleft licenses, or forgo the benefits of open development.  They'll take the community heat from BSD school hackers.  They'll take the heat from software freedom activists.  And they'll take the heat from self-appointed gatekeepers, notably the Open Source Initiative, which counts all three major platform-as-a-service providers among its marquee sponsors.  These voices ask:  Why won't these companies listen us?  The answer:  These companies aren't talking to you.  They're talking to each other, and to their competitors.  "Community" leverage, such as it is, doesn't buy a seat at that table.

Establishing that competitive upstarts will stand their ground thus secures a platform for the one argument that could bring established software businesses over into a new, permissive-copyleft-hybrid, pan-business, "commercial open source" coalition: enlightened self-interest.  Isn't it good for established software business, long term, to ensure upstarts access to community development benefits and financial compensation?  Wouldn't ready access to both produce more valuable software for established providers to hock through their platforms and marketplaces?

Commons Clause is an entrenching tool.  SSPL is an peace treaty.  Incumbent software companies have bought the enlightened self-interest argument before.  That's how they ended up on the OSI website.  But they're also far more concerned with competition among themselves, to establish cloud computing positions, than with relatively microscale suppliers of the apps those platforms happen to run this year.

## Reconciliation

A new commercial party in open source, operating at the same level as the permissive and copyleft parties we've known so far, would be something largely new in open source history.  If we wanted to bet on record, instead, we'd take reconciliation within the copyleft coalition.

In other words, a new, even stronger copyleft license that both software freedom activists and competitive upstarts could rally behind, in mutual support.  Probably another patch to AGPL, like SSPL, but a patch that the activist community could conceivably make its own.  As Affero GPL became GNU Affero GPL, a new, strong copyleft "fork" that's adaptable for free software purposes.

There is cause for doubt in the details.

I don't think the FSF is of any mind to write a stronger copyleft license.  More and more, the FSF has constrained itself to soft power, emphasized reconciliation over enforcement, declined to make punitive examples, and accepted praise, attention, and stewardship of key but aging projects, instead of doubling down and drawing lines.  Doctrinally, they've stuck to dogma on license drafting, notably freedom zero absolutism and private changes, that bind their hands to solve problems more robustly.  In a word, the FSF and its community have become more conciliatory, more esoteric, more insular with age.  It's a young, angry movement where widespread computing, and software freedom, are new.  But only there, far from the industry's center of mass.

More concretely, the FSF doesn't share upstart business concern about the cracks and crevices in AGPLv3, as it once shared concern about the gaping ASP loophole.  FSF partisans point to activist users of AGPLv3, as it stands now, and see nothing wrong.  In large part because activist projects under AGPL don't offer nearly the bounty value that upstart projects do.  They have succeeded largely within the activist community, and not on the broader scale of open source as a whole.  And in large part because activist AGPLv3 developers' use case is different, and they feel it's still well addressed.  After all, the license was written for their needs.

That's not to say there's no hunger for a more extreme, streamlined copyleft license among activists.  There's plenty of frustration with the compromises FSF has made.  But here the cross-cutting nature of the new business-oriented licenses comes into play.  I don't perceive any activist demand for the peculiar combination of permissiveness and copyleft, and the specific line between them, that upstart open source database developers crave.  When software freedom activists want a permissive license, they use Apache 2.0.  In vanishing edge cases, they use LGPL.  The FSF position on "service as a software substitute" is that it's pernicious.  Why would activists want a license that allows making free code nonfree for the good kind of software---software you run for yourself---and requires keeping free code free for the bad kind---services substituting for real, installed software?

Overall, I'm sad to say that I think FSF's compromises are catching up with it.  It knows it need allies, but it's courting established company.  Software freedom activism has trusted that purity of message will create a groundswell of support sufficient to turn the tide of permissive alternatives, thin-client computing, and the relegation of free approaches to tooling, back-end components, and building blocks for proprietary end-user applications.  It has optimized for taller pulpits from which to shout its message, but it's lost in the noise.  Unless or until software freedom reality comes to be felt as a crisis, and not just understood as one, I don't think the Free Software Foundation has either a stronger license in it to give, or flexibility to accept someone else's.

## Forward

Eliot Horowitz, who proposed the Server Side Public License for Open Source Initiative review on behalf of MongoDB, wrote this in an early response to feedback from the process:

> If it is not what all communities want, then is it enough that some do?  We expect that others will adopt our license if it is approved and we want them to have the chance to do that.

That is the question.