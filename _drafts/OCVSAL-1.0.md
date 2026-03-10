---
title: Open Core Ventures Source Available License Version 1.0
series: Line by Line
description: a very short non-production license with twists
tags:
- Source Available
- Software Licensing
- Contributor Licensing
---

My colleague and longtime blogroll all-star [Heather Meeker](https://heathermeeker.com/) has published a new source-available license through [Open Core Ventures](https://www.opencoreventures.com/), her venture capital firm.

It's a short license.  Here are notes from my first couple reads through.

## Takeaways

- OCVSAL license only covers non-production use.  It explicitly mentions separate "commercial" production licenses.

- OCVSAL includes a built-in contributor license agreement.  While we've seen that before in licenses like Apache 2, it's not clear whether, when, or how those could really work.  This one is particularly broad.

- OCVSAL says that if your local law doesn't allow disclaiming all warranties, _you don't get any license_.  That could affect more states and countries than folks might guess.

## Text

> Open Core Ventures Source Available License (OCVSAL) version 1.0

Acronym is a bit of a mouthful.  Versioning is good!

> Using software and associated documentation files (the "Software") in production requires a valid commercial agreement from the copyright holder.

Three cheers for putting the defining feature of the license up top.  This is a non-production license.  Expect to pay for production use.

I'm not aware of any definition of "production" that the law would impose.  Under American contract laws, courts generally try to figure out what the two sides to a set of terms like this meant and would have understood at the time they made their deal.  There is also a concept of "usage of trade": identifying terms with special technical and business meanings and using evidence of what participants in those fields mean by them to interpret contracts.

Long story short, I'd expect a legal argument about whether a particular use of software under this license was "production" use to end up shaped like a battle of evidence about what "production" means among those in the US-based, English-speaking software business.  That's not quite as helpful or efficient as a fully fleshed-out definition in the terms, but probably pretty clear in many potential situations.  It's also a framing that points to what software people say and do, rather than empowering lawyers as the experts.

A small nit on the way this is drafted: vendors may also license through intermediaries like resellers.  I'd probably say something broader than "from the copyright holder", though I suppose that could be stretched to cover sublicensing, too.

> The licensor grants you the right to modify the Software, test it, and share modifications to the Software, for non-production use.

Legally speaking, this is the operative crux, the "grant" where the titular "license" is actually given.  It's very, very short.

No mention of patents.  Not a fatal law---see how far MIT and BSD got us---but a bit of a regression from the clarity of newer forms like [Apache 2](https://apache.org/licenses/LICENSE-2.0) and [Blue Oak](https://blueoakcouncil.org/license/1.0.0).

It's an interesting choice that it _does_ give the right to make changes, and even to share them.  More about how those changes might be licensed coming below.

I'm struck that this grant does _not_ mention copying, or "reproduction in copies" as the Copyright Act says.  Of course, that will arguably go without saying, especially as a necessary step for "test[ing]" and "use".

Neither does this grant mention sharing---"distribution of copies"---_without_ modifications.  Yet I'd assume that most adopters of this kind of license would be glad to see verbatim copies traded about like shareware, and not just provide downloads themselves.

> You must retain this license on any copies of the Software you share with others.

Short notice-attribution requirement.  Normal open-license stuff.

> If you provide suggestions, contributions, or other feedback about the Software, you grant the licensor an irrevocable, royalty-free, unlimited license to use that feedback without restriction.

A built-in CLA, and a very broad one.  This is mixing terminology that we'd typically see in the "feedback" sections of commercial license of SaaS terms with the kind of explicit license-grant language we'd see in a CLA.

The ["Submission of Contributions" section of Apache 2](https://apache.org/licenses/LICENSE-2.0) has long stood as an example of writing terms for licensing _back_ from contributors into terms for licensing _on_ to users.  Enforcing that kind of term would be a new move at law, as far as I'm aware.  I suspect it would depend very heavily on establishing license terms as the terms of a contract, rather than just a one-way license grant.  There's ongoing legal action around those rules now.

The license-grant language here starts to follow the orthodox drafting approach of listing out a bunch of adjectives for various properties of the license: "irrevocable", "royalty-free", "unlimited".  Some of the usual "flags" left out have defaults that I think suit the use case here.  But I'd probably add "sub-licensable" explicitly, to make the thing that the project steward will want to do---incorporate the contributions as part of their project and continue licensing that project overall however it wants---explicitly clear.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.

Typical all-warranties disclaimer.

> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Typical open-style damages exclusion.

> IF THE FOREGOING WARRANTY DISCLAIMER IS UNENFORCEABLE UNDER APPLICABLE LAW, THIS LICENSE IS VOID AND YOU HAVE NO RIGHT TO USE THE SOFTWARE.

Very important.  This potentially makes the whole license a [no-op](https://en.wikipedia.org/wiki/NOP_(code)) in many meaningful jurisdictions.  This includes US states that adopted the Uniform Computer Information Transactions Act---Maryland and Virginia---which imposes mandatory warranties, with an exception for "free software" that I would read to clearly _not_ apply to software offered under commercial license for production use.

This isn't completely new.  I'd argue the EUPL does the same.

I'm not sure whether this kill-switch is meant to apply just if the warranty disclaimers aren't enforceable, or also if the damages exclusions aren't.  I'd clarify that, if only to throw light on which jurisdictions the license doesn't work in.
