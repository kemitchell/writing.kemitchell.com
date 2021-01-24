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
> The GNU Affero General Public License is designed specifically to ensure that, in such cases, the modified source code becomes available to the community.  <mark>It requires the operator of a network server to provide the source code of the modified version running there to the users of that server.</mark>  Therefore, public use of a modified version, on a publicly accessible server, gives the public access to the source code of the modified version.

In a nutshell: The GPL is a copyleft license, but the GPL doesn't require sharing and licensing source code under the GPL that you run for people as a network service, rather than provide to them as code to run, like an installable app or client-side JavaScript code.  AGPL was written to close that loophole, often called the "ASP Loophole", since that was the industry buzzword at the time for what we now call software as a service or SaaS.
