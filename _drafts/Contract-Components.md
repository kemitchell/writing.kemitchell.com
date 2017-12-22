---
title: Contract Components
description: Don't give lawyers abstraction. Devil knows what they'll do with it.
layout: post
tags:
- Common Form
- Contracts
---

You won't find my law degree on my office wall. You will find [this poster of Henry Studley's tool chest from _Fine Woodworking_](https://www.tauntonstore.com/the-studley-tool-chest-poster-011083?ref=customer_favorites_2) instead:

![Studley Toolchest Poster]({{ site.url }}/images/studley.jpg)

(You can [buy one online for less than $20](https://www.tauntonstore.com/the-studley-tool-chest-poster-011083?ref=customer_favorites_2).)

Studley designed, built, and stocked his tool chest. Both his tools and the chest he built for them, largely from his piano-maker employer's wood scraps, exemplify the craft values of respect, maintenance, and creation of quality tools. They now rest at the Smithsonian, with other national treasures.

---

I left a large law firm to set up my own practice, in part, to reclaim control over my tools. I went back to running [Linux](https://debian.org) on [my old ThinkPad computer](https://www3.lenovo.com/us/en/laptops/thinkpad/t-series/t420s/). I set up this blog and [a website](https://kemitchell.com). I built [Common Form](https://commonform.github.io).

Common Form tools changed the way I write contracts. That was the point. Their efficiency made my law practice, and my drafting standards, financially sustainable. I wouldn't have made it writing contracts as I had at the law firm, and I wouldn't have wanted to. I couldn't have [published forms](https://forms.kemitchell.com) exemplifying the state of my art, projecting my taste and my values, with Microsoft Word, even with command of its features and [purpose-built add-ons](https://www.theformtool.com). I couldn't have [automated nondisclosure agreements](https://rxnda.com) or [software dual licensing](https://licensezero.com) without laying a foundation for contract versioning, preparation, formatting, and publication first.

<!--The simplest explanation of Common Form is that it brings proven ideas from computer software development to contact drafting. Many Common Forms tools have direct analogs to tools for writing, checking, recombining, sharing, and compiling programs. With the benefit of hindsight and the freedom of a clean slate, Common Form had an opportunity to surpass some programming tools in simplicity, consistency, security, and efficiency.-->

Having worked with those tools for a few years now, shaping contracts with them and being shaped by them, I have begun to know their limitations. The clearest manifestation of those limitations is the relatively small community of fellow lawyers using Common Form tools to share work. Common Form has succeeded largely where other tools have already succeeded: in document assembly, structural analysis, and publication. Common Form tools for those operations differ from existing tools in their potential to facilitate lively sharing of work product across firms and clients in a confidentiality-respecting way. But that potential remains largely unrealized.

In the end, Common Form needs to offer collaborators a compelling benefit to offset the cost of learning new tools and adjusting the way they work. There will always be some cost to offset, even for fellow lawyer-programmers and tech-savvy counsel. The benefits have to be substantial to net out positive.

## Means of Abstraction

Common Form allows us to express and manipulate the language of contracts and other legal documents using computers. It helps us combine that language in useful ways. But I now see that Common Form lacks one final element of any good collaborative toolkit: a means of packaging up and reusing combinations as functional units, understanding how they work, but hiding the details. In the language of computing, from which Common Form borrows so much, the current toolkit gives us the elements of contract language and means of combining them, but no good means of abstracting our combinations.

It's a near miss. Common Form gives us tools for _recognizing_ that a set of terms has been published under a project name by someone else. But having given a set of terms a name, Common Form doesn't allow contract drafters to use the name in place of the project. It doesn't do anything to hide the terms, freeing up brainpower to focus on the larger contract being built.

Even if Common Form tools eventually copy out every word of every project used to build a contract, drafters benefit immensely by controlling how much of the overall complexity of a project they see, and worry about, at one time. Tools like [commonform-lint](https://www.npmjs.com/packages/commonform-lint), which detects when defined terms and references break or conflict, help drafters bear the burden of worrying about conflicts between the pieces of language they borrow and share. But they only lessen the burden, not eliminate or even defer it.

## Isolating Terms

Some of that worry comes from drafting conventions built into some Common Form tools. For example, most drafters treat definitions within a document as applying throughout the document. If "Effective Date" is defined in one part of the agreement, and again in another, a reference to "Effective Date" in a third part becomes potentially ambiguous.

In practice, some drafters avoid definition conflicts by limiting definitions to specific parts of the overall agreement. For example, many assignment provisions permit assignment to acquirers who gain "control" of the assigning party, and define "control" solely for purposes of the assignment provision. Such an agreement can define "control" again, differently, for purposes of, say, an indemnity, without creating ambiguity. Limiting definitions to specific parts of the agreement, by what are in effect rules of construction, avoids the structural problem.

Current practice represents two extremes. On one hand, the rule applies definitions throughout an agreement. On the other hand, the exception limits a definition to a single, specific piece of language within an agreement. Everywhere, or in exactly one place.

We can see middle ground between: a definition that applies in less than the whole agreement, but in a delineated, substantial part of it. We could limit any other rule of interpretation in the same way.

Contracts, and Common Form data representing contracts, take the shape of hierarchies, or trees. Articles contain parts. Parts contain sections. Sections contain other sections. And so on. That branching structure can help us make clear in exactly which parts of an agreement a definition applies. For example:

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

We could envision the same contract, built out of reusable components.  The assignment section might be a component, written separately and dropped into place. The licensing section might be a component, made up, in turn, of several other components addressing scope, rights, term, sublicensing, and so on.

But each of those components could contain its own definitions. And those definitions may conflict. For example, both the assignment component and a licensing component may attempt to define "Person" to include legal entities.

In order to build the agreement out of components, without worrying about them defining terms in conflicting ways, we need either:

1.  assurance that each component we use will limit its definitions to just the relevant parts of its own text

2.  an overall rule of construction that limits definitions in components to the components where they're found

The first approach requires a lot of precise, tedious work of everyone writing components, in each component they write. The second requires contract drafters to introduce a rule in their contracts, and ensure components they use work well under that rule.

## Components

Consider this contract language:

> The following interpretation rules apply to every "**Component**" of this agreement:
>
> 1.  Definitions in a Component apply only in that Component.
>
> 2.  Interpretation rules in a Component apply only in that Component.
>
> 3.  Cross-references in a Component refer only to subdivisions in that Component.

Let's write a component. Say, a permissive software copyright license based on [The Apache License](https://www.apache.org/licenses/LICENSE-2.0):

> 1.  Licensor hereby grants Licensee a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Program and such Derivative Works in Source Form and Object Form.
> 2.  "**Derivative Works**" means any work, whether in Source Form or Object Form, that is based on (or derived from) the Program and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. Derivative Works do not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the Program and Derivative Works thereof.
> 3.  "**Source Form**" means the preferred form for making modifications, including but not limited to software source code, documentation source, and configuration files.
> 4.  "**Object Form**" means any form resulting from mechanical transformation or translation of a Source Form, including but not limited to compiled object code, generated documentation, and conversions to other media types.

We can use this component in a license agreement between two specific parties:

> SoftwareCo, Inc. ("**Licensor**") and ClientCo, LLC ("**Licensee**") agree:
>
> 1.  The "**Program**" means Licensor's Database Processor Pro program.
> 2.  **License**. The following is a Component of this agreement: [Contents of the component pasted here.]
> 3.  **Support**. The following is a Component of this agreement: [Contents of another component, for software support, pasted here.]
> 4. **Components**. The following interpretation rules apply to every "**Component**" of this agreement:
>     1.  Definitions in a Component apply only in the Component.
>     2.  Interpretation rules in a Component apply only in that Component.
>     3.  Cross-references in a Component refer only to subdivisions in that Component.

The rules of construction that apply to Components afford us indifference as to which terms the two Components define within their text. Perhaps both define "Upgrades", or "Patches", or "Personnel". It doesn't matter. Each Component can have its own definition, without rendering any other ambiguous.

Our rules allow us to ignore which terms our components define, but they do not allow us to ignore which terms our components use. We know that our license Component uses the terms "Licensor" and "Licensee" for the parties. But what if the support Component uses "Vendor" and "Customer", without defining them, instead?

We have assurances that Components won't force their definitions up out of their text, causing problems across the entire agreement. What we need is a way to pass defined terms down to the Components making up our entire agreement. We can do that with definitions:

> SoftwareCo, Inc. ("**Licensor**") and ClientCo, LLC ("**Licensee**") agree:
>
> 1.  The "**Program**" means Licensor's Database SuperOffice program.
> 2.  **License**. The following is a Component of this agreement: [Contents of the component pasted here.]
> 3.  **Support**. These definitions:
>     1.  "**Vendor**" means Licensor.
>     2.  "**Customer**" means Licensee.
>     3.  "**Time Zone**" means Pacific Time.
>     4.  "**Response Period**" means 24 hours.
>
>     apply in this Component:
>
>     1.  **Support**. Vendor agrees to respond to Customer personnel requests via e-mail about configuration of, use of, and problems with the Program ("**Support Requests**").
>     2.  **Responsiveness**. Vendor agrees to make all reasonable efforts to respond to Support Requests during regular business hours in the Time Zone within one Response Period of receipt.
> 4. **Components**. The following interpretation rules apply to every "**Component**" of this agreement: ...

Note the pattern:

> These definitions: [List of Definitions]
>
> apply in this Component: [Text of Component]

The pattern allows us to pass terms down to Components, while preventing Components from throwing terms back up at us. Defined terms flow in just one direction: down from the contract being composed to the components being used.

We can do this whether we copy the terms of Components we use directly into our contracts, or incorporate them by reference:

> These definitions:
>   1.  "**Vendor**" means Licensor.
>   2.  "**Customer**" means Licensee.
>   3.  "**Time Zone**" means Pacific Time.
>   4.  "**Response Period**" means 24 hours.
>
> apply in the terms at
>
> https://commonform.org/publications/kemitchell/orthodox-software-copyright-license/1e
>
> which the parties include as a Component of this agreement.

## Subcomponents

The mechanisms used so far, limiting definitions to the components that define them and passing definitions down from agreement to component, work just as well when building components out of other components.

Consider a component that combines copyright licensing with a warranty disclaimer and a limit on liability:

> 1.  **License**. These definitions:
>     1.  "**Work**" means the Program.
>     2.  "**Licensor**" means Vendor.
>     3.  "**Licensee**" means Customer.
>
>     apply in this Component:
>
>     1.  Licensor hereby grants Licensee a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, sublicense, and distribute the Program and such Derivative Works in Source Form and Object Form.
>     2.  ...
> 2.  **Disclaimer**. These definitions:
>     1.  "**Seller**" means Vendor.
>     2.  "**Buyer**" means Customer.
>
>     apply in this Component:
>
>     1.  ***Unless required by applicable law or agreed to in writing, Seller provides the Product on an "as is" basis, without any warranty.***
>     2.  ***Buyer is solely responsible for determining the appropriateness of using or redistributing the Product and assume any risks associated with  use of the Product.***
> 3.  **Limits on Liability**. These definitions:
>     1.  "**Seller**" means Vendor.
>     2.  "**Product**" means the Program.
>
>     apply in this Component:
>
>     1.  As far as the law allows, Seller's total liability for any damages under this agreement will be the Damages Cap.
>     2.  This limit applies even if Seller is advised of the possibility of damages in excess of the Damages Cap.

The same Common Form that helps us identify undefined terms today can calculate exactly which terms we need to pass down to this component to make it complete: "Program", "Vendor", "Customer", and "Damages Cap". Undefined terms used in a Component act like fill-in-the-blanks.
