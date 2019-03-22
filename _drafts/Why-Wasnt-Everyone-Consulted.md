---
title: Why Wasn't Everyone Consulted?
description:
layout: post
tags:
- Open Source
---

Write [a new open software license](https://blueoakcouncil.org/license/1.0.0.html)?  Prepare yourself for process criticism.  Even if it's a great license.

> [N]ew putative FOSS licenses should be drafted in public and collaboratively, not in private as I gather Blue Oak was
> <https://twitter.com/richardfontana/status/1104811186665721856>

> Somewhat separately and slightly off topic in terms of SPDX approval (and note, this is *not* an inviting a need to respond, per se) I crinkle a bit at "vetted collaboratively, by a team of experts" + "did our initial work in private" in light of the more common open source license development process of open collaboration; as well as questioning the need for another permissive license.
>
> <https://github.com/spdx/license-list-XML/issues/800#issuecomment-475491872>

Launch a new [sustainability as a service offering](https://communitybridge.org/)?  Expect much the same.

> The launch of this platform, as proprietary software, without coordination with the rest of the FOSS organization community, is unnecessarily uncollaborative with our community and we therefore encourage some skepticism here.
>
> <http://ebb.org/bkuhn/blog/2019/03/13/linux-foundation-community-bridge.html>

In open software, some folks want to see everything done by a particular kind of committee, from the get-go.  I see and acknowledge their consistent criticism of others' work process, including my own.  I recognize their work to [make their preferences explicit](https://github.com/richardfontana/hbr/blob/master/HBR.md).  I recognize the refrain of [Why wasn't I consulted?](https://youtu.be/m0rakUuPXFM?t=746)  But I don't agree with it.

I reject it outright.  Because it leads to inferior results, or no results at all, with grim predictability.  Because it's utterly incongruous with lessons from the software side of open software production.

## Spontaneous

Plenty of great open software begins as the work of a single developer or small group, working in private or pushing to a source repository nobody else knows about.  Their software eventually feeds into the mainstream of open software consumption, be it GitHub, npm, or another package repository, without any outside collaboration, conscious governance, or solicitation of external approval.  It happens without permission or approval from anyone.  It scratches the itch of those involved, and that is the point.

Only popularity distinguishes great software made this way from throwaway experiments made likewise.  The end results are distributed just the same, but a great deal more often, to a great deal more people.

Plenty of great open software ends just as it began, too: artifact of a specific need in a specific place at a specific time, when a bolt of inspiration struck.  But that is not the end of collaboration, even if the original crew never collaborates again.

No approval was required to make the start, and under the right license terms, no approval is required to continue from it, either.  [Substack](http://substack.net/) begat [Optimist](https://www.npmjs.com/package/optimist), and Optimist was good.  But, lo, the latest Optimist came out five years ago.  But from Optimist [Ben Coe](https://github.com/bcoe) and friends begat [Yargs](https://www.npmjs.com/package/yargs), which is also very good, and still getting better.  Yargs' latest version came out 17 days ago.  I suspect little of the original Optimist code remains in Yargs by this time.

## Permission-Free

"Permissionless" would sound like a bad thing if we did't know better.  Not having permission is generally bad, and having it is good.  But the point is rather that we don't _need_ permission at all.  Which is how "permissionless" became a rallying cry of developers and innovation boosters generally.

As Git revolutionized revision control by making branches cheap, npm and similar distribution systems revolutionized distribution by making forks cheap.  To quote Isaac Schleuter: "There's plenty of room in the registry."  I've published [340 npm packages](https://npmjs.com/~kemitchell), and most of them are utter garbage.  A few of them are useful.  GitHub, npm, and friends welcome the chaff for the sake of the wheat.  It doesn't grow any other way.

Prior restraint, more speech

## Spontaneous

[Conway's Law](https://en.wikipedia.org/wiki/Conway%27s_law)