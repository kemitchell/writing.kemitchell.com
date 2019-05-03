---
title: Don't Rely on OSI License Approval
layout: post
tags:
- Open Source
- Open Source Initiative
- Licensing
---

Relying on the Open Source Initiative to approve and disapprove of licenses, for legal effect, is almost always trouble.  In nearly any practical context, the OSI-approved list will green-light licenses you don't want, and red-light many you do.

![Venn Diagram](/images/want-osi-do-not-want.svg)

There valid and wise ways to rely on OSI. Especially in policy advocacy, where an old nonprofit can go and say where and what you can't.  But relying on a lay advocacy organization to approve licenses for specific, practical effect is different.  In the jargon, it’s a type error, a round peg that happens to fit, badly, in a square hole.

I help clients draft contracts, policies, and other terms all the time.  More often than not, those terms deal with open source software.  What licenses will the developer apply to their work under contract?  What licenses can they accept for the work of others they will use on the job?  What kinds of projects will a service host, or host for free?  How will a nonprofit share work they will do under a grant?  If programmers want to use software they find online under free-of-charge licenses, which are okay, which aren't, and which require special review?

Every time I have answered those questions by referencing OSI approval, I have come to regret it.  I've helped clients make others regret it, too.

Unless your purpose is to track OSI political history or bolster OSI esteem, potentially at some expense to yourself, don't define "open source" by OSI approval in rules, and don't incorporate OSI's approved list by reference for consistency or completeness.  OSI applies analytical rigor to licenses.  But also political expedience, though-leader fashion, and prevailing activist strategy.  Political expedience, thought-leader fashion, and prevailing activist strategy do not afford much chance to correct, or even agree on, which approvals were actually mistakes.

I have criticized the Open Source Definition and the way the Open Source Initiative claims to apply it.  I do not criticize here.  Rather, I draw attention to common misalignments of need, purpose, and perception.  These are differences of kind, not shortcomings of quality or transparency.

You can read nearly all licenses that OSI has approved on opensource.org, and verify their approval, for yourself.  To choose and advise on open source licenses responsibly, for specific, practical needs, we must look past how those terms and choices are presented, and contend with what they say.

## Copyleft

By far the most common misunderstanding is that all OSI-approved licenses make software available for building commercial projects, products, and services.  If that is true at all, it is only technically true, not practically true.

Making it practically true has been a longtime goal of some activists working through OSI.  But they have not succeeded in convincing the software industry to meet requirements of many licenses approved.  If your company makes commercially available software, chances are your business model conflicts with significant licenses OSI has approved.

If you reference OSI approval expecting permissive, business-friendly terms, you may get strong, activist copyleft terms instead.  Software licensing wonks distinguish "permissive" and "copyleft" open source licenses.  You should, too.

Roughly speaking, permissive open source licenses give everyone the right to do nearly anything with software, for free.  That includes building other software that's licensed under typical commercial software license terms, as opposed to open source terms.  It includes building software that isn't licensed, or even shared, outside a company at all.

[The MIT License](https://opensource.org/licenses/MIT) is a common permissive license.

Copyleft open source licenses, by contrast, require sharing and licensing new software built with copyleft-licensed software.  Specifically, you must share code in the best way for others to make changes, and license under open source terms.

[The GNU General Public License, Version 3](https://opensource.org/licenses/GPL-3.0) is a common copyleft license.

Permissive open source licenses say you can do what you like.  Copyleft open source licenses say you can do what you like, but if you build other software, you must share and license that software alike.  Perhaps you hadn’t planned to be so generous.

Copyleft licenses differ in how much they require you to share, and when you're required to share.  But all copyleft licenses require sharing in at least some situations.  Under many copyleft licenses, it's occasionally hard to tell whether you have to share or not, even with professional help.

I wish copyleft were simpler.  I'm working on that.  I wish more people, and more businesspeople, understood how well copyleft can meet business needs, giving and receiving.  I'm working on that, too.  But if permissive open source is free candy, copyleft is a free puppy.  If you want a puppy, a puppy is great.  If you don’t want a puppy, receiving one as a surprise ain’t the best.  Puppies need food, love, and house training.

If you define acceptable licenses as whatever OSI approves, expecting permissive candy, you may receive surprise copyleft puppies.  I have seen companies sponsor "open source" development, delivery under OSI-approved license of developer's choice, only to discover they had to pay the same developer again to use the work without sharing their product code as open source.  Oops.

## Vintage Copyleft

Even if you rely on OSI license approval and see copyleft coming, you may not get the copyleft you expect.  The effect can be bit like trying weed for the first time since ‘69.  The old stuff is still around, nostalgic, authentic.  But chances are, your first hit in a long time is less of a throwback, and more of a short course in how far things have come.

When many practitioners think copyleft, they think “GPL” or “GNU General Public License”.  There are a few versions of that license, the best-known of which is version 2.  You’re likely to see it.

GPLv2 got a lot of press in the late 1990s and early 2000s.  Bad press.  Sensational press.  At the time, straight-laced firms who saw open source as a tune-in, drop-out threat to their order invested heavily in writing, telling, and spreading scary stories about the GPL and intellectual property jumping out of office park windows.  The scarier the story, in general, the less likely it was true.  But the aftershocks of that leaflet bombing campaign are still being felt, like shudders of anxiety through the industry.

As industry is and industry does, coping mechanisms were developed.  An entirely new consultative sub-practice, a licensing-industrial complex, spontaneously self-organized to sell the cure for copyleft, in equal and opposite reaction to how terrifying it was made out to be. Some of that opportunity empowered those who knew whereof they spoke to be heard (and paid) for a change.  But few were the wise, many were the expedient, and peddlers of cartoonish compliance training, materials, and programs sowed the land.  We are still feeling the effects of that, too.

If your compliance approach to copyleft code is really a compliance program for GPLv2 in the mind of a long-retired traveling PowerPoint jockey, you are likely to have engrained shortcuts, rules of thumb, and a certain measure of crafty, rumor-borne trickery to avoid obligations to release company code as hippy fodder.  Dynamic not static linking.  Avoiding “distribution” in myriad ways.  Gating software releases on audit and verification.  Some of these make sense.  Some are “but I didn’t inhale”.

GPL version 3 wants more code, brings merry license pranks to the brave new world of patents, and expresses entirely new concerns.  The Affero GPL is wise to the most reliable weakness of its elder GPL siblings—sharing software as a service instead of software to install—and takes pains to shut it down in a characteristically on-message-convoluted kind of way.  The Open Software License, also in many versions, reads like a business lawyer wrote it, because one did, and carries itself straight-laced and sportsmanlike, pulling no punches and abiding no tricks.  The Reciprocal Public License, two versions, doesn’t care if you “distribute”, and wants even more code than GPL and friends.

These stronger copyleft licenses aren’t so popular as old GPLv2, but if you ask for OSI-approved, they may invite themselves to the party, too.  Mistake them for GPLv2 at the door, and they will scowl, snicker over to the drinks, nurse their rage, and eventually make a scene.

## Patent Coverage

<!--MIT, BSD-->

<!--UPL-->

## No Patent Coverage

<!--CC0, PD, Bernstein et al., don't roll your own crypto, SQLite-->

## Common Permissive Licenses

<!--diff Blue Oak and OSI-->

## Standardized Compliance

<!--CPAL, badgeware, BSD variants galore-->

<!--changes notices, patch files, name protections-->

## Legal Rigor

<!--Fair-->

## English Language

<!--LiLiQ-->

## Reluctantly: Blue Oak

<!--permissive list, ratings-->

<!--copyleft family tree-->