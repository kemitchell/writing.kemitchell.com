---
title: HashiCorp's New License
description: free for products and services not competing with theirs, delayed release to weak copyleft after four year
---

[announcement]: https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license

[license]: https://www.hashicorp.com/bsl

[faq]: https://www.hashicorp.com/license-faq

[mpl2]: https://www.mozilla.org/en-US/MPL/2.0/

HashiCorp announced a license change for a number of its open source projects.  In bullet points:

- They're using the [Business Source License](https://mariadb.com/bsl-faq-adopting/), a configurable license template with two key features:

  - free for non-production use, but not licensed for production use

  - automatic relicensing of code onto named open terms after a set time period

- The chose their current [Mozilla Public License, Version 2.0][mpl2] a [weak-copyleft license](https://blueoakcouncil.org/copyleft#weak-copyleft-family) as the eventual open terms.

- They chose four years from publication as relicensing interval.

- They added extra permission allowing most production uses:

  > You may make production use of the Licensed Work, provided such use does not include offering the Licensed Work to third parties on a hosted or embedded basis which is competitive with HashiCorp's products.

- They say they'll keep backporting security fixes onto the old MPLv2 versions [until the end of the year](https://www.hashicorp.com/license-faq#security-patch-backporting).

- Their [admirable FAQs][faq] repeatedly offer licensing@hashicorp.com as contact for reassurances about free use and custom licensing terms for competitive production uses.

Earlier HashiCorp release remain available under MPLv2, so altogether, the "permissions" look like:

<table class="borders">
  <thead>
    <tr>
      <th colspan="2" rowspan="2">Use Case</th>
      <th colspan="2">Releases</th>
    </tr>
    <tr>
      <th>Old</th>
      <th>New</th>
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

<!-- TODO: non-production ≅ non-commercial, but no big deal -->
<!-- TODO: good job linking change to value of ongoing effort -->
<!-- TODO: good job hammering "no change for you" in FAQ -->
<!-- TODO: why bother with delayed release at all? -->
<!-- TODO: PolyForm Shield-style competition -->
<!-- TODO: BSL + Change License + Delay + Additional Use Grant a kludge -->
<!-- TODO: FAQ doing as https://polyformproject.org/licenses/shield/1.0.0/#new-products -->
