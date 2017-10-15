---
title: npm init
---

Let's start small.

Consider a choice about making open source software, baked
into open source software.  A choice I didn't make myself,
but might have made in more or less the same way.

For a long time, `npm init --yes` set the license for a new
JavaScript package to The ISC License.  The ISC License is
rare---except on npm, for reasons now obvious---but it's not
wrong.  Especially if you didn't know

```shellsession
license: _
```

would be one of the prompts for a new package.  Especially
if you didn't know what any good answers might be.

On the merits, I'd rank this a relatively innocuous choice.
The npm folks set out to pick a license that would track
prevailing community expectations, even among those who
couldn't rattle off the SPDX identifier for a common license
to save their life.  I think ISC meets those criteria.

In terms of how it's been addressed, I also think it
relatively innocuous.  Some users who type `--yes` to get
intelligent defaults on other metadata, like package name,
will accidentally get `license` set, too.  But users who
don't use the `--yes` flag get a prompt, with validation.
Users who set a default in config get their choice.  No
matter how users run `npm init`, they can check and change
the results in `package.json` when they're done.

I am less sanguine about where and how this choice was made.
It's implemented in software, and in `npm` no less, the core
command for sharing code in the JavaScript ecosystem.  That
implies, consciously and subconsciously, very robust
community sanction, bordering on consensus.  Those
impressions are as natural as they are inaccurate.  But even
ISC were far and away the people's choice on npm, those who
see the tool in action wouldn't see any reasoning or history
behind the norm.  It would still feel like infrastructure,
as it does now.  Like part of "the way things are".

On balance, in isolation, `npm init`'s license default is a
good choice.  Even if those involved in making it might
willingly concede, when asked, that it isn't right for every
package, that it's an extreme license in many respects, that
they don't understand all the legal particulars.  ISC is
short, but it says nothing about patents.  It's a very, very
permissive license, and that's not the only kind.  What's
the difference between ISC and The MIT License, anyway?  And
so on.  But on balance, ISC as default very likely does the
right thing a great deal of the time, and more often than
would no default at all.

---

`npm init` is a good example of a literal default baked
directly into common software in a very familiar way.  The
kind of community "default" that's closest to what we're
used to considering in our software work.  But many of the
defaults I'll turn to in the coming weeks won't be such
on-the-nose metaphors.  They'll take the form of
encouragement for certain practices and choices, or levers
making them easier to adopt.  They'll often be communicated
person-to-person, in writing, or as part of an interface,
rather than in code.

