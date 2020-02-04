---
title: Copyleft Should be Scary
description: if the virus wasn't scary, would we wash out hands?
series: Killjoy
layout: post
tags:
- Open Source
- Copyleft
---

This is one of a series, [_Killjoy_](/series/Killjoy.html), in which I sketch unorthodox and unwelcome solutions to nagging open source problems.

---

Copyleft isn't scary anymore.  That's why it isn't working.

In the 1990s and 2000s, competing, coordinated efforts sought to both oversell and downplay the threat of GPL and other copyleft licenses.  GPL was viral.   Or that was nonsense.  If your engineers cribbed the wrong code, your whole company had to go open source.   Or you didn't, and everything would be fine.  GPL was communism.  GPL defended your freedom.

In the end, team "sleep sound" prevailed over team "be very afraid".  And so the words "GPL is a viral license" sound very 2001 to this day.  But as usual, battling it out from two self-interested extremes didn't yield any harmonious, functional balance.  For those ready to see, we now find ample evidence of a long-running overcorrection.

GPL violation runs rampant.  I've heard engineers estimate that the average Best Buy stocks an armful of devices running Linux, the banner GPL project, with no source code to be had.  And on the industry side, doing my "open source licensing in a nutshell" spiel over and over again, a question keeps coming from the back of the room:

> Thanks for making all this complex license stuff simpler.  But on the copyleft side, really, what's the risk here?  If I break the GPL, is anybody really going to come after us?  What are the real consequences?

Frankly, the risk is very low.  As a general rule, unless the copyleft code you're using comes from a company or a strong-willed hacker with legal experience, you're unlikely to face any meaningful consequences at all.  And certainly not on the kinds of time scales---a few years out---that correspond to personal accountability in business.

How so?

For one, enforcing licenses for published code can't be easy.  Licensors have to find out that someone's using their code without following their rules before they even realize they need to make a decision about how to handle it.  Alas, nothing about open source distribution requires this information be reported back to licensors.  Some organizations invest in monitoring for enforcement, but many more simply release without further thought, or further budget, to follow up on the bargain they chose.

Meanwhile, several well known foundations stewarding big-name projects are falling over themselves to publicly and accountably bind their own hands in license enforcement.  The ["Principles of Community-Oriented GPL Enforcement"](https://sfconservancy.org/copyleft-compliance/principles.html) boil down to a list of _restrictions_ on what GPL enforcers can do.  They are, in effect, elective exceptions to the GPL's terms, weakening the leverage of the licensor against violators.  The ["GPL Cooperation Commitment"](https://gplcc.github.io/gplcc/) amends GPLv2 explicitly, "backporting" a section of GPLv3 that excuses violations into GPLv2, with like effect.  The same organizations often follow formal or unwritten policies that prescribe conciliatory, nonconfrontational enforcement postures, even when the violators are dead to rights for infringement.

Overall, one gathers that these institutions either regret the ongoing existence of copyleft, and would prefer to relicense under permissive terms if only they could, or else worry more about charges of lost purity, prestige, or self-righteousness in their enforcement processes than charges that those processes aren't effective.  Others seem patently allergic to any vaguely confrontational vibe, seeking to maintain open source as a kind of fenced playground where all the colors are bright, all the animals smile, and the young and naive can tramp without supervision.

But reading from the timeline, it's hard to miss that all the mitigations mentioned above follow closely behind the legal debut of Patrick McHardy.  It's difficult to tell exactly what McHardy's been up to, due to the language and confidentiality barriers of the German legal system.  But the crux seems to be that he enforced his GPL terms for contributions to the Linux kernel against GPL violators, all for cash settlements.

As far as I'm aware, no other recent copyleft enforcement effort has been so broadly covered in the media.  No other widespread enforcement effort has been so forceful and effective.  Companies violated the GPL, and McHardy imposed consequences.  And to a point, intentionally or incidentally, McHardy made GPL scary again.

Countermeasures were deployed.  Through formal channels, the amendments to GPL discussed above.  Informally, those looking to calm industry rushed to coin new pejoratives: "copyright trolling", "copyright profiteering", and so on.  All designed to stigmatize McHardy's approach, and McHardy personally, within the technical community.

Eben Moglen, late of the Free Software Foundation, now of Software Freedom Law Center, has publicly argued that those who choose GPL and other copyleft licenses can't achieve widespread compliance by enforcement.  Potential violators far outnumber potential enforcers.  Violations aren't easy or cheap to detect, attack, and resolve.  To succeed, therefore, licensors must convince licensees to comply spontaneously, or if you prefer, to police themselves.

I think he's right.

But wholly soft-hands enforcement fails to account for both sides of human nature, not to mention the strange nature of human beings in business firms.  When someone rear-ends our car, or breaks our window with a baseball, it is one thing to be nice about settling the matter, and quite another to let them off, or to let them postpone resolution indefinitely.  If what we need and want is mostly to feel good about our own valor, piety, and magnanimity, perhaps letting them go with a lecture maximizes our welfare.  But if what we need or want is to be made whole, or to reinforce communal expectations that care will be taken and amends made when it's not, some blend of hard and soft pressure does the most work.

Some people will mind the GPL's rules, even when nobody else is watching, because they've heard the message and believed.  Maybe it was the message of "software freedom".  Maybe it was a more general message about respect for others' terms, whatever they may be.

A nontrivial subset of those very same people can and do violate GPL on the job, in circumstances where their personal scruples count for nothing, or near to nothing.  Perhaps they're simply too overworked to notice.  Perhaps they're overridden by management.  Perhaps the consequences of causing a stir would negatively impact the pay they need to meet life's needs.  Perhaps the time or monetary pressure on the operation require grabbing whatever they can get, wherever they can get it, fast, or else face an ignominious financial end.  Perhaps it's on the list of reasons they secretly plan to quit.

And, of course, there are those who hear and understand the call of copyleft and simply disregard it.  For whatever reason, or none at all.

On the enforcement side, as usual, the danger is confusing means and ends.  Understanding and calm guidance can often win over those who would comply, but didn't know they had to, or didn't know how.  They may win some marginal cases where such individuals have just enough sway within larger organizations to take the day.  They will do nothing to police or induce self-policing by those opposed or indifferent.  If the answer is that the risk is low, compliance will be, too.

To raise the risk, and therefore compliance, GPL licensors, as a mass, must present a credible threat of consequences.  Touch the flame, get burnded.  Violate the GPL, pay a price in excess of your benefit.

Committing to impose any consequences at all doesn't condemn enforcers to slide head first down a slippery slope to draconian oppression.  But quite short of abuse, effective examples can and should be made of even unknowing perpetrators.  Such examples can encourage more awareness in others where it's currently lacking.  Cash-only settlements can and do increase compliance.  If we value the outcomes compliance requires, the effect of those settlements can be valuable indeed.  Especially when the examples can be seen and told publicly.

As we do, so as we speak.  Giving GPL the reputation of Ebola or Lenin on a train isn't accurate, effective, or wise.  But honoring the hard edge of copyleft by reputation---capturing the imperative on users that "reciprocal" and "share alike" carefully dance around---can and will spread the message of copyleft's existence, copyleft's requirements, and the necessity, moral and practical, of honoring copyleft terms.  As a whole, the copyleft camp has no standing to denigrate permissive terms as "pushover licenses" while earning its own reputation for "pushover licensors".  That reputation must change to see results at scale.

In the end, "virus" isn't a bad metaphor for copyleft.  When folks hear it, they get it.  Frequently, I find the same newbies can then rephrase in more caring-sharing terms, if I prompt them.

Rather, the problems with "viral" and similar appellations boiled down to PR strategy.  We didn't want the clean slate of the most popular license of the time, newly wiped by the "rebrand" to "open source", besmirched with the bad word "virus".  We thought we'd do better presenting copyleft as an opportunity, an invitation, rather than an obligation.  Even though an obligation is exactly what it was.

We failed to own up to copyleft.

We were wrong.

Those of us who cared about copyleft, and not just as a relic or a waystation, paid the price.

We pay it still.
