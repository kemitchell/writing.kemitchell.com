---
title: Open Software Service Terms
description: legal terms for paid web apps, now available in the English language
layout: post
tags:
- Contracts
- Forms
- Open Source
---

I'm pleased to announce publication of freely available, generic license terms for hosted and licensed software services.  The current draft is available [on commonform.org](https://commonform.org/kemitchell/generic-software-service-terms/latest), as well [on GitHub](https://github.com/kemitchell/software-service-terms/releases), where issues and pull requests are welcome.

<!--jump-->

## Scope

I wrote the terms, from scratch, with a common use case in mind:

- software services used via web browser

- offered as hosted services and licensed for customer installation "on-premises" or on their own infrastructure

- for general internal-business software and dev tools

- without support for peculiar data regulations, like HIPAA or FCRA

- with an online administrative dashboard for purchase and account management

- in the United States market

While drafting, I kept a few guiding principles in mind:

1.  _Minimum Legalese_:  Wherever possible, the form tries to use simple sentences of ordinary English.

2.  _Maximum Internet_:  As much communication should happen online as possible, from signup to changes through termination.

3.  _Commercial Flexibility_:  Allow providers to offer custom packages of features, pricing, deal terms, and other details without revising the form.

4.  _One Form to Rule Them All_:  Free and paid customers, hosted-service and licensed, should all see one set of legal terms.

5.  _Balance_:  Try to plot a middle course between what providers usually want and what customers usually want, placing risks and responsibilities where they'd usually end up if each side had full opportunity to put all its best arguments forward.

## Highlights

Mix all those ingredients, what do you get?

### Dead-Simple Preparation

All the details to be customized live in a single section, at the top of the form.  At the moment, there are just five blanks:

1.  the name of the software

2.  a short description of what it does

3.  the URL of the website where the software is hosted for users

4.  the URL of the account dashboard site

5.  the URL of the documentation site

Other details, like notice addresses and billing information, come from the account dashboard.  Others, like venue for lawsuits, are set based on the provider's home office location, with fallback for small and distributed companies.

### Sales Process Compatibility

The form expects most customers to purchase service and licenses online, selecting from among packages offered on the provider's website.  The form incorporates the details of the chosen package, as well as any customized selections, like initial seat count, from that "Order".  However, the Order can alternatively take the form of a purchase order for a package quoted directly to a prospect, for compatibility with more traditional procurement processes.  The provider can sell either way.

Some customers will always want custom terms---business and legal.  Even the clearest, best-prepared form contract won't bring the whole world onto a single set of terms.  But the form aims to maximize the number of customers through the pipeline without legal wrangling.

### Switchable Terms

The form includes a number of alternative terms that apply only for specific kinds of packages.  Most notably, the terms vary based on whether the sale is for hosted software---provider runs the software---or licensed software---customer gets a license to run the software itself.  There's no awkward license-for-service.

Substantial deal terms are left entirely up to the package description, presented on a website or quoted on paper.  Pricing, use limitations, term, billing, and lock-in timelines, as well as SLAs and support terms, are all left to the package description.  Packages can also give prospects a choice of terms, like use limitations or payment methods.  Sane defaults, like net 30 payment terms, kick in to fill obvious gaps.  A few common terms, like "Concurrent Users", have defined meanings, to avoid the most obvious interpretation problems.

The aspects of a package incorporated the terms are listed in a single section at the front of the form.  This doubles as a handy checklist when filling out package comparison grids.

In the past, I've seen objections to this approach, based on fear that package descriptions won't have the same rigor as contract terms reviewed by attorneys.  But there's nothing to stop attorneys taking a hand in reviewing offering grid updates, and in my experience, forcing those details into the legal terms merely produces conflicts when offering terms on the website and legal forms slip out of sync.

### Online Administration

The form assumes the provider has a website where customers can sign up, pay, and manage their accounts.  Whenever possible, the form _requires_ customers to use that site to communicate and make contract changes like cancellations and use limitation changes.

This makes a little homework for the provider's web development team.  But in practice, libraries, frameworks, and hosted services are broadly available to make it easy and cheap---easier and cheaper, in any event, than hiring back-office assistants, or paying lawyers to do the same job, begrudgingly, at a multiple of the cost.  Long term, it's what all providers hoping to provide and license in volume head toward, if they can.

### Data Privacy and Security

The form leaves in place any separate NDA between provider and customer.  It does _not_ introduce new or redundant NDA terms of its own.  It does adds a specific negative covenant preventing the provider from using, accessing, or disclosing customer data, with exceptions for provision of the software, compliance, and support.  The customer commits not to submit any data subject to sector-specific, rather than general, data privacy and security regulations.

A generic form can't be specific about security measures and expectations.  Even specialized forms haven't got this right enough to evidence consistency yet.  Everyone opts instead for some familiar, vague construction.  The form chooses "industry-standard", both to prevent inadvertent publication and to forestall hack attacks.  It expressly _disclaims_ any absolute guarantee of security.

### Open Source Reality

The terms address publicly licensed software dependencies, but without using the frequently misapprehended terms "open source" or "free software".  The provider commits to make sure software dependencies are publicly licensed and publicly available when the software is licensed for customer installation.

### Disabling Code Compromise

The form strikes a middle ground between a "no disabling code" guarantee, which invites inattention and abuse, and complete freedom to shut down functionality when a license key or other validation fails, which often leads to false-negative service disruptions.  The provider can include code to stop functionality if _administrative_ credentials, like master license keys, fail.  It can't shut down functionality for software-detected use limitation overruns, though it can phone home to let the provider know something may be amiss.

Disabling code is properly distinguished from malicious code.  The provider makes a full guarantee of no malicious code, and takes responsibility for subcontractors' compliance, as well.

### Patent Sanity

Provider gives standard indemnity for copyright, trademark, and trade secret infringement, as well as inherent illegality.  Provider also gives a warranty that it isn't aware of any patent infringement at the time of sale.  The damages limit doesn't apply to that warranty.  Provider gets the standard option to engineer around, procure license, or refund for any infringement or illegality situation.  None of this is buried.

In terms of patent risk on combinations, the form distinguishes "Use of the Software at Customer's Own Risk" and its opposite, "Permitted Use of the Software".  The kinds of use the provider expects, and therefore accepts risk for, are those described by published documentation for the software.

### Generosity-Compatible

The form expects some customers to use for free, under packages that offer $0 pricing some or all of the time.  A number of risk-shifting terms, like indemnity, fall away whenever a customer uses for free.

Any package can set eligibility criteria, like tax-exempt status.  The form has hooks to ensure that customers who qualify for a special package need to stay eligible.

## What's Next?

I'd love feedback, from lawyers and especially not-so-lawyers.  Part of the point of plain language is to open up the field.  There's nothing in the form that business people, who are often smarter than their lawyers, cannot grasp.  Indeed,  I think there are better arguments that business people _ought_ to understand their own terms, even if they continue to rely on counsel to make changes when needed.

Of course, I'm sure I'll have plenty of changes of my own, as I think through whether new and old clients should adopt the form, and why.

I need to figure out some kind of license for the form itself, both from myself and from any contributors who come along, with provision for public credit, within their comfort levels.

Hand-in-hand with license, I'd like to come up with a distinctive name for the project.  Ideally, the license would offer some protection for the name, say via a requirement to use a different name, or list changes, when modifying.  Suggestions will be very welcome.
