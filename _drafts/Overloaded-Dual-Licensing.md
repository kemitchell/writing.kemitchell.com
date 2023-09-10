---
title: Two Kinds of "Dual Licensing"
description: a license operator and a business model
series: Overloaded
---

"Dual licensing" is the inclusive-or operator for free, public license terms.  It lets us glom two licenses together and apply them both to a project at one time.

"Dual licensing" is _also_ a business model involving not-free, one-off licenses.  It's one of the oldest commercial models for "open" software.

These meanings are just close enough and just far enough apart that, without some very clear context pointing one way or the other, "dual licensing" stands more as a question in itself than any useful answer.  Both kinds are common enough to trip up nearly everyone, some way along their path through the industry.

If I say my new project is "dual-licensed", all you're given to know is that more than one set of license terms is potentially involved.  Compared to "knock yourself out, we're MIT!", "it's dual-licensed" is the "it's complicated" of software.  Even if the picture isn't really complicated.  Even though half the complexity is often figuring out what "dual licensing" means this time.

Slice through this confusion by distinguishing two major kinds of dual licensing:  [choice-of-terms](#choice-of-terms) and [free-and-paid](#free-and-paid).

<h2 id="choice-of-terms">Choice-of-Terms Dual Licensing</h2>

Choice-of-open dual-licensed projects offer everyone the choice of one or more free-of-charge licenses that apply to everyone who gets a copy, like "MIT or GPLv2" or "BSD or Apache 2".

All the licenses are costless and "public", but they are not necessarily "open".  A choice-of-terms dual-licensed project could also offer a choice of more restrictive terms, like "[CC-BY-NC](https://creativecommons.org/licenses/by-nc/3.0/) or [CC-BY-NoDerivs](https://creativecommons.org/licenses/by-nd/3.0/)" or "[PolyForm Small Business](https://polyformproject.org/licenses/small-business/1.0.0) or [PolyForm Free Trial](https://polyformproject.org/licenses/free-trial/1.0.0)".

Regardless of what kinds of licenses stand on offer, if you do what's required by _one_ of them, you aren't infringing copyright in the project, even if you're _not_ doing what's required by another.  In practice, that means you get the most that each license allows, the union set.  Offering a choice of free, public licenses only means _more_ permission.

A project licensed "MIT or GPLv2" is in essence MIT licensed.  MIT allows more than MIT does, so anyone charged with a violation will show compliance with the more permissive terms.  Similarly, a project licensed "LGPLv2 or GPLv2" would in essence be LGPL-licensed.  LGPL is a "weaker"---more permissive---copyleft license than GPL.  Expressing these kinds of choices is practically pointless, which is why you won't see this around much.

Why would a project _ever_ want this complication?

Some projects offer choice-of-open intentionally, to avoid "compatibility" problems with other licenses, especially [copyleft](https://blueoakcouncil.org/copyleft) ones.  The Free Software Foundation has long said that Apache 2-licensed code can't be included and distributed under GPLv2 terms, but can be under GPLv3---that Apache 2 is "compatible with" GPLv3 but "incompatible with" GPLv2.  So projects like Rust, who want to make sure their code can be used _anywhere_, [offer both](https://github.com/rust-lang/rust/blob/master/COPYRIGHT) MIT, which FSF admits is "GPLv2-compatible", and Apache 2, which nearly everyone admits has clearer patent language, instead of using a single, newer, less well known license with strong patent language that's also compatible with both GPLs.  If you work at a big company that gets sued for patent infringement using Rust, you can "choose" Apache 2 and its patent grant.  If you're developing a GPLv2 project and want to reuse some Rust code, you can opt for the MIT license and avoid the debate about Apache 2.

Some projects end up choice-of-open dual licensing when they license old releases under a new set of terms.  For example, projects upgrading from GPLv2 to GPLv3 by getting permission from all copyright holders don't replace or take back the GPLv2 licenses for their old releases.  They merely licensed those releases under GPLv3, as well.  Others building on those old releases can now comply with copyleft by offering and licensing their code under GPLv3, rather than GPLv2.  The GPLv2 licenses for those releases specifically require GPLv2, but they can ignore GPLv2's requirements if they comply with GPLv3's instead.

I've sometimes heard choice-of-terms dual licensing called "multi-licensing", but "multi" is near enough to "dual" not to matter.  We could split hairs about "there are two licenses" versus "there's more than one license", but neither says anything about the _kinds_ of licenses involved or any differences between them.

<h2 id="free-and-paid">Free-and-Paid Dual Licensing</h2>

Free-and-paid dual licensed-projects come with free-of-charge, public licenses that allow some, but not all, uses.  Users can then _buy_ licenses that allow some or all of what the free terms don't.

The free license might allow noncommercial use, while paid licenses cover use in business.  Or the free license might require "sharing alike", while paid licenses allow use in closed products and services.  Anything the free license withholds permission to do, the paid licenses can allow for a price.  Some uses may not be licensed at all.  A company allowing free noncommercial use might sell licenses for commercial use, but not commercial uses in certain markets, or commercial uses competing with its own business.

The canonical example of free-and-paid dual licensing in software remains [MySQL](https://www.mysql.com/).  If you can meet the requirements of the project's GPLv2 copyleft license or the [extra permission they give for FOSS](https://oss.oracle.com/licenses/universal-foss-exception/), you don't need to pay Oracle anything.  If you want to distribute MySQL as part of a closed project, or to make changes to MySQL and not share them under GPLv2 with your users, you can [buy an "OEM" license to do that](https://www.mysql.com/about/legal/licensing/oem/) and ignore GPLv2.

The Free Software Foundation has long called this ["selling exceptions"](https://www.fsf.org/blogs/rms/selling-exceptions), but as far as I can tell, we're still far more likely to read and hear "dual licensing", even specifically for the free-and-paid kind.

I personally tried using "public-private licensing", since the free licenses are "public licenses", applying to everyone, while the paid licenses are "private licenses", covering only the customer who paid.  That's more technically correct and goes to the heart of the distinction.  But it's also double-stuffed with jargon.  And doomed.

## Other Kinds, Other Ways

This isn't the only way to divide up all we call "dual licensing" today.  But in my experience, it's the useful that fits into short, approachable terms.  As business and licensing practices change, there may come a day when a different heuristic becomes more useful.

In the meantime, life doesn't owe us a reality that's fun or easy to think about.  Edge cases will bust the distinctions I've made and coupled here---free-of-charge versus paid, public versus private---or force hard questions that blur them.  We've already see licenses that apply to everyone, automatically, so long as give money or something else in return, on their own---free, public standing offers, rather than free, public grants.  We've also seen terms that apply to one and all...except particular people or organizations.

This isn't science.  It's competition.  The overloading of "dual licensing" has charged us tolls for decades now.  Spreading that load between choice-of-terms and free-paid makes things understandable and actionable again.  That is the measure of the fitness of words.
