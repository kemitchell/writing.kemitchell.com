---
date: 2022-03-17T12:47:18-07:00
title: The Open Source Initiative Did Not Win Neo4j v. PureThink
description: everywhere it looks, OSI sees itself, and in triumph
tags:
- Open Source Initiative
- Open Source
- AGPLv3
- Lawsuits
---

The Open Source Initiative's [blog post on the Neo4j appeal](https://opensource.org/court-affirms-its-false-advertising-to-claim-software-is-open-source-when-its-not) is self-serving, misleading, and wrong.  Again.

OSI claims:

> The court only confirmed what we already know --- that "open source" is a term of art for software that has been licensed under a specific type of license, and whether a license is an OSI-approved license is a critically important factor in user adoption of the software.

No it didn't.

The court didn't legally decide anything about the meaning of "open source".  It didn't define any new terms of art legal-system-wide.  It didn't even make precedent.  The first page of its decision says "NOT FOR PUBLICATION" at the top and "This disposition is not appropriate for publication and is not precedent except as provided by Ninth Circuit Rule 36-3" at the bottom.

But even if the appeals court _had_ made precedent, there's nothing in its decision about OSI. Here's [the appellate court disposition](/files/Neo4j-PureThink-Appeal.pdf).  Here's [the trial court order](/files/Neo4j-PureThink-Trial.pdf).  Search them for "Open Source Initiative".  You won't find it.  Neither trial court nor appeals court even mentioned OSI, OSI approval, any license list, or any trademark on the term.

The relevant bit from the appeals court is here:

> <abbr title="PureThink et al's">Defendants'</abbr> representation that ONgDB is a "free and open-source" version of Neo4j(R) EE was literally false, because Section 7 of the <abbr title="Neo4j's combination of AGPLv3 and Commons Clause">Sweden Software License</abbr> only permits a downstream licensee to remove "further restrictions" added by an upstream licensee to the original work.

If that seems like a strange way to decide if something's free and open source, that's because it is.  But it's the way that matters in this lawsuit, because it's the way the lawyers agreed to argue the point.  The trial court judge followed their lead:

> ...<abbr title="Neo4j">Plaintiffs</abbr> argue that <abbr title="PureThink et al's">Defendants'</abbr> representations that ONgDB is "free and open source" is false because "the Neo4j Sweden Software License did not permit Defendants to remove the commercial restrictions imposed by the Commons Clause."  <mark>The parties agree that the truth or falsity of <abbr title="PureThink et al’s">Defendants’</abbr> statements hinge on “the interpretation of Section 7 [of the Neo4j Sweden Software License], and GFI’s right to remove the Commons Clause from the Neo4j Sweden Software License.”</mark>  Cross-Motion at 30; _see also_ Plaintiff's Reply at 18 ("<abbr title="PureThink et al">Defendants</abbr> do not dispute that their marketing of ONgDB as 'free and open source' Neo4j(R) EE is primarily based on their (mis)interpretation of the Neo4j Sweden Software License and the form AGPLE upon which it was based.")

The actually interesting part of this whole kerfuffle is that the trial court decided PureThink could _not_ rip Commons Clause out of the `LICENSE` file:

> <abbr title="PureThink et al">Defendants</abbr> argue that there is a reasonable interpretation of the Neo4j Sweden Software License that permits licensees, like GFI or Defendants, to remove the Commons Clause and redistribute the software under the standardized AGPL license.  Cross-Motion at 27--30.  The court disagrees.

Since "could or couldn't remove Commons Clause" is how the parties agreed to argue whether the "free and open source" claims were true or false, and the court decided PureThink _couldn't_ remove the Commons Clause, which it did, the claims about ONgDB were false.  In the context of this lawsuit, _ONgDB wasn't "free and open source" because PureThink removed Commons Clause from AGPL._  Think about that.  [Check the "False Statement" section, starting on page 23.](/files/Neo4j-PureThink-Trial.pdf)

OSI's blog post gets this exactly wrong.  They want to see a court holding that _Neo4j's release_ wasn't open source because they added Commons Clause to AGPL.  What they got is a court saying that taking Commons Clause away from AGPL made claims about being open source false claims.  But OSI sees what it wants to see:

> But adding the non-free Commons Clause created a different license such that the software could not be characterized as “open source” and doing so in these circumstances was unlawful false advertising.

When we actually look at the way the trial court understood "open source", it's the opposite.  The court took the original Neo4j release as open source "meaning that the source code was available to the public on GitHub pursuant to the GNU General Public License version 3".  Later on, Neo4j added Commons Clause.  But that was still "open source" as the court saw it:

> In May 2018, Plaintiffs released Neo4j EE version 3.4, which they continued to offer under an open source license; however, they replaced the AGPL with a stricter license, which included the terms from the AGPLv3 and additional restrictions provided by the Commons Clause.

It's only when Neo4j went to a commercial license _exclusively_ that the court marks the end of open source release:

> In November 2018, Plaintiffs released Neo4j EE version 3.5 under a commercial license only.  <mark>From that point on</mark>, Plaintiffs were no longer providing Neo4j EE on an open source basis.

Is the real headline here "Federal Court Holds AGPL Plus Commons Clause is Open Source"?  Hell, no.  The court's language isn't deciding anything about what "open source" means globally.  It's just reciting the framing of facts accepted by parties to this lawsuit.  Within that framing, Neo4j under AGPLv3 plus Commons Clause _was_ open source.  It was removing the Commons Clause that made the problem, because that's how lawyers on both sides argued it. Maybe that's incongruous with the wider, parallel debate ongoing in industry.  That debate didn't factor in court.

Trial courts don't care, of themselves, what "open source" means.  They don't care about how you or I or OSI people feel about it.  They won't waste scarce time they do not have entertaining definitional politics.  They won't blow a well scoped lawsuit out into a sprawling debate about a marketing bauble.  It's not their job to settle our mailing list scores.

Trial courts deal with just as much detail as they need to get lawsuits resolved.  Here, that meant grappling with the rather narrow question of whether AGPLv3 section 7, which allows removal of "additional restrictions", lets downstreamers remove Commons Clause.  The trial court found that it does not.  The appeals court didn't overturn that finding.  This _is_ a legal decision that could potential apply outside the specific context.  And a pretty interesting one at that.  On GPL interpretation.  Not on what counts as "open source".

Why, why, why does all this need to be said?

Despite [contrary](https://writing.kemitchell.com/2019/05/05/Rely-on-OSI.html) [evidence](https://writing.kemitchell.com/2019/04/23/OSD-wontfix.html), hackers still take OSI as it presents itself---as a technocratic, dispassionate source of authoritative legal guidance "for the community".  In their defense, that's how I took it, too, until I studied law and paid attention.

"Activists" drive OSI.  They hold the bullhorn.  Lawyers---my colleagues---don't post things like this.  They read court opinions carefully.

All of this takes me back to 2017. The [ICO](https://en.wikipedia.org/wiki/Initial_coin_offering) plague was rampant. [Coin Center](https://coincenter.org), the main booster mouthpiece, was hocking all manner of dubious posts on how securities regulations somehow did not apply to blockchain.  They did apply, and lawyers said so.  But people saw what they wanted to see, repeated what they wanted to hear, invoked the "magic words" they were told would protect them---"utility token!"---and got themselves and others into a lot of unnecessary trouble.

The boosters got what they wanted.

There was a cost, but they didn't pay it.

Reader, beware.

---

I license this article under a
[Creative Commons Attribution-ShareAlike 4.0 license](https://creativecommons.org/licenses/by-sa/4.0/legalcode)

This post has been translated into [Chinese](https://zhuangbiaowei.github.io/opensource/law/2022/03/25/the-osi-did-not-win-neo4j-v-purethink.html).
