---
title: You Can Still Use the Software
description: Justin Colannino on what's up with new software licenses
brief:  Specialist software companies want to draw a line between you and cloud companies.  Microsoft wants to smudge it out.  What do you want?
tags:
- Open Source
---

Justice Colannino, open licensing lawyer for Microsoft, published a short piece on GitHub's blog, ["What's up with these new not-open source licenses?"](https://github.blog/2021-03-18-whats-up-with-these-new-not-open-source-licenses/), about the licenses software companies are adopting.  With admirably few words, Justin draws a distinction between "single-source" projects and other projects, echoing Dirk Riehle's ["single-vendor open source"](https://dirkriehle.com/2020/04/13/single-vendor-open-source-firms-dirk-riehle-ieee-computer-column/).  He then tags two popular business models big companies don't like, "open core" and "dual licensing", in remarkably short, simple, accurate sentences.

Justin's post ends with an equally punchy section called "What this means for developers".  The heading asks the right question.  But oddly enough, Justin doesn't actually answer it:

> Open source-licensed projects with a non-profit home, neutral trademark ownership, and multiple significant contributors are less likely to face pressures to relicense. ...  If you take a dependency on such projects, you may face the for-profit company relicensing to protect its business.

Single-source projects might change their license terms.  Makes sense.  But why does that matter?  Justin doesn't say.  What's up with that?

In Short: Unless you work for Microsoft, Google, Amazon, or another cloud platform, it almost certainly _does not_ matter.  Not at all.

Licenses aren't mystical talismans. They don't let the magic smoke out if you touch them.  They're functional prose.  They're text files.

The effect of nearly every license Justin's alluding to is to _keep the software free for the overwhelming majority of users_, but not Microsoft or its megaton cloud frenemies.  Of course it is.  Quoting again:

> Both models [open core and dual licensing] use open source for exponential growth.  The developer that grabs the free and open product today is (or works for) tomorrow's paying customer.

This doesn't work if your license prohibits "grabbing" your software---finding it online, downloading a copy, building new stuff with it.  To drive broad adoption, the licenses _have_ to allow the vast majority of would-be adopters to do this for nil.  Then the companies sell a tiny percentage of those cheapo adopters something more, for money.  With conversion that low, throughput must be massive.  So the prime use case must be free.  Among other things.

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

We also see many of these new licenses following [PolyForm](https://polyformproject.org/licenses)'s lead in writing out their rules in plain, approachable terms devs can actually read for themselves and understand with confidence.  [Elastic's new license](https://polyformproject.org/) is no exception.  They're going above and beyond even the "open" state of the art.

Stepping back and taking it all in, the interests here couldn't be plainer:

Specialist software companies like Mongo and Elastic want to split the users they need off from the generalist cloud companies "eating their lunch", so they can prohibit the cloud companies from eating their lunch.  They have every incentive to make the distinction sharp and clear.

Generalist cloud companies like Amazon, Microsoft, and Google want all the lunch they can get, so they work to cloak themselves in indivisible "community" and absolutist "principle".  They have every incentive to smudge out and skip details.

The weak play on the cloud side is to boo loudly at users with a kind of [slippery slope argument](https://en.wikipedia.org/wiki/Slippery_slope).  First they'll come for _our_ "freedom" to use this stuff without paying.  Then they'll come for _your_ freedom to use this stuff without paying.  There's nothing to stop them!

That makes no sense.  Why are they releasing software to begin with?  Again: to drive adoption.  No free adoption, no paid upsell opportunity.  You don't dive head first into the software market looking for treasure and shut the valve on your oxygen tank when you get to the bottom.

The stronger cloud-side play avoids repeating and thus reinforcing the distinctions smaller companies understandably make, which also happen to focus on what cloud companies are doing.  Instead, double down on ways of thinking and talking that make those lines invisible, unimportant, or threatening.  Which is why we see "not-open source" in big, bold type at the top of Justin's post and a unstated assumption of binary, open-or-not-open throughout it.  A short post on fairly lame licensing questions, without a lot of legal or other insight devs couldn't grasp for themselves, on perhaps the most important blog catering to developers on the Internet.

We are talking about a tiff within a small corner of the industry.  All of the people involved---the open-camp devs who went to work at cloud companies, the open-camp devs who went to work at startups and independent shops---share an absurd amount in common.  But their business interests conflict.  So the specialist shops want to edge the cloudies out, and the cloudies want to edge specialists out.  Neither side wants to admit they've both grown up, gone into business, made compromises, and stopped hacking like they used to.

The specialists are writing new licenses that totally preserve the lived rather than ideological or conference-circuit-social experience of open source: finding good software online, realizing you can have it for free, getting your job done, and getting away with it.  But also drawing a line in front of companies that were expected to fight for the greater hacker good, but instead point to license terms, take money, and run.  [Sound familiar?](https://www.linuxtoday.com/infrastructure/1999121000105NWLF)

The cloudies are straining to call software, developed in the open on the Internet, with license terms that let nearly everyone not working for a big cloud infra oligopolist use for free, "not open" every chance they get.  They're insinuating their rivals are "using" the good name of open source and the fellow-feeling of "community", implying a debt to that community that they are entitled to collect for their corporation.  Link your favorite [ESR](https://en.wikipedia.org/wiki/ESR) post _not_ about money and how companies better share it here.

Nobody outside these companies should give a damn for one side or the other.  There is a larger, broader, and far more important concern at stake: the health, stability, and dynamism of the software game as a whole.  If you love software: How does this all affect the ability of good programmers to do their best work?  If you see more broadly: How does this all affect the capacity of software makers to serve society?

It's no secret I'm with the upstarts here, at least when they're thinking things through.  And I've done a bit of work for companies writing new licenses, though none of those named above.

My fundamental view is that fairness and efficiency are far older, more fundamental, and more important than any fragile ideological purity of "openness" triangulated by mercurial startup promoters staging a marketing coup in the 1990s---and racking up marketable stock options to show for it---even though those decades happened to be early, formative ones for me personally.

Open source matters outside a narrow software geekdom because the Internet made sharing digital stuff cheap and easy on a massive scale.  It took a little longer---until about [1994](https://en.wikipedia.org/wiki/Transport_Layer_Security) or [2000](https://en.wikipedia.org/wiki/PayPal#Early_history)---but the Internet made doing deals and paying people cheap and easy, too.  Depending on how count, [Stripe](https://stripe.com) is at least a third--generation payment processor.  Dumb suckers abound to publish free legal [content](https://projects.kemitchell.com) and [infrastructure](https://commonform.github.io) for nothing.

Open source is at its worst when we treat it like an end in itself, like an [identity](https://writing.kemitchell.com/2016/05/13/What-Open-Source-Means.html).  We should remember what open source was good for---and the fact there was never any strong, universal agreement there---and hack the systems we have and could have to advance those goals.  I don't happen think naked corporate wealth redistribution was one of them.  Or least not one I found inspiring.
