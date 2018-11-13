---
title: Selective Openness
description: making money by choosing what to give away
layout: post
tags:
- Business Models
- Licensing
- Open Source
- SSPL
---

In a world dominated by closed software and services, selectivity makes open source go 'round.  An open source license gives innumerable others permission to take code and run with it.  That is not a business plan.  But the choice of what to release as open source and when is awesome power.

Ability to wield that power deftly, and willingness to do so self-servingly, isn't yet widespread.  Especially among developers who came up in open source as idealistic, altruistic participants freed from immediate financial need.  But many of those are starting companies.  As a consequence, we're reading this script, over and over again:

    SOMEWHERE ON SOCIAL MEDIA

                      SMALL COMPANY DEVELOPER
                  (indignantly)
            Big Software Company isn't contributing
            back to our community!  They're just
            taking our work and outcompeting us
            with their existing advantages.  We
            have to do something about it!

                      COMMENTER
                  (also indignantly)
            What do you mean Big Software Company
            isn't contributing back?  They release
            tons of open source!

Both points are true, which keeps them being made, again and again.  The implied connection between them is false, which ensures ensuing conversation goes nowhere fast.

The big company may be contributing back, even contributing more, overall, than the small company.  But it isn't contributing back to the small company or its efforts.  It may in fact be strangling them.

## Imbalance

Often, the smaller software company crying foul gives its work away more or less indiscriminately, under a permissive open source license.  The bigger software company often also gives code away, under the same generous terms.  But not code for the smaller company's project, and not in any way that threatens its key line of business.  The bigger company often gives money to open source, too, as grants or sponsorships or contracts.  But not to the small company.

In exceptional cases, the larger company may contribute to other projects on which the small company's project relies, in ways that meaningfully benefit the small company.  With broadly shared projects like language interpreters and the Linux kernel, it's often possible to draw some loop back from big company to small, through various projects.  But virtuous cycles balancing contribution and competition are the exception among players of unbalanced size, not the rule.

The more size and market position differ between companies, the less likely a balance, especially in competition, arises by accident.  Small companies giving quality software away don't usually start in the best competitive position to turn that quality into dollars.  Big incumbents do, once it's worth their while to try.  It's worth their while when popularity creates sufficient reward.  As adoption of a project takes off, the small companies stewarding it loses the ability to stay below that line, or to decide when to cross it.  For a small company lucky enough to survive, big success in open source often brings even bigger competitors in business, ready or not.

## Imitation

Smaller companies are responding to contribution and competition imbalances by taking a hard look at the bigger companies eating their lunch, and imitating them.  They're becoming more selective.  They're becoming less open source.

Especially when founded and led by developers, small companies tend to start from a default of generous openness, which they learn as participants in open source development.  But they tend in time toward more closedness and self-service, which they learn by hard knocks, taking generosity into business.

Selectivity in open source takes two main forms: choice of what and when to release, and choice of license.  The strategic effect is largely the same: denying benefit to competitors, at the expense of a chance to win the commons-community lottery.

## Open Means Closed

Everybody's "Open Core".  What does that mean?

["Open Core" is a maddeningly general catch-all term](http://oss.cash).  Whatever else it means, the invariant is closed software for sale.  In other words, Open Core is choosing _not_ to release some code as open source.  From the open perspective, "Open Core" means "Closed Shell".

Typically, companies allocate functionality to a Closed Shell, as opposed to their Open Core, in order to turn specific kinds of users into paying customers.  Usually, that means large companies willing to pay large fees for deals spanning license and also services, like support, maintenance, integration, and training.  Open Core database companies make Closed Shells of management, logging, access-control, replication, and other features peculiar to "enterprise" use cases.

Sometimes Closed Shell allocation protects the developer against competition, instead of or in addition to creating paid customers.  Some Open Core database companies put deployment configurations, debugging tools, instrumentation, and other code useful in offering the app as a service in their Closed Shells for this purpose.  They want to hand database code to potential enterprise customers, not hand service management code to competing DBaaS providers.

In the past, some companies differentiated not what code they released, but when they released it.  Ghostscript, probably the best-known example, held its latest-and-greatest versions back.  On a schedule, the old latest-and-greatest was released as open source.  But in the meantime, the company licensed the latest-and-greatest on paid commercial terms, especially to manufacturers shipping it in software on-board their devices.  Ghostscript's choice of release schedule made paying customers out of those firms.

Regardless of what functionality ends up closed, or when, the net effect for open source is the same.  There is less of it.  Either closed functionality starts and ends closed, or becomes closed when the company stops maintaining it in the open, or becomes open only after an artificial, business-motivated exclusivity period.

## Overkill

Losses from open source are particularly tragic when companies close code entirely.  On the adoption side, many users that will never be able to pay for licenses lose out.  On the production side, company developers miss the benefits of working in the open, with familiar tooling, and leveraging free infrastructure made available for public projects.  A host of secondary users, like students who read source code to learn, security researchers looking for vulns, and academics who rely on public data, also miss out on closed code.

From a business perspective, however, entirely closed is often overkill, chosen only for relatively familiarity with orthodox proprietary practice, or for lack of awareness of any approach closer to optimal.

There are other options.  Companies can provide only the source code for closed features, with all rights reserved.  That enables learning, audit, research, and so on.  At the other extreme, companies can continue to develop additional functionality in the open, and apply a strong-copyleft license, like AGPL or OSL or RPL, to its source code, selling exceptions to the copyleft license's rule to customers building closed software.  That's often workable for add-on features that users build into their own software, rather than use standalone, for themselves, as provided.  Somewhere between, companies can continue developing in the open and apply noncommercial or otherwise restricted terms to corresponding source code.  This approach works even for functionality that would-be customers use standalone, for themselves, rather than building into software for customers further downstream.

Copyleft license terms work, strategically, by taking the power of selectivity away from downstream developers.  If a developer's use of code triggers its copyleft license rule, that developer must share and license source code reached by the copyleft license on similar terms.  The choice of whether, when, and how to release that software as open source comes predetermined.  Take it or leave it.

As long as the industry default remains closed, and copyleft terms continue to cover new means of software combination, strong copyleft terms for software components will remain, in effect, noncommercial terms.  All of the exceptions to the rule that commercial means open and open means commercial---especially the small vanguard of open source businesses---receive free rein, and the corresponding competitive advantage.

## Salvage

Industry accepts closed software because that's its business.  Industry has also come to accept permissive open source terms and weakened copyleft licenses, because they're good for making closed software.  There is as yet no standardization or broad acceptance of potentially optimal midpoints: sufficiently strong copyleft terms that cover recent trends in software development, like microservices and containerization, or public noncommercial licenses, general or exempting specific use cases.

As a consequence, companies aiming to become more selective face a kind of marketing, friction, and grokability incentive to pick either a fully closed or a permissive open source approach, even when those approaches don't track their business goals, or make software less open than business goals permit.

[Commons Clause](http://commonsclause.com/), a bolt-on addendum to open source terms overlaying cloud-provider-specific use restrictions, is symptomatic of project-steward companies becoming more selective in middle ground.  It's explicitly a tool for companies backing into closed from open, by changing the license terms for new work.  That's [what Redis Labs has done with add-ons to the Redis in-memory store](https://redislabs.com/wp-content/uploads/2018/10/Commons-Clause-White-Paper.pdf), effectively reallocating them from Open Core to Closed Shell.

Reaction to Commons Clause, such as the backlash that led early adopter DGraph to [revert back to Apache terms](https://github.com/dgraph-io/dgraph/commit/3d0b2cd84f04b263f6c5128e682a63be8dcb220d), shows the pressure doing work.  The reversion has been greeted as a victory for open source, because the license is now vanilla Apache.  But we can reasonably expect DGraph to allocate more functionality to its Closed Shell in the future, to compensate.  If it can't be selective in its license terms, it will be selective in release.  Otherwise, it may face the same problem that led it to Commons Clause in the first place.

MongoDB's [Server Side Public License](https://www.mongodb.com/licensing/server-side-public-license) represents an attempt to port the strategic effect of Commons Clause onto copyleft, bringing it back within the open source category, and updating open source copyleft to address new ways that software is being made with other software at scale.  That's much more difficult, legally and politically, demanding the resources of a larger company.  It's fundamentally speculative, betting that sufficient support and lobbying can create a licensing option for similarly situated companies that retains full open source credibility, if not the blessing of those who only accept permissive terms.

On another innovative note, back at smaller scale, we see CockroachDB [announcing a general principle for Open Core/Closed Shell allocation](https://www.cockroachlabs.com/blog/how-were-building-a-business-to-last/), publishing code for both, [mixed in the same codebase](https://github.com/cockroachdb/cockroach/blob/a0fcc4df414f229bcc2911dc0324363fcbe50d5d/LICENSE), [differentiating them in software with feature flags](https://www.cockroachlabs.com/docs/stable/get-started-with-enterprise-trial.html#use-enterprise-features), [offering a free trial for the add-on package](https://www.cockroachlabs.com/pricing/), and [including the terms for paid licenses for "enterprise" features in the distribution](https://www.cockroachlabs.com/cockroachdb-community-license/).  They've attacked the tension between structuring software as it ought to be structured technically, on the one hand, and creating sufficient divisions to enable differential licensing, on the other.

## Experiments

We've seen noncommercial and restricted licenses for software before.  Ghostscript wrote one, the [Aladdin Free Public License](https://spdx.org/licenses/Aladdin.html), in 1999.

We've also seen innovative mixes of release and licensing selectivity.  MariaDB, open successor to MySQL, "automated" the process of Ghostscript-style delayed release via license terms, in the [Business Source License](https://mariadb.com/bsl11/).  That automation enables MariaDB to bring more work into the open, more of the time.

MongoDB's drive to expand open source copyleft, while also making it more selective, is innovative.  But other parts of its story---a company forking FSF's GPL to address new kinds of software combination, and a company proposing the new GPL-based network-coplyeft license to OSI---come right out of the AGPL story.

Overall, smaller software companies in the shadow of a looming big-company boom are returning to experiment in selectivity outside the binary permissive-or-closed paradigm once again.  I think we'll see much more before we see less.
