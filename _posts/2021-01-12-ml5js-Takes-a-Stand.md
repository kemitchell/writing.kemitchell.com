---
title: ml5.js Takes a Stand
description: a code of conduct with teeth, in the wild
date: Tue 12 Jan 2021 03:56:51 PM PST
tags:
- Open Source
- Licensing
- Ethics
- Ethics Licenses
---

Thanks to [Michael Weinberg's blog](https://michaelweinberg.org/blog/2021/01/12/ml5-call-for-comment/), I learned today that [ml5.js](https://ml5js.org/), a machine learning library project, has implemented a new ethical licensing strategy.  Their new license requires users to abide by their code of conduct, backed by a committee with final word on reported violations.  The license also implements automatic relicensing onto fully permissive terms over time.

I couldn't be happier to see this.

For one, I've been waiting for the historical barrier between license terms and codes of conduct to fall.  My best stab at encouraging and guiding folks to do ethical licensing well, [a post back in March of 2019](https://writing.kemitchell.com/2019/03/15/Ethical-Subcommons.html), specifically advocated development of a separate document expressing matters of conscience, plus enforcement "hooks" in the license terms, among other places.  I was especially glad to see a project taking this approach, which in my experience does worlds of good investing participants with agency and self-determination.

I did some speculative work in this direction myself.  My [Normally Open and Normally Closed license templates](https://github.com/berneout/normally-open-closed) separated the legal framework of license terms from fill-in-the-blanks for the content of the dos and don'ts, so folks without legal chops could more easily express their terms.  [Icepick](https://icepicklicense.org/) generalized "software freedom" beyond any specific legal concept or means of software composition, leveraging a single governing text as both license conditions and "terms of use" for those providing services with the software.  But none of these projects came out of a collaborative project of giving voice to an existing community of conscience.  That's what ml5.js has done.

For two, ml5.js started with the [Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0), making a few key additions from that very hackable base:

> ## License Reversion
>
> Each contribution to this software is licensed under this license for three years from the date it is contributed to the software. After that three year period the contribution is licensed under the MIT license.

This new section implements [Business Source License](https://spdx.org/licenses/BUSL-1.1.html)-esque timed, automatic release on permissive terms.

I had a good chuckle about the fact that the team chose Blue Oak as starting point for their new license, but chose automatic release on MIT terms, rather than Blue Oak.  Name rec is name rec!

> ## Code of Conduct
>
> You must use this software in compliance with the ml5.js Code of Conduct as it exists at the time of your use. This includes cooperating with any investigations of your compliance with the ml5.js Code of Conduct.

The hook!  Rather than just waving its code of conduct around like a moral flag, ml5.js has decided to put their leverage as copyright holders behind it.  There are also some interesting choices here.  I would read this to require staying up to date on changes to the code of conduct, for example.  If you download the software on January 1, the code of conduct changes in February, and you use the software in violation of the new February code in March, I could see you getting notice of a violation.

Cooperation with investigation is also a nice touch.  I don't believe that's come up in any of my own conversations, sketches, or notes.  It should definitely be on the checklist of decisions for others projects following ml5's path.

> ## Excuse
>
> [First paragraph as in Blue Oak. Then:]
>
> If anyone notifies you in writing that you have not complied with the Code of Conduct, you can keep your license by taking all practical steps to comply within 30 days after the notice. If you do not do so, and the ml5.js Code of Conduct Committee (or its equivalent or successor) agrees that you are in violation of the Code of Conduct, your license ends immediately.

The team was also able to read through the Blue Oak license and understand where they needed to make further tweaks, beyond just adding the new rules they wanted to add.  That wouldn't have happened if they weren't paying close attention.  But I like to think the Blue Oak license's brevity made the job easier.

The project's draft [code of conduct](https://github.com/ml5js/Code-of-Conduct/blob/main/README.md) also bespeaks some familiarity with problems of drafting, interpretation, and enforcement.

All in, an impressive package.  This is a project thinking deeply not just about the community they want, but how to get it, and how to protect it.
