---
title: "#wontfix"
description: endorsements can't fix the Open Source Definition
layout: post
tags:
- Open Source
- Free Software
- Licensing
---

<aside class="brief" markdown="1">
The Open Source Initiative's Open Source Definition isn't a rigorous, technical definition of open source.  In reality, the Definition, clothed in the technical language of standards, mislead others about how OSI approves licenses, and what approval means.
</aside>

The trouble with [affirming](https://opensource.org/OSD_Affirmation) the Open Source Initiative's [Open Source Definition](https://opensource.org/osd) is that it is not a good definition.  Open source has done well despite it, not because of it.

Even if you think OSI wants to define "open source" in the right way---more [controversial](https://twitter.com/monkchips/status/247584170967175169), both [inside](https://wiki.opensource.org/bin/Main/Open+Source+Initiative+Working+Groups/Beyond+Licensing+Working+Group+Proposal/) and [outside](https://medium.com/@nayafia/i-hate-the-term-open-source-a65fd481a95) OSI, than some care to admit---the definition OSI has isn't precise in any technical sense, and certainly not up to any legal standard.  It doesn't settle important controversies like [how strong open source copyleft licenses can be](https://writing.kemitchell.com/2018/11/05/OSD-Copyleft-Regulation.html) or [whether open source licenses have to cover patents](http://stlr.org/2018/10/15/the-truth-about-oss-frand-by-all-indications-compatible-models-in-standards-settings/), on its own, as written.  Instead of reducing political spats to workable technical problems, the Open Source Definition injects drama, ego, confusion, and citations to unwritten and contested history into even pretty boring licensing discussions.

That shouldn't surprise anyone.  We can't `git log -p` the Open Source Definition, but if we could, we'd see that the text was substantially the work of a single author, more than twenty years ago, and hasn't really changed since.  When big questions come up---government open source, academic tech transfer, standards implementations, patent troll risk, attribution experiments, network copyleft, private changes, service wrapping---the Open Source Definition does not change.  Year after year, as well meaning folks propose one forbidden [ethical license](https://en.wikipedia.org/wiki/Hacktivismo_Enhanced-Source_Software_License_Agreement) after another, seeing no rule against, the Open Source Definition does not change.  Software _law_ changes faster.

The Open Source Definition is essentially unmaintained.  There has been no release for more than a decade.  As a consequence, like the core team of an old, legacy software project that won't [update its doc](https://opensource.org/approval), won't move off [mailing lists](https://opensource.org/lists), and keeps getting duplicate bugs, the Open Source Initiative feels ever more overwhelmed, and complains ever more loudly that it is overburdened, underappreciated, and even under threat by newcomers with new ideas, not steeped in internal lore.  Software projects tumble down that spiral all the time.  We know it well.

Consider the history.  Bruce Perens wrote the [Debian Free Software Guidelines](https://www.debian.org/social_contract#guidelines), part of the [Debian Social Contract](https://www.debian.org/social_contract), and was invited to adapt it to the Open Source Definition for OSI.  For Debian, Bruce essentially abstracted the popular free software licenses of the time, which he helpfully listed in section 10 of the Guidelines: GPLv2, BSD, and Perl's Artistic License.  OSI made a few small changes early in its history, tacking licenses like MPL, QPL, and LGPL onto the list of examples, and explaining that it would certify other terms, until eventually pulling [its license list](https://opensource.org/licenses) out into a separate document.  A few inconsequential tweaks followed, apparently to stop pedants nitpicking GPL.  In 2007, OSI made its last and arguably only truly significant change, adding a replacement section 10 with [the technology-neutrality requirement](https://opensource.org/osd#technology-neutral) we see today.

What we see today has obvious problems.  The kind of obvious problems that inevitably crop up in the early drafts of _any_ operative document, when new eyes and new questions first come in to refine it.  What's [criterion 2](https://opensource.org/osd#include-source-code) doing in a set of rules for license terms?  What does "[derived work](https://opensource.org/osd#derived-works)" mean?  (The legal term of art is different.)  How do copyleft licenses follow the nondiscrimination rules, when RMS [says he wrote GPL to discriminate against closed development](https://www.gnu.org/philosophy/pragmatic.en.html)?

The Open Source Definition won't tell you, but folks involved with the Open Source Initiative will try.

Most of the OSI Board's [published affirmation](https://opensource.org/OSD_Affirmation) gushes spurious analogies to standards that _do_ meet technical and legal standards of rigor and _don't_ need authoritative explication, blanket assertions that progress and trust are impossible in open source without consensus around such a rigorous standard, though that's exactly the story of the last ten years, and a baffling theory of how words develop meaning that could drive [a dedicated lexicographer](https://www.youtube.com/watch?v=5EeQEqqj-dI) to drink.  But the final word isn't about the Definition, but the Open Source Initiative itself:

> We pledge to guard and maintain the Open Source Definition and we recognize the Open Source Initiative as the steward of the Open Source Definition.

_Stewardship_, at its best, evokes caretaking, cultivation, maintenance.  _Authority_, by contrast, denotes the power to speak resolutions to disputes, and force those disputing to accept them.  One can become a steward, or hold authority, on behalf of another, or on behalf of the public at large.  But the roles fundamentally differ.  Especially when authority means _final_ authority.

The Open Source Initiative's affirmation asks us to acknowledge the Open Source Definition for technical rigor, which it doesn't deserve.  The affirmation also asks for submission to the authority of Open Source Initiative personalities and process to say what the Definition does not.  Whether they deserve that or not is up to you.  But that's not a technical call.  It's a political one.

Open source software is a phenomenon of software, and software culture does everything it can to couch politics in more comfortable technical terms.  But pretending the Open Source Definition is rigorous, and that the Open Source Initiative guards that rigor, rather than its prerogative to govern from authority without reducing its rules to writing, is simply inaccurate.  Inaccurate statements to the public for effect are misleading.  Misleading people is wrong.

It doesn't matter if OSI has achieved internal consensus.  It has done so not just by attracting those who agree, but also by driving off a great many who do not, [like me](http://lists.opensource.org/pipermail/license-review_lists.opensource.org/2019-February/003978.html), by attrition.  The rules of that consensus can't be audited, improved, or readily forked by others.  They are, in that sense, proprietary.  And that is wrong.

To defend that consensus, make it a public consensus.  Write it out transparently, and invite improvements.  Don't overlay still more vague concepts, as by [adding "software freedom" to the mix](http://lists.opensource.org/pipermail/license-discuss_lists.opensource.org/2018-December/020157.html) without saying what that means or acknowledging that its principal exponent [dislikes you](https://www.gnu.org/philosophy/open-source-misses-the-point.en.html).  Don't preserve a vague document out of fear that a better one will be [gamed](http://lists.opensource.org/pipermail/license-review_lists.opensource.org/2017-October/003198.html), or remove all demand for a priesthood.  Fortunately, that's not how [openness](https://www.rosenlaw.com/oslbook.htm) [works](https://www.amazon.com/dp/B06ZYZY8W6/).

Compare the approach of Debian's legal review process.  Debian license review is _less_ legal-technical than either OSI's or FSF's.  That creates its own problems.  But taking a hint from their draft FAQ, consider how differently they describe their work:

> Q: How can I tell if a license is a free software license, by Debian's standards?
>
> A: The process involves human judgement.  The DFSG is an attempt to articulate our criteria.  But the DFSG is not a contract.  This means that if you think you've found a loophole in the DFSG then you don't quite understand how this works.  The DFSG is a potentially imperfect attempt to express what free software means to Debian.  It is not something whose letter we argue about. It is not a law.  Rather, it is a set of _guidelines_.
>
> ...

Recall that the Debian Free Software Guidelines and Open Source Definition differ by a handful of small patches.  Renaming from "Guidelines" to "Definition" and cloaking in technical rigor didn't coincide with any fundamental change of content.  But Debian and OSI approaches to that content differ markedly.

All of this is criticism.  I am criticizing the Open Source Initiative.  But it's obvious how to make that criticism constructive.

The Open Source Initiative should kick off a public project to rewrite the Open Source Definition _as a definition_, and open it up to outside contribution.  I would gladly participate in that process.  I will not participate, or affirm, the process OSI offers now.

If OSI cannot or will not step up to its technocratic aspirations, it should at least conduct its political work forthrightly.  Shut down the license-review process, relieving all the sentinels watching the [mailing list](http://lists.opensource.org/pipermail/license-review_lists.opensource.org/) only for fear the org will approve something daft under the vague Definition.  Declare that "open source" was a broad-based movement of the late 1990s and early 2000s that achieved widespread corporate acceptance in the 2010s under MIT, BSD-{2,3}-Clause, Apache 2.0, GPLv2, (A)GPLv3, and a few more niche, foundation- and language-specific forms.  Let new licenses and new communities vie in the court of public opinion for the right to inherit that mantle, as OSI vied in the court of public opinion to establish it.

There is plenty else for OSI to do.

## Postscript

This post was originally written in early March of 2019.  I held it back for a couple reasons.  First, OSI was then involved in board elections, and I didn't want to further inflame that process.  Second, I was in the process of launching [Blue Oak Council](https://blueoakcouncil.org) with colleagues, an unrelated project that I feared might be unavoidably associated with this post, if they appeared at the same time.

I circulated this post privately, and received great response, but still thought best to delay publication.  I've never done that before.
