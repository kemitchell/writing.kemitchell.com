---
title: Against Legislating the Nonobvious
description: short-order feedback on the default contributor license in GitHub's draft terms of service
layout: post
tags:
- Open Source
- GitHub
- Licensing
---

GitHub have published [a draft of new terms of service for GitHub.com and related services][draft].  The draft has significant changes from [the current terms][current].  Especially the [default contributor license part][license]:

> Additionally, unless there is a Contributor License Agreement to the contrary, whenever you make a contribution to a repository containing notice of a license, you license your contribution under the same terms, and agree that you have the right to license your contribution under those terms.

[draft]: https://help.github.com/articles/github-terms-of-service-draft/

[current]: https://help.github.com/articles/github-terms-of-service/

[license]: https://help.github.com/articles/github-terms-of-service-draft/#d-user-generated-content

<!--jump-->

## Process

My first and primary concern is how GitHub are going about the change.  They [announced the change via blog post][blog] on February 7, with [link to a one-way feedback form][feedback] open until February 21 and an eye to adoption on February 28.  Today is February 16, and most of the attorneys I've spoken to who do this work and care about it have heard of the terms change, but being busy critters, haven't had a chance to review yet.  It's somewhere in the stack of things-to-read they maintain to keep current.  As it was for me, until someone mentioned the inbound license change offhand at [WONTFIX].

[WONTFIX]: https://maintainerati.org/

The most troubling is how closed and one-way the feedback process is.  An open input process would yield far more than just my input, or just that of the specific colleagues I hope will find or make time to dig in and respond in time.  From a company like GitHub, the one-way-e-mail form is strange.  It's consistent with desire to head off avoidable public kerfuffles when the new terms finally go live, and to a certain extent with respect for universal fallibility.  In other words, it's consistent with the value of CYA, which is real, but not with the output-improving virtues of open process, which is also real, and a great deal more pleasant.

[blog]: https://github.com/blog/2314-new-github-terms-of-service

[feedback]: https://github.com/contact/terms-of-service

GitHub are within their rights to update their terms, within very broad limits, more or less however they like, whenever they like.  For binding effect, they have to give notice and an opportunity to continue under the new terms or leave.  But of course that's hardly the whole story.  GitHub uses and makes a whole of good open source software, but GitHub and the GitHub user community aren't synonymous with open source.  As a distinct entity with different interests and constraints, they maintain a relationship with the community, just like nearly every other self-contained institution in the software world.  Mindshare with the open source community is their most precious asset.  And as the current forum of preference for a great many developers, the knock-on effects of their decisions throw big weight.  While GitHub have the wheel---and they've certainly earned it for now---they can do real damage.

Of course, they could have done a lot less to make this open, too.  I'm grateful for what they have done, and mindful of how much it differs from standard company practice, if not standard "open source company" practice.  It's exactly because I think GitHub and their terms are _muy importante_, and because I think they want to do The Right Thing, that I'm taking the time to give specific feedback.  It's exactly because I _do_ believe in the output-improving virtues of open work that I'm doing my writing here, on the blog, and sending a link via the feedback form.  I probably won't be able to do a full read and write-up on all the draft terms, but I can give a bit on the default contributor license, which obviously deserves the time.

First line-by-line comments.  Then a few general thoughts.  Working fast here!

## Line-by-Line

Breaking the default contributor license out structurally, with numbered annotations to pinpoint commentary:

> Additionally,
>
> unless there is a (1) Contributor License Agreement (2) to the contrary,
>
> whenever you make a (3)(4) contribution to a repository containing (5) notice of a (6) license,
>
> you license your contribution under (7) the same terms,
>
> and (8) agree that you (9) have the right to license your contribution under those terms.

1.  Contributor license agreement is not a legal term of art, but an industry term.  Like all useful terms, it's a bit fuzzy.  For example, is the [Developer Certificate of Origin][DCO] a CLA?  Most hackers would say it's not ... and that's part of the point.  Is [section 5 of the Apache License Version 2.0][apache]?  Apache publishes separate form styled "contributor license agreements".  Apparently not.  If I put the DCO in CONTRIBUTING and refer to it as a CLA, does that count?

2.  If the CLA grants a copyright license only, and this new default license is read to grant a patent license, as well, does the contributor grant a patent license, too?  That scope problem could also affect the warranty of title later on.  If the outbound LICENSE is copyright-only or arguably so, and I know I own copyright, but not patent, do I end up making a patent title warranty, as well?

3.  What is the "contribution"?  Just copyrightable material?  Embodied inventions?  Whatever the "notice of license" gives rights to?

4.  When does work become a "contribution"?  Only via pull request sent by the author of all commits on the branch?  Whenever commits by a GitHub user end up in the tree of a project on GitHub?  Both the current and draft GitHub terms of use take a license for other users to "fork" a public repository---a concept native to GitHub, and implemented specifically on its platform.  That's not universal, but its meaning is mostly unambiguous in the GitHub context.

5.  What counts as notice of a license?  Is package metadata sufficient?  What if the repository lacks any attribution --- just a license, but not byline or header comment indicating who might be giving a license?

6.  Is the default contributor license triggered by contributions to projects published under public domain dedications or snarky jabs at copyright in LICENSE?  I don't recommend that folks use those approaches, but significant projects do, and I think it's wrong to run roughshod over the anti-IP set.  Some great hackers in that group.

7.  There's no requirement that repositories---public or private---use open-source or even public license terms if they use such terms at all.  What happens when a user sends a pull request to a repository with proprietary terms in LICENSE?  If the project is dual-licensed, do I get to pick?

8.  Bravo for not falling back on the old, reliably alienating lawyer-garbage that is "represents and warrants".  "Agree" is less bad.  But why not "guarantee" or "ensure" or "promise"?  But then --- to who?  Apart from GitHub, perhaps, who gets the benefit of the warranty being made?  If indeed anyone can, this is a radical departure from standard form open source licenses, with the exceptions of Larry Rosen's less popular Academic Free License and Open Software License forms.

9.  Developers don't understand [work made for hire][wmfh] rules.  That's a community education issue, as well as a business risk management issue.  It's one I've [thought about addressing][pledge].  It seems wrong to impute legal knowledge to GitHub users that we know they don't have, collectively.  An additional legal overlay will only further complicate cases where well meaning contributors get work made for hire or assignment wrong.

[DCO]: https://developercertificate.org/

[apache]: https://www.apache.org/licenses/LICENSE-2.0#contributions

[wmfh]: http://worksmadeforhire.com/

[pledge]: https://github.com/berneout/berneout-pledge/blob/master/pledge

## General Thoughts

1.  How does one opt out of this provision, as a repository owner or as a contributor?  How does one make an opt-out clear to potential contributors?  If I mention in a contribution that I choose different terms for a very significant patch, would the new terms simply override my express statement of intent?  If I don't want to rely on the default contributor license, perhaps because I use something other than a "contributor license agreement" to manage contributions, how do I do that?

2.  There is a viable and increasingly strong argument that inbound=outbound is an established norm in the open source software community.  That will never be as good as an express license without legislation or very strong court opinions, but implied licenses are very possible under existing law, and a strong, recognized norm shores up the argument.  I would strongly prefer voluntary statements and actions by contributors that recognize the inbound=outbound norm in the community over a change like the draft default license, specific to just a particular platform, and reliant on the rather tenuous consent theory that props up website terms of service.  Courts love to throw terms of service out in unfair circumstances.  Starving Hacker Joe inadvertently giving MegaCorp project steward a patent license might get there.

---

That's all the time I have.  Best of luck to all the good folks at GitHub!
