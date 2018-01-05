---
title: CLAs are Not a Conspiracy
layout: post
tags:
- Open Source
- Licensing
---

Earlier this week, I read Ben Balter's [_Why you probably shouldn't add a CLA to your open source project_](https://ben.balter.com/2018/01/02/why-you-probably-shouldnt-add-a-cla-to-your-open-source-project/).  I really respect Ben, his writing, and his work at GitHub.  But I fundamentally disagree with his post, on points general and specific.  I'd like to give an alternative point of view.

As I understand Ben's argument:

1.  Open source stewards should put attracting contributors first.
2.  CLAs increase friction for new contributors.
3.  Plenty of open source projects seem to get by without CLAs.
4.  So by default, don't use them.

I'll quibble with each link in that chain, as well as with the conclusion overall.  But I also want to address some themes cutting across Ben's discussion:

1.  Lawyers are biased against, or incapable of, effective advice on open source licensing and community matters.  Programmers at steward-companies should regard lawyer advice with suspicion, and push back against it.
2.  CLAs are mostly cover-your-ass maneuvers for steward-companies.
3.  GitHub's recently updated site-wide terms of service better solve the underlying problem.

We see differently on those points, too.  That probably goes a long way to explaining why we disagree on CLAs.

Overall, my view boils down to:

1.  Creating records of contributor license grants solves real legal problems.
2.  Educating contributors about those problems, and making them potential contributors to better solutions, is part of what open source should teach.
3.  Contributor licensing needn't cause high friction.
4.  It's often impossible to go back and get contributor licensing records for past contributions, and hard to start collecting records when you've done without before.
5.  So by default, when starting a new project, ask for and keep records about contributor licensing from the get-go.

## Your lawyer is not the enemy.

I'm a lawyer, and I give lots of advice on open source licensing.  The most disturbing part of Ben's post was its portrait of lawyers as narrow-minded specialist-automatons who can't see the whole open source picture, aren't supposed to, and ought to be suspected, resisted, and overridden accordingly.  Even when they're trying to look after the interests of the company cutting the developer's check.

Ben writes:

> ... legal's role (and area of expertise) is to advise business owners how to minimize risk, not how best to run a successful open source project (the maintainer's area of expertise)

I respectfully disagree.

Any transactional lawyer that takes a question from a client, catalogs every conceivable risk, prescribes the maximally effective mitigation for each one, ignoring cost, and calls the matter resolved has failed to do their job.  They should expect follow-up questions on the likelihoods and practical costs of the risks they've identified, the costs of the defenses they've described, and alternative preventive measures that accept more risk at lesser cost.  In a developed attorney-client relationship, the lawyer should come to the question with a sense of the client's taste in risk, their financial picture, strategy, and timing, and tailor advice accordingly.  For scrappy upstart clients, lawyers should proactively address whether the client can defer a cost until later.   Can they fix it later at reasonable, if greater, cost?  Can they get a deal closed quicker or cheaper by omitting provisions for unlikely risks?

It's also unclear why Ben thinks maintainers rank experts in open source community management.  Whether Ben means "maintainer" in the sense of a steward-company, as he does elsewhere, or individuals, my experience doesn't bear out much expertise in community shepherding.  I know a number of individuals, and a few foundations, with deep experience developing or managing open source project communities.  But most lead maintainers and BDFLs start out as reluctant leaders.  They see themselves first and foremost as experts in software development or computer science, not management or public relations.

Even seasoned project leaders don't immerse themselves in intellectual property law or the state of the art in open source licensing.  They tap lawyers with that knowledge when they need it.  When that kind of lawyer stands available to a developer through a company, it's absolutely true that the lawyer's professional duty requires looking after the company's interests.  That's what companies expect when they pay people, whether they pay them to write legal advice or to write software.  Fortunately, when the company's managers decide that the company's interest is in stoking and tending an open source developer community, there's no inherent conflict between what the project needs and what the lawyer, or the programmer, ought to advise.

So when Ben writes that the cost-benefit analysis of CLAs:

> ... should be resolved in favor of contributors, not the corporation

It reads to me a bit like:

> Ask your lawyer if no CLA is right for you.

Doctors don't like "ask your doctor" ads, because doctors aren't vending machines.  Their duty to provide competent care ranges broader than matching people to pills.  That duty runs to their patient, not to drug companies, not to others who may know or rely on the patient.  Likewise with lawyers.  They aren't knee-jerk risk minimization machines.  That's reducing their job to one tool in their kit.  As professionals, their responsibility runs to their clients, full stop.  Good lawyers don't just identify risks, they come up with ways to address them that make sense for their clients.

Encouraging employee mutiny dodges the problem of making open source stewardship and contribution a rational choice for companies.  If we want more quality open source software out of companies, and more company support for contributions from others, we need to show and tell that releasing and stewarding open source projects benefits company-stewards.  Casting steward-community relations as a zero-sum game, then encouraging employees to take the side of community over employer, makes companies and company counsel suspicious of the open source community and open source programmers.

Granted, if company counsel doesn't take the time to read up on open source, or to understand how it fits into the company's overall strategy, employees should encourage them to do so, or encourage management to seek better counsel.  There are many good open source lawyers to choose from.  That those attorneys look for risks that others miss doesn't mean they're ignoring opportunity or failing to assess trade-offs of CLAs.  That GitHub's interest lies in more users, low friction for newbies, and higher pull requests counts doesn't mean Ben's position on CLAs isn't well considered, either.  Legal approaches, like whether to use CLAs, are judgment calls.  Different calls often boil down to different biases.  Which is why it's so important to avoid generalizing about motivations, and focus on the arguments.

## CLAs solve real legal problems.

Copyright law gives software authors the right to sue others for copying, changing, and distributing their code without permission.  Open source licenses [reverse those defaults](https://oss.kemitchell.com/#defaults-and-overrides), so everyone is free to copy, change, and distribute.  Every contributor of copyrightable work to a project needs to apply an open source license to their work to make the whole open source.  They need to create records of doing so, to give users confidence.

"CLA" stands for "Contributor License Agreement".  But among programmers, CLA has come to stand for nearly any legal instrument that contributors handle for submission of contributions to projects stewarded by others.  CLA forms aren't standardized in the same way open source public licenses are, but a few forms get widely reused and adapted:

1.  The Apache Foundation's [corporate](https://www.apache.org/licenses/cla-corporate.pdf) and [individual](https://www.apache.org/licenses/icla.pdf) CLAs, from which Google derived its [individual](https://cla.developers.google.com/about/google-individual) and [corporate](https://cla.developers.google.com/about/google-corporate) forms
2.  The [Developer Certificate of Origin](https://developercertificate.org/), developed for the Linux kernel, now applied by other large projects, such as [Node.js](https://github.com/nodejs/node/blob/master/CONTRIBUTING.md#developers-certificate-of-origin-11)
3.  The Eclipse Foundation's [CLA](https://www.eclipse.org/legal/CLA.php), which Eclipse has deprecated in favor of the DCO, still used by other projects
4.  The [Oracle Contributor Agreement](http://www.oracle.com/technetwork/community/oca-486395.html), adapted for projects like [Clojure](https://clojure.org/community/contributing)
5.  The Free Software Foundation's [copyright papers](https://www.gnu.org/prep/maintain/html_node/Copyright-Papers.html)

Generalizing a bit, they aim to achieve combinations of:

1.  clear licensing of each contribution by its contributor
2.  some warranty that the contributor has the right to license their contribution
3.  assignment of some or all copyright in the contributions to the project steward
4.  some means of showing and documenting the contributor's decision to license, such as a signature or a `Signed-Off-By` tag in their Git commits

These goals correspond to common licensing issues:

1.  _Licensing_:  In order to assure users of the project that they won't be sued for infringement of intellectual property rights in the project, the project offers documentation, a process, or both, to show that each contributor licenses their contribution on open source terms.
2.  _Warranty_:
    - A license from a contributor is only good if they actually have the legal right to license the relevant intellectual property.
    - Individual contributors often believe they have the right to license intellectual property in their own work, when in fact [their employers or clients have those rights](https://worksmadeforhire.org).
3.  _Assignment_:
    - Enforcing license conditions, especially copyleft license conditions like those under the [GNU General Public License](https://www.gnu.org/licenses/gpl-3.0.en.html), is much easier when [a single copyright owner can register copyright](https://www.gnu.org/licenses/why-assign.en.html).
    - Relicensing onto different license terms is also much easier when a single copyright owner can take the decision to relicense, without tracking down and securing agreement from each contributor.
4.  _Records_:  Contributor licenses only protect users if they can find written evidence showing they were granted, on what terms, and for what intellectual property.

All of these issues directly affect users.  They also indirectly affect project stewards, who might get sued by users for leading users into intellectual property problems.  That means what looks like CYA for project stewards may also afford meaningful protection for users.

For example, most common CLA forms require contributors to guarantee that they have the legal right to license intellectual property in their contributions.  With rare exception, notably the [Open Software License](https://opensource.org/licenses/OSL-3.0) and [Academic Free License](https://opensource.org/licenses/AFL-3.0), open source licenses don't make any such guarantees.  (Some states' and countries' laws require, and imply, such a guarantee, regardless.)  As a result, a project steward that uses Apache-style terms gets more assurance about rights to license from contributors, under its CLAs, than it gives users, under [The Apache License](https://apache.org/licenses/LICENSE-2.0).

Having CLAs on file for a project gives the steward evidence with which to fight back against lawsuits for direct or indirect infringement.  But the process of requiring and collecting those documents also gives project users better assurance that they won't be liable for infringement than they'd receive from an open source license alone.  Giving the steward robust intellectual property provenance protection protects the foundation, which in turn protects its ability to coordinate, support, and compensate contributors to the project, improving it for users.

Overall, the most important function of CLAs is documenting some action, taken by each contributor, that shows they license intellectual property rights in their contributions on specific open source terms.  That evidence fills the gap between expectation of "inbound=outbound"---that contributors license their work under the same license already used for the project---and the law.

I'm not aware of any legal rule that reliably implies licenses for contributions to open source projects on the same license terms that the original developer licensed their work to the public.  The arguments for creating explicit records that contributors license their terms under the project's public license are the same as for ensuring that a project has license terms to begin with.  Putting a project's source on GitHub probably means you're alright with other folks running wild with it, but the lack of license terms is enough to give mindful, deep-pocket, and well-known potential users pause.  The situation for outside contributions differs only by the fact that someone else put notice of license in the repository for their work first.

Ben analogizes open source projects to take-a-penny, leave-a-penny trays in stores.  I wish that analogy were compelling, but I fear it's not.  Cash is fundamentally different from intellectual property licenses.  Pennies are physical items of specific value freely spent by those who hold them.  Copyright and patent licenses are intangible rights, whose scopes have to be set out in terms, that trace back to specific owners.  Placing a penny in a penny tray manifests a much more specific intent about the penny and what others can do with it than placing code in a public GitHub repository.

On top of that, pennies are as close to worthless as American coins can be.  There are strong arguments for [abolishing the penny](https://en.wikipedia.org/wiki/Penny_debate_in_the_United_States), to spare the country the hassle of dealing with them.  Licensing a patent covering a contribution under an open source license, on the other hand, can be a decision---or mistake---of multi-million-dollar proportions.  We shouldn't expect courts to imply licenses easily, and case law indicates that they don't.  When they do, we should expect them to scope those licenses narrowly, in keeping with the policy thrusts of copyright and patent laws, not the permissive bent of the open source licensing counterculture.

Long story short, proprietary is the default for software under copyright law.  It takes an open source license to turn proprietary-by-default software into open source software.  Many open source community members expect others to license their contributions as others have licensed before them.  Courts are capable of implying licenses from things that copyright holders do, but it is not enough to show that others expected to receive a license.  The rules about implied licenses are in some ways even less clear than rules about fair use, and we should expect courts to .

## Contributor licensing can be easy.

CLAs have a bad rep because they've been done badly.  Ben mentions a glaring misstep, very common in the Bad Old Days: requiring written copies of contributor-license or copyright assignment forms with handwritten signatures by mail.  It's perfectly possible to receive CLAs, or other records of similar effect, without printing, mailing, or hand-signing anything.

Consider the [Developer Certificate of Origin](https://developercertificate.org/).  The DCO isn't a "license agreement" per se.  It's a standardized statement made by contributors for the benefit of Linux kernel contributors and users.  The statement, or certificate, confirms that the contributor is licensing their work under the indicated license, and has the rights to do so, either because they did the work themself, or received permission from someone else.  Creating those records gives kernel developers evidence to fight back against claims that source code in the kernel came from someone else, who now wants to sue developers or users for infringement.  [SCO made such claims](https://en.wikipedia.org/wiki/SCO/Linux_controversies), the lack of evidence to the contrary led to much pain and wasted time, and kernel developers adopted DCO in response.

Nobody prints and signs the DCO.  Instead, developers refer to it by adding their name and a standardized `Signed-Off-By` tag to their Git commits.  Using `Signed-Off-By`, with a copy of the DCO in the repository, creates records of contributors licensing their contributions, and provides some assurance about their rights to do so.  Those records live in the code repository itself, in files and Git history.  They aren't _agreements_, in the strict sense of terms agreed between two or more parties.  They aren't legal _instruments_, in the sense of copyright assignments or deeds for other kinds of property.  But they are _evidence_ in favor of those who want to user kernel code freely, and repulse threats of infringement lawsuits.

The DCO was written very specifically for Linux kernel development workflow.  But it's not hard to adapt its approach to GitHub-style projects.

Breaking the DCO down to its core purpose, maximizing terms and process for minimum friction, GitHub-style maintainers could ask pull request authors about licensing, via a pull request comment, before merging their work:

> Do you license your contributions to this project under [Name of License], too?  If so, do you have permission from any employer, a client, or other group you're working with to release your work this way?

Affirmative replies create publicly accessible records on GitHub.  Those records address three of the most important goals of CLAs: confirming license terms for each contribution, confirming rights to give the licenses, and creating records of affirmative action by contributors.  For projects under permissive open source licenses, like The MIT License and BSD-style licenses, those are often the most important.

Many open source developers probably wouldn't think to call this kind of process a "CLA", in part because so many associate "CLA" first and foremost with the hassle of bad CLA implementations, rather than their functionality.  But the very informal, "starter" CLA process described above is a process by which a contributor (C) agrees (A) to license (L) their contributions.  It achieves the same major results as, say, an Apache Individual Contributor License Agreement, but substitutes process formalities familiar to developers---Git branches and pull request messages---for those familiar to lawyers---documents and signature pages.

We could adjust the process for more legal clarity, user confidence, or better record keeping, at the price of some more friction.  For example, we could require contributors to push a commit "signing" a file with their name in the Git repository, creating a record in the repository itself.  We could ask them to add licensing statements to source files they modify, already a common practice in some open source communities.  We could do either in Git metadata, rather than files.  We could ask contributors to provide their legal names, and perhaps the name of any employer or client that has given permission to release.  We could require more traditional-looking electronic signature, with cryptographic tools or an e-sign service.

Those tuning choices could add up to a contributor licensing process with a great deal more friction.  But it's equally possible to create meaningful records about contribution licensing with next to no friction.  What's more, it's possible to change the CLA process over time, for new contributions, going forward.  It often _won't_ be possible to go back and get contributor licensing records for old commits for which none was recorded.

Ben is absolutely right that pointless friction ought to be avoided, and that maintainers should consider the effects of added process on contributor communities.  But compared to other hurdles---learning Git, signing up for GitHub, grokking its conventions, figuring out project flow---contributor licensing processes can be relatively simple, transparent, and guided.

## Contributor licensing can be even easier.

A major benefit of using even a very informal, low-friction contributor licensing processes is education.  Even new developers who've figured out Git, GitHub, and project conventions end up learning a ton from the process of proposing and landing contributions.  Whether it's public licensing, code style, testing, documentation, or some other aspect of programming practice, contributors to projects that teach about these practices, rather than hide or ignore them for the sake of low friction, become community members who can understand and improve tools and techniques for all.

The alternative is gaps in standard practice, unrecognized by vast swathes of the community, that widen over time.  We've seen such gaps with patent licensing.  We're currently facing a gap with works made for hire and intellectual property ownership.  Experience teaches that the risk to any particular open source project of a licensing problem is low, especially during good times for the industry.  But the more vulnerable projects we create, the higher the risk any one significant project will suffer a significant problem.  Open source needs herd immunity.  We need to immunize or projects against known low-probability, high-cost risks, like SCO-style accusations, as a matter of course.

I've done some work [porting the DCO to GitHub-style development](https://github.com/berneout/berneout-pledge).  The port offers additional benefits, such as requiring contributors to make a single statement about contributor licensing once for all work on GitHub, and making it very easy to check automatically whether a new contributor has made a statement.  The language and tooling are on GitHub, and I've received pull requests.  They're a marked improvement over past practice, and could certainly be improved a great deal more.

One thing about the approach should not change.  The tools save individual contributors from a lot of complexity and uncertainty.  But they do not and should not sacrifice respect for open source developers.  Every developer is worth educating on matters as fundamental to open source as licensing work effectively.  It's worth reminding ourselves and others that releasing source code under open source terms is exceptionally generous.  Seeing more and more of that kind of generosity in our trade doesn't make it normal, or expected.  It makes our trade exceptional.

## Terms of service do not a community make.

## Spreading unsustainability around.

> Beware any model of open source sustainability that boils down to a more efficient succession of willing martyrs.
>
> <https://twitter.com/kemitchell/status/905890664600158208>


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
