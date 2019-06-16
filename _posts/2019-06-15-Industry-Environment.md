---
title: Operating Environment
description: essential industry background for reading open software licenses
layout: post
tags:
- Industry
- Licensing
- Open Source
- Software
---

To understand how a software license works, you can't just read the license.  You need to know something about software.  And you need to know something about the software _industry_.

Here are a few rules, invariant in my lifetime, that come up repeatedly.  If you can think of more, [send me an e-mail](mailto:kyle@kemitchell.com).

## Most software made for money is closed. {#commercial}

Most commercial software developers keep their work private.

This is the root of much confusion about "copyleft" and "commercial" licensing.  Copyleft licenses, like those in the Free Software Foundation's GPL family, don't prohibit use in commercial software.  They prohibit use in _closed_ software, at least some of the time.  But as long as "commercial" reliably means "closed", GPL-family licenses can function as non<em>commercial</em> licenses, even though they're actually written as copyleft, or non<em>closed</em>.

The tight relationship of commercial and closed enables [public-private licensing business models](https://indieopensource.com/public-private/indies) in software, at least for software _components_ like frameworks and libraries, as opposed to complete _applications_ like mobile apps and developer tools.

Depending on who you ask, the activists behind many copyleft licenses want to compete against commercial software's closed orthodoxy, to change commercial software's orthodox from closed to open, or both.

## Nearly all software gets distributed. {#distributed}

Whether it's in the plan or not, developers usually end up sharing their software with others.

This is the root of much _other_ confusion about copyleft.  Many copyleft licenses, including most of the Free Software Foundation's GPL family, the Mozilla Public License, and the Eclipse Public License, require sharing alike only if you first share your work with others.  Under most of those licenses, there is at least implicit permission to create and use "private changes", even within a large organization, without triggering requirements to share or license source code.  Their copyleft rules only kick in when new work is "distributed" or "conveyed" to others.

Many companies that primarily build software _services_ that they run for customers to use, without sharing any source code, have taken false comfort in the idea that they'll never distribute copies of their programs with others, and used a lot of copyleft code.  This typically becomes a problem when a major prospective customer insists on running the software for themselves---"self-hosting", running "on premises", deploying to "private cloud", or similar---to meet operational, compliance, security, or other requirements.  Selling the customer means distributing, which would trigger copyleft.

Depending on who you ask, allowing private changes and limiting copyleft to "distributed" code is either ethically imperative or a hindrance to effectively requiring others, especially software service developers, to share their work as intended.

## Software makers fail to give notice. {#notice}

The Apache License Version 2.0 is a very common license.  But developers who know that it requires passing on copies of any `NOTICE` file provided with the software are rare.

Nearly all common open software licenses require providing copies of some information---disclaimers, license terms, copyright notices, specific files, lists of changes, instructions for finding and installing an official version---with copies of the software.  Most companies that build software using open source know of these requirements.  But even among savvy, well intentioned companies, shipping products and services without required notices is very, very common.

The result, at least in theory, is that these companies lose their licenses under open terms.  That means ongoing risk of copyright lawsuits from developers.

## Developers understand licenses by reputation. {#reputation}

As a whole, software developers do not read software licenses.  They see what other developers choose and use, what they get away with, and follow suit.  They pick up summaries and stereotypes about other terms as they go.

I do a lot of writing [to help developers who do want to read up make sense of what they find](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html).  I do a lot of other work [contributing to licenses that are easier to read on their own](https://blueoakcouncil.org/license/1.0.0).

But in the end, the result is better grist for the rumor mill.  More developers who can read and understand for themselves, and less misunderstanding, means licenses with reputations that more reliably track legal and practical reality.