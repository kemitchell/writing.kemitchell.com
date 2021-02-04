---
title: Where are the Goalposts?
description: in response to Luis Villa on SSPL and OSI
tags:
- Open Source
- SSPL
---

My friend and colleague Luis Villa published ["What I learned from the Server Side Public License"](https://blog.tidelift.com/what-i-learned-from-the-server-side-public-license) this morning.  As usual, Luis inspired a few thoughts, which I'll share here.

## Licenses are dead.  Long live licenses.

It took me a while to understand what Luis meant by "licenses are living documents".  In the end, I don't think he's actually saying anything about documents---the software licenses---at all.  Rather, he's proposing that the Open Source Initiative judge new _movements_ instead of new licenses, if the movements happen to produce license terms.  Licenses without movements would not be allowed.

Unless a license includes some kind of explicit self-updating mechanism, along the lines of "GPLv3 or later", the license text is fixed.  It's likely also versioned.  If the author takes it to an organization like OSI or SPDX, they'll "standardize" it as a fixed text, never to be changed again.  Later edits must bear later versions.

The thing about publication of fixed, versioned license texts is that they become reliable.  Which means they become reusable, outside the original context, without any involvement of the drafter.  You can use GPLv3 without fear that the Free Software Foundation will come along and "promote" your project to new GPLv4, or publish an interpretation of GPLv3 that you don't agree with.  They can publish all the versions, [interpretive gloss](https://www.gnu.org/licenses/gpl-faq.html), and [movement-relevant "philosophy"](https://www.fsf.org/philosophy) they want.  None of it binds you as an independent licensor of your software.  You can use GPLv3 without joining FSF's movement.  You can use GPLv3 and build your own movement.

This decoupling is a feature, not a bug.  Reliability, or if you prefer, "standardization", is the first and best invitation to reuse.  Licenses are tools, and they are discovered, picked up, and employed like tools.  Even if a license has only been used by its author so far, submission for broader standardization and approval _means_ inviting use by others.  I've yet to a see a meta license---a license for reuse of a license text---that restricts who or how it can be used.

We've seen several licenses, especially copyleft licenses, drafted for one set and picked up by another.  HURD did not make GPLv2 famous.  Linux did.  Linus repeatedly and openly differed with Stallman.  Affero's web apps did not lift AGPLv3 to prominence.  MongoDB did.  We now know, thanks to SSPL, how little some of the folks involved in AGPLv3 think of Mongo.  Compare these stories to X, which did popularize its own license.  But it's hard to say they did so in anticipation of any "movement" of X/MIT-form licensors today.

In the end, I'm not sure how a review process could throw open its scope as Luis proposes---How do we feel about this new movement?---and also cherry pick which characteristics get considered, and which must be purged from consideration.  If you think applying a vague set of criteria like the Open Source Definition is hard, wait until you start asking for what is, in essence, an unbounded holistic impression of political opportunity.  As just one example, Luis mentions that for-profit status of the steward _shouldn't_ be a factor.  But he also repeats an argument based on fear of sales teams, as well as one called "rights ratchet" against companies tightening terms over time, which are for-profit phenomena.  Unless you count FSF moving its code from GPLv2 to v3.

## Other companies have sales teams, too.

The point on sales teams Luis mentions is one I [associate with Bradley Kuhn](http://www.ebb.org/bkuhn/blog/2020/01/06/copyleft-equality.html): companies that use copyleft licenses hire sales teams that run around telling lies about their licenses to scare people into buying exceptions.  I haven't seen this firsthand, but I have worked with many sales teams, and fully expect that it has.  I _have_ seen copyleft fearmongering live and in person, and more than once, from companies selling open source license compliance software and services.

Compliance-industrial complex aside, dual licensors aren't the only companies with sales teams.  Training and support companies have sales teams.  Warranty and indemnity companies have support teams.  Technical publishers have sales teams.  Integrators and consultants have sales teams.  Open Core companies have sales teams.  The incentives and culture of sales always push right up to, or over, the line.

Imagine, on a sales call:

>  Yes, the code is open source.  But you'd be crazy to rely on software in your business without someone standing behind it.  Open doesn't even have warranties!  Who's gonna cover you if you get sued?

>  Sure, you can try the community edition.  But that's really just a free trial.  The key functionality for robust enterprise use is only available under contract.

>  Yeah, you can send question on GitHub.  But the repository has hundreds of open issues, and our team's busy handling requests from support customers first.  That's the only real way to get guaranteed same-day help.

>  Sure, there's a couple guys out there selling our open source like it's their own.  But you can't be sure you're not letting in bugs, security holes, or even malware without our certified edition, under our brand.

Later, at the company's all-hands meeting:

>  We can't make that feature open source!  I closed three new accounts for it last week.  We show it off in every demo.

>  Why would we pay someone to document that process?  It's request number one at all our training fly-outs!

>  No, we shouldn't switch from our "hacker license" to one with a patent grant.  The difference in professionalism helps me sell the "upgrade" and get deals done.

Many of these bruise perception not just of a particular license or project, but of all open source.

The first and best antidote to misinformation about licenses isn't a strong movement ethos of disdain for the selling trade or scapegoating dual licensing companies.  It's in the licenses themselves.  Write terms that people can read and understand.  Keep them short.  When issues and uncertainties come up, address them in the text and publish new versions.

There are reasons---obvious reasons---that the GPLs and even some weak-copyleft forms, like the Eclipse Public License, yield so much confusion, anxiety, and avoidance.  If you hear some nonsense on a sales call, try to take a look at AGPLv3 for yourself, get lost and overwhelmed, turn to your company lawyer, and hear back, essentially, "what planet is this from?", you are dealing with a license that's let out a lot of slack for the salesman.  He is going to pull to the end of his chain.  If he bites you, he stands responsible, or should.  But the fact there are lying salesmen out there surprises literally no one.

We don't maintain good, secure software by blaming users for bugs, decrying hackers for vulns, staring askance at the consultancy business model, and sitting on our hands.  Licenses are text files, too.

I've seen far more FUD problems, and far more more awkward, project-specific guidance, when businesses adopt FSF licenses than when they write and maintain their own.  Even if FSF wanted to fix a "bug" for dual licensors, what's the process for that?  Hop on the next decade-long release train?

## Mongo was willing to revise its terms, too.

I can't say what Mongo's "really" thinking any more than all the folks currently doing that now.  I quit the OSI mailing list around the time Mongo did, and I'm not going back.

I do remember Mongo proposing a revision of SSPL during the process.  Here's section 13 with revisions marked:

> If you make the functionality of the Program or a modified version available to third parties as a service, you must make the Service Source Code available via network download to everyone at no charge, under the terms of this License <ins>or, solely with respect to any programs (other than the Program or a modified version) for which you do not have the right to make the Corresponding Source available under the terms of this License, under the terms of a license that has been approved by the Open Source Initiative or categorized by the Free Software Foundation as free</ins>.  Making the functionality of the Program or modified version available to third parties as a service includes, without limitation, enabling third parties to interact with the functionality of the Program or modified version remotely through a computer network, offering a service the value of which entirely or primarily derives from the value of the Program or modified version, or offering a service that accomplishes for users the primary purpose of the Program or modified version.
>
> "Service Source Code" means the Corresponding Source for the Program <ins>or a modified version, and the Corresponding Source for all programs (other than programs that are Major Components or System Libraries) that you use to make the Program or modified version available as a service, including, without limitation, management software, user interfaces, application program interfaces, automation software, monitoring software, backup software, and host orchestration</ins> software, all such that a user could run an instance of the service using the Service Source Code you make available.

I don't know why Mongo stayed at v1, rather than finalizing and adopting this as v2.  If someone has a reliable source on this, please [drop me a line](mailto:kyle@kemitchell.com).

As for the weight of version numbers, and especially "v1" as opposed to "0.1" or something like, it's all subjective.  [Parity](https://paritylicense.com) is at 7.0.0.  If I were writing a new license for a client that needed to apply it to a public project on a deadline, I'd tell them to call it 1.0.0, too.  Versions are cheap.  We don't do a press release for every numbered version anymore.

## Operating systems are just software.

The proposed v2 changes went to just Luis identifies as show-stopping:

> SSPL version 1, as submitted, would likely still have failed these tests.  In particular, the controversial language it used that could have extended even to an entire operating system would likely not have made it through any genuine community-based pre-OSI review process.

At the risk of ribbing my friend too hard, I'm not sure what "genuine" and "community-based" mean, other than that they sound good.  All I can really glean is that such a process would want to treat kernels as special, at least as far as copyleft goes.

Kernels aren't special.  And we are starting to see more of them.  [Fuschia/Zircon](https://en.wikipedia.org/wiki/Google_Fuchsia) is looming.  I've run across at least three indie projects in Rust.  I seem to recall one in Go, as well.  Low-resource, single-application kernels have been in production for years.  As tools and especially languages improve, I expect we'll see a far brisker trade in both kernels and building blocks of kernels, not just for embedded devices, but for server clusters, as well.

## In the wrong gear.

Talking about what does or doesn't count as "open source", as a definitional matter, remains an unhelpful dodge from the questions of what we actually want to accomplish with and within software, and whether enough others stand with us to matter.  Treating OSI as a singular grab-ball---who should decide, how it should decide, whether it should decide---only compounds the trouble of treating "open source" that way in the first place.  Talking about OSI _process_ is a little better more cuddly, constructive, and "community" feeling than talking about the Open Source Definition as a kind of technical specification.  But I don't think it resolves conflicts about use of "open source" any better.

The Open Source Initiative began with initiative: a small, self-appointed, vanguard conspiracy.  Not a democracy.  It stomped on the gas pedal, shifted into high gear, and stayed there.  It welcomed new companies, new licenses, new business models, the works.  They needed energy, moral support, and endorsements to reach viability.  They knew it.  If you were with them, you were in.  It was all very speculative.

The consensus, to the extent there was consensus, boiled down to a collective revelry in shared, forward momentum.  Nobody really wanted to stop, pull over, and fight about the details.  They were too busy fighting for press, industry mindshare industry, personal glory, "the revolution".

The Open Source Initiative, as distinct from many people actually making open source, is now stuck in park.  Its principal, self-assigned purpose is resisting any initiative from others vaguely within its domain.  Having slowed and stopped, it now stumbles over all the very real conflicts of ideology, practice, business, and activism that lay latent in the consensus of twenty years ago, when there was still something to win, rather than something to defend.  There's no longer enough forward momentum to roll right over them.
