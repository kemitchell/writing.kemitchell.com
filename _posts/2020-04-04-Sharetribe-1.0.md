---
title: Sharetribe Community Public License 1.0, Line by Line
description: another everything-but-SaaS license
date: Sat 04 Apr 2020 01:27:40 PM PDT
series: Line by Line
tags:
- Licensing
- Licenses
- Open Source
---

Sharetribe Go, software for running peer-to-peer marketplaces online, [changed its license from MIT to a new Sharetribe Community Public License](https://medium.com/bettersharing/sharetribe-go-becomes-source-available-after-being-open-source-for-8-years-bb43c410da53) late last year.  Here it is, top to bottom.

As usual, [if you need a lawyer, get a lawyer](https://notlegaladvice.law).  If you make a big, important legal decision based on some blog post you found online, you may be heading for trouble, and I will not be held responsible.  Take these off-the-cuff thoughts as a starting point, not a stopping point.

## The License

> # Sharetribe Community Public Licence

The phrase "community public license" has become the watchword for new public license terms from companies crawling out of the dark side of open source.

"Community Software Movement"?

> Version 1.0

Versioning is good!

> This Sharetribe Community Public License (the "License") sets forth the terms on which Sharetribe Oy ("Sharetribe")

Apparently "Oy", short for "Osakeyhtiö", is the Finnish word for the limited-liability business structure under Finnish law.  The analogy is to LLC in the United States, but any equivalency is probably dangerous.

> licenses certain software made available by Sharetribe (the "Software").

Racking up a couple defined terms: "License", "Sharetribe", "Software".

> The Software includes parts that are protected by copyright, trademark, and database rights owned by Sharetribe.

No patents?

Maybe this is Sharetribe Oy telling us they don't have any.  Maybe this is Sharetribe Oy telling us they have some, but aren't licensing them?  Would be comforting to know.

> These rights enable Sharetribe to control the reproduction, distribution, installation, running, and other use of the Software.

Minitiature explanation of how licensing works.  Evidence that someone thought about non-lawyers reading this text.

> Sharetribe's goal is to give its users freedom

The lawyers I run with don't say "freedom" much, unless they're alluding to FSF-brand Free Software.  Seeing that in a license that FSF didn't write will irk some readers.  But irked is their natural resting state.

> to modify the Software for their own uses and run the Software in IT-premises of their choosing.

Good News: Check.

Bad News: Coming!

> However, Sharetribe wants to control the making available of the Software as a service (SaaS). This is why Sharetribe excludes the right to offer the Software as a service with this license.

So we're looking at another anything-but-SaaS license.  Rumors of Commons Clause's demise have been greatly exaggerated.

There are many different implementations of anything-but-SaaS community licensing now.  [PolyForm](https://polyformproject.org), which I cofounded, has tried to make standard forms available for this purpose.  Frankly, that was half the motivation to start the project in the first place.  But we've hung up on forms implementing various forms of permissive license with restrictions on competing with the licensor, because it turns out appetites haven't settled on a particular approach yet, and none of the approaches are particularly easy to draft.  If you're interested, [here's a pull request](https://github.com/polyformproject/polyform-licenses/pull/70).

We are still in preamble or introductory text.  I expect they'll express this rule again, and in different terms, later on.

> This License grants specific limited rights to individuals and legal entities ("You") who wish to use or develop the Software.

Defining "You".  Another nod to readability.  Though defining it legal style, with quotes and parentheses, always strikes me as partially self-defeating.

> Sharetribe reserves all the other rights. Please ensure You use the Software according to the terms and conditions set in this License. Otherwise, Your use of the Software may infringe on the rights of Sharetribe.

Minitiature summary of licensing, from the opposite direction.

> ## 1. LICENSE GRANT AND CONDITIONS.

I'd write this so people can read it, and drop the terminal period: "License Grant and Conditions".  But that's just style.

> ### 1.1 License.
>
> Sharetribe grants You a permanent, non-exclusive, royalty-free, worldwide, non-transferable, non-sublicensable license to:

"Permanent" in this litany is new on me.  American license wonks would probably write "irrevocable", though that has a slightly different meaning.  Then again, they might also freak out about whether either "irrevocable" or "permanent" conflicts with the idea of the license terminating for breach.  Which is part of the reason I avoid these long lists of adjectives, which almost all go without saying in a public license like this.

> 1\. use the Software;

Under American law, "use" is a patent thing, though we often see it in copyright licenses.  I'm remembering they mentioned copyright at the top, among other kinds of intellectual property, but not patent.

> 2\. prepare modifications and derivative works of the Software;

So "prepare derivative works" is the legal phrase, understood to include "modification", which as far as I know doesn't have any specific legal meaning under copyright law.

> 3\. distribute the Software (including without limitation in source code or object code form); and

OK.  Source-or-binary may have gone without saying, but I suppose it doesn't hurt to say.  The risk would be some other form arguably not covered by "source code" and "object code", but I don't think it's a concern for Sharetribe GO specifically, and this is a project-specific license.

> reproduce copies of the Software.

I think this was supposed to be number four.

> 4\. The licensed rights exclude the right to make the Software available as a software-as-a-service or platform-as-a-service where You host the Software for multiple clients or other similar online services that compete with Sharetribe products or services that provide the Software ("Excluded Purpose").

This looks like it was supposed to be a paragraph _after_ the enumerated list.  I will send a pull request.

This is also the interesting part of the license.  In spirit, we're being told we can do what we wanna with this software, _except_ this.

Mostly, we're leaning on two industry terms of art, "software as a service" and "platform as a service".  Under US law, if those terms aren't clear in context, courts can and will look to "usage in trade", or how industry people understand them, for meaning.

Sharetribe also provides two bits of interpretive aid: "...where you host for multiple clients" and the part about competition with Sharetribe (the company, as "Sharetribe" is defined).

I could pick nits in the multiple-clients clarification.  For example, what about consultancies that help multiple clients self-host on public cloud infrastructure, like AWS?  But in practice, I think this formulation probably just works.  The situations that might be unclear aren't situations that Sharetribe appears to want to permit.

I'd have more serious reservations about the noncompetition formulation if it _were_ the rule, rather than additional language designed to clarify the rule.  Again, see [current work on the noncompete license for PolyForm](https://github.com/polyformproject/polyform-licenses/blob/master/PolyForm-Noncompete.md).

> ### 1.2 Attribution requirement.
> You may make the Software available if you meet the following attribution conditions:

As I mention nearly every time this word shows up in a license, "attribution" is arguably a term of art.  But arguable terms of art are something worse than either terms everybody interprets naturally or actual terms of art with true, common meaning.  Expecting some combination of copyright notices, notices about the license terms, and maybe practical credits or acknowledgments for the licensor.

> 1\. You must reproduce and not remove or alter all Sharetribe or third-party copyright and other proprietary notices contained on each Software copy.

The usual.

> 2\. You must provide the notice below with each copy.
>
> > Sharetribe Oy makes this software available under the terms of the Sharetribe Community Public License, Version 1.0 located at https://www.sharetribe.com/sharetribe-community-public-license.
> >
> > If you install, download, access, use or distribute the software, you must follow the terms of the license.

Interesting.

I wonder if this language already appears somewhere in the code base and distribution artifacts it's configured to build.  Either way, writing it out in the license provides a bit of backup, if someone disobeys the license and leaves it out.

Note the _lack_ of a requirement to provide a full copy of these license terms.  The requirement is effectively a link, rather than a copy.

> ### 1.3 Modifications.
> If You make modifications to the Software and make the software available,

Make the software available to who?  Even within your organization?

Probably going for the traditional change-and-distribution trigger found in old open licenses, particularly copyleft licenses.  But no sign of actual copyleft so far.  Will they require licensing modifications in any particular way?  Require contributing them back to Sharetribe?

> You must include prominent notices stating that You have modified the Software.

Notice of changes.  This could have appeared in 1.2.

Usually motivated by a desire not to see the original developer blamed or besmirched for ill-conceived changes by others.

> You may add Your own copyright notices to modifications You make to the Software. You may provide additional or different license terms and conditions for use, reproduction, or distribution of Your modifications.

No copyleft.  Pick your license.  But only for your modifications.  Not for the whole.

> While redistributing the Software or modifications thereof, You may choose

Strange to see "You", a reader-comfort measure, and "thereof", a repulsive legal archaism, so close together.  But that's deep in the weeds.

> to offer, for a fee or free of charge, support, warranty, indemnity, or other obligations. You, and not Sharetribe, will be responsible for any such obligations.

Arguably goes without saying.  But more traditional, commercially minded vendors (and the lawyers they raise) tend to like seeing it spelled out.  Compare Apache 2.0, EPL, and the like.

> #### 1.4 No Sublicensing.
> The License does not include the right to sublicense the Software, however, each recipient to which You provide the Software may exercise the Licenses so long as such recipient agrees to the terms and conditions of this License.

Direct licensing model.  The open norm.

Also the word "agrees", which screams "contract!" under US law.

> ## 2. TERM AND TERMINATION.
>
> If You breach any of the terms or conditions under this License, this License will terminate automatically and permanently.

Good to clarify how breaking the rules affects the license.  The PolyForm licenses and the Blue Oak Model license all do this, and I've already seen it pay dividends in the field, increasing understanding and reducing questions sent up to lawyers.

Note the stricture here.  No matter which rule you break, no matter how seriously you break it, no matter if you intended to break it or tried to fix it or not, your license goes poof.  That does seem like a trap, though I suspect it wasn't mean maliciously.  That being said, if it plays out, it won't play out well.

Folks often ask me why we bothered with [a breach-cure "Excuse" section in the Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0#excuse), whose only real rule is providing notice of license terms.  This is more or less it.  I don't like the "trolling" word, though my colleagues do.  We're concerned about latent potential for notice-slash-attribution "trolling".

> In the event that any provision, including without limitation any condition, of this License is held to be unenforceable, this License and all permissions and rights granted hereunder will immediately terminate.

I had to read this one twice!

The start of it looks like a standard "severability" clause, which says, in a nutshell, that if the lawyers actually wrote something illegal in the terms, a court who runs into it should try their best to ignore that part and apply the rest.

This actually does the opposite.  If there's anything unenforceable about these terms, the whole license goes with it.

Note that the trigger is that a court "held", or ruled, that a term was enforceable, not the fact that the term was in fact unenforceable.  Note also that the license terminates _from the time of the holding_.  The license isn't void before that.

> Otherwise, this License is permanent.

Permanent again.

Something tells me this text was translated, or perhaps written by a nonnative speaker of English.  Not that there's anything at all wrong or less than understandable about their writing!  Just a usage thing, from someone who's way, way too attuned to usage and style.

> ## 3. INTELLECTUAL PROPERTY.
> Sharetribe retains all right, title, and interest in the Software, and all intellectual property rights therein.

Unnecessary, but potentially comforting for licensor's lawyer.

> Sharetribe reserves all rights not expressly granted to You in this License.

I think they said that already?

> ## 4. DISCLAIMER.
> SHARETRIBE DISCLAIMS ANY WARRANTIES AND CONDITIONS, EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, AND SPECIFICALLY DISCLAIMS ANY WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE, WITH RESPECT TO THE SOFTWARE.

Not as short as it could be, but way shorter than the average licensing lawyer would probably write (copy-and-paste) it.

As usual, this was harder to read in all caps.  It's written in Markdown.  Type it out like normal and slap some `***` around for `<strong><em>`.  It will actually look more conspicuous, and people will read it without tearing up.

> ## 5. LIMITATION OF LIABILITY.
> SHARETRIBE WILL NOT BE LIABLE FOR ANY DAMAGES OF ANY KIND, INCLUDING BUT NOT LIMITED TO, LOST PROFITS OR ANY CONSEQUENTIAL, SPECIAL, INCIDENTAL, INDIRECT, OR DIRECT DAMAGES, HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, ARISING OUT OF THIS LICENSE. THE FOREGOING SHALL APPLY TO THE EXTENT PERMITTED BY APPLICABLE LAW.

Same.

> ## 6. GENERAL.

Hey, a contract boilerplate section!

Again, credit where due: Long ago, Larry Rosen, then counsel for the Open Source Initiative, made the point that there's nothing stopping us using the mechanisms and techniques of contract drafting to make license terms more clear.

That being said, a typical contract "General" section could run longer than this license has so far.  And I don't see too much text below, so it looks like the picked and chose.  I wonder what they included.

> ### 6.1 Governing Law.
> This License will be governed by and interpreted in accordance with the laws of Finland, without reference to its conflict of laws principles.

Yeah, that's the first one I'd guess they'd take.

This is also the part when I double down on [this not being legal advice no sir not at all](https://notlegaladvice.law).  I am no kind of Finnish lawyer.  I don't even read Finnish.  I had to look up "Oy" on Wikipedia earlier, and copied "Osakeyhtiö" from the page instead of typing it out!

> ### 6.2 Assignment.
> You are not authorized to assign your rights under this License to any third party. Sharetribe may freely assign its rights under this License to any third party.

Interesting.  I wonder what the default rule on assignment is under Finnish contract law.

> ### 6.3 Other.
> This License is the entire License between the parties regarding the subject matter hereof.

We call this an "integration" clause.  Designed to beef up the [parol evidence rule](https://en.wikipedia.org/wiki/Parol_evidence_rule), which keeps folks citing documents or conversations other than the license text in disputes.  I take it they've something similar in Finland.

> No amendment or modification of this License will be valid or binding upon the parties unless made in writing and signed by the duly authorized representatives of both parties.

Very common in contracts.  In America, we'd usually try to make this rule apply to "waviers", too.  The Finns may not make that distinction.

## Overall

Hardly perfect, but way better than I expected.  The takeaway is definitely the approach to SaaS restriction.

PolyForm has stumbled getting the noncompete forms out.  We've had a terrible run of luck with cofounders---both Heather Meeker and I---suffering independent, work-stopping health issues, and now COVID-19.  Seeing this, I'm inspired again to push on those licenses.  Folks shouldn't have to roll their own, one-off.

## Random Thought, Occurring to Me Later

The license text has section numbers, but no cross-references.  Why not drop the numbers altogether?  They only make it look more lawyerish.
