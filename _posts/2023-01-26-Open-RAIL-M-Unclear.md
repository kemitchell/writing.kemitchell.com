---
date: 2023-01-26T18:41:50-08:00
title: Open RAIL-M Is More Unclear Than Scary
description: Does AI devs want to fight abuse, or just not feel bad about enabling it?
tags:
- Licenses
- Machine Learning
- Ethics Licenses
- RAIL
---

Three things strike me about last year's [Open RAIL-M License](https://www.licenses.ai/blog/2022/8/26/bigscience-open-rail-m-license) from [BigScience](https://bigscience.huggingface.co/) and [Responsible AI](https://responsible.ai):

1.  Developers at the cutting edge are adopting licenses with use rules.  Knowledge that's "a thing", and conviction it can be a good thing, were alive and mentally available for them.

2.  Open licensing history repeats again.  The GNU General Public License became "general" when they made a reusable form from GCC-, Emacs-, or other project-specific licenses.  The RAILs are going there.

3.  The particular language of Open RAIL-M leaves me wondering how much of the point was expressing ethical concern as opposed to really going after unethical uses.  Omissions in the terms could just be quirks of implementation.  But there's definitely more that could have been done in the terms.

More on this last with quotes from the license.  Then some thoughts in broader context.

## First Bullet Under "Distribution and Redistribution"

> Use-based restrictions as referenced in paragraph 5 <mark>MUST be included as an enforceable provision by You</mark> in any type of legal agreement (e.g. a license) governing the use and/or distribution of the Model or Derivatives of the Model...

This isn't an obligation to enforce.  It's an obligation to make enforceable.  Passive voice.

Enforceable by who?  Not clear.

I could read it to mean just enforceable _by You_, meaning enforceable by whoever's receiving the license.  Not necessarily by contributors upstream.  Not necessarily by people harmed by misuses.

I could read "You" to link back to "included", not "enforceable", meaning _You_ are the one includes the use restrictions in the legal agreement.  Then it wouldn't say anything about who can or must enforce at all.  By default, legal agreements are enforceable by the parties.  That would mean the downstream developer.  By default, the one who can sue for infringement is the one who owns the intellectual property.  That could be original contributors or follow-on developers, depending on details of development and use.

Software Freedom Conservancy's currently suing Vizio.  They argue the share-source rule of GNU GPL lets them do that, rather than talking the developers into suing, because they bought TVs that should have come with more source code.  One way of seeing the legal question there is whether Conservancy was an "intended third-party beneficiary" of the contract granting the license.  That would enable Conservancy to enforce the terms, even though they weren't giving or receiving the license, as a "party" to the license agreement.  Interesting line.

We could ask a similar question about Open RAIL-M.  If BigScience puts out a new model, OtherCorp improves it, and some jerk uses OtherCorp's fork to harass me online, can _I_ sue the jerk for violating the use restrictions?  Can BigScience?  Does OtherCorp _have_ to sue or threaten to sue?  If they don't, can BigScience sue OtherCorp, for failing to enforce the terms?

I don't know.  Unless this was purposely vague, it should be made clearer.  In GPLv4 and some new Open RAIL-M.

## Last Sentence in "Use-Based Restrictions"

Looking for clarity further on in the license:

> You shall require all of Your users who use the Model or a Derivative of the Model to comply with the terms of this paragraph (paragraph 5).

Paragraph 5 is more about how you have to mind the use restrictions.

Like the terms above, this states two propositions of an implied syllogism, but not quite the conclusion:

1.  To use the model, users have to agree to your contract terms.

2.  You have to include the use restrictions in your contract terms.

3.  <mark>Therefore, you have to make sure that users agree to the use restrictions.</mark>

If we added "agree to" before "comply" in the quote above, we'd have the conclusion explicitly.  The word "agree" reliably whispers "contract" between lawyers' ears.  The words "require" and "comply" do not.  Considering how important this is, I'd want it solid.

That would still leave the must-enforce question.  As it's written, does "require to comply" mean calling out violators, threatening to sue them, or even actually suing them, for past harm or to make them stop?  I don't know.  I could argue it both ways.

Overall, this bit isn't answering questions left open above.

## Weaker and Stronger

Credible legal threat alone can work surprisingly well as deterrent.  It does some work getting rules actually followed.  At least by those who can be found out and held to account in a functioning system, legal or reputational.  At least by those who, knowing their vulnerability, read projects' terms and recognize credible threats in them.

Developers choosing Open RAIL-M necessarily give up some control just by releasing their work.  No license, including Open RAIL-M, can return all that control to them.  These are practical effects of putting things on the Internet.  They've grown in magnitude as the Internet itself has grown.

Developers know this.  They know terms in a text file don't bring down bolts of lightning.  They know some people don't read or care about terms.  They know some organizations don't, either.  And they know lawyers cost, and at best can only sue for what scallywags have to give.  That might be little more than a promise to stop violating the license, on judge's order and pain of contempt, cash value nil.  Lawyers take cash.

The fact that legal terms aren't always effective doesn't mean they aren't ever worthwhile.  The fact that legal terms sometimes work doesn't mean they're always wise.

Developers choosing Open RAIL-M are shooting for some outcome between flawless moral dictatorship of Attachment A and giving every would-be abuser legal comfort of [MIT terms](https://spdx.org/licenses/MIT).  But where between, more precisely?  And is that where things will land, in practice?  As the first big shots in the dark, the RAIL licenses stand to teach us a lot, by success by failure, accuracy and precision.

Part of what we could shoot for with an "ethical license" is mere personal escape from the nagging thought that releasing our work arms assholedom globally.  We could also want social absolution for the same---to be held blameless in the eyes of others, in addition to our own.  Our calculations could end at time of release, when we've got everyone feeling moral _enough_ to go ahead and `git publish`.  I could write a license for one or all of these purposes.  I think it'd be weaker than Open RAIL-M today.

We could also want more from a license.  We could take more responsibility for discouraging predictable misuses.  We could prescribe a more proactive role for developer peers coming after us.  We could tie our moral self-worth purely to results, not stated intentions.  I could write a license along these lines, too.  I think it would be stronger than Open RAIL-M today.

That license could clearly require binding users to use restrictions.  It could require downstream developers to enforce their terms, and allow upstream contributors to do so indirectly.  It could mandate passing up word of suspected violations.  It could make crystal clear that those affected by abuses, not just developers sorry to hear about them, can enforce the use-restriction terms.

Even just as words in a `LICENSE` file, before anyone does or doesn't send a nastygram, that kind of license could summon greater accountability.  It could pose a greater credible threat.  That could have the effect of deterring more broadly and effectively.  Completely independent of what the use restrictions say.  As a matter of the base legal framework.

## Stepping Back

We foresee downstream contribution.  We can foresee downstream abuse.  With less imagination all the time.  Both are already happening.  At pace.

Amidst all that, Open RAIL-M feels more acknowledgment than battle cry.  Perhaps that alone is progress in our trade.  But if the problem's truly ethical, and at current-day Internet scale, perhaps also a sorry little data point on our virtue, in collective and absolute terms.

The Net is what we make it, because somebody makes it that way.  But so often, the Net still feels feels like something happening _to_ us.  Morally and socially, we haven't grow up to it yet.

It's like a puppy our parents brought home.  We promised to walk it, but we're still getting pulled around.  It is starting to bite a lot of neighbors and neighbor dogs.
