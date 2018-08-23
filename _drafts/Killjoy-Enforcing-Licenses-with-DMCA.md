---
title: Enforce Open Source Licenses with the DMCA
layout: post
---

This is the first in a series, _Killjoy's Guide to Open Source_, where I'll examine unorthodox, unwelcome solutions to nagging open source problems.

---

Open source licenses ask very little.  Even that is too much for many open source users.  When someone shares or builds on your open source work without following your license, you can send them a nastygram demanding compliance and compensation.  But when someone breaks your rules and posts results online, it's often far easier, more gratifying, and fun to disappear their stuff from the web with the Digital Millennium Copyright Act.

## Attributory Infringement

Under the most popular permissive open source licenses, like MIT- and BSD-style terms, the only direct requirement is _attribution_.  Attribution means including copies of license terms and credits, like copyright notices, with copies of the work.  Attribution applies to verbatim copies, like source code, and also to processed forms of the work, like copies in browser JavaScript bundles or copies compiled into binary programs.

Attribution rules are _license conditions_.  Unless you've assigned rights in your work to someone else, like a client or employer, or your work fails to meet a pitifully low bar of creativity set by law, you own copyright in your software.  Congratulations.

Broadly speaking, copyright law entitles you to sue others who copy, change, and build on your work without your permission, in the form of a license.  MIT and BSD license terms give everybody a license, but only _on condition_ that they provide attribution with copies.  No attribution, no license.  No license, risk lawsuit.

Failing to follow open source license conditions leads to copyright infringement.  That's where the DMCA comes in.

## Statutory Ban Hammer

The Digital Millennium Copyright Act, or DMCA for short, is an add-on to United States copyright law.  One section sets up what lawyers call the "safe harbor".  If online service providers follow the safe harbor rules, they're protected from lawsuits for encouraging and helping others to infringe copyright through their services.  Because online service providers can't possibly police all the content their users post, and don't want to get sued for copyright infringement, they tend to follow the safe harbor rules.

The rules require a content takedown process.  In a nutshell, the online service provider has to appoint someone their _agent_ to receive takedown notices for content they provide.  When the agent receives a valid takedown notice, the company has to take the content down, and notify the user who posted it.  If the user sends a valid _counter_ notice, the content goes back up.  If the two sides still disagree from there, they can go to copyright court.  But they can't drag the online service provider along with them.  That's the payoff for the service provider.

Online service providers don't make many decisions during the takedown process.  Usually, lawyers instruct company personnel to follow the DMCA robotically.  Since takedown notices are relatively easy to send electronically, and many companies do nothing but send massive numbers of takedown notices for their clients every day, companies have to process them efficiently.  On many popular platforms, software handles the process from start to finish.  Content may come down as soon as you click a button.

Submitting DMCA takedown notices isn't difficult.  By rule, service providers have to give you instructions, in a published copyright or DMCA policy.  However, one requirement is always that you state you have a good faith belief that the poster used your work without permission.  No sending takedowns willy-nilly.  Do your research, and know what you're talking about.  When in doubt, it's lawyer time, but the conversation needn't be very long.

Of course, not every DMCA takedown notice is a one shot kill.  Counter notices can get content put back up, and you're essentially back where you started.  But it is much harder to ignore a DMCA takedown notice than a demand letter, especially a demand letter from a non-lawyer.  Especially when a valid takedown counts as a strike in a repeat-infringement ban policy, which is also a safe harbor rule.

If you want to start a conversation about getting credit, or even getting paid, a DMCA takedown can give you a strong start.

## Web Stack Jenga

Even when copies of your work get posted off of common platforms, as on private websites, those websites often rely on other services.  Those services may accept DMCA takedown requests.  So check the web host.  Check the CDN.  Check the DNS provider.  If they're putting the content up online, you may be able to have them take it down.

This can be particularly useful against those based abroad.  You may live in the United States, but the offending site may be decidedly foreign.  But they may use a company, or infrastructure, subject to US law, who needs and wants DMCA safe harbor.  Taking down what they have may be more than enough to send your message, and discourage further bad behavior.  Disappearing content crosses all language barriers.

## Sharing Lessons

So far, our frame has been attribution.  Give credit for open source work.  Let others know that software they receive is, in fact, open source.  Probably the most common open source license condition.  And the most common open source license violation.

But attribution is not the only kind.  There's no reason developers couldn't use the DMCA to enforce other license conditions, as well.  Conditions like share-alike requirements under GPL and other "copyleft" licenses.  Conditions that breed license compatibility issues.

YouTube has its infamous Content ID system.  Content ID scans YouTube uploads for signatures of copyrighted audio and video content, and flags videos automatically.  A License ID system could scan source code trees for license violations, and similarly take down code, mark strikes against publishers, or both.  We'd expect such a system when and only if takedown requests to, and lawsuits against, source code hosts become so burdensome that's its's worth automating.

Depending on whether you use copyleft licenses, GitHub with License ID is open source Heaven, or it's open source Hell.  When the system is new, probably closer to Hell.  As it improves, probably pretty livable.  Heavenly's a lot to ask.
