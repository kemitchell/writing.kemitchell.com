---
title: Two Kinds of "Dual Licensing"
description: a license operator and a business model
series: Overloaded
---

"Dual licensing" is the inclusive-or operator for free, public license terms.  "Dual licensing" is also business model involving not-free, one-off licenses.  These meanings are just close enough and just far enough apart that, without very clear context, "dual licensing" works more as a question in itself than an answer to any.

If I say my new project is "dual-licensed", all you're given to know is that more than one set of license terms is potentially involved.  Compared to "knock yourself out, we're MIT!", "it's dual-licensed" is the "it's complicated" of the software world.  Even if the picture isn't really complicated.  Even though half the complexity is usually figuring out what "dual licensing" means.

You can get ahead of confusion by distinguishing two major kinds of dual licensing:  [choice-of-terms](#choice-of-terms) dual licensing and [free-and-paid](#free-and-paid) dual licensing.

<h2 id="choice-of-terms">Choice-of-Terms Dual Licensing</h2>

Choice-of-open dual-licensed projects offer everyone the choice of one or more free-of-charge licenses that apply to everyone who gets a copy, like "MIT or GPLv2" or "BSD or Apache 2".

All the licenses are free-of-charge and "public", but they are not necessarily "open".  A choice-of-terms dual-licensed project could also offer a choice of more restrictive licenses, like "[CC-BY-NC](https://creativecommons.org/licenses/by-nc/3.0/) or [CC-BY-NoDerivs](https://creativecommons.org/licenses/by-nd/3.0/)" or "[PolyForm Small Business](https://polyformproject.org/licenses/small-business/1.0.0) or [PolyForm Free Trial](https://polyformproject.org/licenses/free-trial/1.0.0)".

Regardless of what kinds of licenses are involved, if you do what's required by _any one_ of them, you aren't infringing copyright in the project, even if you're not doing what's required by one of the other licenses.  In practice, that means you get the most that each license allows.  Offering a choice of licenses this way only means _more_ permission.

Some projects offer choice-of-open intentionally, to avoid "compatibility" problems with other licenses, especially [copyleft](https://blueoakcouncil.org/copyleft) licenses.  The Free Software Foundation has long said that Apache 2-licensed code can't be included and distributed under GPLv2 terms, but can be under GPLv3---that Apache 2 is "compatible with" GPLv3 but "incompatible with" GPLv2.  So projects like Rust, who want to make sure their code can be used _anywhere_, [offer both](https://github.com/rust-lang/rust/blob/master/COPYRIGHT) MIT, which FSF admits is "GPLv2-compatible", and Apache 2, which nearly everyone admits has clearer patent language, instead of using a single, newer, less well known license with strong patent language that's also compatible with both GPLs.  If you work at a big company that gets sued for patent infringement using Rust, you can "choose" Apache 2 and its patent grant.  If you're developing a GPLv2 project and want to reuse some Rust code, you can choose the MIT license and avoid the debate about Apache 2.

Some projects end up choice-of-open dual licensing when they license old releases under a new set of terms.  For example, projects upgrading from GPLv2 to GPLv3 by getting permission from all copyright holders don't replace or take back the GPLv2 licenses for their old releases.  They merely licensed those releases under GPLv3, as well.  Others building on those old releases can now comply with copyleft by offering and licensing their code under GPLv3, rather than GPLv2.  The GPLv2 licenses for those releases specifically require GPLv2, but they can ignore GPLv2's requirements if they comply with GPLv3's instead.

I've sometimes heard this called "multi-licensing", but only as a general synonym for "dual licensing".  Neither terms says anything about the kinds of the licenses or any differences between them.

<h2 id="free-and-paid">Free-and-Paid Dual Licensing</h2>

Free-and-paid dual licensed-projects come with free-of-charge, public licenses that allow some, but not all, uses.  They are in some sense restrictive.  Users can buy licenses that allow some or all of what the free license doesn't.  The free license might allow noncommercial use, while paid licenses cover use in business.  Or the free license might require "sharing alike", while paid licenses allow use in closed products and services.

The canonical example of free-and-paid dual licensing in software remains [MySQL](https://www.mysql.com/).  If you can meet the requirements of the project's GPLv2 license or the [extra permission they give for FOSS](https://oss.oracle.com/licenses/universal-foss-exception/), you don't need to pay Oracle anything.  If you want to distribute MySQL as part of a closed project, or to make changes to MySQL and not share them under GPLv2 with your users, you can [pay for an "OEM" license](https://www.mysql.com/about/legal/licensing/oem/) to do that and ignore GPLv2.

The Free Software Foundation has long called this ["selling exceptions"](https://www.fsf.org/blogs/rms/selling-exceptions), but as far as I can tell, we're still far more likely to hear this approach called "dual licensing".  I've personally tried to switch to calling it "public-private licensing", since the free licenses are "public licenses", applying to everyone, while the paid licenses are "private licenses", covering only the customer who paid.  That's more technically correct, but also double-stuffed with jargon, and doomed.

## Other Kinds, Other Ways
