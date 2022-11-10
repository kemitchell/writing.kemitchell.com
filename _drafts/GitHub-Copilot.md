---
title: GitHub Copilot
description: worst pair ever
tags:
- Open Source
- GitHub
brief: Who wants this thing?  Or legal trivia, for that matter?
---

<!-- TODO: Accelerator and VC fund announcement https://github.blog/2022-11-09-an-open-source-economy-built-by-developers-for-developers/ -->

A number of folks have asked me about [Copilot](https://copilot.github.com/), GitHub's code-completion engine trained on its oodles of source code repos.  There's been all kinds of vaguely legal hue and cry, as well as some honest if preliminary legal comment, not least by friend and colleague [Luis Villa](https://twitter.com/luis_in_brief).  Flocks of social media gumshoes hunt "gotcha" scoops about which repos they trained on, or how likely Copilot is to simply recommend copying someone else's code verbatim.

My own thoughts point decidedly elsewhere.

## I don't want to use it.

I wonder who will.  Especially long term.

It's a neat demo.  There's undeniable, whiz-bang sparkle in seeing it work, or at least in watching the cherry-picked GIFs on the marketing page.  But if experience with "AI" completion on Google Docs is any indication, this is going to be way more fulfilling for the devs writing Copilot than for devs writing anything else requiring more than superficial attention.  I am tired of having escaped master's projects suggesting what I do not want to write when I either know what I want to write or am trying to think it up quickly.

People who try to finish others' thoughts all the time, or who constantly jostle for the keyboard when other people type, aren't good pair programmers.  They're annoying nuisances.  Imagine such a Peer Programmer from Hell.  Then strip them of all remaining inhibition, beef them up with lightning reflexes, exempt them from all fatigue of flesh and spirit, and allow them to flash their ideas on screen constantly and instantaneously as you work.  You are now pairing with C-3PO, but someone shorted out his protocol chip, nuked what sliver of personality he had, and sent him through CS Honors.

Color me skeptical.

## Copyright law is people.

While there _are_ some interesting legal angles here, they have way more to do with law people than law code.  Which I find is usually the case for folks who've studied copyright law in any depth.

Even assuming this new move somehow "breaks" the GPL or the Copyright Act, new products and services break licenses and copyright rules all the time.  No assumption is safe.  But license terms and legal interpretations are quite malleable in our system.  The prevailing legal mindset is not.  The way we see problems _as_ legal problems does not take pull requests, answer e-mail, yield to new judicial interpretation, or suffer amendments from Congress.

Take the baseline question:  Was GitHub allowed to do this?  As a lawyer fairly well versed in open software licensing, website terms of service, and online privacy, I honestly don't know where to look for the answer.

Some candidates:

- GitHub's terms of service have a kind of ["default" license to GitHub and its users for all data pushed to repos](https://docs.github.com/en/github/site-policy/github-terms-of-service#4-license-grant-to-us).  That's normal.  And usually fairly in line with the practical expectations of people who don't read terms of service, which is most of them.

- Their terms also have an [attempt](https://writing.kemitchell.com/2017/02/16/Against-Legislating-the-Nonobvious.html) at a [site-wide contributor license agreement](https://docs.github.com/en/github/site-policy/github-terms-of-service#6-contributions-under-repository-license).  That's weird.  First because "inbound=outbound" is an idea about programmer expectations, not explicit legal terms.  Second because it's open licensing stuff appearing in terms of service, which is a bit oil and water.

- Their ["feedback"](https://docs.github.com/en/github/site-policy/github-terms-of-service#3-feedback) terms are typical website terms and contract terms.  But as is typical for such website and contract terms, it's not particularly clear they really do any practical work.  As far as I can tell---and I've spent some time looking---they're more legal meme than well reasoned protection.

- GitHub's [privacy policy language on improving their services](https://docs.github.com/en/github/site-policy/github-privacy-statement#how-github-uses-your-information) is both laughably vague and also totally typical.  Privacy wonks, and even some privacy regulators, have made noise about requiring firms to be more specific on things like this.  But so far, the hammer hasn't really come down.

So which of these terms answers our question?  Which covers training Copilot on public GitHub repositories?  If more than one does, and they conflict, how is that resolved?

In the end, the business case forces action, whether legal has a clean way of thinking about it or not.  One of the obvious assets of GitHub is first-person access to all this data in all them repos.  By the currently prevailing Big Data Imperative, huge mounds of data must be _used_ for something marketing can call "AI".  GitHub is full of developers who like developer tools and toys.  So the natural place to go, after running a bunch of statistical reports for pitch decks and annual reports, is something like Copilot.  There might even be a nice "look what the new acquire could for IntelliSense!" angle here, too.
