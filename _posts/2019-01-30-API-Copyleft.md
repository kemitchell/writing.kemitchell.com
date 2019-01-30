---
title: API Copyleft
description: functionality, interfaces, and line drawing in a new copyleft paradigm
layout: post
tags:
- Copyleft
- Licensing
- Open Source
- SSPL
---

I've been part of a group writing [a new open source license that's copyleft for patches, additions, and wrappers, but permissive for applications that just use through the API](https://github.com/kemitchell/shared-component-license/blob/master/license.md).  A kind of plain-language [Server Side Public License](https://www.mongodb.com/licensing/server-side-public-license).  The inimitable [Luis Villa](https://lu.is/) really got me thinking with [this tweet](https://twitter.com/luis_in_brief/status/1088250694010695680):

>  Scoping to the API for service consumers is a pretty good 2019 equivalent for the original MPL "scope for plug-ins" intention.

By "MPL", Luis is referring to [The Mozilla Public License, version 2.0](https://www.mozilla.org/en-US/MPL/2.0/), which he had a big part in writing.  MPL 2.0 epitomizes "file-based copyleft", which sets rules about what licensees have to contribute back by focusing on the computer files where source code lives:

> ## 1.10.  "Modifications"
>
> means any of the following:
>
> 1.  any file in Source Code Form that results from an addition to, deletion from, or modification of the contents of Covered Software; or
>
> 2.  any new file in Source Code Form that contains any Covered Software.
>
> [...]
>
> ## 3.1.  Distribution of Source Form
>
> All distribution of Covered Software in Source Code Form, including any Modifications that You create or to which You contribute, must be under the terms of this License.  [...]

By contrast, the license I've been working on focuses on whether new software goes beyond invoking the licensed software through its existing interfaces:

> ## Copyleft
>
> With two exceptions, _Prototypes_ and [_Applications_](#applications), you must contribute all software that invokes this software's functionality, as well as patches and additions to this software, according to _Contributing_.
>
> [...]
>
> ## Applications
>
> You need not contribute software that only invokes this software's functionality through the interfaces this software exposes, without exposing this software's interfaces and functionality to other software.
>
> Interfaces exposed by this software include all the interfaces this software provides users or other software to invoke its functionality, such as command line, graphical, application programming, remote procedure call, and inter-process communication interfaces.

The basic drafting challenge for this kind of license boils down to a line-drawing problem.  We could put software that builds on other software on a spectrum:

```
patches     extensions     applications     wrappers
```

The goal of the license is to scope copyleft selectively, to miss applications, but cover everything else:

```
patches     extensions     applications     wrappers
copyleft    copyleft       PERMISSIVE       copyleft
```

With that in mind, the license needs to draw two lines, one between extensions and applications, the other between applications and wrappers:

```
                        1                2
patches     extensions  |  applications  |  wrappers
copyleft    copyleft    |  PERMISSIVE    |  copyleft
```

Earlier versions of the license drew each of these lines in separate language, using different words and concepts.  But the current draft draws both lines with the same words and concepts: functionality and interfaces of the licensed software.

How do we distinguish applications from extensions?  Extensions go beyond accessing the licensed software through the interfaces it already exposes.  How do we distinguish applications from wrappers?  Wrappers make the licensed software's interfaces or functionality available to still other applications.

The interface-functionality concept is a kind of pun.  It just so happens that we can draw both extension-application and application-wrapper lines with it.  Coincidentally, that seems to achieve the goals of the license very nicely.

The inimitable Jeff Atwood caught onto this pretty much immediately, and responded to my pleas for help renaming the form, in [these](https://twitter.com/codinghorror/status/1090126535590170624) [tweets](https://twitter.com/codinghorror/status/1090129373733171200):

> The tell is that you keep using the word API to describe it.  That needs to be in the name.

> I still think you're going to be in a world of hurt unless you go with API License.  You can explain the other exceptions more easily than "interface boundary"

I quibble, because API is just one kind of interface, and the license covers many kinds.  I'm right, but I think Jeff is, too.  It's a little strange to name a specific license after the licensing _paradigm_ it represents.  [But why not just "API Copyleft License"?](https://github.com/kemitchell/shared-component-license/issues/18)
