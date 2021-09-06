---
title: A Modest Trademark Proposal
description: banish them from permissive open source
tags:
- Open Source
- Trademark
---

Add a new section to the [Blue Oak Model License](https://blueakcouncil.org/license/1.0.0):

> Each contributor abandons all trademark, service mark, and other exclusive rights to use the name of this software to identify the origin of software or services of the kind.

The purpose?  Do unto [trademarks](https://fieldguide.kemitchell.com/#trademark), or intellectual property rights in the project's name, what we already to [copyrights](https://fieldguide.kemitchell.com/#copyright), or exclusive rights in the project's code.

If the project is called "Maximal DB", anyone could use the name "Maximal DB".  They wouldn't need the original developer's permission.  If a fight breaks out about whose database gets to be "Maximal DB" to the world, duke it out in the court of public opinion, not the court of trademark law.

<!--
The Blue Oak license is a model permissive license.  [blueoakcouncil.org](https://blueoakcouncil.org) sums it up:

> The council's model license uses all the techniques a license can use to make software free and simple for everyone to use and build on, in everyday language that everyone can understand.
-->

Right now, court is the place to go.  Trademarks are a kind of intellectual property.  We use licenses to give permission for them.  But the licenses we know and love as "permissive licenses" mostly don't address trademark at all.

MIT doesn't mention it.  BSD doesn't mention it.  GPLv2 doesn't mention it, and we have court precedent, from a lawsuit by Neo4j against a company called PureThink, to show it doesn't license trademarks by implication.

Some much newer, business-focused licenses do mention trademark, but only to make clear permission _isn't_ given to use them.  Here's [from Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0#trademarks):

> This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.

Trademarks can be useful in protecting the integrity of official versions.  Developers of projects with distinctive monikers---merely descriptive names are very hard to protect as trademarks---sometimes guard the good names of their projects by insisting that patched versions come back to them in order to bear the brand.  A few have used trademark threats to do so.  But there's also a long tradition of using _copyright_ license terms to protect project names, instead.  From the Artistic License 2, the license for Perl:

>  You may Distribute your Modified Version as Source ... provided that you clearly document how it differs from the Standard Version, including, but not limited to, documenting any non-standard features, executables, or modules, and provided that you do at least ONE of the following:
>
> (a) make the Modified Version available to the Copyright Holder of the Standard Version, under the Original License, so that the Copyright Holder may include your modifications in the Standard Version.
>
> (b) ensure that installation of your Modified Version does not prevent the user installing or running the Standard Version. In addition, the Modified Version must bear a name that is different from the name of the Standard Version.

The purpose?  Make sure that when folks run `perl`, they get the official version they're expecting.  And that Larry Wall and friends don't get blamed for, or have their sterling reputations tarnished by, badly conceived, unofficial patches.  All well and good, especially back in the day, before the Internet let most folks download official versions straight from maintainers.

But as I see it, in this day and age, holding back the right to enforce trademark intellectual property is most important for preserving _company_ business models.  Firms want to establish themselves as the only, or the only "official", sources of support, integration, funded maintenance, hosting, and so on.  They want to expand the brand for the open source project into a brand encompassing products and services that _aren't_ open source, or even software.  They want to prevent competitors from using the project's brand to compete.  They want searches for the product name to point exclusively and unambiguously to them.

Cue debate on whether open-source focused companies, even companies doing the bulk of development work on important, well-known projects, should call themselves by the same names as their projects.  If the answer is yes, there follow tiffs about whether it should be on the companies to make it easy to separate branding from code, or up to their would-be competitors.

Red Hat notably developed different brands and published source code under different names for "the community" than for paying customers.  I'd guess most recent database, DevOps, and similarly enterprise-focused companies of the new wave have gone the other way.  They've named their companies after their projects and told Amazon and friends to handle "sanitizing" their projects of trademarked names and logos branding if they want to cop.

There follow threats and fears of conflicts about "compatible" products and services.  Amazon heavily advertises DocumentDB "with MongoDB compatibility", [right in the title of its webpage](https://aws.amazon.com/documentdb/), for example.  Twitter was abuzz with speculation of trademark infringement.

If the purpose of permissive licensing is that developers should be able to to let control of projects go, and that the meaning of that move should be consistent and absolute, I say let the trademarks go, in addition to copyrights and patents.

Giving up trademark protection through the law is _not_ the same as giving up all control over integrity and reputation.  It's giving those problems back to social and technical spaces where users and developers hold top rank, not lawyers.  When companies choose to reserve trademark rights, they can make that deviation from total generosity explicit.  In permissive licensing, permission should go without saying, not the other way around.
