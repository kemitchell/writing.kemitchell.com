---
title: Reduce, Reuse, Reconsider
description: if you wish to make a great hacker from scratch, have them reimplement the universe
series: Obvious Heresies
tags:
- Hackers
- Open Source
- Politics
- Professions
---

Duplicating effort, not reusing work product, makes good software, because duplicating effort, not reusing work product, makes good programmers.  Technical progress is people progress.  Openness contributes by making good programmers.

Alas, the sensibilities of many thoroughly developed coders turn on duplication of effort as soon as it has worked its magic on them.  Instead of ten implementations of an approach, each of which gets a different ninety percent of the way there, the engineering ideal, conceived top-down, craves a single, shared, golden reference standard.  It advances that implementation in lock step with the validated state of the art.  It eliminates the conditions---the crucial human conditions---that made it possible in the first place.

Prevailing thought about open source reinforces this self-limiting reflex.  Public development puts source code out there.  Generous licenses permit reuse of what's been found.  Forks and self-governance facilitate improvement and maintenance, percolating new optimizations and approaches down to widely adopted projects.  In this frame of mind, open source exists both _for_ and _because of_ reuse.  Reuse is what software "wants", and software gets what it wants.  So the path to broad, free distribution was duly blazed, paved, and named.  That's "open source", just as nature ordered.

This narrow view of open privileges some aspects of what open practice is and does, while hashly downplaying and eliding others.  For example, reuse-focused views of open software systematically undervalue open source code as something for "users" to read rather than run, as a vector of education, as existence proofs for solutions to difficult problems rather than componentized embodiments of solutions.  It undervalues the effect that imitation, reengineering, and straight-up cloning has on what ends up available to use.

Linux remains the obvious example.  No Unix, no Minix.  No Minix, no Linux.  But Linux is almost thirty years old.  Both before and since, we have seen a nearly constant cycle of reimplementation, imitation, and accretion in the form of new programming languages, frameworks, architectures, and other systems.

Each upstart bidding to take the spotlight eventually comes under pressure to cover both the enduring standards and the hits of its predecessor.  Those gaps represent wide open windows of opportunity for new and less established programmers, who swoop in to port, reimplement, and adapt the "golden oldies" to the style, substance, and fashion of the aspiring new hotness.  The experience envelops them, socializes them, and levels them up, even if they came to the work with substantial prior experience.  Results flow from and contribute to the wave of popularity carrying both new system and early contributors to new notoriety and opportunity.

Ruby begat Rails, which remade web programming.  Rails in turn begat Node, which self-consciously sought a blank slate, without blocking I/O baggage.  But no sooner did the core of Node take shape than new began to imitate old.  Package management.  Web server middleware.  Test frameworks.  And so on.  Countless new project identities, and countless personal reputations for prolific contribution, filled the gap, expanding to fill newly available space.

Rewriting, rather than reusing, frequently forces programmers into code they may have depended on for countless projects but never actually read or even considered from the authors' point of view.  The naivete of the newcomer, together with the strong imperatives of the new platform, sets them on collision course with both the wisdom of prior coders, which they often lack, and the folly of the prior implementation's assumptions and constraints, of which they're usually ignorant or otherwise unburdened.  Beginner mind works its magic, recreating afresh and refining in the process.  As a side effect, it renders the mind beginner no more.  Which prepares the cycle for another round of uninitiated, undisciplined, thoroughly rejuvenating newcomer energy.

Convicting this cycle for waste misses two crucial points.

First, riding this cycle is fun.  It's engrossing.  It's exciting.  It lends to programming a sense of creativity and opportunity and novelty that reusing other folks' work does not.

More importantly as concerns open source, progress, from a programmer-centric view of programming, doesn't lie in an taller heap of tools, bits, and pieces in the great programming tool shed in the sky.  It lies in developing programmers who converse in a richer vocabulary of techniques and solutions, relieved of the heavier burden of inventing and implementing unguided, in unmapped territory.

Just as videos of skateboard tricks, calligraphy, guitar licks, woodworking projects, hair braids, and myriad other feats of craft and skill vastly accelerate progression in those endeavors, existence proofs for software methods and applications expand the well charted territory of programming.  They raise the baseline.  When you've seen it done, you know it can be done.  And you know it's a thing you can do.

In more familiar terms, publicly available software---free or not, open or not, with source code or not---expands the boundaries of what programmers think "can't be so hard".  Practically speaking, that thought is usually wrong.  Great software only looks simple from one point of view: the user's.  Don a different hat, see a very different picture.  But in an equally practical sense, such hubris is usually correct.  Having stripped away the uncertainty of whether it can be done, the coder faces a purer, smaller, more tractable challenge.  Starting with given knowledge of a variation that worked, without the noise of all the prior iterations that didn't, bestows an enormous head start

We say that possession is nine tenths of the law.  Publication is nine tenths of open source.  Psychologically, the biggest leap we take is deciding to work in the open, hushing our anxieties about embarrassing commits, throwaway designs, and dirty, uncommented, unrepentantly utilitarian code that puts the lie to any lingering delusion of architectural genius.  Tactically, putting software online also surrenders the strongest form of commercial protection available---secrecy---forfeiting the fantasy of 100% guaranteed esteem and control.  The Internet is not a person.  It cannot and does not want.  But tons of folks using the Internet want free stuff, test their limits, and discover what they can get away with.

The same Internet-enabled promiscuity that makes so many of us genre-hopping culture critics---not entirely unrelated to getting away with things on the Internet---can make us programming polyglots, too.  The result isn't specialization in any number of problems that only make sense and matter to other programmers---database guy, compiler girl, front-end cowboy, edit distance scholar---but a kind of diversely reinforced, adaptable competence.  But the proposition isn't either-or.  Reinvention will take the average programmer to a unique combination of use cases and design details that fingerprint them uniquely within the trade.

