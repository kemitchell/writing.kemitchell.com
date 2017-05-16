---
title: Catch as Catches Can
description: the values of open-source license conditions
layout: post
tags:
- Open Source
- Licensing
---

Open-source licenses override and reverse legal default rules, especially intellectual property default rules, that make publishing, distributing, and using software legally risky.  But there's almost always a catch ... or rather several of them.  The permission open source licenses give is almost always conditional.  To receive and keep permission for the software, you have to follow some rules spelled out in the license.

<!--jump-->

## Attribution

The most common requirement is _attribution_---preserving notes about who owns the software and the public license terms they've chosen for it.  Requiring attribution from everyone involved---distributors, those who modify, end users---helps ensure that information travels with the software wherever it goes.  Often attribution covers a copyright notice and some license text.  It may cover header comments.  It may even cover a separate file with notes and credits, as with the Apache 2.0 `NOTICE` text file.

For example, from The MIT License:

> Copyright \<year\> \<copyright holder\>
>
> Permission is hereby granted ... subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
>
> ...

What's the point of requiring attribution?  There are several.

The most obvious is credit.  Open source software developers like to see their software used.  They like to point out their names in the credits for popular and important programs.  They don't like to see their code passed around in ways that seem to take credit for their work, even if they gave their work away.  In a sense, attribution is advertising for open-source developers.

But attribution is more than connecting a name to software.  Attribution requirements almost always require reproducing information about the public license terms on which the software is available---not just who is giving the license, but the terms of their license.

At one level, that ensures that others, even users who only see compiled code, can find out that a project is open source.  They may take an interest, choose to use the software themselves, and even contribute back.  In that sense, attribution is advertising for the open-source project.

From a legal angle, reproducing license terms ensures that license conditions travel with the software.  If you find open-source software packaged with someone else's project, and decide to use it in your own project, the attribution notice makes clear that you need to provide attribution in your project, too.  The same goes for other conditions.

## Warranty Disclaimers

Nearly all open-source software licenses disclaim warranties, so there aren't any legally enforceable guarantees about the software or its quality.  Otherwise, the law would read in, or imply, some standard warranties based on reasonable commercial expectations.

For example, from The ISC License:

> THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS.

In the business context, where customers typically pay for licenses, it makes sense for sellers to bear some of the risk of software malfunction, intellectual property trouble, and so on, in return for their license fees.  In the open-source world, there aren't any license fees.  Contributors don't want to run the risk of getting sued on a warranty for software they gave away for free.  Especially since giving software away for free makes it particularly easy to gain a lot of users who may have issues.

## Limits on Liability

Nearly all open-source licenses limit contributors' liability, so others can't sue them for the software, for any reason.  The reasons are much as the same as those for warranty disclaimers.  Contributors don't receive any direct compensation for their work, like license fees, to offset the risk of getting sued.

For example, from the GPL 3.0:

> 16\.  _Limitation of Liability_.
>
> IN NO EVENT UNLESS REQUIRED BY APPLICABLE LAW OR AGREED TO IN WRITING WILL ANY COPYRIGHT HOLDER, OR ANY OTHER PARTY WHO MODIFIES AND/OR CONVEYS THE PROGRAM AS PERMITTED ABOVE, BE LIABLE TO YOU FOR DAMAGES, INCLUDING ANY GENERAL, SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES ARISING OUT OF THE USE OR INABILITY TO USE THE PROGRAM (INCLUDING BUT NOT LIMITED TO LOSS OF DATA OR DATA BEING RENDERED INACCURATE OR LOSSES SUSTAINED BY YOU OR THIRD PARTIES OR A FAILURE OF THE PROGRAM TO OPERATE WITH ANY OTHER PROGRAMS), EVEN IF SUCH HOLDER OR OTHER PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.

## Developer Names and Trademarks Rules

Some open-source licenses have conditions that prohibit misuse of contributors' names or trademarks.

For example, the third clause of the three-clause BSD license:

> 3\.  Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

or section 6 of the Apache License, Version 2.0:

> 6\.  _Trademarks_.  This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.

These provisions clarify that courts shouldn't read in, or imply, permission to use the names or trademarks of contributors to the software.  It's unclear whether or what kind of permission a court would imply without these clarifications, but in theory, a court could look outside the license terms, to the circumstances, to decide.  A clarification helps avoid all the uncertainty that entails.

Some conditions of this kind arguably do more than just clarify.  Trademark and publicity rights do not restrict all uses of names.  Using names as names---to refer to people, companies, or products---is protected.  Using a name to claim a false endorsement isn't protected.  Using the names of developers behind an open-source library in promo for a project that uses the library might also be protected, but prohibited by a condition like the third BSD clause.

## Project Names

## List Changes

## Not Sue Under Patents

## Copyleft Conditions

### Provide Source

### Provide Source of Changes

### License Derivatives on Specific Terms

### Disclose How to Install
