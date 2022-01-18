---
title: Payability, Form, and Substance
description: getting company to pay you isn't just about a legal entity
tags:
- Open Source
- Funding
---

Reading [Nicholas Zakas' "Making Your Open Source Project Sponsor-Ready"](https://humanwhocodes.com/blog/2021/12/making-open-source-project-sponsor-ready-companies-trust/) and [Filippo Valsorda's "Professional Maintainers"](https://blog.filippo.io/professional-maintainers/) last week, I was struck by how they both made the same too-rare but crucial point: a key part of getting paid by companies is taking a form that companies _can_ pay.

Nicholas writes:

> Companies are not going to create a new process to pay you.

Filippo writes:

> Maintainers need to be _legible_ to the big company department that approves and processes those invoices.

After many conversations, I've settled on the word "payability" for this phenomenon.  _If you want to get paid, you have to be payable._

Nicholas and Filippo differ on how you should go about this.  Nicholas recommends signing up for "trusted intermediaries"---Open Collective and GitHub Sponsors---that at least some companies have already figured out how to pay.  Filippo recommends forming an LLC that can bill companies directly:

> You'd be amazed how much harder it is to explain "what the fuck is an open collective?" for a $10k donation, compared to paying a $100k invoice to an LLC that filed a W-9 or W-8BEN and takes payment through ACH.

Part of payability is being a _thing_ that companies can pay.  An LLC.  A corporation.  A foundation.  Not _a project_.  Not _a guy_.

But there's another part to payability: offering a _transaction_ company process can approve.

Even if you have an organization ready to receive payment on your behalf, payor's procurement pipeline and accounting controls still need to grok what they're paying _for_.  If companies could pay whoever for whatever, so long as they're an LLC and send an invoice, a whole lot bribes, kickbacks, and outright thefts would walk off balance sheets through accounts payable, papered as purchases or service contracts.  This absolutely does happen, which is why companies invest in surveillance, control, and accountability against it.  "We should pay these people because we want to pay them." is _the_ big red flag.

Interestingly, Nicholas and Filippo don't seem to differ that much on what they actually see developers selling.

Nicholas begins by stressing "value proposition".  The value is the value of the software, like "find and fix problems in your JavaScript code" for ESLint.  But that isn't a value proposition so much as value already delivered.  Sponsors don't pay to find problems in their JavaScript.  They are already do that, with ESLint, for free.

What Nicholas actually recommends you sell is sponsorship, by which he means `README` and website logo placement advertising.  Filippo mentions invoices for "support and sponsorship", putting support first.  But take a second look at Nicholas' recommendations, you see he's actually saying much the same.  He stresses that sponsor due diligence will encompass speed and professionalism in issues and pull requests, documentation, and so on---a bunch of points relevant to "professional service" rather than ads.

What's more, both Nicholas and Filippo seem to include maintenance---ongoing work on the software---in "support".  Nicholas mentions roadmaps _with delivery timeframes_.  Filippo mentions resolving bug reports.  So the full package here is maintenance, support, and sponsorship.  The idea is that a deal lets the company paying the money say it has a private, company-specific deal for maintenance and support.  Unless the terms specify support channels, SLAs, and the like, that's a distinction without a difference if literally everyone on the Internet also gets support and maintenance, just by showing up on GitHub.

This leads to a second aspect of payability.  I have definitely seen company payments to open software developers take _forms_ different from their _substance_.  In other words, what the company pays for isn't really the same as what invoices and contract terms say they get.

This appeals to the naive moralism both Nicholas and Filipo call out.  Nicholas writes:

> There’s a fairly common mantra online about why companies should sponsor open source projects: because it’s the right thing to do. ...
>
> The harsh reality is that companies don't operate as charities.

Filippo links [the obligatory xkcd](https://xkcd.com/2347/).  Upshot: Maybe we can still get donations because it's the right thing to do, and just dress up like businesspeople doing business to get paid.

I've seen maintainers "hired" as independent contractors and paid every month without a single documented deliverable to the company.  This is the worst from a lawyer's point of view, because those terms almost certainly say that the company owns everything the dev does, without any mention of release.  As consolation, what those terms actually say may not matter at all, at least while things are going good.  They only exist to paper over payment to the dev, because a high-level technical manager or technical founder wants that to happen.  The companies involved are invariably small.  Startups, mostly.  No procurement processes.  No accounting control.

The same can happen with support contracts, especially when the software and documentation are good enough that the devs receive roughly zero support tickets from any particular company in a year.  All the real work then is in features and bugfixes.  If the actual reason the company pays is that the company, or someone with pull at the company, _wants_ to pay, that's irrelevant.  But underlying it all is the risk of a reckoning.  It's the same problem Filippo identifies with working on open source for a big company:

> Executives and promotion committees start asking "what is it that we pay you for exactly?", and suddenly you're spending more and more time proving your work is important, and less and less time doing it.

Just replace "executive and promotion committees" with "procurement officers and managers under budget pressure".

The same afflicts logo placement sponsorship.  How much is that really worth?  Devs chase company sponsorships because companies can write bigger checks.  Sometimes those checks start out big because an internal "champion" at the company works with you to sell the logo ad as high-value.  If that deal gets reviewed, can the dollar figure still be justified?  Could they get more for less somewhere else, like a conf?

One of the reasons I stress dual licensing as a model more devs should consider more often is how hard and square it hits payability.

With dual licensing, the value proposition really _is_ the proposition.  Companies pay you because your software is good and they want to use it.  You don't have to have a friend inside the company who really wants to pay for software you give away for free, who can help you pretend that you're charging for something else, and then leave the company or lose pull.  There's no concern some accountability system will flag your payment stream and cut you off because you're not really selling what they're paying for, or what they're paying is out of proportion to what they get.

There are only trade-offs in this game, no pure and easy wins.  Sponsorship, tag-along support, and tag-along maintenance are suiting some projects just fine, and I'm glad for it.

The important point is that slowly but surely, one convo, blog post, and story at a time, we're working the money factor back into our mental picture of open development and software production.  We're becoming more realistic, better primed to make decisions that get more good software out of more good people at global scale.  Our language is evolving, improving our conversations with it.

---

Special thanks to Nicholas and Filippo for their blog posts.  It's really heartening to see such time and effort spent writing frank and useful guides for fellow devs.
