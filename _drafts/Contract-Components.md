---
title: Contract Components
description:
layout: post
tags:
- Common Form
- Contracts
---

You won't find my law degree on any wall in my office. You will find this [poster of Henry Studley's tool chest from _Fine Woodworking_](https://www.tauntonstore.com/the-studley-tool-chest-poster-011083?ref=customer_favorites_2) instead:

![Studley Toolchest Poster]({{ site.url }}/images/studley.jpg)

(You can [buy one online for less than $20](https://www.tauntonstore.com/the-studley-tool-chest-poster-011083?ref=customer_favorites_2).)

Studley designed, built, and stocked his tool chest. Both his tools and the chest he built for them, largely from his piano maker employer's wood scraps, exemplify the craft values of respect, maintenance, and creation of quality tools. They now rest at the Smithsonian, with other national treasures.

---

I left a large law firm to set up my own practice, in part, to reclaim control over my tools. I went back to running [Linux](https://debian.org) on [my old ThinkPad computer](https://www3.lenovo.com/us/en/laptops/thinkpad/t-series/t420s/). I set up this blog and [a website](https://kemitchell.com). I built [Common Form](https://commonform.github.io).

Common Form tools changed the way I write contracts. That was the point. Their efficiency made my law practice, and my evolving personal standards of draftsmanship, financially sustainable. I wouldn't have made it writing contracts as I had at the law firm, and I wouldn't have wanted to. I couldn't have [published so many forms](https://forms.kemitchell.com) exemplifying the state of my art, projecting my taste and my vales, copying and pasting in Microsoft Word, even with complete command of its features, even with [purpose-built add-ons](https://www.theformtool.com). I couldn't have [automated nondisclosure agreements](https://rxnda.com) or [software dual licensing](https://licensezero.com) without laying a foundation for contract versioning, preparation, formatting, and publication first.

<!--The simplest explanation of Common Form is that it brings proven ideas from computer software development to contact drafting. Many Common Forms tools have direct analogs to tools for writing, checking, recombining, sharing, and compiling programs. With the benefit of hindsight and the freedom of a clean slate, Common Form had an opportunity to surpass some programming tools in simplicity, consistency, security, and efficiency.-->

Having worked with those tools for a few years now, shaping contracts with them and seeing my practice shaped by their use, I have begun to feel their limitations. The clearest manifestation of those limitations is the relatively small community of fellow lawyers using Common Form tools to share and exchange work. Common Form has succeeded largely where other tools have already succeeded: in document assembly, structural analysis, and publication. Common Form tools for those operations differ from existing tools in their potential to facilitate lively sharing of work product across firms and clients in a confidentiality-respecting way. But that potential remains largely untapped.

In the end, Common Form needs to offer would-be collaborating practitioners a compelling benefit to offset the cost of learning new tool, and adjusting their workflows. There will always be some cost to offset, even for fellow lawyer-programmers and tech-savvy counsel.

## Means of Abstraction

Common Form allows us to express and manipulate the language of contracts and other legal documents using computers. It allows us to effortlessly combine that language in useful ways. But I now see that Common Form lacks one final element of any good collaborative toolkit: a means of packaging up and reusing combinations of useful language as functional units, understanding how they work, but ignoring how they work, as we reuse them. In the language of computing, from which Common Form borrows so much, the current toolkit gives us the elements of good contracts and a way of combining them, but no good means of abstracting the combinations we create.

It's a near miss. Common Form gives us tools for _recognizing_ that a set of terms has been published under a project name by someone else. But having given a set of terms a name, Common Form doesn't allow contract drafters to use the name in place of the terms identified. It doesn't do anything to hide the terms, freeing up brainpower to focus on the larger contract being built of many such named terms.

Even if Common Form tools eventually spit out a contract that copies all the relevant terms, drafters benefit immensely by controlling how much of the overall complexity of a project they see, and worry about, at one time. Tools like [commonform-lint](https://www.npmjs.com/packages/commonform-lint), which detects when defined terms and references break or conflict, help drafters bear the burden of worrying about conflicts between the pieces of language they borrow and share. But they lessen the burden, not eliminate or defer it.

## Isolating Terms

Some of that worry comes from drafting conventions, reflected in Common Form tools. For example, most drafters treat all definitions within a single document as applying throughout that document. If "Effective Date" is defined in one part of the agreement, and again in another, a reference to "Effective Date" in a third place becomes potentially ambiguous.

In practice, some practitioners attempt to avoid definition conflicts by limiting specific definitions to particular parts of the overall agreement. For example, many assignment provisions permit assignment to acquirers who gain "control" of the assigning party, and define "control" solely for purposes of the assignment provision. Such an agreement can define "control" again, differently, for purposes of, say, an indemnity. No conflict in definitions results. Limiting definitions to specific parts of the agreement, by what are in effect rules of construction, avoids the structural problem.

These practices represent two extremes. On the one hand, the standard practice applies definitions throughout an agreement. On the other hand, section-specific definitions limit a definition to a single, specific piece of language within an agreement.

We can see middle ground between: a definition that applies in less than the whole agreement, but in a specific, substantial part of it. As we could for any other kind of interpretation rule.

Contracts, and Common Form data, take the shape of hierarchies, or trees. Articles contain parts. Parts contain sections. Sections contain other sections. And so on. Some drafters prefer specific names for various levels of these hierarchies, such as article-part-section-subsection-paragraph. Common Form is indifferent to those taxonomies, leaving it up to tools that handle formatting and cross-referencing to give them names.

That branching, tree-like structure can give specificity to a rule about where a definition applies. For example:

> BuyerCo, Inc. ("**Buyer**") and SellerCo, LLC ("**Seller**") agree:
>
> 1.  **Assignment**.
>
>     1.  Buyer may assign this agreement to any entity that obtains _control_ of Buyer.
>
>     2.  Seller may assign this agreement to any entity that obtains _control_ of Seller.
>
> 2.  **Licensing**. Seller licenses Buyer and all entities under common _control_ with Buyer to...
>
> 3.  **Definitions**.
>
>     1.  In Section 1 (Assignment), "**control**" means ...
>
>     2.  In Section 2 (Licensing), "**control**" means ...

We could envision the same contract, built out of reusable components.  The assignment section might be a component, written separately and dropped into place to build the overall purchase agreement. The licensing section might be a component about licensing, made up of several other components addressing scope, rights, term, sublicensing, and so on.

But each of those components could contain its own definitions. And those definitions may conflict. For example, both the assignment component and a licensing component may attempt to define "Person" to include legal entities.

In order to build the agreement out of components, without worrying about them stepping on each others' toes with definitions or other elements, we need either:

1.  assurances from each component that we are using that any definitions within it are clearly limited in scope to just the relevant parts of that component

2.  an overall rule of construction that limits definitions in components to the components where they're found

## Components

Consider:

> The following interpretation rules apply to every "**Component**" of this agreement:
>
> 1.  Definitions in a Component apply only in the Component.
>
> 2.  Interpretation rules in a Component apply only in that Component.
>
> 3.  Cross-references in a Component refer only to subdivisions in that Component.

Let's write a component. Say, a permissive software copyright license based on [The Apache License](https://www.apache.org/licenses/LICENSE-2.0):

> 1.  Licensor hereby grants Licensee a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Program and such Derivative Works in Source Form or Object Form.
>
> 2.  "**Derivative Works**" means any work, whether in Source Form or Object Form, that is based on (or derived from) the Program and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. Derivative Works do not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Program and Derivative Works thereof.
>
> 3.  "**Source Form**" means the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.
>
> 4.  "**Object Form**" means any form resulting from mechanical transformation or translation of a Source form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

We can use this component in license agreement between two specific parties:

> SoftwareCo, Inc. ("**Licensor**") and ClientCo, LLC ("**Licensee**") agree:
>
> 1.  The "**Program**" means Licensor's Database Processor Pro program.
>
> 2.  **License**. The following is a Component of this agreement: [Contents of the component pasted here.]
>
> 3.  **Support**. The following is a Component of this agreement: [Contents of another component, for software support, pasted here.]
>
> 4. **Components**. The following interpretation rules apply to every "**Component**" of this agreement:
>
>     1.  Definitions in a Component apply only in the Component.
>
>     2.  Interpretation rules in a Component apply only in that Component.
>
>     3.  Cross-references in a Component refer only to subdivisions in that Component.

