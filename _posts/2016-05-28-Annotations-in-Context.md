---
title: Annotations in Context
description: A first attempt at useful, responsible Common Form annotations
layout: post
series: Common Form
tags:
- Privacy
- Confidentiality
---

Commenting on contracts is a big part of being a deals lawyer, and nobody's really sure how to go about it.  Word comments can work if you trade Track Changes markups, but not everybody does, and they're clunky at best.  (Ever try to select text in a comment and delete it?)  So folks fall back on "\[Note to Draft: ... \]" and other conventions for comments in the text itself ... and then pray opposing counsel will make themselves intelligible.  All of these notes are lost when the next deal rolls around.

Common Form ought to do better.  Here's a first attempt.

<!-- jump -->

Common Form gives a way to to find a unique number---a fingerprint---of any part of a contract.  Entire forms, individual sections, and even individual list items have these fingerprints.  This makes it pretty simple to save and recall notes:  Label the note with the fingerprint.  When reviewing a form, show annotations labeled with the fingerprints of any of its pieces.

This approach will show notes on specific language wherever the same language appears, regardless of context.  If you see a confidentiality section, decide that it very subtly favors one side, add a note, and see the same confidentiality section in a different contract later, you'll see the note.  If you're perusing confidentiality provisions, out of context, for a new form you're writing, you'll see notes from readers who ran across the sections in context.

But context can be everything in a contract.  Rules of construction might make language unenforceable, or skew it toward one party, or ramp up the penalties for breach.  A note that says "This provision isn't enforceable in California." or "This is an aggressive ask from any seller." might become totally inaccurate when applied to exactly the same language in a different context.

## Generalized

Let's make that a bit more general, in Common Form terms.

Say we have a form, A, with this structure:

    A

      B

        C (unenforceable by itself)

        D (first of two conditions saving C)

        E (second of two conditions saving C)

      F

        G (contains a drafting error)

        H (redundant of part of F)

A is the entire form.  A has two subsections, B and F.  B in turn contains C, D, and E.  F contains G and H.

C, by itself, wouldn't be legally enforceable.  But D and E are conditions that limit D in such a way that it becomes enforceable.

There is also another form, X:

    X

      Y

        C (unenforceable by itself)

      Z

      F

        G (contains a drafting error)

        H (redundant of part of F)

X is the form as a whole.  X contains Y, Z, and F.  Y contains C.  F contains G and H.  X doesn't have D or E.

## Mislead

Alice runs across form X and reviews.  She notices that C, as written, isn't legally enforceable.  She adds an annotation to C, and shares it with the world:  "Not enforceable.".

    X

      Y

        C [Alice: "Not enforceable."]

      Z

      F

        G (contains a drafting error)

        H (redundant of part of F)

Bob runs across form A.  Because Alice's annotation to C was labeled with its fingerprint, Bob can see Alice's annotation.  Unfortunately, that annotation is misleading.  The conditions Alice described are in fact set out in other parts of A, namely D and E.

    A

      B

        C [Alice: "Not enforceable."]

        D (first of two conditions saving C)

        E (second of two conditions saving C)

      F

        G (contains a drafting error)

        H (redundant of part of F)

This isn't a great result.  But what to do?

On the one hand, we don't want to limit the annotations that Bob sees for C to just those that other folks made about C while reviewing A.  In other words, we don't want to limit the annotations reviewers see to just those made in exactly the same overall form context.  If a reviewer shares an annotation to point out a syntactic ambiguity, for example, every reviewer who runs across that language should see the annotation.

On the other hand, reviewers ought to be warned when an annotation was made in a different context.  Even a small visual cue, like an asterisk, would make it clear that the reviewer ought to do a little digging before accepting an annotation's point in the new context.  If the annotation raises serious cause for concern, a reviewer should be able to check the context in which it was made.

In other words, Common Form ought to label annotations not just by the fingerprints of the language they address, but also by the fingerprints of the contexts considered.

## In Context

Returning to our example:

Alice reviews form X and shares an annotation to C.  This time, Common Form labels her annotation as "about C in the context of X".

    X

      Y

        C [Alice: "Not enforceable." in X]

      Z

      F

        G (contains a drafting error)

        H (redundant of part of F)

Bob reviews form A:

    A

      B

        C (unenforceable by itself)

        D (first of two conditions saving C)

        E (second of two conditions saving C)

      F

        G (contains a drafting error)

        H (redundant of part of F)

Since C appears within B in A, the system calls up all annotations "about C wherever it appears", "about C in B", and "about C in A".  Alice's annotation is about C, but not in the context of C wherever it appears, of B, or of A.  So Alice's annotation isn't shown to Bob as he reviews A.

## No Context Needed

Some time later, Charlie reviews form X.  He notices that G, which appears in both X and A, has a glaring drafting error.  Charlie shares an annotation to G pointing this out.  But since the error is in G regardless of context, Charlie shares his annotation "about G wherever G appears".

    X

      Y

        C [Alice: "Not enforceable." in X]

      Z

      F

        G [Charlie: "Drafting error!" anywhere]

        H (redundant of part of F)

When Bob returns later to review A again, the system shows Charlie's annotation to G.

    A

      B

        C (unenforceable by itself)

        D (first of two conditions saving C)

        E (second of two conditions saving C)

      F

        G [Charlie: "Drafting error!" anywhere]

        H (redundant of part of F)

## The Margin

Later on, Dynah notices that H, which is part of F, is redundant of part of F.  She shares an annotation "about H in the context of F".

    A

      B

        C (unenforceable by itself)

        D (first of two conditions saving C)

        E (second of two conditions saving C)

      F

        G [Charlie: "Drafting error!" anywhere]

        H [Dynah: "Redundant" in F]

When Felix reviews X after that, he will see Dynah's new annotation, since its context, F, is also part of X.

    X

      Y

        C [Alice: "Not enforceable." in X]

      Z

      F

        G [Charlie: "Drafting error!" anywhere]

        H [Dynah: "Redundant" in F]*

Dynah's annotation was "about H in the context of F"---only a part of the broader context of X.  As a result, Felix sees her annotation with a marker.  This lets Felix know that while he sees all the context Dynah relied on when making her annotation, there is also new context that he should check if Dynah's conclusion is important to him.  If necessary, Felix can check exactly what context Dynah relied on in annotating H.

---

The costs of labeling annotations with context, and filtering out annotations based on that context, are negligible.  To show all the relevant annotations for a form, a computer needs to pull up annotations labeled with the fingerprint of each piece that form contains.  Limiting by context means filtering out annotations, not adding more in.

The real balancing act is including useful annotations in a review context without overwhelming with useless annotations.  Reviewers are, for their part, incentivized to make good decisions about what context matters to their assessments.  If they're too restrictive, they won't reap the benefits of seeing their own conclusions again in other contexts.  User interface hints, like the "more context to review" asterisk, can help reviewers sift through lots of annotations without getting tricked.

I've implemented this approach in the Common Form server software, and will be rolling it out to [commonform.org](https://commonform.org) as soon as I can.  I'm eager to see how this plays out in my own practice, as well as in collaboration with others.  All the same, I very much welcome feedback.  I'm sure this approach will change, in little and perhaps very big ways, as I get to know it better, as a user.
