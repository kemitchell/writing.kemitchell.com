---
title: MudDB
---

It has only just occurred to me that [Stephen O'Grady](https://redmonk.com/sogrady/author/sogrady/) has been a glaring omission from my blogroll.  [Corrected!](/blogroll)  I nearly always find his writing on open source strategy captivating, all the more so since we've often seen things differently.

The latest example: [his take on Cockroach's most recent license change for its database](https://redmonk.com/sogrady/2019/06/21/cockroach-source-available/).

It's really a remarkable post, and I can't recommend it highly enough.  There is a level of humility on display here---genuine intellectual humility---that's rare in pretty much any domain.  If you care about open source, licensing, and the software industry, an example like this can't be missed, precisely _because_ it raises so many more questions than it answers, and isn't afraid to do so.  All the questions are good and relevant.  But the space between them, laid out as they are, is its own kind of gift.

The trick for someone in my position, who's read Stephen's post and felt inspired by it, is figuring out how to respond in kind without snuffing out that constructive spark.  I'll admit, I think I see what's going on in a way that doesn't trip so badly on the rise of source-available licenses and recent changes.  But in offering that here, the last thing I want to seem to do is lecture from on high, correct, or scold, or to offer my own prebaked view as full and final explanation of how these companies make their choices.  For the record, I don't currently advise any enterprise database companies, much less make their choices for them.  If I did, I couldn't blog about this.

We---Stephen and I and others who care about these things---are all down in the mud together, getting dirty, slinging it around, trying to make mud cakes and mud castles out of what is undeniably a big slippery mess of idiosyncratic case studies and confounding variables.  And now that I'm doomed to run with that filthy metaphor, I think what I have to offer shakes out to this:

We all desperately want clean distinctions to work from.  But clean is mentally convenient, not accurate.  If realism is what we want---or accountability is what we're stuck with---we have to muddy our waters to keep real.  Our thinking about open and closed can't be so hygienic, and compete on sterile purity, as it might among activists or demagogues.

This comes across in nearly any neat division of the software or business universe.  At some level, we all want the clear water of open source, on one hand, and the solid earth of enterprise business, on the other.  This is my bias as much or more than anyone else's.  But I'm comfortable imputing it to Stephen, too, because of a jarring shift seen in his post.

He starts by painting the database companies' new licenses as "neither open source, nor, in most cases, traditionally proprietary".  That is a very frank and accurate nod to messiness.  And he continues from there into a very fair, newsmanlike summary of the latest from Cockroach.  But immediately after that---analysis time---it's right back to open-on-not, full stop, where literally any derogation from perfectly open is closed.

Having coded the situation into open-or-closed, boolean structure---Cockroach is now "closed"---deductions flow rapidly.  Cockroach isn't "open" anymore, so it won't make it through the open source gates enterprises keep.  There are other databases out there that can, or will be soon enough, so they'll beat Cockroach through the door.  Which we can all welcome as Justice, because Cockroach the company, and even its founders as individuals, abandoned their open source roots, committed the greatest affront to open source "norms" in recent memory, and then tried to frame Amazon for that.  But don't worry, they shall fail.  Heretics burn, in this business life, the next, or desirably both.

But these tenets of open faith--predictable damnation for the closed---aren't new news to anyone involved.  I don't know the Cockroach boys, but I'm betting they can rattle them off, too.  Which leads to the big question about their license choices, which Stephen puts a few different ways in a row:

> The question is: to what end?  Assuming that competing with large providers is the strategic aim, how is that achieved?  What problem _specifically_ do source available licenses solve?

I'm reading in deep here.  But I'd bet the word "specifically", and the urge to emphasize it, point back to that feeling of confident deduction that the orthodox analysis brought.  Stephen seems to be saying, "We're all working the same problem.  It wasn't hard on my end.  So how can your answers be so different from mine?"

That's obviously my question, and not actually Stephen's.  But using Stephen's post as a mirror again, I would say: Look at the facts that come up in the line of reasoning.  Do a `JOIN`.  Any doing double duty?  Any facts pointing two different ways?

Yes.  Database diversity.

On the one hand, there are a ton of databases.  We can't seem to make enough of them.  Partly because there's so much interesting new work being done in the field.  Partly because the task of writing a new one just isn't nearly so daunting anymore.  It must be part of the Go tutorial at this point.

When a database like Cockroach opts out of the golden Apache adoption path, our reflex is to sing its doom, and fact we use to rationalize that reflex is the bumper crop of new databases in the last ten years.  From the bottom up, we have to nod at the paucity of hackers who will actually implement an interesting database and make it business ready, so we make leeway on substitution.  Folks can always use Postgres, a fundamentally different database, as a square peg to fill the round, Cockroach-shaped hole, we say.  And from the top down, we invoke Amazonian omnipotence.  If they really wanna, they'll clone your ass and say a customer made them do it, and they can hire they muscle to, never mind the cost-benefit.  One database---probably Postgres---and one firm---probably Amazon, or an oligopoly of its imitators---to rule them all.  A competitive pincer trap.

But further down the path to confusion, we see database diversity doing work again.  But this time, it's to dismiss database company fears of cloud platform domination:

> ...RDS MySQL was launched in 2009, PostgreSQL in 2013, and MariaDB in 2015. And that’s just the open source databases; commercial databases were offered as a service as well, with Oracle debuting on RDS in 2011, SQL Server in 2012 and the proprietary PostgreSQL flavor Aurora in 2014.  Just within Amazon, then, there were three open source and three proprietary database-as-a-service offerings in market at the time Cockroach was apparently basing its business model on the idea that large technology platforms wouldn't be offering these products as services.

Later, after some ruminations about why database companies in particular might be making so much trouble:

> The biggest question now is whether these licensing-led attempts at protecting their businesses will be successful.  If history is any guide, the answer is probably not.

History shows a diversity of commercially successful enterprise databases, even relatively homogeneous implementations of the same relational model, across the gamut from academically seeded, permissively licensed, and community led straight through privately conceived, copyleft dual licensed, and company led through pure-play proprietary.  And that each of them found a place on Amazon, and lived that experience as a tailwind of growth.  Before Amazon achieved full scary enterprise penetration and, we're told, the muscle to clone whatever it covets.

The lesson I'd take from this history isn't to follow the path of Postgres or perish, but to differentiate somehow, even minimally, and then take all steps necessary to avoid and forestall full commodification.  Because technical niches in databases, especially the kind that sprawling, technically adept enterprises with budgets need, naturally correspond to a potentially long-lived, lucrative business niches well rising on the tide of tech penetration overall.  A database business, madam, if you can keep it.

As long as you don't simply surrender your place, the questions of license terms, delivery model, marketing plan, and so on become tunable parameters, not purity tests.  Drilling down on licensing, terms are just a means, not an end, and therefore fungible.  Any means to the end is viable.

Now comes the part where _I_ pick and choose to satisfy my own hypothesis.

Open source can be a great engine of adoption.  But it really depends.  And the choice of open licensing model, and how much to release that way, has side effects across the business.  The desirable side effects can be got more way than one.

Projecting a bit, I strongly suspect that Mongo's adoption drivers and Cockroach's differ considerably.  Mongo can dick with its license, and purists will hem, haw, and blog too much, old-guard distros will vote it off the island as if their package mirrors still reigned supreme in distribution ease, and developer life will mostly just go on.  Mongo has invested in, and established, default database position for a generation of trendy applications.  They got their own [stackronym](https://en.wikipedia.org/wiki/MEAN_(solution_stack)).  I suspect that relatively few developers work from open source back to Mongo.  Rather, I suspect Mongo reflects freeness, availability, documentation, and outreach back on open source, through user experience.  And frankly, those expectations create a lot of fireworks when folks find out what community-driven open source is like.

I don't think Cockroach is anyone's default.  It addresses a far narrower, more specialized, more developed set of technical needs and tastes.  That's not to say marketing can't push such work beyond its naturally habitat.  How many gigs have we magnetized asking, essentially, "Who needs Kubernetes?"  But those are achievements bespeaking propaganda muscle and brand rec that Cockroach---note the name---can only aspire to have, or to get acquired by.  Then again, I sincerely wonder how many enterprises roll out on a Spanner analog because some dev picked it unilaterally, without any higher-level meeting, because its license was on a corporate whitelist.

Note that the permissions databases companies have started retracting---the right to take their code and use it to compete against them in the cloud---comes directly into play here.  From a buyer's point of view, withholding that permission, when implemented correctly, means that no cloud provider will pop up to provide a ready substitute unimpeded, unless they acquire the vendor, by acquisition or off the dead-startup OSS scrap heap.  The more technically driven the adoption decision to begin with, the less that worries, given the cloud record of 80/20 clones.  If you picked Mongo when the project was two guys and a beanbag chair, and now you're trying to keep it falling over by throwing iron at it, DocumentDB is a help.  When you chose CockroachDB, I think you do so with those kinds of needs in mind already.

<!-- TODO: the right to modify means less for enterprise databases, because you're essentially hiring experts qualified to work on the database, which you don't have -->