---
title: Don't Rely on OSI License Approval
layout: post
tags:
- Open Source
- Open Source Initiative
- Licensing
---

Hackers and companies can rely on the Open Source Initiative in myriad ways.  Many are valid and wise, especially in the policy realm, where institutions can go where individuals can't.  But relying on Open Source Initiative to approve licenses for specific practical effect is almost never wise.

I help clients draft contracts, policies, and other terms all the time.  These days, more often than not, those terms deal with open source software.  What licenses will the developer apply to their work under contract?  What licenses can they accept for the work of others they use on the job?  What kinds of projects will a service allow, or allow for free?  How will the org share work they do under a grant?

Every time I have answered those questions by referencing OSI approval, I have come to regret it.  And I've helped clients make others regret it, too.

Unless your purpose is to track OSI's political history, to ride on its public perception, or to bolster its esteem, rather than your own interests, don't define "open source" by OSI approval, and don't rely on those approvals for functional consistency or completeness.  OSI's racked up approvals over time not by technical consistency, but political expedience.

I have criticized the Open Source Definition and the way the Open Source Initiative claims to apply it.  I do not criticize here.  Rather, I draw attention to a fundamental mismatch of needs and functionality.  A difference of kind, not a shortcoming of quality.  Relying on the OSI license list to approve or disapprove of licenses, for legal effect, is a misapplication and a bodge.  In nearly any practical context, the set of OSI-approved licenses will include licenses that you want to exclude, and omit licenses that you want.

![Venn Diagram](/images/want-osi-do-not-want.svg)

## Do Not Want

### Copyleft

By far the most common misunderstanding is that all OSI-approved licenses make software available for building commercial projects, products, and services.  If that is true at all, it is only technically true.  Making it practically true is a longtime goal of some activists working through OSI.  But they have not yet succeeded in convincing business to meet the requirements of many licenses OSI has approved.

Software licensing wonks distinguish "permissive" and "copyleft" licenses.

Roughly speaking, permissive licenses give permission to do nearly anything with software.  That includes building other software that's licensed under typical commercial software license terms, which OSI does not approve.  And it includes building software that isn't licensed, or even shared, outside a company at all.

Copyleft licenses, by contrast, require sharing and licensing new software built with copyleft-licensed software.  Specifically, you must share all the code in the best way for others to make changes, and license under OSI-approved terms. 

Permissive licenses say you can do what you like.  Copyleft licenses say you can do what you like, but if what you do is build more software, you must share alike.  Copyleft licenses differ in what they require you to share, and when you're required to share.  But all copyleft licenses require sharing in at least some situations.  Under old copyleft licenses, it's often hard to tell whether you have to share or not.