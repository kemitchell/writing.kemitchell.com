---
title: The License Zero Manifesto
description: sustainable software in the open
layout: post
tags:
- Licensing
- Open Source
- License Zero
---

This piece also appears on [Medium](https://medium.com/licensezero/the-license-zero-manifesto-fecb7aaf4c0a) and [licensezero.com](https://licensezero.com/manifesto).

## Brokenness

Open Source is [a shopping spree](https://www.npmjs.com/search?q=anything).  Open Source is [code with friends on the Web](https://github.com).  Open Source is [a list of magic licenses](https://opensource.org/licenses).

Everybody loves Open Source.  Free, friends, and magic: what could possibly go wrong?

On the making side, as a maintainer in the last few years, you feel for yourself what's wrong.  Open Source won business over, and now business can't get enough at the price.  The bug reports, the feature requests, the diplomacy, the _time_ it takes to do things right with current tools, have run down, burned out, and busted some of the best.  The more you care about quality software, the more you care about community, the more generous bones in your body, the greater the risk that you'll give out at some point, too.  And perversely, the more people will ask, expect, and even demand more from you.

That's wrong.  Something's broken.

## Tension

We code with friends on the Web for fun, to hone our craft, to scratch our itches, to chase beautiful ideas.  But more and more of our growing community isn't playing for joy.  They're playing to win.  They're playing other games.

Open Source has always welcomed those uses, too.  But when the take is constant, and the give only occasional, what once was joyous can feel like thankless work.  There are more and more of you handing out code every day, but you're increasingly outnumbered all the same, and the community adopts more and more the character of its majority.

We talk about the consequences as "sustainability" problems.  Sustainability is abstract; casualties aren't.  If you can't help caring about elegance in software, if you won't give up coding in the open, if you can't count on winning the Open Source dream-job lottery, or thriving in corporate conditions if you do, you need support to avoid harm to yourself and the integrity of your craft.  You need recognition, help, and material aid from those who rely on your work and take your time.  There's no good reason independent craft and life-sustaining software success shouldn't go hand-in-hand.

## Emptyhandedness

Unfortunately, neither Open Source generally, nor Free Software specifically, helps here.  Open Source licenses [override legal defaults that make using and sharing software difficult and risky](https://oss.kemitchell.com).  They're handy, reliable, specialized tools for disarming the heavy weapons that copyright and other laws hand out to individual developers, want them or not.  But neither Open Source licenses nor Open Source tooling tell you how or why to make time to write software in the first place.  They don't tell you how to stay sane, or pay rent, so that you can write still more, or maintain what you've already made.  Even if there's clear need.  So Open Source licenses make amazing tools of selfless, total generosity, if you come from a situation free of worldly concern, and that's giving you can afford.  If you feel like every day is someone else's birthday, and being generous is becoming expensive, that's Open Source at scale.  Not a bug.

Try to make money, or just finance time to contribute where you see a need, and effectively free-of-charge under Open Source terms doesn't leave you much leverage.  The most valuable thing you have to offer, your software, is pegged down at $0.  So you join the [Mendicant Order of Maintainerati](https://writing.kemitchell.com/2017/02/10/Medicant-Maintainerati.html).  Maybe mull a few Open Source business models, like proprietary add-ons, support, hosted services, and training.  But even fewer users donate than contribute back, and all the business models are second-rate. Open Source severs the link between good software and good software business, and the two veer off naturally in different directions.  At worst, Open Source business models _incentivize_ worse software.  Since you can't charge more for better software, and you need to charge for something, you take time you'd rather spend bettering software, and make the best of an inherently flawed business plan, instead.

## Leverage

[License Zero](https://licensezero.com) is a new set of tools at your disposal.  And it's a shot across the bow of software entitlement,  free-as-in-worthless, and maintainer disposability.  License Zero evolves the most promising Open Source business model, the one most protective of good software craft: dual licensing, or offering software under one set of public terms, with an option to purchase other terms if you need them.

It starts with the [License Zero Public License](https://licensezero.com/licenses/public), a public license, the kind of thing you see in `LICENSE` files. License Zero is based on the [two-clause BSD License](https://spdx.org/licenses/BSD-2-Clause), a classic permissive Open Source license, with two key additions:

1.  Commercial use is limited to 90 days, as long as commercial users can readily acquire other licenses from a named source.  If other licenses aren't available for 90 days, this new language drops away, leaving exactly the same terms as those of the standard, Open Source two-clause BSD License.

2.  The copyright notice includes some additional information on the developer, and a cryptographic signing key.

The effect is something like:

```python
def public_license (paid_available, commercial, contributing):
  if paid_available:
    if commercial:
      if contributing:
        return 'contribution-enabling, BSD-like license'
      else:
        return '90-day free trial, then you have to buy a license'
    else:
      return 'noncommercial, BSD-like license'
  else
    return 'standard, Open Source, two-clause BSD'
```

Companies doing Open Source dual licensing have traditionally picked the prickliest Open Source public license they think they can get away with.  The pricklier the public license, the better the incentive for those with means to pay for a private license, rather than [ponder the public one](https://en.wikiquote.org/wiki/Pinky_and_the_Brain#Are_You_Pondering_What_I.27m_Pondering.3F).  The community around the software, if any, gets to do the pondering.  On what triggers copyleft.  On how to comply.  On license compatibility.  On copyright assignment documents.

Commercial outfits with money to spend on licenses, and on lawyers, are in the best position to grapple and cope with those issues.  So the burden of confusion falls exactly where it makes least sense.  We see this with GPLs, and AGPLs.  We see it with lack of clear licensing, as with [SQLite](https://sqlite.org/copyright.html).

License Zero does a better job of driving demand for paid licenses.  If you use the software for gain and glory past 90 days, a nice long free trial, you need to buy a license.  There are no complex license conditions to squint at.  On the other side, if you're not using commercially, License Zero does a better job of reducing license-related hassle.  The license is essentially two-clause BSD for non-commercial users and their peers.

## Departure

According to [The Open Source Definition](https://opensource.org/osd), discriminating against commerce and non-contributors is not "Open Source".  The Definition also prohibits discrimination against "fields of endeavor", like commerce, and persons and groups, like non-contributors.  That means License Zero is no longer an Open Source license, even if it remains remarkably generous, a public gift to charitable organizations, students, teachers, academics, and hobbyists everywhere.

"Not Open Source" doesn't mean License Zero software can't be developed in the open.  On the contrary, the public license makes clear that anyone can distribute for any purpose.  You can put your source code on [GitHub](https://github.com).  You can publish build artifacts to many package repositories, like [npm](https://npmjs.com).  Sure, rascals can find your software online, and skip buying the license they need.  But the conscientious, the risk-averse, the accountable, and the eminently lawsuit-worthy will tend to buy licenses, especially if that's easy to do.  DRM, access control, and the like aren't worth it, when you'd rather make your software easy to obtain, and as popular as possible.  If you really want, you can sue unlicensed commercial users, or more likely threaten to sue and settle.  You have the leverage.

But how easy can buying a private license be?  One of the great benefits of taking cost out of the picture with an Open Source license is that nobody hassles with paying or charging it.  Neither do you have to negotiate license terms: Open Source license terms are take-it-or-leave it, and so generous that pretty much everybody takes.  Other than for distribution, you don't have to deal with any external systems at all.

Just as Internet and software enabled distribution took payment for shipped copies of Open Source software, common in its earliest days, out of the picture, the Internet and software can alleviate the pain of communicating licenses and payment. [licensezero.com](https://licensezero.com) is a techno-legal vending machine for the kinds of private licenses the License Zero Public License anticipates, the other half of the dual licensing play.  Developers can create accounts by linking with Stripe, generate `LICENSE` files and package metadata, and set pricing for four tiers of paid, commercial licenses: solo use, a team up to 10, a company up to 100, or an enterprise, unlimited.  Private license sales happen directly on developer Stripe accounts, via [Connect](https://stripe.com/docs/connect/standard-accounts).  The vending machine initiates Stripe charges directly on your Stripe account, taking a [commission](https://stripe.com/docs/api/node#application_fees) in passing.

## Agency

[licensezero.com](https://licensezero.com) acts as developers' licensing agent, using the same cryptographic key shown in `LICENSE` to sign binding private licenses on developers' behalf.  The private licenses [derive from The Apache License, Version 2.0](https://licensezero.com/licenses/private), an enterprise-friendly permissive license.  Commercial users can use a [command-line tool](https://github.com/licensezero/licensezero-cli) to generate quotes for all License Zero dependencies in their projects, buy all the licenses they're missing with a credit card on one checkout page, and import a bundle of their licenses, so they're omitted from quotes going forward.  License Zero can't beat Open Source's utter lack of payment, terms, and communication in low friction.  But using software, it can come very close.  Close to zero.

In case the terms themselves produce unwanted friction, [licensezero.com](https://licensezero.com) allows developers to borrow the agent's cryptographic key to sign [waivers](https://licensezero.com/licenses/waiver), essentially freebie commercial-use licenses.  Waivers are a quick way to reassure noncommercial users with questions about the public license that they can use freely.  They can also be used to reward contributors, manually or perhaps through a bot that responds on landed pull requests.  The command-line tool can import and process waivers, too.

When generous waivers for specific users won't do it, adopting License Zero licensing needn't be a permanent choice.  You can relicense your work onto more generous terms, like Open Source terms, at any time.  Perhaps when you find a different support arrangement to keep you fed.  Perhaps when you [cut a deal to relicense on Open Source terms for a fee](https://github.com/licensezero/open-accession-agreement).  Perhaps when work on a discreet problem is just done, and you very generously intend to ensure that it stays that way.  You have always had these kinds of choices.  License Zero makes that clear again, even if you never use it.

The site and tooling are launching now for npm packages, but the legal parts of the toolkit, and much of the agent code, work generically.  It won't take too much to extend the convenience to other language ecosystems with discreet package concepts and welcoming repositories.

## People

You may wonder why all this matters to me, about who you're dealing with, and what I'm after.  [licensezero.com](https://licensezero.com) will be, as long as I can manage it, a very simple machine, an [artless device](https://artlessdevices.com) that pulls no punches.  But in your position, I'd wonder:  Who's making the choices around here?

I'm [kemitchell](https://github.com/kemitchell).  Free and Open Source Software took me out of a tiny town in the Piney Woods of Texas.  Linux and the Web grabbed me early, and haven't let go since.  I vividly remember pulling together dollars, waiting for weekends with my father, in town, where I could find old editions of O'Reilly books used.  What I read in those books helped get me to Austin.

I wasn't in Austin long before I started working in software.  And I kept working.  And learning.  And working.  And studying.  And working still more.  And eventually, more or less, burning out.  I chased a life goal to Moscow for a year to shake it, had a great time, and watched the US economy tank on Russian state TV.  My clientele was toast, but in a way, I was already done.  I took a look around at the incredible hackers I was meeting in Russia, met a few Americans doing good work as attorneys abroad, and figured I could run the middle.  Get a legal education, get a ticket back to Russia, and help [build bridges between American and Russian tech](https://twitter.com/medvedevrussiae/status/229994873569300480).

From there to law school, still slinging software.  And to Silicon Valley, to work at a firm.  And then on my own, to Oakland, to take control of my practice, and [my tools](https://commonform.github.io).  Free again at last, I came back to the software community, and met some more incredible hackers, especially in Oakland, especially around Node.js.  Russia had gone to war, the Russian-American bridges burnt down, and sanctions went up in their place.  But I found myself surrounded by great people, friends and sometimes even clients, on the leading edge of Open Source and other communities rowing against the current of intellectual property law.  I couldn't help it.  I started [writing in the open](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html).  I started [contributing where I could help](https://github.com/npm/npm/releases/tag/v2.10.0).

I see my friends struggle to maintain their craft.  I see them burn out.  I see them go it alone, without guidance, without leverage, without structural support.  As we slurp jjamppong in [Temescal](https://localwiki.org/oakland/Temescal), or sip coffee South of Market, or wolf down trash bag pizza at [Sudo Room](http://sudoroom.org/), we can't help talking about software and where it's going.  How the community is changing.  About friends who've had to skip town to stay true.  About how long we'll last before we split, compromise, or fold.

Not while I still type.  I'm here to help.

## Change

License Zero is an experiment.  A cultural experiment.  A moral experiment.  What should developers charge for their work?  Coffee money?  Lunch money?  Conference ticket money?  What should the agent charge, as commission?  A flat fee?  Real-estate rate?  A good restaurant tip?  I don't know.  With luck, we'll find out.

But whatever the details, the overarching, immediate, community purpose of License Zero is to register a few critical points:

First, that community tools are for hacking.  [That includes licenses.](https://writing.kemitchell.com/2017/08/31/Null-Value.html)  When community runs aground on a systemic problem, we should roll up our sleeves, and debug skeptically.  We should assess what we value, and implement from there.  Preferably in software.

Second, that not everyone wants to succeed at open software development on the same terms, or should.  Companies, especially large ones, foundations, and governments, have long made talent available in the form of paid Open Source time.  But there ought to be room for small and independent players, as well.

Third, that all good software built openly, and _especially_ Open Source, has value, particularly when there's no price tag users can see.  Making costs invisible doesn't make projects free.  Community and industry alike should celebrate those who bear, and hide, significant costs for others, especially those willing to stand by while others reap commercial rewards gratis.  Those playing to win should recognize that all of you have a choice---in fact, many choices---about how to work and share your craft.

Now you have one more.
