---
title: Don't Rely on OSI License Approval
layout: post
tags:
- Open Source
- Open Source Initiative
- Licensing
---

Relying on the Open Source Initiative to approve and disapprove of licenses, for legal effect, is a misapplication and a bodge.  In nearly any practical context, OSI-approved will include licenses that you definitely don't want, and leave out licenses you do.

![Venn Diagram](/images/want-osi-do-not-want.svg)

Hackers and companies can rely on the Open Source Initiative in many ways.  Some are valid and wise, especially in the policy realm, where institutions can go where individuals can't.  But relying on the Open Source Initiative to approve licenses for specific, practical effect is almost never wise.

I help clients draft contracts, policies, and other terms all the time.  More often than not, those terms deal with open source software.  What licenses will the developer apply to their work under contract?  What licenses can they accept for the work of others they use on the job?  What kinds of projects will a service allow, or allow for free?  How will the org share work they do under a grant?  If programmers want to use software they find online under free-of-charge licenses, which are okay, which aren't, and which need special review?

Every time I have answered those questions by referencing OSI approval, I have come to regret it.  I've helped clients make others regret it, too.

Unless your purpose is to track OSI political history or bolster OSI esteem at some expense to yourself, don't define "open source" by OSI approval, and don't incorporate OSI's approved list by reference for legal consistency or completeness.  OSI has racked up approvals not just by analytical rigor, but by analytical rigor, political expedience, and prevailing activist strategy.  Political expedience and prevailing activist strategy do not afford much chance to correct, or even agree on, which approvals were actually mistakes.

I have criticized the Open Source Definition and the way the Open Source Initiative claims to apply it.  I do not criticize here.  Rather, I draw attention to fundamental misfits of need, purpose, and perception.  These are differences of kind, not shortcomings of quality or transparency.  You can read nearly all licenses that OSI has approved on opensource.org, and verify whether they were approved.

Let's review some common pitfalls.

## Copyleft

Expect: free, business-friendly terms (MIT)

Receive: strong, activist copyleft (GPLv3)

By far the most common misunderstanding is that all OSI-approved licenses make software available for building commercial projects, products, and services.  If that is true at all, it is only technically true.

Making it practically true is a longtime goal of some activists working through OSI.  But they have not yet succeeded in convincing business to meet the requirements of many licenses OSI has approved.

Software licensing wonks distinguish "permissive" and "copyleft" licenses.

Roughly speaking, permissive licenses give permission to do nearly anything with software.  That includes building other software that's licensed under typical commercial software license terms, which OSI does not approve.  And it includes building software that isn't licensed, or even shared, outside a company at all.

The MIT License is a common permissive license.

Copyleft licenses, by contrast, require sharing and licensing new software built with copyleft-licensed software.  Specifically, you must share all the code in the best way for others to make changes, and license under OSI-approved terms.

The GNU General Public License, Version 3 is a common copyleft license.

Permissive licenses say you can do what you like.  Copyleft licenses say you can do what you like, but if you build other software, you must share and license that software alike.

Copyleft licenses differ in what they require you to share, and when you're required to share.  But all copyleft licenses require sharing in at least some situations.  Under old copyleft licenses, it's occasionally hard to tell whether you have to share or not, even with professional advice.

I wish copyleft were simpler.  I'm working hard on that.  I wish more people, and more businesspeople, understood how well it can work for for them, giving and receiving.  I'm working hard on that, too.  But copyleft is like a free puppy, where permissive is more like free candy.  Unless you happened to secretly want a puppy, receiving a puppy as a surprise is not a welcome surprise.

If you define acceptable licenses as whatever OSI approves, expecting permissive candy, you may receive unwelcome copyleft puppies instead.  I have seen companies sponsor "open source" development, delivery under OSI-approved license, only to discover they had to pay the same developer again to use the new software without making their product "open source", too.

## Specific Copyleft

## Patent Coverage

## No Patent Coverage

## Common Permissive Licenses

## Standardized Compliance

## Legal Rigor

## English Language

<!--LiLiQ-->