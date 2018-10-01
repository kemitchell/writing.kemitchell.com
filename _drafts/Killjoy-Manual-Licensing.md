---
title: Direct Licensing
layout: post
tags:
- Killjoy
- Licensing
---

This is a post in a series, [_Killjoy_](/series/Killjoy.html), in which I examine unorthodox, unwelcome solutions to nagging open source problems.

---

Flying blind, wondering how many folks use your software?  Want a roster of users, as a lifeline for support?  Looking to turn your open source work into employment at a company in the field, but don't know which one?  Want to sell licenses, rather than give them away?

Delete your `LICENSE` file, and replace it with a note about how to get in touch with you for a license, via the Internet.  Perhaps your e-mail address.  Perhaps a link to a web store.  When folks get in touch, offer them licenses on whatever terms you please, directly.  For sale.  For free.  Whatever works for you and your project.

You don't have to get licensing right, at the very beginning, for everyone and all time.  Communication is easy, cheap, and free.  Use it.

## By Value

One of the great innovations in open source licensing is putting public license terms in plain-text files that follow the software around.  Putting license terms in files like `LICENSE`, right next to `README` and `main.c`.  Piggybacking license distribution on software distribution.

This practice goes back to software distributions on physical media, like tape drives.  Wherever the software went, so went a copy of its license terms.  Software on the tape drive, license on the tape drive.  Software on diskette, license on diskette.  Software on CD, license on CD.  Software in the tarball, license in the tarball.

The license terms, in turn, required any new copies, binary or source, to retain the license terms.  As long as everyone followed those rules, if you got the software, you would get the license terms.  Even if your copy was a tarball copy of a USB drive copy of a CD copy.  Even if someone else had long since ripped the shrinkwrap off the CD.

This practical innovation in license distribution paralleled a legal innovation in license granting: _direct licensing_.  All common open source licenses work by direct licensing, most of them by direct licensing only.

Say Dana releases open source software, and Alice downloads it and gives a copy to Bob.  Alice doesn't give Bob a license, legally speaking.  She doesn't _sublicense_ Bob.  Rather, Alice gives Bob a copy of Dana's license terms.  Those terms say that Dana gives Bob his license directly.  That way, legally, if Alice's license terminates for some reason, Bob's license won't be affected.  Licensing-wise, from Bob's point of view, Alice isn't involved.  Bob's license doesn't depend on Alice's.

Taken together, distributing license terms with software and using license terms that applied the same to everyone, regardless of how they got their copy, allowed software to travel freely.  As a user, you end up with software, terms, and a license that doesn't depend on how you got your copy.

## By Reference

That's a lot of copies.  But thanks to computers, copies were cheap.

Now we have the Internet.  The Internet lets us replace copies of things with addresses of things.  Like license terms.  We see this in dependency manifest files that summon tarballs from well known package registries and source repository hosts.  We see this in instructions for using licenses, like [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0#apply):

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

We can replace notice that you have a license with a link, as well.

```
For information about licenses for this software,
contact John Smith at john.smith@example.com.
```

Without a license from you, many folks can't legally use your software at all. Using your software without a license means risking a lawsuit for copyright infringement. Those that care about lawsuits for copyright infringement---those worth suing in the first place---have an incentive to reach out to you.

Notice that just reaching out to you gives you information about adoption and users that you wouldn't otherwise have, offering your work under traditional open source terms like MIT, BSD, or GPL. Those licenses work fine for ensuring that users get copies, terms, and direct licenses. But they don't do anything about informing you, the developer. As a consequence, developers offering projects under these licenses can succeed, in the sense of having their work adopted, without you ever knowing it. They can succeed without knowing who, exactly, has adopted their work.

Internet communication solves that problem.  And solves it cheap.

## Freebies

If you find yourself sending out a lot of free licenses, for folks and uses you want to support, edit your license file.  Put terms in `LICENSE` that give free licenses to those you want to use for free, those you're tired of giving free licenses.  For everyone else, retain the link or e-mail address for requesting licenses.

Congratulations, you are now implementing dual-licensing: one of the oldest, most successful open software business models.

## Vending Machine

If you find yourself tiring of selling licenses for users who _don't_ fall within your public `LICENSE` terms, automate that process.

With a few more tricks---namely, cryptographic signatures---you're looking at [License Zero](https://licensezero.com).  License Zero provides a couple public `LICENSE` options, with terms that won't satisfy all users.  For those not covered by `LICENSE`, [licensezero.com](https://licensezero.com) vends licenses automatically, like a [vending machine](https://licensezero.com/vending-machine.svg).  License Zero projects include metadata, piggybacking on distribution for the software, that point to that vending machine.  Software can read that metadata, and set you up to buy the license you need.
