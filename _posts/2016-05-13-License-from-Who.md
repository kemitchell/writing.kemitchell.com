---
title: License from Who?
description: Safe open-source licensing means more than a LICENSE file.
layout: post
tags:
- Open Source
- Licensing
- Provenance
---

What if the person who put a copy of the [MIT License] in the software you're using didn't actually have the right to license the software?

[MIT License]: https://spdx.org/licenses/MIT

You might get sued for using the software.

How do you know if someone had the right to license software?  How do you know which someone you should worry about?

We need to work on that.

<!--jump-->

Lawyers call this issue "provenance".  The goal of provenance is to answer the question "Who owns intellectual property in this software?".  That's because, with very rare legal exception, only owners can license others to copy, change, share, and sublicense software.

(What about sublicenses?  You're right, owners can license others to give sublicenses.  But most Open Source licenses don't work that way.  Instead, they give others the right to distribute copies of software along with copies of the license terms and copyright notices.  The terms give recipients licenses direct from the owners.)

The answer to "Who owns rights in the software?" is often "several people", even for small projects.  If you have access to the Git repository for the project, you can do

    git log --format='%aN%n%cN' | sort -u
    # author name ----^
    # newline -----------^
    # committer name ------^
    # sort & remove duplicates ---^

for a list of committers and authors.  It's a place to start, especially if the project used Git from the beginning.

You may not have the Git repository.  Maintainers may have rebased, restarted fresh, or copied-and-pasted others' work.  If you have unminified source, there may be an `AUTHORS` file, code header comments with lists of contributors, or a helpful notice in `LICENSE`.

But even a Git author and committer for every line of source isn't enough.  The "author" of software---the person who wrote the code---may not own the intellectual property.  If the author was working for someone else, they may own the rights instead.  The author can't license the software without the owner's permission.

Lawyers have short names for the rules that give employers and clients intellectual property ownership.  Rules like "work made for hire", "shop right", "scope of employment", and "assignment" sound intuitive, but hide a lot of complexity.  Details matter. That means lawyers ... unless we can abstract some of that complexity away.  If the cost of being occasionally, legally, technically wrong is less than we would have spent involving lawyers to resolve every doubt, we've achieved a better result for end users at the right price.

[The AUTHORS Certificate] includes one attempt at that kind of abstraction.  In a nutshell, the AUTHORS Certificate is a standard template for a file, called `AUTHORS`, that lists contact information for contributors to an open-source software project.  New contributors are asked to review the text in `AUTHORS`, which concerns intellectual property ownership, and show they agree by adding their names when making new contributions.  That means certifying that the contribution is their work and doesn't bring along with it any obvious intellectual property issues.  (You can read more about it in the project's [README].)

[README]: https://github.com/berneout/authors-certificate/blob/34ad3f80ac17c382b9178b662b737d443d9943bf/README.md

[The AUTHORS Certificate]: https://github.com/berneout/authors-certificate/blob/34ad3f80ac17c382b9178b662b737d443d9943bf/AUTHORS

In the easy case, where someone is sure that they alone own the intellectual property in the work they're contributing, they can list only their own contact information.  If there's any reason to suspect that someone else---like an employer or client---may own intellectual property in the work, the certificate requires the contributor to list who may own the rights in `AUTHORS` along with their own name and get advance written permission to contribute.

Other than "intellectual property", the AUTHORS Certificate doesn't use any legal terminology, like "work made for hire" or "assignment".  This is intentional.  It isn't up to every contributor to a project that uses The AUTHORS Certificate to become an expert in intellectual property ownership rules for their legal jurisdiction.  If they do happen to be sure they alone own their work, they can say so.  If there's any reason to doubt, helped by a few hints in the certificate, it's clear what needs to be done.  That does not involve calling in a lawyer for a definitive answer about ownership.

The AUTHORS Certificate is a cautious tool.  If anyone comes to mind who might own the intellectual property in a contribution, it asks the contributor to name them and get their permission.  That means some contributors may end up asking for permission they don't technically need.

This is where The AUTHORS Certificate's abstraction of intellectual property ownership rules leaks.  But it's designed to leak in a way that provides too much, rather than too little, protection for users of the project.

By the same token, contributors should add their information to `AUTHORS` whether their contribution seems significant or cursory.  For certain kinds of minor contributions, the changes may not include anything that intellectual property law protects.  But again, it's better to have a little more protection than is strictly necessary than too little, or to invite legal speculation and analysis at every step along the way.  The AUTHORS Certificate is designed to live right in the code repository with other files developers are accustomed to changing, manually or with scripts.

---

As always, I'd welcome any thoughts via [e-mail](mailto:kyle@kemitchell.com) or [Twitter](https://twitter.com/kemitchell).
