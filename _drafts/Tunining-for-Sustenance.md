---
title: Tuning for Sustenance
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

Meanwhile, our community is growing, and fast.  Part of
making open source software welcoming to new folks is making
more and more choices for them, at least to start.  Those of
us in position to make choices for others should be very,
very careful which choices we take away, how we resolve
them, and how we show our work.  If our picks merely scale
sustainability problems up to a larger community, those who
check us down the line will wonder why we prescribed so
much.  If we didn't have the answers, why didn't we let
newcomers find their own?  Isn't that what we did, in our
time?

I wouldn't call out any single contribution to the new
"defaults" of open source as ill-intentioned or glaringly
daft.  But in the aggregate, we're reinforcing problems that
we know hurt some parts and concepts of our community, and
advantage others.  We keep ourselves busy confidently
entrenching what we feel we've got down, instead of facing
down what we don't.

I have been my own small part of the problem, for all the
right reasons.  I'd like to talk about that problem, and
some reasons.  I'd like to show some work.  Work behind
choices made.  Work behind what I'm doing now.

## Concretely

Before we dive in, a concrete example of what I mean by
"defaults" in open source.  An example that wasn't my call,
but one I'd've called more or less the same way.

For a long time, `npm init --yes` set license metadata for a
new JavaScript package to `ISC`, for The ISC License. The
ISC License is weird---except on npm, because it was the
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
ramifications in every detail.

But I've noticed that when it comes to community and
collaboration matters, rather than more purely "technical"
topics, we tend to skip right past our native "defaults"
vocabulary.  We reach more readily for prescriptive
absolutes and strident superlatives: "the norm", "the
standard", "best practices". We imply not only confidence in
the wisdom of our choices, borne of our experience in one
corner or another of the broad and expanding universe of
open source, but confidence in their exclusive and universal
_correctness_, alone and as a package set.  Often, our
sensibilities of correctness hold only as far as our
perspectives span wide.  Nobody sees the whole picture.

We're not preaching any gospel.  What doing "convention over
configuration" all over again.  Convention for how code gets
made, rather than what it does, or how.

## The Wheel

I shudder to think just how much about SQL data stores I
"learned" from DHH's Ruby on Rails screencasts.  Things
about data stores those screencasts seemed to assume I
already knew.  Things `rails create` assumed I wanted.  I
didn't know much of anything about SQL data stores.  I
didn't know that was a thing I might want for small
websites.

Oddly enough, now that I know a thing or two, I happen to
find myself using SQL data stores, and Rails, less and less.
I went from using SQL for everything under the sun, because
it was what I knew or felt good about knowing, and part of a
package that impressed me, to a more nuanced view. SQL data
stores weren't the "right answer", at least outside the
Rails mentality.  For a time, however, I think SQL data
stores, one chapter in a tome of Rails conventionality, were
good for me, as a programmer.

That's a good open source story, isn't it? Starts in the
middle of nowhere in Texas.  Runs up to today, in the San
Francisco Bay Area, neck deep in the open source community,
paying the bills.  From A to B, one small step at a time.
Having choices made for me. Making more choices on my own.
Revisiting choices.  Those I made.  Those made for me. A
full, happy circle, each time.  A progression.

Why can't governance, licensing, collaboration, community
norms, and the rest slot into that kind of story? Sure, we
should be more careful, more mindful to document what we
choose for others, so they can read up when the time comes.
But why spread our doubts around on newcomers, before
they've had their chance to do a spin of their own around
ignorance-to-enlightenment wheel?

Because governance decisions, culture decisions, community
decisions, and legal decisions are different.  They're
people decisions, not code decisions, even when we codify
them in software.  People are not so easily replaceable, so
fundamentally mutable.  Neither are their relationships:
collaborative relationships, legal relationships,
relationships of authority, whatever "normal" or "open
source" mean, and we how we all relate to that.

We old hands aren't better engineers of community
sustainability for having engineered a lot of software, or
participated in the community as it is now, full of people
like us, and so rife with unsustainable malfunction.  It's
the new people, with all their perspective and diversity of
experience, who are most likely to see these problems in new
ways, and wander into solutions that will work for a
community that looks more and more like them.  Sure, the new
folks don't know their way around the code world quite like
we do yet. But they're not so set in their ways as we are,
either. Their greatest contributions won't be code. And
that's how it's always been.

## Toolmarks

All my work on sustainability---from [Switchmode] to
[License Zero] and the [Berneout] experiments---tries to
make new choices available to developers, to put more
options in the mix, rather than to prescribe norms, or to
reinforce defaults.  All on the off chance that one or the
other will turn out to play a part in a sustainable
combination.

Here is what I think I know about the sustainability
problem.  Here is the understanding that motivates and
connects those projects.

[Switchmode]: https://github.com/switchmode

[License Zero]: https://licensezero.com

[Berneout]: https://berneout.org

## Undefined

We haven't got very far on this problem.  We've socialized a
name for this problem---"sustainability"---but there's
nothing like consensus on its definition.  It's very early
days.

When I say "open source sustainability", I think in terms of
people who give into open source software getting at least
much out, at times and in ways sufficient to buttress a long
and happy productive life in software.

That trades one load of definitional mess for another.  But
it suffices to distinguish what I mean from other
definitions floating around, express or implied.
Sustainability as ensuring more and better free-to-use
software keeps pouring out. Sustainability as continuous
flow of new maintainers ready to take over swamped projects.
I see "sustainability" from the bottom up, in terms of
individuals adding up, rather than top down, in terms of
public goods creation, or deduplication of effort,
distributed over individuals.

And I see open source as a viable alternative to proprietary
software across the whole spectrum of what software can do.
Not localized, say, to beginners training up in the
community, at one extreme, and deduplication of big-company
salaryman effort, on the other.  Not confined to the
interchangeable bits of proprietary compositions.
