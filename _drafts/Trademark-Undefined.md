---
public: true
title: Trademark Undefined Behavior
description: the awkward hole in free and open IP
tags:
- Open Source
- Trademark
---

Reading [this LWN post](https://lwn.net/Articles/901816/) (subscribers only) on anxieties over [the Rust Foundation's trademark policy](https://foundation.rust-lang.org/policies/logo-policy-and-media-guide/) for ["Rust"](https://tsdr.uspto.gov/#caseNumber=87796977&caseType=SERIAL_NO&searchType=statusSearch) and the history of wrinkles like Firefox becoming [IceCat/Iceweasel](https://en.wikipedia.org/wiki/GNU_IceCat) brought to mind a topic I've raised a few times with fellow [Blue Oak Council](https://blueoakcouncil.org) members: should our [model permissive software license](https://blueoakcouncil.org/license/1.0.0) include a section abandoning trademark rights in the software project's name?

Sketching:

> Each contributor abandons any trademark, service mark, and other exclusive legal rights to use the name of this software to identify the source of software and software services of the kind.

This question gets pulled between two uncontroversial facts:

1.  A license disclaiming trademark would be more permissive.

2.  No common free or open licenses currently disclaim trademark.  Newer, "corporate-friendly" terms <a class="note" href="#license-examples" id="license-examples-link">say the opposite</a>.

Trademark is a big theoretical hole in the 101-level licensing theory free and open wonks get exposed to.  Trademarks are [very much intellectual property](https://fieldguide.kemitchell.com/#trademark).  They cover intangibles and give legal owners rights to exclude.  But you won't read much about them in established licensing canon for community consumption.

That's a crucial omission for anyone looking to do business in open source.  Companies that pursue "pure" free or open business models, most famously [Red Hat](https://redhat.com), but also newer comers like [Chef](https://www.chef.io/blog/changes-to-how-chef-products-handle-licenses), rely heavily on trademark protection.  That is what they [withhold](https://blog.licensezero.com/2018/03/05/withholding.html).  You can do what you want with their code, subject to the usual copyright- and patent-based rules of their licenses.  But you can't offer your own products or services using their name.

Clearly, this isn't something companies flying the freedom flag like to point out.  But it comes up whether they do or not, because it matters for present and potential commercialization.

Friction develops on the initial question of whether or not "community" versions of software maintained by corporate stewards continue to bear their proprietary branding.  Red Hat has tended to strip the branding out.  Compare [Red Hat Single Sign-On](https://access.redhat.com/products/red-hat-single-sign-on) and [Keycloak](https://www.keycloak.org/).  Initially, I believe Chef did not, leaving that an exercise to anyone wishing to fork.  When AWS hostile-forked [Elasticsearch](https://github.com/elastic/elasticsearch) as [OpenSearch](https://github.com/opensearch-project/OpenSearch), step one or two had to be ripping out Elastic's branding.  Elastic NV folks may have more of a chore cherry-picking patches back, since commit histories have diverged.

Use of branding in APIs has also become an issue.  It's common for projects to include brand names in important APIs, like class and method names.  Projects may even prefix all their important APIs with the name of the project.  This can cause headaches applying patches across forks.  But it's worse still when API names matter at runtime, especially when they affect over-the-wire protocols, putting compatibility on the line.

_Oracle v. Google_ and follow-on cases like _Pyrotechnics Management v. XFX_, a case about pyrotechnics control hardware speaking a competitors' protocol over the wire, provide some comfort here.  But as much as Google scored a resounding victory for Android, and XFX has so far prevailed, I can't join the camp that thinks _Oracle v. Google_ laid down a totally clear, universal rule.  There is much uncertainty here the average hacker doesn't deserve to hear lawyers drone on about.

My mental map has two more well-worn paths from "open source and trademark", both common hacker misconceptions I run into a lot:

First, trademark rights differ from copyrights and patents in that their owners have to maintain some control over their use.  Otherwise, they risk breaking the association between them and their trademarks.

The public policy behind trademarks protects associations between names, logos, and other marks that tell people who, or what company, is responsible for products and services.  They guard the vocabulary of brands and logos we're all exposed to in the market, the language of commercial reputation.  Thus, if you buy a computer mouse from Logitech, you're supposed to know the Logitech _company_'s responsible for it.  If it's a good product, their reputation rises in your eyes.  If it breaks after a week, their reputation falls.  You bring that reputation with you the next time you shop for a mouse.

The law protects correct associations between products, services, and who's responsible for them.  It's not a trademark problem if Logitech puts its brand on a defective product.  It's a trademark problem if _someone else_ puts that brand on products the Logitech company wasn't responsible for, be it gem or junk.  That breaks the association between trademark and source, which can go either way.

Likewise, it's also a trademark problem if Logitech signs a deal with some other company that lets them use the Logitech brand however they want, without supervision or accountability.  And it's even more of a problem if Logitech, looking to rebrand, tries to "sell" the Logitech name wholesale without any of the business assets---factories, production contracts, quality control---already associated with it.  A trademark is the _association_ between a name or a logo and a source.  Not the name or logo itself.  Licensing or selling rights to use a name or logo unconnected from its associated source hurts the trademark association.  The legal jargon here is "bare" or "naked" assignment.

However, it's _not_ the case that trademark owners have to threaten and crush every conceivable use of their marks by anyone else, or else lose their rights.  That absolutism's usually lazy, or mere cover for aggression.  There are plenty of uses of other people's trademarks that are perfectly legal, with or without their permission.  Using trademarks to refer to companies, products, and services---speaking the language of brand associations---is precisely what trademark law seeks to enable.  Protected uses of trademarks are directly analogous to "fair use" of copyrighted work.

Trademark associations and the bounds of legal use are especially likely to matter among direct competitors offering clone or compatible products.  Returning to Elastic and AWS, Elastic NV notably sued AWS for the way it presented OpenSearch to potential customers, [resulting in a settlement](https://www.theregister.com/2022/02/17/elastic_amazon_trademark/) that forced AWS to dial down use of "Elasticsearch" and dial up its own "OpenSearch" brand.  [AWS' marketing page for OpenSearch](https://aws.amazon.com/opensearch-service/the-elk-stack/what-is-opensearch/) goes long on explanation, addressing compatibility very carefully.

Second and finally, while it's generally true that trademark law discourages attempts to "own" _descriptions_ of products and services, it's not impossible.  Trademark law aims to protect and build a _separate_ language of name and logo associations, rather than allowing companies to "own" chunks of natural language.  But at the same time, trademark law does have rules that recognize when particular descriptions develop strong enough associations in the minds of consumers that they function both commonly and commercially.  "Comfort Inn & Suites", for example, is protected in various ways for hotel services in the United States.

They key US legal terms here are "acquired distinctiveness", "secondary meaning" as opposed to common, primary meaning, and the "supplemental register", a kind of procedural purgatory where weak trademark applications go to wait and hopefully gather associative strength enough to become fully protected trademark registrations.

So when starting a business, calling your database `sharded-geo-data-store` probably ain't the greatest idea.  You're going to have a hard time establishing that as an exclusive trademark.  But finding some open code under a descriptive name doesn't necessarily mean there isn't, won't, or can't be any trademark to worry or fight about, especially in an otherwise hostile competition situation.  It's all stars, +1s, and "community"...until someone forks.

A permissive license that gets ahead of those issues, by making clear the name is forever a loose ball, could provide substantial value in certainty.  But open software is full of folks who've learned the rules on the court, not reading any rulebook.  Blue Oak Model License with a trademark disclaimer wouldn't be usable by firms quietly banking on strong trademark protection.  But surfacing that latent signal might better inform users and developers perusing competitive projects.

## Notes

<h3 id="license-examples">Example No-Trademark-Rights Terms</h3>

[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html#trademarks):

> 6\. **Trademarks**.  This License does not grant permission to use the trade names, trademarks, service marks, or product names of the Licensor, except as required for reasonable and customary use in describing the origin of the Work and reproducing the content of the NOTICE file.

[GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html#section7):

> 7\. **Additional Terms**.
>
> ...
>
> Notwithstanding any other provision of this License, for material you add to a covered work, you may (if authorized by the copyright holders of that material) supplement the terms of this License with terms:
>
> ...
>
> e) Declining to grant rights under trademark law for use of some trade names, trademarks, or service marks; or
>
> ...

[MPLv2](https://www.mozilla.org/en-US/MPL/2.0/#limitations-on-grant-scope):

> 2.3. **Limitations on Grant Scope**
>
> ...
>
> This License does not grant any rights in the trademarks, service marks, or logos of any Contributor (except as may be necessary to comply with the notice requirements in Section 3.4).

<a class="back" href="#license-examples-link">Back to link in text</a>
