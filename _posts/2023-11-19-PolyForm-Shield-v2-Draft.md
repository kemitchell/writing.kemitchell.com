---
date: 2023-11-19T12:19:33-08:00
title: Toward PolyForm Shield Version 2
description: streamline and revise for easier reading
series: PolyForm
tags:
- Licensing
- Software
- Standard Legal Terms
- Defensive Licenses
---

It's been [more than three years](/2020/05/14/PolyForm-Defensive-Perimenter) since [PolyForm](https://polyformproject.org) published its pair of licenses for developers looking to release broadly without enabling competitors to use their own work against them.  Those forms---[Shield](https://polyformproject.org/licenses/shield/1.0.0/) and [Perimeter](https://polyformproject.org/licenses/perimeter/1.0.0/)---still represent the published state of their art, with coverage that others like [Hashi](https://writing.kemitchell.com/2023/08/18/HashiCorp-BSL) and [Sentry](https://fsl.software/) have missed or had to [revise](https://www.hashicorp.com/bsl#why-we-made-this-update) or [FAQ](https://www.hashicorp.com/license-faq) for.

At the same time, both users of the licenses and other contributors to PolyForm have increasingly felt an itch to revisit those forms, first and foremost to make them easier to read.

One of our key, early decisions drafting the original batch of PolyForm licenses was to reuse as much language between [the different licenses](https://polyformproject.org/licenses/) as possible.  That led some abstractions, like the concept of "Permitted Purpose" that made it easy to reuse [the](https://polyformproject.org/licenses/noncommercial/1.0.0#copyright-license) [various](https://polyformproject.org/licenses/noncommercial/1.0.0#patent-license) [license](https://polyformproject.org/licenses/noncommercial/1.0.0#distribution-license) [grants](https://polyformproject.org/licenses/noncommercial/1.0.0#changes-and-new-works-license) and other terms verbatim, by defining "Permitted Purpose" differently in each license.  On the downside, some of those definitions were harder to read than others:

| License | Definition |
|-|-|
| [Noncommercial](https://polyformproject.org/licenses/noncommercial/1.0.0#noncommercial-purposes) | "Any noncommercial purpose is a permitted purpose." |
| [Strict](https://polyformproject.org/licenses/strict/1.0.0#noncommercial-purposes) | "Any noncommercial purpose is a permitted purpose." |
| [Internal Use](https://polyformproject.org/licenses/internal-use/1.0.0#internal-business-use) | "Use of the software for the internal business operations of you and your company is use for a permitted purpose." |
| [Small Business](https://polyformproject.org/licenses/small-business/1.0.0#small-business) | "Use of the software for the benefit of your company is use for a permitted purpose if your company has fewer than 100 total individuals working as employees and independent contractors, and less than 1,000,000 USD (2019) total revenue in the prior tax year." |
| [Free Trial](https://polyformproject.org/licenses/free-trial/1.0.0#free-trial) | "Use to evaluate whether the software suits a particular application for less than 32 consecutive calendar days, on behalf of you or your company, is use for a permitted purpose." |

Those with exceptions led to two-branch decision trees, which could feel a bit like double negatives.  Readers really had to step through the terms to find answers.

Then came Shield and Perimeter, which _both_ relied heavily on "Permitted Purposes" with exceptions:

| License | Definition |
|-|-|
| [Perimeter](https://polyformproject.org/licenses/perimeter/1.0.0#noncompete) | "Any purpose is a permitted purpose, <mark>except</mark> for providing to others any product that competes with the software." |
| [Shield](https://polyformproject.org/licenses/shield/1.0.0#noncompete) | "Any purpose is a permitted purpose, <mark>except</mark> for providing any product that competes with the software or any product the licensor or any of its affiliates provides using the software." |

"Except" needs to show up in these licenses.  Fundamentally, they're licenses to "do whatever..._except_ compete" with the project itself---that's Perimeter---or the project or the developer's products and services that are using it---that's Shield.  But those "except"s belong up top, not buried behind the indirection of "Permitted Purpose".

## Draft

Here's a working draft of PolyForm Shield v2, making this as well as other improvements.  As always, feedback is incredibly welcome.  Drop me a line at [kyle@kemitchell.com](mailto:kyle@kemitchell.com) anytime.

> # PolyForm Shield License
>
> Version 2.0.0 Development Draft
>
> <https://polyformproject.org/licenses/shield/2.0.0>
>
> ## Purpose
>
> Under these terms, we give everyone broad permission to work with this software, except to compete with us.
>
> ## Acceptance
>
> In order to receive licenses under these terms, you must agree to their rules. Those rules are both obligations under our agreement and conditions to your licenses.
>
> ## Copyright
>
> We license you to do everything with this software that would otherwise infringe our copyright in it, except to compete with us.
>
> ## Patent
>
> We license you to do everything with this software that would otherwise infringe any patent claims we can license or become able to license, except to compete with us.
>
> ## Competition
>
> Competing with us means developing or providing any product or service that competes with this software or any other product or service we or our corporate group provide using this software. Products and services can compete even when they work through different kinds of software interfaces or for different technical platforms. Applications can compete with services, libraries with plugins, frameworks with development tools, and so on, even if they’re written in different programming languages or for different computer architectures. Products and services can compete even when provided free of charge. If you market a product or service as a practical substitute for another product or service, it definitely competes.
>
> ## New Products and Services
>
> If you are using this software to provide a product or service that does not compete with us, but we bring you into competition with us by providing a new version of this software or a new product or service using this software, you may continue using versions of this software that we licensed under these terms beforehand to provide your competing product or service, but not any later versions.
>
> ## Discontinued Products and Services
>
> You may begin using this software to compete with a product or service that we have stopped providing for at least one year.
>
> ## New Owners
>
> If we sell a line of business developing this software or using this software to provide a product or service, the buyer can also enforce these terms against you for competing with the software, product, or service they bought.
>
> ## Notices
>
> You must ensure that anyone who gets a copy of any part of this software from you also gets a copy of these terms or the permalink for them at the top of this license, as well as copies of any plain-text lines beginning with `Required Notice:` that we provided with this software. For example:
>
> > Required Notice: Copyright Example, Inc. (https://example.com)
>
> ## Patent Defense
>
> If you make any written claim that this software infringes or contributes to infringement of any patent, you and your corporate group’s patent licenses for this software end immediately.
>
> ## Excuse
>
> If anyone notifies you in writing that you have not complied with Notices, you can keep your licenses by taking all practical steps to comply within 32 days after the notice. If you do not, you and your corporate group’s copyright and patent licenses for this software end immediately.
>
> ## Reliability
>
> We cannot revoke this license.
>
> ## Corporate Groups
>
> The corporate group of an organization includes any subsidiaries it controls, parent companies that control it, and subsidiaries its parent companies control. Control means owning all or nearly all of the assets of an organization or having the power to direct its management or policies.
>
> ## No Liability
>
> ***As far as the law allows, this software comes as is, without any warranty or condition, and we will not be liable to anyone for any damages related to this software or these terms, under any kind of legal claim.***

This new draft runs significantly shorter than [1.0.0](https://polyformproject.org/licenses/shield/1.0.0), despite adding a new, explanatory ["Purpose" section at the top](#purpose).  It's still a fixed form, with no blanks to fill out.
