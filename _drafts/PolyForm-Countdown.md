---
title: PolyForm Countdown
description: a simple, solid form for changing your license later
series: PolyForm
doublewide: true
tags:
- Software
- Licensing
- Forms
- Delayed Relicensing
- Business Models
---

I'm happy to announce release of version 1.0.0 of the new [PolyForm Countdown License Grant](https://polyformproject.org/licenses/countdown/1.0.0/).  Thanks to everyone who reviewed, opined, and fed back on [last month's draft](https://writing.kemitchell.com/2023/10/24/Scheduled-Relicensing)!  Design notes from [that earlier post](https://writing.kemitchell.com/2023/10/24/Scheduled-Relicensing) still apply.

I've also created a [GitHub repository](https://github.com/polyformproject/polyform-countdown) to track proposed changes---feedback still very much welcome---and [a POSIX shell script](https://github.com/polyformproject/polyform-countdown/blob/main/prepare.sh) for filling out the template.

This form makes delayed relicensing, as under [MariaDB's Business Source License](https://mariadb.com/bsl11/), easy to implement clearly with _any_ choice of initial license.  A project could put any restricted or share-alike it likes in its `LICENSE` file, then append PolyForm Countdown to `LICENSE` in release tarballs to schedule a change to more permissive terms.  As examples:

<table>
  <thead>
    <tr>
      <th>Initial</th>
      <th>Type</th>
      <th>Delay</th>
      <th>Future</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://polyformproject.org/licenses/shield/1.0.0/">PolyForm Shield</a></td>
      <td>Defensive</td>
      <td>4&nbsp;Years</td>
      <td><a href="https://www.mozilla.org/en-US/MPL/2.0/">MPLv2</a></td>
      <td><a href="https://blueoakcouncil.org/copyleft#weak-copyleft-family">Weak Copyleft</a></td>
    </tr>
    <tr>
      <td><a href="https://polyformproject.org/licenses/noncommercial/1.0.0">PolyForm Noncommercial</a></td>
      <td>Noncommercial</td>
      <td>3&nbsp;Years</td>
      <td><a href="https://spdx.org/licenses/MIT">MIT</a></td>
      <td>Permissive</td>
    </tr>
    <tr>
      <td><a href="https://www.gnu.org/licenses/agpl-3.0.en.html">AGPLv3</a></td>
      <td><a href="https://blueoakcouncil.org/copyleft#network-copyleft-family">Network Copyleft</a></td>
      <td>4&nbsp;Years</td>
      <td><a href="https://apache.org/licenses/LICENSE-2.0">Apache 2.0</a></td>
      <td>Permissive</td>
    </tr>
  </tbody>
</table>

Here's an example `LICENSE.md` file for a release [starting out](#initial) on PolyForm Shield and [transitioning](#transition) to Apache 2 in three years:

<pre><a id="initial"></a># PolyForm Shield License 1.0.0

&lt;https://polyformproject.org/licenses/shield/1.0.0&gt;

## Acceptance

In order to get any license under these terms, you must agree
to them as both strict obligations and conditions to all
your licenses.

## Copyright License

The licensor grants you a copyright license for the
software to do everything you might do with the software
that would otherwise infringe the licensor's copyright
in it for any permitted purpose.  However, you may
only distribute the software according to [Distribution
License](#distribution-license) and make changes or new works
based on the software according to [Changes and New Works
License](#changes-and-new-works-license).

## Distribution License

The licensor grants you an additional copyright license
to distribute copies of the software.  Your license
to distribute covers distributing the software with
changes and new works permitted by [Changes and New Works
License](#changes-and-new-works-license).

## Notices

You must ensure that anyone who gets a copy of any part of
the software from you also gets a copy of these terms or the
URL for them above, as well as copies of any plain-text lines
beginning with `Required Notice:` that the licensor provided
with the software.  For example:

&gt; Required Notice: Copyright Yoyodyne, Inc. (http://example.com)

## Changes and New Works License

The licensor grants you an additional copyright license to
make changes and new works based on the software for any
permitted purpose.

## Patent License

The licensor grants you a patent license for the software that
covers patent claims the licensor can license, or becomes able
to license, that you would infringe by using the software.

## Noncompete

Any purpose is a permitted purpose, except for providing any
product that competes with the software or any product the
licensor or any of its affiliates provides using the software.

## Competition

Goods and services compete even when they provide functionality
through different kinds of interfaces or for different technical
platforms.  Applications can compete with services, libraries
with plugins, frameworks with development tools, and so on,
even if they're written in different programming languages
or for different computer architectures.  Goods and services
compete even when provided free of charge.  If you market a
product as a practical substitute for the software or another
product, it definitely competes.

## New Products

If you are using the software to provide a product that does
not compete, but the licensor or any of its affiliates brings
your product into competition by providing a new version of
the software or another product using the software, you may
continue using versions of the software available under these
terms beforehand to provide your competing product, but not
any later versions.

## Discontinued Products

You may begin using the software to compete with a product
or service that the licensor or any of its affiliates has
stopped providing, unless the licensor includes a plain-text
line beginning with `Licensor Line of Business:` with the
software that mentions that line of business.  For example:

&gt; Licensor Line of Business: YoyodyneCMS Content Management
System (http://example.com/cms)

## Sales of Business

If the licensor or any of its affiliates sells a line of
business developing the software or using the software
to provide a product, the buyer can also enforce
[Noncompete](#noncompete) for that product.

## Fair Use

You may have &quot;fair use&quot; rights for the software under the
law. These terms do not limit them.

## No Other Rights

These terms do not allow you to sublicense or transfer any of
your licenses to anyone else, or prevent the licensor from
granting licenses to anyone else.  These terms do not imply
any other licenses.

## Patent Defense

If you make any written claim that the software infringes or
contributes to infringement of any patent, your patent license
for the software granted under these terms ends immediately. If
your company makes such a claim, your patent license ends
immediately for work on behalf of your company.

## Violations

The first time you are notified in writing that you have
violated any of these terms, or done anything with the software
not covered by your licenses, your licenses can nonetheless
continue if you come into full compliance with these terms,
and take practical steps to correct past violations, within
32 days of receiving notice.  Otherwise, all your licenses
end immediately.

## No Liability

***As far as the law allows, the software comes as is, without
any warranty or condition, and the licensor will not be liable
to you for any damages arising out of these terms or the use
or nature of the software, under any kind of legal claim.***

## Definitions

The **licensor** is the individual or entity offering these
terms, and the **software** is the software the licensor makes
available under these terms.

A **product** can be a good or service, or a combination
of them.

**You** refers to the individual or entity agreeing to these
terms.

**Your company** is any legal entity, sole proprietorship,
or other kind of organization that you work for, plus all
its affiliates.

**Affiliates** means the other organizations than an
organization has control over, is under the control of, or is
under common control with.

**Control** means ownership of substantially all the assets of
an entity, or the power to direct its management and policies
by vote, contract, or otherwise.  Control can be direct or
indirect.

**Your licenses** are all the licenses granted to you for the
software under these terms.

**Use** means anything you do with the software requiring one
of your licenses.

---

<a id="transition"></a># PolyForm Countdown License Grant

Version 1.0.0

&lt;https://polyformproject.org/licenses/countdown/1.0.0&gt;

## Start Date

2026-12-01 (ISO 8601-1:2019)

## License

Each contributor licenses this release to you on the new
license terms below, starting at 12:00 noon UTC on the
start date above.

## Scope

This license grant applies only to this release, not to
any other releases.  Other releases may come with their
own license grants.

## Reliability

No contributor can revoke the new license before it starts.
If the new license terms allow a contributor to revoke,
they can do so only after the new license starts.

## Legalities

Legally, this is a present grant of a license on the date of
release, not a contract promise to grant the license later.

## New License Terms

```
                              Apache License
                        Version 2.0, January 2004
                     http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

1. Definitions.

   &quot;License&quot; shall mean the terms and conditions for use, reproduction,
   and distribution as defined by Sections 1 through 9 of this document.

   &quot;Licensor&quot; shall mean the copyright owner or entity authorized by
   the copyright owner that is granting the License.

   &quot;Legal Entity&quot; shall mean the union of the acting entity and all
   other entities that control, are controlled by, or are under common
   control with that entity. For the purposes of this definition,
   &quot;control&quot; means (i) the power, direct or indirect, to cause the
   direction or management of such entity, whether by contract or
   otherwise, or (ii) ownership of fifty percent (50%) or more of the
   outstanding shares, or (iii) beneficial ownership of such entity.

   &quot;You&quot; (or &quot;Your&quot;) shall mean an individual or Legal Entity
   exercising permissions granted by this License.

   &quot;Source&quot; form shall mean the preferred form for making modifications,
   including but not limited to software source code, documentation
   source, and configuration files.

   &quot;Object&quot; form shall mean any form resulting from mechanical
   transformation or translation of a Source form, including but
   not limited to compiled object code, generated documentation,
   and conversions to other media types.

   &quot;Work&quot; shall mean the work of authorship, whether in Source or
   Object form, made available under the License, as indicated by a
   copyright notice that is included in or attached to the work
   (an example is provided in the Appendix below).

   &quot;Derivative Works&quot; shall mean any work, whether in Source or Object
   form, that is based on (or derived from) the Work and for which the
   editorial revisions, annotations, elaborations, or other modifications
   represent, as a whole, an original work of authorship. For the purposes
   of this License, Derivative Works shall not include works that remain
   separable from, or merely link (or bind by name) to the interfaces of,
   the Work and Derivative Works thereof.

   &quot;Contribution&quot; shall mean any work of authorship, including
   the original version of the Work and any modifications or additions
   to that Work or Derivative Works thereof, that is intentionally
   submitted to Licensor for inclusion in the Work by the copyright owner
   or by an individual or Legal Entity authorized to submit on behalf of
   the copyright owner. For the purposes of this definition, &quot;submitted&quot;
   means any form of electronic, verbal, or written communication sent
   to the Licensor or its representatives, including but not limited to
   communication on electronic mailing lists, source code control systems,
   and issue tracking systems that are managed by, or on behalf of, the
   Licensor for the purpose of discussing and improving the Work, but
   excluding communication that is conspicuously marked or otherwise
   designated in writing by the copyright owner as &quot;Not a Contribution.&quot;

   &quot;Contributor&quot; shall mean Licensor and any individual or Legal Entity
   on behalf of whom a Contribution has been received by Licensor and
   subsequently incorporated within the Work.

2. Grant of Copyright License. Subject to the terms and conditions of
   this License, each Contributor hereby grants to You a perpetual,
   worldwide, non-exclusive, no-charge, royalty-free, irrevocable
   copyright license to reproduce, prepare Derivative Works of,
   publicly display, publicly perform, sublicense, and distribute the
   Work and such Derivative Works in Source or Object form.

3. Grant of Patent License. Subject to the terms and conditions of
   this License, each Contributor hereby grants to You a perpetual,
   worldwide, non-exclusive, no-charge, royalty-free, irrevocable
   (except as stated in this section) patent license to make, have made,
   use, offer to sell, sell, import, and otherwise transfer the Work,
   where such license applies only to those patent claims licensable
   by such Contributor that are necessarily infringed by their
   Contribution(s) alone or by combination of their Contribution(s)
   with the Work to which such Contribution(s) was submitted. If You
   institute patent litigation against any entity (including a
   cross-claim or counterclaim in a lawsuit) alleging that the Work
   or a Contribution incorporated within the Work constitutes direct
   or contributory patent infringement, then any patent licenses
   granted to You under this License for that Work shall terminate
   as of the date such litigation is filed.

4. Redistribution. You may reproduce and distribute copies of the
   Work or Derivative Works thereof in any medium, with or without
   modifications, and in Source or Object form, provided that You
   meet the following conditions:

   (a) You must give any other recipients of the Work or
       Derivative Works a copy of this License; and

   (b) You must cause any modified files to carry prominent notices
       stating that You changed the files; and

   (c) You must retain, in the Source form of any Derivative Works
       that You distribute, all copyright, patent, trademark, and
       attribution notices from the Source form of the Work,
       excluding those notices that do not pertain to any part of
       the Derivative Works; and

   (d) If the Work includes a &quot;NOTICE&quot; text file as part of its
       distribution, then any Derivative Works that You distribute must
       include a readable copy of the attribution notices contained
       within such NOTICE file, excluding those notices that do not
       pertain to any part of the Derivative Works, in at least one
       of the following places: within a NOTICE text file distributed
       as part of the Derivative Works; within the Source form or
       documentation, if provided along with the Derivative Works; or,
       within a display generated by the Derivative Works, if and
       wherever such third-party notices normally appear. The contents
       of the NOTICE file are for informational purposes only and
       do not modify the License. You may add Your own attribution
       notices within Derivative Works that You distribute, alongside
       or as an addendum to the NOTICE text from the Work, provided
       that such additional attribution notices cannot be construed
       as modifying the License.

   You may add Your own copyright statement to Your modifications and
   may provide additional or different license terms and conditions
   for use, reproduction, or distribution of Your modifications, or
   for any such Derivative Works as a whole, provided Your use,
   reproduction, and distribution of the Work otherwise complies with
   the conditions stated in this License.

5. Submission of Contributions. Unless You explicitly state otherwise,
   any Contribution intentionally submitted for inclusion in the Work
   by You to the Licensor shall be under the terms and conditions of
   this License, without any additional terms or conditions.
   Notwithstanding the above, nothing herein shall supersede or modify
   the terms of any separate license agreement you may have executed
   with Licensor regarding such Contributions.

6. Trademarks. This License does not grant permission to use the trade
   names, trademarks, service marks, or product names of the Licensor,
   except as required for reasonable and customary use in describing the
   origin of the Work and reproducing the content of the NOTICE file.

7. Disclaimer of Warranty. Unless required by applicable law or
   agreed to in writing, Licensor provides the Work (and each
   Contributor provides its Contributions) on an &quot;AS IS&quot; BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
   implied, including, without limitation, any warranties or conditions
   of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A
   PARTICULAR PURPOSE. You are solely responsible for determining the
   appropriateness of using or redistributing the Work and assume any
   risks associated with Your exercise of permissions under this License.

8. Limitation of Liability. In no event and under no legal theory,
   whether in tort (including negligence), contract, or otherwise,
   unless required by applicable law (such as deliberate and grossly
   negligent acts) or agreed to in writing, shall any Contributor be
   liable to You for damages, including any direct, indirect, special,
   incidental, or consequential damages of any character arising as a
   result of this License or out of the use or inability to use the
   Work (including but not limited to damages for loss of goodwill,
   work stoppage, computer failure or malfunction, or any and all
   other commercial damages or losses), even if such Contributor
   has been advised of the possibility of such damages.

9. Accepting Warranty or Additional Liability. While redistributing
   the Work or Derivative Works thereof, You may choose to offer,
   and charge a fee for, acceptance of support, warranty, indemnity,
   or other liability obligations and/or rights consistent with this
   License. However, in accepting such obligations, You may act only
   on Your own behalf and on Your sole responsibility, not on behalf
   of any other Contributor, and only if You agree to indemnify,
   defend, and hold each Contributor harmless for any liability
   incurred by, or claims asserted against, such Contributor by reason
   of your accepting any such warranty or additional liability.

END OF TERMS AND CONDITIONS

APPENDIX: How to apply the Apache License to your work.

   To apply the Apache License to your work, attach the following
   boilerplate notice, with the fields enclosed by brackets &quot;[]&quot;
   replaced with your own identifying information. (Don't include
   the brackets!)  The text should be enclosed in the appropriate
   comment syntax for the file format. We also recommend that a
   file or class name and description of purpose be included on the
   same &quot;printed page&quot; as the copyright notice for easier
   identification within third-party archives.

Copyright [yyyy] [name of copyright owner]

Licensed under the Apache License, Version 2.0 (the &quot;License&quot;);
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an &quot;AS IS&quot; BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
```
</pre>
