---
date: 2023-10-24T14:02:49-07:00
title: A Short, Simple Template for Scheduled Relicensing
description: decouple license rules from how we relax them
brief: Separating initial license rules from terms for changing those rules later will improve development and reuse of both. Here's a form just for scheduling license changes later.
tags:
- Software
- Licensing
- Forms
---

Companies choosing to release their software under restricted terms, but scheduling transition to more permissive ones later, have usually lumped their legal language for initial and long-term licensing together.  They've _coupled_ the terms that apply from day one to the terms that change those rules later.

That has made reusing them difficult.  It's no wonder we keep seeing one-off licenses repeat mistakes.

## Needless Coupling Strikes Again

We've seen this most recently [with HashiCorp](https://writing.kemitchell.com/2023/08/18/HashiCorp-BSL).  The [Business Source License from MariaDB](https://mariadb.com/bsl11/) that Hashi "adopted" has fill-in-the-blanks for when the project's license will change and what it will change to.  That makes sense.  That's how scheduled relicensing works.  But BSL's rigging for scheduled relicensing comes bolted onto a "non-production" license.  Hashi wants to allow a lot of production use from day one.  So the most important part of HashiCorp's "Business Source License" is actually the language nobody'd ever seen before:  the part that turns the non-production license into a ["Don't Jeff Me"](https://youtu.be/XZ3w_jec1v8?feature=shared&t=1708) license.

I don't have any inside information on Hashi's decision path.  But I strongly suspect they chose Business Source because they wanted to do scheduled relicensing, saw the BSL as an existing if little-known "brand" for that, found BSL's MariaDB copyright notice and mentions of dual licensing a little awkward, weren't really thinking in terms of "non-production use" for initial terms, either, but realized they could bodge it into something that works by stuffing what they were actually thinking into the "Additional Use Grant".  Looking at their [license page today](https://web.archive.org/web/20231024194147/https://www.hashicorp.com/bsl), that "Additional Use Grant" has only grown in word count since.

<details markdown="1">
<summary>HashiCorp’s Additional Use Grant as of 2023-10-24</summary>
> You may make production use of the Licensed Work, provided Your use does not include offering the Licensed Work to third parties on a hosted or embedded basis in order to compete with HashiCorp’s paid version(s) of the Licensed Work. For purposes of this license:
>
> A “competitive offering” is a Product that is offered to third parties on a paid basis, including through paid support arrangements, that significantly overlaps with the capabilities of HashiCorp’s paid version(s) of the Licensed Work. If Your Product is not a competitive offering when You first make it generally available, it will not become a competitive offering later due to HashiCorp releasing a new version of the Licensed Work with additional capabilities. In addition, Products that are not provided on a paid basis are not competitive.
>
> “Product” means software that is offered to end users to manage in their own environments or offered as a service on a hosted basis.
>
> “Embedded” means including the source code or executable code from the Licensed Work in a competitive offering. “Embedded” also means packaging the competitive offering in such a way that the Licensed Work must be accessed or downloaded for the competitive offering to operate.
>
> Hosting or using the Licensed Work(s) for internal purposes within an organization is not considered a competitive offering. HashiCorp considers your organization to include all of your affiliates under common control.
>
> For binding interpretive guidance on using HashiCorp products under the Business Source License, please visit our [FAQ](https://www.hashicorp.com/license-faq).
</details>

Hashi's grafted-on customization now runs almost as long as the whole rest of the license.  And it links to---potentially incorporating by reference---[their whole FAQ](https://www.hashicorp.com/license-faq).  Their FAQ has _also_ been growing.  As [I mentioned in my earlier blog post](https://writing.kemitchell.com/2023/08/18/HashiCorp-BSL#things-change-in-time), in part to address issues PolyForm licenses saw coming and had solved already.

Upshot: Instead of contributing to shareable refinement or standardization of the kind of license rules HashiCorp really wants, we have another, one-off mutation.  Even though delayed relicensing is easy enough to implement.  Even though it's easy enough to decouple from initial license terms.

## Enough

Here's a first stab at a reusable form for scheduling license changes to releases.  I'd deeply appreciate any thoughts [by e-mail](mailto:kyle@kemitchell.com?subject=Scheduled%20License%20Grant).  If something doesn't make sense, [that's my fault, not yours](https://flippedform.com):

> ## Scheduled License Grant
>
> Development Draft
>
> Effective Date: EFFECTIVE_DATE (ISO 8601-1:2019)
>
> ### License
>
> Each contributor licenses this release to you on the new license terms below, starting at 12:00 noon on the effective date, Coordinated Universal Time.
>
> ### Scope
>
> This grant applies only to this release.  It does not apply to earlier or later versions, or to development work between versions.
>
> ### Reliability
>
> No contributor can revoke the new license before it starts.  If the new license terms allow a contributor to revoke, they can do so only after the new license starts.
>
> ### Legalities
>
> Legally, this is a present grant of a license, not a contractual promise to grant the license later.
>
> ### New License Terms
>
> NEW_LICENSE_TERMS

`EFFECTIVE_DATE` and `NEW_LICENSE_TERMS` are blanks to be filled in.  If you paste the above into `grant.md`, this Bash script will help you fill them out with common Unix tools:

<details markdown="1">
<summary>Shell Script</summary>
```bash
#!/bin/sh
set -e

effective_date="$1"
new_license="$2"

usage() {
cat <<USAGE
Usage: <date> (<id> | <file>)

Examples:
  $0 $(date --iso-8601 -d "+1 year") ./new-license.txt
  $0 \$(date --iso-8601 -d "+3 years") Apache-2.0
USAGE
}

if [ -z "$effective_date" ] || [ -z "$new_license" ]; then
  usage
  exit 1
fi

fail() {
  printf "Error: %s\n" "$1" >/dev/stderr
  exit 1
}

# Check the new license text before printing the grant.
if [ -f "$new_license" ]; then
  spdx_url=""
else
  spdx_url="https://spdx.org/licenses/$new_license.txt"

  # Warn about popular license templates.
  case "$new_license" in
    BSD-2-Clause|\
    BSD-3-Clause|\
    ISC|\
    MIT)
      fail "$new_license has fill-in-the-blanks. Copy it to a file, fill in the blanks, and provide the file as final argument to this script."
      ;;
  esac

  # Make sure spdx.org has the license text.
  if ! curl --silent --fail "$spdx_url" >/dev/null; then
    fail "Error: No license found with SPDX ID \"$new_license\"!" >/dev/stderr
  fi
fi

# Fill in the effect date and wrap lines.
sed "s/EFFECTIVE_DATE/$effective_date/; /NEW_LICENSE_TERMS/d" grant.md | fmt -w60

# Append the license text.
printf "\`\`\`\n"
if [ -n "$spdx_url" ]; then
  curl --silent "$spdx_url"
else
  cat "$new_license"
fi
printf "\n\`\`\`\n"
```
</details>

## Design

The key decision here was to make a form you fill out per release, rather than a form you fill out once and leave on `main` in your Git repo.  There are two big reasons for this:

1.  Filling out the form is easy to automate in a build process.  With the script I shared above:

    ```bash
    prepare $(date --iso-8601 --date="+3 years") Apache-2.0 >> LICENSE
    ```

2.  Companies typically schedule license changes _years_ into the future.

When dealing with longer time frames, having a complete record of exactly what new terms apply, and exactly when, becomes important.  We don't want to rely on a central dev repo that can move, revision-control metadata that can change or disappear, websites of companies that may rename themselves or get acquired, distribution system release records that may conflict, and on and on.  We don't want potential misunderstandings or disputes about date and time math.  We want this license notice to be as clear and complete when it kicks in as the forms we copy into `LICENSE` or `COPYING`.  A single, complete source of new licensing truth that follows the code around in distribution.

Throwing a relicensing notice into each release tarball also helps avoid myriad ambiguities and complexities.  How does a relicensing "policy" declaring an interval like "three years" apply, if at all, to old releases?  Does that policy apply to versioned releases alone, or to every commit pushed to the repo, every patch sent to the list?  If the company changes its relicensing policy, how do we make sure everyone who needs to know hears about it?  I could write---and started writing---hundreds of words of legal terms to address these problems.  Notice-per-release avoids them in the first place.

## Upshot

We have got a lot of work to do figuring out which license rules for published software developers want, getting them written right, and educating users.  Some developers that want those license rules will want to schedule license changes, as well.  There are some nuances there, which I've hopefully addressed above.  But it is fundamentally a separate and narrower problem than licensing.  With a separate, self-contained form and process for it, one project needn't complicate the other.

I'm not yet set on a name for this, or how to go about publishing and proselytizing it.  I'll probably ask colleagues whether [PolyForm](https://polyformproject.org) might be a good home.  After I get back from vacation.
