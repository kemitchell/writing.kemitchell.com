---
title: CLAs are Not a Conspiracy
layout: post
tags:
- Open Source
- Licensing
---

Earlier this week, I read Ben Balter's [_Why you probably shouldn't add a CLA to your open source project_](https://ben.balter.com/2018/01/02/why-you-probably-shouldnt-add-a-cla-to-your-open-source-project/).   You should, too.

I really respect Ben, his writing, and his work at GitHub.  But I fundamentally disagree with his post, on points general and specific.  I'd like to give another point of view.

As I understand Ben's argument:

1.  Open source stewards should put attracting contributors first.
2.  CLAs increase friction for new contributors.
3.  Plenty of open source projects seem to get by without CLAs.
4.  So by default, don't use them.

I'll quibble with each link in that chain, as well as the overall conclusion.  But I also want to address some themes cutting across Ben's discussion:

1.  Lawyers are biased against, or incapable of, good advice on open source licensing and community matters.
2. Programmers at steward-companies should regard advice about company risk with suspicion, and push back against it on behalf open source communities.
3.  CLAs are mostly cover-your-ass maneuvers for steward-companies.
4.  GitHub's recently updated site-wide terms of service better solve the underlying problem.

We see differently on those underlying points, too.  Which partially explains why we come to different conclusions.

How do I see things?

1.  Recording contributor license grants solves legal problems.
2.  Contributor licensing needn't cause high friction.
3.  Projects should teach contributor licensing, not hide it.
4.  It's very hard to put contributor licensing off 'til later.
5.  So by default, set up a process from the get-go.

## Your lawyer is not the enemy.

I'm a lawyer, and I give lots of advice on open source licensing.  The most disturbing part of Ben's post was its portrait of lawyers as narrow-minded specialist-automatons who can't see the whole open source picture, aren't supposed to, and ought to be avoided, resisted, and overridden accordingly.  Even when they're trying to look after the interests of the company cutting open source developers' checks.

Ben writes:

> ... legal's role (and area of expertise) is to advise business owners how to minimize risk, not how best to run a successful open source project (the maintainer's area of expertise)

I respectfully disagree.

Any transactional lawyer that takes a question from a client, catalogs every conceivable risk, prescribes the maximally effective mitigation for each, and calls it a day has failed to do their job.  Expect follow-up questions on the likelihoods and practical costs of risks identified, costs of defenses described, and alternatives that accept more risk at lesser cost.  In a developed attorney-client relationship, the lawyer should come to the question with a sense of the client's taste in risk, their financial picture, strategy, and timing, and tailor advice accordingly.  Not a hard-line position that no risk is ever worth taking, in open source licensing or any other area.

I don't think maintainers rank experts in open source community management, either.  I know a number of folks, and a few foundations, consciously focused on developing and facilitating open source projects.  But most popular-project maintainers I see start out as reluctant leaders, at the reins of work attracting far more interest than any of their previous efforts.  Those folks see themselves as experts in software, not management or public relations.

Even seasoned project leaders don't immerse themselves in intellectual property law or the state of the art in open source licensing.  They tap lawyers with that knowledge when they need it.  When help comes care of a company, it's absolutely true that the lawyer's professional duty is seeing after company interests.  That's what companies expect when they pay people generally, to write write legal advice, software, or business plans.  Fortunately, when a company decides that its interest is in building and supporting an active open source project community, there's no inherent conflict between what the project needs and what its lawyers, or its programmers, ought to advise.

Granted, if company counsel doesn't take the time to read up on open source, or to understand how it fits into the company's overall strategy, employees should encourage them to do so, or encourage management to seek better counsel.  There are many good open source lawyers to choose from.  Having an eye for risk doesn't blind them to opportunities or trade-offs, any more than GitHub's interest in user count invalidates Ben's position.  Legal calls are judgment calls.  Different calls often boil down to different biases.  Which is why it's so important to avoid generalizing about motivations, and focus on arguments about CLAs, not the people who decide about them.

## Your company is not the enemy.

Ben asks developers to argue that company cost-benefit analysis of CLAs "should be resolved in favor of contributors, not the corporation".  Making cost-benefit decisions against their own interests is not what corporations are for.  Of course lawyers become natural antagonists to this kind of line, because professional ethics require them to put client interests first.  So do managers.

If we want more quality open source software out of companies, and more company support for contributions from others, we need to show and tell that stewarding open source projects benefits company-stewards.  We need to show that open source savvy developers aren't potential turncoats, but guides to previously untapped opportunity.  Casting steward-community relations as a zero-sum game between company and community, then encouraging employees to bat for the other team, only stokes unwarranted suspicion toward the open source community and allied programmers.

As with lawyers, the better frame is enlightened self-interest.  One could argue that companies would benefit overall from running without CLAs, and accepting the risk they'd otherwise mitigate, in exchange for a better chance of benefits flowing back from the project, as outside contributions.  I don't think that particular argument holds, in most cases, but it's valid, and rhetorically clean.  It points to the cost-benefit analysis, the real debate.  And it does so without making in-house counsel out as unrepentant, paper-pushing paranoids, or developers as ready defectors.

## CLAs solve real legal problems.

Copyright law gives software authors the right to sue others for copying, changing, and distributing their code without permission.  Open source licenses [reverse those defaults](https://oss.kemitchell.com/#defaults-and-overrides), so everyone is free to use, share, and build on the software.  Every contributor of copyrightable work to a project needs to apply an open source license to their work to make the whole open source.  They need to create records of doing so, to give consumers confidence.

"CLA" stands for "Contributor License Agreement".  But among programmers, CLA has come to stand for nearly any legal instrument that contributors handle for submission of contributions to projects stewarded by others.  CLA forms aren't standardized in the same way open source public licenses are, but a few forms get widely reused and adapted:

1.  the Apache Foundation's [corporate](https://www.apache.org/licenses/cla-corporate.pdf) and [individual](https://www.apache.org/licenses/icla.pdf) CLAs, from which Google derived its [individual](https://cla.developers.google.com/about/google-individual) and [corporate](https://cla.developers.google.com/about/google-corporate) forms
2.  the [Developer Certificate of Origin](https://developercertificate.org/), developed for the Linux kernel, now applied by other large projects, such as [Node.js](https://github.com/nodejs/node/blob/master/CONTRIBUTING.md#developers-certificate-of-origin-11)
3.  the Eclipse Foundation's [CLA](https://www.eclipse.org/legal/CLA.php), which Eclipse has deprecated in favor of the DCO, still used by other projects
4.  the [Oracle Contributor Agreement](http://www.oracle.com/technetwork/community/oca-486395.html), adapted for projects like [Clojure](https://clojure.org/community/contributing)
5.  the Free Software Foundation's [copyright papers](https://www.gnu.org/prep/maintain/html_node/Copyright-Papers.html)

Generalizing a bit, each tool aims to achieve some combination of:

1.  clear licensing of each contribution by its contributor
2.  reassurance that the contributor has the right to license their contribution
3.  assignment of some or all copyright in the contributions to the project steward
4.  documenting the contributor's decision to license, by storing their signature or a `Signed-Off-By` tag in their Git commits

These goals correspond to common licensing issues:

1.  _Licensing_:  In order to assure users of the project that they won't be sued for infringement of intellectual property rights in the project, the project offers documentation, a process, or both, to show that each contributor licenses their contribution on open source terms.
2.  _Warranty_:
    - A license from a contributor is only good if they actually have the legal right to license the relevant intellectual property.
    - Individual contributors often believe they have the right to license intellectual property in their own work, when in fact [their employers or clients have those rights](https://worksmadeforhire.org).
3.  _Assignment_:
    - Enforcing license conditions, especially copyleft license conditions like those under the [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.en.html), is much easier when [a single copyright owner can register copyright](https://www.gnu.org/licenses/why-assign.en.html).
    - Relicensing onto different license terms is also much easier when a single copyright owner can take the decision to relicense, without tracking down and securing agreement from each contributor.
4.  _Records_:  Contributor licenses only protect users if they can find written evidence showing they were granted, on what terms, and for what intellectual property.

All of these issues directly affect users.  They also indirectly affect project stewards, who might get sued by users for leading them into intellectual property problems.  Processes that look like CYA for project stewards under a microscope also protect users, when we take in the whole picture.

For example, most common CLA forms require contributors to guarantee to project stewards they have the legal right to license intellectual property in their contributions.  With rare exception, notably the [Open Software License](https://opensource.org/licenses/OSL-3.0) and [Academic Free License](https://opensource.org/licenses/AFL-3.0), open source licenses don't make any such guarantees to users.  (Some legal systems require and imply such a guarantee, regardless.)  As a result, a project steward that uses Apache-style terms often gets more assurance about rights to license from contributors, through CLAs, than it gives users, under [The Apache License](https://apache.org/licenses/LICENSE-2.0).

Having CLAs on file for a project gives the steward evidence with which to fight back against lawsuits for direct or indirect infringement.  But the process of requiring and collecting those documents also gives project users better assurance that they won't be liable for infringement.  Giving the steward robust intellectual property provenance protection protects the steward.  But the steward is often the one doing the most to coordinate, support, and promote the project, benefiting users.

Overall, the most important function of CLAs is documenting some action, taken by each contributor, about licensing.  That evidence fills the gap between expectation of "inbound=outbound"---that contributors license their work under the same license already used for the project---and the law.

Alas, I'm not aware of any legal rule that would reliably imply licenses for contributions to open source projects on the same license terms that the original developer licensed their work to the public.  I'm not aware of any rule that reliably implies open source licensing of original authors' published software, either.  Publishing a project's source on GitHub probably means you're alright with other folks using and building on it, but the lack of an explicit license notice is enough to give careful, deep-pocketed, and well-known potential users pause.  The situation for outside contributions differs only by the fact that someone else put notice of license in the repository for their work first.

Ben offers an argument for implied licenses, comparing open source projects to take-a-penny, leave-a-penny trays in stores.  I wish that analogy were compelling, but I fear it's not.

Cash is fundamentally different from intellectual property licenses.  Pennies are physical items of specific value freely spent by those who hold them.  Copyright and patent licenses are intangible rights, whose scopes have to be set out in terms.  Intellectual property rights don't presumptively belong to anyone who happens to possess an embodiment of that IP.  Overall, placing a penny in a penny tray manifests a much more specific intent about the penny and what others can do with it than placing code in a public GitHub repository.

On top of that, pennies are as close to worthless as American coins can be.  So much so that there are strong arguments for [abolishing them](https://en.wikipedia.org/wiki/Penny_debate_in_the_United_States), to spare everyone the hassle of dealing with them.  Licensing copyright or a patent over a contribution under open source terms, on the other hand, can be a decision---or mistake---of multi-million-dollar, strategic proportions.  We shouldn't expect courts to imply licenses easily, and case law indicates that they haven't.  When they do imply licenses, we should expect them to scope those licenses narrowly, in keeping with the economic policy thrust of copyright and patent laws, not the broad, permissive bent of the open source counterculture.

Long story short, proprietary is the default for software under copyright law.  It takes an open source license to turn proprietary-by-default software into open source software.  Many open source community members expect others to license their contributions as others have licensed before them, and courts are capable of implying licenses from things that copyright holders do.  But it is not enough to show that others expected to receive a license.  Implied license rules are in some ways as unfavorable, and even less clear, than fair use rules.  We shouldn't accept that uncertainty if we can replace it with clarity.

## Contributor licensing can be easy.

CLAs have a bad rep because they've been done badly.  Ben mentions a common offense: requiring written copies of contributor-license or copyright assignment forms with handwritten signatures by mail.  It's perfectly possible to receive CLAs, or other records of similar effect, without printing, mailing, or hand-signing anything.  It's perfectly possible without bots, over the same channels we use for code and conversation.

Consider the [Developer Certificate of Origin](https://developercertificate.org/).  The DCO isn't a "license agreement" per se.  It's a standardized, public statement made by contributors for the benefit of Linux kernel contributors and users.  The statement, or certificate, confirms that the contributor is licensing their work under the indicated license, and has the rights to do so.  Creating those records gives kernel developers evidence to fight back against claims that source code in the kernel came from someone else, who now wants to sue developers or users for infringement.  [SCO made such claims](https://en.wikipedia.org/wiki/SCO/Linux_controversies), and lack of evidence to the contrary wasted a lot of time.  Kernel developers responded by writing and adopting the DCO.

Nobody prints and signs the DCO.  Instead, developers refer to it by adding their name and a standardized `Signed-Off-By` tag to their Git commits.  Using `Signed-Off-By`, with a copy of the DCO in the repository, creates records of contributors licensing their contributions, and provides some assurance about their rights to do so.  Those records live in the code repository itself, in files and Git history.  They aren't _agreements_, in the strict sense of terms agreed between two or more parties.  They aren't legal _instruments_, in the sense of copyright assignments or deeds for other kinds of property.  But they are _evidence_ of intentional action about contribution licensing that users can cite against anyone making copyright infringement claims.

The DCO was written very specifically for Linux kernel development workflow.  But it's not hard to adapt its approach to GitHub-style projects.  Reducing the DCO to its core, and optimizing for minimum friction, GitHub-style maintainers could ask pull request authors about licensing, via a pull request comment, before merging their work:

> 1. Do you license your contributions to this project under [The MIT License], too?
>
> 2. If so, was this part of work you did for any employer, client, or another organization, and do you have their permission to release your work under that license?

Affirmative replies create publicly accessible records on GitHub.  Those records address three of the most important goals of CLAs: confirming license terms for each contribution, confirming rights to give the licenses, and creating records of specific action by contributors about licensing.  For projects under permissive open source licenses, like The MIT License and BSD-style licenses, those are the most important.

Many open source developers probably wouldn't think to call this kind of process a "CLA" at all.  They associate "CLA" first and foremost with the hassle of clunky CLA processes, rather than their purpose.  But the very informal CLA process described above is a process by which a contributor (C) agrees (A) to license (L) their contributions, and creates a public, written record of doing so.  It has all the major elements of, and achieves the major goals of, say, an Apache Individual Contributor License Agreement.  It differs chiefly by substituting process formalities familiar to developers---Git branches and pull request messages---for those familiar to lawyers---documents and signature pages.  Both formalities create records, and therefore evidence useful in repulsing infringement claims.

With a contributor licensing process in place from a project's first outside contribution, it's often very possible to change it over time, for contributions going forward.  We could require contributors to push a commit "signing" a file with their name in the Git repository, creating a record in the repository itself, to be included in distributed artifacts.  We could ask them to add licensing statements to source files they modify, already a common practice in some open source communities.  We could have them create Git metadata, rather than data accessible via GitHub.  We could require more traditional-looking electronic signature, with cryptographic tools or an e-sign service.

Without a process in place, it's often very hard to establish one.  It's difficult to change workflows others know well, and hard to educate everyone involved about the need all at once, instead of one by one, through an established process.  It's often _impossible_ to go back and get licensing records for all past contributions.  People can't be reached, can't be bothered, or can't feel comfortable giving reassurances about the circumstances of work they did years ago.  Which explains why projects that start without contributor licensing processes get stuck that way.

Ben is absolutely right that pointless friction ought to be avoided, and that maintainers should consider the effects of process on contributor communities and new developers.  If every contributor licensing process had to be as clunky, strange, and annoying as they were in the early 2000s, I might agree.  They don't.  Compared to other hurdles---learning Git, signing up for GitHub, grokking its conventions, figuring out project flow---contributor licensing can be simple, transparent, and easy to facilitate.

## Contributor licensing can be even easier.

A major benefit of using even very informal, minimal-friction contributor licensing processes is education.  Even new developers who've figured out Git, GitHub, and project conventions end up learning a ton from the process of proposing and landing patches.  Whether it's public licensing, code style, testing, documentation, or some other aspect of programming practice, contributors to projects that teach about these practices, rather than hide or ignore them for the sake of low friction, become community members capable of understanding and improving tools and techniques for the whole community.

The alternative is gaps in standard practice, unrecognized by vast swathes of the community, that widen over time.  We've seen such a gap with patent licensing.  We're currently facing a gap with works made for hire and intellectual property ownership.  Experience teaches that the risk to any particular open source project of a licensing problem is low, especially during good times for the industry.  But the more vulnerable projects we create, the higher the risk any one significant project will suffer a meaningful setback.  Open source needs herd immunity.  We need to immunize or projects against known low-probability, high-cost risks, like SCO-style accusations, as standard operating procedure.

I've done some work [porting the DCO to GitHub-style development](https://github.com/berneout/berneout-pledge).  The port offers additional benefits, such as requiring contributors to make a single statement about contributor licensing once for all work on GitHub, and making it very easy to check automatically whether a new contributor has made a statement.  The language and tooling are on GitHub, and I've received pull requests.  They're a marked improvement over past practice, and could certainly be improved a great deal more.

One thing about the approach should not change.  The tools save individual contributors from a lot of complexity and uncertainty.  But they do not and should not sacrifice respect for open source developers.  Every developer is worth educating on matters as fundamental to open source as licensing work effectively.  It's worth reminding ourselves and others that releasing source code under open source terms is exceptionally generous, whether you're seeding a new project or sending a tiny patch to existing work.  Seeing more and more of that kind of generosity in programming doesn't make it normal, or expected.  It makes programming more exceptional.

## Terms of adhesion do not a community make.

Ben mentions that GitHub recently changed its terms of service to add [terms that attempt to set license terms for contributions to existing projects](https://help.github.com/articles/github-terms-of-service/#6-contributions-under-repository-license):

> **6\. Contributions Under Repository License**
>
> Whenever you make a contribution to a repository containing notice of a license, you license your contribution under the same terms, and you agree that you have the right to license your contribution under those terms. If you have a separate agreement to license your contributions under different terms, such as a contributor license agreement, that agreement will supersede.

I published [concerns about this addition](https://writing.kemitchell.com/2017/02/16/Against-Legislating-the-Nonobvious.html#line-by-line) during the comment period for the change.  Setting my concerns about the drafting and enforceability of these terms aside, I still see two major issues.

First, if what we really want is legal recognition of inbound=outbound as a reliable theory of implied copyright and patent license, not just on GitHub but throughout open source, we get there by producing a long, public record of community consensus, not centralized pronouncements that consensus has been achieved.  GitHub's terms try to get around this by declaring that inbound=outbound is consensus:

> Isn't this just how it works already? Yep. This is widely accepted as the norm in the open-source community; it's commonly referred to by the shorthand "inbound=outbound". We're just making it explicit.

As evidence for an implied license, GitHub _telling_ that inbound=outbound is the norm is not the same, or as good, as _showing_ that lots of open source developers expect and apply it.  The two are in fact competitive.  If relying on the GitHub terms of service fallback becomes the norm for contribution licensing, contributors will say less and less about what they expect as community members, and less and less about contribution licensing overall.  Moreover, trying to legislate inbound=outbound in terms of service begs questions: If inbound=outbound was already consensus, why was it necessary to codify it?  Taking that for granted, how can we be sure GitHub codified it correctly?  In other words, if inbound=outbound were the law---"how it works already"---there'd be no point writing it out in terms of service.

Second, and more important, this approach encourages hiding licensing from developers, encouraged pushing it out of mind.  Much has been said of open source becoming the new "normal", at least for certain kinds of code.  But open source is awesome because open source is not normal by any broader, objective standard.  Proprietary software is the default.  Giving away valuable work for literally anyone to run with is extraordinary.  Open source releases should be acknowledged and celebrated, whether the contributor is pasting a `LICENSE` file in next a thousand lines of new code, or chipping in a three-line optimization.

## Spreading unsustainability around.

Ben and I haven't had a good sit-down talk about open source sustainability.  I'd sure love the chance, and I don't want to jump too far ahead with assumption about how he sees the problem and potential solutions.  But reading through his post, I can't help remember a tweet of my own from a while back:

> Beware any model of open source sustainability that boils down to a more efficient succession of willing martyrs.
>
> <https://twitter.com/kemitchell/status/905890664600158208>

<!--

---

> # United States Courts for the Ninth Circuit Manual of Model Civil Jury Instructions
>
> ## 17.25. Copyright---Affirmative Defense---Implied License
>
> ...
>
> ## Comment
>
> ...
>
> Although this model instruction accurately captures one recurring set of implied license facts, implied licenses arise in a wide variety of circumstances, including many---such as express contracts that fail because of the statute of frauds or partnership arrangements---for which the elements of an implied license will be different.
>
> Implied license is an affirmative defense to copyright infringement.  _Asset Mktg._, 542 F.3d at 754.  When a plaintiff contributes copyrightable work to the defendant in exchange for some benefit (such as a share in partnership profits, a fee, or a salary), a license for the defendant to use plaintiff’s work may be implied.  _See_ _U.S. Auto Parts_, 692 F.3d at 1019-0 (discussing existence of implied license in context of employment relationship); _Asset Mktg._, 542 F.3d at 750, 754-5 (involving independent contractor relationship); _Oddo v. Ries_, 743 F.2d 630, 634 (9th Cir.1984) (involving partnership relationship). A license is often implied when "without such a license, [the plaintiff’s compensated] contribution…would have been of minimal value." _Id._
>
> An implied license may be implied by conduct.  _See_ _Foad Consulting Grp., Inc. v. Azzalino_, 270 F.3d 821, 825 (9th Cir.2001).  It may be unlimited in scope or restricted to certain specific rights.  _Compare_ _Asset Mktg._, 542 F.3d at 757 (finding that plaintiff granted defendant "unlimited" implied license "to retain, use, and modify" work), with _Oddo_, 743 F.2d at 634 (plaintiff granted defendant implied license to use work in manuscript and not "in any work other than the manuscript itself").  The defendant bears the burden of proof as to the scope and existence of an implied license.  _Id._ at 634 & n.6.  Limitations on the scope of an implied license may be strictly construed.  _See_ _id._ at 634 (finding that implied license to use copyrighted work in a manuscript does not imply "the right to use the [copyrighted work] in any work other than the manuscript itself"); _cf._ _Asset Mktg_, 542 F.3d at 757 (finding plaintiff granted defendant "unlimited" implied license "to retain, use, and modify" work when plaintiff previously evinced no intent to limit the scope of defendant’s use).

-->
