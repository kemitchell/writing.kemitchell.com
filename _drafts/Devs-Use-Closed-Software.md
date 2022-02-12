---
title: Devs Use Closed Software
description: that's why we have a software industry
tags:
- Software Industry
- Funding
---

A fellow ne'er-do-well on the [Artless Devices forum](https://yzena.com/2021/12/is-it-even-worth-working-on-foss-anymore/) recently posted a link to Gavin Howard's ["Is It Even Worth Working on FOSS Anymore?"](https://yzena.com/2021/12/is-it-even-worth-working-on-foss-anymore/).  Nothing I've read better traces the make-believe cage so many open devs walk right into.

Gavin starts by parading a few recentish FOSS horribles---log4j, Twitch/OBS Studio, Elasticsearch relicensing, Audacity and MuseScore acquisitions, GitHub Copilot anxiety.  He touches base on user protection.  Then he walks right off to a big downer conclusion:

> Ever since I started trying to not write harmful posts...I have tried to suggest ways of fixing the problems I have complained about in every post.
>
> But...I can't do that here.  I _have no solution_.
>
> This is depressing, to say the least.  It's depressing because I see no alternative other than to give up on writing software completely.  After all, I can't get a job, I can't make money from writing Open Source software, and what Open Source software I do write could end yup harming more users than it helps.

Needless despair.  The trouble isn't the state of the software world.  The trouble is a series of unfounded, absolutist assertions about it:

> ...Open Source has sort of eaten the software industry; other _programmers_ won't user your stuff unless it's Open Source.

Nonsense.

> Since my software will target programmers, I can't make it closed source, or it won't get used.  Simple as that.

Objectively false.  Unless your software---in Gavin's case, a new build tool---just isn't that much better than `make`.  To literally anyone.

Programmers use software in various shades of "closed" all the time.  It's not hard to find companies selling tools, libraries, frameworks, and other components galore, if you're willing to look on Google, and not just on public GitHub, npm, crates.io, RubyGems, &c.  College students, hobbyists, and unfunded startup types who pay for their laptops and subsist on handouts from there represent a small, transient sliver of the trade.

Look in video games.  Computer-aided drafting.  3D printing.  Computer numerical control.  Throw a rock.

There would be no meaningful "software industry" to speak of if money and code weren't changing hands, constantly, at commercial scale.  And I'm not just talking SaaS and App Stores.  SaaS and App Stores have been on the rise, but the older model---straight-up commercial licensing---hasn't disappeared.  It's continued to grow.  Catchy stories, headlines, and Twitter chatter do not reflect this reality.  Representative depictions of humdrum reality do not drive the clicks.

Dev tools aren't exempt.  How much has [Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807) made on the App Store?  How is [Panic](https://www.panic.com/) still in business? [JetBrains](https://jetbrains.com)?  Ever licensed a [game](https://unity.com/) [engine](https://www.unrealengine.com/)?

Neither is web dev somehow immune, fickle and populist as it may be.

I will never forget watching [the original Ruby on Rails screencast](https://www.youtube.com/watch?v=Gzj723LkRJY).  It dropped like a bomb.  Suddenly, among so many other things, developing on a Mac was cool.  The typography and the UI were a revelation, especially for the pious running Linux at the time.  [TextMate](https://macromates.com/) snippets were amazing.  [Screencasts were a thing.](https://screencasts.textmate.org/)

I scraped off my hourly web dev fees into savings, bit by bit.  I bought a MacBook Pro on a credit card.  I paid for TextMate, priced in Euros.  I licensed [Transmit](https://panic.com/transmit).  I was proud to do it.  And I got what I paid for.  The workbench all that added up to was way better than anything I'd seen at the time.  Better than anything `apt-get` could give me.  The free clones---Sublime, Atom, VS Code---were years still to come.

[DHH](https://dhh.dk/arc/000433.html) and even [Paul Graham](http://www.paulgraham.com/mac.html) were saying things like this:

> I would have a hard time imagining hiring a programmer who was still on Windows for 37signals.  If you don't care enough about your tools to get the best, your burden of proof just got a lot heavier.

I was agreeing with them, despite huge personal investments in Linux, BASH, Vim, Emacs, and more.

That was the state of play.  And in large part thanks to it, Apple, Macromates, and Panic---not to mention [Basecamp](https://basecamp.com)---made good money for good work.  I was proud use and support good toolmakers.  That pride made a difference, pitching and working with designers and other professionals.

You'll see a lot of [Park blue](https://www.parktool.com/) in good bicycle shops.  You'll see a lot of [Snap-on red](https://www.snapon.com/) in high-end auto work.  I'm proud to turn [Kowa](https://www.kowa-seiki.co.jp/), [Vessel](https://www.vesseltoolsusa.com/), and [Motion Pro](https://www.motionpro.com/) tools on my Japanese motorcycles.  Long before stickers emblazoned devs' laptops, they were covering toolboxes, drag cars, work trucks, and race-day trailers.  It's a thing.

If you make good tools or good parts for good craftsmen, it can be a thing for you, too.  The existence of [Harbor Freight](https://www.harborfreight.com/) does not mean [Wera](https://www-us.wera.de/en/) has to starve.  Power tools sold at cost in big-box stores, as loss leaders for profitable consumables, [razor-and-blades style](https://en.wikipedia.org/wiki/Razor_and_blades_model), do not stop other makers [selling premium alternatives](https://www.festoolusa.com/) to real and aspirational pros who value the differences.  No more than [all-in-one CNC machines](https://haascnc.com) stop hackers and machining forum types from going the other way, adding computer control to old Bridgeport mills dragged out of garages.

The existence of open code does not mean there can't be any other kind.  Quite the opposite: it's often closed code that feeds open, by giving it something to clone.  High functioning open development _can_ lap proprietary in some aspects, like maintenance.  But the state of the art, as a rule, advances elsewhere.  Those advances get dumped out of firms and labs onto foundations and repositories, as a rule, when the benefits of sharing maintenance outweigh the competitive edge the software once afforded in secret.

It isn't hard, especially in a media environment planted thick with investments in gamification, "community" building, and [corporate open source cheerleading](https://www.youtube.com/watch?v=SpeDK1TPbew), to box yourself into a small corner of the software world.  You can end up surrounded by the kind of "open source people" who either fear business or stay quiet about it, lest they harsh the vibe or stem the flow of free code.  The more you're connected online, and not anywhere else---hello, COVID-19---the greater your risk of wiring into a tight, closed loop.

Nobody with broad experience in the industry who I know thinks making or selling software as an impactful activist project or a profitable business venture is as easy as racking up GitHub stars or retweets for more MIT-, BSD-, and Apache-licensed free candy.  It's not.  But if you're telling itself it's impossible, instead of actually trying, I'd bet you're fooling yourself.  Not because you're a fool.  Because failure is terrifying.

Writes Gavin:

> Okay, well, perhaps the best way to serve users is to _not_ release my code as Open Source?

Hardly a fool's question.  Maybe it is.  Maybe it isn't.

If serving users is really what it's all about, the developer should be _asking the people they want to serve_.  Not imagining what they might say, or even who they might be, to begin with.  It is far too easy to get this backwards, doing open source, aided and abetted by cheap Internet points, invoking generalized, hypothetical "users" to tell _ourselves_ how noble and important we are.  Is open an implementation detail, or is it secretly the point?

There _are_ two situations where absolutely no one will use your code under some set of terms, guaranteed.  First, when you don't put it out there in the first place.  Second, when you do put it out there, but do nothing to connect to folks you think it's supposed to serve.  If you've been doing either of those things, indeed, it's not worth doing anymore.
