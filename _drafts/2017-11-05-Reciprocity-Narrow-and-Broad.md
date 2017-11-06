---
title: Reciprocity, Narrow and Broad
description:
layout: post
tags:
- Open Source
- Sustainability
- Licensing
---

When indie open source software maintainers reach out about the imbalances wearing them down, their visions of a better deal often boil down to reciprocity, a relationship that goes both ways.  That makes perfect sense.  If the general problem with indie open source today is that it's one-way---too much give, too little get, for maintainers to remain engaged---then the general solution is requiring users to give something back.

As it turns out, open source has long history in requiring reciprocity from users, using copyleft licenses like the GNU GPL.  But for ideological and historical reasons, those tools aren't actually billed as reciprocity, but as yet another protection for users.  That hasn't stopped maintainers and companies from picking the very same licenses,precisely because they afford direct and indirect reciprocity benefits that help make a project sustainable.

It's time to bring that quiet divide within copyleft, that gap between appearance and reality, rhetoric and practice, out into the open.  It's time to start talking about what reciprocity means in open source, and which definitions of it, if any, give us leverage on the sustainability problems plaguing the community.

I see potential.  But realizing it will mean decoupling copyleft, as a tool and a concept, from the notion that software maintainers have to or ought to be selfless volunteers, divorced from the market, benefiting by copyleft in sufficient measure only as users of other maintainers' projects.  It means admitting that copyleft has failed, as a self-styled competitor to proprietary software.

---

Activists wrote the early copyleft software licenses, like the GNU GPL, to protect what they saw as fundamental software freedoms: to run, read, change, and share software.  That meant contending not just with intellectual property law, which required securing permission to work with source code they had, but also with confidentiality, which kept them from getting the source code they wanted to work with in the first place.  To counter intellectual property law, copyleft licenses give everyone broad permission to work with source code.  To counter confidentiality, copyleft licenses add conditions that require sharing source code and permission to work with it.

Consider a quintessential example of GPL-style copyleft in action.

If Able publishes GPL software to a repository, and BetaCo patches it and makes it available to Charlene, then the GPL requires BetaCo to give Charlene source code and permission, under the GPL, for the whole program, including their patch.  The GPL gives Charlene permission to send the patched software to whomever she likes, or even publish it.  For example, Charlene is free to send it to Able.  On receiving the patched software, under the GPL, Able is free include and share BetaCo's patch as part of his own version.

![Able-BetaCo-Charlene]({{ site.url }}/images/able-betaco-charlene.svg)

But the GPL doesn't _require_ Charlene to share with anyone, even Able.  Rather, the GPL only requires that BetaCo give Charlene as much software freedom---source and permission---as it got from Able.

## Copyleft?

Historically, open source software communities, and open source licensing, have implemented one specific kind of "reciprocity": copyleft.  Copyleft means requiring users of open source software who develop or build on that software to share their work, at least some of the time, by sharing source code under the same license terms.

Activists wrote the early copyleft software licenses to protect what they saw as fundamental software freedoms: freedoms to run, read, change, and share software.  That meant contending not just with intellectual property law, which required securing permission to work with source code they had, but also with confidentiality, which kept them from getting the source code they wanted to work with in the first place.  To counter intellectual property law, copyleft licenses give everyone broad permission to work with source code.  To counter confidentiality, copyleft licenses add conditions that require sharing source code and permission to work with it.  Those conditions make copyleft licenses more complex than purely permissive licenses, which only address permission under intellectual property law.

Activists did _not_ write the early copyleft software licenses to make users give back to maintainers.  The licenses they wrote were about passing freedom forward, not passing contributions or other benefits back.  In the authors' minds, maintainers would be volunteers giving generous gifts of free software.  Part of their generosity would be giving good software, but another part would be helping to protect software freedom for all, using copyleft licenses, to help bring about a day when all software would be free.

That's not to say they didn't see maintainers benefiting.  But their benefits would be indirect.  One free software project's maintainer would be another free software project's user.  But as it turns out, in practice, protecting users' software freedom often means maintainers end up receiving source code for improvements to their own projects, too.

The fact that the GPL and similar licenses were written to protect users did not stop maintainers, and especially companies developing open software, from using copyleft licenses for commercial and other benefits.  One of the benefits of publishing software under a copyleft software license is that you become the only one with legal permission to ignore the copyleft conditions of your license.  After all, if you own the intellectual property being licensed---copyright and patent rights---you don't need a license from yourself to make use of it.  And you can always give specific people or companies licenses under _different_ terms.
