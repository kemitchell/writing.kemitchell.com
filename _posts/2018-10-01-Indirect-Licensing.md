---
title: Indirect Licensing
description: dispensing software licenses in the Internet era
layout: post
series: Killjoy
tags:
- Open Source
- Licensing
---

Flying blind, wondering how much your software's used?  Want a roster of users, as a lifeline, for material support?  Looking to turn your open source work into employment at a company in the field, but don't know which one?  Want to sell licenses to enormous corporations, rather than give them away?

Create a `LICENSE` file for your new project, and write a note about how to get in touch with you for a license, via the Internet.  Perhaps your e-mail address.  Perhaps a link to a web store.  When folks get in touch, offer them licenses on whatever terms you please, for sale or for free, one by one.  Whatever works for you and your project.

You don't have to get licensing right for everyone and all time at the very beginning.  Communication is easy, cheap, and free.  Use it.

## By Value

One of the great innovations in open source licensing was putting public license terms in plain-text files that follow the software around.  Into files like `LICENSE`, right next to `README` and `main.c`.  Piggybacking license distribution on software distribution.

This practice goes back to software distributions on physical media, like tape drives.  Wherever the software went, so went a copy of its license terms.  Copies of license terms on paper tended to get lost, as copies got passed around.  But copies of license terms _on the medium_ faired much better.  Software on the tape drive, license on the tape drive.  Software on diskette, license on diskette.  Software on CD, license on CD.  Software in the tarball, license in the tarball.

As a matter of course, folks who bothered to copy the software didn't bother to single out license terms for deletion.  But as an extra protection, the license terms themselves required any new copies, binary or source, to retain a license terms copy.  As long as everyone followed those rules, if you got the software, you would get the license terms.  Even if your copy was a tarball copy of a USB drive copy of a CD copy.  Even if someone else had long since ripped the shrinkwrap off the CD.

This practical innovation in license distribution paralleled a legal innovation in license granting: <dfn>direct licensing</dfn>.  All common open source licenses work by direct licensing, most of them by direct licensing only.

Say Dana releases open source software, and Alice downloads it and gives a copy to Bob.  Alice doesn't give Bob a license, legally speaking.  She doesn't _sublicense_ Bob.  Rather, Alice gives Bob a copy of Dana's license terms.  Those terms include a notice---a kind of legal announcement---that Dana gives Bob a license directly.  That way, legally, if Alice's license terminates for some reason, Bob's license won't be affected.  Licensing-wise, from Bob's point of view, Alice isn't involved.  His license doesn't depend on Alice's license, or on the license for whoever gave a copy to Alice in the first place.

Taken together, distributing license terms with software and using license terms that applied the same to everyone, regardless of how they got their copy, allowed software to travel freely.  Distributing copies of license terms with copies of software ensures you get the license terms.  License terms that use direct licensing ensure that you can ignore how your copy got to you.  As user, you end up with software, terms, and a license, as if the developer put a copy on floppy right into the palm of your hand.  As a user, you didn't have to hunt down people, phone numbers, postal addresses, and statements for the whole chain of possession from you back to the original developer.

## By Reference

All of this entails a whole lot of copies.  But thanks to computers, copies became easy and cheap.  It was still a lot of trouble and expense moving those copies around.

Thanks to the Internet, moving copies around has also become easy and cheap.  Because the Internet lets us replace copies with addresses.

We see that new normal in dependency manifest files that summon tarballs from well known package registries and source repository hosts.  Instead of copying our dependencies, we copy their addresses.  And we see this in instructions for using licenses, like [Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0#apply):

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

When a developer follows these instructions, and includes a link to the Apache license, rather than a copy of it, it becomes possible to receive a copy of software, with notice that the software comes with a license, but without a copy of the license terms.  Fortunately, the terms are but one quick Web request away.  You know you _have_ a license.  But you don't necessarily know on what terms until you click the link.

We can replace copies of software with addresses.  And we can replace copies of legal terms with addresses.  What about copies of the text that says you have a license, on those terms?  What about the magic words that grant the license, directly?

We can replace that with a link, too:

```
For information about licenses for this software,
visit https://example.com/licenses
```

Or even:

```
For information about licenses for this software,
contact John Smith at john.smith@example.com.
```

Call it <dfn>indirect licensing</dfn>: telling everyone who receives a copy of your software not that they have a license, but how they can get one.

Without a license from you, many folks can't use your software. Using your software without a license means risking a lawsuit for copyright infringement, and that's risk they or their boss don't want to take. Those that care about lawsuits for copyright infringement---those worth suing in the first place---have an incentive to reach out to you, if they'd rather use your software that rebuild it themselves.  At that point, you can respond however you please.

Notice that just reaching out to you gives you information about adoption and users that you wouldn't receive, offering your work under traditional open source terms like MIT, BSD, or GPL. Those terms work fine for ensuring that users get copies, terms, and direct licenses. But they don't do anything about informing you, the developer, that any of this has happened. As a consequence, developers offering projects under those terms can succeed, in the sense of having their work adopted, without ever knowing it. They can succeed without knowing who, exactly, has adopted their work. They can end up abandoning successful projects, for lack of financial support, because they don't know who to ask.

Note that indirect licensing does replace an existing chore---finding, validating, and assessing open source licensing information---with a more bothersome one.  But the new chore has never been faster, easier, cheaper, or more convenient.  We can use software and standards to make it faster, easier, cheaper, and more convenient still.

Internet communication makes it all practical.  We don't need to send copies around all the time.  When someone gets a hold of your software, they likely do so online.  Being online, they can get in direct touch with you, or your surrogate, or a web service that you name.  And in fact we see that today, in the form of issues (and even pull requests) about licensing of projects that don't have license metadata or `LICENSE` files.  "Alright, here's the open source license you wanted." isn't the only valid response to those requests.

## Freebies

Stripping your project of license information trades convenience for control, your control.  Once you are in control, you have all kinds of options.  Not just right now, but over time.

Say you find yourself sending out a lot of free licenses, for folks and uses you want to support.  Maybe to students, or nonprofit workers, or hobbyists, or a mix of all three.  Maybe to developers working on other open software.  You've developed some experience in deciding who you'll license for free, and why, as well as some confidence in those generalizations.  Put terms in `LICENSE` that give free licenses to those categories of users, so they don't have to ask you, and you don't have to tell them.  For everyone else, keep the link or e-mail address for requesting licenses.  This reduces hassle for both sides---you and users who come under your free-license rules---without giving away more license than you're confident you should.

In effect, you are now direct licensing freebies, and indirect licensing everyone else.  In effect, you are implementing one of the oldest, most successful, Internet-era open software business models: <dfn>dual licensing</dfn>.  You're backing your way into some very good company.

## Iterate

From there, you could go a few ways.

On the one hand, you might automate the process of selling licenses to those who don't qualify for free ones under your terms.  Set up a web store to take credit cards and spit out licenses.  Or hire someone to handle the chore for you, if you're doing well.  With a bit more automation and a few tricks---namely, cryptographic signatures---you're looking at [License Zero](https://licensezero.com).

On the other hand, you might decide that you either don't need support from users, or can get the support you need some other way than selling licenses.  At that point, you might choose to apply traditional free software or open source terms---copyleft or permissive---to past project work, future project work, or both.  Applying _more generous_ public license terms is usually possible, legally, so long as you still own the intellectual property rights in your software.  The opposite---moving from more generous terms to less generous terms, or to no public license terms at all---is much harder, and often totally impractical.  Functionally, public copyright relicensing of existing software only goes one way.

In the end, giving _everyone_ free license permission with a terms like MIT or Apache 2.0 might create more opportunity of a kind you're now capable of assessing and ready to seize---hosting, service or support contracts, paid feature development, nonfree add-ons, and so on.  In other words, throwing licensing wide open, minimizing friction, can improve your project's performance as a loss leader.  But by this point, your loss leader actually leads somewhere.  By licensing directly, you kept your ability to make money early on, to meet and communicate with users who valued your work at every step along the way, and to evolve your license approach with your project and alternative means of support.  You gave yourself the tools to build up to a rational open source loss leader play.

If you start this journey as an established company offering products or services for which your project drives demand, it's perfectly possible to skip prior steps, right to the end, and lead loss from day one.  But if you start without products, services, or revenue, and skip straight to incurring losses that lead nowhere, expect to have a hard time, especially if you're going it alone.  You're following in the footsteps of great open source success stories, but you're doing so walking backwards.

Of course, if offering some freebies in `LICENSE` and selling the rest online is working for you, you don't have to change a thing.  That's a perfectly viable model in its own right.  The key is fitting your needs, your user's needs, and the software you can deliver together, in a way that serves all involved.  That is the goal, the balance to strike, however you manage to strike it.
