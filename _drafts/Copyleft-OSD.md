---
title: Open Source Definition as Copyleft Regulation
layout: post
tags:
- SSPL
- Open Source
- Licensing
---

This is the second in [a series inspired by MongoDB's Server Side Public License](/series/SSPL.html) and ensuing debate.  It builds on [the first](https://writing.kemitchell.com/2018/10/24/How-to-Speak-Copyleft.html), which sets out a vocabulary of copyleft design and regulation used here.

---

We could ask three questions about the [Open Source Definition](https://www.opensource.org/osd) as a source of copyleft regulation, or rules that limit the strength of copyleft:

1. Does the Open Source Definition prohibit specific language in copyleft implementations?

   For example:  Does OSD prohibit use of the term "restriction"?

2. Does the Open Source Definition prohibit specific copyleft design choices?

   For example:  Does OSD prohibit triggering on running software without changes to provide network services?

3. Does the Open Source Definition prohibit copyleft design approaches more generally?

   For example:  Does OSD prohibit designs that trigger on network use and reach beyond derivative works of the licensed software?  Designs that seem too strong, in some other way?

In the end, Definition criteria that seem to matter for copyleft haven't been read to place any such consistent limits on open source copyleft licenses.  One of them, criterion 9, seems to some to imply a limit on copyleft reach, but offers no meaningful guidance on where that limit lies.  As a result, overall, the Definition offer no good framework for copyleft regulation.

The Definition was written to generalize a class of public software licenses that included, at the time, just one popular, general-purpose copyleft form.  Perhaps as a consequence, the Definition offers no actionable framework for regulating maintenance of copyleft licenses.  To see why, we'll first review a couple [common mistakes](#common-mistakes) that lead to implausible interpretations.  Then we'll dive into the [discrimination](#discrimination) and [contamination](#contamination) criteria that tend to come up in copyleft discussions, one by one.

## Common Mistakes

The text of Open Source Definition is admirably terse and perhaps inevitably ambiguous, affording several plausible readings of each criterion.  There is not enough in the Definition itself to narrow down to just one evidently correct meaning per requirement.  To select from among plausible meanings, we have to look past the page.

Some readers forget to look _outside_ the text, and fixate on readings that don't make sense in the context of the Definition's history.  Others read between the lines, arriving at conclusions that very general language nonetheless has one very specific meaning.

### Excluding Copyleft Generally

Ignoring history, it's possible to read several criteria of the Open Source Definition, straight off the page, to prohibit copyleft licenses entirely.  These readings crop up each time a new, stronger copyleft license appears, forcing large parts of the conversation to start from before square one, rather than from where the debate left off the last time.  The generality of the Definition invites these readings.

Generality was intentional.  In fact, generalization was the point.  The Open Source Definition was adapted from the [Debian Free Software Guidelines](https://www.debian.org/social_contract#guidelines), which were made part of the [Debian Social Contract](https://www.debian.org/social_contract) in 1997.  The Debian Project drafted and adopted the Guidelines to describe the kinds of licenses project participants recognized and accepted at that time, as a category of license terms.

That category included [GPLv2](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html), then considered a very strong activist copyleft license, and a very popular choice.  A section of the Guidelines entitled "Example Licenses", removed in the Definition but still a part of Guidelines, lists "GPL" first.  The Open Source Initiative approved GPLv2 under its adaptation of the Guidelines.

As a threshold matter, any reading of any criterion of the Open Source Definition that excludes GPLv2 can't reflect the meaning of the Definition.  The Open Source Initiative has since approved other, stronger copyleft licenses.  Readings of the Definition criteria that exclude those licenses can't reflect how the Definition was understood since.  They don't reflect how OSI has continued to approve new copyleft licenses in substance, even as it tended to downplay their ideological style.

### Oddly Specific Readings of Very General Language

Starting from a reading of some Definition criterion that limits copyleft and paring back to avoid GPLv2 or subsequently approved licenses, it's possible to end up with a very specific reading that limits open source copyleft in a very specific way.  But it is only the history that leads to that specificity.  The text of the Definition remains as general as it was the day it was published.  The path from general text to highly specific meaning is not apparent or inevitable, starting from the text.

This error often manifests as the position that the outer limit of open source copyleft is whatever the last approved stronger-copyleft license happened to be, damning every new, yet stronger copyleft proposal, in succession.  Starting from what's new is better than starting from the question of whether copyleft can ever conform to the Definition.  But looking back at a general Definition, plus a history of progressively stronger approved copyleft licenses, it never follows that the last approved strong-copyleft license has to be the strongest copyleft license ever.  That debate has to reach beyond the Definition and even OSI itself, to the industry, community, and history of the movement.  It has to take into account that OSI only definitively accepts licenses, declines to approve many licenses that conform to the Definition, and never affirmatively and finally rejects any license.

The concept of precedent proper remains highly controversial among OSI license-review participants.  On the other hand, there doesn't seem to be any strong will to remove or deprecate licenses approved in the past.  It's clear that past decisions, and especially use of approved licenses in apparent reliance on OSI approval, always seems to matter for new submissions.  It's not clear how.

The error made with highly specific readings of admittedly general Definition text that rely on past decisions and history isn't that they can't be right.  The error is in claiming that the existence or wording of the Definition supports them.  There may be very good reasons for specific copyleft regulation, but the Definition doesn't provide them in any explicit way.

## Discrimination

Two Definition criteria, numbers 5 and 6, prohibit licenses that discriminate against "specific fields of endeavor" and "any person or group of persons".  Those criteria can't be read in a consistent way to prohibit copyleft, even though copyleft is inherently discriminatory.

Quoting Richard Stallman, from _Copyleft: pragmatic idealism_:

> I make my code available for use in free software, and not for use in proprietary software, in order to encourage other people who write software to make it free as well.  I figure that since proprietary software developers use copyright to stop us from sharing, we cooperators can use copyright to give other cooperators an advantage of their own: they can use our code.

That is discrimination.  We might also call it reciprocity, fair play, or the golden rule in action.  But it is discrimination.

Evidently not the kind of discrimination the Definition prohibits.  The Open Source Initiative has approved all of the major licenses drafted by the Free Software Foundation, which Stallman founded, despite two nondiscrimination criteria.  Those criteria do not limit copyleft.

### Field of Endeavor Discrimination

Criterion 6 of the Open Source Definition reads:

> **No Discrimination Against Fields of Endeavor**
>
> The license must not restrict anyone from making use of the program in a specific field of endeavor.  For example, it may not restrict the program from being used in a business, or from being used for genetic research.

This language was copied from the Debian Free Software Guidelines verbatim.

Ignoring open source licensing history, it's possible to read criterion 6 to prohibit all copyleft licenses whatsoever.  After all, as a practical matter, copyleft terms prevent use of copyleft software in the creation of closed software.  That tracks the general meaning of "discriminate":

>  _intransitive_. _Economics_ (orig. _U.S._). To treat goods, trading partners, etc., more or less favourably according to circumstances.  Frequently with _against_ (also _in favour of_). Also in prepositional passive with _against_.

How can we square that reading with a long list of approved copyleft licenses?

Different readers answer that question differently.  Some focus on "restriction".  Some focus on "making use".  Some focus on "specific field of endeavor".  In outline:

- [Restrict](#restrict)
  - [Ordinary meaning](#ordinary-meaning-of-restrict), the most compelling, catches GPL.
  - Reading as [a reference to how "restriction" and "condition" are used by open licensing specialists](#restriction-versus-condition) is oddly specific, and makes no practical or legal difference.
- [Making Use](#making-use)
  - [Ordinary meaning](#ordinary-meaning-of-making-use), the most compelling, catches GPL.
  - [Any action governed by the license](#actions-governed-by-the-license) is oddly specific, and still excludes GPL.
  - [Running the software](#running-the-software) is very, very specific, and still excludes approved copyleft licenses.
- [Specific Field of Endeavor](#specific-field-of-endeavor)
  - Any activity at all](#any-activity-at-all) catches GPL.
  - Limiting to [fields that use and make both open and closed software](#fields-with-choice-of-open-or-closed), matches examples given, but sets no specific limit on copyleft.

#### Restrict

> The license must not **restrict** anyone from making use of the program in a specific field of endeavor.

##### Ordinary Meaning of Restrict

In ordinary English, the meaning of "restrict" is very broad.  Per the Oxford English Dictionary:

> To limit (a person or thing); to confine _to_ or _within_ certain limits.
>
> To prohibit or prevent _from_.

Applied this ordinary meaning, “restrict anyone from making use of the program in a specific field of endeavor” would cover rules that turn “making use” in a “specific field of endeavor” into infringement, however that’s accomplished, legally or practically.  Considering GPLv2, the question would then become how we read “making use” and “specific field of endeavor”.

##### Restriction versus Condition

Some open source license practitioners distinguish "restrictions", which hold back permission to take actions governed by licenses, from "conditions", which add requirements to meet after doing what's permitted.

By law, entering my home without my permission or a legally valid excuse is trespass.  If I told you that you may come to my house anytime, but not at night, the rule against visiting at night would be a restriction.  If I told you that you may come to my house anytime, but when you come during the day, you must bring flowers, that would be a condition.  You can come to my house anytime, but sometimes you must bring flowers.

Specialists speak of prohibitions on copying, distributing, or using software for commercial purposes as restrictions.  Conversely, they speak of notice-retention rules, which require keeping copies of copyright notices and license terms with copies of software, as conditions.  Copyleft rules, which require sharing source and giving a license, are almost always classed conditions, too.

The terms "restriction" and "condition" are thus a part of open source licensing jargon.  But it's not clear they reflect any underlying legal or practical difference.

To enforce a copyright license for software, copyright holders bring lawsuits for, among other things, copyright infringement: claims that others took action controlled by copyright without a license from the copyright holder.  For an infringement lawsuit based on copyleft, the claim is that the licensee went beyond the permission they received under the public license by failing to distribute source code reached by the license, under the terms required, after triggering the requirement to do so.  Whether a defendant lacked permission because they didn't have permission to share closed source---a "restriction"---or because they had permission, but failed to meet an additional requirement of making it open source---a "condition"---the legal claim is copyright infringement.

In the end, a copyright license creates a list of things that a licensee can do with a work of copyrighted software.  Every action covered by copyright but not permitted by the license or a legal exception, like fair use, is infringement.  Either the license gave permission to do what the defendant did, or the defendant committed infringement.

I've heard other lawyers explain the difference in terms of legal "remedies": what you can get a court to do for you, when you sue another for infringement and win.  Successful infringement suits can lead to court orders for defendants to stop taking action with the software.  For example, courts might issue orders to stop making and distributing proprietary software in a way that breaks a copyleft rule.  

However, at least under US law, it's not at all clear that courts will order defendants requiring defendants to fulfill conditions, say by forcing defendants to distribute their source code and license it as required to satisfy a copyleft rule they broke.  It's far more likely that courts will order defendants to stop working with the copyrighted software, and award the copyright holder money damages as compensation for infringement already committed.  Legal confusion on this point contributed to the fear, uncertainty, and doubt about copyleft licenses as "viral" licenses that could force large companies to share their closed software, rather than pay damages for infringement.

All of this speaks from legal background that the Definition's authors and its audience did not have, and reflects the jargon of a specialist community that did not yet broadly exist.  Even if there were a clear legal distinction between restrictions and conditions, based on legal remedies or otherwise, it’s not at all clear that the Definition means “restrict” in that oddly particular way.  The Definition describes licenses, which are legal tools, but not in legal language.  The word "condition" never appears in the Definition, to say nothing of “copyright” or “copyleft”.

#### Making Use

> The license must not restrict anyone from **making use** of the program in a specific field of endeavor.

##### Ordinary Meaning of Making Use

The everyday meaning of “use” is extremely broad, covering anything licensees might do with software.  Following that meaning, “restrict anyone from making use of the program” would describe copyleft conditions that prevent licensees from distributing copyleft software with closed changes, as part of closed programs, or simply under different, closed terms.  The question becomes whether distributing closed software is a “specific field of endeavor”.

##### Actions Governed by the License

Some read “making use” in criterion 6 to mean specifically taking any action controlled by the license, under intellectual property law.  Under copyright law, that means, broadly speaking, making copies, publicly distributing copies, and making changes or new work based on the old.

Trigger language for all kinds of conditions in old open source licenses usually speaks in terms of publicly distributing copies, making changes or new software based on the licensed software, or both.  Both of these actions are controlled by copyright, and governed by copyright licenses for software.  Triggers in the earliest copyleft conditions, like GPLv2's, also speak in terms of these actions.  This reading of "making use" would therefore catch GPL.

##### Running the Software

Some read "use" even more specifically, to mean one specific kind of use: "running" or "executing" software.  This reading misses early, GPLv2-style copyleft licenses, because those licenses triggered copyleft only on distribution or making changes or new software based on the licensed software, not running the licensed software.  But it would catch stronger, network copyleft licenses that OSI has already approved.

Under copyright law, owners of copyright do _not_ have an explicit right to control and license the running of their software.  However, copying software is an unavoidable step in running it, for installation, loading into RAM for execution, and so on.  Since copyright holders _can_ control copying of their software, they have indirect power to control running of their software.  A [specific section of US copyright law](https://www.gpo.gov/fdsys/search/pagedetails.action?granuleId=USCODE-2017-title17-chap1-sec117&packageId=USCODE-2017-title17&fromState=) makes an exception to this rule, for copies of software that users own outright, especially when purchased as a part of a package, with a computing device, to keep it running as delivered.  But [well known federal case law](https://en.wikipedia.org/wiki/Vernor_v._Autodesk,_Inc.) indicates that having a license, especially one imposing notable use restrictions, is not the same as owning a copy outright.

Copyleft licenses approved after GPLv2, in particular “network copyleft” licenses that trigger on provision of the software as a service to others over a network, go beyond distributing, making changes, and building new software, explicitly or implicitly.  They cover running it.  Some, like [OSL](https://opensource.org/licenses/OSL-3.0), actually say "use" in their trigger language.  Others, like [AGPLv3](https://www.gnu.org/licenses/agpl-3.0.en.html), seem to take great pains to avoid saying "use", "run", or "execute" in their copyleft triggers.  Regardless of wording, a copyright license can only control the actions covered by copyright.  Providing services to others over a network is not distributing copies publicly or making changes or new work based on the software.  In fact, copyleft rules based on providing network services _ensure_ that licensees distribute, when they otherwise haven't.  The only action governed by copyright that remains as a possible basis for those rules, then, is copying.  When a copyright license makes rules about running a program, it makes rules about making copies, as one must to run the program.

I've heard from a few commentators that the language of AGPL, an early network copyleft license, was meant to create a kind of "public performance" right for software.  Public performance is another action controlled by copyright.  Licenses for other kinds of copyrighted work, like film, theatrical, and musical works, control public performance of those works.  Technically, software licenses also control public performance of software, but what public performance means for software remains unclear.  The authors of AGPL would have liked public performance to clearly cover running software for others to interact with over a network, but it did not, and it still doesn't.  So they wrote a license condition that provided similar effect.

Copyright licenses conditions attempting to control rights other than those controlled by copyright law have to write rules that fall back, eventually, on control of the actions copyright law does control.  In the case of "synthetic" public performance rights---what lawyers would call "constructive" public performance rights---that means falling back on control of running the software, via control of copying the software.

Either way, a reading this specific strays a long way from the general text of the Definition.  Criterion 6 says "making use", which is not a legal term.  For more specificity, it could have easily said "running" or "executing", and all involved would have known what was meant.

Taking "making use" to mean specifically running the program, but not publicly performing the software, or not providing the software to others over a network, is even more specific, and also anachronistic.  Neither the need for such a fine-grained distinction, nor any particular implementation of it, were pressing issues at the relevant times for the Guidelines or the Definition.

#### Specific Field of Endeavor

> The license must not restrict anyone from making use of the program in a **specific field of endeavor**.

If we count copyleft rules as “restrictions”, and accept that open source copyleft licenses trigger on “use”, we could still decide that proprietary software development doesn’t count as a “specific field of endeavor”.  That would explain how approved copyleft licenses from GPLv2 conform to criterion 6.

The term “field of endeavor” has no specific meaning in intellectual property law.  The term does appear in US immigration law, but again, there’s no reason to believe the Definition means to invoke that usage specifically, or any legal definition to begin with.

##### Any Activity at All

If we read "specific field of endeavor" to mean any specified activity at all, at any level of generality, it comes to include development and distribution of closed software.  Unless we adopt one of the improbable meanings of "restrict" or "making use", such a broad meaning of "specific field of endeavor" would exclude GPLv2, the license that both the Guidelines and the Definition clearly meant to include.

##### Fields with Choice of Open or Closed

If we read "restrict" and "make use" in the ordinary, natural ways, "specific field of endeavor" can't mean closed development.  At a minimum, GPLv2 restricts companies from using GPLv2 code in closed sourced that they distribute to others.  Later, stronger copyleft licenses restrict companies from using copyleft code in closed source in other ways.

The Definition and software licensing history provide a number of examples of specific fields of endeavor that accord with the history of copyleft approvals.  The Definition itself mentions business and genetic research.  Software licenses prohibiting military use have been widely considered non-conforming, as have licenses prohibiting use in violation of human rights.

OSI's annotated Definition reemphasizes commercial use.  As all major open advocacy groups, including OSI and FSF, have enthusiastically pointed out, "commercial" and "proprietary" are not synonymous.  Many people and firms, in many industries, produce, distribute, and develop open source software for pay or other commercial advantage.  Businesses, genetic researchers, and military personnel can employ and make open as well as closed software.  Software is but a means to those endeavors.  The choice of open or closed, as user or developer, stands independent of the choice to endeavor in those fields.

Some firms do business in software development specifically.  Many of those develop or consume closed software exclusively, for a variety of industries or other use cases.  But all firms face a choice of whether to take or make work on open or closed terms.  Activist copyleft was designed to create incentives to choose open, by excluding firms that choose closed.  The Definition was written in large part to describe one of those licenses.

### Person and Group Discrimination

OSD criterion 5 reads:

> **No Discrimination Against Persons or Groups**
>
> The license must not discriminate against any person or group of persons.

This language was brought over from the Debian Free Software Guidelines without any changes.  It has typically been used to exclude licenses that blacklist particular people or firms by name or general category, such as lists of firms or particular national governments.

For any field of endeavor, we could define a group: the group of people endeavoring in that field.  For example, people developing closed software, or people working at firms developing closed software.  Discriminating against those people and groups, by requiring them to share software as open when they choose not to, or cannot, would disqualify approved copyleft licenses, including GPLv2.  But history shows that is not the consensus the Definition was meant to express.

Approved licenses of all kinds---permissive and copyleft---discriminate against other people and groups on the basis of their choices.  Perhaps most notably, the defensive termination provisions of many licenses terminate permissions granted by licenses to those who sue developers or users under patents.  Those rules are highly discriminatory against firms that actively enforce their patents.  They're especially discriminatory against specific firms whose primary business involves acquiring and suing on patents.  Those are evidently not the kinds of people or groups of people criterion 5 is meant to protect.

The most recent example of a license running afoul of criterion 5 was the custom license briefly applied to the Lerna project.  That licenses consisted of standard MIT license terms, plus additional language meant to prevent license from applying to a list of companies implicated in providing products and services to U.S. Immigration and Customs Enforcement, then embroiled in a scandal about mistreatment of immigrants and refugees, especially children.

## Contamination

The only substantive change to turn DFSG criterion 9 into OSD criterion 9 was a single word in the heading:

<blockquote><p><strong>License Must Not <del>Contaminate</del><ins>Restrict</ins> Other Software</strong></p><p>The license must not place restrictions on other software that is distributed along with the licensed software. For example, the license must not insist that all other programs distributed on the same medium must be <del>free</del><ins>open-source</ins> software.</p></blockquote>

This criterion can also be written to exclude copyleft, and in particular GPLv2-style copyleft.  After all, GPLv2 triggers specifically on distribution of GPLv2-licensed code alone with new changes or other "work based on the Program".  Since the Guidelines and Definition were meant to describe GPLv2, that can't be what criterion 9 meant.  And it doesn't accord with the example in the text.

This criterion speaks the most of the Definition's roots in Debian's Guidelines.

Debian remains a large and popular Linux distribution.  As a matter of policy, the Debian project turns a great many pieces of software, from large to very small, into "packages".  Debian packages get distributed through a worldwide network of official, mirror, and specialized repositories, ready to be installed through Debian's package management tool, `apt`.  Debian still makes system installers and packages available via physical media, often CD-ROMs, DVD-ROMs, and flash-based USB hard drives.

The Debian Project distributes a lot of packages.  In that, Debian infrastructure and programs function a bit like a shipping network.  To make that network function efficiently, without creating risk for itself or volunteers providing infrastructure, Debian packages must follow rules quite a bit like rules for containerized shipping.  Packages must act as interchangeable units.  It cannot matter where they're stored, how they're shipped, or what they're stacked next to.

License terms can break those rules.  They can grant permission only to distribute along with other open software, not proprietary.  They can require prominent billing on lists of contents of particular media on which they're reproduced.  Debian's infrastructure and software can't implement every rule-breaking license's terms in software, and ensure they're followed.  To prevent that explosion of complexity, which might make package distribution totally unworkable, Debian excluded software that creates those problems.

## Upshot