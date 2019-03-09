---
title: "Deprecation Notice: MIT and BSD"
description: what we're learned in thirty years
layout: post
tags:
- Open Source
- Licensing
- Intellectual Property
---

MIT and BSD open source licenses are well known, popular, and legally deprecated.  They served long and well, but they are now older than many open source software developers, and they have not been maintained.  With licenses like [Blue Oak](https://blueoakcouncil.org/license/1.0.0) available, it's time open source upgraded from academic forms of the '80s.  There are good social, practical, and legal reasons to do so.

## MIT and BSD don't handle patents.

Both copyrights and patents apply to software, but the word "patent" does not appear in MIT or BSD terms.  [MIT and Cal's tech transfer offices say they never intended any patent license.](http://stlr.org/2018/10/15/the-truth-about-oss-frand-by-all-indications-compatible-models-in-standards-settings/)  There is [some argument](https://opensource.com/article/18/3/patent-grant-mit-license) that other words, like "use", imply permission under patents, anyway.  And there is [some law](http://stlr.org/2019/03/04/oss-and-frand-complementary-models-for-innovation-and-development/) that may or may not imply patent permission, when giving someone a copy of software.  But a good license can and should avoid those issues entirely by spelling out plainly that it covers all relevant intellectual property.  MIT and BSD don't.

Licenses like [Apache 2.0](https://spdx.org/licenses/Apache-2.0.html) show how lawyers do this in legal terms for private deals every day.  [Blue Oak](https://blueoakcouncil.org/license/1.0.0#patent) shows the same job done in everyday English, without long lists, run-on sentences, or complex scope rules.

Patents are a problem that MIT and BSD do not solve.  Open source developers have better options, at no real cost, with significant additional benefits.  Even developers and companies that despise software patents, and will never seek them, benefit by choosing modern terms.  It's one thing to know that _you_ won't seek or enforce any patents.  It's quite another to have legal assurance from _others_ that they, or their business successors, won't lay a patent trap.

## MIT and BSD are hard to read.

When you tell a lawyer to keep it short, their first draft will avoid lots of words by drawing heavily on background law and legal vocabulary.  They'll _invoke_ complex concepts, rather than identifying or explaining them, often with cues non-lawyers won't catch.  It's an extra, laborious, intellectually challenging step to translate the whole legal message into everyday words and phrases.  [Blue Oak made that extra investment](https://blueoakcouncil.org/2019/03/06/model.html#language-simplified).  MIT and Cal did not.

As a result, the shortness of MIT and BSD are reassuring until you actually try to understand them, and find you need a secret decoder ring.  The terms are actually _dangerous_ if you read them without knowing you need that decoder ring, believing you see the whole picture, which often turns out to be just the picture you wanted to see.

My most popular piece of writing to date is [literally thousands of words only partly explaining the 171 words of The MIT License](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html).  Having commentary to guide you through a dense license is better than not having it.  But it's a distant second-best to having a license that's readable and actionable on its own, like [Blue Oak](https://blueoakcouncil.org/license/1.0.0).

## It's not clear what MIT and BSD are, legally.

We call terms for open source software "licenses".  But there's a long-running debate in open source theory about whether open source terms are or should be just licenses, licenses and contracts, both, or potentially both.  I call the question theoretical, because pragmatically, the best choice is to avoid that kind of uncertainty entirely.  For open source, the keys are permission given and the rules that come along with it.  Legal characterization is an implementation detail, and implementation details shouldn't needlessly constrain high-level goals.

Licenses like [AFL](https://spdx.org/licenses/AFL-3.0.html) make clear that they _can_ be contracts.  Other forms, and now [Blue Oak](https://blueoakcouncil.org/license/1.0.0), make clear the terms _have_ to be agreed, and not just accepted.  License or contract?  The answer is _both_.  And that is a very good thing.  Eliminating that question clarifies other issues.

Another long-running debate in open source licensing theory concerns revocation.  When someone releases code under an open source license for nothing, can they take their license back?  Other popular licenses dating back decades, like [GPLv2](https://spdx.org/licenses/GPL-2.0-only.html) and [v3](https://spdx.org/licenses/GPL-3.0-only.html), say specifically that developers _cannot_ revoke their licenses, but also insist that they are just licenses, and not contracts.  That's still a head-scratcher---[fortunately not a particularly threatening one](https://www.synopsys.com/blogs/software-security/breach-gpl-license-breach-contract/)---because the legal rules about revocation and relying on others' words come from contract law, not intellectual property law.  Blue Oak [says it's both a license and an agreement](https://blueoakcouncil.org/license/1.0.0#acceptance), and also that [contributors can't take their licenses back](https://blueoakcouncil.org/license/1.0.0#reliability).  The title of that section, _Reliability_, is just the point.

We can say much the same about warranty disclaimers and damages exclusions, the parts of licenses, often needlessly set in illegible `ALL CAPS`, that protect open source contributors from legal liability for their contributions.  How do those disclaimers and exclusions work?  Under contract law, we have a pretty good idea.  Under intellectual property law alone, we really don't know.  The specific terms about warranties that we see in old academic licenses actually come from statutes about contracts.

## MIT and BSD attribution is a land mine.

With very rare exception, even permissively licensed open source software under terms like MIT and BSD come with rules to follow.  By far the most common rule is _attribution_, which requires those who make copies of the software, in source or compiled form, to include copies of terms, copyright notices, and other information about who licenses the software, and how.

Open source developers who want credit should get credit.  Traditional attribution rules, like those in MIT and BSD terms, arguably don't go far enough,  [especially in the software-as-a-service era](https://www.synopsys.com/blogs/software-security/breach-gpl-license-breach-contract/).  But many companies don't even do what the licenses say they should do, especially for [client-side JavaScript libraries](https://www.npmjs.com/package/browserify-licenses).

The contract-or-license question muddies the waters here again.  But whether as bare licenses, as contracts, or both, most lawyers I've heard from believe that violating the attribution rule of an open source licenses _kills your license_.  In other words, if you use someone's software under MIT or BSD and share a copy with others without a including their copyright notices and license terms, they can sue your for infringement.

The same risk applies to copyleft rules under licenses like GPLv2.  Which makes it possible for money-minded developers, or those who acquire their rights, to [sue unknowning violators for money](https://opensource.com/article/17/8/patrick-mchardy-and-copyright-profiteering), even when the point was originally to get patches back, not cash.  That has led to coordinated efforts like [Principles for Community-Oriented Enforcement](https://www.fsf.org/licensing/enforcement-principles) and the [GPL Cooperation Commitment](https://gplcc.github.io/gplcc/).  The latter essentially backports a fix from GPLv3 to GPLv2:  Write a path to automatic forgiveness into the license, to ensure companies who break the rule have a chance to make good, and opportunistic plaintiffs can't use it to spring a trap.

Blue Oak [applies the same fix to its attribution rule](https://blueoakcouncil.org/license/1.0.0#excuse).  If someone fails to provide a copy of the license with a copy of the software, you can call them out in writing.  If they do what they should have done in thirty days' time, they're back on track.  If they refuse, poof goes their license.

## MIT and BSD breed confusion.

Nobody knows how many variants of MIT and BSD terms there are.  I see a new one twice a year or so.  In that sense, MIT and BSD _have_ evolved over the years, but not in any useful way.  Those variations just make compliance harder.

Neither, apparently, do we really know how to fill out the standardized MIT and BSD templates we have.  Some projects continue for years, attracting scores of meaningful contributors, with only the long-departed, initial contributor's name in the copyright notice.  Some projects replace the name with "project contributors", making the notice meaningless.  Some institute chores for adding names to the copyright line and bumping the year each January.  We treat projects doing all of those things the same.  Apparently, no particular approach is essential.

[Blue Oak](https://blueoakcouncil.org/license/1.0.0) follows modern licenses like the GPLs, Apache 2.0, MPL, and EPL in offering a fixed form.  All you have to do is copy the terms into your project and reference it in any header comments, metadata, or documentation about licensing.  There's no copyright line or other template field to fill out or update.  There's no temptation to munge the terms, intentionally or accidentally.

Authorship information for open source software is nearly always available online.  Notice rules designed for projects from single institutions, distributed on magnetic tape by mail, back in the '80s, don't make sense in 2019.

## Use Blue Oak for new work.

I had a hand in drafting the [Blue Oak license](https://spdx.org/license/1.0.0), but I was not alone.  Several lawyers came together to do what we couldn't have done apart.  Blue Oak is the best permissive open source software license we know how to write.  We didn't originally set out to write a license, but [no existing form offered all the features we were looking for](https://blueoakcouncil.org/2019/03/06/model.html).

A whole lot of great software is out there under MIT and BSD terms.  Those licenses will always be with us.  As licensing lawyers, we know from firsthand experience how difficult relicensing multi-contributor projects can be. 

But for new work, there's a clear choice.  [Blue Oak](https://blueoakcouncil.org/license/1.0.0) is a good permissive license in 2019.  MIT and BSD are not.