---
date: 2022-01-07T09:14:05-08:00
title: AWS Contributor Licensing Blurb
description: another mutation from the cauldron of CLA frustration
tags:
- Open Source
- Licensing
- Contributor Licensing
---

I've run into a number of commits to AWS GitHub repositories with this language tacked on:

> By submitting this pull request, I confirm that you can use, modify, copy, and redistribute this contribution, under the terms of your choice.

Contributors aren't writing this themselves.  Rather, AWS seems to have made including it in GitHub pull request templates standard operating procedure, starting at least a few years back.  [Here's a site-wide GitHub search with examples.](https://github.com/search?q=%22under+the+terms+of+your+choice%22+user%3Aaws+extension%3Amd&type=Code&l=&l=)

If anyone has the inside line on how this approach came about, or public sources to link to about it, I'd greatly appreciate [a tip via e-mail](mailto:kyle@kemitchell.com?subject=AWS%20Contributor%20Licensing%20Blurb).  I'm endlessly fascinated with the push and pull of justified coder frustration, unjustified anti-CLA hysteria, and legal reality.  I like to think I'm a [responsible, proactive player in that game](https://writing.kemitchell.com/2021/12/16/Single-CLA-1.0.0.html).

As for the language and the approach itself, I haven't had time to really consider in detail.  But shooting from the hip:

- The blurb is admirably short.

- Still, the list of "magic verbs"---use, modify, copy, redistribute---is a legal code smell.  Then again, identifying the category, rather than listing our its elements, might actually make the blurb longer.

- Including this on behalf of developers in a template, rather than having them indicate assent in some affirmative way, feels sketchy.  It's clickwrap.

- Piggybacking on GitHub authentication makes a lot of sense.  It's what I did [for Single CLA](https://singlecla.com/).

- There's nothing here about employers or clients owning IP, instead of the developer.
