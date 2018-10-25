---
title: Open Source Definition as Copyleft Regulation
layout: post
---

This is the second in [a series inspired by MongoDB's Server Side Public License](/series/SSPL.html) and ensuing debate.  It builds on [the first](https://writing.kemitchell.com/2018/10/24/How-to-Speak-Copyleft.html), which sets out a vocabulary of copyleft design and regulation used here.

---

We could ask three questions about the Open Source Definition as a source of copyleft regulation:

1. Does the Open Source Definition prohibit specific language in copyleft implementations?
2. Does the Open Source Definition prohibit specific copyleft design choices?
3. Does the Open Source Definition prohibit categories of copyleft design approaches?

Most OSD criteria that seem to matter for copyleft, when read alone, haven't been read consistently to place any limits on copyleft choices.  One of them, OSD criterion 9, seems to some to imply a limit on copyleft reach, but offers no meaningful guidance for that limit.

## You can't read the OSD alone.

Ignoring history, it's possible to read several criteria of the Open Source Definition, straight off the page, to prohibit copyleft entirely.  Those readings crop up each time a new copyleft license appears seeking to fix some maintenance problem or another, forcing large parts of the conversation to start from before square one, rather than what is new.

This is not the fault of honest readers.  Recurring confusion on these basics points demonstrates how general, vague, and ambiguous the Open Source Definition's language was and has become after decades in service, without relevant change.

Generality was intentional.  The Open Source Definition was adapted from the [Debian Free Software Guidelines](https://www.debian.org/social_contract#guidelines), part of the [Debian Social Contract](https://www.debian.org/social_contract).  The Debian Project drafted and adopted the Guidelines to describe the kinds of licenses project participants recognized and accepted at the time, as a category.

That category included GPLv2, then a very strong activist copyleft license.   A section of the Guidelines entitled "Example Licenses", removed in the Definition but still a part of Guidelines, listed "GPL" first.  As a threshold matter, any reading of any part of the Open Source Definition that calls GPLv2 into question can't reflect the agreement that the Definition embodied at the time.  OSI approval of other copyleft licenses indicate readings of Definition criteria that permitted those licenses, when they were approved.

## Discrimination

Quoting Richard Stallman, from _Copyleft: pragmatic idealism_:

> I make my code available for use in free software, and not for use in proprietary software, in order to encourage other people who write software to make it free as well.  I figure that since proprietary software developers use copyright to stop us from sharing, we cooperators can use copyright to give other cooperators an advantage of their own: they can use our code.

That is discrimination.  We might call it reciprocity, fair competition, or the golden rule applied.  But it is discrimination.

Evidently not the kind of discrimination OSD prohibits.  OSI has approved all of the major licenses drafted by the Free Software Foundation, which Stallman founded.

### Field of Endeavor Discrimination

Criterion 6 of the Open Source Definition reads:

> **No Discrimination Against Fields of Endeavor**
>
> The license must not restrict anyone from making use of the program in a specific field of endeavor.  For example, it may not restrict the program from being used in a business, or from being used for genetic research.

This language was copied from the Debian Free Software Guidelines without change.

Ignoring open source licensing history, it's possible to read OSD criterion 6 to prohibit all copyleft licenses.  After all, as a practical matter, copyleft terms prevent use of copyleft software in the creation of closed software, in at least some ways.  How can we square that plain reading with a long list of approved copyleft licenses?

Different readers answer that question differently.  Some focus on "restriction".  Some focus on "use".  Some focus on "field of endeavor".

#### Restriction

Copyright law gives copyright holders control over [a specific list of actions](https://www.gpo.gov/fdsys/search/pagedetails.action?granuleId=USCODE-2017-title17-chap1-sec106&packageId=USCODE-2017-title17&fromState=) that others might like to take with the copyrighted work.  Under US law, in general terms, those actions are making copies, sharing copies publicly, and making changes or new work based on the copyrighted work.

Some open source license practitioners distinguish "restrictions", which hold back permission to take some of those actions, and "conditions", which allow those actions, but add requirements to meet after doing what's allowed.  Prohibitions on copying, sharing, or building for commercial purposes are almost always spoken of as restrictions.  Notice-retention rules, which require keeping copies of copyright notices and license terms with copies of software, are a kind of condition.  Copyleft rules are almost always spoken of as conditions.

The terms "restriction" and "condition" are a part of open source licensing jargon.  But it's not clear they reflect any underlying legal difference.

To enforce a copyright license for software, copyright holders bring lawsuits for copyright infringement: claims that others took action controlled by copyright without a license from the copyright holder.  For an infringement lawsuit based on copyleft, the claim is that the licensee went beyond the permission they received under the public license by failing to distribute and license source code for other work, as required.  Whether a defendant lacked permission because they didn't have permission to take an action with closed source---a "restriction"---or because they had permission to do as they did, but failed to meet an after-the-fact requirement of distributing and licensing source code---a "condition"---the legal claim is copyright infringement.

In the end, a copyright license creates a list of things that a licensee can do with a work of copyrighted software.  Everything not covered by the license or an exception, like fair use, is infringement.  Either the license gave permission to do what the defendant did, or the defendant committed infringement.

I've heard other lawyers explain the difference in terms of legal "remedies": what you can get a court to do for you, when you sue another for infringement and win.  All lawyers agree that successful infringement suits can lead to injunctions, or court orders, for the defendant to stop taking action with the software.  For example, most lawyers seem to agree that courts will issue orders to stop making and distributing proprietary software in a way that breaks a copyleft rule.  But most lawyers I've spoken to doubt that courts will grant court orders requiring defendants to fulfill conditions.  Courts won't issue orders forcing defendants to share their source code and license it as required to satisfy the copyleft rule.  Rather, courts will award the copyright holder money damages as compensation for infringement.  Legal confusion on this point contributed to the fear, uncertainty, and doubt about copyleft licenses as "viral" licenses that could force large companies to share their closed software.

Even if there _were_ a clear legal distinction between restrictions and conditions, based on remedies or otherwise, it's not clear that the Open Source Definition means "restrict" in any particularly legal way.  The Definition wasn't written by lawyers.  It addresses a legal topic, license terms, but uses different terms than an English-speaking copyright lawyer would.  It never uses the word "condition", or even the word "copyright".

Neither is it clear that the Definition uses "restrict" in the way that open licensing specialists do, or that their peculiar use of "restriction" comes from the Definition.  More likely, the Definition was written---and more crucially, understood---to use "restrict" in the ordinary way.  Per OED:

> To limit (a person or thing); to confine _to_ or _within_ certain limits.
>
> To prohibit or prevent _from_.

I would read "restrict anyone from making use of the program in a specific field of endeavor", in common, everyday English, to cover rules that make "use" in a "specific field of endeavor" copyright infringement.

#### Use

The everyday meaning of "use" is extremely general.   But some nonetheless read "use" in OSD 6 to mean specifically "use" in the sense of running a program, or perhaps "use" as under patent law.  Others read "use" in the sense of taking any of the actions governed by copyright.

Conditions in open source licenses are almost always written to apply to sharing copies publicly, making changes or new software based on the licensed software, or both.  Triggers in the earliest copyleft licenses speak in terms of these actions.  Newer copyleft licenses, in particular "network copyleft" licenses that trigger on provision of the software as a service to others over a network, go beyond sharing, making changes, and building new software, explicitly or implicitly.

If "use" in OSD 6 has its plain, everyday meaning, or alternatively if "use" has the same meaning as under patent law, "restrict anyone from making use of the program" would describe copyleft conditions that prevent licensees from distributing copyleft software with closed changes, when the copyleft license requires changes to be distributed under the same copyleft license terms.  The question would then become [whether distributing closed software is a "specific field of endeavor"](#field-of-endeavor).

If "use" in OSD 6 means specifically running the program, we need to dig a bit deeper.

Under copyright law, owners of copyright do _not_ have an explicit right to control and license running of their software.  However, copying software is an unavoidable step in running it, for installation, loading into RAM for execution, and so on.  Since copyright holders _can_ control copying of their software, they have indirect power to control running of their software.  A [specific section of US copyright law](https://www.gpo.gov/fdsys/search/pagedetails.action?granuleId=USCODE-2017-title17-chap1-sec117&packageId=USCODE-2017-title17&fromState=) makes an exception to this rule, for copies of software that users own, especially when purchased as a part of a package, with a computing device.  But [well known federal case law](https://en.wikipedia.org/wiki/Vernor_v._Autodesk,_Inc.) indicates that having a license, especially with one with notable use restrictions, is not the same as owning a copy.

Some strong copyleft licenses, like [OSL](https://opensource.org/licenses/OSL-3.0), say "use" in their trigger language.  Other licenses, like [AGPLv3](https://www.gnu.org/licenses/agpl-3.0.en.html), seem to take great pains to avoid saying "use".  Regardless of wording, a copyright license can only control the actions covered by copyright.  Providing services to others over a network is not sharing copies publicly or making changes or new work based on the software.  The only action governed by copyright left is copying.  When a copyright license makes rules about running a program, it makes rules about making copies as part of running the program.  Those rules require copying and sharing when licensees otherwise would not. 

#### Specific Field of Endeavor

If we count copyleft rules as "restrictions" anyway, and accept that some copyleft licenses trigger on "use", we could still decide that proprietary software development doesn't count as a "specific field of endeavor".  That would explain how copyleft licenses haven't fallen afoul of OSD criterion 6.

The term "field of endeavor" has no specific meaning in intellectual property law.  The term does appear in US immigration law, but again, there's no reason to believe the Definition means to invoke that usage specifically, or any legal definition.

OSI and open source licensing history do provide a number of examples of specific fields of endeavor leading to rejection.  The Definition itself mentions business and genetic research.  OSI's annotated Definition emphasizes commercial use.  Software licenses prohibiting military use have also been rejected.

As both OSI and groups like FSF have been quick to emphasize, "commercial" and "proprietary" are not synonyms.  Many firms produce, distribute, and develop open source software for pay or other commercial advantage.

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
