---
title: A Vocabulary of Copyleft
layout: post
---

What does the Open Source Definition have to say about how strong copyleft licenses can be?  As it turns out, little that is helpful, and a great deal that is not.  The Definition's twenty-year-old criteria at best mildly suggest the proper limits of open source copyleft, without providing any framework or vocabulary for expressing them.

This post offers a vocabulary for copyleft licenses and copyleft-license limits, as a bridge to later posts on the Definition and what those limits should be.

## Copyleft"

We can generalize copyleft as permissive licenses with additional rules requiring licensees to share work as work has been shared with them.

To implement those rules, copyleft licenses answer four independent _design prompts_:

1. _Trigger_: When must licensees share other work?
2. _Reach_: What other work must licensees share?
3. _Licensing_: On what terms must licensees share that work?
4. _Distribution_: How must licensees share source for that work?

Different copyleft licenses address these prompts differently.  They make and implement different choices, in legal terms.

## Strength

Generally, the more situations in which a copyleft implementation triggers, the more code it reaches, the more specific the license terms it requires, and the more broadly it requires source to be distributed, the _stronger_ that copyleft license is.  Calling a copyleft license strong thus gives us a general hint about its design, and the effects of that design, in practice.  But calling a copyleft license strong does _not_ tell us which particular design choices it made, or which current technical or legal circumstances it depends upon to be effective.

For example, AGPLv3 and OSL 3.0 are currently considered very strong copyleft licenses.  Their triggers differ: AGPLv3 triggers on providing a network service only if the licensee made changes to the software as originally provided, while OSL triggers on "External Deployment", with or without changes.  Their reaches also vary:  AGPLv3 reaches all "Corresponding Source", including "all the source code needed to generate, install, and (for an executable work) run the object code and to modify the work, including scripts", while OSL reaches only the work licensed and copyright "derivative works" of it.  OSL's trigger is stronger than AGPLv3's trigger, but AGPLv3's reach is strong than OSL's reach.

Over time, as circumstances change and reviewers find more gaps in a license's design and language, a license that began very strong may become weak or even ineffectual, especially in particular circumstances.  GPLv2 was once the strongest well known copyleft license.  Since the appearance of network-copyleft licenses like AGPL, and the changes in the software industry those licenses responded to, GPLv2 no longer seems that strong.  In particular, GPLv2 is largely ineffectual for software libraries designed for use in network services.

## Maintenance

Open source licenses, like open source programs, require maintenance.  Software, the tools and processes we use to make it, and the ways we use it all change, and so does the law.  Changes in operating environment require changes in implementation, to keep achieving the effects developers and their drafters want.

Copyleft and permissive licenses share maintenance tasks in common, like modernization of notice conditions and response to patent threats.  Copyleft licenses face additional problems peculiar to the rules that distinguish them from permissive licenses.  Each copyleft design prompt requires maintenance, to ensure effective choices remain available to copyleft license drafters.  Combinations of specific choices also require maintenance.

## Regulation

The open development community as a whole, or groups within it, might choose to _regulate_ maintenance of copyleft, restricting the acceptable design choices copyleft implementers can make in new copylef licenses, and therefore the strength of accepted copyleft licenses overall.  In theory, regulation could either weaken _or_ strengthen copyleft.  But as a practical matter, sufficiently weak copyleft licenses have the same effects as permissive licenses, and permissive licenses are broadly accepted.  So copyleft regulation functions to weaken accepted copyleft licenses.

The most important school of copyleft regulation has long been a form of self-regulation: "software freedom" as defined by the Free Software Foundation.  Most notably, the FSF has drafted its own licenses to permit the creation, use, and internal distribution of "private changes", by individuals and even very large organizations.  It has rejected stronger copyleft licenses from other drafters---Plan 9, Open Watcom, and RPL---who do not self-regulate in that way.  The Open Source Initiative approved those licenses, indicating acceptance of looser copyleft regulation than FSF.

The underlying law that software licenses rely upon can also regulate copyleft.  That regulation might take the form of substantive limits on what copyleft licenses can accomplish, no matter how they're worded, as well as limits on specific wording or implementation, that lawyers can draft around.  For example, the doctrine of copyright misuse might regulate copyleft reach.  Courts currently disfavor copyright misuse, and have left it mostly unclear, but a new development could impose a limit that drafters could not work around.  In contrast, the legal fact that copyright licenses as such cannot control the right to use software could limit copyleft triggers.  But drafters have worked around that limit, leveraging the fact that in order to use software, licensees have to copy it.  Copyleft drafters write their use rules as copying rules, implicitly or explicitly.

## Purpose

Strong copyleft serves two user constituencies: software freedom activists and businesspeople.  Activists use strong copyleft to exclude proprietary software creators, whose practices they condemn, and with whom they compete, from the benefits of their work.  Businesspeople also use strong copyleft to exclude competitors from the benefits of their work, to preserve advantage while nonetheless accessing some of the benefits of permissive licensing.  Some businesses also use strong copyleft as the basis for "dual licensing" or "selling exceptions": offering private licenses that permit use in proprietary software, which their public copyleft licenses do not.

If a copyleft license's trigger is too weak to cover the most valuable use of a piece of software, the copyleft license becomes ineffective for these purposes.  For example, a copyleft trigger on distribution of software and work based on it, like GPLv2's, fails to trigger on use of that library to provide a web server application, since the web application's creator never distributes software to others.  A stronger copyleft license with a stronger trigger, like OSL, restores copyleft effect for such a library.

Even when a copyleft license's trigger is effective, weakness in reach, licensing, and distribution can render it ineffective overall.  For example, if a copyleft license's trigger covers use of a library to provide a web application, but it reaches only the original library code and any changes to the library, not other parts of the web application, meeting the copyleft requirement may be trivial.  Licensees may continue denying software freedom by keeping the rest of their web application code proprietary, use the copyleft software to compete against its creator, or dodge the need to buy a proprietary-use license, frustrating the licensor's purposes.

## Repurposing

Open source history is full of examples of developers applying a license drafted for one purpose to their own, very different purpose.  Developers _repurpose_ these licenses, because their effects, at least at the time, serve their own purposes, even if they weren't designed to do so.  In particular, many business developers have repurposed the Free Software Foundation's copyleft licenses.

Linus Torvalds describes GPLv2 as a license that requires sharing changes back, characterizing the rest of the license as irrelevant legal details.  That was not the purpose of GPLv2, as stated in its preamble.  According to the FSF, GPLv3 achieves the purposes set out in GPLv2's preamble better than GPLv2 did.  Linus rejects GPLv3 in very strong terms.

Commercial firms that want to share with the open community, but not make their work available to competitors, often repurpose whatever the strongest FSF-drafted copyleft license happens to be at the time.  Rationales vary.  Some share Linus' desire to receive patches back.  Some want to deny their work to their competitors.  Some want to dual license their work, to make money.  The FSF's writing indicate that it _did_ intend its licenses to exclude proprietary competitors.  On that point, business users and the FSF's purposes overlap.  But while the FSF's philosophical writings don't condemn dual licensing, or "selling exceptions", as a practice, making that possible was not among FSF's purposes in drafting licenses.  The FSF itself does not dual license the projects that it stewards.

The FSF also repurposes licenses.  In cases where a free standard competes with a proprietary standard, the FSF recommends the Apache License, Version 2.0, to maximize adoption.  The Apache Foundation did not draft that license to serve the FSF's activist purposes.  It just so happens that in specific circumstances, Apache's license has effects that happen to do so.

## Prior Art

Copyleft licenses have long been promoted and understood as "free for open" licenses: do as you please, but share software you make alike.  As a rule, they have been written not in those general terms, but in far more specific terms, addressing particular kinds of ways to work with software, or particular rights governed by copyright.  Over time, changes in the law, changes in software practice, and broader understanding of the specific language of particular copyleft licenses has led, again and again, to "free for open, except for specific loopholes".

From packaged software to software as a service.  From large projects and frameworks adapted by making changes to more modular libraries and components used almost entirely without change.  From libraries to APIs.  From industry behemoths producing software largely for sale, to industry behemoths producing software largely for internal use.  From three-rule Makefiles to ever more baroque build, bundling, testing, analysis, deployment, monitoring, and debugging chains.  The history of copyleft licenses is largely a history of piecemeal progress, responding to each new development, specifically, to restore copyleft's practical effectiveness.

Very generally:

| Year | License         | Trigger                                                      | Sweep                                                        | License              | Distribution                                         | Purpose               |
| ---- | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | -------------------- | ---------------------------------------------------- | --------------------- |
| 1991 | GPLv2           | distribution of a copy                                       | original code and work based on it                           | same terms           | copies to recipients                                 | activist              |
| 1991 | LGPLv2          | distribution of a copy                                       | original code and work based on it, but not work merely using the library | same terms           | copies to recipients                                 | activist (compromise) |
| 2002 | AGPLv1          | distribution of a copy                                       | original code and work based on it                           | same terms           | copies to recipients and remote users of the program | activist              |
| 2002 | Sybase (Watcom) | non-research, non-personal use                               | original code and work based on it                           | same terms           | publication                                          | business              |
| 2005 | OSL 3.0         | distribution of a copy or providing a network service, with or without changes | original code and work based on it                           | same terms           | copies to recipients                                 | neutral               |
| 2007 | RPL 1.5         | non-research, non-personal use                               | original code, work based on it, and code necessary to run work based on it | same terms           | publication                                          | business              |
| 2007 | GPLv3           | distribution of a copy                                       | original code, work based on it, and all code needed to run and develop work  based on it | same terms or AGPLv3 | copies to recipients                                 | activist              |
| 2007 | AGPLv3          | distribution of a copy or providing a network service with changes | original code, work based on it, and all code needed to run and develop work  based on it | same terms of GPLv3  | copies to recipients                                 | activist (compromise) |
| 2012 | MPL 2.0         | distribution of a copy                                       | original code and changes to it                              | same terms           | copies to recipients                                 | activist (compromise) |

Among these examples, the high water marks are:

- _Trigger_: Sybase, RPL, and OSL, which cover modified and unmodified use to provide to others, such as over a network
- _Reach_: (A)GPLv3, which go beyond work based on the software to other work needed to use and develop it
- _Distribution_: Sybase and RPL, which require publication of source, rather than just providing or offering to specific recipients

