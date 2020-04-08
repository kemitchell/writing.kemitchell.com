---
title: Standards, Patents, Open Source
description: towards constructive collaboration across practice communities
layout: post
tags:
- Open Source
- Licensing
- Standards
- Patent
- Copyleft
brief: Open-only, reciprocal terms can bridge the gap between standards-essential patent holders and open software developers.
date: 2019-10-03 18:00
---

Standards setting organizations increasingly publish open software implementations in addition to, or even instead of, prose specifications.  That has brought the technical standards and open software practice communities together.  But close collaboration has also revealed latent differences, especially on patents.

I have some experience with standards setting organizations and processes, but come from, and live on, the open software side.  I'd like to take this opportunity to express a few points from the open licensing perspective.  I look forward to reading more from the standards point of view.

Short and sweet:

- It's true that classic open source licenses don't give clear patent permission, and that seminal writing about open source licensing doesn't address patents.

- The open licensing state-of-the-art has evolved, and releases under old licenses picked specifically for lack of clear patent permission won't be greeted as good faith open source, but as legal traps, especially for organizations without access to savvy counsel.

- Let's work together on licensing policies and public patent grants that will meet both standards and open practice community expectations.

## Classic open source licenses don't give clear patent permission.

Some of the most popular open source licenses are also the oldest.  [The MIT License](https://spdx.org/licenses/MIT.html) remains very popular.  As do [two-](https://spdx.org/licenses/BSD-2-Clause.html) and [three-clause](https://spdx.org/licenses/BSD-3-Clause.html) BSD terms.  Those decades-old, academic forms don't even say the word "patent".  Even more recent variations, like [The ISC License](https://spdx.org/licenses/ISC.html), lack clear patent permission.

We can argue whether background law, like [exhaustion](https://lwn.net/Articles/780078/), or the [terms of the grants](https://opensource.com/article/18/3/patent-grant-mit-license) themselves,  like "use" and "deal without restriction", imply patent permission.  But we can agree that whatever is or isn't implied, it's inferior to explicit patent permission.

## Early, seminal writing on open source licensing didn't address patents, either.

The [Debian Free Software Guidelines](https://www.debian.org/social_contract#guidelines), the [Open Source Definition](https://opensource.org/osd), and [_What is free software?_](https://www.gnu.org/philosophy/free-sw.en.html) don't say "patent", either.  They don't address patent licensing explicitly.

All of those documents predate broad consciousness of patent issues in the open licensing community.  They predate widespread legal involvement whatsoever, beyond one-and-done drafting, and were written by coders, not counsel.  Not until the [first Mozilla Public License](https://spdx.org/licenses/MPL-1.0.html), in 1998, did popular, general-purpose open software licenses begin to address patents properly, and raise awareness of the issue.

## State-of-the-art open licenses give clear patent permission.

Because old licenses lack explicit patent permission, savvy advisers, several of whom recently came together to form [Blue Oak Council](https://blueaokcouncil.org), [rate](https://blueoakcouncil.org/list#bronze) them lower than forms like [Apache-2.0](https://spdx.org/licenses/Apache-2.0.html) and [BSD-2-Clause Plus Patent](https://spdx.org/licenses/BSD-2-Clause-Patent.html), which explicitly license patents.  Blue Oak's [model license](https://blueoakcouncil.org/license/1.0.0#patent) demonstrates that standard with a clear, all-encompassing patent grant from each project contributor.

Decades-old academic legacy licenses remain popular.  But legally, they're [deprecated](https://writing.kemitchell.com/2019/03/09/Deprecation-Notice.html), on patent and other grounds.  Even software developers who don't concern themselves with legal details often know that some licenses address patents, and some do not.  The rise in popularity of [Apache-2.0](https://spdx.org/licenses/Apache-2.0.html) for projects _outside_ the Apache Foundation umbrella, often from firms seeking adoption by large corporations, tracks rising patent consciousness among open software developers.

## Picking old licenses specifically for their flaws will mislead, anger, and offend.

I don't criticize software developers too harshly for choosing the old terms they know.  In many cases---especially when the developer doesn't seek patents, often because they despise the idea---the legal vulnerability never becomes a threat.  Conversely, picking an old license specifically for lack of patent coverage, while holding or seeking patents known to read on the software, will dash widely held expectations, exploit ingrained patterns of reliance, and strike many as intentionally exploitative.

Patent surprises are the worst intellectual property surprises.  Standards bodies have systematically prevented them for years, through member and working-group licensing commitments.  Such mechanisms won't protect unaffiliated open source adopters.  Those accustomed to good faith licensing choices will see a trap, with "open source" as the bait, and patents as the jaws.

## The underserved will lose the most.

Organizations using and building open software massively outnumber the experts they need.  The vast majority of organizations cannot engage with open software licensing in all its detail and variation, and have to rely on heuristic oversimplifications, like [Blue Oak's three-rule starter policy](https://blueoakcouncil.org/starter-policy), to stay confidently out of trouble.

"MIT and BSD are safe" is the best known, most-relied-upon shortcut.  A universe of MIT and BSD software, much of it created and licensed by individuals who will never seek any patent, is unlocked by that magic formula.  The nuance distinguishing free-to-use software under those terms and known-patent-encumbered software under the same terms would not be available to the vast majority of organizations.

A sudden, panic downgrade of MIT and BSD terms in places like [Blue Oak's license list](https://blueoakcouncil.org/list) would fundamentally threaten the 80/20 value propositions available to the unrepresented.  Advisers often focus on permissive terms like MIT and BSD because they're simpler.  It's easier for organizations like Blue Oak to reach the underserved en masse with practical resources by narrowing the problem to licenses that do not require sharing new work alike.  Unless those licenses camouflage patent issues.

## Let's consider alternatives.

Rather than release standards implementations that are open source only by historical technicality, burning the bridge to compliance for underserved organizations in the process, we should work together to develop approaches that meet open software expectations without driving patent holders away from the standards process.  Fortunately, open licensing's present offers much more flexibility than its past.

When it comes to patents, standards, and open source, we shouldn't stop at permissive open source software licenses.  We should also consider "copyleft" and "reciprocal" licenses:  terms that permit using, sharing, changing, and so on, just like permissive terms, but require some kinds of new work, built with the old, to be shared and licensed on open terms.  Copyleft licenses range from "weak", like [MPL-2.0](https://spdx.org/licenses/MPL-2.0.html) and [EPL-2.0](https://spdx.org/licenses/EPL-2.0.html), to traditional, like [GPLv3](https://spdx.org/licenses/GPL-3.0-only), to strong, like [AGPLv3](https://spdx.org/licenses/AGPL-3.0-only) and [OSL-3.0](https://spdx.org/licenses/OSL-3.0.html), to experimental, like [Parity](https://paritylicense.com) and [SSPL](https://www.mongodb.com/licensing/server-side-public-license).

In a parallel vein, we could apply the copyleft concept to standalone patent grants, sometimes called "[patentleft](https://en.wikipedia.org/wiki/Patentleft)".  The biological sciences have been pioneers in this field, through organizations like [BiOS](https://cambia.org/bios-landing/).  But the approach also has history in open software, as with the [Open RTLinux Patent License](https://web.archive.org/web/20011015091752/https://www.fsmlabs.com/openpatentlicense.html), a joint project [with the Free Software Foundation](https://www.gnu.org/philosophy/rtlinux-patent.en.html).

Licensing official and reference implementations under copyleft, or giving standalone, patentleft grants for standards-essential patents that only cover open source implementations under copyleft terms, could create bona fide open source, while preserving revenue opportunity---licensing patents for implementation in closed code---for patent holders where it matters most.  Copyleft open source implementations would be covered by free grants.  But uses in closed and proprietary products and services would require licenses, FRAND or otherwise.

## Licensing wonks are here to help.

Standards benefit from open source, and open source thrives on standards.  As a licensing-side specialist, I'm here to help hash out a practical solution to bring the two together, where patents pose special problems.

Opportunities to structure effective settlements _across_ specialties are the most precious, and often the most valuable.  Treating the FRAND-open source issues as two trains on a collision course would be to doom an incredible, maybe once-in-a-career chance for lawyers to _deliver_ value in the form of a newly paved-path to collaboration, rather than to act as compliance-minded gatekeepers.

If you care, and want to work on something, [drop me a line](mailto:kyle@kemitchell.com).

---

This post benefited from substantial feedback from a number of colleagues.  I've reached out for their permission to acknowledge them by name here.
