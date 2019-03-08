---
title: "Deprecation Notice: MIT and BSD"
description:
layout: post
---

MIT and BSD open source licenses are well known, popular, and legally deprecated.  They served long and well, but they are now older than many open source software developers, and they have not been maintained.  With licenses like [Blue Oak](https://blueoakcouncil.org/license/1.0.0) available, it's high time open source upgraded off old academic forms from the '80s.  There are good social, practical, and legal reasons to do so.

## MIT and BSD don't handle patents.

The word "patent" does not appear in MIT or BSD terms.  [MIT and Cal's tech transfer offices say they never intended any patent license.](http://stlr.org/2018/10/15/the-truth-about-oss-frand-by-all-indications-compatible-models-in-standards-settings/)  There is [some argument](https://opensource.com/article/18/3/patent-grant-mit-license) that other broad words, like "use", imply permission under patents, anyway.  And there is [some law](http://stlr.org/2019/03/04/oss-and-frand-complementary-models-for-innovation-and-development/) that may or may not imply patent permission, when giving someone a copy of software.  But a good license should avoid those questions, and all that uncertainty, by spelling out plainly that it covers all relevant intellectual property.  MIT and BSD don't.

Licenses like [Apache 2.0](https://spdx.org/licenses/Apache-2.0.html) and [BSD-2-Clause Plus Patents](https://spdx.org/liceness/BSD-2-Clause-Patents.html), which grafts Apache patent language onto BSD terms, show how lawyers do this in terms every day.  [Blue Oak](https://blueoakcouncil.org/license/1.0.0#patent) shows the same job done in everyday English, without long lists, run-on sentences, or complex scope rules.

Patents are a problem that MIT and BSD do not solve.  Open source developers have better options, at no real cost.  Even developers and companies who despise software patents, and will never seek them, benefit by choosing modern terms.  It's one thing to know that _you_ won't seek or enforce any patents.  It's quite another to have legal assurance from _others_ that they, or their business successor, won't lay a patent trap.

## MIT and BSD are hard to read.

When you tell a lawyer to keep it short, their first draft will avoid lots of words by drawing heavily on background law and legal vocabulary.  They'll _invoke_ complex concepts, rather than explaining or copying them in, often in ways with cues non-lawyers won't recognize.  It's an extra, laborious step to actually translate the whole legal message into everyday words and phrases.  [Blue Oak made that extra investment](https://blueoakcouncil.org/2019/03/06/model.html#language-simplified).  MIT and Cal did not.

As a result, the shortness of MIT and BSD are reassuring until you actually try to understand them, and find you need a secret decoder ring.  The terms are actually _dangerous_ if you read them without knowing you need that decoder ring, believing you see the whole picture, which often the picture you want to see.

My most popular piece of writing to date is [literally thousands of words only partly explaining the 171 words of The MIT License](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html).  Having commentary to guide you through a dense license is better than not having it.  But it's a distant second-best to having a license that's readable and actionable on its own, like [Blue Oak](https://blueoakcouncil.org/license/1.0.0).

## It's not clear what MIT and BSD are, legally.

There's a long-running debate in open source licensing theory about whether open source licenses are or should be just licenses, licenses and contracts, or both.  I call that question theoretical, because pragmatically, the best choice in legal terms is usually avoiding hard questions entirely.  In the case of open source licensing, the key points are the permission given, and the rules that come along with it.  Legal characterization is an implementation detail.  Implementation details shouldn't inflict uncertainty on the spec.

Licenses like [AFL](https://spdx.org/licenses/AFL-3.0.html) make clear that they _can_ be contracts.  Other forms, and now [Blue Oak](https://blueoakcouncil.org/license/1.0.0), make clear the terms _have_ to be the terms of an agreement.

Eliminating that question also helps to clarify other issues.  Another long-running debate in open source licensing theory concerns revocation.  When someone releases code under an open source license, can they ever take their license back?  Existing, popular licenses, like [GPLv2](https://spdx.org/licenses/GPL-2.0-only.html) and [v3](https://spdx.org/licenses/GPL-3.0-only.html), say specifically that developers _cannot_ revoke their licenses, but also insist that they are just licenses, and not contracts.  But the legal rules about revocation and relying on others' word come from contract law, rather than intellectual property law.

## MIT and BSD attribution is a land mine.

