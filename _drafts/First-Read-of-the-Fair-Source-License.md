---
title: "First Read: The Fair Source License"
description: Text and my first thoughts on a new, non-open source form license
layout: post
tags:
- Open Source
- Licensing
- Drafting
---

[Sourcegraph] has release a new standard form license, [The Fair Source License]. The text was written by a professional hero of mine, [Heather Meeker], whose excellent books on open-source licensing I often recommend to clients. The Fair Source License is not an open-source license, but it's billed as an alternative to help developers get paid that's just as easy to apply to new work.

[Sourcegraph]: https://sourcegraph.com

[The Fair Source License]: https://fair.io

[Heather Meeker]: https://www.omm.com/professionals/heather-j-meeker/

Here's the text of version 0.9 from [fair.io], with my thoughts sprinkled interline, stream-of-consciousness style.

[fair.io]: https://fair.io

<!--jump-->

> **Fair Source License, version 0.9**

Versioning from the get-go is a really, really good idea. Licenses terms, even "simple" license terms like the MIT License and the original BSD license, have to change. You can either embrace a way to at least track that change, or end up with a loose "family" of texts that vary in unpredictable ways. That's exactly what "MIT license" and "BSD license" have become, despite the excellent work of [SPDX] to codify canonical license templates.

[SPDX]: https://spdx.org

> Copyright © \[year\] \[copyright owner\]

The fill-in-the-blanks make The Fair Source License a license template, like The MIT License or BSD-style licenses. Other standard license terms, which I call "fixed terms", don't have any blanks to fill out. [Apache 2.0] and [GPL 3] are current examples. I prefer fixed terms, but understand The Fair Source License was meant to feel lightweight. I'd have followed the practice of MIT/BSD for it, too.

[Apache 2.0]: https://www.apache.org/licenses/LICENSE-2.0.txt

[GPL 3]: https://www.gnu.org/licenses/gpl.txt

I like the clarity of "copyright owner". This begs the question of [work made for hire]. The software community in general has really fallen down in awareness of when a programmer's employer or client, rather than the programmer themself, needs to give a software license.

[work made for hire]: http://worksmadeforhire.com/

I think it's fair to say that most open-source projects under MIT- and BSD-style licenses get the copyright notice wrong. Either they omit it altogether, making the attribution terms nonsensical, misattribute ownership, fail to update for additional contributors, or some combination.

> Licensor: \[legal name of licensor\]

I can imagine getting client questions about whether and when "copyright owner" and "licensor" need to be different.

> Software: \[name software and version if applicable\]

I really like the idea of a template that calls out the need to actually identify the software it applies to, rather than just relying on distribution together with a LICENSE file. The original "solution" to this was license header comments, but I've had terrible luck getting anyone my age or younger add such a thing to their personal work. Marking a single, specific place to identify the software package, as a whole, that the license applies to echoes in [Apache 2.0]'s NOTICE file, which reinforces the idea that the terms of the license itself are fixed, and any "customization" goes elsewhere.

[Here's an example NOTICE file](https://github.com/apache/kafka/blob/trunk/NOTICE), for Apache's Kafka project. Unfortunately, I rarely see non-Apache Foundation projects make use of NOTICE. I suspect this partly because it puts another bookkeeping requirement on licensees. In their defense, at least larger Apache 2.0 projects without NOTICE files tend to be pretty good about using Apache 2.0's standard license header comment. I think the fact that The Apache Foundation standardized a header and mentions it in their license text goes a long way to inspiring that good behavior.

> Use Limitation: \[number\] users

The convention of referring to license terms as "Fair Source _n_", where _n_ is the number that goes in this blank, is plenty clever. It also helps reinforce that the number should be just a number, and not any kind of more complicated formula or schedule.

I'd like to see that convention expanded just a tad, to make sure it's also clear what version of the Fair Source Terms is being used. Perhaps "Fair Source 0.9/25", "Fair Source 0.9 for 25", or similar to mean "The Fair Source License, version 0.9, Use Limitation 25 users".

> **License Grant.** Licensor hereby grants to each recipient of the Software ("you") a non-exclusive, non-transferable, royalty-free and fully-paid-up license, under all of the Licensor's copyright and patent rights, to use, copy, distribute, prepare derivative works of, publicly perform and display the Software, subject to the Use Limitation and the conditions set forth below.

Very broadly speaking, there are two "styles" of license grant language in open-source licenses.

One style is typical of the original "academic" licenses, like the MIT and BSD families. Those licenses use broad-reading language without specific legal meaning in intellectual property law to give broad permission without mentioning the kind of intellectual property---copyright, patent, trademark---being licensed.

The other style is what I like to call the "contract-style" or "enterprisey" licenses, like [Apache 2.0] and [Eclipse 1.0]. Licenses in that style use more technical language typical of professionally drafted (often proprietary) software licenses. They address copyright, patent, and trademark rights in specific, separate provisions.

[Eclipse 1.0]: https://www.eclipse.org/legal/epl-v10.html

[GPL 2]: https://www.gnu.org/licenses/old-licenses/lgpl-2.0.txt

"Plain talk" copyleft licenses, notably [GPL 2] and [GPL 3], fall somewhere in between. These licenses were drafted with very astute lawyer input, but with non-lawyer readability as a guiding principle. Whether they succeeded is a lively subject of debate among open-source licensing wonks.

The Fair Source License is an interesting hybrid of these styles. On the one hand, it addresses both copyright and patent rights in one fell swoop, like an academic license. On the other hand, it uses terms with specific meaning among licensing lawyers, like "royalty-free and fully-paid-up".

The Fair Source License also uses some terminology, like "prepare derivative works", directly from the United States Copyright Act's list of things that only copyright owners can give permission to do, in United States Code title 17, section 106. All of the verbs in The Fair Source License's license grant language allude to that statute, with one exception: "use".

Licensing folks know "use" from the MIT License. In that context, many lawyers would argue that "use" implies both copyright and patent licenses broad enough to cover running the licensed software, at least as published, without additional changes, as those licensing intended. But "use" also appears in United States patent law's list of things you can get sued for under a patent, in United States Code title 35, section 271(a). The verbs there are "make", "use", "sell", "offer to sell", and "import into the United States".

What kinds of licenses are implied where by what language is still mostly legal speculation. Even really good general theories may fall down in a specific case, since at least American courts will probably be very willing to look outside the terms of a license, to the surrounding context, with terms as short and fuzzy as those of the MIT License.

With that said, I wonder whether using all the Copyright Act verbs, but only some of the Patent Act verbs, might limit the scope of the patent license under The Fair Source License. At a minimum, I think it is probably about as generous as The MIT License. But I don't think I'd advise a client accept this kind of license language for a paid software product.

In counterbalance, the phrase "under all of the Licensor's copyright and patent rights" seems incredibly open-ended. Of course, in the most common, simple case, the Licensor probably has no patents. Most small companies, and certainly most independent programmers, don't have any patents, any money to get them, or any desire to get them if they could. As a result, I'd hesitate to recommend that any larger client with patents adopt The Fair Source License. Even if all the client's patents were held, say, by a special-purpose IP subsidiary, I think "Licensor" would likely be read to sweep in the patents, anyway.

> **Use Limitation.** The license granted above allows use by up to the number of users per entity set forth above (the "Use Limitation"). For determining the number of users, "you" includes all affiliates, meaning legal entities controlling, controlled by, or under common control with you. If you exceed the Use Limitation, your use is subject to payment of Licensor's then-current list price for licenses.

And here's the real heart of The Fair Source License. This kind of limitation is intriguing in its simplicity. In addressing corporate structure, its implementation very tastefully, and succinctly, brings in a key bit of learning about licenses based on usage.

The Fair Source License is different than a "seat license", a very common license concept in proprietary software, in that up to a certain number of "users", which are analogous to "seats", the license is free-of-charge. But The Fair Source License faces the same challenge of making clear what counts as a "user" or "seat". In a deal for customer service chat software, can Bob use the same "seat" that Anna used last week? Does one "seat" cover Charlie installing both on his laptop, and on his desktop computer? This matters as much in proprietary seat licenses, where seats are often priced in "packs" of, say, 10 at a time, rather than individually. The number of seats in use may also affect volume discount and other terms. Whether the price is free from the get-go or not, the count matters.

But not always. If you want to avoid getting sued for using Fair Source software, read "user" broadly, and start paying when any reading of "user" would put you above the Use Limitation. Or pay from the start. And, yes, a certain number of users will simply use the software past the Use Limitation without paying. Nobody should publish software under The Fair Source License without first accepting that a certain number of users will always skip on their license fees, and it simply won't be cost effective to track down and C&D any but the most blatant or visible offenders.

But for certain kinds of software, "user" may be just too broad to allow any kind of serious, even exploratory use. To give a concrete example, consider a hypothetical JavaScript package that translates times of day between 12-hour, military, and other time formats. The author publishes the package to [npm] Fair Source 25. Can that package be bundled into a web application and served to website users without accumulating "users" of the package according to Fair Source? Each of the website's users will use the code in the package to display times and dates when visiting the website. That means, as a practical matter, that any use of the package on a public websites---or arguably even a broadly used internal corporate website---will trigger a payment obligation.

[npm]: https://www.npmjs.com

The same concerns apply to a package or library incorporated in back-end server software. Does Fair Source's "user" cover remote users in an [Affero GPL] "remote network interaction" sense?

[Affero GPL]: https://www.gnu.org/licenses/agpl-3.0.txt

Off-the-cuff, I suspect these concerns specialize The Fair Source License to self-contained programs and utilities. That could include developer-focused utilities as well as more consumer-friendly graphical applications and apps. But The Fair Source License doesn't seem a good fit for libraries, plugins, applications with third-party plugin interfaces, or any other kind of software intended primarily for use in or with software by others.

Finally, I'd worry a bit about the very open-ended fees reference. The Fair Source License doesn't go to pains to make it clear where that pricing information can be found; you'd have to work backward from the Licensor identification to a website or direct contact. Even if you get that far, it may not be clear what "then-current list price" means. If the Licensor offers licenses only with add-on support or other services, do you have to pick one of those packages? If they offer a discount to nonprofit or academic institutions, does that apply to you if you fit the bill? What happens if the company goes bust, or changes its name, and nobody can find pricing information based on the license text any more?

> **Conditions.** Redistribution in source code or other forms must include a copy of this license document to be provided in a reasonable manner. Any redistribution of the Software is only allowed subject to this license.

An attribution requirement, then a downstream licensing restriction.

I like "provided in a reasonable manner". That's intentionally vague, but in line with current laxity about the nuts and bolts of attribution in the open source world.

> **Trademarks.** This license does not grant you any right in the trademarks, service marks, brand names or logos of Licensor.

This sounds again in the "enterprisey" style of addressing each kind of relevant intellectual property---copyright, patent, and trademark---explicitly and separately. This is a nice, terse alternative to the three-clause BSD license's "Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission."

> **DISCLAIMER.** THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OR CONDITION, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. LICENSORS HEREBY DISCLAIM ALL LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE.

There's still no good alternative to ALL CAPS for "conspicuous" disclaimers of the implied warranties of the Uniform Commercial Code, at least when you know your license terms are going to end up in plain text, where bold and italics aren't possible.

That gripe aside, I love how short this is. If there's one place I language piled on and on, not because it's necessary, but because the lawyer doesn't have or take the time to check whether it _is_ necessary, it's implied warranty disclaimers.

In this particular license, I'm a bit troubled by the disclaimer of noninfringement. That means the self-styled licensor isn't on the hook to make sure it actually has the legal right to license the software; if you get sued by someone else who says it's their work, you're on your won. Lawrence Rosen, author of a few open-source licenses and an early legal hand at OSI, [has written about this](http://www.rosenlaw.com/html/GL14.pdf), and added copyright noninfringement warranties to his [Academic Free License] and [Open Software License] on the theory that even open-source contributors publishing their work gratis should accept responsibility for not making copyright problems for users.

[Academic Free License]: https://spdx.org/licenses/AFL-3.0.html

[Open Software License]: https://spdx.org/licenses/OSL-3.0.html

It's no longer considered nuts to license even "enterprise" software without patent noninfringement warranties, at least when you're licensing on off-the-shelf terms without substantial sales support or negotiation. [GitHub's terms for Enterprise](https://enterprise.github.com/license) limit IP warranties to copyright and trade secret, for example. [Atlassian's terms](https://www.atlassian.com/customer-agreement/) similarly cover for "soft IP" problems until you hit a minimum in fees, at which a patent noninfringement warranty kicks in. But depending on the pricing once you bust the free "user" limit, I think I'd usually advise a client using Free Source licensed software to reach out to the licensor directly about a paid license with more protection. Worst case, a client dives right into using Free Source code on the "free tier" below the Use Limitation, without considering long-term licensing, only to get stuck engineering around or reimplementing that code so their company can offer the warranty terms on _their_ product that paying customers expect.

> **Termination.** If you violate the terms of this license, your rights will terminate automatically and will not be reinstated without the prior written consent of Licensor. Any such termination will not affect the right of others who may have received copies of the Software from you.

This language hooks the Use Limitation up to the license grant. It also reinforces the standard open-source "public license" concept that all licenses come direct from the owner, without any rights to "sublicense".
