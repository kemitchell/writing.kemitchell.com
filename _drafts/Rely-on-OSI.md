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

There valid and wise ways to rely on OSI. Especially in policy advocacy, where an old nonprofit can go and say where and what you can't.  But relying on a lay advocacy organization to approve licenses for specific, practical effect is different.  In the jargon, it's a type error, a round peg that happens to fit, badly, in a square hole.

I help clients draft contracts, policies, and other terms all the time.  More often than not, those terms deal with open source software.  What licenses will the developer apply to their work under contract?  What licenses can they accept for the work of others they will use on the job?  What kinds of projects will a service host, or host for free?  How will a nonprofit share work they will do under a grant?  If programmers want to use software they find online under free-of-charge licenses, which are okay, which aren't, and which require special review?

Every time I have answered those questions by referencing OSI approval, I have come to regret it.  I've helped clients make others regret it, too.

Unless your purpose is to track OSI political history or bolster OSI esteem, potentially at some expense to yourself, don't define "open source" by OSI approval in rules, and don't incorporate OSI's approved list by reference for consistency or completeness.  OSI applies analytical rigor to licenses.  But also political expedience, though-leader fashion, and prevailing activist strategy.  Political expedience, thought-leader fashion, and prevailing activist strategy do not afford much chance to correct, or even agree on, which approvals were actually bereft of analytical rigor.

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

Permissive open source licenses say you can do what you like.  Copyleft open source licenses say you can do what you like, but if you build other software, you must share and license that software alike.  Perhaps you hadn't planned to be so generous.

Copyleft licenses differ in how much they require you to share, and when you're required to share.  But all copyleft licenses require sharing in at least some situations.  Under many copyleft licenses, it's occasionally hard to tell whether you have to share or not, even with professional help.

I wish copyleft were simpler.  I'm working on that.  I wish more people, and more businesspeople, understood how well copyleft can meet business needs, giving and receiving.  I'm working on that, too.  But if permissive open source is free candy, copyleft is a free puppy.  If you want a puppy, a puppy is great.  If you don't want a puppy, receiving one as a surprise ain't the best.  Puppies need food, love, and house training.

If you define acceptable licenses as whatever OSI approves, expecting permissive candy, you may receive surprise copyleft puppies.  I have seen companies sponsor "open source" development, delivery under OSI-approved license of developer's choice, only to discover they had to pay the same developer again to use the work without sharing their product code as open source.  Oops.

## Vintage Copyleft

Even if you rely on OSI license approval and see copyleft coming, you may not get the copyleft you expect.  The effect can be a bit like trying weed for the first time since 1969.  The old stuff is still around, nostalgic, authentic.  But fair chance, your first hit in a long time will be less of a throwback to yesteryear, and more of a slingshot ride to the present.

When many practitioners think copyleft, they think "GPL" or "GNU General Public License".  There are a few versions of that license, the best-known of which is version 2.  You're likely to see it.

GPLv2 got a lot of press in the late 1990s and early 2000s.  Bad press.  Sensational press.  At the time, straight-laced firms eyeing open source as a tune-in, drop-out threat to their order invested heavily in writing, telling, and spreading scary stories about GPLv2.  Hard-won intellectual property was throwing itself out of office windows, apparently.  The scarier the story, in general, the less likely it was to be true.  But the aftershocks of that psyop are still felt, like shudders of anxiety through a traumatized nation.

As industry is and industry does, coping mechanisms were concocted.  An entirely new consultative sub-practice, a licensing-industrial complex, spontaneously self-organized to sell cures for the common copyleft, in equal and opposite reaction to how terrifying it was made out to be. Some of that opportunity empowered those who knew whereof they spoke to be heard and paid for a change.  But few were the wise, many and loud were the bold, and peddlers of cartoonish compliance training, materials, and programs canvassed the land.  We are still feeling their effects, too.

If your compliance approach to copyleft code is really a compliance program for GPLv2 as conceived by a pensioning PowerPoint jockey, you are likely to have engrained shortcuts, rules of thumb, and a certain measure of crafty, rumor-borne trickery to avoid obligations to release company code as hippy fodder.  Dynamic not static linking.  Avoiding "distribution" in myriad ways.  Gating software releases on audit and verification.  Some of these make sense.  Some are "but I didn't inhale".

Times have changed.  Copyleft has changed.  OSI has approved new copyleft licenses.

GPL version 3 wants more code, brings merry license pranks to the brave new world of patents, and expresses entirely new, idiosyncratic conditions.  The Affero GPL is wise to the most reliable weakness of its kind---sharing software as a service instead of software to install---and takes pains to close the loop by tying one big, clever knot in it.  The Open Software License, also in many versions, reads like a business lawyer wrote it, because one did, and carries itself straight-laced and sportsmanlike, pulling no punches and abiding no tricks.  The Reciprocal Public License, two versions, doesn't care if you "distribute", and wants even more code than GPL and friends.  It reads like a contract pasted together by a savant, ransom-note style, because it was.

These stronger copyleft licenses aren't so popular as old GPLv2, but if you invite OSI-approved, they may arrive at your party.  Mistake them for GPLv2 at the door, and they will nod politely, snicker off to the punch, nurse their rage, and eventually make a scene.

I am altogether in favor of better, stronger copyleft licenses that do what they intend, require sharing alike, and say what they mean, in terms non-wonks can manage without Motrin.  It's hardly a bad thing to understand them, appreciate them, and especially to deploy them tactically yourself, sometimes with fantastic effect.  But the darker part of their power is the element of surprise.  Esoteric, but approved.  Even many fine folk savvy to open source often remain blissfully unaware of their innovations.  Don't get caught thinking GPLv2 vintage 1989, and contending with AGPLv3 2007.

## Patent Coverage

Permission to use software is almost always a matter of copyright law.  Less often, it is also a matter of patent law.  But when a patent does cover a program, the implications can be gravely expensive.  Avoiding patent infringement with software is low-probability but high-cost, and therefore essential to permission, the privilege an open software license is supposed to bestow.

Reviewing and approving licenses implies a certain amount of legal savvy.  OSI has at times had access to fantastic legal talent, both in-house and from volunteers.  But those expecting OSI-approved licenses to uniformly address the patent problem may be rudely disappointed.

The first issue is old license forms.  Many of the most popular public software licenses are also the oldest, or descended from the oldest.  "BSD" and "MIT" families of license terms come down by direct line from notices written up by university tech transfer offices in the 1980s.  Widespread legal involvement in open software, and due concern for the existence of patent law, didn't make the scene until the late 1990s, around the time of OSI's formation.

These old "academic" licenses are clearly generous, but it's not clear form their texts whether such generosity extends to patents.  There is hope, in the form of various rules of background law.  But unless and until a clear case hits the record for MIT or BSD, those terms entitle users to pay lawyers to argue implied license, not to proceed without legal fear.

Then there's the inevitable absolute outlier, the Adaptive Public License, with this quirky check-the-box patent part:

> ## Part 6: Patent Licensing Terms
>
> For the purposes of this License, paragraphs A, B, C, D and E of this Part 6 of Exhibit A are only incorporated and form part of the terms of the License if the Initial Contributor places an "X" or "x" in the selection box alongside the YES answer to the question immediately below.
>
> Is this a Patents-Included License pursuant to Section 2.2 of the License
>
> YES `[ ]`
>
> NO `[ ]`

And the kicker:

>  By default, if YES is not selected by the Initial Contributor, the answer is NO.

Under APL, by default, you get no patent license.  And no room left to imply one, legally.

OSI declined to approve Creative Commons' CC0-1.0 public domain dedication for [saying "no" on patents](file:///home/kyle/creativecommons.kemitchell.com/CC0-1.0.html#4a) without offering any box to check for "yes".  But the result for CC0 did not change the result for APL.

If you require OSI-approved thinking patents won't be a problem, a crafty counterparty can give you APL instead.

## No Patent Coverage

<!--CC0, PD, Bernstein et al., don't roll your own crypto, SQLite-->

Relying on OSI approval on patents can not only leave you without patent protection when you expect it, it can also stop you using perfectly safe software under popular patent-less terms, when there aren't any patents to worry about.

CC0-1.0, mentioned above, is worth mentioning again.  It's a tremendously popular in academic and government circles.

Releases into the the public domain without using CC0 or any standard terms are also fairly common.  That software isn't available under an OSI-approved license.  But using it may pose essentially no risk.

## Missing Permissive Licenses

Even when software _is_ available under an explicit permissive license, OSI may not have got around to approving it.  Or OSI may have declined to approve the license, despite it being legally fine, to discourage "[license proliferation](https://opensource.org/proliferation)".

Discouraging multiple licenses that say essentially the same thing is noble.  But nobility doesn't pay when you or your team need a particular piece of software under a less-common set of terms.

As of May 4, 2019, automatically comparing [Blue Oak Council's more comprehensive permissive license list](https://blueoakcouncil.org/list) to [a data file of OSI-approved licenses](https://www.npmjs.com/package/spdx-osi) yields a hundred and twenty licenses that Blue Oak lists, but OSI hasn't approved.  That number probably isn't exact.  But it's roughly a hundred and twenty chances that OSI approval will be a speed bump for no practical reason.

## Standardized Compliance

In much the same way that many copyleft compliance programs focus specifically on GPLv2, know it or not, many standardized approaches to attribution, or compiling notices of license terms and copyright notices for open software, focus on typical OSI-approved attribution requirements, without accounting for OSI-approved outliers.  Treating every license with an attribution requirement like MIT or BSD can leave you out of compliance.

The clearest issues concern what OSI pejoratively calls ["badgeware" licenses](http://lists.opensource.org/pipermail/license-review_lists.opensource.org/2016-June/002851.html).  Indeed, these have dissed, and then [approved](https://www.theregister.co.uk/2007/07/25/osi_socialtext_cpla/).

The most important example, the [Common Public Attribution License](https://opensource.org/licenses/CPAL-1.0), goes well beyond the typically anemic kind of credit-and-notice required by academic terms:

> As a modest attribution to the organizer of the development of the Original Code ("Original Developer") ... the Original Developer may include in Exhibit B ("Attribution Information") a requirement that each time an Executable and Source Code or a Larger Work is launched or initially run (which includes initiating a session), a prominent display of the Original Developer's Attribution Information (as defined below) must occur on the graphic user interface employed by the end user to access such Covered Code (which may include display on a splash screen), if any. The size of the graphic image should be consistent with the size of the other elements of the Attribution Information. ... If the Original Code displays such Attribution Information in a particular form (such as in the form of a splash screen, notice at login, an "about" display, or dedicated attribution area on user interface screens), continued use of such form for that Attribution Information is one way of meeting this requirement for notice.

In other words, CPAL allows developers to demand opening credits, rather than merely mere mention in liner notes.

The OSI-approved [Attribution Assurance License](https://opensource.org/licenses/AAL) is quirkier still, leveraging cryptography to ensure the author gets exactly the credit they require:

> Redistributions of the Code in binary form must be accompanied by this GPG-signed text in any documentation and, each time the resulting executable program or a program dependent thereon is launched, a prominent display (e.g., splash screen or banner text) of the Author's attribution information, which includes: (a) Name ("AUTHOR"), (b) Professional identification ("PROFESSIONAL IDENTIFICATION"), and (c) URL ("URL").

Placing these credits in a "legal notices" list or "open source disclosure" won't cut it.

There are other footguns, often requiring the distribution of specific files.  `the_frameworx_license.txt` under the [Frameworx Open License 1.0](https://spdx.org/licenses/Frameworx-1.0.html).  `NOTICES` under the [Apache License, Version 2.0](http://opensource.org/licenses/Apache-2.0), which everyone thinks they understand.  `license.txt` under [APL](https://opensource.org/licenses/APL-1.0).  And on the licensor side of things,`manifest.txt` under the [LaTeX Project Public License, Version 1.3c](https://opensource.org/licenses/LPPL-1.3c), complete with a scary (and dubious) conclusion that if you don't provide one, "the licensee would be entitled to make reasonable conjectures as to which files comprise the Work."

## Legal Rigor

I've mentioned above that not all OSI-approved licenses handle patents responsibly.  Alas, OSI has approved licenses that, at least to my US-legal eye, do not seem to handle much of anything responsibly.

With sincerest respect to its lay author, whose heart is in the right place, promoting plain, clear legal terms, [as I do](https://blueoakcouncil.org/license/1.0.0), the [Fair License](https://opensource.org/licenses/Fair) cuts too deep and too long.  As open software licenses goes, it seems to want to do the right thing, but fails to say the right words to do it.  In its entirety:

> &lt;Copyright Information&gt;
>
> Usage of the works is permitted provided that this instrument is retained with the works, so that any entity that uses the works is notified of this instrument.
>
> DISCLAIMER: THE WORKS ARE WITHOUT WARRANTY.

This is what some OSI participants pejoratively term a "crayon license".  I have no doubt that the license author will not suing anyone for anything related to work under these terms.  But the appearance of Fair in the wild does nothing to guarantee good licensor intentions.  Like other outliers among OSI-approved licenses, Fair's weakness is both an excusable and an exploitable flaw.

## English Language

If you were thinking, worse comes to worst, you can always just read the terms OSI approved, I hope that you read French.  See Licence Libre du Québec [Permissive](https://opensource.org/licenses/LiLiQ-P-1.1), [Réciprocité](https://opensource.org/licenses/LiLiQ-R-1.1), and [Réciprocité forte](https://opensource.org/licenses/LiLiQ-Rplus-1.1).  It couldn't possibly be worse than the rat's nests some English drafters have got approved.  But if I were going to pick a kind of license to read in adopted cant, it wouldn't be "reciprocal strong".

I've had the opportunity to command three natural languages in my life.  I'm best at English, but it's by far my least favorite.  I could not stand more in favor of open source licenses for and from other language communities, as a matter of principle.  But only as a matter of principle.  I'm competent to schmooze over [Lorca](https://en.wikipedia.org/wiki/Lorca) or [Borges](https://en.wikipedia.org/wiki/Jorge_Luis_Borges), find fire and ice in [Bely](https://en.wikipedia.org/wiki/Andrei_Bely) or [Blok](https://en.wikipedia.org/wiki/Blok).  But not to advise clients on complex license terms in those languages.

Perhaps:

> any license approved by the Open Source Initiative in English or official English translation

But I've never seen that in any legal terms.

## Enthusiastically: Blue Oak

<!--permissive list, ratings-->

<!--copyleft family tree-->

## Flippantly: Public

<!-- GitHub, Travis CI -->
