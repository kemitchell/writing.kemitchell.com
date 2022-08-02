---
title: Putting Software in the Public Domain
description: if you "waive" or "dedicate", you should really just "license"
brief: People who want to dedicate software to the public domain should really consider the Blue Oak Model License.
tags:
- Software
- Software Licensing
- Public Domain
- Blue Oak Council
---

Perhaps once or twice a year, someone asks me about "putting software into the public domain".  This is a thing some programmers want to do.  But an increasing number of them have read into, or heard, concerns about [The Unlicense](https://spdx.org/licenses/Unlicense.html), [CC0](https://creativecommons.org/publicdomain/zero/1.0/), and other forms that purport to get the job done.  Concerns about legal implementation.  Concerns about patents.

Most of these programmers would better use the [Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0).  That's the state of the art for a maximally permissive "give it away" software legal tool.  But it's a license.  Nowhere in its text will you find "public domain".

The "public domain" became a cause thanks to activists like Larry Lessig and James Boyle.  But at least here in the US law, it's more policy concept than legal mechanism.  It's a way of describing a potential state of legal reality, rather than a method you can call or a flag you can set.  Framing end goals as "put it in the public domain" tends to mire people in generalizations and complexities they really don't need.  Framing as "let people do what they want" cuts closer to practical realities, without overstress on implementation detail.

The public domain _is_ a legal idea, the great well of all things not covered by intellectual property.  For example, inventions and works on which patents and copyrights have expired.  Throw in works of the US government [generally not covered by copyright in the first place](https://uscode.house.gov/view.xhtml?req=(title:17%20section:105%20edition:prelim)), too.  You will find the phrase "public domain" in US court opinions, used broadly in this sense.  And you will find discussion of copyright "abandonment", used much as activists mean "dedication to the public domain".

But you won't find any well defined mechanism or structured process.  Not in the Copyright Act.  Not in court decisions.

I'm very familiar with [Daniel Bernstein's public domain page](https://cr.yp.to/publicdomain.html).  It is one of my least favorite places on the Web, featuring a cryptographer I deeply respect, whose software I use, bad mouthing a lawyer I deeply respect, whose [writing](https://www.amazon.com/Open-Source-Licensing-Software-Intellectual/dp/0131487876) and [license](https://opensource.org/licenses/OSL-3.0) [work](https://opensource.org/licenses/AFL-3.0) were formative.  Yet another sign that the message of the medium of the mailing list is that even the best of can tied ourselves in angry knots, given a long enough thread.

Here's the full paragraph from _MicroStar v. FormGen_ that DJB partially quotes:

> In case FormGen didn't license away its rights, Micro Star argues that, by providing the Build Editor and encouraging players to create their own levels, FormGen abandoned all rights to its protected expression.  <mark>It is well settled that rights gained under the Copyright Act may be abandoned.  But abandonment of a right must be manifested by some overt act indicating an intention to abandon that right.  _See_ _Hampton v. Paramount Pictures Corp._, 279 F.2d 100, 104 (9th Cir.1960).</mark> [cited by DJB ---KEM]  Given that it overtly encouraged players to make and freely distribute new levels, FormGen may indeed have abandoned its exclusive right to do the same.  But abandoning some rights is not the same as abandoning all rights, and <mark>FormGen never overtly abandoned its rights to profit commercially from new levels</mark>.  Indeed, FormGen warned players not to distribute the levels commercially and has actively enforced that limitation by bringing suits such as this one.

This opinion is emblematic.  It cites the rule that copyrights _can_ be abandoned, but doesn't actually find that the relevant copyrights were.  Same story in the case it cites, _Hampton v. Paramount Pictures_:

> Rights gained under the Copyright Law, 17 U.S.C.A. § 1 et seq., may be abandoned.  Abandonment of such rights, however, must be manifested by some overt act indicative of a purpose to surrender the rights and allow the public to copy.  _National Comics Publications v. Fawcett Publications_, 2 Cir., 191 F.2d 594, 598.
>
> <mark>Evidence of such an overt act is here totally lacking.</mark>  There was at most lack of action.

And of _National Comics_, the decision _that_ decision cites:

> We do not doubt that the "author or proprietor of any work made the subject of copyright" by the Copyright Law may "abandon" his literary property in the "work" before he has published it, or his copyright in it after he has done so; but he must "abandon" it by some overt act which manifests his purpose to surrender his rights in the "work," and to allow the public to copy it.  <mark>There was no evidence in this case of any such an intent...</mark>

Indeed, federal courts have acknowledged, over and over again, that copyrights can be abandoned.  And we could call the result "dedication to the public domain" if we like.  I highly doubt that DJB will be suing anyone for using his code, or would succeed if he went nuts and tried.  We're safe---especially thanks to all the numerous times and places he's explained his intentions.  And, of course, grateful.

But the courts have been consistently unhelpful telling us anything specific about what "overt acts" do the abandonment trick, or, more crucially, how their scope will be interpreted.  Rather, they've come out and admitted straight-up that the mechanism's full of question marks, deploying all the usual legalisms for *waves hands in the air*.

Here's from the District of Nevada in _Rimini Street v. Oracle_, 473 F.Supp.3d 1158, in 2020:

> The _Marya_ Court [the Central District of California] noted that "what does or does not constitute abandonment appears to be a <mark>highly fact-specific inquiry</mark>" because <mark>there is no clear rule as to what constitutes abandonment</mark>. [_Marya v. Warner/Chappell Music_, ]131 F.Supp.3d [975] at 992.

Indeed, _MicroStar_, our touchstone appeals-court-level case, hints at the potential for perilous uncertainty around the key question of _what_ is abandoned---both in terms of work and in terms of the kinds of legal rights.  It's cited for the proposition that copyright owners can abandon some rights but not others.  In other words, to muddy things.

The practical upshot here is that copyright abandonment isn't a well paved path.  It's extremely pleasing to the coder-mind, including mine, to try and pin it down deterministically:

- `IF` over act `THEN` copyright abandoned.
- `IF` copyright abandoned `THEN` work dedicated to the public domain.
- I have done an overt act.
- Therefore, I have dedicated my work to the public domain.

But that is ignoring the reality that in law, a clear if-then rule only shifts the fight to the inputs.  What's an overt act?  What does it apply to?  What evidence from the context---all those pesky "facts" potentially driving the "inquiry"---will push one way or the other?

The point of the Copyright Act---give author exclusivity---and the general legal aversion to "forfeitures" will haunt us here.  Public policy isn't with our movement.  Which we'd probably have seen quoted and cited in the decisions quoted above, had any of them had actually held a copyright on decision path abandoned.

In terms of recommending a practical and especially standardizable approach---something reliable and repeatable enough that we can tell people to do it by rote, like copying a form license into `LICENSE`---it's hard to get behind sticking "Public Domain" where the copyright notice would go and calling it a day.  It's hard to get behind any terms that rely on the dirt trail of abandonment alone.

This is why even legal terms from groups that speak "public domain" and want to reinforce a dedication mechanism, like Creative Commons, end up running _longer_ than straightforward permissive licenses.  [CC0](https://creativecommons.org/publicdomain/zero/1.0/legalcode) is called "public domain dedication" and "waiver", but is actually one big "`IF` we can do that, `THEN` do it, `ELSE` here's a permissive license".  Its preamble is almost as many words as the Blue Oak Model, and its license terms are longer.  Those license terms include a clarification that "no...patent rights...are waived, abandoned, surrendered, licensed or otherwise affected by this document", because Creative Commons' mission has long scoped software out, covering other media.  Red Hat just [delisted CC0 as a good-go-green license on account of this](https://lwn.net/ml/fedora-legal/CAC1cPGw1xScGAXo-0NRs92zFB7ptRxTt=oCYi0BxfZDfAgUtYQ@mail.gmail.com/).


Contrast all of this with the volumes of guidance we have on licensing---giving folks permission to do what copyright would otherwise prohibit.  Then throw in the pervasive familiarity of users, even lumbering corporate ones, with receiving license grants, even free from rando Internet People.

Returning to how we state our goals---in terms of what people can do, rather than indirectly, via "public domain"---here's the Blue Oak Model License's copyright license grant:

> Each contributor licenses you to do everything with this software that would otherwise infringe that contributor's copyright in it.

There goes copyright.  Owners still technically owns it, but there's little or nothing left to enforce.

Then the patent potential.  The Blue Oak Model covers it explicitly:

> Each contributor licenses you to do everything with this software that would otherwise infringe any patent claims they can license or become able to license.

There goes patent.

The combined effect is much the same as a very broad permissive license, like Apache 2.0, but even more generous.  The remaining wrinkle is "attribution"---requirements to keep copyright notices and license terms running with copies of the software.  These are common to all popular permissive licenses.  But they also produce a chore that public domain advocates do not enjoy and would rather not impose.

The Blue Oak Model can't go all the way here.  It _doesn't_ require copies of copyright lines, but _does_ require copies of---or, alternatively, links to---the Blue Oak license terms.  The reason is 100% legal.  Even folks who want to give their software away usually assume they'll be protected by a disclaimer that says they won't be held legally responsible if something goes wrong with the code they gave away.  The connection between that protection and licensing isn't clear to them, for absolutely no fault of their own.

To be frank, the legal mechanics of how those disclaimers work for open code aren't terribly clear to me, either, or to any of the colleagues I've spoken to.  They're very clearly _contract_-type terms.  And they very clearly respond to legal defaults that apply under laws governing "sales".  Alas, the relationship between license grants, legal claims, and legal remedies---what courts can give you when you win a case for copyright infringement versus breach of contract---are still somewhat WIP in the courts.  We know more today than when FSF ran around telling everyone GPL wasn't a contract.  But there's a lot left still to know.

Altogether, the members of Blue Oak felt it would be hard to enforce a disclaimer against someone who'd got a copy of some software without any copy of the disclaimer.  Especially if the license terms did nothing to require passing one along.  The operative rules here veer general, evoking the concept of "notice" and the general idea that, apart from public laws and regulations, people can't be fairly held to terms they weren't made aware of.  There are more specific and impressive sounding ways to articulate that in legal context---contractually, constitutionally, in old maxims of equity---but it's really something cross-cutting, fundamental.

So a "copies of terms" requirement it is.  Which is different than what we'd get by simply using a common license that requires _both_ copies of terms and copies of copyright notices, like MIT, BSD, or Apache 2.0, and then adding a note "waiving" the requirement.

In my experience, that does more to confuse than to help.  Especially for those really diligent about license compliance.  You may get fewer license-related issues on your repo, putting "Apache 2.0" in metadata and Apache with a waiver in `LICENSE`.  People will tend to take the good news, and not look deeper, on first glance.  But better auditors, human or automated, will notice the change.  It's only good news, once they read it.  But they will have to read it.  And if they've got an automated process, and especially if they've got a lot of other deps, more likely than not, they'll end up copying your `LICENSE` anyway, because they've automated the rule, rather than your exception.
