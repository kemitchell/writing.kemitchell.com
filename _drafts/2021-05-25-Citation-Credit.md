---
title: Citation Credit
description: tapping into academe for code credit
series: Code Credit License
tags:
- Academia
- Licenses
- Credit
---

I started the [Code Credit License](https://codecreditlicense.com) because I've never heard a good argument against public credit for software developers and the credit system developers had---copyright notices---was never sufficient to begin with, and broke down completely for network apps more than two decades ago.  If you give software away and other people use it to make public work, you should get public credit for contribution.  Especially if others get credit.

Without a strong, consistent norm of credit giving and taking, backed by legal terms as necessary, developers are stuck not only begging for the credit they deserve, but begging awkwardly.  Case in point: academic citation.

I've long been aware of [GNU parallel](https://www.gnu.org/software/parallel/)'s plea for citations.  The maintainer went so far as to block execution on first run after installation to show a notice about citation and demanding the user type in confirmation that they will abide.  The proper form of citation remains available behind `parallel --citation`:

```bash
Academic tradition requires you to cite works you base your article on.
When using programs that use GNU Parallel to process data for publication
please cite:

  O. Tange (2011): GNU Parallel - The Command-Line Power Tool,
    ;login: The USENIX Magazine, February 2011:42-47.
```

Earlier this week, watching [Hadley Wickham's "State of the Tidyverse 2020" talk](https://www.youtube.com/watch?v=OwwYfxB8CA0), I saw the same again, with a twist:

> Really excited that we now have a paper that you can cite if you want to cite the entire Tidyverse, which you can get by using the citation function.  The kind of idea of that paper is that rather than having to cite every package you might use individually, there's just, like, one place you can cite.  It's a published article in [The Journal of Open Source Software](https://joss.theoj.org/), where, it's kind of---I have to admit that I'm, like, slightly addicted to checking the citation count.  Like, normally when you check the citation count of a paper it, like, changes, like, once every six months of something.  But we've already had, like, seventeen citations in the two months since it's been published, which is really, really amazing.

To get citations, you must publish something citable.  Academics don't know how to cite software, and aren't terribly interested in [finding out](https://peerj.com/articles/cs-86/). They know how to cite PDFs in journals with [ISSN](https://en.wikipedia.org/wiki/International_Standard_Serial_Number)s and [DOI](https://joss.theoj.org/papers/published)s.  So at lease within academia, as it stands now, it's on you to go above and beyond making software, engage with a process like that of JOSS, and register yourself in the academic universe.  Then, maybe, the ethical and professional norms of credit where due can apply to you.

[Daniel S. Katz](http://danielskatz.org/)---a colleague I follow, and recommend following---has been involved on both sides of this realization: earlier on the software citation principles, now in JOSS.  That's work worth acknowledging on its own.

I'm sure there are more examples of software projects jumping through these hoops, with or without the journal process.  According to [this page](https://joss.theoj.org/papers/published), JOSS has published more than a thousand papers.  But I think I've seen enough to catch the pattern.

I took the first drafts of the Code Credit License aware of the efforts toward citation principles, but unaware of JOSS.  I think the terms we ended up with still hold:

> ## Give Credit
> Give this software and each contributor credit for contributing to goods or services that you develop, test, produce, or provide with the help of this software.
>
> ## How to Give Credit
> In general, give credit in such a way that others can freely and readily find a written notice identifying this software, by name, as a contribution to your goods or services, as well as each contributor, by name, as a contributor to this software. Do not do anything to stop others from sharing, publishing, or using those credits.
>
> ## Conventions
> If widespread convention dictates a particular way to give credit for your kind of goods or services, such as by end credit for a film, citation for an academic paper, acknowledgment for a book, or billing for a show, then follow that convention. ...

In order to cover multiple kinds of output---not just academic papers, but films, artworks, books, and so on---the terms had to be somewhat general.  That is a weakness, not a strength, since credit norms evolve and new media arise.

I would certainly read the Conventions section as fully compatible with citation to a JOSS paper for a package or package ecosystem.  In the absence of such a paper, I would still read the terms to require academic authors to cite projects and contributors by name, perhaps according to the software citation principles.
