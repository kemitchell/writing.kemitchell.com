---
title: Contract Components
description: fine-grained means of abstraction in legal drafting
layout: post
tags:
- Common Form
- Contract Drafting
- Contract Architecture
---

I've drafted a bit of contract text, a generic, orthodox, permissive software copyright license:

> 1.  _Licensor_ grants _Licensee_ a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare _Derivative Works_ of, publicly display, publicly perform, sublicense, and distribute the _Program_ and such _Derivative Works_.
>
> 2.  "**Derivative Works**" means any work that is based on (or derived from) the _Program_ and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. _Derivative Works_ do not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the _Program_ and _Derivative Works_ of the _Program_.

The snippet defines _Derivative Works_.  It uses, but does not define, _Licensor_, _Licensee_, and _Program_.  We can use the snippet in a form agreement by providing those missing definitions:

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
>     1.  _Licensor_ grants _Licensee_ a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare _Derivative Works_ of, publicly display, publicly perform, sublicense, and distribute the _Program_ and such _Derivative Works_ in _Source Form_ and _Object Form_.
>
>     2.  "**Derivative Works**" means any work, whether in _Source Form_ or _Object Form_, that is based on (or derived from) the _Program_ and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. _Derivative Works_ do not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the _Program_ and _Derivative Works_ of the _Program_.

Here's another snippet, a product warranty disclaimer:

> ***Unless required by applicable law,*** **Seller** ***provides the*** **Goods** ***on an "as is" basis, without warranties or conditions of any kind, either express or implied, including, without limitation, any warranties or conditions of title, non-infringement, merchantability, or fitness for a particular purpose.***

This snippet uses, but does not define, _Seller_ and _Goods_.

We might like to combine our license and disclaimer snippets in an agreement:

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
>         3.  "**Program**" means the _Software_
>
>     2.  **Permissive Software Copyright License**.
>
>          1.  _Licensor_ grants _Licensee_ a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare _Derivative Works_ of, publicly display, publicly perform, sublicense, and distribute the _Program_ and such _Derivative Works_.
>
>          2.  "**Derivative Works**" means any work, whether in _Source Form_ or _Object Form_, that is based on (or derived from) the _Program_ and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. _Derivative Works_ do not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the _Program_ and _Derivative Works_ of the _Program_.
>
> 3.  **Disclaimer**.
>
>      1.  **Definitions**.
>
>          1.  **Seller** means _Vendor_.
>
>          2.  **Goods** means the _Software_.
>
>      2.  **As Is**.  ***Unless required by applicable law,*** **Seller** ***provides the*** **Goods** ***on an "as is" basis, without warranties or conditions of any kind, either express or implied, including, without limitation, any warranties or conditions of title, non-infringement, merchantability, or fitness for a particular purpose.***

Using definitions in this way, we can reuse the snippets as drafted, without changing their text.  That means we could also incorporate them by reference, instead of copying their text in verbatim:

> ## Master Agreement
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
>         3.  "**Program**" means the _Software_
>
>     2.  **Permissive Software Copyright License**.  The parties incorporate the terms attached as Exhibit A here.
>
> 3.  **Disclaimer**.
>
>      1.  **Definitions**.
>
>          1.  **Seller** means _Vendor_.
>
>          2.  **Goods** means the _Software_.
>
>     2.  **As Is**.  The parties incorporate the terms attached as Exhibit B here.
>
> [Signature pages follow.]
>
> ## Exhibit A
>
> 1.  _Licensor_ grants _Licensee_ a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare _Derivative Works_ of, publicly display, publicly perform, sublicense, and distribute the _Program_ and such _Derivative Works_.
>
> 2.  "**Derivative Works**" means any work, whether in _Source Form_ or _Object Form_, that is based on (or derived from) the _Program_ and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. _Derivative Works_ do not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the _Program_ and _Derivative Works_ of the _Program_.
>
> ## Exhibit B
>
> ***Unless required by applicable law,*** **Seller** ***provides the*** **Goods** ***on an "as is" basis, without warranties or conditions of any kind, either express or implied, including, without limitation, any warranties or conditions of title, non-infringement, merchantability, or fitness for a particular purpose.***

This way of organizing terms mirrors the use of agreements attached as exhibits to break up the terms of a complex transaction.  Each exhibit can be given to a different attorney to draft, or reused in other kinds of transactions that need similar terms.

However, combining snippets of terms in this way doesn't allow us to ignore how the individual snippets are drafted. In particular:

1.  Two snippets might define the same term, like _Person_ or _Material Adverse Change_, in different ways.

2.  The agreement itself might define a term in a different way than a snippet does.

3.  The agreement and snippets might set other kinds of interpretation rules, like reading _or_ exclusively or clarifying statutory references as pertaining to a particular point in time.

These potential problems reflect contract drafting conventions:

1.  Unless they say otherwise, definitions apply throughout an agreement.

2.  Unless they say otherwise, other interpretation rules apply throughout an agreement.

3.  Cross-references can point to any other part of the agreement, as a whole.

Of course, there are exceptions.  Drafters sometimes limit a definition or other interpretation rule to a specific organization part of their agreement, such as the containing paragraph or a specific section.  Drafters also use multiple agreements to separate terms drafted and negotiated as units:

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
>
> ## Exhibit A --- License Agreement
>
> Customer, Inc. ("**Licensee**") and Vendor, LLC ("**Licensor**") agree as follows.  In this agreement, "**Program**" has the same meaning as "Software" in the Master Agreement.
>
>
> 1.  _Licensor_ grants _Licensee_ a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare _Derivative Works_ of, publicly display, publicly perform, sublicense, and distribute the _Program_ and such _Derivative Works_.
>
> 2.  "**Derivative Works**" means any work, whether in _Source Form_ or _Object Form_, that is based on (or derived from) the _Program_ and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. _Derivative Works_ do not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the _Program_ and _Derivative Works_ of the _Program_.
>
> [Signature pages follow.]
>
> ## Exhibit B --- Warranty Disclaimer Agreement
>
> Customer, Inc. ("**Buyer**") and Vendor, LLC ("**Seller**") agree as follows.  In this agreement, "**Goods**" has the same meaning as "Software" in this Master Agreement.
>
> ***Unless required by applicable law,*** **Seller** ***provides the*** **Goods** ***on an "as is" basis, without warranties or conditions of any kind, either express or implied, including, without limitation, any warranties or conditions of title, non-infringement, merchantability, or fitness for a particular purpose.***
>
> [Signature pages follow.]

Agreements attached as exhibits can explicitly reference, or incorporate definitions from, master agreements or other exhibit agreements.  But those would be exceptions to the general rule that agreements independently.  Each agreement develops a vocabulary of defined terms, set of interpretation rules, and numbering scheme all its own.

Drafters separate many kinds of complex transactions into multiple agreements in this way.  Changing the rule from sharing all definitions and interpretation rules across all terms of the deal to sharing only those referenced explicitly helps lawyers prepare, review, and negotiate many kinds of complex transactions more reliably and efficiently, in more manageable pieces.  A change to any particular agreement requires less work reviewing other terms to see if they require conforming changes.  Counsel more readily find needed terms to review or revise, by searching in the agreement addressing that subject matter.  Drafters more readily reuse agreements with utility across diverse deal structures, such as purchase agreements, voting agreements, intellectual property agreements, and nondisclosure agreements.  Deal teams more readily delegate large parts of the overall drafting burden, in the form of agreements, to specialists and associates.

These benefits offset the costs of splitting a deal's terms into multiple agreements.  Separate agreements naturally duplicate terms, from definitions to interpretation rules,  to general contract terms, creating a longer deal packet overall.  It takes some work to ensure that the master agreement correctly incorporates all exhibit agreements.  Clients end up signing many agreements, at one time, to do one deal.
