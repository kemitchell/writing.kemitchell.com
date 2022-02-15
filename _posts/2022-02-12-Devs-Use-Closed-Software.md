---
date: 2022-02-12T13:34:59-08:00
title: Devs Use Closed Software
description: too many devs pretend otherwise
tags:
- Software Industry
- Funding
---

A fellow ne'er-do-well on the [Artless Devices forum](https://forum.artlessdevices.com) recently posted a link to Gavin Howard's ["Is It Even Worth Working on FOSS Anymore?"](https://yzena.com/2021/12/is-it-even-worth-working-on-foss-anymore/).  Nothing I've read better plots the path to the make-believe cage so many open devs walk right into.

Gavin starts by parading a few recentish FOSS horribles---log4j, Twitch/OBS Studio, Elasticsearch relicensing, Audacity and MuseScore acquisitions, GitHub Copilot anxiety.  He touches base on user protection.  He lands on a big downer:

> Ever since I started trying to not write harmful posts...I have tried to suggest ways of fixing the problems I have complained about in every post.
>
> But...I can't do that here.  I _have no solution_.
>
> This is depressing, to say the least.  It's depressing because I see no alternative other than to give up on writing software completely.  After all, I can't get a job, I can't make money from writing Open Source software, and what Open Source software I do write could end yup harming more users than it helps.

Needless despair.  The trouble isn't the state of the software world.  The trouble is a series of unfounded, absolutist assertions about it:

> ...Open Source has sort of eaten the software industry; other _programmers_ won't use your stuff unless it's Open Source.

> Since my software will target programmers, I can't make it closed source, or it won't get used.  Simple as that.

Objectively false.  Unless your software---in Gavin's case, a new build tool---just isn't that much better than `make`.  To literally anyone.

Programmers use software in various shades of "closed" all the time.  It's not hard to find companies selling proprietary tools, libraries, frameworks, and other components galore, if you're willing to look on Google, and not just on public GitHub, npm, crates.io, RubyGems, &c.  College students, hobbyists, and unfunded startup types who pay for their laptops and stop paying there represent a small, transient sliver of the trade.

Look in video games.  Computer-aided drafting.  3D printing.  Computer numerical control.  Throw a rock.

There would be no meaningful "software industry" to speak of if money and code weren't changing hands, constantly, at commercial scale, for tools and components as well as finished products.  Nobody's that vertically integrated anymore.  There's too much to integrate, even for Google.  Not Invented Here isn't competitively viable, even for the pinnacles of the industry.

Memorable stories, headlines, and Twitter chatter do not reflect this reality.  Representative samples of familiar reality don't drive clicks.

How much has [Working Copy](https://apps.apple.com/us/app/working-copy-git-client/id896694807) made on the App Store?  How is [Panic](https://www.panic.com/) still in business? [JetBrains](https://jetbrains.com)?  [BBEdit](https://www.barebones.com/products/bbedit/)  [Sublime](https://www.sublimemerge.com/)?  [Ultra](https://www.ultraedit.com/)?  [Cursive](https://cursive-ide.com/)?  Ever licensed a [game](https://unity.com/) [engine](https://www.unrealengine.com/)?  How about a 3D library?

Neither is web dev somehow immune, fickle and populist as it may be.

I will never forget watching [the original Ruby on Rails screencast](https://www.youtube.com/watch?v=Gzj723LkRJY).  It dropped like a bomb.  Suddenly, among so many other things, developing on a Mac was cool.  The typography and the UI were a revelation, especially for the pious running Linux at the time.  [TextMate](https://macromates.com/) snippets were amazing.  [Screencasts were a thing.](https://screencasts.textmate.org/)

I scraped off my hourly web dev fees into savings, bit by bit.  I bought a MacBook Pro on a credit card.  I paid for TextMate, priced in Euros.  I licensed [Transmit](https://panic.com/transmit).  I was proud to do it.

And I got what I paid for.  The webdev workbench all that added up to was way better than anything I'd seen at the time.  Better than anything `apt-get` could give me.  The free clones---Sublime, Atom, VS Code---were years still to come.  As competition stood---and it was very much a competition---paid tools were taking big leaps forward.  The pitches were compelling, and the experiences delivered.

So much so that [DHH](https://dhh.dk/arc/000433.html) and even [Paul Graham](http://www.paulgraham.com/mac.html), more FLOSS fanboys than Redmond fearmongers, were saying things like this:

> I would have a hard time imagining hiring a programmer who was still on Windows for 37signals.  If you don't care enough about your tools to get the best, your burden of proof just got a lot heavier.

I was agreeing with them, despite huge personal investments in Linux, BASH, Vim, Emacs, and more.

That was the state of play.  And in large part thanks to it, Apple, Macromates, and Panic---not to mention [Basecamp](https://basecamp.com)---made good money for good work.  I was proud to pay good money to good toolmakers.  That pride made a difference, pitching and working with designers and other professionals.

You'll see a lot of [Park blue](https://www.parktool.com/) in good bicycle shops.  You'll see a lot of [Snap-on red](https://www.snapon.com/) in high-end auto work.  I'm proud to turn [Kowa](https://www.kowa-seiki.co.jp/), [Vessel](https://www.vesseltoolsusa.com/), and [Motion Pro](https://www.motionpro.com/) tools on my Japanese motorcycles.  Long before stickers emblazoned devs' laptops, they were covering toolboxes, drag cars, work trucks, and race-day trailers.  It's a thing.

If you make good tools or good parts for good craftsmen, it can be a thing for you, too.  The existence of [Harbor Freight](https://www.harborfreight.com/) does not mean [Wera](https://www-us.wera.de/en/) has to starve.  Power tools sold at cost in big-box stores, as loss leaders for profitable consumable parts, [razor-and-blades style](https://en.wikipedia.org/wiki/Razor_and_blades_model), do not stop other makers [selling premium alternatives](https://www.festoolusa.com/) to real and aspirational pros who value the differences.  No more than [all-in-one CNC machines](https://haascnc.com) stop hackers and machining forum types from going the other way, adding computer control to old Bridgeport mills dragged out of garages.

The existence of open code does not mean there can't be any other kind.  Quite the opposite: it's usually closed code that feeds open, by giving it something to clone.  High functioning open development _can_ lap proprietary in some aspects, like maintenance of very generic, broadly deployed systems.  But the state of the art, as a rule, advances elsewhere.  Those advances get dumped out of firms and labs onto foundations and repositories, when the benefits of sharing maintenance outweigh the competitive edge the software once afforded in secret.

It isn't hard, especially in a media environment planted thick with gamification, "community" building, and [corporate open source cheerleading](https://www.youtube.com/watch?v=SpeDK1TPbew), to box yourself into a small corner of the software mindspace.  You can end up surrounded by the kind of "open source people" who either fear business or stay quiet about it, lest they harsh the vibe or stem the flow of free code.  The more you're connected online, and not anywhere else---hello, COVID-19---the greater your risk of wiring into a tight, closed loop.

Nobody I know with broad experience in the industry thinks making an impactful activist project or a profitable business venture in software is as easy as racking up GitHub stars or retweets for more MIT-, BSD-, and Apache-licensed candy.  It's not.  But if you're telling yourself it's impossible, instead of actually trying, I'd bet you're fooling yourself.  Not because you're a fool.  Because failure hurts.

Writes Gavin:

> Okay, well, perhaps the best way to serve users is to _not_ release my code as Open Source?

Hardly a fool's question.  Especially from an "open source person".  Maybe it is.  Maybe it isn't.  If serving users is really what it's all about, the developer should be _asking the people they want to serve_.  Not imagining what they might say, or even who they might be to begin with.

It is far too easy to get this backwards, doing open source because that's what we want to do, what we're _reinforced_ in doing, all the while invoking generalized, thoroughly hypothetical "users" to lend importance and nobility to our hobbies, compulsions, and fancies.  We have to ask frankly: Is open an implementation detail, or is it secretly the point?  If it's the point, why?  If the simple fact that we see bad headlines about open source these days, and not just good ones, pulls the rug on our joy, what were we standing on in the first place?  Could be a crisis.  Could be an opening for a real chance at personal growth.

There _are_ two situations where absolutely no one will use your code under some set of terms, guaranteed.  If you don't put your work and your terms out there in the first place, no one _can_ use it.  Even if you do put it out there, if you do nothing earnest to connect to folks you think your work is supposed to serve, no one _will_ use it.

If you've been doing either of those things, and find yourself asking serious questions about your work, yeah, it's probably not worth doing anymore.  But open source is orthogonal---it can fail or pass these basic tests.  In the service of other devs or in the service of anyone else.

When you catch a sideways glance in the mirror of your mind's eye, and ask yourself why you do this software thing, and whether it really matters, _who_ tends to make a satisfying answer.  _Why_ only rarely does, and only for a time.

Serve.  Other people.  Other devs if you like.  Now.

Life's just better that way.
