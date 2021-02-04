---
title: Where are the Goalposts?
description: in response to Luis Villa on SSPL and OSI
brief: Responses and thoughts to Luis Villa's thoughts on SSPL and how to reform the OSI license-review process.
date: Wed 03 Feb 2021 11:25:14 PM PST
tags:
- Open Source
- SSPL
---

My friend and colleague Luis Villa published ["What I learned from the Server Side Public License"](https://blog.tidelift.com/what-i-learned-from-the-server-side-public-license) this morning.  As usual, Luis inspired a few thoughts, which I'll share here.

## Licenses are dead.  Long live licenses.

It took me a while to understand what Luis meant by "licenses are living documents".  In the end, I don't think he's actually saying anything about documents---licenses---at all.  Rather, he's proposing that the Open Source Initiative judge new _movements_ instead of new licenses, if the movements happen to produce license terms.  Licenses without movements would not be allowed.

Unless a license includes some kind of explicit self-updating mechanism, along the lines of "GPLv3 or later", the license text is fixed.  It's likely also versioned.  If the author takes it to an organization like OSI or SPDX, they'll "standardize" it as a fixed text, never to be changed again.  Later edits must bear later versions.

The thing about publication of fixed, versioned license texts is that they become reliable.  Which means they become reusable, outside the original context, without any involvement of the drafter.  You can use GPLv3 without fear that the Free Software Foundation will come along and "promote" your project to GPLv4 with a bunch of new terms you don't like, or publish an interpretation of GPLv3 that you don't agree with.  They can publish all the versions, [interpretive gloss](https://www.gnu.org/licenses/gpl-faq.html), and [movement-relevant "philosophy"](https://www.fsf.org/philosophy) they want.  None of it binds you as an independent licensor of your software.  You can use GPLv3 without joining FSF's movement.  You can use GPLv3 and build your own movement.

This decoupling is a feature, not a bug.  Licenses are tools, and they are discovered, picked up, and employed as such.  Even if a license has only been used by its author so far, drafting it generically then submitting for standardization or approval issues an invitation to others to use it, even if you don't care if they do or not.  I've yet to a see any meta license---terms for reuse of a license text---that restricts who can use it, or how.

We've seen several licenses, especially copyleft licenses, drafted for one set and picked up by another.  HURD did not make GPLv2 famous.  Linux did.  Linus repeatedly and openly differed with Stallman.  The distinct movement he represented continues today.  Affero's web apps did not lift AGPLv3 to prominence, either.  MongoDB did, spawning its own mini-movement of small companies licensing accordingly.  Yet we know now, thanks to SSPL, how little some of the folks involved in AGPLv3 think of Mongo.  Compare these stories to X, which did popularize its own license.  But it's hard to say they did so in anticipation of any "movement" of MIT-by-default licensors we see today.

Decoupling license use from license authorship enables new, sometimes wholly unexpected movements to "adopt" existing license terms.  It also gives movements without access to crack legal talent a chance to benefit from those who do.  When a new license shows up, with or without a preexisting constituency of users, it's impossible to know what movement or movements will pick it up.  Free and open source licensing history is littered with latecomers, turnabouts, and surprises.  Just like the history of free and open source software.

Even assuming one-to-one license relationships from the start, I'm not sure how a review process could throw open its scope as Luis proposes---How do we feel about this new movement?---and also cherry pick which characteristics get considered, and which must be expunged.  If you think applying a vague set of criteria like the Open Source Definition is conflict-prone, wait until you start asking for what is, in essence, an unbounded holistic impression of political viability and movement self-interest.  It reminds me a bit of "good fit" recruiting.  Just "listen to your gut", but ignore anything sexist, racist, &c.  Impossible.

As an example, Luis mentions that for-profit status of the steward _shouldn't_ be a factor.  But he also repeats an argument based on fear of go-fast sales teams, which only for-profits have.  He also mentions "rights ratchets"---licensors tightening terms over time---as a regrettable, intrinsically for-profit phenomenon.  But that's eliding FSF's moving from GPLv2 to v3---I imagine Tivo, Google, and Amazon could start a support group---as well as projects moving from permissive to ethically motivated terms, be they copyleft or restricted.

## Other companies have sales teams, too.

The point on sales teams Luis mentions is one I [associate with Bradley Kuhn](http://www.ebb.org/bkuhn/blog/2020/01/06/copyleft-equality.html): companies that use copyleft licenses hire sales teams that run around telling lies about their licenses to scare people into buying exceptions.  I haven't seen this firsthand, but I have worked with many sales teams, and can only assume it's occurred.  I _have_ seen copyleft fearmongering live and in person, more than once, from companies selling open source license compliance software and services.

Compliance-industrial complex aside, dual licensors aren't the only companies with sales teams.  Training and support companies have sales teams.  Warranty and indemnity companies have support teams.  Technical publishers have sales teams.  Integrators and consultants have sales teams.  Open Core companies have sales teams.  Wherever commission-based sales is a factor, incentives and the culture of sales always push right up to, or over, the lines.

Imagine, on a sales call:

>  Yes, the code is open source.  But you'd be crazy to rely on software in your business without someone standing behind it.  Open doesn't even have warranties!  Who's gonna cover you if you get sued?

>  Sure, you can try the community edition.  But that's really just a free trial.  The key functionality for robust enterprise use is only available under contract.

>  Yeah, you can send question on GitHub.  But the repository has hundreds of open issues, and our team's busy handling requests from support customers first.  That's the only real way to get guaranteed same-day help.

>  Sure, there's a couple guys out there selling our open source like it's their own.  But you can't be sure you're not letting in bugs, security holes, or even malware without our certified edition, under our brand.

Later, at the company's all-hands meeting:

>  We can't make that feature open source!  I closed three new accounts for it last week.  We show it off in every demo.

>  Why would we pay someone to document that process?  It's request number one at all our training fly-outs!

>  No, we shouldn't switch from our "hacker license" to one with a patent grant.  The difference in professionalism helps me sell the "upgrade" and get deals done.

Many of these bruise not just a particular license or project, but all of open source generally.

The first and best antidote to misinformation about licenses isn't a strong movement ethos of disdain for the selling trade or scapegoating dual licensing companies.  It's better licenses.  Write terms that people can read and understand for themselves.  Keep them short.  When issues and uncertainties come up, make changes and publish new versions.

There are reasons---obvious reasons---that the GPLs, EPLs, and the like yield so much confusion, anxiety, and retreat.  If you hear some nonsense on a sales call, try to take a look at AGPLv3 for yourself, get lost and overwhelmed, turn to your company lawyer, and hear back, essentially, "what planet is this from, and do they have lawyers there?", you are dealing with a license that lets out a lot of slack.  The salesman is going to pull to the end of that chain.  If he bites you, he should stand responsible.  But the fact there are aggressive salespeople out there telling lies should surprise exactly no one.

We don't maintain good, secure software by blaming users for bugs they find, decrying hackers for vulnerabilities they discover, staring askance at the consultancy business model, and sitting on our hands.  Licenses are text files, too.  Legal terms _aren't_ code, but many code tools, techniques, and processes apply to them.  Or should.

Partly for this reason, I've seen far more fear, uncertainty, and doubt problems, and far more more awkward, project-specific guidance, when businesses adopt FSF licenses than when they write and maintain their own.  Even if FSF wanted to fix a "bug" for dual licensors, what's the process for that?  Hop on the next decade-long release train?

Mongo never got the license it wanted from FSF, even when it was the banner user of AGPL.  It always [waived copyleft](https://www.mongodb.com/blog/post/the-agpl) against applications using Mongo as database, essentially turning AGPLv3 into a nonexistent LAGPLv3. [It continues to say the same about SSPL now](https://www.mongodb.com/licensing/server-side-public-license/faq), apparently by rote.  [So now Elastic's doing it, too.](https://www.elastic.co/pricing/faq/licensing#i-build-a-saas-application-using-elasticsearch-as-the-backend-how-does-this-affect-me)

## Mongo was willing to revise its terms.

I can't say what Mongo's "really" thinking any more than all the folks currently doing exactly that on social media right now.  I quit the OSI mailing list around the time Mongo did, and I'm not going back.

I do remember Mongo proposing at least three revisions of SSPL during the process.  Here's the last version of section 13 I recall seeing, with some more whitespace for easier reading:

> For the purposes of this section 13, offering "Software As A Service" means enabling a user to interact with software remotely through a computer network.
>
> If you use the Program or a modified version in offering to third parties Software As A Service and:
>
> - (a) the primary purpose or features of such Software As A Service is the same as or substantially similar to that of the Program or modified version, or
>
> - (b) the value of the software component of such Software As A Service is primarily derived from the Program or modified version,
>
> then you must make the Service Source Code available via network download to everyone at no charge, under the terms of this License or, solely with respect to any programs (other than the Program or a modified version) for which you do not have the right to make the Corresponding Source available under the terms of this License, under the terms of a license that has been approved by the Open Source Initiative or categorized by the Free Software Foundation as free.
>
> "Service Source Code" means the Corresponding Source for the Program or a modified version, and the Corresponding Source for all programs (other than programs that are Major Components or System Libraries) that you use to make the Program or modified version available as a service, including, without limitation, management software, user interfaces, application program interfaces, automation software, monitoring software, backup software, and host orchestration software, all such that a user could run an instance of the service using the Service Source Code you make available.

I don't know why Mongo kept its software at v1, rather than finalizing and adopting this later language.  I could come up with some guesses, but that's more dangerous than helpful.  If someone has a reliable source on this, please [drop me a line](mailto:kyle@kemitchell.com).

As for the weight of version numbers, and especially whether "v1" as opposed to "0.1" or something like it indicated an unwillingness to engage and revise with feedback, it's all subjective.  [Parity](https://paritylicense.com) is at 7.0.0.  There were many versions of the License Zero Reciprocal Public License before it.  Because I come from a development community, JavaScript, that embraced Semantic Versioning and rapid release.  Based on a quick look at their GitHub repo, MongoDB also uses three-component, semantic-style version numbers, and has tagged more than ten new ones in the last month.

If I were writing a new license for a client that needed to apply it to a public project on a deadline, with plans for future revision, I'd tell them to call it 1.0.0, too.  The license is going "into production".  Version bumps are cheap.  We don't all do a press release, an analyst call, and a gold-master crunch for every numbered version of every kind of software anymore.

Just another miscommunication.

## Operating systems are just software.

The proposed changes to section 13 that Mongo submitted went to just the point Luis identifies as show-stopping:

> SSPL version 1, as submitted, would likely still have failed these tests.  In particular, the controversial language it used that could have extended even to an entire operating system would likely not have made it through any genuine community-based pre-OSI review process.

At the risk of ribbing my friend too hard, I'm not sure what "genuine" and "community-based" mean, other than that they sound good.  All I can really glean is that such a process would want to treat kernels as special, at least as far as copyleft goes.

Kernels aren't special.  And we are starting to see more of them.  [Fuschia/Zircon](https://en.wikipedia.org/wiki/Google_Fuchsia) is looming.  I've run across at least three indie projects in Rust.  I seem to recall one in Go, as well.  Low-resource, single-application kernels have been in production for years, and are really coming into their own as a way to slim down large cloud clusters.  As tools and especially languages improve, I expect we'll see a far brisker trade in both kernels and building blocks of kernels, not just for embedded devices, but for servers, as well.  Just as we're seeing more modularization and reuse in compiler development.

It's just software.

Still, the changes Mongo proposed, especially the bits about ability to license, went specifically to concerns that compliance would be impossible, because everybody runs Linux, and Linux is under GPLv2 and mess of other licenses, not SSPL.  They strongly parallel the approach to copyleft that I advanced in [Parity](https://paritylicense.com/versions/7.0.0#contribute), which I also brought over into what became [Round Robin](https://roundrobinlicense.com/1.0.0#contribute), a project to write an SSPL-esque, LAGPLv4-esque license from a clean slate, without GPL baggage.  Basically:  Make sure all the code is open.  If the license is up to you, use this one.  If it's not, make sure it's one we can use.

For what it's worth, Mongo's SSPLv3 proposal and Round Robin also converged on [how to draw the line between applications and service offerings](https://roundrobinlicense.com/1.0.0#applications).  The "open" process I was running [on GitHub](https://github.com/kemitchell/api-copyleft-license), with great outside feedback, and whatever process was producing Mongo's proposed revisions, largely pointed in the same direction.

## In the wrong gear.

These points are all rather specific, but it's dangerous to focus on them too much alone.  In what context is all this helpful?  Is this even helpful?  I fear that it is not.

Talking about what does or doesn't count as "open source", as a definitional matter, remains an unhelpful dodge from the questions that really matter.  What do we actually want to accomplish with and within software?  Are enough other people, and enough inputs, available to us to accomplish any of those things?

Treating OSI as a singular grab-ball---who should decide, how it should decide, whether it should decide---only compounds the trouble of treating "open source" as a singular grab-ball.  It's like trying to convene a committee to award the [Apple of Discord](https://en.wikipedia.org/wiki/Apple_of_Discord).  Within that project, talking about OSI _process_ is a bit more cuddly, constructive, and "community" feeling than talking about the Open Source Definition as a freestanding technical specification, like Hammurabi's Code carved in stone.  But I don't think it resolves the root problem.  Why will folks with new licenses want to go to OSI?  What will they get for the trouble?

The Open Source Initiative began with real initiative, as a small, self-appointed vanguard looking to pull of a marketing coup d'etat, not a democracy.  It stomped on the gas pedal, shifted into high gear, and stayed there for five years, past all the lockup periods.  It welcomed new companies, new licenses, new business models, because it needed energy, moral support, and endorsements to reach viability.  The people involved knew that.  It was all very speculative and tenuous to start.  If you were with them, you were in.  There wasn't time to indulge in dogmatic, niggling disputations.

That's gone now.  Today's stance is entirely defensive, a kind of anti-initiative.  As a group, it's hostile to new licensing approaches, or even unearthing of of old licensing approaches, that might achieve the goals, marketing coup aside, that "open source" claimed to stand for.  In short: open source has serious unfinished business.  But the business of the Open Source Initiative has been, at best, faithfully obstructing anything that might disturb a certain status quo.

As such, it's aligned, most naturally, with those who benefit from open source as a phenomenon in itself---companies positioned to profit most from free code, developers promoted as open source gurus, professionals hired to run open source offices and advise on issues---rather than with using open source to shape and correct the industry, rather than merely subsidizing it.  I know those temptations, because I feel them every day.  It takes ridiculous discipline to avoid falling in with it too often.  Like correcting anyone who tries to call me "open source lawyer", even though they all do it behind my back.

OSI isn't in top gear anymore.  It's in slow reverse.  Without the old momentum or a new coup to pull off, it's feeling the tooth-rattling jar of every subtle difference of opinion, every methodological dispute, every activist conflict, like the bumps on a highway you use to drive home, when a lane is closed and traffic is crawling.

If you want consensus, keep your headcount small.  If you want big unity, announce a big goal big numbers can rally behind.  Either way, if you succeed, you won't have time to argue the methodological meta, like whether to revise a definition or how to make a process feel participatory.  You'll be too busy for that.
