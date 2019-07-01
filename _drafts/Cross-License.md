---
title: Cross-License Collaboratives
description:
layout: post
brief:  Software activists can turn the two-edged sword of cross-licensing around on industry as a cheap, flexible, international means of economic self-organization.
---

If your competitors learn from you, but you don't learn from them, you can expect to lose badly, and soon.

The software industry has learned a lot from software activists.  It uses their methods, their infrastructure, and tons of their software.  But software activists have utterly failed to keep learning from industry.  More than thirty years ago, software activists seized a lever of industry power, copyright, and turned it around against industry misdeeds en masse, through copyleft.  The hot new stuff of software collaboration has been mostly scraps off the industry table since then.

Nowhere is this more clear than where mantras meet the moolah.  Software freedom orthodoxy has long chanted no problem with business.  The FSF itself sold copies of its software---on tape, back when that worked---to finance early days, and RMS recommended selling exceptions as a model to others.  But software freedom activism "isn't against money" like the lactose-intolerant "isn't against ice cream".  Others do as they do, but if an organization isn't a nonprofit charity, many Stallmanites simply aren't interested.  Still others rush to voice suspicion, laced with a note of tactfully suppressed, pious revulsion.

As a result, software activists lack a cheap, scalable, international method of economic organization, and therefore economic organization more generally.  They know how to set up foundations and sponsorships, but those can't attract investment or pay dividends.  They know how to start and manage copyleft projects, but the only naturally coordinated activity of those projects is opting out of the money system.  When just one contributor---perhaps the company that released the project to begin with---retains a right to "monetize" systematically, some cry foul.  I won't pretend to understand why.  But I can't pretend I don't see the consequences.

As a consequence, the work of developing software that competes with industry remains a shoestring, precariously positioned, intrinsically motivated kind of affair, largely uncoupled from the economic engine of inspiration.  It subsists on the effort of relatively privileged allies with time, taxable dollars, and energy to spare, only rarely with the input of indifferent neutrals or hireling guns.  Success cases tend to involve salarymen from multiple companies, but whose colleagues all use the open software to build closed.

Software activism---not just the FSF strain, but anyone making software with umbrage at the industry main---needs a new vehicle not just for collective development, but collective business.  It can build that vehicle by repurposing another tool of "enterprise" competitive engineering: the cross-license.

## Bootstrapping

Happening upon a copyleft-licensed project, man old hands know that's not the end of situational awareness.  Does the project require copyright assignment, or a special license agreement, from contributors?  That kind of requirement vests _someone_ with special licensing powers.  Are they nonprofit or for profit?  Do their special powers include selling exceptions to the rule of sharing back alike?  Why did they choose copyleft to begin with, and why did they retain the option to license otherwise?

There are valid, broadly unobjectionable answers to that question.  In the case of the FSF itself, one is relicensing.  If "code is law" and "law is code" then most of the law coders deploy---their licenses---haven't been patched in a decade or longer.  Maintaining a license requires keeping a legal commit bit.

Compare GNU coreutils, much of which FSF relicensed from GPLv2 to GPLv3, to the Linux kernel, licensed GPLv2 and staying that way.  The kernel's choice is only partly by choice.  Linus started the project, but other contributions poured in, likewise under GPLv2, without any CLAs or copyright assignments.  Linus turned around and built on those contributions, so he became subject to copyleft in the same was his contributors did: he built on work of others that was only available to him under GPLv2.  The kernel thus became "locked open" as ever more "keys" got issued to ever more developers.  Nobody is going to get written permission to relicense the kernel from all kernel developers ever.  That's proved a problem for [the syscall exception](https://spdx.org/licenses/Linux-syscall-note.html) and now the [GPL Cooperation Commitment](https://gplcc.github.io/gplcc/).

Compare all of that to Ghostcript, which has used a number of GPLs over time, but always under the stewardship of a company that [takes contributor license agreements](https://www.ghostscript.com/images/Artifex%20Contributor%20License%20Agreement%202017.pdf) and [sells exceptions](https://www.ghostscript.com/license.html).

Fundamentally, there are projects that lock themselves open by taking lots of contributions from lots of independent companies and individuals under copyleft terms only, and projects that centralize license rights in a single organization.  One kind of project takes all the licensing keys and distributes them far and wide, making it impractical to find and use them all.  The other kind of project collects copies of all the keys in one place, in case they're needed in the future.

## The Leap

Computers make it easy to copy and share software.  The law makes it easy to copy and share "keys", in the form of licenses.

Imagine a project where each contributor makes not one copy of their key, but many copies, and distributes those copies not to one foundation or company, but to all the other contributors to the project.  Each contributor ends up all with all the keys needed to make licensing decisions on behalf of the project: to offer it under a different license, to sell exceptions to a particular user, and so on.

<!--

Conditions:
- inputs are licenses
- outputs are licenses
- return loop may be licenses, money, etc.

Prior Art:
- fiscal sponsorships
- series LLCs
- common-law partnerships
- tax-exempt foundations
- Singapore, Estonia, &c. entities

-->
