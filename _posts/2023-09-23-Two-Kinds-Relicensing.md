---
title: Two Kinds of "Relicensing"
description: going-forward and retroactive
series: Overloaded
tags:
- Open Licensing
- Business Models
- Dual Licensing
- License Revocation
---

[Overloaded terms](https://writing.kemitchell.com/2023/09/10/Overloaded) cause confusion.  Confusion can be weaponized.  When "relicensing" can mean a few different kinds of changes, companies announcing one find their competitors implying another.  Maybe even one that isn't even a thing.

<h2 id="going-forward">Going-Forward Relicensing</h2>

The ongoing parade of companies "relicensing" their projects---Mongo, Elastic, Redis, Comodo, Confluent, Hashi, more I'm forgetting---all announced changes to the license terms for new work going forward.  They didn't announce new or different terms for past work already released.

Nowhere in any common open license does anyone promise to keep working on their project, much less on particular terms.  Any contributor to a [permissively-licensed project](https://blueoakcouncil.org/list) can license their next contribution however they want.  Any steward of a [copyleft](https://blueoakcouncil.org/copyleft) project with rights to all contributions can, too.  Much as you could pick an Apache-licensed project, fork it, and sell your enhanced version under proprietary terms, a project steward can share new work under new terms, as well.

None of this changes the license terms for old releases.  Prior versions with MIT or Apache 2 or MPLv2 or what have you in the `LICENSE` file remain available to use, share, and change under those terms.  That includes forking.  We see that every time a going-forward relicensing spawns a new one.  The reason the new license terms matter for new releases is that those new license terms apply to the diff between the old release and the new one.

<h2 id="retroactive">Retroactive Relicensing</h2>

Sometimes projects stewards and contributors do announce new license terms for old versions.  But those new license terms are in addition to the old ones, not in replacement of them.  The result is [choice-of-terms dual licensing](https://writing.kemitchell.com/2023/09/10/Two-Kinds-Dual-Licensing#choice-of-terms) for old releases.  It's

```diff
  Old License
+ or New License
```

not:

```diff
- Old License
+ New License
```

For example, many stewards of GPLv2 projects retroactively relicensed onto GPLv<em>3</em> when it came out.  The old releases didn't stop being available under GPLv2's terms.  They became available under your choice of GPLv2 or GPLv3.  In practice, that means you can comply with the license for the project by licensing your patches under GPLv3, even though, before retroactive relicensing, the original GPLv2 terms required GPLv2.

Many of the same stewards _also_ announced going-forward relicensing simultaneously.  Both old _and new_ versions became available under GPLv3.  When you have or can get rights in all contributions to a project, you can relicense going forward, retroactively, neither, or both.  They're independent operations, because they affect different contributions.

<h2 id="revocation">Bogeyman: Revoke-and-Replace</h2>

The law does have a mechanism for taking previously granted licenses back.  It's called "revocation", as in "I revoke your license to my project".  The result is no license at all, a gap the steward could then fill by applying a new but different license.

Relatively recent, well drafted open licenses specifically say they can't be revoked.  Here's from [the Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0#reliability), for example:

> ## Reliability
>
> No contributor can revoke this license.

Apache 2.0s [copyright grant](https://apache.org/licenses/LICENSE-2.0#copyright) hides it in a traditional lawyers' run-on list:

> ...each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, <mark>irrevocable</mark> copyright license...

But even licenses that don't say anything about revocation, like [MIT](https://spdx.org/licenses/MIT), [ISC](https://spdx.org/licenses/ISC), and [BSD](https://spdx.org/licenses/BSD-2-Clause), arguably can't be revoked in practice.

The general rule is that a license is "revocable at will", meaning whoever grants it can take it back anytime.  But licenses for open software nearly always come about through contracts---legally enforceable exchanges.  What you give under contract you _can't_ just take back because you want to, unless of course the other side [blows their end of the deal](https://blog.min.io/weka-violates-minios-open-source-licenses/) before you do.

Every time I've talked open license revocation with savvy colleagues, the upshot has been that it's probably hard or even practically impossible to take back an MIT or BSD grant just because you wanna.  Not just because of US law as it stands, but also due to practical limits.  It's probably just impossible to run down all copies of a software project floating around the Web with the old license terms.  Meanwhile, the people reading those license terms can justifiably conclude they're allowed to redistribute, sometimes even sublicense.

As an side, I'm starting to wonder whether we underestimate the way changes in software distribution, especially centralization through package repos and licensors' own websites, might affect the practicalities of revocation.  I also wonder whether we'll see some big company, likely one _not_ trying to be besties with open source, puts its legal budget behind a competitor revocation notice, if only to force a delay.  But for now, and so far, taking back open license terms just hasn't been a play license stewards have had in their books.  They've found other ways to keep their rivals away.

For now, and so far, when we've talked about "relicensings", we haven't been talking about taking old terms back.
