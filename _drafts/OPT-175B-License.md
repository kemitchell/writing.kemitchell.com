---
public: true
title: Notes on The OPT-175B License Agreement
tags:
- Machine Learning
- Licenses
---

Meta used [new, bespoke license terms](https://github.com/facebookresearch/metaseq/blob/main/projects/OPT/MODEL_LICENSE.md) for its release of its ["Open Pre-trained Transformers" natural language processing models](https://github.com/facebookresearch/metaseq/tree/main/projects/OPT) earlier this year.  Here's a few thoughts from my first-past skim.

Upshot: Apart from poking around the GitHub repo to get a sense for what they've released, I don't think I'd recommend actually using this in any way at work for a company.  They added a `LICENSE` file, but it ain't no `WELCOME` mat.  It's a big cold-prickly from Meta's legal.

<!-- TODO: Finish replacing the line-by-line with bullet points, pulling quotes as necessary. -->

## It's so restricted I wonder who it's supposed to be for.

> a. Subject to your compliance with [references] [...] Meta grants you a [...] license [...] <mark>solely for your non-commercial research purposes</mark>.

## They can pull the plug at any time.

> a. Subject to your compliance with the Documentation and Sections 2 [Restrictions], 3 [Attribution], and 5 [Limitation of Liability], Meta grants you a non-exclusive, worldwide, non-transferable, non-sublicensable, revocable, royalty free and limited license under Meta's copyright interests to reproduce, distribute, and create derivative works of the Software solely for your non-commercial research purposes. The foregoing license is personal to you, and you may not assign or sublicense this License or any other rights or obligations under this License without Meta's prior written consent; any such assignment or sublicense will be void and will automatically and immediately terminate this License.

## It's just copyrights.  There's no patent license.

> a. Subject to your compliance with the Documentation and Sections 2 [Restrictions], 3 [Attribution], and 5 [Limitation of Liability], Meta grants you a non-exclusive, worldwide, non-transferable, non-sublicensable, revocable, royalty free and limited license under Meta's copyright interests to reproduce, distribute, and create derivative works of the Software solely for your non-commercial research purposes. The foregoing license is personal to you, and you may not assign or sublicense this License or any other rights or obligations under this License without Meta's prior written consent; any such assignment or sublicense will be void and will automatically and immediately terminate this License.

## The definition of "Documentation" is totally unbounded and infects important terms.

> a. Subject to your compliance with the Documentation and Sections 2 [Restrictions], 3 [Attribution], and 5 [Limitation of Liability], Meta grants you a non-exclusive, worldwide, non-transferable, non-sublicensable, revocable, royalty free and limited license under Meta's copyright interests to reproduce, distribute, and create derivative works of the Software solely for your non-commercial research purposes. The foregoing license is personal to you, and you may not assign or sublicense this License or any other rights or obligations under this License without Meta's prior written consent; any such assignment or sublicense will be void and will automatically and immediately terminate this License.

## There's a kind of user code of conduct here, but it's a total mishmash.

## If your non-commercial research causes problems, I hope you can afford Meta's lawyers.

## The terms are full of dusty corporate EULA copypasta that doesn't make any sense here.

<!-- TODO: I Accept button? -->

I've improved formatting and undone ALL CAPS below.  Inline edits are in [square brackets].

> # OPT-175B License Agreement
>
> This License Agreement (as may be amended in accordance with this License Agreement, **"License"**), between you, or your employer or other entity (if you are entering into this agreement on behalf of your employer or other entity) (**"Licensee"** or **"you"**) and Meta Platforms, Inc. (**"Meta"** or **"we"**) applies to your use of any computer program, algorithm, source code, object code, or software that is made available by Meta under this License (**"Software"**)[...]

We're in full-bore American Legal Corporate mode here.  I'll try to keep style and structure comments to a minimum.  But I want out point right here, up top, that this is a whole lot harder to read than it has to be.  If you're feeling eye and brain pain working through this, it's not you.

> [...]and any specifications, manuals, documentation, and other written information provided by Meta related to the Software (**"Documentation"**).

It's not unheard of for public software licenses to cover doc, too.  But it's usually a sign of an older set of terms, or a set derived from a paid commercial license form.

This _could_ be problematic, not because it's going to cover doc, but because of how "Documentation" is define.  _Any_ written information Meta provides related to the software being licensed?  How is anyone to know where all this information lies to be found?  If the content of Documentation ends up plugged into our obligations somewhere, it could end up raising an "indefiniteness" problem.  Courts will often enforce terms people could have read, even if they didn't.  But they're loathe to enforce terms hadn't even a practical chance of seeing ahead of time.

> **By clicking "I Accept" below or by using the Software, you agree to the terms of this License.  If you do not agree to this License, then you do not have any rights to use the Software or Documentation (collectively, the "Software Products"), and you must immediately cease using the Software Products.**

I found this license in their GitHub repo.  There's no "I Accept" to click.  So I'm guessing this is vestigial, copied over from somebody's old legal form end-user software license agreement.

There are some interesting theoretical and methodological arguments about whether this use-to-accept language works as it says it does, especially when the licensor can't give good evidence that the user even knew about the terms---"had notice" of them---before using.  But I read current appellate case law and policy statements to make the kinds of rules we're about to see about use enforceable.

Frankly, as drafter, I'd just state the idea that users have to follow the terms' rules directly, without this language.  This phrasing risks kicking a court over into "browsewrap versus clickwrap" territory, especially if there isn't actually "I Accept" button to be clicked.  But I doubt I'd advise clients coming to me as potential users under these terms to ignore the rules and plan on getting off under this kind of technicality.

> **If you are agreeing to be bound by the terms of this License on behalf of your employer or other entity, you represent and warrant to Meta that you have full legal authority to bind your employer or such entity to this License. If you do not have the requisite authority, you may not accept the License or access the Software Products on behalf of your employer or other entity.**

Drafters love putting in terms to make the other side promise that they actually have the legal power to agree, on their own or on behalf of a company.  It's entirely unclear to me what good they do if the person does not in fact have that legal power, apart from creating potential claims against the personal _as an individual_ that probably aren't worth pursuing.  When a company's involved, the point is that you want to be able to go after the company.

When you allow people to accept your terms without any actual back-and-forth communication, you pass on the chance to second guess whether they have the signing authority you want them to.

> ## 1. License Grant
>
> a. Subject to your compliance with the Documentation

Are there user obligations hiding in the documentation?  They apparently just got incorporated by reference.  And recall the scary-broad definition of "Documentation".  We've got a wild reference to "any...other written information provided by Meta related to the Software", hanging out in the core of these terms, the part that gives us permission for the software.

I am not going to picking through the doc for extra terms for this blog post.  I can't even say for sure what's out there, and what might count as doc under this license grant for OPT in particular.  I did notice that Meta put OPT out in a monorepo with other projects.  There appears to be a `docs` folder root, but not in the OPT subdirectory.  What else is out there, I know not.

It's normal, though also profoundly annoying, for commercial software license agreements and terms of service to "spider out" to other documents incorporated by reference.  Well behaved public license terms don't tend to do that, so they can be self-contained.  References to documents that can change, like documentation, make terms essentially impossible to standardize, in the sense of allowing users to learn a license once and apply the same conclusions to whatever projects use the same license.

This is not shaping up to be much a license to rely on.

> and Sections 2 [Restrictions], 3 [Attribution], and 5 [Limitation of Liability],

Why not 4 [Disclaimers], as well?  Or all the other terms of the license?

> Meta grants you a non-exclusive, worldwide, non-transferable, non-sublicensable, revocable,

Revocable.  Meaning they can take it back.  More on that below.

> royalty free and limited license

Typical American legal run-on license grant.

> under Meta's copyright interests

This is important.  They are specific about the kinds of rights they are licensing here.  It's just copyrights.  Not patents.

> to reproduce, distribute, and create derivative works of the Software

These verbs come from the Copyright Act's list of exclusive rights of copyright holders.  In other words, the things people can't do without license or a defense like fair use.  Let's run them down.

<table>
<caption>Exclusive Rights of Copyright Holders<br> United States Code title 17, section 106</caption>
<thead>
<tr>
  <td></td>
  <th>Right</th>
  <th>Applies to Software (Literary Works)?</th>
  <th>Apparently Licensed Here?</th>
</tr>
</thead>
<tbody>
<tr><td>(1)</td><td>to <mark>reproduce</mark> the copyrighted work in copies or phonorecords</td><td>✓</td><td>✓</td></tr>
<tr><td>(2)</td><td>to prepare <mark>derivative works</mark> based upon the copyrighted work</td><td>✓</td><td>✓</td></tr>
<tr><td>(3)</td><td>to <mark>distribute</mark> copies or phonorecords of the copyrighted work to the public by sale or other transfer of ownership, or by rental, lease, or lending</td><td>✓</td><td>✓</td></tr>
<tr><td>(4)</td><td>in the case of literary, musical, dramatic, and choreographic works, pantomimes, and motion pictures and other audiovisual works, to perform the copyrighted work publicly</td><td>✓</td><td>✗<br>but not clear what doing this would mean with what’s licensed</td></tr>
<tr><td>(5)</td><td>in the case of literary, musical, dramatic, and choreographic works, pantomimes, and pictorial, graphic, or sculptural works, including the individual images of a motion picture or other audiovisual work, to display the copyrighted work publicly</td><td>✓</td><td>✗<br>but not clear what doing this would mean with what’s licensed</td></tr>
<tr><td>(6)</td><td>in the case of sound recordings, to perform the copyrighted work publicly by means of a digital audio transmission</td><td>✗</td><td>✗<br>but not a problem</td></tr>
</tbody>
</table>

Rigorous software licenses in run-on corporate drafting style tend to list _all_ the applicable exclusive rights of copyright holders, just for completeness. Apache 2.0, for example, [mentions both public display and public performance](https://www.apache.org/licenses/LICENSE-2.0.html#copyright).

The missing rights wouldn't give me much pause here, unless my client's use case looked or felt close to stage or gallery arts activity.  Especially since the context is a license grant for Software and Documentation, neither of which is defined to include outputs, which might end up being used artistically.

> solely for your non-commercial research purposes.

Big use restriction here.  Definitely _not_ a "permissive", do-what-you-want kind of release.

Note that we've got both a positive and a negative restriction overlayed here. `NOT` commercial `AND` research.

"Commercial" isn't defined, so any court interpreting would likely fall back on everyday meaning, citing English dictionaries.

"Research" isn't defined.  As slippery as "commercial" can be, I'd actually be worried more about "research".

Can people with "research" in their titles, doing things normally described as "research", but at for-profit companies, use the models under this license?  Frankly, I doubt it.  Even academics at public universities might cross the line, such as while researching on a grant with clear commercial application, for-profit funding, or industrial transfer-oriented conditions.

> The foregoing license is personal to you, and you may not assign or sublicense this License or any other rights or obligations under this License without Meta's prior written consent; any such assignment or sublicense will be void and will automatically and immediately terminate this License.

They already said non-sublicensable.  This covers assignment, too.  Really trying to lock these terms in.

> b. You may make a reasonable number of copies of the Documentation solely for use in connection with the license to the Software granted above.

This is classic commercial end user license agreement boilerplate.

I have no idea how this makes sense for the doc in their public GitHub repo.

Again, the definition of Documentation seems way overbroad for what they mean to say here.

> c. The grant of rights expressly set forth in this Section 1 (License Grant) are the complete grant of rights to you in the Software Products, and no other licenses are granted, whether by waiver, estoppel, implication, equity or otherwise.  Meta and its licensors reserve all rights not expressly granted by this License.

Lots of verbiage trying to keep courts from reading anything in.

> ## 2. Restrictions
>
> You will not, and will not permit, assist or cause any third party to:

"You will not" is expected here.  I was waiting to see if and how they'd handle "downstream" enforcement of their use restrictions.

The "permit, assist or cause" triplet is classic run-on legal style.  One of the few truly surprising ways courts read language differently than regular people is that given three different words, they will do their best to find three different meanings for them.  Inviting courts to split hairs isn't often the best way to ensure the broadest reading, but I couldn't see myself advising a client to try to game this unless they were truly desperate.

I'm not seeing any specific here on how the user needs to make sure others "downstream" agree to these restrictions.  But this license doesn't allow sublicensing anyway.  At least in theory, the effect is what Heather Meeker calls "direct licensing".  Even if Alan, Bob, and Cara all work for the same company, the terms set up the legal relations so each of them individually gets a license direct from Meta.

> a. use,

We're about to see an MIT License-style list of verbs that do and don't come from the Copyright Act.  "Use" is not one of the explicit exclusive rights of copyright holders.  It _is_ an explicit exclusive right of _patent_ holders, but we saw above that we're only getting a copyright license here.  That would suggest this "use" will read in a more general sense.

> modify,

The word "modify" is often read to refer to "prepare derivative works" in copyright context.

> copy, reproduce,

The name of the law is "Copyright Act", but the most important exclusive right is phrased as "reproduction".  Usually "copy" and "reproduce" mean the same thing with a copyright.

> create derivative works of,

We just saw "modify".  Kind of a junk drawer here.

> or distribute the Software Products (or any derivative works thereof, works incorporating the Software Products, or any data produced by the Software), in whole or in part, for

TODO

> (i) any commercial or production purposes,

> (ii) military purposes or in the service of nuclear technology,[...]

> (iii) purposes of surveillance, including any research or development relating to surveillance,

> (iv) biometric processing,

> (v) in any manner that infringes, misappropriates, or otherwise violates any third-party rights, or

> (vi) in any manner that violates any applicable law, including accessing the Software Products from an embargoed country as prohibited by the U.S. government, and violating any privacy or security laws, rules, regulations, directives, or governmental requirements (including the General Data Privacy Regulation (Regulation (EU) 2016/679), the California Consumer Privacy Act, and any and all laws governing the processing of biometric information), as well as all amendments and successor laws to any of the foregoing;

> b. alter or remove copyright and other proprietary notices which appear on or in the Software Products;

> c. utilize any equipment, device, software, or other means to circumvent or remove any security or protection used by Meta in connection with the Software, or to circumvent or remove any usage restrictions, or to enable functionality disabled by Meta; or

> d. offer or impose any terms on the Software Products that alter, restrict, or are inconsistent with the terms of this License.

> ## 3. ATTRIBUTION
>
> Together with any copies of the Software Products (as well as derivative works thereof or works incorporating the Software Products) that you distribute, you must provide (i) a copy of this License, and (ii) the following attribution notice: "OPT-175B is licensed under the OPT-175B license, Copyright (c) Meta Platforms, Inc. All Rights Reserved."

> ## 4. DISCLAIMERS
>
> THE SOFTWARE PRODUCTS ARE PROVIDED "AS IS" and "WITH ALL FAULTS" WITH NO WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.  META EXPRESSLY DISCLAIMS ALL REPRESENTATIONS AND WARRANTIES, EXPRESS OR IMPLIED, WHETHER BY STATUTE, CUSTOM, USAGE OR OTHERWISE AS TO ANY MATTERS RELATED TO THE SOFTWARE PRODUCTS, INCLUDING BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, SATISFACTORY QUALITY, OR NON-INFRINGEMENT.  META MAKES NO WARRANTIES OR REPRESENTATIONS THAT THE SOFTWARE PRODUCTS WILL BE ERROR FREE OR FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS, OR PRODUCE ANY PARTICULAR RESULTS.

> ## 5. LIMITATION OF LIABILITY
>
> TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL META BE LIABLE TO YOU (A) UNDER ANY THEORY OF LIABILITY, WHETHER BASED IN CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY, WARRANTY, OR OTHERWISE UNDER THIS LICENSE, OR (B) FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, PUNITIVE OR SPECIAL DAMAGES OR LOST PROFITS, EVEN IF META HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE SOFTWARE PRODUCTS, THEIR CONSTITUENT COMPONENTS, AND ANY OUTPUT (COLLECTIVELY, **"SOFTWARE MATERIALS"**) ARE NOT DESIGNED OR INTENDED FOR USE IN ANY APPLICATION OR SITUATION WHERE FAILURE OR FAULT OF THE SOFTWARE MATERIALS COULD REASONABLY BE ANTICIPATED TO LEAD TO SERIOUS INJURY OF ANY PERSON, INCLUDING POTENTIAL DISCRIMINATION OR VIOLATION OF AN INDIVIDUAL'S PRIVACY RIGHTS, OR TO SEVERE PHYSICAL, PROPERTY, OR ENVIRONMENTAL DAMAGE (EACH, A **"HIGH-RISK USE"**). IF YOU ELECT TO USE ANY OF THE SOFTWARE MATERIALS FOR A HIGH-RISK USE, YOU DO SO AT YOUR OWN RISK. YOU AGREE TO DESIGN AND IMPLEMENT APPROPRIATE DECISION-MAKING AND RISK-MITIGATION PROCEDURES AND POLICIES IN CONNECTION WITH A HIGH-RISK USE SUCH THAT EVEN IF THERE IS A FAILURE OR FAULT IN ANY OF THE SOFTWARE MATERIALS, THE SAFETY OF PERSONS OR PROPERTY AFFECTED BY THE ACTIVITY STAYS AT A LEVEL THAT IS REASONABLE, APPROPRIATE, AND LAWFUL FOR THE FIELD OF THE HIGH-RISK USE.

> ## 6. INDEMNIFICATION
>
> You will indemnify, defend and hold harmless Meta and our subsidiaries and affiliates, and each of our respective shareholders, directors, officers, employees, agents, successors, and assigns (collectively, the **"Meta Parties"**) from and against any losses, liabilities, damages, fines, penalties, and expenses (including reasonable attorneys' fees) incurred by any Meta Party in connection with any claim, demand, allegation, lawsuit, proceeding, or investigation (collectively, **"Claims"**) arising out of or related to: (a) your access to or use of the Software Products (as well as any results or data generated from such access or use), including any High-Risk Use (defined below); (b) your violation of this License; or (c) your violation, misappropriation or infringement of any rights of another (including intellectual property or other proprietary rights and privacy rights).  You will promptly notify the Meta Parties of any such Claims, and cooperate with Meta Parties in defending such Claims.  You will also grant the Meta Parties sole control of the defense or settlement, at Meta's sole option, of any Claims.  This indemnity is in addition to, and not in lieu of, any other indemnities or remedies set forth in a written agreement between you and Meta or the other Meta Parties.

> ## 7. TERMINATION; SURVIVAL

> a. This License will automatically terminate upon any breach by you of the terms of this License.

> b. We may terminate this License, in whole or in part, at any time upon notice (including electronic) to you.

> c. The following sections survive termination of this License: 2 (Restrictions), 3 (Attribution), 4 (Disclaimers), 5 (Limitation on Liability), 6 (Indemnification) 7 (Termination; Survival), 8 (Third Party Materials), 9 (Trademarks), 10 (Applicable Law; Dispute Resolution), and 11 (Miscellaneous).

> ## 8. THIRD PARTY MATERIALS
>
> The Software Products may contain third-party software or other components (including free and open source software) (all of the foregoing, **"Third Party Materials"**), which are subject to the license terms of the respective third-party licensors.  Your dealings or correspondence with third parties and your use of or interaction with any Third Party Materials are solely between you and the third party.  Meta does not control or endorse, and makes no representations or warranties regarding, any Third Party Materials, and your access to and use of such Third Party Materials are at your own risk.

> ## 9. TRADEMARKS
>
> Licensee has not been granted any trademark license as part of this License and may not use any name or mark associated with Meta without the prior written permission of Meta, except to the extent necessary to make the reference required by the "ATTRIBUTION" section of this Agreement.

> ## 10. APPLICABLE LAW; DISPUTE RESOLUTION
>
> This License will be governed and construed under the laws of the State of California without regard to conflicts of law provisions.  Any suit or proceeding arising out of or relating to this License will be brought in the federal or state courts, as applicable, in San Mateo County, California, and each party irrevocably submits to the jurisdiction and venue of such courts.

> ## 11. MISCELLANEOUS
>
> If any provision or part of a provision of this License is unlawful, void or unenforceable, that provision or part of the provision is deemed severed from this License, and will not affect the validity and enforceability of any remaining provisions.  The failure of Meta to exercise or enforce any right or provision of this License will not operate as a waiver of such right or provision. This License does not confer any third-party beneficiary rights upon any other person or entity.  This License, together with the Documentation, contains the entire understanding between you and Meta regarding the subject matter of this License, and supersedes all other written or oral agreements and understandings between you and Meta regarding such subject matter.  No change or addition to any provision of this License will be binding unless it is in writing and signed by an authorized representative of both you and Meta.
