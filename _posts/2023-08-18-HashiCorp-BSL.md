---
date: 2023-08-18T21:56:24-07:00
title: HashiCorp's New Licensing
description: a new benchmark for presenting license change
tags:
- Licensing
- Software
---

[announcement]: https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license

[license]: https://www.hashicorp.com/bsl

[faq]: https://www.hashicorp.com/license-faq

[mpl2]: https://www.mozilla.org/en-US/MPL/2.0/

HashiCorp announced a license change for a number of its open source projects.  In a nutshell, some of their projects are now free only for products and services not competing with theirs, with new code released under weak-copyleft automatically after four years.

In more detail, as bullet points:

- They're using the [Business Source License](https://mariadb.com/bsl-faq-adopting/), a configurable license template that makes the software free for non-production release and automatically relicenses new code onto open terms after a set time.

- The chose their usual [Mozilla Public License, Version 2.0][mpl2] a [weak-copyleft license](https://blueoakcouncil.org/copyleft#weak-copyleft-family) as the eventual open terms and four years as the timing.

- While the template itself covers non-production use, they added extra permission for most production use cases, too.  It's worth quoting:

  > You may make production use of the Licensed Work, provided such use does not include offering the Licensed Work to third parties on a hosted or embedded basis which is competitive with HashiCorp's products.

- They say they'll keep backporting security fixes onto the old MPLv2 versions [until the end of the year](https://www.hashicorp.com/license-faq#security-patch-backporting).  Responsible gesture.

- Their [admirable FAQs][faq] addresses many kinds of users specifically and repeatedly offers reassurances and custom license terms, requestable by e-mail.

Earlier releases remain available under MPLv2, so altogether, the "permissions" look like:

<table class="borders">
  <thead>
    <tr>
      <th colspan="2" rowspan="2">Use Case</th>
      <th colspan="2">Releases</th>
    </tr>
    <tr>
      <th>Old<br>(MPLv2)</th>
      <th>New<br>(BSL→MPLv2)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2">Non-Production</th>
      <td>✓</td>
      <td>✓</td>
    </tr>
    <tr>
      <th rowspan="3">Production</th>
      <th>Competing Products</th>
      <td>✓</td>
      <td>After 4 Years</td>
    </tr>
    <tr>
      <th>Competing Services</th>
      <td>✓</td>
      <td>After 4 Years</td>
    </tr>
    <tr>
      <th>Other</th>
      <td>✓</td>
      <td>✓</td>
    </tr>
  </tbody>
</table>

A few quick thoughts follow.

## Non-Production

The word "non-production" isn't much more precise than "non-commercial", but technical people probably _feel_ like it does.  That is worth something.  Maybe a lot,  given Hashi's audience.

In practice, I don't expect the fuzziness around "non-production" to matter any more than for "non-commercial".  If your use case is on the line, that's [probably more your problem than theirs](/2023/07/15/Vague-No-Ops).

## Messaging

Unlike many, many companies announcing license changes recently, HashiCorp's blog post and FAQs do a good job emphasizing the link between commercial competition, self-defense, and ongoing development, as well as the fact that the license change doesn't directly affect the vast majority of users.

On self-defense, they highlight their millions of R&D spend and the fact that their funders are their customers.  They don't call out their $300m+ in investment funding, and wisely so.  But they wouldn't be wrong responding that investors buy into in the prospect of customers.  Funding-wise, it sure helps when investments in open turn a profit.

On users, HashiCorp gets specific.  They don't simply claim "this change doesn't affect the vast majority of people", expecting the alarmed to take general comfort for specific concerns.  They call out important groups---[customers](https://www.hashicorp.com/license-faq#implications-of-change-for-commercial-customers), [integration partners](https://www.hashicorp.com/license-faq#implications-of-change-for-partners), [Terraform provider maintainers](https://www.hashicorp.com/license-faq#impact-on-terraform-providers), [consultants](https://www.hashicorp.com/license-faq#assisting-customers-to-use-products_)---and confirm they can keep doing what they're doing, explicitly.

## Defensiveness

On the other hand, their blog post begins with what reads for all the world like an extracted confession of enduring love for open source.  Their FAQ includes the cringe-inducing "Does HashiCorp still believe in open source?"  Spoiler here: They say they do.

This question doesn't need to be dignified, much less emphasized.  They've been "doing open source" for more than a decade.  A ton of SDKs and libraries are staying MPLv2, without delayed release.  There is no karmic committee standing by to smite them from high should their chivalric love of openness be seen to flag.  Stallman, Torvalds, and Raymond won't [snip their thread short like the fates](https://en.wikipedia.org/wiki/Fates) for [trespassing the temple of the `LICENSE` file](https://github.com/hashicorp/terraform/blob/main/LICENSE).

HashiCorp inhabits a world with circumstances that compel this kind of change.  There is nothing to be gained by coddling or conceding those who'd rather not acknowledge that.

## Kit License

Modules and templates are great...as long as "end users" can't see or feel the sharp edges at all the seams.

A [Mad Lib](https://en.wikipedia.org/wiki/Mad_Libs) license few devs have heard of, plus a configurable "Change License", plus a configurable release delay, plus an "Additional Use Grant", plus a long FAQ with statements about permission, hardly adds up to a coherent, approachable whole.  When you build a license for software people use from a kit out of bits like this, rather than just write what you mean in words your people understand, you are going to end up with [an FAQ][faq].  That FAQ is going to say a lot about who can do what, which is what the license is there to say.

In return for this complexity, Hashi gets to say that they didn't make all this up.  MariaDB---the company the MySQL guy started after he sold to Oracle and then left Oracle again---did it first.

They may also get to tell their engineers---and hear their engineers tell themselves---that they are still "working on open source".  They are still on GitHub.  They still `git push` in public.  In time---four years of it---it's all MPLv2 forever again, as in bygone days of naive corporate youth.  Tightening up a license grant not only affects how outside adopters perceive it, but also how potential insiders do.

## Things Change in Time

What Hashi did _not_ get by taking up MariaDB's Business Source License and bolting on a don't-compete-with-us bit was the benefit of all the thinking wonks have done about this kind of licensing in the five-plus years since BSL&nbsp;1.1 came out.  For example, [PolyForm Shield](https://polyformproject.org/licenses/shield/1.0.0/), which similarly implements ["but not to compete with us"](https://polyformproject.org/licenses/shield/1.0.0/#noncompete) for software, has [a "New Products" section](https://polyformproject.org/licenses/shield/1.0.0/#new-products):

> If you are using the software to provide a product that does not compete, but the licensor or any of its affiliates brings your product into competition by providing a new version of the software or another product using the software, you may continue using versions of the software available under these terms beforehand to provide your competing product, but not any later versions.

Hashi's Additional Use Grant doesn't cover this.  So of course its [FAQ has to](https://www.hashicorp.com/license-faq#future-competitive-products):

> If HashiCorp creates an offering in the future that is competitive with a product you are already offering in production, your continued use of the hosted or embedded HashiCorp product will not be considered a violation of the HashiCorp BSL license.

People will ask.

PolyForm Shield _also_ addresses [what would happen if Hashi _discontinued_ an offering](https://polyformproject.org/licenses/shield/1.0.0/#discontinued-products).  No sign of that from Hashi yet.

As it stands, if you want to follow Hashi's licensing lead, someone like me is going to tell you that you to copy not just their license, but big chunks of their FAQ, too.

## Hooray Dual Licensing

The Business Source License was written for [dual licensing](https://duallicensing.com):

> If your use of the Licensed Word does not comply with the requirements currently in effect as described in this License, <mark>you must purchase a commercial license from the Licensor...or you must refrain from using the Licensed Work</mark>.

Of course it was.  MySQL was a big, successful dual-licensing company.  [Monty Widenius](https://en.wikipedia.org/wiki/Michael_Widenius) did not forget.

Hashi's FAQ repeatedly mentions licensing@hashicorp.com as entry point for other license terms:

> If you need further clarification with respect to a particular use case, you can email licensing@hashicorp.com.  Custom licensing terms are also available to provide more clarity and enable use cases beyond the BSL limitations.

> **I’m building (or have built) a product that embeds one or more HashiCorp products, and I’m concerned you may view it as competitive. How can I get clarity as to whether my product will violate the new BSL license?**
>
> Please reach out to us.  We are happy to speak with you.  The best way to begin the conversation is at licensing@hashicorp.com.  We can provide timely feedback to your questions and discuss constructive solutions, including potential exemptions and/or partnership arrangements.

I have added HashiCorp to [duallicensing.com](https://duallicensing.com).  Rumors of the model's demise remain, as ever, bad wishful thinking.

Our self-interest becomes more enlightened.  Nobody promised enlightenment would be fun.
