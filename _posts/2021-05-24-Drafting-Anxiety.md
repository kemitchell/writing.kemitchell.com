---
title: Drafter's Anxiety
description: writing new licenses isn't scary
brief: If you're anxious about the law, hit the books.  If you're anxious about your drafting, fix your process.  Your only gnawing concern should be whether you're serving those who need lawyer help.
date: 2021-05-25T02:57Z
tags:
- Open Source
- Licenses
---

Michael Weinberg published [a piece about lawyers writing new open licenses](https://michaelweinberg.org/blog/2021/05/24/cambrian-explosion-os-licenses/) today.  It's a good read, from a lawyer who's done [recent, groundbreaking work](https://medium.com/ml5js/a-new-code-of-conduct-and-license-for-ml5-js-6b0e4c109b76).  There's a lot to take in there, but I'd like to focus on one dynamic Michael calls out:

> [A]ny lawyer who writes their own license is setting themselves up for a period of anxiety, waiting to discover what they missed or how things will go wrong.

> [O]n balance and as a whole, introducing new licenses into the world of open source will probably cause open source lawyers more anxiety than joy.
>
> I think that anxiety is probably worth it.  But that will be far from a universally held position.

This isn't even a question when it comes to software licenses.  There are tools and techniques for evolving strong, stable software.  Nearly all those lessons can be translated to licenses, too.

## Versioning

Dispense with the idea that any person---or any committee of people---can write and release materially flawless license terms.  Not just for all time, but at the moment of release.  This has not happened.  This will not happen.  Licenses aren't math proofs, and can't pretend to be.  Even math proofs occasionally suffer typos.

Many new license drafters do think to version their licenses these days, and that's a great first step.  But their relationship to the concept of versioning often seems oddly stuck in the 1990s, when any significant new release involved a press release, a media package, and a substantial outlay for gold masters and initial runs of CD-ROMs.  Versions marked passages through grueling milestones and gatekeepers, like stations of the cross.

These are mental vestiges of the pre-Internet era.  Distributing license texts today costs nothing and almost no time.  It's cheaper and easier than sharing photos.  It's cheaper than sharing office documents.  The average license text file takes less disk space than the average e-mail transmission.

Versions are also effectively free.  The only question is cognitive load, but that is also a question of mentality.

There is absolutely nothing wrong with publishing a new version of a license on incorporating every new meaningful change, one at a time, as they come in.  There is nothing wrong with version numbers like [7.0.0](https://paritylicense.com/versions/7.0.0) or 47.6.2, any more than there is with [5.12.6](https://git.kernel.org/pub/scm/linux/kernel/git/stable/linux.git/tree/?h=v5.12.6).  You don't have to promote every version.  You can, instead, wait to see which versions prove popular and stable, and choose to promote those, in retrospect.

Lawyers embracing license change in a broad sense, by taking a decision to draft new terms, should also embrace license change in the narrow sense.  Your license will change.  _Facilitate_ that change.

Remember how nervous you were in grade school, when you moved up from pencil to pen?  Remember after you graduated, when you realized you could use pencil anytime you want?

## English, Please

Most lawyers hear about "plain language drafting" in reference to legal terms for individual consumption, like privacy policies, the backs of baseball tickets, or the pages of a home mortgage loan.  The major theme is the unfairness of telling everyday people---slurred as "unsophisticated consumers", be they eighteen-year-old invalids or Nobel Prize winning emeriti---to agree to terms they cannot understand, written in ways known to crush their attention.

An end product that people can actually read isn't the half of "plain language drafting".  Nicheing the technique that way is often a dodge by those afraid to change how they work.  Overwhelmingly, the benefit of plain language for lawyers in business, and for lawyers writing public licenses, lies on the _production_ side.  That is the lived experience of plain language in practice.

We've all heard "given enough eyeballs, all bugs are shallow".  Welcome to the Internet in 2021.  Nobody is giving away eyeballs.

[Remember OpenSSL.](https://en.wikipedia.org/wiki/Remember_the_Alamo_(song))  Whatever eyeballs you manage to get, by self-promotion, good work, or pure chance, you must treat them as precious deliverance.  You must facilitate their gaze such as to find the bugs you cannot see.  Motes, logs, all that jazz.

## Users Welcome

"Plain language" is the comfy chair of a welcome package for eyeballs.  It is not the open door.  You must first convince people in the area you want to serve---not principally lawyers---that they are welcome, competent, and entitled to read your terms.  Only having accepted your invitation will they come to know your hospitality.

My current approach:

1.  Remind yourself that unless what you're drafting will be used exclusively by other lawyers, exclusively for lawyerly purposes, you are not the expert in this endeavor.  The people in the field you aim to serve know better than you do what is going on there, and how people will react to written terms.  They always will.  You won't catch up to them.  You are always behind.

2.  Put your drafts where the people you want to help do their reading and writing.  For software developers in 2021, that means a Markdown file in a public GitHub repo.  Your choice is simple:  Work their way or work alone.

3.  Use the best facility available---a `README.md` file, the top of a Google Doc in garish yellow highlighting---to declare for every passerby to see that they are competent and welcome to read, opine, and contribute.  My go-to blurb for software licenses looks like this:

    > ***This license is a [flipped form](https://flippedform.com/) in everyday English.  If something doesn't make sense, that's the license's fault, not yours.  Please open an issue on GitHub so we can fix it.***

    [flippedform.com](https://flippedform.com) is a short, single-page website that does the best job I know how to state the relationship I want with collaborators.  Its job is to show people who might work with me what they want to see, in a way that emphasizes I really mean it.

4.  Stick to the program when you actually get feedback.  You might prefer to print a copy of the current draft, review their comments over a cup of coffee, and outline or even write up your thoughts and changes at a big wood desk with a fancy pen.  You do you.  Just make sure to send a quick response immediately, so they know you're engaged.  Then, when you're ready to revert back, present your work the way they're used to going back and forth.  If you're really working some other way, they shouldn't have any idea.

5.  Encourage the people you want to work with to "take the pen" and make changes or markups directly.  On GitHub, ask for pull requests and give commit bits.  In Google Docs, share commenting and editing privileges.  If this makes you nervous, improve your backup process until it doesn't.

6.  Advertise.  I don't mean buy Google ads.  See how folks in the field promote their projects, an do likewise.  Stay in their world.

7.  Give credit.  [I love `THANKS.md` files, and you should, too.](https://github.com/berneout/round-robin-license/blob/main/THANKS.md)

## Overall

I missed the great 2.0 and 3.0 license committees run by the old open source foundations in the early 2000s.  The more I get to know colleagues involved, the less FOMO I feel.  Those processes sound terrible.  The major takeaway I get from participants, secondhand, is that they never want to go through such an ordeal again.

This is deeply ironic, given the proximity of all this work to a celebrated revolution in remote collaboration.  It's also deeply sad, given how positive, non-bureaucratic, and, frankly fun my own adventures in collaborative license drafting have been since.  Things might have gone a lot worse for me with the benefit of past experience.

[Here](https://github.com/indiecc/free-license/pull/3) is an example of a pull request going right now.  [Orlando Hill](https://github.com/orlandohill) is a joy on GitHub, as he is on forums or by e-mail.  We've never met in person.

[Han Seoul-Oh](https://github.com/laughinghan)'s issues and pull requests are some of the best collaboration I've had on GitHub, period.  Licenses like [Round Robin](https://roundrobinlicense.com/) reflect his energy and attention, as much as mine.  The care and attention of his analysis invariably leads us _directly_ to the kinds of conversations about legal construction and underlying rules where real legal work gets done.

[Boris Mann](https://roundrobinlicense.com/), [Markus Binsteiner](https://github.com/makkus), and other friends at the [Artless Devices forum](https://forum.artlessdevices.com/) have had enormously positive guiding influence on my choice of which license terms to try and draft in the first place, as well as specific terms.  To a first approximation, they aim the canon.

None of these folks are lawyers.  I like lawyers, too, of course.  And know a good many of them, including, increasingly, Michael.  But I'm not sure I'd be having any fun drafting licenses to please other lawyers, or, God help me, committees of them.

Lawyering for layering's sake?  There are many more compelling forms of papercraft, and a lot more fun for options with a computer and a spare hour.

Lawyering for people I want to help, however, is really something.  That's not an anxious line of work.  Only a joyful one.
