---
date: 2022-01-17T19:47:49-08:00
title: To-Do List Polling
description: event-based meatspace task management
tags:
- Law Practice
- Legal Technology
---

As I've [mentioned offhand before](https://writing.kemitchell.com/2021/06/16/In-Praise-of-Cron.html), I keep to-do lists as plain-text files in a Git repository.  Every morning, before I wake up, a cheap cloud computer I rent downloads my lists, pulls out every line with today's date in it, and e-mails them to me.

But what to do when tasks aren't due or scheduled for particular days?  What about tasks waiting on some unscheduled future event?  I can't put a date if I don't know what date to put.

I recently added a new convention for tasks triggered by events to come at unknown future times:

```
CEO returns from holiday >> follow up on insurance inventory
```

Everything before `>>` is the "event".  In this case, the client's CEO coming back from holiday.  Everything after `>>` is the task.  Once the event happens, I need to be reminded of the task.

This convention makes it easy for the computer to find the events I'm waiting on and ask me about them.  In other words, the computer can [_poll_](https://en.wikipedia.org/wiki/Polling_(computer_science)) me for these events.

I've scheduled another task for my cloud server: sending me a list of all the triggers in my to-do lists every Monday and Thursday morning.  For fellow nerds, the crontab line looks like this:

```crontab
30     11    *   *   1,4 ~/.cron/emailtodotriggers
```

Crucially, if multiple tasks are waiting on the same event, this script only e-mails me the event description once.  I may have a hundred tasks waiting on events, but only receive a list of five or six events by e-mail.  Easy enough to glance through---and likely delete without further action---in a few seconds, as I start my day.

So far, Monday and Thursday---twice a week---is the frequency that works for me.  I don't get e-mails with the same triggers so often that I get annoyed by the e-mails.  But I do get the e-mails frequently enough that I can generally respond quickly and keep things moving at pace.

Of course, sometimes I don't need the computer to remind me.  Sometimes I just remember.  I'm free to go into my to-do lists and follow up on my own initiative.  But I'm also free to offload responsibility for remembering to my lists.

I've long thought about doing something like this.  And I've certainly had some very busy times long before this change.  But especially toward the end of last year, I was _both_ slammed _and_ slammed by a bunch of event-driven tasks.  I couldn't hold it all in my head reliably, and I didn't yet have a good, systematic alternative.

Before adopting the new convention and writing the scripts, I used a clunky half-measure.  I'd schedule tasks a week or so in advance, with a note that the deadline was conditional on some event.  That sufficed for several years of a busy law practice.  But I spent a lot of time incrementing due dates.
