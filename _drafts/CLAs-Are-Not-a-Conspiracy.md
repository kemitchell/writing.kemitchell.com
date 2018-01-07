---
title: CLAs are Not a Conspiracy
layout: post
tags:
- Open Source
- Licensing
---

Earlier this week, I read Ben Balter's [_Why you probably shouldn't add a CLA to your open source project_](https://ben.balter.com/2018/01/02/why-you-probably-shouldnt-add-a-cla-to-your-open-source-project/).   You should read it, too.

I really respect Ben, his writing, and his work at GitHub.  But I fundamentally disagree with his post, on points general and specific.  I'd like to give another point of view.

As I understand Ben's argument:

-  Open source stewards should put attracting contributors first.
-  CLAs increase friction for new contributors.
-  Plenty of open source projects seem to get by without CLAs.
-  So by default, don't use them.

I'll quibble with each link in that chain, as well as the overall conclusion.  But I also want to address some themes cutting across Ben's discussion:

- Lawyers are biased against, or incapable of, practical advice on open source licensing and community matters.
-Programmers at steward-companies should regard advice about company risk with suspicion, and push back against it on behalf of outside contributors.
- CLAs are mostly cover-your-ass maneuvers for steward-companies.
- GitHub's recently updated site-wide terms of service better solve the underlying problem.

We see differently on those underlying points, too.  Which partially explains why we come to different conclusions.

How do I see things?

- Recording contributor license grants solves legal problems.
- Contributor licensing needn't cause high friction.
- Open source should teach contributor licensing, not hide it.
- It's very hard to put contributor licensing off.
- So by default, set up a process from the get-go.

## Your lawyer is not the enemy.

I'm a lawyer, and I give lots of advice on open source licensing.  The most disturbing part of Ben's post was its portrait of lawyers as narrow-minded specialist-automatons who can't see the whole open source picture, aren't supposed to, and ought to be avoided, resisted, and overridden accordingly.  Even when they're trying to look after the company cutting devs' checks.

Ben writes:

> ... legal's role (and area of expertise) is to advise business owners how to minimize risk, not how best to run a successful open source project (the maintainer's area of expertise)

I respectfully disagree.

Any transactional lawyer that takes a question from a client, catalogs every conceivable risk, prescribes the maximally effective mitigation for each, and calls it a day has failed to do their job.  Expect follow-up questions on the likelihoods and practical costs of risks identified, costs of defenses described, and alternatives that accept more risk at lesser cost.  In a developed attorney-client relationship, the lawyer should come to the question with a sense of the client's taste in risk, their financial picture, strategy, and timing, and tailor advice accordingly.  Not a hard-line position that commands to Pyrrhic victory, in open source licensing or any other area.

On the other hand, I don't think maintainers rank experts in all aspects of holistic open source community management.  I know a number of hackers, and a few foundations, consciously focused on developing and facilitating open source projects.  But most popular-project maintainers I see start out as reluctant leaders, at the reins of work attracting far more interest than any of their previous efforts.  Those folks see themselves as experts in software, not management or public relations.

Even seasoned project leaders don't immerse themselves in intellectual property law or the state of the art in open source licensing.  They tap lawyers with that knowledge when they need it.  When help comes care of a company, it's absolutely true that the lawyer's professional duty is seeing after company interests.  That's what companies expect when they pay people generally, whether to write legal advice or software.  Fortunately, when a company decides that its interest is in building and supporting an active open source project community, there's no inherent conflict between what the project needs and what its lawyers, or its programmers, ought to recommend.

Granted, if company counsel doesn't take the time to read up on open source, or to understand how it fits into the company's overall strategy, employees should encourage them to do so, or encourage management to find someone who already has.  There are many good open source lawyers to choose from.  Having an eye for risk doesn't blind them to opportunities or trade-offs, any more than GitHub's interest in user count blinds Ben.  Legal calls are judgment calls.  It's still important to focus on arguments about CLAs that all can acknowledge, and to avoid generalizing about who does the arguing.

## Your company is not the enemy.

Ben asks developers to argue that company cost-benefit analysis of CLAs "should be resolved in favor of contributors, not the corporation".  Making cost-benefit decisions against their own interests is not what corporations are for.  Of course lawyers become natural antagonists to this kind of line, because it's their duty to put client interests first.  The same goes for managers.

If we want more quality open source software out of companies, and more company support for contributions from others, we need to show and tell that stewarding open source projects is to their benefit.  We need to show that open source savvy developers aren't potential turncoats, but guides to previously untapped opportunity.  Casting steward-community relations as a zero-sum game between company and community, then encouraging employees to bat for the other team, only stokes unwarranted suspicion toward open source and allied programmers.

As with coder-lawyer relations, the better frame for coder-company relations is enlightened self-interest.  Argue that companies benefit overall by running without CLAs, accepting the risk they'd otherwise mitigate, in exchange for a better chance of benefits flowing back from the project as outside contributions.  I don't think that particular argument holds in most cases, for reasons to come, but it's valid and rhetorically clean.  It points to the cost-benefit analysis, which is the real debate, without making in-house counsel out as paper-hungry paranoids, or developers as double agents.

## CLAs solve real legal problems.

Copyright law gives software authors the right to sue others for copying, changing, and distributing their code without permission.  Open source licenses [reverse those defaults](https://oss.kemitchell.com/#defaults-and-overrides), so everyone is free to use, share, and build on the software.  Every contributor of copyrightable work to a project needs to apply an open source license to their work to make the whole open source.  They need to create specific, written records of doing so, to give consumers confidence.

"CLA" stands for "Contributor License Agreement".  But among programmers, CLA has come to stand for nearly any legal tool that contributors handle for submission of contributions to projects stewarded by others.  CLA forms aren't formally standardized in the same way open source public licenses are, but a few forms get widely reused and adapted, over and over again:

- the Apache Foundation's [corporate](https://www.apache.org/licenses/cla-corporate.pdf) and [individual](https://www.apache.org/licenses/icla.pdf) CLAs, from which Google derived its [individual](https://cla.developers.google.com/about/google-individual) and [corporate](https://cla.developers.google.com/about/google-corporate) forms
- the [Developer Certificate of Origin](https://developercertificate.org/), developed for the Linux kernel, now applied by other large projects, such as [Node.js](https://github.com/nodejs/node/blob/master/CONTRIBUTING.md#developers-certificate-of-origin-11)
- the Eclipse Foundation's [CLA](https://www.eclipse.org/legal/CLA.php), which Eclipse has deprecated in favor of the DCO, still used by other projects
- the [Oracle Contributor Agreement](http://www.oracle.com/technetwork/community/oca-486395.html), adapted for projects like [Clojure](https://clojure.org/community/contributing)
- the Free Software Foundation's [copyright papers](https://www.gnu.org/prep/maintain/html_node/Copyright-Papers.html)

Generalizing a bit, each tool aims to achieve some combination of:

1.  _Licensing_: clear licensing of each contribution by its contributor
2.  _Warranty_: reassurance that the contributor has the right to license their contribution
3.  _Assignment_: assignment of some or all copyright in the contributions to the project steward (uncommon)
4.  _Record_: documenting the contributor's decision to license, by storing their signature or a `Signed-Off-By` tag in their Git commits

These goals correspond to common licensing issues:

1.  _Licensing_:  In order to assure users of the project that they won't be sued for infringement of intellectual property rights in the project, the project offers documentation, a process, or both, to show that each contributor licenses their contribution on open source terms.
2.  _Warranty_:
    - A license from a contributor is only good if they actually have the legal right to license the relevant intellectual property.
    - Individual contributors often believe they have the right to license intellectual property in their own work, when in fact [their employers or clients have those rights](https://worksmadeforhire.org).
3.  _Assignment_:
    - Enforcing license conditions, especially copyleft license conditions like those under the [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.en.html), is much easier when [a single copyright owner can register copyright](https://www.gnu.org/licenses/why-assign.en.html).
    - Relicensing onto different license terms is also much easier when a single copyright owner can take the decision to relicense, without tracking down and securing agreement from each contributor.
4.  _Record_:  Contributor licenses only protect users if they can find written evidence showing they were granted, on what terms, and for what intellectual property.

All of these issues directly affect risks to users.  They also indirectly affect project stewards, who might get sued by users for leading them into intellectual property problems.  So processes that look like CYA for project stewards under a microscope can also turn out to protect users, when we take in the whole picture.

For example, most common CLA forms require contributors to guarantee to project stewards they have the legal right to license intellectual property in their contributions.  With rare exception, notably the [Open Software License](https://opensource.org/licenses/OSL-3.0) and [Academic Free License](https://opensource.org/licenses/AFL-3.0), open source licenses don't make any such guarantees to users.  (Some legal systems require and imply such a guarantee, regardless.)  As a result, a project steward that uses Apache-style terms often gets more assurance about rights to license from contributors, through CLAs, than it gives users, under the [Apache License](https://apache.org/licenses/LICENSE-2.0).

Having CLAs on file for a project gives the steward evidence with which to fight back against lawsuits for direct or indirect infringement.  But the process of requiring and collecting those documents also gives project users better assurance that they won't be liable for infringement.  Giving the steward robust intellectual property provenance protection protects the steward.  But the steward is often the one doing the most to coordinate, support, and promote the project, benefiting users.

Overall, the most important function of CLAs is documenting some action, taken by each contributor, about licensing.  That evidence fills the gap between expectation of "inbound=outbound"---that contributors license their work under the same license already used for the project---and the law.

Alas, I'm not aware of any legal rule that would reliably imply the licenses that inbound=outbound expects.  I'm not aware of any rule that reliably implies open source licensing of project founders' initially published software, either.  Publishing a project's source on GitHub probably means you're alright with other folks using and building on it, but the lack of an explicit license notice is enough to convince careful, deep-pocketed, and well-known potential users to stop and turn around.  The situation for outside contributions differs only by the fact that someone else put some notice about license terms in the repository, perhaps in `LICENSE`, as in [section 5 of an Apache License](https://www.apache.org/licenses/LICENSE-2.0#contributions), or perhaps in a file like `CONTRIBUTING`.

Ben offers an argument for implied licenses, comparing open source projects to take-a-penny, leave-a-penny trays in stores.  I wish that analogy were compelling.  I fear it's not, especially considering who really needs to be compelled: judges applying intellectual property law.

Cash is fundamentally different from intellectual property licenses.  Pennies are physical items of specific value freely spent by those who hold them.  Copyright and patent licenses are intangible rights, whose scopes have to be set out in terms.  Intellectual property rights don't presumptively belong to anyone who happens to possess an embodiment, as does currency.  So overall, placing a penny in a penny tray manifests a much more specific intent about the penny and what others can do with it than placing code in a public GitHub repository.  The law encourages passing pennies around.  But its posture on intellectual property is to protect it from unauthorized exploitation.

On top of that, pennies are as close to worthless as American coins can be.  So much so that there are strong arguments for [abolishing them](https://en.wikipedia.org/wiki/Penny_debate_in_the_United_States), to spare everyone the hassle.  Licensing a copyright or a patent under open source terms, on the other hand, can be a decision---or mistake---of multi-million-dollar, strategic proportions.  We shouldn't expect courts to imply licenses easily, and US case law I've seen shows they don't.  When courts do imply licenses, we should expect them to scope those licenses narrowly, in keeping with the economic policy thrust of copyright and patent laws, not the broad, permissive bent of the open source counterculture.

Long story short, proprietary is the default for software under copyright law.  It takes an open source license to turn proprietary-by-default software into open source software.  Many open source community members expect others to license their contributions as others have licensed before them, and courts are capable of implying licenses from copyright holder action.  But it is not enough to show that others expected to receive a license.  Implied license rules are in some ways as unfavorable, and even less clear, than fair use rules.  We shouldn't accept that uncertainty if we have the tools to avoid it.

## Contributor licensing can be easy.

CLAs have a bad rap because they've been done badly.  Ben mentions a common offense: requiring written copies of contributor-license or copyright assignment forms with handwritten signatures by mail.  It's perfectly possible to receive CLAs, or other records of similar effect, without printing, mailing, or hand-signing anything.  It's perfectly possible without bots or yet another integrated service, over the same channels programmers already use for code and conversation.

Consider the [Developer Certificate of Origin](https://developercertificate.org/).  The DCO isn't a "license agreement" per se.  It's a standardized, public statement made by contributors for the benefit of Linux kernel contributors and users.  The statement, or certificate, confirms that the contributor is licensing their work under the indicated license, and has the rights to do so.  Creating those records gives kernel developers evidence to fight back against claims that source code in the kernel came from someone else, who now wants to sue developers or users for infringement.  [SCO made such claims](https://en.wikipedia.org/wiki/SCO/Linux_controversies), and lack of handy evidence to the contrary caused a lot of pain, and wasted a lot of time.  Kernel developers responded by writing and adopting the Developer Certificate of Origin.

Nobody prints and signs the DCO.  Instead, developers refer to it by adding their name and a standardized `Signed-Off-By` tag to their Git commits, with a command-line flag.  Using `Signed-Off-By`, with a copy of the DCO in the repository, creates records of contributors licensing their contributions, and provides some assurance about their rights to do so.  Those records live in the code repository itself, in files and Git history.  They aren't _agreements_, in the strict sense of terms agreed between two or more parties.  They aren't legal _instruments_, in the sense of copyright assignments or deeds for other kinds of property.  But they are _evidence_ of intentional action about contribution licensing that users can cite against anyone claiming infringement.

The DCO was written very specifically for Linux kernel development workflow.  But it's not hard to adapt its approach to GitHub-style projects.  Reducing the DCO to its core, and optimizing for absolutely minimum friction, GitHub-style maintainers could ask pull request authors about licensing, via a pull request comment, before merging their work:

> Do you license your contributions to this project under [The MIT License], too?
>
> If this was part of work you did for an employer or a client, do you have their permission to release it?

Affirmative replies create publicly accessible records on GitHub.  Those records address three of the most important goals of CLAs: confirming license terms for each contribution, reassurance about rights to give the licenses, and creating records of statements by contributors about licensing.  For projects under permissive open source licenses, that's touching all bases.

Many open source developers probably wouldn't think to call this kind of process a "CLA" at all.  They associate "CLA" first and foremost with the hassle of CLA processes done badly, rather than their purpose.  But the very informal CLA process described above is a process by which a contributor (the "C") agrees (the "A") to license (the "L") their contributions, and creates a public, written record of doing so.  It has all the major elements of a standby like the Apache Individual Contributor License Agreement, albeit it with less specificity.  It differs chiefly by substituting process formalities familiar to developers---Git branches and pull request messages---for those familiar to lawyers---documents and signature pages.  Either way, users and maintainers end up with evidence on hand to answer infringement claims.

With a contributor licensing process in place from a project's first outside contribution, it's often possible to revisit and adjust it over time.  Starting from the minimal process above, we could require contributors to push a commit "signing" a file with their name in the Git repository, creating a record in the repository itself, to be included in distributed artifacts.  We could ask them to add licensing statements to source files they modify, already a common practice in some open source communities.  We could have them create Git metadata, rather than data accessible via GitHub.  We could require more traditional-looking electronic signature, with cryptographic tools or an e-sign service.

Without a process in place, it's often very hard to establish one.  Changing workflows is always awkward, and it's much harder to educate a team on contributor licensing all at once, rather than one by one, as they work through an established process.  It's often _impossible_ to go back and get licensing records for past contributions.  People can't be reached, can't be bothered, or can't feel comfortable giving legal-sounding statements about the circumstances of work done ago.  Which explains why projects that start without contributor licensing processes get stuck that way.

Ben is absolutely right that pointless friction ought to be avoided, and that maintainers should consider the effects of every process decision on contributor communities and new developers.  If every contributor licensing process had to be as clunky, archaic, and alien as they often were in the early 2000s, I might agree.  But they don't.  Compared to other hurdles---learning Git, signing up for GitHub, agreeing to its terms, grokking platform conventions, figuring out project flow---contributor licensing can be simple, jargon-free, and easy to facilitate.

## Contributor licensing can be even easier.

A major benefit of using even very informal, minimal-friction contributor licensing processes is education.  Even new developers who've figured out Git, GitHub, and project conventions from GitHub's guides and training programs end up learning far more, by volume, from experience proposing and landing patches.  Whether it's public licensing, code style, testing, documentation, or some other aspect of programming practice, contributors to projects that teach these practices, rather than suppress or ignore them, become community members capable of understanding and improving tools and techniques for all.

The alternative is gaps in standard practice and blind spots in common understanding, unrecognized by vast swathes of the community, that widen over time.  We've seen this with patent licensing.  We're way behind on works made for hire and rights to license.  Experience teaches that the risk of a licensing problem to any particular open source project is low, especially during good times for the industry.  But the more vulnerable projects we create, the higher the risk any one significant project will suffer a visible setback, casting shade on open source as a whole.

Open source needs herd immunity to licensing mishaps.  We need to inoculate our newborn projects against known low-probability, high-cost risks, like contribution licensing issues, as standard.

In that vein, I've done some work [porting the DCO to GitHub-style development](https://github.com/berneout/berneout-pledge).  The port offers additional benefits, such as requiring contributors to make just one affirmative statement about contributor licensing that applies to all their work on GitHub, and making it very easy to check automatically whether a new contributor has made a statement.  The language and tooling are on GitHub, and I've received pull requests.  They're a marked improvement over past practice, and could certainly be improved a great deal more.

Tooling and platforms can save individual contributors from a lot of complexity and hassle.  But they shouldn't succumb to treating open source developers like inputs to an assembly line.  Every developer is worth educating on matters as fundamental to open source as giving permission to use and share their work.  And it's worth reminding ourselves and others that releasing source code under open source terms is exceptionally generous.  Seeing more and more of that kind of generosity in programming doesn't make it normal, or give anyone, inside or out, the right to expect it.  It makes programming more exceptional.  We shouldn't hide that accomplishment, from users or from ourselves.

## Terms of adhesion do not a community make.

Ben mentions that GitHub recently changed its terms of service to add [terms that attempt to license users' contributions to existing projects](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license):

> **6\. Contributions Under Repository License**
>
> Whenever you make a contribution to a repository containing notice of a license, you license your contribution under the same terms, and you agree that you have the right to license your contribution under those terms. If you have a separate agreement to license your contributions under different terms, such as a contributor license agreement, that agreement will supersede.

I published [concerns about this addition](https://writing.kemitchell.com/2017/02/16/Against-Legislating-the-Nonobvious.html#line-by-line) during the comment period for the change.  Setting my concerns about the drafting and enforceability of these terms aside, I still see two major issues.

First, if what we really want is legal recognition of inbound=outbound as a reliable theory of implied copyright and patent license, not just on GitHub but throughout open source, we get there by producing a long, public record of community consensus, not centralized pronouncements that consensus has been achieved.

GitHub's terms try to get around this by declaring that inbound=outbound is consensus:

> Isn't this just how it works already? Yep. This is widely accepted as the norm in the open-source community; it's commonly referred to by the shorthand "inbound=outbound". We're just making it explicit.

As evidence for an implied license, GitHub _telling_ that inbound=outbound is the norm is not the same, or as good, as _showing_ that lots of open source developers expect and follow it.

The two are in tension.  If relying on the GitHub terms of service fallback becomes the norm for contribution licensing, contributors will say and learn less and less about what they expect as community members, and less and less about contribution licensing overall.  As it stands, I don't think a thought like inbound=outbound has crossed most open source developer's minds.  They've simply never thought of the matter.

More immediately, trying to legislate inbound=outbound in terms of service begs questions: If inbound=outbound was already consensus, why was it necessary to codify it?  Taking that for granted, how can we be sure GitHub codified it correctly?  In other words, if inbound=outbound were the law, or "how it works already", there'd be no point writing it out in terms of service.

Second, and more importantly, this approach encourages hiding contributor licensing out of sight and out of mind.  Much has been said of open source becoming the new "normal", at least for certain kinds of code used to build software that is not open source.  But open source is exciting because open source is _not_ normal.  Proprietary, closed-source software is the legal and business default.  Giving away valuable work for literally anyone to run with is extraordinary.

Open source contributions should be acknowledged and celebrated.  It's one thing to invite others to join the party.  It's quite another to make it not just expected but mandatory, the price of an entry ticket, via website terms.  Especially when choice of license terms, from a diverse array of accepted licenses, is such an established medium of ideological, even political, self-expression and self-identification.

## Spreading unsustainability around.

Ben and I haven't had a good sit-down talk about open source sustainability.  I'd sure love the chance.  In the meantime, I don't want to jump to any conclusions about how he sees the problem.  But reading through his post, I can't help seeing concepts of what open source is, or ought to be, running through it.

Some companies take projects open source primarily to attract outside contributions.  Others do so to reduce friction in the sales cycle for broader commercial relationships encompassing warranties, support, training, hosting, and a myriad of other services.  Still others do so to seed the talent pool with developers familiar with their tooling, frameworks, and approaches.  For PR.  For access to free infrastructure.  For combinations of these and reasons I've never heard of.

A great deal of the community's strength comes of accepting, and channeling, diverse and changing motivations.  With that in mind, I'm very wary of prescriptions for open source facilitation, and definitions of success and sustainability, that focus on any one vital sign, or any one constituency's preferences.  I've written elsewhere that [single-minded focus on "adoption" leads to sustainability problems](https://blog.licensezero.com/2017/10/15/unsustainability-at-scale.html).  I don't hold higher hopes for the new, emergent school of thought that puts contributor count above all else.

Closing out his post on CLAs, Ben writes:

> At the end of the day, it’s possible to have a successful and sustainable open source project without a CLA. It’s not possible, however, to have a successful or sustainable open source project without a strong influx of new contributors.

I'm at serious risk of projecting here, but I can't help thinking this implies definitions of "success" and "sustainable" that are valid, but not universally shared.  Projects largely attributable to a single contributor are the norm, and some give faithful service over decades, with few outside patches.  Projects that chew through lead maintainers, leaving a trail of burnout victims in `CHANGELOG` behind them, are sustainable only for a very narrow definition of sustainable, seeing only from the user point of view.

The meaning of "open source" is changing.  [I welcome that change.](https://writing.kemitchell.com/2016/05/13/What-Open-Source-Means.html)  GitHub, the kind of development that developed there, and the kind of development GitHub increasing encourages, have done a lot stir things up.  As for the loss of whatever clarity preceded it, I've written:

> It's all a meager price to pay if "open source" becomes an inclusive identity badge for lots of people trying to do software together on the Internet, rather than a resharpened wedge or a well-demarcated historical curiosity.

If a company takes their product open source, solicits outside contribution, and actively recruits those contributing, as MySQL did in its early days, even heavy-duty CLAs might make perfect sense.  Programmers on payroll---sustaining their contributions in a refreshingly direct, rational way---is worth protecting, and vigorously.  We know from experience such projects can succeed.  That's definitely not the only way to to do open source, or perhaps the most exciting or fashionable way.  But it is open source.

It's damn hard to give general prescriptions for all of open source, or to define "success" or "sustainability" or "quality", without slighting someone, somewhere, making great software differently than you do.  But it's damn important to keep trying, and refining, in the open.
