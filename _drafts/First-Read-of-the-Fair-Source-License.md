---
title: "First Read: The Fair Source License"
description: Text and my first thoughts on a new, non-open source form license
layout: post
tags:
- Open Source
- Licensing
- Drafting
---

[Sourcegraph] has release a new standard form license, [The Fair Source License]. The text was written by a professional hero of mine, [Heather Meeker], whose excellent books on open-source licensing I often recommend to clients.

[Sourcegraph]: https://sourcegraph.com

[The Fair Source License]: https://fair.io

[Heather Meeker]: https://www.omm.com/professionals/heather-j-meeker/

Here's the text of version 0.9 from [fair.io], with my thoughts sprinkled interline.

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
>
> **Conditions.** Redistribution in source code or other forms must include a copy of this license document to be provided in a reasonable manner. Any redistribution of the Software is only allowed subject to this license.
>
> **Trademarks.** This license does not grant you any right in the trademarks, service marks, brand names or logos of Licensor.
>
> **DISCLAIMER.** THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OR CONDITION, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. LICENSORS HEREBY DISCLAIM ALL LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE.
>
> **Termination.** If you violate the terms of this license, your rights will terminate automatically and will not be reinstated without the prior written consent of Licensor. Any such termination will not affect the right of others who may have received copies of the Software from you.
