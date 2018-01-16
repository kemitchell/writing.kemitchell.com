---
title: Transparent Contract Components
description: sharper tools, finer toolmarks
layout: post
tags:
- Common Form
- Contract Drafting
- Contract Architecture
---

_Continuing from [Contract Components] and [Lexical Scope for Contracts]_

[Contract Components]: https://writing.kemitchell.com/2017/12/29/Contract-Components.html

[Lexical Scope for Contracts]: https://writing.kemitchell.com/2018/01/11/Lexical-Scope-for-Contracts.html

I got started on the contract-components problem by giving myself permission to kick orthodoxy to the curb.  That freedom showed me that reusable components of contract language are possible.  But all of my approaches to date suffered a common flaw:  Reviewing a composed document, it would be very clear something newfangled and strange was going on.

How do we make contracts out of components, without calling attention to how our contracts get made?  Two tools.

## 1: Term Substitution

Consider the example component from [my first post][Contract Components], a software license grant that uses, but does not define, _Licensor_, _Licensee_, and _Program_:

> 1.  The _<mark>Licensor</mark>_ grants the _<mark>Licensee</mark>_ a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare _Derivative Works_ of, publicly display, publicly perform, sublicense, and distribute the _<mark>Program</mark>_ and such _Derivative Works_.
>
> 2.  "**Derivative Works**" means any work that is based on (or derived from) the _<mark>Program</mark>_ and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. _Derivative Works_ do not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the _<mark>Program</mark>_ and _Derivative Works_ of the _<mark>Program</mark>_.

Including that component in an agreement that defines _Vendor_, _Customer_, and _Software_, we can _substitute_ agreement terms for component terms:

> 1.  The _<mark>Vendor</mark>_ grants the _<mark>Customer</mark>_ a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare _Derivative Works_ of, publicly display, publicly perform, sublicense, and distribute the _<mark>Software</mark>_ and such _Derivative Works_.
>
> 2.  "**Derivative Works**" means ....

This solves the problem of passing terms _down_ to components.

Compared to prior proposals, it's a bit more strict.  Every term in a component must be _identical to_ another term in the incorporating document, which means it has to be defined to begin with.  It also sacrifices perfect reproduction of components, without changes.  This approach modifies components, but in a predictable way.

## 2: Conflict Resolution

We are still working under traditional definition-scope rules, which apply definitions throughout the documents where they appear.  That means using multiple components can produce an overall agreement with multiple definitions of the same term.  Definitions in the containing document can conflict with definitions in components.  Definitions in components can conflict with definitions in other components.

We need a rule to resolve those conflicts:

> Where this document uses a term defined more than once, the definition nearest the use takes precedence. To find the nearest definition, look for a definition in the organizational subdivision where the term is used, then in the subdivision containing that subdivision, then in the subdivision containing that subdivision, and so on.

This rule follows my proposal in _[Lexical Scope for Contracts]_ by reusing the organizational structure of the document itself to create boundaries for scopes.  It differs from prior rules by doing no more than necessary.  The rule _only_ applies to, and addresses, situations where a term is defined more than once.  It does _not_ change the general rule of definition scope in any way.

## Tuning

This approach isn't fundamentally different from what I described before.  It merely picks trade-offs netting out to a more familiar reading experience.  Products of this system can probably "pass" in the practice of law today.  Products of prior systems would take some explaining.

Newfound readability will break down in some parasitic cases.  If there are lots of definition conflicts, readers will get tired of applying the nearness rule to resolve them.  But insofar as conflicts are rare to begin with, the cost is zero.  We can even use software to tell whether our compositions have conflicts, and omit the resolution rule if the document is clean without it.
