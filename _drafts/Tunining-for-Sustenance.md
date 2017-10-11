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
making open source software more welcoming to new folks is
making more and more of new folks' choices for them. Those
of us in positions to make choices for others should be
very, very careful which choices we take away, how we
resolve them, and what we leave behind, to show our work.
If the defaults we pick merely replicate known
sustainability problems for all the new blood flowing in,
those who check our work down the line will wonder why we
took so many choices away.  If we didn't have the answers,
why didn't we let newcomers find their own, as we did,
in our time?

I couldn't call out a single contribution to the new
"defaults" of open source as ill intentioned or glaringly
daft.  But in the aggregate, we're reinforcing problems that
we know hurt some parts and concepts of our community, and
advantage others.  We keep ourselves busy confidently
entrenching what we think we know well, instead of facing
down what we don't.

I have been my own small part of the problem.  I'd like to
talk about that problem.  And I'd like to show some of my
work.  Work behind some small choices made, with large
implications.  Work behind some of what I'm doing now.

---

For a long time, `npm init --yes` set license metadata for a
new JavaScript package to `ISC`, for The ISC License.  The
ISC License is weird---except on npm, because it was the
default---but it is not and was never wrong.  Especially if
you didn't know

```shellsession
license: _
```

would be one of the prompts for a new package.  Especially
if you didn't know what any good inputs there might be:

```shellsession
license: (MIT) Yes
Sorry, license should be a valid SPDX license expression
(without "LicenseRef"), "UNLICENSED", or "SEE LICENSE
IN <filename>".
license: (MIT) _
```

Setting sane defaults, especially sane defaults aimed at
expressing sane community expectations is very, very
helpful.  On balance, toolmakers and service stewards are
right to choose these kinds of defaults.  Even if we're
willing to concede, when beginners ask, that we don't think
the choices we've baked in are perfect, that we know they're
controversial, or that we don't totally understand all their
ramifications in every detail.

But I've noticed that when it comes to community and
collaboration matters, we tend to skip right past "defaults"
vocabulary, into more treacherous linguistic territory.  We
reach more readily, not less, for absolutes and
superlatives: "the norm", "the best way", "best practices".
We imply not only confidence in the wisdom of our choices,
borne of our experience in one corner or another of open
source, but confidence in their exclusive and universal
_correctness_, alone and in concert with other approaches.
Often, sensibilities of correctness hold only as far as our
corner is wide.

Long story short, what we're doing isn't "best practices",
it's "defaults", or rather, "convention over configuration".
Convention for how code gets made, rather than what it does,
or how.

I shudder to think just how much about SQL data stores I
"learned" from DHH's Ruby on Rails screencasts.  Things
about data stores those screencasts seemed to assume I
already knew.  Things `rails create` assumed I wanted.  I
didn't know much of anything about SQL data stores back
then.  If I knew what I wanted, it probably wasn't very
good.

Oddly enough, now that I do know a thing or two, I find
myself using SQL data stores less and less.  I went from
using SQL for everything under the sun, because it was what
I knew, or what I felt good about knowing, and part of a
package that impressed me, to a more nuanced view.  SQL data
stores weren't the "right answer", at least outside of the
Rails mentality.  For a time, however, I think SQL data
stores, one chapter in an obscure tome of Rails
conventionality, were good for me, as a programmer.

That's a good open source story, isn't it? Starts in the
middle of nowhere in Texas.  Runs up to today, in the San
Francisco Bay Area, neck deep in the open source community,
paying the bills.  From A to B, one small step at a time.
Having choices made for me. Making more choices on my own.
Revisiting choices. Those I made.  Those made for me.  A
full, happy circle.

Why can't governance, licensing, collaboration, community
norms, and the rest be part of that kind of story? Perhaps
we should be more careful, less willing to hold the "best
practices" we advocate today out as truly and always best,
more mindful to show our work on them.  But why impose that
doubt on newcomers now, before they've had their own chances
to come all the way around?

Because governance decisions, culture decisions, community
decisions, and legal decisions are different.  Their medium
is people, not code.  People are not so easily replaceable,
so fundamentally mutable.  Neither are relationships among
them. Collaborative relationships. Legal relationships.
Power relationships.  "Normal".

Choices made for us have lasting, community-level effects.
They aggregate in ways we cannot see, ways we respond to,
sometimes viscerally, long before we understand them.
Effects we're hard pressed to trace back to root causes,
especially when the root causes are choices made for us,
choices that never crossed our minds.

---

I tend to think of "sustainability" in terms of people who
give into open source software getting at least much out, in
ways and at times sufficient to live a middle-class life
where I come from.  That's trading one load of definitional
mess for another.  But it suffices to distinguish what I
mean from the other front runner, ensuring that software
free of charge to use and widely keeps on pouring out.  In
other words, I tend to see "sustainability" from the bottom
up, in terms of individuals, rather than top down, in terms
of public goods or deduplication of effort.
