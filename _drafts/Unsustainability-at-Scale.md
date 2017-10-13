---
title: Unsustainability at Scale
layout: post
tags:
- Open Source
- Business Models
- Licensing
---

Prevailing open source wisdom tells us to make every
practical choice about projects, from revision control to
licensing, to maximize adoption.  Adoption was open source's
great challenge of the last ten-plus years, and its great
success.  But single-minded focus on the adoption problem is
a recipe for the sustainability problem.  The sustainability
problem we don't know how to solve.

Our community is growing fast.  Part of making open source
software welcoming to new folks is hiding, making, and
consciously buying more and more choices for them, at least
to start.  Those of us in position to guide choices for
others should be very, very careful which choices we take
away, how we resolve them, and how we show our work.  If our
benevolent, friction-minimizing efficiencies merely scale
sustainability problems up to a larger community, those who
revisit our decisions and their consequences, down the line,
will wonder why we prescribed so much.  If we didn't have
the answers, why didn't we let newcomers find their own?
Didn't we grope in the dark, and find a way, in our time?

I wouldn't call out any single contribution to the new
"defaults" of open source as ill-intentioned or glaringly
daft.  But in the aggregate, we're reinforcing problems that
we know hurt some parts and concepts of our community, and
advantage others.  We keep ourselves happy and busy,
confidently entrenching what we feel we've got down, instead
of facing down what we don't.  That can make the problem
harder, not easier, to solve.

I have been my own small part of the problem, for all the
right reasons.  I'd like to talk about that problem, and
some reasons.  I'd like to show some work behind choices
made.  Behind what I'm doing now.

This piece kicks off a series in which I'll try to do just
that.

## Concretely

What do I mean by taking decisions away, or hiding them?

For a long time, `npm init --yes` set license metadata for a
new JavaScript package to `ISC`, for The ISC License. The
ISC License is rare---except on npm, because it was the
default---but it's not wrong. Especially if you didn't know

```shellsession
license: _
```

would be one of the prompts for a new package.  Especially
if you didn't know what any good answers might be.

On balance, at least in isolation, toolmakers and service
stewards rightly choose these kinds of defaults.  Even if
we're willing to concede, when beginners ask, that the
choices we've baked in aren't perfect, that they skate over
controversy, that we don't totally understand their
ramifications in every detail.  ISC says nothing about
patents.  It's a very, very permissive license.  What's the
difference between ISC and MIT, anyway?

But I've noticed that when it comes to community and
collaboration matters, rather than more purely "technical"
topics, we tend to skip past our native, quasi-technical
vocabulary of defaults and trade-offs.  We reach more
readily for prescriptive absolutes and strident
superlatives: "the norm", "the standard", "best practices".
We imply not only confidence in the wisdom of our choices,
borne of experience in one corner of the broad and expanding
universe of open source or another, but confidence in their
exclusive and universal correctness, alone and as a package
set.  We may not mean to take such bounding rhetorical
leaps, but from the outside, and to many newcomers who can't
yet tell we're code-switching, that's what we seem to do.

You don't have to scratch that veneer of certainty very deep
to find doubt.  We're not preaching any gospel, or at least
any widely accepted gospel.  What we we're doing is
"convention over configuration" all over again.  Convention
for how code gets made, rather than what it does, or how.

## The Wheel

What's so bad about convention over configuration, then?

For example, I shudder to think just how much about SQL data
stores I "learned" from DHH's Ruby on Rails screencasts.
Things about data stores those screencasts seemed to assume
I already knew.  Things `rails create` assumed I wanted.
Things I didn't know much of anything about.

Oddly enough, now that I do know a thing or two, I happen to
find myself using SQL data stores, and Rails, less and less.
I went from using SQL for everything under the sun, because
it was what I knew or felt good about knowing, and part of a
package that impressed me, to a more nuanced view. SQL data
stores weren't the "right answer", at least outside the
Rails mentality.  For a time, however, I think SQL data
stores, one chapter in a tome of Rails conventionality, were
good for me, as a programmer.

That's a good open source story, isn't it? Starts in rural
Texas.  Runs up to today, in the San Francisco Bay Area,
neck deep in the open source community, paying the bills.
From A to B, one small step at a time. Having choices made
for me. Making more choices on my own. Revisiting choices.
Those I made.  Those made for me. A full, happy circle, each
time.  A progression.

## Broken Spokes

Why can't governance, licensing, collaboration, community
norms, and the rest slot into that kind of story? Sure, we
could be more careful, more mindful to document what we
choose for others, so they can read up when the time comes.
But why spread as-yet irreducible doubt around on newcomers,
before they've had their chance to do a spin of their own
around ignorance-to-enlightenment wheel?

Because governance decisions, culture decisions, community
decisions, and legal decisions are different.  They're
people decisions, not code decisions, even when we codify
them in software.  People are not so easily replaceable, so
fundamentally mutable, engineerable, mendable.  Neither are
their relationships: collaborative relationships, legal
relationships, work relationships, relationships of
authority, whatever "normal" or "open source" mean, and how
we all relate to that.

We old hands aren't better engineers of community
sustainability for having engineered a lot of software, or
having internalized the community as it is now, full of
people like us, and so rife with the problem.  We're
motivated.  We know our way around.  Many of us care,
deeply, about the problem and its casualties.  But it's new
people, with all their perspective and diversity of
experience, who are most likely to see the problem in new
ways, wander into solutions for a community that will only
look more and more like them.  Sure, they don't know their
way around quite so well yet.  But they're not so set in the
ways that make the problem, either.

## Toolmarks

All my work on sustainability---from [Switchmode] to
[License Zero] and the [Berneout] experiments---tries to
make new choices available to developers, to put more
options in the mix, rather than to prescribe approaches, or
to reinforce defaults.  All on the off chance that one or
the other will make a sustainable new combination possible.

Here is what I think I know about the sustainability
problem.  Here is the understanding that motivates and
connects the projects.

[Switchmode]: https://github.com/switchmode

[License Zero]: https://licensezero.com

[Berneout]: https://berneout.org

## Undefined

We've socialized a name for the
problem---"sustainability"---but that's about it.  There's
nothing like consensus on a definition, even if there's
consensus that certain bad episodes qualified as
"sustainability issues".  All of that's to say, it is still
very early days.  Or rather, we're really behind on this
thing.

When I use "open source sustainability", I think in terms of
people who give into open source software getting at least
as much out, at times and in ways sufficient to buttress a
long and happy productive life, in all kinds of software
development.  In a sustainable open source world, developers
would do the most valuable work they could do, the work they
think most helpful to others, in the best ways they know
how, without fretting they'll be swallowed, personally or
financially, by some gap in an otherwise continuous
value-in, value-out equation.  The free-rider problem isn't
necessarily solved with academic rigor.  But it rarely if
ever takes a casualty, by withholding or delaying a
contributor support for so long that they tap out or
implode.

This is _not_ a frivolous world, a socialized artists'
paradise conscripting humdrum industries into support for
every speculative and fanciful endeavor of an elect.
Rather, it's a world where humdrum value sees its way to
those producing not just finished products, but raw
materials and components, as well.  A world where a good
programmer can work from 18 to 80, making a good living and
non-rivalrous goods all along the way.

Neither is this a world defined primarily in terms of
aggregate outcomes, played out across interchangeable
individuals. Not a world where more and better free-to-use
software keeps falling from the sky, only because naive or
indifferent players can be convinced to make it rain.  Not a
continuous processing of willing maintainers, ready to take
over, one after another, as their predecessors inevitably
burn out or go broke.

I see open source sustainability from the bottom up, in
terms of individuals making good and rational decisions that
add up in a good way.  Not as an aggregate to be managed or
theorized, well or poorly, from the top. And I see it as a
viable alternative to proprietary software across the whole
spectrum of what software can do.  Not localized, say, to
beginners training up in the community, at one extreme, and
deduplication of big-company salaryman effort, on the other.
Not confined to the generic, interchangeable bits of
proprietary products and services.

## Tolerances

Intellectual property laws embody a theory of how to solve
the sustainability problem as I've defined it. In a
nutshell, take things that are easy to borrow and reuse from
others, like software and techniques implemented in
software, and make it possible to charge for them, by making
it possible to sue for use without permission.  In other
words, make paying people who make software a market
problem, like paying iron miners, or factory workers.

The intellectual property approach doesn't say anything
about to how to make the market itself efficient.  And in
fact communicating availability, disseminating price
information, negotiating sales, recording transactions,
collecting and paying taxes, and so on, can be painfully
slow and expensive.  More expensive than making some good
software.

Open Source as we know it today embodies an almost totally
contrary theory of sustainability. In a nutshell, open
source takes software the law allows us to keep to ourselves
and charge others for using, and gives everybody a copy and
permission to use it.  In other words, take something that
we're supposed get through the market, like iron and
automobiles, and treat them like sunshine, instead.

This open source approach doesn't say anything about where
developer compensation and motivation are going to come
from.  And in fact learning to program computers,
identifying problems, implementing solutions, refining
approaches, addressing bugs, and helping others use the
results takes a whole lot of time, discipline, and effort.
Time, discipline, and effort that only the most fortunate
among us can do for very long without pay.

Conventional intellectual property thinking tells us that
market mechanisms for paying software people will be
efficient.  Those mechanisms are pretty efficient.  But
their inefficiency is bad enough that marketing costs more
than providing some great software.

Conventional open source software thinking tells us that
people and companies who don't need or care about the
financial cost of making software will provide abundant,
quality, well maintained software for all.  Lots of great
software comes from those folks.  But a lot of great
software never gets made, or isn't open source, because it
takes people and companies who need money to make it.

We see these dynamics play out in open source software every
day.  A great deal of open source comes from students,
hobbyists, and free time.  And a great deal of open source
comes from large corporations, who have the financial or
strategic flexibility not to care whether or how the cost of
making it comes back.  As a young programmer, you start a
project that catches on, and find yourself holding a job
offer to come work for a big company.  As a large
corporation, you release a large, stable project as open
source, so you can start receiving bug reports from others
who don't want or expect any compensation for their work.

In between, things don't make so much sense.
