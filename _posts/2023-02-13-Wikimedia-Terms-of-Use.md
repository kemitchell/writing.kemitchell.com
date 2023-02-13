---
date: 2023-02-13T12:27:19-08:00
title: Wikimedia's Terms of Use
description: thoughts from a recent review
tags:
- Contracts
- Drafting
- Open Licensing
- Terms of Service
---

I've just reviewed [Wikimedia's terms of use](https://foundation.wikimedia.org/wiki/Terms_of_Use/en) for the first time in a long while.  A few thoughts.

> ## Paid contributions without disclosure
>
> These Terms of Use prohibit engaging in deceptive activities, including misrepresentation of affiliation, impersonation, and fraud.  As part of these obligations, <mark>you must disclose your employer, client, and affiliation with respect to any contribution for which you receive, or expect to receive, compensation</mark>. You must make that disclosure in at least one of the following ways:
>
> - a statement on your user page,
> - a statement on the talk page accompanying any paid contributions, or
> - a statement in the edit summary accompanying any paid contributions.
>
> ...

On Wikipedia, you have to proactively disclose your paid affiliations.  This rule does not exist on GitHub, which leads to all kinds of social consequences I've [blogged about before](https://writing.kemitchell.com/2017/10/16/Mercenary-Rapport).

> ## [7. Licensing of Content](https://foundation.wikimedia.org/wiki/Terms_of_Use/en#7._Licensing_of_Content)
>
> ...
>
> You agree to the following licensing requirements:
>
> ...

This is a contributor license agreement.

> Please note that these licenses [CC-BY-SA and GFDL, the licenses required for original text] do allow commercial uses of your contributions, as long as such uses are compliant with the terms.

It's completely understandable how contributors to freely accessible projects hosted online by charitable nonprofits might think of their stuff being used first and foremost noncommercially.  I didn't run through the old versions of these terms of use to see when this was added, but we can all imagine _why_ it was added, before or after the complaint.

The total permissivity of Creative Commons licenses, inspired by the ideological permissivity of early open software licenses, still catches people by surprise.

> Attribution is an important part of these licenses.

When Creative Commons wrote its licenses for open content other than software, the requirements of popular open software licenses to keep copyright notices still worked as fairly decent credit or attribution requirements in practice.  For some kinds of software, in some industries, they still do.  But the rise of ever more development tools on the production side, and ever more services on the delivery end, eventually undermined notice-as-credit.  Creative Commons, to its enduring credit, explicitly implemented .

To license open software with a real, practical requirement for due credit, see the [Code Credit License](https://codecreditlicense.com).  There's no dignified reason meaningful attribution couldn't be "backported" to software culture.  It's mostly holdover corporate secrecy reflex and the laziness of developers who would have to give credit, and haven't been induced to [automate the process yet](https://www.npmjs.com/package/creditstxt).

> When you contribute text, you agree to be attributed in any of the following fashions: ...

At the same time, we see this a lot with Creative Commons licenses.  Those licenses say you have to attribute, but don't say much about specifically how to do that.  They can't.  There are too many different conventions and traditions across media and industries.

So licensors "overlay" specifics on top of their license grants.  Here, Wikimedia wants to make sure that its projects aren't bogged down with administrative burden.  They're potentially susceptible, given the volume of licensed material they handle.  On the flip side, they're also strong in code-fu.  Uniformity facilitates automation in software, which they've done a lot of.

> You may import text that you have found elsewhere or that you have co-authored with others, but in such case you warrant that the text is available under terms that are compatible...

Typical CLA stuff that you _won't_ find in nearly any common open software license, apart from Larry Rosen's [OSL](https://spdx.org/licenses/OSL-3.0.html) and [AFL](https://spdx.org/licenses/AFL-3.0.html) forms.

You can see terms to similar effect, with a similar structure, in [Single CLA](https://singlecla.com/).

> You will not unilaterally revoke or seek invalidation of any license that you have granted under these Terms of Use...

Another potentially painful omission from the most popular permissive software terms, like MIT and BSD.  The [Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0) says it even shorter: "No contributor can revoke this license."

> **Re-use:** Re-use of content that we host is welcome, though exceptions exist for content contributed under "fair use" or similar exceptions.

This is important and I'm glad they call it out.

Fair use and other exceptions to copyright itself aren't license terms.  They also tend to be highly contextual.  Just because something was fair use as used on Wikipedia doesn't mean it's licensed like the rest of Wikipedia.

I wonder what they're doing in UI to call out fair-use materials these days.

> ## DMCA Compliance
>
> ...
>
> However, we also recognize that not every takedown notice is valid or in good. ...

No kidding.

> ## Management of Websites
>
> ...
>
> The Wikimedia community and its members may also take action when so allowed by the community or Foundation policies applicable to the specific Project edition, including but not limited to warning, investigating, blocking, or banning users who violate those policies.  You agree to comply with the final decisions of dispute resolution bodies that are established by the community for the specific Project editions (such as arbitration committees); these decisions may include sanctions as set out by the policy of the specific Project edition.

This is an interesting form of delegation.  They're making compliance with private dispute resolution bodies of projects they themselves host an obligation under users' contracts with Wikimedia to user their services.

There are potentially interesting questions about limits to how far this can go and still be enforced by the courts.  For example, how are users to know what the procedures of those projects are?  Are those procedures written down, and if so, might they be unreasonable or unclear?  Federal Arbitration Act?  What if final decision purport to require active steps on the part of the user?

> ## Resolutions and Project Policies
>
> The Wikimedia Foundation Board of Trustees releases [official policies](https://foundation.wikimedia.org/wiki/Resolutions) from time to time.  Some of these policies may be mandatory for a particular Project or Project edition, and, when they are, you agree to abide by them as applicable.

This is one of those points where terms of use, which look long enough you start reading, exploding out to encompass tons of other documents, many of which may or may not apply.  This page isn't terms of us.  It's the root of a big, knotty tree of terms that branches out dozens upon dozens of times.

It may not even be administrative possible for someone at Wikimedia to sit down and compile all the text brought in by references and references-in-references.  This is disturbingly common online.

> ## 13. Disputes and Jurisdiction
> <mark><em>Highlighted for emphasis</em></mark>

I use HTML highlighting in my legal terms too, but I've never felt compelled to write anything like this out.  I don't see how it hurts.  I'm just kind of scratching my head.

Quotes of emphasized language without highlighting follow.

> If you seek to file a legal claim against us, you agree to file and resolve it exclusively in a state or federal court located in San Francisco County, California. You also agree that the laws of the State of California and, to the extent applicable, the laws of the United States of America will govern these Terms of Use, as well as any legal claim that might arise between you and us (without reference to conflict of laws principles).

"Lawsuits in our back yard" irks all kinds of people, but the argument from transactions costs makes sense.  The wrong, highly motivated Internet brigade could eat big chunks of Wikimedia's budget in legal fees hiring lawyer worldwide, if users could sue literally anywhere.

The more global reach an organization's sites and services have, the more the org needs that protection.  But at the same time, more people in far-off countries, and in potentially tenuous financial circumstances, sign up to the absurdly hypothetical possibility of suing in San Francisco.

> ## 15. Limitation of Liability
>
> ...
>
> The Wikimedia Foundation will not be liable to you or to any other party for any <mark>direct, indirect</mark>, incidental, special, consequential or exemplary damages....

This is a very roundabout way of saying "no damages at all".  If you start with all potential damages, take away the direct ones, then take away the ones that _aren't_ direct, what kind of damages do you have left?

> Notwithstanding any provision to the contrary in these Terms of Use, we (the Wikimedia Foundation) and you agree not to modify the applicable terms and requirements of any free license that is employed on the Projects or Project editions when such free license is authorized by these Terms of Use.

Integrity protection for standardized license terms.
