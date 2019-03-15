---
title: Starter Kit for Ethical Software Subcommons
description:
layout: post
tags:
- Open Source
- Licensing
- Ethics
---

This post offers a practical toolkit for seeding a _subcommons_ of open software, responsive to ethical concerns shared by some, but not all, open software developers.  The toolkit generalizes the approach of software freedom activists, which led to free software and eventually open source as we now know it.  That approach could be reapplied for ethical AI software development, social justice, economic liberty, or other schools of ethical thought large or passionate enough to support software development commons, adjacent and additive to open source's particular brand of permissiveness.

Free software and open source ideologies share a commitment to a particular kind of [laissez-faire](https://en.wikipedia.org/wiki/Laissez-faire).  They accept rules, especially [copyleft](https://www.copyleft.org/) rules, that prohibit the use of open software to create closed software.  But they join in rejection of other rules, in licenses or otherwise, that prohibit the use of open software by particular kinds of people and companies, like for-profit businesses or specific governments, or for other kinds of uses, like war or stem cell research.

Many developers are glad to contribute software without restricting any use.  But some of the same developers hesitate or refuse to contribute other kinds of software under such terms.  Frequently, they fear that particular software lends itself to unethical uses, either because of what the software does, or because of conditions in the market, government, or society more generally.  Currently, broad collaboration by developers on such projects remains largely closed.  An ethical subcommons can provide more of the benefits of open collaboration, without asking contributors to check their ethics at the door.

## Describe acceptable conduct.

Assemble a representative group of conscience community members and write an _external code of conduct_ describing acceptable use of community software.

Your first choice will be how to describe acceptable conduct.  There are three basic principles to choose from:

1. _Blacklist_:  Everything which is not forbidden is allowed.  Write a list of actions your ethics prohibit.  This will likely be the most common, and the easiest to begin writing.
2. _Whitelist_:  Everything which is not allowed is forbidden.  Write a list of actions your ethics permit.  This approach will likely reduce uncertainty and prevent rule-gaming better than a blacklist.
3. _Greylist_:  A hybrid of Blacklist and Whitelist.  Avoid this approach if at all possible.  It is much harder to write.

Comprehensiveness in ethics is hard.  Consider collecting example uses, permitted and prohibited, and checking them methodically against your external code of conduct.  Does the written code reach the right results in each case?  Will those results be clear to those who disagree on what is or is not ethical?

You should also include a clear rule about how to handle cases where application of the code to specific conduct isn't clear.  For a blacklist code, that likely means erring on the side of permission.  For a whitelist, it likely means erring on the side of prohibition.  Depending on your group's confidence in its written rules, the reverse might also work best.  Give it thought.

When your code of conduct is written, use a method to approve its text that ensures everyone feels their conscience expressed in the terms.  Document that process, and its result, publicly.  No one will feel perfectly confident in the code.  Perfection isn't possible.  Understand that the task is reducing what's _right_ into words that _work_, not absolute truth.  Be pragmatic.

Next, consider whether your community should also adopt an _internal code of conduct_ describing acceptable behavior among those developing software.  You may choose to write your own, or to adopt a generic one.  Consider Blacklist, Whitelist, and Greylist again.

Publish your code or codes of conduct under distinctive, arbitrary names, suffixed with a plain description of your ethical community.  You might name a code after the place where you meet to discuss or finalize the code, a character from fiction, or an everyday object.  You might choose a category of common objects, like gemstones or musical genres or archaeological sites or planets, and name your code for particular members of that category.  Use different categories for internal and external codes, if you have both.  Avoid trademarks and names of well known living people.  A few examples:

- Tiger's Eye Statement on Ethical AI
- Green Bluff Code of Use Sovereignty
- Hunter's Point Principles of Social Justice
- Switchback Code of Conduct

If your community grows, expect to find problems with your codes of conduct, internal and external.  As those problems add up, you may choose to reconvene your group, to write new or updated code, or to convene an entirely new group.

If you publish new or revised codes of conduct, keep the same ethical description, but change the distinctive name.  For example:

- Amethyst Statement on Ethical AI
- Blue Stream Code of User Sovereignty
- Dogtown Principles of Social Justice
- Frontage Road Code of Conduct

Do not use numerical [versions](https://semver.org/) or [editions](https://reviewersedition.org/).  Use distinctive names that those in and around your community can recognize at a glance.  Your goal is to develop a common, natural names vocabulary of codes.

## Pick your enforcement hooks.

If all you do is publish software on the Web with copies of your codes of conduct, others will be free to take your software and ignore your codes.  To protect your and others' abilities to contribute, confident in good conscience, your subcommunity must be ready, willing, and able to enforce its codes.

Enforcement breaks down into several parts:

1. _Policing_: Monitoring of behavior to identify questionable conduct.
2. _Adjudication_: Deciding whether questionable conduct falls outside code.
3. _Remediation_: Taking action to stop, punish, and redress prohibited conduct.
4. _Administration_: Following through on that action, to ensure it's effective.

If any part fails, and failure becomes widely known, enforcement will fail.

Open software communities can connect their codes to practical needs and consequences in several places.  In other words, software commons can "hook" their codes into community behavior in several ways.

### License Terms

Your community might choose to write its external code, internal code, or both, into the public license terms it applies to the software it creates.

For example, an ethical AI subcommons might choose to apply [The Blue Oak Model License 1.0.0](https://blueoakcouncil.org/license/1.0.0) with the following additional section:

> ## Ethical AI
>
> You must exercise your license only in accordance with the Tiger's Eye Statement on Ethical AI published at <https://exmaple.com/tiger-eye>.

Note that this differs from the approach of many software freedom activists.  Their organizations, notably the [Free Software Foundation](https://fsf.org), don't reference external codes of conduct in their terms.  Instead, they translate their ethical views into legal rules, in the vocabulary of copyright, patent, or both.

I do not encourage new communities to adopt that approach.  The translation step from ethical language to legal language introduces confusion, errors, and costs.  The community becomes unable to interpret or evolve its terms without legal intermediaries.

Legal intermediation is one thing.  Legal advice is quite another.  License terms do not enforce themselves.  If you choose to hook your ethical code into license terms, read up on the history of GPL and other copyleft license enforcement.  Publications from [FSF](https://fsf.org/), [SFC](https://sfconservancy.org/), [SFLC](https://softwarefreedom.org/), [gpl-violations.org](https://gpl-vioations.org/), and private companies like [Artifex](https://artifex.com/).  If at all possible, consult with a lawyer.

More generally, be aware that relying upon license terms is relying upon the legal system, and by extension the government.  Illegal codes, codes that condone or encourage illegal behavior, or codes that go against public policy, may not be enforceable through courts or other administrative bodies.

### Development Process

Your community might choose to limit, sanction, or exclude those who violate its ethical codes within the development process.

For example, developers might choose to ignore support and feature requests from those who ignore the code of conduct, or to use moderation tools to exclude them from repositories and bug trackers.  They might remove or demote developers in violation from positions of power or prestige.  They might remove mention of those members from public marketing and other materials for relevant projects.

### Community Forums

Healthy communities typically expand beyond the development process and its infrastructure to social channels, events, and institutions.  Your community might enforce its codes by limiting, sanctions, or excluding violators from those forums, as well.

### Community Opportunities

Commercial and grant-based opportunities may spring from your subcommons.  Your community might enforce its codes by limiting, sanctioning, or revoking access to those opportunities, by formal or informal sanction.

## Communicate your standards.

The more prominent your community can make its ethical codes, and the more explicit it can make their enforcement mechanisms, the better.  Consider your `README`, `CODE_OF_CONDUCT`, and `LICENSE` files carefully.  Each one is a medium for expressing your terms of participation and benefit.  Consider going beyond those media to bring rules, expectations, and consequences to the attention of newcomers in other ways.

Expect newcomers to expect the laissez faire of permissive open source.  That is the predominant mode of open software collaboration.  You will be disappointing that expectation for many.  Those disappointed by your ethics are not the ones you are trying to welcome as users or contributors.  But laying traps for the unwary will not ingratiate you to the broader community, or work to establish your community's reputation for honesty and consistency, among those who share your ethical views or especially those who do not.

## Accept responsibility.

Enforcing an ethical code in any way means discrimination.  The group is making value judgments, and applying those value judgments to others.  You will see your discrimination as ethically positive.  Others will see it as ethically negative.

Bear in mind that some kinds of discrimination go against rules of the government---the law---as well as other institutions that matter in our lives.  Those organizations also have enforcement mechanisms, to which you may be subject.  Be prepared to adjust your standards and enforcement mechanisms to avoid conflict, or to accept or mitigate consequences that conflict.

## Pave a path to redemption.

Everyone fucks up.  You have fucked up, and you will fuck up again.  Your allies have fucked up, and will fuck up again.  The new allies you hope to welcome to a new software commons will fuck up.  The new allies you _don't_ hope to welcome to a new software commons will fuck up.

There is no universally accepted policy or ethics of punishment.  But broadly speaking, theorists often break justice down in terms of retribution and rehabilitation, restoration and deterrence.  Different communities emphasize aspects differently, in their choice and application of punishments.  Different members of singular communities emphasize aspects of the same punishments differently.

A small community of fallible individuals, looking to grow, can only shrink by systematically reducing its population with each inevitable infraction.  Consider the times when you have felt unjustly punished or excluded.  As you make choices about codes of conduct, hooks, and details of enforcement, set aside time to think about how collective righteousness might run amok.

Ensure that choices reflect respect for the human condition, its boundless capacity for both wrongdoing and reform, and not just that part of the human condition that include the specific conduct your community wants to promote or prohibit.  Consider your community's ability to seed resignation and resistance, rather than convincement.

## Fly your flag.

With sufficient moral resolve, and sufficient humbling self-doubt and reflection, you earn the right to fly a moral flag.  Make your presence, your conviction, and your compassion well known.

If others cannot find you, they cannot join you.  If others cannot join you, your commons will not grow.

