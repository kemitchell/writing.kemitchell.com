---
title: Enterprise Ready Open Software License Supplement
description: the status quo, plus money for devs
layout: post
tags:
- Business Models
- Forms
- Licensing
- Open Source
---

<aside class="brief" markdown="1">
I've packed up the difference between commercial license expectations and open source license expectations up as a supplement that open source developers can sell to wary businesses.
</aside>

Most of my work on getting open software developers paid challenges the status quo.  In more ways than one, open software developers, especially independent ones, are being relegated to a distinct, subservient professional caste, subject to a cap on "reasonable" financial expectations.  As an independent attorney in solo private practice serving upstart companies and developers, I'm in a unique position, and bear a unique responsibility, to resist that scheme.  I do and I will.

But today I'm announcing a different kind of initiative: the first draft of an open contract form for bridging the gap between open software licenses give and what companies, as a rule, expect.  Open software developers can use this form, which I've dubbed the [Enterprise Ready Open Software Supplement](https://github.com/indieopensource/enterprise-ready-supplement), to sell guarantees of the licensing best practices they're likely already following, rephrased like the warranties that common open software licenses disclaim.  This without taking on any additional service obligations, or otherwise changing how they work.

In other words, the Enterprise Ready Open Software Supplement diffs a prototypical open license and a prototypical commercial license, packages the patch, and makes it something open devs can sell.

That maneuver has tons of potential, for several compelling reasons.

Allies within closed companies often run aground when it comes to paying the open developers their teams rely on.  Simply handing open developers money for nothing---making a "donation"---isn't something procurement departments or expense policies exist to approve.  Rather, it's something accounting departments exist to identify, expose, and condemn as a leak in the books, symptomatic of corruption.

A common response to that problem has been to camouflage donative transactions as exchanges.  I've known several CTOs who "hired" open software developers as independent contractors, on flat monthly fees, under a laughably vague statement of work, or no statement of work at all.  Some of these developers proceeded to take pay for months and even years, occasionally outlasting several CTOs in succession, none of whom noticed the contracts, or thought to stop payroll from sending the wires.  Some of those same companies unwittingly got fantastic deals, since the cash enabled the open developer to contribute prolifically to their code bases, with in-house devs routinely adopting new open-developer work, completely unaware of the affiliation.

In reality, many of these donative transactions were only donative because both sides---contract developer and in-house ally---lacked the business and legal vocabulary to express what they were exchanging so company financial machinery could understand.  In lieu, they typically sign the nearest, ill-fitting independent contractor form to hand, with all the problems, especially assignment of intellectual property to the company, that I've called out and redressed in my [Switchmode](https://switchmode.github.io/) form.  But even if I sat down to write out what those folks really meant to promise and pay for---development services, maintenance work, technical support, and consulting---I could think of something far narrower, but still very valuable, and worth paying for.

That is the [Enterprise Ready Supplement](https://github.com/indieopensource/enterprise-ready-supplement).  No services.  Only guarantees and a few additional license rules, missing from common public licenses for open software, but well established in the expectations now shared by open software producers and consumers.

From a cynical point of view, the Supplement is perfect camouflage.  It expresses the minimum that an open software developer can offer, in practical terms, for pay.  To the untrained eye, it appears to magically transmute fundamentally donative or patronage transactions into legal exchanges.  It is [what Mike Perham calls a "fig leaf"](https://twitter.com/mperham/status/1113480007379062785)---the minimum needed to cover the nakedness of a transaction.

But that ignores the very real insistence of large companies on these kinds of terms, and their reasons for that insistence.  Reasons that have bled over even into open software licensing, like the [Academic Free License](https://opensource.org/licenses/AFL-3.0) and [Open Software License](https://opensource.org/licenses/OSL-3.0), both of which _do_ make guarantees about rights to license the code, omnipresent in closed terms, but missing from open.

Have a look at [the developer obligations under version 1.0.0-draft-1 of the form](https://github.com/indieopensource/enterprise-ready-supplement/blob/3647e713c059d28fc3e867e287feef8e19c6c001/terms.md#developers-obligations).  They were written to be read by developers.  Skim the headings:

- [Understand Intellectual Property Basics](https://github.com/indieopensource/enterprise-ready-supplement/blob/3647e713c059d28fc3e867e287feef8e19c6c001/terms.md#understand-intellectual-property-basics)

- [Ensure Rights to License](https://github.com/indieopensource/enterprise-ready-supplement/blob/3647e713c059d28fc3e867e287feef8e19c6c001/terms.md#ensure-rights-to-license)

  - [Rights for Current Software](https://github.com/indieopensource/enterprise-ready-supplement/blob/3647e713c059d28fc3e867e287feef8e19c6c001/terms.md#rights-for-current-software)

  - [Rights for Future Software](https://github.com/indieopensource/enterprise-ready-supplement/blob/3647e713c059d28fc3e867e287feef8e19c6c001/terms.md#rights-for-future-software)

  - [Contribution Licensing Records](https://github.com/indieopensource/enterprise-ready-supplement/blob/3647e713c059d28fc3e867e287feef8e19c6c001/terms.md#contribution-licensing-records)

- [Provide Assurance About Patents](https://github.com/indieopensource/enterprise-ready-supplement/blob/3647e713c059d28fc3e867e287feef8e19c6c001/terms.md#provide-assurance-about-patents)

- [Only Depend on Open Software](https://github.com/indieopensource/enterprise-ready-supplement/blob/3647e713c059d28fc3e867e287feef8e19c6c001/terms.md#only-depend-on-open-software)

- [Ensure License Compatibility](https://github.com/indieopensource/enterprise-ready-supplement/blob/3647e713c059d28fc3e867e287feef8e19c6c001/terms.md#ensure-license-compatibility)

- [Make Patent License Explicit](https://github.com/indieopensource/enterprise-ready-supplement/blob/3647e713c059d28fc3e867e287feef8e19c6c001/terms.md#make-patent-license-explicit)

- [Forgive Inadvertent Public License Violations](https://github.com/indieopensource/enterprise-ready-supplement/blob/3647e713c059d28fc3e867e287feef8e19c6c001/terms.md#forgive-inadvertent-public-license-violations)

The larger a company, the more those basic assurances are worth. And to the greater point, the more an open developer aims to encourage widespread adoption of their work, the more likely they've already internalized and followed processes to head off all those problems.

To the extent those processes represent work to be done, they're broadly shared inconveniences.  That has give risen to a wealth of automated tooling, from license checkers to CLA bots and reference works.  In other words, if there's a cost to providing these extra guarantees, developers have shared means of mitigating it.

The Enterprise Ready Open Software Supplement is [on GitHub](https://github.com/indieopensource/enterprise-ready-supplement), and I look forward to suggestions and comments.  In time, I'm sure I'll add it to [indieopensource.com](https://indieopensource.com), along with other legal resources for indie open software devs.

If you find yourself using the Supplement to buy or sell assurances about software, drop me a line.
