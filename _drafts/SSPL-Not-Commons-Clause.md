---
title: SSPL Is Not Commons Clause
description: how knee-jerk tribalism keeps open licensing broken
layout: post
---

<aside class="brief" markdown="1">
I summarize the missed opportunity that was MongoDB's Server Side Public License, and how it was missed.
</aside>

MongoDB's Server Side Public License is fundamentally different from Commons Clause.  Inability and simple unwillingness to recognize that difference squandered a once-a-decade opportunity for open source as a community of practice.  The ensuing spat and fractured result makes everyone involved---the companies, the Open Source Initiative, the lawyers---look petty, short-sighted, and incompetent.

We deserve it.

## WTF was Commons Clause?

Permissive open source licenses like [MIT], [BSD], and [Apache] say:

```
Do what you want with this software.
```

[BSD]: https://spdx.org/licenses/BSD-2-Clause.html

[Apache]: https://spdx.org/licenses/Apache-2.0.html

[MIT]: https://spdx.org/licenses/MIT.html

[GPL]: https://spdx.org/licenses/GPL-3.0.html

Copyleft licenses like [MPL], [GPL], and [AGPL] say:

```
Do what you want with this software.

Share improvements and extensions you make alike.
```

[Commons Clause](https://commonsclause.com/) is a bolt-on "patch" to any open source license, permissive or copyleft.  Highly oversimplifying yet again, Commons Clause says:

```diff
+ But don't use it to compete with its developer.
```

So "MIT with Commons Clause" says:

```diff
  Do what you want with this software.
+
+ But don't use it to compete with its developer.
```

And "AGPLv3 with Commons Clause" says:

```diff
  Do what you want with this software.

  Share improvements and extensions you make alike.
+
+ But don't use it to compete with its developer.
```

Companies that wanted "but don't compete" used different open source licenses to start with.  Some chose permissive, especially Apache.  Others chose copyleft, especially AGPL.

In theory, writing Commons Clause as a generic patch enabled all of those firms to adopt one new set of terms, Commons Clause, instead of a whole slate of new licenses, from permissive to weak copyleft and strong copyleft.  In theory, those accustomed to MIT and Apache and AGPL on the receiving end could apply what they already knew about those licenses, and then ask the additional Commons Clause question: Are we competing with the developer?

But regardless of which open source license the companies started with, adding Commons Clause produced a license that violated general principles associated with "open source".  Again seriously overgeneralizing, I'd guess most developers today understand open source as follows:

> I can do whatever I want with open source that I find.  There's just one catch: copyleft, like GPL, requires sharing back.  As long as I avoid copyleft projects, I'll be fine.

Commons Clause says you can't do what you want if what you want is to use the developer's software to compete against them.  Even if the vast majority of developers looking at a database under Commons Clause want to make applications, and have no desire to compete in the database market, Commons Clause doesn't follow the open source principle, and it doesn't feel right to call Commons Clause software open source.

## Ick

The companies and lawyers behind Commons Clause understood that it was not open source in principle.  I strongly suspect they didn't feel too great about that, either.

Many of these companies seem to have released open source early on not because they saw it as a surefire path to business glory, but because they liked and identified with open source, wanted to contribute back, and wanted to build companies appreciated for contributing back.  It is far, far easier to convince a professional investor or professional licensing lawyer to buy into a restricted license than some mishmash of old open source license and new bolt-on clause, to take a "secret sauce" approach to everything.  They didn't do that.

But they felt threatened by Amazon and other cloud providers.  And none of them had much individual leverage against that kind of dominant player.  The best they could do was band together under a [sympathizing, if unsympathetic, venture capitalist](https://techcrunch.com/author/salil-deshpande/), pool resources, and hire [Heather Meeker](https://heathermeeker.com) to write one set of terms they could all use to mount a defense.  So they did that.

## Tea Leaves

I read and write licenses all the time.  My first impression of Commons Clause's text was that it essentially just _transcribed_ the needs of the companies involved into legal terms.  It _translated_ those needs into legal terms only to the minimum extent absolutely necessary.  The result reads like a snippet of commercial software license, not a snippet of open source license.

Straight out of Commons Clause:

> Without limiting other conditions in the License, the grant of rights under the License will not include, and the License does not grant to you, the right to Sell the Software.

Translation:  This is a patch.  The only thing it's changing is taking away one right, the right to sell the software, as we're about to define "sell".  Everything else the open source license lets you do, you can still do.

Then:

> ... "Sell" means practicing any or all of the rights granted to you under the License to provide to third parties, for a fee or other consideration (including without limitation fees for hosting or consulting/support services related to the Software), a product or service whose value derives, entirely or substantially, from the functionality of the Software.

Translation:  "Sell" means doing anything with this software in order to sell others products or services that are mostly just this software.

This is where Commons Clause attempts to draw the line between applications, which all these companies want others to build for free, and competitive offerings, which they want to prohibit.

To make that concrete:  As a database company, I might be fine with others building inventory management, social media, and other applications using my database to store data, for free.  Maybe I'll get to sell them training or support or database hosting further down the line.  But I don't want others selling a competitive version of database with patches they refuse to share back, or crushing me in the database hosting business.

## SSPL

My first impression of MongoDB's Server Side Public License was that Heather Meeker wrote it.  I know my kind, and I know their handiwork.  My second impression was that somebody made her bolt Commons Clause onto AGPL, even though she knows better.  SSPL didn't seem to _translate_ Commons Clause into open source terms so much as _transplant_ it into AGPL.

That impression was superficial.  In style, SSPL's section 13 reads like commercial license language.  It tracks the business way of expressing its objective.  But the underlying mechanism that language invokes, copyleft, is at the core of free and open licensing.

SSPL _doesn't_ say:

> Don't use MongoDB to compete with MongoDB, Inc.

Oversimplifying again, SSPL says:

> Share improvements, extensions, and code you use to provide MongoDB services alike, but do what you like with applications built on top.

That general thrust isn't new.  A whole class of broadly accepted free and open software licenses, called "weak copyleft" licenses, say much the same in effect.  Superficially, however, they tend to express those rules in community-speak, rather than business-speak.

Consider [LGPL], [MPL], and [EPL].  Each requires sharing changes, extensions, and other work on the licensed software itself, but not larger programs built with it.  In general, if you patch a weak-copyleft library and share a copy with someone else, you have to share your patch alike.  But if you build a program using that weak-copyleft library, you don't have to share your whole program alike.

If MongoDB wanted improvements to MongoDB-as-software and MongoDB-as-a-service shared back, but not applications built with MongoDB, why didn't they just take a weak-copyleft license off the shelf?

Visually:

|             | Patches | Extensions | Wrappers          | Applications      |
|-------------|---------|------------|-------------------|-------------------|
| **[LGPL]**  | Share   | Share      | Keep              | Keep              |
| **[MPL]**   | Share   | Share      | Keep              | Keep              |
| **[EPL]**   | Share   | Share      | Keep              | Keep              |
| **[AGPL]**  | Share   | Share      | It's complicated. | It's complicated. |
| **[SSPL]**  | Share   | Share      | _Share_           | _Share_           |

[AGPL]: https://spdx.org/licenses/AGPL-3.0.html
[EPL]: https://spdx.org/licenses/EPL-2.0.html
[LGPL]: https://spdx.org/licenses/LGPL-3.0.html
[MPL]: https://spdx.org/licenses/MPL-2.0.html
[SSPL]: https://lists.opensource.org/pipermail/license-review_lists.opensource.org/2018-November/003836.html

None of the old weak-copyleft licenses requires sharing back improvements to the software that take the form of wrappers like monitoring, orchestration, and backup code, rather than patches to existing source code.  All the old weak-copyleft licenses treat wrappers like applications exempt from copyleft, not patches or extensions that have to be shared alike, when they're clear on the matter at all.  Often, they're not.  All those licenses were written before service composition, rather than linking, became a widespread approach in mainstream software development.

<!--Weak copyleft licenses are themselves patch licenses, conceptually and sometimes literally.  They start with strong-copyleft rules that require sharing lots of new work back, including applications, and pare those strong-copyleft rules back to weak-copyleft rules with specific exceptions.  Wee see this most clearly in [LGPLv3][LGPL], which incorporates strong-copyleft GPL by reference, then layers on new language, including a definition of "Application".-->

<!--Trouble is, the strong-copyleft rules that existing weak-copyleft licenses pare back arguably don't reach wrappers to begin with.-->  MongoDB's lawyer, Eliot Horowitz, called this out right at the top of [his rationale for proposing SSPL](http://lists.opensource.org/pipermail/license-review_lists.opensource.org/2018-October/003603.html) to the Open Source Initiative for review:

> Today, Affero GPL 3.0 uses the broadest scope of copyleft, among the commonly used open source licenses. ...
>
> The Remote Network Interaction provision of AGPL has not provided enough incentive to change the behavior of cloud providers for several reasons:
>
> - It is not clear that it extends to software that controls the functionality of the database software, such as management, automation, monitoring, storage and hosting software.
>
> - It only applies if the software is modified, and the definition of a modification references back to copyright principles that are not settled law.

MongoDB was well aware that Commons Clause could address its problem.  But rather than saying "Don't use MongoDB to compete with MongoDB, Inc.", parting ways with open source licensing practice and shutting the door on potential collaboration, MongoDB preferred to say "Share the code you use to provide MongoDB services alike.", through copyleft, and leave the door open:

> However, for some kinds of software that is popular for cloud deployment, AGPL has not resulted in sufficient legal incentives for some of the largest users of infrastructure software, such as international cloud providers, to participate in the community.   Many open source developers are struggling with a similar reality, and some of our competitors have moved to proprietary licensing models [e.g. Apache 2.0 with Commons Clause ---KEM].  The alternative, to be blunt, is for us to be that last standing unpaid open source database developer for cloud providers, who sell access to our software for significant fees, but may not adequately contribute back to our community.  Faced with the choice of moving to a proprietary model by applying licensing restrictions [e.g. Commons Clause ---KEM] to our software, we prefer instead to continue using the copyleft model to create a workable incentive for cloud providers to share with the rest of the community.

This was MongoDB offering to compromise, and seeking guidance on how to implement that compromise.  The most direct, reliable, and clear way to meet MongoDB's business need was just to describe the competitive behavior they wanted to stop, in business terms, and turn that into a flat-out restriction on use of its database, like Commons Clause.  Rather than do that, MongoDB attempted to implement a rule that could have achieved the same effect at least some of the time, through copyleft.

Copyleft was itself a concession.  Inherently so.  License restrictions say "Thou shalt not."  Copyleft says "If thou dost, share thy work alike."  From the business perspective, copyleft leaves open the possibility that someone will come along and outcompete you, even as they share alike.  From MongoDB's point of view, offering SSPL-style copyleft terms is taking a bet that another company can't outcompete them while also sharing hosting code that MongoDB keeps to itself.

That speaks directly to MongoDB's history. MongoDB, Inc. began as 10gen, a startup attempting to offer the first fully open source cloud.   In time, they pivoted to focus on the database they developed for that platform, and renamed their company after it.  In short, MongoDB wanted to be "open source AWS", but open-sourced its S3, rather than keeping it closed, and morphed into a company behind that database.  They did well.

From the outside point of view, SSPL-style copyleft terms put a bounty on the business model that 10gen tried and failed to find.  If you find a way to beat MongoDB, Inc. while sharing all the code you use to do so, you're welcome to MongoDB, gratis.  If you find a way to be open source AWS, you can offer MongoDB as a service, gratis.

## Old Hat

SSPL represents exactly the same kind of dare that companies have long made for other kinds of software, under old copyleft licenses that reached all relevant code.

When companies develop software components that were common twenty years ago, like C libraries used in embedded devices, the copyleft licenses of that era usually work fine.  By coincidence, those old licenses also work well for some newfangled components, too, like front-end JavaScript libraries and mobile app frameworks.  Companies routinely choose weak-copyleft licenses for those components to avoid simply handing their competitors the stick with which to beat them, or start foundations, like Mozilla and Eclipse, that write [their][MPL] [own][EPL].  Netscape had it in for Microsoft, and IBM for Sun, as MongoDB does for AWS.

Failure to see past the superficial resemblance to Commons Clause, recognize that MongoDB's business needs translated to weak copyleft, and guide MongoDB along that path turned a once-a-decade license-collaboration opportunity into a contest to see who could denounce MongoDB, alone or as whipping boy for the whole class of VC-backed startups, from the tallest bully pulpit.  Instead of guiding and educating a public company evidently willing to bankroll much-needed open license maintenance that would have benefited many others, the self-styled brain trust rejected MongoDB's stated motives out of hand.

If MongoDB had known [what kinds of preconceptions awaited them at OSI](https://anonymoushash.vmbrasseur.com/), they'd never have asked for help.  The OSI mailing list shooting gallery couldn't even hear what MongoDB tried to say, and devolved into a pillory.  Critics were too invested in berating MongoDB for what it is---a company---or what they thing it represents---a sock-puppet for nefarious venture capitalists---to hear what it had to say, much less grant common benefit of the doubt or steel-man the license.

So MongoDB dug in on a license written almost entirely by its own hand, without significant outside contribution, that attends only to its own immediate needs.  MongoDB brought an olive branch, and got poked in the eye with it.  They've had enough of that kind of feedback.
