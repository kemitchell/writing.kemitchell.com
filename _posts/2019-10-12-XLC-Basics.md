---
title: XLC Building Blocks
description: essential concepts and vocabulary for cross-license collaboratives
layout: post
series: Cross-License Collaboratives
tags:
- Licensing
---

There are just a few key legal concepts behind [Cross-License Collaboratives](https://xlcollaborative.com).  Here they are in short, plain terms.

Understand that this is a very simplistic summary of some very big topics.  For a more detailed introduction to intellectual property, see [my field guide](https://fieldguide.kemitchell.com).

## Intellectual Property

Laws called _intellectual property laws_ give people control of information, like creative works and useful designs.

Without any laws saying otherwise, anyone who finds information is usually free to use it.  That's great for users, but can make it difficult to encourage and compensate those making new information available.  In theory, intellectual property laws address this problem by giving makers temporary control of what they find, and allowing them to use that control to make money.

## Infringement

Owners of intellectual property like copyrights and patents enforce their rights by suing others for _infringement_, or using their rights without permission.

## Copyright

_Copyright law_, a kind of intellectual property law, gives people control over how others use their creative work, such as writing, artwork, music, or software.

If I use my creativity to write a new computer app, and you make and share copies of it on the Internet without my permission, I can take you to court for infringing my copyright.

## Patent

_Patent law_, another kind of intellectual property law, gives people control over how others use useful inventions they discover and publish through the government.

If I invent a new process for manufacturing bicycles, and you build factory equipment that uses my process without my permission, I can take you to court for infringing my patent.

## Licenses

Those who own intellectual property, like copyrights and patents, can give others permission to use their work, or _licenses_.

If I give you a license to copy and share my app, and try to take you to court for infringing my copyright, you can show the court your license and get off free.

## Derivatives and Improvements

Copyrights and patents are often based on other copyrights and patents.

If I license you to use, change, and share my app, and you make your own version with new, creative features, we both have copyrights in your new new version.  My copyright covers the creative code that I wrote.  Your copyright covers the creative code that you wrote.

Because there are two copyrights in your new version of my app, users of your new version will need license for both.  If someone else has a patent that covers our app, users will also need a license for the patent.

## Sublicenses

Owners of copyrights and patents can also allow those they license to license others in turn.  A license given by someone who also has a license is called a _sublicense_.

Remember our running app example.  Users need license for my copyright in the original app, as well as your copyright in your new code.  Users could get license for each copyright from its owner: you could license your copyright in the app, and I could license mine.

Thanks to sublicensing, license for a copyright or patent doesn't have to come directly from the owner.  If I license you to use, copy, and share my copyright in my original app, and also give you permission to sublicense others to do the same, you can license both copyrights in your new version of my app.  You can license your copyright because you own your copyright.  You can sublicense my copyright in the app because I licensed you to sublicense.

## Cross-Licenses

When two owners of intellectual property rights license each other, we call it a _cross-license_.

Remember our running app example again.  If I license you to use, copy, and share my copyright in my original app, and also give you permission to sublicense others, you can license both copyrights in your new version of my app.  However, I can only license my copyright, not yours.

If you license me for your copyright, as I license you for mine---if we cross-license our copyrights in your new version of my app---then we can both license all the copyrights in your new version of the app.

## Cross-License Collaboratives

Contributor license agreements as we know them today work like the example in [Sublicenses](#sublicenses).  One person or organization, usually a company or foundation, can license all the contributions to the project.

[Cross-License Collaboratives](https://xlcollaborative.com) work like the example in [Cross-Licenses](#cross-licensees), with a twist.  Any contributor can license all the contributions to the project, _but only if contributors vote to allow it as a group_.

## Extra Credit: What about open licensing?

If you're familiar with public licenses for software or other creative work, like MIT, BSD, Apache, or Creative Commons terms, you may wonder how they handle sharing.  Clearly, if you find a bit of MIT-licensed software or a CC-BY-licensed photo online, you can share it with others.  How does that work, legally?

In two ways.

Most open licenses work through _direct licensing_.  Rather than giving permission to sublicense, they require that copies of the work being licensed come with copies of the license.  From the MIT License:

> The above copyright notice and this permission notice (including the next paragraph) <mark>shall be included in all copies or substantial portions of the Software</mark>.

When users see the license terms for the software, they see that they apply to anyone who gets a copy.  Again from the MIT License:

> Permission is hereby granted, free of charge, <mark>to any person obtaining a copy of this software and associated documentation files</mark>...

Under direct licensing, everyone gets a license directly.  There are no sublicenses.  This can reassure users, because of legal rules that say that if a license terminates, any sublicenses under it usually terminate, too.  Cross-License Collaboratives explicitly opt out of this rule:

> ## Resignation
> Any contributor may resign at any time by circulating a message of resignation.  When a contributor resigns, all cross-licenses to that contributor end, <mark>but their cross-licenses to other contributors, as well as any sublicenses they have given, continue</mark>.

Some open licenses also allow sublicensing.  For example, from the MIT License again:

> Permission is hereby granted ... to use, copy, modify, merge, publish, distribute, <mark>sublicense</mark>, and/or sell copies of the Software, <mark>and to permit persons to whom the Software is furnished to do so</mark>...

And from Apache 2.0:

> Grant of Copyright License. ... each Contributor hereby grants to You a ... copyright license to reproduce, prepare Derivative Works of, publicly display, publicly perform, <mark>sublicense</mark>, and distribute the Work and such Derivative Works in Source or Object form.

Other very popular open licenses do not say anything about sublicensing at all.  For example, the word "sublicense" does not even appear in BSD licenses.

Creative Commons licenses rely on direct licensing only.  From Creative Commons Attribution 4.0 International license:

> Subject to the terms and conditions of this Public License, the Licensor hereby grants You a worldwide, royalty-free, <mark>non-sublicensable</mark>, non-exclusive, irrevocable license ...
