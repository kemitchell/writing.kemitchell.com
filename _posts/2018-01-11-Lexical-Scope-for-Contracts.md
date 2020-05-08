---
title: Lexical Scope for Contracts
description: wandering ever closer to LISP
layout: post
series: Common Form
tags:
- Drafting
- Contract Architecture
---

_Following on from [Contract Components](https://writing.kemitchell.com/2017/12/29/Contract-Components.html)_

My definition of "Component" allowed me to change the results for any subdivision of a contract to facilitate reuse of generic contract parts without fear of structural conflict.  Why limit component rules to specific subdivisions?  Couldn't we apply a _general_ rule to all subdivisions of a document that give us the desired effects?

> 0.  **Scope of Definitions**.  Each definition in this document applies only in:
>
>     0.  the _Subdivision_ where the definition appears
>     0.  each _Sibling_ of the _Subdivision_ where the definition appears
>     0.  each _Descendant_ of each _Sibling_ of the _Subdivision_ where the definition appears
>
>     Where more than one definition of the same term applies in a _Subdivision_, the definition that applies in fewer _Subdivisions_ overall takes precedence.
>
> 0.  "**Subdivision**" means any organizational subdivision of these terms.  The plural of _Subdivision_ is "**Subdivisions**".
>
> 0.  The "**Parent**" of a _Subdivision_ is the _Subdivision_ directly containing it, and if there is none, this document as a whole.
>
> 0.  A _Subdivision_ is a "**Descendant**" of each _Subdivision_ that contains it, directly or indirectly.
>
> 0.  A _Subdivision_ is a "**Sibling**" of another _Subdivision_ if they have the same _Parent_.

These rules give contracts _lexical scope_.  The part of the terms where a definition applies, or its _scope_, depends on where that definition appears in the document.  Scopes are coterminous with subdivisions of the terms, neatly represented as Common Forms.  Very much as scopes of variables in many homoiconic programming languages like [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)) do.

In general, under this rule, definitions only flow _down_ through the document, never up.  That difference is most jarring in situations like:

> 1.  **Purchase and Sale**.
>     1.  _Buyer_ hereby sells _Blackacre_ to _Seller_.
>     2.  _Seller_ agrees to pay $100 for _Blackacre_.
> 2.  **Warranties**.
>     1.  "**Blackacre**" means the property at ....
>     2.  _Buyer_ represents that _Buyer_ has good title in _Blackacre_.

Under typical contract conventions, the definition of "Blackacre" would apply throughout.  With lexical definition scope, the definition of "Blackacre" in 2.2 is "out of scope", and therefore _does not apply_, in 1.1 and 1.2.  That definition is in scope in 2.2, because 2.2 is a "Sibling" of 2.1, where the definition appears.

The interpretation rule clearly keeps definitions in component-like terms from causing problems _above_, in the subdivisions that incorporate them.  Unlike my prior definition of Component, this rule handles conflicts between definitions in incorporating and incorporated subdivisions differently.  Consider:

> 1.  **Background**.  This is an agreement for licensing software with support.
> 2.  "**Business Days**" means days other than Saturday, Sunday, and days on which banks in New York, New York are authorized or required by law to close.
> 3.  **Billing**. _Licensee_ shall pay each bill within 30 _Business Days_ of receipt.
> 4.  **Support**. [Written by someone else, as a component.]
>     1.  "**Business Days**" means days other than Saturday, Sunday, and days on which banks in Hyderabad, India are authorized or required by law to close.
>     2.  _Licensor_ shall respond to support request on _Business Days_.

Note that "Business Days" is defined both in 2 and in 4.1, and used in 3 and 4.2.  Under the scope rules above, the definition in 2 would take precedence in 3, and the definition in 4.1 would take precedence in 4.2.  It's not that the definition in 2 doesn't apply in 4.2.  It's that the definition nearby, in 4.1,overrides the definition further up, in 2.
