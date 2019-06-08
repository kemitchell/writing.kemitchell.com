---
title: SSPL Is Not Commons Clause
description:
layout: post
---

MongoDB's Server Side Public License is fundamentally different from Commons Clause.  Inability and simple unwillingness to recognize that difference squandered a once-a-decade opportunity for open source as a community of practice.  The unstable, fractured results make all involved---the companies, the Open Source Initiative, the lawyers---look terrible.

We deserve it.

## WTF was Commons Clause?

"Permissive" open source licenses like MIT, BSD, and Apache say:

```
Do what you want with this software.
```

"Copyleft" licenses, like MPL, GPL, and AGPL, say:

```
Do what you want with this software.

Share changes and additions you make alike.
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

  Share changes and additions you make alike.
+
+ But don't use it to compete with its developer.
```

Companies that wanted "but don't compete" terms were using different open source licenses.  Some chose permissive, especially Apache.  Others chose copyleft, especially AGPL.  In theory, writing Commons Clause as a patch enabled all of those firms to adopt one new set of terms, Commons Clause, instead of a whole slate of new licenses, from permissive to weak copyleft and strong copyleft.  In theory, those accustomed to MIT and Apache and AGPL on the receiving end could apply what they already knew about those licenses, and then ask the additional Commons Clause question: Are we competing with the developer?

But regardless of which open source license the companies started with, adding Commons Clause produced a license that violated general principles developers long associated with "open source".  Again seriously overgeneralizing, I'd guess that most developers today understand open source as follows:

> I can do whatever I want with open source that I find.  There's just one catch: copyleft, like GPL, requires sharing back.  As long as I avoid copyleft projects, I'll be fine.

Commons Clause says you can't do what you want if what you want is to use the developer's software to compete against them.  Even if the vast majority of developers looking at a database under Commons Clause want to make applications, and have no interest in competing with the database maker, Commons Clause doesn't follow the open source principle, and it doesn't feel right to call Commons Clause software open source.

## Ick

The companies and lawyers behind Commons Clause understood that it was not open source in principle.  I strongly suspect they didn't feel too great about that.

Many of these companies seem to have released open source early on not because they saw it as a surefire path to business glory, but because they liked and identified with open source, wanted to contribute back, and wanted to build companies appreciated for contributing back.  It is far, far easier to convince a professional investor or professional licensing lawyer to buy into a restricted license than some mishmash of old open source license and new bolt-on clause, to take a "secret sauce" approach to everything.  They didn't do that.

But they felt threatened by Amazon and other cloud providers.  And none of them had much individual leverage against that kind of contender.  The best they could do was band together under the wing of a [sympathizing, if not particularly sympathetic, venture capitalist](https://techcrunch.com/author/salil-deshpande/), pool resources, and hire [Heather Meeker](https://heathermeeker.com) to write one set of terms they could all use to mount a defense.  So they did that.

I read and write licenses all the time.  My first impression of Commons Clause's text was that it essentially just _transcribed_ the needs of the companies involved into legal terms.  It _translated_ those needs into legal terms only to the minimum extent absolutely necessary.  Specifically, Commons Clause reads like a snippet from a commercial software license, not an open source license.

I imagine a cartoon attorney-client call, like so:

--- What's the problem?

--- Amazon.

--- What is Amazon doing?

--- They're hosting our own software as a service, and we don't stand a chance competing against them, with all their advantages.

--- So you want the terms to stop them using your software to compete against your products and services?

--- Right.

--- When you do you need this?

--- Yesterday.

Where does that lead?  Straight out of Commons Clause:

> Without limiting other conditions in the License, the grant of rights under the License will not include, and the License does not grant to you, the right to Sell the Software.

Translation:  This is a patch.  The only thing it's changing is taking away one right, the right to sell the software, as we're about to define "sell".  Everything else the open source license lets you do, you can still do.

Then:

> ... "Sell" means practicing any or all of the rights granted to you under the License to provide to third parties, for a fee or other consideration (including without limitation fees for hosting or consulting/support services related to the Software), a product or service whose value derives, entirely or substantially, from the functionality of the Software.

Translation:  "Sell" means doing anything with this software in order to sell others products or services that are mostly just this software.

This is where Commons Clause attempts to draw the line between applications, which all these companies want others to build for free, and competitive offerings, which they want to prohibit.

To make that concrete:  As a database company, I might be fine with others building inventory management, social media, and other apps with my database, for free.  Maybe I'll get to sell them training or support or database hosting further down the line.  But I don't want others selling a competitive version of database with patches they refuse to share back, or crushing me in the database hosting business, because they're a multinational cloud platform with more existing customer accounts than I have dollars.

## SSPL

My first impression of MongoDB's Server Side Public License was that Heather bolted Commons Clause onto AGPL.  SSPL didn't translate Commons Clause into open source terms.  SSPL _transplanted_ Commons Clause into an open source license, AGPL.

That's embarrassingly superficial.
