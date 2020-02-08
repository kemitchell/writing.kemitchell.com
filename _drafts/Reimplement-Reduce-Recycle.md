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

Duplicating effort, not reusing work product, makes good software.  Because duplicating effort, not reusing work product, makes good programmers.  Technical progress is people progress.  Openness contributes to that progress not by making good software, but by making good programmers.

Alas, the sensibilities of many thoroughly developed coders turn on duplication as soon as it has worked its magic.  Instead of ten duplicative implementations, each of which gets a different ninety percent of the way there, the engineering ideal, conceived top-down, from the vantage point of a demigod or a king, craves a golden reference standard.  It advances that implementation in lock step with the validated state of the art.  It eliminates the conditions---the crucial human conditions---that made itself possible.

Prevailing thought about open source reinforces this self-limiting reflex.  Public development puts source code out there.  Generous licenses permit reuse of what's been found.  Forks and self-governance facilitate improvement and maintenance, percolating new optimizations and approaches down to widely adopted projects.  In the right frame of mind, open source exists both _for_ and _because of_ reuse.  Reuse is what software "wants", and software gets what it wants.  So the steps on the path to broad reusability and distribution were duly paved and called "open source".  As the rational imperative required.

That view privileges some aspects of what open practice is and does, while hashly downplaying and eliding others.  For example, reuse-focused views of open software systematically undervalue open source code as something for "users" to read as opposed to run, as a vector of education, as existence proofs for solutions to difficult problems rather than componentized embodiments of solutions.  It undervalues the effect that imitation, reengineering, and straight-up amateur cloning has on what's available.

Linux remains the obvious example.  No Unix, no Minix.  No Minix, no Linux.  But Linux is almost thirty years old.  Before and since, we have seen a nearly constant cycle of reimplementation, imitation, and accretion in the form of new programming languages, frameworks, architectures, and other systems.

Each upstart bidding to take the spotlight eventually feels competitive pressure to reimplement the enduring classics and newer achievements of its predecessor.  Those gaps open windows of opportunity for new and less established programmers, who duly swoop in to port, reimplement, and adapt the "golden oldies" to the style, substance, and fashion of the new hotness.  The experience levels them up, even if they came to the work with substantial prior experience.  That development both flows from and reinforces the wave of popularity carrying system and early contributors to better established positions.

Ruby begat Rails, which remade web programming.  Rails in turn begat Node, which self-consciously sought a blank slate, without blocking I/O baggage.  But no sooner did the core of Node take shape than new began to imitate old.  Package management.  Web middleware.  Test frameworks.  And so on.  Countless new project identities, and countless personal reputations for prolific contribution, filled the gap, enjoyed the space to expand.

Rewriting, rather than simply reusing, frequently forces programmers into code they may have used hundreds of times, but never actually read or even considered from the originator's point of view.  The naivete of the newcomer at that level of design, together with the strong imperatives of the new platform, sets them on collision course with both the wisdom of the prior coder, which the newcomer often lacks, and the folly of the prior work's assumptions, which they're critically positioned to avoid by fortuitous ignorance.  Beginner mind works its magic, recreating afresh and refining in the process.  As a side effect, it renders the mind a beginner no more.  Which prepares the cycle for another round of uninitiated, undisciplined, thoroughly rejuvenating mental energy.

Convicting this cycle for waste misses a crucial point.  Progress, from a programmer-centric view of programming, doesn't lie in an taller heap of code in the great programmer toolbox in the sky.  It lies in creating programmers who converse in a richer vocabulary of techniques and solutions, relieved of the heavier burden of inventing and implementing unguided, at the margin of practice.  Just as videos of skateboard tricks, calligraphic hands, guitar licks, woodworking projects, hair braids, and myriad other feats of craft and skill vastly accelerate progression, existence proofs for software methods and applications reduce the of uncharted territory in programming.

Broadly available software---free or not, open or not, with source code or not---thus expands the boundaries of what programmers think "can't be so hard".  Practically, those intuitions are usually wrong.  Great software only looks simple from one point of view: the user's.  Don a different hat, see a very different picture.  But in an equally practical sense, bold hacker intuitions are actually right.  As a matter of lived experience, quite apart from any underlying computer science, showing that something can be done makes doing it appreciably easier.  It strips away a whole dimension of uncertainty, presenting a purer, more tractable challenge.  It communicates what worked in highly distilled form, without the noise of all the prior iterations that didn't.

When you've seen it done, you know it can be done.  And you know it's a thing you can do.

We say that possession is nine tenths of the law.  Publication is nine tenths of open source.  Psychologically, the biggest leap we can take is working in the open, hushing our anxieties about embarrassing commits, throwaway designs, and dirty, uncommented, unrepentantly functional code that situates us so far short of the ideal of architectural godhead.  Tactically, putting software online also surrenders the strongest form of commercial protection available---secrecy---and forfeits the fantasy of 100% compliance with our rights and terms.  The Internet cannot and does not want anything.  But tons of folks online want free stuff, and discover they can get away with it.

The same Internet-enabled promiscuity that makes so many of us genre-hopping culture critics these days can make us programming polyglots, too.  The result isn't specialization in any number of problems that only make sense and matter to likeminded programmers---database guy, compiler guy, front-end guy, edit distance scholar---but a kind of diversely reinforced general competence.