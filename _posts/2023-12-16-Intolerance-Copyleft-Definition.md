---
date: 2023-12-16T16:15:46-08:00
title: Copyleft Intolerance and the Defining-Open Mind Trap
description: forgetting licensing history past, we fail to repeat our successes
tags:
- Licensing
- Open Source
- Free Software
- Copyleft
- SSPL
---


Dirk Riehle's ["The Future of the Open Source Definition"](https://writing.kemitchell.com/2016/05/13/What-Open-Source-Means) reminds me a lot of one of [my own posts](https://writing.kemitchell.com/2016/05/13/What-Open-Source-Means) an eon ago, circa 2016.  Back then, I wrote:

> If the process [of gradually calling more things "open"] dulls the fine edges of the Open Source Definition, which I consider one of the most laudable inter-generational bequests in programmingdom, then so be it.  Its political foundation has shifted, but its value as an artifact and teacher aren't lost, and won't be while I still type.

This sat well in my worldview at the time.  Wherever I'd looked, all I'd ever seen about the Open Source Definition sang its praise as the rock of open source's foundation, somewhere deep down the stack.  My brain marinated in bits on this for years.

Had I read the Open Source Definition?  Sure.  Uncritically.  Reverently.  In light of all I'd been told to think about it.

Had I read the license-discuss e-mail archives?  Here and there.  When Usenet, Slashdot, blogs, or other scene spots of the Web deep-linked to a message in archive, often a superficially spicy one.  Never from end to end on a thread.

I believed what the Open Source Initiative said about itself, and what hackers like me preferred to believe and felt smart repeating about it.  Years later, I went and proposed a license.  Only then did I do the overdue homework---lots of painful homework.  What I found was not as described.

## OSI-Approved ⊊ Open-Source

Dirk writes:

> The OSI also operates the license-review and license-discuss mailing lists, which serve as the arbiter and decider of whether a particular software license is an open source license or not.  Any license that passes the review will be added to the public list of open source licenses on the OSI's website.

I think this very accurately describes what a relatively small cohort of people who've read and reread recycled praise for the Open Source Initiative tend to believe about it.  It's what I believed.  But it is not at all what has been or is going on, or even what OSI says.

The OSI doesn't even _try_ to approve all "open source" licenses.  It actively _disapproves_ of and discourages many.

Consider "license proliferation".  For many years now, in practice and in various real or aspirational descriptions of its review process, the OSI has explicitly _not_ approved licenses deemed too functionally similar to already-approved forms.  Consider also the various less-popular but prevalent forms that clearly give software away, but have never been approved by the Open Source Initiative.  Creative Commons' [CC0 public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/deed.en) has never been approved, despite having been formally proposed.  [WTFPL](http://www.wtfpl.net/) for all its madcap, intentional faults has never been approved.

A quick scan of the [OSI's current list](https://opensource.org/licenses/) shows a little over 70 licenses.  The [Blue Oak list](https://blueoakcouncil.org/list) of _just_ permissive licenses numbers more than 180, and we've a big enough backlog of unreviewed licenses to be [running a fundraiser to tackle it](https://blueoakcouncil.org/fund-the-list).  That means _at least_ a hundred _permissive_ licenses OSI has _not_ approved.  The vast majority of users and devs, who learned what "open source" means _in practice_, would say that's 100 open source licenses the OSI has not approved.

There's no legal trump card here.  There's [no trademark on "open source" standing alone](https://writing.kemitchell.com/2020/05/11/Open-Source-Property).  OSI's founders had to admit, right at the start, that the law wouldn't permit an exclusive claim on that broad, descriptive phrase.  OSI _does_ hold US trademark rights in "Open Source Initiative Approved License", but not as a certification mark for licenses, like ["Blue Oak Certified"](https://blueoakcouncil.org/trademark-certificate-6156198.pdf), and not as a certification mark for software under particular licenses, but as a service mark for "promotion of computer software which is distributed under agreements meeting certain requirements for distribution and redistribution of the software".

The OSI has long maintained a page [touting its "authority" from mentions in public policies and documents](https://opensource.org/authority/), but last I checked, none of those citations points to a section of public law giving OSI the right to impose its definition on anyone.  I've seen no credible legal theory that calling a license for source code an "open source license" when OSI doesn't is illegal.

## Manifesto ≠ Specification

As for the Definition itself, Dirk writes:

> ...the open source definition serves as a specification.  It has proved its value time and again as a practical and sharp tool for making decisions.

This is an easy enough statement to make about controversial license assessments _only once they have been made_.  The Definition's so vague where it matters that victors can always find bits to cite to make their victories seem clear and inevitable.  They can make on those bits have always been read, have to be read, to compel their conclusion.

Looking at the actual debates, before decisions---or, just as often, before one sides gets a whiff of the real "process" and runs away---you'll very often find both sides _citing the same Open Source Definition language_ for and against the same license terms.  And, predictably, devolving into a meta-debate about how to read the criteria and the process for putting sharpening up its eternally blunt, glittering generalities.

The Open Source Definition is neither practical nor sharp.  It is more like one of those [shiny, harmless novelty sabres used to pop champagne](https://www.youtube.com/watch?v=qCp9-tEHa8U), kept around as souvenir of the reverently remembered but dimly recalled wedding of Raymond-esque ambition and Perensian idealism, officiated by Tim O'Reilly.

The meta-debate has most recently resolved _against_ the idea that new approval decisions have to be consistent with past readings of the criteria.  While I'd strongly caution anyone against taking OSI's [review process documentation](https://opensource.org/licenses/review-process/) as an accurate statement of actual process, its most recent inspired-reformer rewrite currently reads:

> Approval of a license with the same or similar terms in the past does not bind the OSI to approval of a newly submitted license.

At the same time, as far as I know, there still isn't any active process for reversing previous license approvals.

This is not a functioning, precedent-based adjudication system.  It's an improvement, but not a redeeming one, that it no longer pretends to be, at least if you know where to look.  If it all of seems to walk and talk more like parliamentary debate procedure than specialist consultation on a technical standard, that's because it is.  It can't define itself by fiat to be otherwise.

## Copyleft

Nowhere has the appearance-reality gap between technophilic preferred belief and realist political reality cost so much as on copyleft.  For reasons Dirk points out, recent in-real-life developments have made copyleft only more important---or gave it a chance to be:

> ...vendors with a vendor-owned open source strategy always want to prevent anyone else from competing with them using their own software.  For most of the early life of a product, open sourcing using an aggressive copyleft license and providing a separate commercial license does the trick and keeps the competition away.

An admirably short summary of the general phenomenon.  He goes on:

> This changed, however, when vendor-owned open source became popular and the large cloud service providers ...started providing the vendor's open-source software as a cloud service.

And later:

> To stop the hyperscalers (and anyone else) from competing with them, these vendors invented so-called source-available licenses, also knows as non-compete licenses.

Brevity is golden, but there's a chapter of history missing here.  Dirk's collapsing two turns of a cycle into one.  Seeing it this way, it's no wonder we failed to learn and apply the lesson of the last turn to the current one: To keep Free Software competitive, copyleft has to to cover all commercially relevant development and distribution methods of the day.

## Missing History

This is not the first time open-friendly companies willing to share their software had copyleft licenses break down as defenses.  It didn't begin with the "hyperscalers".  It happened before with "Application Service Providers", back when the only apps Google and Amazon "hyperscaled" were their own.

Around the turn of the last century, Application Services Providers would stand up servers---often at colocated data centers---and run Web applications for customers to access remotely.  Thanks to the Dot-Com bubble, and thanks again to proliferation of open source for Web devs after the crash, vendors could create Web and other Internet-delivered applications with financeable investments of capital.  ASPs could run the applications those developers created on similarly attainable outlays and credit lines.  One market segment surmounted the development costs of software, the other the provisioning and maintenance costs of servers.

"Software as a Service" would only consign "ASP" to the rusty buzzword bin later, when the platform-as-a-service companies made it cheaper and easier for Web app development companies themselves to take hosting in-house---to become their own ASPs---even at micro small scale, by renting fractional server resources instead of racks or dinky virtual servers.  So when Affero, a Free Software-allied Web app company worried proprietary moochers would take all its lunch money, approached the FSF for what eventually became AGPL, the weakness in GPLv2 that needed fixing was occasionally "the Google problem", but more lastingly "the ASP Loophole".

Quoth AGPLv3:

> ... The GNU General Public License permits making a modified version and letting the public access it on a server without ever releasing its source code to the public.
>
> The GNU Affero General Public License is designed specifically to ensure that, in such cases, the modified source code becomes available to the community ....

When software got distributed to customers as installable binaries, Free Software-allied companies used the GPL to contribute without getting smashed by hostile proprietary firms.  When distribution to customers via network services picked up, Free Software-allied companies got a new license for Web apps---its text quite literally mentions users interacting over networks.  That license was initially written with movement help _by and in the name of a commercial company_, later officially adopted and rewritten by the FSF, to enable corporate contribution without getting smashed by proprietary competitors.  Even though RMS [didn't like the shift in distribution](https://www.gnu.org/philosophy/who-does-that-server-really-serve.en.html) that made that mode commercially relevant.

Why?  Allies were asking for it.  FSF [explicitly intended](https://www.gnu.org/press/2002-03-19-Affero.html) to address _business_ concerns:

> The FSF worked with Affero to address the licensing requirements for their business model and is considering including this additional provision in the upcoming version of the GNU GPL 3.0 and is inviting public comment.

> Eben Moglen, board member and general legal counsel to the Free Software Foundation, said: "We are eager to solve problems experienced by free software companies, like Affero, who are exploring new business models and meeting new challenges that threaten the freedom of software."

<!--License nerds will know that public comment eventually kept AGPL-style protection _out_ of GPLv3.-->

Affero itself was a San Francisco-based startup.  These days, we'd say they were in "sustainability":

> Affero is developing a new online service which empowers members of virtual communities to recognize and reward positive contributions with feedback and donations to non-profits and causes they support.

["What's new is just the well forgotten old."](https://ru.wiktionary.org/wiki/%D0%BD%D0%BE%D0%B2%D0%BE%D0%B5_%E2%80%94_%D1%8D%D1%82%D0%BE_%D1%85%D0%BE%D1%80%D0%BE%D1%88%D0%BE_%D0%B7%D0%B0%D0%B1%D1%8B%D1%82%D0%BE%D0%B5_%D1%81%D1%82%D0%B0%D1%80%D0%BE%D0%B5)

## This Round

We came to where we are today when we started distributing not just _applications_, but _software components_ over networks, rather than installing them locally.  It's not just _users_ interacting with marketable apps anymore.  It's other software, too.

[Behold the Cloud Native Computing Foundation landscape.](https://landscape.cncf.io/)  Few if any of those projects---many of which survive symbiotically with companies---do anything directly useful for anyone but software people.  These are fundamentally tools, components, and management systems.  But they can be "products" with enough software people working at companies willing to buy them.

There has been no new, stronger network copyleft license from the Free Software Foundation to defend allied firms marketing dev tools, components, or management systems from larger, proprietary competitors.  But there _was_ a "<del>Affero</del><ins>Mongo</ins> General Public License", quite literally a "patch" to AGPLv3, motivated by "the <del>Google</del><ins>Amazon</ins> problem", to close [the since-rechristened "<del>ASP</del><ins>SaaS</ins> Loophole"](http://lists.opensource.org/pipermail/license-review_lists.opensource.org/2018-October/003603.html), precisely for this use case.  That was the [Server Side Public License](https://writing.kemitchell.com/tags/sspl).

[Here's Mongo's then-CTO](http://lists.opensource.org/pipermail/license-review_lists.opensource.org/2018-October/003672.html) in an e-mail to OSI's license-review list, repeating my mistake of believing that list to be the quasi-court of an orderly, technocratic tradition for applying the Open Source Definition, consistent with past practice:

> We think it is time for an extension of copyleft.
>
> I think we can all agree that the GPL is not intended to be used by proprietary libraries.  When you link to a GPL'd library, copyleft applies to your entire program.  This is how many people today understand the applicability of the GPL.  This made a lot of sense 30 years ago, when GPL was first written, and has been beneficial to the community.  In the modern era, however, very few programs are actually linked, in the sense of a programmatic link at build or compile time.  <mark>Most modern applications are constructed by combining components as services which talk over the network via structured APIs.</mark>  So we believe that the nature of the copyleft must evolve for the modern world.  In the SSPL, we believe the concept of copyleft ought to apply to the pieces that make the original program run, but not everything else that touches it.

Program is to library as platform is to service as application is to component.  But this time, we got stuck at the part where SSPL becomes the Mongo Lesser General Public License, Version 4.

## Precedent

The Open Source Initiative approved AGPLv3.  It was not a pretty process.  The true nature of their "definition" meant it couldn't be.  The very same vague principle---not discriminating against "fields of endeavor"---was the bludgeon both sides ended up down on the floor wrestling over.  On the one hand, [vague generality](https://opensource.org/osd#fields-of-endeavor):

> The license must not restrict anyone from making use of the program in a specific field of endeavor.

On the other hand, stark facts: All copyleft licenses intentionally discriminate against proprietary software development, and the Open Source Initiative has approved every one the Free Software Foundation ever put out.  It has also approved copyleft licenses [even](https://opensource.org/license/osl-3-0-php/) [stronger](https://opensource.org/license/rpl-1-5/) [than](https://opensource.org/license/cal-1-0/) FSF's in different respects.

There are ways you are _not_ allowed to use code under these OSI-approved licenses: to make and deliver proprietary software.  "Deliver" in the sense most commercially relevant at the time of their drafting.  But the "Open Source Definition" nowhere says that a license can do that.  Even though the [Debian Free Software Guidelines](https://www.debian.org/social_contract#guidelines), from which the Open Source Definition was hastily forked, lists GPL as the first example of a conforming license, and GPLv2 was on the inaugural list of OSI-approveds.

An irregular drip of feedback wondering how GPL meets the criteria started immediately, and has continued since.  It's been pilfering hours off well meaning devs for decades now, like a rare but transitory communicable brain disease.

## Policy

Facing the [paradox of tolerance](https://en.wikipedia.org/wiki/Paradox_of_tolerance), the Open Source Initiative originally took the path that acknowledges the right to promote and advance openness by defending against closure.  It approved innovating copyleft licenses from companies, not just the FSF.  Until incumbent proprietary software companies hired managers who'd taken "open" tactics course in business school, pled change of heart, sponsored all the conferences, joined all the foundations, and showered small dollars from commanding heights.  Until the Server Side Public License called them a problem again.  When you've got the Big Five, who needs five hundred startups?

Without collective support, free- and open-allied companies, especially small, upstart ones, are born into a harsh world weak and defenseless.  Or they're simply never born at all.  The price of allegiance is crippling.

Free therefore loses out on the contributions a whole apparatus and infrastructure of collective commercial organization could bring to new, differentiating, competitive software---stuff that "free" has that proprietary doesn't, like back when Free Software first took off.  That leaves academics, hobbyists, and nonprofits to carry Team Fropen to improbable victory.  Meanwhile, Team Proprietary fields a full team, including commercial behemoths, gorged on all the permissive they can eat, who outsize, outspend, and out-lobby all of movement FOSS combined, on an effectively permanent [power play](https://en.wikipedia.org/wiki/Power_play).  Given time, the only plausible upset here is a face-saving semantic adjustment to acceptable meanings of "victory".

Left on their own, without the support of institutions that have stopped making big moves generally or turned programmatically anti-commercial, the companies "exploring new business models and meeting new challenges"---marketing software tools, components, and management systems in the 2020s---were forced to circle wagons on a barren plain, surrounded by hills.  They've been forced confront the political reality of foundations and supposed "definitions": not as described, in operation or claimed power.

I don't see these companies trying to change the definition of "open source".  I see them realizing that "open source" isn't _defined_, by OSI or any other institution.  I see them realizing, from experience, sometimes quite despite their own prior beliefs, that they don't need OSI approval to reach users, distribute their software, or reap the benefits of open, marketing-wise or otherwise.  Even if they don't call themselves "open", their fans will.  Even if they went and got "the license may prohibit use in software that is not open-source" and an ASCII-art [Karl Popper](https://en.wikipedia.org/wiki/Karl_Popper) tacked onto OSI's "definition", it wouldn't stop their critics from deriding them as "fauxpen".

I do see the activist wing of free and open falling ever further behind the state of major-league competitive play.  I do see the sad combinatorics of "license compatibility" stymying reuse across for-profit and meh-profit allies.

Divide and fall.
