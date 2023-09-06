---
date: 2023-09-06T15:49:09-07:00
title: Real and Imagined CLA Overreach
description: CLAs go wrong when they act like hiring terms
tags:
- Open Source
- Contributor Licensing
---

I have seen no end of online comments taking [HashiCorp's license change](https://writing.kemitchell.com/2023/08/18/HashiCorp-BSL) as opportunity to decry contributor license agreements.  These are always dismaying moments.  When the knee-jerk anti-CLA activists come out, they make a sad parade of enduring misconceptions.

- Relicensing is _not_ revocation.  None of HashiCorp's old releases---or Elastic's, or MongoDB's, &c.---suddenly aren't available under open terms anymore.  They remain available under the terms of their releases, and nobody at those companies is saying otherwise.  My legal colleagues and I share serious doubts about whether taking back release terms is even practically possible under US law.

- CLAs do _not_ change ownership of code.  They're contributor _license_ agreements, not copyright _assignments_.  Contributors who agree to CLAs keep ownership of their code.  They're free to reuse their work in other contexts and to license it under other terms.

- Refusing to agree to a CLA almost never compels a project steward to change its licensing policy.  Even a fairly solid new contribution isn't worth it.  And it's rarely worth creating that contribution in the first place if the project steward driving development won't accept it for distribution and maintain it going forward.

- The fact that a project doesn't use a CLA _doesn't_ mean they can't change the terms for new work going forward.  Especially when the project is [permissively licensed](https://blueoakcouncil.org/list).  Especially with a service-izable project under less than [network-copyleft](https://blueoakcouncil.org/copyleft#network-copyleft-family) license terms.

There _is_ a situation where deciding specifically _not_ to use a CLA makes sense.  In fairness to CLA opponents who understand the mechanics, I've seen consistent and reasoned support for not using CLAs in situations checking all these boxes:

- You're using some other tool and process to verify and document that people have the rights to offer their contributions.  Or you're consciously willing to accept the risk that some won't.  I've blogged on [what the Developer Certificate of Origin is and is not before](https://writing.kemitchell.com/2021/07/02/DCO-Not-CLA).

- Your project is under a [copyleft license](https://blueoakcouncil.org/copyleft).

- You value "locking the project open"---mixing copyleft-licensed contributions from independent copyright owners, so they all have to comply with the copyleft terms and nobody can [dual license](https://duallicensing.com)---over the risk that you'll need or want to update the license, or that the license steward you trust by licensing "GPLv3 or later", "EPL-2.0+", or the like goes haywire or falls over.  Or, frankly, you got stuck "locked open" without thinking about it.  Like Linux.

Whether "locking open" and trusting license stewards are or aren't things projects should do is where the well studied debate on CLAs actually is.  Disagreement on these things leads to justified disagreement about CLAs, not the other way around.

Edge case aside, [CLAs do important work](https://writing.kemitchell.com/2018/01/06/CLAs-Are-Not-a-Sham) in other circumstances.  And some of their terms _do_ place risk and responsibility on contributors.  When it comes to their rights to actually license their contributions, rightfully so.  No "contributing" IP problems to public projects, please.  But it is absolutely true that CLA terms, being essentially freeform, can overreach and become unfair.

Case in point, this bit I spotted in section 6 of [Artifex's CLA](https://artifex.com/documents/Artifex%20Contributor%20License%20Agreement.pdf):

> You agree to cooperate fully with Artifex, to take such actions, to execute such further instruments, documents and agreements, and to give such further written assurances, as many be reasonably requested by Artifex to carry into effect the intents and purposes of this Agreement.

This is not something Artifex made up.  It's what's known among lawyers as a "further assurances" clause.  Further assurances clauses appear in nearly any intellectual property agreement for employees and independent contractors.  [Here it is, in more readable form, in the Square One hiring form I help publish.](https://squareoneforms.com/confidentiality-ip/3.0.0#further-steps)  You can probably find it in the last "confidential information and invention assignment agreement" you signed for a job.

The classic scenario where further assurances come into play is where you leave your current employer, then a few months later they get around to registering a copyright, trademark, or patent on work you were involved in.  The company preps the paperwork and you sign it, even though you no longer work there.  You promised to come through in the IP agreement you signed on your first day, when you started.

Employees and independent contractors don't like making open-ended promises any more than anyone else.  But it's often part of what they give in exchange for a paying opportunity.  Even in industries with far more active patent action, where "further assurances" has in the past had people flying off to distant courthouses to testify in infringement suits.

I'd guess outside contributors to [Ghostscript](https://en.wikipedia.org/wiki/Ghostscript) aren't usually getting paid by Artifex.  They may get something else for their patches---distribution through Artifex's "official" channels, the potential of, if not a promise for, ongoing maintenance of their work by Artifex devs.  But Artifex would be getting quite a lot on the "deal" already: contribution to their software, which they'd usually have to pay some dev for.

When I try to imagine situations where taking a perpetual, open-ended obligation to deal with legal matters for the steward company makes sense, I can only think of two:

1.  circumstances where it's either clear no "further assurances" will ever be needed at all, so it's dead letter
2.  where Artifex actually is paying the dev, but has them sign the CLA instead of a proper work contract

As part of a generic CLA form to be used as most CLAs are used, it doesn't feel fair.  A bit like saying "we'll take your free puppy, but you have to agree come back and drive around the neighborhood with us if we let it run away".

There isn't any further assurances clause in [Apache's CLA forms](https://www.apache.org/licenses/contributor-agreements.html#clas), which have become popular standard templates.  There isn't any in [the Fedora CLA](https://docs.fedoraproject.org/en-US/legal/fpca/), either.  There isn't in the ill-fated "standard" [Harmony CA](https://harmonyagreements.org/docs/ha-combined-v1), which is actually a copyright _assignment_.  I'm not sure I've _ever_ seen a "further assurances" obligation in a CLA before this.

If I were looking to contribute to a project and the steward presented me Artifex's CLA, I'd strike that section.  If they were willing and able to consider changes at all, I'd bet I'd get my way.  I don't think that term belongs in rules for public, potentially drive-by collaboration.  But that's not a flaw in contributor license agreements overall.  It's a sharp point on one particular _contributor_ _license_ agreement that's pretending _personnel_ _assignment_ terms belong in terms for everybody else.
