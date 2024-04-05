---
description: open source security today is different in kind
tags:
- Open Source
- Security
---

My colleague and longtime [blogroll](/lists/Blogroll) all-star [Heather Meeker](https://heathermeeker.com) posted [a short video on the xz attack and the "open source security" debate](https://www.youtube.com/watch?v=KPvtQLQcP8s).  It's worth watching.  Yet another very welcome example of my hearing about Heather's views "in the open", rather than just one-to-one, when the topic eventually came up over coffee or a meal.

I remember the old "can open source be secure?" debate, too.  But I've been forced to start reminding myself that it's _not_ the same debate as "open source security" today.  Only some of the words are the same.

It's fun to quip that the question used to be whether open source could be secure enough to beat Microsoft without money, and is now, apparently, whether we can count on [Thomas](https://github.com/fr0gger) [ Roccia](https://www.sans.org/profiles/thomas-roccia/) and all the other people Microsoft pays to catch sneaky backdoors in Linux for all mankind. But it's fun because people love rhymes, whether they make sense [or not](https://www.youtube.com/watch?v=xfX8qVlYD6I&t=16s).

Risk = Probability &times; Cost

What are the chances, and how bad would it be?

When Linux was the upstart, the cost of any problem was low, bug or vuln.  Collateral damage was a few punky nerds, who were asking for it, then later a few plucky startups, also asking for it, and at long last some "established" businesses, going unbecomingly cheap to replace UNIX on old "legacy" systems.  Very little was riding on open source.

It's no longer a question of whether open source can avoid vulns enough to get installed enough to _become_ systemically costly when it's compromised.  The Linux base is now large enough to make vulns affecting it some of the costliest conceivable in software.  That is near-enough to naming Linux the top-dollar attack target---the heavy crown that Windows wore alone in the 1990s and early 2000s.

The open security issue is now fundamentally an incumbent's dilemma, not an upstart's challenge.  It's territory to be held, not to be taken.

So it goes with cost.  As for probability, we're all aware that open source has vulns all the time.  Openness, even with GPG reporting keys, makes sure of that.  But there are also important institutional signs.  [Linux can issue its own CVEs now.](https://lwn.net/Articles/961961/)  That is _not_ the press release to make in 2002, on defense against open software security <a href="https://en.wikipedia.org/wiki/Fear,_uncertainty,_and_doubt">FUD</a>.  [Where once Linux ached for attention, feelings are more mixed of late.](https://www.youtube.com/watch?v=tRlVk2nkXzs)  All press isn't good press when you've had more than enough press already.

What we have now are open projects, like Linux, with enormous, high-value user bases.  Some of those, also like Linux, have overcome the collective-action problems and diversified maintenance and development.  But there is no unitary corporate home, as there was in Microsoft for Windows in the 2000s, with clear accountability and financial incentive for security.  Just another mess of collective-action problems, denominated in meaningfully different resource types.

While the work output of researchers like Roccia turn into "open source contributions" in the end, the relationship of security researcher to project is often very different from than of maintainer, or even regular contributor.  The skill sets diverge.  Specialization continues.

It's hard to know how to see all this, because it's not just in _what_ we see, but _how_ we see it.  Are the arguments and cliches of yesteryear---enough eyeballs, security by obscurity, rep for reporting vulns---really useful in the frame of today?  Lessons can be learned from the past.  But I'm not Linux' own past is the book for today.

We might have more to learn from Windows.
