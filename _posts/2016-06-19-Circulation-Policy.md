---
title: Circulation Policy
description: Confidentiality rules and procedures for the great Common Form library in the sky
layout: post
tags:
- Common Form
- Confidentiality
---

I've just finished a rewrite of <https://api.commonform.org>, the main public server, or _public library_, of Common Forms.  A few thoughts on how it balances the obligation of confidentiality and the opportunity of collaboration.

<!--jump-->

> Technical details are presented like so.  If you don't write software, feel free to skip them.

## Form Donations

Anyone can donate Common Forms to the library, and every donation is anonymous.  Donated Common Forms are said to be in _storage_.

Except for the server logs, which record the IP address of the donor's machine and roll over periodically, the library doesn't store any information about where a donated Common Form came from.  Not who donated.  Not when.  Not whether anyone donated the same form before or after.

> Technically, donation means posting to <https://api.commonform.org/forms> with a JSON request body that satisfies [commonform-validate].  That's it.

[commonform-validate]: https://npmjs.com/packages/commonform-validate

Donations cannot be rescinded.  Since the library doesn't remember who donated any Common Form, it can't be sure the person asking to rescind a donation is the one who donated it in the first place.  Even if they did donate the Common Form at some point, someone else may have donated the same Common Form, earlier or since.  Others may have come about the form in storage and begun to rely on it being available there.

Anyone can retrieve a Common Form from storage, but they have to request it specifically, by "fingerprint", or [cryptographic digest].  There is no public catalog of what's in storage.

> Technically, requesting from storage means sending a `GET` request to `/forms/$digest`, where `$digest` is a root digest from [commonform-normalize].  Every Common Form is a [hash tree], [Git]-style.

[hash tree]: https://en.wikipedia.org/wiki/Merkle_tree

[Git]: https://git-scm.com

[commonform-normalize]: https://npmjs.com/packages/commonform-normalize

[cryptographic digest]: https://en.wikipedia.org/wiki/Cryptographic_hash_function

Fingerprints look like this:

[SHA-2]: https://en.wikipedia.org/wiki/SHA-2

<code class="hash">28741e0725a1a69717c4d9eee78d7896f5ede5445942ee43caf7fe1aeec7edcf</code>

There are 64 characters in any fingerprint.  Each character can be one of [16 possibilities]---a digit `0` through `9` or a letter `a` through `f`.  Since there 16 possibilities for each character and 64 characters, there are 16 to the 64<sup>th</sup> power possible fingerprints.  [Wolfram Alpha] tells me that number is called "115 quattuorvigintillion and change".  It's unfathomably enormous.

[16 possibilities]: https://en.wikipedia.org/wiki/Hexadecimal

[Wolfram Alpha]: http://www.wolframalpha.com/input/?i=16%5E64

At this point, there's no practical, publicly known method to pick a fingerprint that you want and work backwards to content that will have that fingerprint.  Suffice it to say, you need to know the fingerprint you're looking for, and everyone looking for a specific fingerprint has a right to expect the same Common Form content.

This means that, to get a copy of a Common Form in storage, either:

1.  You have to come up with the Common Form's exact content independently.  Once you have the content of the Common Form, you can take its fingerprint and ask the Common Form library server whether it already has a copy in storage.
2.  You have to get a copy of the fingerprint from someone else.

Asking for every possible fingerprint, in sequence, would take more than a lifetime.  If you've ever used document sharing links from Google Drive, which also end with long strings of random-looking characters, you've relied on [this kind of security](https://tools.ietf.org/html/rfc6920).  It's a massive math haystack full of needles.  It's very, very hard to find the right one if you don't know exactly where to look.

## Publication

Patrons of the library have privileges above and beyond making donations and requesting Common Forms from storage.  Patrons exercise their privileges by sharing information with the library server using an assigned patron name and a password.  If you'd like one, contact me by e-mail.

> Technically, this means making requests with an HTTP basic access authentication `Authorization` headers.  The server is HTTPS-only, certificate now courtesy of [Let's Encrypt].

[Let's Encrypt]: https://letsencrypt.org

The most important patron privilege is _publication_.  I'll cover others in later blog posts.

Publication means identifying a particular Common Form in storage as a specific edition of a project in your name.  The Common Form might be one you donated, but it might be one you only happened to find, or some combination of original and discovered work.

> Technically, publications are HTTP posts to
>
>     /publisher/$1/projects/$2/publications/$3
>
> where `$1` is the posting patron name, `$2` the project name, and `$3` the edition.  Request body is a JSON object with a `digest` property for a Common Form in storage.  Project names are ASCII alphanumeric with hyphens.  Editions are [Reviewers' Editions].

[Reviewers' Editions]: https://www.npmjs.com/package/reviewers-edition-parse

For example:

- `ironsides` is a patron of the Common Form library server.  We can view a list of their _projects_ [here](https://api.commonform.org/publishers/ironsides/projects).
- One of those projects is `indemnification-agreement`.  We can view a list of published _editions_ of that project [here](https://api.commonform.org/publishers/ironsides/projects/indemnification-agreement/publications).
- One _edition_ of `ironsides`' `indemnification-agreement` is `1e4d`, for "first edition, fourth draft".  We can view the publication record [here](https://api.commonform.org/publishers/ironsides/projects/indemnification-agreement/publications/1e4d).
- The publication record has a `digest` property showing the fingerprint of the Common Form in storage.
- Requesting that Common Form by fingerprint [gets us the Common Form](https://commonform.org/forms/36dd29b8332ea655a47bcba51ae5229e1a3bd69769aec9c8e0c3bf12a27013db).  You'll notice the web interface handily points out that this particular form has been published.  We might also [link to a URL with the project details](https://commonform.org/projects/ironsides/indemnification-agreement/1e4d) and get redirected to the Common Form.

Like donations, publications are permanent.  Once a patron publishes a Common Form, they can't "unpublish", though they can publish later editions.  The library server makes it easy to find the latest or most-recently-published edition of any project.

As a result, if you and I agree to sign Common Form

<code class="hash">36dd29b8332ea655a47bcba51ae5229e1a3bd69769aec9c8e0c3bf12a27013db</code>

you as "Company", as of a specific date, the terms of our agreement are unambiguous.  We get the same result if you and I agree to sign "ironsides' indemnification-agreement 1e4d from commonform.org".  The latter's easier to remember and interpret.

In the future, I'd like to print, bind, and archive copies of the publication catalog at regular intervals.  That way, even if the library server is no longer working, folks can resolve publisher-project-edition references to specific Common Form fingerprints.  Wherever you happen to find a Common Form with the identified fingerprint, you can be sure beyond a shadow of a doubt that it's the one the parties meant to reference.

## Catalog and Indices

As the links above show, the public _can_ browse a catalog of publications, and publications are not anonymous.  In fact, the public can work backwards from [a list of all patrons with publications](https://api.commonform.org/publishers) to a list of all publications, fetch their corresponding Common Forms from storage, and end up with all the data on publications the public library has.  But this will represent only a small part of what is in storage.

Since that catalog of Common Forms is public knowledge, there is no harm in making it more accessible.  In particular, the public library can _index_ publications.

For example:

- [A list of all defined-terms used and defined in publications](https://api.commonform.org/terms)
- [Fingerprints of published definition of the term "Employee"](https://api.commonform.org/terms/Employee/definitions)
- [Fingerprints of published cross-references to the heading "Indemnification"](https://api.commonform.org/headings/Indemnification/references)
- [Fingerprints of every Common Form (and Common Form within those Common Forms) that is part of a publication](https://api.commonform.org/digests)
- [Fingerprints of published Common Forms in which a certain other Common Form is included](https://api.commonform.org/forms/2877124a95b33c1266fdb526e82ef24595b5c5cee8afeee3bbbd4ab887fe3498/parents)

The library---or others---might index publications in other ways, too.  I'd particularly like full text search and "what forms are similar to this one?" indices.

## Confidentiality

This two-tiered structure---opaque _storage_ and open _catalog_---give users a simple choice when it comes to using Common Form for potentially sensitive client transactions:

1. If you want to use Common Form to communicate revisions of terms for a specific transaction, you can donate the form of agreement to the Common Form library sever, as well as any revisions.

   Those involved can exchange fingerprints, say over e-mail.  Others won't be able to find the Common Forms they refer to, or attribute them to the parties' negotiations, without viewing the e-mails in which they exchange the fingerprints.  Even if an attacker managed to hack the library server, they could, at best, sift through all the Common Forms in storage and guess which ones the parties might have negotiated and finally signed.  The more Common Forms are donated to storage, the less viable that strategy becomes.  They haystack only gets bigger; the needles stays the same size.

2. If you want to "publish" a form in the sense of making it available for use and discussion online, you can donate the form and then publish it under your patron account.

   The library provides a built-in way to check up on the latest edition of a particular project.  Tools are available to compare editions, and [Reviewers' Editions] themselves encode advice on whether and how much review users of an old edition should apply to a new edition.

   As I'll discuss in later writing, the library server also supports annotations---comments to Common Forms---and subscriptions that send e-mail notifications of annotations, new editions, and other elements of collaboration.

3. Those who'd like to "publish" to a limited set of trusted collaborators can start their own library server using [the same software used by the public library](https://npmjs.com/packages/commonform-server), and restrict access to their chosen colleagues.  In other words:  Start a private library.

## Big Picture

The goal of my work on Common Form has always been to make it easy to separate the confidential specifics of a deal from the generic work of selecting, drafting, and composing interchangeable bits of contract, so the generic bits can be shared.  I'd like to see a day when the profession no longer rereinvents the same obsolete wheels, but pushes the state of the art, distributing its advances quickly and widely.  I'd like to see good law made accessible to a lot more good people.

Part of that challenge lays in how to structure pieces of legal forms as data, so we can finally put the computers to work in earnest alleviating our drudgework.   Common Forms answer that challenge by making it trivial to carve out fill-in-the-blanks and swap out, replace, combine, and otherwise mix-and-match alternative provisions within a larger, consistent structure.

Once separation of shareable and not-shareable is achieved, it remains to facilitate smart individual choices about what to share, and when.

Part of Common Form's answer to that problem is to keep confidential, deal-specific information---the values to filled in the blanks of the generic Common Form, the identity of the drafter and the circumstances in which they consider specific choices of generic language---on drafters' own computers.  When you fill out a form blank on <https://commonform.org> today, your browser stores the value in its memory.  If you download a Word copy of your work, you'll find the value filled in for you.  But that value is never sent to any other computer.

Another part of the sharing-related challenge is addressed by the library server.  In some cases, even the smallest link between a specific drafter, a specific piece of language, and a specific point of time might "leak" confidential information.  Publishing my current choice of integration clause, or my favorite software-as-a-service agreement, may not pose any such risk.  But a litigator publishing a form class action settlement agreement, for example, might.  Practitioners differ so much in practice and clientele that no ethical system can take the choice of what to share, or how, away from them.

The alternative is to provide meaningful choices about sharing, and to explain them in plain and familiar terms.  Hopefully I've begun to do so here.
