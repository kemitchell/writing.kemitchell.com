---
title: Reading AGPL
description: a guided introduction for first-timers
series: Line by Line
brief: The trick to AGPLv3 is diffing it with GPLv3 and drilling down from there.  The crux is the first paragraph of section 13.  But even those two sentences make hardly any sense without broader context.  It's not you, dear reader.
tags:
- Open Source
---

[The GNU Affero General Public License version 3.0](https://www.gnu.org/licenses/agpl-3.0.html), or AGPLv3 for short, carries a lot of symbolic weight.  It's not the strongest copyleft license ever written, but it's the strongest with its name rec and old-school bona fides.  It's also one of the worst well known open source licenses to read.  Which partly explains why people don't, and come away feeling not at all or way too confident when they try.

Let's read AGPLv3 together.  Or rather, let's read the parts that make it AGPL, and not just regular old GPL. The parts that scare corporate lawyers at Internet companies.

## The Diff

AGPLv3 is just a "patched" version of GPLv3. The patch adds one "feature", but it's a whopper.

If you download the official text versions of <a href="/files/GPL-3.0.txt" download="GPL-3.0.txt">GPL</a> and <a href="/files/AGPL-3.0.txt" download="AGPL-3.0.txt">AGPL</a> and diff them, you'll find basically three areas of change:

- renaming from "GPL" to "AGPL"
- updating the preamble
- adding a new paragraph to section 13

We can ignore the name change, which is just housekeeping.  And we can mostly ignore the preamble changes, since those would come into play in court, if at all, only when the actual text of the license provisions isn't clear, and the preamble seemed useful in clearing it up.

That leaves section 13, which goes on the bench.

## Section 13

For new readers, it's best to tackle section 13 backwards.

### GPL-AGPL Bridge

The second paragraph of section 13 is a kind of special "bridge" between GPLv3 and AGPLv3.  The idea is to make sure developers can mix code under those licenses in projects.  Without these paragraphs in section 13 of GPLv3 _and_ AGPLv3, GPLv3 would say the whole program has to be GPLv3, and AGPLv3 would say it has to be AGPLv3, creating an unsolvable conflict.

There was a push to have just one license, GPLv3, that included AGPL's extra feature.  All of FSF's GPLv2-licensed software would have upgrade to GPLv3, with strengthened network-copyleft protection.  But that failed, so FSF had to deal with the possibility of both.

### Network Copyleft

The first paragraph of section 13 is the crux.  It implements what we call ["network copyleft"](https://blueoakcouncil.org/copyleft#network-copyleft-family), or copyleft that affects developers of network services, like web apps, and not just developers of distributed software, like installed applications and client-side scripts.

If you already have some idea how traditional ["strong copyleft"](https://blueoakcouncil.org/copyleft#strong-copyleft-family) works under GPLv2 or v3, this is the part of AGPL that you need to read.  Just try and get through it once for now.  We'll be treading it over a few times together.

> Notwithstanding any other provision of this License, if you modify the Program, your modified version must prominently offer all users interacting with it remotely through a computer network (if your version supports such interaction) an opportunity to receive the Corresponding Source of your version by providing access to the Corresponding Source from a network server at no charge, through some standard or customary means of facilitating copying of software.  This Corresponding Source shall include the Corresponding Source for any work covered by version 3 of the GNU General Public License that is incorporated pursuant to the following paragraph.

This language uses a few terms with definitions elsewhere in the license: "modify", "modified version", "Corresponding Source", and "Program".  For now, don't expect any surprises.  Read "modify" naturally.  Think of the "Program" as whatever software is under the AGPL license.  Swap "Corresponding Source" out for "all the source code" where you see it.

Let's return to the paragraph and break it up a bit, to make its structure a little easier to follow:

```
Notwithstanding any other provision of this License,

if you modify the Program,

your modified version must

  prominently offer all users
   interacting with it remotely
     through a computer network

  (if your version supports such interaction)

  an opportunity to receive the [source code]
    of your version

  by providing access to the [source code]
    from a network server at no charge,
    through some standard or customary means
      of facilitating copying of software.

  This [source code]
    shall include the [source code]
      for any work
        covered by [GPLv3]
      that is incorporated
        pursuant to the [GPL-AGPL bridge].
```

All told, what we have here is one very wordy `if` statement.  If you do this-and-that, then you must do such-and-such.  Condition and consequent.

The condition is compound.  You only have to worry about paragraph 1 of section 13 if:

- "you modify the Program" and
- "your [modified] version supports such interaction [remotely through a computer network]"

The consequent is a kind of checklist:
- You must make an offer.
- You must make it "prominently".
- You must make it to "all users interacting with [your modified version of the Program] remotely through a computer network".
- Your offer must be for an opportunity to receive the Corresponding Source of your modified version.
- The Corresponding Source you offer must be all of these:
  - "from a network server"
  - "at no charge"
  - "through some standard or customary means of facilitating copying of software"
- The Corresponding Source you offer must include source for any GPLv3 work covered the GPL-AGPL bridge.

Surprised yet?  Let's dig deeper.

## The Condition

Recall that the condition had two prongs: modifying the program and supporting network interaction.  If you're thinking that was an odd way to write it, you'd be right.  Especially if we know a little bit about _why_ GPL was patched to make AGPL in the first place.  Which we can glean from the preamble:

> A secondary benefit of defending all users’ freedom is that improvements made in alternate versions of the program, if they receive widespread use, become available for other developers to incorporate.  Many developers of free software are heartened and encouraged by the resulting cooperation.  However, in the case of software used on network servers, this result may fail to come about.  The GNU General Public License permits making a modified version and letting the public access it on a server without ever releasing its source code to the public.
>
> The GNU Affero General Public License is designed specifically to ensure that, in such cases, the modified source code becomes available to the community.  It requires the operator of a network server to provide the source code of the modified version running there to the users of that server.  Therefore, public use of a modified version, on a publicly accessible server, gives the public access to the source code of the modified version.

In a nutshell: GPL is a copyleft license, but GPL doesn't actually require sharing and licensing source code if you run it for people as a network service, rather than providing it for them to run on their own computers. AGPL was written to close that loophole, often called the "ASP Loophole", since "ASP" for "Application Service Provider" was the buzzword at the time for what we now call "SaaS".  For those digging around in blogs and mailing list archives, you'll also find mention of the "Google Problem".  Companies exploited the ASP Loophole, and still do.  Putting it all together: "AGPL was written to solve the Google Problem by closing the ASP Loophole."

In the preamble, we learn that AGPL puts new requirements on operators of network servers.  But we just read the network copyleft paragraph of section 13, and its condition didnt't mention operating a network service.  It kicks in when we modify the program and our modified version _supports_ being used to operate a network service.

Put on your hacker hat and attack this condition.  How do you get around it?  Where might it function differently than hoped or intended?

It can be a bit tough if you've never done that for terms in English, rather than in code.  But the process and mentality are much the same.

### Modification

For one thing, what if we never modify the AGPL program?  Say it's a blog platform.  We download it, put it on a server, run it, and open the ports.  It does just what we need it to do.  Other people can interact with it remotely.  Meanwhile, we're operating a network server, but we don't have to offer any source code.  We didn't modify the program.

The folks who wrote AGPL saw this coming, and they had a very hackish, scene answer for it: [quines](https://en.wikipedia.org/wiki/Quine_(computing)), programs that prints their own source code.  Hacker culture loves quines, as it loves any form of self-reference.  Fun aside, a blog platform that just sends out copies of its own source code wouldn't be very useful.  But there's nothing to stop a blog platform from doing what it's supposed to do---serve blog posts---_and_ offering its own source code.

Say the AGPL web server we find online comes with code that adds a link to download a tarball of its source code at the bottom of every webpage.  And say that tarball ticks all the boxes of the to-do list in the network copyleft paragraph of section 13.  Say I don't like offering visitors the source code to my blog.  I can modify the program to remove the code that adds those links and serves those tarballs.

_Now I have made a modified version of the Program._  And my modified version still supports remote interaction over a network---it still serves a blog.  So I've tripped the wire, and have to complete the checklist about offering Corresponding Source.  _I can't actually delete that code and stop, as I could if the license were plain GPL._  Offering source code is a feature of the Program I cannot remove and not replace, either with code or some other process that offers users source code.

There is still another hole.

Say, as a user, that I happen to visit a blog, and like the way it looks and works.  As it so happens, the blog platform it runs on is licensed under AGPL, but the developers didn't include any quine-like feature in it.  The blogger didn't modify the program, and they didn't offer source code some other way.  I suppose I could ask them to tell me which platform they're using, so I could go and try to find the source somewhere else.  Maybe I could find it, and the right version of it. Maybe not.

At least potentially, I can end up interacting with a network service for which I can't find any hackable source code.  Which is a bit of a software freedom problem, as FSF expounds software freedom.  As a user, when I use software---running on my machine or someone else's---I should get source, and be able to hack that source.

There's also leverage on an unwritten assumption.  The one who modifies the program and the one who operates the modified service may not be the same.  And there's no obligation on anyone to _accept_ an offer of Corresponding Source required under section 13, or to police violations of section 13 for the maintainers.

If you modify an AGPL blog platform to add a feature I like, and share the source code with me, but don't offer it to anyone else, there's nothing in AGPL that requires me to send the change back to the maintainer.  Nor, arguably, is there any obligation on me to offer source code when I run the program to host my own blog.  If the maintainer finds out about it, and comes after me, my first argument is simple.  I didn't violate section 13.  I didn't modify the program.  That's the way it's written.

The maintainer might try to argue from the preamble, that what section 13 means ought to be read to achieve stated goals, whether it's written that way or not.  That's a long fight uphill if the judge or jury thinks section 13 was clear.  Which it very well might, especially considering how much more specific the wording is there than in the preamble.  Worst case, you end up arguing that section 13 is vague, so you cite the preamble, get the court to agree to that, and still lose.

### Complication

It's clear enough what AGPL wants.  It wants people who run network services to give users copies of their services' source code.  Why didn't FSF just come right out and say that in the operative legal terms?

> Notwithstanding any other provision of this License, if you use the Program to operate a network server, you must prominently offer ...

I didn't write AGPL, and I can't speak for those who did, though I've run into them over the years.  I strongly suspect there were a few reasons.

The first is a policy issue.  The Free Software Foundation was, and likely still is, allergic to the idea that copyright law gives copyright owners the power to set rules about how people can use software in licenses.  I'd argue at least US law has gone decidedly in that direction, and that we have every reason to expect it to go further, not stop and turn itself around.  But AGPL was written more than a decade ago, and the FSF is known for taking what seem like rather far-fetched lobbying positions on copyright policy.  They are fond of talking about a world in which software freedom is mandated by law.

There is also the matter of FSF internal doctrine.  A key part of that is the ["four freedoms"](https://www.gnu.org/philosophy/free-sw.en.html) that make up "software freedom".  The first, "freedom 0" is "[t]he freedom to run the program as you wish, for any purpose".

Legal policy and FSF doctrine cross in the "license-or-contract" issue.  From very early on, the FSF and its FSF lawyers maintained that the only law that matters for the licenses it publishes is copyright law, a set of property rights imposed on society to compensate creators.  Not contract law, the law of private, voluntary agreements, which in many ways offers more power and flexibility.  GPLv3 even has a particular section, section 9, that tries to talk through and establish this.  AGPLv3 inherits that section from GPLv3 verbatim.

All the same, in recent years, companies releasing software under FSF's licenses have brought some lawsuits enforcing copyleft against competitors or those they believe should have been customers.  In the United States, these companies have sued _both_ for copyright infringement _and_ breach of contract.  And courts have found, in context, that the GPL could be enforced as a contract between developer and user, in ways that seem broadly applicable.  Again, thirteen years ago, many of those suits, and suits about licenses with noncommercial and other rules, hadn't happened yet.

All of this adds up to a kind of puzzle.  How do we implement this rule about server operators without saying there's anything they can't do, or that copyright law should let developers say what other should be able to do, or that our license is a contract, which could clearly do it?  Not by saying what we mean directly.

Copyright law clearly gives copyright owners power over changes to their work, in the vast majority of cases, and over publication.  And those are exactly the powers of copyright the FSF used to implement non-network copyleft in the GPLs since version 1.  Very crudely, sections 5 and 6 of GPLv3 say that if you modify the program and share your modified version, as source code or binary, you have to share the source code and license it under the GPL, too.  In rough translation to Copyright Speak, if you "prepare a derivative work" of the copyrighted software and "distribute copies", as a condition of your license to do these things, you have to distribute and license source code under GPL, too.

From everything I've seen, FSF expounded the "four freedoms" in print well after publishing the first GPL licenses.  And naturally, FSF didn't see its own copyleft licenses as any freedom 0 problem.  After all, you weren't "running" the program to create non-free software.  You were _modifying_ the software to create non-free software.  Distributing (freedom 2) and distributing modified versions (freedom 3) were special cases, in that "free software" licenses could put conditions on them.  Conditions requiring sharing and licensing of complete source code as free software.

So, for various reasons, FSF could put the AGPL implementation puzzle differently: How do we recast "operating a network service" in terms of freedom 3---making changes and sharing source---rather than freedom 0---using the software?  On the engineering side, make sharing source code something the program does when you use it.  On the legal side, make offering source code, through the program or otherwise, a condition on the right to make changes to the program.  Or, ideally, both.

If you're thinking this sounds like making it way more complicated, if you're thinking this explains why a two-sentence paragraph buried in section 13 was so hard to grok, you're not alone.

It's not just hard for lawyers, who have the legal picture and can parse the whole license very carefully without passing out.  They don't usually have the lore of FSF doctrine and policy positions, they're not used to FSF's writing style. A political manifesto labeled "preamble" isn't their everyday, or anyday, either.

It's also hard for hackers, even those familiar with free software lore, who lack the legal side of the picture and a sense of what other ways things might have been said.

Imagine how people who _don't_ know software, law, legal drafting, software architecture, hacker culture, or the self-styled "philosophical" musings of one Richard M. Stallman feel.  Inebriated aliens might as well have beamed it down from space as a kind of practical joke.

Larry Rosen, lawyer for the Open Source Initiative at the time, made the point of overcomplication, among others, by way of his [Open Software License](https://opensource.org/licenses/OSL-1.0), the latest of which is [version 3.0](https://opensource.org/licenses/OSL-3.0).  For extra credit, put section 5 of OSL 3.0 on your reading list, after we're done with AGPL.  It achieves different results, and in a different way, than AGPL, while addressing the same "ASP Loophole" and "Google Problem".

## The Checklist

If you trip the wire of the condition in the network-copyleft paragraph of section 13, you have to meet its requirements.  As mentioned, you can think of that a bit like a checklist.  Even shorter than before:

- Make an offer to every user of your service.
- Don't hide it.
- Offer them all the source code.
- Let them download it from a server, for free.
- No funny business about format, download method, and so on.

And remember the goal of the license: We want people who run network services to share their source code, including their changes, under the AGPL.

The "checklist" above doesn't mention AGPL.  It doesn't even mention licensing.  But that is not a big, ugly bug.  Section 13 relies on some other, global provisions of the license to get that work done.

Specifically, section 13 relies on section 5, which is part of the standard, GPL copyleft.  Very briefly, section 5 sets out rules for sharing, or "conveying", source code with changes.  It's another checklist.  Among the to-dos:

> b) The work must carry prominent notices stating that it is released under this License and any conditions added under section 7.  ...
>
> c) You must license the entire work, as a whole, under this License to anyone who comes into possession of a copy.  ...

There it is.  Section 13 says that when you modify a web service, you have to offer to share the modified source code.  Section 5 says that when you share modified source code, you have to license it under AGPL.  People miss this connection, and frankly, it's easy to miss.  Especially programmers, and especially programmers who aren't C++ programmers, who are used to subroutines running when they're called, and otherwise sitting quiet.

## Further Spelunking

The crux of AGPLv3 is adding network copyleft to GPLv3 copyleft, but that's hardly all there is.

From GPL, AGPL inherits a mountain of terms, definitions, quirky drafting, and quirky behavior.  To be frank, there are a lot more good questions about GPLv3 and AGPLv3 than there are good answers, even if you eliminate all the ones that only matter to copyright nerds and take all the commentary FSF has published online as pure gospel.

Some of the relevant questions do have to do with copyright law.  For example, the definition of "modify", and by extension "modified version", really just call out to the scope of power the law gives copyright owners:

> To "modify" a work means to copy from or adapt all or part of the work in a fashion requiring copyright permission, other than the making of an exact copy.  The resulting work is called a "modified version" of the earlier work or a work "based on" the earlier work.

The license doesn't say "derivative work", which is the defined term in US copyright law.  But it uses "based on", which gets used in the law's definition of "derivative work".  Does "modified version" just mean "derivative work"?  If so, what does that mean?  And what is the copyright on to begin with?  Just the new and original code?  Its APIs?

This involves legal analysis, and legal analysis is not just as simple as looking it up in a case where a judge tells you.  In the US, courts mostly referee conflicts until they settle.  They do not spit out answers to legal questions like vending machines.

Similar story with "Corresponding Source".  If you build a larger web service by combining network services that call each other over HTTP, rather than libraries or snippets of code linked or pasted together, does "Corresponding Source" include the source for those other services?  What if each service is containerized, encapsulated in its own operating system?  Do those operating systems count as "System Libraries" or "generally available programs" shield the application code they run?

I could go on.  But I won't.  If you've had a taste and want more, you have a good start on how to find it.  But even if you've made it this far and are ready to think about something else for a few years, congratulations.  This stuff isn't easy.  No one can make it easy without making it at least slightly wrong.
