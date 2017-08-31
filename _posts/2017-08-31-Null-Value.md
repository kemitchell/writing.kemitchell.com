---
title: Null Value
description: against demise of the hacker public license
layout: post
tags:
- Licensing
- Open Source
- Policy
---

We all learn that open source licenses make open source community possible.  And then we learn they're the one piece of that community we're not to touch.  Flame about them?  Sure.  Hack on them?  Forget about it.

We all learn the origin stories of GNU and Free Software.  How hacker spirit and some clever lawyering turned copyright around on itself, and stuck it to the NDA-wielding, binary-distributing Man.  And at some point, we all gather that those brash, creative days are over.  That we're best off picking one of the songbook standards---MIT, BSD, GPL for the brave and true---faithfully reproducing onto our code, and praying to the Law Gods for no more than our just share of drama.

The hood of the license machine is welded shut.  Standards have come to nest inside.  Tooling and Best Practices have rusted it over.  The jukebox only plays the hits.  Anything else literally does not compute.  Mea culpa, mea culpa, [mea maxima culpa](https://github.com/npm/npm/releases/tag/v2.10.0).

Ossification has coincided with a decline of Free Software spirit.  Of course, there is still much great software under the GPLs, and new GPL software every day.  But whole sub-industries have gone over nigh on entirely to permissive licenses, often [short, crusty ones](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html), and ignored the attribution requirements, to boot.  Even GPL people will tell you that AGPL is the real deal, that it [squashes a bug in integration with industry reality](https://www.gnu.org/licenses/why-affero-gpl.html).  Many of the same folks will tell you that, empirically, AGPL is user repellent.

"Don't write your own license", they say.  And for a thousand good reasons, I usually say so, too.  Even to fellow lawyers.  Especially to this one.

The net effect has been to drain the verve of license terms as a medium to express and implement community goals, save "trouble us less with law-stuff".  In other words, licenses have devolved to utilitarian tools of hassle reduction.  Long permissive licenses harbor all manner of licensee-do lists that we find inconvenient.  So we use the shorter ones.  Copyleft licenses wax vague and inconvenient.  They breed license compatibility issues.  [So we ditch copyleft.](https://www.youtube.com/watch?time_continue=529&v=exhk6sS5_0I)  Hither, [antilicenses](http://www.wtfpl.net/).

When new values and social aims arise---inclusivity, to pick an obvious example, abuzz at the moment---we [put them in entirely different files](https://www.contributor-covenant.org/).  Privacy, DRM, surveillance, broad patent termination---all relegated to other channels.  Attribution, source integrity, taking contributors' names in vain, project name protection---all in `LICENSE`, by apparent accident of history.

I lay the main part of the moral evacuation of licensing at copyleft's feet.  The copyleft license authors picked a very hard problem---more noble still for being hard---and plotted a course past many mines nobody knew lay in wait.  Teeth rattled.

It's too easy to pick on the GPLs, which balance the already hard task of getting copyleft right with projecting political statements and pleasing many stakeholders.  But even the "corporate" [copyleft](https://www.mozilla.org/en-US/MPL/2.0/) [licenses](https://www.eclipse.org/legal/epl-v10.html), which often gained clarity by less stricture and preambulatory warbling, prove hard to interpret and apply.  Compatibility issues spring out to snag them.  Fuel finds the fire of [assignment and contributor licensing kerfuffles](https://www.gnu.org/licenses/why-assign.en.html).

Copyleft was, at its core, a very, very clever hack.  One of the great ones in my profession's long history.  Give a public license, but use conditions to incentivize valued behavior, against the grain of copyright's prevailing policy view.  Brilliant.  But about as un-fun and tedious to maintain and apply, long term, as any other hack.  Tenuous, unexpected, novel, and weird enough to be indisputably clever.  But unexpected behavior from systems not designed with such behavior in mind.  And in the end, DRM won.  And surveillance.  And proprietary platforms.  And opaque Software as a Service.

The risk---largely, I think, realized---is generalization from a painful history of implementing Free Software values in license terms via copyleft to a broader, bleaker proposition that licenses aren't any kind of platform for value implementation.  That other than [reversing inconvenient legal defaults](https://oss.kemitchell.com/), license terms aren't good for anything but dodging inconveniences of law's own making.  That messing with them only breeds life-sucking bother.  Case in point, [The JSON License](http://www.json.org/license.html).

There are absolutely goals and policies that licenses cannot or should not attempt to ensconce.  But licenses aren't merely a place to register points or set expectations.   They're the interface to the law, which invests coders---making involuntary cameos as copyright holders---with [incredible leverage](https://www.gpo.gov/fdsys/pkg/USCODE-2010-title17/html/USCODE-2010-title17-chap5-sec504.htm), [at an individual level](https://www.gpo.gov/fdsys/granule/USCODE-2001-title17/USCODE-2001-title17-chap2-sec201), on problems they otherwise couldn't budge.  There are always limits, but just as open source licenses hobble developers economically, forcing them onto second-rate business plans, they also hobble developers politically, relegating them to softer power for other-than-economic aims they might set out to achieve collectively.

The result is a grotesque extension of industry-friendliness, to an extent I don't believe the coiners of "Open Source" ever desired or intended.  With the exception of GPL "crazies", whose presence must be tolerated, mostly no thanks to long-serving system software, for-profit users of open source software can grasp and take from a self-selecting heap of raw software material with even less concern for the non-product views and characteristics of open source software developers than employees on payroll.  Free---as in beer---software literally falls from the sky.  It doesn't want payroll, insurance, or even, apparently, much respect for its time, previously sunk or presently requested.  The give side of this give-take equation suffers much well-financed, lottery-winner-style celebration, to predictable and potentially tragic effect.

One definition of "sustainability" is perpetual harvest at this eat-all-you-can-pick plantation, seeded with proprietary software thrown over the wall, and mulched by a diverse population of code-capable, transient, and short-lived economic microorganisms.  That definition also jives with a very hard technical view of Open Source purpose: if good software keeps coming out, Open Source is working, and casualties don't count.  I don't resonate with that view, personally, but in any event, my professional obligations run to others who see a different way.  Other than natural industry alliance, there's nothing essential or inevitable about it, as the prime meaning of "Open Source".

If copyleft was version one of hacker values in legal code, it's no surprise bugs were found and squashed.  It would come as no surprise that finding and implementing community values in legal code might evolve as an art.  But that takes writing licenses.

Write them.  Crazies needed.
