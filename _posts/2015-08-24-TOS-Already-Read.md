---
title: Terms of Service; Already Read
description: Verifiable contracts should help consumers, too.
layout: post
tags:
- Privacy
- Common Form
---
"Nobody reads terms of service". Nobody except lawyers. Or maybe lawyers are nobodies, and that's the joke. I can't seem to catch a good lawyer joke like I used to.

The joke is on me. I am one of those nobody-lawyers who reads terms of service. I write them, too. And it's a great field of law. "Open-source" by default, believe it or not.

Consider: You can't hide public terms of service. They don't bind users that way. And they are, of necessity, on the Web. It's cheap and easy to get copies, unlike, say, corporate charters. You never end up with a mangled, redacted version, like some contracts filed under securities laws.

There is a dark side to this openness. Many companies crib them. Just as we all remember that man-digging-hole "under construction" animation from the 1990's, terms of service wonks come to know the klepto classics. They're everywhere. Where you find knockoffs, they fit pretty much like the two-piece suit I wore to special occasions in junior high school.

And a still darker side. The terms are always lopsided. It's a rule. Too lopsided to actually enforce across the board, mind you, but lopsided. So there is always a tinge of conspiracy against the public. I know users won't read them. Users admit they don't read them. Courts, both shockingly and unsurprisingly, continue to enforce them in all their inglorious detail.

# Good Works

Consumer rights advocates---[EFF](https://eff.org), [EPIC](https://www.epic.org/)---together with a few some reporters on the beat, do their best to catch and publicize major power-grabs and slip-ups, raising awareness of the underlying issues. They mostly keep up with the big providers, the Google-Facebook-Amazons of the world. It's great work. But it doesn't scale. They'll never read all the terms that users don't, from the little companies and specialized services.

Users shouldn't have to read them. And little companies shouldn't have to read them---or steal them---either. When there isn't anything nefarious or highly unusual going on, firms should work through a wizard that produces a serviceable set of terms. Consumer-side tools should recognize those terms and provide appropriate commentary written to the form, rather than to the specific website whence it comes.

# Ends to Meet

[TOS;DR](https://tosdr.org/) is halfway there, and I'm a big fan. They crowdsource assessments of terms of service for large, popular sites. They address specific substantive points, like IP ownership and notice of changes. What they can't do is tell you when a smaller company has more or less cribbed terms from a site they've reviewed.

Companies like [500px](https://500px.com/terms), [Pinterest](https://about.pinterest.com/en/terms-service), and [TL;DR Legal](https://tldrlegal.com/pages/legal) are the other halfway there. They provide "plain English" or shorthand summaries of their own terms of service in the margins. Those comments are a definite step forward, and I recommend similar hints to clients whenever I can. But if users had lawyers, no way, no how would they advise sleeping easy on cutesy marginalia from the other side of the damn contract. For now, it's a show of good faith. A concession to the fact that neither you nor anyone else on your behalf will read the terms.

# A Plan

Common Form could bridge the gap. The system is built, from the group up, to recognize not just whole form agreements, but specific pieces, down to items in a list, out of context.

Consider two pieces of hypothetical software. ([Drop me a line](mailto:kyle@kemitchell.com) if you're interested in working on either.)

On the company side:

1. Small companies in need of terms of service go to a website. The website guides them through a series of questions. Does your site allow users to create accounts? Are there paid services? Do you use Google Analytics? Do you have a registered agent for DMCA notices?

2. The site spits out terms of service in ready-to-post HTML format. Within that HTML are metadata tags identifying the source of the markup, the Common Form fingerprints of the whole form and each part of it, and the site-specific values plugged into the blanks of those Common Forms, like the name of the company operating the site.

3. The company posts the terms to their site.

On the user side:

1. User installs a browser addon, much like TOS;DR.

2. On browsing to a terms of service page, the addon detects the metadata tags in the HTML. It pulls the relevant content and verifies the fingerprints. That way the site can't lie to the plugin about its terms without doing something obviously slimy.

3. The addon sends the fingerprints to a server. If forms with those fingerprints have ever been reviewed, on that site or any other, the server returns associated comments. This provision grants a license to the company to use your photos in advertising. This section requires the company to send you an e-mail when terms change. No idea what this means; haven't seen it before.

We could even close the loop: There's no reason the wizard for generating terms couldn't show companies the annotations users will see, or provide a list of todos---don't log this, register for that---to live up to the combined terms-and-annotations they want their users to experience.

---

Special thanks to [Ansel Halliburton](https://twitter.com/anseljh), [attorney at Kronenberger Rosenfeld](https://www.krinternetlaw.com/attorneys/ansel-halliburton-profile), for pulling this one out of me. Debt of inspiration to the advocacy groups and services already mentioned, plus [Joe Mornin](http://www.mornin.org/), [Bestlaw](http://www.bestlaw.io/) browser addon wizard.
