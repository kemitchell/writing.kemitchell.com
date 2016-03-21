---
title: License from Who?
description:
layout: post
tags:
- Open Source
- Licensing
---

What if the person who put a copy of the [MIT License] in the software you're using doesn't actually have the right to license the software?

[MIT License]: https://spdx.org/licenses/MIT

You can get sued for using the software.

How do you know if someone had the right to license software? How do you know which someone you should worry about?

We need to work on that.

<!--jump-->

Lawyers call this issue "provenance". The goal of provenance is to answer the question "Who owns this software?". That's because only owners can license others to copy, change, share, and sublicense software.[^1] The answer is often "lots of people", even for small projects.

If you have access to the Git repository for the project, you can do

    git log --format='%aN%n%cN' | sort -u
    # author name ----^
    # newline -----------^
    # committer name ------^
    # sort & remove duplicates ---^

for a list of committers and authors. It's a place to start, especially if the project used Git from the beginning.

You may not have the Git repository. Maintainers may have rebased, restarted fresh, or copied-and-pasted others' work. If you have unminified source, there may be an `AUTHORS` file, code header comments with lists of contributors, or a helpful notice in `LICENSE`.

But a Git author and committer for every line of source isn't enough. The "author" of software---the person who wrote the code---may not be the copyright owner. If the author was working for someone else, they might own copyright in the software instead. The author can't license the software without the owner's permission.

Lawyers have short names for the rules that give employers and clients copyright ownership. Rules like "work made for hire" and "assignment" make sense generally, but hide a lot of complexity. Details matter. That means lawyers.

[^1]: What about sublicenses? You're right, owners can license others to give sublicenses. But most Open Source licenses don't work that way. Instead, they give others the right to distribute copies of software along with copies of the license terms and copyright notices. The terms give recipients licenses direct from the owners.
