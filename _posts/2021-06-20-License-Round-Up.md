---
title: License Round-Up
description: listing licenses I've contributed to
date: 2021-06-21T06:36Z
tags:
- Software
- Licenses
---

I've been a part of drafting a number of new public software licenses over the last few years.  Here's a quick roundup.

## Blue Oak

I cofounded [Blue Oak Council](https://blueoakcouncil.org) with a number of other private-practice licensing lawyers to publish free information to help organizations that can't find or afford to engage lawyers like us get the most from open software.  Our initial goal was to publish a [ranked list of permissive open software licenses](https://blueoakcouncil.org/list), as a building block for simple [company policies](https://blueoakcouncil.org/starter-policy), [contract language](https://blueoakcouncil.org/grant-release), and [automated compliance tools](https://www.npmjs.com/package/licensee).

[The Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0), a model permissive software license, fell out of that process.  We all had unspoken, unwritten checklists of features we were looking for in a good permissive license.  We soon realized no existing license had them all.  It was easier to draft and publish the model license to demonstrate our standards than describe them in the abstract.

## Berneout

I created the [Berneout org on GitHub](https://github.com/berneout) several years ago as a lab for experiments in software licensing.  Most have been little more than sketches or proofs of concept.  But a few have grown legs.

The [Big Time](https://bigtimelicense.com) license brings the concept of "FRAND"---fair, reasonable, and nondiscriminatory licensing---to software implementations.  In a nutshell, FRAND is the deal big companies cut with one another through standard-setting organizations.  Each company promises to make any of its patents that it gets written into a standard available to all comers on FRAND terms.  Big Time turns this concept around.  Noncommercial and small-business use is free, but the license gives big companies a free trial and an accountable guarantee they'll be able to buy paid licenses for long-term use, at fair prices, under fair terms.

[Normally Closed and Normally Open](https://github.com/berneout/normally-open-closed) are more properly license _templates_ than licenses in themselves.  I pulled them together as a response to floods of people asking for---and drafting---licenses that "prohibit X" or "only allow Y".  A lot of those licenses were "patching" ancient, flawed forms, like MIT or BSD, or missing basic items on the checklist for a competent public software license in the 2020s.

Each template includes a blank space for developers to fill in with their own rules, on top of a solid foundation of solid licensing language.  In Normally Open, that blank is for what's prohibited.  All other kinds of use are allowed.  In Normally Closed, the blank is for what's allowed.  Any other uses are prohibited.

Several "failed" Berneout experiments also found new life in other projects.  For example, an early Berneout repo implemented common open source license features as independent modules, enabling a `Makefile` to build thousands of combinations, each a potentially valid open source license.  The effort in drafting simple-English versions of those modules paid off in the Blue Oak Model License.  Blue Oak's members agreed that a model license must have short, plain-language terms.  A lot of the investment "translating" more traditional license language had already been made, so we could mostly edit, rather than face the blank page.  The Blue Oak Model License came together remarkably fast.

## Artless Devices

I set up a company, [Artless Devices](https://artlessdevices.com), to house my commercial side projects and separate them from my law practice.  There have been a few projects.

[Prosperity](https://prosperitylicense.com) is the current iteration of my first license for License Zero, which offered back-office infrastructure for dual licensing software "as a service".  It was originally called the "License Zero Noncommercial License".  It's a free license for noncommercial use, with a time-limited free trial for potential commercial customers.

This predates the [PolyForm Project](https://polyformproject.org), but in current form acts as a branded "distribution" of [PolyForm Noncommercial](https://polyformproject.org/licenses/noncommercial) combined with [PolyForm Free Trial](https://polyformproject.org/licenses/free-trial).

[Parity](https://paritylicense.com) was the second public license choice for License Zero.  I drafted it in response to feedback from folks who preferred to make their work available free for use in open source, even commercial open source, rather than for noncommercial purposes, open or closed.

Parity notably strengthens copyleft for development tools: you can't use a Parity-licensed tool to build closed software.  Most users of Parity have just used the license, and not sold licenses for use in closed software, through License Zero or otherwise.

The [Patron](https://patronlicense.com) license also went out under the License Zero banner, to help folks who really wanted a recurring-payment relationship with customers, rather than the one-time-payment structure License Zero automated.  In place of License Zero, the Patron License works together with a patronage-style fundraising platform, like Patreon or GitHub sponsors.  Sponsors at tiers that include the magic words "patron license" as a perk get the right to ignore the noncommercial or copyleft rules of the public license for the project.

## PolyForm

I cofounded [PolyForm Project](https://polyformproject.org) a couple years back.  My view of of our goals was basically twofold:

1.  Write and publish the "missing" standardized software licenses, especially noncommercial and no-derivatives licenses, that have long been available for other kinds of work from [Creative Commons](https://creativecommons.org).

2.  Offer generic, standardized alternatives to the various licenses software companies, like Elastic NV, were writing to prevent the dominant cloud services companies from outcompeting them in hosting their own software.

The [Noncommercial license](https://polyformproject.org/licenses/noncommercial/1.0.0) implements free noncommercial licensing for software.  After a lot of research and debate, we approached the problem of spelling out "noncommercial" differently than [Creative Commons](https://creativecommons.org/licenses/by-nc/4.0/).  Instead of trying to define "noncommercial", we just say "noncommercial".  But we supplement with specific "safe harbors" that clearly cover common [personal uses](https://polyformproject.org/licenses/noncommercial/1.0.0/#personal-uses) and [noncommercial organizations](https://polyformproject.org/licenses/noncommercial/1.0.0/#noncommercial-organizations).  That way the most common kinds of users can find themselves in the license terms, rather than bug the developer to start a debate about what "noncommercial" means.

PolyForm's [Strict license](https://polyformproject.org/licenses/strict/1.0.0) license covers situations where a developer gives some software to a specific user, without any rights to modify or distribute.  In my mind, this lines up with Creative Commons' NoDerivs licenses, outside software.  I've seen firsthand that it's been used to expedite private deals.

The [Small Business license](https://polyformproject.org/licenses/small-business/1.0.0) only covers small businesses.  Developers that want to make noncommercial and small-business use free can license under _both_ Noncommercial and Small Business licenses.

[Internal Use](https://polyformproject.org/licenses/internal-use/1.0.0) brings a common trope from commercial software licensing to public software licensing.  Anyone can use the software for free, but only for their own needs, not to provide services to other customers.

[Free Trial](https://polyformproject.org/licenses/free-trial/1.0.0) gives a free trial for 32 days, for any purpose.  Again, we expect this license will often be used in combination with other licenses.  Offering software under both Noncommercial and Free Trial gives commercial users a free trial of 32 days, but requires them to negotiate for a long-term license after that time.

[Perimeter](https://polyformproject.org/licenses/perimeter/1.0.0) and [Shield](https://polyformproject.org/licenses/shield/1.0.0) implement two approaches to "use our software for free, but not to compete with us".  Perimeter prohibits using the software to compete _with the project_.  Shield prohibits using the software to compete _with the developer_, not just in their work on the project, but more broadly.

Perimeter and Shield were harder to draft and took longer to finalize.  We published them some month after the initial crop of PolyForm licenses.

In order to get them out quickly, the 1.0.0 versions of PolyForm licenses were generated from a common template, with most of the language reused across licenses.  In coming versions, we'll likely tone back some of the modularity, in favor of making each license easier to read on its own.

## Round Robin

[Round Robin](https://roundrobinlicense.com), earlier called the "API Copyleft License", fell out of [my frustrations with MongoDB's Server Side Public License and reaction to it](https://writing.kemitchell.com/2019/06/13/SSPL-Not-Commons-Clause.html).

In short, I thought Mongo's decision to "patch" AGPL obscured the issues and enabled those who preferred derailing the conversation to recognizing the problem.  So I sat down and implemented the licensing approach---permissive for applications, copyleft for everything else---without inheriting GPL's morass or introducing tropes from enterprise software licensing.

Feedback on this license, from so many folks online, was amazingly deep, thorough, and uplifting.  It really shows in the current form.  Apart form the Blue Oak Model, this strikes me as the license on this list with the broadest possible audience.

## Icepick

[Icepick](https://icepicklicense.org) came about much like Round Robin, as a riff on others' good work.  Where Round Robin took off from SSPL, Icepick found inspiration in the [Cryptographic Autonomy License](https://opensource.org/licenses/CAL-1.0) and all the controversy around it.  It hasn't hit 1.0.0 yet, but I'll get around to it once I get another chance to mull it properly.

The basic premise of Icepick was simple extrapolation.  GPL used copyright to defend "freedom" in just one element of computing: code.  The Cryptographic Autonomy License extended to another: data.  How to write a "freedom" license that addresses _all_ the elements of computing?  What does the courage of "software freedom" conviction look like when it _doesn't_ bury itself in the details?

Icepick in current form pulls four rights---autonomy, transparency, accountability, and independence---and a number of responsibilities---disclosure, permission, nondiscrimination, and so on---out of "freedom".  Then it matrix-multiplies them against all the elements of computing---software, data, hardware, connectivity, and legal.  The result is necessarily phrased at a higher level of abstraction, but one potentially less susceptible to "loopholes" born of low-level implementation details, be they legal, like "derivative work", or technical, like "system library".

Icepick isn't overconcerned with putting its demands in the language of copyright.  And that's a criticism I'd level at the GPLs today, which haven't evolved in fundamental approach since the project-specific pre-GPLs of the 1980s.

## Code Credit

I began working on [`credits.txt`](https://github.com/creditstxt/creditstxt.com) convention for listing credits for web apps and other software services in response to many discussions about fair credit for open software developers, and a desire to give credit where due for my own apps.  I'd already heard some requests for a license requiring credit through License Zero, and [published a form for a friend under the License Zero banner](https://writing.kemitchell.com/2018/07/12/Posterity.html).

Revisiting that license, due to yet more hacker requests, led to the [Code Credit License](https://github.com/creditstxt/creditstxt.com), which requires users of software to give credit to projects and developers in whatever way is appropriate for the medium they work in: end credits for films, citations in academe, and so on.  For software services, that convention is `credits.txt`.  Since the license is really just the Blue Oak Model with an additional requirement, we also [published that requirement](https://codecreditlicense.com/add-on/1.1.0) as an "add-on" people can add to other licenses.

## Cross-Licensing

Largely as a result of some research on early intellectual property law, as well as some great conversations and reading recs from [Mako Hill](https://mako.cc/), I hit on the idea of using cross-licensing---long a favored legal tool of international cartels, from light bulb barons to Nazi chemical conglomerates---for upstart companies and open rebels, much as GPL had co-opted license conditions and distribution controls---weapons of choice of the early proprietary software giants.  That's led to two forms, still in prereleases on their way to 1.0.0s.

The [Cross-License Collaborative](https://xlcollaborative.com/) agreement allows contributors to a decentralized project covered by copyright or patent rights to build a kind of quasi-cooperative, without the overhead of incorporation.  A few friends have summed this up as a "decentralized CLA": each contributor licenses their contributions to the project as a whole, but they license their fellow contributors, rather than a centralized company or foundation.  Each contributor then gets the power to license all the rights in the project, as a whole, subject to a voting process and requirements to share information and remuneration equally.

The [Cross-License Foundation](https://xlfoundation.com/agreement/1.0.0-pre.2) is essentially a limited species of Cross-License Collaborative, eschewing terms on payments to facilitate just the kinds of things open foundations typically handle: updating license terms over time, so projects aren't stuck on whatever legal form the first contributor picked way back when, even as the law changes and bugs become known.

## Parting Thoughts

> There is a point---is there a point to all this?  Let's find a point.  Is there a point to my act?  I would say there is.  I have to...
>
> --- [Bill Hicks](https://en.wikipedia.org/wiki/Bill_Hicks), "Revelations", 1992

My shtick ain't complicated.  I like writing licenses.  Because I like helping programmers.  It's why I went into law.  And programmers want new licenses.

So many of these folks, even folks who know me personally, seem so genuinely surprised, near disbelief, that a lawyer will listen to them and help them.  Bone dry in chalky details as the thing may be, they're genuinely enthused by the idea that licensing is _their power_, earned through _their work_, that they get to exercise _as they see fit_, aided, not allowed, by lawyers.  The hood on licensing isn't welded shut.  Nobody gets to tell them they can't touch that, for their own protection or anyone else's.
