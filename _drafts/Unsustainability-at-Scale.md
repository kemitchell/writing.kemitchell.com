---
title: Unsustainability at Scale
description: today's tools for yesterday's problems tomorrow
layout: post
tags:
- Open Source
- Sustainability
---

Prevailing open source wisdom tells us to make every practical choice about projects, from revision control to licensing and distribution, to maximize adoption.  Adoption was the community's last great challenge, and remains its latest great success.  But single-minded focus on the adoption problem is a recipe for the sustainability problem. The sustainability problem for which we've no general solution.

Our community is growing fast.  Part of making open software development welcoming to new folks is guiding, hiding, and making choices for them, at least to start.  Those of us in position to do so should be very careful which choices we take away, which choices we encourage, and especially which choices we hide.  We should take pains to show our work.

If we merely scale the sustainability problem up to a larger community, help today's hackers replicate yesterday's failure mode  in record time, those who make it that far will revisit our choices, and wonder.  That's where we're headed now.

In the coming weeks, I'll be looking at a number of tools, platforms, and practices, each a part of the new, maladaptive "defaults" of open source, and the tolls they take.  But each of those studies will fit in the frame of two general observations:

1.  Not a single one gives off the slightest whiff of malice, negligence, or foolishness.  One by one, independently, they hold up.

2.  Collectively, they make a mighty offensive arsenal for stoking adoption, siphoning effort, and expanding scope, and little to nothing in the way of self-preservation or self-defense.  Plenty of ammo.  No life boats.

Stepping back, we all see where that leads, how the spread of outcomes will benefit some parts and concepts of our community at the expense of others.  But as individual, uncoordinated communityfolk, it's so much easier, so much more personally rewarding, to share solutions to the small problems we've got down than to face the bigger, emergent problem we don't.  There's no conspiracy here.  We're paving a well trodden footpath to maintainer Hell one well-meaning patch, feature, and blog post at a time.

I have paved a few turns myself, for all the right reasons.  I want to talk about that, and about some of the reasons.  I also want to unify some of the work I'm doing now.  To show some work behind it.

Git workflow.  Identity on GitHub.  Metadata in npm.  Semantic versioning.  Webpage hosting.  License pickers.  Code of Conduct templates.  Continuous integration.  All of these are good things.  All of their implementations embody choices, conscious or incidental, independent of the core utility they deliver.  We can abstract those choices out, consider other permutations, and ask whether they'd add up to today's kind and extent of malfunction.

Part of that is critical photojournalism, shining light into dark corners from new angles.  Part of it is being more careful about the language applied to social ills and their precursors.  Avoiding words that cast long shadows.

## "Sustainability"

I'll start with an embarrassing admission.  Those of us in a position to fret about open source sustainability are way, way behind on it.  In fact, that sentence contains our whole irreversible achievement to date.  We've socialized "open source sustainability" as the name of the problem space, but that's about it.  There's nothing like consensus on definition---for "open source", "sustainability", or the combo---even if there's broad agreement that certain well publicized episodes qualify or exemplify.

Having said that, it's on me to show my cards.

I don't think having engineered a lot of software, or having internalized the community as it is now, rife with the problem, makes anyone better qualified to name or implement the social changes needed to extract us from the mess we're in.  We're motivated.  We know our way around. Many of us care, deeply, about open software and its casualties. But I believe it's new people, with all their newfangled sensibilities and diversity of experience, who are most likely to see the problem in new ways, try new approaches, and wander into what works for the community that will, in time, belong to them.  Sure, they need a little hand holding right now. They may not even see the sustainability problem coming, or imagine it as a badge of success.  But they're not set in the ways that produce that problem, either.

If you buy the ecosystem metaphor for the community, new people bring the diversity that makes resilience.  We've reached an evolutionary impasse.  If the community overcomes the obstacle, it will change in the process.  Forcing new vitality onto well-vetted development paths, via standardization, tooling, platforms, and social norms, suppresses variation, retards recombination, hastens crisis and, eventually, oblivion.

All my current, public work---from [the blog] to [Switchmode] to [License Zero] and the [Berneout] experiments---explains developer choices, and offers new ones.  All to put more informed choosers, and more choices, into the mix.  All on the off chance one or the other might make an essential contribution to a new combination that makes open source projects rational and manageable, long-term.  Not to prescribe existing approaches, or to reinforce defaults, that don't.

[the blog]: https://writing.kemitchell.com

[Switchmode]: https://github.com/switchmode

[License Zero]: https://licensezero.com

[Berneout]: https://berneout.org

My approach is consistent with a bottom-up reading of "sustainability", in terms of individuals making good and rational decisions that add up in a beneficial way.  I think in terms of people who give into open source software getting at least as much out, at times and in ways sufficient to keep them engaged, and rationally so.  The free-rider problem isn't necessarily solved with all academic rigor.  But it rarely if ever takes a casualty, by withholding or delaying a contributor support for so long that they tap out or implode.  As has been the norm.

My better world is not a socialized artists' paradise, conscripting industry into patronage for every speculative and fanciful endeavor of an anointed elect.  Rather, humdrum profit sees its way to those producing not just finished products, but essential raw materials and components, as well.  As I see it, a good programmer should be able to work, without becoming a celebrated curiosity, from 18 to 80, making a good living and non-rivalrous goods all along the way.  Just as they can make a good living and nothing but proprietary software today.

I'm trading one blurry definitional mess for another. But it's enough to distinguish my view from the others vying for mindshare.  Not a definition of "sustainable" in aggregates, that's satisfied so long as more and better free-to-use software keeps falling from the sky, if only because naive or financially indifferent players can still be convinced to make it rain.  Not a continuous procession of willing maintainers, ready to take over as each predecessor's moment of greatness flickers.  Not a momentary station of life, visited once as a young person without immediate financial concern, perhaps again on salary, should you end up a industrial rounding error, or beneficiary of sufficient benign corporate neglect.

## "Best Practices"

The open source community generally prefers the dry, aspirationally objective technical vocabulary native to engineering.  Even when it's awkward or downright inappropriate.  But on community, governance, legal, and collaboration questions bearing on sustainability, we find prescriptive absolutes and strident superlatives all over the place: "the norm", "the standard", "best practices", "the right way".  That vocabulary implies not just confidence in the practical wisdom of our choices in the specific corner of the open source universe we call home, but confidence in their exclusive and universal correctness. Alone and as a package set.  Practically, and as embodiments of broader, airport-bookstore theories of open source.

We may not mean to take such bounding rhetorical leaps.  But from the outside, and to many newcomers who can't yet recognize code-switching in action, that's the confidence we project, more striking in its relief from the engineer-speak all around.  That's the force of orthodoxy newcomers feel and internalize.

All of those effects are massively amplified, not attenuated, when we skip talk, and bake best practices into code.  With code, it's not just that newcomers are unlikely to scratch our personal veneers of certainty down through to the trade-offs and a measure of honest doubt.  With software, it's not clear even who was behind any given call in the first place.  We have to remind ourselves that people and judgment were involved at all.

So perhaps there's source code somewhere, and `git blame` turns up a commit, and the commit links to a pull request, and the pull request archives approachable back-and-forth on the rationale.  Perhaps.  With proprietary platforms, perhaps there's a blog post, or a conference talk, or a thread deep in social media somewhere, offering a measure of transparency.  Perhaps.

But perhaps only matters if we go looking for an answer in the first place.  We don't.  Rarer still do the newbies.

## "Convention"

Doubt, I think, is part of what we're hiding behind the diversion toward more daring diction.  Part of why we take such deep satisfaction in seeing our personal choices seconded by important platforms and tools.  We're not preaching any universal gospel or settled science of open development, and deep down, we know it.  We're doing "convention over configuration" all over again.  Convention for how code gets made, rather than what it does, or how.

What's so bad about convention over configuration?

A personal confession: I learned more about SQL data stores from DHH's Ruby on Rails screencasts than I will ever admit. Things about data stores those screencasts assumed everybody watching already knew.  Things `rails create` assumed I wanted.  Things I didn't know much of anything about, and oddly enough, don't want so often now, having learned a thing or two.  Inspired and a little insecure, I used SQL for everything under the sun, because it was what I felt good about knowing, and part of a package that impressed me. SQL isn't the inevitably right answer, at least outside the Rails mentality.  For a time, however, that tenet of Rails conventionality was very good for me.

That's a good open source story, isn't it?  Why can't governance, licensing, collaboration, community norms, and the rest all slot in for the database?  Sure, we could be more careful, more mindful to document what we choose for others, so they can read up when the time comes.  But why spread as-yet irreducible uncertainty around on newcomers, before they've had their chance to do at least one lap around the ignorance-to-enlightenment merry-go-round?

Because governance decisions, culture decisions, community decisions, and legal decisions are different.  They're people decisions, unavoidably political decisions, that play out on long time scales.  Not code decisions, even when we codify them in software.  People are not so easily replaceable, so fundamentally mutable, engineerable, mendable.  Neither are their relationships: collaborative relationships, legal relationships, work relationships, whatever "normal" or "open source" mean, and how we all relate to that.  Code is not easy.  But code is the easy part wherever people are involved.

Sure, new people can turn out a lot of needed code and documentation.  But the edifice of open source social structure is not nearly so refined, or byzantine, as our code.  Beginners' minds, especially with other life experience,  are eminently qualified to weigh in on these policy challenges.

## "Adoption"

In time, they will catch on to the fact that codemaking conventions on offer these days unify on a theme.  They maximize use of a project by means that entail added, ongoing work and attention demands on maintainers early and often, at the expense of long-term planning for commensurate outside support. Support that follows no more readily from use alone than use follows readily from software quality.

We hide deferral of the support problem behind aspirational terminology that implies a problem solved from the start. We call use "adoption".

A maintainer accidentally cuts a bad release.  The next morning, their inbox overflows with user complaints.  None of the complaining users were known to the maintainer before the breakage.  In fact, the maintainer's shocked by the suddenly-apparent popularity of their project.  Where did they all come from?

Apparently "adoption" was high.  But in no meaningful sense did users "adopt" the project.  They merely used it.  If all they offer now is marching orders for still more maintainer work, stat, they are using the project, and its maintainer. They are not adopting anything, or anyone.  Responsibility isn't moving an inch.

Unhelpfully, many of the choices that add up to these kinds of outcomes, from licensing to project scope to the expectations all these best practices engender, get made very early on, develop path-dependency over time, and defy later recalibration.  By the time you learn that "sustainability" is a whole class of broadly familiar, grievous issues waiting for you from commit one, you may have passed on every good business model, by choices you never considered in that light.  You may have conditioned a pack of rabidly entitled users, nipping at your heels, baying to trade you in for new blood.  You may have invested all you could afford to give, or more, with no chips left to play.

Speaking to them privately, many old hands will tell you to avoid this trap.  To pace yourself, pick and choose, plot a more moderate course.  But the tools and services many of them build broadcast a very different, all-channels message. The direction built into those tools and services, their aggregate impression, is that doing software in the open right means giving more and more, asking essentially nothing in return in the moment, and trusting that when use exceeds your wildest dreams, even a remarkably low-yield play converting use to sustenance will keep you going, make you whole.  Like begging for-profit corporations with legally mandated financial controls for money, after establishing a long track record of willingness to work free.

In short, the practices encouraged by tools and platforms may be intended as a menu or a toolkit, but they end up reading like a very costly, overkill-prone checklist. Gamified, completionism kicks in.  Developers go to the extreme, harbor guilt and insecurity when they don't. They rush in like cannon fodder, all offense, no defense, last about as long, and get carried off the field, wounded, while the heavy infantry of the rear guard moves in to hold any newly acquired territory.
