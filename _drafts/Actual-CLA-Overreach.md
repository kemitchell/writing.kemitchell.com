---
title: Real and Imagined CLA Overreach
tags:
- Open Source
- Contributor Licensing
---

I have seen no end of online comments taking [HashiCorp's license change](https://writing.kemitchell.com/2023/08/18/HashiCorp-BSL) as latest opportunity to decry contributor license agreements.  These are always dismaying moments for me.  When the anti-CLA activists come out, they make a sad parade of enduring misconceptions.

Relicensing is _not_ revocation.  None of HashiCorp's old releases---or Elastic's, or MongoDB's, &c.---suddenly aren't available under the same old license terms anymore.  They remain available under the terms of their release, and nobody at those companies is saying otherwise.  My colleagues and I share serious doubts about whether taking back release terms is even practically possible under US law.

CLAs are _not_ assignments of ownership.  They're contributor _license_ agreements.  Contributors who agree to them keep ownership of their copyrights.  They're free to reuse their work in other contexts and to license it under other terms.

Refusing to agree to CLAs almost never compels a project steward to change its licensing policy.  Even a fairly solid new contribution isn't worth it.  And it's rarely worth creating that contribution in the first place if the project steward driving development won't accept it for distribution and ongoing maintenance.

The fact that a project doesn't use a CLA _doesn't_ mean they can't change the terms for new work going forward.  Especially when the project is [permissively licensed](https://blueoakcouncil.org/list).  Especially with a service-izable project under less than [network-copyleft](https://blueoakcouncil.org/copyleft#network-copyleft-family) license terms.

There _is_ a situation where deciding specifically _not_ to use a CLA makes sense:

- You're using some other tool to verify and document that people have the rights to offer their contributions, or you're consciously willing to accept the risk that some won't.  I've blogged on [what the Developer Certificate of Origin is and is not before](https://writing.kemitchell.com/2021/07/02/DCO-Not-CLA).

- Your project is under a [copyleft license](https://blueoakcouncil.org/copyleft).  There's [huge room for improvement on popular permissive licenses](https://writing.kemitchell.com/2019/03/09/Deprecation-Notice), too, but they're simpler and more stable than copyleft terms overall.

- You value "locking the project open"---mixing copyleft-licensed contributions from independent copyright owners, so they all have to comply with the copyleft terms---over the risk that you'll need or want to update the license, or that the license steward you trust via "GPLv3 or later", "EPL-2.0+", or the like goes bust or goes haywire.  Or, frankly, you got stuck "locked open" without thinking about it.  Like Linux.

Edge case aside, [CLAs do important work](https://writing.kemitchell.com/2018/01/06/CLAs-Are-Not-a-Sham).  And some of their functions _do_ place risk and responsibility on contributors.  When it comes to their rights to actually license their contributions, rightfully so.  But it is absolutely true that CLA terms, being essentially freeform, can overreach and become unfair.

Case in point, this bit I spotted in section 6 of [Artifex's CLA](https://artifex.com/documents/Artifex%20Contributor%20License%20Agreement.pdf):

> You agree to cooperate fully with Artifex, to take such actions, to execute such further instruments, documents and agreements, and to give such further written assurances, as many be reasonably requested by Artifex to carry into effect the intents and purposes of this Agreement.

This is not something Artifex made up.  It's what's known among lawyers as a "further assurances" clause.  Further assurances clauses appear in nearly any intellectual property agreement for employees and independent contractors.  [Here it is, in more readable form, in the Square One form I help publish.](https://squareoneforms.com/confidentiality-ip/3.0.0#further-steps)

The classic scenario where further assurances come into play is where you leave your current employer, and a few months later they get around to registering a copyright, trademark, or patent on work you were involve in.  The company preps the paperwork, and you sign it, even though you no longer work there.  Maybe you haven't worked there for some time.

Employees and independent contractors don't like open-ended, perpetual obligations, either.  But it's usually part of what they give in exchange for a paying opportunity.

Outside contributors to [Ghostscript](https://en.wikipedia.org/wiki/Ghostscript) aren't getting paid by Artifex.  They may indeed get something in return for covered contribution---distribution through Artifex's "official" channels, the potential of, if not a promise for, ongoing maintenance of their work by Artifex devs.  But Artifex is getting quite a lot on the "deal" already: contribution to their project, which they'd usually have to pay devs for.  When I try to imagine situations where taking a perpetual, open-ended obligation to deal with legal matters for the steward company makes sense, I can only think of circumstances where it's clear no "further assurances" will be needed at all.  In other words, where it doesn't matter that the clause is there at all.

There isn't any further assurances clause in [Apache's CLA forms](https://www.apache.org/licenses/contributor-agreements.html#clas), which have become de facto standard templates.  There isn't in [the Fedora CLA](https://docs.fedoraproject.org/en-US/legal/fpca/).  There isn't in the ill-fated [Harmony CA](https://harmonyagreements.org/docs/ha-combined-v1), which is actually a copyright _assignment_.  I'm not sure I've _ever_ seen a "further assurances" obligation in a CLA.

If I were looking to contribute to a project and the steward presented me with Artifex's CLA, I'd strike that section.  If they were willing and able to think about it at all, I'd bet I'd get my way.  I don't think that term belongs in rules for "open" collaboration.  But that's not a flaw in contributor license agreement.  It's a flawed contributor license agreement pretending terms for _assignments_ from employees belong in the open.
