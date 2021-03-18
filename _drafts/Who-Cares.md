---
title: Who Cares?
description: Justin Colannino on new software licenses
tags:
- Open Source
---

Justice Colannino, open licensing lawyer for Microsoft, published a short piece on GitHub's blog, ["What's up with these new not-open source licenses?"](https://github.blog/2021-03-18-whats-up-with-these-new-not-open-source-licenses/), about the licenses software companies are adopting.  With admirably few words, Justin draws a distinction between "single-source" projects and other projects, echoing Dirk Riehle's ["single-vendor open source"](https://dirkriehle.com/2020/04/13/single-vendor-open-source-firms-dirk-riehle-ieee-computer-column/).  He then tags two popular business models big companies don't like, "open core" and "dual licensing", in remarkably short, simple sentences.

Justin's post ends with a section called "What this means for developers", which is also short and simple.  It asks the right question.  But it doesn't actually answer it:

> Open source-licensed projects with a non-profit home, neutral trademark ownership, and multiple significant contributors are less likely to face pressures to relicense. ...  If you take a dependency on such projects, you may face the for-profit company relicensing to protect its business.

Single-source projects can change their license terms.  Makes sense.  But why does that matter?  Justin doesn't say.

Unless you work for Microsoft, Google, Amazon, or another cloud platform, it almost certainly _doesn't_ matter.  Not at all.

Licenses aren't mystical talismans. They don't let the magic smoke out if you touch them.  They're functional prose.  They're text files.

The effect of nearly every license Justin's alluding to is to _keep the software free for the overwhelming majority of users_, but not Microsoft or its cloud competitors.  Of course it is.  Justin says why in his post:

> Both models [open core and dual licensing] use open source for exponential growth.  The developer that grabs the free and open product today is (or works for) tomorrow's paying customer.

This doesn't work if your license prohibits "grabbing" your software---finding it online, downloading a copy, building new stuff with it.  To drive broad adoption, the licenses _have_ to allow the vast majority of would-be adopters to do this for nil.  Then the companies sell a tiny percentage of those adopters something more, for money.  With conversion that low, throughput has to be massive.  The prime use case must be free.

We see this not just in the licenses, but in extra, explanatory writing from the companies.  MongoDB [published an FAQ](https://www.mongodb.com/licensing/server-side-public-license/faq) making double clear you can still use MongoDB as your database to build closed, commercial apps:

> ## What are the implications of this new license on applications built using MongoDB and made available as a service (SaaS)?
>
> The copyleft condition of Section 13 of the SSPL applies only when you are offering the functionality of MongoDB, or modified versions of MongoDB, to third parties as a service.  There is no copyleft condition for other SaaS applications that use MongoDB as a database.

They did the same thing when their free license was AGPL.

We see Elastic [doing the same](https://www.elastic.co/licensing/elastic-license/faq) for its new license just this year:

> ## I'm using Elasticsearch to put a search box on my cat-picture SaaS product.
>
> This is permitted under ELv2. Meow!
>
> ...
>
> ## My cat-picture SaaS product shows view-only Kibana dashboards of analytics on searches and views.
>
> This is permitted under ELv2. The use of Kibana in this case is limited and this does not represent access to a substantial portion of the functionality of Kibana.

We also see many of these new licenses following [PolyForm](https://polyformproject.org/licenses)'s lead in writing out their rules in plain, approachable terms devs can actually read for themselves and understand with confidence.  [Elastic's new license](https://polyformproject.org/) is no exception.  They're going above and beyond what we've seen in popular open licenses.

Stepping back and taking it all in, the interests here couldn't be more clear:

Specialist software companies want to split the users they welcome off from the generalist cloud companies eating their lunch, so they can prohibit the cloud companies from eating their lunch.  They have every incentive to make this distinction sharp and clear.

Generalist cloud companies want all the lunch they can get, so they work to cloak themselves in indivisible "community" and absolutist principle.  They have every incentive to smudge out and skip over details.

The weak play on the cloud side is to boo loudly at users with a kind of [slippery slope argument](https://en.wikipedia.org/wiki/Slippery_slope).  First they'll come for _our_ "freedom" to use this stuff without paying.  Then they'll come for _your_ freedom to use this stuff without paying.  There's nothing to stop them!

That makes no sense.  Why are they releasing software to begin with?  Again: to drive adoption.  No free adoption, no paid upsell opportunity.

Specialists developers have an obvious reason to block cloud providers: they're outcompeting them for business, with their own software, without paying anything back.  And they have every reason _not_ to block users.  You don't dive head first into the software market and shut the valve on your oxygen tank when you reach the bottom.

The stronger cloud-side play avoids repeating the distinctions smaller companies make, instead reinforcing ways of thinking and talking that make that difference invisible, unimportant, or heretical.  Which is why we see "not-open source" in big, bold type at the top of Justin's post and a unstated assumption of binary, open-or-not-open throughout it.  From perhaps the most important blog catering to developers.

We are talking about a tiff within a small community.  All of the people involved---the open-camp devs who went to work at cloud companies, the open-camp devs who went to work at startups and independent shops---share an absurd amount in common.  But their business interests conflict.  So the specialist shops want to edge the cloudies out.  And the cloudies want to edge specialists out.

The specialists are writing new licenses that totally preserve the lived rather than ideological or conference-circuit-social experience of open source: finding good software online, realizing you can have it for free, getting your job done, and getting away with it.  But also drawing a line in front of companies that were expected to row for the team as a whole, but instead point to license terms, take their money, and run.  [Sound familiar?](https://www.linuxtoday.com/infrastructure/1999121000105NWLF)

The cloudies are straining to call software, developed in the open on the Internet, with license terms that let nearly everyone not working for a big cloud infra oligopolist use for free "not open" every chance they get.  They're insinuating their rivals are "using" the good name of open source and the fellow-feeling of "community", implying a debt to that community that they are entitled to collect.

Nobody outside these companies should give a damn for one side or the other.  There is a larger, broader, and far more important concern at stake: the health, stability, and dynamism of the software game as a whole.  If you love software: How does this all affect the ability of good programmers to do their best work?  If you see more broadly: How does this all affect the capacity of software makers to serve society?

It's no secret I'm with the upstarts here.  And I've done a bit of work for companies writing new licenses, though none of those mentioned here.  My fundamental view is that fairness and efficiency are far older, more fundamental, and more important than any fragile ideological purity from decades long past, even though those decades happened to early, formative ones for me.

Open source matters outside a narrow software geekdom because the Internet made sharing cheap and easy on a massive scale.  It took a little longer---a couple decades, until about 1994---but the Internet made doing deals and paying cheap and easy, too.  Open source is at its worst when we treat it like an end in itself.  We should remember what open source was good for, and keep our eye on those goals.  Naked corporate wealth redistribution wasn't one of them.
