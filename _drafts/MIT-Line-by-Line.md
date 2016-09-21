---
title: The MIT License, Line by Line
description:
layout: post
---

[The MIT License][MIT] is the most popular open-source software
license.  Here's how one lawyer reads it, line by line.

[MIT]: http://spdx.org/licenses/MIT

## Read the License

If you haven't taken the time to actually read the license from
top to bottom---it's about 170 words total---you need to do so now.
Especially if licenses aren't your day-to-day.  Make a mental note of
anything that seems off or unclear, and keep trucking.  The point is to
prime the whole text, as context.  I'll repeat the whole text again,
in chunks and in order, with context and commentary.  The repetition
is designed to strengthen your understanding.

> The MIT License (MIT)
>
> Copyright (c) \<year\> \<copyright holders\>
>
> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> "Software"), to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:
>
> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.
>
> _The Software is provided "as is", without warranty of any kind,
> express or implied, including but not limited to the warranties of
> merchantability, fitness for a particular purpose and noninfringement.
> In no event shall the authors or copyright holders be liable for any
> claim, damages or other liability, whether in an action of contract,
> tort or otherwise, arising from, out of or in connection with the
> software or the use or other dealings in the Software._

The license is arranged in five paragraphs, but logically it breaks down like this:

- **Header**
  - **License Title**: "The MIT License"
  - **Copyright Notice**: "Copyright (c) ..."
- **License Grant**: "Permission is hereby granted ..."
  - **Grant Scope**: "... to deal in the Software ..."
  - **Conditions**: "... subject to ..."
    - **Attribution and Notice**: "The above ... shall be included ..."
    - **Warranty Disclaimer**: "_The software is provided 'as is' ..._"
    - **Limitation of Liability**: "_In no event ..._"

Here we go:

## Header

### License Title

> The MIT License (MIT)

"The MIT License" is a not a single license, but a family of
license forms derived from language prepared for releases from the
Massachusetts Institute of Technology.  The Fedora Project maintains a
[kind of cabinet of MIT license curiosities][Museum], with insipid
variations preserved in plain text like anatomical specimens in
formaldehyde, tracing an incremental and circuitous path of evolution.

[Museum]: https://fedoraproject.org/wiki/Licensing:MIT?rd=Licensing/MIT

Fortunately, the [Open Source Initiative][OSI] and [Software Package
Data eXchange][SPDX] groups have standardized a generic MIT-style
license form as "The MIT License".  OSI in turn has adopted SPDX'
standardized [string identifiers][IDs] for common open-source
licenses, with `MIT` pointing unambiguously to the standardized form
"MIT License".  If you want MIT-style terms for a new project, use
[the standardized form][MIT].

[OSI]: https://opensource.org

[SPDX]: https://spdx.org

[IDs]: http://spdx.org/licenses/

Even if you include "The MIT License" or "SPDX:MIT" in a `LICENSE`
file, any responsible reviewer will still run a comparison of the
text against the standard form, just to be sure.  While various
license forms calling themselves "MIT License" vary mostly in only
minor details, the looseness of what counts as an "MIT License"
has tempted some authors into adding bothersome "customizations".
The canonical horrible, no good, very bad example of this is "[the
JSON license][JSON]", which is a standard MIT-family license plus:

[JSON]: https://spdx.org/licenses/JSON

> The Software shall be used for Good, not Evil.

This kind of thing might be "very Crockford", but mostly it's just a
pain in the ass.  Maybe the joke was supposed to be on the lawyers.
But they laughed all the way to the bank.

Moral of the story:  "MIT License" alone is ambiguous.  Folks probably
know what you mean, but you're only going to save everyone---yourself
included---time by copying the text of the standard MIT License
form into your project.  If you use metadata, like the `license`
property in package manager metadata files, to designate the `MIT`
license, make sure your `LICENSE` file and any header comments use
the standard form text.  All of this can be [automated][licensor].

[licensor]: https://www.npmjs.com/package/licensor

### Copyright Notice

> Copyright (c) \<year\> \<copyright holders\>

Until 1976, United States copyright law required specific, formal
steps, called "formalities", to secure copyright in creative works.
If you didn't follow those formalities, your rights to sue others for
unauthorized use of your work was limited, and often completely lost.
One of those formalities was "notice":  Putting marks on your work
and otherwise making it known to the market that you were claiming
copyright on your work.  The &copy; is a standard symbol for marking
copyrighted works, to give notice of copyright.  The ASCII character
set doesn't have the &copy; symbol, but `Copyright (c)` gets the same
point across.

The 1976 Copyright Act, which "implemented" many requirements of the
international Berne Convention, eliminated formalities for securing
copyright.  At least in the United States, copyright holders still need
to register their copyrighted works before suing for infringement,
with potentially higher damages if they register before infringement
begins, but in practice many register copyright before bringing suit
against someone in particular.  You don't lose your copyright just
by failing to put notices on it, registering, sending a copy to the
Library of Congress, and so on.

Even if copyright notices aren't as absolutely necessary as they used
to be, they are still plenty useful.  Stating the year a work was
authored and who the copyright belonged to give some sense of when
copyright in the work might expire, bringing the work into the public
domain.  The identity of the author or authors is also useful: United
States law calculates copyright terms differently for individual and
"corporate" authors.  Especially in business use, it may also behoove
a company to think twice about using software from a known competitor,
even if the license terms give very generous permission.

The MIT License forms descend from forms written for releases of code
by institutions.  For institutional releases, the expected copyright
holder is the institution itself, not any individual author or list
of authors.  The same assumption holds for some variants of the
MIT License, too, like [The ISC License][ISC].  In each case, these
institutions relied on rules of copyright ownership, called "[works
made for hire][WMFH]" rules, that give employers and clients ownership
of work their employees and contractors do on their behalf.  More
recently, collaborative foundations like the Eclipse and Apache have
used the same approach with their own house licenses---[Apache-2.0] and
[EPL-1.0]---backed up by contributor license agreements---[Apache CLAs]
and [Eclipse CLAs]---that collect license rights from contributors
who are neither employees nor contractors of the steward entity.
Collecting copyright ownership in one place is even more important
under "copyleft" licenses like the GPL, which rely on copyright owners
to enforce license conditions that promote the values of contributors.

[ISC]: http://www.isc.org/downloads/software-support-policy/isc-license/

[WMFH]: http://worksmadeforhire.com/

[Apache-2.0]: https://www.apache.org/licenses/LICENSE-2.0

[EPL-1.0]: https://www.eclipse.org/legal/epl-v10.html

[Apache CLAs]: https://www.apache.org/licenses/#clas

[Eclipse CLAs]: https://wiki.eclipse.org/ECA

These days, loads of projects without any kind of institutional or
business owner use MIT-style license terms.  SPDX and OSI have helped
these use cases by standardizing forms of licenses like MIT and ISC
that don't refer to a specific entity or institutional copyright
holder.  Armed with those forms, the prevailing practice of project
authors is to fill their own name in the copyright notice of the form
very early on ... and maybe bump the year here and there when they
remember.  At least under United States copyright law, the resulting
copyright notice doesn't give a full picture.

The original owner of a piece of software retains ownership of their
work.  But while MIT-style license terms give others right to build
on and change the software, creating what the law calls "derivative
works", they don't give the original author ownership of copyright in
others' contributions.  Rather, each contributor has copyright in any
[even marginally creative][Feist] contributions they make.

[Feist]: https://en.wikipedia.org/wiki/Feist_Publications,_Inc.,_v._Rural_Telephone_Service_Co.

Most of these projects also balk at the idea of taking contributor
license agreements, to say nothing of signed copyright assignments,
for each patch they take.  That's understandable.  But apart from the
naive assumption of some newer open-source developers that sending a
pull request on GitHub "automatically" licenses the contribution for
distribution on the terms of the project's existing license---what
Richard Fontana of Red Hat calls "inbound=outbound" licensing---United
States law doesn't recognize any such rule in any reliable way.

To fill the gap between legally effective, well-documented grants
of rights in contributions and no paper trail at all, some projects
have adopted the [Developer Certificate of Origin][DCO], a standard
"statement" contributors allude to using `Signed-Off-By` metadata
tags in their Git commits.  The Developer Certificate of Origin
was developed for Linux kernel development in the wake of the
infamous SCO lawsuits, which alleged that chunks of Linux' code
derived from SCO-owned Unix source.  As a means of creating a paper
trail showing that each line of Linux came from a contributor,
the Developer Certificate of Origin functions nicely.  While the
Developer Certificate of Origin isn't a license, it does provide
lots of good evidence that those submitting code expected the
project to distribute their code, and for others to use it under
the kernel's existing license terms.  The kernel also maintains
a machine-readable `CREDITS` file listing contributors with name,
affiliation, contribution area, and other metadata.  I've done some
[experiments][AUTHORS] adapting that approach for projects that don't
use the kernel's development flow.

[DCO]: http://developercertificate.org/

[AUTHORS]: https://github.com/berneout/authors-certificate

## License Grant

> Permission is hereby granted, free of charge, to any person obtaining
> a copy of this software and associated documentation files (the
> "Software"),

### Grant Scope

> to deal in the Software without restriction, including
> without limitation the rights to use, copy, modify, merge, publish,
> distribute, sublicense, and/or sell copies of the Software, and to
> permit persons to whom the Software is furnished to do so, subject to
> the following conditions:

### Three License Conditions

### Notice Condition

> The above copyright notice and this permission notice shall be
> included in all copies or substantial portions of the Software.

### Warranty Disclaimer

> The Software is provided "as is", without warranty of any kind,
> express or implied, including but not limited to the warranties of
> merchantability, fitness for a particular purpose and noninfringement.

This text appears in `ALL CAPS` in `LICENSE` files.

## Limitation of Liability

> In no event shall the authors or copyright holders be liable for any
> claim, damages or other liability, whether in an action of contract,
> tort or otherwise, arising from, out of or in connection with the
> Software or the use or other dealings in the Software.

This text appears in `ALL CAPS` in `LICENSE` files.
