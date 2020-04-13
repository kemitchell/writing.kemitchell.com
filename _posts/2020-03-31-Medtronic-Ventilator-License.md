---
title: Medtronic's PB560 Ventilator License, Line by Line
description: medical device company devises copyleft license
date: Tue 31 Mar 2020 12:01:42 AM PDT
series: Line by Line
brief: A multimedia, copyleft license, for a limited time only, to respond to COVID-19.
tags:
- Licensing
- Copyleft
- Open Source
- Open Hardware
retrospect: As intersting as the license is, the word I'm hearing from engineer friends is that Medtronic hasn't actually released much of concrete use under the terms.  They've teased a broader release, including source code, but so far, no sign of it.
---

Medtronic [posted some files about its PB560 ventilator online](https://www.medtronic.com/us-en/e/open-files/thank-you.html) under a new, purpose-written public license.  To read them tell it, more files will follow.  For now, I am going to read the license, [top to bottom](#top-to-bottom), and share my initial thoughts, by more or less free association.  Then I'll outline initial thoughts about the license [overall](#overall).

[I can't both share this free, on the Internet, and also take professional responsibility if you run with what I say and end up in trouble.](https://notlegaladvice.law).  We all know what we're up against.  If you can save lives, save lives.  If legal help advances that work, reach out to me or another lawyer.  We can do what we do at home, and the best of us are itching to get involved in something responsive.

## Line by Line

> # Permissive License --- Open Ventilator Files

Open source software wonks who use "permissive" for terms like MIT, BSD, and Apache may bristle, but this is the original meaning of the word "permissive".  Presumably, Medtronic are about to give broad permission to do things with the materials for their ventilator that they are in no way obligated to let us do.

> ## Project Undertaking
>
> The medical and healthcare communities in the United States and across the world currently are responding to a medical emergency involving spread of the Novel Coronavirus Disease ("COVID-19").  On January 30, 2020, the World Health Organization ("WHO") declared the outbreak of COVID-19 a Public Health Emergency of International Concern ("PHEIC"), and, on March 11, 2020, the WHO Director General declared COVID-19 a pandemic.  On March 13, 2020, President Donald J. Trump declared a National Emergency in the United States due to the COVID-19 outbreak.

All background, no legal terms.  But note the term definitions: COVID-19, WHO, PHEIC.  I bet we'll see those abbreviations reused throughout the terms.

> As the U.S. Food and Drug Administration stated in its March 2020 ventilator guidance ("FDA Guidance"), it is necessary to maintain an adequate supply of mechanical ventilators "to support patients who develop respiratory compromise from COVID-19."  Consistent with the FDA Guidance, and in accordance with the public health and medical response of governmental agencies around the world, Medtronic is making available this package of materials to enable participants across industries to leverage their own expertise and resources to evaluate options for rapid ventilator manufacturing to help doctors and patients dealing with COVID-19.

Long.  But I'm so glad to see a set of legal terms with a [clear statement of purpose at the top](https://writing.kemitchell.com/2019/01/10/Discipline-Stated-Purpose.html).

> ## Enclosed Materials
>
> The enclosed materials include:
>
> (i) design and manufacturing information, documentation and user manuals about the Puritan Bennett 560 ventilator (the "PB 560 Ventilator") ("Design Materials") and
>
> (ii) software for the PB560 Ventilator in source code and object code form ("Software").

Racking up defined terms.

> These terms apply to the PB560 Ventilator only and not any other projects you may work on now or in the future with Medtronic.

The back half of this sentence is a bit unclear.  The front half is clear enough.  These terms are about the PB560, and the PB560 only.

> In this license, "you" refers to the entity that has downloaded the Design Materials and Software.

Using the second person for the other side, to make it easier for them to read, is surprisingly progressive.  Few lawyers do this "by default".  Evidence of effort to make these terms approachable, through legal style is in heavy evidence.  Especially all those defined terms.

> ## Modified Permissive License

"Modified" might point back to my comments about "permissive" above.  I take it Medtronic will _not_ be throwing IP in the PB560 wide open, but only under specific limitations, such as for responding to the pandemic only.

> ### Limited Term
>
> This permissive license is effective from the time you download the Design Materials and Software until the earlier of (i) the final day the WHO's PHEIC is in effect or (ii) October 1, 2024 (the "Term").

Normally, "permissive" open licenses don't expire.  This one does, when the pandemic ends.

Note the "earlier of" hedge.  Essentially, this license expires `MIN(END_OF_PANDEMIC, 2024-10-01)`.

On the Medtronic side, open-endedness is scary.  The folks assessing this license grant as a cost or a risk want upper bounds.

I have no idea how they came up with October 1, 2024, and I'm in no way qualified to say whether that's likely to provide reasonable "headroom" for those responding.

> ### Design Materials License
>
> Medtronic hereby provides you a ...

Here comes the usual litany of license modifiers.

> non-exclusive,

You're not the only one getting a license.

> royalty-free,

You're not paying anything for the license.

> world-wide

License covers what you do anywhere, not just in the United States or another specific jurisdiction.

> license to the Design Materials

"Design Materials" was one of the definitions we racked up above.

> to use,

An exclusive right of patent holders.

> make,

Another exclusive right of patent holders.

> have made,

Usually this is included to make clear that those receiving the license can have others who don't receive the license do their making for them.  With a free, public license, it's arguably unnecessary.  But it's nice to have.

> manufacture, have manufactured,

Off the cuff, I think that's redundant of "make, have made".

> sell and have sold

"Sell" is out of the Patent Act.  "Have sold" seems to follow the pattern of "make, have made".  But the litany out of the Patent Act would be "_offer_ to sell".

> a ventilator ("Your Ventilator")

Does the "a" mean you get to make one?  Or that you get to make one _design_, of which there can be many copies?

> in response to the COVID-19 pandemic (the "Purpose").

With the term, here is the major "modification" to "permissive".  This isn't a free public license for any purpose.  Just for responding to the COVID-19 (defined term!) pandemic.  A little surprised they didn't reuse the PHEIC defined term, though I suppose it doesn't matter, because the term of the license ends with the PHEIC anyway.

License wonks can compare this to the structure of the [PolyForm licenses](https://polyformproject.org/licenses/), which license only for "permitted purpose", which varies by license: noncommercial use, small business use, internal use, and so on.

> You are free to use,

"Use" is an exclusive right of patent holders.

> share,

No particular legal meaning I'm aware of.

> distribute,

Exclusive right of copyright holders under the US Copyright Act.

> make available to others,

No specific legal meaning.

> publicly display,

Straight out of the Copyright Act.

> copy,

No particular legal meaning, but often read in line with "reproduce" under the Copyright Act.

> modify,

Also no particular legal meaning.  Often read to cover "preparing derivative works" under copyright law.

> and build upon

Also vernacular for actions that usually count as "preparing derivative works".

If the point is to cover all the exclusive rights of copyright and patent holders, best case, the language just says that.  See, for example, the [copyright](https://blueoakcouncil.org/license/1.0.0#copyright) and [patent](https://blueoakcouncil.org/license/1.0.0#patent) grants of the Blue Oak Model License.  Second best, you get a list of things you're allowed to do, either in everyday terms like "modify" and "build upon", or a complete, verbatim copy of all the verbs in the Copyright Act and Patent Act, as in the [copyright](https://www.apache.org/licenses/LICENSE-2.0.html#copyright) and [patent](https://www.apache.org/licenses/LICENSE-2.0.html#patent) sections of Apache 2.0.

This language follows more the [hodgepodge approach of The MIT License](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html#grant-scope).  Not ideal, but not fatally flawed.

> the Design Materials

We ended up with two major defined terms for the contents of the release, Design Materials and Software.  This license covers Design Materials.  Expecting a Software license to follow...

> for the Purpose.

Limited to use for the Purpose again.  And now we have a defined term for that.

> ### Software License
>
> You may reproduce, modify and distribute

A shorter list than we saw above.  Comparing to the major exclusive rights under the Copyright Act, 17 U.S.C. 106:

1.  to _reproduce_ the copyrighted work in copies or phonorecords

    Check: "reproduce", a term from the statute

2.  to prepare derivative works based upon the copyrighted work;

    At least partial, arguably total.  "Modify" will usually entail preparing a derivate work.  But we don't have "build upon" here, as we did in the license grant for Design Materials.

3.  to distribute copies or phonorecords of the copyrighted work to the public by sale or other transfer of ownership, or by rental, lease, or lending;

    Check: "distribute", a term from the statute, often read as "publish" under the prior Copyright Act

4.  in the case of literary, musical, dramatic, and choreographic works, pantomimes, and motion pictures and other audiovisual works, to perform the copyrighted work publicly

    Likely N/A.  There are theories about software as a service and public performance, but they don't likely matter for software installed on ventilators.

5.  in the case of literary, musical, dramatic, and choreographic works, pantomimes, and pictorial, graphic, or sculptural works, including the individual images of a motion picture or other audiovisual work, to display the copyrighted work publicly

    Likely N/A.  Sharing code online might count as displaying it.

6.  in the case of sound recordings, to perform the copyrighted work publicly by means of a digital audio transmission

    N/A

> the Software only as needed to manufacture and distribute Your Ventilator.

Different purpose limitation.

Overall, we saw a lot of patent verbs in the Design Materials license, but not in the Software license.

> ### Revocability
>
> Medtronic cannot revoke this license during the Term as long as you follow the license terms.

Excellent drafting work here.  Compare the [Reliability](https://blueoakcouncil.org/license/1.0.0#reliability) section of the Blue Oak Model License.  The phrase "as long as you follow the license terms" warms my heart.  It's not exactly everyday English, but it's so much closer than I expected.

> ### Regulatory Approval
>
> Your sale or distribution of Your Ventilator is conditioned on you obtaining all required regulatory approvals in each country or territory in which you plan to sell or distribute Your Ventilator, and you must comply with all applicable regulatory requirements in those jurisdictions.

Writing on the wall: medical device approval from the Food and Drug Administration.

> ### Notices & Warning
>
> You must provide a warning indicating that Your Ventilator was created in response to the COVID-19 pandemic (an example is provided below).

Interesting.  I have a few ideas what they're going for here, but I'll hold comment until the sample text.

> You must provide a link to this license,

Very typical condition.  Sometimes we call this "attribution", though "notices" is really more accurate.

> indicate if any changes were made to the Design Materials or the Software, and describe the nature of such changes.

Very common condition in open licensing.  Often motivated by a desire to preserve the reputation of the original licensor, who will not be responsible or tarnished by others' ill-considered changes.  Compare 5(a) of [GPLv3](https://www.gnu.org/licenses/gpl-3.0.en.html).

In their lawyers' position, I would absolutely be thinking about modified firmware getting run on their own ventilators, both during the pandemic and after.

> You must retain all copyright, patent, trademark, and other proprietary notices in the Design Materials and Software.

Very common condition.  Compare the approach of [the PolyForm licenses](https://polyformproject.org/licenses/noncommercial/1.0.0/#notices), which gives licensees more guidance on how to find and honor required notices, using a "magic string" of text denoting a notice line.

> > COVID-19 Warning:

New and burgeoning genre!

> > This Ventilator was created for use only in response to the COVID19 pandemic.

Interesting.

This is the language of the Purpose, the major limitation on scope of the first Design Materials license.

Requiring that this be included creates evidence of reliance on this license.  It will be very hard to argue you didn't accept these terms if you make a device and label it as required.

This may also have some effect warding off interest in, or ongoing use of, ventilators _after_ the pandemic.  As I understand the situation, we are in desperate need of thousands of more ventilators now, but our need will drop again after the pandemic has passed.  Medtronic may be thinking about all the suddenly "extra" ventilators laying around after the pandemic, and opportunity to continue selling new, commercial products.

> > It is provided AS IS.

"AS IS" is a statutory magic phrase from the Uniform Commercial Code, a model law nearly all states have passed that governs contracts for sales of goods.  It's essentially a shorthand for "disclaiming", or getting rid of, the default "warranties", or guarantees, that the law usually implies about goods being bought and sold.

It's very common to see shorter versions of warranty disclaimers in required notices like this.  Which begs the question why the warranty disclaimers elsewhere have to be so long.  I'm expecting a longer warranty disclaimer to appear here shortly...

> ### Medtronic Trademarks
>
> You are not authorized to use the Medtronic name or the name of any affiliate of Medtronic, or any of their respective logos or trademarks in connection with your activities or Your Ventilator, except as required by regulatory authorities.

This is _not_ a trademark license.

Terms like these are also very common in open source.  See [the trademark section of Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html#trademarks), for example.

> ### Modifications
>
> If you modify,

Another list.

> transform,

Haven't seen "transform" in this license yet.  There are some term-of-art usage in copyright, as in "transformative use", but that isn't the sense meant here.  This probably gets read in the sense of presenting or converting to a different medium or format.

> improve or build upon

"Improve" is new in this license.  "Build upon" we saw before.

> the Design Materials or the Software (collectively, "Modifications"),

This part covers the whole package.

> you must make your Modifications available under a license that includes terms identical to the terms of this license.

Copyleft!  Patentleft!  Reciprocity!  Share-alike!  Egads!

And so short.

> Everyone who receives the Design Materials or the Software receives a license from Medtronic under the terms of this license.

Heather Meeker calls this licensing model "direct licensing".  It's not a matter of sublicensing.  Everyone who gets this license for Medtronic's IP gets their license direct from Medtronic, legally speaking.  Nerd stuff.

> You may not apply legal terms or technological measures that legally restrict others from doing anything the license permits.

Anti-anti-circumvention!  Egads again!

Comparison: the additional restrictions, anti-Tivo, anti-DRM, and other maneuvers in the GPLs.

> ## Limitation of Liability
>
> **Medtronic does not assume any liability and has no responsibility for the payment of any damages, of any kind (including claims arising out of or related to product liability, negligence, failure to warn, warranty, use or inability to use, regardless of the legal theory on which any such damages or liability may be based and whether or not Medtronic has been advised of the possibility of any such damages or liability), for Your Ventilator or any other ventilator (inclusive of any Software) manufactured by any participant or any other third party based on or derived from the Design Materials or the manufacture, sale, maintenance or support of Your Ventilator or any other ventilator (inclusive of any Software) by any participant or any third party.  The use of the Design Materials and Software and the manufacture and sale of Your Ventilator is at your own expense and risk and is intended solely to assist with the public health and medical response to the COVID-19 pandemic.**

Your price is free, and their liability is zero.  De rigeur in open licensing.  There are always concerns about enforceability, depending on which law the terms get read under.

> ## No Warranties
>
> **No warranties with respect to the Design Materials or Software are given.  Medtronic makes no express, implied or statutory warranties regarding the Design Materials or Software, their accuracy, functionality or any outcome or results from use of the Design Materials or the Software.  Medtronic does not warrant that any of the Design Materials or Software are error or bug-free.  Medtronic disclaims the implied warranties of fitness for a particular purpose, merchantability and title.**

Traditional disclaimer of all warranties.

> **The license may not give you all of the permissions necessary for your intended use of the Design Materials and Software.  For example, regulatory permissions, quality management systems, patient safety factors, and other rights may limit how you use the Design Materials and Software.**

Very common clarification in highly regulated fields.  Just because Medtronic won't sue you for doing it doesn't mean other, or the state, won't sue or prosecute you for doing it.

> ## Indemnity
>
> You hereby agree to indemnify, defend and hold Medtronic and its affiliates, and their respective officers, directors, employees and agents, harmless from any and all claims, demands, proceedings, liabilities, damages, costs, expenses and fees arising out of or related to (i) your use of or inability to use the Design Materials and the Software; (ii) the manufacture, use, sale, import, maintenance or support of Your Ventilator; and (iii) any death or personal injury that directly or indirectly results from any use of or inability to use Your Ventilator.

Common commercial-contract indemnity.  Basically, you agree to cover Medtronic if you get into trouble using what they've provided and somebody tries to name Medtronic in the lawsuit or otherwise hold Medtronic responsible.

They have to anticipate that many of the folks accepting this license, especially individuals, won't be good for it.

This kind of thing is rare, but not unknown, in open public licenses.  But it's usually narrower than this.  Compare the [additional warranty or liability section of Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html#additional) and the [commercial distribution section of the Eclipse Public License](https://www.eclipse.org/legal/epl-2.0/#commercial-distribution).

> ## Ownership
>
> The enclosed Design Materials and Software remain the property of Medtronic.  You do not have any ownership rights or exclusivity to the Design Materials or Software.

Very common in commercial licenses.  Very arguably unnecessary, but might comforting when you're a lawyer working for the licensor and your job is protecting the firm's intellectual property like Smaug guarding his gold.

> ## Governing Law
>
> This license is governed by the laws of the state of Minnesota, without regard to its conflict of law principles.

Very common in commercial contracts and license agreements.  Not unheard of in open, public licenses either.  [RPL 1.5](https://spdx.org/licenses/RPL-1.5.html)'s mechanism always comes to mind, not because it's representative of open licensing, but because it's representative of just how deliciously twisted the hacker mindset applied to license terms can be.

> The United Nations Convention on Contracts for the International Sale of Goods does not apply to this license.

Commercial contract boilerplate.  They might've tagged the Uniform Computer Information Transactions Act, too, while they were at it.  But I wonder whether either is necessary, given Minnesota governing law.

## Overall

It's easy for me to get lost in the implementation details, because thinking through them deeply is how I slither my mind into a new legal hole.  But the upshot here is so big that it's hard to wander astray.

This is a free, public, copyleft license with a scope limitation and a backstop time limit.  It spans different kinds of materials---documentation, software, manuals, manufacturing data, software---and different kinds of intellectual property---copyright and patent.  Medtronic is opening things up, and locking them open, all within a carefully prescribed scope---responding to the pandemic---with substantial bulwarks against its own liability.  When the pandemic ends, that "commons" ends with it.  But what they've shown us now they can't unshow us later.

I don't know enough about ventilators, mechanical ventilation, or the PB560 in particular to read the import for the current crisis.  But I know plenty enough about the open licensing metagame to take a serious lesson from these terms:  Medtronic, a medical device company, has fluently deployed techniques from deep within the bequest of the free software counterculture.  It's not just copyleft.  It's copyleft with a very general anti-copyleft-circumvention provision at the limit of terseness, produced on short notice, in extremis.  Hot damn.

Of the relatively minor, implementation points, the largest in my mind, after first read, is the patent scope.  There are verbs up there to indicate Medtronic intended to license patents.  But the way the different license grants map to different subject matter---Design Materials and Software---leave me wondering how any patents on the PB560 thread through the terms to apply to new ventilators or modifications of the PB560 software.

That is emphatically _not_ to say that the license grant is a sham, or full of lawyerly booby traps.  My overall impression, for whatever paltry sum that's worth, is of good faith, mitigated by caution, with clear concessions to business interest, in an anticipated world beyond the current pandemic.

An extraordinary move in extraordinary circumstances.

A fascinating new play, right in my game.

But what actually matters now is ventilators.
