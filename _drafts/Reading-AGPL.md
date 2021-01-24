---
title: Reading Affero GPL
---

AGPL carries a lot of symbolic weight.  It's not the strongest copyleft license, but it's the strongest with of its age with similar credentials.  It's also one of the worst well known open source licenses to read, which means most people don't.

Let's read the Affero General Public License version 3.0.  Or rather, let's read all the parts of AGPL that make it AGPL.

## The Diff

The first thing to understand is that AGPL 3 is just a "patched" version of GPL 3.  If you download the official text versions of <a href="https://zoo.kemitchell.com/GPL-3.0.txt" download="GPL-3.0.txt">GPL</a> and <a href="https://zoo.kemitchell.com/AGPL-3.0.txt" download="AGPL-3.0.txt">AGPL</a> and diff them, you'll find basically three areas of changes:

- replacing "GPL" with "AGPL" and updating the license publication date
- updating the preamble
- changing the heading of, and adding a new paragraph to, section 13

We can ignore the name change, which is just housekeeping.  And we can mostly ignore the preamble changes, since those would come into play in court, if at all, when the actual text of the license provisions isn't clear, and the preamble seemed useful in clearing it up.

That leaves section 13, which makes up the real difference.

## Section 13

For new readers, it's best to start with second paragraph of section 13.  Let's do that.

### GPL-AGPL Bridge

The second paragraph of section 13 is a kind of special "bridge" between GPL 3 and AGPL 3.  The idea is to make sure developers can mix code under those licenses.  Without that paragraph, GPL 3 would say the whole has to be GPL 3, and AGPL 3 would say it has to be AGPL 3, leading to a conflict.  Both GPL 3 and AGPL 3 have paragraphs in section 13 to prevent that from happening.  As you'll have noticed if you diff'ed the two licenses, this paragraph is more or less the same as in GPL, but with the license name changed.

### Network Copyleft

The new, first paragraph of section is the crux.  It implements what we sometimes call "network copyleft", or copyleft that affects network services, like web apps, and not just distributed programs, like installed application.

If you already have some idea how "traditional", non-network copyleft under GPL works, this is the part of AGPL that you need to read:

> Notwithstanding any other provision of this License, if you modify the Program, your modified version must prominently offer all users interacting with it remotely through a computer network (if your version supports such interaction) an opportunity to receive the Corresponding Source of your version by providing access to the Corresponding Source from a network server at no charge, through some standard or customary means of facilitating copying of software.  This Corresponding Source shall include the Corresponding Source for any work covered by version 3 of the GNU General Public License that is incorporated pursuant to the following paragraph.

This language alludes to a few terms with defined meanings in GPL: "modify", "modified version", "Corresponding Source", and "Program".  We'll dive into a few of those later.  But for now, don't expect anything surprising in the meanings of "modify" or "modified version", think of the "Program" as whatever software is under the AGPL license, and read "Corresponding Source" as basically the same as "all the source code".

Let's return to the text and break it up a bit, to make its structure a little easier to follow:

```
Notwithstanding any other provision of this License,

if you modify the Program,

your modified version must

  prominently offer all users
   interacting with it remotely
     through a computer network

  (if your version supports such interaction)

  an opportunity to receive the Corresponding Source
    of your version

  by providing access to the Corresponding Source
    from a network server at no charge,
    through some standard or customary means
      of facilitating copying of software.

  This Corresponding Source
    shall include the Corresponding Source
      for any work
        covered by [GPL 3]
      that is incorporated
        pursuant to the [GPL-AGPL bridge].
```

Let's refactor this a bit.

What we have here is one very wordy if-then statement.  If you do such-and-such, then you must do this-and-that.  Condition and consequent.

The condition is compound.  You only have to worry about paragraph 1 of section 13 if:

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
- The Corresponding Source you offer must include source for any GPL 3 work covered the GPL-AGPL bridge.

Surprised yet?  Let's dig deeper.

## The Condition

Recall that the condition had two prongs: modifying the program and supporting network interaction.  If you're thinking that was an odd way to "code" it, you'd be absolutely right.  Especially if we know a little bit about _why_ GPL was patched to make AGPL in the first place.  Which we can glean from the preamble:

> A secondary benefit of defending all users’ freedom is that improvements made in alternate versions of the program, if they receive widespread use, become available for other developers to incorporate.  Many developers of free software are heartened and encouraged by the resulting cooperation.  However, in the case of software used on network servers, this result may fail to come about.  The GNU General Public License permits making a modified version and letting the public access it on a server without ever releasing its source code to the public.
>
> The GNU Affero General Public License is designed specifically to ensure that, in such cases, the modified source code becomes available to the community.  It requires the operator of a network server to provide the source code of the modified version running there to the users of that server.  Therefore, public use of a modified version, on a publicly accessible server, gives the public access to the source code of the modified version.

In a nutshell: The GPL is a copyleft license, but GPL doesn't actually require sharing and licensing source code if run it for people as a network service, rather than providing it to, as an installable app or client-side script, for them on their own computer.  AGPL was written to close that loophole, often called "ASP Loophole", since that was the industry buzzword for what we now call "software as a service" at the time.  For those digging around in blogs and mailing list archives, you'll often find the problem of companies using GPL code to make network services without sharing back the "Google Problem".  AGPL was written to solve the Google Problem.

In the preamble, we learn that AGPL puts new requirements on operators of network servers.  But we just read the network copyleft paragraph of section 13, and it didn't say anything about operating a network service.  It only kicks in when we modify the program and our modified version supports network interaction.

Put on your hacker hat and attack this condition.  It can be a bit tough if you've never tried to "attack" instructions written in English, rather than code.  But the process and mentality are much the same.

### Modification

For one thing, what if we never modify the AGPL program?  Say it's a blog platform.  We download it, put it on a server, run it, and open the ports.  It does just what we need it to do.  Other people can interact with it remotely.  Meanwhile, we're operating a network server, but we don't have to offer any source code.  We didn't modify the program.

The folks who wrote AGPL saw this coming, and they had a very hackish, scene answer for it: [quines](https://en.wikipedia.org/wiki/Quine_(computing)).  A quine is a program that prints its own source code.  Hacker culture loved quines, since it celebrates literally any form of self-reference as clever and fun.  Fun aside, a blog platform that just sends out copies of its own source code wouldn't be very useful.  But there's nothing to stop blog platform from doing what it's supposed to do---serve blog posts---_and_ offering its own source code.

Say the AGPL web server we find online comes coded to add a link to download a tarball of its source code at the bottom of every webpage.  And say that tarball ticks all the boxes of the to-do list in the network copyleft paragraph of section 13 about offering Corresponding Source.  Say I don't like offering visitors the source code to my blog.  I can modify the program to remove the code that adds those links and serves those tarballs.  _But now I have made a modified version of the Program._  And my modified version still supports remote interaction over a network---it still serves a blog.  So I've tripped the wire, and have to complete the checklist about offering Corresponding Source.  _I can't actually just delete that code and stop, as I could if the license were plain GPL._  Offering source code is a feature of the Program I cannot remove and not replace.

In theory, as a free software developer, choosing AGPL _and_ building in a feature that offers Corresponding Source to network users locks potential users into keeping that feature around.  Their users can get the source code, including any changes they make.  And they can share them with me, the maintainer, or "the community" more broadly.

There is still a hole here.  Say, as a user, that I happen to visit a blog, and like the way it looks and works.  As it so happens, the blog platform it runs on is licensed under AGPL, but the developers didn't include any quine-like feature in it.  The blogged didn't modify the program, and they didn't add any quine-like feature voluntarily.  I suppose I could ask them to tell me which platform they're using, so I could go and try to find the source somewhere else.  Maybe I could find it, and the right version of it. Maybe not.  At least potentially, I can end up interacting with a network service for which I can't find any hackable source code.  Which is a bit of a software freedom problem, as FSF expounds software freedom.

There's also a potential problem with an unwritten assumption.  The one who modifies the program and the one who operates the modified service may not be the same.  And there's no obligation on anyone to _accept_ an offer of Corresponding Source required under section 13, or to police violations of section 13.  If you modify an AGPL blog platform to add a feature I like, and share the source code with me, but don't offer it to anyone else, there's nothing in AGPL that requires me to send the change back to the maintainer.  Nor, arguably, is there any obligation on me to offer source code when I run the program to host my own blog.  If the maintainer finds out about it, and comes after me, my first argument is simple.  I didn't violate section 13.  I didn't modify the program.

### Overclever

It's clear enough what AGPL wants.  It wants people who run network services to give users copies of their services' source code.  Why didn't it just come right out and say something like:

> Notwithstanding any other provision of this License, if you use the Program to operate a network server, you must prominently offer ...

It could have gone even further, requiring offers of source not just to network users, but to the maintainer of the project themself.

I didn't write AGPL, and I can't speak for those who did, though I've run into and quizzed a few of them over the years.  But I strongly suspect there were a few reasons.

The first is a policy issue.  The Free Software Foundation was, and likely still is, allergic to the idea that copyright law gives copyright owners the power to set rules about how people can use software in licenses.  I'd argue at least US law has gone decidedly in just that direction, and is likely to go further in that direction over time.  But AGPL was written more than a decade ago, and the FSF is known for taking what seem like rather unattainable lobbying positions on copyright policy.

There is also the matter of FSF's own doctrinal policy.  A key part of that is the ["four freedoms"](https://www.gnu.org/philosophy/free-sw.en.html) that make up "software freedom", the first of which, "freedom 0" is "[t]he freedom to run the program as you wish, for any purpose".

Legal policy and FSF doctrine cross over when it comes to the "license-or-contract" issue.  From very early on, the FSF, and especially FSF lawyers like Eben Moglen, have maintained that the only law that matters for the licenses it publishes is copyright law, a set of property rights imposed on society to benefit creators.  Not contract law, the law of private, voluntary agreements.  GPL even has a particular set of terms, section 9, that try to talk through and establish this, which AGPL inherits verbatim.

All the same, in recent years, companies releasing software under the GPLs have brought some lawsuits enforcing copyleft against competitors or those they believe should have been paying customers.  In the United States, these companies have sued _both_ for copyright infringement _and_ breach of contract.  And courts have found, in context, that the GPL could be enforced as a contract between developer and user.  Again, thirteen years ago, many of those suits, and suits about licenses with noncommercial and other rules, hadn't happened yet.

All of this adds up to a kind of puzzle.  How do we implement this rule about server operators without saying there's anything they can't do, or that copyright law should let developers say what other should be able to do, or that our license is a contract, which could clearly do it?  Not by saying what we mean directly.

Copyright law does clearly give copyright owners power over changes to their work, in the vast majority of cases, and over publication.  And those are exactly the powers of copyright the FSF used to implement the weaker, non-network copyleft in the GPLs since version 1.  Very crudely, sections 5 and 6 of GPL 3 say that if you modify the program and share your modified version, as source code or binary, you have to share the source code and license it under the GPL, too.  In rough translation to Copyright Speak, if you "prepare a derivative work" of the copyrighted software and "distribute copies", as a condition of your license to do these things, you have to distribute and license source code under GPL, too.

Naturally, FSF doctrine didn't see this as any problem for freedom 0.  After all, you weren't "running" the program to create non-free software.  You were _modifying_ the software to create non-free software.  Distributing (freedom 2) and distributing modified versions (freedom 3) were special cases, in that "free software" licenses could make them conditional.  Conditional on sharing and licensing source code as free software.

So, for various reasons, FSF could repose the AGPL puzzle differently: How do we recast "operating a network service" in terms of freedom 3---making changes and sharing source---rather than freedom 0---using the software?  On the engineering side, make sharing source code something the program does when you use it.  On the legal side, make offering source code, through the program or otherwise, a condition on the right to make changes to the program.  Or, ideally, both.

If you're thinking this sounds like making it way too complicated, if you're thinking this explains why a two-sentence paragraph buried in section 13 can be so hard to grok, you're not alone.  Larry Rosen, lawyer for the Open Source Initiative, made just that point, among others, in his [Open Software License](https://opensource.org/licenses/OSL-1.0), the latest version of which is [3.0](https://opensource.org/licenses/OSL-3.0).  For extra credit, put section 5 on your reading list, after we're done with AGPL.
