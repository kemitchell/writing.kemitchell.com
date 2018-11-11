---
title: Selective Openness
description: enlightened self-generosity, opportunistic virtue
layout: post
---

An open source license gives others permission to take code and run with it.  The choice of what to release as open source and when is awesome power.  In a world dominated by closed software and services, the power of selectivity makes open source go 'round.

<!--

The vast majority of businesses making software don't release any software at all, as open source or otherwise.  They gladly take open source in, to save time and increase their internal development capabilities, but putting software out isn't their business.  Such firms often lack any process at all for sharing software.

Conversely, software vendors cultivate a variety of ways to make their software available, open source release just one among them.  They may license software to download and install.  They may sell software as a service.  They may sell software as a part of, or as add-ons to, other products and services.  That choice is key.

-->

Ability to wield that power, and willingness to do so self-servingly, is not particularly well distributed.  Particularly among developers who came up in open source, as an idealistic, even altruistic social movement.

As a consequence, we're reading this script, over and over again:

    SOMEWHERE ON SOCIAL MEDIA

                      DEVELOPER OF PROJECT
                  (indignantly)
            Big Software Company isn't contributing
            back to our community!  They're just
            taking our work and outcompeting us
            without supporting development.  We have
            to do something about this!

                      COMMENTER
                  (also indignantly)
            What do you mean Big Software Company
            isn't contributing back?  They release
            tons of open source, and provide lots of
            free service to the community!

Both points are true, which keeps them being made, again and again.  The implied connection between them is usually false, which keeps the ensuing conversations going nowhere.

Usually, the smaller company leading the struggling project is giving their work away more or less indiscriminately, under a permissive or effectively permissive open source license.  The bigger software company is often also giving code away, often under the same terms, but not code for the struggling project.  The bigger company may also be giving money away, as grants or sponsorships or contracts, but not to those developing the struggling project.

In exceptional cases, the larger company may contribute to other projects on which the struggling project relies, in ways that meaningfully benefit the struggling project.  But virtuous cycles of ongoing contribution and balanced competition are the exception, not the rule.  Balanced competition is especially rare between companies or markedly different size and market position.  Companies giving quality software away don't usually start in the best competitive position to turn that quality into dollars.  Big incumbents do.

Smaller companies behind struggling projects are responding to production and competition imbalances by taking a hard look at the larger companies eating their lunch, and imitating them.  They're becoming more selective.  Especially when developer-led, they tend to start from a default of generous openness, which they learn from participating in open source development.  But they tend in time toward closedness and cynicism, which we learn from participating in open source business.  They take unique approaches, when they don't go overly entirely to orthodox business practice, when they remain torn, or compromise, and end up somewhere in the middle.

Selectivity in open source happens in two main ways: choice of what and when to release, and choice of license.

["Open Core" is a maddeningly general catch-all term](http://oss.cash).  But whatever else it means, it almost always entails a choice _not_ to release significant code as open source.  From the open perspective, "Open Core" is just a euphemism for "Closed Shell", or proprietary software.  Open source code serves as a loss-leader or position-maker for a closed-source or service business.

Typically, companies choose what goes in the Closed Shell, and not the Open Core, in order to segment particular users and make paying customers out of them.  Open Core database companies tend to make Closed Shells of management, logging, access-control, replication, and other features peculiar to "enterprise" use cases.  Sometimes, choice of Closed Shell aims to protect the developer against competition.  Some Open Core database companies put deployment configurations, debugging tools, instrumentation, and other code useful in offering the app as a service in their Closed Shells, too.

In the past, some companies chose to differentiate not what code they release, but when they released it.  Ghostscript, probably the best-known example, held its latest-and-greatest versions back.  On a schedule, the old latest-and-greatest was released as open source.  But in the meantime, the company behind Ghostcript licensed the latest-and-greatest on commercial terms, particularly to printer manufacturers.  Ghostscript's choice of release schedule segmented particular users and made paying customers out of them.

Regardless of what functionality is closed, or when, the net effect for open source is the same.  There is less of it.  Either closed functionality starts and ends closed, or open functionality becomes effectively closed, when the company creates an internal fork to maintain as closed software going forward.

At the same time, closing code entirely is often massive strategic overkill for these companies.

Copyleft takes selectivity power away from downstream users.

[strategic openness]: https://youtu.be/vBknF2yUZZ8?t=1507
