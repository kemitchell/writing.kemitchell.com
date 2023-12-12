---
title: Indemnify Developers?
description: James Bottomley on liability and politics
tags:
- Open Source
- Security
- Open Licensing
---

If you read this blog for open software licensing and politics, have a look at James Bottomley's latest, ["Solving the Looming Developer Liability Problem"](https://blog.hansenpartnership.com/solving-the-looming-developer-liability-problem/).  James shares his view of why open software licenses have warranty disclaimers, how open source went from amateur to commercial, how the recent lawsuit against Bitcoin developers fits in, and what it all means for potential new laws like the EU's Cyber Resilience Act.  Then he reminds us of section 9 of the Apache License and proposes that open developers expand on it to require that users or financially cover them for legal liabilities from use of their work.

A few thoughts came to mind as I read James' post.

## Perception

I see public perception much the way James does.  From the outside looking in, open source is just another tool of the software industry.  From the inside, many of us want to quibble, but outside perception is predominantly correct.

We should not expect special dispensation for some subset of software people who claim to be true friends of the common man.  That has not been earned.

## Exception

I don't think distinguishing individual-developer and commercial-company work is too subtle for lawmakers.  It's just not the line they or their constituents care to draw.  The distinction the draft Cyber Resilience Act already makes is actually far more nuanced.  Here's recital 10:

> In order not to hamper innovation or research, free and open-source software <mark>developed or supplied outside the course of a commercial activity</mark> should not be covered by this Regulation.  This is in particular the case for software, including its source code and modified versions, that is openly shared and freely accessible, usable, modifiable and redistributable.  In the context of software, <mark>a commercial activity might be characterized not only by charging a price for a product</mark>, but also by charging a price for technical support services, by providing a software platform through which the manufacturer monetises other services, or by the use of personal data for reasons other than exclusively for improving the security, compatibility or interoperability of the software.

Plenty of solo-developer work is "commercial", or wants to be.  If it succeeds, it will mostly be used in business, and its maintainers will stand to reap professional and indirectly financial rewards.

Whether the first commit is made by a developer at work or the same developer after hours, angling to become their own boss, isn't meaningful.  Neither is whether the work's given away for payment, data, or strategic advantage.  EU drafters have heard and understood "if the product's free, _you_ are the product" and put it in their own words.

## Necessary Alliance

Since I don't see the legislative process as incapable of or remotely interested in making the distinction James wants, I don't see, as James does, that "individual developer Open Source has to make common cause with commercial Open Source to solve" perceived overreach of the regulation.  Moreover, I don't see what "commercial Open Source" has to gain from teaming up with a bunch of relatively unorganized, little-resourced engineering types, unless it really thinks it could get an exemption for _all_ open code, even commercial, which seems highly unlikely.  Especially given what's already in the draft.

I agree with James that it's popular to dump on "corporations", and that, given a choice, even open developers occupying houses purchased on a payroll will prefer to see and describe themselves as "independent", seconded "community" members, rather than "corporate developers".  In most contexts, there are easy points to be scored elbow-jabbing "corporate", and everyone knows it.  But the vast majority of corporations and other kinds of legal entities are tiny.  The point of them is exactly to [limit personal liability](https://en.wikipedia.org/wiki/Limited_liability) of a few participants, not receive money shots from public or private investors.  Developers seriously concerned about personal liability for their open work who don't want to work for someone else's company would do well to consider forming their own.

## Indemnity

James rightly points out that indemnities are an established and familiar mechanism for moving liability from where the law puts it to where it economically belongs.  But the approach he proposes---having users indemnify developers of open code---wires that system up backwards.

Those best informed, able, and empowered to assess and address security and quality risks in a software project are its developers.  That's reflected in supply chains, which [use contract terms to put suppliers on the hook for customer problems caused by their products](https://writing.kemitchell.com/2023/02/23/Unsolved-Security), not just through support and maintenance obligations, but indemnities.  If your friend offered you their old car for free, but required you to absolve and financially cover them for any injury to you or others caused by driving it, would you still take the car?  Would you assume it's a joke?  The [moral hazard](https://en.wikipedia.org/wiki/Moral_hazard) is so obvious, it's humorous.

All of this comes across every day in business-to-business software buying.  Indemnities, and especially indemnities without any dollar limit, immediately and reliably raise red flags to buyers.  What indemnities cover and how they're limited are reliable issues in negotiations.

It's no answer here to say that contributors still stake their reputations.  That's true, but only underscores the fundamental polarity of who-stakes-what.  The "defaults" of our social system wire up reputational risk the right way, and licenses don't require users to hire public relations firms to protect the reputations of contributors to faulty or vulnerable projects.  Some licenses _do_ have protections for contributor reputation---[the third BSD clause](https://spdx.org/licenses/BSD-3-Clause), [Artistic 2's "Standard Version" protections](https://spdx.org/licenses/Artistic-2.0), [GPL modification notices](https://www.gnu.org/licenses/gpl-3.0.en.html#license-text)---but largely to protect the integrity of "official" releases and project "brands", saving developer face from faults in patched or integrating systems.  True disclaimer of reputational risk---anonymous releases---remains relatively rare.  It is not a mark of merit for potential adopters.

Section 9 of Apache 2.0 hasn't been a persistent issue, in my view, because most people have never heard of it, much less read it:

<details>
<Summary>Section 9 of Apache 2.0</Summary>
<blockquote>
<p>While redistributing the Work or Derivative Works thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License.  However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and <mark>only if You agree to indemnify, defend, and hold each Contributor harmless for any liability</mark> incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.</p>
</blockquote>
</details>

They haven't been prompted to read it, because while it's not the clearest language in the world, it's easy to read as applying only rarely.  In practice, I've never heard of or seen it enforced.  When would the law make an open project contributor liable "by reason of" someone else offering supply-chain-style protections for their code?  As James point out, this would miss situations where legislators, rather than software vendors, sign the terms imposing liability.

## Upshots

Public laws may be coming that force open software contributors to take more responsibility for the quality and security of their work.  Those laws will very likely apply to at least some open projects, and I don't see strong argument why they shouldn't.

If we get there, the natural response I expect will be four-fold:

1.  More developers will feel pressure to read up on quality and security processes and tools and adopt them.  This will give commercial open consumers more of what they want.

2.  More small-group and independent developers will form legal entities, like limited liability companies in the USA, to shield themselves from persona liability.

3.  Larger companies will fund the hiring of more proven open developers through foundations, under employment and independent-contracting terms.

4.  More developers will proactively commercialize their work, both to cover the costs of protecting themselves, and as they discover that a lot of that structure is dual-use for doing business.

I expect all of the above stand as foreseeable to me as the lawyers currently mulling the text of laws like the Cyber Resilience Act.
