---
title: License Utopia
description: just five licenses for all of open source
layout: post
---

Bruce Perens and I have found lots of reasons to disagree.  But I could not agree with Bruce more strongly on one key point, arguably more important than all the rest together:  The world only needs a few open source software licenses.  Having so many serves nearly no one.

Standardization is always a compromise.  It asks people to make do with something that _nearly_ fits, in exchange for all the benefits of being standard.  In that way, standards always intentionally oversimplify a problem.

Extent of oversimplification varies.  One Size Fits All fits almost nobody, but comes cheap.  XS-S-M-L-XL fits most, but not strikingly well, especially under distortions, like [vanity sizing](https://en.wikipedia.org/wiki/Vanity_sizing).  34 to 56, plus long-regular-short, plus slim-fitted-classic-relaxed more or less _requires_ specialist assistance, and the result off the rack usually expects finish tailoring.  Bespoke is no standard at all.  Haute couture demands models to fit the standards of its clothes, rather than the other way around.

Open source is none of those systems.  There is no singular [Creative Commons](https://creativecommons.org) of software, deciding what will go on shelves and racks.  Quite the opposite.  Open source software licensing is a thrift store.  Hopefully something that fit someone else, perhaps someone long gone, will fit you, too.

Bruce's specific vision of a tidy open source toolkit probably differs from mine.  But I'd like to set out my thinking.  My own point of view.

In short: one permissive license, with optional credit, plus three copyleft licenses---selective, consistent, and historical---also with optional credit.

A bit more detail follows.

## Permissive License

The permissive license would say, in essence:

> Do whatever you want with my software.  But accept all the risk of doing so.

In other words, the permissive license should achieve more or less what [the Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0) does.  Give everyone as much permission to work with the software as possible, but protect contributors from liability.

If were it legally possible to do both _without_ requiring [notice of the liability protections](https://blueoakcouncil.org/license/1.0.0#notices), that's what we would do.  The license would simply waive copyright and any patents, and require nothing of those receiving permission.  Unfortunately, it's complicated.  We can't go the full [Unlicense](https://spdx.org/licenses/Unlicense.html) or [0BSD](https://spdx.org/licenses/0BSD.html) route with legal confidence.  Especially for high-risk software.

## Optional Credit

To that permissive license, I would add an optional provision requiring credit for contributors.  When triggered, the license, plus credit provision, would say:

> Do whatever you want with my software.  But accept the risk of doing so, and give me credit for my work.

We could write the credit provision to apply only if a credit beginning with a [magic number](https://en.wikipedia.org/wiki/Magic_number_(programming))---like `Required Credit:`---comes with the software.  That being the case, users would have to make that credit line available to everyone who receives a copy of the software or interacts with software built with it as a service software, for free, in a standardized way.  Something like the "legal notices" screens we can find on smart phones today, or [humans.txt](http://humanstxt.org/) for services.

I say _credit_, not _attribution_ or _notice_.  That would go further than attribution under existing terms, including the Blue Oak Model, but not so far as [CPAL](https://opensource.org/licenses/CPAL-1.0), which required [opening credits](https://en.wikipedia.org/wiki/Opening_credits) users have to see, rather than [closing credits](https://en.wikipedia.org/wiki/Closing_credits) they can choose to watch.  The purpose is to make sure developers of the licensed software can point to evidence of their contributions, to build their reputations, back up their resumes, and secure new opportunities.  Credit as a form of compensation, not legal formality.

For some prior work on this concept of credit, see [Posterity](https://github.com/berneout/posterity-public-license).  If I were writing Posterity today, I'd fork the Blue Oak Model.  I've begun a version 2.0.0 that does just that.

## Copyleft Troika

There would be just three copyleft licenses: a _consistent_ copyleft license, a _selective_ copyleft license, and a _historical_ copyleft license.

For more on why I say _consistent_ and _selective_ instead of _weak_ and _strong_ see [my post on the topic](https://writing.kemitchell.com/2019/03/11/Weak-Strong-Wrong.html).

In the notes below, I will use the terms _trigger_, _reach_, _licensing_, and _distribution_ to describe the aspects of copyleft rules.  For more on those design decisions, see [my vocubulary of copyleft](https://writing.kemitchell.com/2018/10/24/How-to-Speak-Copyleft.html#design).  But you can probably pick it up from context below.

### Consistent Copyleft

The consistent copyleft license would say:

> Do whatever you want with my software.  But if you use my software to make other software, release that software under like terms.

The consistent copyleft license would apply copyleft to all use cases, and require sharing alike of as much code as possible, in as many situations as possible.

Its trigger would be very light.  Copyleft would not hinge on distribution, or provision as a network service, but trigger on use or making changes alone.  It would reach [private changes](https://writing.kemitchell.com/2018/09/17/Private-Changes.html), with the exception of prototypes that never reach viability.  From the [API Copyleft License 1.0.0](https://writing.kemitchell.com/2019/02/22/API-Copyleft-1.0.0.html):

> You need not contribute prototype changes, extensions, or applications that you do not end up using for more than fourteen calendar days, share with anyone else, or use to provide a service to anyone else.

Perhaps this language could be [improved](https://github.com/kemitchell/api-copyleft-license).  But I think it conveys the concept.

As for licensing, the consistent-copyleft license would require licensing under the same terms, or the [permissive waive](#permissive-license), in either case with or without [optional credit](#optional-credit).  Distribution would happen by publication to a freely accessible distribution system widely used for similar source code, plus a message to recipients of copies and users---through the same standardized channels as [optional credit](#optional-credit)---of how to find source through that distribution system.

[Parity](https://paritylicense.com) is the closest existing license to the ideal consistent-copyleft license I have in mind.

### Selective Copyleft

The selective copyleft license would say:

> Do what you want with this software.  But if you make changes, additions, or wrap my software in new software, release that work under like terms.

The selective copyleft license would be the same as the consistent copyleft license, with some exceptions exempting certain use cases from copyleft.  For those use cases, the selective copyleft license would work just like the [permissive license](#permissive-license).

In other words, the selective-copyleft license would look a bit like [LGPLv3](https://www.gnu.org/licenses/lgpl-3.0.en.html), which incorporates [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html) by reference, then makes [exceptions](https://www.fsf.org/blogs/rms/selling-exceptions) for specific use cases.

Under the selective-copyleft license, those exceptions would be applications that only use the licensed software through its exposed APIs, without proxying or passing those APIs or their functionality along to other applications.  Again from The API Copyleft License:

> You need not contribute software that only invokes this software's functionality through the interfaces this software exposes, without exposing this software's interfaces and functionality to other software.
>
> Interfaces exposed by this software include all the interfaces this software provides users or other software to invoke its functionality, such as command line, graphical, application programming, remote procedure call, and inter-process communication interfaces.

The selective-copyleft license's licensing and distribution rules would track those of the consistent-copyleft license, but licensing would require the same selective-copyleft terms, rather than consistent-copyleft terms.

[The API Copyleft License](https://writing.kemitchell.com/2019/02/22/API-Copyleft-1.0.0.html) is very close to my spec for the ideal selective-copyleft license.

### Historical Copyleft

Like the selective-copyleft license, the historical-copyleft license would also be written as the consistent-copyleft license with exceptions.  Those exceptions would roughly track the copyleft scope of [GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html): anything not distributed to others or outside the licensee's organization, and anything that is not a derivative work of the licensed software under copyright law.

## Compatibility

Software under the [permissive license](#permissive-license), with or without [optional credit](#optional-credit), could be freely combined with code under any of the [copyleft licenses](#copyleft-troika).  Software under [selective copyleft](#selective-copyleft) and [historical copyleft](#historical-copyleft), again with or without credit, could be freely combined with software under [consistent copyleft](#consistent-copyleft).

Terms-wise, the copyleft licenses would merely add sections on to the terms of the permissive waiver.  The selective- and historical-copyleft licenses would merely add sections to the consistent-copyleft license with exceptions to its general copyleft rule.

## Benefits

The marginal benefits of standardizing on this approach would be enormous.  The compliance and compatibility benefits are largely obvious.  I'll focus on a few less obvious gains.

We'd repair the credit function of notice requirements, making that benefit reliably available to developers again.  Moreover, developers would be able to clearly express whether they do or don't want credit.  Many developers choosing MIT, BSD, and even Apache 2.0 terms today don't care about credit, and don't enforce notice conditions, even informally.

The new license slate would also reunify the [two historical camps of copyleft license users](https://writing.kemitchell.com/2018/11/04/Copyleft-Bust-Up.html#copyleft): competitive upstarts seeking protection through licensing, and activists promoting software freedom likewise.  As I've [mentioned before](https://writing.kemitchell.com/2019/03/11/Weak-Strong-Wrong.html), I think those camps are currently violently disagreeing where they could be productively collaborating.  Strong copyleft is dual-use legal technology, useful for both business and activist ends.  The constituencies of copyleft benefit by mutual reinforcement.  [In open licensing, all bedfellows are strange.](https://writing.kemitchell.com/2018/11/04/Copyleft-Bust-Up.html#permissive)

If the terms were written to be read, and read by hackers, like the [Blue Oak Model](https://blueoakcouncil.org/license/1.0.0), we'd see broad, systemic benefits, across the commons.  Self-administration and community deliberation of licensing issues would become far more practical, in far more situations.  The practice would need fewer lawyers, and could rely less on [compromise solutions to serve those who can't find or afford them](https://blueoakcouncil.org/).