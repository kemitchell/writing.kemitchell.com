---
title: First Thoughts on the Redis Source Available License Agreement
description: evident demand for license rules on API boundaries
layout: post
tags:
- licensing
- open source
- copyleft
- open core
---

Redis Labs [recently announced another change to their modules license terms](https://redislabs.com/blog/redis-labs-modules-license-changes/), taking them away from the [Commons Clause](https://commonsclause.com), a messaging clusterfuck for which they briefly served as poster child.

A few quick thoughts on Version 1, dated February 21, 2019:

> This Agreement sets forth the terms on which the Licensor makes available the Software. BY INSTALLING, DOWNLOADING, ACCESSING, USING OR DISTRIBUTING ANY OF THE SOFTWARE, YOU AGREE TO THE TERMS AND CONDITIONS OF THIS AGREEMENT. IF YOU DO NOT AGREE TO SUCH TERMS AND CONDITIONS, YOU MUST NOT USE THE SOFTWARE.

There's lingering confusion over whether public software licenses are just licenses, contracts, or at least licenses and possibly also contracts.  That [distinction](http://www.gnu.org/philosophy/enforcing-gpl.html) has proved [more intellectual than practical](https://www.synopsys.com/blogs/software-security/breach-gpl-license-breach-contract/).  Increasingly, lawyers drafting public license terms are choosing to eliminate the uncertainty, by requiring their terms to be accepted as agreements.

> **Database Product**: any of the following products or services:
>
> (a) database;
>
> (b) caching engine;
>
> (c) stream processing engine;
>
> (d) search engine;
>
> (e) indexing engine;
>
> (f) machine learning or deep learning or artificial intelligence serving engine;
>
> ...

This is _not_ the standardizable form everybody's been waiting for.  These points are very specific to Redis Labs, and the kinds of competing projects that concern Redis Labs.  However...

> (g) a product or service exposing the Redis API;
>
> (h) a product or service exposing the Redis Modules API; or
>
> (i) a product or service exposing the Software API.

_These_ points are all highly reminiscent of the more general approach taken in my [API Copyleft License], previously called the Shared Component License, which I [blogged here last month]({% post_url 2019-01-30-API-Copyleft %}).  The key is the API.  There is hunger for license terms that protect against, or require open source release of, "wrapper" code that still exposes the API of the originally licensed software.  Various drafters, from various points of view, are converging on that dividing line for rules about free-of-charge and closed-source use.

[API Copyleft License]: https://github.com/kemitchell/api-copyleft-license

> **Your Application**: an application developed by or for You, where such application is not a Database Product.

Again, Redis Labs takes fundamentally the same tack as my [API Copyleft License].  We want a "safe zone" of permission for applications that _don't_ modify or expose the licensed software's API, but only use it.  The boundary is between "applications" of the licensed software and its API, and "wrappers" that expose or enhance that API for other applications.

Restricted, source-available licenses giving selective permission, based on API.  Open licenses selectively applying copyleft, based on API.

We're onto something...
