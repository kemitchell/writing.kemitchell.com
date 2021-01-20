---
title: Hit Piece
description: OSI takes a swing, misses, and makes a mess
tags:
- Open Source
- SSPL
---

This week, Elastic NV, the company behind Elasticsearch, [announced](https://www.elastic.co/blog/licensing-change) they would release future versions of their Elasticsearch and Kibana software under the Server Side Public License (SSPL) to [prevent Amazon](https://www.elastic.co/blog/why-license-change-AWS) from offering them as managed services on its proprietary cloud platform.  Elastic joins MongoDB, [author of SSPL](https://www.mongodb.com/licensing/server-side-public-license), in accusing AWS of unfair play and adopting new rules in response.

Also today, the Open Source Initiative released a short post pointedly entitled ["The SSPL Is Not an Open Source License"](https://opensource.org/node/1099), attempting to brand Elastic and SSPL "fauxpen source" and generally throwing as many short jabs their way as possible.  To hear OSI tell it, Elastic has "abandoned their original dedication to the open source community" by falling prey to the current "license du jour", announcing the move in a post "unironically titled 'Doubling Down on Open'", and hocking what is now a lamentably "proprietary product".

It's a hit piece.  At least if you in deep enough with the culture to recognize the slights.

Not that it matters so much.  As usual with OSI these days, I don't think Elastic (or MongoDB) will even feel it.  The folks at OSI will enjoy "taking a stand".  A few of their fellow faithful will accept the line and shun the offender, mostly on social media.  But Elastic has little to fear from being "called out" by an increasingly fractured and irrelevant institution.  It's one great, big, noisy, cliquish [`NOP`](https://en.wikipedia.org/wiki/NOP_(code)).

Alas, there is more in OSI's post.  More bad arguments.  More self-interested misinformation.  More fear, uncertainty, and doubt in response to anxiety about their self-assumed "authority".  More seeds of legal confusion.

It is not my responsibility to break the cycle of taunts and jibes.  It's not my responsibility to "fix" this dispute, or to reconcile opposing interests to some kind of amicable, kumbayah settlement.  But as I've seen over the years, it will be my responsibility to clean up the mess of misconceptions opportunistically engendered along the way.

Can we really not do better than this?

## Retreat?

OSI mentions:

> The license du jour is the Server Side Public License. This license was submitted to the Open Source Initiative for approval but later [withdrawn by the license steward](http://lists.opensource.org/pipermail/license-review_lists.opensource.org/2019-March/003989.html) when it became clear that the license would not be approved.

This is literally true.  But it begs to make exactly the wrong impression.  _Why_ did MongoDB walk away from the OSI process?  Was it because they came to understand, at the foot of OSI's wisdom, that their license wasn't open source, but a regrettable heresy?

The opposite.  From the Mongo e-mail OSI links to in quote above:

> We continue to believe that the SSPL complies with the Open Source Definition and the four essential software freedoms.

In other words, they still think it's open source and free software.  Whether OSI, or the people who hang out on OSI's mailing list, said so or not.

As I saw it, MongoDB's exit had everything to do with aborting an ill defined, occasionally abusive process than any fatal defect in the license they proposed.  Mongo seems to have come to OSI for the same reason I did, way back when, before I knew what actually goes on there. They wanted a deep, substantive conversation with the experts about how to write a license to meet a felt need, within the bounds of open source practice.

They didn't get that.  Instead, they got a bunch of people who mostly aren't lawyers denouncing them, directly or indirectly. For taking venture capital. For daring to draft license terms without consulting them. For touching the sacred text of the GPL, even though they followed the Free Software Foundation's directions for doing that.  Plus long, angry meta conversations about what the approval process was even _supposed_ to be, whether the Open Source Definition needs revision, and what, if anything, "software freedom" means or should mean to the OSI process.

Eliot Horowitz, who wrote the e-mail OSI linked to in their post, tried to strike a conciliatory note on his way out, mentioning that they "learned a lot" from discussions.  One thing they learned was that the problem they aimed to solve is real, not peculiar to MongoDB, and worth pursuing:

> We have already had several discussions with other stakeholders concerned with "SaaS capture" of innovative open source technology.  We are big believers in the importance of open source and we intend to continue to work with these parties to either refine the SSPL or develop an alternative license that addresses this issue in a way that will be accepted by the broader FOSS community.

SSPL is essentially the Affero GPL version 3.0 with the part about services strengthened to require sharing code for services that make up a service, not just libraries and snippets that make up a program.  In practice, Amazon isn't going to share source code for AWS, or even its AWS-ified version of Elastic.  They're a closed platform people use to run a lot of open software, not an open platform.  So the license in effect said "hands off" to AWS, not by saying they _couldn't_ use the code, but by saying that if they did, they'd have to share alike. Which they won't.

Why?  Because releasing that code doesn't suit Amazon's business model.  OSI doesn't mention that.  It blames Elastic's business model, which does involve publishing source for core product, instead:

> ... Elastic’s relicensing is not evidence of any failure of the open source licensing model or a gap in open source licenses. It is simply that Elastic’s current business model is inconsistent with what open source licenses are designed to do.

Remember that "gap". It's big enough to fit an Amazon Web Services through.  It's going to come up again later.

## Freedom?

OSI again:

> Fauxpen source licenses allow a user to view the source code but do not allow other highly important rights protected by the Open Source Definition, such as the right to make use of the program for any field of endeavor.  ... Elastic says that it now can "restrict cloud service providers from offering our software as a service" in violation of OSD6.

That is not what Elastic [said](https://www.elastic.co/blog/licensing-change).  They cut off the crucial bit:

> It [the change to SSPL --- KEM] also protects our continued investment in developing products that we distribute for free and in the open by restricting cloud service providers from offering Elasticsearch and Kibana as a service <mark>without contributing back</mark>. [Emphasis mine --- KEM]

[SSPL was not Commons Clause.](https://writing.kemitchell.com/2019/06/13/SSPL-Not-Commons-Clause.html)  Commons Clause just said "you can't offer this database as a cloud service".  SSPL says "sure, go ahead and offer this database as a cloud service, but make your service open source".  OSI chopped a direct quote in such a way that invites folks to confuse this point again.

If a license that says you have to contribute back can't be an open source license, because it restricts use in the "field of endeavor" of making closed source software, no copyleft license can be an open source license.  All copyleft licenses do that, in at least some situations.  But of course it's absurd to say copyleft can't be open source.  The most important open source license around when OSI started saying "open source" to anyone who would listen was the GNU General Public License, the most famous copyleft license ever.

Want to build and sell a closed application with a GPLv2 library?  Tough luck.  License violation.  Want to patch an AGPLv3 web application and sell access online without sharing your changes?  Too bad.  License violation.  Want to build a web application with a tweaked version of an Open Software License library, and keep it to yourself?  No can do.  License violation.  All of those licenses are open source.  And they were all approved by OSI.

But wait.  Want to take a copyleft-licensed database, wrap it in a provisioning interface and some management services, offer it as a cloud service, and keep all that code closed?  Actually, that's fine.  Because no copyleft license clearly covered that situation.  Not until SSPL.

That's the "gap" in existing open source license choices that SSPL addressed.

## Shafted?

One could read all of the above, take at face value, and still not really care.  Even OSI felt it necessary to include a paragraph about how they get that business is business, and sometimes licenses will change.  But that is hardly stuff to rouse the base.  We need something more personal:

> The Elastic projects were offered under the Apache license. Outside contributors donated time and energy with the understanding that their work was going towards the greater good, the public software commons. Now, instead, their contributions are embedded in a proprietary product. If they want to enjoy the fruits of their own and their co-contributors' labor, they have to agree to a proprietary license or fork.

I haven't seen anything from Elastic claiming they will somehow take away the Apache License grants for previous versions of their projects, as if they'd never been available under those terms.  I've seen the opposite: the change to SSPL is [coming in the 7.11 release, for all maintained branches going forward](https://www.elastic.co/blog/licensing-change). Code folks have already contributed as "Apache code" isn't suddenly becoming "SSPL code" and only SSPL code.  I'm not sure how they could do that, legally.

If you contributed to a past version of Elastic under Apache 2.0, I don't see any reason why you can't simply download the version you contributed to, or a more recent version released under Apache 2.0, run it, share it, and hack on it as you would any piece of permissively licensed code.  Those are the fruits of your labor---your patches and the functionality they wrought at the time.  Likewise the code that Elastic NV added after yours under the Apache License.

If you want to enjoy the fruits of more Elastic NV labor, however, that's different as of 7.11 to come.  You will need to abide by the SSPL or buy a commercial license for the new code.  If you'd prefer to put in the labor yourself, perhaps with like-minded colleagues, go right ahead, starting from any Apache-licensed release.  Perhaps you'd choose to stick with the Apache License.  Or perhaps you'd choose a different license, to keep Elastic NV from poaching your work into their SSPL "fork".  It's up to you.

There is nothing more "open" than forking.  When we see the word "fork", we tend to think irresolvable differences in technical direction.  But license-based divergence happens all the time, too. Closed, restricted, and even copyleft forks of permissively licensed projects sprout up willy-nilly, usually to little or no fanfare.

As for turning contributors' work "proprietary", think about permissively licensed software generally.  You release a developer tool under Apache 2.0.  I fork it, add enterprisey features, and sell the result to big companies without giving back.  If you didn't want your work "embedded in a proprietary product", you should have picked a copyleft license that covers the key use cases, or switched to one before releasing new and valuable work.  Exactly what Elastic is doing now.

Elastic never promised contributors that it would keep its project under the Apache License forever.  Contributors never promised to maintain the code they contributed to whenever Elastic called.  Users of the software didn't promise to send patches back to the project.  Everybody got what they got, right then and right there.  That's how open software licensing has worked to date.  No promises, just code and permission to run with it.

If you want the main line of development for an Elastic project to stay under a particular license in the future, you need to step up and do the work to beat Elastic NV and all other comers.  Maybe you've got a lot of free time.  Maybe you've got a mound of cash you want to spend on developers.  Maybe, like Amazon, you've got a business model that makes its money otherwise, and you're willing to lead with a loss to drive sales.  Make your move.

## Deception?

Last OSI quote:

> What a company may not do is claim or imply that software under a license that has not been approved by the Open Source Initiative, much less a license that does not meet the Open Source Definition, is open source software. It’s deception, plain and simple, to claim that the software has all the benefits and promises of open source when it does not.

False.

What a company may not do is claim that a license the Open Source Initiative has not approved is an "[Open Source Initiative Approved License](https://tsdr.uspto.gov/#caseNumber=78813707&caseType=SERIAL_NO&searchType=statusSearch)". That label is proprietary to the Open Source Initiative under United States federal trademark registration number 3514190.  The "Open Source" part alone is _not_ OSI property on its own, however.  Their trademark application, and a prior blog post, specifically say so, as I've pointed out [before](https://writing.kemitchell.com/2020/05/11/Open-Source-Property.html).

This is the first time I remember seeing word from OSI as an organization that all "open source" licenses have to be approved by them.  OSI's own policies on "license proliferation"---discouraging creation of new open source licenses that are functionally equivalent to existing ones---have long recognized a distinction.  So have other concerns, like drafting quality, that led OSI to say, in effect, "it's open source, but we don't approve it".  Meanwhile, there are oodles of open source licenses out there that OSI simply never gotten around to approving.  Blue Oak Council's [list of permissive licenses](https://blueoakcouncil.org/list) names many of them, which are also identified by [SPDX](https://spdx.org).

The bit about deception isn't new.  There are laws against misleading people in business, and not just against infringing trademarks in business.  But claiming that a company calling its software "open source" when its license wasn't specifically approved by the Open Source Initiative is false or misleading doesn't make any sense, unless you also assume that OSI gets to define "open source" in court, and define it in terms of its own approval.

A court might certainly welcome publications from OSI as _evidence_ in a legal fight about whether "open source" was used in a way that was clearly misleading.  But I don't see why it would ever stop there, and ignore other evidence of competing usages, usage disputes, and definitional controversies.  OSI has no _authority_ to impose a definition on the legal system, much less case-specific, motivated interpretations of that vague definition in oddly specific ways.

The competition-law language is a kind of fallback.  Ask a lawyer how to get the control of the phrase "open source", and they will tell you to register a United States trademark.  But OSI tried, failed, and cannot register that trademark, because "open source" is a plain and intuitive description of software whose source is open to review, and the law does not permit snatching bits of English out of the common language as trademarks when there is quite literally ongoing, public controversy about meaning and control.

Organizations that hold themselves out as sources of free legal guidance for those who can't afford lawyers shouldn't perpetuate delusions of their own legal grandeur.  No organization should.  I have yet to see OSI back its theory that it can control "open source" via unfair competition claims with legal argument or authority.  I know for a fact they have just the talent to do that job on their board, if they really saw it that way.