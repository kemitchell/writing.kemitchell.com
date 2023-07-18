---
date: 2023-07-15T13:44:08-07:00
title: Where is the rule that makes vague license rules legal no-ops?
description: fear, uncertainty, and doubt upon ethical licenses
tags:
- Contracts
- Licenses
- Ethics Licenses
- RAIL
---

[Kate Downing](https://katedowninglaw.com/about/) has been on a roll with [her blog](https://katedowninglaw.com/blog/) of late.  If you follow my writing for open licensing, but not hers, you're missing out.  Her last handful of posts have been especially worthwhile.  [Here's the RSS feed for subscribing.](https://katedowninglaw.com/feed/)

Kate's latest, [on the use rules of the RAIL licenses](https://katedowninglaw.com/2023/07/13/ai-licensing-cant-balance-open-with-responsible/), does a great job outlining two potential structures to address the [enforcement mechanics gaps I also spotted in the license](https://writing.kemitchell.com/2023/01/26/Open-RAIL-M-Unclear).  But on her way there, Kate makes a big digression on enforceability of ethically motivated rules that I am seeing more and more of, but don't understand.

After raising the specters of vagueness and copyright misuse as potentially making RAIL rules dead letters, Kate assumes for the rest of her post that it won't actually happen.  That assumption seems safe to me.  Which begs the question why it keeps coming up in the first place.  Why sow fear, uncertainty, and doubt, only to wave it away and go on for another five thousand quality words, with diagrams?

I'd like to drill down on vagueness here.  Copyright misuse perhaps another time.

## Unenforceable for Vagueness?

Kate writes:

> The vagueness here [in RAIL license addenda with "ethical" use rules] would likely make some of these restrictions unenforceable in a court of law...

I've heard similar claims about [Parity](https://paritylicense.com/), a very strong copyleft license.  And about some [PolyForm licenses](https://polyformproject.org/licenses/) since.  I certainly heard them about Mongo's Server Side Public License during [that whole brouhaha](https://writing.kemitchell.com/tags/sspl).

Where's this rule of contract law that says "vague" terms fall out of license agreements?

## Vagueness Rules Elsewhere

<!-- public laws -->

We have legal rules against enforcement of vague public _laws_, especially criminal penalties.  Those are grounded in the idea of due process.  No putting people away under laws so unclear they couldn't possibly tell whether what they wanted to do was illegal.  No passing criminal laws so broad they effectively turn judges into autocrats.

But public law isn't private contract law.  Laws apply to people whether they agree to them or not.  Part of protecting people from government gone wrong is imposing higher standards on rules that government makes than rules free people opt themselves into.

<!-- property deeds -->

On the private side, we have rules against vagueness in deeds affecting who owns what land.  A key goal of the real estate title system is documenting clear boundaries over many generations.  If terms aren't clear enough about what land's ownership is changing, admitting that to the record jams up the "chain of title", maybe forever.

It's often impossible to argue from evidence about what was intended decades or centuries ago.  So the real property system sets a higher bar for what it admits than does general contract law for sales of goods and services.  In California, we don't even let people sue for breach of contract after [four years](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=337.&lawCode=CCP), [two ](https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?sectionNum=339.&lawCode=CCP) if it's not written down.  At real estate scale, those are specks on the timeline.

## Contract Law

In contract practice proper, we do often talk about terms as "vague".  But in contract _law_, we don't have anything called a "vagueness rule".  We have a rule of "indefiniteness" and we have rules of "construction".  Indefiniteness is a nuclear option that destroys entire contracts.  The rules of construction exist to take vague language in and spit specific decisions out.

If a term is so unclear _and so important_ that its unfinished-looking state casts doubt on whether two sides even thought they'd made a deal yet, courts can decide there wasn't any contract.  The would-be contract becomes "void for indefiniteness".  _All_ the terms become inoperative.  In the case of a license agreement, the work would become unlicensed, as if there weren't any terms at all.

Courts don't throw out whole documents for indefiniteness very often.  It takes a lot for a court to just give up on its public policy function, which is holding people accountable for the promises they exchange.

If the bar is so low for definiteness, what do courts do with all the fuzzy terms that clear it?  What they do in all their contract fights where the issue's what was promised, rather than what the promising party did or didn't do.  They apply "rules of construction", the law's framework for reading, interpreting, and applying promise terms under conflict.

I've [blogged on these rules for a different point before](https://writing.kemitchell.com/2023/01/30/Law-Does-Not-Require-Legalese).  I won't try to write a legal reference book here.  Those wanting a taste of implementation can read the "interpretation" items in series 300 of [the Judicial Council of California's Civil Jury Instructions](https://www.courts.ca.gov/partners/documents/Judicial_Council_of_California_Civil_Jury_Instructions.pdf), which are written for jurors in something approximating English.

There are rules for reading particular words and syntactic constructs.  There are rules for arguing from the language alone versus from evidence about context.  There are even rarely used "if all else fails" rules, like reading unclear terms against the side that drafted them.  It's far, far more common to see courts citing dictionaries.  That is a routine thing judges do.

Rules of contract construction exist to deal with ambiguity, vagueness, and gaps.  No uncertainty, no conflict, no lawsuit, no law.  Conversely, the idea that "legalese" represents a deterministic, fully specified, precisely technical superset of English is pure fantasy.  Uncertainty in contract terms is half the craft, as negative space is to art.  Good contract drafters [think systematically](https://www.michbar.org/file/barjournal/article/documents/pdf4article2969.pdf) about varieties of incompleteness and uncertainty, how they play out in practice, how to avoid them accidentally, and how to manage them.  There are very good reasons for willingly choosing not to address every possibility you can think of, or even choosing not to address a topic at all.  Money's tight, life is short, and nobody wants a thousand-page contract's worth of unlikely speculative business fiction.

## In Practice

<!-- widely known -->

Indefiniteness and construction aren't deep legal mysteries peculiar to narrow specialists.  Indefiniteness and construction get covered in first-year contracts courses throughout American law schools.  You can find them in [law students' outlines](https://www.aspenpublishing.com/ELO-Contracts11), as well as [commercially published ones](https://www.aspenpublishing.com/ELO-Contracts11).  You'll find them in [my go-to rec for people looking to study a little law](https://www.aspenpublishing.com/EE-Blum-Contracts8).

Intellectual property lawyers understand the game the contract rules structure, because contracts are most of how IP owners make money.  Good intellectual property lawyers learn the costs of playing by those rules in court, and how the process of fighting about a term affects cost-benefit analysis for drafting and compliance.

In practice, overall, fuzzy-edged rules don't create free passes, as if by forfeit.  They prompt savvy players to avoid big reliance, unless they're confident they're well within the letter and the enforcing parties' incentives align with letting them be.  In other words, terms in broad language aren't malformed, defective weapons---they have splash damage.  A radius of uncertainty surrounds their imprecisely designated targets.  Uncertainty itself costs to resolve.  Imposing that cost on others is a common tactical stratagem.

We see this play out in readily observable behavior.

We don't see big companies worth suing openly charging right through RAIL rules, as if they had memos from ther lawyers declaring them [no-ops](https://en.wikipedia.org/wiki/NOP_(code)).  IBM didn't blow a raspberry at Douglas Crockford's "good, not evil" license, despite it having perhaps the vaguest license rule of all time.  [To hear Crockford tell it, they asked for waivers, over and over again.](https://www.youtube.com/watch?v=-hCimLnIsDA)

We don't see lucrative firms trampling over similarly broad "acceptable use policy" terms of service.  We see them writing their own, similar terms, so they'll have something to cite when booting undesirables.  Scores of these terms say, almost literally, "deal is off if we decide you aren't good for our reputation".

We _do_ see companies who can't risk relying on ethically motivated license rules, lawyers who advise those companies, and activists who oppose any rules at all throwing shade.  Invoking the mysteries of the law restricts who feels confident to contradict them.

## Consistency

Are [slimly elaborated noncommercial use restrictions](https://wiki.creativecommons.org/wiki/NonCommercial_interpretation) unenforceable copyright misuse?  Is GPLv2 copyleft unenforceable for persistent vagueness about [what it covers or when it's triggered](https://heathermeeker.com/open-source-faq/what-are-the-most-difficult-questions-in-open-source-licensing/)?  Is MIT's notice provision really a public domain dedication, since what "including in...the Software" means in practice has become totally unclear for front-end code?

Companies worth suing sure don't act like it.  They follow the rules, by avoiding the licenses.  But at the same time, they don't mind discouraging licenses that don't give them a free pass.  If the legal system clearly wouldn't honor these terms in practice, companies that won't follow them wouldn't have anything to complain about.  They could say nothing, do what they want, and get away with it, avoiding evolution of more enforceable license terms by denying adopters corrective feedback.  But it's best for them to say one way, do another, and not think about the difference.

With our interests fully engaged, the only reliable consistency checks we have are other people with contrary interests.  This our legal culture understands.
