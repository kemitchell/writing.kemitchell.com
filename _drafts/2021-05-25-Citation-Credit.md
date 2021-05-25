---
---

I started the [Code Credit License](https://codecreditlicense.com) because I've never heard a good argument against public credit for software developers, and the system developers had---credit via copyright notices---broke down more than two decades ago.  If you give software away and other people use it to make good work, you should get credit for your contribution.  Especially if others get credit.

Without a strong, consistent credit norm, backed by legal terms as necessary, developers are stuck not only begging for the credit they deserve, but begging in laughably awkward ways.  Case in point: academic citation.

I've long been aware of [GNU parallel](https://www.gnu.org/software/parallel/)'s plea for citations.  The maintainer even went so far as to block execution on first run after installation to show a notice about citation and demanding the user type in confirmation that they will abide.  The proper form of citation remains available behind `parallel --citation`:

```bash
Academic tradition requires you to cite works you base your article on.
When using programs that use GNU Parallel to process data for publication
please cite:

  O. Tange (2011): GNU Parallel - The Command-Line Power Tool,
    ;login: The USENIX Magazine, February 2011:42-47.
```

Earlier this week, watching [Hadley Wickham's "State of the Tidyverse 2020" talk](https://www.youtube.com/watch?v=OwwYfxB8CA0), I saw the same again:

> Really excited that we now have a paper that you can cite if you want to cite the entire Tidyverse, which you can get by using the citation function.  The kind of idea of that paper is that rather than having to cite every package you might use individually, there's just, like, one place you can cite.  It's a published article in [The Journal of Open Source Software](https://joss.theoj.org/), where, it's kind of---I have to admit that I'm, like, slightly addicted to checking the citation count.  Like, normally when you check the citation count of a paper it, like, changes, like, once every six months of something.  But we've already had, like, seventeen citations in the two months since it's been published, which is really, really amazing.
