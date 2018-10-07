---
title: "Seeking Comment: Copyright Notice Recommendation"
description: "first stab at a pragmatic best-practice guide"
layout: post
tags:
- Open Source
- Licensing
---

I'm tired of watching open software developers wring hands, speculate, and confuse themselves about copyright notices for MIT- and BSD-style license terms.

***The following recommendation is a preliminary draft, published for comment.  If you want a more definitive recommendation, ask other intellectual property lawyers you know to review this post and send me feedback at <kyle@kemitchell.com>.***  If I gain enough confidence in its generality within scope, with or without changes, I'll spin up a one-page site, version the text, and announce here on the blog.

Even if this recommendation matures, it will always bear a disclaimer:  ***If you need legal advice, speak to a lawyer.***  No recommendation will always be right, and I won't be professionally responsible to you if and when this one isn't.  If I had to take that risk, I couldn't afford to publish any recommendation at all, even with perfect confidence that it would help avoid headaches and legal problems 99.9+% of the time.

## <a id="purpose"></a>Purpose

The purpose of this recommendation is to ensure that everyone who gets a copy of the software gets a list showing _both_ all the contributors to the project _and_ all the parties---people and entities---granting licenses for work in the project.

That purpose serves two constituencies.  Developers get credit for the work they do.  Users get records of where their licenses come from.

## <a id="scope"></a>Scope

This recommendation applies _only_ to projects that meet these criteria:

1.  The project uses a template-style public license whose standardized text includes blanks to be filled in.  MIT- and BSD-style terms are template-style licenses.  The GPLs and Apache 2.0 are _not_ template-style licenses.

2.  The project puts licensing information in a single `LICENSE` or similar file.  The project may also code its license in package metadata, like `package.json`.

3.  The project does not add or maintain license-header comments in original source files.  The project may do so for source files copied in from other projects.

4.  The project uses a revision control system that preserves author name, e-mail, and date and time for each change, like Git.

5.  The project publishes its revision-control data online.

6.  The project includes the address of its online revision-control repository in all distributed artifacts, like package tarballs.

7.  The project includes its `LICENSE` or similar file in distributed artifacts.

8.  The project is _not_ stewarded by a company, foundation, or other organization with its own open source or intellectual property policy.  Follow that policy instead.

9.  The project does _not_ use contributor license agreements.

## <a id="recommendation"></a>Recommendation

Do not skip [the last subsection below](#organizations), which applies to all contributors.

### <a id="initial"></a>Initial Contributor

The initial contributor to a project should copy the terms of their chosen license verbatim from <https://www.spdx.org/licenses/>.

The initial contributor to a project should only format the terms of their chosen license, if at all, with a software tool, like `fmt -w65`.  Don't edit license text manually.

The initial contributor to a project should replace the copyright notice line of the standard terms, and only that line.  For example:

```diff
- Copyright (c) <year> <copyright holders>
+ Copyright Bob Johnson <bob@example.com>
```

Follow [the rules for organizations](#organizations).  For example:

```diff
- Copyright (c) <year> <copyright holders>
+ Copyright Bob Johnson <bob@charlie.com>
+             for Charlie Computer Corporation
```

Don't write `©`, `(c)`, or `(C)`.  That's unnecessary.

Don't write a year.  That information could potentially become useful in the distant future, but it will far more likely cause confusion in the meantime.

Don't write `All rights reserved`.  That language is optional in SPDX-standardized BSD-style licenses, and achieves nothing.

### <a id="additional"></a>Additional Contributors

Each additional contributor should add a line-item to the copyright notice with their first contribution.  For example:

```diff
  Copyright Bob Johnson <bob@example.com>
+           Alice Smith <alice@example.com>
```

Follow [the rules for organizations](#organizations).  For example:

```diff
  Copyright Bob Johnson <bob@example.com>
+           Alice Smith <alice@charlie.com>
+             for Charlie Computer Corporation
```

### <a id="organizations"></a>Organizations

Any contributor submitting work that likely belongs to an employer, client, or other entity, as work made for hire or by assignment, should note that affiliation in a copyright-notice line-item.  For example:

```diff
  Copyright Alice Smith <alice@example.com>
+           Bob Johnson <bob@charlie.com>
+             for Charlie Computer Corporation
```

Any contributor submitting _both_ work that likely belongs to an entity _and_ work that likely belongs to them personally should add a copyright-notice line-item for each.  For example:

```diff
  Copyright Alice Smith <alice@example.com>
            Bob Johnson <bob@charlie.com>
              for Charlie Computer Corporation
            Charles Doe <charlesdoe@example.com>
+           Bob Johnson <bob@example.com>
```

Or, if personal contribution came first:

```diff
  Copyright Alice Smith <alice@example.com>
            Bob Johnson <bob@example.com>
            Charles Doe <charlesdoe@example.com>
+           Bob Johnson <bob@charlie.com>
+             for Charlie Computer Corporation
```

Contributors should add a copyright-notice line-item for each entity that likely owns rights in work they submit:

```diff
  Copyright Alice Smith <alice@example.com>
            Bob Johnson <bob@charlie.com>
              for Charlie Computer Corporation
+           Bob Johnson <bob@delta.com>
+             for Delta Computer Corporation
```
