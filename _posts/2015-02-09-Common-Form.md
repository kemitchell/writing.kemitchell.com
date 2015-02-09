---
title: Common Form
description: Composable, verifiable, shareable form contracts for the modern practice of law
layout: post
tags:
- Contracts
- Law
- Software
---

  I did not become a lawyer to reenact '60s-era office scenes. I have not sat countless Friday nights at home reading tax or finance or the latest opinion of Chancellor so-and-so to make rent with fees for indulgences in a mystery cult. Especially since hanging up my own shingle, I have been empowered, willing, and known to slash bills and time accordingly, but have fallen ever short of striking the root of the problem. Law is just that far behind.

[Common Form][source] is a labor of love, but also a penance and an act of professional desperation. It takes the form of software, but in personal terms, it's my bid for a way to practice law that pangs neither my conscience nor my stomach. It's a way out, but, I hope very deeply, also a way back in.

## Ends

The aim of Common Form is twofold.

First, it aims to make drafting generically, as one would draft a form or template, more efficient and reliable than drafting expediently for one deal and one deal only. This is possible because an out-sized part of drafting is glaringly menial paper shuffling, on the one hand, and haphazard grasping, on the other. Untold lawyers flail, even now, in haystacks of TNR-12, wondering what needle-point technical errors lurk within. The better off delegate that hunt to hired help so they can rack brains and files for that elusive, perfect such-and-such clause seen, written, or stolen some years back. The would be early-adopter types among us pay out for clunky third-party tools, get bitten (again) and adjust practices or expectations accordingly, lose the faith.

Common Form aims to expunge these experiences from the practice of law, and to collapse the long cycle of incremental improvements to the state of the art by forms committees, CLE handout scrambles, and traditional publishing deals. Public goods in law ought to be cheaper and easier to make.

Second, Common Form aims to make verification and sharing of contract content free, reliable, and instantaneous. Many a lawyer has reached the end of a non-disclosure agreement only to realize that, yes, it is in fact the same agreement they have read and approved, from top to bottom, many times before. Conversely, many a bespoke drafting project has devolved to a second-rate knock-off of a standard form Not Invented Here, then been thrust into circulation nonetheless to justify process or bill, polluting the ecosystem. Clients pay dearly for such duplication, sometimes unjustly, and good lawyers find no joy in the taking or making. Everybody drinks it off, and the wheel keeps on turning.

Any mind marinated in computer technology sees these tragedies as they are: utterly solvable, generic information problems. But technical minds' time is dear, perhaps too dear for any particular client, attorney, or firm.

I'm have solved the solvable problems. I have paid the price. I am giving the spoils away, for free, under the terms of the [Apache License, Version 2.0][Apache-2.0]. If you don't know Apache 2, don't worry; you're going to like it.

There is enough now to prove the concept, and for the technically astute to make real daily use. If the kernel of the software system isn't usable for you now, the ideas are still the most important, and I'd much appreciate especially your non-technical feedback on the trade-offs inherent in the design. I open up in this way now, for my own sake any that of possible future beneficiaries, in that I'd prefer to invest in building broader accessibility on a solid foundation of something worth accessing. Within the year, I expect to make the system approachable for everyone.

## How does it work?

The core is not complex. Many scrapped designs were far more nuanced, which I take to be good sign. It's probably easiest to understand in terms:

- A _Project_ is a _Form_ to be completed with certain variable _Values_ and prepared according to a set of formatting _Preferences_.

- A _Form_ is a discreet, reusable chunk of legal language. A one-liner no-assignment provision can be a Form. A 100-page merger agreement can be a Form. It's Forms almost all the way down. A Form need not be generic in our current sense of that term; in composition it may be quite deal-specific, but its components, taken individually, will be generic, reusable.

- _Forms_ are composed of _Text_, _Definitions_ of _Terms_, _Uses_ of _Terms_, _References_ to other Forms (their _Targets_), and _Fields_ to be filled in with Values.

- Forms may also contain other Forms, called _Sub-Forms_.

- Sub-Forms may be included by their _Parents_ with or without _Summaries_ that describe their contents.

- A _Reference_ within a form refers to the _Summary_ of another Form. Certain practitioners are fond of references like "Section 12(d) (Indemnification)". Common Form thinks of references as "Section (Indemnification)".

- Any sequence of contiguous Forms included within another Form is a _Series_. An numbered list within a paragraph is a Series, as is a list of sub-sections within another, overarching section.

Common Form defines a _Markup Language_ that allows us to express arbitrarily complex combinations of the above with only the keys on our keyboards, and only one key at a time. Take an example adapted from the Loan Syndications and Trading Association's form agreement:[^1]

> Ongoing Conditions \\\\ The obligation of each lender to make any \<Loan\> is subject to the satisfaction of the following conditions.

>     \\\\ the representations and warranties of the \<Borrower\> set forth in this \<Agreement\> shall be true and complete on and as of the date of such \<Loan\> as if made on and as of such date (except to the extent that such representations and warranties expressly relate to an earlier date, in which case they shall be true and complete as of such earlier date); and

>     \\\\ at the time of and immediately after giving effect to such \<Loan\>, no \<Default\> shall have occured and be continuiung.

> \\\\ Each \<Borrowing\> shall be deemed to constitute a certification by the \<Borrower\> on the date thereof as to the matters specified in {Ongoing Conditions}.

Two slashes (\\\\) indicate the end of a Summary and the beginning of a Sub-Form's content, or, sans Summary, the beginning of a Sub-Form without one. Uses of terms are indicated with \<Angle Brackets\>. Cross-references are indicated with the Summary of the intended Form in \{Braces\}. Sub-Forms are shown within their parts by four spaces per level of indentation.

To catch a few more conventions, a familiar litany of our dreams, nightmares, and waking hours:

> Preamble \\\\ This agreement (this \"\"Agreement\"\") is made and entered into as of [Contract Date] by and between \[Buyer\'s Name\] (\"\"Buyer\"\") and \[Seller's Name\] (the \"\"Company\"\").

Definitions are indicated with \"\"Double Double Quotes\"\". A Field is \[The Name of its Value\] in square brackets.

Finally, Forms to be set in conspicuous type are indicated with !! in place of the usual \\\\ at the head of the Form:[^2]

> Disclaimer of Warranty !! Unless required by applicable law or agreed to in writing, \<Licensor\> provides the \<Work\> (and each \<Contributor\> provides its \<Contribution\>s) on an "as is" basis, without warranties or conditions of any kind, either express or implied, including, without limitation, any warranties or conditions of title, non-infringement, merchantability, or fitness for a particular purpose. \<You\> are solely responsible for determining the appropriateness of using or redistributing the \<Work\> and assume any risks associated with \<Your\> exercise of permissions under this \<License\>.


That's it.

The logic for parsing this markup language is [available online][markup], as is the logic for [validating][validate] that output, [and all the rest of it][source].

## Payoff

Existing Common Form software can perform the following upon contracts expressed in this way, as of this writing:

1. output them to pristine, consistently and conservatively formatted Microsoft Word files
2. convert them to structured computer data structures for transmission or further processing
3. check them for a variety of technical errors, such as broken cross-references or Uses of Terms not defined by any Definition
4. prompt a user for values of each Field and insert them in place, wherever and however many times they appear
5. number each Form in context
6. replace all References with the numbers of their Targets

And these are no longer fallible processes. If a word you put in angle brackets does not also appear in double double quotes, you _will_ be shown an error. It matters not how late it is, how much you've slept, how long or knotted the contract.

These benefits are [usable by programmer-types versed in the command line today](https://vimeo.com/album/3250830). In due time, I expect to make it possible from any web browser. Existing computer code was written in expectation of use in the browser. It is compatible, and needn't be rehashed.

## Freedom

Common Form takes in rope you might otherwise use to hang yourself, but also dual-use rope you may have learned to sling with aplomb in your practice. The design I've chosen embodies choices among available trade-offs. Here is some of what I gave away.

There are no tables, graphics, or other non-prose elements in Common Form as yet. I will sorely miss them, and feel strongly that they are underused in current practice. I have not been able to accommodate them in Common Form's model without detriment disproportionate to gain. Nothing stops you from including these in attachments or pasting them after generating a .docx, but the system itself doesn't comprehend them. If you'd like to help me think through these challenges, please do be in touch.

You must provide a Summary of content you wish to target with a Reference. Ergo, that content must be contained in a Sub-Form with a Summary. This favors something more akin to the commonwealth style of enumeration, as distinguished from Americans' apparent preference for long paragraphs stuffed within in-line numbered lists:[^3]

> The Company's Chief Executive Officer, who shall initially be [&bull;] (the “CEO Director”), provided that if for any reason the CEO Director shall cease to serve as the Chief Executive Officer of the Company, each of the Stockholders shall promptly vote their respective Shares (i) to remove the former Chief Executive Officer from the Board if such person has not registered as a member of the Board; and (ii) to elect such person's replacement as Chief Executive Officer of the Company as the new CEO Director; ...

This becomes:

> The \<Company\>\'s Chief Executive Officer, who shall initially be [Initial CEO\'s Name] (the \"\"CEO Director\"\"), provided that if for any reason the \<CEO Director\> shall cease to serve as the Chief Executive Officer of the \<Company\>, each of the \<Stockholders\> shall promptly vote their respective \<Shares\>

>     \\\\ to remove the former \<Chief Executive Officer\> from the \<Board\> if such person has not registered as a member of the \<Board\>; and

>     \\\\ to elect such person\'s replacement as \<Chief Executive Officer\> of the \<Company\> as the new \<CEO Director\>; ...

In addition, Common Form lacks direct support for references to attachments, exhibits, and other external documents, at least if you cannot substitute a Definition. You can work around with a Field.

Terms, Summaries, and Values are case-sensitive and fixed. There is no built-in facility for determining the plural of a term defined in the singular or vice-versa. Then again, it is free, simple, and easy to tell what you are missing and either add a plural definition or accommodate a Use of appropriate number. Personally, I use Title Case with All Terms, Summaries, and Values. Future versions of the software will check whether such indicators vary only by case, and warn you.

There is no per-word or per-character formatting. You cannot make specified text bold or italicized or underlined at will. On the other hand, you are no longer empowered to screw this up or waste time on it, to forget to conform a font size, indentation, &c. We have all seen "just our standard form" from opposing with deal-specific modifications in distinguishable type. Most of us have probably done it ourselves without noticing.

There are probably other consequences of the design that I am not predisposed to appreciate, given the particular make of blinders I wear for my practice. If you foresee or encounter a limitation, please do feel free to contact me. I am making the system and this overview available at this stage precisely to welcome a diversity of feedback in early stages.

## But wait...

The trade-off just described is good enough to make Common Form an easy choice for my own practice. But it is a trade-off in familiar pains (hours-long technical edits) and known benefits (like tables).

Take for granted that, one way or another, using Common Form or some other system, a far greater portion of our attention will soon be spent assessing substantive alternatives than crafting or assembling our selections. What then?

Common Form's markup language is an approachable gloss atop a more formal, far less chaotic representation of contract structure.

This is for human consumption:

> The \<Company\>\'s Chief Executive Officer, who shall initially be [Initial CEO\'s Name] (the \"\"CEO Director\"\"), provided that if for any reason the \<CEO Director\> shall cease to serve as the Chief Executive Officer of the \<Company\>, each of the \<Stockholders\> shall promptly vote their respective \<Shares\>

>     \\\\ to remove the former \<Chief Executive Officer\> from the \<Board\> if such person has not registered as a member of the \<Board\>; and

>     \\\\ to elect such person\'s replacement as \<Chief Executive Officer\> of the \<Company\> as the new \<CEO Director\>;

Here is what the system sees, formatted slightly for reading. Have a peek:

{% highlight javascript %}
{% include_relative commonform/form.json %}
{% endhighlight javascript %}

There are exactly two technical points worth understanding at a high level about how Common Form represents Forms in software:

1. The format has rules and constraints designed to ensure that unambiguously equivalent legal content is represented in precisely the same way. For instance, within the system, there is no such thing as two spaces in a row, so valid Forms cannot vary only by how much space they have between one or many words.
2. By utilizing standard data formats, it is unambiguously clear precisely which 1s and 0s represent a given form in software.

Those facts make every Form a prime candidate for use with "cryptographic hash functions". That's a fancy term for legitimately fancy, highly mathematical computer routines that work much as we're lead to believe fingerprints do:

1. They reduce large chunks of of data to smaller, more portable and comparable signatures of their source.
2. Two different sources---people or, in the case of Common Form, Forms---are highly unlikely to have identical fingerprints.
3. Given a Form, it's quick, easy, and cheap to find its fingerprint. Given just a fingerprint, however, it's impractically hard to guess the Form it belongs to. That makes it hard to pass off content that doesn't match a Fingerprint for a genuine match.

Common Form defines a specific hash function---solicited, reviewed, and approved for the federal government[^4]---as the official way to make _Fingerprints_ of Forms. Fingerprints look like this:


<span style="font-size:85%">2149b9557d80cf86d7b461d3702133922e6924e71ad2c1d386e00d4105c5506d</span>

They are always that long, and they are always made of the same, limited choice of lower-case numbers and digits. There are two to the two hundred and fifty-sixth power possible Fingerprints, which is an astounding number. As a practical matter, it is highly, highly unlikely that any two Forms will ever have the same Fingerprint.

Common Form servers called _Libraries_ store Forms indexed by these Fingerprints, and don't permit unauthorized users or Internet passersby to see a list of the Fingerprints on file. As a result, would-be readers and users have to ask for specific Fingerprints, which is to say they need to know what they're looking for or receive a Fingerprint from someone who does. More privileged users may be granted permission to list Forms by specific properties, such as, say, all Forms with Definitions for a given Term, but still can't see when or by who a Form was shared with the Library. In the future, more nuanced queries will be possible, such as for all Forms summarized "Indemnification" nested somewhere within a Form summarized "Merger Agreement".


Where sharing can be more open, such as with standard forms promulgated by industry groups or larger companies, users can create _Bookmarks_ that associate a _Name_ that people can remember (like "ISDA Master 2002") with a _Version_ number and a Fingerprint. For instance, "SAFE" is a bookmark on api.commonform.org with an available Version "1.0.0". Users who ask for the bookmark get the Form with that Fingerprint.

[api.commonform.org/bookmarks/SAFE@1.0.0](https://anonymous:anonymous@api.commonform.org/bookmarks/SAFE@1.0.0)


 For servers operated for private, perhaps individual use, bookmarks can be used for easy access to current favorites for common needs in your practice, such as your go-to trademark assignment or financing legal opinion.

As a practical matter, generic-sounding Definitions (not "vanity terms" like "Our Co."), generic Summaries, and judicious use of Fields to obscure confidential information would allow deal teams to share Forms with a Library on the open Internet, passing Fingerprints back and forth by way of proposal and counter-proposal. Any malicious third party is highly unlikely to guess the Fingerprint, not just among the other Forms that may have been shared with that Library, but lost in the forest of all possible Fingerprints, discovered or not. If risk that the Library may be hacked is significant, teams might send native-or markup-formatted projects by a channel they feel is more secure, such as by e-mail.

## The Future

My priority with respect to Common Form is to battle-test its model of contract structure. I will be "dog-fooding" the command-line interface released this month in my own practice, and welcoming others to try their hands.

The next major step is to make an interface to the system (and each user's choice of Library servers) available via web browser. Much of the infrastructure for that web application has already been written, and is powering the command-line interface now. Step changes in the capabilities of web browsers are making a great deal more possible without relying on third parties for storage of information, with all attendant privacy and confidentiality anxiety. I hope that Common Form's design will be borne out as a way to separate what can be shared from what cannot, with at least one manifestation of that separation at the gap between the web browsers we run to access the Internet and the servers that provide content.

In terms of the underlying data model and feature set, I hope to introduce a facility for annotation and interpretation that permits users to associate opinions and notes with Forms by Fingerprint. This is straightforward to implement in easy cases, where a Library can be presumed sufficiently private, sufficiently secure, and in use by attorneys under a common confidentiality umbrella, such as within a firm or on a deal team. It is less clear how to safely and responsibly apply knowledge of annotations to the selection of search results or back-and-forth on proposed revisions. It could be more complex still if annotations might themselves contain code, such as financial modeling or systemic risk assessment conclusions about known Forms. Naturally, I welcome any wisdom to be had on these kinds of possibilities.

## Following Up

If you're interested in Common Form, concretely or in specifics, practically or intellectually, I encourage you to reach out, whether by e-mail or via [GitHub][source], where bug reports and proposals for improvement to the software can also be made.

---

[^1]: Though not applied at so granular a level, the very excellent _The LSTA's Complete Credit Agreement Guide_ indicates cross-references in excerpts out of context with italicized text in square brackets: [_The Title of the Referenced Form_].

[Apache-2.0]: http://www.apache.org/licenses/LICENSE-2.0

[^2]: From the [Apache License, Version 2.0][Apache-2.0].

[^3]: From the National Venture Capital Association's model Voting Agreement.

[^4]: SHA-256, part of the [SHA-2 family](http://en.wikipedia.org/wiki/SHA-2).

[source]: https://github.com/commonform

[markup]: https://github.com/commonform/commonform-markup

[validate]: https://github.com/commonform/commonform-validate
