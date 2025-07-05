---
title: Run-On Redundancy in the Standard Contract for AWS Marketplace
tags:
- Drafting
- Standard Contracts
---

Here's a quote from the November 11, 2023 revision of the "Standard Contract for AWS Marketplace", a set of legal terms for software license and service sales that AWS offers as an opt-in default for listings on its store.  I've converted from `SHOUT CAPS`, which despite lawyer legend are _not_ required to make text legally "conspicuous".  They also hide capitalization of defined terms and just hurt people's eyes.

> 8.4.2 For SaaS Service Subscriptions, Licensor's aggregate liability under this Agreement for any Security Incident resulting from breach of Licensor's obligations under any Privacy and Security Terms or resulting from breach of Licensor's obligations under the Privacy and Security Terms or any violation by Licensor of Data Protection Laws, including government fines and penalties incurred by Buyer and Buyer's out-of-pocket, reasonable and documented costs set forth in Section 9.5 and Licensor's indemnification and defense obligations pursuant to Section 9.1(b) and its obligations pursuant to Section 9.5 and Licensor's obligations with respect thereto pursuant to Section 9.5, whether such damages are based in contract, tort or other legal theory, will not exceed (in lieu of and not in addition to the amount set forth in Section 8.1) three times the fees and other amounts paid and required to be paid under this Agreement in the 12 months preceding the event giving rise to the damages.

If you're thinking civilized capitalization made this easier, not easy, to read, you're right.  We call this "wall of text" style, the prose equivalent of one of those overstuffed deli sandos that's too tall to fit in any human mouth.  But we can break it down further, using bullet points to mark out structure:

> - For SaaS Service Subscriptions,
> - Licensor's aggregate liability under this Agreement
>   - for any Security Incident
>     - resulting from breach of Licensor's obligations under any Privacy and Security Terms
>     - or resulting from
>         - breach of Licensor's obligations under the Privacy and Security Terms
>         - or any violation by Licensor of Data Protection Laws,
>   - including
>     - government fines and penalties incurred by Buyer
>     - and Buyer's out-of-pocket, reasonable and documented costs set forth in Section 9.5 [Security Breach Remedy]
>     - and Licensor's indemnification and defense obligations pursuant to Section 9.1(b) [Licensor Indemnity for data breach due to Licensor breach]
>     - and its obligations pursuant to Section 9.5 [Security Breach Remedy]
>     - and Licensor's obligations with respect thereto pursuant to Section 9.5 [Security Breach Remedy],
>   - whether such damages are based in contract, tort or other legal theory,
> - will not exceed
>   - (in lieu of and not in addition to the amount set forth in Section 8.1)
>   - three times the fees and other amounts
>     - paid and required to be paid
>       - under this Agreement
>     - in the 12 months preceding the event giving rise to the damages.

If you're thinking this seems needlessly long and logically redundant, you're right.  Consider:

What is the logical difference between:

> ...any Security Incident resulting from breach of Licensor's obligations under any Privacy and Security Terms...

and:

> ...any Security Incident resulting from breach of Licensor's obligations under <del>any</del><ins>the</ins>the Privacy and Security Terms<ins> or any violation by Licensor of Data Protection Laws</ins>...

"Privacy and Security Terms" is defined in the form.  It's used with "the" throughout the agreement, _except_ in `ALL CAPS` limit of liability sections this one.

I'm guessing some earlier draft used "privacy and security terms", lower-case, without definition, in this section.  Then they added another defined term to refer some particular section and used that in this section, too.  Then they renamed the defined term to "Privacy and Security Terms" and did a global find and replace to capitalize all instances, replacing both in this section.

Logically, of course, the second version, with the "or", covers everything that the first does.  If `A` is true, then `A || B` is true, too.  So there's no point in saying `A || (A || B)`.  It's just longer.

There's another redundancy in the list of covered costs.  Why is Section 9.5 mentioned three times, three different ways?

None of those mentions of Section 9.5 mention "damages".  Nor does the mention of Section 9.1(b).

By the time we get to those items in the run-on, they don't even make sense in context.

> For SaaS Service Subscriptions, Licensor's aggregate liability under this Agreement ... including ... Licensor's indemnification and defense obligations pursuant to Section 9.1(b) [Licensor Indemnity for data breach due to Licensor breach] ... and its obligations pursuant to Section 9.5 [Security Breach Remedy] ... and Licensor's obligations with respect thereto pursuant to Section 9.5 [Security Breach Remedy],
>   - whether such damages are based in contract, tort or other legal theory,
> - will not exceed
>   - (in lieu of and not in addition to the amount set forth in Section 8.1)
>   - three times the fees and other amounts
>     - paid and required to be paid
>       - under this Agreement
>     - in the 12 months preceding the event giving rise to the damages.
