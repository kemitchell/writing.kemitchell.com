---
title: Stairway to License Heaven
description: missing some steps
layout: post
tags:
- Licensing
- Business Planning
- Open Source
---

I've had a lot of the same client conversation over the past few years.  It goes something like this.

> --- So let's move on to the licensing strategy.
>
> --- Sure.
>
> --- I've had a look at your code, and a productive call with your engineer, who gave me a tour of the repositories, open and closed, plus a bit of the business background and outlook.  I _do_ see some natural boundaries in the code that give us a good opportunity to draw a clear boundary between completely open and less open code so your customers and competitors will understand.
>
> --- Great.
>
> --- So that leads us to the interesting part, what the license for the less-open parts should say.
>
> --- Do you have any guidance you can give there?
>
> --- Of course.  And again, thanks to that call with your engineer.  But before we get into where I think you're headed, I'd like to take just one small step back, to cover a ground rule that you should be aware of, if you're not already.
>
> --- That's fine.
>
> --- In a nutshell, licensing software to the public is a ratchet.  It's pretty easy to go _up_, to give _more_ permission for software that you've already released.  That's well understood, and usually well received.  But it's very hard, maybe even legally impossible in many cases, to take permission you've already given away back from the world.  In other words, it's hard to go back and make public license terms for old software _more_ restrictive.
>
> --- So it's easy to give more away, but not to take it back?
>
> --- For old work, generally yes.  There's one major exception we might run into, which is that it's often possible to "fork" your own work under an old license, and apply a new, more restrictive license to new work you do going forward.  But that new license applies _only_ to the new work.
>
> --- So you can restrict more going forward, but can't go back and restrict work you've already released?
>
> --- That's the general rule.  Which is why many companies, several client I've had included, generally prefer to let the rope out a little bit at a time.  At least to start, they'll test the waters with a relatively tight license, and loosen it up over time.  Typically as they get a better sense of how folks receive their terms, how they understand the breakdown between fully open and partly open code, the marketing effect that has, and what kind of contribution back they can expect going forward.  Basically, as they gain confidence that they haven't overstepped, and want more of those openness benefits, the move forward a bit at a time.
>
> --- It sounds like you're telling me to pick the most restrictive license I can, at least to start.
>
> --- Almost.  We need to balance that conservatism with what you already know about your customers, competitors, and potential contributors.  There are some serious advantages to opening up more, and we may be able to skip some steps.  For example, you may already know enough about your business situation to know that a license most folks see as "open source" would actually work to bring contributors in and keep contributors out.  If you have that confidence now, there's no reason to push the benefits off to later.  In a similar vein, since it's still early days for the company, we don't want to close you off from contributors and outside interest unnecessarily ... or throw you wide open to competition you don't see coming yet.  You probably don't know who all is going to be interested in what you're doing, why, or the best way to sell to them.
>
> --- That's right.  And we've had a few happy surprises already, or least signs that way.  But so far everything points to the business model we've discussed.
>
> --- Perfect.  That can guide our discussion.
>
> --- OK.
>
> --- First things first, we should cover a few basic items.  I take it that you're willing to let folks make copies of your work, and share it around freely.  In other words, we're concerned about what they'll do with the code, and whether they'll make any changes, rather than having the code online, potentially in more places than just our "official" repo?
>
> --- Yes.
>
> --- Good.  From there, I should ask you directly:  What _don't_ we want others to be able to do with this code?  Can you give it to me as a "thou shalt not".

The client gives me their rule, usually in terms of behavior that would compete with their paid offerings or otherwise reduce the need for their offerings.

> --- Alright.  That's a good start.  Now let's think about the _other_ things folks will want to do with this code, whether they're potential customers or won't ever pay us a cent, but might help out with bugs or development.  Do those things require making changes to our code?

We work through permission to make changes.

Sometimes we decide that the first step is a highly restrictive license that permits only one particular kind of use.  Other clients are more confident in the strategic effect they way, and are willing to license for general use, with specific no-nos.  Whether the client allows modifications, and sharing of modifications, is more of a details question.  It depends on whether the kind of software they've written and the kinds of uses they want to allow for free involve changes.  If so, we work through whether those look like changes to the licensed code, like patches, or new work on top of it, like programs using a library or framework.

Typically it's a little while before these clients come back to me specifically for new advice on how to evolve their strategy.  In the meantime, to make sure they have a framework for checking whether it's time to reconsider, and where that might go, I typically send them an e-mail laying out what the next choice might look like.

Those e-mails are really tailored to the client.  By then I have a pretty good sense of what the code does---and I've usually set it up and run it for at least one toy example, for myself---and how my client contact sees the business side of things.  But those details obscure what is really a pretty well defined stairwell of choices:

1. If they're on a strict proprietary license that's essentially read-only, consider one that allows sharing.
2. If they're on a proprietary license that allows sharing, consider one that whitelists, or permits, specific use cases.
3. If they're on a restricted license that whitelists specific use cases, consider one that blacklists, or prohibits, specific use cases, instead, and allows all others.
4. If they're on a blacklist restricted license, consider a consistent copyleft license that either explicitly or practically requires code back for blacklisted uses.
5. If they're on a consistent copyleft license, consider a selective one, often based on a past blacklist or whitelist of use cases.
6. Consider going full-permissive, and relying on other exclusive rights and advantages to make money.

Progression from one step up to the other isn't always straightforward.  There are a few big "jumps" running through these choices: allowing sharing, often called "distribution", allowing changes, often called "derivative works", "modifications", or "extensions", and moving from restriction, which says "thou shalt not", to copyleft, which says "if you do, share your work alike".  Each of those jumps corresponds to substantial risks and rewards.  Each represents a calculated wager on the part of the company, with crown jewels on the line.

Marching up the license ladder toward openness isn't a new phenomenon.  When we look back at old, lesser-known licenses, from restricted terms like [Aladdin](<https://spdx.org/licenses/Aladdin.html) to strong-copyleft forms like [RPL](https://spdx.org/licenses/RPL-1.5.html) and [QPL](<https://spdx.org/licenses/QPL-1.0.html) to clones of better known forms, like [Sleepycat](https://spdx.org/licenses/Sleepycat.html), open source history is covered in stair-step licenses that companies climbed toward more permissivity, over time.

It seems that everything about business is in a hurry to call itself "lean".  But Ries' book came out in 2011, well after many of these forms.  What we're exploring here isn't any kind of special, newfangled kind of business.  It's just business as usual.  Take a gamble on what you think will succeed.  As you develop relationships, information, and a better situational awareness of your business environment---and convince employees, advisors, and investors to see the world as you do---you take steps that would have looked bolder and bolder, when you just started out.

The fact that so many companies, and so many companies founded by people who really want to be working 100% open source, end up asking me to write new restricted and copyleft forms, testifies to how rickety and incomplete the stairway to software licensing Heaven has become over time.  We are missing more than a few steps from proprietary to [Blue Oak](https://blueoakcouncil.org/license/1.0.0).  As a result, companies unwilling to skip steps or take a leap get stuck restricting more than they'd like, even if their faith in openness is very strong.  Managers at these clients often know the kind of open source success they want to emulate.  But they don't see how to get there, in current business conditions.