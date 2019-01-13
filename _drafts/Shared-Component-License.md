---
title: Shared Component License
description: first shot at a short, plain license in the vein of Mongo's SSPL
layout: post
keys:
- Copyleft
- Licensing
- Open Source
- SSPL
---

Those following the public back-and-forth on MongoDB's new [Service Side Public License](https://www.mongodb.com/licensing/server-side-public-license) will have noticed that I think SSPL is open source, but not well crafted.  The choice to [patch AGPLv3](https://webassets.mongodb.com/_com_assets/legal/SSPL-compared-to-AGPL.pdf) made everything hard.  I should know.  I made the same mistake with [my own strong-copyleft license](https://licensezero.com/licenses/parity).  Starting from BSD was bad enough to induce a rewrite from scratch.  AGPLv3 is magnitudes worse, in ways glaring and subtle.  Case in point: SSPL's most important section is buried 4,100 words and 12 sections down.

The licensing project SSPL represents matters.  The best criticism comes in-kind.  So that's the kind of criticism SSPL deserves.  I've been laid up for weeks with an injury, and found myself with the time.

Follows now a first draft of a plain language license inspired by SSPL.  This has _not_ been shopped with other lawyers to date, and is not ready for use.  I'm looking forward to reviewing, discussing, and refining [on GitHub](https://github.com/kemitchell/service-component-license).  If you're interested, watch the repository or [drop me a line](mailto:kyle@kemitchell.com).

> # Shared Component License
>
> Developer: {Legal Name}
>
> Homepage: {URL}
>
> ## Purpose
>
> This license gives you broad permission to work with this software for any purpose, but requires you to contribute source code for changes, additions, and superstructure.
>
> ## Disclaimer
>
> ***As far as the law allows, this software comes as is, without any warranty, and the developer will not be liable to anyone for any damages related to this software or this license, for any kind of legal claim.***
>
> ## Acceptance
>
> In order to receive this license, you must agree to its rules.  The rules of this license are both obligations under our agreement and conditions to your license.  You may not do anything with this software that triggers a rule you cannot or will not follow.
>
> ## Copyright
>
> The developer licenses you to do everything with this software that would otherwise infringe copyrights in this software that the developer can license.
>
> ## Patent
>
> The developer licenses you to do everything with this software that would otherwise infringe any patent claims they can license.
>
> ## Reliability
>
> The developer will not revoke this license.
>
> ## Notices
>
> You must ensure that everyone who gets a copy of any part of this software from you, in source code or any other form, with or without changes, also gets the text of this license, including its developer and homepage lines.
>
> ## Changes
>
> Contribute changes to files containing this software.
>
> ## Additions
>
> Contribute additions to this software.  You need not contribute additions to other software that only invokes this software's functionality through the interfaces this software exposes, unless [Superstructure](#superstructure) requires.
>
> ## Applications
>
> You need not contribute applications that only invoke this software's functionality through the interfaces this software exposes, unless [Superstructure](#superstructure) requires.
>
> ## Superstructure
>
> Contribute software used to expose this software's interfaces and functionality to applications.  For example, contribute software for managing instances of this software, orchestrating its deployment, logging its activity, monitoring its performance, or backing up its data.
>
> ## Interfaces
>
> Interfaces exposed by this software include all the interfaces this software provides users or other software to invoke its functionality.  For example, command line, graphical, application programming, remote procedure call, and inter-process communication interfaces.
>
> ## Contribution
>
> When this license requires you to contribute software:
>
> 1.  Publish all source code for that software, in the preferred form for making changes, through a freely accessible distribution system widely used for similar source code, so the developer and others can find and copy it.
>
> 2.  License that software under the terms of this license, so the developer and others may work with that software.  Alternatively, you may license that software on other terms with substantially the same legal effect as [Copyright](#copyright), [Patent](#patent), and [Reliability](#reliability).  Your other terms may, but need not, include a rule like [Notices](#notices), a disclaimer like [Disclaimer](#disclaimer), or both, but no other terms.  For example, you may license under the [BSD-2-Clause Plus Patent License](https://spdx.org/licenses/BSD-2-Clause-Patent.html).
>
> ## Excuse
>
> You are excused for unknowingly breaking [Notices](#notices), [Changes](#changes), [Additions](#additions), or [Superstructure](#superstructure) if you do what the rule requires, or stop doing anything requiring this license, within 30 days of learning you broke the rule.

How does this draft compare to SSPL, substantively?

Like SSPL, the draft substantially strengthens copyleft.  It follows the line of [OSL](https://opensource.org/licenses/OSL-3.0), [AGPLv3](https://www.gnu.org/licenses/agpl-3.0.en.html), [Q](https://opensource.org/licenses/QPL-1.0), and [RPL](https://opensource.org/licenses/RPL-1.5) in that respect.

Like SSPL, the draft applies that strengthened copyleft selectively.  In particular, the draft carves out a permissive use case: building applications using the licensed code.  I've [written about that innovation and its political consequences](https://writing.kemitchell.com/2018/11/04/Copyleft-Bust-Up.html#commercial).

Unlike SSPL, the draft uses different rules to draw the boundary between changes and additions that have to be contributed, and applications that don't.  As a baseline, the draft uses an [MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/)-style, file-based copyleft.  On top of that, the draft sweeps additions to the functionality of the licensed software by drawing a boundary at the interfaces the licensed software exposes.

Like SSPL, the draft follows network-copyleft licenses in triggering copyleft without distribution, and reciprocal licenses in requiring publication, rather than in-band distribution, of source.  SSPL has to trigger that way for service superstructure, since service superstructure code isn't distributed to service users.   But SSPL keeps GPL-style copyleft for changes and additions.  Using the same distribution requirement for all kinds of code in the scope of copyleft brings the draft closer to [RPL](https://opensource.org/licenses/RPL-1.5).  The draft is [an actual patches-back license](https://writing.kemitchell.com/2018/08/28/Unhappy-Coincidences.html#software-freedom-doesnt-mean-patches-back), not a patches-forward license that only incidentally empowers users to send code back.

Unlike SSPL, the draft generalizes from service programs to all programs, by drawing the line using an abstraction: interfaces to functionality.  Within the draft, "interfaces" means not just APIs, but CLIs, RPCs, IPCs, or similar mechanisms.  The line between code extending the licensed software that must be contributed back---change or addition---and code that need not---application---is whether the other software merely uses the licensed software through the interfaces it exposes.

Unlike SSPL, the draft gives users the option to license the code contributed back under permissive terms.  SSPLv2 added some of this flexibility for code within its sweep that the licensee lacks the rights to relicense.  Under the draft, permissive is always an option.

Like SSPL, which inherited from AGPL, the draft include an automatic-forgiveness provisions for unknowing violations of license rules.  SSPL uses a more formal notice protocol.  This draft follows Parity in turning on knowledge, which notice of a violation can induce.

Of course, these are hardly all the similarities and differences.  But at less than 550 words, it's quick enough to read the whole license.

The key issues in my mind, going forward:

1. What parts won't be clear to developers?  Any confusing parts?
2. Can we improve the boundary between changes and additions, on the one hand, and applications, on the other?
3. Can we improve the boundary between applications and superstructure?
4. Can we find a better term than "superstructure"?

[Open an issue on GitHub](https://github.com/kemitchell/service-component-license/issues/new) or [drop me an e-mail](mailto:kyle@kemitchell.com) anytime.