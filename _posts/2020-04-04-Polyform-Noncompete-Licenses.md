---
title: Noncompete By Two Other Names
description: Why are the last PolyForm licenses taking so long?
series: PolyForm
date: Sat 04 Apr 2020 11:58:26 PM PDT
tags:
- Licensing
- Noncommercial
- Software
- Standard Legal Terms
- Defensive Licenses
---

Two software licenses.  One says "Do what you want with this software, but don't compete with this project.".  The other says "Do what you want with this software, but don't compete with the company that released it.".  What do we call these licenses, so we can tell them apart?  We can't use "noncompete".  That could readily describe both of them.

I helped cofound [PolyForm Project](https://polyformproject.org) last year.  We came together to publish the standard source code licenses software was missing.  We published a [noncommercial license](https://polyformproject.org/licenses/noncommercial/1.0.0).  We published an [internal-use-only license](https://polyformproject.org/licenses/internal-use/1.0.0).  We published a [free-trial license](https://polyformproject.org/licenses/free-trial/1.0.0).  And a couple more, to boot.  All in relatively short and readable English terms.

These missing licenses, especially the noncommercial form, represented one of two main motivations for the project.  We also wanted to bring uniformity and state-of-the-art drafting to the burgeoning genre of "anything but SaaS" terms like the Commons Clause bolt-on, vendor-specific "community" licenses like [Elastic NV's](https://github.com/elastic/elasticsearch/blob/master/licenses/ELASTIC-LICENSE.txt) and [Sharetribe's](https://writing.kemitchell.com/2020/04/04/Sharetribe-1.0.html), and various lay attempts to generalize them.

We discovered along the way that many, many developers and companies want "do what you want, but don't compete" license terms.  Rules like "anything but SaaS" are just a kind of "anything but compete with us" rules.  But we also discovered that different companies, and even different projects within companies, wanted to define "don't compete" differently.

Oversimplifying just to companies, and even a bit from there, we heard two basic kinds of stories.

Say a company has developed some kind of software---often a library, framework, or other component---used in a product or service their company sells.  The company wants to release this software to the world, but not under standard terms already out there, or at least not yet.  Releasing under a permissive license like Blue Oak or Apache 2.0 would invite their competitors to quickly match the feature or cost savings by adding the code to their own, competitive products and services.  On the other hand, releasing under a copyleft license like the Server Side Public License, Parity, or one of the GPLs would only stymie use by other companies that don't compete with the creator, but want to keep code for their products and services closed.

If "don't use our code to compete against us" means "don't use our code to compete _against the project we've released_", rather than "don't use our code to compete _against our company_", these companies likely won't release at all.  Worse yet, they may write their own license, chucking another new, likely vendor-specific form onto the pile.  Their competitors probably won't mind using the code just exactly as it was released, without forking or porting or otherwise creating a new competitor for the project.  Why do your own thing when your competitor's busy doing it for you?

All that said, there are and will be companies glad to give component code away to competitors, so long as those competitors don't mount an assault on the project, as by forking it.  There is also an edge case, where the project the company might release isn't a part of its core product or service, but the whole thing.  A SaaS company, for example, might well consider releasing its web application.  If the company has one product or service---the web app---there's not much practical difference between "don't compete with this project" and "don't compete with our company".

Getting our heads and our language around this distinction took time.  So did validating demand for a license that implements each approach.  Then began a string of unfortunate health issues afflicting more than one of the lawyers involved in drafting, myself included.  And of course now a far more serious health crisis, affecting one and all.

But we're getting there, and I for one feel a new burst of energy for the project.  I hope we'll have a standard-worthy form ready and published fairly soon.  I intend to do the work to make it so.

But I still don't know what we'll call the licenses.
