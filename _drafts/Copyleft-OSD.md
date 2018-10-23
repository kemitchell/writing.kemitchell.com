---
title: Copyleft Maintenance and the Open Source Definition
layout: post
---

What does the Open Source Definition have to say about how strong copyleft licenses can be?  As it turns out, little that is helpful, and a great deal that is not.  The Definition's criteria are at best mildly suggestive of where the proper limits of a copyleft license should be, a reflection for prior-held views.

Rather than lose ourselves in the precise minutiae of license terms, on the one hand, and the loose generalization of the Definition, on the other, we should focus on the reasons copyleft licenses were written and adopted to begin with.  We should acknowledge that those reasons were not always the same.  And we should ask whether the developers identify with the open source movement identify those goals with the proper scope of "open source".

# Maintenance

Open source licenses, like open source programs, require maintenance.  Software, the tools and processes we use to make it, and the ways we use it change, and so does the law.  Changes in operating environment require changes in implementation, to keep achieving the functionality developers want.

Copyleft and permissive licenses share maintenance tasks in common, like modernization of notice conditions and response to patent threats.  Copyleft licenses face additional problems peculiar to the rules that distinguish them from permissive licenses.

We can generalize copyleft rules as answering four questions:

1. _Trigger_: When must users share their software?
2. _Sweep_: What software must users share?
3. _Licensing_: How must users license their software?
4. _Distribution_: How must users share source for their software?

Different copyleft licenses answer these questions differently.  Generally, the more cases in which a copyleft rule triggers, the more code in its sweep, the more specific the license terms that must be applied to it, and the broader source must be distributed, the stronger we say that copyleft license is.  Over time, as circumstances change and reviewers find more bugs in the license's implementation, a license that began very strong may become weak.

# Strength

Strong copyleft serves both activists and upstart companies.  Activists use strong copyleft to exclude proprietary software creators, whose practices they oppose, and with whom they compete, from the benefits of their work.  Companies also use strong copyleft to exclude competitors from the benefits of their work.  Some companies also use strong copyleft as the basis for "dual licensing" or "selling exceptions", selling private licenses that permit what their public license does not: use in proprietary software development.

If a copyleft license's trigger is too weak to cover the most valuable use of a piece of software, the copyleft license becomes ineffective for these purposes.  For example, a copyleft trigger that fires on distribution of a library or code based on it to others, like GPLv2's, fails to trigger for use of that library to provide a web server application, since the web application's creator never distributes their software to others.  A stronger copyleft license with a stronger trigger, like OSL, makes copyleft work for the library.

Even when a copyleft license's trigger is effective, weakness in sweep, licensing, and distribution rules can render it ineffective overall.  For example, if a copyleft license's trigger covers use of a library to provide a web application, but its sweep only covers the original library code and any changes to the library, not other parts of the web application, meeting the copyleft requirement may be trivial.  Licensees may continue denying software freedom by keeping the rest of their web application code proprietary, use the copyleft software to compete against its creator, or dodge the need to buy a proprietary-use license.

# Prior Art

Copyleft licenses have long been promoted and understood as "free for open" licenses: do as you please, but share software you make alike.  But that is not how they've been implemented.  Over time, changes in the law, changes in software practice, and broader understanding of the specific language of particular copyleft licenses has led to "free for open, except with specific loopholes".

From packaged software to software as a service.  From large projects and frameworks adapted by making changes to more modular libraries and components used almost entirely as released.  From libraries to APIs.  From industry behemoths producing software largely for sale, to industry behemoths producing software largely for internal use.  From three-step Makefiles to ever more baroque build, bundling, testing, analysis, deployment, monitoring, and debugging chains.  The history of copyleft licenses is largely a history of piecemeal progress, responding to each new development, rather specifically, to restore copyleft's practical strength.

In very general terms:

| Year | License         | Trigger                                                      | Sweep                                                        | License              | Distribution         |
| ---- | --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ | -------------------- | -------------------- |
| 1991 | GPLv2           | distribution of a copy                                       | original code and work based on it                           | same terms           | copies to recipients |
| 1991 | LGPLv2          | distribution of a copy                                       | original code and work based on it, but not work merely using the library | same terms           | copies to recipients |
| 2002 | Sybase (Watcom) | non-research, non-personal use                               | original code and work based on it                           | same terms           | publication          |
| 2005 | OSL 3.0         | distribution of a copy or providing a network service, with or without changes | original code and work based on it                           | same terms           | copies to recipients |
| 2007 | RPL 1.5         | non-research, non-personal use                               | original code, work based on it, _and code necessary to run work based on it | same terms           | publication          |
| 2007 | GPLv3           | distribution of a copy                                       | original code, work based on it, and all code needed to run and develop work  based on it | same terms or AGPLv3 | copies to recipients |
| 2007 | AGPLv3          | distribution of a copy or providing a network service with changes | original code, work based on it, and all code needed to run and develop work  based on it | same terms of GPLv3  | copies to recipients |
| 2012 | MPL 2.0         | distribution of a copy                                       | original code and changes to it                              | same terms           | copies to recipients |

Among these examples, the high water marks are:

- _Trigger_: Sybase, RPL, and OSL, which cover modified and unmodified use to provide to others, such as over a network
- _Sweep_: (A)GPLv3, which go beyond work based on the software to other work needed to use and develop it 
- _Distribution_: Sybase and RPL, which require publication of source, rather than just providing or offering to specific recipients

# OSD

What does the Open Source Definition have to say about the four choices facing copyleft license drafters?  As it turns out, nothing very helpful.

Most OSD criteria that seem to matter for copyleft terms, when read alone, haven't been read consistently to place any limits on copyleft choices.  One of them, OSD criterion 9, at least begs the important question of copyleft sweep, but offers no details or guiding principles.  History shows it was meant and understood to stop a much more basic form of license overreach.

## You can't read the OSD alone.

Ignoring history, it's possible to read several criteria of the Open Source Definition, straight off the page, to prohibit copyleft licenses entirely.  Those readings crop up each time a new copyleft license appears seeking to fix some maintenance problem or another, forcing large parts of the conversation to start from before square one, rather than focusing it on what is new.  That is not the fault of honest readers.  Recurring confusion on these basics points demonstrates how general, vague, and ambiguous the Open Source Definition's language remains.

Generality was intentional.  The Open Source Definition was adapted from the Debian Free Software Guidelines, part of the Debian Social Contract.  The Debian Project drafted and adopted the Guidelines to describe the kinds of licenses project participants recognized and accepted at the time, as a category.

That category included GPLv2, a strong copyleft license.   A section of the Guidelines entitled "Example Licenses", removed in the Open Source Definition but still a part of The Debian Social Contract, listed "GPL" as the first example.

## Discrimination

Quoting Richard Stallman, from _Copyleft: pragmatic idealism_:

> I make my code available for use in free software, and not for use in proprietary software, in order to encourage other people who write software to make it free as well.  I figure that since proprietary software developers use copyright to stop us from sharing, we cooperators can use copyright to give other cooperators an advantage of their own: they can use our code.

That is discrimination.  We might call it reciprocal discrimination, or fair competition.  But discrimination it is.

Evidently not the kind of discrimination OSD prohibits, however.  OSI has approved all of the major licenses stewarded by Stallman's foundation, the Free Software Foundation.

### Field of Endeavor Discrimination

Criterion 6 of the Open Source Definition reads:

> **No Discrimination Against Fields of Endeavor**
>
> The license must not restrict anyone from making use of the program in a specific field of endeavor. For example, it may not restrict the program from being used in a business, or from being used for genetic research.

This language was brought over from the Debian Free Software Guidelines without any changes.

Ignoring open source licensing history, it's possible to read OSD criterion 6 to prohibit all copyleft licenses.  After all, as a practical matter, copyleft terms prevent use of copyleft software in the creation of closed software, in at least some ways.  How can we square that plain reading with a long list of approved copyleft licenses?

Different readers answer that question in different ways.  Some focus on "restriction".  Some focus on "use".  Some focus on "field of endeavor".

#### "Restriction"

Some open source license practitioners distinguish "restrictions", license terms that carve permission for specific actions out the permission granted by a license, and "conditions", which add extra requirements to meet after taking action that a license permits.  Copyleft rules are almost always spoken of as conditions, rather than restrictions.  Notice-retention rules, which require keeping copies of copyright notices and license terms with copies of software, are another kind of condition.

The terms "restriction" and "condition" are a part of the jargon specialists use to talk about open source licenses.  But it's not at all clear whether that distinction reflects any real legal difference.

To enforce a copyright license for software, copyright holders bring lawsuits for copyright infringement.  Copyright infringement lawsuits claim that others have exercised exclusive rights of the copyright holder---making copies, distributing to the public, or making new work based on the old work---without permission.  For an infringement lawsuit based on copyleft, the claim is that the licensee went beyond the permission they received under the public license by failing to share and license source code as required.  Whether a defendant lacked permission because they didn't have permission to distribute code without source or a license in the first place---a restriction---or because they had permission, but failed to meet an after-the-fact requirement for using it---a condition---the legal claim is still infringement.

In the end, a copyright license creates a list of things that a licensee can do with a work of copyrighted software.  Everything not covered by the license or an exception in copyright law, like fair use, the licensee may not do.  Either the licensee had permission to do what they did, or committed infringement.

I've heard other lawyers explain that the difference alludes to remedies: what you can get a court to do for you, when you sue another for infringement and win.  All lawyers agree that successful infringement suits can lead to injunctions, or court orders, for the defendant to stop working with the software.  Most lawyers I've spoken to doubt, however, that courts will grant court orders requiring defendants do what conditions require.  For example, most lawyers seem to agree that courts will issue orders to stop making and distributing proprietary software in a way that breaks a copyleft license rule.  But most lawyers also agree that courts won't issue orders forcing defendants to share their source code and license it as required to satisfy those conditions.  Rather, courts will award the copyright holder money damages as compensation for the infringement.

Even if there were a clear legal distinction, based on remedies or otherwise, it's not clear that the Open Source Definition means "restrict" in a particular legal way.  The Definition wasn't written by lawyers.  It addresses a legal topic, license terms, but uses different terms than an English-speaking copyright lawyer would.

#### "Use"

Conditions in open source licenses are almost always written to apply to "distribution" and "making changes".  The triggers in the earliest copyleft licenses were also written only in terms of those actions.  Newer copyleft licenses, in particular copyleft licenses addressing the use of software to provide services over a network, go beyond those actions, explicitly or implicitly.  Some practitioners read those newer conditions to affect "use".

Copyright law enables copyright holders to control three kinds of actions through licensing:

1. reproduction of their software in copies
2. distribution of copies of their software to the public
3. preparation of derivative works, or works based on, their software

Under copyright law, owners of copyright do _not_ have an explicit right to control and license use, or execution, of their software.  However, creating a copy of software---for installation, loading into RAM for execution, and so on---is an unavoidable step of running it.  That gives copyright holders indirect power to control how their software is run.

Some licenses, like OSL, say "use" in their trigger language.  Other licenses, like AGPLv3, seem to take great pains to avoid saying "use".  Regardless of wording, a copyright license can only control the actions covered by copyright.  Providing services to others over a network is not distribution to the public or preparing a derivative work under copyright law.  When a copyright license puts conditions on that action, it puts a condition on reproduction in copies, and therefore indirectly on use.

#### "Field of Endeavor"

If we count copyleft rules as "restrictions", and accept that some copyleft triggers affect "use", we could still decide that proprietary software development doesn't count as a "field of endeavor".  That would explain how GPL and copyleft licenses don't fall afoul of OSD criterion 6.

Field of endeavor isn't a term of art in intellectual property law.  The term is used in US immigration law, but again, there's no reason to believe the Definition means to invoke that usage specifically, or that it would help.

OSI and open source licensing history do provide a number of examples of fields of endeavor leading to rejection.  The Definition itself mentions business and genetic research.  OSI's annotated Definition emphasizes commercial use.  Software licenses prohibiting military use have also been rejected.

As both OSI and groups like FSF have been quick to emphasize, "commercial", "business", and "proprietary" are not and need not be synonyms.  Many firms produce, distribute, and develop open source software for pay or other commercial advantage.

Businesses, genetic researchers, and military personnel all employ open as well as closed software.  The choice to engage in those fields of endeavor is evidently independent of choices to use or release open software.

### Person and Group Discrimination

OSD criterion 5 reads:

> **No Discrimination Against Persons or Groups**
>
> The license must not discriminate against any person or group of persons.

This language was brought over from the Debian Free Software Guidelines without any changes.  It has typically been used to exclude licenses that blacklist particular people or firms by name or general category, such as lists of firms and particular governments.

For any field of endeavor, we could define a group: the group of people endeavoring in that field.  People developing closed software.  People working at firms developing closed software.  That reading would disqualify approved copyleft licenses, including GPLv2.  But history shows that reading can't be right.

## Other Software Restriction

The only significant change to turn DFSG criterion 9 into OSD criterion 9 was a single word in the heading:

<blockquote><p><strong>License Must Not <del>Contaminate</del><ins>Restrict</ins> Other Software</strong></p><p>The license must not place restrictions on other software that is distributed along with the licensed software. For example, the license must not insist that all other programs distributed on the same medium must be <del>free</del><ins>open-source</ins> software.</p></blockquote>

This criterion speaks the most of the Definition's roots in Debian's Guidelines.

Debian remains a large and popular Linux distribution.  As a matter of policy, the Debian project turns a great many pieces of software, from large to very small, into "packages".  Debian packages get distributed through a worldwide network of official, mirror, and specialized repositories, ready to be installed through Debian's package management tool, `apt`.  Debian still makes system installers and packages available via physical media, often CD-ROMs, DVD-ROMs, and flash-based USB hard drives.

The Debian Project distributes a lot of packages.  In that, Debian infrastructure and programs function a bit like a shipping network.  To make that network function efficiently, without creating risk for itself or volunteers providing infrastructure, Debian packages must follow rules quite a bit like rules for containerized shipping.  Packages must act as interchangeable units.  It cannot matter where they're stored, how they're shipped, or what they're stacked next to.

License terms can break those rules.  They can grant permission only to distribute along with other open software, not proprietary.  They can require prominent billing on lists of contents of particular media on which they're reproduced.  Debian's infrastructure and software can't implement every rule-breaking license's terms in software, and ensure they're followed.  To prevent that explosion of complexity, which might make package distribution totally unworkable, Debian excluded software that creates those problems.

# Breaking the Cycle