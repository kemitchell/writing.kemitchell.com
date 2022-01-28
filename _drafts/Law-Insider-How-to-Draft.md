---
title: Law Insider’s “How to Draft Open-Source Licenses”
description: that is not what this is about at all
tags:
- Open Source
- Software Licensing
---

I've been following [Law Insider](https://lawinsider.com)'s "Contract Teardown" series of YouTube videos, in which host-CEO Mike Whelan has colleagues walk through published contracts and other legal terms, talking shop, taking shots, and poking fun.  The latest episode, ["How to Draft Open Source Licenses"](https://www.youtube.com/watch?v=6ej-KfP68sw), features recent coder-turned-lawyer Matt Nuzum, who according to searches boasts tech-side experience at Canonical and John Deere.  The general theme is open source software licenses, with the recent spat about possible violation of the AGPL license for Mastodon by devs at Donald Trump's nascent social network venture as hook.

Three thoughts, quickly:

1.  This video is going to be way more confusing than helpful for lawyers who find it.  Mostly because of how Mike, the host, frames the subject and puts the question.  The tip-off is the title.  There's nothing about drafting open-source licenses here.  That is not what's going on.

2.  Despite the questions sent his way, Matt seems to know what he's talking about.  He's just too polite to steamroll his host.

3.  I should drop Matt a line and welcome him to the practice.  It took some digging, but I was able to find a Twitter account.  Done.

A few more details, for anyone landing here after the video:

## What to Do

If your client is using open source software, which is very common, there are probably just two things you need to do.  Keep them separate to keep them straight.

First and foremost, _if_ your client is giving out copies of software that includes open source, such as by delivering software to customers or publishing it online to download, they need include a "notices file" with downloads of the software that copies and pastes the license terms and copyright notices for the open source software used.  Specialists call this "notice".  You'll also see it called "attribution".  The terms for nearly all common open source software projects require it.

If you have an iPhone, you can see Apple's effort by opening the Settings app, then choosing "General", "Legal & Regulatory", and "Legal Notices".  Keep scrolling until you see the word "software".

Here's typical language from a very popular open source software license, the ["MIT License"](https://spdx.org/licenses/MIT.html):

> The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

The other popular standardized licenses for open-source software include the [BSD License](https://spdx.org/licenses/BSD-2-Clause), [Apache License](https://spdx.org/licenses/Apache-2.0.html), [GPL Version 2](https://spdx.org/licenses/GPL-2.0-only.html) and [GPL Version 3](https://spdx.org/licenses/GPL-3.0-only.html).  They all have requirements like this.

Second, apart from compiling license notices, your client needs to be looking out for projects under so-called "copyleft" licenses.  [Blue Oak Council publishes a guide.](https://blueoakcouncil.org/copyleft).  I will skim the surface here.

If your client is just _running_ software to do its business, without developing and marketing software of its own, there's usually nothing particular to do about copyleft license terms.  Servers running "Linux", which is licensed under terms called "GPL Version 2", are almost certainly fine.  Hosting blogs with WordPress, another GPL-licensed project, is almost certainly fine.  If your client's people are just using common software to do what the software does, risk of a serious compliance problem is negligible.  The guide linked above can give you a sense of the edge cases and whether they might affect your client.

However, if your client is _developing_ software using "copyleft" projects, they may be required to share and license their work under similar terms.  Since most companies developing software prefer to keep their software secret, or to sell licenses on commercial rather than open-source terms, the most common approach to copyleft projects is simply to avoid developing any software with them altogether.  That means setting a policy about copyleft software ahead of time and making sure your client's software developers know about it.  Blue Oak publishes sample policies for both [smaller](https://blueoakcouncil.org/starter-policy) and [larger](https://blueoakcouncil.org/company-policy) organizations that you can learn and crib from.

## Trump Network

The Trump social network people got in trouble because they were developing software---the software to run a social network---and used a project under a particularly strong copyleft license, the "Affero GPL" or AGPL, as a starting point.  They didn't publish and share their own work on the same terms.

The software developers involved should have known better, with or without legal help.  They may have figured they'd get away with it, as from what I've read, they didn't announce their work to the broader public, but only made it available for testing and perhaps a demo online.

Frankly, this happens all the time.  And the overwhelming majority of companies who make this mistake never have it noticed.  Of those who do get called out, the overwhelming majority again resolve it quickly and quietly, without any lawsuit, press coverage, or even any formal legal demand.  They just stop using the copyleft software.

The political salience of the situation wrecked the usual cost-benefit analysis here.  It's not at all clear to me that this goof will have lasting effects on the venture.  I vaguely recall there was another open source gotcha leveled at the Trump campaign in the run up to 2016 for another open source software project used by the campaign's website.

## Copy, Not Draft

In the vast majority of cases, the only to-do from open source software is #1 above: include a file with copies of copyright notices and license terms for open source software along with downloads of your client's software.

That notice file isn't a contract, and it doesn't need to be "drafted".  It's just a laundry list of notices, copied verbatim.  The job is more like printing legends on a stock certificate or providing safety disclosures about a rental property required by law.  Your client's software developers can likely do this themselves, likely by finding other open source software that will automate the process for them.
