---
title: MIT for Noncommercial is Broken
description: use a real noncommercial license
tags:
- Open Source
- Software
- Licenses
---

I recently read through [James Turner's "Open Source Has a Funding Problem"](https://stackoverflow.blog/2021/01/07/open-source-has-a-funding-problem/) on the Stack Overflow blog.  I recommend it.  Great addition to all the new writing on open software funding and business realities.

There was one minor error that bothered me, mentioned just in passing:

> For example, having a dual licensing of MIT for non-commercial and a custom license for commercial purposes.

I get what that means.  I think others will, too.  But legally, it doesn't work.

Don't say "MIT, but only for noncommercial".  Use a software license that has a "noncommercial" rule written into its terms, like [PolyForm Noncommercial](https://polyformproject.org/licenses/noncommercial/1.0.0) or [Prosperity](https://prosperitylicense.com), which also allows a free commercial trial.  If you want to put "noncommercial use only" in your own words---perhaps you don't want to include universities, like PolyForm and Prosperity do---write your rule into a solid template like [Normally Open](https://github.com/berneout/normally-open-closed/blob/main/normally-open.md).

[The MIT License](https://www.spdx.org/licenses/MIT.html) says anyone who gets a copy can "deal in the Software without restriction".  "No commercial use" is a restriction.

The MIT License also allows sublicensing and "permit[ting] persons to whom the Software is furnished" to do all the things the license allows, again without restriction.  In other words, MIT allows people who get copies to pass full permission on to others.  Even if you tell the first user MIT actually comes with an extra noncommercial rule, you're not making clear they have to tell those they share with the same.

In short, offering "MIT, but only for noncommercial purposes" creates a confusing contradiction in terms for the first user and a loophole for the next person they share with.  MIT just isn't built for implementing and passing on limits like noncommercial use rules.  It's built for the opposite.

It's a sad indictment of licensing lawyers like me that "MIT for non-commercial" makes more sense to more people than the names of any of the actual noncommercial licenses now available.  Part of that is simply a function of time: "MIT" has been a recognized name for decades, while lawyers like me only got around to pushing standardized noncommercial terms in the last few years.
