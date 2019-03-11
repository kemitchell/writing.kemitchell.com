---
title: Weak or Strong is Wrong
description: towards selective or consistent copyleft
layout: post
tags:
- Open Source
- Licensing
- Copyleft
---

Dividing open source copyleft licenses into _weak_ and _strong_ doesn't reliably map license needs to license choices anymore.  We're better off asking whether a copyleft license is _selective_ or _consistent_ in its share-alike demands.  Consistent copyleft licenses always require sharing alike.  Selective copyleft license make exception to sharing alike rules for some use cases.

[MongoDB's Server Side Public License](https://www.mongodb.com/licensing/server-side-public-license) breaks the old weak-strong distinction.  In some ways, SSPL is new.  I've written that [its "permissive safe zone" for applications splits up the coalition of software freedom activists and business users that has traditionally supported copyleft](https://writing.kemitchell.com/2018/11/04/Copyleft-Bust-Up.html#commercial).

But applying strong copyleft to some use cases, and permissive terms to others, is a very old _activist_ idea.  That's what [LGPLv2](https://spdx.org/licenses/LGPL-2.0.html) did, for libraries that activists [wanted to make more competitive with permissive alternatives](https://www.gnu.org/licenses/license-recommendations.en.html#libraries).  FSF made the spectrum from permissive to LGPL to GPL even more clear in [LGPLv3](https://spdx.org/licenses/LGPL-3.0.html), by writing the weak copyleft variant as a patch over GPLv3 that essentially waives strong GPLv3 copyleft for library use cases.  Like SSPL, it turned out, in time, that free software activists [don't have much current use for LGPL, either](https://www.gnu.org/licenses/why-not-lgpl.html).

So is SSPL just LGPL leftovers dressed up for the corporate palate?  Hardly.  SSPL patched [AGPLv3](https://spdx.org/licenses/AGPL-3.0-only.html), itself a patch to GPLv3 that extends copyleft to code used in network services.  In that sense, AGPLv3 is _stronger_ than GPLv3, the quintessential strong copyleft license.  But LGPLv3 patches GPLv3, with the so-called _API Loophole_ wide open, not AGPLv3, which closes it.

There's been [talk of an LAGPLv3](http://mo.morsi.org/blog/2009/08/13/lesser_affero_gplv3/), and [some confirmation of FSF interest](https://www.youtube.com/watch?v=XGa_TlRdtG8).  But an official FSF LAGPLv3 wouldn't be equivalent to SSPL.  SSPL patches AGPLv3 _both_ to make AGPLv3's consistently strong copyleft rule selective, exempting applications that use the licensed software without changing it, but also to add extended reach and a new trigger, to require sharing alike of code used to offer the licensed software as a service for other applications, like orchestration and management code.

To recap, SSPL is both weaker and stronger than AGPLv3.  It's weaker insofar as it makes an exception to copyleft for specific use cases, namely applications that use without changing or extending the licensed software, like LGPLv3 does.  But SSPL is stronger than AGPLv3 insofar as it also applies copyleft to code and situations that AGPLv3 does not.  If AGPLv3 were already strong enough to cover that code and those situations, SSPL would in fact be LAGPLv3, a patch exempting applications use cases.

I've written before that [Mongo hired the best possible talent to write SSPL, then hobbled itself by choosing to patch AGPLv3 instead of writing from scratch](https://writing.kemitchell.com/2019/01/12/Shared-Component-License.html).  I'd also fault them for failing to write a more broadly applicable license, one that would apply to more kinds of software, attract broader support, and [avoid narrowsighted charges of naked commercial conspiracy](https://lists.fedoraproject.org/archives/list/devel@lists.fedoraproject.org/thread/IQIOBOGWJ247JGKX2WD6N27TZNZZNM6C/).

My stab at writing that more broadly applicable license, aided by the essential help of fantastic hacker-reviewers, yielded the [API Copyleft License](https://writing.kemitchell.com/2019/02/22/API-Copyleft-1.0.0.html).  Here are the two exceptions patching that license's otherwise stronger-than-strong, consistent copyleft rule:

> ## Prototypes
> You need not contribute prototype changes, extensions, or applications that you do not end up using for more than fourteen calendar days, share with anyone else, or use to provide a service to anyone else.
>
> ## Applications
> You need not contribute software that only invokes this software's functionality through the interfaces this software exposes, without exposing this software's interfaces and functionality to other software.
>
> Interfaces exposed by this software include all the interfaces this software provides users or other software to invoke its functionality, such as command line, graphical, application programming, remote procedure call, and inter-process communication interfaces.

Remove those two exceptions, and you're left with a consistent, stronger-than-AGPL-strong license:

> ## Copyleft
> [...] you must contribute all software that invokes this software’s functionality, as well as changes and additions to this software, according to Contributing.

Luis Villa, friend, super colleague, and contributor the Mozilla Public License 2.0, a superior weak copyleft license, was kind enough to [tweet](https://twitter.com/luis_in_brief/status/1089682183361458176) this about the API Copyleft License:

> Increasingly convinced copyleft conf could just be a series of panels that use this pared-down license as a jumping off point for discussion.

And later:

> This is not to say it's a perfect license by any stretch. But arguing over AGPL means you spend a lot of time on the past rather than looking forward to what an ideal copyleft might look like in 2019 (or 2029).

In fact, with allowances for being too cute, we could work backwards from the the strong, consistent copyleft license above to nearly all existing copyleft licenses.  We could even reimplement a cartoon GPL:

> You need not contribute software if you do not distribute any copy of it to anyone else, outside any organization you may be working for.

And for a cartoon LGPL:

> You need not contribute work that makes use of an interface provided by this software, but which is not otherwise based on this software. Defining a subclass of a class defined by this software is deemed a mode of using an interface provided by this software.

But that is not the same as the Applications rule of the API Copyleft License:

> You need not contribute software that only invokes this software's functionality through the interfaces this software exposes, without exposing this software's interfaces and functionality to other software.

We could put use cases into three categories:

1. changes and additions to the licensed software

2. applications that invoke the licensed software without changing or adding to it

3. code that wraps the licensed software, perhaps changing or adding to it by intermediating its public API, and makes that API available to other applications

My first drafts of the the API Copyleft License, then called the [Shared Component License](https://writing.kemitchell.com/2019/01/12/Shared-Component-License.html), made just this kind of categorization.

How does LGPL map onto those use-case categories?  LGPL exempts _both_ applications and wrappers from copyleft.  How does the API Copyleft License, an abstraction of SSPL, map onto those use-case categories?  The API Copyleft licenses exempts _only_ applications, not wrappers.

Why?  You should really [follow](https://twitter.com/luis_in_brief) [Luis](https://lu.is/blog/) [everywhere](https://blog.tidelift.com/author/luis-villa).  I've [blogged](https://writing.kemitchell.com/2019/01/30/API-Copyleft.html) [this tweet](https://twitter.com/luis_in_brief/status/1088250694010695680) before, but didn't make enough of it:

> Scoping to the API for service consumers is a pretty good 2019 equivalent for the original MPL "scope for plug-ins" intention.

I don't know what exactly Luis meant.  But he's strongly implying a very important point, for which we should all give him full credit.

The _motivation_ for the difference between LGPL, which exempts applications and wrappers, and SSPL/API Copyleft, which exempts just applications, and applies copyleft to wrappers, is the rise of API wrapping more generally as a coequal means of software composition.  Especially wrapping of services, like Mongo, for combination through network calls, rather than programming language APIs.  Eliot Horowitz, legal at Mongo, who submitted SSPL to the Open Source Initiative, was [on about the same point](http://lists.opensource.org/pipermail/license-review_lists.opensource.org/2018-October/003672.html):

> I think we can all agree that the GPL is not intended to be used by
> proprietary libraries.  When you link to a GPL'd library, copyleft
> applies to your entire program.  This is how many people today
> understand the applicability of the GPL.  This made a lot of sense 30
> years ago, when GPL was first written, and has been beneficial to the
> community.  In the modern era, however, very few programs are actually
> linked, in the sense of a programmatic link at build or compile time.
>  Most modern applications are constructed by combining components as
> services which talk over the network via structured APIs.  So we
> believe that the nature of the copyleft must evolve for the modern
> world.  In the SSPL, we believe the concept of copyleft ought to apply
> to the pieces that make the original program run, but not everything
> else that touches it.

The purpose for choosing a selective copyleft license, as an activist or a company, is largely the same.  We could summarize the deal those developers want to make with users like so:

> You're free to use my work in applications without sharing your applications alike.  But if you improve my work, share your improvements.

Hence "Shared Component License", which is a more accurate statement of the role software under such a license is meant to play, but utterly without the recognition and zing of "API".

Fundamentally, I think this is the deal MongoDB wanted to make.  Use our database in whatever applications you want.  Knock yourselves out, and don't bother our legal team for comfort letters.  But if you improve what we're offering, in the old-school way, via patches, or the new school way, by wrapping it up for use as a service, rather than a library, then share that work.  Don't make proprietary forks of our database program, and don't make proprietary forks of our database as a service.

Compare Mozilla, for which Luis helped write MPL 2.0.  Netscape birthed Mozilla to keep Microsoft's IE from eating the browser market.  Netscape made Navigator open source.  But Netscape was convinced that Navigator, even as open source, couldn't compete with IE if it didn't have proprietary plugins like Flash and Adobe Acrobat.  They needed a license that allowed that kind of proprietary development, but also insure that Mozilla, an open source product, remained a kind of singleton pool for contribution, both from within and without the new foundation.  If you improved the browser via plugin, you could sell and license that plugin however you pleased.   But if you improved the browser itself, you had to share that back.

MongoDB is a networked database, and Netscape was a GUI application.  But we could extend this copyleft approach to any kind of code with an interface.  That is exactly what the API Copyleft License does:

> You need not contribute software that only invokes this software’s [...] interfaces [...] without exposing this software’s interfaces [...].
>
> Interfaces exposed by this software include all the interfaces this software provides users or other software to invoke its functionality, such as command line, graphical, application programming, remote procedure call, and inter-process communication interfaces.

Of course, selective copyleft isn't the only kind of copyleft a developer could want to apply to their work.  Consistent copyleft also makes sense, and [makes sense for both activists and businesses](https://writing.kemitchell.com/2018/11/04/Copyleft-Bust-Up.html#cohesion).  There will be differences, of course.  FSF-school activists want to exempt [private changes](https://writing.kemitchell.com/2018/09/17/Private-Changes.html).  Many businesses [don't](https://opensource.org/licenses/RPL-1.5).  But all those choices could be written as exceptions to a single, common, maximally strong and consistent copyleft license.

We can express their goals, and map them to license rules, in terms of selectivity.  Trying to decide whether one combination of permissive exceptions is _weaker_ or _stronger_ than another only puts more fog between problem and solution.
