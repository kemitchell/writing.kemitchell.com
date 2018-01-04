---
title: Feed this Bear
description: indie coder, promote thyself!
layout: post
tags:
- Open Source
- Contracts
---

If you're working on open source software,
and would like companies to pay you
for support, maintenance, or other work,
you should tell the Internet.

Software can be hard work.
Hard work should earn honest pay.
But nobody is going to think to pay you _anything_
if you don't say they should,
or even that they can.
Slapping MIT, BSD, and other
[legal gift wrap](https://oss.kemitchell.com)
on everything you do
sends exactly the opposite message.
If you show up on Christmas lugging a big bag of presents,
nobody's going to watch you hand out shiny boxes like candy and think,
"gee, I bet Santa here could use some side work".

Want to keep it as simple as possible?
Three easy steps to get started.

## Step One: Put Something in `README`

Kids these days, they're into shields:

![contracts available][1]

[1]: https://img.shields.io/badge/contracts-available-FF69B4.svg

Which is:

```markdown
![contracts available][1]

[1]: https://img.shields.io/badge/contracts-available-FF69B4.svg
```

Whatever you put in `README`,
make it slightly bigger,
make it slightly more visible,
put it slightly closer to the top,
than you're comfortable with right now.
Frankly, a shield is pretty dinky,
but for some reason,
this kind of thing isn't normal yet.

Go big.
Believe me, you'll grow into it.
`hotpink` is here to get noticed.
And that's the point.

I keep an eye out for this kind of thing online,
as I go about my own software business.
I don't notice nearly enough of it.
And I never open up a `README` and quick-search
"contract", just in case.

## Step Two: Spell It Out

While you're at it, make your new `README` thing a link
to a new `CONTRACTS.md` file:

```markdown
[![contracts available][1]](./CONTRACTS.md)

[1]: https://img.shields.io/badge/contracts-available-FF69B4.svg
```

Then make `CONTRACTS.md`:

```markdown
# Service Contracts

[K.E. Mitchell](mailto:kyle@kemitchell.com)
does support and training on the latest version of
[Switchmode](https://github.com/switchmode/switchmode/releases/latest).
```

I thought about cooking up and promoting
a structured-data format for this kind of info,
but plain text wins.
The world should see:

- who
- will do what
- on which terms
- and how to get in touch with them

Simple.

## Step Three: Tell Actual People

So far, you have
a small `README` billboard,
adrift in a vast sea of ads called the Internet,
and a note
showing somebody with write perms on the package
is also up to do contract work.

That's _way_ better than nothing.
It probably isn't enough.

If you're serious about making
any kind of decent income,
even beer money,
I'd recommend making yourself a little promise:

> I promise
> to mention that I'm up to do paid contract work
> to all the folks who open issues and pull requests on my project,
> and to link them to my `CONTRACTS.md` file.
> At least until I have as much work as I want,
> or I give up on this whole contracting thing altogether.

Is it okay to use [saved replies](https://github.com/settings/replies)
for this?
Hey, good idea!

Also: Don't give up.

## Switch-what?

I mentioned that `CONTRIBUTING.md` should mention contract terms.
You can use whatever terms you like,
or say nothing about terms and see what clients send your way.
But my example linked to a project called Switchmode.

[Switchmode](https://github.com/switchmode/switchmode)
is an open contract for open source contractors.
It tries to strike a balance between what companies want
and what developers raised on open source want.
It tries to use everyday English, instead of legalese.
It tries to avoid the basic, fundamental brokenness
of so many form contractor agreements
that I see applied to open-source-style software work,
even in the Greater Silicon Valley Area.

Switchmode comes with an "agreement",
a few pages of general terms
you can use to create a contracting relationship with a client.
That's the first thing to propose and sign.
Some folks may refer to this as the "master agreement".

Switchmode also comes with templates for "project summaries"
you can use to write out goals and terms for specific projects,
under the relationship.
That's the second thing.
Some folks are used to calling these kinds of things
"statements of work".

You'll need to fill out a project summary
to describe at least one
project---many clients like Google Docs for
this kind of thing---and send it to your client contact,
for feedback.
Once everybody's happy, both you and your client need to sign
the project summary, too.
Then you get working, and they get paying.

Projects can be "open projects",
like working on a public pull request,
or "closed projects",
like consulting on some proprietary client code.
If you start off doing one kind of work with a client,
and later on they ask for a different kind of project,
the terms for the relationship are ready for both.
If you start off doing support on one package of yours,
and the same client comes back to you for training on another,
you don't need a whole new contract.
You just need another project summary.

## Semiprofessional Document Hockey

Right now,
you'll probably need to download contract documents
as Word or Microsoft Word files
and e-mail them.
If you're lucky, the client will be willing
to sign online through something like [DocuSign](https://docusign.com).
If you're not so lucky,
you'll need to print a copy, sign it, and send a scan to the client,
so they can see your John Hancock.

The goal is to come up with terms that both sides agree on,
and make sure both sides end up with a final copy with a signature from each side.
Fortunately, this will normally happen once,
for the overall relationship agreement,
and then once per new project.

I am working on making this process easier.

## Two Classic Ways to Screw This Up

Congratulations, you're an independent contractor-developer.

How do you blow it?

### Misstep One:  Sign contracts that conflict with other job terms.

This can happen in many ways.

It's very often worthwhile to get a lawyer
to review your work agreements ahead of any arguably related moonlighting.
Suffice it to say, if you're employed to do software somewhere,
and contracting on the side,
you probably don't want to offer contracts that anyone could see as competing
in any way with your employer,
or using tools, knowledge, or time that belong to work.

The same goes for terms with other contracting clients.
If you've signed any noncompete or exclusivity terms,
those may pose a problem.
Switchmode doesn't have any of those kinds of terms,
but other things you've signed might.

Check your records, and ask a lawyer if you need help.
This is pretty run-of-the-mill contract-law stuff.

### Misstep Two:  Ignore income taxes.

You will very likely owe income taxes on money you earn contracting.
If your country has overlapping tax systems,
like federal and state taxes in the United States,
you may owe taxes under both.

Keep track of how much you earn, and when it gets paid.
Have a look at the income tax rules for where you live and work,
estimate how much you'll have to pay,
and remember to save _at least_ that much money,
plus a cushion,
at least until you've got the hang of it.

In the United States, long-term contractors have to file and pay
estimates of their income tax four times a year,
in addition to making the big return for the year.
Fortunately, government websites that let you set up automatic payments
have made this a lot easier to deal.
Budget some time to understand this process and get set up for it.

---

That's all for the basics, folks.

Good luck.
Go get paid.
