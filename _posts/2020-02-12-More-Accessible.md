---
title: More Accessible
description: small tweaks to better accommodate readers
tags:
- Accessibility
- Blog
---

Thanks to pointers and encouragement from Matt Campbell, who reached out for a great e-mail exchange about [Reduce, Reuse, Reconsider](https://writing.kemitchell.com/2020/02/09/Reduce-Reuse-Reconsider.html), I've been able to make a few small accessibility improvements to this blog:

- Links to blog posts on the homepage and tag pages now come in `<h2>`, or second-level heading tags.

- The main content of each page now renders in `<main>`, rather than `<article>`.

- The main `<header>`, `<main>`, and `<footer>` elements now come with appropriate role attributes: `<header role=banner>`, `<main role=main>`, `<footer role=contentinfo>`.

I understand that all of these tweaks make it easier for those using [screen readers](https://en.wikipedia.org/wiki/Screen_reader) to navigate.  All of the changes were easy to make, without any effect on the appearance of the blog for seeing readers.

A number of folks have helped me make this blog accessible over the years, sharing small suggestions and proposed tweaks.  I'm so grateful for that guidance, especially, as from Matt, when it helps me welcome readers with reading styles outside my personal experience.  It's one thing to read [WCAG](https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines), and WCAG is good, but quite another to hear from real people that a change has helped them.

If there's anything I can do to make it easier for _you_ to read and respond to my writing here, please let me know.  I'm sure there's more I can do.
