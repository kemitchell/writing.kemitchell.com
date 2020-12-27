---
title: Notices
description: addressing legal uncertainty in open source licensing
tags:
- Open Source
- Licensing
---

In law, as in life, some things "work" without us really knowing how.  We do our best, invoke higher powers, and soldier on.  So it goes with notices and disclaimers in public software licenses, from old-school classics like [MIT](https://spdx.org/licenses/MIT.html) and [GPL](https://www.gnu.org/licenses/gpl-3.0.html) to state-of-the-art forms like [Blue Oak](https://blueoakcouncil.org/license/1.0.0) and [Parity](https://paritylicense.com).

When you really look at the details, it's hard to say anything true about "open source licenses" as a whole.  But if you were going to pick one at random and guess two terms it would have, you'd choose "notice requirement" and "disclaimer".  Nearly all open source licenses include those kinds of terms.  Even though most everyone agrees that notice requirements are a big pain in the ass, and lawyers can't seem to agree how disclaimers work, when they expect them to work at all.

Here's the notice requirement from The MIT License:

> The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

The gist of this term is to require people who share the software with others to share the copyright notice and license terms for it, too.

And here's MIT's disclaimer, without the ALL CAPS:

> The Software is provided "as is", without warranty of any kind, express or implied, including but not limited to the warranties of merchantability, fitness for a particular purpose and noninfringement. In no event shall the authors or copyright holders be liable for any claim, damages or other liability, whether in an action of contract, tort or otherwise, arising from, out of or in connection with the Software or the use or other dealings in the Software.

The gist of this term is prevent users from suing the developers for technical or other problems with the software they gave away for free.

For more notice requirements, see clauses 1 and 2 of the [two-clause BSD License](https://spdx.org/licenses/BSD-2-Clause.html), section 4 and 5(b) of [GPL 3.0](https://www.gnu.org/licenses/gpl-3.0.html), or section 4 of [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0).  All of those forms also boast disclaimers in line with MIT's.  The [Fair Public License](https://spdx.org/licenses/Fair.html), an earnest but flawed attempt to distill permissive open source licensing down to its essence, is literally just a copyright line, a notice requirement, and a disclaimer, or an attempt at one.

So much for the rule.  What about the exceptions?

A number of more recent, "radical" permissive licenses, often from developers fed up with intellectual property licensing as a concept, omit any requirement to include notices of license terms with copies of the software.  The [Do What the Fuck You Want to Public License](http://www.wtfpl.net/about/) says nothing about notices.  The [Zero-Clause BSD License](https://spdx.org/licenses/0BSD.html), also known as the "Toybox License" and "Free Public License", copies BSD and then deletes the two clauses requiring notices.  Forms that try to put work in the "public domain", such as Creative Commons' CC0, don't require notices, either.

Hackers rejoice.  Have brave license hackers finally vanquished the last legally-imposed license chore?

Enter the Blue Oak Model License.  As I've written elsewhere, the Blue Oak license came about by happy accident.  While pulling together a [list of permissive open source licenses](https://blueoakcouncil.org/list), the council ended up with a list of criteria for a good permissive license.  Some licenses ticked most of those boxes, but no license ticked them all.  So a new license was born to fill the gap, advancing the state of the art in maximally permissive, legally rigorous public software licensing.

That state of the art still includes a notice requirement:

> You must ensure that everyone who gets a copy of any part of this software from you, with or without changes, also gets the text of this license or a link to https://blueoakcouncil.org/license/1.0.0.

Granted, Blue Oak asks a lot less here than other licenses, like MIT, BSD, or GPL.  There's no copyright line to fill out in the Blue Oak license, and no requirement to reproduce copyright notices in source code or special files.  You can meet the requirement to give notice of the license terms by providing the license's permalink, rather than a full copy.

What's more, if you fail to give notice of Blue Oak terms for some software, you might be able to keep your license, under the form's special [forgiveness provision](https://blueoakcouncil.org/license/1.0.0#excuse).  And failing to give notice is basically the only rule you can break.  But it's still legally possible to lose your rights to Blue Oak software by failing to give notice.  The chore remains.  What gives?

The trouble, oddly enough, is the disclaimer.  I like Blue Oak's disclaimer, so I'll quote it here:

> ***As far as the law allows, this software comes as is, without any warranty or condition, and no contributor will be liable to anyone for any damages related to this software or this license, under any kind of legal claim.***

The gist is the same as under any other license.  No suing the developers because of quality or other issues with the work they gave out for free.  A pretty important term for developers!  But how does it work?

In "traditional" software licensing, where money changes hands and the two sides negotiate their terms, theory of operation harbors no mysteries.  The license agreement between buyer and seller counts as a "contract"---a legally enforceable agreement.  Laws about contracts for sales of goods and services, most notably the [Uniform Commercial Code](https://en.wikipedia.org/wiki/Uniform_Commercial_Code) in most of the United States, set "defaults" for the kinds of warranties sellers make about what they sell, and what kinds of losses buyers can sue for, as money "damages".  Those laws also set out rules for reversing those defaults---"disclaiming" warranties and "excluding" damages---which explains why we see the magic phrase "as is" in nearly every disclaimer, and often long lists of kinds of warranties and damages, as well.

Other laws, like the unpopular [Uniform Computer Information Transactions Act](https://en.wikipedia.org/wiki/Uniform_Computer_Information_Transactions_Act), or the more general laws of countries, like Germany's, it's not legally possible to disclaim some or all warranties.  Which is why the question isn't just "How do these disclaimers work?", but "How do these disclaimers work, when they work at all?".

Even in states like California, Texas, or New York, which have enacted the Uniform Commercial Code, but not the Uniform Computer Information Transactions Act, it's not entirely clear that the usual rules about disclaimers apply to open source license terms.  Those rules apply to "contracts".  Are open source licenses contracts?  For two decades or more, some open source licensing theorists, especially Eben Moglen and the Free Software Foundation, insisted that the GPL and similar terms were licenses _only_, and not contracts at all.  That's looking more and more incorrect, as we see lawsuits where copyright owners sue not just for copyright infringement---lack of a license---but also breach of contract, even when they chose GPL terms for their work.

Blue Oak avoids all this needless legal and political complexity.  If the question is "license or contract?" Blue Oak says "yes":

> In order to receive this license, you must agree to its rules. The rules of this license are both obligations under that agreement and conditions to your license. You must not do anything with this software that triggers a rule that you cannot or will not follow.

To get permission for the code, you have to agree to the terms, not just sit back and passively accept a license.  That's the "orthodox" model of software licensing, from the legal point of view.  The copyright holder and the user agree to a contract.  Under that contract, the user gets a license.

But in many other ways, this isn't "orthodox" at all.  The developer and their users aren't going to print out and sign the Blue Oak Model License.  Copies of the developer's software are going to end up all over the Internet, and people are going to share and use them without the developer even knowing about it.  No money changes hands, and the software is take it or leave it, legal terms included.

Basic contract law isn't completely clueless about these kinds of deals.  There are rules about "unilateral contracts", without any need to communicate acceptance back to the one offering the deal.  There are rules about "implied contracts" that courts can enforce from context.  And there are rules about treating two sides as having made an agreement---a "quasi-contract"---even if they didn't, because one side, like the user of some software, relied on the other side's statements that doing so was alright.

Under American law, which descends from English law, many rules come from the tradition called "equity", as distinct from the tradition called "law".  In a nutshell, the law courts in England tended to apply their rules very strictly, as written.  That often led to decisions that were technically correct, but egregiously unfair or absurd.  Since all law came from the king, those on the receiving end would petition the king directly to make an exception.  These petitions came in so often that the king eventually delegated them all to an officer, the chancellor, or "king's conscience", usually a cleric.  The Lords Chancellor eventually got so busy that they set up their own, parallel court system, the courts of chancery, also called the courts of "equity".

Legal rules tend to be specific, even formulaic.  Rules of equity read more like general guidelines or "maxims".  When we start talking about contracts---a legal concept---without some of the formulaic features of typical contracts---like formal signature---we step into the fuzzier, impressionistic, more intuitive territory of equity.

It doesn't take years of mind-warping legal education to see that disclaimers, like the disclaimers in free public licenses for software, probably shouldn't work on people who've never seen them or been told about them.  Bob finds some robotics software online.  It doesn't come with notice of any license terms.  The software is horribly flawed.  Bob's robot charges into the wall of his garage, overloads its servos, catches fire, and burns his house down.  When Bob's lawyer finds the developer and sues them, they point to a disclaimer in their open source license.  A disclaimer, and a license, that Bob never saw before.

If the rule were that you don't get any protection from terrible flaws unless the seller says you do, Bob would be out of luck, whether he'd seen a disclaimer or not.  But "buyer beware" isn't the rule, or at least not the only rule, under the law.  It may or may not be the default.

How to avoid this lawsuit?  Try to make sure that users will get copies of the disclaimer.  How can we do that?  Make it a requirement of the license.  There's no guarantee that it will work, even in countries that usually allow such a broad disclaimer.  But conversely, we don't really expect courts to hold users to terms they've never seen, especially if we didn't take obvious steps to help make sure they would see.  Notice seems necessary, if not sufficient.

The same logic applied to copyright notices back in the day.  It's no longer necessary, under United States or many other laws, to put a copyright notice on every copy of your work.  It used to be, but governments got rid of that rule, especially when joining up to the [Berne Convention](https://en.wikipedia.org/wiki/Berne_Convention).  All the same, early forms like MIT and BSD included fill-in-the-blank copyright lines, and required giving notice of both copyright line and license terms.  And some developers really liked these requirements, since they also worked a bit like requirements to give them credit for their work.  At least for software that's distributed to users, rather than run for them as services.

Whether for disclaimers or copyright notices, a question remains: What happens if someone gets a copy of your software from someone who _didn't_ provide notice as required?  Dana Dev releases some half-baked electric vehicle software under the Blue Oak Model License.  Sam Sharer downloads a copy from GitHub and uploads it to his electrical vehicle hobbyist forum, but without Dana's `LICENSE` file.  Harry Hapless downloads the code and installs it in his golf cart, which careens into a brick wall as soon as he turns the key, snapping Harry's leg.

Perhaps the court would let Dana off.  She applied a disclaimer to her work and took steps to ensure that Harry would see it.  Perhaps the court would hold Dana responsible, but allow her to go after Sam to pay Harry's damages, since it was his fault Harry didn't know he was on his own.  Perhaps the court would hold Sam responsible, like a retailer who sells a defective product.  Strictly speaking, there's still a chance the court might simply hold Dana responsible, full stop.  But that starts to offend some of our intuitive sense of justice, and likely the "equitable" maxims that courts still look to.  Moreso than if Dan had missed the obvious chance to help make users aware of her disclaimer, by not requiring notice at all.

It's fair to ask whether any of this is really worth it.  Anecdotally, warranty claims against public domain code don't seem to happen very often.  Some countries don't even allow broad disclaimers in the first place.  If it's good enough for Germany, is it good enough for the world?