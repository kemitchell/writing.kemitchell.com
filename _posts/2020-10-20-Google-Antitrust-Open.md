---
title: From Justice With Love
description: the antitrust division groks open source strategy
tags:
- US v. Google
- Antitrust
- Open Core
- Open Source
- Business Models
---

The Department of Justice, legal department of the United States federal government, [sued Google](https://www.justice.gov/opa/pr/justice-department-sues-monopolist-google-violating-antitrust-laws) for violating antitrust laws.  Their [complaint](https://www.justice.gov/opa/press-release/file/1328941/download), the court document where they make their accusations, has a lot to say about open source, Android, and business.  Here are some relevant tidbits, with thoughts in between:

> In a mobile world, Google had to deal with mobile device manufacturers (such as LG, Motorola, and Samsung), and carriers (such as AT&T, T-Mobile/Sprint, and Verizon) that would hold sway over distribution of search and search ads.  Google thus asked internally, "How can we conquer the world's major markets simultaneously?"
>
> The answer started with Android, a mobile operating system that google purchased in 2005.  In 2007, Google released the Android code for free under an open-source license.  Being "open source" means that anyone can access the source code and use it to make their own, modified operating system---a "fork."  This was key to Android's adoption.

Everybody's got a definition of "open source".  DOJ's focuses on forkability.  Why?

Hold that thought.

> First, Google's apparent lack of control over an open-source operating system attracted skeptical manufacturers and carriers of mobile phones to use Android instead of the other choices then available.  As the Android team leader observed to Google's board of directors, "Google was historically seen as a threat" to these distributors.  But an open-source model suggested that they---and not Google---would ultimately retain control over their devices and the app ecosystem on those devices.
>
> Second, once enough major distributors agreed to use Android, the operating system attracted developers looking for wide distribution of their apps.  As more app developers focused their efforts on designing Android apps, Android became more attractive to consumers, which in turn led even more developers to design for Android.  The result was a must-have ecosystem of Android apps.
>
> Third, to help the Android ecosystem achieve critical mass and to advance the network effects, Google "shared" its search advertising and app store revenues with distributors as further inducement to give up control.  As one senior executive explained about Android Market, an earlier name for Google's app store, "Android Market is a bitter pill for carriers, and a generous revenue share is the sugar that makes it go down smoother."  In other words, beginning over ten years ago, Google used revenue sharing to attract partners to Android; as discussed below, Google uses revenue sharing to keep them locked in today.
>
> By 2010, the Android team leader noted that "Android is poised for world domination---the success story of the decade." He was right; the strategy worked. ...

So far, so good.  Open source fairy tale come true.  But what's in it for Google?

> Control over Android has always been a critical issue.  As Google's Android team leader asked at the time: "How do we retain control of something we gave away?"  Google's answer is the set of contractual "carrots" and "sticks" discussed below that empower Google to "[o]wn the ecosystem" and help thwart any alternative mobile ecosystem from developing that could support a different search provider.

Sounds familiar?

> The Android operating system is open source; Google updates the Android code periodically and makes it publicly available.  But Google takes steps to minimize the risk that a developer creates an Android fork to compete with the Android ecosystem controlled by Google.  By limiting the existence of devices running Android forks, Google limits the possible distribution channels available to its search rivals.
>
> One way google retains control of the Android ecosystem is through anti-forking agreements.  These agreements broadly prohibit manufacturers from taking "any actions that may cause or result in the fragmentation of Android."  Notably, "fragmentation" is left undefined, giving Google wide latitude in practice.

And here's the answer to our question.  Open source means forkable, and open source sounds good.  But says "open source" out one side of its mouth, for adoption, and "no forking" out of another, for control.

Shameless Plug: The [PolyForm Perimeter License](https://polyformproject.org/licenses/perimeter/1.0.0/) explicitly combines freedom to use, share, and so on with a prohibition on competing with the project in one set of terms, like mashing Android's open source terms and Google's anti-forking terms together.  It's a tool for broad distribution while prohibiting hostile forks.

But, as DOJ goes on to explain, control of Android wasn't just about establishing one Android to rule them all.  It was about protecting Google's other offerings, especially search and ads.  That would be [PolyForm Shield](https://polyformproject.org/licenses/shield/1.0.0/), which prohibits use to compete with the developer, and not just the project itself, if all the code were licensed as one whole.  But Google took another tack.

> Manufacturers agree to anti-forking agreements in part because they are a precondition to receiving a license to distribute devices with must-have proprietary Google apps and APIs (the set of technical specifications that enable software applications to communicate with each other, operating systems, and hardware). ...

Hello, "open core".

> Over time, Google has chosen to include important features and functionality in Google's own ecosystem of proprietary apps and APIs, rather than the open-source Android code.  Google refers to this proprietary layer as "Google Mobile Services" (GMS).  GMS includes many popular apps, such as Google's search app, Chrome, YouTube, and Google Maps.  GMS also includes Google Play, Google's app store. ...
>
> Another key part of GMS is the set of APIs that allow developers to access certain important features.  The APIs available within GMS are part of "Google Play Services" (GPS).  GPS allows apps, including third-party apps, to perform functions that are not possible using the open-source version of Android.  For example, using the open-source Android system, third-party apps cannot provide basic "push notifications," enable in-app purchases through Google Play, or use data from Google Maps; to have these functionalities, third-party apps must use GPS.
>
> The integration of key functions with GPS makes it more difficult for third-party Android developers to port their apps to Android forks because the apps are designed to interact with Google's proprietary APIs.  And as the functionality gap between open-source Android apps and Google's proprietary apps grows, developers are more dependent on GPS.

Again: Developers are lured in by the happy associations of "open source", but once inside, find themselves ever more tempted to write to a Google-specific, proprietary platform.

Later on, summarizing:

> Even though Android is open source, Google has used Android to protect Google's lucrative general search and search advertising monopolies.  Google sets the rules through anti-forking agreements, preinstallation agreements, and revenue sharing agreements.  Notably, each of these agreements builds on the others to preserve control.  ...

Control for what?  Offense, not just defense.  Setting Google search as the default, everywhere.  Prominent placement of Google apps.  Google apps that device owners can't delete.  And so on.

Be advised: DOJ antitrust groks open source business strategy.  Groks it pretty well.

Remember the Securities Exchange Commission's [report on The DAO](https://writing.kemitchell.com/2017/07/25/DAO-Report-of-Investigation.html)?
