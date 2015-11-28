---
title: Template Ambiguity
description: Document assembly can make ambiguity even harder to spot.
layout: post
tags:
- Ambiguity
- Contracts
- Templates
---

Consider the following condition in a ready-to-sign contract:

> ... upon a Stock Sale or Asset Sale in connection with a Reorganization ...

Out of context, standing alone, this trigger is ambiguous. The structure might be:

> ... upon either of
>
> 1. Stock Sale
> 2. Asset Sale
>
> and in connection with a Reorganization ...

Or it might be:

> ... upon either of
>
> 1. Stock Sale
> 2. Asset Sale in connection with a Reorganization ...

Or if you don't buy that contract enumeration unambiguously groups logical expressions---I plan to write on that topic, and the occasional disclaimers of enumeration I've seen in drafts, shortly---use parentheses to clarify the order of logical operations:

    ( ( Stock Sale OR Asset Sale ) AND Reorganization )

    ( Stock Sale OR ( Asset Sale AND Reorganization )

Ken Adams' Manual of Style for Contract Drafting calls "in connection with a Reorganization" a trailing modifier. Trailing modifiers often create ambiguity in contracts.

Consider a variant of the original condition language, but this time found in a contract template that surrounds optional language in [square brackets]:

> ... upon a Stock Sale [or Asset Sale] in connection with a Reorganization ...

This bit of template gives the preparing attorney a choice of whether to include "or Asset Sale". Depending on the attorney's choice, the ready-to-sign language produced with this template could be:

> ... upon a Stock Sale or Asset Sale in connection with a Reorganization ...

Or it could be:

> ... upon a Stock Sale in connection with a Reorganization ...

The fact that "or Asset Sale" was marked optional will be known only to the preparing attorney. Opposing counsel probably won't see the template, but will only receive the draft created with it. Likewise for any interpreting court, assuming neither the parol evidence rule no perhaps attorney-client privilege prevents submission of the template as evidence of the parties' intent.

Everyone considering the language's effect will look outside the language of the trigger itself for clarification. Depending on the context, the additional information about optional language may lead the preparing attorney to a different conclusion.

On the basis of my own experience, I would strongly suspect a template's ability to output ambiguous predicates is drafter error, even if the template comes from a colleague that I trust, and especially if it's one of my own. It is easy enough to make trailing modifier ambiguity in a standard, non-template document. Juggling multiple possible template outputs in mind at once only makes avoiding ambiguity harder.

Admit the obvious: The English language is not a good tool for constructing complex logic predicates. The better you are at English, the better you're conditioned to skate past this kind of ambiguity with comfort and speed. If English is your only tool, only discipline, time, and cultivation of fresh eyes for effective proofreading can save you from the errors that tool is predisposed to make.
