---
title: The Diachronic Treadmill License
description: automatically reward supporters with copyleft exceptions
layout: post
tags:
- Open Source
- Licensing
---

> The lack of evidence for a relation between objective circumstances and reported well-being has given rise to the concept of a [hedonic treadmill](https://en.wikipedia.org/wiki/Hedonic_treadmill), on which humans' happiness remains stationary, despite efforts or interventions to advance it.  The metaphor is also interpreted to mean that humans' happiness will decline if their material circumstances remain constant. --- [Shane Frederick](https://som.yale.edu/faculty/shane-frederick)

> hedonic, _adj._
>
> relating to or considered in terms of pleasant (or unpleasant) sensations.

> diachronic, _adj._
>
> concerned with the way in which something, especially language, has developed and evolved through time.

Here's a sketch of a public software license that implements automatic dual licensing, rewarding in-kind and monetary contributions to the project with exemption from copyleft.  This sketch mixes elements of the [Blue Oak Model](https://blueoakcouncil.org/license/1.0.0) and the [API Copyleft License](https://github.com/kemitchell/api-copyleft-license) with one new piece, [the Supporters section](#supporters).

> # The Diachronic Treadmill License 1.0.0-pre1
>
> Contributors to this software license their contributions on the terms of the [Blue Oak Model License 1.0.0](https://blueoakcouncil.org/license/1.0.0), plus the following terms:
>
> ## Copyleft
>
> (_This section was adapted from [The API Copyleft License](https://github.com/kemitchell/api-copyleft-license)._)
>
> With the exception of [Prototypes](#prototypes), unless you qualify under [Supporters](#contributors), you must contribute all software that invokes this software's functionality, as well as changes and additions to this software, according to [Contributing](#contributing).
>
> ## Supporters
>
> This section encourages ongoing contribution to this software and monetary support of those contributing.
>
> Supporters of this software are exempt from [Copyleft](#copyleft) for versioned releases that they supported.  An individual or legal entity qualifies as a supporter of a specific, versioned release of this software if they, or someone working for them, did any of these:
>
> 1.  contributed source code, documentation, or other written work to that release
>
> 2.  contributed written work to another release made after that release
>
> 3.  contributed written work to another release made during the six calendar months before publication of that release
>
> 4.  donated at least [$500] to contributors via [donation page URL], either after that release or during the twelve calendar months before publication of that release
>
> In other words, contributors and donors are exempt for all old releases, as well as new releases within the six calendar months after their last act of support.
>
> ## Prototypes
>
> (_This section was copied from [The API Copyleft License](https://github.com/kemitchell/api-copyleft-license)._)
>
> You need not contribute prototype changes, extensions, or applications that you do not end up using for more than fourteen calendar days, share with anyone else, or use to provide a service to anyone else.
>
> ## Contributing
>
> (_This section was adapted from [The API Copyleft License](https://github.com/kemitchell/api-copyleft-license)._)
>
> When this license requires you to contribute software:
>
> First, publish all source code for that software, in the preferred form for making changes, through a freely accessible distribution system widely used for similar source code, so the developer and others can find and copy it.
>
> Second, ensure that each part of that source code is licensed to the public under The Blue Oak Model License 1.0.0 or this Diachronic Treadmill License.  You may _not_ change the license terms for this software, but only to contribute software covered by [Copyleft](#copyleft) under your choice of permitted license.
>
> Take these steps within thirty calendar days of creating or using the software for the first time.
>
> ## Notices
>
> The Notices section of the Blue Oak License is replaced with:
>
> You must ensure that everyone who gets a copy of any part of this software from you, with or without changes, also gets the text of this Diachronic Treadmill License.
