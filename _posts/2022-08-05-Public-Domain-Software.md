---
date: 2022-08-05T10:58:45-07:00
title: Putting Software in the Public Domain
description: if you want "waive" or "dedicate", you should probably just "license"
brief: People who want to dedicate software to the public domain should really consider the Blue Oak Model License.
tags:
- Software
- Software Licensing
- Public Domain
- Blue Oak Council
---

Perhaps once or twice a year, someone asks me about "putting software into the public domain".  This is a thing some programmers want to do.  But an increasing number of them have read into, or heard about, concerns over [The Unlicense](https://spdx.org/licenses/Unlicense.html), [CC0](https://creativecommons.org/publicdomain/zero/1.0/), and other forms that purport to do the job.  Concerns about legal quirks.  Concerns about patents.

Most of these programmers would better use the [Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0).  That's the state of the art for a maximally permissive legal tool to give software away.  But it is a license.  Nowhere in its short text will you find the phrase "public domain".

"Public domain" became a thing, as I see it, thanks to activists like [James Boyle](https://en.wikipedia.org/wiki/James_Boyle_(academic)) and [Larry Lessig](https://en.wikipedia.org/wiki/Lawrence_Lessig).  But at least here in the US, it remains more policy concept than legal mechanism, more a way of describing legal state than a particular method you can call on it.  As a result, framing end goal as "put it in the public domain" can mire people in generalizations, complexities, and rhetoric they really don't need.  Framing as "let people do what they want" refocuses intended effect.

That said, the public domain _is_ a legal idea: the great and growing well of works, ideas, symbols, and designs not encumbered by intellectual property claims.  In practice, mostly inventions and works on which patents and copyrights have expired.

As such, you _will_ find the phrase "public domain" in US court opinions used broadly in this sense.  And you will find discussion of copyright "abandonment" used much as activists mean "dedication to the public domain".  But you won't find any well structured process.  You won't find clear guidance on how to invoke it, or how to interpret words that try to.  Not in the Copyright Act.  Not in the court decisions.

This typically legal combination of general doctrinal clarity and utter practical uncertainty is ideal for frustrating programmers of deterministic logic machines.

Some folks may have read [Daniel Bernstein's public domain page](https://cr.yp.to/publicdomain.html).  It is one of my least favorite places on the Web, featuring a cryptographer I deeply respect, whose software I admire, bad-mouthing a lawyer I deeply respect, whose [writing](https://www.amazon.com/Open-Source-Licensing-Software-Intellectual/dp/0131487876) and [license](https://opensource.org/licenses/OSL-3.0) [work](https://opensource.org/licenses/AFL-3.0) were formative.  Yet another sign that the message of the medium of the mailing list is that even the best of us can tie ourselves in angry knots, given a long enough thread.

For those who haven't read it, DJB's gist is that dedication to the public domain is indeed a thing under US law.  And that it doesn't take but a few short words in a software repo to do it.

Here's the full paragraph from _MicroStar v. FormGen_ that DJB quotes from:

> In case FormGen didn't license away its rights, Micro Star argues that, by providing the Build Editor and encouraging players to create their own levels, FormGen abandoned all rights to its protected expression.  <mark>It is well settled that rights gained under the Copyright Act may be abandoned.  But abandonment of a right must be manifested by some overt act indicating an intention to abandon that right.  _See_ _Hampton v. Paramount Pictures Corp._, 279 F.2d 100, 104 (9th Cir.1960).</mark> [cited by DJB ---KEM]  Given that it overtly encouraged players to make and freely distribute new levels, FormGen may indeed have abandoned its exclusive right to do the same.  But abandoning some rights is not the same as abandoning all rights, and <mark>FormGen never overtly abandoned its rights to profit commercially from new levels</mark>.  Indeed, FormGen warned players not to distribute the levels commercially and has actively enforced that limitation by bringing suits such as this one.

Alas, this opinion's emblematic.  It recites the general rule that copyrights _can_ be abandoned, but doesn't actually find that any relevant copyrights were.  Same story in the case it cites, _Hampton v. Paramount Pictures_:

> Rights gained under the Copyright Law...may be abandoned.  Abandonment of such rights, however, must be manifested by some overt act indicative of a purpose to surrender the rights and allow the public to copy.  _National Comics Publications v. Fawcett Publications_, 2 Cir., 191 F.2d 594, 598.
>
> <mark>Evidence of such an overt act is here totally lacking.</mark>  There was at most lack of action.

And of _National Comics_, the decision _that_ decision cites:

> We do not doubt that the "author or proprietor of any work made the subject of copyright" by the Copyright Law may "abandon" his literary property in the "work" before he has published it, or his copyright in it after he has done so; but he must "abandon" it by some overt act which manifests his purpose to surrender his rights in the "work," and to allow the public to copy it.  <mark>There was no evidence in this case of any such an intent...</mark>

Indeed, federal courts have acknowledged that copyrights can be abandoned.  We could call that "dedication to the public domain" if we like.  And I highly doubt that DJB will be suing anyone for using his code, or would succeed if he went nuts and tried, in part due to all he's said and written about it.  We're safe there.  And, of course, grateful.

But the courts have been consistently unhelpful telling us what "overt acts" do the abandonment trick, or, more crucially, how their scope will be interpreted.  Rather, they've come out and admitted straight-up that the doctrine's full of question marks, deploying the usual legalisms for *waves hands in the air*.

Here's from the District of Nevada in _Rimini Street v. Oracle_, <abbr title="Federal Supplement, Third Series, Volume 473, Page 1158">473 F.Supp.3d 1158</abbr>, relatively fresh from 2020:

> The _Marya_ Court [the Central District of California] noted that "what does or does not constitute abandonment appears to be a <mark>highly fact-specific inquiry</mark>" because <mark>there is no clear rule as to what constitutes abandonment</mark>. [_Marya v. Warner/Chappell Music_, ]131 F.Supp.3d [975] at 992.

Indeed, _MicroStar_, our touchstone appeals-court-level opinion, hints at the potential for perilous uncertainty around the key question of what is abandoned.  It's been cited specifically for the proposition that copyright owners can abandon some rights but not others.  In other words, to muddy things.

The practical upshot here is that copyright abandonment isn't a well paved path.  It's pleasing to the coder-mind, including mine, to try and pin it down deterministically:

- `IF` over act `THEN` copyright abandoned.
- `IF` copyright abandoned `THEN` work dedicated to the public domain.
- I have done an overt act.
- Therefore, I have dedicated my work to the public domain.

But that is ignoring the reality that in law, a clear if-then only shifts the fight to inputs and outputs.  What's an overt act?  Which copyrights are abandoned?  What evidence from context---all those pesky "facts" potentially driving the "inquiry"---will push those questions one way or the other?

When an appeals court writes "highly fact-specific inquiry", what lower courts see is "it depends on all the context, so feel it out".  The courts could have announced an `IF`-`THEN` rule.  They haven't.  They could have given structure to "feeling it out" by listing factors to weigh, like we have [for fair use](https://en.wikipedia.org/wiki/Fair_use#U.S._fair_use_factors).  They haven't done that, either.  Because they haven't had to.  In the cases quoted above, even the most basic question---whether the copyright holder did literally anything at all to show abandonment of the specific copyrights in dispute---was enough to find no abandonment.  Like a disciplined programmer [growing software driven by tests](http://www.growing-object-oriented-software.com/), they've built a rule only as complex as needed to handle cases so far.

On top of that, looking forward, we have to remember that public policy will pull against us here.  The point of the Copyright Act---give authors exclusivity---plus the general legal default---abhorrence of "forfeitures"---will haunt us in open-ended "fact-specific inquiries", and in how future courts flesh out the rule.  We'd probably have seen these cliche legal principles cited already, in the decisions quoted above, had any of them had actually held a copyright on its decision path abandoned.  We may very well see them cited one day to set rules that require more skepticism, and therefore more specificity or formality, for abandoning copyrights than licensing them.

Where does that leave us?

In terms of recommending a practical and especially standardizable solution---something reliable and repeatable enough that we can tell people to do it by rote, like copying a form license into `LICENSE`---it's hard to get behind sticking "Public Domain" where the copyright notice would go.  It's hard to get behind short, single-sentence statements like "I hereby dedicate this software to the public domain".  It's hard to get behind any legal route that only traverses the legal pig trail of abandonment.  Because even if we know abandonment's an outcome we can get, in theory, the courts are telling us the path from here to there is a whole lot of undefined behavior.  So far.

Drafters trying to deliver quality public domain dedications have confronted this reality.  We can see it directly in their terms.

[The Unlicense](https://spdx.org/licenses/Unlicense) is a loose permissive license with attribution ripped out and two paragraphs tacked in:

> This is free and unencumbered software released into the public domain.

Then, lieu of just "I hereby dedicate....":

> In jurisdictions that recognize copyright laws, the author or authors of this software dedicate any and all copyright interest in the software to the public domain. We make this dedication for the benefit of the public at large and to the detriment of our heirs and successors. We intend this dedication to be an overt act of relinquishment in perpetuity of all present and future rights to this software under copyright law.

Note that this bit is conditional.  `IF` the dedication is being read in a jurisdiction where such a thing works, `THEN` it's dedicated.  `ELSE` it falls back on the remaining terms, which make a license.

Insofar as the dedication achieves the same practical result as the license---people can do what they like with the software---the dedication's no more than a dubious redundancy.  It's there for the sake of saying "public domain".  We have one method, licensing, that's reliable, and one method for the same thing, dedication, that's not.  We're calling the unreliable method, expecting it might throw, and when it does, calling the reliable one.

Same for [Creative Commons' CC0](https://creativecommons.org/publicdomain/zero/1.0/legalcode).  It's called a "public domain dedication", but it's actually another big `IF` we can do that, `ELSE` here's a license.  Its bulk shows.  Its preamble is almost as long as the whole Blue Oak Model License.  Its waiver is longer than Unlicense's.  Its license terms are longer than Blue Oak again.

I'm reminded of the car nuts here in Oakland.  You'll meet a lot of guys with an shiny old American muscle car in the garage, a flashy but temperamental ride for the weekends, when breaking down's no big deal.  That's "dedication to the public domain".  But the same guy, as often as not, parks a later-model, A-to-B-mobile in the driveway.  Because come Monday, and more often than not, he just needs to get where he's going when he needs to be there.  That's the license.

Unlicense and CC0 fall back on software licensing because we've comparative mountains of guidance on it.  Plus the benefits of pervasive user familiarity, even among lumbering corporates.  They're all used to getting software license grants from `LICENSE` files.  Indeed, it's a people system, not fully rationalized.  That comes through for projects like SQLite, a "public domain" project that I suspect makes most of its money [on licenses](https://www.sqlite.org/purchase/license) from companies that just need license-shaped documents to plug license-shaped release-process holes.

Returning to how we state our goals---in terms of what we let people do, rather than the abstract cause that advances---here's the Blue Oak Model's License's copyright language:

> Each contributor licenses you to do everything with this software that would otherwise infringe that contributor's copyright in it.

There goes copyright.  Contributors still technically own them, but there's little or nothing left to enforce.

Then patent.  The Blue Oak Model covers it explicitly:

> Each contributor licenses you to do everything with this software that would otherwise infringe any patent claims they can license or become able to license.

There goes patent. With copyright, the combined effect is much the same as a broad permissive license, like Apache 2.0, but even more generous.

Note that Unlicense's and CC0's license parts are _not_ equivalent here.

Unlicense inherits MIT's mistake of at best implying, never saying, the word "patent".  CC0's fallback license does say "patent", but specifically to say "no...patent rights...are waived, abandoned, surrendered, licensed or otherwise affected by this document".  In other words, to say there _isn't_ any patent license.  Because Creative Commons, like its founders, sees "public domain" first and foremost in terms of copyright.  Its mission has long scoped software out, as free software's thing.  End result, Red Hat just [delisted CC0 as a good-go-green license for software](https://lwn.net/ml/fedora-legal/CAC1cPGw1xScGAXo-0NRs92zFB7ptRxTt=oCYi0BxfZDfAgUtYQ@mail.gmail.com/).

The remaining wrinkle is "attribution"---requirements to keep copyright notices and license terms running with copies of the software.  These are common to all popular permissive licenses.  But they also produce a chore that public domain advocates dislike and would rather not impose.

The Blue Oak Model can't go all the way here.  It doesn't require copies of copyright lines.  It does require copies of---or, alternatively, links to---its license terms.  The reason why is 100% legal.

Even folks who want to give their software away usually assume they'll be protected by disclaimer.  That's the part of a license, usually in eye-watering `ALL CAPS`, that says they won't be held legally responsible if something goes wrong with the code they gave away.  The connection between this protection and license terms isn't clear to most folks, through absolutely no fault of their own.

To be frank, the legal mechanics of how disclaimers work for open code aren't terribly clear to me, either, or to any of the colleagues I've spoken to.  They're very clearly contract-type terms.  And they clearly respond to legal defaults that apply under laws governing "sales", which don't necessarily have to involve exchange of money.  Alas, the relationship between license grants, legal claims, and legal remedies---what courts can give you when you win a case for copyright infringement versus breach of contract---is still somewhat WIP in the courts.  We know more today than when FSF ran around telling everyone GPL wasn't a contract.  But there's a lot left still to pin down.  Different circuits have floated different rules, and it isn't inexorably how to apply any of them in whatever situation.

All in, my sense of the Blue Oak Council collective view was that it could be hard to enforce a disclaimer against someone who'd got a copy of some software without any copy of that disclaimer.  Especially if the author did nothing to require passing one along.  The operative rules here veer general, evoking the concept of "notice" and the vague-ish principle that, apart from public laws and regulations, people can't be fairly held to terms they weren't made aware of.  There are more specific and impressive sounding ways to articulate that in lawspeak---contractually, constitutionally, in storied maxims of equity---but it's really something more basic, cross-cutting, fundamental.

License terms are a classic source of leverage to get notices copied along with your software.  So a "copies of terms" requirement it is for the Blue Oak Model.

The end result is different, by the way, than what we'd get by simply using a common license that requires copies of terms and notices, like MIT, BSD, or Apache 2.0, and then adding a note giving up, or waiving", that requirement.  Waiving both means waiving copies-of-terms, as well.

Moreover, in my experience, waiving attribution does more to confuse than to help.  Especially for those really diligent on license compliance.  You may get fewer license-related issues on your repo, putting "Apache-2.0" in metadata and Apache plus a waiver in `LICENSE`.  People will tend to take the good news, and not look deeper, on first glance.  But better auditors, human or automated, will notice the change.  It's only good news once they read it.  But they will have to read it.  And if they've got an automated process, and especially if they've got a lot of other deps, more likely than not, they'll end up copying your `LICENSE` anyway.  They've automated the rule.  Not your exception.

Summing up now:

If you want to take a good spit at intellectual property law, and therefore see public domain dedication as meaningfully different from licensing away to everyone, for whatever, and forever, then you probably don't want my legal-side advice on the state of the law, wording of terms, or the compliance habits of companies and license-conscious users in the first place.  There's always [WTFPL](http://www.wtfpl.net/).  But if your concern is really making software available for the maximum number of users and use cases, with the least amount of hassle and uncertainty, you can do better in practice, if not in theory or style, with a license.  With Blue Oak.

As long as it's your code, that choice is yours.  Hopefully this clarifies the tradeoffs.
