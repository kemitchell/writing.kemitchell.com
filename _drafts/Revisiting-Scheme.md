---
title: Revisiting Scheme
description: beholding a beautiful language with damaged eyes
---

To the extent I can love programming languages---less all the time---I love the language [Scheme](https://en.wikipedia.org/wiki/Scheme_(programming_language)).  Alas, I've practiced Scheme far less than I've admired it.

Reading through the [Revised<sup>6</sup> Report](http://www.r6rs.org/) after several years, with mostly JavaScript, Go, and Rust ringing in my ears, I've found myself hearing some old words with new and different rings to them.

> Programming languages should be designed not by piling feature on top of feature, but by removing the weaknesses and restrictions that make additional features appear necessary.

This remains the best introduction to a programming language design spec.  Whenever Scheme has disappointed me, I've been able to return to this sentence, and know that it all comes from a good place.  It is a single-sentence manifesto, never to be perfectly realized.  But at least we are reminded to try.

If I feel any sense of loss in JavaScript in the past few years, it comes from this place.  I happen to know a number of folks working on the language, and respect them deeply.  But I do feel a very passive, involuntary direct object on the receiving end of new language innovations.  I wonder how on earth new people are supposed to learn the language these days, instead of some dialect attributable to a particular platform, build tool, framework, or tutorial.

I fear the same for Go, with generics impending.  I hope the time taken has indeed produced a transparent, holistic, well integrated approach.  I know that is what many at the helm took the time for.

I'm newest to Rust, and my instincts are least developed there.  The obvious parallel is probably asynchrony and futures.  But the story for me remains the borrowing system at the core.  Even with my head fairly well around it now, I'm still somewhat astounded by the way it wicks through every fiber of the language.

> In a conditional test, all values count as true in such a test except for `#f`.

I weep a single tear for poor JavaScript `==` and those nervous-laugh-inducing [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)-[falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) tables.

> No object satisfies more than one of the following predicates:
> - `boolean?`
> - `symbol?`
> - `char?`
> - `vector?`
> - `null?`
> - `pair?`
> - `number?`
> - `string?`
> - `procedure?`

A second tear, for JavaScript `typeof`.  Newcomers `Array.isArray` and friends stand like headstones over its conceptual grave.

> A _pair_ is a compound structure with two fields called the car and cdr fields (for historical reasons).  Pairs are created by the procedure `cons`.  The car and cdr fields are accessed by the procedures `car` and `cdr`.

Any identity is baggage.  Even if that identity is simplicity and purity.

Scheme is also a language with an identity.

> Experience with module systems gathered in other languages as well as with shared libraries at the operating-system level consistently indicates that relying only on the name of a module for identification causes conflicts impossible to rectify in the absence of versioning information, and thus diminishes the opportunities for sharing code.

This still feels very true.  I can't recall how prescient it would have seemed in 2007.  Probably depended on where in programming you stood.

> Implementations are encouraged to prohibit two libraries with the same name but different versions to coexist within the same program.  While this prevents the combination of libraries and programs taht erquire different version of the same library, it eliminates the potential for having multiple copies of a library's state, thus avoiding problems experienced with other shared-library mechanisms, including Windows DLLs and Unix shared objects.

This feels...damaged.

Granted, it is only a nudge for implementers, buried in the Rationale, and not a requirement.  But especially in light of the JavaScript/npm experience, this feels like an earnest deduction from bad premises.  Especially in an oft-interpreted functional language, it's strange to see the finger point at duplication, rather than state.
