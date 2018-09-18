---
title: Private Changes in Free Software Copyleft Licenses
description: Where's the fifth freedom?
layout: post
tags:
- Open Source
- Free Software
- Licenses
---

I've written [elsewhere](https://blog.licensezero.com/2018/09/14/free-to-take-freedom.html#extra-freedom) that the Free Software Foundation apparently expounds _five_ software freedoms, not four.  The fifth is _private changes_:

> You should also have the freedom to make modifications and use them privately in your own work or play, without even mentioning that they exist.  If you do publish your changes, you should not be required to notify anyone in particular, or in any particular way.

In other words, the freedom to make and use private changes is the freedom to make changes (freedom 1) and _not_ to exercise the freedom to share them with others (freedom 3).

How does this play out in FSF-approved copyleft licenses?

## GPLv3

GPLv3 comes as close to any license I can think of to expressly declaring a right to make and use private changes.  Buried in a defined term.

> 2\. Basic Permissions.
>
> ...
>
> You may make, run and propagate covered works that you do not convey, without conditions so long as your license otherwise remains in force.

The defined term "covered work" includes private changes:

> A "covered work" means either the unmodified Program <mark>or a work based on the Program</mark>.

The defined term "propagate" does not include running or making private changes:

> To "propagate" a work means to do anything with it that, without permission, would make you directly or secondarily liable for infringement under applicable copyright law, <mark>except executing it on a computer or modifying a private copy</mark>.  Propagation <mark>includes copying, distribution (with or without modification), making available to the public</mark>, and in some countries other activities as well.

The defined term "convey" covers providing changes to others, rendering them non-private:

> To "convey" a work means any kind of propagation that <mark>enables other parties to make or receive copies</mark>. ...

Section 2 continues:

> You may convey covered works to others for the sole purpose of having them make modifications exclusively for you, or provide you with facilities for running those works, provided that you comply with the terms of this License in conveying all material for which you do not control copyright.  Those thus making or running the covered works for you must do so exclusively on your behalf, under your direction and control, on terms that prohibit them from making any copies of your copyrighted material outside their relationship with you.

This was apparently added directly to answer concerns of certain corporate users under GPLv2.

## GPLv2

The word "private" does not appear in GPLv2.  Rather, GPLv2 permits private changes by not prohibiting them.  Depending on how you understand "distribute".

> 2\. You may modify your copy or copies of the Program or any portion of it, thus forming a work based on the Program, and copy and distribute such modifications or work under the terms of Section 1 above, provided that you also meet all of these conditions: ...

There are two questions about work with the Program:

1.  Are you modifying your copy or copies of the Program or any portion of it?

2.  Are you copying and distributing such modifications or work under the terms of Section 1 above?

These two questions have to go together.  If you're not modifying, there are no modifications to copy or distribute.  If you're modifying, but not copying or distributing your modifications, you needn't worry about the conditions that follow.

Oddly, some of the conditions that follow trigger by modification alone, without any sharing.

> a) You must cause the modified files to carry prominent notices stating that you changed the files and the date of any change.

Does making private changes without noting them violate GPLv2?  Not that it matters so much.  Anyone who might enforce the license is highly unlikely to find out.

> c) If the modified program normally reads commands interactively when run, you must cause it, when started running for such interactive use in the most ordinary way, to print or display an announcement including an appropriate copyright notice and a notice that there is no warranty (or else, saying that you provide a warranty) and that users may redistribute the program under these conditions, and telling the user how to view a copy of this License.  ...

Does making private changes to an interactive program without programming it to show such an announcement violate the GPLv2?

Requiring both change notices and interactive announcements in even privately modified programs might afford a certain kind of insurance for software freedom.  Modified programs that start out private may be inadvertently shared, without meeting GPLv2's requirements.

As for section 1, which you also must follow for modified copies under section 2:

> 1\. You may copy and distribute ... provided that you conspicuously and appropriately publish on each copy an appropriate copyright notice and disclaimer of warranty; keep intact all the notices that refer to this License and to the absence of any warranty; and give any other recipients of the Program a copy of this License along with the Program.

Does "distribute" cover sharing copies with others within a company or other organization?  Scattered FSF writings seem to suggest that free software must guarantee also that freedom.  From [comments on GPLv2]( https://www.gnu.org/licenses/old-licenses/gpl-2.0-faq.en.html#TOCGPLRequireSourcePostedPublic):

> Does the GPL require that source code of modified versions be posted to the public?
>
> The GPL does not require you to release your modified version. You are free to make modifications and use them privately, without ever releasing them. This applies to organizations (including companies), too; an organization can make a modified version and use it internally without ever releasing it outside the organization.
>
> ...

From [comments on RPL](https://www.gnu.org/licenses/license-list.en.html#RPL):

> The Reciprocal Public License is a nonfree license because of three problems. ... 3. It requires publication of any modified version that an organization uses, even privately.

The trouble is that sentences like "I distributed the program within my organization." make perfect sense.  If "distribute" includes distributing within an organization, GPLv2 can require providing source and a GPLv2 license for those changes, even though they're private changes as FSF means private changes.  Employees and contractors who happened upon those changed versions could release them to the broader public under GPLv2, though it might be a breach of common worker confidentiality terms to do so.

Lawyers might protest that "distribute" is a term from the Copyright Act, and potentially gains more specific in copyright context.  Assuming a court would look past the terms of the license to the statute, it will run into an issue there, too.  The Copyright Act uses "distribute" in mostly in tandem with "to the public", and otherwise in contexts that imply very small-scale sharing.  Take 17 USC 106:

> Subject to sections 107 through 122, the owner of copyright under this title has the exclusive rights to do and to authorize any of the following:
>
> ...
>
> (3) to <mark>distribute</mark> copies or phonorecords of the copyrighted work <mark>to the public</mark> by sale or other transfer of ownership, or by rental, lease, or lending;

There's also a definition in 17 USC 101:

> "Publication" is the <mark>distribution</mark> of copies or phonorecords of a work <mark>to the public</mark> by sale or other transfer of ownership, or by rental, lease, or lending.  The offering to distribute copies or phonorecords <mark>to a group of persons for purposes of further distribution</mark>, public performance, or public display, constitutes publication.  ...

Or the archival exception in 108:

> (a) ... it is not an infringement of copyright for a library or archives ... to reproduce no more than one copy or phonorecord of a work ... or to distribute such copy or phonorecord, under the conditions specified by this section, if--- ...

Or rental infringement under 109:

> (b)(1)(A) ... unless authorized by the owners of copyright in the sound recording or the owner of copyright in a computer program ... neither the owner of a particular phonorecord nor any person in possession of a particular copy of a computer program ... may, for the purposes of direct or indirect commercial advantage, dispose of ... by rental, lease, or lending.....
>
> (4) Any person who distributes a phonorecord or a copy of a computer program (including any tape, disk, or other medium embodying such program) in violation of paragraph (1) ....

The repeated construction "distribute ... to the public" implies that "to the public" does not follow necessarily from "distribute".  Rather, the Act uses "distribute" in some contexts with a single copy.

Relevant dictionary definitions support narrow readings.  From Merriam-Webster:

> to give out or deliver especially to members of a group

From OED:

> To deal out or bestow in portions or shares among a number of recipients; to allot or apportion as his share to each person of a number.

Whether GPLv2 falls back on a dictionary definition or usage in the Copyright Act, the result could cover private changes shared among workers in a single organization.

# MPL 2

MPL 2 isn't an FSF license, but FSF has [approved it as a free software license](https://www.gnu.org/licenses/license-list.en.html#MPL-2.0).

MPL 2 makes broad licenses grants, subject to conditions.  A key condition triggers on "distribution", with the same issues as GPLv2:

> 3.2. Distribution of Executable Form
>
> If You <mark>distribute</mark> Covered Software in Executable Form then:
>
> a. such Covered Software must also be made available in Source Code Form...; and
>
> b. You may distribute such Executable Form under the terms of this License, or sublicense it under different terms....

> 3.3. Distribution of a Larger Work
>
> You may create and <mark>distribute</mark> a Larger Work under terms of Your choice, provided that You also comply with the requirements of this License for the Covered Software. ...

# OSL 3.0

[FSF-approved](https://www.gnu.org/licenses/license-list.en.html#OSL)

Frankly, I don't know.  I'm going to have to ask Larry.

> 5) **External Deployment**.  The term "External Deployment" means the use, distribution, or communication of the Original Work or Derivative Works in any way such that the Original Work or Derivative Works <mark>may be used by anyone other than You</mark>, whether those works are distributed or communicated to those persons or made available as an application intended for use over a network.  As an express condition for the grants of license hereunder, <mark>You must treat any External Deployment by You of the Original Work or a Derivative Work as a distribution</mark> under section 1(c).

However, "You" can refer to an entity:

> 14) **Definition of "You" in This License**.  "You" throughout this License, whether in upper or lower case, means an individual <mark>or a legal entity exercising rights under, and complying with all of the terms of, this License</mark>.  For legal entities, "You" includes any entity that controls, is controlled by, or is under common control with you.  ...

# EPL 1.0

[FSF-approved](https://www.gnu.org/licenses/license-list.en.html#EPL)

What does "made available" mean?

> When the Program is <mark>made available</mark> in source code form:
>
> a) it must be made available under this Agreement; and
>
> b) a copy of this Agreement must be included with each copy of the Program.

# Sleepycat

[FSF-approved](https://www.gnu.org/licenses/license-list.en.html#BerkeleyDB)

What does "redistribution" mean?

> Redistributions in any form must be accompanied by information on how to obtain complete source code for the DB software and any accompanying software that uses the DB software. ...
