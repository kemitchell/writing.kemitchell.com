---
title: Grab-Bag Contracts
description: Might we write contracts like we fill shopping bags at the grocery store?
layout: post
tags:
- Law
- Contracts
- Common Form
---

It's natural to arrange computer data in ordered lists. Lists are everywhere in computing. An entire family of programming languages, the LISP family, is written as lists of data and instructions. And list-like structures---arrays and strings, especially---are the first programmers learn and turn to within their programs. Common Form predictably represents forms (and their provisions) of lists of text, terms, references, blanks, and other forms.

But ignoring for a moment the desire to translate existing forms to Common Form, there's no reason contracts have to be made of provisions strung together in particular order. The important point is whether a contract has a noncompete, not whether that noncompete appears after "Payment Terms", first in "Miscellaneous", or at the very top. It matters whether it's there, and what it says. Where it appears is convention or taste.

This means that contracts could be modeled as _sets_ of provisions, mere grab-bags of language without particular order, rather than as lists. Much as one marches the aisles of a supermarket chucking products into a shopping bag, one could stroll a database of available contract language, picking through exemplars of needed ingredients and tossing those most suitable into your contract as you go.

## In No Particular Order

An easy way to think about how drafting set-contracts would differ is to ask: If I randomized the order of provisions in my contracts, what would break? Assume, as in Common Form, that cross-references are corrected automatically. Assume, as in Common Form, that subsections remain within their containing sections. But sections of a document, their subsections, and on down to the items of every list, are reordered unpredictably. Any time you add new language, it's scrambled again. The order of provisions in your contract is constantly changing, and you can't predict how.

One casualty is relative cross-references that explicitly rely on order. "Above", "below", "previous", "preceding", "forgoing", and "following" lose their meaning. Common Form can't prevent you typing this kind of thing into the text of a provision, but its understanding of cross-references is intentionally limited to resolving references to sections by their headings. There is no such thing in Common Form as a reference to "this section" or "the preceding clause". There's no such thing as a cross-reference to a form without a heading.

Another casualty is decision-tree language that relies on the read order. Take an example from licensing practice:

> A. **Licensor's Options**. If the Software becomes, or in Licensor's opinion is likely to become, the subject of an infringement or misappropriation claim, Licensor may, at its option and expense, do one of:
>
> 1. Procure for Licensee the right to continue using the Software
> 2. Replace or modify the Software so that it becomes noninfringing
> 3. Terminate Licensee's right to use the software and give Licensee a refund or credit for the license fees actually paid by Licensee or Licensor for the infringing components of the Software less a reasonable allowance for the period of time Licensee  has used the Software

Rearranging these numbered items is no problem, provided we intend to give Licensor free choice among the enumerated options. But if, as is common, we want to relegate termination to a last resort, when neither procuring replacement or "engineering around" are possible, we have trouble:

> A. **Licensor's Options**. If ...
>
> 1. Procure ...
> 2. Replace or modify ...
> 3. _Provided neither of the foregoing are commercially practical,_ terminate ...

Consider:

> A. **Licensor's Options**. If ...
>
> 1. _Provided neither of the foregoing are commercially practical,_ terminate ...
> 2. Procure ...
> 3. Replace or modify ...

There is a straightforward fix:

> A. **Licensor's Options**. If ...
>
> 1. **Procure Replacement**. ...
> 2. **Terminate**. _Provided neither section A.1 (Procure Replacement) nor section A.3 (Engineer Around) are commercially practical,_ ...
> 3. **Engineer Around**. ...

And a also a slightly heavier one that would make it much easier to swap language describing other responses in and out:

> A. **Licensor's Options**. If ...
>
> 1. **Responses of First Resort**
>    1. **Procure Replacement**. ...
>    2. **Engineer Around**. ...
> 2. **Response of Last Resort**. Provided none of the actions described by section A.1 (Responses of First Resort) are commercial practical ... terminate ...

If you can think of any common provisions or strong drafting conventions that can't be rehabilitated in this way, I'd be [very grateful for an e-mail](mailto:kyle@kemitchell.com) or a [tweet](https://twitter.com/kemitchell).

## Consequences

One nice consequence of composing orderless contracts is that it becomes trivial to recognize that two forms that differ in order only are in fact the same. Common Form does not and cannot do this. Switching the order of any two subsections creates an entirely new Common Form.

It also becomes possible to speak of contracts, and relationships between contracts, with the well-defined vocabulary of set theory. A form that contains all the provisions of another form, plus some others, is a superset. The intersection of two forms is a new form containing just those provisions the two share in common. The union of two forms is a new form with all the included provisions, without duplication. Even mobile phones could rather trivially perform such operations on relatively large forms.

An extension of that idea might be to divide a contract project in two---its substantive terms and boilerplate. Candidate substantive terms might express their compatibility with boilerplate foundations expressed in set terms. Holding that boilerplate constant, one could swap sets of provisions in an out of the substantive terms part of the contract.

Rather than clumsily attach intellectual property agreements or assignments or waivers as exhibits, each duplicating the boilerplate from the master agreement---or making do with an abbreviated, degenerate version of it---contract lawyers might simply drop the set of necessary substantive terms into the substantive terms context of a broader agreement with common boilerplate. On the receiving end, opposing counsel could use set operations to interrogate the substantive coverage of the agreement.

As for actually reading through the form, a Common Form of set-contracts might provide predictable, automatic tools to make forms handler-friendly. Tables of contents, lists of defined terms, cross-reference maps, and defined-term dependency graphs are all trivial possibilities. Each lawyer could discover and use whatever kind and style of organizational aid they prefer, with no skin off anyone's nose.
