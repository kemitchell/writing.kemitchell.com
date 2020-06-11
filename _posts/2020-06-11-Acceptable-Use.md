---
title: Acceptable Use
description: different delivery, same rules
date: Thu 11 Jun 2020 11:51:43 AM PDT
tags:
- Code of Conduct
- Drafting
- Governance
- Licensing
- Software
- Software as a Service
---

Dig into the terms of service from nearly any company offering software as a service and you'll find something like an "Acceptable Use Policy".  These policies list things you may not do with the services, even if the software itself allows them.  Some are boring, like "don't break the law on our website".  Others veer more toward what we'd expect from a code of conduct, like "don't abuse other users" or "don't post morally reprehensible content".  Just in case the rules don't cover everything, nearly every provider reserves the right to boot people and content they don't like, for any or no reason.

If the software the company provides as a service is open source, there's no such list of don'ts in the license terms.  Perhaps the company makes software for hosting chat rooms.  In their chat rooms, they might ban racist diatribes.  But if you download the software and run it for yourself, the developer's acceptable use policy doesn't apply to your instance.  You can write, and allow, as many racist diatribes as you want.

Some companies don't care.  "Not our customer, not our problem."  But that breaks down in a few common ways.

For even relatively profit-driven companies, association with disreputable people, groups, and content can take a marketing toll.  Companies don't want to see news stories connecting them to bad actors they've never heard of.  They don't want to see their project name and branding on sites that bring them disrepute, politically and commercially.  They don't want their recruiters trying to explain away associations.

Company staff and other contributors to the company may also look beyond their day-to-day tasks to the impact of their work, for motivation.  Most people like to think that beyond earning them a paycheck, their work contributes to society more broadly.  In some fields, the nature of the work simply doesn't afford visibility into where the work goes, or whether it does good or not.  It has to be abstract, a leap of faith.  But in much of software, especially software used on the public Net, it's easy to find out where the work goes.  It may be part of the product itself to "phone home" for updates, security fixes, and telemetry, to begin with.

I've written before that there's no inherent legal or other structural reason that we have to treat codes of conduct, or rules about collaboration and events, differently than license rules, or codes about use of software.  We could write a single document, with a list of don'ts that apply to both development and use, and use it for both.

The same is true of terms of service and terms for software.  There's nothing to stop any company writing a single acceptable use policy and applying it to both hosted and licensed code.

My recent [Normally Open](https://github.com/berneout/normally-open-closed/blob/master/open.md) license, now at 1.0.0, points in this direction.  Normally Closed is a license _template_.  You need to fill one section out for yourself:

> ## Prohibited Purposes
>
> 1.  {You may not use this software for....}
>
> 2.  {You may not use this software to....}

The expected approach is to write a list of don'ts right into the section.  But we could as easily incorporate that list by reference:

> ## Prohibited Purposes
>
> 1.  You may not use this software for any purpose prohibited by our acceptable use policy at <http://example.com/acceptable-use>.
>
> 2.  You may not use this software for any purpose that we deem offensive, objectionable, or likely to disparage our good name in a notice to you.  You will have thirty days to stop using this software after receiving such a notice.

If your code of conduct for users connects to your motivation, your marketing, and your ability to function more broadly, you can plug it into all relevant terms: for software, for service, for collaboration.  Rules are rules.  We can plug them into rule-shaped slots.
