---
title: Contract Components
description: fine-grained means of abstraction in legal drafting
layout: post
tags:
- Common Form
- Drafting
- Contract Architecture
---

I've drafted a bit of contract text, a generic, orthodox, permissive software copyright license:

> 1.  _Licensor_ grants _Licensee_ a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare _Derivative Works_ of, publicly display, publicly perform, sublicense, and distribute the _Program_ and such _Derivative Works_.
>
> 2.  "**Derivative Works**" means any work that is based on (or derived from) the _Program_ and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. _Derivative Works_ do not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the _Program_ and _Derivative Works_ of the _Program_.

I'd like to reuse these terms in a variety of agreements.  I'd like to share the terms with others, to reuse in their agreements.  I'd like sharing and reusing the terms to be easy.  I'd like sending and using future revisions to be easy.

The snippet defines _Derivative Works_ for itself.  It uses, but does not define, _Licensor_, _Licensee_, and _Program_.  So we can reuse the snippet in an agreement by providing the missing definitions:

> Customer, Inc. ("**Customer**") and Vendor, LLC ("**Vendor**") agree:
>
> 1.  **Definitions**.
>
>     1.  "**Licensor**" means _Vendor_.
>
>     2.  "**Licensee**" means _Customer_.
>
>     3.  "**Program**" means _Licensor_'s Super Calculator software.
>
> 2.  **Permissive Software Copyright License**.
>     1.  _Licensor_ grants _Licensee_ a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare _Derivative Works_ of, publicly display, publicly perform, sublicense, and distribute the _Program_ and such _Derivative Works_.
>
>     2.  "**Derivative Works**" means any work that is based on (or derived from) the _Program_ and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. _Derivative Works_ do not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the _Program_ and _Derivative Works_ of the _Program_.

Here's another snippet, a product warranty disclaimer:

> ***Unless required by applicable law,*** **Seller** ***provides the*** **Goods** ***on an "as is" basis, without warranties or conditions of any kind, either express or implied, including, without limitation, any warranties or conditions of title, non-infringement, merchantability, or fitness for a particular purpose.***

This snippet uses, but does not define, _Seller_ and _Goods_.

The two snippets use different terms.  But we can combine them in a single agreement, by the same method:

> Customer, Inc. ("**Customer**") and Vendor, LLC ("**Vendor**") agree:
>
> 1.  "**Software**" means _Vendor_'s Super Calculator software.
>
> 2.  **License**.
>
>     1.  **Definitions**.
>
>         1.  "**Licensor**" means _Vendor_.
>
>         2.  "**Licensee**" means _Customer_.
>
>         3.  "**Program**" means the _Software_.
>
>     2.  **Permissive Software Copyright License**.
>
>          1.  _Licensor_ grants _Licensee_ a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare _Derivative Works_ of, publicly display, publicly perform, sublicense, and distribute the _Program_ and such _Derivative Works_.
>
>          2.  "**Derivative Works**" means any work that is based on (or derived from) the _Program_ and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. _Derivative Works_ do not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the _Program_ and _Derivative Works_ of the _Program_.
>
> 3.  **Disclaimer**.
>
>      1.  **Definitions**.
>
>          1.  "**Seller**" means _Vendor_.
>
>          2.  "**Goods**" means the _Software_.
>
>      2.  **As Is**.  ***Unless required by applicable law,*** **Seller** ***provides the*** **Goods** ***on an "as is" basis, without warranties or conditions of any kind, either express or implied, including, without limitation, any warranties or conditions of title, non-infringement, merchantability, or fitness for a particular purpose.***

Using definitions in this way allows us to reuse the snippets without changing their text.  That means we could include them by reference, instead of copying:

> ## Agreement
>
> Customer, Inc. ("**Customer**") and Vendor, LLC ("**Vendor**") agree:
>
> 1.  "**Software**" means _Vendor_'s Super Calculator software.
>
> 2.  **License**.
>
>     1.  **Definitions**.
>
>         1.  "**Licensor**" means _Vendor_.
>
>         2.  "**Licensee**" means _Customer_.
>
>         3.  "**Program**" means the _Software_.
>
>     2.  **Permissive Software Copyright License**.  The parties include the terms attached as Schedule A here.
>
> 3.  **Disclaimer**.
>
>      1.  **Definitions**.
>
>          1.  "**Seller**" means _Vendor_.
>
>          2.  "**Goods**" means the _Software_.
>
>     2.  **As Is**.  The parties include the terms attached as Schedule B here.

> ## Schedule A --- License Terms
>
> 1.  _Licensor_ grants _Licensee_ a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare _Derivative Works_ of, publicly display, publicly perform, sublicense, and distribute the _Program_ and such _Derivative Works_.
>
> 2.  "**Derivative Works**" means any work that is based on (or derived from) the _Program_ and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. _Derivative Works_ do not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the _Program_ and _Derivative Works_ of the _Program_.

> ## Schedule B --- Warranty Terms
>
> ***Unless required by applicable law,*** **Seller** ***provides the*** **Goods** ***on an "as is" basis, without warranties or conditions of any kind, either express or implied, including, without limitation, any warranties or conditions of title, non-infringement, merchantability, or fitness for a particular purpose.***

Drafters often break up the terms of a complex agreement into schedules in just this way.  Different drafters can then handle each schedule, in parallel.  Drafters can crib schedules for and from other projects.  Terms can change, growing longer or shorter, changing in structure and specifics, over time.

Since we're still not changing the terms of either snippet, we can go even further.  If we publish the snippets, via [Common Form](https://commonform.org/kemitchell) or otherwise, we can replace references to schedules with references to the publications:

> Customer, Inc. ("**Customer**") and Vendor, LLC ("**Vendor**") agree:
>
> 1.  "**Software**" means _Vendor_'s Super Calculator software.
>
> 2.  **License**.
>
>     1.  **Definitions**.
>
>         1.  "**Licensor**" means _Vendor_.
>
>         2.  "**Licensee**" means _Customer_.
>
>         3.  "**Program**" means the _Software_.
>
>     2.  **Permissive Software Copyright License**.  The parties include the terms published at [https://commonform.org/forms/3279...](https://commonform.org/forms/32794793c0f5020799799b4b5d92e9d607fdab1337e0c805ec9c06e8b5bc3156)
>
> 3.  **Disclaimer**.
>
>      1.  **Definitions**.
>
>          1.  "**Seller**" means _Vendor_.
>
>          2.  "**Goods**" means the _Software_.
>
>     2.  **As Is**.  The parties include the terms published at [https://commonform.org/forms/a7a8...](https://commonform.org/forms/a7a809e0a612369296b06f86205aa752884b29713c32583e9a17760004360bf2)

As drafters, combining snippets of terms this way doesn't stop us needing to read the snippets, even if we're familiar with them, have read them before, and know their legal effect.  The ways they're drafted may cause structural issues:

1.  Two snippets might define the same term, like _Person_ or _Material Adverse Change_, in different ways, creating ambiguity.  And the combining agreement itself might define a term in a different way than a snippet does, also creating ambiguity.

3.  The agreement and its snippets might set other kinds of interpretation rules that conflict or combine in unfortunate ways.

These potential problems reflect contract drafting conventions:

1.  Unless they say otherwise, definitions apply throughout an agreement.

2.  Unless they say otherwise, other interpretation rules apply throughout an agreement, too.

Exceptions occur, but infrequently.  Drafters sometimes limit a definition or other interpretation rule to a specific organizational part of their agreement, such as the containing paragraph or a specific section.  For example, _control_ is often defined solely for purposes of a section about assignment.

Sometimes these conventions make organizing a long set of terms difficult.  Rather than litter agreements with "exclusively for the purposes of this section" and the like, drafters avoid the unhelpful organizational effects of these rules by attaching terms as separate agreements under one master agreement:

> ## Master Agreement
>
> Customer, Inc. ("**Customer**") and Vendor, LLC ("**Vendor**") agree:
>
> 1.  "**Software**" means _Vendor_'s Super Calculator software.
>
> 2.  **License**.  _Customer_ and _Vendor_ will enter concurrently into the License Agreement attached as Exhibit A, with _Vendor_ as the "Licensor", _Customer_ as the "Licensee", and the _Software_ as the "Program" under that agreement.
>
> 3.  **Disclaimer**.  _Customer_ and _Vendor_ will concurrently enter into the Warranty Disclaimer Agreement attached as Exhibit B, with _Vendor_ as "Seller", _Customer_ as "Buyer", and the _Software_ as the "Goods" under that agreement.
>
> [Signature pages follow.]

> ## Exhibit A --- License Agreement
>
> Customer, Inc. ("**Licensee**") and Vendor, LLC ("**Licensor**") agree as follows.  In this agreement, "**Program**" has the same meaning as "Software" in the Master Agreement.
>
> 1.  _Licensor_ grants _Licensee_ a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare _Derivative Works_ of, publicly display, publicly perform, sublicense, and distribute the _Program_ and such _Derivative Works_.
>
> 2.  "**Derivative Works**" means any work that is based on (or derived from) the _Program_ and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. _Derivative Works_ do not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the _Program_ and _Derivative Works_ of the _Program_.
>
> [Signature pages follow.]

> ## Exhibit B --- Warranty Disclaimer Agreement
>
> Customer, Inc. ("**Buyer**") and Vendor, LLC ("**Seller**") agree as follows.  In this agreement, "**Goods**" has the same meaning as "Software" in this Master Agreement.
>
> ***Unless required by applicable law,*** **Seller** ***provides the*** **Goods** ***on an "as is" basis, without warranties or conditions of any kind, either express or implied, including, without limitation, any warranties or conditions of title, non-infringement, merchantability, or fitness for a particular purpose.***
>
> [Signature pages follow.]

Each agreement develops a vocabulary of defined terms, a set of interpretation rules, and a numbering scheme all its own.  It can borrow from other agreements and documents from there, if it does so explicitly.

Drafters separate many kinds of complex transactions into multiple agreements.  Changing the rule from sharing all definitions and interpretation rules across all terms of the deal to sharing only within special-purpose exhibit-agreements helps lawyers prepare, review, and negotiate many kinds of complex transactions more reliably and efficiently, in more manageable pieces.

A change to any particular agreement requires less work reviewing other terms to see if they require conforming changes.  Counsel more readily find needed terms to review or revise, by searching in the specific exhibit-agreement dedicated to that subject matter.  Drafters more readily reuse common utility agreements, such as purchase agreements, voting agreements, intellectual property agreements, and nondisclosure agreements, across deals.  Deal teams more readily delegate large parts of the overall drafting burden, as exhibit-agreements or schedules, to specialists, associates, paralegals, and client personnel.  As they collaborate, they can think of team members' contributions in terms of what they achieve, without concern for what specific language or document structure they use to do so.

These benefits offset the costs of distributing a deal's terms across multiple documents.  Separate documents often duplicate language, from preambles to definitions, interpretation rules, and general contract terms.  That makes a fatter closing volume overall.  It takes some additional work to ensure that the master agreement correctly incorporates all exhibit agreements.  Clients end up signing many agreements, at one time, to do one deal.

The trade-off makes sense when the benefits of breaking terms up outweigh the costs of duplication and more pieces to handle.  The benefits are always welcome.  Can we drive the costs down, to make the benefits available, no matter how complex the deal?

We can.  If separate agreements and schedules benefit drafters thanks to implicit conventions for reading them independently, we start by making those conventions explicit:

> These interpretation rules apply to each "**Agreement**" of this transaction:
>
> 1.  Definitions in the _Agreement_ apply only in the _Agreement_.
>
> 2.  Definitions outside the _Agreement_ apply in the _Agreement_ only if explicitly stated.
>
> 3.  Interpretation rules in the _Agreement_ apply only in the _Agreement_.
>
> 4.  Interpretation rules outside the _Agreement_ apply in the _Agreement_ only if explicitly stated.

Then we make them generic:

> These interpretation rules apply to each "**Component**" of this agreement:
>
> 1.  Definitions in the _Component_ apply only in the _Component_.
>
> 2.  Definitions outside the _Component_ apply in the _Component_ only if explicitly stated.
>
> 3.  Interpretation rules in the _Component_ apply only in the _Component_.
>
> 4.  Interpretation rules outside the _Component_ apply in the _Component_ only if explicitly stated.

That frees us to apply the rules not just to agreements, with all their handling and signing burdens, but to subdivisions of a single agreement, as well:

> Customer, Inc. ("**Customer**") and Vendor, LLC ("**Vendor**") agree:
>
> 1.  "**Software**" means _Vendor_'s Super Calculator software.
>
> 2.  **Components**.  These interpretation rules apply to each "**Component**":
>
>     1.  Definitions in the _Component_ apply only in the _Component_.
>
>     2.  Definitions outside the _Component_ apply in the _Component_ only if explicitly stated.
>
>     3.  Interpretation rules in the _Component_ apply only in the _Component_.
>
>     4.  Interpretation rules outside the _Component_ apply in the _Component_ only if explicitly stated.
>
> 3.  **License**.  The parties include the terms published at [https://commonform.org/forms/3279...](https://commonform.org/forms/32794793c0f5020799799b4b5d92e9d607fdab1337e0c805ec9c06e8b5bc3156) as a _Component_ of this agreement.  In that _Component_:
>
>     1.  "**Licensor**" means _Vendor_.
>
>     2.  "**Licensee**" means _Customer_.
>
>     3.  "**Program**" means the _Software_.
>
> 4.  **Disclaimer**.  The parties include the terms published at [https://commonform.org/forms/a7a8...](https://commonform.org/forms/a7a809e0a612369296b06f86205aa752884b29713c32583e9a17760004360bf2) as a _Component_ of this agreement.  In that _Component_:
>
>     1.  "**Seller**" means _Vendor_.
>
>     2.  "**Goods**" means the _Software_.

Armed with these _Component_ rules:

1.  _Components_ can define whatever terms they like for their own purposes.  If they happen to define the same term in different ways, no ambiguity results.  Each _Component_ gets its own definition.

2.  _Components_ can set whatever interpretation rules they like for their own purposes.  If they happen to set conflicting rules, or rules that combine in an unfortunate way, no problem results.  Each _Component_ gets its own interpretation rules.

3.  As a contract drafter, I can mix and match _Components_ that achieve aspects of the deal I have in mind.  If I remember what a _Component_ achieves, I can ignore the specific language, terms, and structure it uses to do so as I combine it with other _Components_ to achieve more complex, composite goals.

4.  As a contract drafter, I can easily write _Components_ that others can reuse, drafting just the terms I need to achieve the purpose of the _Component_, leaving terms for parties, amounts, and other details undefined for containing agreements to provide.  I can use _Components_ to build more _Components_, just as I can use _Components_ to build agreements.

In the coming weeks, I'll be writing more tools and services, under the [Common Form](https://commonform.github,io) umbrella, to make writing, sharing, and combining _Components_ easier.  This will bring to the Common Form arsenal the tool I now see was missing.  Common Form has good tools for expressing the elemental language and structure of contracts, and for combining those elements in useful ways.  But it lacks what computer scientists call _means of abstraction_.

Contract drafters already understand means of abstraction.  Putting terms in separate agreements, attached as exhibits, is a means of abstraction.  Separating exhibit-agreements, and _Components_ under the rules above, allow reuse of terms as functional units, or black boxes, without concern for the specifics of exactly how they were drafted.  Suppressing those details allows drafters to focus on the more complex terms created by combining existing _Components_.  Making those details irrelevant to users allows _Component_ authors freedom to refine and improve _Components_ without creating undue headaches for users.  Means of abstraction afford those benefits.

The beneficial trade-off of means of abstraction is well known across trades and professions.  Computer programmers build programs out of reusable subroutines.  Engineers develop new devices out of [jelly bean components](https://en.wikipedia.org/wiki/Jelly_bean#Slang).  Architects design projects for [modular construction](https://en.wikipedia.org/wiki/Modular_building).  Contractors build with standardized, interchangeable, prefabricated parts and standardized materials.

Controlling complexity allows simple creatures, like mortal contract drafters, to meet complex needs.  It's high time to bring the state of the art in complexity control to the draftsman's art.
