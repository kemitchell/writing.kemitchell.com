---
title: No LICENSE
description: they won't see your funding plea if they never look
layout: post
tags:
- Killjoy
- Open Source
- Licensing
brief: If users rarely look past your permissive license to your plea for funding, yank the license out of your project, make users go looking to find it, and show them your plea where they do.
---

This is one of a series, [_Killjoy_](/series/Killjoy.html), in which I sketch unorthodox and unwelcome solutions to nagging open source problems.

---

If you're having trouble getting your message of financial need across to users, delete your `LICENSE` file, strip out any license-related metadata, and set up a webpage for your project with a big funding plea at the top and your license terms in fine print at the bottom.  By making an actual person go and look for your license, you can increase the odds they'll find your expectation of fair funding, too.

In general, distribution systems reliably implement just two channels for reliable communication from makers to takers: source code delivery and license term preservation.  Those channels perfectly reflect what _takers_ need---code and evidence of permission to use it---but not any needs of makers.

More and more makers need to tell the world that they can't go on developing, maintaining, and supporting without fair compensation.  But there's no channel for reliably bringing such messages to takers' attention.  With source code and license terms in hand, the vast majority of takers lack any reason to look out for other messages.  Actually, there's a powerful _disincentive_: forced acknowledgment of one's dependence on undersupported peers doesn't feel so great.

Unless and until makers get a reliable channel to bring funding messages to takers' attention, welcome or not, their best bet is to hook into one of the existing channels takers have to rely upon.

Some makers have put funding pleas in ads, terminal output, or other aspects of their programs' interfaces.  Takers usually don't actually want any code that displays funding pleas.  But they end up with it reliably, because integrity of the source-code-delivery system is paramount.  There's no system that automatically  guarantees takers get the commits they want, and not the commits they don't, automagically.

Source code is one channel.  The other is licensing.

It's perfectly possible to tack a funding plea to the top of `LICENSE`, above the legal terms, or in the licensing section of documentation.  But especially if the distribution system supports and expects license _metadata_, that metadata likely can't express "MIT, but with a dire need of cash, soon, to stay that way" in a standard way.  It's either MIT or some kind of catch-all, "not standard" exception value.

Exceptions trigger exception handling:  If licenses matter, someone has to go looking for the terms.  There's the hook.  Triggering taker exception handling gets makers a sliver of taker attention.

From there, the questions is how best to direct that attention.  If the goal is to maximize the number of takers aware of the need to pay, and eventually the number who actually pay something, the natural strategy is to pick the medium that carries the message in the most compelling way.  Plain-text `LICENSE` files are inherently constrained.  So are standardized documentation files, like `README.md`, for that matter.  But whole subindustries exist to maximize conversion rates on websites.  The Web abounds in free graphics, templates, and services for the purpose.

Use bright colors.  Use flashy graphics.  Add a one-click payment button.  Go to town.  Just make sure that the page clearly identifies which project the funding plea and license terms apply to.  The licensing of your project won't have changed.  You'll just express it in a way that meets two needs at once: your users' and one of your own for a change.
