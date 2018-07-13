---
title: "First Read: The Fair Source License"
description: Text and my first thoughts on a new, non-open source form license
layout: post
tags:
- Open Source
- Licensing
- Drafting
---

[Sourcegraph] has released a new standard form license, [The Fair Source License]. The text was written by a professional hero of mine, [Heather Meeker], whose excellent books on open-source licensing I recommend to clients. The Fair Source License does not meet [The Open Source Definition], but it's billed as a substitute that's as easy as the [MIT License] to apply and gets developers paid.

[MIT License]: https://spdx.org/licenses/MIT

[The Open Source Definition]: https://opensource.org/osd

[Sourcegraph]: https://sourcegraph.com

[The Fair Source License]: https://fair.io

[Heather Meeker]: https://www.omm.com/professionals/heather-j-meeker/

First a few general thoughts, then the text of The Fair Source License from [fair.io], with my thoughts interline. This is a first read, and while I've done a little editing, this is as close to legal stream-of-consciousness as you'll get from me.

I plan to keep learning. If I succeed, my views on this _will_ change.

[fair.io]: https://fair.io

<!--jump-->

## Overall

Open source software creates opportunity. But open source also hurts people. Value contributed and value received in return are incredibly out of sync, and have been. We love the people getting hurt too much, and there are too many of them, to get used to the way things are.

Business, legal, the community of developers, and the way software works all contribute. I don't think the key is shaped like any one of those alone. It's going to take a lot experimenting---and a bit of luck---to line up every pin in the lock that keeps us where we are now.

The Fair Source License is a new tool in our lock picking toolkit. It's not magic, I don't think it's universal, and it's almost certainly not sufficient by itself. But it's wicked creative, broadly informed, and well implemented. Even if it's not the master key, we are going to learn something about the lock by trying and talking about it.

More important---and still, sadly, rare---it's legal in the open. It shows lawyers are still in the game to address community problems you won't spot on accounting statements. Everyone who sees themself on that team---yours truly included---just got challenged to publish. One reason that doesn't happen so much is that doing legal in the open is even more terrifying than starting to code in the open. For the record, peanut gallery is not my department. [Heather Meeker] fan club is my department, even more so after I finished reading.

Pull a legal form apart, section by section, and you're going to find things to worry about. You'll also get lost in the details, and miss the context, which is where the people, money, and risk live. This is what I'm about to do. So I want to point out up front that context for The Fair Source License includes at least the constraints of:

1. three distinct areas of intellectual property law, all of which are still catching up with software
2. the practicalities of modern software development tools, source code repositories, package managers, and workflow conventions
3. decades of license-related politics
4. multiple generations of developers of different sensibilities, politics, identities, and habits
5. vast diversity of interested parties, from hobbyists and proto-startups to multinational conglomerates, foundations, educational institutions, and governments

Nothing interesting in this line of work leaves the shop without tool marks. If you take my comments as criticism, you miss my point. The point is how complex the open source problem is, and how the Fair Source License was made and shaped to address it.

## Section by Section

> **Fair Source License, version 0.9**

Versioning from the get-go is a really, really good idea, and a high initial version number is a really good sign. Licenses terms, even "simple" license terms like the MIT License and the original BSD license, have to change. You can either embrace a way to track that change, or end up with a loose "family" of texts with unaccountable variation. That's exactly what "MIT license" and "BSD license" have become, despite the excellent work of [SPDX] to codify canonical license templates and variations.

[SPDX]: https://spdx.org

> Copyright © \[year\] \[copyright owner\]

The fill-in-the-blanks make The Fair Source License a license template, like The MIT License or BSD-style licenses. Other standard license terms get distributed as fixed files that licensors copy without change. [Apache 2.0] and [GPL 3.0] are current examples. I prefer fixed terms, but understand The Fair Source License was meant to feel lightweight. I'd have followed the pattern of MIT/BSD for it, too.

[Apache 2.0]: https://www.apache.org/licenses/LICENSE-2.0.txt

[GPL 3.0]: https://www.gnu.org/licenses/gpl.txt

I like the clarity of "copyright owner". This begs the question of [work made for hire]. The software community in general has fallen down on awareness of when a programmer's employer or client, rather than the programmer themself, needs to give a software license.

[work made for hire]: http://worksmadeforhire.com/

I think it's fair to say that most open-source projects under MIT- and BSD-style licenses get the copyright notice wrong. Either they omit it altogether, making the attribution terms nonsensical, misattribute ownership, fail to update over time, or some combination.

> Licensor: \[legal name of licensor\]

I can imagine getting client questions about whether and when "copyright owner" and "licensor" need to be different.

> Software: \[name software and version if applicable\]

I really like the idea of a template that calls out the need to actually identify the software it applies to, rather than just relying on ending up next to it on users' hard drives. The original "solution" to this was license header comments, but I've had terrible luck getting anyone my age or younger to add such things to their personal work. Marking a single, specific place to identify the software package, as a whole, that the license applies to echoes [Apache 2.0]'s NOTICE file, which reinforces the idea that the terms of the license itself are fixed, and any specific application goes elsewhere. I've done some work to help npm's [package.json metadata] to play a similar role in that ecosystem.

[package.json metadata]: https://docs.npmjs.com/files/package.json

[Here's an example NOTICE file](https://github.com/apache/kafka/blob/trunk/NOTICE), for Apache's Kafka project. Unfortunately, I rarely see non-Apache Foundation projects make use of NOTICE. I suspect this is partly because it activates another copy-this-file requirement on licensees under the terms of Apache 2.0. In maintainers' defense, larger Apache 2.0 projects without NOTICE files do tend to use Apache 2.0's blessed license header comment template. I'm grateful that The Apache Foundation standardized a header and mentioned it in their license file. The Java norm of long documentation comments filled with other metadata helped, too.

> Use Limitation: \[number\] users

The convention of referring to license terms like "Fair Source _n_", where _n_ is the number that goes in this blank, is very clever. It also helps reinforce that the number should be just a number, and not any kind of more complicated formula or schedule. If licensors are going to have to fill in blanks to use a license anyway, there's very little administrative cost to adding this kind of customizability.

I'd like to see the shorthand convention expanded a tad, to clarity also what version of the Fair Source Terms is on offer. Perhaps "Fair Source 0.9/25", "Fair Source 0.9 for 25", or similar to mean "The Fair Source License, version 0.9, Use Limitation: 25 users".

> **License Grant.** Licensor hereby grants to each recipient of the Software ("you") a non-exclusive, non-transferable, royalty-free and fully-paid-up license, under all of the Licensor's copyright and patent rights, to use, copy, distribute, prepare derivative works of, publicly perform and display the Software, subject to the Use Limitation and the conditions set forth below.

Very broadly speaking, there are two "styles" of license grant language in open-source licenses.

One style is typical of the original "academic" licenses, notably the MIT and BSD license families. Those licenses use general words without specific legal meaning to give broad permission for software. Licenses of this style don't usually mention the specific kinds of intellectual property---copyright, patent, trademark---being licensed.

I like to call the other style "contract-style" or "enterprisey". [Apache 2.0] and [Eclipse 1.0] are examples. Those licenses use more technical language typical of professionally drafted---and often proprietary---software licenses. They address copyright, patent, and trademark rights specifically and separately.

[Eclipse 1.0]: https://www.eclipse.org/legal/epl-v10.html

[GPL 2.0]: https://www.gnu.org/licenses/old-licenses/gpl-2.0.txt

"Plain talk" copyleft licenses, notably [GPL 2.0] and, to a lesser extent, [GPL 3.0], fall somewhere in between. These licenses were drafted with very astute lawyer input, but with non-lawyer readability as a guiding principle.

The Fair Source License falls somewhere between the academic and contract styles, though grouping it with the GPLs doesn't feel right. On one hand, it addresses both copyright and patent rights in one fell swoop, like an academic license. On the other, it uses terms familiar to licensing lawyers, like "royalty-free and fully-paid-up", and addresses trademark rights by name in a specific provision.

The Fair Source License also uses some terminology, like "prepare derivative works", directly from statutes. With one exception, all of the verbs in The Fair Source License's license grant language allude to the United States Copyright Act's list of things that only copyright owners can give permission to do in United States Code title 17, section 106. Those verbs evoke copyright.

The exception is "use". Licensing folks know "use" from the MIT License, where it is part of another list of verbs, only some of which sound in specific IP statutes. In that context, many lawyers would argue that "use" implies both copyright and patent licenses broad enough to cover running the licensed software, at least as published, without additional changes, as those licensing expected.

But "use" also appears in United States patent law's list of things you can get sued for under a patent, in United States Code title 35, section 271(a). The verbs there are "make", "use", "sell", "offer to sell", and "import into the United States".

What kinds of licenses are implied by what language in which contexts is still a matter of speculation. We don't have a good track record of reported court cases to go on. Even really good general theories may fall down in a specific case. I suspect courts would willingly look outside the license terms, to the surrounding context, when faced with the short bursts of very general wording that characterize the academic style.

With that said, I wonder whether using all the Copyright Act verbs, but only some of the Patent Act verbs, might limit the scope of the patent license under The Fair Source License. At a minimum, I think it is probably about as generous as The MIT License, however generous that may be. But I don't think I'd advise a client to accept this kind of license language for a paid software product from a licensor with patents.

In potential counterbalance, the phrase "under all of the Licensor's copyright and patent rights" seems incredibly open-ended, especially on the patent front. Of course, in the most common case, the Licensor won't have any patents. Most small companies, and certainly most independent programmers, don't have any patents, any money to get them, or any desire to get them if they did. But I'd hesitate to recommend that any client with a patent portfolio---or plans to get acquired by someone who does---adopt The Fair Source License. Even if all the patents were held, say, by a special-purpose IP subsidiary, I think "Licensor" might be read to sweep them all in anyway.

> **Use Limitation.** The license granted above allows use by up to the number of users per entity set forth above (the "Use Limitation"). For determining the number of users, "you" includes all affiliates, meaning legal entities controlling, controlled by, or under common control with you. If you exceed the Use Limitation, your use is subject to payment of Licensor's then-current list price for licenses.

And here's the real heart of The Fair Source License. This kind of limitation is intriguing in its simplicity. In addressing corporate structure, its implementation tastefully and succinctly brings in a key bit of learning about licenses based on usage from the proprietary licensing space.

Economically, The Fair Source License is a very different proposition than a "seat license", a very common license concept in proprietary software. Up to a certain number of "users", which are analogous to "seats", The Fair Source License is a free-of-charge license to a full product, hopefully with source. But The Fair Source License faces the same drafting challenge of making clear what counts as a "user" or "seat", whatever it happens to be called.

If Bob uses Fair Source software in week one, and Anna uses it in week two, is that two "users" or one at a time? Does one "user" cover Charlie installing both on his laptop, and on his desktop computer? This matters as much in proprietary seat licenses, where seats are often priced and paid in "packs" of, say, 20 at a time. The number of seats in use may also affect volume discounts and other terms. Whether the price is free from the get-go or not, when the count of something determines price, how you count matters.

There are edge cases. If you want to avoid getting sued for using Fair Source software, read "user" broadly, and start paying when any sane reading puts you above the Use Limitation. Or pay from the start and don't think about it. Probably cheaper than chatting me up about it.

If the software is any good, yes, some folks will use the software past the Use Limitation without paying. Nobody should publish software under The Fair Source License without first accepting both this fact and the reality that it simply won't be cost effective to track down and cease-and-desist any but the most blatant, visible, and solvent offenders.

Back on the licensee side, there is also some bad news. For certain kinds of software, "user" may be too broad in any reading to make Fair Source a worthy technical investment, even in speculative prototyping. Consider a hypothetical JavaScript package that displays photos with different artistic effects in web browsers. The author publishes the package to [npm] Fair Source 25. Can that package be bundled into a web application and served to website users without accumulating "users" under the Use Limitation? Are the developers building the website also "users" for that kind of software? Each of the website's users will use the code in the package to display photos when visiting the website. If they count as "users", any use of the package in client-side code for a public website---or even an internal corporate site used by enough employees---will trigger a payment obligation.

[fair.io] tries to shed some light on what Sourcegraph mean by "user"---see "How will I know if my company exceeds the Use Limitation?"---but that guidance doesn't cover users who download and run Fair Source software as part of a web application. In any event, that interpretation wouldn't bind others who apply The Fair Source License to their work. Like [Mongo's clarification on the Affero GPL](http://blog.mongodb.org/post/103832439/the-agpl) and [Linus' public statements on derivative works of the kernel](http://yarchive.net/comp/linux/gpl_modules.html), it's licensor-specific. Fair Source licensors won't assign their copyrights to a single holding entity, like the Free Software Foundation, that can then [publish commentary](https://www.gnu.org/licenses/gpl-faq.en.html) affecting license conditions throughout a whole ecosystem of projects.

As a result there is no safe "free tier" for Fair Source software built into other software. [fair.io]'s "Can I use Fair Source code in the code base for my commercial, closed-source product?" section mentions that Sourcegraph "strongly discourage incorporating Fair Source licensed software into proprietary projects", and recommend having end users license the Fair Source directly. That might work for tools and apps, painful as it may be. It just doesn't work for libraries and plugins.

[npm]: https://www.npmjs.com

The same concerns apply to a package or library incorporated in back-end server software. Does Fair Source's "user" cover remote users in an [Affero GPL] "remote network interaction" sense? I don't know. If there were any chance of enforcement, I'd say don't bother asking.

[Affero GPL]: https://www.gnu.org/licenses/agpl-3.0.txt

Off-the-cuff, I suspect these concerns specialize The Fair Source License to self-contained programs and utilities. That could include developer-focused utilities as well as more consumer-friendly graphical applications and apps. The Fair Source License doesn't seem a good fit for libraries, plugins, applications with third-party plugin interfaces, or any other kind of software intended primarily for use in or with software by others. All of those might instantly push the "users" count over the limit or require painful parallel licensing by customers.

Finally, I'd worry a bit about the very open-ended fees reference. The Fair Source License doesn't pin down where that pricing information can be found; you'll have to work backward from the Licensor identification to a website or direct contact. Even if you get that far, it may not be clear what "then-current list price" means. If it's as simple as a flat yearly license fee, does that price lock in once you pay up the first time? How do you pay? If the Licensor offers licenses only with add-on support or other services, do you have to pick one of those packages? If they offer a discount to nonprofit or academic institutions, does that apply to you if you fit the bill? What happens if the company goes bust, or changes its name, and nobody can find pricing information based on the license text any more? Do you have to scrap any derivative you've worked up over numerous development cycles to clear copyright check?

I suspect that potential licensees who care enough to pay for a license when they hit the limit would also care enough to paper a more robust proprietary license. [fair.io]'s commentary anticipates that reality, complete with a little bit of sales language. Would-be-licensee bargaining position at that point is not great, assuming the licensor is even willing to prepare or review new terms. The deal lawyer's advice is probably to hold your cards very tight to your chest.

> **Conditions.** Redistribution in source code or other forms must include a copy of this license document to be provided in a reasonable manner. Any redistribution of the Software is only allowed subject to this license.

An attribution requirement, then a downstream licensing restriction.

I like "provided in a reasonable manner". That's intentionally vague, but in line with current laxity about attribution in the open source world. Just ask your local web dev if their build system bundles license files into minified JavaScript bundles. The answer is no.

> **Trademarks.** This license does not grant you any right in the trademarks, service marks, brand names or logos of Licensor.

This sounds again in the "enterprisey" style of addressing each kind of relevant intellectual property---copyright, patent, and trademark---explicitly and separately. This is a nice, terse alternative to the three-clause BSD license's "Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission." Progress!

> **DISCLAIMER.** THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OR CONDITION, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. LICENSORS HEREBY DISCLAIM ALL LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE.

There's still no good alternative to ALL CAPS for "conspicuous" disclaimers of the implied warranties of the Uniform Commercial Code, at least when you know your license terms are going to end up in `plain text, where bold and italics aren't possible`.

That gripe aside, I love how short this is. If there's one place I see language piled on and on, more because nobody has or will take the time to check if it's necessary than out of justified need, it's warranty disclaimers.

In this particular license, though, I'm a bit troubled by the disclaimer of noninfringement. That means the self-styled licensor isn't on the hook to make sure it actually has the legal right to license the software; if you get sued by someone else who says it's their work, you're on your own. Larry Rosen, author of a few open-source licenses and an early legal hand at OSI, [has written about this](http://www.rosenlaw.com/html/GL14.pdf), and added copyright noninfringement warranties to his [Academic Free License] and [Open Software License] on the theory that even open-source contributors publishing their work gratis should accept responsibility for not making copyright problems for others. It's safe to say that hasn't caught on in the open source licensing world.

[Academic Free License]: https://spdx.org/licenses/AFL-3.0.html

[Open Software License]: https://spdx.org/licenses/OSL-3.0.html

It's no longer considered nuts to license even "enterprise" software without patent noninfringement warranties, at least when you're licensing on off-the-shelf terms and pricing without substantial sales support or negotiation. [GitHub's terms for Enterprise](https://enterprise.github.com/license) limit IP warranties to copyright and trade secret, for example. [Atlassian's terms](https://www.atlassian.com/customer-agreement/) similarly cover for "soft IP" problems until you hit a minimum in fees, at which point a patent noninfringement warranty kicks in.

But depending on the pricing once you bust the free "user" limit, I think I'd usually advise a client using Fair Source software to reach out to the licensor directly about a paid license with more protection. Worst case, a client dives right into using Fair Source code on the "free tier" below the Use Limitation, without considering long-term licensing, only to get stuck engineering around or reimplementing that functionality so their company can offer the warranty terms on their product that paying customers expect.

> **Termination.** If you violate the terms of this license, your rights will terminate automatically and will not be reinstated without the prior written consent of Licensor. Any such termination will not affect the right of others who may have received copies of the Software from you.

This language hooks the Use Limitation up to the license grant. It also reinforces the standard open-source "public license" concept that all licenses come direct from the owner, no sublicenses.

---

Congratulations once more to [Sourcegraph], [Heather Meeker], and anyone who made it this far! I'd love to hear your thoughts [via e-mail](mailto:kyle@kemitchell.com), or, God help us, [on Twitter](https://twitter.com/kemitchell).
