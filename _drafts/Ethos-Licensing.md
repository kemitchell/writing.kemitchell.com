---
title: Heather Meeker on "Ethos Licensing"
description: free and open is ethos licensing, too
tags:
- Open Source
- Licensing
- Politics
---

Heather Meeker, whose [blog has long appeared on my blogroll](https://writing.kemitchell.com/blogroll), just posted [_Good and not Evil: the Advent of Ethos Licensing_](https://heathermeeker.com/2019/11/09/good-and-not-evil-the-advent-of-ethos-licensing/).  Everyone interested in open licensing and ethical licensing in particular should read it.  Then my thoughts here.

Overall, Heather comes across as highly skeptical of licenses with ethically motivated restrictions.  She makes a few points against.  In my own words:

1.  _Broken_:  Licenses with ethical restrictions create license-compatibility issues, raise enforceability questions, and often read very vague.

2.  _Ephemeral_:  Licenses with ethical restrictions tend to focus on fleeting political issues that won't matter in time.

3.  _Ineffective_:  Licenses with ethical restrictions don't effectively control behavior.

4.  _Inferior_:  Licenses with ethical restrictions don't work as well as more typical forms of issue advocacy.

Here's Heather's hardest hit:

> In short, ethos licensing is a publicity stunt.  If we believe in free speech, then we must acknowledge that people can write whatever licenses they want in order to garner attention.  But developers should not be so quick to trample Freedom Zero, which is an idea so powerful that it has fundamentally changed the world.

My fundamental critique of Heather's reasoning boils down just as succinctly:

Open licensing was ethos licensing, and I'm not just talking copyleft.  Many of the critics criticizing "ethical licenses" today heard the same criticisms of their free and open licenses twenty years ago.  The success of free and open licenses charts the limitations of those criticisms.

## Broken

GPL was ethically motivated, for a somewhat toyish definition of ethics.  GPL _invented_ the problem we call "license compatibility" today.  Critics continue to raise misuse, vagueness, and other fear, uncertainty, and doubt around even the most popular copyleft terms, to say nothing of those designed to be effective in this day and age.  Even when popular copyleft licenses invoke established legal terms, like "derivative work", they are still vague.  We don't know what those legal terms of art mean in software, and are as disappointed as often as elated when we find out.

I share Heather's concern that many new ethical licenses of today are trying to incorporate their ethics by reference to general international agreements and vague slogans, rather than [recognizing the difficulty of writing their own, and approaching accordingly](https://writing.kemitchell.com/2019/03/15/Ethical-Subcommons.html).  But when Heather doubts whether lawyers could credibly answer client questions about compliance with new ethical terms, I have to wonder how sure she is about open licenses.  As far as I know, the [Polyform Noncommercial license](https://polyformproject.org/licenses/noncommercial/1.0.0/) that we worked on together is the first to offer a safe harbor informed specifically by our experience answering these kinds of questions.  But I for one frequently tell clients, and hear others say, that even medium-sized organizations can't be sure of all the software their developers are using.  Can we really write clean GPL bills of health?  Could we do that even for permissive attribution requirements?

## Ephemeral

Source code availability as an issue has also mattered less and less, due to a change no more momentous than a turn of the wheel of software delivery preferences: these days, folks again prefer to sign in to their software, rather than to install it.  The main thrust of GPL ran broke down as a result.  Even key aspects of permissive licenses, like attribution for credit, broke down in the (current) service era.

Having turned code into a public good, the race is now on to control users and economic value through data.  That's why we think and care about [new data licenses](https://github.com/microsoft/Open-Use-of-Data-Agreement), even when they don't seem to care what we think.  That's why we try to write licenses like the [Cryptographic Autonomy License](https://github.com/holochain/cryptographic-autonomy-license) and [Icepick](https://icepicklicense.org/), even though they're arguably much harder to pull off than banning ICE and its contractors.

## Ineffective

I think ineffectiveness in controlling behavior was Heather's strongest point.  When you put something online with rules attached, you have to accept a level of rule breaking that just wont' be cost-effective to squelch.

But the ineffectiveness point is also the point where free and open orthodoxy make the weakest case for mapping the practical limits.  Despite renewed interest in "sustainability" models like the work of Elinor Ostrom, which _requires_ boundaries, monitoring, and graduated sanctions, old-guard free and open organizations [have largely shunned strong public enforcement](https://www.youtube.com/watch?v=P1mGG4JYurE), and affected firms have spent [made big, public pushes to talk individual devs into surrendering their leverage](https://gplcc.github.io/gplcc/).  Now that the industrial popularity the old guard sought has caught up with them, they're [increasingly dismayed](https://www.youtube.com/watch?v=P1mGG4JYurE) by how much more active private litigants like [Artifex](https://artifex.com/) have been without them.  We now know more for certain about GPL enforceability from private litigation than from FSF, SFLC, and SFC combined.  I say that _not_ to diminish the value of my colleagues' theoretical writing, but to emphasize that the space is no longer so small, or so homogeneous, that socially constructed truth overshadows the legal system.

## Inferior

As for the supposed ineffectiveness of licensing as a tactic, or at least its ineffectiveness as compared to less software-specific advocacy plays, I have to channel Luis Villa: Why not both?  Heather reminds us that "licensing is not the only tool in the developer/activist's arsenal."  But that's not something labor, human-rights, or public-health activists need to be reminded of.  Each of those causes can point to a decade or more of notable and sometimes highly effective political leverage _outside_ licensing.  Compare software freedom activism, where licenses still come first to mind.  The question instead is why other activists should be invited to run the whole political playbook, except the play that RMS and FSF contributed.

Every well rounded activist has the experience of moving from one action to another and still another, hearing "do it some other way" each time.  Two consistent themes emerge.  First, folks who aren't sympathetic to the message would rather you make your point in someone else's day.  This is so common, we have an acronym for it, [NIMBY](https://en.wikipedia.org/wiki/NIMBY), for "not in my back yard".  Second, the more effective the tactic threatens to be, the more the unsympathetic get anxious.  We clamped down on guns in California [when Panthers started carrying them](https://en.wikipedia.org/wiki/Mulford_Act).

Copyright is the primary legally enforceable leverage that the law grants to individual software developers.  Would we tell Springsteen to stick to stumping at the mic, rather than [going after Republicans for "Born in the USA"](https://www.rollingstone.com/politics/politics-lists/stop-using-my-song-35-artists-who-fought-politicians-over-their-music-75611/bruce-springsteen-vs-ronald-reagan-bob-dole-and-pat-buchanan-28730/)?  Would we tell conference organizers to scrap their codes of conduct, and merely advocate for good participants, instead of ejecting bad ones?  Or, like the Boss, should they do both?

## Anarchy is Compulsory

Reading between the lines, I can see a more consistent position under Heather's critiques:  Those putting source code on the Internet ought to accept that they will fundamentally lose all control over their work.  At best, law can paper legal legitimacy over that state of Internet nature, by granting everyone all the licenses they otherwise might get in trouble for not having.  So licenses work like the "FREE" sign hastily pinned to a box of housewares left on the street at a busy urban intersection.  Sign or no, the stuff is going, going, gone, and nobody is going to pay for it.  Blue Oak Council's [model permissive license](https://blueoakcouncil.org/license/1.0.0), which both Heather and I contributed to, epitomizes the genre.

Heather's points on the difficulty of writing a good license are very well taken, especially by me.  I've done a lot of it.  But the lesson of the Blue Oak Model license, and [the flaws in the old permissive licenses it ought to replace](https://writing.kemitchell.com/2019/03/09/Deprecation-Notice.html), isn't that ethical license restrictions are hard to write.  Licenses _without_ ethical restrictions are hard to write.  The software being licensed is going to change, because things are going to change around it.  More important, the people writing the software are going to change, but they will always be people.  People screw up.

So do lawyers. We can't expect license terms that work perfectly, for all, forever, from anyone.  That doesn't mean we give up---on licenses or law more generally.  As in law more generally, we licensing wonks should build [structures that allow us to fix and change our terms over time](https://writing.kemitchell.com/2019/10/05/XLC.html).  We should consign the "now and forever" licensing to the scrapheap, along with all the other errors of expedience from the rough, early days of free-and-open online.

## Indulgences

Immutable license terms aren't the only vestige of early free-open insularity holding us back.  We should scrap "condition versus restriction" and "use versus modify", both of which come up in Heather's post, while we're at it.  Those memes persist not because they make sense to anyone outside the tiny world of open license wonkery.  They don't.  We indulge ourselves with them to explain away wholly ideological self-contradictions, lest we wallow in more cognitive dissonance than we can take.

"Condition" is a true legal term of art.  "Restriction" is not.  At best, we say they map to legal remedies: conditions lead to infringement claims, restrictions to breach-of-contract claims.  Rules you break that lead to breach-of-contract claims are called "covenants".  But setting that aside, the only reason the distinction might matter for license analysis, outside of any specific, potentially litigable context, is the old Moglen "license not contract" position, which not even knowledgeable FSF people seem to take seriously anymore.  We've seen a US litigant plead _both_ contract and license under GPL, and get both.  Meanwhile, "condition", "restriction", "covenant", and "remedies" sail right by the folks we actually mean to serve: developers.  Which is why the newer licenses---Blue Oak, API Copyleft, Polyform, Parity---say "rules", and leave it at that.  Developers know how rules work, and they know they know how rules work.

The function of "That's a condition, not a restriction." is not to make sense in any legal or analytical way, but to gloss over the fact that some of us who mostly despise the idea of rules in licenses make exception for _particular_ rules.  "Restrictions" are the rules we abhor.  "Conditions" are the rules we abide.  Conditions are restrictions from allies we need or traditions that we want to be seen to inherit from, rather than coopt.

The "use versus modify" distinction did similar work.  Functionally, Freedom 0---"run" as [FSF puts it](https://www.gnu.org/philosophy/free-sw.html.en), "use" as Heather puts it---standing separate from Freedom 1---study, change---and Freedoms 2 and 3---distribution, original and modified---allows GPLv2-style copyleft to hook some, but not all, kinds of freedom.  Doctrinally, GPL hooks only the distribution freedoms, and only to keep software free, though distributing modified versions _presumes_ modification.

The FSF's Four Freedoms use a few relevant verbs: "run" in Freedom 0, "change" in Freedom 1, and "modified" in Freedom 3.  Having spent literally years ambushing undeserving developers with questions about software freedom and copyleft, I don't know where [_What is Free Software?_](https://www.gnu.org/philosophy/free-sw.html.en) covers building applications with unmodified libraries, though GPL clearly reaches that code.  I _do_ know that "use" covers that, and pretty much everything else, apart from "distribution", a fancy word for "share".

In my experience, developers don't distinguish "use", "run", "modify", "build on", and so on like open licensing wonks do.  Consider:

> --- We're building a front-end applications.
>
> --- What are you using?
>
> --- React.

Or:

> --- We run a big cluster of chemical simulations.
>
> --- How do you deploy all that?
>
> --- We use Ansible now.

Which is why [Parity 7](https://paritylicense.com/versions/7.0.0.html), despite my tendency to propagate all the insular memes I picked up along the way to doing this legal work, ended up saying "use" and "share" in its [high-level summary](https://paritylicense.com/versions/7.0.0.html#purpose), and actual developer words---"develop", "operate", "analyze"---in its [core copyleft rule](https://paritylicense.com/versions/7.0.0.html#copyleft).

In any event, FSF itself put its own labyrinthine justification out of date.  AGPL drafters bent over backwards to avoid looking like it triggers copyleft when licensees run the software in a particular way, which is exactly what Section 13 does.  FSF released AGPL, but didn't update its Four Freedoms, because doing that would be awkward.  Holy texts come down on stone tablets, not in patch files.

## Philosophy 

In my personal experience, almost nothing about open "philosophy" has "won", except perhaps, by getting lots of people nervous about being accepted to repeat what they've been told.  We aren't all radical liberty-liberals-slash-libertarians, and  most of the end-use software people rely on is still very closed.  As often as not, the developers I see dipping toes into the licensing and policy sides of open source find disappointment in the doctrine waiting for them, not inspiration.

People like open source because it's free stuff, it's people to work with, it's something to belong to, and within the tribe, there's nod-along consensus that it somehow matters much more than all that.  Increasingly, they don't like the costs of those benefits, and they aren't willing to incur them for work they do on their own time, especially work with obvious evil potential, whatever evil means for them.  The projects that do hop the open bandwagon are very visible and very countable.  The closed projects, often hosted by the very same platforms, linger in the shadows, looking for a way to come out without sacrificing too many of the assurances that allow their motivations to flow.