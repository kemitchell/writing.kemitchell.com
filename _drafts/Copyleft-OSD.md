---
title: Copyleft Maintenance and the Open Source Definition
layout: post
---

What does the Open Source Definition have to say about how strong copyleft licenses can be?  As it turns out, little that is helpful, and a great deal that is not.  The Definition's twenty-year-old criteria at best mildly suggest the proper limits of open source copyleft, without providing any framework or vocabulary for expressing them.

Rather than string ourselves up between the precise minutiae of license terms, on the one hand, and the broad generalizations of the Definition, on the other, we should focus on the reasons copyleft licenses get written and adopted to begin with.  We should acknowledge that drafters' and users' reasons have not always been the same.  And we should ask whether developers who participate in the movement see those goals within the proper scope of "open source".

This post offers a vocabulary for discussing copyleft licenses and copyleft-license limits, as well as a case for sensible limits on copyleft that honor its radical place within the community.

# The Open Source Definition

We could ask three questions about the Open Source Definition as a source of copyleft regulation:

1. Does the Open Source Definition prohibit specific language in copyleft implementations?
2. Does the Open Source Definition prohibit specific copyleft design choices?
3. Does the Open Source Definition prohibit specific combinations of copyleft design choices?

Most OSD criteria that seem to matter for copyleft, when read alone, haven't been read consistently to place any limits on copyleft choices.  One of them, OSD criterion 9, seems to some to imply a limit on copyleft reach, but offers no meaningful guidance for that limit.

## You can't read the OSD alone.

Ignoring history, it's possible to read several criteria of the Open Source Definition, straight off the page, to prohibit copyleft licenses entirely.  Those readings crop up each time a new copyleft license appears seeking to fix some maintenance problem or another, forcing large parts of the conversation to start from before square one, rather than focusing it on what is new.

This is not the fault of honest readers.  Recurring confusion on these basics points demonstrates how general, vague, and ambiguous the Open Source Definition's language was and has become after decades in service, without relevant change.

Generality was intentional.  The Open Source Definition was adapted from the Debian Free Software Guidelines, part of the Debian Social Contract.  The Debian Project drafted and adopted the Guidelines to describe the kinds of licenses project participants recognized and accepted at the time, as a category.

That category included GPLv2, then a very strong copyleft license.   A section of the Guidelines entitled "Example Licenses", removed in the Open Source Definition but still a part of The Debian Social Contract, listed "GPL" first.  As a threshold matter, any reading of any part of the Open Source Definition that calls GPLv2 into question can't reflect the agreement that the Definition embodied at the time.  OSI approval of other copyleft licenses indicate readings of Definition criteria that permitted those licenses, when they were approved.

## Discrimination

Quoting Richard Stallman, from _Copyleft: pragmatic idealism_:

> I make my code available for use in free software, and not for use in proprietary software, in order to encourage other people who write software to make it free as well.  I figure that since proprietary software developers use copyright to stop us from sharing, we cooperators can use copyright to give other cooperators an advantage of their own: they can use our code.

That is discrimination.  We might call it reciprocity, fair competition, or the golden rule at work.  But it is discrimination.

Evidently not the kind of discrimination OSD prohibits.  OSI has approved all of the major licenses stewarded by Stallman's foundation, the Free Software Foundation.

### Field of Endeavor Discrimination

Criterion 6 of the Open Source Definition reads:

> **No Discrimination Against Fields of Endeavor**
>
> The license must not restrict anyone from making use of the program in a specific field of endeavor.  For example, it may not restrict the program from being used in a business, or from being used for genetic research.

This language was brought over from the Debian Free Software Guidelines without any changes.

Ignoring open source licensing history, it's possible to read OSD criterion 6 to prohibit all copyleft licenses.  After all, as a practical matter, copyleft terms prevent use of copyleft software in the creation of closed software, in at least some ways.  How can we square that plain reading with a long list of approved copyleft licenses?

Different readers answer that question in different ways.  Some focus on "restriction".  Some focus on "use".  Some focus on "field of endeavor".

#### "Restriction"

Some open source license practitioners distinguish "restrictions", license terms that carve permission for specific actions out the permission granted by a license, and "conditions", which add extra requirements to meet after taking action that a license permits.  Prohibitions on running, sharing, or changing for commercial purposes are almost always spoken of as restrictions.  Copyleft rules are almost always spoken of as conditions.  Notice-retention rules, which require keeping copies of copyright notices and license terms with copies of software, are another kind of condition.

The terms "restriction" and "condition" are a part of the open licensing jargon.  But it's not at all clear that the distinction reflects any legal difference.

To enforce a copyright license for software, copyright holders bring lawsuits for copyright infringement, at a minimum.  Copyright infringement lawsuits claim that others have exercised exclusive rights of the copyright holder---making copies, distributing to the public, or making new work based on the old work---without permission.  For an infringement lawsuit based on copyleft, the claim is that the licensee went beyond the permission they received under the public license by failing to share and license source code as required.  Whether a defendant lacked permission because they didn't have permission to distribute code without source or a license in the first place---a restriction---or because they had permission, but failed to meet an after-the-fact requirement for using it---a condition---the legal claim is still infringement.

In the end, a copyright license creates a list of things that a licensee can do with a work of copyrighted software.  Everything not covered by the license or an exception in copyright law, like fair use, the licensee may not do.  Either the licensee had permission to do what they did, or they committed infringement.

I've heard other lawyers explain that the difference alludes to remedies: what you can get a court to do for you, when you sue another for infringement and win.  All lawyers agree that successful infringement suits can lead to injunctions, or court orders, for the defendant to stop working with the software.  Most lawyers I've spoken to doubt, however, that courts will grant court orders requiring defendants to fulfill conditions.  For example, most lawyers seem to agree that courts will issue orders to stop making and distributing proprietary software in a way that breaks a copyleft rule.  But most lawyers also agree that courts won't issue orders forcing defendants to share their source code and license it as required to satisfy the copyleft rule.  Rather, courts will award the copyright holder money damages as compensation for infringement.

Even if there were a clear legal distinction, based on remedies or otherwise, it's not clear that the Open Source Definition means "restrict" in any particularly legal way.  The Definition wasn't written by lawyers.  It addresses a legal topic, license terms, but uses different terms than an English-speaking copyright lawyer would.

Still, if "restriction" meant anything specific, that usage probably survives among open licensing community members.  So long as copyleft licenses don't prohibit use in closed software outright, but instead impose a condition of making that software open, OSD criterion 9 doesn't pose a problem.

#### "Use"

Conditions in open source licenses are almost always written to apply to public distribution, preparation of derivative works, or both.  The triggers in the earliest copyleft licenses were written in terms of these actions.

Newer copyleft licenses, in particular copyleft licenses addressing the use of software to provide services over a network, go beyond these actions, explicitly or implicitly.  Some practitioners read those newer conditions to affect "use".

US copyright law enables copyright holders to control three kinds of actions through licensing:

1. reproduction of their software in copies
2. distribution of copies of their software to the public
3. preparation of derivative works, or works based on, their software

Under copyright law, owners of copyright do _not_ have an explicit right to control and license use, or execution, of their software.  However, creating a copy of software---for installation, loading into RAM for execution, and so on---is an unavoidable step in running it.  Since copyright holders can control reproduction of their software in copies, they have indirect power to control how their software is run.

Some licenses, like OSL, say "use" in their trigger language.  Other licenses, like AGPLv3, seem to take great pains to avoid saying "use".  Regardless of wording, a copyright license can only control the actions covered by copyright.  Providing services to others over a network is not distribution to the public or preparing a derivative work under copyright law.  When a copyright license puts conditions on that action, it puts a condition on reproduction in copies, and therefore indirectly on use.

OSD crition 6 has not prevented copyleft licenses from setting rules about use, via reproduction in copies, that require sharing back.  Neither has OSD criterion 6 required copyleft licenses to studiously avoid saying "use".

#### "Field of Endeavor"

If we count copyleft rules as "restrictions" anyway, and accept that some copyleft triggers affect "use", we could still decide that proprietary software development doesn't count as a "field of endeavor".  That would explain how copyleft licenses haven't fallen afoul of OSD criterion 6.

Field of endeavor isn't a term of art in intellectual property law.  The term is used in US immigration law, but again, there's no reason to believe the Definition means to invoke that usage specifically, or that it would help.

OSI and open source licensing history do provide a number of examples of fields of endeavor leading to rejection.  The Definition itself mentions business and genetic research.  OSI's annotated Definition emphasizes commercial use.  Software licenses prohibiting military use have also been rejected.

As both OSI and groups like FSF have been quick to emphasize, "commercial" and "proprietary" are not synonymous.  Many firms produce, distribute, and develop open source software for pay or other commercial advantage.

Businesses, genetic researchers, and military personnel can employ open as well as closed software.  The choice to use or release open software stands independent of their choices to endeavor in those fields.

### Person and Group Discrimination

OSD criterion 5 reads:

> **No Discrimination Against Persons or Groups**
>
> The license must not discriminate against any person or group of persons.

This language was brought over from the Debian Free Software Guidelines without any changes.  It has typically been used to exclude licenses that blacklist particular people or firms by name or general category, such as lists of firms or particular national governments.

For any field of endeavor, we could define a group: the group of people endeavoring in that field.  People developing closed software.  People working at firms developing closed software.  That reading would disqualify approved copyleft licenses, including GPLv2.  But history shows that is not the consensus the Open Source Definition was meant to express.

## Other Software Restriction

The only significant change to turn DFSG criterion 9 into OSD criterion 9 was a single word in the heading:

<blockquote><p><strong>License Must Not <del>Contaminate</del><ins>Restrict</ins> Other Software</strong></p><p>The license must not place restrictions on other software that is distributed along with the licensed software. For example, the license must not insist that all other programs distributed on the same medium must be <del>free</del><ins>open-source</ins> software.</p></blockquote>

This criterion speaks the most of the Definition's roots in Debian's Guidelines.

Debian remains a large and popular Linux distribution.  As a matter of policy, the Debian project turns a great many pieces of software, from large to very small, into "packages".  Debian packages get distributed through a worldwide network of official, mirror, and specialized repositories, ready to be installed through Debian's package management tool, `apt`.  Debian still makes system installers and packages available via physical media, often CD-ROMs, DVD-ROMs, and flash-based USB hard drives.

The Debian Project distributes a lot of packages.  In that, Debian infrastructure and programs function a bit like a shipping network.  To make that network function efficiently, without creating risk for itself or volunteers providing infrastructure, Debian packages must follow rules quite a bit like rules for containerized shipping.  Packages must act as interchangeable units.  It cannot matter where they're stored, how they're shipped, or what they're stacked next to.

License terms can break those rules.  They can grant permission only to distribute along with other open software, not proprietary.  They can require prominent billing on lists of contents of particular media on which they're reproduced.  Debian's infrastructure and software can't implement every rule-breaking license's terms in software, and ensure they're followed.  To prevent that explosion of complexity, which might make package distribution totally unworkable, Debian excluded software that creates those problems.

# What Now?
