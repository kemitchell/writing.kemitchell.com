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
great challenge of the last ten years, and its great
success.  But single-minded focus on the adoption problem is
a recipe for the sustainability problem.  The sustainability
problem we don't know how to solve.

Meanwhile, our community is growing, and fast.  Part of
making open source software welcoming to new folks is making
more and more choices for them.  Those of us in position to
make choices for others should be very, very careful which
choices we take away, how we resolve them, and what we leave
behind, to show our work.  If our picks merely scale
sustainability problems to a larger community, those who
check our work down the line will wonder why we prescribed
so much. If we didn't have the answers, why didn't we let
newcomers find their own.  Isn't that what we did, in our
time?

I wouldn't call out any single contribution to the new
"defaults" of open source as ill-intentioned or glaringly
daft.  But in the aggregate, we're reinforcing problems that
we know hurt some parts and concepts of our community, and
advantage others.  We keep ourselves busy confidently
entrenching what we feel we've got down, instead of facing
down what we don't.

I have been my own small part of the problem, for all the
right reasons.  I'd like to talk about that problem.  And
I'd like to show some of my work.  Work behind some small
choices made.  Work behind some of what I'm doing now.

---

For a long time, `npm init --yes` set license metadata for a
new JavaScript package to `ISC`, for The ISC License.  The
ISC License is weird---except on npm, because it was the
default---but it's not wrong.  Especially if you didn't know

```shellsession
license: _
```

would be one of the prompts for a new package.  Especially
if you didn't know what any good answers might be.

Setting sane defaults, especially sane defaults chosen to
reflect prevailing---and sane---community expectations, is
very, very helpful. On balance, toolmakers and service
stewards rightly choose these kinds of defaults.  Even if
we're willing to concede, when beginners ask, that the
choices we've baked in aren't perfect, that they're mired in
controversy, that we don't totally understand their
ramifications in every detail.

But I've noticed that when it comes to community and
collaboration matters, rather than more purely "technical"
topics, we tend to skip right past our native "defaults"
vocabulary, into more treacherous territory.  We reach more
readily for prescriptive absolutes and strident
superlatives: "the norm", "the standard", "best practices".
We imply not only confidence in the wisdom of our choices,
borne of our experience in one corner or another of the
broad and expanding universe of open source, but confidence
in their exclusive and universal _correctness_, alone and in
a package set.  Often, our sensibilities of correctness hold
only as far as our perspectives are wide.

What we're doing isn't preaching any gospel.  It's
"convention over configuration" all over again.  Convention
for how code gets made, rather than what it does, or how.

I shudder to think just how much about SQL data stores I
"learned" from DHH's Ruby on Rails screencasts.  Things
about data stores those screencasts seemed to assume I
already knew.  Things `rails create` assumed I wanted.  I
didn't know much of anything about SQL data stores.  I
didn't know that was a thing I might want.

Oddly enough, now that I know a thing or two, I happen to
find myself using SQL data stores, and Rails, less and less.
I went from using SQL for everything under the sun, because
it was what I knew, or what I felt good about knowing, and
part of a package that impressed me, to a more nuanced view.
SQL data stores weren't the "right answer", at least outside
of the Rails mentality.  For a time, however, I think SQL
data stores, one chapter in a tome of Rails conventionality,
were good for me, as a programmer.

That's a good open source story, isn't it? Starts in the
middle of nowhere in Texas.  Runs up to today, in the San
Francisco Bay Area, neck deep in the open source community,
paying the bills.  From A to B, one small step at a time.
Having choices made for me. Making more choices on my own.
Revisiting choices.  Those I made.  Those made for me. A
full, happy circle, each time.

Why can't governance, licensing, collaboration, community
norms, and the rest slot into that kind of story? Sure, we
should be more careful, more mindful to document what we
choose for others, so they can read up when the time comes.
But why share our doubts with newcomers across the board,
before they've had their own chances to come all the way
around?

Because governance decisions, culture decisions, community
decisions, and legal decisions are different.  They're
people decisions, not code decisions, even when we codify
them in software.  People are not so easily replaceable, so
fundamentally mutable.  Neither are their relationships:
collaborative relationships, legal relationships,
relationships of authority, whatever "normal" means, and
relationships to it.

We old hands aren't better "community engineers" for
sustainability for having engineered a lot of software, or
participated in the community as it is now, full of people
like we are, so rife with malfunction.  It's the new people,
with all their new perspective and diversity of experience,
who are most likely to see these problems in new ways, and
marshal solutions that work for a community that looks more
and more like them.  Sure, the new folks don't know their
way around the code world quite like we do yet.  But they're
not so set in their ways as we are, either.  Their greatest
contributions may not be code.

---

All my work on sustainability---from [Switchmode] to
[License Zero] and the [Berneout] experiments---try to make
new choices available to developers, rather than prescribe
defaults, on the chance that one of those new options will
be part of a winning combination.  Here is what I think I
know about the sustainability problem.  Here is the
understanding that connects those projects.

[Switchmode]: https://github.com/switchmode

[License Zero]: https://licensezero.com

[Berneout]: https://berneout.org

First and foremost, we've socialized a name for this
problem---"sustainability"---but there's nothing like
consensus on its definition.  That's an oblique admission
that we are still in very early days, that collectively, we
haven't got very far.

When I say "open source sustainability", I think in terms of
people who give into open source software getting at least
much out as they put in, at times and in ways sufficient to
buttress a long and happy productive life in software.

That's trading one load of definitional mess for another.
But it suffices to distinguish what I mean from other
definitions on offer, such as ensuring that more and better
free-to-use software keeps pouring out.  I see
"sustainability" from the bottom up, in terms of individuals
adding up, rather than top down, in terms of public goods or
deduplication of effort distributed over individuals.

And I see open source as a viable alternative to proprietary
software across the spectrum of what software can do. Not
localized, say, to beginners training up in the community,
at one extreme, and deduplication of big-company salaryman
effort, on the other.
