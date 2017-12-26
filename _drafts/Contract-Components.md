---
title: Contract Components
description: fine-grained means of abstraction in legal drafting
layout: post
tags:
- Common Form
- Contracts
---

I built my law practice with [Common Form](https://commonform.github.io) tools. I have come to know their limits.  To fulfill Common Form's promise of enabling lawyers to share and reuse drafting work across practices, its toolkit must evolve again.  Common Form drafters need tools for creating and sharing reusable _components_ of legal language that others can mix and match, ignoring specific drafting choices made within them, and focusing instead on how all selected components work together as a whole.  In the language of computer software, Common Form needs _means of abstraction_.

## Exhibit: Exhibit

Deals lawyers already understand _means of abstraction_.  They use one every time they attach form agreements for various aspects of a transaction to a master agreement, and sew them together by reference in its text.

For example, in a venture-capital-financing transaction, the stock purchase agreement serves as the master agreement, and attaches at least a certificate of incorporation, investors' rights agreement, voting agreement, and right-of-first-refusal agreement, as exhibits.  The terms of the exhibits are just as much a part of the terms of the financing as those of the master.  The parties sign the agreements at one time, as part of one transaction, and expect courts to interpret them together.

Separating the terms into agreements buys some advantages.

Lawyers can review and revise the agreements more or less independently, because of how they will be read.  In general, defined terms in one agreement will not apply in any other agreement.  In general, renumbering one agreement will not require conforming changes to any other.  In general, rules of construction and general contract terms in one agreement will not affect other agreements.  Explicit language can make exception to each of these general rules.  But overall, these general rules help to break the transaction into more manageable chunks.  More manageable than one long agreement with all the terms of the deal.

Lawyers can also focus on each aspect of the deal more readily.  There are some background rules about what terms must appear in which exhibit, such as in the certificate of incorporation, under the relevant corporation law.  But the structure of the documentation as a whole also strongly implies where other terms belong.  The right of first refusal belongs in the right of first refusal agreement, not in the master stock purchase agreement.  Commitments to vote stock for particular board candidates belong in the voting agreement, not the indemnification agreement.  All drafters involved share a loose sense of where terms belong, and where to go looking for them later.

Separating terms into agreements also incurs costs.  Duplication of terms, from preambles to definitions, interpretation rules, and general contract terms, creates a longer packet of terms overall.  Negotiators must work to connect the agreements in the master, and to ensure that cross-references between agreements, and definitions shared by them, stay in harmony.  The parties sign not one agreement, but many, to make one deal.

In the end, benefits outweigh costs.  Deals lawyers split venture-capital-financing terms across multiple agreement-exhibits because they were easier to organize, negotiate, close, and read that way.  The deal is easier to think about as a packet of agreements, each of which accomplishes a key aspect of the transaction.  Counsel focuses more readily on specific aspects of the deal at issue, isolated in their own agreements, when they can put terms for other aspects out of sight and mostly out of mind.  They can also more readily recall, reuse, and repurpose exhibits for other transactions.

## Finer Grain

Common Form already supports this approach to exhibits.  Common Form's toolkit, and the dealmaking profession's standard bag of tricks more generally, ought to support this approach to pieces of individual agreements, as well.  I call those pieces _components_.

Terms for an agreement with a developer to build software should have a service component, contractor-relationship component, intellectual property assignment component, and confidentiality component.  Each of those components must work together to make up the whole.  They will interconnect through shared defined terms, and perhaps cross-references.  But each of those components, to the extent they're generic, should also be reusable in terms for different kinds of agreements.  The intellectual property assignment component of terms for a contractor should be easy to reuse in terms for an adviser or employee.

Conventions for defined terms and references, the very mechanisms that connect terms within an agreement, also make terms difficult to reuse.  In typical contracts, definitions apply throughout the agreement in which they appear, as do rules of interpretation.  On occasion, drafters will limit a definition or interpretation rule to a specific sentence or section.  For example, "Control" is often defined solely for the purposes of a provision on assignment.  A different definition of "Control" may appear, and apply, elsewhere in the agreement, without creating ambiguity.  Meanwhile, cross-references can point to any part of the agreement.

Under these conventions, any would-be component of an overall agreement has the power to create ambiguity with any other would-be component.  For example, in an independent contractor agreement, a component of service terms may define "Person" in a different way than a component of intellectual property terms defines "Person".  Those components may also set different rules for interpreting "including, but not limited to".  One may set a rule about the exclusivity of "or" that the other did not anticipate.  Especially if a different author, with different tastes and drafting habits, contributed each component.

Would-be components of a contract may also conflict with the agreement including them.  For example, an independent contractor may define the term "Company" to refer to the party hiring the contractor.  A prewritten component of service terms may the needs of the form nicely, but use the term "Client" for the party hiring, instead.  The form could use the component, but it would need to define "Client" to mean "Company" or replace "Company" with "Client" throughout.

## Collision Course

Potential for conflict and ambiguity forces us to treat would-be components as cut-and-paste snippets, instead.  We can paste snippets into our forms, but not without analyzing and rereading their text.  To discover if they've defined a term or reused a heading in such a way as to create ambiguity.  To ensure that rules of construction in the new and preexisting text work as intended.  To identify terms to defined or replace.

Common Form provides tools to address at least the structural collisions that copied snippets can create.  That is not enough.  To facilitate efficient use of drafted language, even language that we have drafted ourselves, reused in different forms we maintain, Common Form must provide a set of conventions that steer us clear of problems when components combine in new ways.  Components need to be well behaved, achieving their purposes without affecting other components.  To work well together, they must work independently, without interference.

## Convention

We've identified two ways snippets of legal terms fall short of component-style reuse:

1.  Conventions that apply definitions and interpretation rules throughout an agreement, unless otherwise noted, lead to ambiguities and conflicts among snippets that we combine in new ways.

2.  When snippets differ in the terms they use to refer to aspects of a deal, we have to change the snippets, or add new definitions, to make them work together.

To address the first issue, we can define a new aspect of our agreements, akin to exhibits, called "components".  Within components, we'll flip the conventions about definitions and interpretation rules, to avoid collisions between components:

> These interpretation rules apply to each "**Component**" of this agreement:
>
> 1.  Definitions in the _Component_ apply only in that _Component_.
>
> 2.  Interpretation rules in a _Component_ apply only in that _Component_.

This language allows us to turn any section of our agreement into a Component:

> "**Company**" and "**Contractor**" agree:
>
> 1.  __Components__.  These interpretation rules apply to each "**Component**" of this agreement:
>
>     1.  Definitions in the _Component_ apply only in that _Component_.
>
>     2.  Interpretation rules in a _Component_ apply only in that _Component_.
>
> 2.  __Services__. As a _Component_ of this agreement:
>
>     1.  __Work__.  _Contractor_ will do the work described in each "**Statement of Work**" cosigned with _Company_ under this agreement.
>
>     2.  __Payment__.  _Company_ will pay each correctly billed amount within 30 calendar days of receiving the bill.
>
> 3.  __Relationship__.  As a _Component_ of this agreement:
>
>     1.  __Independence__.  _Contractor_ will decide when, where, and how to work under this agreement, with the discretion of an independent contractor.
>
>     2.  __No Benefits__.  _Contractor_ will not receive any employee benefits from _Company_.
>
>     3.  "**Company**" includes any subsidiaries and parent companies of _Company_.

The rules for Components occupy the missing middle ground between practices commonly seen today.  On one hand, drafters treat definitions and other interpretation rules as applying throughout an agreement, unless they say otherwise.  On the other hand, drafters sometimes call out specific definitions as applying only within a specific section or other formatting part of the agreement.  Our rules for Components limit every interpretation rule in a Component with an implicit "for purposes of this Component..." qualifier.  The effect is the much the same as putting each Component's terms in an attached form agreement, with an obligation of the parties to sign.

These interpretation rules do _not_ solve the problem of prewritten components using different defined terms.  Take the example above again, but consider what happens if one of the components uses "Client" instead of "Company" and "Consultant" instead of "Contractor":

> "**Company**" and "**Contractor**" agree:
>
> 1.  __Components__. [Omitted]
>
> 2.  __Services__. As a _Component_ of this agreement:
>
>     1.  __Work__.  _Consultant_ will do the work described in each "**Statement of Work**" cosigned with _Client_ under this agreement.
>
>     2.  __Payment__.  _Client_ will pay each correctly billed amount within 30 calendar days of receiving the bill.
>
> 3.  __Relationship__. [Omitted]

We could address the mismatches by defining "Client" for the Component that uses that term:

> "**Company**" and "**Contractor**" agree:
>
> 1.  __Components__. [Omitted]
>
> 2.  __Services__. These definitions:
>
>     1.  "**Client**" means _Company_.
>
>     2.  "**Consultant**" means _Contractor_.
>
>     apply in this _Component_:
>
>     1.  __Work__.  _Consultant_ will do the work described in each "**Statement of Work**" cosigned with _Client_ under this agreement.
>
>     2.  __Payment__.  _Client_ will pay each correctly billed amount within 30 calendar days of receiving the bill.
>
> 3.  __Relationship__. [Omitted]

This is long and somewhat cumbersome to read, but effective.  Effective, in fact, even for Components that we incorporate from elsewhere, rather than paste in:

> "**Company**" and "**Contractor**" agree:
>
> 1.  __Components__. [Omitted]
>
> 2.  __Services__. These definitions:
>
>     1.  "**Client**" means _Company_.
>
>     2.  "**Consultant**" means _Contractor_.
>
>     apply in a _Component_ with the terms published at [URL].
>
> 3.  __Relationship__. [Omitted]

If we need or want to paste the terms in, our choice of definitions for the purpose of the Component, which simply equate a term in the Component with a term in the larger agreement, can allow Common Form to make replacements accordingly:

> "**Company**" and "**Contractor**" agree:
>
> 1.  __Components__. [Omitted]
>
> 2.  __Services__. As a _Component_ of this agreement:
>
>     1.  __Work__.  _Consultant_→_Contractor_ will do the work described in each "**Statement of Work**" cosigned with _Client_→_Company_ under this agreement.
>
>     2.  __Payment__.  _Client_→_Company_ will pay each correctly billed amount within 30 calendar days of receiving the bill.
>
> 3.  __Relationship__. [Omitted]

In each case, meaning is preserved and conflict among Components is avoided.  The fact that the relationship Component defines "Company" to include parents and subsidiaries does not affect the language of the services component.  The fact that the language of the services component was originally written for a "Consultant" and a "Client" does not stop us from combining with relationship Component, originally written for "Company" and "Contractor".

Thanks to these mechanisms, we'd be free to swap out either Component for a different one achieving a different purpose, or in a different way.  We'd be free to add more Components, achieving different aspects of our deal, without fear of conflicts between them.

These mechanisms don't just enable combining simple Components in agreements.  They work equally well for Components made of Components in turn:

> "**Company**" and "**Contractor**" agree:
>
> 1.  __Components__. [Omitted]
>
> 2.  __Services__. As a _Component_:
>
>     1.  __Work__.  _Contractor_ will do the work described in each "**Statement of Work**" cosigned with _Company_ under this agreement.
>
>     2.  __Payment__.  As a _Component_:
>
>         1.  __Deadline__.  _Company_ will pay each correctly billed amount within 30 Days of receiving the bill.
>
>         2.  __Errors__.  _Company_ will notify _Contractor_ of any suspected error on a bill within 14 Days of receiving the bill.
>
>         3.  __Late Payments__.  _Company_ will pay _Contractor_ 1.5% interest on late bill payments, compounded monthly.
>
>         4.  "**Days**" means calendar days.
>
> 3.  __Relationship__. [Omitted]

A deep, nested structure of Components can make a document longer and more complex.  But as an offsetting benefit, interpretation rules and defined-term substitution make it possible to draft them separately, and reuse them widely.  What's more, each Component can be as general as its defined terms allow.

> "**Company**" and "**Contractor**" agree:
>
> 1.  __Components__. [Omitted]
>
> 2.  __Services__. These terms:
>
>     1.  "**Payment Period**" means 14 calendar days.
>
>     2.  "**Error Reporting Period**" means 7 calendar days.
>
>     3.  "**Late Payment Interest** means one percent.
>
>     apply in this _Component_:
>
>     1.  __Work__.  _Contractor_ will do the work described in each "**Statement of Work**" cosigned with _Company_ under this agreement.
>
>     2.  __Payment__.  As a _Component_:
>
>         1.  __Deadline__.  _Company_ will pay each correctly billed amount within one _Payment Period_ of receiving the bill.
>
>         2.  __Errors__.  _Company_ will notify _Contractor_ of any suspected error on a bill within one _Correction Period_ of receiving the bill.
>
>         3.  __Late Payments__.  _Company_ will pay _Contractor_ _Late Payment Interest_ on late bill payments, compounded monthly.
>
> 3.  __Relationship__. [Omitted]

Using a term a in a Component without defining it essentially leaves a blank for work building on the Component to fill in.
