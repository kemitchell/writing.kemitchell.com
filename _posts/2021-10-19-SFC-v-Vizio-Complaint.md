---
date: 2021-10-19T17:59:03-07:00
title: GPL Had Better be a Contract
description: SFC's Vizio suit brings the right kind of claim
tags:
- Licenses
- Software Licensing
---

Software Freedom Conservancy [announced today](https://sfconservancy.org/copyleft-compliance/vizio.html) that they are suing Vizio, which makes TVs, for violations of GPLv2 and LGPLv2.1.  [Their website has a copy of a signed complaint](https://sfconservancy.org/docs/conservancy-v-vizio-original-complaint-2021-10-19.pdf), the legal document you file with a court to get a lawsuit started.

Upshot:  It looks like SFC's suing for breach of contract.  They're claiming explicitly that GPLv2 and LGPLv2.1 are contracts, that Vizio breached those contracts, and that they should be held accountable under contract law.

The main remedy SFC requests---the thing they're asking the court to do for them---is to order Vizio to give them full corresponding source code, as agreed under GPLv2 and LGPLv2.1.  That's called "specific performance".  It's a remedy under contract law.  Not property law or intellectual property law, like copyright law.

SFC claims to be entitled to specific performance not because they own copyright in the GPLv2 or LGPLv2.1 software.  They didn't offer those terms for the software.  If there's a contract between developer and Vizio, SFC wasn't a party to it.  Rather, they're claiming to be "intended third-party beneficiaries", another contract concept.

Usually, only the parties to a contract can sue for breach of it.  But there's an exception for others the parties intended to benefit.  Those others can sue when they lose out because of a party's breach.  In cartoon form, if we agree that I'll pay you $1,000 and you'll do a unique paint job on my brother's car, I pay, but you don't paint, my brother might sue you as a third-party beneficiary of our contract.  He might ask for specific performance, since there's no substitute for your unique work.

Even rhetorically, SFC's complaint is all contract, all the time.  The complaint defines GPLv2 and LGPLv2.1 as "the GPL Agreements", not "the GPL Licenses".  "License" is a property law term.  "Agreement" is a contract-law term.

Explaining the "GPL Agreements", SFC says:

> At their heart is a simple bargain.  Recipients of the licensed software are entitled to use, examine, modify, adapt, and improve the software however they see fit.  In exchange, the recipients must allow their licensees to use, examine, modify, adapt, and improve the software as they see fit.

"Bargain" is a contract-law concept, as "permission" is a property-law concept.  Lawyers often say that contract law aims to give parties "the benefit of their bargain".

"Exchange" is also a key contract-law concept.  Most contracts come about by an exchange of promises.  If I promise to clean your carpets and you promise to pay me $100 for the work, we have a contract based on exchange of promises, to clean and to pay.  If I promise to clean your carpets without you promising anything back, contract law requires extra steps before it will enforce my promise.  You might have to show that you relied on my promise and lost out when I failed to come through, such as by canceling an appointment with another carpet cleaner, then losing a deal with a potential lodger because the carpets were dirty.

SFC doesn't take this extra step.  They present the GPLs as classic, exchange-based contracts:

> In short, each recipient of a computer program distributed under a GPL Agreement obtains a license from all of the authors of the problem to copy, use, distribute, re-distribute and modify the program, and in return, the recipient agrees to comply with the GPL Agreement's requirements.  These requirements include the obligation to provide Source Code under the Source Code Provision.

And later on, specifically on Vizio:

> By installing versions of any of the programs [...] on its smart TVs [...], and by distributing such smart TVs to the public, Vizion became a part to the GPLv2.  If Vizio were not a party to the GPLv2, it would have no rights to use or distribute any of these programs, or any modified versions thereof, at all.

Vizio gets a license.  The developers get promises to provide source code.

SFC clearly sees everyone as intended third-party beneficiaries of GPLv2 and GPLv2.1.  But they're not suing on behalf of everyone.  In order to shore up their own legal claim, in the their own name, they went out and bought some Vizio TVs.  Apparently they dissected these units, unboxing carefully for any signs of complete corresponding source code.  None was found.  When they asked Vizio, they got source back, at least six times.  But they were never convinced that what they got was all the source code for all the models sold.

Knowing SFC, at least some of the folks over there probably aren't going to be caught actually watching all those nonfree televisions.  It's a little sad to think of them going on a shopping spree, unpacking them all like forensic investigators, and boxing them back up again like they came out in pieces.  Maybe if they ever get source.  Which might take a while, knowing California courts.

Relatedly, SFC are also big proponents of their [GPL enforcement principles](https://sfconservancy.org/copyleft-compliance/principles.html).  Those start off thusly:

> Our primary goal in GPL enforcement is to bring about GPL compliance.

And continue later:

> Community-oriented enforcement must never prioritize financial gain.

Getting the other side to pay money---known legally as "damages"---is a remedy under both copyright and contract law.  When it comes to getting paid, suing for copyright infringement often commands a lot more, with a much easier time in court, than suing for breach of contract.  Under specific circumstances, US law specifies "statutory damages", a kind of mandatory minimum for each infringement.  The absolute floor is $200 per, in cases where the defendant had no idea.  For many cases, it's between $750 and $150,000, which is how the recording industry got those scary, multi-million dollar filesharing verdicts in the 2000s.

On the other hand, license compliance, in the form of an order to provide and license source code, takes the legal form of an order for specific performance.  Copyright lawsuits can get you court orders for the other side to stop infringing.  But we don't expect courts to order licensees to comply with conditions they didn't comply with.  We expect them compensate the copyright owner with damages for those losses.  Specific performance is for contracts, when the party that failed to came through made a promise, rather than simply received a condition.

Contract law also looks to reduce wrong done to dollar values whenever possible.  But it recognizes that parties can make deals for things that aren't readily replaceable at cost.  When one party promises unique property or unique services, that uniqueness suggests money alone couldn't give the plaintiff the benefit of their bargain.  It might not even be possible to come up with a number in the first place.

SFC is hoping the court sees the Vizio source code just this way.  The licenses say they ought to have the source code for their televisions.  No other source code does that job.  And if anyone can give it to them, it's Vizio.

That could dodge the issue of measuring how badly SFC, or Vizio customers more broadly, are hurt by the lack of source, in dollar terms.  Trying to sue that way would look more like a class action: expect the cost of no source to any particular customer to be low, so sue on behalf of as many customers as possible, to make the small numbers add up.

Under the enforcement principles SFC professes, if you have to take it to court for an order, the order you want requires a contract claim.  So you end up making a breach-of-contract claim.  Even if, way back when, it was really important to a lot of people involved in the GPL that it be a license, meaning mostly _not a contract_.
