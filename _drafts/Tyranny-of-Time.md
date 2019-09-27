---
title: The Tyranny of Time
description: licensing as ...
layout: post
tags:
- Open Source
- Licensing
brief: Treating licensing as taboo holds developers back.
---

If you polled open software pundits, I think prevailing sentiment would say:  Hiring good.  Licensing bad.

I don't get it.  Licensing is great.  And I don't like the consequences of pretending it's not.  In the end, software is useful, it takes time to make, and people will pay for it.  The _structure_ of a producer-consumer relationship---employment, contract, or license---doesn't determine value, but merely, hopefully, reflects value.

Licensing is a tool that lets developers and customers shift the points when software gets made and money gets paid in time and in relation to each other.  Condemning that flexibility as evil excludes that flexibility.  

It gets worse when we see how different deal structures play out in practice.  Ideally, deal structure would be nothing more than an implementation detail, but in reality, it often massively skews the value developers receive.  Tradition and inertia constrain employment, contracting, and licensing.  Norms are deeply ingrained, and long predate the software industry.  The norms for employment and contracting hold many developers back late in their careers.  Promoting pay for time, and deprecating pay for permission, encourages developers to sell themselves short, punching the clock for others when they could be making entrepreneurial bets for themselves, or to flee programming entirely.

Let's break it down through a story.  We'll play it as theme and variations.

## No License

I'm a CEO.  I meet Bob at a conference.  We talk about my industry.

A week later, I contract Bob to write some software.  He spends ten hours and bills $3,000.  Everything goes well.  Bob's code works great.

Rewind.

## Right License

Bob and I have never met, but Bob has read a few blog posts about my industry.  Because of his reading, Bob decides some new software needs to exist for the industry.  He writes the software.  Bob's code works great.

_Then_ I show up.  We meet at a conference.  We talk about my industry.

A week later, I reach out to contract Bob to write some software.  But he's already written it.  He sends me a link to the GitHub repo.  It's all there, except for `LICENSE`, and I can't talk Bob into just giving it all away.  So I pay Bob for a license.

I get the software I need.  Bob gets the money he needs.  And it's a good thing he does, because between conference and sale, Bob's partner's cancer comes back.

Now Bob is a full-time caregiver.  No more programming for Bob.  If he hadn't written the software before, he couldn't write it now.  And I'd be out of luck.

Rewind again.

## Wrong License

Bob writes the software.  We meet at the conference.  Bob links me to the repo.  It's all there, with MIT pasted into `LICENSE`, because GitHub told Bob to choose a license.

Bob's code works great.  I reach out to him two weeks later, about new features, support, and training.  But I can't hire Bob.  Bob's partner's cancer came back, and Bob's a full-time caregiver now.  No money for Bob.  No features, support, or training for me.

## Time

One programmer.  One piece of software.  Three different stories.  Three very different outcomes.

In each story, Bob spent a ton of time becoming a programmer, plus enough time learning about my industry to meet my business needs.  All of that time and effort made Bob capable of spending the time _he_ needed to write the software that _I_ needed.

But in no story did I really pay Bob for time.  Multiplying time spent by a cost per hour was just a convenient way to decide how much I'd pay, under contract.  I really paid for the value of the software Bob could make, whether he'd already made it or was available to make it.

Say Bob's hourly rate were $300.  If Bob spent ten hours creating new software for me, the cost of that software would be $3,000.

If Bob had set his rate too low by half instead, but delivered software that didn't meet my needs, I'd pay Bob far less, but be far less happy about it.  I'd've wasted $1,500, plus all the time meeting, hiring, and paying Bob for nothing useful.

Conversely, if Bob had set his rate twice as high and spent twice as much time, but his software saved me three times its cost, I'd sing Bob's praises.  Bob just made me $24,000.

I don't care how much time Bob takes to make the software.  I care when it's delivered.  Best case, he's already written it by the time I ask, and it's delivered to me the same day.  Unless I sign a contract with Bob that says how much time he takes determines how much I'll pay him.  The time Bob takes to make the software doesn't matter _unless_ we sign a contract that makes it matter.

## Structure

If I hire Bob to spend the time making new software, he takes less risk than if he spends the time first, and hopes someone will show up to buy a license later.  On contract, or as an employee, Bob knows that he has at least one paying customer, if only one.  Without a contract, Bob hopes he'll find a customer later.  At least one.

I have competitors.  Naturally.  Those competitors could also use Bob's software.  Naturally.

If I hire Bob under standard employee or contractor terms, I will own the software Bob makes.  Bob can't sell it to my competitors, or even tell them it exists.  The software is _mine_, not Bob's, because the terms I signed with Bob say so.

Hopefully Bob priced accordingly.  But that will be hard for Bob to do.  I probably know a lot more about my industry and my competitors---Bob's potential market---than Bob does.  I might even insist on owning Bob's software so that _I_ can turn around and sell licenses to others, without sharing the earnings with Bob.  In effect, Bob created a little licensing business, by creating software that others want to license, but I bought him out for a lump sum.

Maybe Bob could have charged me $30,000 instead of $3,000.  Maybe it's actually worth $100,000 to my business.

But here's the catch: $3,000 per hour is an exorbitant hourly rate!

Why?  Is there a glut of available programming talent, similarly read up on my industry and interested in solving my problem?  Are they easy to find and available to hire?  Why should they do the work for less, if the value to my business remains the same?  Do we assume developers ought to be grateful for whatever work they can get?

Pretending that I pay for Bob's time, rather than Bob's software, distracts from the question of value.  Businesses hire employees in anticipation of making more on their work than they pays them in salary and benefits.  I can hire Bob in anticipation of making more from his software than I pay for his time.  And it behooves me to change the game from identifying a license price based on the value to my business, which puts us in a fairly level, objective negotiation posture, to justifying Bob's compensation against that of other programmers, which puts Bob in an awkward bargaining position.

## Restructure

That's employee-contractor normal.  Contrast licensing.

If I pay Bob for a license under typical license terms, Bob stills owns his software, and can sell licenses to others.  If he finds out about my competitors, or they find out about him, he might make far more, selling licenses to more customers.

That's true even if Bob's partner's cancer comes back, and Bob can't make software or close license deals full-time.  Perhaps Bob sets up a web store, and sells licenses that way.  Perhaps Bob sells subscription-style license agreements that require customer to pay each month or each year, whether he sends updates or not.  Perhaps Bob hires an agent a salesman who closes license deals on commission.

If Bob can't work, eventually his software will lose value.  Bob won't be able to fix bugs, add new features, update for changes in other software, or provide related services like integration, training, or support.  But if Bob makes money from licensing software he's already written, he might be able hire others to do what he can't, going forward.  For example, he might hire another developer to maintain his work, and keep it relevant, so that new customers continue buying licenses.  He might sell his rights to license to another developer or company who wants to continue development.

A license _could_ produce much the same result as a typical employment or contracting relationship.  Bob could license his software to me exclusively, meaning he can't license it to anyone else.  Bob could license his software to me with rights to resell without royalty, allowing me to tell Bob's software to others without paying anything to Bob.  I could agree to pay a one-time license fee based on Bob's report of how much time he spent creating the software.  But all of those terms are fairly unusual in licenses, while they're standard for employees and contractors.

It's not just about whether and how employment, contracting, and licensing relationships function.  It's about what's _normal_ for those kinds of relationships, and therefore what's easy to do.  Doing anything else costs.  Preferring employment or contracting over licensing is preferring employment and contracting normal over licensing normal.

## Flexibility

Licensing gives creators flexibility in time.  It transforms their financial relationships with users from exchanges of money for work time into exchanges of money for work product.  It gives creators a means of earning---license fees, also called royalties---that naturally reflects the value of their work, and the number of others for whom its valuable, rather than some approximation of time put into it.  It gives them a frame within which to sell to many users, rather than a frame within which they have to estimate the value of that opportunity foregone, estimate time spent, and work backwards to an hourly rate reflecting lost opportunity.

In other words, licensing lets programmers invest their time, rather than simply sell it.  The value they build up in accumulated, licensable software pays like stock in a company, ownership of a rental property, or accumulated reputation, rather than a paycheck.  That decoupling of time spent and earnings received puts a developer in the position of an entrepreneur, rather than a human resource.  It ruptures standard workaday incentives to spend more time than necessary, and to deliver no more than required, by shifting the economic focus onto the value of the software.

There is no reason this couldn't happen in the structure of a contracting or employment arrangement.  Some well established developers _do_ make large multiples of typical hourly work rates, earn substantial incentive, bonus, or commission payments, command grants of company stock or other securities with exposure to greater risk and reward, and even retain options or other interests in the technology they create.  But that's very rare, and those relationships don't tend to _feel_ much like employment or contracting.  They're fundamentally entrepreneurial roles that just so happen to be papered as jobs.

If licensing is effectively discouraged, and norms of employment and contracting hold strong, the accomplished programmer is naturally drawn to start a company.  Becoming a manager, rather than a full-time developer, enables the erstwhile developer to cross the labor-capital line.  It enables them to invest, to speculate, like an entrepreneur ... by paying for the services of others on a time basis.  It enables them to benefit from norms that favor employers in employment terms, and clients in contractor terms.  It puts them on the team with the advantages, rather than the team with the handicaps.

This happens frequently.  We see it a lot.  But that's not the end of the story.

## Cost

The programmer who becomes an entrepreneur usually stops programming.  That reflects just one of many the high costs of company startup and operation: the amount of time required to do business.

Such costs prevent many who would start companies from doing so.  Coupling entrepreneurship to wealth ties in all the troubling correlations that lead to persistent unfairness and inefficiency in other aspects of financially-mediated life.

Even when a programmer is able to start a company, the move is often delayed.  First they have to earn and save enough, usually by selling their time or finding other ways to invest, to afford the up-front cost of bootstrapping a business.  Then they have forgo other income, as the business demands their full attention.  Every startup cost is also a barrier to entry.  Every barrier to entry skews the makeup of success stories more toward the makeup of those already flush with economic means.

The alternatives are outside financing and subsidies.  But other people's resources almost always impose a complexity cost, often markedly constraining business decisions of the financed or subsidized.  In other words, entrepreneurs taking outside help surrender part of their autonomy, part of the control over their business.

This is well known, and well remarked, of venture capital in software.  Professional venture capitalists do not invest to help establish merely sustainable, or merely profitable, enterprises.  Their investment model, and the appetites of their investors in turn, require runaway successes.  Fast failure becomes preferable to lingering, unexceptional success.  This dynamic is less well recognized when it comes to grants, aid programs, and activist investment.  But it's often no less real: flashy, "impactful" programs garner lots of grant attention.  Modest nonprofits without websites, laboring in prosocial obscurity for decades, often don't.

## Choice

The point of all of this is choice.  Licensing, employment, or contracting is a choice.  Going it alone, hiring help, or selling is a choice.  Bootstrapping, taking on debt, raising venture capital, or simply folding a project as non-viable is a choice.  All of these are choices developers ought to have.

We should judge the choices developers _make_ not by their implementation details, like whether they licensed intellectual property, but by what they do and don't achieve.  Did the buyer receive good value?  Did the developer earn fair compensation?  Were risks, like project failure, sudden illness, or a turnaround in the market, adequately mitigated and equitably shared?

I don't understand axiomatic licensing aversion because I understand business.  Intentional or not, using peer pressure and one-sided arguments to take specific tools of software business out of developers' hands limits what they can achieve, in very practical ways.  Every tool at their disposal, including landing a paid development job, has potential for misuse, and evidence of misuse is easy to find.  If anyone gets to choose the lesser of two evils for a software project, it ought to be developer.  Under the law, it's their right, and that, at least, is as it should be.