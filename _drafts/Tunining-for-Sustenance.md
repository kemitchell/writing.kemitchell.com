---
title: Tuning for Sustenance
layout: post
tags:
- Open Source
- Business Models
- Licensing
---

Part of making open source software more welcoming to new
folks is making more and more of new folks' choices for
them.  Those of us in positions to make choices for others
should be very, very careful which choices we take away, how
we resolve them, and what we leave behind, to be reevaluated
later.  Fundamentally, we're social engineering in the
large, well intentioned or not, invited or not.  Wisdom
starts to look like hard trade-offs and self-doubt, most of
the time. Certainty becomes a warning sign.  What we get
wrong won't be so easy to fix, further on down the line.
Personal motivations and spot calls of conscience won't
count.

When I look at the defaults we're setting for open source
these days, as a whole, I see great cause for concern.  I'd
be hard pressed to name a single contribution to the overall
picture that stands out as anything but abidingly well
intentioned.  But in the aggregate, I see us entrenching and
exacerbating known problems.  Problems we're less confident
we can solve.  Problems that hurt some parts and concepts of
our community, and advantage others, in their unsolved
states.

I have been my own small part of the problem.  I'd like to
talk about that problem.  And I'd like to show some of the
work behind the small choices I've made with large
implications.  Some of the work behind what I'm doing now.

---

Let me be clear.  My concern is with the aggregate effect of
well intentioned and well considered choices.  As a
beginner, if I get a sane default made or compellingly
suggested for me, instead of a touchy choice I don't really
understand, I'm that much more likely to find my feet and
start walking in software.  Making hard choices easier makes
open source more accessible.  Hiding error-prone complexity
from those liable to trip and fall is progress.

`npm init --yes` gets you The ISC License.  The ISC License
isn't wrong.  Especially if you didn't know `license:` would
be one of the prompts. Especially if you didn't know what
any acceptable inputs at `license:` would be.

But I've noticed that when it comes to community and
collaboration matters---choice of revision control tool,
code host, distribution network, contribution policies,
licenses, and so on---we tend to reach more readily, not
less, for terminal superlatives like "best practices", "the
right way", "the norm".  We imply not only confidence in the
wisdom of our choices, borne of our limited experience in
one corner of open source or another, but confidence in
their exclusive and universal _correctness_. Often, that
holds only as far as our corner is wide.  Other choices make
perfect sense, in circumstances less available to the minds
doing the choosing.

Long story short, what we're doing isn't "best practices",
it's "convention over configuration".  Convention for how
code gets made, rather than what it does, or how.

Careful, experienced hands choosing conventions can
massively empower greener folk following more timidly behind
them. To give a personal example, I shudder to think just
how much about SQL data stores I "learned" from DHH's Ruby
on Rails screencasts.  Things about data stores those
screencasts seemed to assume I already knew.  Things `rails
create` assumed I wanted.

I didn't know much of anything about SQL data stores back
then.  If I knew what I wanted, it probably wasn't very
good.  Oddly enough, now that I do know a thing or two, I
find myself using SQL data stores less and less often.  I
went from using SQL for everything under the sun, because it
was what I knew, or what I felt good about knowing, and part
of a package that impressed me, to a more nuanced view.  SQL
data stores weren't the "right answer", at least outside of
the Rails mentality.  For a time, however, I think SQL data
stores, one chapter in an obscure tome of Rails
conventionality, were good for me, as a programmer.

That's a good open source story, isn't it? Starts in the
middle of nowhere in Texas.  Ends today, in the San
Francisco Bay Area, neck deep in the open source community,
paying the bills.  One step in front of the other in
between.  Having choices made for me.  Making more and more
choices on my own.  Revisiting choices, those I made, and
those made for met.  Full circle.

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
so fundamentally mutable.  Neither are relations among them.
Collaborative relationships.  Legal relationships.  Power
relationships.  Neither is "normal".  Choices made for us
have lasting, community-level effects.  Effects we can't
even trace back to their source, if the fact that a choice
was made at all was hidden for our convenience.

---

One of the problems we don't know how to solve is "open
source sustainability".  We define open source
sustainability variously, but every definition I've heard
that isn't so reductionist as to seem a toy remains an
unsolved policy objective.

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
