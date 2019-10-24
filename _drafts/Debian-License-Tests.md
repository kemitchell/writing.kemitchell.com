---
title: The Debian License Tests Don't Make Sense
description: TODO
layout: post
tags:
- Open Source
- Licensing
---

The Debian project rightly holds its [Free Software Guidelines](https://www.debian.org/social_contract#guidelines) out as just that: guidelines, not [rigid rules or a quasi-technical standard](https://writing.kemitchell.com/2019/04/23/OSD-wontfix.html).  That messaging is transparent, honest, and good.  But when discussing licenses within that framework, Debian license wonks also turn to a couple hypotheticals that _do_ feel rigid and technical.  Unfortunately, those tests don't make any broader sense.

In my own words:

> <h2 id="desert-island">The Desert Island Test</h2>
>
> A ship's passengers wash up on a desert island with computers, solar chargers, and free software, but no way to communicate beyond the island.  They make changes to the software they use and share changes amongst themselves.  Can they meet the copyleft requirements of the software's license?

> <h2 id="dissident">The Dissident Test</h2>
>
> A dissident in a repressive dictatorship uses free software to send encrypted messages to fellow dissidents.  She makes a critical improvement to the software that she needs to share with fellow dissidents.  But she must remain hidden from local authorities.  Can she safely meet the copyleft requirements of the software's license?

Each of these tests commits two basic errors.  They're [implausible](#implausible) as proposed and [unhelpful](#unhelpful) in differentiating good from bad licenses.  In the end, their merit lies in [rationalizing](#rationalizing) foregone conclusions and intuitions, not in convincing anyone who takes the time to scratch their surface to change their own view.

## Implausible

Both the Desert Island Test and Dissident Test are implausible.  Not about islands or dissidents.  About licenses.

The tests assume governments and legal systems, the operating systems of all licenses, will act mechanistically, like software, rather than like governments and legal systems actually do.  They also ignore some basic legal principles that apply to licenses in extreme situations.

The Desert Island Test skirts entirely the concept of jurisdiction.  There is no universal license court with the power to make and enforce judgments all the world wide.

No jurisdiction operates without communication.  In order to sue someone under US law, you need to "serve" them a copy of your lawsuit papers.  In order to want to sue someone, you have to receive word that you have a reason to do so.

## Unhelpful

both the Desert Island Test and Dissident Test are unhelpful.  Apart from adding yet another way to exclude a license, or providing reviewers some sense of deterministic certainty, they don't advance meaningful goals.  They stymie licenses that do without leaving room from broader consideration.

## Rationalization

As tools for analyzing licenses, the Desert Island Test and Dissident Test fall short.  They're broken.  But I suspect they flourish anyway, meme-like, for orthogonal reasons.

Integration-style tests lend coder-pleasing determinism to an otherwise nebulous process in strange legal territory.  Unhelpfully hand-wavy guidelines and the open-system nature of law practically beg for discreet logic, especially for software people used to reducing all useful things to boolean algebra.

Second, they provide additional ammunition to those who want to disapprove of new licenses, especially copyleft licenses.  There are no similarly persistent rules of thumb for permissive licenses.  In theory, the tests could apply to some permissive license rules, like notice requires.  But in practice, they apply to copyleft licenses, and when they apply, they exclude.

As human beings, we feel compelled to offer reasoning to shore up our moral intuitions.  But the reasons are rarely good, because we nearly always start from moral conviction and work backwards, not the other way 'round.

As software people, we have made licensing a moral issue.