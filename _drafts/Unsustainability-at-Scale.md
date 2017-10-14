---
title: Unsustainability at Scale
description: replicating a known problem
layout: post
tags:
- Open Source
- Business Models
- Licensing
---

_first in a series_

Prevailing open source wisdom tells us to make every
practical choice about projects, from revision control to
licensing and distribution, to maximize adoption.  Adoption
was open source's last great challenge, and its latest great
success. But single-minded focus on the adoption problem is
a recipe for the sustainability problem.  The sustainability
problem we don't know how to solve.

Our community is growing fast.  Part of making open source
software welcoming to new folks is guiding, hiding, and
making more and more of newcomers' choices for them, at
least to start. Those of us in position to guide choices for
others should be very, very careful which choices we take
away, how we resolve them, and how we show our work.  If our
benevolent, friction-minimizing efficiencies merely scale
sustainability problems up to a larger community, those who
revisit our decisions and their consequences down the line
will wonder why we prescribed so much.  If we didn't know
the way, why didn't we let newcomers find their own, but
rather confine them to a narrower and narrower?  Didn't we
find our own way, grasping in the dark, in our time?

I wouldn't call out any single contribution to the new
"defaults" of open source as ill-intentioned or entirely
ill-considered.  But in the aggregate, we're reinforcing
problems that we know hurt some concepts and constituencies
of our community, and advantage others.  It's easy to stay
happy-busy confidently entrenching the little things we feel
we've got down, instead of facing down what we don't, and
how the two relate.  There will be no _deus ex machina_
showering rent money and health insurance on maintainers.
Baking in the ingredients is baking in the problem.

I have been my own small part of the problem, for all the
right reasons.  I'd like to talk about that problem, and
some reasons.  I'd like to show some work.  Here's a start.

## Concretely

But what do I mean by guiding decisions?  An example's in
order.  A choice, baked into software, that I didn't make
myself, but might have made in more or less the same way.

For a long time, `npm init --yes` set license metadata for a
new JavaScript package to `"ISC"`, for The ISC License. The
ISC License is rare---except on npm, for reasons now
apparent---but it's not wrong.  Especially if you didn't
know

```shellsession
license: _
```

would be one of the prompts for a new package.  Especially
if you didn't know what any other valid answers might be.

This is one of scores of examples, some longstanding, some
altogether pretty new, of tools obvious encouraging specific
community behavior.  Creating a website per project.
Organizing a chat channel for support. Publishing separate
documentation. Accepting pseudonymous issues and patches.
Using Git. Releasing many versions. Maximizing platform or
language version compatibility. The list goes on and on.

On balance, at least in isolation, toolmakers and service
stewards rightly facilitate these kinds of practices.  Even
if we're willing to concede, when asked, that the choices
we've encouraged aren't surefire trade-offs, that they're
easy to adopt, and hard to maintain, that they skate over
controversy, that we don't totally understand their
ramifications in every detail.  ISC is short, but it says
nothing about patents. It's a very, very permissive license,
and that's not the only kind.  What's the difference between
ISC and The MIT License, anyway?

But I've noticed that when it comes to community and
collaboration matters, rather than more purely technical
topics, we tend to skip past our native, dry, aspirationally
objective technical vocabulary, reaching instead for
prescriptive absolutes and strident superlatives: "the
norm", "the standard", "best practices".  We start sounding
like business management consultants, implying not only
confidence in the practical wisdom of our choices, borne of
experience in one corner of the broad and expanding open
source universe or another, but confidence in their
exclusive and universal correctness, alone and as a package
set.  We may not mean to take such bounding rhetorical
leaps, but from the outside, and to many newcomers who can't
yet recognize code-switching, that's the confidence we
project.  That's the force of orthodoxy the new and insecure
are wired to notice, to internalize.

You don't have to scratch the veneer of certainty very deep
to find doubt.  Doubt, I think, is part of what we're hiding
behind a change to more daring diction.  We're not preaching
any gospel, or at least any universal gospel, and we know
it.  We're doing "convention over configuration" again, but
for how code gets made, rather than what it does, or how.

## Circles

What's so bad about convention over configuration?

A personal confession.  I shudder to think just how much
about SQL data stores I "learned" from DHH's Ruby on Rails
screencasts. Things about data stores those screencasts
seemed to assume I already knew.  Things `rails create`
assumed I wanted. Things I didn't know much of anything
about.

Oddly enough, now that I do know a thing or two, in large
part thanks to the Rails team, I happen to find myself using
SQL data stores, and Rails, less and less. I went from using
SQL for everything under the sun, because it was what I knew
or felt good about knowing, and part of a package that
impressed me, to a more nuanced view. SQL data stores
weren't the inevitably right answer, at least outside the
Rails mentality.  For a time, however, I think SQL data
stores, one chapter in a tome of Rails conventionality, were
good for me, as a programmer.

That's a good open source story, isn't it? Starts in rural
Texas, with nothing but a small pipe to the 'Net.  Runs up
to today, in the San Francisco Bay Area, neck deep in the
open source community, paying the bills. From A to B, one
small step at a time. Having choices made for me. Making
more choices on my own. Revisiting choices. Those I made.
Those made for me. A full, happy circle, each time.  A
progression.

## Exceptions

Why can't governance, licensing, collaboration, community
norms, and the rest all slot into that kind of story?  Sure,
we could be more careful, more mindful to document what we
choose for others, so they can read up when the time comes.
But why spread as-yet irreducible doubt around on newcomers,
before they've had their chance to do at least one lap
around the ignorance-to-enlightenment merry-go-round?

Because governance decisions, culture decisions, community
decisions, and legal decisions are different.  They're
people decisions, unavoidably political decisions.  Not code
decisions, even when we codify them in software.  People are
not so easily replaceable, so fundamentally mutable,
engineerable, mendable.  Neither are their relationships:
collaborative relationships, legal relationships, work
relationships, relationships of authority or admiration,
whatever "normal" or "open source" mean, and how we all
relate to that.  Code is not easy.  But code is the easy
part when people are involved.

The making-code conventions on the rise these days unify on
a theme.  They maximize use of a project by means that
entail added, ongoing maintenance and attention demands on
maintainers early and often, at the expense of long-term
planning for commensurate outside support.  Support that
follows no more readily from use alone than use follows
readily from software quality alone.  Defer work on means of
converting traction into contribution to spread the load and
fiscal support, to reward and sustain it, until you have
traction.  It's the VC-funded startup model, with one
conspicuous omission: anybody else's capital.

Unhelpfully, in the jargon, we speak of use in aspirational
terms from the very first.  We call it "adoption".  Adoption
implies the support and contribution we want to see, but
don't, not the steep contributor-user amplification factor
that defines a successful project in the current zeitgeist.

A maintainer accidentally cuts a bad release.  The next
morning, they find their inbox stuffed with user complaints.
None of the users were known to the maintainer before the
breakage.  In fact, the maintainer's shocked by the
apparent, heretofore unknown popularity of their project.
In no meaningful sense did those users "adopt" the project.
They used it.  If all they offer now is specifications for
more maintainer work, they are using the project.  And the
maintainer.

Unhelpfully, many of the choices that add up to these kinds
of outcomes, from licensing to project scope to the
expectations all these best practices engender in users, get
made very early on, develop path-dependency over time, and
defy later correction.  By the time you learn that
"sustainability" was a whole class of known community
problems waiting for you all along, you may have surrendered
every good business model and have a pack of rabidly
entitled users nipping at your heels, baying to swap you out
for fresher blood.  You've invested all you had, and you've
no chips or leverage left to play.  Thank you for your
service.  Step aside.

Unhelpfully, if you sit them down, many old hands will
readily tell you to pick and choose, to plot a more moderate
course.  But the tools and services many of them build,
guiding, hiding, and making those choices for you, send a
very different, implicit message.  The message built into
those tools and services, their aggregate impression, is
that best practice is to give more-more-more, ask
essentially nothing back, and trust that when use outruns
your wildest dreams, even a remarkably low-yield play
converting use to sustenance, like begging for-profit
corporations for money, will keep you going.  In short, they
read like a checklist, not a dinner menu.  Results are
anything but moderate.  Developers go to the extreme.

## Humility

We old hands aren't better engineers of community
sustainability for having engineered a lot of software, or
having internalized the community as it is now, full of
people like us, and so rife with the problem.  We're
motivated.  We know our way around.  Many of us care,
deeply, about the problem and its casualties.  But it's new
people, with all their perspective and diversity of
experience, who are most likely to see the problem in new
ways, try new approaches, and wander into what works for a
community that will see things more and more as they do.
Sure, they need a little handholding right now.  They may
not even see the sustainability problem coming, or imagine
it as a badge of success.  But they're not so set in the
ways that make that problem, either.

## Motive, Reformed

All my current, public work---from [the blog] to
[Switchmode] to [License Zero] and the [Berneout]
experiments---tries to explain developer choices, and also
to offer new ones.  All to put more informed choosers, and
more choices, into the open source mix.  All on the off
chance one or more may play a role in a new, working
combination that solves the sustainability problem.  Not to
prescribe approaches, or to reinforce defaults, that don't.

[the blog]: https://writing.kemitchell.com

[Switchmode]: https://github.com/switchmode

[License Zero]: https://licensezero.com

[Berneout]: https://berneout.org

These are early days.  We've socialized a name for the class
of issues---"sustainability"---but that's about it. There's
nothing like consensus on a definition, even if there's
broad agreement that certain well publicized episodes
qualify or exemplify.

My approach is consistent with how I read "sustainability":
from the bottom up, in terms of individuals making good and
rational decisions that add up in a good way.  I think in
terms of people who give into open source software getting
at least as much out, at times and in ways sufficient to
buttress a long and happy productive life, in all kinds of
software development.  In a sustainable open source world,
developers would do the most valuable work they could do,
the work they think most helpful to others, in the best ways
they know how, without fretting they'll fall through some
gap, personally or financially, in a discontinuous value-in,
value-out equation.  The free-rider problem isn't
necessarily solved with academic rigor.  But it rarely if
ever takes a casualty, by withholding or delaying a
contributor support for so long that they tap out or
implode.

This is _not_ a frivolous world, a socialized artists'
paradise conscripting humdrum industries into patronage for
every speculative and fanciful endeavor of a cloistered
elect. Rather, it's a world where humdrum value sees its way
to those producing not just finished products, but raw
materials and components, as well.  A world where a good
programmer can work, without becoming any notable exception,
from 18 to 80, making a good living and non-rivalrous goods
all along the way, just as they might make a good living and
nothing but proprietary software today.

In a way, I'm trading one blurry definitional mess for
another.  But it's enough to distinguish my view from the
other candidate vying for mindshare:  a definition of
"sustainable" in aggregates, that's satisfied so long as
more and better free-to-use software keeps falling from the
sky, if only because naive or financially indifferent
players can be convinced to keep making it rain.  Not a
continuous procession of willing maintainers, ready to take
over, one after another, as their predecessors fall.

It's hard to define "sustainability" without showing cards
on the definition of "open source" or "the community"
itself.  For me, the community will never be just an
auxiliary to industry, an aggregate to be managed and
theorized, harvested and leveraged, from the top and the
outside.  Nor a mere mechanism for deduplication of
salaryman effort, a demilitarized zone between industry
players who can afford to write off a few engineers.  I see
open source as a viable alternative to proprietary software
across the whole spectrum of what software can do. Not
localized to beginners and the addicted.  Not confined to
the generic, interchangeable bits of proprietary products
and services.
