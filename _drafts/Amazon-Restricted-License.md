---
title: Amazon Has a Restricted License, Too
description: this is not a bad thing
tags:
- Licensing
- Software
- Defensive Licenses
---

For all the brouhaha over new company licenses keeping code from Amazon, it utterly slipped my mind that [Amazon has its own restricted, "source-available" license](https://aws.amazon.com/asl/).  You can find it [in the wild](https://github.com/search?q=%22Amazon+Software+License%22&type=code) and [on aws.amazon.com](https://aws.amazon.com/asl/).  Here's the crux:

> 3.3  **Use Limitation**.  The Work and any derivative works thereof only may be used or intended for use with the web services, computing platforms or applications provided by Amazon.com, Inc. or its affiliates, including Amazon Web Services, Inc.

In other words, "you can use this software for whatever, but only with AWS or other Amazon platforms and apps".  No using with Google Cloud Platform or Azure or whoever.  No using _without_ Amazon services at all.

I didn't initially class this license with the defensive terms we've seen from smaller companies.  It doesn't speak in terms of competition with the developer, like [PolyForm Shield](https://polyformproject.org/licenses/shield/1.0.0).  Nor does it prohibit free riding against the original project, like [PolyForm Perimeter](https://polyformproject.org/licenses/perimeter/1.0.0).  But the Amazon license's permissions are in fact _more_ restrictive, and strictly so.  They allow fewer uses than the self-defense forms.

A few years back, I published some templates for writing licenses with use rules called ["Normally Open" and "Normally Closed"](https://writing.kemitchell.com/2020/06/09/Normally-Open-Closed).  The concept was that if you want a rule about how people can use your software, you can implement it two ways: as a rule for what people _can_ do, or as a rule for what they _can't_.  Allow-rule or deny-rule.  The defensive PolyForm licenses are "normally open": they allow all uses _except_ using the developer's own software against them.  Amazon's license is "normally closed": it _prohibits_ all uses except those with Amazon services.

I don't see anything to criticize in Amazon's use of this license.  Amazon knows how to deploy services, rather than distributing code, and has delivered no few "custom" solutions to larger customers under private contract.  If it couldn't put terms like this in `LICENSE` for its repos, some of those repos might not be public in the first place.

The principle of the thing isn't that putting new rules in licenses for published code is somehow unworkable or wrong.  The principle is that we get a lot from firms through competition, and under competition, the ability to tailor license terms for published code makes more software visible and usable to more people earlier than if distribution could only be full public-open or totally private and closed.

That principle applies just as well to Amazon as its competitors.
