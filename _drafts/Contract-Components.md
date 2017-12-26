---
title: Contract Components
description: fine-grained means of abstraction in legal drafting
layout: post
tags:
- Common Form
- Contracts
---

I built my law practice with [Common Form](https://commonform.github.io) tools. I have come to know the limits of those tools.  To fulfill Common Form's promise of enabling lawyers to share and reuse drafting work across practices, its toolkit must evolve again.  Common Form drafters need tools for creating and sharing reusable _components_ of legal language that others can mix and match, ignoring specific drafting choices made within them, and focusing instead on how all selected components work together as a whole.  In the language of computer software, Common Form needs _means of abstraction_.

## Exhibit: Exhibit

Deals lawyers already understand _means of abstraction_.  They use one every time they attach form agreements for various aspects of a transaction to a master agreement, and sew them together by reference in its text.

For example, in a venture-capital-financing transaction, the stock purchase agreement serves as the master agreement, and attaches at least a certificate of incorporation, investors' rights agreement, voting agreement, and right-of-first-refusal agreement, as exhibits.  The terms of the exhibits are just as much a part of the terms of the financing as those of the master.  The parties sign the agreements at one time, as part of one transaction, and expect courts to interpret them together.

Separating the terms into agreements buys some advantages.

Lawyers can review and revise the agreements more or less independently, because of how they will be read.  In general, defined terms in one agreement will not apply in any other agreement.  In general, renumbering one agreement will not require conforming changes to any other.  In general, rules of construction and general contract terms in one agreement will not affect other agreements.  There are exceptions to each of these general rules, where one agreement explicitly references another.  But overall, these general rules help to break the transaction into more manageable chunks.  More manageable than one enormous agreement with all of the terms of the deal.

Lawyers can also focus on each aspect of the deal more readily.  While there is no rule about what terms must appear in which agreement, the structure of the documentation as a whole strongly implies where particular terms belong.  The right of first refusal belongs in the right of first refusal agreement, not in the master stock purchase agreement.  Commitments to vote stock for particular board candidates belong in the voting agreement, not the indemnification agreement.  All drafters involved share a loose sense of where terms belong, and where to go looking for them later.

Separating terms into agreements also incurs costs.  Duplication of terms, from preambles to definitions, interpretation rules, and general contract terms, creates a taller deal packet.  Negotiators must work to connect the agreements in the master, and to ensure that cross-references between agreements, and definitions shared by them, stay in harmony.  The parties sign many agreements, over and over again, to make one deal.

In the end, benefits outweigh costs.  Deals lawyers split venture-capital-financing terms across multiple agreement-exhibits because they were easier to organize, negotiate, close, and read that way.  The deal is easier to think about as a packet of agreements, each of which accomplishes a key aspect of the transaction.  Counsel focuses more readily on specific aspects of the deal, isolated in their own agreements, when they can put terms for other aspects out of sight and mostly out of mind.

## Finer Grain

Common Form already supports this approach to exhibits.  Common Form's toolkit, and the standard toolkit of the dealmaking profession more generally, ought to support this approach to pieces of individual agreements, as well.  I call those pieces _components_.

Terms for an agreement with a developer to build software should have service terms, contractor-relationship terms, intellectual property assignment terms, and confidentiality terms.  Each of those components must work together to make up the whole.  They will interconnect through shared defined terms, and perhaps cross-references.  But each of those components should also be reusable in terms for different kinds of agreements.  The intellectual property assignment component of terms for a contractor should be easy to reuse in terms for an adviser or employee.

Conventions for defined terms and references, the very mechanisms that connect terms within an agreement, also make terms difficult to reuse.  In typical contracts, definitions apply throughout the agreement in which they appear, as do rules of interpretation.  On occasion, drafters will limit a definition or interpretation rule to a specific sentence of section.  For example, "Control" is often defined solely for the purposes of a provision on assignment.  A different definition of "Control" may appear, and apply, elsewhere in the agreement, without creating ambiguity.  Meanwhile, cross-references can point to any part of the agreement.

Under these conventions, any would-be component of an overall agreement has the power to create ambiguity with any other would-be component.  For example, in an independent contractor agreement, a component of service terms may define "Person" in a different way than a component of intellectual property terms defines "Person".  Those components may also set different rules for interpreting "including, but not limited to".  One may set a rule about the exclusivity of "or" that the other did not anticipate.

Would-be components of a contract may also conflict with the agreement including them.  For example, an independent contractor may define the term "Company" to refer to the party hiring the contractor.  A prewritten component of service terms may the needs of the form nicely, but use the term "Client" for the party hiring, instead.  The form could use the component, but it would need to define "Client" to mean "Company" or replace "Company" with "Client" throughout.

## Collision Course

Potential for conflict and ambiguity forces us to treat would-be components as cut-and-paste snippets, instead.  We can paste snippets into our forms, but not without analyzing and rereading their text.  To discover if they've defined a term or reused a heading in such a way as to create ambiguity.  To ensure that rules of construction in the new and preexisting text work as intended.  To identify terms to defined or replace.

Common Form provides tools to address at least the structural collisions that copied snippets can create.  But that is not enough.  To facilitate efficient use of drafted language, even language that we have drafted ourselves, reused in different forms we maintain, Common Form must provide a set of conventions that steer us clear of problems when components combine in new ways.  Components need to be well behaved, achieving their purposes without affecting other components.

## Components

We've identified two ways in which snippets of Common Forms terms fall short of component-style reuse:

1.  Conventions for reading definitions and interpretation rules to apply throughout an agreement by default allow create conflicts between snippets that we combine in new ways.

2.  When snippets differ in the terms they use to refer to parties and other aspects of a deal, we have to change the snippets, or add new definitions, to make them work together.
