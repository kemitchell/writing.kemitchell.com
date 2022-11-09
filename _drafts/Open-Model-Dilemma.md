---
title: An Open Business Model Dilemma
---

Abhi Vaidyanatha sent me a link to his ["Open-Core Companies Are Not Incentivized to Make Their Projects Good"](https://www.plural.sh/blog/open-core-companies/), having run across my [Open Source hype antidote reading list](https://writing.kemitchell.com/lists/Antidote).  Abhi's title baits some click, but he does hit an important theme.  Companies that offer related products or services, some for free, some for money, _do_ set themselves up for hard questions about how to allocate value among them and how to manage conflicts between them.

If we make this new feature free, will enough people still buy our enhanced version?  If we make our free app too easy to host, will enough people still pay us to host it?

Abhi's route around these problems is selling paid support instead.  But having done those deals and advised those kinds of companies before, I can't agree with what he writes about them in practice.  It's not that easy.  Open-core and service models differ in some meaningful ways, but in terms of conflicts of interest, it's getting to the same place by a different route.

There are companies out there selling paid services---support, training, integration, customization---for products they could clearly make much easier to use.  It's not necessarily any conscious conspiracy.  More often, I think it's just an effect of how they end up spending time.

It's also true that some customers renew support contracts over and over, sometimes without so much as a single ticket, simply as insurance.  But I have also seen sales to clearly needy companies fail and renewals declined by customers with tickets open.  Especially in leaner times, when procurement looks to cut its costs.  Someone realizes they can make their budget and still use the software.

The most remarked difference between professional services and application hosting is "scale".  It's harder to build another early-2000s Red Hat, especially since one already exists, than it is to outcompete 2020s Red Hat in hosting your own app.  Especially if you keep some features closed.  Especially if your app is not that easy to host.

But there's a long, long way between staying in the black and a billion-dollar valuation.  Not everyone wants to ring the bell at NASDAQ, but a handicap is a handicap.  Choose a model that's harder to sell, harder to service, harder to price up, then you're probably going to have a harder time, whether it's keeping your VCs from replacing you as CEO or keeping your landlord from locking you out of your apartment.

The fundamental problem is working on something valuable but charging for something---anything---else.  That sets up a triangular trade-off:

- scope conflicts between free and paid offerings (business-speak: "segmentation")

- how much your free offering does for sales of your paid offering ("conversion")

- risk that a rival will free-ride off your freebie and leech paid opportunity ("moat")

Linkages:

- Segmentation ↔ Conversion:

  If your free offering's closely related to your paid offering, you probably lose more sleep over whether to give away or charge for new work.

- Segmentation ↔ Moat:

  If you give too much work away, your potential competitors' free rides taken them further.

- Conversion ↔ Moat:

  TODO

Take a less remarked model, paid documentation.  If you sell the API doc for your open source through O'Reilly as a book, rather than just putting online, you've potentially put your project at a disadvantage to fully documented competitors.  You may also slow new adoption.  You can try to avoid by giving API doc away and selling only a guided tutorial in book form.  But someone else might might come along with their own, undercutting your sales.  If they're not also a maintainer of the project, they might have more time.  Eventually, someone may even PR a tutorial into your project's repository.

The more money you make, the more strategically impactful you are on the interests of others, and the better the intelligence your potential competitors have on you, the higher and faster the pressure on this dilemma will rise.  If your market is small, you're not undermining anybody's else business plan, and you're not doing business on someone else's platform, where they run a dragnet, you might could skip this blog post.  If you're doing a database people run on AWS, you're probably already in some kind of support group.

It's one of the rules of software that if somebody with a blog shows you a triangle and tries to make you choose, your challenge is to pick your favorite two, go all in, and shock the world with how far you can get with them, or to cheat.
