---
title: Impracticability and Responsibility
layout: post
tags:
- Open Source
- Licensing
- SSPL
---

I've had a great time debating the inimitable Van Lindberg, a fellow coder-lawyer, on topics related to the Server Side Public License.  Van and I connected briefly, sometime back, through his writing about open source.  Unfortunately we didn't cross paths again much after that.

Until MongoDB's submission of SSPL.  Then Van made a [thoughtful post](https://www.processmechanics.com/2018/10/18/the-server-side-public-license-is-flawed/) about copyright misuse, contract excuses, and SSPL, as well as some contributions to the OSI license review mailing list.  We've traded I don't know how many public and private e-mails on misuse since, starting with one where I said I'd blog about it, instead.  Alas, the misuse post hasn't happened yet, and it isn't happening now.  Rather, I've a few thoughts here on the rest of Van's post.

There are two large points there: a lament about enterprise-scale compliance with network-copyleft licenses, and a concern about impossibility and impracticability excuses to copyleft rules.  I'll touch them in order.

# Network copyleft ain't that strange.

Van very rightly points out that the right point at which to exercise a license-compliance gatekeeping function for network-copyleft licenses like AGPL and OSL differs from that for traditional, distribution-based copyleft licenses like the GPLs:

> The problem is that the AGPL moves the time when compliance must take place from the time of *distribution*---a discrete, controllable event---to the time when someone *accesses the software over the network.*  It is extremely difficult in an enterprise situation to build an ongoing compliance framework that properly takes this indeterminacy into account.

I think Van overstates that difficulty a bit, and also wonder how it's relevant in discussion of an admittedly very strong network copyleft license.

## Network services don't run themselves.

Running network services happens differently than distributing copies to users to install and run.  But network services do not run themselves, any more than copies distribute themselves.  Services have to be deployed.

As a practical matter, especially in large enterprises, neither manual distribution nor manual deployment happen very often.  Installed software is packaged up or compiled into artifacts and put into a sales or distribution system, be that a sales pipeline or a web server.  Services are put on the machines that will run them, supplemented by public and private dependencies, exposed across the firewall, run, and kept running.

For distribution-based copyleft, the compliance gate isn't usually at the point where an enterprise actually gives a copy to an outside company, but at the point where software is approved for distribution, potentially to many outsiders.  Similarly, for network-copyleft, the compliance gate shouldn't stand at the point where an outsider actually accesses a provided service, via monitoring, but at the point where a service is approved for deployment in such a way that it might be accessed by others.  The complexities also parallel.  Distribution-based copyleft doesn't trigger on _any_ distribution.  Network copyleft doesn't usually trigger on _any_ provision of a network service.

Enterprises adapted to distribution-based copyleft, developing compliance gates for software to be sent outside the firm.  That adaptation was by no means easy, but rode sidecar to existing process for proprietary software licensed into the firm.  Some substantial companies, and units within substantial companies, have yet to manage, and continue to ban open source internally.

To date, the external, competitive stimulus to evolve similar mechanisms for network copyleft has been much weaker, reflecting the smaller, if not small, body of network-copyleft-licensed work with enticing business value.  That is changing, and judging by SSPL, may change more quickly very soon.  But all that aside, AGPLv1 will be old enough to drive pretty soon.

We are definitely seeing change in how strong-copyleft licenses present their requirements.  I'd bet part of Van's frustration seems to come from a direct reading of AGPLv3 section 13:

> Notwithstanding any other provision of this License, if you modify the Program, your modified version must prominently offer all users interacting with it remotely through a computer network...

AGPL section 13 stands out among network-copyleft terms in the extent to which it tries to avoid _looking_ like a rule about running the software.  That is what it is, but it's afraid to say so, because the FSF dislikes the idea that copyright licenses can govern use.  OSL is not.  RPL was not.  SSPL is not.  The use case affected is running the program.  Deployment follows, as the focus of compliance.

## Copyleft loopholes are bugs, not enterprise features.

From the beginning, [copyleft licenses have aimed to make software free for use in free software only](https://www.gnu.org/philosophy/pragmatic.en.html).  And I'd argue that's how each new strong-copyleft license has largely been understood, in practice, by both licensors and licensees, for a few years after its release.

Things change when enough valuable software comes under the new terms that lawyers get summoned in to find loopholes.  Or when trends in software, like software as a service, overtake the terms.  There has never been a perfect free-for-free-software license, but each incrementally stronger copyleft license looks that way, for a moment, when it's flaws aren't yet obvious.

From the developer-activist point of view, exploiting loopholes, especially those that open up due to industry developments, rather than intentional compromises, should be difficult, especially at the scale of large enterprises.  There is always an easier way out: release software you make as free software.  Join the movement and reap the benefits.

From the enterpreneur-consumer point of view, straightjacketing copyleft terms robs the world of releases that producers can only justify on functionally strong copyleft terms.  Let that value flow, and reward those willing to establish processes capable of using it in compliance, in recognition of its value.

From the slow-moving consumer point of view, this conversation, as a whole, fails cost-benefit analysis.  Instead of engaging oodles of lawyer time, only to identify edge cases that only complicate internal decision trees, accept the licenses they're intended, as "free for free software" licenses, recognize that the firm does not create free software, and ban the licenses from the engineering environment.  That is exactly the approach of most model enterprise open source policies, like those published by Google and Heather Meeker.

Another license on enterprise no-fly lists can still be great for open source generally, if it enables activists and corporate producers to share more code, facilitates more free use, and empowers entrepreneurial business willing to navigate its licensing complexities.  There have always been licenses that served less than all of the open source community.  Activists and small businesses have not blocked ever more permissive licenses addressing peculiarly enterprise concerns.  Enterprises and their BSD-school allies cannot fairly ban licenses that likewise don't serve them, but other open source constituencies.

# Impossibility and impracticability don't absolve responsibility.

Van's points on enterprise compliance are plenty legal, in the practice-of-law sense.  Lawyers establish, oversee, and answer for enterprise open source license compliance programs.  But his thoughts on impossibility and impracticability go to legal doctrines, the sea on which legal _practice_ precariously lists.

Like copyright misuse, not particularly clear doctrines.  If you began an analysis of SSPL with a checklist of applicable legal rules, ranked most to least amorphous, copyright misuse, impracticability, and impossibility might be one, two, and three.  Van might have thrown in frustration of purpose and unlawfulness, too.  I will.

In California, I understand that all of these doctrines function as legal excuses from liability for breach of contract.  Breaching contracts is illegal in California, but if you have an excuse, California courts won't make you pay for it.  In addition, each of these excuses gets decided as a question of law, by a judge, rather than as a question of fact, by a jury.

Beyond that, there's not much that seems particularly concrete.  In California, at least, seminal Supreme Court precedent, especially about commercial contracts entered before or during the second world war, theorizes frustration as an excuse grounded in absence of consideration, rendered worthless by changing circumstance, and illegality, impossibility, and impracticability as of a single, different kind.  Opinions routinely cite restatements.

At least theoretically, these excuses could vex any kind of license rule about exercise of exclusive rights of copyright holders that requires or prohibits some action other than exercise of exclusive rights.  For example, typical open source licenses permit free public distribution of the software, a right controlled by copyright, but require that distributed copies retain copyright notices and license terms, or even additional notices of what has been changed.  Often, under the terms, a licensee seems able to make copies of the licensed software without such notices.  But should those copies end up being distributed, the licensee can fall afoul of license rules.

In theory, any license rule that takes away practical permission under copyright law creates potential for an impossibility, impracticability, illegality, or even frustration argument.  Intentions, opportunities, circumstances, and licensee knowledge can change between the time when the licensee clearly exercises an exclusive right of the copyright holder under license---makes the copy, prepares a derivative work, distributes to the public---and the time when the licensee does or does not comply with the rule for that exercise.

But the law does _not_ automatically absolve the licensee of responsibility for changes and mistakes and in the intervening period, or force the licensor to bear that risk.  After all, the purpose of a contract promise is to place the risks of performance upon the promisor.



# Sources

Restatement (Second) of Contracts section 261:

> **Discharge by Supervening Impracticability**
> Where, after a contract is made, a party's performance is made impracticable
> without his fault by the occurrence of an event the non-occurrence of which was a basic assumption on which the contract was made, his duty to render that performance is discharged, unless the language or the circumstances indicate the contrary.

Restatement (Second) of Contracts section 265:

> **Discharge by Supervening Frustration**
>
> Where, after a contract is made, a party's principal purpose is substantially
> frustrated without his fault by the occurrence of an event the non-occurrence of which was a basic assumption on which the contract was made, his remaining duties to render performance are discharged, unless the language or the circumstances indicate the contrary.

Restatement (Second) of Contracts section 266:

> **Existing Impracticability or Frustration**
>
> 1. Where, at the time a contract is made, a party's performance under it is
>    impracticable without his fault because of a fact of which he has no reason to know and the non-existence of which is a basic assumption on which the contract is made, no duty to render that performance arises, unless the language or circumstances indicate the contrary.
> 2. Where, at the time a contract is made, a party's principal purpose is substantially frustrated without his fault by a fact of which he has no reason to know and the non-existence of which is a basic assumption on which the contract is made, no duty of that party to render performance arises, unless the language or circumstances indicate the contrary.
