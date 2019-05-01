---
title: Don't Rely on OSI License Approval
layout: post
tags:
- Open Source
- Open Source Initiative
- Licensing
---

Hackers and companies can rely on the Open Source Initiative in myriad ways.  Many are valid and wise, especially in the policy realm, where institutions can go where individuals can't.  But relying on Open Source Initiative to approve licenses for specific practical effect is almost never wise.

I help clients draft contracts, policies, and other terms all the time.  More often than not, those terms deal with open source software.  What licenses will the developer apply to their work under contract?  What licenses can they accept for the work of others they use on the job?  What kinds of projects will a service allow, or allow for free?  How will the org share work they do under a grant?  If programmers want to use software they find online under free-of-charge licenses, which are okay, which aren't, and which need special review?

Every time I have answered those questions by referencing OSI approval, I have come to regret it.  I've helped clients make other drafters regret it, too.

Unless your purpose is to track OSI's political history, to deflect questions of developer politics OSI's way, or to bolster OSI's esteem, at the expense of your own practical interests, don't define "open source" by OSI approval, and don't incorporate those approvals by reference for legal consistency or completeness.  OSI has racked up approvals not just by analytical rigor, but by a combination of analytical rigor, political expedience, and activist policy.

I have criticized the Open Source Definition and the way the Open Source Initiative claims to apply it.  I do not criticize here.  Rather, I draw attention to a fundamental mismatch of need and purpose.  A difference of kind, not a shortcoming of quality.

Relying on the OSI license list to approve or disapprove of licenses, for legal effect, is a misapplication and a bodge.  In nearly any practical context, the set of OSI-approved licenses will include licenses that you want to exclude, and omit licenses that you want.

![Venn Diagram](/images/want-osi-do-not-want.svg)

Let me give some examples.

## Do Not Want

### Copyleft

Expect: Free, business-friendly terms (MIT)

Receive: Strong, activist copyleft (GPLv3)

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