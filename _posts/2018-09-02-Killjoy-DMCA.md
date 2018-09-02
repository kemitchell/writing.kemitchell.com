---
title: Enforce Open Source Licenses with the Digital Millennium Copyright Act
description: takedown power for DIY developers
layout: post
tags:
- Killjoy
- Open Source
- Licensing
- DMCA
---

This is the first in a series, [_Killjoy_](/series/Killjoy), in which I'll sketch unorthodox and unwelcome solutions to nagging open source problems.

---

Open source licenses ask very little of users.  Apparently even little is often too much.  When someone shares or builds on your open source work without following your license, you can send them a cease-and-desist letter demanding compliance and compensation.  That's dramatic, and depending on whether you hire a lawyer, a lot of time or money you don't have.

When someone breaks your rules in work of their own, and puts that work online, it's often far easier, more effective, and fun to disappear their stuff from the Web with the Digital Millennium Copyright Act.

If someone violates a license for your code, your first step should always be to reach out to them and communicate: by e-mail, with a bug report, whatever works best, practically, assuming a good faith mistake.  If you can't reach them, or they ignore or refuse you, you're not necessarily stuck shelling out for a lawyer, begging a foundation to help you, or sucking it up.  Taking their work down off the Web can force a conversation and put the legal burden back where it belongs.

## Attribution, Please

Under popular permissive open source licenses like MIT- and BSD-style terms, the only requirement on users is _attribution_.  Attribution means including copies of license terms and credits, like copyright notices, with copies of the work.  Attribution applies to verbatim copies, like source code, and also to processed forms of the work, like copies in browser JavaScript bundles or copies compiled into binary programs.

Here's the attribution part of The MIT License:

> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

And here's the attribution part of the two-clause BSD license:

> 1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.
> 2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

Unless you've assigned rights in your original work to someone else, like a client or employer, or your work fails to meet the pitifully low bar of creativity required for copyright, you own copyright in your software.  Congratulations.

Broadly speaking, copyright law entitles you to sue others who copy, change, and build on your work without your permission.  Permission usually takes the form of a license.  MIT, BSD, and similar terms give everybody a license, which is why we call them _public licenses_.  But that permissions comes only _on condition_ that they provide attribution with copies.  Attribution rules are _license conditions_.  No attribution, no license.  No license, that's infringement.  Infringement means trouble.

That's where the DMCA comes in.

## Automatic Hammer

The Digital Millennium Copyright Act, or DMCA for short, is an add-on to United States copyright law.  One section sets up what lawyers call the _safe harbor_.  If online service providers follow the safe harbor rules, they're protected from lawsuits for encouraging and helping others to infringe copyright through their services.  Because online service providers can't possibly police all the content their users post, and they don't want to get sued for enabling or encouraging copyright infringement, they tend to follow the safe harbor rules.

The rules require a content takedown process.  In a nutshell, the online service provider has to appoint someone their _agent_ to receive takedown notices for content they provide.  When the agent receives a valid takedown notice, the company has to take the content down, and notify the user who posted it.  If the user sends a valid _counter_ notice, the content goes back up.  If the two sides still disagree from there, they can go to court, but they shouldn't be able to drag the service provider with them.  In return for following the rules, the service provider is safe, hence _safe harbor_.

Online service providers usually don't make many decisions during the takedown process.  Lawyers often instruct company personnel to follow the DMCA robotically.  Since takedown notices are relatively easy to send electronically, and many specialist firms do nothing but send massive numbers of takedown notices for paying clients all day, companies receive a lot of them, and have to learn to process them efficiently.  On many popular content hosting platforms, software handles the process from start to finish.  Content may come down as soon as you click a button.

Submitting DMCA takedown notices isn't difficult.  By rule, service providers have to give you instructions, in a published policy, usually titled _copyright policy_ or _DMCA policy_.  These policies always require that you state in writing that you have a good faith belief that the poster used your work without permission.  That's important:  Do your research, know what you're talking about, and don't send bogus takedowns willy-nilly.  That being said, many takedowns get sent without any lawyer assistance whatsoever.  When lawyers do get involved, they typically help decide whether a takedown is proper. If so, they'll often leave the actual job of preparing and sending the notice to non-lawyers, to save cost.

If a larger software project uses your work in violation of your license, that larger project may be infringing, allowing you to take its repo down from a source code host, or its artifacts down from a repository.  If a website bundled your JavaScript code, but doesn't give you credit, you may be able to pull the bundle down from a CDN.  If a piece of paid software uses your code without following your license terms, you may be able to take it down from the app store where it's sold.  The general pattern is another piece of software that is based on, and therefore a _derivative work_ of, your own software, in violation of your terms, published by some other company, somewhere on the Web.

Of course, not every DMCA takedown is a one shot kill.  Counter notices can get content put back up, and leave you back where you started.  But it is much harder to ignore a DMCA takedown notice than a demand letter, especially a demand letter from a non-lawyer.  Especially when a valid takedown counts as a strike under a policy for banning repeat infringers.

## Web Stack Jenga

Even when copies of your work get posted off of common platforms, as on private websites, those websites often rely on other services that accept DMCA takedown requests.  So check the web host.  Check the CDN.  Check the DNS provider.  If they're putting the content up online, you may be able to have them take it down.

This can be particularly useful against those based abroad.  You may live in the United States, but the offending site may be based or targeted elsewhere.  However, they may use a company, or infrastructure, subject to US law, which needs and wants DMCA safe harbor protection.  Taking down what they have may be more than enough to send your message, and discourage further bad behavior.  "My content is gone" crosses all language barriers.

## Share-Alike

So far, our frame has been attribution.  Give credit for open source work.  Let others know that software they receive is, in fact, open source.  The most common open source license condition.  And the most common open source license violation.

But attribution is not the only kind of rule found in open source licenses.  There's no reason developers couldn't use the DMCA to enforce other license conditions, as well.  Conditions like share-alike requirements under GPL and other _copyleft_ or _share-alike_ licenses.  Conditions that lead to license compatibility issues.

These concerns come across in feature requests that we see for open source compliance tools.  The most common requests I get for tools like [`licensee`](https://www.npmjs.com/package/licensee) are an option to detect strong, weak, or any copyleft licenses, and support for detecting incompatibilities between licenses appearing within one project.

## Automation

YouTube's Content ID system scans YouTube uploads for signatures of copyrighted audio and video content, and flags videos automatically, marking strikes against uploaders that can eventually close their accounts.  The system's problematic, flagging lots of fair uses.  The system makes mistakes.  It's susceptible to abuse.

A License ID system for open code, where the default is that work _can_ be copied and reused, and reuse happens among peers, could be much smarter, more helpful, and even educational.    License ID could offer the same or better functionality of offline open source compliance tools, as a service, along the lines of security vulnerability warnings we receive from several platforms today.  The compliance burden for any license condition implementable as a software check could be drawn down toward zero.

We should expect such a system at the platform level only if and when the burden of takedown requests to platforms warrants the automation.  Right now, it's not that significant a platform problem. But the structure and policy of the copyright law remains that creators should control use of their work.  The structure of the DMCA, as an addition to copyright law, embodies a public policy that services facilitating infringement should also give creators means of DIY self-help, to address the resulting power imbalance.

## Lagging

The grander point is that abuse of work without giving credit or following public license terms isn't a new problem, and it isn't a problem peculiar to software.  In many ways, software development lags _far behind_ other creative industries in implementing creator conditions in software on the public Web.  Regardless of the reasons we might speculate for the difference, the disconnect is embarrassing.

The general policy behind copyright law, flawed as its specific details may be, gives creators of all stripes the power to set terms for their work.  At its core, copyright empowers individual creators, and gives even struggling independents power to stand up to large interests.  To date, open software and service infrastructure developers have toiled tirelessly to facilitate the flow of code from developers to users.  Little or nothing has been done to flow credit, compliance, or compensation back from users to developers.

DMCA, flawed as it _also_ is, in many particular respects, can send industry a positive signal to begin redressing that imbalance.  I wouldn't look forward to standing on the receiving end of more takedown requests.  But I think we'd all benefit from an industry where DMCA-worthy uses were less prevalent, and manual intervention less necessary.
