---
title: The MIT License, Line by Line
description:
layout: post
---

[The MIT License][MIT] is the most popular open-source software
license.  Here's how one lawyer reads it, line by line.

[MIT]: http://spdx.org/licenses/MIT

## Read the License

If you haven't taken the time to actually read the license from top
to bottom, you need to do so now.  The rest of this post will help
you make sense of how it's written and the background it rests on.
If you want the most out of the experience of this post, you need
both the big picture in the back of your mind and the repetition of
seeing parts again later:

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
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
> EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
> MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
> IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
> CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
> TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
> SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

The license is arranged in five paragraphs, but logically it breaks down like this:

- Header
  - License Title
  - Copyright Notice
- License Grant
  - Grant Scope
  - Conditions
    - Attribution and Notice
    - Warranty Disclaimer
    - Limitation of Liability

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
Data eXchange][SPDX] groups have standardized generic MIT-style
license forms as "The MIT License".  OSI in turn has adopted SPDX'
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

In certain
kinds of working relationships, especially employment relationships,
but also some kinds of independent contractor relationships,


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
