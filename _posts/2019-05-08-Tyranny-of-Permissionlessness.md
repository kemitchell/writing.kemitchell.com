---
title: Tyranny of Permissionlessness
description: open source's narrow focus further empowers those with other ways to exclude
layout: post
tags:
- Licensing
- Open Source
---

Philosophically, free and open source licensing means nondiscrimination.  Practically, open source licensing discriminates all the time.  In particular, open source discriminated against those who rely on exclusive rights that open source requires developers to surrender, and in favor of those with exclusive rights to which open source remains willfully blind.  Adding open source to a stacked-deck game further skews the odds in the house's favor, by denying less powerful players their only strong cards.

If you care about open source and have bills to pay, it's vital to understand how.

## Tunnel Vision

Open source is a very conscious reaction to universal, law-based intellectual property rights: exclusive rights in business-relevant information kept confidential, or trade secrets, exclusive rights in creative work, or copyrights, exclusive rights in useful inventions, or patents, and exclusive rights in names that identify the sources of products and services, or trademarks.  Open source was initially laser-focused on copyright and tackled trade secret only obliquely, without naming it, by decrying a symptom, nondisclosure agreement, rather than root cause.  Open source later expanded to address patent.  It has acknowledged trademark irregularly, usually to [leave it alone rather than nullify it](https://zoo.kemitchell.com/Apache-2.0#trademarks), and sometimes even to [emulate it through other exclusive rights](https://spdx.org/licenses/Zlib.html).

Companies making money on open source, or scoring strategic business victories through it, charge for something other than copyright and patent licenses.  Those making good money enjoy some bulwark---an exclusive right---against competitors who would happily earn less to take a piece of that action.  Open source theory remains willfully blind to the exclusive rights that protect those returns.

For example, in some industries, companies require government approvals, regulatory licenses, or private certifications to do business, legally or practically.  Those rights often apply only to the specific company that obtains them, rather than to its software more generally, and cover organizational as well as technical criteria.  When those rights prove prohibitively expensive or simply impractical for anyone else to obtain, they become means of exclusion.

Companies holding those exclusive rights can freely release their software as open source.  They hold a greater power---an effectively exclusive right to do business with the software---that makes the lesser powers of copyright and patent licensing irrelevant.  Having released as open source, firm developers can leverage free infrastructure, like code hosting, testing, and distribution.  The firm can use open source branding, the personal benefits of open source participation, and open source tooling and workflow to recruit developers who like open source.  Outside contributions may even show up with patches now and then.

But outsiders aren't free to operationalize or commercialize the results without approval, license, or certification of their own, Impossible as that maybe to get.  Overall, the system excludes would-be competitors.  But the software is "open source", because open source doesn't reach the dimension where exclusion occurs.

## Limitations

Open source can be forgiven for failing to address such constraints when its characteristic tool, public licensing, can't touch it.  No foundation or private firm can nullify public policy in a form license unless permitted to do so by public rule, like the broad power to conditionally license copyrights that enable copyleft.  Changing effective public policy and the law requires lobbying, legislation, litigation, or some combination of all three.

This is partly the case with patents.  An open source license can only grant permission for patents that contributors can license.  It can't grant permission for patents owned by others not involved in making the implementation available.  If you patent a process and I implement it in software, I can't license your patent to users of my implementation without your permission, even if I choose an open source license with the broadest possible broad patent grant, like [the one in Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0#patent).  Open source licenses do what they can, but in the end, it's up to political action groups to change patent law if patent law needs changing.

That is not the story of all exclusive rights.  Many are entirely within the control of the firms that exploit them.  When those firms release software, the terms under which they do so could nullify those exclusive rights.  Open source license terms don't.

Some firms dominate whole commercial categories due to overwhelming brand recognition, entrenched and exclusive relationships, or market power.  These firms occupy swathes of customer brain space in the addressable market, as vendors occupy booth space on a trade show floor.  They stack the odds of the competitive games they play like owners stack the odds at a casino.  So even if a competitor has every right to offer a competing product or service, they may be utterly unable to make it known, make a sale, or meet an entrenched incumbent on terms designed to ensure incumbent victory.

## Breakaway

When business theorists speak of "network effects", they mean rights that are not only exclusive, but compound on themselves.  They offer an antidote to, or protection from, competition, in the potential to compound advantage so quickly that a firm eclipses all rivals.

Software companies benefiting from strong network effects can be prolific producers of open source software.  Having graduated to a level of competitive advantage that makes copyright and perhaps even patent---the whole blinkered view of open source---not just redundant, but needlessly complicating, releasing open source costs them least, and may even be the only rational choice.  Why leverage public licensing, which affects customers as well as competitors, when you can target competitors selectively?  Why leverage public licensing, which is publicly visible, when you can protect your position without ever acknowledging how, or by trumpeting you advantages in a positive light, as a customer draw?

## Elephant Duel

We see this logic in motion when giant takes on giant.

Consider Kubernetes.  Perhaps it's truly revolutionary technology, a demonstrable step change over what came before.  It's certainly well promoted that way.  So much so that a great number of those enthusiastically riding this new wave of the orchestrated future clearly haven't any objective need for its scalability or complexity.  But the name recognition and technical reputation of Google, the massive budget Google has thrust behind it, and the dynamics of new-hotness in software engineering all conspire to make Kubernetes an industry force.  There is apparently nothing Amazon, a behemoth in other forms of consumer and developer attention, not to mention the counterparty of an existing commercial cloud services contract with basically everyone, can do about it.

That was utterly calculated.  Google pushes Kubernetes to crack open the market dominance of Amazon Web Services.  [Here's their man saying so in a public conference talk, complete with heartfelt assurance that wearing the motive on their sleeve was key to their success forming a foundation.](https://youtu.be/L7WKHLpm4wc?t=156)  If the world stays on AWS, Google Cloud Platform gets no pie.  If the world moves to "hybrid cloud", Google Cloud Platform gets a slice.  A slice is less than a whole pie, but more than nothing.

These are the lumbering, heavy blows of tech titans, wielding budgets and strategic heavy weapons smaller firms can't even lift.  Cloud competitors are relying on trade secret, by keeping key, integrated services proprietary.  But they are not leveraging complex public license terms to poke each other in the eye.  Only smaller firms without established positions, like MongoDB, have to resort to that.

What about the even littler guys, the startups and independents?  Smaller players are relevant in titan combat only en mass, insofar as a herd can be made to stampede in s particular direction.  But that's a rank-and-file contribution.  What tools could they possibly have with which to compete under their own flags?

## People Powers

There is one universal exclusive right in software, bestowed on the common man as well as the multinational.  Creators of software have the right to share it, or to keep it secret.  I can write a database and keep it to myself, or offer it only has a service, and cloud providers can do the same.

The "source" part of "open source" requires surrendering this privilege, and completely.  Merely granting a well known license for something less than the preferred form for making changes---say, obfuscated source or compiled binary---or less than all the code doesn't count.

Copyright is only slightly less universal.  Under US law, copyright applies to nearly any source code, so long as it evidences some degree of creativity, which is not a lot.  There's no need to file any application, or pay any fee, to receive exclusive copyright, at least until you need to sue.

As usual, there are laws that make employers and clients the owners of copyright, rather than the original authors, when authors work for employees and clients.  But by default, and outside the work environment, especially in states like California with specific legal protections for independent work, copyright belongs to the author.  That is to say, copyright in a programmer belongs to the programmer, if they didn't write it or assign ownership of it for work.

Individuals can and do use copyright power to shape the behavior of behemoth firms.  The system isn't perfect.  Enforcement isn't free.  But if large firms had no reason to fear the license choices of two-bit hackers, they wouldn't spend so much time, treasure, and process identifying, avoiding, and complying with them.  Some of their incentive is legal, and some of it is not.  But overall, the effect is leverage.

Apply open source license, and that leverage is gone.  All else being equal, if you hand a large firm all the rights in your work that you have, and they enjoy exclusive rights that you don't, you have taken a handicap, and invited them to take your code.   Odds favored them to begin with, now license terms do, too.

## Purpose

Open source's popularity has become its own justification.  But before widespread acceptance, open source served purposes.  Its attack on exclusive intellectual property rights had a purpose.

That purpose is less and less well served by a dated, myopic view of the kinds of exclusion that pose a threat to end-user control and lively competition.  A more holistic view, exceeding that shortsightedness, would account for, and nullify, a far broader range of exclusive privileges, legal, cultural, and commercial.  Where available tools, like public licensing, fail to reach key elements of the system as a whole, it would permit retention of exclusive rights, even exclusive rights at the core of historical open source, like copyright and patent, for offsetting leverage against forms of exclusion that can't be brought in license scope.

Copyleft shows that exclusive rights can be turned around on themselves, to prevent abuse of the same right by others.  Copyleft uses the copyright of contributors to nullify the copyrights of others.  But open source licensing is also rife with examples of one kind of exclusive right putting leverage on another, distinct type.

Defensive termination provisions of open source licenses frequently terminate both copyright and patent permission for breach of terms founded in copyright.  Terms of copyright-focused licenses regulate use of project names, contributor identities, and firm or institutional affiliations in trademark-like ways.  Conditions requiring lists of changes, notices of deviation from official versions, a means of returning to the canonical distribution all forestall potentially misleading misrepresentations and reputational damage.

It's striking how many of these terms now feel anachronistic.  The general trend is toward permissive licensing, and permissive licenses themselves are becoming more permissive.  In many cases, the Internet has provided a much richer set of information about the concerns these conditions expressed.  Integrity of specific, distributed copies no longer determines public opinion.

But I fear the effect of increasing permissivity is not increasing user power, autonomy, or competition, but tacit endorsement of the many and compounding tyrannies that open source, smug in its success and fat from its prizes, studiously fails to see, decry, and reconcile.  For open source to stay open source---that is, for open source to have its once liberating effect in newly restrictive circumstances, where open source is routinely deployed as a weapon by those of greatest power---it must evolve, and take a more holistic responsibility for its ends, rather than the cleverness of its means.  We must judge an open source project, an open source license, an open source definition not by how it serves a concept of freedom both actionable specific and pleasingly vague, but by how it achieves practical results worth celebrating.