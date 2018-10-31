---
title: Rebalancing
description:
layout: post
---

What's going on with new license terms for businesses?

[Redis Labs has some.](https://redislabs.com/community/licenses/)  [Vespene, too.](https://medium.com/@michaeldehaan/going-with-the-commons-clause-1bdab4c15e5d)  [Mongo has some.](https://www.mongodb.com/licensing/server-side-public-license)  [I've written two.](https://licensezero.com/licenses#public)   [A spiffy new "commercial open source" VC firm wants even more.](https://changelog.com/podcast/320)  Why?

In short: Because once again in open source history, we're seeing the two great camps of copyleft license users---software freedom activists and competitive upstarts---part ways on strong copyleft licensing.  The lack of a cohesive copyleft user community threatens to further imbalance the movement towards the interests of permissive license users, destabilizing the coalition that made and still makes open source broad-based.

Business firms and small players writing new, demanding licenses may feel new.  But its history is as old as open source itself, nearly as old as free software before it.  We are witnessing the natural outcome of a number of long trends in the movements that came together in what we now know as open source.  We are witnessing a self-correcting mechanism at work, responding to imbalances in that movement's recent history.

Even newcomers know that open source can be permissive or copyleft.  But that is not the whole story.  The reasons for those license choices vary more than choice of license suggests.  Licenses implement functionality, as software implements functionality.  Software producers use permissive and copyleft implementations to achieve different goals.

## Permissive

The permissive license user community comprises two recognizable camps.

The BSD School of hackerdom rejects intellectual property and the hassles it creates.  Ideally, BSD School hackers wouldn't need or use licenses at all.  Software would simply be free to use, change, share, and so on.  Permissive licenses like BSD and MIT offer the closest practical approximation.

Meanwhile, established and well capitalized businesses seek free passage through other firms' procurement and compliance protections.  Ideally, software that these businesses provide as loss leaders, share to defray development costs, or popularize for strategic advantage would be easily adopted by any other firm.  Permissive licenses like Apache 2.0 come as close as possible to zero friction in corporate exchange of software.

Both BSD School hackers and established businesses use permissive licenses.  But we see their underlying differences show through in various ways.

Factions of the BSD School choose radically stripped-down versions of old academic licenses like 0BSD and Unlicense, or even grating antilicenses like WTFPL.  Their tone and content scare some established business contributors and users away.

Established businesses prefer contract-style licenses that only their lawyers can read, especially those with robust patents terms, including defensive termination terms that give them back their rights to nuclear, if they end up in a standoff.  Length, style, and patent terms rankle BSD School hackers, who like things short and think software patents are evil.

BSD School hackers reject the very legal and contractual regimes that make most established software companies business models possible.  Established businesses abide BSD School hackers' insistence on open software, until it comes to the software they sell.  But both BSD School hackers and established businesses want open source licenses that reverse legal defaults that restrict work with software and source code.

Despite these deep, underlying tensions, the coalition of permissive license users groups remains pretty strong.

## Copyleft

The copyleft license user community also comprises two recognizable camps.

Free software activists reject closed software as an ethical affront.  Ideally, free software activists wouldn't need copyleft licenses at all.  Source code would always be available, free to use, change, share, and so on.  Copyleft licenses like AGPL and GPL come as close as possible, by preventing companies from closing open code, at least some of the time.

Meanwhile, competitive upstarts seek free access to open infrastructure and collaboration in their quests to establish themselves.  Ideally, everyone who uses their work would contribute back, and that value wouldn't simply play into their competitors' preexisting advantages.  Very strong copyleft or "reciprocal" licenses written by businesses, like RPL and OSL, come as close as possible, by requiring sharing work back as open software, which closed software competitors cannot do.  But recently, most upstarts have chosen strong copyleft licenses written by activists, especially AGPL and GPL.

Both software freedom activists and competitive upstarts use copyleft licenses.  But we see their underlying differences show through in various ways.

The most important free software activist organization, the Free Software Foundation, expounds a complex, esoteric, contrarian ideology.  That self-styled philosophy shows through in its licenses. The FSF's preachy preambles and self-imposed limits on requirements to share code back rankle competitive upstarts who don't subscribe to its ideology, and accept shortcomings in license implementation to reap network effects or for inability to write and socialize new licenses.

Software freedom activists look on upstarts' competitiveness and expedience with unease.  They worry about upstarts who use copyleft to give themselves or their firms privileges positions in projects, and often begrudgingly accept the use of their licenses for "dual licensing", or selling private permission to build copyleft code into closed software.  For software freedom activists, copyleft is a means to software freedom, not a tool for excluding others.

Software freedom activists reject the license-based power dynamics that competitive upstarts need.  Competitive upstarts feel dragged into sanctimonious moralizing and long-winded textual mysteries of activist copyleft.  Both software freedom activists and competitive upstarts want license terms that exclude those who refuse to share back.

Despite underlying tensions no more fundamental than those within the permissive license user community, the coalition of copyleft license users is coming apart.

Why?

## Open Source

Ask people affiliated with the Open Source Initiative about free software, and many will tell you that open source isn't really any different from free software.  Free software just preached too much fire and brimstone, missed the rebrand, and lost out.

Ask folks affiliated with the Free Software Foundation about open source, and many will jump to tell just how different they are.  Open source strips free software of its values, pandering to the nonfree industry with promises of better, cheaper code, which doesn't happen without unifying community spirit.

That is the popular narrative of the Open Source Initiative, the coining of "open source", and the wooing of big business to the scene.  It's a story told from the points of view of its main characters---OSI and FSF---and their partisans.  Not the users of free software and open source licenses.

The history of bringing open source to business, and business to open source, has been one of long, slow, and occasionally sudden progress.  Since setting up the Open Source Initiative and coining "open source", the project has been a string of less decisive, mixed, and overlapping organic decisions.  Change had more to do with changes outside the organizations, and the medium- and long-term effects of many small steps, than short, decisive, newsworthy gambits.

## Splits

In that history, we can see the software freedom activist and competitive upstart camps of copyleft users draw apart and come back together.

The Open Source Initiative has approved every major license published by the Free Software Foundation.  Both organizations eventually approved copyleft licenses drafted by non-activists, without its rhetoric.  But fairly early in its history, circa 2002, OSI and FSF split on a particular kind of license: strong copyleft or "reciprocal" terms, drafted by companies and company-minded lawyers in business-law style, ignoring FSF's self-imposed limits on how much code copyleft could require sharing back, and when.

Relatively few of these licenses remain well known.  Several served as temporary waystations for the specific companies, and sometimes the specific software, for which they were drafted, ending up eventually on FSF-drafted licenses.  The business copyleft licenses fall well short of perfection, in many aspects.  But some remain the best approved choices for drawing patches back.  Some respond to the "ASP loophole", alias "SaaS loophole" or "Google problem", more elegantly and completely than activist alternatives.

In time, the Free Software Foundation succeeded in bringing many competitive upstarts back into its fold with the Affero GPL, especially version 3.  Specifically drafted to close the loophole that allowed closed software to be made from GPL code, as long as the resulting program was run to provide a network service, rather than sent to users for them to run for themselves, AGPL nonetheless inherited many self-imposed limitations of prior FSF terms.  Staunch resistance kept the FSF from merging its new, stronger AGPL terms into GPL at the next major update, version 3.  But AGPLv3 was widely taken as the latest patched implementation of the old free software goal: a license that makes software available for use in free software, but not in proprietary software, even if the proprietary software is a service.

Once again, competitive upstarts who couldn't afford to draft and propose their own licenses repurposed a good-enough FSF license, AGPL, for strong copyleft terms to meet their needs.  Many of these projects, as it turns out, used little or no other GPLv3 or AGPLv3 software, forgoing the benefit of license compatibility, in part because they insisted on licensing their whole programs also on commercial terms.  GPLv3 or AGPLv3 dependencies written by others would not allow them to do.

But AGPLv3 inherited many of the same self-imposed limitations and complexities of past FSF licenses.  For a time, those flaws remained practically irrelevant.  Closed software companies dutifully placed AGPL code on their ban lists for internal consumption, in some cases by reputation alone.  If they used such software, they did by purchasing alternative, commercial licenses from their developers.  Thus, AGPL was, for a brief span of time, a truly "free for free software" license in practice.  But only in practice.

As the value of software under AGPL grew, so did incentives to find new loopholes, new ways for competitors to use AGPL software in nonfree software, and in competition with its makers.  As with GPLv2 before it, AGPL's copyleft functionality created a de facto bounty program: first one to find a loophole through wins first mover advantage with the code.  AGPLv3's scope, length, and complexity become attack surface.

That is the complaint we hear from many companies drafting and adopting new licenses terms now.  Some of those terms, like Commons Clause, eschew the complexity of copyleft and open source neutrality by writing direct prohibitions on what their competitors are doing that they don't want to allow.  Some of those terms, like Mongo's Server Side Public License, strengthen copyleft, relying on a requirement to share code back to exclude competitors, who happen to be proprietary software companies.

## Commercial Open Source

At the same time, we see many of these firms attempting to carve out permissive-license safe zones within otherwise strong copyleft licenses.  Both Commons Clause and SSPL aim to allow continued use of applications like databases as integrated in broader proprietary applications, like web applications, while simultaneously requiring service offerings of those applications be made open.  A license that does that clearly and effectively could have a best-of-both-worlds effect for some license users, offering a passport to broad corporate adoption, the established business pleasing benefit of a permissive terms, as well as a competitor-excluding "open for open source" rule, the competitive upstart pleasing benefit of strong copyleft.  At least for kinds of software for which they scope of the copyleft terms tracks uses of the software its creator finds competitive.

Such an approach spans permissive and copyleft user groups selectively.  It caters to the business user camp, not the activist camp, on each side.  BSD School hackers will not want even more complex quasi-copyleft licenses.  Software freedom advocates will not want ideology-tramping quasi-permissive licenses.

Trouble is, there's inherent tension in this new, theoretical coalition, as well.  A business conflict of interest.  Many of the firms rushing to adopt new competitor-excluding terms do so to protect themselves against incumbent software companies with insurmountable business advantages.  Database developers, for example, are adopting new terms as defensive measures against platform-as-a-service providers offering their databases.  Those incumbent cloud providers are heavy users of permissive licenses, applied selectively to software that leads to paying opportunity, creates strategic advantage, and spreads maintenance cost.  At least short term, those incumbent software companies would really rather get databases under permissive licenses, thank you very much.

A license experiment like Commons Clause sparks far less interest, historically and theoretically, for openly departing from open source practice.  Getting the license functionality you want is a lot easier if you can just write the uses you don't want, phrase them into a license restriction, and not worry about open source.  But in the ongoing dialog between competitive upstarts and established companies in software, those terms serve an indispensable purpose.  Companies adopting Commons Clause, clumsy, strange, and hackish as it may be, demonstrate that they won't succumb to pressure to license permissively, giving incumbents effective free reign.  They'll defect, go source-available, or even straight "open core" proprietary.  They'll take the community heat from BSD School hackers.  They'll take the heat from software freedom activists.  And they'll take the heat from open source gatekeepers, notably the Open Source Initiative, which counts all three major platform-as-a-service providers among its marquee sponsors.

Establishing that competitive upstarts will take the heat secures a platform for the one argument that could bring established software businesses into a mixed permissive-copyleft, small-to-huge-business, "commercial open source" coalition: enlightened self-interest.  Do established software business want to ensure upstarts access to a ready mix of community development benefits and leverage to command financial compensation, or force them to pick one or the other?  Would ready access to both produce more valuable software for established providers to offer on a service or other basis?

Commons Clause is a stick.  SSPL feels more like a carrot.  Incumbent software companies have bought the enlightened self-interest argument before.  It's how they ended up on the OSI website.

## Acclaim

A new commercial coalition in open source, operating at the same level as the permissive and copyleft coalitions we've known so far, would be something largely new, at scale. If we wanted a safer bet, we'd take reconciliation within the copyleft coalition.  In other words, another FSF patch to its strong copyleft license.

There is cause for doubt.  More and more, the FSF has turned to soft power, emphasized reconciliation over enforcement, declined to make punitive examples, accepted praise, attention, and stewardship of key projects, still most notably GCC, emacs, and coreutils, over doubling down and losing friends.  Its representatives point to activist users of AGPL as it stands now, and see nothing wrong, in large part because activist projects under AGPL don't offer nearly the bounty that upstart projects do.  Doctrinally, they've stuck to an absolutism on points of implementation, notably freedom 0 absolutism and private changes, that tie their drafters' hands to solve problems more decisively, and pose difficult questions about AGPL even as it's written now.

I'm sad to say that I think FSF's compromises have caught up with it.  It has trusted that purity of ideology will save it from permissive reimplementation, broad shifts in software delivery, and the relegation of openness to components and back-end services.  I don't think it's got a strong copyleft license left in it to pull competitive upstarts back into its fold.  In newer software ecosystems and domains, often permissive down to their core and up to the top, by community default, the allure of the GPL network, now split across v2/v3 lines, doesn't draw.

## Radicalism

Where does all this leave everybody who _isn't_ at a big company, and doesn't want to be?  What about the independent developers and small teams also struggling to sustain not just software, but a life writing evidently useful code?

My own experiments in strong copyleft licensing, embodies in [Parity](https://licensezero.com/licenses/parity), take a different tack.  I would bring radical, uncompromising software freedom activists and competitive upstarts back together.  And I'd do so in a way far more responsive to the needs, tastes, and valid points of the BSD School.

Simplicity is key.  And simple ideas, eschewing compromise, have a way of becoming radical.  That is what Parity aimed to do:  write "free for free software" as simply as possible, and therefore as radically as possible.

Using such a license to protect an upstart commercial venture.