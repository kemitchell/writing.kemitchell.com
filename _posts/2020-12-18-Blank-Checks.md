---
title: Don't Sign Blank Checks
description: a problem of pattern recognition
tags:
- Contracts
- Negotiation
---

Clients who work with me a while get to know my stock quips and catchphrases.  One of those---"Don't sign blank checks."---is going out of date in a hurry.  Especially during a pandemic pushing even more holdout business online.  I'd better write this post before it makes me sound old.

Here's the principle:

> Do _not_ sign contracts with promises to do or provide as much of anything as the other side wants, especially if they're bigger than you.

By analogy: "Don't sign [blank checks](https://en.wikipedia.org/wiki/Blank_cheque)."  For the other side: "This ain't an [all-you-can-eat](https://en.wikipedia.org/wiki/Buffet#All-you-can-eat) buffet."  For the lawyers: "Hunt down hidden [requirements contracts](https://en.wikipedia.org/wiki/Requirements_contract)."  For hackers: "Don't invite a [DoS](https://en.wikipedia.org/wiki/Denial-of-service_attack) attack".

This advice holds even if the contract entitles you to fees or other benefits per usage, like a fixed dollar mount per item or an hourly rate for labor.  At sufficiently large quantities, you'll blow out your cost structure.  You may have to make capacity investments to keep up with new demand, only to see your customer's requirements trail off once you've committed time, money, and effort.  More likely, you'll simply fail to keep up with an unforeseen spike.  The bigger your counterparty, and the bigger they are than you, the more you run the risk of getting rolled.

There's nothing particularly insightful about a warning against open-ended obligations.  Phrased that way, they represent a pretty obvious roll of the dice, just as "blank check" denotes an abnormal, dubiously trusting, you-saw-it-coming form of fate temptation.  The trick is identifying unbounded commitments where they lurk in contract terms, when "we'll give you as much as you want" is _not_ part of discussions between businesspeople and _not_ explicitly called out in clear language.

For example, many big companies' form master procurement agreements obligate vendors to replace personnel the customer objects to, for any reason at all.  If that person's role happens to be account manager, and your company has a dozen of those, you might assume you'll have a replacement to hand.  But even so, you're betting that bad things won't happen, and won't happen at once.  If they do, you'll get stuck scrambling to train, recruit, or contract a new sub.

If you happen to be a small startup of three people without a reserve mountain of cash, you run a higher risk.  _Any_ objection could mean hiring someone you did not intend to hire, or at least not hire yet.  You might accelerate plans and take that person on ahead of schedule ... and get a termination notice soon after, or fail to renew the deal. After all, the customer's already unhappy with at least part of the relationship.  Now you're firing someone you never really wanted to hire in the first place.

Solution?  Add a "reasonableness" limit on the customer's veto, to your obligation to replace, or both.  Put a hard numeric limit on the number of people they can ding, like one per year, or tie it to fees paid.  Or just strike the whole concept of a designated, replaceable person as a whole.  Do they even need a named such-and-such?  Is that relevant for other deals they do on their "standard" form, but irrelevant for yours?  If you're committing to meet standards for your output, like deliverable acceptance criteria, does the customer really need to micromanage _who_ does the work that meets those obligations?

I have never seen a designated-person provision say "we can riffle through your people like fake Tinder profiles".  I've never seen one say "we can have as many new projects leads as we want" in plain Anglaise.  I _have_ seen people-veto provisions misused, abused, and gamed, even viciously.  But primary support contacts, project managers, translators, specialists, and other people worth calling out in contracts are not commodity widgets rolling off assembly lines. We don't tend to think of terms about them as all-you-can-eat commitments. But they can be.

In fact, unbounded obligations don't have to be for anything concrete at all.  They can be for time.  They can be for attention, phone calls, meetings, status reports, corrections, revisions, or copies.  Very frequently in contracts, the problem isn't that the terms entitle one side to as much of any nameable _x_ at all, but rather that we don't know what the terms require in the first place.

Consider the ever popular "you will abide by our policy for such-and-such".  Work on sight.  Information security.  Trademark usage.  Whatever's worth calling a "policy", rather than a schedule or exhibit.  We see these as "you will do whatever's required by our privacy policy".  We see them in terms of "your deliverables will meet our technical standards".  This gets to be a real problem if it's up to the other side to say what that document says, not just at signing but in the future.

If you agree to follow BigCo's policies, and BigCo can change its policies on you during the term of the contract, you have signed a check, written the amount in pencil, and handed it to a gal who has told you she has an eraser.  You have given an IOU and left it up to them what for.  Which is often questionable, legally, just so you know.  As a general principle, the law hesitates to enforce terms if it can't tell what they said when agreement was made.  But that's often a difficult point to make when you've already signed, booked their money, and spent all your leverage negotiating months or years ago, counting on the contract to keep you from getting rolled.

Generalizing, the problem is not just contract terms that can change, or whether those terms are written into the contract or incorporated by reference to some document outside your control.  The risk looms whenever things the other side chooses to do, without safe limits, affect what you have to do in turn.

Take the ever-present "abide by all applicable law" covenant.  If you control what law applies, you're in control of the scope, cost, and complexity of holding up your end of the bargain.  But if the other side can affect the compliance picture---by storing data you don't anticipate on your servers, by using your product in an unanticipated way, by leveraging your work in novel combination with other products, by delegating to people who ought not be trusted---your obligation can become a blank check, quick.  They can wander off into an uncharted regulatory minefield, and it will arguably be on you to keep them from stepping on a bomb, or even to pay them---"indemnify"---for carnage that results.  They will argue it was _your_ job to set up guardrails to keep _them_ out of trouble, like corporate babysitting.

It\'s normal, even expected, to see limits on this kind of compliance-relevant behavior in specific areas, like patent risk.  Many technology contracts allocate the risk that someone _else_ will come along with a patent on what's being bought and sold, and many of those make clear the vendor is _not_ on the hook if the customer belly-flops on a patent-shaped bear trap by combining or applying the goods in a new or ill-advised way.  In my experience, it's fairly common to see lawyers dickering pretty small details of these arrangements, like whether and how documentation for a piece of software affects what does and doesn't count as "anticipated", and therefore the vendor's fault.  I don't know why lawyerdom lacks the same instinct when it comes to other areas that work just the same way, or the category more generally.  To get nerdy for a second, I don't see why we don't discuss how the broad brushes of the contract arts---like [indemnity](https://en.wikipedia.org/wiki/Indemnity) and [force majeure](https://en.wikipedia.org/wiki/Force_majeure)---can and should interact.

Business people get it.  Risk is risk.  But businesspeople don't tend to read every eye-watering term of a long agreement.  They pay lawyers for that.

Don't write blank checks, kids.  When you do, make sure you don't get caught.
