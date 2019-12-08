---
title: git push is the Process
description: permissionless license development now
tags:
- Open Source
- Free Software
- Licensing
---

Some time ago, I [floated a theory](https://writing.kemitchell.com/2019/05/18/Schools.html) of divergent instincts in open software.  Natives of big, singleton projects like Linux learn to value one breakaway success and thrive in the bureaucracy that grows on it.  Those who call small-module ecosystems like npm first home thrive on constant, permissionless experiment and revel in the noise and churn that come of it.

I see the same same mentalities in open _license_ development.

I have thoroughly outed myself as a permissionless kind of programmer. And for those in the know, I am clearly a permissionless kind of license drafter, too.  When I hear about a license-addressable problem _n_ times, I don't phone a foundation, form a committee, promulgate a timetable, or announce a mailing list.  I jot down the features, dig up old terms, cobble the new thing together, call it "1.0.0-pre.1", and `git push` it to the Web.  Everyone who bothered me in the first place gets a link.

The ensuing orderly chaos _is_ my open drafting process.  Very open.

I need and want other people to beat on new licenses.  To start, ideally, a few early adopters.  Later, as many as possible, to put light in all the corners.  In the hunt for all them precious eyeballs, I have been trained, conditioned---I did not "discover" or "decide"---to employ a number of specific tactics.

One:  I put my work where the devs are.  Yeah, I've been on GitHub nearly ten years.  But it's not my favorite way to work.  That doesn't matter.  I get more out of rolling with a good posse than sating my taste in tooling.

Two:  I make as clear as possible that other folks can and should read the terms for themselves.  Actually, it's a big advantage _not_ to be a lawyer.  Developers will "run" the license---read it, apply it, explain it---a lot more than lawyers will.  And folks deserve to understand their own terms.  If they do, they'll spot edge cases I don't.

Three:  I make folks as comfortable as I can putting hands on the language.  Pull requests, not issues.  Patches, not bugs.  Just another Markdown file.  I can spot issues in their drafting---which is what lawyers train to do---better than in my own.  So one lawyer has-and-belongs-to-many collaborators works fine.  Besides, developers are as literate in simple English as I am, and their brains aren't so warped by overeducation.  As long as [my role is clear](https://writing.kemitchell.com/2019/11/30/Legal-Advice.html), we're good.

Four:  I have no problem letting projects whither, die, and mulch in public.  I've lost count of how many licenses I've sketched over the past few years.  Some grew up, most didn't.  Or at least, most haven't yet.  I've seen forgotten licenses suddenly gush feedback a year after I'd forgotten about them.  I've cast terms aside as trash, only to recycle 80% by weight in new terms, months later.  As for my precious reputation, let the world see work shown.  Especially the parts where I acknowledge and work through mistakes.

Five:  As soon as a license looks viable, I make the license a dinky website and get it off domains, accounts, and other Web buckets tied to my name.  I disown nothing.  I'm proud of my work.  But the impression of my "ownership", rather my "contribution", shades the welcome to others.  As soon as a license has roots, it should be stand for the sun.  Let the website be janky.  If it bothers someone, let them fix it.

I could rationalize this playbook in any number of ways after the fact.  But I don't need a theory as much as the benefits.  One above all else:  This approach welcomes feedback from utterly unexpected sources, at almost any time.

I did not think of [Parity](https://paritylicense.com) as a license for folks who just want beefy copyleft without exceptions, free or paid.  I'd guess that's now its primary use case.

I had no idea that Jeff Atwood would rename [API Copyleft](https://apicopyleft.com/), or that Han Seoul-Oh would give the most insightful feedback on a legal drafting problem I've ever seen online.  I didn't know Han existed.

I didn't think that [Prosperity](https://prosperitylicense.com) would outlive the publication of [PolyForm's 1.0.0 releases](https://polyformproject.org/licenses/).  It turns out folks really want a combination of noncommercial base and a free trial.

I thought [a license with a multi-media credit requirement](https://github.com/creditstxt/credit-license) would come out of [Blue Oak](https://blueoakcouncil.org/), if anywhere.  Turns out it dovetailed with [a project to create a standard form of credits for web services](https://creditstxt.com).

I thought [Icepick](https://icepicklicense.com) would be a throwaway [Cryptographic Autonomy License](https://github.com/holochain/cryptographic-autonomy-license) test fixture.  Until I started chatting up the P2P web people again.

What do I know?  How to draft legal terms, a bit about software development, and how to shop a license online with minimum friction, all by hard knocks.  Not everything.  But more than enough.

All of this experience reinforces my lightweight, low-friction, permissionless preferences.

When I read tweets, e-mails to public mailing lists, posts to public blogs, or comments to public repositories that say, in essence "Why wasn't I consulted?" or "Why didn't you do this through such-and-such a process?", I am deeply and profoundly confused.

Everyone is being consulted.  It's online.

This _is_ the process.  We can all get in touch with each other.

Each of those quibbles, through each of those channels, _could have been feedback on substance_, rather than a [point of order](https://polyformproject.org/licenses/) under rules that don't exist.

Anything resembling gatekeeping puts permissionless instincts on edge.  Those instincts trigger a reflex.  Identify demands for permission as such.  Ignore them, or if you can't, route around them.  Find the low-friction path, keep it clear, and stay on it.

If the process is productive, criticism is welcome ... in kind.  If the terms aren't good, send better ones, or a patch.  If the process isn't optimal, fork, try your process, and we'll see.  If the goals aren't your goals, tells us your goals.  We can decide to join up or part ways.  If the bona fides aren't to your satisfaction, go establish different ones.  If throwing spaghetti isn't your method, cook your way and feed your people.  We'll feed ours.

In the end, there is no such thing as a license to write software licenses.  Cambridge police didn't haul RMS in for the unauthorized practice of law, and they shouldn't have.

If a new set of terms has inherently welcome or unwelcome potential, we'll find out in the wild.  There's nothing more dangerous in the choice of a license than in the choice of a library, language, framework, or dev tool.  Except, perhaps, because licenses largely haven't been subjected to the last 10 years of Web-enabled development methodology.  They aren't well maintained.  They aren't rapidly developed.  They aren't field-upgradeable.  They can and should be.

What _is_ at stake is control.  If you think that noncommercial software licenses shouldn't exist, if you think that copyleft should belong to one political program, if you think that software licenses shouldn't demand credit, if you think they shouldn't reach into data, hardware, networking, or other dimensions of computing, if you think your moral concern is the only one that deserves to wield license power, then you _have_ to control the process of making and deploying new licenses.  Because plenty of developers want those terms, and will write them, with or without my kind of help.  If you can't convince them otherwise, or bully them out of it, you have to take the license commit bit out of their hands, or scare them out of using it.

Good luck with that.

Developers have the right to pick their licenses.  They have the means to write the new ones they want.  They can twiddle `LICENSE` as easily as `README`, and see others getting away with it.  They can read their own history, and how past attempts to constrain their license choices failed.