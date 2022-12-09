---
title: Delayed Release in Investigative Reporting
description: newsroom licensing strategy in familiar software terms
brief: ProPublica used a blurb at the top of a story to schedule automatic release under free public license terms.  Their terms are a twist on a known Creative Commons form.
tags:
- Business Models
- Open Licensing
- Creative Commons
---

I read and donate to [ProPublica](https://propublica.org), a nonprofit investigative reporting group.  Their [recent piece on the arrest and release of a former Mexican defense minister on drug-corruption charges](https://www.propublica.org/article/mexico-drug-cartels-cienfuegos-case-dea) as this at the top, right after a signup link for their mailing list:

> This article is not subject to ProPublica's Creative Commons license until Jan. 7, 2023.

Searching their site for "Creative Commons", I found their ["Steal Our Stories"](https://www.propublica.org/steal-our-stories/) page, which begins:

> Unless otherwise noted, you can republish our articles for free under a [Creative Commons](https://creativecommons.org/licenses/by-nc-nd/3.0/us/) license.

The link is to an older version of a Creative Commons license that requires attribution and prohibited changes, without the 30-day grace period to correct license violations found in the 4.0 series.

The "Steal Our Stories" page goes on in bullet points to set more specific requirements for attribution, appropriate for the news context, a theme I've hit in the ["Conventions" section of my credit-for-coders license](https:/codecreditlicense.com/license/1.1.0#conventions). Overlaying terms on "their" Creative Commons license, rather than using the standard and merely adding suggestions, helps make clear their specifics are indeed required.  There are also added prohibitions against running stories with certain kinds of ads, syndication, automated republishing, translation, and so on.  The page carves photos and illustrations out of the license grant entirely.

In software-ish terms, ProPublica is using a "fork" of [CC-BY-ND 3.0](https://creativecommons.org/licenses/by-nd/3.0/) as site-wide default, then overriding that default for graphics and specific stories with notice of delayed release.  The effect of an exception is like that of the [Business Source License](https://spdx.org/licenses/BUSL-1.1.html), which was developed for the MariaDB database, a continuation of MySQL by its founder, after his company's acquisition by Oracle.  The model goes back further, notably to Aladdin Enterprises, later [Artifex](https://artifex.com/), and [Ghostscript](https://www.ghostscript.com/): Everyone can get a fairly recent version under the AGPL, but customers can pay for the latest and greatest as it comes out, under commercial terms.  I've been told companies manufacturing printers, who load software on their devices at factories and ship them out to customers who may never upgrade in the field, especially value earlier access to the best, least buggy, and most supportable.

As for ProPublica, the effect is to hold their story back for a month---they published December 8, with their default license to kick in January 7.  We might term it a kind of "news embargo", but on syndication, rather than initial publication.

They mention the story has also run in _The New York Times Magazine_.  This exception to their usual licensing may very well have been part of their terms with that outlet.

Until January 7, eyeballs drawn to the story will also be drawn to propublica.org, which rightly and prominently calls on readers [to donate](https://www.propublica.org/donate).  Their work may yield more financial support, as a result.
