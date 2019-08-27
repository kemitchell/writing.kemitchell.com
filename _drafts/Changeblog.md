---
title: Changeblog
description: a few thoughts on a friend's podcast appearance
layout: post
tags:
  - Open Source
  - Licensing
---

My friend Adam Jacob was guest on the [Changelog podcast](https://changelog.com/podcast/353) last month, and I totally missed it.  Fortunately, a client fresh off a successful exit, who apparently just can't take a break, happened to listen in, and sent me a link.

Mentioning me at all was not expected.  But Adam said some of what I'd expect from there.  For example, in somewhat general terms:

> I think Kyle is wrong.

Plus some absurdly flattering things, utterly unfit to reproduce here.

Adam and I will have lunch sooner than later.  But I'd like to go ahead and push back on two themes I heard cutting across his ninety-minute appearance.

## Cult of A Different Number

I think Adam very rightly criticizes tech businesspeople who focus too much on conversion rate, succumbing to deal-loss aversion.  But I think the same criticism applies to Adam's own emphasis on addressable market.  Rather than quit the cult of conversion rate for the cult of addressable market, we should admit that the funnel model is mostly a descriptivist anxiety pill for managers staring down business uncertainty, and not a framework for deriving tactical calls that apply across all of software.

It's just too simplistic.  Your "addressable market" is everyone who might buy what you're selling.  You "convert" those maybe-woulds to paying customers at some rate of success.  Paying customers return the money you spent producing your offering and landing their business, plus a profit, your "customer value".  Thus your business fortunes track:

Addressable Market &times; Conversion Rate &times; Customer Value

Adam rightly emphasizes that the goal is maximizing the product, not any particular factor.  Higher factors contribute to a higher product, of course, but overemphasizing any one can get you stuck at a local maximum via the others.  You might do better overall with a balanced blend, rather than by extreme measures to expand addressable market, convert customers, or maximize return at the expense of all others.

In application, Adam argues that database companies, especially those using new license terms, like Mongo and Elastic, focus too much on making sure they're the only ones who can monetize the open source projects they steward.  That prevents them growing addressable market size as they otherwise might.  To mix banal business metaphors, they jealously guard their share of the pie when they could be growing the pie overall.

The zinger:  From this point of view, seeing an AWS or a GCP or an Azure launch a hosted version of your open source offering should come as a welcome sign.  It creates more awareness of the product and entrenches it more firmly as an industry standard, expanding your addressable market.  Sure, your new competition will take some leads that might have been yours.  But if the creator of the software can't differentiate itself from generic, relatively lazy followers-on, something has gone very, very wrong.

The natural retort, which didn't come up on the podcast, asks why the advantages that make an AWS so much better than you at expanding addressable market can't be used to compete on conversion, too.  Perhaps Mongo or Elastic or the next vendor can offer substantial additional features, services, assurances, and so on.  But is that enough to overwhelm the network effects of AWS name recognition, marketing budget, sales presence, integration, financial girth, a contract likely already in place, and all the rest?

It's commonly said that an upstart has to offer a ten-times value improvement to unseat an incumbent entrenched by network effects.  The number isn't so important as the gist: your upgrade has to be a lot, lot better.  It's one thing to say the firm stewarding an open source project should be able to differentiate itself, as if the playing field were level.  It's quite another to say it ought to be able to clear an overwhelming superiority bar, especially when business, transaction-cost, and financial factors start to overwhelm technical details in procurement.

One way to clear a high bar is to make a ton of new value, all the time, at a relentless pace.  The Business Source License and other time-delay release pacts implement exactly that kind of commitment in legal terms.  It's a treadmill.  Stand still and you fall off the back.  Keeping unbroken pace is particularly hard with typical startup turnover and burnout time frames, which tick down for key founders and early hires first.

Another approach, complimentary rather than exclusive, is to withhold value created out of the open product, so it's not part of what the new, entrenched competitor gets for free.  In other words, shrink your open core, and allocate more of the value you deliver to the closed shell of add-ons around it.  Which is exactly what we're seeing with source-available licenses and features only available on the steward company's hosting.

## Meaning

Adam is doing some soul searching about the meaning of free and open source software, and what this thing is that he's identified with, promoted, and benefited from for so long.  I have done a bit of that myself.  But as engrossing as that personal process may be, for proper perspective, I think we have to remember:

If we have time for an identity-meaning-purpose crisis, that's a pretty sure sign our more basic needs feel securely met.  Securing more basic needs is most folks' day-by-day.

I don't think that everything that binds a software project together ought to end up in a license.  But I do believe in writing things out and passing them around.  The process helps develop what's actually held in common.  It's also a form of discipline, a reliable antidote to nod-along consensus that agrees only by avoiding disagreement, each member projecting their own views onto all others.  Open Source is rife with that, like Free Software before it.

If the gospel of open source boils down to nothing more than good social feelings from giving people like us what they want, I'm not surprised we come up wanting for transcendence.  When the good we do ourselves---ripe social jollies---is so concrete, and the good we do for others---even others like us, to say nothing of society more generally---so nonspecific, we are at serious risk of self-service under cover of self-deception.  We're edifying our own insularity.  We're probably just doing what we wanna do, and trying to make it sound meaningful enough to convince ourselves.

If I heard policemen or accountants waxing philosophical about how camaraderie among peers is all that matters, I'd cry foul.  I'd expect others to recoil from the line from lawyers.  There lie the old seeds of corporatism, of conspiracy against the laity.  In the end, we program for a reason.  If we seek for purpose, we'll found it outside the guild, not burrowing deeper within it.

Some of the folks getting what they want from open source these days are profiling grandparents, hocking kleptotokens to working people, feeding AI automation woo-woo to managers fighting union drives, surveilling all the interesting people we used to know at college, and colluding to suppress developer salaries, in part by prolonging a naivete about pay, spec work, and reputation that would be shocking in any other creative industry.  That's the writing on the wall.  My values aren't served by pretending I can't read it.
