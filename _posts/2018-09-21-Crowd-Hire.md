---
title: Crowd Hiring
description: assurance contracts for short-term open software maintenance
layout: post
tags:
- Open Source
- Legal Technology
- Contracts
---

Here's a sketch of a system for splitting the cost of paid open source maintenance over multiple companies:

1.  Offer a site where developers can offer maintenance contracts.  They fill out the form:

    > I, {Name}, a resident of {Location}, offer to commit {Number} of hours per week to maintaining and developing {Project} at {Project URL}, during the {Ordinal} quarter of {Year}, for a minimum of {Amount} United States Dollars per month, on the terms of this website's standard maintenance agreement.

2.  The site creates a contract page to which the maintainer can share.

3.  On the contract page, companies can commit to fund part of the contract, up to a maximum dollar amount.  They do so by uploading data files to their own websites, ensuring they're served over TLS, and submitting to the site for verification.  The site could take a small per-commitment service charge here, both to fund itself, and to help prevent bogus commitments.

4.  Thirty days before the quarter, the site checks all the commitments for the contract.  If the sum of all commitments equals or exceeds the maintainer's minimum, the site calculates an amount per committer, proportional to their commitments, adding up to no more than 150% of the maintainer's minimum.  The site e-mails all involved with a copy of the standard contract, and invoices ready to send to the companies.

5.  The maintainer and the companies sign the contract and handle payment.

6.  The standard contract requires the maintainer to spend the number of hours they committed:

    - first, bringing the project into compliance with minimum standards, published on the site

    - in remaining time, maintaining or further developing the project, with work delivered via open source distribution, under the previously applied license

7.  At the start of the quarter, the site e-mails the maintainer links to report any company that failed to honor its commitment.  Misbehaving companies are blacklisted from making further commitments.

8.  At the end of the quarter, the site e-mails the companies links to report any misbehavior by the maintainer.  Misbehaving maintainers are blacklisted from offering further contracts.

The major question I have is payment terms.  The simplest approach is to have the companies pay up-front.  To distribute the risk, they might pay some up front, the rest on completion, instead.

This system has a few distinct advantages:

- It promotes direct relationships between maintainers and company users willing to fund.

- It creates a market for services that allows maintainers to signal their needs directly in dollar figures.

- It's compatible with both small part-time and substantial full-time work commitments.

- It provides predictable income, though subject to some payment risk.

- It's relatively low-resolution, on a quarterly basis.

- It self-corrects for maintainers undervaluing their own time.

There are a few downsides:

- Administrative burden is high for contracts "made" by many small committers.  I'd be tempted to set a commitment minimum, probably as a percentage of the maintainer's minimum.  But that wouldn't eliminate the problem of many committers to successful contract offers.  Perhaps another rule, capping the number of committers who pay, starting from the latest to commit.

- It requires many contracts over time.  Standardization of the contracting terms, and an understanding site-wide that all parties involved will use them, can help.  Of course, stable relationships may prefer to sign longer-term, recurring contracts without using the platform.

- Maintainers must publicly disclose the dollar amounts they want or need.  The site could perhaps do _without_ disclosing whether contracts made or didn't.

The main challenges that I can see in implementing this kind of system would be:

1.  Map the state machine of a contract from proposal through post-performance reporting.

2.  Get the contract terms right.

3.  Design and implement decisions about what information is made available to who, and when.

I'm tempted to give it a shot.
