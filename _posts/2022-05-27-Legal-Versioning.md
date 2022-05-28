---
date: 2022-05-27T20:41:40-07:00
title: Legal Versioning
description: refined scheme for functional prose projects
tags:
- Legal Technology
- Standards
---

I've just published [legalversioning.com](https://legalversioning.com), a single-webpage guide to a revised numbering scheme for legal forms and other functional documents.  I'll be moving my own forms and [Common Form](https://commonform.github.io) tools over to this new scheme shortly.

Legal Versioning builds directly off my prior work on [Reviewers Edition](https://reviewersedition.org), with a few key changes:

- I've moved to software-style version numbers à la `10.2.0`, instead of newfangled `10e2u`.  I think widespread familiarity with software-style version numbers outweighs the uniqueness and readability of edition-style numbering.  I've found myself using software-style numbers with Reviewers Edition-style semantics on a number of client projects.

- legalversioning.com speaks specially on _legal_ terms and forms.  The scheme can be used for any kind of functional writing, but I'm making the focus more clear.  There's no stopping other kinds of writing from using Legal Versioning.

- I've taken a full reorganization and proofreading pass on the explanation, to make it even shorter and more accessible.  Hopefully that shows.

Fellow nerds will see the debt to [Semantic Versioning](https://semver.org/) even more clearly now.  For those already familiar with Semantic Versioning for software, the "diff" is roughly:

- We're versioning functional prose like legal forms and reusable clauses, not software.

- The semantics are defined in terms of intended message from drafter-maintainer to reviewer-user, rather than any inherent functional property of the product, like breakage.

- There is no `0.y.z` prerelease undefined chaos range.  All valid version numbers have meaning explained by the guide.  Chaos goes in drafts, akin to `1.0.0-pre.7` instead of `0.7.0`.

- There is just one scheme for drafts, the optional <code>-<em>number</em></code> suffix.  There is no semi-freeform allowance for build tags or prerelease numbers.

This work fell out of a broader effort to implement the stairstep approach to more widespread incorporation by reference of legal clauses that I outlined in ["From Copy to Reference"](https://writing.kemitchell.com/2022/05/12/From-Copy-to-Reference) in the Common Form tools.
