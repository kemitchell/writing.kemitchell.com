---
title: CERN OHL-S 2.0, Line by Line
description: the open share-alike hardware license we actually need now?
date: Wed 01 Apr 2020 08:46:53 PM PDT
series: Line by Line
tags:
- Licensing
- Open Source
- Open Hardware
---

CERN, the subterranean nuclear doughnut people from Europe, have released a new 2.0 series of open licenses for hardware and software.  Here's my first, top-to-bottom read of the strong-reciprocal option.

[You're still on your own.](https://notlegaladvice.law)  I can't stand behind my off-the-cuff comments here professionally.  If you need legal help, hire a lawyer who can ask you about your specific situation in confidence, read this license more than once, and put A and B together to come up with the guidance you need.

I did provide some input on early drafts of these terms, privately.  But that was quite some time ago.   I didn't have time to participate in the final review push in the final run up to publication.

> # CERN Open Hardware Licence Version 2 --- Strongly Reciprocal

Still "licence", not "license".  Props to European colleagues!

> ## Preamble
>
> CERN has developed this licence to promote collaboration among hardware designers

Primary audience is hardware people, not software people.

> and to provide a legal tool which supports the freedom to use, study, modify, share and distribute hardware designs and products based on those designs.

Clearly aping the [Free Software Foundation's "four freedoms"](https://www.gnu.org/philosophy/free-sw.html.en).  I'll be looking out for the little-remarked fifth freedom, to make private changes without sharing with anyone.

> Version 2 of the CERN Open Hardware Licence comes in three variants: CERN-OHL-P (permissive); and two reciprocal licences: CERN-OHL-W (weakly reciprocal) and this licence, CERN-OHL-S (strongly reciprocal).

Uses "reciprocal" instead of "copyleft".  "Weak" and "strong" are common distinctions.  Accord [Blue Oak Council's "copyleft families"](https://blueoakcouncil.org/copyleft#copyleft-families).  Next question: how strong is the strong license?

> The CERN-OHL-S is copyright CERN 2020. Anyone is welcome to use it, in unmodified form only.

Some license stewards allow changes, usually requiring that modified terms drop the original name.  No such invitation here.

There's nothing to prevent copyright in legal terms, generally.  But it's often difficult to show originality, rather than cribbing from prior forms, unless the terms were written entirely from scratch.

> Use of this Licence does not imply any endorsement by CERN of any Licensor or their designs nor does it imply any involvement by CERN in their development.

Probably goes without saying, but potentially comforting for CERN lawyers, especially if they're thinking about trademarks.  The "CERN" name is in the name of the license.

> ## 1 Definitions

Some lawyers put definitions at the front.  Some lawyers put definitions at the end.  Some try to define as many terms as possible in context.

The major downside of terms-first is the big space between the top of the document, where people tend to start reading, and the real point, which only shows up after the definitions.

Apache 2.0 has the same problem.

> 1.1 'Licence' means this CERN-OHL-S.
>
> 1.2 'Compatible Licence' means
>
> a) any earlier version of the CERN Open Hardware licence, or

There have been at least two, 1.1 and 1.2.  I don't recall offhand, but believe they were both also reciprocal, but also that the -S designation is new for 2.0.

> b) any version of the CERN-OHL-S, or

Future versions of this license.

> c) any licence which permits You to treat the Source to which it applies as licensed under CERN-OHL-S

Loosely, a "compatible" license.

> provided that on Conveyance of any such Source, or any associated Product You treat the Source in question as being licensed under CERN-OHL-S.

Interesting.  I'm not sure what "treat ... as being licensed" means to achieve here.

> 1.3 'Source' means information such as design materials or digital code which can be applied to Make or test a Product or to prepare a Product for use, Conveyance or sale, regardless of its medium or how it is expressed. It may include Notices.

Much broader than "source" to mean "source code".

> 1.4 'Covered Source' means Source that is explicitly made available under this Licence.
>
> 1.5 'Product' means any device, component, work or physical object, whether in finished or intermediate form, arising from the use, application or processing of Covered Source.

Not sure if "work" covers purely digital preparatory work, like designs never prototyped or manufactured.

Very broad scope here, in technical terms, rather than legal abstractions: use, application, processing.  Compare "develop, operate, or analyze" in [Parity 7.0.0](https://paritylicense.com/versions/7.0.0.html#copyleft).

> 1.6 'Make' means to create or configure something, whether by manufacture, assembly, compiling, loading or applying Covered Source or another Product or otherwise.

Very broad.

> 1.7 'Available Component' means any part, sub-assembly, library or code which:
>
> a) is licensed to You as Complete Source under a Compatible Licence; or
>
> b) is available, at the time a Product or the Source containing it is first Conveyed, to You and any other prospective licensees

Hmm.  In practical terms, today, does this mean available online somewhere?

> i) as a physical part with sufficient rights and information (including any configuration and programming files and information about its characteristics and interfaces) to enable it either to be Made itself, or to be sourced and used to Make the Product; or
>
> ii) as part of the normal distribution of a tool used to design or Make the Product.

I'm drawing a blank on "normal distribution".  Might be a term of art for folks more familiar with hardware design software packages.

> 1.8 'Complete Source' means the set of all Source necessary to Make a Product, in the preferred form for making modifications,

Very common requirement in copyleft licenses.  No working one way, then sharing some preprocessed or other kind of source.

> including necessary installation and interfacing information both for the Product, and for any included Available Components.

Specifically reaching for "installation and interfacing information".  I take it this comes direct from experience of these things being withheld.

> If the format is proprietary, it must also be made available in a format (if the proprietary tool can create it) which is viewable with a tool available to potential licensees

Sources aren't particularly open if you can't open or work with them without closed software.

> and licensed under a licence approved by the Free Software Foundation or the Open Source Initiative.

The "rule of two".  Note the "and".

> Complete Source need not include the Source of any Available Component, provided that You include in the Complete Source sufficient information to enable a recipient to Make or source and use the Available Component to Make the Product.

Highly reminiscent of GPLv3's approach to "System Libraries".

> 1.9 'Source Location' means a location where a Licensor has placed Covered Source, and which that Licensor reasonably believes will remain easily accessible for at least three years for anyone to obtain a digital copy.

Interesting.

When you require making source available by publication, such as posting on the Internet, rather than packaging source with the finished product, so users get both, you end up with an availability issue.  You want to make sure that folks can actually get the sources, and not just that users take some token gesture, like putting the source online for a week or two, and then have it disappear.

That being said, imposing a service-level agreement on licensees to put their work up and keep it up feels onerous, and stretches the notion of a license condition somewhat.  CERN is trying to work around that by requiring just one, point-in-time action for compliance, but requiring that action be taken to have the desired long-term effect.

> 1.10 'Notice' means copyright, acknowledgement and trademark notices, Source Location references, modification notices (subsection 3.3(b)) and all notices that refer to this Licence and to the disclaimer of warranties that are included in the Covered Source.

Open license wonks often mix the terms "notice" and "attribution" imprecisely.  In the open software context, we usually mean license terms and any copyright notices.  Licenses like [Parity](https://paritylicense.com/versions/7.0.0.html) go further, with notices for where to find source, as well.  That seems to be where OHL is heading with "Source location references".

OHL is also lumping modification notices in.  Modification notices are well known in open software licensing.  Little-Known Fact:  Apache 2.0, a permissive license, requires them.  As do the GPLs.

It can be a big chore to dig through a big source repository to find all the notices you need to preserve, especially if you have to include those notices with compiled forms, and not just with source.  The PolyForm licenses tried to dull that pain with [a magic string for identifying required notice lines](https://polyformproject.org/licenses/noncommercial/1.0.0/#notices).

> 1.11 'Licensee' or 'You' means any person exercising rights under this Licence.

Doing both the traditional, lawyerly "Licensee" and the more readable, plain-terms "You".  Let's see which actually gets used, or whether they end up mixed.

> 1.12 'Licensor' means a natural or legal person who creates or modifies Covered Source.  A person may be a Licensee and a Licensor at the same time.

We haven't lost the dream.  Users can be contributors, too.

> 1.13 'Convey' means to communicate to the public or distribute.

"Convey" was how GPLv3 named this abstraction, too.

In the US, our Copyright Act includes "distribute ... to the public" among the exclusive rights of copyright holders.  Courts read that more or less like "publish" in the prior version of the law.

I'm not sure how necessary this defined term is.  But it probably does at least some work to avoid overly specific readings of "distribute" or "publish".  Still wondering about whether the license will require reciprocity for "private changes", and how broad "private" will be.

> ## 2 Applicability
>
> 2.1 This Licence governs the use, copying, modification, Conveying of Covered Source and Products, and the Making of Products.

Intent is broad.  At the high level of this terminology, it's not immediately clear how this maps down to the exclusive rights of copyright and patent holders.  But the message of breadth is received.

> By exercising any right granted under this Licence, You irrevocably accept these terms and conditions.

Compare [the acceptance section of the Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0#acceptance).

> 2.2 This Licence is granted by the Licensor directly to You, and shall apply worldwide and without limitation in time.

Direct licensing model.  On the lookout for a redundant sublicensing grant, a la MIT.

> 2.3 You shall not attempt to restrict by contract or otherwise the rights granted under this Licence to other Licensees.

Interesting.

License terms that try to stop folks circumventing the protections with other legal terms crop up throughout copyleft licenses.  GPL and especially GPLv3 are infamous for them.

Same purpose here, but a different approach.  This is phrased like a contract obligation: "shall not".  And it's not explicitly tied to any of the permissions granted.

I'm all for it.  But folks still recovering from the old license-versus-contract strategic play will bristle.

> 2.4 This Licence is not intended to restrict fair use, fair dealing, or any other similar right.

I've tended to leave these out of my own licenses as unnecessary.  But others see it differently, or value the comfort it can provide to readers.  We included an analogous section in the [PolyForm licenses](https://polyformproject.org/licenses/noncommercial/1.0.0/#fair-use).

> ## 3 Copying, modifying and Conveying Covered Source

Typo: Capitalize "modifying".

> 3.1 You may copy and Convey verbatim copies of Covered Source, in any medium, provided You retain all Notices.

Verbatim distribution grant.  Notice/attribution condition is here.

Doing separate grants for modified and unmodified distribution is GPL style.

> 3.2 You may modify Covered Source, other than Notices,

Hmm.  Can I update Notices?  Say, to add my name to credits, or change Source Location references?

> provided that You irrevocably undertake to make that modified Covered Source available from a Source Location

The phrase "irrevocably undertake" is lawyer-speak.  Wonder why they didn't go with "shall" again?

> should You Convey a Product in circumstances where the recipient does not otherwise receive a copy of the modified Covered Source.

This points back to the difference between sharing alike by making sure recipients of your work get copies or offers of source, as under the GPLs, or by making source available to everyone via publication, as under Parity or to a far more limited extent AGPL.

> In each case subsection 3.3 shall apply.

Peeking ahead: 3.3 requires notices and licensing.

> You may only delete Notices if they are no longer applicable to the corresponding Covered Source as modified by You and You may add additional Notices applicable to Your modifications.

Answers my question about changing notices.

> Including Covered Source in a larger work is modifying the Covered Source, and the larger work becomes modified Covered Source.

Fun Fact:  The four freedoms, as originally stated, don't clearly cover bigger works built with smaller works.  Closing that gap here.

The bounds of "larger work" aren't particularly clear here.  "Work" can be plain language, or it can point to copyright law specifically, which covers "works".  Looking for terms that help clarify this boundary from here on.

> 3.3 You may Convey modified Covered Source (with the effect that You shall also become a Licensor) provided that You:

We saw the license for verbatim conveyance.  Now the one for modified conveyance.  Again, very GPL-esque.

> a) retain Notices as required in subsection 3.2;

Notice/attribution in both.

> b) add a Notice to the modified Covered Source stating that You have modified it, with the date and brief description of how You have modified it;

Here's the requirement to note changes.  Again, hardly unknown in open licensing.  But frankly, even when licenses require this, they're often simply ignored.

Licensors tend to like this as a measure for protecting their reputations.  If I make a brilliant design, and you cripple it in some ill-fated attempt to add features, I don't want your misadventure besmirching my reputation, or the reputation of the project.

I also don't want to be liable.  I expect we'll see warranty disclaimers and damages exclusions at the end of this license.  But on the off change they're not effective, it helps to require evidence that makes clear who's actually responsible.

> c) add a Source Location Notice for the modified Covered Source if You Convey in circumstances where the recipient does not otherwise receive a copy of the modified Covered Source; and

Answers part of my question about changing Notices above.

> d) license the modified Covered Source under the terms and conditions of this Licence (or, as set out in subsection 8.3, a later version, if permitted by the licence of the original Covered Source).

Copyleft.  Requires the same terms or a later version.

This is where license-compatibility problems come from.

> Such modified Covered Source must be licensed as a whole, but excluding Available Components contained in it, which remain licensed under their own applicable licences.

I'd need to look back at the definition, specifically.  But as I recall, this might very well include components that _aren't_ licensed or licensable under these terms.

In effect, "Available Components" are setting a lower boundary for reciprocity within the tech stack.  In the same way that GPL doesn't require licensing processor technology, OHL isn't reaching parts, subassemblies, or code that meets the "Available Component" criteria.

> ## 4 Making and Conveying Products
>
> You may Make Products, and/or Convey them, provided that You either provide each recipient with a copy of the Complete Source or ensure that each recipient is notified of the Source Location of the Complete Source.

Very GPL-esque:  source or an offer of source.

> That Complete Source is Covered Source, and You must accordingly satisfy Your obligations set out in subsection 3.3.

Update notices, license under these terms, &c.

> If specified in a Notice, the Product must visibly and securely display the Source Location on it or its packaging or documentation in the manner specified in that Notice.

Interesting, switchable requirement.  You have to go diffing in the source to find out if this is required.

Especially with this kind of effect, a "magic string" or other predictable way to prove the negative---there is no notice requiring this in the project---would have been welcome.

> ## 5 Research and Development
>
> You may Convey Covered Source, modified Covered Source or Products to a legal entity carrying out development, testing or quality assurance work on Your behalf provided that the work is performed on terms which prevent the entity from both using the Source or Products for its own internal purposes and Conveying the Source or Products or any modifications to them to any person other than You.

This goes directly to the scope of "private" in "private changes".  Here, via a safe harbor.

Might have avoided the specificity of "legal entity" here.  For small-scale projects, these roles might very well be filled by individual, natural-person independent contractors.

The legal terms described here are essentially nondisclosure terms.  Which is a strange thing for a reciprocal license contemplating source delivery by publication to require!

> Any modifications made by the entity shall be deemed to be made by You pursuant to subsection 3.2.

Very astute.  But as a separate issue, you'll need an agreement about IP ownership or licensing to centralize actual IP power over those modifications.

> ## 6 DISCLAIMER AND LIABILITY
>
> 6.1 DISCLAIMER OF WARRANTY --- The Covered Source and any Products are provided 'as is' and any express or implied warranties, including, but not limited to, implied warranties of merchantability, of satisfactory quality, non-infringement of third party rights, and fitness for a particular purpose or use are disclaimed in respect of any Source or Product to the maximum extent permitted by law.

I'd do a little more to make this "conspicuous" than just set the heading in capitals.

This could be far shorter, but I'd be tempted to mention "condition", in addition to "warranty", for those UK jurisdictions that insist, at least on paper, on a hard technical distinction.  Compare Blue Oak: "***As far as the law allows, this software comes as is, without any warranty or condition...***"

> The Licensor makes no representation that any Source or Product does not or will not infringe any patent, copyright, trade secret or other proprietary right.

Interesting choice to double up on this.

Compare the Open Software License and Academic Free License, which went the opposite way, and actually include copyright noninfringement warranties in free public license terms.  Here, where the primary subject matter is hardware, we have even more cause concern about patents.

> The entire risk as to the use, quality, and performance of any Source or Product shall be with You and not the Licensor.

I'd say redundant.  But perhaps comforting to licensor counsel.

> This disclaimer of warranty is an essential part of this Licence and a condition for the grant of any rights granted under this Licence.

Making extra-double-sure.

I don't recall any general language clarifying the legal relationship of the various rules in these terms.  Compare the Acceptance section of the Blue Oak Model License: "The rules of this license are both obligations under [your] agreement and conditions to your license."

> 6.2 EXCLUSION AND LIMITATION OF LIABILITY -- The Licensor shall, to the maximum extent permitted by law, have no liability for direct, indirect, special, incidental, consequential, exemplary, punitive or other damages of any character

Why not just say "any liability"?  Aren't these---hopefully---all the kinds of damages?

> including, without limitation, procurement of substitute goods or services, loss of use, data or profits, or business interruption, however caused

Boilerplate.  I'd shorten it.  But I won't pretend this isn't the kind of language lawyers tend to copy and paste.

> and on any theory of contract, warranty, tort (including negligence), product liability or otherwise,

There _have_ been unfortunate cases where courts inferred from context that a contract term only excluded contract terms, and not tort claims.

> arising in any way in relation to the Covered Source, modified Covered Source and/or the Making or Conveyance of a Product, even if advised of the possibility of such damages, and You shall hold the Licensor(s) free and harmless from any liability, costs, damages, fees and expenses, including claims by third parties, in relation to such use.

Explicit hold-harmless.  I'm honestly not sure what that does, or could do, offhand.

> ## 7 Patents

Strange to see the patents section, perhaps the most important, after disclaimers and exclusions.  Not that it matters so much.

> 7.1 Subject to the terms and conditions of this Licence, each Licensor

This is the part where the terms above saying you become a "Licensor" kick in.

> hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free,

I'd read no-charge as meaning no charge for the grant of the license in the first place, and "royalty-free" as meaning no ongoing charges for usage.  But that's adding even more words to the litany of adjectives for license grants, all of which I think go plenty well without saying.  But again, this is orthodox drafting.

> irrevocable (except as stated in subsections 7.2 and 8.4)

Probably termination provisions.

Lawyers mix "terminate" and "revoke" all the time.  This is being careful, just in case they cause a problem.

> patent license to Make, have Made, use, offer to sell, sell, import,

List of exclusive rights out of the Patent Act, with the exceptions of the broadened "Make" and "Made".

> and otherwise transfer the Covered Source and Products, where such licence applies only to those patent claims licensable by such Licensor that are necessarily infringed by exercising rights under the Covered Source as Conveyed by that Licensor.

There are several ways to write a patent grant.  The phrase "necessarily infringed" is common in commercial licensing.  From the open canon, this is probably closest to EPL, a rather commercial-style license.

I don't see any mechanism typing who-licensed-what to the process of contribution, as under Apache 2.0.  But neither does OHL go so far as [Blue Oak](https://blueoakcouncil.org/license/1.0.0#patent) in making development history entirely irrelevant.  Contributors only license patents that read on the version of the work they distributed.  That can also be hard to determine, but will likely require a less intensive evidence hunt than would Apache 2.0.

> 7.2 If You institute patent litigation against any entity

Any entity, not just those licensing.

> (including a cross-claim or counterclaim in a lawsuit) alleging that the Covered Source or a Product constitutes direct or contributory patent infringement,

Fairly standard in open licensing practice.

> or You seek any declaration that a patent licensed to You under this Licence is invalid or unenforceable

Not sure we've seen this before.  This is about challenging patents licensed under these terms.

If you attacked a patent reading on an open project and got it invalidated, it's arguably irrelevant, from the freedom-for-freedom's-sake point of view.  The collateral damage would be other implementations of the invention, perhaps commercial, and the loss to the patent holder of the value of the asset.

> then any rights granted to You under this Licence shall terminate as of the date such process is initiated.

As expected.

> ## 8 General

There's no reason we can't use general, "boilerplate" terms that reduce uncertainty about contracts in license terms.  I attribute this point to Larry Rosen, as implemented in his Open Software License and Academic Free License.

> 8.1 If any provisions of this Licence are or subsequently become invalid or unenforceable for any reason, the remaining provisions shall remain effective.

A "severability clause".  And a mercifully short one, as they go.

> 8.2 You shall not use any of the name (including acronyms and abbreviations), image, or logo by which the Licensor or CERN is known, except where needed to comply with section 3, or where the use is otherwise allowed by law.  Any such permitted use shall be factual and shall not be made so as to suggest any kind of endorsement or implication of involvement by the Licensor or its personnel.

Akin to a "no trademark license" section.  Most common now in Apache 2.0, but with a long history in addition conditions of BSD-style licenses, too.

> 8.3 CERN may publish updated versions and variants of this Licence which it considers to be in the spirit of this version, but may differ in detail to address new problems or concerns.  New versions will be published with a unique version number and a variant identifier specifying the variant.

Stewardship overview.  Commitment to versioning.

> If the Licensor has specified that a given variant applies to the Covered Source without specifying a version, You may treat that Covered Source as being released under any version of the CERN-OHL with that variant.

As with GPL, the default is "2.0 or later".  You have to opt out of upgrades, like the kernel, to lock in a particular version.

> If no variant is specified, the Covered Source shall be treated as being released under CERN-OHL-S.

Don't think we've seen this before.  And frankly, I'm not sure this works.  If it's unclear what terms the licensor offered, how can this license text make it clear, on their behalf?  I could see that working for releases from CERN itself.

> The Licensor may also specify that the Covered Source is subject to a specific version of the CERN-OHL or any later version in which case You may apply this or any later version of CERN-OHL with the same variant identifier published by CERN.

Again, I'm not sure this license text gets to tell us how to understand expressions of licensor intent.  If it's not clear these terms apply, how do they apply to tell us how to make licensor intent clear?

> 8.4 This Licence shall terminate with immediate effect if You fail to comply with any of its terms and conditions.

Good clarification.  Notice the lack of any materiality qualification.  Whether you step over the line in a big way or a small one, poof goes your license.  Though I'm expecting an excuse/reinstatement provision imminently.

> 8.5 However, if You cease all breaches of this Licence, then Your Licence from any Licensor is reinstated unless such Licensor has terminated this Licence by giving You, while You remain in breach, a notice specifying the breach and requiring You to cure it within 30 days, and You have failed to come into compliance in all material respects by the end of the 30 day period.

Interesting.

The grandfather of these kinds of provisions is GPLv3.  And there's an effort ongoing to "backport" this kind of forgiveness provision to GPLv2, as well.

This is formulated a bit differently than we usually see termination-notice provisions.  It's written so that coming back into compliance _itself_ reinstates the license, rather than failure to come back into compliance _after_ you've received notice and met a deadline.

Frankly, I'm too tired at the moment to diagram out how this formulation might produce different results.

> Should You repeat the breach after receipt of a cure notice and subsequent reinstatement, this Licence will terminate immediately and permanently.

This seems logically equivalent to existing approaches.  You get this grace once, no more.

> Section 6 shall continue to apply after any termination.

Section 6 has the disclaimers and damages exclusions.

> 8.6 This Licence shall not be enforceable except by a Licensor acting as such, and third party beneficiary rights are specifically excluded.

We recently saw a license, the Cryptographic Autonomy License, that gives users the right to enforce the terms, in addition to licensors.  OHL's not going there.

The End!
