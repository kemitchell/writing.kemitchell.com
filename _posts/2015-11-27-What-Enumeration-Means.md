---
title: What Enumeration Means
description: Enumeration is an essential contract drafting tool. Don't disclaim it!
layout: post
tags:
- Contracts
- Ambiguity
- Software
---
I recently ran across a contract boilerplate provision like this one:

> Enumeration and Headings. The enumeration and headings contained in this Agreement are for convenience of reference only and shall not control or affect the meaning or construction of any of the provisions of this Agreement.

I've since done a few searches in my files, via Google, and on EDGAR, and found a sizable number of public agreements containing similar provisions.

This keeps me up at night.

## What Does "Enumeration" Mean?

When I read or hear "enumeration" in discussion of contracts, it means the way drafters break out and number items of lists within contract sections. If an American contract says...

> "The Beatles" shall mean, collectively, (i) John, (ii) Paul, (iii) George and (iv) Ringo.

...instead of just...

> "The Beatles" shall mean, collectively, John, Paul, George and Ringo.

...the list of names has been "enumerated" and each of "John", "Paul", "George", and "Ringo" is an "enumerated item".

In my experience, other common law jurisdiction drafters tend to "enumerate" differently:

> "The Beatles" shall mean, collectively:
>
> 1. John
> 2. Paul
> 3. George
> 4. Ringo

American drafters may succumb to this fashion with long enumerated items.

<blockquote>
<p>“The Beatles” shall mean, collectively:</p>
<p style="text-indent: 4em">(i) the late John Winston Ono Lennon MBE, born October 9, 1940 in Liverpool, England;</p>
<p style="text-indent: 4em">(ii) Sir James Paul McCartney MBE, born June 18, 1942 in Liverpool, England;</p>
<p style="text-indent: 4em">(iii) the late George Harrison MBE, born February 25, 1943 in Liverpool, England; and</p>
<p style="text-indent: 4em">(iv) Richard "Ringo Starr" Starkey MBE, born July 7, 1940 in Liverpool, England.</p>
</blockquote>

Though, as far as I've seen, American practitioners haven't picked up their Commonwealth counterparts' taste for decimal numbering and indented margins.

<blockquote>
<p>“The Beatles” shall mean, collectively:</p>
<ol style="list-style:decimal">
<li>the late John Winston Ono Lennon MBE, born October 9, 1940 in Liverpool, England;</li>
<li>Sir James Paul McCartney MBE, born June 18, 1942 in Liverpool, England;</li>
<li>the late George Harrison MBE, born February 25, 1943 in Liverpool, England; and</li>
<li>Richard "Ringo Starr" Starkey MBE, born July 7, 1940 in Liverpool, England.</li>
</ol>
</blockquote>

(I would greatly appreciate feedback from friends and colleagues active in these jurisdictions on what style prevails around them!)

Most older American forms and many older American practitioners plod on in wall-of-text style, regardless of enumerated item length:

> "The Beatles" shall mean, collectively, (i) the late John Winston Ono Lennon MBE, born October 9, 1940 in Liverpool, England; (ii) Sir James Paul McCartney MBE, born June 18, 1942 in Liverpool, England; (iii) the late George Harrison MBE, born February 25, 1943 in Liverpool, England; and (iv) Richard "Ringo Starr" Starkey MBE, born July 7, 1940 in Liverpool, England.

I have heard lawyers say this approach "saves paper", which is good for a laugh from nonlawyer friends.

## How Does One Ignore Enumeration?

Disregarding enumeration in an American-style contract could have a number of practical effects:

1. Ignore the order of enumerated items. Don't assume, say, that John is any more important or any more a member of The Beatles than Ringo, just because John's listed first and Ringo last.
2. Ignore the kinds of numbers---Arabic numerals, Roman numbers, upper- or lower-case letters---used in enumerations.
3. Ignore where the numbers appear, or other formatting, when interpreting the enumeration.

The first is far-fetched. I'm not aware of any presumption that order matters if a contract neglects to say so. When a contract does say so, that's separate language, not part of the enumeration formatting or numbering.

> "The Beatles" shall mean, collectively and in descending order of importance ...

The second may theoretically matter where the numbering of an enumeration is taken to have meaning with the overall scheme of section numbering.

> Article I. Definitions.
>
> Section 1. Band-Related Definitions.
>
> (a) "The Beatles" means (i) current members of the rock 'n roll band performing as "The Beatles"; (A) John; (B) Paul ...

While I have seen incredible variation among American contract drafters in how enumerations are numbered, and even in how individual attorneys number enumerations within a single written agreement, I've yet to see a practical example where ignoring the kind of numbers used for an enumeration might produce ambiguity. It may very well be possible.

The third kind of meaning seems the most likely casualty of an "enumeration means nothing" disclaimer.

### Trailing Modifiers

The idea that drafters want courts to ignore how they arrange language in enumerations troubles because ambiguous "trailing modifiers" are deadly common and structured enumeration is an important tool of prevention.

Consider:

> A Concert is "Over" when the lights have gone out at the Venue or the The Beatles have left the Venue and The Beatles do not play any additional songs at the Venue on the Concert Date.

There are three questions that affect when a Concert is "Over".

1. Have the lights gone out at the Venue?
2. Have The Beatles left the Venue?
3. Will The Beatles play any additional songs at the Venue on the Concert Date?

How do these questions add up to tell us whether and when a Concert is Over? There are two likely options. Consider the same language, enumerated in two distinct ways.

Variant 1:

> A Concert is "Over" when either
>
> 1. the lights have gone out at the Venue; or
> 2. the The Beatles have left the Venue and The Beatles do not play any additional songs at the Venue on the Concert Date.

Variant 2:

> A Concert is "Over" when either
>
> 1. the lights have gone out at the Venue; or
> 2. the The Beatles have left the Venue
>
> and The Beatles do not play any additional songs at the Venue on the Concert Date.

Mid-Concert, Ringo performs an exuberant drumstick toss. By freak of chance, the stick strikes an electrical connection high above the drum riser, cutting power to the Venue's stage lighting. After a delay of many hours, during which all of The Beatles remain backstage, the connection is repaired. The Beatles return to complete their set to a thinner crowd.

Under which enumeration of the definition of "Over", if any, was the Concert Over when the lights went out at the Venue? Intuitively, I believe that the Concert was Over when the lights went out under Variant 1, but not under Variant 2.

If ignoring enumeration for the purpose of contract interpretation means rewriting the contract language, eliding all enumeration-related formatting or number marks, both Variant 1 and Variant 2 revert to the same block of insufficiently structured text with an ambiguously applicable trailing modifier.

## Order of Operations

Contract tests, triggers, and other constructs that ask yes-or-no questions often involve so-called "logical connectives" like conjunction ("and"), disjunction ("or"), and negation ("not"). To emphasize those connectives in our running example:

> A Concert is "Over" when the lights have gone out at the Venue `OR` the The Beatles have left the Venue `AND` The Beatles do `NOT` play any additional songs at the Venue on the Concert Date.

"Logical connectives" work on "operands", which are yes-or-no questions like "Have the lights gone out at the Venue?". Connectives combine yes-or-no questions into more complex yes-or-no questions.

Lawyers, as a rule, know these logical connectives very well. They share this trait with computer programmers, mathematicians, and logicians, who also depend on rigorous use and of, and good intuition in, logical connectives to do their daily work. "A and B" is `A && B` in computer code and "A ∧ B" in mathematics. "A or B" is `A || B` and "A ∨ B". "Not A" is `!A` and "¬A". "If A, then B" is `if (A) { B }` and "A → B". Different symbols, same meaning.

But contract drafting differs from these other fields in clinging to prose English for its basic expression. Though legal English has drifted perilously far from everyday English in diction, usage, and style, it lacks a key innovation of the other professions' formal languages. Legal English lacks any special notation to show the "order of operations", or how two or more logical connectives in a single question relate.

Computer programmers, mathematicians, and logicians use parentheses to show how multiple logical connectives relate to their operands:

>  (Lights Out `OR` (Left the Venue `AND` (`NOT` More Songs)))

Versus:

>  ((Lights Out `OR` Left the Venue) `AND` (`NOT` More Songs))

You may recall using parentheses for this purpose in elementary arithmetic. Teachers delighted in showing the huge effect they might have on the result of a computation.

> 100 − ( 5 × 10 ) = 100 - 50 = 50

> ( 100 − 5 ) × 10 = 95 × 10 = 950

Drafters use enumeration and conventions about its meaning instead of grouping symbols like parentheses. Like defined terms and cross-references, these conventions aren't founded in law, but known as convention among lawyers. They work by the same magic that gives a term, quoted in parentheses, the same meaning throughout the terms on the back of a parking stub or a 100-page merger agreement.

Attorneys ought to embrace such use of enumeration, and make its meaning more explicit. The alternative, to avoid ambiguity, is to "distribute" conjunctive and disjunctive relationships. In other words, to repeat questions as necessary to make the overall question clear.

> A Concert is "Over" when the lights have gone out at the Venue `AND` The Beatles do `NOT` play any additional songs at the Venue on the Concert Date `OR` the The Beatles have left the Venue `AND` The Beatles do `NOT` play any additional songs at the Venue on the Concert Date.

This approach clarifies the overall question of when a Concert is Over not by making the order of operations clear, but by excluding unintended readings of the order of operations as redundant. It also introduces risk that some future drafter will edit one recitation of "The Beatles do not play any additional songs at the Venue on the Concert Date" without updating the other.

> A Concert is "Over" when the lights have gone out at the Venue `AND` The Beatles do `NOT` play any additional songs at the Venue on the Concert Date `OR` the The Beatles have left the Venue `AND` The Beatles do `NOT` play any more songs at the Venue on the Concert Date.

What if The Beatles return to the stage not to play an additional song, but to reprise "Sgt. Pepper's Lonely Hearts Club Band", their opening number?

## Better Language, Better Tools

I'm conversant in computer programming, formal logic, and proofs. I take some pride in exercising "technical" drafting chops vigorously and often. But self-analysis compels me to admit that I am helpless, on my own, to purge my contracts of logical ambiguities, like trailing modifiers. Each and every time I task myself with fluently translating between the structured discipline of logical statements and the freedom of English text, I run a small risk of introducing ambiguity. That risk is compounded by all the usual suspects---speed, fatigue, ill health, emotion.


It's no consolation for me that the same problems reliably crop up in statutes and the work of colleagues I admire, because it's no consolation for my clients. The only, highly imperfect antidote I've discovered is generous helpings of time I rarely have. Time in drafting, carefully and slowly. Long pauses between revisions, to develop fresh eyes. Rarer even than having such time is having justification to bill it. So I write the time off when I'm able. It's cheap integrity, I suppose, but the wrong kind of incentive.

Those who've followed my work on Common Form and related projects may have noticed a pattern. Each new tool is kind of penance, a tacit admission that I can no longer trust myself with some part of my own practice. I've ceded formatting. I've ceded defined terms. I've ceded cross-references. Spelling. Plain English. Signature pages.

I'm going to try and cede yes-or-no, logical statements, too. If the meaning of enumeration is dependable---I believe it is, and I plan to draft some boilerplate to make doubly sure---conversion from a structured representation to legal language can be straightforward. [I've already got some code](https://www.npmjs.com/package/boolean-json-to-commonform).

This will be my first venture into generating the substance of my legal documents with software. I have avoided this up to now, but can no longer do so. Drop me a line if you're interested.
