---
title: PolyForm Commercial Does Individual Licenses Now
description: expanding standardization to single-user deals
series: PolyForm
brief: I've taken first pass at adding individual-license support to PolyForm Commercial.  It's looking pretty good.
---

The development preview of [PolyForm Commercial](https://commercial.polyformproject.org), the wizard for standardized software license terms, now supports licenses for single individuals buying for themselves as well as organizations with multiple licensed personnel.  Just tick "Individual" under "Customer" at the top and you're off.  Try it out and let me know.

Architecturally, the big move was recasting the idea of a limit on number of users from an alternative to technical metering, like CPU, storage, or transaction limits, into its own category.  That enabled me to add the question of whether the customer is a person or an organization at the very top.  If the customer is an organization, the next question is whether the number of users will be limited or unlimited.  The choice of licensing model---evaluation-only, metered, or unmetered---follows either way, for individual and organization licenses.

Schematically, it's a shift from:

> - Is the license for evaluation only, limited by users, metered, or unlimited?
> - (Unless it's an evaluation license:) Does the user get a free trial to start?
> - ...

to:

> - Is the customer an individual or organization?
> - (Organizations only:)  Is the number of users limited or unlimited?
> - Is the license for evaluation only, metered, or unmetered?
> - (Unless it's an evaluation license:) Does the user get a free trial to start?
> - ...

All of this really brings out the cracks in prevailing professional vocabulary for software licensing.  There is still a very well worn path in my mind that wants to call any license for more than one person a "site license".  I don't think I've ever actually advised on a true site license---covering an unlimited number of people at one particular business location---in my legal career.  I'm sure they still get signed.  I wonder what happened when they told all the folks to work from home.

Similar problems afflict "end-user license agreement".  Who's the end user?  The company, because the license says they can only use for their own business purposes?  The individual person, at the company or buying in their own name, because corporations can't actually use software?  We're comfortable with "EULA" because we see it everywhere.  But that doesn't mean it's used precisely where we do.

"Seat", "core"---more of the same story.  And what _exactly_ does "maintenance" get me?  Does it include "support", or is that different, or broader?  It's probably easier to actually whip up specific legal terms than to figure all this out.  Which is fortunately a totally viable option.

It's never going to be perfectly pretty.  For example, there's one messy area where limited or unlimited users and metered or unmetered usage overlap in the new PolyForm Commercial: expansion, or what happens when the customer hits their limits and wants to raise them.  The template gives the options of no prior agreement, commitment to negotiate in good faith, list price, priced as quoted, or priced in an agreed formula.  All of those options could apply as easily to numeric limits on users as numeric limits like transactions per month or installed devices.

Right now the question of expansion mechanism comes up once.  The same answer applies to _both_ the user limit and any technical metering if both are part of the terms.  I suppose those could be independent choices.  I could just ask the same question twice, once for users and once for metering.  But in practice, I do suspect buyer and seller will settle on way to handle expansion across the board.  If people complain, we can always have the website ask the question twice.
