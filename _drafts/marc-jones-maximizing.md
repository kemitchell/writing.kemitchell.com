---
title: Marc Jones on Commons Clause and SSPL
description: points and counterpoints
tags:
  - Commons Clause
  - SSPL
  - Licensing
  - Open Source
---

I recently watched [a recording of Marc Jones' talk at CopyleftConf 2019](https://www.youtube.com/watch?v=NmJDeVSecwc) entitled _Maximizing the Value of Free Software to Your Organization Using Copyleft_.  As usual, I took notes.  Unusually, I found myself arguing with them pretty much from the start.

In case it helps folks on the other side of the debates about [Commons Clause](https://commonsclause.com) and the [Server Side Public License](https://www.mongodb.com/licensing/server-side-public-license), here are my summaries of a few of Marc's key points, plus my retorts.

## It's impossible to comply with SSPL copyleft.

Marc concedes that MongoDB's use of copyleft to require sharing code alike in the Server Side Public License isn't out of free software bounds.  But he questions the sincerity of MongoDB, the license author, on the grounds that running a cloud service with entirely free software is impossible or nearly impossible.

Even taking as given that running a fully open source isn't currently practical, SSPL isn't the first copyleft license to dare industry to find a way to run a business model open.  That is a big part of what strong copyleft does.  That was a big part of [the motivation for creating strong copyleft in the first place](https://www.gnu.org/philosophy/pragmatic.html).

Any number of GPL-licensed libraries continue to dare various application makers to make their models work fully open.  There's a trove of free software waiting for them---and not their closed competitors---if they do.  In the meantime, free software principles don't let industry cop out by passing the _choice_ to keep software closed off as inevitable or outside their control.

MongoDB didn't start out as a database company.  They [started off trying to build an open source cloud](https://www.mongodb.com/press/10gen-announces-company-name-change-mongodb-inc).  Part of that was writing an open source database.  The database took off, and the company pivoted to focus on it.

## Why would MongoDB ever hire all thirty top contributors to its project?

Because those developers deserve to get paid, and will do more and better work when they are.

MongoDB and Redis don't have the "sustainability" problem imperiling developers of so many free software projects.  All the developers making substantial contributions to their projects are covered.  Their companies effectively shift the sustainability problem off their developers and onto themselves, as organizations.

Thirty developers is more than most free software projects ever see, and adoption of MongoDB is through the roof.  If we were talking about a massively popular database with thirty funded developers working through a 501(c)(6) business-league foundation, I'd expect to see it held up as a model.  Change just one detail---a business corporation rather than a league of business corporations---and reception changes completely.

## There's no value in free software, which is commodity.

Marc argues that free software has no value, since it's free or cheap to reproduce and fungible.

Companies like MongoDB and Redis Labs leverage free licensing and distribution to reach massive numbers of users.  A very small percentage of those users end up paying the companies for products or services.  In other words, the vast majority of users have no relationships with the companies behind them, other than through the software.

If the software itself software had no value, we wouldn't see that pattern of adoption.  Likewise moves by Red Hat to monetize via professional services, or AWS to monetize via hosting.  Red Hat isn't just a software consultancy.  AWS isn't just a PaaS.  The crux is the free software underlying, the value it represents to potential customers.

Marginal cost is utterly irrelevant to end-user value.  In my law practice, flat-rate clients don't care if I spend twenty four hours writing up the form they need from scratch or sit on my hands for a day and then spend six seconds running a program to spit out the same form for me.  The cost of my service, the time they wait, and the value of the form I deliver are all the same.  The question is whether I can produce that value efficiently enough to make it available to clients at prices they can afford, and whether I can keep doing that so the value proposition remains available.

As for fungibility,  I'm aware of some nonfree databases that support a subset of the Mongo or Redis APIs, like DocumentDB from AWS.  But there aren't alternatives I'm aware of that slot in reliably for the "official" versions from the project stewards.  I _do_ care whether the MongoDB I deploy is the same MongoDB that my application or application libraries expect.  Literally swapping one implementation out for another may introduce outright breakage or pernicious bugs.

## Contributor license agreements are bad.

The Redis database remains BSD-licensed.  The project requires contributions [to license on the same BSD terms](https://github.com/antirez/redis/blob/unstable/CONTRIBUTING).

MongoDB [uses a contributor agreement](https://www.mongodb.com/legal/contributor-agreement), which is actually a copyright _assignment_ with a broad license back to the contributor.

It's easy to lead developers into feeling uneasy about this.  "CLA" is a dirty word.  So is "assignment".  But simply baiting a rote reaction is shallow and misleading.  If the answer to:

> Are you okay signing a CLA that gives the company an unlimited license?

is no, the next next question ought to be:

> How about contributing to projects under permissive terms like MIT?

That answer is likely to be "yes".  But that's two different answers to two largely equivalent questions.  Permissive free software licenses _also_ allow distribution and licensing under proprietary terms.

Start with an "unlimited license" that is in fact a free software license, like [Blue Oak](https://spdx.org/licenses/BlueOak-1.0.0) or [0BSD](https://spdx.org/licenses/0BSD).  Add some basic warranties and general legal terms, like those in [Apache's CLA](https://www.apache.org/licenses/icla.pdf).  You end up with a legal form that differs from MongoDB's only in the implementation detail of assignment with broad license back rather than broad license forward.  Either way, the terms make the project steward free to do whatever they like with the contribution.  Which is exactly what you want, as an application developer, if licensing flexibility is how the creator of your database keeps paying its engineers.

## MongoDB isn't offering partnership.  It's telling others that it's wrong for them to make money with MongoDB.

MongoDB's business is built on users making money with MongoDB.  The more money folks can make using MongoDB as their database, the more opportunity MongoDB, Inc. has to sell hosting, support, and so on.

That's why the company gives away what amounts to a permissive license for the primary use case of their database: building applications.  You can build a web application using MongoDB and sell it as SaaS without sharing source code.  You can build a application using MongoDB and sell it for installation without sharing application source code.

That was true under AGPL, and it's still true under SSPL.

Within a legal partnership, partners owe duties of loyalty to the organization.  They don't partner up to compete with one another.  They don't tolerate arrogation of partnership opportunities to partners as individuals.  When they catch partners "cheating", they call them out, vote them out, or sue.

## These companies don't actually want contribution back.

I don't think those companies thing of "contribution" only in terms of code.  Contribution could also take the form of deals that send revenue back to the vendor, so that it can continue funding development.
