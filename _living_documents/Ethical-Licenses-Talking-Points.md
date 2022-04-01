---
title: Ethical Licenses Talking Points
---

<h2 id="agreement">Not everybody agrees with your personal ethical code.</h2>

Of course not.

If everyone agreed on what is right and wrong, and did their best to do right, there'd be much less reason to write and enforce ethical licenses.

Flying the flag of a particular moral code or concern via license terms can help developers find and attract their community of conscience.  The total number of developers united by that understanding may be much smaller than all the developers in the world.  But it doesn't take that many active, motivated developers to make many projects run.  The median number of developers on a free or open project is one.

<h2 id="proprietary">Just be closed and proprietary, then.</h2>

We know about that option, and we can do better.

There's no tight coupling between published source and broad permission.  It's perfectly possible to publish code for all the world to see, but license under terms that don't permit all uses.  GPL does that.  AGPL does that.  Many other OSI-approved and not-OSI-approved licenses do so.  Creative Commons' NonCommercial, NoDerivs, and ShareAlike licenses do that.

We're aware that releasing code or any kind of work onto the open web means that people might ignore the terms and do what they like.  But we're also aware that enforcement is possible, and that the self-policing policies of devs and institutions can be relied on to various extents.  The same calculus applies to any choice to use GPL or another copyleft license.

<h2 id="hard">Writing ethical rules is very hard.</h2>

So is writing software.

It's all ASCII.  We're just as capable of collaborating on our ethics and their implementations as on our software.  Patches will be shared.  Bug reports will come in.  Forks will occur.  That's all good.

<h2 id="adoption">Your license will harm adoption.</h2>

That's the point.

The function of a rule against unethical use is to prevent unethical use.  If unethical users adopt the software, that's total failure of the most important integration test.

<h2 id="contribution">Your license will harm contribution.</h2>

It may actually improve it.

Developers with serious reservations about working in the open under traditional free-or-open terms aren't willing to check their consciences at the door to check their code into the repo.  Many projects simply aren't happening in the open, or happening at all, without a license choice that unlocks their collaborative potential.  Many projects working out in the open without a license, or with a hastily cobbled-together one, aren't seeing collaboration they would if their ground rules were laid out officially.

On the other hand, encouraging contribution from those who disagree, or taking their code on the sly, without saying anything about the disagreement, is one of the key problems ethical licenses aim to solve.  Developers shouldn't have to subsidize behavior they find abhorrent with free code, and they shouldn't be kept in the dark, wondering whether what they're doing is contributing to wrong.  Many developers looking for ethical licenses today took that risk in the past, and took a hard lesson later, when uses of their work came to light.

<h2 id="uncertainty">Uncertainty about the terms will harm adoption by those who can't tell if their use is allowed.</h2>

Possibly.  It depends on the terms.  And not just the "ethical" terms, but the "meta" terms---what lawyers call "rules of construction"---as well.

Even where terms _do_ prove vague applied to many situations, accepting that dynamic is a valid drafting choice.  Legal drafters _choose_ to use imprecise, general language more often than computer programmers tend to expect.

Dig up a form contract online---commercial license agreement, software as a service, consulting terms, nondisclosure agreement---and search for terms like "reasonable", "prudent", and "efforts".  Those terms are mainstays of legal drafting, but not because they have any specific technical meanings that are easy to apply in every case.

Or look at Creative Commons' NonCommercial license.  Here's how [CC-BY-NC 4.0](https://creativecommons.org/licenses/by-nc/4.0/legalcode) draws its line:

> **NonCommercial** means not primarily intended for or directed towards commercial advantage or monetary compensation.

Then a single, specific exception:

> For purposes of this Public License, the exchange of the Licensed Material for other material subject to Copyright and Similar Rights by digital file-sharing or similar means is NonCommercial provided there is no payment of monetary compensation in connection with the exchange.

That's it.  Not exactly Turing complete, but it works.

You may not like Creative Commons' NonCommercial license.  But it's a functional license that many creators have chosen and successfully enforced.

<h2 id="organizations">Uncertainty about the terms will harm adoption by big organizations whether they'd use unethically or not.</h2>

Yes, but as much because of those companies' inbound licensing policies as because of developers' choice of outbound terms.

Some organizations choose to approve licenses only by company-wide policy, for any and all use cases, without supervision.  Some of those can't reliably tell what they're using software to do.  So many of those organizations ban copyleft, rather than worry about when it will or won't require sharing.  And many of those same organizations also impose ethically informed corporate social responsibility codes of conduct on all their vendors and subvendors.

Some ethically motivated developers have adopted licenses that prohibit not unethical use as such, but use by particular forms of organization, as a proxy for the unethical of behavior they want to stop.  For example, the Peer Production License.

PolyForm's Noncommercial license improves on Creative Commons' approach by including a [special "safe harbor" provision for organizations](https://polyformproject.org/licenses/noncommercial/1.0.0/#noncommercial-organizations).   Predominantly noncommercial organizations, like charities, can rely on that provision to approve the license organization-wide, without worrying about specific use cases.  An ethical license could use a similar mechanism like PolyForm, or do without it, like Creative Commons.

<h2 id="definitions">This violates "for any purpose" and "field of use".</h2>

Many activists have long applied those vague terms to prohibit noncommercial, no-military-use, and other rules.  But they've also bent over backward to avoid reading them to prohibit an ethically motivated rule---copyleft---despite a constant stream of confused hackers dating back to the announcement of the Open Source Initiative and the Open Source Definition.

Arguments from authority, or arguments treating vague, post hoc rationalizations of decades-old projects as holy texts, aren't compelling.

Even permissive free and open source licenses have long got a pass on ethically motivated rules.  Attribution requirements, once used as a form of credit assurance, are a part of nearly every popular license.

<h2 id="osd">The Open Source Definition says what “open source” means, full stop.</h2>

That's an appeal to authority, not an argument.

The Open Source Definition is not a rigorous technical standard, but a political document, drafted in private and later adapted for a marketing effort, after the licenses it then described had already been written.  Ditto "What is Free Software?"

Movements, and words more generally, aren't defined by fiat or technical consensus.  Even lexicographers don't _decide_ what words mean.  They assess and collect usages, distill patterns, and update their dictionaries as usage changes.

The politics of free and open source are hackable.  We're engaging in that process.  We expect others who disagree to, as well.  But the hood is not welded shut.  The phrase "open source" [isn't proprietary to anyone](https://opensource.org/pressreleases/certified-open-source.php).

<h2 id="impose">Who do you think you are to impose your ethical views on others?</h2>

Ethical people.  Moral views held lightly and kept quietly might make us feel righteous, but they don't do anyone else any good.

Some may happen to agree with those best positioned to popularize, commercialize, and implement software.  Some may not care.  But delegating morality to others, by giving them free reign, is no less a moral choice.  When evidence of bad behavior mounts, that moral choice becomes indefensible.  Aiding and abetting is also a crime.  Complacency is complicity.  Plausible deniability is not a _moral_ defense.

Moreover, public software licenses impose nothing.  If others like the software, but don't like the rules that come with it, they can choose other software, or write their own.

<h2 id="infrastructure">You're undermining the neutrality of critical infrastructure.</h2>

Nobody's going to relicense the Internet.

Few doubt that an increasing stock of public domain ideas, standards, and software contribute to good in the world.  But the relevant question is always in the present, at the margin:  Who benefits from cutting-edge code and the work of developed, professional programmers?

Old free software advocates speak nostalgically of a time when all the cool new software was free software.  Open allies even enjoyed superior tooling in some non-software areas, like word processing.  That can happen again.  But free software orthodoxy no longer provides the fire to keep so many hackers pushing the envelope.

We've seen where generalistic, laissez faire theories of social good led, in software licensing and policy more generally.  Not where the starry-eyed, techno-libertarian optimists hoped.  We're not obligated to maintain the dystopia they got instead, or to subsidize it with our life's work.
