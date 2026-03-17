---
date: 2026-03-16T19:17:53-07:00
title: Open Community License v1
series: Line by Line
description: an unusual non-commercial hardware-software combo license from 3D printing
tags:
- Open Hardware
- Licenses
- 3D Printing
---

Last year, [Prusa Research](https://www.prusa3d.com/), a Czechia-based manufacturer of 3D printers, drafted and adopted [a new license](https://github.com/OpenCommunityLicence/OpenCommunityLicence/) for parts of its CORE line of not-entirely-open products, meant to take on the increasingly dominant and increasingly restrictive [Bambu Lab](https://bambulab.com).

## The License Text

> Open Community License (OCL v1)

Versioning is good.  I'd've liked to see a more distinctive name.

"Open" and "Community" are the glitteriest of generalities.  Opportunistic marketing sucked them dry long before Prusa published this license.  I'd've rather seen "Prusa Public License" or some such.

> OCL pertains to intellectual property applied in licensor's products and/or its components (hardware and software) which is distributed under such, including copyright, design, and patent.

Interesting example of a public license covering both hardware and software.  Licenses covering both are extremely common in private business transactions, but still fairly rare in public licensing practice.

Good on them for clearly mentioning copyright and patent.  I'd take "design" here to mean design patents.  Probably.  One more word would make it perfectly clear.

> All licensors's copyrights, designs, and patents as far as relevant to products and/or its components under OCL are community open, as the aim of OCL is to allow open access to community including the essential right, the right-to-repair, by giving users complete freedom of use, copy, modification, and hack, while promoting a fair competition by securing intellectual property rights to prevent vendor locking and patent trolling.

I came away with the strange feeling this paragraph was meant to sugar the bitter medicine of a restricted license up by roll-calling as many causes célèbres of people who won't like this license as possible.  Open access.  Right to repair.  Community again.  Fair competition.  Vendor locking---which I'd read as "vendor lock-in".  Patent trolling.

The use of "hack" as a verb isn't clear.  It feels a little patronizing here.  A little pandering.

> NOTE that any part of the product and/or its component provided under a license incompatible with OCL remains unaffected by OCL.

I'm not entirely sure what this is supposed to mean.  Are they saying that they can slap OCLv1 on a whole repo, then also slap some more restrictive license on things within that repo, like subdirectories, and those more restrictive terms override the OCL?  If so, I don't think the OCL needs to say anything to make that possible.  Notices in repositories should make it clear.

> As an [sic] non-commercial END USER

No definition of "non-commercial.  None is coming later.

However, it's clearly used here as a descriptor _of users_, rather than of uses.  Whatever "non-commercial" does or doesn't mean, that can work out easier for users if their status stays relatively fixed, and they don't have to think about whether each particular use or project is commercial.  But a lot of people cross over fluidly from personal to work and all kinds of places between, day by day.

> YOU MAY use, copy, modify, hack the product and/or its components as you wish!

The capitalized RFC 2119-style verbs usually strike me as unnecessary in legal terms.  They aren't needed to be clear, and they rarely actually make much of anything clearer, so they mostly seem to work as a kind of dress-up, an attempt to evoke the authoritativeness or presumed rigor of technical standards in legal terms that never went through any standards process.  But I've seen them make technical people more comfortable with expressing themselves in license terms.  I don't see any misuse here to cause problems.

> YOU SHOULD support the 3D printing community by sharing your creations and modifications.

I'd bet most US courts would interpret this as what they call "precatory language": not an obligation any court is supposed to enforce, but just a use of a legal document as medium for getting other kinds of messages.

> If you distribute your creations, modifications, or any such derivatives YOU MUST do so under OCL or any non-commercial, share-alike license allowing other community members to do everything that YOU MAY.

Interesting.  A rare case of a share-alike/copyleft license giving flexibility in choice of license terms, beyond simply the same terms or a later version of them.

My own [Parity](https://paritylicense.com/versions/7.0.0#contribute) does this, largely to avoid combinatorically expanding the set of potential so-called [license compatibility problems](https://en.wikipedia.org/wiki/License_compatibility).

The OCL's takes a similar approach, which is also the hardest path, drafting wise: it allows an open-ended set of allowed licenses abstractly, by describing them functionally.  For Parity, the point was explicitly to allow _either_ copyleft or less restricted _permissive_ licensing.  As of version 7.0.0, that's specified as "another license that allows everything this license [Parity 7.0.0] does", followed by four named licenses, all permissive.  Here, Prusa seems to want non-commercial and copyleft---written "share-alike"---only, but then uses general language in terms of what's _allowed_, like Parity.

I'd read that to allow choosing non-commercial and share-alike licenses that nonetheless allow _more_ than OCLv1 does.  I'm not aware any such license currently exists.  Frankly, the only non-commercial-and-share-alike license that does is the rarely encountered [CC-BY-NC-SA](https://creativecommons.org/licenses/by-nc-sa/4.0/) from Creative Commons, whose licenses generally aren't recommended for software, but have seen use specifically for hardware.

> This does not concern your creations and modifications that are not derived from the product and/or its components.

I'd guess what they're after here is a comforting clarification that share-alike applies to work on 3D printers, rather than work _with_ 3D printers, like objects you design to print and use.  "Derived from" is doing a lot of work here.   I'd state it more specifically, but that would be easier in a license specific to Prusa and its printers, rather than a generic license offered for reuse by anyone, for any kind of project.

> As a commercial BUSINESS USER

Without any definition of "commercial" or "non-commercial", US courts forced to decide whether some use is or isn't would look around the licenses for contextual hints.  One of the biggest is here: a clear association, if not strict identification, or "commercial" with "BUSINESS".

That could help organizations like charities and universities, which are rarely called "businesses", but do a lot more commercial work than many suppose.  That's why the PolyForm team and I [specifically addressed generally non-commercial orgs doing arguably commercial things](https://polyformproject.org/licenses/noncommercial/1.0.0/#noncommercial-organizations) in our noncommercial license for software.

> YOU MAY use the product and modify it to your use case solely for your internal production use.

The phrase "internal production use" isn't a common one in legal drafting I've seen.  It seems awkwardly strung between two phrases that _are_, "internal business purposes" and "production use".  Those phrases have different meanings, and I wonder if Prusa really wanted to blend them here, or just misquoted "internal business purposes".

"Production" is industry jargon.  It exists mostly so we can distinguish _non-production_ uses.  For example, many trial licenses with low or no fees and few if any warranties or risk protections only cover _non-production_ use.  The gist is that the customer should try the product or service only in experiments, such as on fake data, and not hook it up to the systems or processes they actually use to sell or serve to others, or use to make money.  For that they need to buy a broader license with more robust legal terms.

I suspect Prusa wouldn't have any problem with a business user modifying the printer bits they release under this OCLv1 for printing prototypes or test runs, or otherwise doing experiments that don't yield products they sell to others or form parts of services they sell to others.  So their choice of wording seems like a simple mistake. Perhaps it was a translation error.

> YOU MUST NOT modify the product and/or its components for any commercial purpose other than your internal production use.

This is redundant, assuming the business user needs a license to modify in the first place.  No need to say "YOU MAY solely do X", and then also say "YOU MUST NOT do the opposite of X".

> YOU MUST NOT copy or in any way replicate the product and/or its components for any commercial purpose excluding your internal right-to-repair without obtaining a separate business license or repair license.

Subtle shift here: now "commercial" gets used a descriptor of _purposes_, rather than of _users_.

The reuse of "internal" here might suggest that "internal production use" needs to have something to do with repair.  I don't think that's clearly expressed, not as any kind of _definition_ or _identity_.  But again, if a court had to hunt for clues to decide whether some business use was "internal production use", that could be relevant.

> ---

I'm not against horizontal rules at all.  But as we'll see, it's not terribly clear what effect this particular one will have on legal meaning of terms that follow.


> Licensor's products and/or its components under OCL MUST NOT BE subject to any systematic or automated text and/or data mining or other text and/or data collection activity in relation to the product without explicit permission.

Interesting example of an explicit ban on data mining, and potentially neural network model training.

It's not clear to me whether is meant to be part of the license terms or just a notice.  There's a horizontal rule just before, and everything that follows that line seems more like extra information than operative text.  But the idea that the license terms have ended and other, extra notices have begun.  The GPLs and Apache 2.0 say "END OF TERMS AND CONDITIONS".  That's clear.

With respect to "AI" these days, a few big questions hover over attempts to set these kind of rules for published works:

- Do model trainers even need license grants to use work released this way for training?  Or does that fall under "fair use" in the USA, the "text and data mining exception" in the EU, not enjoying the thoughts or sentiments expressed in Japan, or other exceptions elsewhere?

- Where the laws generally allow mining for training, but require trainers respect opt-outs, does putting this kind of thing in a public IP license, or after one, effectively opt out?  Are miners going to have to search the content they scrape for language like this?  Or is opting out going to require using some kind of public opt-out registry or technical standard for machine readable signaling?

- Where the laws generally allow mining for training, but require miners only hoover up data they otherwise have the legal right to access, does this kind of language potentially make their initial access unlawful?  How do these terms interact with terms of service and access norms for platforms where the licensor or others might distribute the licensed work, like GitHub's?

> To promote ease of understanding of OCL Licensor keeps and updates a database of products and/or its components licensed under OCL and good practice at [link to the database].

I definitely wouldn't recommend including this as operative text in any license.  You aren't going to be able to update the link in copies of releases that other people redistribute among themselves.  You also open yourself up to contradictions in terms: you might add the license to a new project but forget or delay adding it to your global list.  Are people who see the list entitled to rely on it being complete and up-to-date, based on this language?

> For practical examples of how this license applies, see the examples/ directory.

The relevant directory is on GitHub [here](https://github.com/OpenCommunityLicence/OpenCommunityLicence/blob/main/examples/prusa-ocl-examples.md).

I'm very much a fan of using hypotheticals to explain the intent of license terms.  But if the examples are really meant to clarify the license, I wonder why they're not either copied and pasted into its text or clearly incorporated by reference.

Mentioning them here, semi-casually, after a horizontal rule that may be meant to mark the end of the license terms that legally matter, only sets up ambiguities about the relationship of this license file to the examples files.  Both these license terms and the example files may change over time.

If the examples are just advisory, we have a problem similar to that of the GPL FAQs published by the Free Software Foundation.  Do they only matter if the FSF is the one that holds rights in the project that leads to a legal dispute?  Even in those situations, would allowing the FSF to cite them in court open up a back door allowing it to effectively monkeypatch its own license without updating the text or publishing a new, numbered version?

I am not aware of any rule against writing legal terms into a license, then following them with "For example..." and one or more hypotheticals.  I do it myself.  But whenever I or any other drafters feels intuitively that their legal terms don't get their point across without examples, that's a hint to give those terms more thought, too.  Rule-plus-examples should be an intentional choice, a decision about how best to get intent across, not a way to feel better than we should about sending bad language out into the world, like giving a football player with a busted ankle and sending him out onto the field.

## Overall

I don't see this as a particularly well drafted license.  The combination of _both_ a commercial/non-commercial segmentation _and_ share-alike terms makes it particularly complex, functionally speaking.  At the same time, there's little language here to help tame that complexity with clarity.

Still, I probably wouldn't hesitate to rely on this license as a hobbyist doing things no one would confuse for business.  Everyone else should have a look and think twice.  And that's probably the point.
