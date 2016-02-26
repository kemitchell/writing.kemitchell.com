---
title: React Patent Redline
description: Changes to Facebook's patent grant for React, Flux, Immutable, &c.
layout: post
tags:
- Patent
- Licensing
- Open Source
---

After something of a backlash, Facebook revised the separate patent grant for its [React][react] software and related libraries.

I've [converted both versions of the grant to Markdown for easy viewing on GitHub][repo], but the word-diff is still pretty hard to read. Here's a hand-tuned HTML redline for reference:

<!--jump-->

> Additional Grant of Patent Rights <ins>Version 2</ins>
>
> "Software" means the React software distributed by Facebook, Inc.
>
> <del>Facebook</del><ins>Facebook, Inc. ("Facebook")</ins> hereby grants <del>you</del><ins>to each recipient of the Software ("you")</ins> a perpetual, worldwide, royalty-free, non-exclusive, irrevocable (subject to the termination provision below) license under any <del>rights in any patent claims owned by Facebook,</del><ins>Necessary Claims,</ins> to make, have made, use, sell, offer to sell, import, and otherwise transfer the Software. For avoidance of doubt, no license is granted under Facebook's rights in any patent claims that are infringed by
>
> (i) modifications to the Software made by you or <del>a</del><ins>any</ins> third <del>party,</del><ins>party</ins> or
>
> (ii) the Software in combination with any software or other <del>technology provided by you or a third party.</del><ins>technology.</ins>
>
> The license granted hereunder will terminate, automatically and without notice, <del>for anyone that makes any claim (including by filing any lawsuit, assertion or other action) alleging (a) direct, indirect, or contributory infringement or inducement to infringe any patent</del><ins>if you (or any of your subsidiaries, corporate affiliates or agents) initiate directly or indirectly, or inducement to infringe take a direct financial interest in, any Patent Assertion</ins>:
>
> (i) <del>by</del><ins>against</ins> Facebook or any of its subsidiaries or <ins>corporate</ins> affiliates, <del>whether or not such claim is related to the Software,</del>
>
> (ii) <del>by</del><ins>against</ins> any party if such <del>claim</del><ins>Patent Assertion</ins> arises in whole or in part from any software, <ins>technology,</ins> product or service of Facebook or any of its subsidiaries or <ins>corporate</ins> affiliates, <del>whether or not such claim is related to the Software,</del> or
>
> (iii) <del>by</del><ins>against</ins> any party relating to the <del>Software;</del><ins>Software.</ins>
>
> <del>(b) that any right in any patent claim of Facebook is invalid or unenforceable.</del>
>
> <ins>Notwithstanding the foregoing, if Facebook or any of its subsidiaries or corporate affiliates files a lawsuit alleging patent infringement against you in the first instance, and you respond by filing a patent infringement counterclaim in that lawsuit against that party that is unrelated to the Software, the license granted hereunder will not terminate under section (i) of this paragraph due to such counterclaim.</ins>
>
> <ins>A "Necessary Claim" is a claim of a patent owned by Facebook that is necessarily infringed by the Software standing alone.</ins>
>
> <ins>A "Patent Assertion" is any lawsuit or other action alleging direct, indirect, or contributory infringement or inducement to infringe any patent, including a cross-claim or counterclaim.</ins>

[react]: https://github.com/facebook/react

[repo]: https://github.com/kemitchell/facebook-patent-grant
