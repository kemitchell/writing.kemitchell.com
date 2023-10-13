---
title: We Were Wrong About the GPLs
description: an unsurprising admission in Conservancy v. Vizio
tags:
- Licenses
- Software Licensing
- Free Software Foundation
- Conservancy v. Vizio
- GPLs
---

We now have [a transcript](https://downloads.kemitchell.com/2023-10-05-SFC-v-Vizio.pdf) of oral arguments---lawyers' presentations in court---in Software Freedom Conservancy's lawsuit against Vizio for not sharing source for GPL'd software in their televisions.  There's a ton to think and say about the arguments.  But what struck me the most wasn't so much about the case itself as about the broader licensing world outside it:

Conservancy's lawyers say flat out that their own published guidance, [copyleft.org](https://copyleft.org), and the [Free Software Foundation's FAQs](https://www.gnu.org/licenses/gpl-faq.html) were all legally wrong about the GNU licenses.

Here's the big quote from Conservancy's lawyer, on page 41 of the transcript:

> Now, Vizio has also taken the position that Conservancy admitted that third-party enforcement is not possible, and the Free Software Foundation is the primary interpreter and ultimate authority on the GPLs.
>
> Now, those are inaccurate and irrelevant legal conclusions by non-attorneys.  They improperly invade the province of the court, and frankly, they are wrong.

And a little later, on page 43:

> So what we have here are statements of belief, legal conclusions in particular, and they are inadmissible as legal conclusions.  They are also inadmissible as hearsay.
>
> And it's also worth emphasizing that they are simply wrong.

The legal context here is that Conservancy and Vizio are fighting out two legal points: "preemption" and whether Conservancy is an "intended third-party beneficiary".

Preemption is about whether Conservancy should have sued under copyright law in federal court, instead of under contract law in California state court.  When federal law covers something to the exclusion of state law, the federal law trumps, or "preempts" the state law.  Copyright law is federal law.  Contract law is state law.

Under California contract law, where a contract between two sides was meant to benefit some other person who wasn't directly part of the deal, that other person may be able to enforce that part of the contract for themself as an "intended third-party beneficiary".  The crux of Conservancy's lawsuit against Vizio is that even though the GPL was a contract between the owners of copyright in the software and Vizio, not Conservancy, the GPL intended to benefit all users, including Conservancy, by ensuring them source code.  Therefore, Conservancy can sue Vizio for failing to share source as GPL requires.

Vizio argued that the lawsuit is really a copyright infringement lawsuit, and therefore belongs in federal court, not state court.  Painting Conservancy's legal claim as really about copyright could also help them avoid the whole issue of third-party beneficiaries, a contracts-law concept.  So naturally, Vizio's lawyers went online and dug up a bunch of places where Free Software people, including FSF and Conservancy people, wrote that the GPLs are licenses, not contracts, and that only copyright holders can enforce them.

Those published statements contradict what Conservancy is saying in its briefs and in court, so Conservancy argued to have them thrown out as irrelevant.  Irrelevant because the people wrote them aren't in the lawsuit to be questioned---["hearsay"](https://en.wikipedia.org/wiki/Hearsay).  Irrelevant because they say what the law is, which is the judge's job---"legal conclusions".  Irrelevant because there's no guarantee either the copyright holders or Vizio were aware of them going into their license deal.  On page 42, Conservancy's lawyer again:

> This is not in the contract.  This is on a website.  And it's, again, rather fanciful to imagine that every party to the GPLs is going to the website, looking at a list of 200-plus FAQs, and fixating on the one that concerns enforcement, means of enforcement, in the event of a breach.

Those of us who've followed FSF and the GPLs [saw this coming](https://writing.kemitchell.com/2021/10/19/SFC-v-Vizio-Complaint).  This isn't Conservancy's lawyers slipping up or putting their feet in their mouths.  As much as I'd still put the odds against them, I think they clearly did the better job framing issues and using time at oral argument.  As an Oaklander, I'm probably biased toward anyone who explains third-party beneficiaries with the Raiders case and copyright with [MC Hammer](https://www.youtube.com/watch?v=otCpCn0l4Wo&pp=ygUQY2FuJ3QgdG91Y2ggdGhpcw%3D%3D)---see page 24.

There was nothing they could do about the fact that the FSF, and activists who learned copyright law mostly through the FSF, have long insisted that the GPLs are licenses, not contracts, and that their rules are "conditions" rather than "covenants".  I've long attributed this view to Eben Moglen.  [For example](https://moglen.law.columbia.edu/publications/lu-12.pdf):

> Licenses are not contracts: the work's user is obliged to remain within the bounds of the license not because she voluntarily promised, but because she doesn't have any right to act at all except as the license permits.

This sounded great before law school, but came to exist more and more in a kind of parallel, theoretical universe as I read in.  I don't see it fitting into the way judges or legal reference book authors frame the law, only into Moglen and FSF's other writings.  Most problematically, those writings include the rather aged texts of the GPLs themselves, which bend over backward to self-identify as licenses and express all their rules in terms of the things the law lets copyright owners control.  This is why absolutely nobody should feel dumb reading [the part of AGPL](https://www.gnu.org/licenses/agpl-3.0.html#section13) that makes it ["network copyleft"](https://blueoakcouncil.org/copyleft#network)---it's a work of contortionism [fit for Cirque du Soleil](https://www.youtube.com/watch?v=m7mz6VHLJSc).  It's trying both to be clever and _not_ to say what it means, at the same time.

I can't speak for the people who started this line of argument, or for those still toeing it today.  I recognize the issue arose many years ago, when a lot less was known about software copyright generally.  Not everyone has had the time or interest to read copyright decisions and incrementally update their mental framework since.

From the outside, I also see an intuitive, sometimes explicitly strategic, dread and aversion to the power of contract.  Activists feared that power would be used by companies to restrict use, development, and distribution in more and more complex ways, which they have.  The greater flexibility of the infernal "EULA" was thus drubbed as the weapon of choice for Freedom's enemies, a runaway escalation of hostilities better hemmed in by arms control.  That made it inconceivable that copyleft itself should be backed by the contract cannon, rather than the surgical, gentlemanly rapier of copyright---[the elegant weapon of a more civilized age](https://en.wikipedia.org/wiki/Lightsaber) we lost and pine to return to.

Activists have largely failed to blunt any of the above, through fair use against copyright infringement, through [Section §117](https://www.law.cornell.edu/uscode/text/17/117) against "use restrictions", or through new legislation at the level of public policy.  As court decisions accepting contract claims for violation of licenses have dribbled out, I've read similar reflexes against long-neglected contract, via "copyright misuse", an explicitly niche, disfavored doctrine.  I'd give it similar chances.

Either way, "license, not contract" now indisputably stands between Conservancy and a potential legal ruling that anyone in the United States who wants GPL source code can sue for it, contributor or not.  The old mantra's gotta go, even as it still rings in our ears and echoes down deep caverns of the Web.
