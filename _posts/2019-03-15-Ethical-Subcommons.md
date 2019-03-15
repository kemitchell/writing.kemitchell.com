---
title: Ethical Subcommons Starter Kit
description: bringing openness to software of moral concern
layout: post
tags:
- Open Source
- Licensing
- Ethics
---

This post offers a practical toolkit for seeding a _subcommons_ of open software, responsive to ethical concerns shared by some, but not all, open software developers.  The toolkit generalizes the approach of software freedom activists, which led to free software and eventually open source, of which software freedom is now a subcommons.  That approach could be reapplied for ethical AI software development, social justice, economic liberty, or other schools of ethical thought large or passionate enough to support their own software development commons, adjacent and additive to open source's absolutist permissivity.

Open source ideologies share a commitment to a very specific kind of [laissez-faire](https://en.wikipedia.org/wiki/Laissez-faire).  They avoid but abide [copyleft](https://www.copyleft.org/) rules that prohibit the use of open software to create closed software, as a token of historical debt.  But they join in flat rejection of other rules, via licenses and otherwise, that prohibit the use of open software by particular kinds of people and companies, like for-profit businesses or specific governments, or for particular kinds of uses, like war or stem cell research.

Many developers are glad to contribute software without restriction.  But some of the same developers hesitate or refuse to contribute other kinds of software under such terms.  Frequently, they fear that particular software lends itself to unethical uses, either because of what the software does, or because of market, government, or broader societal conditions.  Currently, collaboration by developers on such projects remains largely closed.  An ethical subcommons can provide more of the benefits of open collaboration, without asking contributors to check their ethics at the door.

## Describe acceptable conduct.

Assemble representatives of your conscience community and write an _external code of conduct_ describing acceptable use of community software.

Your first choice will be how to describe acceptable conduct.  There are three basic structures to choose from:

1. _Blacklist_:  Everything not forbidden is allowed.

   Write a list of actions your ethics prohibit.

   This will likely be the most common, and the easiest to begin writing.

2. _Whitelist_:  Everything not allowed is forbidden.

   Write a list of actions your ethics permit.

   This approach will likely reduce uncertainty and prevent rule-gaming better than a blacklist, but tend to exclude more participants.

3. _Greylist_:  A hybrid of Blacklist and Whitelist.

   Avoid this approach if at all possible.  It is much harder to read and write.

Comprehensiveness in ethics is hard.  Consider collecting example uses, permitted and prohibited, and checking them methodically against your external code of conduct, like a test suite.  Does the written code reach the right result in each case?  Will those results be clear under the code to those who do not agree as a matter of conscience?

You should also include a clear rule about how to handle cases where application of the code to specific conduct isn't clear.  You have a few choices there, too:

1. _Failopen_:  When the code isn't clear, the use is permitted.

   Consider Failopen first for Blacklist codes.

2. _Failsafe_:  When the code isn't clear, the use is prohibited.

   Consider Failsafe first for Whitelist codes.

3. _Delegation_:  When the code isn't clear on a particular use, the question goes to an established body, whose decision making process, succession rules, and transparency processes are firmly established in advance, and accountable.

   Do not understatement the difficulty of creating a quasi-judicial body.  Delegation is never simple.

Depending on your group's confidence in its written rules, you may instead prefer Failopen for a Whitelist code, or Failsafe for a Blacklist code.  Give it thought.  These are frameworks for thought, not proven prescriptions.

It is good to have a rule about ambiguity.  Succeed, and you'll need one.  But such rules also help to relieve pressure on drafters to speak with technical precision, or logical correctness.  Force-fitting the standards and language of engineering, science, mathematics, or logic onto ethical quandaries does not transmute them into technical problems.

When your code of conduct is written, use a method to approve its text that ensures everyone feels their conscience expressed in the work product.  Document that process, and its result, publicly.

No one will feel perfectly confident in the code.  Perfection isn't possible.  Understand that the task is reducing what's _right_ into words that _work_, not absolute truth.  Be pragmatic.  You are practicing applied ethics, or ethical engineering, not ethics more generally.

Next, consider whether your community should also adopt an _internal code of conduct_ describing acceptable behavior among those developing software.  You may choose to write your own, or to adopt a generic one.  Consider Blacklist, Whitelist, and Greylist again.

Publish your code or codes of conduct under distinctive, arbitrary names, suffixed with a plain description of your ethical community.  You might name a code after the place where you meet to discuss or finalize it, a character from fiction, or an everyday object.  You might choose a category of commonly known names, like those of gemstones or musical genres or archaeological sites or planets, and name your code after particular ones.  A few examples:

- Tiger's Eye Statement on Ethical AI

- Green Bluff Code of User Sovereignty

- Hunter's Point Principles of Social Justice

- Switchback Code of Conduct

Use different categories for internal and external codes, if you have both.  Avoid trademarks and names of well known people.

If your community grows, expect to find problems with your codes of conduct, internal and external.  As those problems add up, you may choose to reconvene your group, to write new or updated code, or to convene an entirely new group.

If you publish new or revised codes of conduct, keep the same description, but change the distinctive name.  For example:

- Amethyst Statement on Ethical AI

- Blue Stream Code of User Sovereignty

- Dogtown Principles of Social Justice

- Frontage Road Code of Conduct

Do not use numerical [versions](https://semver.org/) or [editions](https://reviewersedition.org/).  Use distinctive names that those in and around your community can recognize at a glance.  Your goal is to develop a common, natural names vocabulary of codes.

Take inspiration from the [Rochdale Principles](https://en.wikipedia.org/wiki/Rochdale_Principles), the [Bermuda Principles](https://en.wikipedia.org/wiki/Bermuda_Principles), and similar efforts.  There have been many, perhaps some in your area of concern.

## Pick your enforcement hooks.

If all you do is publish software on the Web with copies of your codes of conduct, others will be free to take your software and ignore your codes.  To protect your and others' abilities to contribute, confident in good conscience, your community must be ready, willing, and able to enforce its codes.

Enforcement breaks down into several parts:

1.  _Policing_: Monitoring of behavior to identify questionable conduct.

2.  _Adjudication_: Deciding whether questionable conduct falls outside code.

3.  _Remediation_: Taking action to stop, punish, and redress prohibited conduct.

4.  _Administration_: Following through on that action, to ensure it's effective.

If any part fails, and failure becomes widely known, enforcement will falter.  Your code becomes a dead letter, inspiring to those who already agree, but not effective with those who do not.

Open software communities can connect their codes to practical needs and consequences in several places.  In other words, software commons can "hook" their codes into the commons business in several ways.

### License Terms

Your community might choose to write its external code, internal code, or both, into the public license terms it applies to the software it creates.

For example, an ethical AI subcommons might choose to apply [The Blue Oak Model License 1.0.0](https://blueoakcouncil.org/license/1.0.0) with the following additional section:

> ## Ethical AI
>
> You must exercise your license only in accordance with the Tiger's Eye Statement on Ethical AI published at <https://example.com/tiger-eye>.

Note that this differs from the approach of many software freedom activists.  Their organizations, notably the [Free Software Foundation](https://fsf.org), don't reference external codes of conduct in license terms.  Rather, they translate their ethical views into legal rules, in the vocabulary of copyright, patent, or both.

I do not encourage new communities to adopt that approach.  The translation step from ethical language to legal language introduces confusion, errors, and costs.  The community becomes unable to interpret or evolve its terms without legal intermediaries.

Legal intermediation is one thing.  Legal advice is quite another.  License terms do not enforce themselves.  If you choose to hook your ethical code into license terms, read up on the history of GPL and other copyleft license enforcement.  Review publications from [FSF](https://fsf.org/), [SFC](https://sfconservancy.org/), [SFLC](https://softwarefreedom.org/), [gpl-violations.org](https://gpl-vioations.org/), and private companies like [Artifex](https://artifex.com/).  If at all possible, consult with a lawyer.  Ask them about rigorous enforcement, but also about flexibility, to accommodate as codes and collective understanding evolve.

More generally, be aware that relying on license terms is relying on the legal system, and by extension the government, even if nobody ever actually goes to court.  Illegal codes, codes that condone or encourage illegal behavior, or codes that go against public policy, may not be enforceable through courts or other administrative bodies.  If enforcing any part of your code through legal terms is patently impossible, other hooks may still be available.

### Development Process

Your community might choose to limit, sanction, or exclude those who violate its ethical codes within the development process itself.

For example, developers might choose to ignore support and feature requests from those who break the code of conduct, or to use moderation tools to exclude them from repositories and bug trackers.  They might remove or demote developers in violation from positions of power or prestige, such as core contributor titles.  They might remove mention of those members from public marketing and other materials for relevant projects.

### Community Forums

Healthy communities typically expand beyond the development process and its infrastructure to social channels, events, and institutions.  Your community might enforce its codes by limiting, sanctioning, or excluding violators from those forums, as well.

### Community Opportunities

Commercial and grant-based opportunities may spring from your subcommons.  Your community might enforce its codes by limiting, sanctioning, or revoking access to those opportunities, formally or informally, as by reputation.

## Communicate your standards.

The more prominent your community can make its ethical codes, and the more explicit it can make their enforcement mechanisms, the better.  Consider your `README`, `CODE_OF_CONDUCT`, and `LICENSE` files carefully.  Each one is a means to convey terms of participation and benefit.  Consider going beyond those channels to bring rules, expectations, and consequences to the attention of newcomers in other ways.

Expect newcomers to expect the laissez-faire of permissive open source in turn.  That is the predominant mode of open software collaboration today.  You will be disappointing that expectation for many who happen on your work.

Those disappointed by your ethics are not the ones you are trying to welcome as users or contributors.  But laying traps for the unwary will not ingratiate you to the broader commons, or work to establish your collective reputation for honesty and consistency, either among those who share your ethical views, or especially among those who do not.

## Accept responsibility.

Enforcing an ethical code in any way means discrimination.  The group is making value judgments, and applying those value judgments to others.  You will see your discrimination as ethically positive.  Others will see it as wrong.

Bear in mind that some kinds of discrimination go against rules of the government---the law---as well as other institutions that matter in our lives.  Those organizations also have enforcement mechanisms, to which you may be subject.  Be prepared to adjust your standards and enforcement mechanisms to avoid conflict, or to accept or mitigate consequences when you contravene others' codes.

Conscientious objection is living a bit of Hell to bring home a little closer to Heaven.  Inform your conscience, know what you're getting into, and make a concerted choice.  Accidental martyrdom is rarely so inspiring, or so effective.

## Pave a path to redemption.

Everyone fucks up.  I've fucked up.  You have fucked up.  We will both fuck up again, and badly.  Your allies have fucked up, and will fuck up again.  The new allies you hope to welcome will fuck up.  The new allies you _don't_ hope to welcome will fuck up, too.

There is no universally accepted policy or ethics of punishment.  But broadly speaking, theorists often break justice down in terms of retribution and rehabilitation, restoration and deterrence.  Different communities emphasize aspects differently, in their choice and application of punishments.  Different members of singular communities emphasize aspects of the same punishments differently, after they've been meted out.

A small community of fallible individuals, looking to grow, can only shrink by systematically reducing its population with each inevitable infraction.  Consider the times when you have felt unjustly punished, excluded, and written off.  As you make choices about codes of conduct, hooks, and enforcement, set aside time to think about how righteousness might run amok.

Ensure that choices reflect respect for the human condition, its boundless capacity for both wrongdoing and reform, and not just that part of human behavior that includes the conduct your want to promote or discourage.  Consider your community's ability to seed resignation and resistance, rather than convincement.  Minimize it.

## Fly your flag.

With _both_ moral resolve _and_ healthy sense of personal and collective fallibility, you earn the right to fly a moral flag.  Make your presence, your conviction, and your compassion well known.  But know that true belief will not suffice, at least in software.

If others cannot find you, they cannot join you.  If others cannot join you, your commons will not grow.  If your commons does not grow, nothing will come of it worth defending.  Conversely, the simple act of putting code on the Web, under any terms whatsoever, empowers those conditioned to trample their limits to test yours.  But experience shows a great deal of good _can_ come of it, costs and benefits considered together.

Go grow a commons.  Let conscience shine through everything you do.
