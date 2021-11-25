---
title: SaaS Compliance Caveats
description: view page source ain't what it used to be
tags:
- Open Source
- JavaScript
---

I read [Heather Meeker's blog](https://heathermeeker.com/) and highly recommend it.  Her [recent piece on open source compliance for SaaS vendors](https://heathermeeker.com/2021/11/23/open-source-compliance-for-saas-vendors/) is another good one, with two big caveats:

1.  It's no longer safe to assume that client-side JavaScript will satisfy source requirements under copyleft licenses.  It's not the preferred form for making changes these days.  It's the preferred form for fast download, parsing, and execution.

2.  Most SaaS companies keep their app code proprietary, including their JavaScript "front end".  Finding [strong-copyleft](https://blueoakcouncil.org/copyleft#strong-copyleft-family) code in your JavaScript bundle is about like finding a strong-copyleft library in your desktop app's working tree.

## Transpiling, Bundling, and Minification

It's now very common for SaaS app developers to run all their client-side code through several tools before serving to users' web browsers.  The results are megabytes-large, borderline unintelligible blobs of thoroughly obfuscated code.  It's still technically JavaScript, but the kind browsers can run, not the kind devs maintain.

It's perfectly normal to see one of each of these kinds of tools in a front-end build chain:

To start, transpilers like [Babel](https://en.wikipedia.org/wiki/Babel_(transcompiler)) translate new and custom programming language syntax into older versions of JavaScript that visitors' web browsers reliably support.  These tools essentially "compile" dialects of JavaScript into an older, widespread, standard language.

Other transpilers, like the [ClojureScript](https://clojurescript.org/) compiler, don't even start with JavaScript.  They translate some other language, like Clojure, _into_ JavaScript.  The results aren't idiomatic, just functional.  They use the JavaScript runtime like the [Java Virtual Machine](https://en.wikipedia.org/wiki/Java_virtual_machine) or [Common Language Infrastructure](https://en.wikipedia.org/wiki/Common_Language_Infrastructure).

From there, bundlers like [Webpack](https://webpack.js.org/) and [Browserify](https://browserify.org/) find all the libraries and frameworks that a piece of JavaScript code depends on and mush them into one big file, stuck together with boilerplate glue code.  This lets users' browsers download all the code at once, instead of sending many inefficient requests for many separate source files to the same server.  Some bundlers also optimize, removing parts of libraries that aren't referenced or splitting a big bundle into logical chunks that make sense to load as pieces.  New browser technology, especially [HTTP/2](https://en.wikipedia.org/wiki/HTTP/2), is starting to make all this less necessary.

Finally, minifiers like [Terser](https://terser.org/) and [Uglify](https://www.npmjs.com/package/uglify-js) not only remove insignificant whitespace, but strip out comments, scrunch variable names, refactor control structures, and perform all manner of other tricks to minimize file size and facilitate compression.  These tools rarely advertise themselves as "obfuscators", but they get halfway there by way of optimization.  Any front-end dev who actually wrote and committed minified-looking code like would be banished from team work immediately.

Throughout this chain, many of these tools also produce "source maps" showing what parts of their inputs correspond to what parts of their outputs.  Taken together, those source maps allow web browsers to trace a path back from an error in the final client-side code bundle to a line and character position in a specific file of original source code.  Debug versions of SaaS apps serve these source maps for developers.  But companies rarely serve source maps---or the original source files they refer to---in production.  Customers get only bundles of transpiled, minified code, which load much faster.

For a quick sense of how inscrutable code ends up, visit [GMail](https://gmail.com) and view source.  The JavaScript I see embedded in the HTML page today is only a tiny fraction of all the client-side code GMail loads.  It's a giant JavaScript app.  But I think we can get the effect:

<figure>
<a href="/images/gmail-script.png"><img alt="sample <script> tag JavaScript code from gmail.com" src="/images/gmail-script.png"></a>
<figcaption>screenshot of script tag JavaScript from gmail.com</figcaption>
</figure>

Note that JavaScript keywords and API names like `function` and `this` and `var` and `prototype` remain.  These will be handled well by the compression algorithms browsers and servers use.  Note also that nearly all visible variable names---the names following `var` keywords---are but one or two letters.  The programmers didn't name the variables that way.  The minifier renamed them.

If you asked me to add a feature or fix a bug in this code, it wouldn't be a maintenance project.  It would be a reverse-engineering project.

If I found it this code was originally GPL licensed, demanded ["Corresponding Source"](https://zoo.kemitchell.com/GPL-3.0#1p4) from Google, and got told I already have it---just click "View Source"---I'd call license violation.

## WebAssembly

This is the situation now, for many web apps.  We're heading even more toward client code as an essentially compiled form of software.

[WebAssembly](https://webassembly.org/), a standard kind of binary code for web browsers, isn't so widely adopted as transpiling, bundling, and minifying.  But some large and technically progressive firms are already using it in production apps.  Rising-star programming languages, like [Rust](https://www.rust-lang.org), already [rely on it as compilation target for the Web](https://www.rust-lang.org/what/wasm).

We already see apps combining minified JavaScript and WebAssembly.  Last I checked, a little bit of JavaScript's still required to make WebAssembly run.  But I foresee apps shipping entirely WebAssembly in the foreseeable future.  Unlike JavaScript, WebAssembly was designed from its start to load quick and run fast.  Hence "Assembly for the Web".

## Copyleft as Usual

When I started writing JavaScript eons ago, the use cases were much as Heather described: validating forms, basic interactivity.  Also frivolous visual effects.  Lots of frivolous visual effects.  But all around: tiny additions to the built-in functionality of the web browsers.  The magic happened on the server side, which is why we all got so used to URLs ending in [`.php`](https://www.php.net/) and [`.asp`](https://en.wikipedia.org/wiki/Active_Server_Pages).

We're way past that now.  Writing client-side JavaScript in 2021 can and often does look and feel a lot more like desktop or mobile application development, the kind of thing devs do with Java Swing, Qt, and Cocoa for installed apps.  There are frameworks and runtimes for write-once, run-anywhere across desktop PCs, smartphones, and the web.

That means more of the core functionality---the work SaaS companies tend to keep proprietary---ends up getting "distributed" over to the client side.  It's no longer safe to say that the "technology" is all on the server side, with the client-side code merely adding sparkles, so don't sweat open source on the client side.

Slip a GPL-licensed library into your client-side app, you have the GPL problem.  Of course, the GPL was conceived long before JavaScript was a twinkle in [Brendan Eich](https://en.wikipedia.org/wiki/Brendan_Eich)'s eye.  Even recent versions of popular copyright licenses tend to speak in abstractions, rather than address interpreted languages or Web technologies directly.  But I don't think Heather, other colleagues, or I see those details as end runs around license concepts like "work based on the Program" or legal concepts like "derivative work".

For all those folks in the SaaS business: Get yourself a [license checker](https://www.npmjs.com/package/licensee) in CI and be grateful for [good metadata](https://docs.npmjs.com/cli/v6/configuring-npm/package-json#license).  A little proactive defense can go a long way keeping you and yours out of trouble.
