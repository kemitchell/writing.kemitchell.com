---
title: In Praise of Cron
description: seventies-era automation for the working lawyer
tags:
- Law Practice
- Legal Technology
---

The [UNIX shell](https://en.wikipedia.org/wiki/Unix_shell) was a very good idea.  If you can command a UNIX shell, like a [Bash shell](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) on a [Linux](https://en.wikipedia.org/wiki/Bash_(Unix_shell)) computer, to do something, you can also automate doing that thing.  All you have to do is key it into a file---a "script"---instead of to the command line, and then tell the computer to follow that script, one or many times.  Each time, the computer will read the file and follow each of its commands, as if you were typing them in on the keyboard yourself, but a lot faster.  A person still needs to tell the computer to read the script.  Or they can start a program that tells the computer for them.

One such program is [cron](https://en.wikipedia.org/wiki/Cron).  cron is a program that always runs in the background.  Minute by minute, day by day, cron reads a file called your "cron table" or "crontab".  Your crontab lists commands along with schedules for running them.  When a command's scheduled time comes up, cron follows that command.  So cron lets us write scripts along with instructions for when to run them, when we're at the computer or when we're away.

I rent a "cloud" computer that runs cron for me, among other things.  It costs me $10 per month.  It is not a very powerful computer.  But it doesn't have to be.  Mostly, it just stays on all the time, connected to the Internet.  Even when I'm asleep.  Especially when I'm asleep.

Here are some of the many kinds of jobs in my crontab:

- Check my e-mail and back it up every ten minutes.

- Download all my to-do lists and e-mail me all the tasks due today at 0930 every weekday.

- Download lists of my friends, family members, clients, former clients, and colleagues, pick some at random from each list, and e-mail me their names at 0930 every weekday.

- Download my client billing records and e-mail me a list of overdue bills in the middle of every month.

- Run basic summary statistics on bills and finances.

- Check for new blog posts, post links to them through my otherwise abandoned Twitter account, and e-mail me a reminder to share them on appropriate forums and mailing lists.

- Move any PDFs I've saved to a particular Dropbox folder into long-term document storage, with backups.

- Download an up-to-date list of all the webpages I look after, check that the sites respond to requests, and verify that the security settings are up-to-date.  If anything's wrong, e-mail me.

- Download an up-to-date list of my websites, then check all their pages for broken links.

- Download a list of all the public-facing terms and policies that I look after for clients and make sure they're okay, too.

- Check all the repositories where I track changes to legal documents for clients and make sure they're using the latest versions of my contract development and build tools.

- Check other software projects to make sure their dependencies are out of date and I'm not using any open source code with known security problems.  Send me an e-mail if I am.

And on and on.  Mostly in the dead of night, California time.

Many tools make this possible, because my scripts need to do many different kinds of things.  At the moment:

- `fcron` is my preferred version of cron.  I appreciate how easy it is to set up notifications by e-mail, only when there are errors.  I also like how it helps me avoid running too many commands at one time, even if I schedule them for the same time.

- `rclone` moves files around between Dropbox, Google Drive, Backblaze, Digital Ocean Spaces, and the like.

- `git` handles a lot of my day-to-day text files, like to-do lists and bills.

- `offlineimap` reads e-mail.

- `msmtp` sends e-mail.

- `pass` encrypts my API keys and other access credentials.

- LinkChecker checks for broken links across entire websites.

- `bti` posts to Twitter.

- FastMail, my e-mail host, makes it really easy to create keys and passwords just for sending and receiving.

I can't help pointing out that _none_ of these tools are "legal technology".  They are just good technology.  Good in the sense that they are broadly useful to a great many people in many fields.  Which is part of the reason so many programs and companies have developed and looked after them.

Of course, a lot of this whiz-bang automation really comes down to pestering myself via e-mail.  cron sends me a lot of e-mail.  But as much as I need to be pestered, that would be a lot of work.

I'm grateful that a computer will do it for me.  Otherwise, I might take it personally.  And frankly, it probably wouldn't get done.
