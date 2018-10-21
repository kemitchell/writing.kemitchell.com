---
title: Effective Copyleft and the Open Source Definition
layout: post
---

What does the Open Source Definition have to say about maintaining effective copyleft licenses?

Open source licenses, like open source programs, require maintenance.  The law changes, and so do software, the tools and processes we use to make it, and the ways we use it.  Changes in operating environment require changes in implementation, to keep achieving the functionality users want.  Some community members scrutinize new implementations---new licenses---in terms of the Open Source Definition.

Copyleft licenses share most maintenance problems, like modernization of notice conditions and response to patent threats, of permissive licenses.  Copyleft licenses also face additional problems peculiar to their share-alike rules.  We can generalize copyleft rules as answering four questions:

1. _Trigger_: When must users share their own software?
2. _Sweep_: What software must users share?
3. _Licensing_: How must users license their software?
4. _Distribution_: How must users share source for their software?

Different copyleft licenses answer these questions differently.  Generally, the more cases in which a copyleft rule triggers, the more code in its sweep, the more specific the license terms that must be applied to it, and the broader source must be distributed, the stronger the copyleft license.

# Effectiveness

Strong copyleft serves both activists and upstart companies.  Activists use strong copyleft to exclude proprietary software creators, whose practices they oppose, and with whom they compete, from the benefits of their work.  Companies also use strong copyleft to exclude competitors from the benefits of their work.  Some companies also use strong copyleft as the basis for "dual licensing" or "selling exceptions", selling private licenses that permit what their public license does not: use in proprietary software development.

If a copyleft license's trigger is too weak to cover the most valuable use of a piece of software, the copyleft license becomes ineffective for these purposes.  For example, a trigger on distribution of a library or code based on it to others does not cover using that library to provide a web server application, since the web application's server code is never distributed to others. 

Even when a copyleft license's trigger is effective, weakness in sweep, licensing, and distribution rules can render it ineffective overall.  For example, if a copyleft license's trigger covers use of a library to provide a web application, but its sweep only covers the original library code and any changes to the library, not other parts of the web application, meeting the copyleft requirement may be trivial.  Licensees may continue denying software freedom by keeping the rest of their web application code proprietary, use the copyleft software to compete against open alternatives, or dodge the need to buy a proprietary-use license.

# Prior Art

Copyleft licenses have long been promoted and understood as "free for open" licenses: do as you please, and share alike.  But that is not how they've been implemented.  Over time, changes in the law, changes in software practice, and broader understanding of the specific language of particular copyleft licenses has allowed users to think of copyleft licenses as "free for open, except with specific loopholes".

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

- for trigger, Sybase, RPL, and OSL, which cover modified and unmodified use to provide to others, such as over a network
- for sweep, (A)GPLv3, which go beyond work based on the software to other work needed to use and develop it 
- for process: Sybase and RPL, which require publication of source, rather than just providing or offering to specific recipients

# OSD

What does the Open Source Definition have to say about the four choices facing copyleft license drafters?

## You can't read the OSD alone.

Ignoring history, it's possible to read a few criteria of the Open Source Definition, straight off the page, to prohibit copyleft licenses entirely.  Those readings crop up each time a new copyleft license appears seeking to fix some maintenance problem or another, forcing large parts of the conversation to start from before square one, rather than focusing it on what is new.  That is not the fault of honest readers.  Recurring confusion on these basics points demonstrates how general, vague, and ambiguous the Open Source Definition's language remains.

Generality was intentional.  The Open Source Definition was adapted from the Debian Free Software Guidelines.  The Debian Project drafted and adopted those Guidelines as part of its Social Contract, to describe the kinds of licenses project participants recognized and accepted at the time, as a category.

That category included GPLv2, a strong copyleft license.   A section of the Guidelines entitled "Example Licenses", removed in the Open Source Definition but still a part of The Debian Social Contract, listed "GPL" first.


## Field of Endeavor Discrimination

Criterion 6 of the Open Source Definition reads:

> **No Discrimination Against Fields of Endeavor**
>
> The license must not restrict anyone from making use of the program in a specific field of endeavor. For example, it may not restrict the program from being used in a business, or from being used for genetic research.

This language was brought over from the Debian Free Software Guidelines without any changes.

Ignoring open source licensing history, it's possible to read OSD criterion 6 to prohibit all copyleft licenses.  After all, as a practical matter, copyleft terms prevent use of copyleft software in the creation of closed software, in at least some ways.  How can we square that plain reading with a long list of approved copyleft licenses?

Different readers answer that question in different ways.  Some focus on "restriction".  Some focus on "use".  Some focus on "field of endeavor".

### Restriction versus Condition

Some open source license practitioners distinguish "restrictions", which leave permission for specific actions out of a license, and "conditions", which add extra requirements to meet after taking action that's allowed.  Copyleft rules are almost always spoken of as conditions, rather than restrictions.  Notice-retention rules, which require keeping copies of copyright notices and license terms with copies of software, are also spoken of as conditions.

The difference between "restriction" and "condition" is mostly a part of how specialists talk about licenses, as a kind of shorthand.  It's not clear whether that distinction reflects any legal difference.

To enforce a copyright license, copyright holders bring lawsuits for infringement.  Those lawsuits claim that others have exercised exclusive rights of the copyright holder---making copies, distributing to the public, or making new work based on the old work---without permission.  In the case of copyleft, the claim is that the licensee fell outside their permission because they failed to share and license source code.  Whether a defendant lacked permission because they didn't have permission to do what they did in the first place, or because they had permission, but only if they met a requirement that they failed to meet, the claim is infringement.  They were covered by the license, or they weren't.

I've heard other lawyers explain that the difference alludes to remedies: what you can get a court to do for you, when you sue another for infringement and win.  All lawyers agree that successful infringement suits can lead to injunctions, or court orders, for the defendant to stop exercising rights in the software.  Most lawyers I've spoken to doubt, however, that courts will grant court orders requiring defendants do what conditions require.  For example, most lawyers seem to agree that courts will issue orders to stop making and distributing proprietary software in a way that breaks a copyleft license rule.  But most lawyers also agree that courts won't issue orders forcing defendants to release their software, to satisfy those rules.  Rather, they'll award the copyright holder money damages as compensation for infringement.

Even if there is a clear legal distinction, based on remedies or otherwise, it's not clear that the Open Source Definition means "restrict" in a particular legal way.  The Definition wasn't written by lawyers.  It addresses a legal topic, license terms, but uses different terms than an English-speaking copyright lawyer would.

### Use, Explicit or Implicit

Conditions in open source licenses are almost always written to apply to "distribution" and "making changes".  The triggers in the earliest copyleft licenses were also written only in terms of those actions.  Newer copyleft licenses, in particular copyleft licenses addressing the use of software to provide services over a network, go beyond those actions, explicitly or implicitly.  Some practitioners read those newer conditions to affect "use".

Copyright law enables copyright holders to control three kinds of actions through licensing:

1. reproduction of their software in copies
2. distribution of copies of their software to the public
3. preparation of derivative works, or works based on, their software

Under copyright law, owners of copyright do _not_ have an explicit right to control and license use, or execution, of their software.  However, creating a copy of software---for installation, loading into RAM for execution, and so on---is an unavoidable step of running it.  That gives copyright holders indirect power to control how their software is run.

Some licenses, like OSL, say "use" in their trigger language.  Other licenses, like AGPLv3, seem to take great pains to avoid saying "use".  Regardless of wording, a copyright license can only control the actions covered by copyright.  Providing services to others over a network is not distribution to the public or preparing a derivative work under copyright law.  When a copyright license puts conditions on that action, it puts a condition on reproduction in copies, and therefore indirectly on use.

### Field of Endeavor

If we count copyleft rules as "restrictions", and accept that some copyleft triggers affect "use", we can still decide that proprietary software development doesn't count as a "field of endeavor".

Field of endeavor isn't an intellectual property law term of art.  The term is used in US immigration law, but again, there's no reason to believe the Definition meant to invoke that usage specifically.

OSI and open source licensing history do provide a number of examples of fields of endeavor leading to rejection.  The Definition itself mentions business and genetic research.  OSI's annotated Definition emphasizes commercial use.  Software licenses prohibiting military use have also been rejected.

As both OSI and groups like FSF have been quick to emphasize, "commercial", "business", and "proprietary" are not and need not be synonyms.  Many firms produce, distribute, and develop open source software for pay or other commercial advantage.  The dominant mode in the software industry remains proprietary.  Those firms discriminate against openness, both in what they consume, and in how they produce.  Copyleft licenses have long discriminated against proprietary developers.  To quote Stallman, from _Copyleft: pragmatic idealism_:

> I make my code available for use in free software, and not for use in proprietary software, in order to encourage other people who write software to make it free as well.  I figure that since proprietary software developers use copyright to stop us from sharing, we cooperators can use copyright to give other cooperators an advantage of their own: they can use our code.

That is discrimination.  But evidently not the kind of discrimination OSD prohibits.

Businesses, genetic researchers, and military personnel all employ open as well as closed software.  Licensing and distribution choices are evidently independent of those fields of endeavor.

## Person and Group Discrimination
OSD criterion 5 reads:

> **No Discrimination Against Persons or Groups**
>
> The license must not discriminate against any person or group of persons.

For any field of endeavor, we could define a group: the group of people endeavoring in that field.  People developing closed software.  People working at firms developing closed software.  That reading would disqualify approved copyleft licenses, including GPLv2.  That reading can't be right.

## Other Software Restriction

OSD criterion 9 reads:

> **License Must Not Restrict Other Software**
>
> The license must not place restrictions on other software that is distributed along with the licensed software. For example, the license must not insist that all other programs distributed on the same medium must be open-source software.

# Breaking the Cycle