---
title: GitHub Copilot
description: this time the brouhaha is legal, apparently
tags:
- Open Source
- GitHub
---

A number of folks have asked me about [Copilot](https://copilot.github.com/), GitHub's code-completion engine trained on its shellmound of source code repos.  There's been all kinds of legal hand-wringing and opining, not least from my friend and colleague [Luis Villa](https://twitter.com/luis_in_brief).  And apparently no shortage of attempts to land "gotcha" scoops about which repos they trained on, and how likely Copilot is to simply recommend copying someone else's code, verbatim.  My own thoughts at this time boil down to:

First: I do not want to use Copilot, and I wonder who will, for more than a few minutes or hours.  It's a neat demo.  And there's a superficial whiz-bang future-is-now-ism in seeing it work, at least in the cherry picked cases featured on the marketing page.  But if experience with "AI" completion on Google Docs is any indication, this is going to be way more fun for the devs writing Copilot to demo than for any devs writing other code.  People who try to finish other people's thoughts all the time, or who constantly dive for the keyboard, aren't good pairs.  They're annoying nuisances and invasive distractions.  Imagine one of these people, but with no ego boundary and lightning reflexes, who never gets tired.  Color me skeptical.

Second: I suspect the more practical _legal_ lesson here has more to do with how we fit problems into legal categories and practices than any narrow edge case of copyright law.  Copilot runs headlong into the overlap between different legal problem categories---software licensing and websites terms.  GitHub's terms of service have a kind of ["default" license to GitHub and its users for all data pushed to repos](https://docs.github.com/en/github/site-policy/github-terms-of-service#4-license-grant-to-us).  That's normal.  Their terms also have a kind of [attempt](https://writing.kemitchell.com/2017/02/16/Against-Legislating-the-Nonobvious.html) at a [site-wide contributor license agreement](https://docs.github.com/en/github/site-policy/github-terms-of-service#6-contributions-under-repository-license), which is weird open licensing stuff.  Their ["feedback"](https://docs.github.com/en/github/site-policy/github-terms-of-service#3-feedback) terms are typical website terms.  The vagueness of their [privacy policy language on improving their services](https://docs.github.com/en/github/site-policy/github-privacy-statement#how-github-uses-your-information) is likewise typical.  But which of these things applies?  If they conflict, how is that resolved?

In short: Where's the part of GitHub's terms that says they can or cannot use your repos for something like Copilot?  It's not entirely clear where to look.

In the end, the business case forces action, whether legal has a clean "theoretical" picture of it or not.  One of the obvious assets of GitHub is first-person access to all this data in gaggles of software repos.  By the currently prevailing AI Imperative, huge mounds of data must be _used_ for something.  GitHub is full of developers, who want developer things.  So the natural place to go, after running a bunch of statistical reports for pitch decks and annual reports, is something like Copilot.
