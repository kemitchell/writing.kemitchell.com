---
title: How to Speak Copyleft
description: the missing vocabulary of copyleft design
layout: post
tags:
- Open Source
- Licensing
- Copyleft
- SSPL
- OSI
---

This is the first in [a series inspired by MongoDB's Server Side Public License](/series/SSPL.html) and ensuing debate.

---

What does the Open Source Definition have to say about how strong copyleft licenses can be?  As it turns out, not much that's helpful, and quite a bit that's not.  The Definition's twenty-year-old criteria at best mildly suggest limits on open source copyleft, without offering any terms in which to analyze of express them.

This post offers the missing vocabulary for copyleft licenses and copyleft-license limits, as a bridge to forthcoming posts on the Definition and what those limits should be.

## Copyleft

We can generalize copyleft software licenses as permissive public software licenses with additional rules requiring licensees to share other work alike.  Lawrence Rosen, former counsel for the Open Source Initiative, made this explicit in the tiny textual difference between his permissive [Academic Free License](https://opensource.org/licenses/AFL-3.0) and copyleft [Open Software License](https://opensource.org/licenses/OSL-3.0).

## Design

To implement a copyleft rule, a drafter must make four independent _design decisions_:

1. <a id="trigger"></a>_Trigger_: When must licensees share other work?
2. <a id="reach"></a>_Reach_: What other work must licensees share?
3. <a id="licensing"></a>_Licensing_: On what terms must licensees share that work?
4. <a id="distribution"></a>_Distribution_: How must licensees share source for that work?

Different copyleft licenses answer these questions differently, implementing different <a id="design-choices"></a>_design choices_ in legal terms.

When two copyleft licenses make the same general design choices, we can say they share a common <a id="design-approach"></a>_design approach_, even if they implement their design choices in entirely different language.

## Strength

Generally, the more situations in which a copyleft implementation triggers, the more code it reaches, the more specific the license terms it requires, and the more broadly it requires source to be distributed, the _stronger_ that copyleft license is.

Calling a copyleft license strong thus gives us a general hint about its design, and the expected effects of that design, in practice.  But calling a copyleft license strong does _not_ tell us which particular design choices were made.

For example, AGPLv3 and OSL 3.0 are currently considered strong copyleft licenses.  Their triggers differ.  AGPLv3 triggers on providing a network service only if the licensee made changes to the software as originally provided, while OSL triggers on "External Deployment", with or without changes.  Their reaches also vary.  AGPLv3 reaches all "Corresponding Source", including "all the source code needed to generate, install, and (for an executable work) run the object code and to modify the work, including scripts", while OSL reaches only the work licensed and copyright "derivative works" of it.  OSL's trigger is stronger than AGPLv3's, but AGPLv3's reach is stronger than OSL's.

## Effectiveness

Calling a copyleft license strong doesn't tell us which technical and legal circumstances its design choices depend on for effect, either.  We can't decide whether a strong license is _effective_ in practice without knowing both which design choices it made, and how those choices play out in current technical and legal circumstances.

Over time, as circumstances change and reviewers find more gaps in a license's design and language, a license that began very strong may come to seem weak, and a license that started off effective may become ineffective, especially in particular circumstances.  GPLv2 was once the strongest well known copyleft license.  Since the appearance of network-copyleft licenses like AGPLv1, and the changes in the software industry those licenses responded to, GPLv2 no longer seems that strong.  Neither is GPLv2 so effective as it once way, for the run of all software.  In particular, GPLv2 is largely ineffective for software libraries widely used in network services.

## Maintenance

Open source licenses, like open source programs, require maintenance.  Software, the tools and processes we use to make it, and the ways we use it all change, and so does the law.  Changes in operating environment require changes in design and implementation, to keep achieving the effects developers want.

Copyleft and permissive licenses share maintenance tasks in common, like modernization of notice conditions and response to patent risk.  Copyleft licenses face additional problems peculiar to the rules that distinguish them from permissive licenses.  Each copyleft design decision poses a maintenance burden, to ensure specific, effective design choices remain available to copyleft license implementers.  Implementations of specific design choices likewise require maintenance.  Finally, design approaches require maintenance, as well.

## Regulation

The open development community as a whole, or groups within it, might choose to _regulate_ maintenance of copyleft, restricting the acceptable copyleft rules drafters can write in new licenses, and thereby the strength and effectiveness of copyleft licenses available to those who can't or won't write their own.  In theory, regulation could weaken _or_ strengthen copyleft.  But as a practical matter, sufficiently weak copyleft licenses have the same effects as permissive licenses, and permissive licenses are broadly accepted.  So copyleft regulation functions to weaken accepted copyleft approaches and implementations.

The most important school of copyleft regulation has long been a form of self-regulation: "software freedom" as defined by the Free Software Foundation.  This comes through most clearly in how FSF-drafted licenses permit the creation, use, and internal distribution of "private changes" by individuals and even very large organizations, without distributing our licensing source, even though copyleft could require doing so.  The FSF has rejected stronger copyleft licenses from other drafters that do require sharing of private changes: Plan 9, Open Watcom, and RPL.  The Open Source Initiative approved those licenses, indicating acceptance of looser copyleft regulation than FSF.

The underlying law that software licenses rely upon could also regulate copyleft.  That regulation might take the form of substantive limits on what copyleft licenses can accomplish, no matter how they're worded, as well as limits on specific wording, that lawyers could draft around.  For example, the doctrine of copyright misuse might eventually regulate copyleft reach.  US courts disfavor copyright misuse, leaving it largely unclear, but a new development could impose a limit that drafters could not work around.  In contrast, the fact that copyright licenses as such cannot control the use of software as such could limit copyleft triggers.  But drafters have worked around that limit, leveraging the fact that in order to use software, licensees have to copy it.  Copyleft drafters write their use rules as copying rules, implicitly or explicitly.

For any proposed copyleft regulation, we could ask whether it excludes particular choices for a copyleft design decision, or overall design approaches, by some more general criteria.  A rule prohibiting copyleft from triggering on use of a program would regulate trigger choices.  As a consequence of regulating triggers, the rule would also regulate design approaches, excluding all those that incorporate use-based triggers, be their other design choices weak or strong.  But a rule that if a copyleft license triggers on use, it must limit reach to changes and additions to the licensed work itself would regulate design approaches.  Copyleft licenses might reach more work without triggering on use, or trigger on use without reaching past changes and additions, but could not do both.

## Purpose

Strong copyleft serves two general user bases: software freedom activists and privately motivated upstarts.  Activists use strong copyleft to exclude proprietary software creators, whose practices they condemn, and with whom they compete, from the benefits of their work.  Upstarts also use strong copyleft to exclude others from the benefits of their work, to bestow competitive advantage on open developers, and to motivate submission of improvements back to their projects, all while preserving some advantages of permissive licensing.  Some developers also use strong copyleft as the basis for "dual licensing" or "selling exceptions": vending private licenses that permit use in proprietary software, which their public copyleft licenses do not.

If a copyleft license's trigger is too weak to cover the most valuable use of a piece of software, the copyleft license loses effectiveness for many purposes.  For example, a copyleft trigger on distribution of software and work based on it, like GPLv2's, fails to trigger on use of that library to provide a web server application, since the web application's creator never distributes software to others.  A stronger copyleft license with a stronger trigger, like OSL, makes copyleft effective for such a library once more.

Even when a copyleft license's trigger is effective, weakness in reach, licensing, and distribution can render it ineffective for purpose overall.  For example, if a copyleft license's trigger covers use of a library to provide a web application, but it reaches only the original library code and any changes to the library, not other parts of the web application, meeting the copyleft requirement may be trivial, in effect affording everyone, even closed developers, the benefit of the program.  The license may continue to motivate submission of improvements back.  But it may also facilitate denying software freedom by keeping the rest of the web application code closed, permitting use of the copyleft software to compete against its creator, whether the creator competes with businesses, other open projects, or both, and dodging the need for a paid, proprietary-use license, frustrating these other possible purposes.

## Repurposing

Open source history is full of examples of developers applying a license drafted for one purpose for other, very different purposes.  Developers _repurpose_ licenses because their effects, at least at the time, meet their needs, even if the use case never occurred to the drafter, and because they lack the resources to draft and socialize licenses of their own.  In particular, for lack of a stable organization or coalition representing upstart copyleft users, many such users repurpose the Free Software Foundation's activist copyleft licenses.

Linus Torvalds describes GPLv2 as a license that requires sharing changes back, brushing off the rest of the license as irrelevant legal details.  Securing changes back was not the purpose of GPLv2, and no provision of GPLv2 says anything about sending code back to the licensor.  Most dramatically, because of the FSF's philosophical position on private changes, it avoided having GPLv2 trigger when a developer makes changes, and only triggers when a change is made _and_ the changed version is distributed.  GPLv2's preamble says a great deal that Linus may not agree with.  According to the FSF, GPLv3 achieves the purposes set out in GPLv2's preamble better than GPLv2 did.  But Linus rejects GPLv3 in very strong terms.

Commercial firms that want to share with the open community, but not make their work available to competitors, often repurpose whatever the strongest FSF-drafted copyleft license happens to be at the time.  Rationales vary.  Some share Linus' desire to receive patches back. Some want to empower open developers to compete with closed, for strategic reasons.  Some want to deny their work to their competitors.  The FSF's writing indicates that it _did_ intend its licenses to exclude proprietary competitors.  On that point, business users and the FSF's purposes overlap.  But while the FSF's philosophical writings don't condemn dual licensing, or "selling exceptions", as a practice, making that possible was not among FSF's purposes in drafting licenses.  The FSF itself does not dual license the projects that it stewards.

To be fair, the FSF also repurposes licenses.  In cases where a free standard competes with a proprietary standard, the FSF [recommends the Apache License, Version 2.0](https://www.gnu.org/licenses/license-recommendations.en.html#libraries), to maximize adoption, including among very large firms.  The Apache Foundation did not draft its license to serve the FSF's activist purposes.  It just so happens that in specific circumstances, its license has effects the FSF wants.

## Prior Art

With this vocabulary in hand, we can generalize innovative copyleft licenses by their purposes and design decisions:

| License                        | Trigger                                                                        | Reach                                                                        | License                                  | Distribution                                         |
| ------------------------------ | -------------------------------------------------------------------------------| ---------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------- |
| GPLv2 (activist)               | distribution of a copy                                                         | original code and work based on it                                           | same terms                               | copies to recipients                                 |
| LGPLv2 (activist, compromise)  | distribution of a copy                                                         | original code and work based on it, but not work merely using the library    | same terms or GPLv2+                     | copies to recipients                                 |
| CPL (upstart, compromise)      | distribution of a copy                                                         | original code and work based on it, but not in separate modules              | same terms                               | copies                                               |
| AGPLv1 (activist, hardline)    | distribution of a copy                                                         | original code and work based on it                                           | same terms                               | copies to recipients and remote users of the program |
| Sybase/Watcom (upstart)        | non-research, non-personal use                                                 | original code and work based on it                                           | same terms                               | publication                                          |
| OSL 3.0 (research)             | distribution of a copy or providing a network service, with or without changes | original code and work based on it                                           | same terms                               | copies to recipients and remote users of the program |
| EPLv1 (upstart, compromise)    | distribution of a copy                                                         | original code and work based on it, but not in separate modules              | same terms                               | copies                                               |
| RPL 1.5 (upstart, hardline)    | non-research, non-personal use                                                 | original code, work based on it, and code necessary to run work based on it  | same terms                               | publication                                          |
| GPLv3 (activist)               | distribution of a copy                                                         | original code, work based on it, and all code needed to run and develop work | same terms or AGPLv3                     | copies to recipients                                 |
| AGPLv3 (activist)              | distribution of a copy or providing a network service, with changes            | original code, work based on it, and all code needed to run and develop work | same terms or GPLv3                      | copies to recipients and remote users of the program |
| MPL 2.0 (activist, compromise) | distribution of a copy                                                         | original code and changes to it                                              | same terms, GPLv2+, LGPLv2.1+, or AGPLv3 | copies to recipients                                 |

Among these examples, the strongest design choices are:

- _Trigger_: Sybase, RPL, and OSL, which cover modified and unmodified use
- _Reach_: (A)GPLv3, which reach beyond work based on the software to other work
- _Distribution_: Sybase and RPL, which require publication, rather than just providing or offering downstream

Among these examples, the strongest design approaches are RPL, Sybase/Wacom, OSL, and AGPLv3.
