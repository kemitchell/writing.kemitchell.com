---
title: Transparent Contract Components
description:
layout: post
tags:
- Common Form
- Contract Drafting
- Contract Architecture
---

_Continuing from [Contract Components] and [Lexical Scope for Contracts]_

[Contract Components]: https://writing.kemitchell.com/2017/12/29/Contract-Components.html

[Lexical Scope for Contracts]: https://writing.kemitchell.com/2018/01/11/Lexical-Scope-for-Contracts.html

I got started on the contract-components problem by giving myself permission to kick orthodoxy to the curb.  That freedom showed me that reusable components of contract language are possible.  But all of my approaches to date suffered a common flaw:  Looking at a composed document, it was very clear something newfangled and strange was going on.

How do we make contracts out of components, without calling attention to how our contracts got made?  Two tools.

## 1: Term Substitution

Consider the example component from [my first post][Contract Components], a software license grant that uses, but does not define, _Licensor_, _Licensee_, and _Program_:

> 1.  The _<mark>Licensor</mark>_ grants the _<mark>Licensee</mark>_ a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare _Derivative Works_ of, publicly display, publicly perform, sublicense, and distribute the _<mark>Program</mark>_ and such _Derivative Works_.
>
> 2.  "**Derivative Works**" means any work that is based on (or derived from) the _Program_ and for which the editorial revisions, annotations, elaborations, or other modifications represent, as a whole, an original work of authorship. _Derivative Works_ do not include works that remain separable from, or merely link (or bind by name) to the interfaces of, the _Program_ and _Derivative Works_ of the _Program_.

Including that component in an agreement that defines _Vendor_, _Customer_, and _Software_, we can _substitute_ agreement terms for component terms:

> 1.  The _<mark>Vendor</mark>_ grants the _<mark>Customer</mark>_ a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare _Derivative Works_ of, publicly display, publicly perform, sublicense, and distribute the _<mark>Software</mark>_ and such _Derivative Works_.
>
> 2.  "**Derivative Works**" means ....

This solves the problem of passing terms _down_ to components.

Compared to prior proposals, it's a bit more strict.  Every term in a component must be _the same as_ another term in the reusing document.  It also sacrifices perfect reproduction of components, without changes.  This approach modifies components, but in a predictable way.

## 2: Conflict Resolution

We are still working under traditional definition-scope rules, which apply definitions throughout the documents where they appear.  That means using multiple components can produce an overall agreement with multiple definitions of the same term.  Definitions in the containing document can conflict with definitions in components.  Definitions in components can conflict with definitions in other components.

We need a rule to resolve those conflicts:

> Where this document uses a term defined more than once, the definition nearest the use takes precedence. To find the nearest definition, look for a definition in the organizational subdivision where the term is used, then in the subdivision containing that subdivision, then in the subdivision containing that subdivision, and so on.

This rule follows my rule in _[Lexical Scope for Contracts]_ by reusing the organizational structure of the document itself to create boundaries for scopes.  It differs from prior rules by doing no more than necessary.  The rule _only_ applies, and addresses, situations where a term is defined more than once.  It does _not_ change the general rule of definition scope in any way.

## Sum
