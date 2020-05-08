---
title: Two Tiny Web Apps
description: long-serving micro-groupware
tags:
- Programming
- Collaboration
- Node.js
- JavaScript
---

Many friends and clients have run into two tiny web apps that I use all the time: [approval.kemitchell.com](https://github.com/kemitchell/approval.kemitchell.com) and [growset.kemitchell.com](https://github.com/kemitchell/growset.kemitchell.com).

The approval app helps me create menus of choices for people to say "yes", "no", or "disfavored" to:

![approval example](/images/approval.png)

When they submit the form, the app sends me an e-mail with their responses and updates the page so the next one to respond can see all previous answers.

This works great for scheduling meetings.  I put the times I'm available on a form and e-mail a link to all the participants.

The growset app helps me create forms people can use to add items to a list:

![growset example](/images/growset.png)

This works great for "brainstorming", even by myself.  Once an item gets added to the list, it can't be deleted.  That reinforces the goal of rattling off raw ideas, without filtering or curating the list.

For each app, I set a simple HTTP password for creating new forms.  The addresses for forms created end with big, long, random codes, like links you might use to reset a password.  Anyone with the link can access the page without any password.

The approval app, the larger of the two, weighs in at less than 400 lines of JavaScript, less than 100 lines of HTML, and less than 50 lines of CSS.  The servers run on Node.js, without any framework.

The server for running both apps, plus a smattering of websites, cron jobs, and other miscellany, costs $5 a month.

Three cheers for dinky software!
