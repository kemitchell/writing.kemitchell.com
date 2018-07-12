---
title: The Posterity Public License
description: a strong-attribution open source license
layout: post
---

I'm no great legal talent.  But I hang out with the kind of people I represent.  Occasionally, I manage to shut up and listen to them.

This week, one of the people talking was [Dominic Tarr](https://twitter.com/dominictarr).  Dominic was kind enough to read an update on my [License Zero](https://licensezero.com) project announcing the release of some revised licenses, including [Parity](https://licensezero.com/licenses/parity), a very strong share-alike software license.  Dominic expressed an interest in a similarly strong license that puts its muscle behind _attribution_, or giving credit, rather than requiring release of source code.

## Behind the Scenes

Dominic wrote [`rc`](https://www.npmjs.com/package/rc), a very popular software configuration loading library.  Lots of programmers use `rc`, and downloaded it more than four million times per week.  But beyond that top-line figure, it's very hard for Dominic to tell who's using his work, or to show others not in-the-know what he's accomplished.  Since `rc` is useful primarily in _server_ software, which companies run for their customers, rather than copy and send to their customers to run for themselves, the attribution conditions of `rc`'s well known open source licenses don't kick in.

Most open source licenses come on condition of giving contributors credit, often phrased in terms of keeping the copyright notices on their code.  Attribution conditions are almost always triggered by giving _copies_ of the software to others.  For example, from The MIT License:

> The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

From BSD-2-Clause:

> 1. Redistributions of source code must retain the above copyright notice...
>
> 2. Redistributions in binary form must reproduce the above copyright notice...

From Apache-2.0:

> You must retain, in the Source form of any Derivative Works that You distribute, all copyright, patent, trademark, and attribution notices from the Source form of the Work...

That's all well and good, but software-as-a-service companies usually don't give copies of server software to anyone.  So these rules about credit usually don't apply.  The same dynamic affects developer tools: software programs for writing other software programs.  Open source terms for tools, libraries, and frameworks that live "behind the scenes" of software-as-a-service leave credit behind the scenes, as well.  The developers working on those services might know who contributes to the open source software they use.  But customers can't find credits, and open source contributors themselves can't point to any.

End result, existing open source licenses often leave developers like Dominic without the one kind of compensation nearly everyone agrees they have a right to demand: credit for the work they've generously given away for free.  Programmers, especially new programmers, use open source to establish positive, publicly verifiable track records and reputations.  Over time, it's even possible to achieve a very narrow kind of fame within the software industry, as Dominic has.  Programmers routinely leverage open source credit into paid positions within the industry.  The more credit, the more leverage.

## Bugfix

Consider the overall picture.  Even attribution---the most-basic, lowest-cost, broadest-consensus kind of compensation for open source contributors---is fundamentally busted, fallen behind the times.  Even when open source consumers _do_ follow the rules---not a strong assumption, especially in web software these days---the rules _as written_ leave open source contributors without simple recognition.

A vicious bug.  Here's a fix:

> # The Posterity Public License 1.0.0
>
> Copyright Notice: [Name]
>
> Source Notice: [Source]
>
> This license lets you use and share this software for free, as
> long as you credit me when you build with it. Specifically:
>
> If you follow the rules below, you may do everything with
> this software that would otherwise infringe my copyright in
> it or any patent claim I can license that you would infringe
> by using this software as of my latest contribution.
>
> 1. <mark>If you run or combine this software with other software in
>    any larger software system, give me credit.</mark>
>
> 2. <mark>Give me credit for software whose source code you write,
>    change, or analyze with this software.</mark>
>
> 3. Ensure everyone who gets a copy of this software from you,
>    in source code or any other form, gets the text of this
>    license and the copyright and source notices above.
>
> 4. Do not make any legal claim against anyone for infringing
>    any patent claim they would infringe by using this software
>    alone, accusing this software, with or without changes,
>    alone or as part of a larger program.
>
> <mark>To give me credit, give users of your software notice that I
> contributed to this software, and indirectly to your software,
> and make sure that it is easy for users to find when using your
> software. For example, if users access your software via the
> World Wide Web, put the notice at the bottom of the home page, or
> put a link there to a page with notice in its main text content.</mark>
>
> ***This software comes as is, without any warranty at all. As far
> as the law allows, I will not be liable for any damages related
> to this software or this license, for any kind of legal claim.***

Posterity is a "fork" of the [Parity](https://licensezero.com/licenses/parity) license I wrote for [License Zero](https://licensezero.com).  Parity is a very strong share-alike license, requiring release of source for changes, larger programs, and software built with developer tools.  Posterity requires developers using open source to build software to credit the open source developers to their end users, even if they only use open source "behind the scenes".

I wrote Posterity by replacing Parity's "release source code" requirement with a "give me credit" requirement and making a few conforming changes.  Much of the same language that makes Parity a strong-copyleft license makes Posterity a strong-attribution license.  I'm not aware of any such strong-attribution license before it.

How does it all play out?

If `rc` were licensed under Posterity terms, I would read it to require a company using `rc` in the server software for a time-tracking service to give Dominic and other `rc` developers credit for `rc` on a credits page linked from the time-tracking app's homepage.  If a source code bundling tool like [Browserify](https://browserify.org) were licensed under Posterity terms, I would read it to require a company using Browserify to build the client-side JavaScript bundle for its Internet game site, I would read it to require similar credit for James Halliday and the other Browserify developers.  If a compiler like [`gcc`](https://gcc.gnu.org/) were licensed under Posterity terms, I would read it to require a company using `gcc` to compile a proprietary graphics editor to include credit for the `gcc` team in a screen accessible from its application's menu.

## Next

I wrote the initial draft of Posterity late one evening in a few minutes.  I've already had amazing feedback on language and presentation.  The text of Posterity is [on GitHub](https://github.com/berneout/posterity-public-license), and I'd love feedback, especially from developers, to refine it further.

Like Parity and the other licenses in the License Zero family, Posterity is written to be readable.  If the license text doesn't make sense to you, as a developer, that's a bug.  Please report, so we can fix it!
