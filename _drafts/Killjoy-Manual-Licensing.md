---
title: Direct Licensing
layout: post
tags:
- Killjoy
- Licensing
---

This is a post in a series, [_Killjoy_](/series/Killjoy.html), in which I examine unorthodox, unwelcome solutions to nagging open source problems.

---

Flying blind, wondering how many folks use your software?  Want a roster of users, as a lifeline for support?  Looking to turn your open source work into employment at a company in the field, but don't know which one?  Want to sell licenses to enormous corporations, rather than give them away?

Delete your `LICENSE` file, and replace it with a note about how to get in touch with you for a license, via the Internet.  Perhaps your e-mail address.  Perhaps a link to a web store.  When folks get in touch, offer them licenses on whatever terms you please, directly.  For sale.  For free.  Whatever works for you and your project.

You don't have to get licensing right, at the very beginning, for everyone, for all time.  Communication is easy, cheap, and free.  Use it.

## By Value

One of the great innovations in open source licensing is putting public license terms in plain-text files that follow the software around.  Into files like `LICENSE`, right next to `README` and `main.c`.  Piggybacking license distribution on software distribution.

This practice goes back to software distributions on physical media, like tape drives.  Wherever the software went, so went a copy of its license terms.  Software on the tape drive, license on the tape drive.  Software on diskette, license on diskette.  Software on CD, license on CD.  Software in the tarball, license in the tarball.

The license terms, in turn, required any new copies, binary or source, to retain the license terms.  As long as everyone followed those rules, if you got the software, you would get the license terms.  Even if your copy was a tarball copy of a USB drive copy of a CD copy.  Even if someone else had long since ripped the shrinkwrap off the CD.

This practical innovation in license distribution paralleled a legal innovation in license granting: direct licensing.  All common open source licenses work by direct licensing, most of them by direct licensing only.

Say Dana releases open source software, and Alice downloads it and gives a copy to Bob.  Alice doesn't give Bob a license, legally speaking.  She doesn't _sublicense_ Bob.  Rather, Alice gives Bob a copy of Dana's license terms.  Those terms say that Dana gives Bob his license directly.  That way, legally, if Alice's license terminates for some reason, Bob's license won't be affected.  Licensing-wise, from Bob's point of view, Alice isn't involved.  Bob's license doesn't depend on Alice's.

Taken together, distributing license terms with software and using license terms that applied the same to everyone, regardless of how they got their copy, allowed software to travel freely.  As a user, you end up with software, terms, and a license that doesn't depend on how you got your copy.

## By Reference

That's a lot of copies.  But thanks to computers, copies were cheap.

Now we have the Internet.  The Internet lets us replace copies with addresses.  Like license terms.

We see this in dependency manifest files that summon tarballs from well known package registries and source repository hosts.  Instead of copying our dependencies, we copy their addresses.  And we see this in instructions for using licenses, like [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0#apply):

> To apply the Apache License to your work, attach the following boilerplate notice....
>
> > Copyright \[yyyy\] \[name of copyright owner\]
> >
> > Licensed under the Apache License, Version 2.0 (the "License");
> > you may not use this file except in compliance with the License.
> > You may obtain a copy of the License at
> >
> > <http://www.apache.org/licenses/LICENSE-2.0>
> >
> > ...

When a developer follows these instructions, and includes a link to the Apache license, rather than a copy of it, it becomes possible to receive a copy of software, with notice that the software comes with a license, but without a copy of the license terms.  Fortunately, the terms are but one quick Web request away.  You know you _have_ a license.  But you don't necessarily know what it says until you click the link.

We can replace copies of software with addresses.  And we can replace copies of legal terms with addresses.  What about copies of text that gives users licenses?

We can replace notice that you have a license with a link, as well:

```
For information about licenses for this software,
visit https://example.com/licenses
```

Or even:

```
For information about licenses for this software,
contact John Smith at john.smith@example.com.
```

Without a license from you, many folks can't use your software. Using your software without a license means risking a lawsuit for copyright infringement, and that's a risk they or their boss don't want to take. Those that care about lawsuits for copyright infringement---those worth suing in the first place---have an incentive to reach out to you.  At that point, you can respond however you please.

Notice that just reaching out to you gives you information about adoption and users that you wouldn't otherwise have, offering your work under traditional open source terms like MIT, BSD, or GPL. Those licenses work fine for ensuring that users get copies, terms, and direct licenses. But they don't do anything about informing you, the developer. As a consequence, developers offering projects under these licenses can succeed, in the sense of having their work adopted, without you ever knowing it. They can succeed without knowing who, exactly, has adopted their work.

Note that this does involve an extra step, beyond what's required for using open source under a license your company has already approved.  But the actual cost of that extra step has never been faster, easier, cheaper, or more convenient.  In fact, we can use software to make it faster, easier, cheaper, and more convenient still.

Internet communication makes all of this possible.  We don't need to send copies around all the time.  When someone gets a hold of your software, they likely do so online.  Being online, they can get in direct contact with you.  And in fact we see that today, in the form of issues (and even pull requests) about licensing of projects that don't have license metadata or `LICENSE` files.

## Freebies

Stripping your project of license information trades user convenience for developer control.  Once you are in control, you have all kinds of options.  Not just right now, but over time.

Say you find yourself sending out a lot of free licenses, for folks and uses you want to support, edit your license file.  You've developed some experience in telling who you'll license for free, and why, and some confidence in those generalizations.  Put terms in `LICENSE` that give free licenses to those you want to use for free, those you're tired of giving free licenses.  For everyone else, retain the link or e-mail address for requesting licenses.  This creates convenience for both sides---you and potential users who come under your free licensing rule---without giving away more license than you're confident you should.  In essence, you are now implementing dual-licensing: one of the oldest, most successful open software business models.

## Takeoff

From there, you could go a few ways.

On one hand, you might automate the process of selling licenses to those who don't qualify for a free license, under your terms.  With a few more tricks---namely, cryptographic signatures---you're looking at [License Zero](https://licensezero.com).

On the other hand, you might decide that you either don't need support from your users, or can get the support you need in another way than licensing.  At that point, you might choose to apply an open source license---copyleft or permissive---to your project work, past, future, or both.  Giving _everyone_ free license permission might create more opportunity of the kind you're now ready to handle---hosting business, service or support contracts, paid feature development, nonfree add-ons, and so on---as a loss leader.  But now that loss isn't just a loss.  It actually leads to something you've built by licensing directly, communicating with users who value your work, and evolving your license approach with your project.
