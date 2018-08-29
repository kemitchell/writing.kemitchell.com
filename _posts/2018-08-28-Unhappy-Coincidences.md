---
title: Unhappy Coincidences
description: marriages of licensing convenience, and changed circumstances
layout: post
tags:
- Open Source
- Licenses
- Drafting
---

Relatively few people write and review open source software licenses.  A great many more use them.  That is the story of open source terms as we know them:  Mostly, we don't.  Rather, we see how they work for others, and reuse the same terms for the same effect.  Even if that legal functionality was never in the spec.

Like all appropriations, open source license terms written for one reason and redeployed for another bear unintended consequences.  It's easy to cast adoption of a license for an unanticipated purpose, like requiring patches from developers, as evidence of support for the official goal, like software freedom for users.  Moreover, the institutional thrust of a license gets a kind of marketing-legitimacy bonus, like the Free Software Foundation's take on GPL.  Meanwhile, contributors' mental models of licenses and the actual effects of their terms wander apart, unless and until a dramatic reckoning.  Then the misunderstanding, which is what these happy accidents obscure, flips from happy to hostile, as with Linus and GPLv3.

It's worth identifying these latent conflicts, calling them out, and asking how parallel developments have affected them.  As it turns out, many predate widespread Internet adoption.  Some really just shouldn't matter anymore.

## Software Freedom Doesn't Mean Patches Back

The GNU General Public Licenses aren't about getting patches back from other developers.  They're about ensuring _users_, not maintainers, get source code for the software.  From the preamble of GPLv2:

> Our General Public Licenses are designed to make sure that you have the freedom to distribute copies of free software (and charge for this service if you wish), that you receive source code or can get it if you want it, that you can change the software or use pieces of it in new free programs; and that you know you can do these things.

When users get source code for changes to software under GPL, they also get a new GPL license for the changes.  The GPL license for the changes gives users all the permission they need to share the changes back to maintainers.  But permission is not a mandate.  If Alice releases GPL software that Bob changes, and Bob shares his changed version with Charlie, Bob has to give Charlie source and a GPL license for his changes.  Charlie _can_ share the source and license back to Alice.  But nothing requires him to do so.  When software traveled between users exclusively on expensive, specialized media, like tape drives, forwarding to the maintainer was never a given.

What about licenses that _do_ require sending patches back to maintainers?  [FSF considers them "non-free".](https://www.gnu.org/licenses/license-list.en.html#RPL)  According to the FSF, the ability to make changes and keep them to yourself is [part of software freedom](https://www.gnu.org/philosophy/free-sw.en.html):

> You should also have the freedom to make modifications and use them privately in your own work or play, without even mentioning that they exist. If you do publish your changes, you should not be required to notify anyone in particular, or in any particular way.

The Open Source Initiative [approved the license FSF rejected, RPL, which requires sending patches back as "open source"](https://opensource.org/licenses/RPL), twice.  I proposed a license to OSI last year with the same feature.  It was rejected.  Many commentators described approving RPL as a mistake.  And many OSI participants continue to maintain that "free software" as defined by the Free Software Foundation and "open source" as defined by the Open Source Initiative are, or ought to be, synonyms.

The distinction---or potential distinction---between sharing with users and sharing with maintainers makes less and less sense all the time.  When users enforce GPL licenses to get source code for GPL-based software that they receive as part of products or services, often embedded in devices like e-readers or cars, success is forcing the manufacturer to publish source code to a website.  Whether we want to give source code to end users or maintainers, the method is the same:  Put the source somewhere _anyone_ can find it, online.  Or send it to the one enforcing the license, under the expectation that they will post it pretty much immediately.

<!--
At the same time, what counts as  a "private" change has deviled copyleft advocates.  AGPL, which requires sharing source code for changes provided over a network, rather than as copies of software to run yourself, turned a class of private changes into changes that had to be shared.  That loophole remains open for software generated, analyzed, compiled, and otherwise created with free software, which builds on free code, but by technical happenstance doesn't happen to derive from it, in the legal sense.
-->

The Internet makes global distribution cheap.  So cheap, in fact, that it costs less to give all comers the source code on HTTP demand than to try to suss out who was actually a customer to begin with.  And there's no value in trying to give just customers the source code, on the off chance they won't share it with maintainers, anyway.  The one trying to enforce GPL is usually an activist or the maintainer themself.  They aren't going to spend months sending demand letters to a company, or paying legal fees to have them sent, only to forget to zip an e-mail to the project lead, or to merge useful changes to the public project they lead.

Granted, not everybody has the Internet.  Some folks get software on CD, on flash drive, preloaded into a physical product, or not at all.  But a whole lot of people running software do in fact have Internet access, at least some of the time.

In the olden days, there were a lot of concerns about requiring specific software or procedures to accept licenses, or to distribute source code.  If users had to use closed software, or click through restrictive terms of service, to accept license terms or share source code, the software couldn't really be called free.  But the value of the Internet flows from its openness, universality, and ubiquity.  With the Internet, sending messages, creating records, and distributing content is cheap and easy.  There's no more cost-effective way to reach so many people.

The [Parity](https://licensezero.com/licenses/parity) license that I drafted for [License Zero](https://licensezero.com) embraces this reality.  Parity is a very strong share-alike license that requires users to release their own source code.  In particular:

> To release source code, publish the preferred form for making changes through a freely accessible distribution system widely used for similar source code, and license ....

Parity doesn't specify whether the distribution system is for users or maintainers.  Parity embraces the fact that those systems are likely to be the same.  At present, examples include GitHub, npm, and other Internet-based repositories.  Even if you _could_ release source to just the person receiving your software, you have to use a broader distribution system, under Parity.

Merging distribution channels for end-users and maintainers leaves but one remaining policy issue:  Whether users should be allowed to make changes just for themselves, never to be shared with anyone.  That isn't a question of legal capacity:  Copyright owners control the right to "prepare derivate works", not just to share derivative works they've prepared.  It doesn't matter whether downstream users prepare derivatives just for themselves or for others.

Parity addresses that question head on.  In light of modern distribution methods, that is the right debate to have.

## Attribution Doesn't Mean Credit

Every mainstream open source license requires others to preserve copyright notices and license terms with the software, whether in source code, compiled, or other form, when they copy and distribute.  License wonks calls those requirements _attribution conditions_.  Attribution conditions make it possible to thumb through to a list of open source credits on your smartphone, and show Ma and Pa you're part of what makes iOS or Android tick.

Legally, however, attribution conditions aren't about bragging rights or credit.  They used to be about claiming copyright.  Now they're about disclaiming liability.

Some recent licenses, like [0BSD](https://spdx.org/licenses/0BSD.html), omit attribution conditions.  There is literally nothing users have to do to use or reuse work under these licenses.  That's the ideal of "anti-licenses" like [WTFPL](http://www.wtfpl.net/) and also [public domain dedications](https://creativecommons.org/share-your-work/public-domain/cc0/):  Anyone should be able to treat the work as if they themselves wrote it.  It's as if intellectual property laws, or at least copyright laws, didn't exist.  Zero friction.

But copyright laws aren't the only laws bearing on software.  Even when clients don't care one lick about credit for work done, I recommend they stick to licenses with attribution conditions, like MIT, BSD, and Apache 2.0.  Why?  Attribution conditions help ensure that disclaimers---the parts in `ALL CAPS`---remain intact, and reach end users, so they have legal effect.

Under most countries' laws, products like software come with default warranties, or promises, about quality.  Those rules try to make it safe to rely on software not to delete your files, corrupt your data, return inaccurate results that you might rely on to make important decisions, drag you into IP infringement lawsuits, and so on.

The defaults make a lot of sense when you're buying software from a vendor.  But offering those kinds of warranties is a lot to ask for no dollars in return, as with open source.  So open source licenses almost uniformly reverse those defaults, by _disclaiming implied warranties_.  Contributors give their work away, but it's up to users to decide whether to rely upon it, and to accept the whole risk of doing so.  At least in most countries, which honor written disclaimers.

Reversing the defaults requires sending users a message that different rules apply.  By requiring copies of the software to come with copies of disclaimers, attribution conditions ensure those messages reach users, who might otherwise sue under a default warranty.  The point isn't "here is the person you should shower with credit".  The point is "here is a note making clear you can't hold them accountable".

Attribution conditions fall short of effective credit in yet another way:  They only require copies of copyright notices _when you share copies of the software with others_.  In other words, the attribution conditions of permissive licenses like MIT and BSD terms offer just the same kind of loophole as the copyleft conditions of GPL terms.  If you "share" software by running it, and letting others access via the Internet or another network, you don't share a copy of the software, and therefore you don't trigger the license requirements to share credit or source code.  No copy, no credit, no source.

Many open source developers gather, from experience, that open source means credit, even if it never means pay.  I've tried to address that expectation in [Posterity](https://github.com/berneout/posterity-public-license), a license in the same family as Parity, which requires giving credit whether providing software means providing a copy or not:

> 1\. If you run or combine this software with other software in any larger software system, give me credit.
>
> 2\. Give me credit for software whose source code you write, change, or analyze with this software.
>
> ...
>
> To give me credit, give users of your software notice that I contributed directly to this software and indirectly to your software. Make it easy for users to find my credit when using your software, and include the texts of the copyright and source notices above. For example, if users access your software via the World Wide Web, put my credit at the bottom of the home page, or put a link there to a page with my credit in its main text.

Giving credit isn't difficult or expensive.  It's the least open source users can do for open source contributors.  We can express the requirement to give proper credit in license terms.  So we should stop pretending that existing license terms achieve the same goal, and setting contributors up for disappointment.

## `LICENSE` Means Internet Compatible

Open source licensing embodies a few truly great ideas.  One of those is in-band licensing: Put license terms in a file, like `LICENSE`, that travels in digital form with the software it applies to, wherever that software may go.  In-band licensing lets us share software via channels like GitHub, a revision-control repository, and npm, a build-artifact repository, seamlessly.  Wherever the code goes, so goes data about the license terms that apply to it.

But public license terms and conventions like `LICENSE` long predate widespread Internet access.  They accommodate sharing by means of distribution in specific copies on pricey media to specific recipients, rather than publication for copy-on-demand by Internet.  It just so happens that the same mechanism works for software posted online.

In-band licensing went hand-in-hand with another key legal idea: direct licensing.  Under most common open source licenses, MIT excepted, each user gets their license for the software directly from the copyright holder.  The copyright holder doesn't grant users licenses that allow them to "sublicense" other users, in turn.  Rather, the copyright holder---often the author of the software---grants a license directly to each user who happens to receive a copy.  The deal is always directly between owner and user.

This difference is largely technical.  It's up to users who else receives copies of the software.  Giving someone else a copy of open source software, along with copies of copyright notices and license terms, as required by attribution conditions, has much the same effect as giving them a sublicense.  They get a license by getting a copy.  With a copy and a license, they have all they need.

If we assume Internet access---again, not entirely a safe assumption, but increasingly so---we can substitute on-demand access to licensing data for preemptive copies of licensing data.  We can put licensing information in a public database, indexed by cryptographic hash of each source file, or another method, and stop sending copies of licensing data in-band with copies of source code.  We can include URIs of licensing data, or services that can provide licensing data, with software, instead of full copies of license data.  At simplest, we can simply link to license terms, or reference them by a standardized identifier, like an [SPDX](https://spdx.org) ID, in metadata, rather than in `LICENSE`.

Some of this is already happening, under old license terms and new.  Pushing this line will improve both efficiency, on the consumer side, and clarity, on the producer side.  Old methods of communicating licensing information shouldn't create needless analysis and recordkeeping burdens.  Old methods of communicating disclaimers shouldn't mislead contributors about the reputational compensation they're right to expect.  New licenses can support, and encourage, more efficient and effective communication of license data.

## Purpose Overload

I'm all for writing new open source software licenses that implement new deals between producers and consumers.  But in general, I keep to the orthodox line that "license proliferation", or needlessly implementing existing licensing deals in different terms, pointlessly increases burdens on software consumers.  I have seen the pointless inefficiency that pointless variations in terms wreak on other kinds of legal transactions, from nondisclosure agreements to employment documents and high-finance transactions.  No, thanks.

But increasingly, I make room for a further exception to the nonproliferation rule:  Where significant throngs of open source contributors pick a license not because it was designed to meet their needs, but because they believe, for some reason, that it _will_ meet their needs quite despite itself, I think the system would benefit overall by giving them a way to express both the effect and their intent transparently, via a specific license choice.  I say that for two key reasons.

First and foremost, I believe such options would create data that users and researchers can understand, increasing valuable communication that affects decision making.  For example, I think a realistic, standardized "patches back" license would give us new insight into what developers actually want and expect from their terms, information currently masked by the use of GPL as available best.  A new, explicit choice would better impart expectations to project users, and also prevent partisans from ascribing GPL users to GPL's stated cause unfairly.  I'm not against FSF-style software freedom.  But I am against pretending that all developers who pick a GPL license share that motivation.  If we're going to count license choices as votes, we ought not weight the outcome by designing the ballot.

Second, stated purpose affects legal interpretation, especially as license terms age, practical circumstances evolve, and legal language, as a general rule, requires more in the way of interpretation.  The GPLs start with long preambles.  Those preambles are not operative text in the strictest legal sense, but they are part of the documents, and can be cited to resolve vagueness and ambiguity, where it arises.  The [family of licenses I've written for License Zero](https://licensezero.com/licenses/) also include summaries of purpose, albeit far shorter, to leverage that useful effect.

In the future, I wouldn't be surprised to see two public software licenses with exactly the same operative legal terms, but different statements of purpose, for use as interpretive tie-breakers.  Especially where license terms play at the edge of less-settled points of law, within one jurisdiction, or as a result of jurisdictional differences.  Insofar as such choices reflect proliferation of new approaches to contributor-user relationships, that's proliferation I'd welcome.
