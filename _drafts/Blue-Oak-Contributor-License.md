---
title: Blue Oak Contributor License
description: it's just a license
series: Blue Oak Council
tags:
- Open Source
- Software Licensing
- Contributor Licensing
---

[Blue Oak Council](https://blueoakcouncil.org) has published a [model contributor license](https://blueoakcouncil.org/contributor/1.0.0).  It does for contributor licensing what the [model license](https://blueoakcouncil.org/license/1.0.0) did for project licensing: streamline, modernize, and make it readable.

As the new license says at the top:

> This license gives the steward of a software project the legal rights and assurances it needs to accept contributions covered by intellectual property rights.

The form will work for many kinds of project stewards, both companies and foundations.

## Design Decisions

This is an individual form only, with no version for companies, rather than people, to sign.  But it addresses making sure workers have permission from work:

> The contributor is aware that because of legal rules and contracts, they may need to get someone else's permission to submit contributions, even of their own work.  For example, "work made for hire" rules can make employers and clients the owners of copyrights in the contributor's work.  Contracts with clients, or to form new companies, may make them the owners of copyrights in the contributor's work.

The license gives the project steward the right to license under any terms.  It's not restricted to the current license or some category of licenses:

> The steward can license the contributions to others in turn, under whatever terms it chooses.

The patent license is broad, [in line with the Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0#patent):

> The contributor licenses the steward to do everything with their contributions that would otherwise infringe any patent claims they can license or become able to license.

The terms do _not_ require all contributed work be original.  Contributions can include open code from others, so long as it's under permissive license terms:

> All work in contributions the contributor submits for inclusion in the project will be either:
>
> - their own work, which they own the copyrights in or have permission to submit
>
> - work licensed by others under permissive license terms that Blue Oak Council rates “bronze” or better at <https://blueoakcouncil.org/list>

Contributors just need to make sure they're preserving the info needed to tell who licensed what under which license:

> The contributor promises to copy copyright notices, license terms, and other licensing-related notices for work licensed by others in their contributions, so the steward can tell what work is licensed by others under what terms and follow their notice requirements.

The Blue Oak contributor license does _not_ impose any ongoing obligation to warn of or correct intellectual property problems that crop up later.  Contrast section 8 of [Apache's individual contributor license agreement](https://www.apache.org/licenses/icla.pdf).

The "inputs" needed to use these terms are just contributor, steward, and project identifications.  No other extraneous details or blanks people won't know how to fill out.

The contributor license does _not_ expect or describe any particular methods or processes for signing, submitting, or filing.  Rather, it's compatible with any number of them:

## Examples Usages

### E-Mail

> To: licensing@foofoundation.example.com
>
> From: jack@dev.example.com
>
> Subject: Contributor License
>
> I grant the Foo Foundation the Blue Oak Contributor License Version 1.0.0 for my contributions to the Bar Project.
>
> Jack McDev

### DocuSign Template

> For Signature: jack@dev.example.com
>
> Copy To: licensing@foofoundation.example.com
>
> Foo Foundation Contributor License
>
> I grant the Foo Foundation the Blue Oak Contributor License Version 1.0.0 (https://blueoakcouncil.org/contributor/1.0.0) for my contributions to the Bar Project.
>
> Name:   ____________________
>
> Signature:  ____________________
>
> Date:   ____________________

### CONTRIBUTORS File

```
We contributors to the Bar Project
license our contributions to the Foo
Foundation on the terms of the Blue
Oak Contributor License Version 1.0.0
(https://blueoakcouncil.org/contributor/1.0.0):

Adam Founder
Charlie Co-Founder
Jack McDev
```
