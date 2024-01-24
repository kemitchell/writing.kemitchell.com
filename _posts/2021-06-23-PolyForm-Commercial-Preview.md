---
title: Standardize Commercial Software Licensing
description: announcing PolyForm Commercial, with a call for help
series: PolyForm
brief: PolyForm Commercial's bringing standardization to business-to-business software licensing, with a mix of terms and tech.  We need eyeballs and feedback!
tags:
- Licensing
- Software
- Standard Legal Terms
---

At [commercial.polyformproject.org](https://commercial.polyformproject.org) you can answer a series of questions, click a button, and download a ZIP archive with readable legal terms and an order template for a commercial software license.  Trial, unlimited, or seat-based, binary or source, single version or with updates, full, enterprise-class support or none whatever---the generator supports them all.  Answer the questions, download the files, fill out the order form, [read it through](https://notlegaladvice.law/), and go.

Lawyers have been papering software deals for decades.  There is no such thing as one "standard" end-user license agreement to rule them all.  But most business-to-business EULAs say mostly the same thing, with a limited number of well understood variations and add-ons.  We share enough collective experience to know that a small number of choices cover the vast majority of deals.  The decision tree isn't any deep industry secret.  We can write it out, automate it, and put it online.

There are only two questions in my mind:

1.  Can we kickstart a collaboration, so the terms benefit from the knowledge and experience of more developers, businesspeople, and lawyers?

2.  Can we use technology to standardize not just a fixed set of terms, not just a starting point for lawyers to finish, but a decision tree and a template for ready-to-use license packets?

The [software](https://github.com/polyformproject/commercial.polyformproject.org/blob/main/index.js), [decision tree](https://github.com/polyformproject/commercial.polyformproject.org/blob/main/prompts.yml), and [both](https://github.com/polyformproject/commercial.polyformproject.org/blob/main/order.md) [templates](https://github.com/polyformproject/commercial.polyformproject.org/blob/main/terms.md) for PolyForm Commercial are all [on GitHub](https://github.com/polyformproject/commercial.polyformproject.org).  Everyone's welcome to [e-mail me](mailto:kyle@kemitchell.com), too.  If you care about commercial software licensing and want to waste less time on terms for it, run through the wizard, download a packet, look it over, have your lawyer look it over, and send thoughts my way.

Standardization is trickier.  We have strong examples of standard terms _without_ dynamic variation.  Open source software licenses, for one.  The [other licenses from PolyForm](https://polyformproject.org/licenses/), for another.  And also outside software: [Waypoint](https://waypointnda.com) for two-way NDAs, and now [Guestbook](https://guestbooknda.com) for one-way, as well.  Plus [several more released in the past year](https://stonecutters.law/#forms).  But these projects aren't so much decision _trees_ as branded sets of terms to use once a decision---"we should sign a two-day NDA first", "our site won't track any personal information"---has been made.

We also see examples of standardized "starting points" for more complex transactions.  The [ISDA Master Agreement](https://en.wikipedia.org/wiki/ISDA_Master_Agreement) for swaps between companies.  The [NVCA model docs](https://nvca.org/model-legal-documents/) for venture capital financings.  [Dueling](https://www.consensusdocs.org/) [forms](https://constructiondocuments.aia.org/) for construction projects and [trucking](https://www.trucking.org/) [logistics](https://www.tianet.org/).  A [build-a-contract toolkit](https://www.tianet.org/) for design work.  All of these provide prebaked legal terms, but require a lawyer or savvy businessperson to choose from alternatives, fill in blanks, and otherwise turn a starting point into a finished proposal.

Some industry groups publishing standard forms have tried to automate preparation of variations, often by splitting their monolithic forms into plug-and-play "addenda" and proprietary document assembly software.  Even so, the output of that automation is often still an unfinished product, an input to the lawyers, rather than a ready-to-use set of docs.

The advantage of software here is clear: software people get software automation.  And as automation goes, selectively concatenating strings isn't terribly mind-bending.  The tricky complexity in PolyForm Commercial isn't in parsing and following templating instructions---[that's a solved problem](https://writing.kemitchell.com/2021/03/13/Templating-for-Lawyers)---but in making sure all possible variations from a template make cohesive sense, as a set of legal terms.  That's advanced contract drafting, a really fulfilling challenge.

I think we're up to it.  And I've taken a first stab, with encouragement, input, and reference material from colleagues.  With a few more eyeballs---legal and technical---we could massively reduce transaction costs in the market for software.  We could bring the costs of selling software down toward the costs of distributing it: zero.
