---
title: License Round-Up
description: listing licenses I've contributed to
tags:
- Software
- Licenses
---

I've been a part of drafting a number of new public software licenses over the last few years.  Here's a quick roundup.

## Blue Oak

I cofounded [Blue Oak Council](https://blueoakcouncil.org) with a number of other private-practice licensing lawyers to publish free information to help organizations that can't find or afford to engage lawyers like us get the most from open software.  Our initial goal was to publish a [ranked list of permissive open software licenses](https://blueoakcouncil.org/list), as a building block for simple [company policies](https://blueoakcouncil.org/starter-policy), [contract language](https://blueoakcouncil.org/grant-release), and even [automated compliance tools](https://www.npmjs.com/package/licensee).

[The Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0), a model permissive software license, fell out of that process.  All our members had their own unspoken checklists of features we were looking for as we reviewed licenses.  We soon realize that no existing license boasted all of them.  It was easier to draft and publish the model license to demonstrate our standards than to describe them in the abstract.

## Berneout

I created the [Berneout org on GitHub](https://github.com/berneout) several years ago as a home for various experiments in software licensing.  Most have been little more than sketches or proofs of concept.  But a few have grown legs.

The [Big Time](https://bigtimelicense.com) license brings the concept of "FRAND"---fair, reasonable, and nondiscriminatory licensing---to software implementation.  In a nutshell, FRAND is the deal big companies cut with one another through standard-setting organizations.  Each company promises to make any of its patents that it gets written into a standard available to all comers on FRAND terms.

[Normally Closed and Normally Open](https://github.com/berneout/normally-open-closed) are more properly license _templates_ than licenses in themselves.  I pulled them together as a response to floods of people asking for licenses that "prohibit X" or "only allow Y".

Each template includes a blank space for developers to fill in with their own rules, on top of a solid foundation of solid licensing language.  In Normally Open, that blank is for what's prohibited.  All other kinds of use are allowed.  In Normally Closed, the blank is for what's allowed.  Any other uses are prohibited.

Several of the "failed" experiments also found new life in other projects.  For example, an early Berneout repo implemented common open source license features as independent modules, enabling a `Makefile` to build thousands of combinations, each a potentially valid open source license.  The effort in drafting simple-English versions of those modules paid off when drafting the Blue Oak Model License.  Blue Oak's members agreed that a model license must be a short, plain-language license.  A lot of the investment plainer-language drafting takes had already been made, so we could mostly edit, rather than face the blank page.

## Artless Devices

I set up a company, [Artless Devices](https://artlessdevices.com), to house my commercial side projects and separate them from my law practice.  There have been a few projects.

[Prosperity](https://prosperitylicense.com) is the current iteration of my first license for License Zero, which offered dual licensing for software "as a service".  Prosperity predates the [PolyForm Project](https://polyformproject.org), but in current version is largely a branded "distribution" of [PolyForm Noncommercial](https://polyformproject.org/licenses/noncommercial) plus [PolyForm Free Trial](https://polyformproject.org/licenses/free-trial).  It's a free license for noncommercial use, with a time-limited free trial for potential commercial customers.

[Parity](https://paritylicense.com) was the second license written for License Zero, in response to feedback from folks who preferred to make their work available free for use in open source, even commercial open source, rather than for noncommercial purposes, open or closed.  Parity notably strengthens copyleft for development tools: you can't use a Parity-licensed tool to build closed software.  Most users of Parity have just used the license, and not sold licenses for use in closed software, through License Zero or otherwise.

The [Patron](https://patronlicense.com) license also went out under the License Zero banner.  The Patron License works together with a patronage-style fundraising platform, like Patreon or GitHub sponsors.  If you sponsor the developers at a tier that includes a "patron license", you can ignore the noncommercial or copyleft rules of the free license for the project.

## PolyForm

I cofounded [PolyForm Project](https://polyformproject.org) with a number of other folks a little more than a year back.  My view of of our goals was basically twofold:

1.  Write and publish the "missing" standardized software licenses, especially noncommercial and no-derivatives licenses, that were long available from [Creative Commons](https://creativecommons.org) for other kinds of media.

2.  Offer standardized alternatives to the various licenses companies were writing to prevent the dominant cloud services companies from competing with smaller companies in offering their own software as hosted services.

The [Noncommercial](https://polyformproject.org/licenses/noncommercial/1.0.0) implements free noncommercial licensing for software.  After a lot of research and debate, we approached the problem of defining "noncommercial" differently than [Creative Commons](https://creativecommons.org/licenses/by-nc/4.0/).  Instead of trying to define "noncommercial", we rely on the everyday meaning of the term, but supplement it with specific "safe harbors" for common [personal uses](https://polyformproject.org/licenses/noncommercial/1.0.0/#personal-uses) and [charitable organizations](https://polyformproject.org/licenses/noncommercial/1.0.0/#noncommercial-organizations).

PolyForm's [Strict](https://polyformproject.org/licenses/strict/1.0.0) license covers situations where a developer gives some software to a specific user, without any rights to modify or distribute.

[Small Business](https://polyformproject.org/licenses/small-business/1.0.0) only covers small businesses.  Developers that want to make noncommercial and small-business use free can license under _both_ Noncommercial and Small Business licenses.

[Internal Use](https://polyformproject.org/licenses/internal-use/1.0.0) brings a common trope from commercial software licensing to public software licensing.  Anyone can use the software for free, but only for their own needs, not to provide services to other customers.

[Free Trial](https://polyformproject.org/licenses/free-trial/1.0.0) gives a free trial for 32 days, for any purpose.  Again, we expect this license will often be used in combination with other terms.  Offering software under both Noncommercial and Free Trial gives commercial users a free trial of 32 days, but requires them to negotiate for a long-term license after that time.

[Perimeter](https://polyformproject.org/licenses/perimeter/1.0.0) and [Shield](https://polyformproject.org/licenses/shield/1.0.0) implement two approaches to "use our software for free, but not to compete with us".  Perimeter prohibits using the software to compete _with the project_.  Shield prohibits using the software to compete _with the developer_.

Perimeter and Shield were harder to draft and took longer to finalize.  We published them some month after the initial crop of PolyForm licenses.

## Round Robin

[Round Robin](https://roundrobinlicense.com), earlier called the "API Copyleft License", fell out of [my frustrations with MongoDB's Server Side Public License and reaction to it](https://writing.kemitchell.com/2019/06/13/SSPL-Not-Commons-Clause.html).  I thought Mongo's decision to "patch" AGPL obscured the issues and enabled those who preferred derailing the conversation to recognizing the problem.  So I sat down and implemented the licensing approach---permissive for applications, copyleft for everything else---without inheriting GPL's morass or introducing tropes from enterprise software licensing.

Feedback on this license, from so many people, was amazingly deep, thorough, and uplifting.  It really shows in the current form.

## Icepick

[Icepick](https://icepicklicense.org) hasn't hit 1.0.0 yet, but it came about much like Round Robin, as a riff on others' good work.  Where Round Robin took off from SSPL, Icepick found inspiration in the [Cryptographic Autonomy License](https://opensource.org/licenses/CAL-1.0) and all the controversy around it.

The basic premise was simple extrapolation.  GPL used copyright to defend "freedom" in just one element of computing: code.  The Cryptographic Autonomy License extended to another: data.  How to write a "freedom" license that addresses _all_ the elements of computing?

Icepick in current form pulls four rights---autonomy, transparency, accountability, and independence---as well as a few general duties---disclosure, permission, nondiscrimination, and so on---out of "freedom".  Then it matrix-multiplies them against all the elements of computing---software, data, hardware, connectivity, and jurisdiction.  The result is necessarily a license phrased at a higher level of abstraction, but one potentially less susceptible to "loopholes" born of lower-level implementation details.

Certainly Icepick isn't overconcerned with putting its demands in the language of copyright, a I'd level against the GPLs today, which haven't evolved in fundamental approach since the 1980s.

## Credit

I began working on [`credits.txt`](https://github.com/creditstxt/creditstxt.com) convention for listing credits for web apps and other software services in response to many discussions about fair credit for open software developers.  I'd already been hearing some requests for a license requiring credit through License Zero.

That led to the [Code Credit License](https://github.com/creditstxt/creditstxt.com), which requires users of software to give credit to projects and developers in whatever way is appropriate for the medium they work in: end credits for films, citations in academe, and `credits.txt` for software services.  Since the license is really just the Blue Oak Model with an additional requirement, we also [published that requirement](https://codecreditlicense.com/add-on/1.1.0) as an "add-on" people can add to other licenses.

## Cross-Licensing

Largely as a result of some reading on early intellectual property law and cartels, as well as some great conversations and reading recs from [Mako Hill](https://mako.cc/), I hit on the idea of using cross-licensing---long a favored legal tool of big companies---for upstart, open-leaning purposes, much as GPL had co-opted license conditions.  That's led to two forms, still in prereleases on their way to 1.0.0s.

The [Cross-License Collaborative](https://xlcollaborative.com/) agreement allows contributors to a decentralized project covered by copyright or patent rights to build a kind of quasi-cooperative, without the overhead of incorporation.  A few friends have summed this up as a "decentralized CLA": each contributor licenses their contributions to the project as a whole, but they license their fellow contributors, rather than a centralized company or foundation.  Each contributor then gets the power to license all the rights in the project, as a whole, subject to a voting process and requirements to share information and remuneration equally.

The [Cross-License Foundation](https://xlfoundation.com/agreement/1.0.0-pre.2) is essentially a limited species of Cross-License Collaborative, eschewing terms on payments to facilitate just the kinds of things open foundations typically handle: updating license terms over time, so projects aren't stuck on whatever legal form the first contributor picked way back when, even as the law changes and bugs become known.
