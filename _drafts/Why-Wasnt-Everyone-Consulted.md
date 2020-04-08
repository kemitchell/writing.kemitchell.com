---
title: Why Wasn't Everyone Consulted?
description:
layout: post
tags:
- Open Source
---

Write [a new open software license](https://blueoakcouncil.org/license/1.0.0.html)?  Prepare yourself for process criticism.

> [N]ew putative FOSS licenses should be drafted in public and collaboratively, not in private as I gather Blue Oak was
> <https://twitter.com/richardfontana/status/1104811186665721856>

> Somewhat separately and slightly off topic in terms of SPDX approval (and note, this is *not* an inviting a need to respond, per se) I crinkle a bit at "vetted collaboratively, by a team of experts" + "did our initial work in private" in light of the more common open source license development process of open collaboration; as well as questioning the need for another permissive license.
>
> <https://github.com/spdx/license-list-XML/issues/800#issuecomment-475491872>

Launch a new [sustainability as a service offering](https://communitybridge.org/)?  Expect the same.

> The launch of this platform, as proprietary software, without coordination with the rest of the FOSS organization community, is unnecessarily uncollaborative with our community and we therefore encourage some skepticism here.
>
> <http://ebb.org/bkuhn/blog/2019/03/13/linux-foundation-community-bridge.html>

In open software, some folks want to see everything done by a particular kind of committee, usually one including them, from the get-go.  I see and acknowledge the consistency of their criticism.  I recognize the hard work they've done to [make their preferences explicit and accessible](https://github.com/richardfontana/hbr/blob/master/HBR.md).  I recognize the refrain of [Why wasn't I consulted?](https://youtu.be/m0rakUuPXFM?t=746)

But I don't agree with it.  I reject it outright.

Committee work product has a well developed reputation, and not for clarity, approachability, or innovation.  Overburden of committee process leads to inferior results, or no results at all, with grim predictability.  Moreover, requiring committee process, and giving process primacy over quality, affronts strong lessons from the software side of open software production.  The distinctions between open software and open legal held out to justify a difference in how we make open legal are largely of lawyers' own making.  We should abolish and replace those differences, and we know how.

## Spontaneous

Plenty of great open software begins as the work of a single developer or small group, coding in private or pushing to a source repository nobody else knows about.  Their software eventually feeds into the mainstream of open software consumption, be it GitHub, npm, or another package repository, without outside collaboration, conscious governance, or approval.  It scratches the itch of those involved, and that is both the point and every necessary bona fide.

Only popularity distinguishes great software made this way from throwaway experiments made likewise.  The end results are distributed just the same, but a great deal more often, to a great deal more people.

Plenty of great open software ends just as it began, too: artifact of a specific need in a specific place at a specific time, when a bolt of inspiration struck.  But that is not the end of collaboration, even if the original crew never collaborates again.

No approval was required to make the start, and under the right license terms, no approval is required to continue from it, either.  [Substack](http://substack.net/) begat [Optimist](https://www.npmjs.com/packages/optimist), and Optimist was good.  But, lo, the latest Optimist came out five years ago.  But from Optimist [Ben Coe](https://github.com/bcoe) and friends begat [Yargs](https://www.npmjs.com/packages/yargs), which was also very good, and keeps getting better.  Yargs' latest version came out a few days ago.

## Permission-Free

If we didn't know better, "permissionless" would sound like a bad thing.  Not having permission is generally less good to having it.  But the point is rather that we don't _need_ permission at all.  Not needing permission is the real rallying cry of software developers and innovation boosters.

As Git revolutionized revision control by making branches cheap, npm and similar distribution systems revolutionized distribution by making forks cheap.  To quote Isaac Schleuter: "There's plenty of room in the registry."  I've published [340 npm packages](https://npmjs.com/~kemitchell), and most of them are utter garbage.  A few of them are useful.  GitHub, npm, and friends welcome the chaff for the sake of the wheat.  That much wheat doesn't grow any other way.

Great social science research on open source has confirmed, several times, that the typical contributor count to an open source project is one.  That is both empirically true and meaningfully false.  Nearly every software work of a single contributor builds from, and either implicitly or explicitly depends upon, the work of many others.  Work on the language.  Work on the build tooling.  Work on libraries and frameworks and plugins.  In the normal case, none of those combinations entail permission or consent, any more than the results come entitled to popularity or acclaim.

Some developers gravitate toward larger projects, where written or unwritten rules, rather than license- and tool-based capabilities, govern further development.  Others consciously stay small, avoiding bureaucratic, permission-gated projects that lessen the sensation of speed, and even departing their own projects when and if they bog down.  But the small-project, permission-free workstyle doesn't take any discount on its ambition.  Rather, it puts faith in systematized, conventional, and malleable means of widespread abstraction and combination.

More speech, not prior restraints aimed at less and better.  Better mousetraps, not criticism of the old ones.  Selection, not specification.

## Law

I need and seek no one's permission to address issues in open software legal.  Client needs, and the needs of those I ideally _would_ represent, but can't,  are all the license I require.  They are more than that.  They draw the outlines of my duty, as a member of a guild with exclusive license to practice law.

I put a lot of legal terms online.  For most of the projects I've published, I remain the only meaningful contributor.  My GitHub and Common Form profiles are littered with those projects.  But among the bones in that yard walk a few new creatures with impressive legs.  Some of my "experiments" have received more outside interest, and cultivation, than I let myself hope for.  Some of those are steadily growing in outside use.

The charge I hear most often is license proliferation.  That means many things to many people.

In its weakest form, "license proliferation" just means "more licenses".  Any new license option is bad, because it imposes compliance costs.  Lawyers need to review it.  Standards need to specify it.  Developers needs to recognize it.  Tools need to grapple with it.

I reject this form of license proliferation.  It misidentifies the problem, and misattributes blame.  We've all had a reason to complain that there is too much open source.  We've all found too many options for a particular need to choose efficiently.  But our focus, as a result of such experience, turns naturally to search, filtering, and certification, not top-down production constraints.  We celebrate systems that embrace high volume and adapt discovery to keep it efficient.

The stronger form of license proliferation condemns reimplementation of existing license features in new license terms.  I'm far more sympathetic to this view.  I don't spend time rewriting existing open source licenses.  But this approach begs the question of how much marginal benefit is enough to justify a new form.  Would we condemn a rewrite of GPL in plain language?  How about a rewrite of MPL that better addresses developments in non-US law?  Who gets to say that a license is or isn't novel, is or isn't novel enough?

The answer to both license-proliferation objections is the same.  Make new licenses as cheap as new software libraries, and let things shake out by adoption and socialization.  Nobody sees the whole practice of software, and can speak for it, so let the process as a whole decide for itself.

Many of the tools that make new open source libraries cheap is directly portable to legal terms.  That is the story of my longest-running open source project, Common Form, which brings content-addressing, a public repository, and modular recombination to legal text.  It's also the story of my broadest-adopted open source work, on license metadata standardization, validation, identification, and compliance in the npm ecosystem.  When I spot a bottleneck in those systems---currently, that's adding licenses to the SPDX license list---I apply all the time I can.

Adapting open software approaches to open software licenses doesn't have to involve large projects like npm or SPDX.  It's possible in smaller ways, as well.

On request from users, I recently submitted Parity 6.0.0 to SPDX for standardization.  Parity 1.0.0 took over from a previous license, The License Zero Reciprocal Public License, with many versions and revisions of its own.  Without counting, let's say for the sake of argument that there have been ten numbered versions of the license since inception.

How you feel about that is a fairly reliable heuristic for your software workstyle preference.  For slower-moving project veterans steeped in process, 10 is a strangely large number.  Is the project thrashing?  Is it that old?  Does it bump its major version for literally any old change?  Hardly.  10 is a relatively _low_ version number for many libraries, and even applications, in the small-fast open source workstyle.  Compare [Browserify](https://www.npmjs.com/packages/browserify/versions), a key build tool in the JavaScript ecosystem.
