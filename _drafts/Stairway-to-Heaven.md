---
title: Stairway to License Heaven
description: missing some steps
layout: post
tags:
- Licensing
- Business Planning
- Open Source
---

I've had a lot of the same client conversation over the past few years.  It goes something like this:

> --- So let's move on to the licensing strategy.
>
> --- Sure.
>
> --- I had a productive call with your engineer, who gave me a tour of the repositories, open and closed, plus a bit of the business background.  I _do_ see some natural boundaries in the code where we can draw clear lines between completely open and less open code, so your customers and competitors will understand.
>
> --- Great.
>
> --- So that leads us to the interesting part: what the license for the less-open parts should say.
>
> --- Do you have any guidance you can give there?
>
> --- Of course.  And again, thanks to that call with your engineer.  But before we get into where I think you're headed, I'd like to take just one small step back, to cover a ground rule that you should be aware of, if you're not already.
>
> --- Okay.
>
> --- In a nutshell, licensing software to the public is a ratchet.  It's pretty easy to go _up_, to give _more_ permission for software that you've already released.  That's well understood, and usually well received.  But it's very hard, maybe even legally impossible, to take back permission you've already given away.  It's hard to go back and make public license terms for old software _more_ restrictive.
>
> --- So it's easy to give more away, but not to take it back?
>
> --- For old work, yes.  There's one major exception we might run into, which is that it's often possible to "fork" your own work, and apply a new, more restrictive license to new work going forward.  But that new license applies _only_ to the new work.
>
> --- So you can restrict going forward, but can't go back and restrict work you've already released?
>
> --- That's the general rule.  Which is why many companies prefer to let the rope out a little bit at a time.  They'll test the waters with a relatively tight license, and loosen it up over time, as they get a better sense of how folks receive their terms, how they understand the breakdown between fully open and partly open code, the marketing effect that has, and what kind of contribution back they can expect.  Basically, as they gain confidence that they haven't overstepped, and want more benefits of openness, they move forward one step at a time.
>
> --- It sounds like you're telling me to pick the most restrictive license I can, at least to start.
>
> --- Not quite.  We need to balance that conservatism with what you already know about your customers, competitors, and potential contributors.  There are some serious advantages to opening up more, and we may be able to skip some steps.  For example, you may already know enough about your business situation to know that an "open source" license, with all those marketing benefits, would actually bring contributors in without handing your competitors a windfall.  If you have that confidence, there's no reason to wait.  Since it's still early days for the company, we don't want to close you off from contributors and outside interest unnecessarily.  You probably don't know who all is going to be interested in what you're doing, why, or the best way to sell to them.
>
> --- That's right.  And we've had a few happy surprises already, or least signs that way.  But so far everything points to the business model we've discussed.
>
> --- Perfect.  That can guide us.
>
> --- OK.
>
> --- First things first, we should cover a few basics.  I take it you're willing to let folks make copies of your work, and share it around freely.  In other words, we're concerned about what they'll do with the code, and whether they'll make any changes, not about having our code online, potentially in more places than just our "official" repo.
>
> --- That's right.
>
> --- Good.  From there, I should ask you directly:  What _don't_ we want others to be able to do with this code?  Can you give it to me as a "thou shalt not"?

The client gives me their rule, usually in terms of behavior that would compete with their paid offerings or otherwise reduce the need for their services.  Sometimes we end up with a few "commandments".  Sometimes just one.

> --- Alright.  That's a good start.  Now let's think about the _other_ things folks will want to do with this code, whether they're potential customers or won't ever pay us a cent, but might help out with bugs or development.  Do those things require making changes to our code?

We work through permission to make changes.

Sometimes we decide that the first step is a highly restrictive license that permits only one particular kind of use.  Other clients are more confident in the strategic effect they want, and willing to license for general use with specific no-nos.  

Whether the client allows modifications, and sharing of modifications, is more of an implementation detail.  It depends on whether the kind of software they've written and the kinds of uses they want to allow for free inevitably involve changes, or just use as provided.  If changes are part of use, we work through what those changes look like, and whether we want do set different rules about changes, extensions, and work built on top, like programs using a library.

At that point, I have enough to write a license, and eventually to PR changes to `LICENSE`, `README`, and other parts of the repo that communicate what code the new terms apply to.

Once those PRs merge, it's usually a little while before the client comes back to me  for new advice on how to evolve their strategy.  In the meantime, to make sure they have a framework for checking whether it's time to reconsider, and where that might go, I typically send them an e-mail laying out what the next choice might look like.

Those e-mails are really tailored to the client.  By then I have a pretty good sense of what the code does---I've usually set it up and run it for at least one toy example, on my own---as well as how my client contact sees the business side of things.  But that tailoring obscures what is really a pretty well defined staircase:

1. If they're on a strict proprietary license that's essentially read-only, consider stepping up to one that allows sharing.
2. If they're on a proprietary license that allows sharing, consider stepping up to one that whitelists, or permits, specific use cases.
3. If they're on a restricted license that whitelists specific use cases, consider one that blacklists, or prohibits, specific use cases, instead, and allows all others.
4. If they're on a blacklist restricted license, consider a consistent copyleft license that either explicitly or practically requires code back for blacklisted uses.
5. If they're on a consistent copyleft license, consider a selective one, often based on a past blacklist or whitelist of use cases.
6. Consider going full-permissive, and relying on other exclusive rights and advantages to make money.

Progression from one step up to the next isn't always straightforward.  There are a few big "jumps": allowing sharing, often called "distribution", allowing changes, often called "derivative works", "modifications", or "extensions", and moving from restriction, which says "thou shalt not", to copyleft, which says "if you do, share your work alike".  Each of those jumps corresponds to substantial risks and rewards, in the form of unexpected contributions, a positive, and unexpected use by competitors, typically a negative.  Each represents a calculated wager on the part of the company, with crown jewels on the line.

Marching up the license staircase toward openness isn't a new phenomenon.  When we look back at old, lesser-known licenses, from restricted terms like [Aladdin](<https://spdx.org/licenses/Aladdin.html) to strong-copyleft forms like [RPL](https://spdx.org/licenses/RPL-1.5.html) and [QPL](<https://spdx.org/licenses/QPL-1.0.html) to clones of better known forms, like [Sleepycat](https://spdx.org/licenses/Sleepycat.html), open source history is littered with stair-step licenses that companies climbed toward more permissivity, over time.  Ghostscript stepped up from Aladdin to GPL.  Qt stepped up from QPL to GPL.

Everything about business is in a hurry to call itself "lean".  But Ries' book came out in 2011, well after many of these licenses.  What we're exploring here isn't any kind of special, newfangled business approach.  It's business as usual.  Take a gamble on what you think will succeed.  Test the market, and as you develop relationships, information, and a better situational awareness of your business environment---and convince employees, advisors, and investors to see the world as you do---you can take steps that would have looked bold or foolish three steps back.

The fact that so many companies, and so many founded by folks who really want to be working 100% permissive open source, end up asking me to write new restricted and copyleft forms, testifies to how rickety and incomplete the stairway to software licensing Heaven has become.  We are missing more than a few steps from EULA to [Blue Oak](https://blueoakcouncil.org/license/1.0.0).  As a result, companies unwilling to skip steps or take a leap get stuck more closed than they'd like to be, even if their faith in openness is very strong.  Managers at these clients often know the kind of open source success they want to emulate.  But they don't have good, standardized license support for each step along the way, in current business conditions.