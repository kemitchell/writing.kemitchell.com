---
title: License Utopia
description: just four licenses for all of open source
layout: post
tags:
- Open Source
- Licensing
- Copyleft
- Standard Legal Terms
---

[Bruce Perens](https://perens.com/) and I have found lots of reasons to disagree.  But I could not agree with Bruce more strongly on a key point, arguably more important than all the rest combined:

_The world only needs a few open source software licenses._

We currently have more than anyone can count.  Which serves almost nobody.

Bruce's specific vision of a tidy open source license catalog probably differs from mine.  But I'd like to set out my thinking.

In short: one [permissive license](#permissive-license), with [optional credit](#optional-credit), plus [three copyleft licenses](#copyleft-troika)---[consistent](#consistent-copyleft), [selective](#selective-copyleft), and [historical](#historical-copyleft)---likewise with optional credit.

## Standardization

Standardization is always a compromise.  It asks people to make do with something that _nearly_ fits, in exchange for all the benefits of being standard.  In that way, standards intentionally oversimplify a problem.

Optimal oversimplification varies.  One Size Fits All fits almost nobody, but comes super cheap.  XS-S-M-L-XL fits most, but not strikingly well, and invites distortions like [vanity sizing](https://en.wikipedia.org/wiki/Vanity_sizing).  34 to 56, plus long-regular-short, plus slim-fitted-classic-relaxed more or less _requires_ specialist assistance or lots of try-on, and the result off the rack still expects finish tailoring.  Haute couture demands models to fit the standards of its clothes, rather than the other way around.  Bespoke is no standard at all.

Open source licensing is none of the above.   Open source licensing is a thrift store.  There is no singular [Creative Commons](https://creativecommons.org) of software, deciding what licenses go on the racks.  Hopefully a license that fit someone else, perhaps someone long gone, will fit you, too.  We're all wearing hand-me-down licenses.

A [Creative Commons-style license picker](https://creativecommons.org/choose/) would serve almost everyone better.  Here's how I'd see it.

## Permissive License

The permissive license would say, in essence:

> Do whatever you want with my software.  But accept all risk of doing so.

In other words, the permissive license would achieve what [the Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0) does.  Give everyone as much permission to work with the software as possible, but protect contributors from liability.

If were it legally possible to do both _without_ requiring [notice of the liability protections](https://blueoakcouncil.org/license/1.0.0#notices), that's what we would do.  The license would simply waive copyright and any patents, and require nothing of those receiving permission.  Unfortunately, it's complicated.  We can't go the full [Unlicense](https://spdx.org/licenses/Unlicense.html) or [0BSD](https://spdx.org/licenses/0BSD.html) route with legal confidence.  Especially for high-risk software.

The standardized permissive license would serve the needs of BSD-school, anti-IP hackers, large companies releasing software as loss leaders, standards reference implementations, and academics who want citation, and don't care about other forms or credit.

## Optional Credit

To the permissive license, I would add a rule requiring credit for contributors.  When triggered, the license, plus credit rule, would say:

> Do whatever you want with my software.  But accept the risk, and give me credit for my work.

I would write the credit provision to apply only if a credit line beginning with a [magic number](https://en.wikipedia.org/wiki/Magic_number_(programming))---like `Required Credit:`---came with the software.  Users would have to make any credit lines available to everyone who receives a copy of the software or interacts with software built with it as a service software, for free, in a standardized way.  Something like the "legal notices" screens we can find on smart phones today, or [humans.txt](http://humanstxt.org/) for services.

I say _credit_, not _attribution_ or _notice_.  Credit would go further than attribution under existing terms, including the Blue Oak Model, but not so far as [CPAL](https://opensource.org/licenses/CPAL-1.0), which required [opening credits](https://en.wikipedia.org/wiki/Opening_credits) users have to see, rather than [closing credits](https://en.wikipedia.org/wiki/Closing_credits) they can choose to watch.  The purpose, which the license would state plainly, would be to make sure developers of the licensed software can point to evidence of their contributions, to build their reputations, back up their resumes, and secure new opportunities.  Credit as a form of compensation, not legal formality.

For some prior work on this concept of credit, see [Posterity](https://github.com/berneout/posterity-public-license).  If I were writing Posterity today, I'd fork the Blue Oak Model.  I've begun a version 2.0.0 that does just that.

The standardized permissive license _with credit_ would appeal to developers who release software to build resumes and reputation, or who feel they're morally entitled to recognition.  It would also serve companies releasing open source in part for marketing benefit, who want to point to their credits as a loose form of referral.

## Copyleft Troika

There would be just three copyleft licenses: a _consistent_ copyleft license, a _selective_ copyleft license, and a _historical_ copyleft license.

For more on why I say _consistent_ and _selective_ instead of _weak_ and _strong_ see [my post on the topic](https://writing.kemitchell.com/2019/03/11/Weak-Strong-Wrong).

In the notes below, I will use the terms _trigger_, _reach_, _licensing_, and _distribution_ to describe the aspects of copyleft rules.  For more on that copyleft design vocabulary, see [my vocubulary of copyleft](https://writing.kemitchell.com/2018/10/24/How-to-Speak-Copyleft.html#design).  You can likely infer most of it from usage below.

### Consistent Copyleft

The consistent copyleft license would say:

> Do whatever you want with my software.  But if you use my software to make other software, release that software under like terms.

The consistent copyleft license would apply copyleft to all use cases, and require sharing alike of as much code as possible, in as many situations as possible.

Its trigger would be very light.  Copyleft would not hinge on distribution, or provision as a network service, but trigger on use or making changes alone.  It would reach [private changes](https://writing.kemitchell.com/2018/09/17/Private-Changes), with the exception of prototypes that never achieve viability.  From the [API Copyleft License 1.0.0](https://writing.kemitchell.com/2019/02/22/API-Copyleft-1.0.0):

> You need not contribute prototype changes, extensions, or applications that you do not end up using for more than fourteen calendar days, share with anyone else, or use to provide a service to anyone else.

Perhaps this language could be [improved](https://github.com/kemitchell/api-copyleft-license).  But I think it conveys the concept.

As for licensing, the consistent-copyleft license would require licensing under the same terms, _or_ the [permissive license](#permissive-license), in either case with or without [credit](#optional-credit).  Distribution would happen by publication to a freely accessible distribution system widely used for similar source code, plus a message to recipients of copies and users of services---through the same standardized channels as [optional credit](#optional-credit)---of how to find source through that distribution system.

[Parity](https://paritylicense.com) is the closest existing license to the ideal consistent-copyleft license I have in mind.

The consistent copyleft license would appeal to hard-line activists who want to encourage creation of more open software, or to discourage use of their work in non-free projects.  It would also suit the needs of companies releasing software for strategic effect under threat of proprietary competition, or running a [public-private licensing model](https://indieopensource.com/public-private/).

### Selective Copyleft

The selective copyleft license would say:

> Do what you want with this software.  But if you make changes, additions, or wrappers, release that work under like terms.

The selective copyleft license would be the same as the consistent copyleft license, with exceptions exempting certain use cases from copyleft.  For those use cases, the selective copyleft license would work just like the [permissive license](#permissive-license).

In other words, the selective-copyleft license would look a bit like [LGPLv3](https://www.gnu.org/licenses/lgpl-3.0.en.html), which incorporates [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html) by reference, then makes [exceptions](https://www.fsf.org/blogs/rms/selling-exceptions).

Under the selective-copyleft license, the exception would be applications that only use the licensed software through its exposed APIs, without proxying or passing those APIs or their functionality along to other applications.  Again from The API Copyleft License:

> You need not contribute software that only invokes this software's functionality through the interfaces this software exposes, without exposing this software's interfaces and functionality to other software.
>
> Interfaces exposed by this software include all the interfaces this software provides users or other software to invoke its functionality, such as command line, graphical, application programming, remote procedure call, and inter-process communication interfaces.

The selective-copyleft license's licensing and distribution rules would track those of the consistent-copyleft license, but licensing would also allow use of the same selective-copyleft terms.

[The API Copyleft License](https://writing.kemitchell.com/2019/02/22/API-Copyleft-1.0.0) is close to my spec for the ideal selective-copyleft license.

The selective-copyleft license would appeal to software freedom activists [concerned about proprietary and permissive competition](https://www.gnu.org/licenses/license-recommendations.en.html#libraries), foundations that want to encourage contribution back to a single shared project without empowering proprietary competition, like [Mozilla](https://mozilla.org), and companies with parallel needs on the commercial side, like [MongoDB](https://mongodb.com).

### Historical Copyleft

Like the selective-copyleft license, the historical-copyleft license would also be written as the consistent-copyleft license with exceptions.  Those exceptions would roughly track the copyleft scope of [GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html): anything not distributed to others or outside the licensee's organization, and anything that is not a "derivative work" of the licensed software under copyright law.

The historical-copyleft license would appeal to software freedom activists whose ethics and pragmatics track FSF compromise in its golden age, as well as non-activist users who have learned that particular scope of copyleft works well for their needs.

## Compatibility

Software under the [permissive license](#permissive-license), with or without [optional credit](#optional-credit), could be freely combined with code under any of the [copyleft licenses](#copyleft-troika).  Software under [selective copyleft](#selective-copyleft) and [historical copyleft](#historical-copyleft), again with or without credit, could be freely combined with software under [consistent copyleft](#consistent-copyleft).

## Drafting

Textually, the copyleft licenses would merely add sections on to the terms of the permissive waiver.  The selective- and historical-copyleft licenses would merely add sections to the consistent-copyleft license with exceptions to its general copyleft rule.

## Benefits

The marginal benefits of standardizing on this approach would be enormous.  The compliance and compatibility benefits are pretty obvious: less confusion, easier compliance for small and underresourced organizations, more sharing of terms across projects.  I'll mention a few less obvious gains.

This plan would repair the credit function of notice requirements, making that benefit reliably available to developers again.  Moreover, developers would be able to clearly express whether they do or don't want credit.  Many developers choosing MIT, BSD, and even Apache 2.0 terms today don't care about anything but liability, and don't enforce notice conditions, even informally.

The new license slate would also reunify the [two historical camps of copyleft license users](https://writing.kemitchell.com/2018/11/04/Copyleft-Bust-Up.html#copyleft): competitive upstarts seeking protection through licensing, and activists promoting software freedom likewise.  As I've [mentioned before](https://writing.kemitchell.com/2019/03/11/Weak-Strong-Wrong), I think those camps are currently violently disagreeing where they could be productively collaborating.  Strong copyleft is dual-use legal technology, useful for both business and activist ends.  The constituencies of copyleft benefit by mutual reinforcement.  [In open licensing, all bedfellows are strange.](https://writing.kemitchell.com/2018/11/04/Copyleft-Bust-Up.html#permissive)

If the terms were written to be read, and read by hackers, like the [Blue Oak Model](https://blueoakcouncil.org/license/1.0.0), we'd see broad, systemic benefits, across the commons.  Self-administration and community deliberation of licensing issues would become far more practical, in far more situations.  The practice would need fewer lawyers, and could rely less on [compromise solutions to serve those who can't find or afford professional help](https://blueoakcouncil.org/).

## Nowhere

This plan is admittedly Utopian.  I'd like to live in this licensing world, and so would all of my clients, but I have no practical plan to get us there.

As I've developed my own thinking along these lines, I've nonetheless found this fantasy exercise useful.  What license design choices bring a form closer to this ideal?  Where a design deviates, why?  Can new licenses do anything to encourage the right kind of convergence?

## Elsewhere

As it turns out, most of the _answers_ to those questions lead to a startling realization:  They're all stem from relatively recent technical and legal developments.  The more I look at where open source licensing _ought_ to be, the more that picture points back to a prior time.

At least on the copyleft side, licensing Utopia looks an awful lot like licensing history in the heyday of GPLv2.  In part due to perception, rather than reality, GPLv2 was seen for a time as maximally strong.  It _was_ the "free for free software license".  The ASP loophole was but a rumor, brewing in whispers.  SaaS was not the primary means of software delivery, nor PaaS the primary means of software execution.   Distribution was inevitable.   Composition via HTTP APIs, rather than static or dynamic linking, was a subject of doctoral theses, and scorned as unpalatably slow in industry.

Times have certainly changed.  For the most part, licenses have not.  Open source is changing.  But is that changing reforming it to a past state of play, or changing the game in any fundamental way?  I don't see a fundamental change.  I see work to fix what's broke down in the last fifteen to twenty years.  Finally.
