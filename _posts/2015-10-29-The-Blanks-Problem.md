---
title: The Blanks Problem
description: A tough Common Form design decision explained.
layout: post
tags:
- Common Form
- Contracts
---
A few people are waiting on me while I work on a solution to a particularly vexing design problem with Common Form. In form of apology, I've summarized the problem, its importance, and where I stand on it here.

The problem boils down to whether Common Form should:

1. Store hints about how to fill out fill-in-the-blanks in forms?
2. Just store the blanks without any hints?

## Current Practice

Hints about how to fill in blanks are nice to have. Lawyers use them when they write forms like:

> "Company" means [Company Name], a Delaware corporation.

There is a fill-in-the-blank between "means" and ", a Delaware corporation" in that form. There is also a hint: "Company Name". When the form is filled out, the text "Company Name" won't appear in the contract. It's just for the lawyers.

But it's equally common to write blanks without any kind of hint, especially when what-goes-where is clear in context:

> "Purchase Price" means [•] United States dollars.

There is a fill-in-the-blank between "means" and "United States dollars" in that form. There isn't any explicit hint about how to fill it in. There's no extra text in the form that doesn't end up in the context, except the bullet, which is just there, I think, to make the brackets easier to spot.

So, as concerns any contract that eventually gets filled out and signed, the following are equivalent:

> "Company" means [Company Name], a Delaware corporation.

> "Company" means [•], a Delaware corporation.

> "Company" means [I am the eggman; they are the eggmen; I am the walrus. Don't commit malpractice.], a Delaware corporation.

The first is at times more convenient.

## It's All the Same

That convenience can be valuable. It's a feature any good document assembly system should have.

But Common Form isn't a document assembly system. It's a way for programs (including document assembly programs) to communicate form contracts. If communicating hints for blanks gets in the way of clearly communicating forms themselves, Common Form shouldn't do both. It should focus on communicating forms as best it can.

The reason these goals conflict is that in order to make sharing forms between programs practical, Common Form defines a way of identifying forms using special computer procedures called "hash functions". If you're not familiar with hash functions, think of them as "fingerprints" for data. Anywhere you find a particular piece of data you can take its fingerprint. That fingerprint is highly unlikely to match the fingerprint of any other bit of data you find. But if you see the exact same data again, you'll find the same fingerprint as before. The fingerprints give programs that speak Common Form a way to _identify_ each and every possible form, from the lowliest governing law clause to hundred-plus-page credit agreements.

At present, Common Form stores a hint about how to fill out every blank. The data for the hint is part of, and inseparable from, the data about the form where the blank appears. Because the hints are part of the data, they affect the fingerprints of the forms.

So the Common Form fingerprints of these provisions differ ...

> "Company" means [Company Name], a Delaware corporation.

> "Company" means [I am the eggman; they are the eggmen; I am the walrus. Don't commit malpractice.], a Delaware corporation.

... even though for purposes of finished, ready-to-sign contracts, they're exactly the same.

Common Form will in fact allow an infinite number of forms with exactly the same effect, because the text of the hint is arbitrary, and even slight differences produce different fingerprints:

> "Company" means [Corporation Name], a Delaware corporation.

> "Company" means [corporation name], a Delaware corporation.

> "Company" means [company name], a Delaware corporation.

> "Company" means [SomeCo, Inc.], a Delaware corporation.

All of the above produce different Common Form data, and therefore have different Common Form fingerprints. Again, they all have the same effect on a ready-to-sign contract when the blanks are filled in.

There is only one kind of hint Common Form does not allow:

> "Company" means [•], a Delaware corporation.

Hints can't be empty.

The question is whether Common Form should do the exact opposite, and _only_ allow fill-in-the-blanks without any kind of hint data. That would massively reduce the number of valid forms that can have the same effect on finished contracts.

## What Matters

Common Form aims for a one-to-one correlation between a specific bit of data and text that appears in a finished contract. Because forms are written in English and in English one can say the same thing many ways, Common Form can never fully achieve that goal. However, Common Form has rules designed to prevent how forms are represented as data from creating multiple valid Common Forms that contain the same English text.

For instance, Common Forms cannot contain multiple spaces in a row. If you're in the habit of typing two spaces after terminal punctuation, Common Form will replace those double spaces with single spaces. Neither can spaces appear at the end of a section.

These and other rules make it possible to work backwards from contract language that you see in print to a single bit of valid Common Form data that represents a form it might have come from. Any program can find the fingerprint of that data, and use the fingerprint to talk about the form  with other programs that understand Common Form and its rules. Consider:

> "Effective Date" means the date first written above.

There are many, many valid Common Forms that could produce this output, but by the far the most useful is:

1. Definition of "Effective Date", then
2. the text " means the date first written above.".

That Common Form has a fingerprint that any program speaking Common Form can find.

## Blanks Make Things Difficult

Blanks allow users to put arbitrary text into a form. The only limitation on this freedom is that the arbitrary text must go where the blanks in the forms are.

One effect of that freedom is the [security concerns I've covered before](http://writing.kemitchell.com/2015/10/08/Term-Injection.html). Another is that it becomes very difficult to work backwards from contract text that you see "in the wild", say on paper, to Common Form.

Consider this tiny bit of contract:

> "Dollars" means United States dollars.

Computers don't understand any of those words. They see that text as a series of characters:

1. Double quotation marks
2. D
3. o
4. l
5. l

And so on.

Given that the first bit of the corresponding Common Form is "definition of 'Dollars'" and the rest is some combination of form text and fill-in-the-blanks, how many Common Forms could have been filled out to create that contract text?

There are 29 characters in the contract text following "Dollars", starting with a space and ending with a period. Each of those characters could have been filled into a blank, or it could have been text in the Common Form. The number of possible Common Forms is the number of possibilities for each character---two---multiplied by itself over and over again, as many times as there are characters.

In math terms, we're looking at a sequence, or a set of unique position-character elements, _S_. The size of matching Common Forms is the size of the power set, or \|P(S)\|=2^n for n=\|S\|.

In non-math terms, the number of possibly matching Common Forms is enormous. Guessing that the average English word is about 5 characters long, and that a standard contract form might contain 50 words, we're looking at 250 word characters, plus an additional 48 spaces between the words, for a total of 298 characters. 2 to the 298th power is a number of 90 decimal digits several orders of magnitude greater than the estimated number of atoms in the visible universe.

## Cutting it Down

The takeaway is that no computer is going to work backwards from contract text to Common Forms that include fill-in-the-blanks using the native approach of trying each possibility, one after the other. Common Form must give up on letting users work from final contract to form, or try to program "heuristics" that help computers try only the most likely matches.

A few heuristics come to mind:

1. Assume useful and popular Common Forms will have relatively few blanks. Start by checking possibilities with just one blank. Then try two. Then give up.
2. Assume blanks will contain whole words, rather than stop or start in the middle of works in the contract text.
3. Try replacing common fill-in-the-blank patterns, like dollar figures, dates, or proper names, with blanks first.

I'm sure there are more.

The question is whether these "shortcuts" reduce the problem of finding matching Common Forms to a manageable size in realistic use cases. Running experiments to test that idea has taken a bit of time, hence my delay.

## Making a Call

While I'm not confident in my decision, I think I've spent all the time worth spending on the problem at this time. I will probably achieve more moving on to other problems than mining for further clarity on this particular puzzle. I've had some great input from others working on and thinking about Common Form, and I think they feel the same.

Though I will always remain open to input from trusted coconspirators, I expect that I will rewrite substantial parts of Common Form to remove fill-in-the-blank hints from how Common Forms are modeled in data and fingerprinted.

I do this primarily for three reasons:

1. It's consistent with the goal of cutting down on forms with different representations creating the same contract output.
2. At a minimum, I think knowledgeable users of Common Form could probably work backwards from contract text to likely Common Form with blanks manually, by trial and error.
3. That vast majority of real-life forms that I've converted to Common Form utilize fill-in-the-blanks in a minority of their provisions.

It's going to take a little more effort to build the ability to add hints to blanks on top of the "core" of Common Form. I use hints to automate assembly of documents in my own practice, and I can't do without it, so I'm motivated to do the work.
