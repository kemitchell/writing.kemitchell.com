---
title: This Mess We're In
description: ethics, open source, and free riding
tags:
- Open Source
- Licenses
- Ethics
- Ethics Licensing
---

It's only just occurred to me to add [Dirk Riehle](https://dirkriehle.com), Professor of Open Source at FAU in Bavaria, to the [blogroll](/blogroll.html).  If you read this blog, you'll very likely enjoy his.  I do.

Take a quick look, and you'll see his most recent post, [_Sorting Out the Ethical Licensing Mess_](https://dirkriehle.com/2020/02/27/sorting-out-the-ethical-licensing-mess/).  That post summarizes and links to a few recent efforts to write public licenses for software with ethically motivated restrictions on use, followed by two points.  I'd like to respond to those points, not necessarily to take any contrary position personally, but to relay the perspective and intentions of many of the hackers and other folks I've spoken to on the issue.

## Not Open Source

Dirk writes:

> What is wrong, however, is to call such software code [under new ethically motivated licenses] open source code.  The [open source definition](https://opensource.org/osd) explicitly forbids introducing extracurricular conditions that target specific uses cases or person groups; ethical (or not) licenses violate the open source definition and should not be called open source.

The open source definition is a patched copy of [Debian's Free Software Guidelines](https://www.debian.org/social_contract#guidelines), drafted in secret and published as part of the project's "social contract" in the late 1990s.  The Free Software Guidelines still end with a section listing example licenses, the first of which is GPL.  GPL is an ethically motivated license introducing conditions that target specific use cases and person groups, namely use in closed software and non-free software companies.

Stallman never hid these facts.  From [_Copyleft: Pragmatic Idealism_](https://www.gnu.org/philosophy/pragmatic.html):

> I figure that since proprietary software developers use copyright to stop us from sharing, we cooperators can use copyright to give other cooperators an advantage of their own: they can use our code.

We have all seen and heard RMS describe Free Software advocacy, and the GPLs specifically, as both "ethical" and ethically motivated.  Some of us have got tired of hearing it, and some haven't.  But we all grok that calling copyleft a condition requiring sharing alike if you distribute is functionally the same as prohibiting distribution without sharing alike.  We play semantic games with "condition" versus "restriction", but they are only games.

Criteria 5 and 6 of the Open Source Definition, which address discrimination, were always unhelpfully vague, and produced confusion from earliest days.  Specifically about whether GPL and other copyleft licenses qualified.  It's no wonder.  Explain to new folks what GPL prohibits and why, and ask them if it prohibits any kinds of use or discriminates against any any people or group, they'll readily agree that it does, and therefore isn't open source.  Likewise with many conditions requiring credit, respect for the integrity of official version of a program, or protection of specific project and executable names, as under Larry Wall's Artistic License, the second of DFSG's examples.

The reality of the Open Source Definition is political and marketing expedience, not technical or definitional rigor.  We prefer to believe that sticky political issues can be reduced to discreet, technical terms.  But the symptoms of expedient self-deception are all there, chief among them inconsistency.  The nondiscrimination criteria apply as written, except to GPL and copyleft licenses like GPL.

That crack in the strict definitional armor was systemically overlooked because those who preferred to view and sell free software in the libertarian terms so in vogue circa 1999, rather than the [communitarian terms that inspired the movement years earlier](https://www.oreilly.com/openbook/freedom/ch06.html) or any terms prevailing now, nonetheless identified with GPL, Stallman, and the past successes of free software.  They weren't willing to break with that identity, or to dissociate themselves from its successes, even as [they departed from it](https://www.gnu.org/philosophy/open-source-misses-the-point.en.html) in licensing, methodology, and ideology.

## Free Riding

Which leads exactly to Dirk's next point:

> I don't really understand why calling their code "open source" is so important to those who want to tie their convictions to their code.  I suspect that they want to ride the goodwill of the term open source, but that would be improper.

Turn this around:  Why was (and is) it so important to early open source advocates to claim that "free software" and "open source" are synonyms, that "open source" was merely a rebranding exercise on "free software", that GPL and other ethically discriminating licenses were emblematic open source licenses, and so on?  Why didn't they admit that permissive licenses both better implemented and better represented their politics, tactical preferences, and relationship to industry?  ESR went there later, proclaiming that copyleft was no longer necessary, once the "revolution" had been won.  Before that, was open source merely riding the goodwill of free software?

I recall that in chemistry, which I haven't studied seriously in far too long, there is a notion of "reagents", or chemicals used to facilitate chemical reactions.  Some reagents are "reactants", which get consumed by the reactions they facilitate.  Very clean.  Others are "catalysts", which survive the process.  The world is a messy place, so perhaps it's no wonder we hear "catalyst" a lot more than "reactant".

A residue of free software and its imperative, ethical licensing remains in open source.  Having facilitated the rebranding, commercialization, and political rise of open source figures, free software's no longer necessary, from the open source point of view.  But scraping out what's left is too messy and politically fraught.

Every new riff on online software development---and every new crop of would-be leaders and figureheads---builds on the past.  Proponents often _identify_ with that past, as open source people nonetheless identified with free software.  Those writing ethical licenses today identify with open source.  They don't coopt or free ride off a past movement.  They're an active part of that movement, in the part that writes software, rather than the part that writes press releases.

But every success tends towards selective blindness, forgetting the steps it had to take along the way, or remembering them but advocating shortcuts, branding many steps along their own path foolish detours.  ARPANET and NSFNET, precursors to the Internet, had substantially noncommercial acceptable use policies.  The original license for the Linux kernel prohibited charging for copies, to prevent others moving in "for the quick money" and snuffing out Linus' motivation.  The first Artistic License was deprecated, the second elevated in its place, rather than acknowledging the process that produced both, not to mention Perl.

## Messiness

Messiness is a synonym for realism.  Whenever we concoct neat taxonomies, clear hierarchies, and tight ideologies that make questions about people and software seem simple, we've oversimplified.  As a creator of compliance tools, a contributor to metadata standards, and an advisor to open source platforms and other infrastructure providers, I see firsthand just how messy open source is already, even counting [just the permissive terms](https://blueoakcouncil.org/list).  And I understand the temptation to force-fit reality to the model, both [subtly](https://blog.licensezero.com/2018/01/10/remember-you-for-it-wholesale.html) and [egregiously](https://perens.com/2018/09/01/shunning-really/).  I've learned it's far better, morally and intellectually, to work over the models.

It's true that licensors writing and choosing ethical licenses, or noncommercial licenses for that matter, benefit personally.  They can feel good about their choices, about sending a message of broader ethical and social responsibility, or at least about opting out of subsidizing behavior they abhor.  But it is also true that those choices benefit software.  It's nearly impossible to maintain the deep inspiration required for monumental sprints of thought and labor, or to support who do, while news of current events bombards you with evidence that past efforts of the kind made the world a darker place.

Sure, we get our hands dirty.  That's what builders do.
