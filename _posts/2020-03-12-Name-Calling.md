---
title: Name Calling Isn't Precise
description: “neo-closed” will come and go
tags:
- Open Source
- Business
- Business Models
---

[Dirk Riehle's blog](https://dirkriehle.com/) is a gold mine.  I've said it [before](https://writing.kemitchell.com/2020/02/27/Ethics-Mess.html).  I'm saying it again.  His latest is ["Please Help Keep Our Language Precise"](https://dirkriehle.com/2020/03/12/please-help-keep-our-language-precise-single-vendor-open-source-is-neo-proprietary-source-not-closed-source/), a plea against branding businesses leading their own open source projects "the new closed source".

Appearing against hyperbole in the name of precision, Dirk's post includes a nifty, four-quadrant chart that plots open or closed license and open or closed process as independent axes, yielding four distinct quadrants: "community open source", the "proper open source", "closed source", "user innovation", and "single-vendor open source".  Dirk has worked to popularize the last for a few years now.  He also submits "neo-proprietary" as a less-wrong jab at single-vendor projects, to hedge.

A provocation: How would we plot Mozilla Firefox on Dirk's chart?

The license part is easy, at least by free association.  Firefox comes under the Mozilla Public License 2.0, an open license.  Assuming we still consider copyleft "open".  Even though MPL was drafted by a for-profit corporation specifically to protect its "official" release by preventing meaningfully competitive forks.  That's forks of code, but also, transitively, forks of process and control.

In terms of simple perception, the process part might feel easy, too.  Firefox makes a big show, and a big effort, of open process.  I mean that sincerely.  Over a long run of years, and after an infamously difficult start, they have indeed seen contributions from thousands of individuals, "outside" contributors among them.

But that simple box-ticking view underplays how much of Firefox comes from one company, the Mozilla Foundation.  The foundation is the "inside" that makes the "outside" in "outside contributor" meaningful.  Grouping it obviously open-open just the same overplays the uniqueness of Mozilla's resolve to work openly despite its corporate center of development mass.  Some _commercial_ stewards of open-licensed projects make similarly earnest efforts to do their projects open.  And as a practical matter, many make tooling, platform, and process choices, such as using GitHub in 2020, that better welcome play with others.  Many of the same choose broad permissive licenses, like Apache 2.0, that better facilitate independent forks capable of stealing the original project's thunder, if playing together doesn't work out so well.

Criticizing a 2D chart for treating its axes as either-or propositions, rather than continua, remains as trite as bad greeting cards.  But I'd follow that path to two more interesting places.

First, why do we want to make these new distinctions?  Does the new, crisply-lined taxonomy help us achieve anything practical?  Do those neat categories make all of us---or just some of us---more competitive or successful?  Or are the clean lines simply more pleasing, conceptually?

Second, to what extent is each axis independently useful, as an either-or proposition or as a continuum?  For whom do the axes represent salient, actionable characteristics, and in which circumstances does treating them as independent reveal actionable insight?

If it helps, we can look at other attempts to name new categories and fit them on four-square charts.

Over at the [License Zero blog](https://blog.licensezero.com), I performed a similar maneuver, with a similar four-quadrant graph, in ["Against the Two Party System"](https://blog.licensezero.com/2018/09/16/two-party.html).  My axes were license terms and source availability, rather than license terms and development process.  And my point was transparent: to make mental and ideological room for noncommercial, strong-copyleft, code-of-conduct, and other kinds of licenses.

The directed, instrumental use of this kind of four-quadrant model comes across even stronger in [the Nolan chart](https://en.wikipedia.org/wiki/Nolan_Chart).  If you discovered you're libertarian through a personality-style style quiz on the 90's Web, it's no wonder.  David Nolan, the guy who drew the chart, cofounded the Libertarian Party of the United States.  Advocates for Self Government, a libertarian organization, [turned it into a quiz](https://en.wikipedia.org/wiki/World%27s_Smallest_Political_Quiz).  Orderly the chart is.  But orderly doesn't mean neutral.

As a first-pass heuristic, whenever we see new put-downs in the open software space, or creative attempts to stretch bad-guy categories like "closed" for that matter, we're wise to suspect the motivation is _differentiation_, usually commercial, occasionally ideological, sometimes both, where those streams cross.  That is where coining put-downs and slapping them on other people's work has seemed useful through the short annals of industry history.

In _Open Systems: The Reality_, a 1993 compendium of "open systems" ado from long before the dawn of "open source", the editors, both from IBM UK, quote an anonymous Network World 1991 attendee:

> It took me a long time to understand what (the industry) meant by open vs. proprietary, but I finally figured it out.  From the perspective of any one supplier, open meant "our products."  Proprietary meant "everybody else's products."

The book's numerous forewords, and eventual editorial preface, admit straight-up that there was no agreement on the definition of "open", other than that it was good.  Eventually they ask "If open systems is the solution, what is the problem?" and resolve on business benefit, pure and simple.  The editors saw "open" and "proprietary" not as opposing camps, but as opposing factions within a movement.  Open considered good.  Customers want it, gotta have it.  So every vendor wants to _be_ it.  Grab-ball ensues.  The usual.

Recurring themes do resonate.  One is sole-vendor dependence.  It's tempting to draw blind parallels to open source and single-vendor projects.  But it's also tempting to point out that under an open license, if you don't like it, you can fork it.  But the either-or implied by those positions isn't realistic.  Even if we drew them out in shades of gray, rather than stark black and white, we'd find that continuum---that axis---just isn't very useful to plot.

In a perfect software world, some cheerful hacker would gleefully do all the software work I want for free, just as I want it done, and give it to me gratis, all on the double.  Alas, [corvée labor](https://en.wikipedia.org/wiki/Corvée) might build a perfect world for me, and I'd likely feel inspired to run around associating my interest with "public goods" and the common weal.  But it would not make such a perfect world for the laborers.  Out in the great economic soup of unavoidable trade-offs we know as reality, work and benefit aren't acyclic graphs.  There's the software we want, our ability to make it, and our permission to make it.  There are other people who could make it, too.  But there is also limited money and time, which everyone wants for their efforts, to keep and to spend.

The received wisdom of open licenses is that once you have one, along with the source code, you have what you need to make the software you want.  But that assumes you're willing and able to pony up the money, time, and talent to turn what you have into what you need, and that you know that's what you ought to do to begin with.  But nobody gets too far ahead spending honest time, money, and work meeting their own needs.  The trick, if you want to strike it rich or pay your finance, is getting other people to do the work for less than you can make on it.  Best case, for nothing at all.  I've heard [Mako Hill](https://mako.cc/) say [there's lectures on this at Harvard B school](https://youtu.be/vBknF2yUZZ8?t=1507), and not for free software people.  Great talk, by the way.

Occasionally, software is simply so good and so useful that nobody thinks much about maintenance or changes.  Very occasionally.  If you count clones and ports, actually, arguably never.  And for the vast majority of existing and potential programs, which need maintenance and changes, the development consciousness and capability of would-be consumers vary widely.

Large tech companies are known to have engineers between projects, underutilized, or committed to an open source contribution plan.  Sometimes to the point where they put them in an attic and tell them to keep themselves busy for a while, rather than spend the time to tell them what to do, and [a famous operating system pops out](https://www.princeton.edu/~hos/frs122/unixhist/finalhis.htm).  Even so, such companies are often conditioned to look for governance structures they can join and influence with small, quarter-by-quarter commitments.

On the other end of the spectrum, most users and organizations have no coding capacity at all, and certainly none to spare.  They must rely on others not just for the software they know they need, but for software that tells them what they need, or at least what they can have.  If the price of influence must be paid in development time, these users haven't any coin.  Attempts to simply buy influence outright often prompt some dismay.

Until a project hits the big time, thus attracting many new companies who want a piece of the support, consulting, hosting, and other action, Dirk's "single-vendor open source" companies can represent the optimum.  When they do a good job, there's no pressing need for their users to internalize development, maintenance, or design functions.  If and when a user wants to buy something extra, it's relatively clear what's available and who to get it from.

This irks other software companies, who face a kind of cost-benefit chasm between small-market projects looked after by one firm, which they don't care about, and large-market projects whose users---or rather, the pricey "technology partners" speaking for them---can overcome the coordination and startup costs of a "community" fork, governance "reform" campaign, or both.

From one point of view, single-vendor open projects prevent other firms from competing with, or interposing themselves between, their clients and a newly rising project, at least on equal footing.  A separate deal for the new hotness dilutes the incumbent vendors' grips on their domains.  From the bottom looking up, conversely, single-vendor dynamics protect single vendors from bigger vendors, enabling them to reap the rewards of developing a product, a process, and market demand for their outputs.  They don't want to serve as disposable tech and market R&D, a kind of [forlorn hope](https://en.wikipedia.org/wiki/Forlorn_hope) for large firms.

I live in Oakland, in the greater San Francisco Bay Area.  I am tired of reading and hearing a certain kind of person call nearly anything they can "a startup".  But to take that metaphor, which might be familiar, and run with it: To a first approximation, single-vendor open project stewards want to make sure that if big companies want to reap the rewards of their efforts, they have to acquire, or at least cut a deal.  Not simply wait until the work of establishing product-market fit is done, and run the same play with all their incumbent advantages, trampling the company that proved the proposition.

"Single-vendor open source" is, itself, a mighty simplification.  But I think it's a useful one for policy analysis, as distinct from competitive knife fighting.  It's a neat, short name with accurate denotations and neutral connotations for the class of projects at ground zero of a lot of pressing vendor-vendor maneuvering, politicking, and drama.  It also invokes the end-user point of view, rather than some insular ideological purity rubric among geeks.

But I don't expect Dirk will have any luck convincing the folks who like "new closed source" or "neo-proprietary", full source code and a broad public license be damned, to give up the grody bite of their prickly pejoratives for the clean cut of clinical precision.  The utility they're after in new, involuntary brands goes to competitive differentiation, marketing war, and developer politicking.  The words they choose reflect those goals.  Collateral damage elsewhere is acceptable.

There's a long history of this in open software.  We've all seen RMS [try to undermine things he doesn't like by giving them bully nicknames](https://www.gnu.org/philosophy/words-to-avoid.html).  And we've seen his imitators follow suit.  I almost blogged about a recent attempt to rebrand dual licensing, which involves neither "proprietary" software nor "relicensing" as we know them, as ["proprietary relicensing"](https://sfconservancy.org/blog/2020/jan/06/copyleft-equality/).  But thankfully, I realized I didn't have to.

We keep seeing this name game because it's fun to play, not because anyone ever wins.  Belittling nicknames are a time-honored symbol of domination ... if you have power to begin with.  [God bade Adam name the animals](https://www.kingjamesbibleonline.org/Genesis-2-19/), and apparently got away with it.  Wikipedia has a [cringe-inducing table of the nicknames George W. Bush bestowed on staff and world leaders](https://en.wikipedia.org/wiki/List_of_nicknames_used_by_George_W._Bush), which mattered a great deal more when he was president.  But as far as I know, none of RMS' name-calling ever caught on outside his immediate, often transient, influence.

It's been exceedingly RMS of him to keep speaking his own language anyway, increasingly divorced from the common tongue.  But the practice has come to speak more of RMS than of his targets.
