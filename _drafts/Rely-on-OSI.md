---
title: Don't Rely on OSI License Approval
layout: post
tags:
- Open Source
- Open Source Initiative
- Licensing
---

Relying on the Open Source Initiative approval to get the kind of software license you expect is almost always trouble.  For nearly any practical need, the OSI-approved list will green-light licenses you don't want, and red-light many you do.

![Venn Diagram](/images/want-osi-do-not-want.svg)

There valid and wise ways to rely on OSI. Especially in policy advocacy, where an old nonprofit can go and say where and what you can't.  But relying on a lay advocacy organization to approve licenses for specific legal effect is different.  It’s a type error.

I help clients draft contracts, policies, and other terms all the time.  More often than not, those terms deal with open source software.  What licenses will the developer apply to their work under contract?  What licenses can they accept for the work of others to use on the job?  What kinds of projects will a service host, or host for free?  How will a nonprofit share work they will do under a grant?

Every time I have answered such a question by referencing OSI approval, I came to regret it.  I've helped clients make others regret it, too.

Unless your purpose is to track OSI political history or bolster OSI esteem, potentially at your own expense, don't define "open source" by OSI approval in rules, and don't incorporate OSI's list of approved licenses by reference for consistency or completeness.  OSI applies analytical rigor to licenses.  But also institutional expedience, thought-leader fashion, prevailing activist strategy, and internal politics.  Expedience, fashion, activism, and politics do not leave room to correct analytical mistakes, or even to acknowledge them as such.

I have criticized the Open Source Definition and the way the Open Source Initiative claims to apply it.  I do not criticize here.  Rather, I draw attention to simple mismatches of need, purpose, and perception.

You can read nearly all licenses that OSI has approved on opensource.org. You can verify they’ve been approved for yourself.  To choose and advise on open source licenses responsibly, for specific, practical needs, we must look past how those terms and choices are presented, and contend with what they say.

## Copyleft

By far the most common misunderstanding is that all OSI-approved licenses make software available for building commercial projects, products, and services.  If that is true at all, it is only technically true, not practically.

Making it practically true has been a longtime goal of some activists working through OSI.  But they have not succeeded in convincing industry to meet all the demands of licenses approved.  If your company makes commercially available software, chances are your business model conflicts with significant OSI-approved licenses.

In particular, if you reference OSI approval expecting permissive, business-friendly terms, you may get strong, activist copyleft terms instead.  Software licensing wonks distinguish "permissive" and "copyleft" open source licenses.  You should, too.

Roughly speaking, permissive open source licenses give everyone the right to do nearly anything with software, for free.  That includes building other software that's licensed under typical commercial software license terms, as opposed to open source terms.  It includes building software that isn't licensed, or even shared, outside a company at all.

[The MIT License](https://opensource.org/licenses/MIT) is a common permissive license.

Copyleft open source licenses, by contrast, require sharing and licensing new software built with copyleft-licensed software.  Specifically, you must share code in the best way for others to make changes, and license under open source terms yourself.

[The GNU General Public License, Version 3](https://opensource.org/licenses/GPL-3.0) is a common copyleft license.

Permissive open source licenses say you can do what you like.  Copyleft open source licenses say you can do what you like, but if that includes building other software, you must share and license that software alike.  Perhaps you hadn't planned to be so generous.

Copyleft licenses differ in how much they require you to share, and when you're required to share.  But all copyleft licenses require sharing in at least some situations.  Under many copyleft licenses, it's occasionally hard to tell whether you have to share or not, even with professional help.

I wish copyleft were simpler.  I'm working on that.  I wish more people, and more businesspeople, understood how well copyleft can meet business needs, giving and receiving.  I'm working on that, too.  But if permissive open source is free candy, copyleft is a free puppy.  If you want a puppy, a puppy is great.  If you don't want a puppy, receiving a surprise one isn’t the best.

If you define acceptable licenses as whatever OSI approves, expecting permissive candy, you may receive surprise copyleft puppies.  If your company sponsors "open source" development, delivery under OSI-approved license of developer's choice, you may discover that you have to pay twice. Once to have it made unde a license you can’t accept, and again for an exception to that license’s rules, or to have the software made again from scratch.

## Vintage Copyleft

Even if you rely on OSI license approval and see copyleft coming, you may not get the copyleft you expect.  The effect can be a bit like trying marijuana for the first time since 1969.  The old stuff is still around.  But chances are good that experience will be less of a throwback to yesteryear, and more of a catapult ride to the present.

When many practitioners think copyleft, they think "GPL" or "GNU General Public License".  There are a few versions of that license, the best-known of which is version 2.  You're likely to see it.

GPLv2 got a lot of press in the late 1990s and early 2000s.  Sensational press.  At the time, straight-laced firms eyeing open source as a tune-in, drop-out threat to their order invested heavily in writing and telling very scary stories about GPLv2.  Hard-won intellectual property was throwing itself out of office windows.  The scarier the story, in general, the less likely it was to be true.

Industry concocted various coping mechanisms.  An entirely new consultative sub-practice, a licensing-industrial complex, spontaneously self-organized to sell cures for the common copyleft, in equal and opposite reaction to how terrifying it was made out to be. Some of that opportunity empowered those who knew whereof they spoke to get heard and paid for a change.  But few and cautious were the wise, many and loud were the bold, and peddlers of cartoonish compliance training, materials, and programs canvassed the land.  We are still feeling their effects.

If your compliance approach to copyleft code is really a compliance program for GPLv2 as conceived by an itinerant PowerPoint jockey in 1999, you are likely to have engrained shortcuts, rules of thumb, and certain dubiously crafty, rumor-borne trickery for avoiding obligations to release company code as hippy fodder.  Dynamic not static linking.  Avoiding "distribution" in myriad ways.  Gating software releases on audit and verification.  Some of these make sense.  Some are "but I didn't inhale".

Times have changed.  Copyleft has changed.  OSI has approved new copyleft licenses.

GPL version 3 wants more code, brings merry license pranks to the brave new world of patents, and expresses entirely new, idiosyncratic conditions.  The Affero GPL is wise to the most reliable weakness of its brethren---sharing software as a service instead of software to install---and takes pains to close the loop by tying a big new knot in it.  The Open Software License, also in many versions, reads like a business lawyer wrote it, because one did, and carries itself straight-laced and sportsmanlike, pulling no punches and abiding no tricks.  The Reciprocal Public License, in two versions, doesn't care if you "distribute", and wants even more code than GPL and friends.  It reads like a contract pasted together by a savant, because it was.

These stronger copyleft licenses aren't so popular as old GPLv2. But if you invite OSI-approved, they may welcome themselves to your party.  Mistake them for GPLv2 at the door, and they will nod politely, snicker off to the punch, nurse their rage, and eventually make a scene.

I am altogether in favor of better, stronger copyleft licenses that do what they intend, require sharing alike, and say what they mean, in terms non-wonks can manage without Motrin.  It's hardly a bad thing to understand these licenses, appreciate them, and especially to deploy them tactically, potentially with irreplaceable effect.  But the dark source of much of their power remains the element of surprise.  They are esoteric, but OSI approved.  Even many folk savvy to open source remain blissfully unaware of their innovations.  Don't get caught thinking GPLv2 vintage 1989, and contending with AGPLv3 2007.

## Patent Coverage

Permission to use software is almost always a matter of copyright law.  Less often, it is also a matter of patent law.  But when a patent does cover a program, the implications can be gravely expensive.  Avoiding patent infringement with software is low-probability, high-cost risk, and therefore essential to permission, the privilege an open software license is supposed to bestow.

Reviewing and approving licenses implies a certain amount of legal savvy.  OSI has had access to fantastic legal talent over the years, both in-house and volunteer.  But those expecting OSI-approved licenses to uniformly address the patent problem may be rudely disappointed.

The first issue is old license forms.  Many of the most popular public software licenses are also the oldest, or descended from the oldest.  "BSD" and "MIT" families of license terms come down by direct line from notices written up by university tech transfer offices in the 1980s.  Widespread legal involvement in open software, and due concern for the existence of patents, didn't make the scene until the late 1990s, around the time of OSI's formation.

These old "academic" licenses are clearly generous, but it's not clear form their texts whether such generosity extends to patents.  There is hope, in the form of various rules of background law.  But unless and until a clear case hits the record, those terms entitle users to pay lawyers to argue about implied licenses, rather a clear explicit license to rely upon without fear.

Then there's the absolute outlier, the Adaptive Public License, with this quirky check-the-box patent part:

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

Under APL, by default, you get no patent license.  And no room left to argue an implied one, either.

OSI declined to approve Creative Commons' CC0-1.0 public domain dedication for [saying "no" on patents](https://creativecommons.kemitchell.com/CC0-1.0.html#4a) without offering any box to check for "yes".  But the result for CC0 did not change the result for APL.  If you require OSI-approved thinking patents won't be a problem, a crafty counterparty can give you APL instead.

## No Patent Coverage

Relying on OSI approval on patents can not only leave you without patent protection when you expect it, it can also stop you using perfectly safe software under popular patent-less terms, when there aren't any patents to worry about.

CC0-1.0, mentioned above, is worth mentioning again.  It's a tremendously popular in academic and government circles.

Releases into the the public domain without using CC0 or any standard terms are also fairly common.  That software isn't available under an OSI-approved license.  But using it may pose essentially no risk.

## Missing Permissive Licenses

Even when software _is_ available under an explicit permissive license, OSI may not have got around to approving it.  Or OSI may have intentionally refused to approve the license, despite it being legally fine, to discourage "[license proliferation](https://opensource.org/proliferation)".

Discouraging multiple licenses that say essentially the same thing is perhaps noble.  But nobility doesn't pay when you or your team need a particular piece of software under a less-common set of terms.

As of May 4, 2019, automatically comparing [Blue Oak Council's more comprehensive permissive license list](https://blueoakcouncil.org/list) to [a data file of OSI-approved licenses](https://www.npmjs.com/package/spdx-osi) yields a hundred and twenty licenses that Blue Oak lists, but OSI hasn't approved.  That number probably isn't exact.  But it's roughly a hundred and twenty chances that OSI approval will be a speed bump for no practical reason.

## Standardized Compliance

In much the same way that many copyleft compliance programs focus specifically on GPLv2, know it or not, many standardized approaches to attribution, the terms of open source licenses that require compiling notices of license terms and copyright notices for open software, focus on typical OSI-approved requirements, without accounting for OSI-approved outliers.  Treating every license with an attribution requirement like MIT or BSD can leave you out to dry.

The clearest issues concern what OSI pejoratively calls ["badgeware" licenses](http://lists.opensource.org/pipermail/license-review_lists.opensource.org/2016-June/002851.html).  These OSI has dissed, but also paradoxically [approved](https://www.theregister.co.uk/2007/07/25/osi_socialtext_cpla/).

The most important example, the [Common Public Attribution License](https://opensource.org/licenses/CPAL-1.0), goes well beyond the typically kind of credit-and-copyright required by more typical terms:

> As a modest attribution to the organizer of the development of the Original Code ("Original Developer") ... the Original Developer may include in Exhibit B ("Attribution Information") a requirement that each time an Executable and Source Code or a Larger Work is launched or initially run (which includes initiating a session), a prominent display of the Original Developer's Attribution Information (as defined below) must occur on the graphic user interface employed by the end user to access such Covered Code (which may include display on a splash screen), if any. The size of the graphic image should be consistent with the size of the other elements of the Attribution Information. ... If the Original Code displays such Attribution Information in a particular form (such as in the form of a splash screen, notice at login, an "about" display, or dedicated attribution area on user interface screens), continued use of such form for that Attribution Information is one way of meeting this requirement for notice.

In other words, CPAL allows developers to demand opening credits in software applications, rather than mere mention in the liner notes.  This may prove an issue if you planned to put your own logo there, and haven’t any process for doing otherwise.

The OSI-approved [Attribution Assurance License](https://opensource.org/licenses/AAL) is quirkier still, leveraging cryptography to ensure the author gets exactly the credit they require:

> Redistributions of the Code in binary form must be accompanied by this GPG-signed text in any documentation and, each time the resulting executable program or a program dependent thereon is launched, a prominent display (e.g., splash screen or banner text) of the Author's attribution information, which includes: (a) Name ("AUTHOR"), (b) Professional identification ("PROFESSIONAL IDENTIFICATION"), and (c) URL ("URL").

Placing these credits in a "legal notices" list or "open source disclosure" won't cut it.

There are other footguns, often requiring the distribution of specific files.  `the_frameworx_license.txt` under the [Frameworx Open License 1.0](https://spdx.org/licenses/Frameworx-1.0.html).  `NOTICES` under the [Apache License, Version 2.0](http://opensource.org/licenses/Apache-2.0),  favorite piece of expert trivia.  `license.txt` under [APL](https://opensource.org/licenses/APL-1.0) again.  And on the licensor side of things,`manifest.txt` under the [LaTeX Project Public License, Version 1.3c](https://opensource.org/licenses/LPPL-1.3c), complete with a scary (and dubious) warning that if you don't provide one, "the licensee would be entitled to make reasonable conjectures as to which files comprise the Work."

You may expect such abberrations in your mental model of what OSI has approved. But that is for naught if the process you or your charges follow fails to account for them.  Disputes on matters of credit especially have a tendency to become indignant and ego-charged.

## Legal Rigor

I've mentioned above that not all OSI-approved licenses handle patents responsibly.  Alas, OSI has approved at least one license that, to my US-legal eye, fails to handle much of anything rigorously at all.

With sincerest respect to its lay author, whose heart was in just the right place, promoting plain brevity in legal terms, the [Fair License](https://opensource.org/licenses/Fair) cuts past the quick.  As open software licenses go, Fair seems to want to do the right thing, but fails to say the right words to do it.  In its entirety:

> &lt;Copyright Information&gt;
>
> Usage of the works is permitted provided that this instrument is retained with the works, so that any entity that uses the works is notified of this instrument.
>
> DISCLAIMER: THE WORKS ARE WITHOUT WARRANTY.

This is what some OSI participants pejoratively term a "crayon license".  I have no doubt that the license author will not be suing or threatening anyone for their work under these terms.  But the appearance of Fair in the wild brings no guarantee of similar intentions.

Like other outliers among OSI-approved licenses, Fair's weakness is both an excusable and an exploitable flaw.  For example, I could make an argument that Fair does not allow making changes to software licensed.  No one expecting “open source” should have to hear that argument made.

## English Language

If you were thinking, worse comes to worst, you can always just buckle down and review OSI-approved terms yourself, you ought to be aware of three licenses in French: Licence Libre du Québec [Permissive](https://opensource.org/licenses/LiLiQ-P-1.1), [Réciprocité](https://opensource.org/licenses/LiLiQ-R-1.1), and [Réciprocité forte](https://opensource.org/licenses/LiLiQ-Rplus-1.1).  Translations are provided, but OSI’s pages make clear those translations aren’t OSI approved.

I donn’t read French, and can’t tell you what the original texts mean, much less under Quebec law, which I don’t practice. Perhaps it couldn't be worse than the worst English drafters got approved.  But if I were going to pick a kind of license to read in a second language, it wouldn't be subtitled, I think, "reciprocal strong".  The trickiest kind there is.

I've been able to feel st home in three natural languages.  I'm best at English, but it's by far my least favorite.  I strongly support the creation and use of open source licenses for and from other language communities, as a matter of principle.  But principle is far as I can go.  I can schmooze over [Lorca](https://en.wikipedia.org/wiki/Lorca) or [Borges](https://en.wikipedia.org/wiki/Jorge_Luis_Borges), flip through [Bely](https://en.wikipedia.org/wiki/Andrei_Bely) or [Blok](https://en.wikipedia.org/wiki/Blok).  But I couldn’t advise clients on complex license terms in those languages.

Perhaps:

> any license approved by the Open Source Initiative in English or official English translation

But I've never seen that in the wild.  And it's still over- and under-inclusive, for all the rest of then reasons above.

## Alternatives

In my experience, most folks who don’t already know about aberrations on OSI’s approved license list say “open source” and want something more specific: permissive public software licenses they can handle in essentially the same way.

Blue Oak Council, a nonprofit council of open licensing lawyers I recently helped to create, came together around shared need for [a list of just such licenses](https://blueoakcouncil.org/list). When advising small and nonprofit companies, whether on compliance, grant, or contract terms, my colleagues and I routinely sought approaches to open source licensing that unlock 90% of the value of open source without the 10% of edge cases.

A published, updated license list was the missing building block. We each had our own incomplete version. Those turned out to be almost completely consistent, lawyer to lawyer, and therefore easy to combine and refine. And also to show in action, in [example language for various kinds of terms](https://blueoakcouncil.org/examples), from sample company policies to contract snippets.

Encouraged by that successs, we’re exploring similar materials on copyleft licenses. I hope we will have a similar list and examples to share for those interested in copyleft soon.

For the sake of completeness, however, I’ll end not with embracing copyleft complexity, but the opposite. Consider whether for your particular need, simple availability of the software or its source code, or willingness to share it, is enough.

This has been the approach of current-generation software development services, like GitHub, Travis CI, and npm, from very early on. Nearly all of these providers encourage standardized licensing, including under OSI approved terms. But their requirements for free service dodged the question of license terms altogether. If that works for your need as well, it is far easier to express and administer. 

Every long-working open source developer can tell sad stories of good code found on the Web, abandoned without sign of any license, that could have been part of something greater, but languished in permissionless obscurity instead. Those are real costs, or rather losses of real value that otherwise could have been.

At the same time, many platforms that welcome public but licenseless code also welcome the lion’s share of new open source developers. By inviting new talent to explore licensing when it’s ready, rather than turning it away by imposing compliant license choice as a condition of entry, these platforms may in fact foment more licensed work overall, as larger matriculating classes of newbies yield larger cohorts of seasoned, license-informed developers over time.

What approach seems best to you, for your needs, for contribution to a greater open source movement or effort, or both, is up to you. When you make such a choice, no matter the nature and balance of your motives, I think open software is best served by s minimum of unwelcome legal surprises. I hope these notes have helped you along the way.