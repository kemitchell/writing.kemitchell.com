---
title: Righteous, Expedient, Wrong
description: OSI swings at Elastic, misses, and leaves a mess
tags:
- Open Source
- SSPL
---

Yesterday, Elastic NV, the company behind Elasticsearch, [announced](https://www.elastic.co/blog/licensing-change) they would release future versions of their Elasticsearch and Kibana software under the Server Side Public License (SSPL) to [prevent Amazon](https://www.elastic.co/blog/why-license-change-AWS) from offering them as managed services on its proprietary cloud platform.  Elastic joins MongoDB, [originator of SSPL](https://www.mongodb.com/licensing/server-side-public-license), in accusing AWS of unfair play and adopting defensive license terms.

The same day, the Open Source Initiative released a short post pointedly entitled ["The SSPL Is Not an Open Source License"](https://opensource.org/node/1099), attempting to brand Elastic and SSPL "fauxpen source" and generally throwing as many short jabs their way as possible.  To hear OSI tell it, Elastic has "abandoned their original dedication to the open source community" by falling prey to the current "license du jour", announcing the move in a post "unironically titled 'Doubling Down on Open'", and hocking what is now a lamentably "proprietary product".

It's a hit piece.

Not that it matters so much.  As usual with OSI these days, I don't think either Elastic or Mongo will feel a thing.  The folks at OSI will enjoy "taking a stand".  A few of their faithful will accept the line and shun the offender, mostly by saying mean things on social media somewhere.  But Elastic has little to fear from being "called out" by an increasingly fractured and irrelevant institution.  It's one great, big, noisy, cliquish [`NOP`](https://en.wikipedia.org/wiki/NOP_(code)).

Or it would be.  Alas, there is more in OSI's post.  More bad arguments.  More self-serving misinformation.  More fear, uncertainty, and doubt in response to anxiety about their self-bestowed "authority".  More seeds of confusion.

It is not my responsibility to break the cycle of taunts and jibes between cloud companies, database companies, and their vassals.  It's not my responsibility to "fix" copyleft for the cloud, or to reconcile opposing interests to some kind of amicable, Kumbayah settlement.  But as I've seen over the years, it will be my responsibility to clean up the mess of misconceptions opportunistically engendered for dubious tactical points along the way.

I'd rather not.

## Retreat?

OSI mentions:

> The [fauxpen source] license du jour is the Server Side Public License. This license was submitted to the Open Source Initiative for approval but later [withdrawn by the license steward](http://lists.opensource.org/pipermail/license-review_lists.opensource.org/2019-March/003989.html) when it became clear that the license would not be approved.

This is literally true.  But it begs to leave exactly the wrong impression.  _Why_ did MongoDB walk away from the OSI process?  Was it because they came to understand, at the foot of OSI's wisdom, that their license wasn't open source, but a regrettable heresy?

Nope.  From the Mongo e-mail OSI links to in quote above:

> We continue to believe that the SSPL complies with the Open Source Definition and the four essential software freedoms.

In other words, they still think it's open source and free software.  Whether OSI, or the people who hang out on OSI mailing lists, say so or not.

As I saw it, MongoDB's exit had everything to do with aborting an ill defined, disorderly, borderline abusive process than any fatal defect in the license they proposed.  Mongo seems to have come to OSI for the same reason I did, way back when, before I knew what actually goes on there. They wanted a deep, substantive conversation with the experts about how to write a license to meet a broadly felt need, within the bounds of open source practice.

Instead, they got a bunch of people who mostly aren't lawyers denouncing them, directly or indirectly.  One after another they appeared on the list, some subscribing just for the purpose, to be seen throwing their tomato, scoffing, and scorning at the company in the stocks.  For taking venture capital. For daring to draft license terms without them. For defiling the sacred text of the GPL, even though they followed FSF's directions for doing so.  Plus long, angry meta conversations about what the approval process was even _supposed_ to be, what the criteria were, whether the Open Source Definition needs revision, and what, if anything, "software freedom" is doing in OSI Land, as opposed to the FSF licensing lab.

Eliot Horowitz, appearing for Mongo, tried to strike a conciliatory note on his way out.  He mentioned that they'd "learned a lot" from discussions.  One thing they learned was that the problem they aimed to solve is real, not peculiar to MongoDB, and worth pursuing:

> We have already had several discussions with other stakeholders concerned with "SaaS capture" of innovative open source technology.  We are big believers in the importance of open source and we intend to continue to work with these parties to either refine the SSPL or develop an alternative license that addresses this issue in a way that will be accepted by the broader FOSS community.

SSPL, a response to the "Amazon problem", is essentially the Affero GPL version 3.0, a response to the "Google problem", with the part about services strengthened. SSPL requires sharing code for all the bits that make up a networked service, not just libraries and snippets that make up a compiled or interpreted program.

In practice, Amazon isn't going to share source code for AWS, or even its AWS-ified version of Elasticsearch.  They're a closed platform people use to run a lot of open software, not an open source platform.  So the license in effect said "hands off" to AWS, not by saying they _couldn't_ use the code, but by saying that if they did, they'd have to share alike. Which they won't.

Why?  Because releasing that code ain't in Amazon's business model.

OSI doesn't mention that.  It blames Elastic's business model, which does involve publishing source code for core product, instead:

> ... Elastic’s relicensing is not evidence of any failure of the open source licensing model or a gap in open source licenses. It is simply that Elastic’s current business model is inconsistent with what open source licenses are designed to do.

Remember that "gap". It's big enough to fit a cloud through, and it's going to come up again later.

## Freedom?

OSI again:

> Fauxpen source licenses allow a user to view the source code but do not allow other highly important rights protected by the Open Source Definition, such as the right to make use of the program for any field of endeavor.  ... Elastic says that it now can "restrict cloud service providers from offering our software as a service" in violation of OSD6.

That is not what Elastic [said](https://www.elastic.co/blog/licensing-change).  They cut off the crucial bit, highlighted below:

> It [the change to SSPL --- KEM] also protects our continued investment in developing products that we distribute for free and in the open by restricting cloud service providers from offering Elasticsearch and Kibana as a service <mark>without contributing back</mark>.

[SSPL was not Commons Clause.](https://writing.kemitchell.com/2019/06/13/SSPL-Not-Commons-Clause.html)  Commons Clause just said "you can't offer this database as a cloud service".  SSPL says "sure, go ahead and offer this database as a cloud service, but make your service open source".  OSI chopped a direct quote in such a way that invites folks to confuse this again.  Because it's a heck of a lot easier to say Commons Clause isn't open source than SSPL isn't.

If a license that says you have to contribute back can't be an open source license, because it restricts use in the "field of endeavor" of making closed source software, no copyleft license can be an open source license.  All copyleft licenses do that, in at least some situations.  Even the so-called "weak" ones.

But of course it's absurd to say copyleft can't be open source.  The most important open source license around when OSI started saying "open source" to anyone who would listen was the GNU General Public License, the most famous copyleft license ever.

Want to build and sell a closed application with a GPLv2 library?  Tough luck.  License violation.  Want to patch an AGPLv3 web application and sell access online without sharing your changes?  Too bad.  License violation.  Want to build a web application with a tweaked version of an Open Software License library, and keep it to yourself?  No can do.  License violation.  All of those licenses are open source.  And they were all approved by OSI.

But wait.  Want to take a copyleft-licensed database, wrap it in a thin provisioning interface and some management services, offer it as a cloud service, and keep all your code closed?  Actually, that's fine.  Because no OSI-approved license clearly covers that situation.  All the approved copyleft licenses speak specifically in terms of older methods of software combination, like linking, or legal technicalities, like copyright "derivative works".

That's the "gap" in existing open source license choices that SSPL addresses.  Quibble with the implementation details if you like, the drafting, the choice to start from AGPL.  There are no big, new ideas in SSPL, just extrapolations of well established open source fundamentals along known trends.

## Shafted?

One could read all of the above as a developer, take at face value, and still not really care.  Even OSI felt it necessary to include a paragraph about how they get that business is business, and sometimes licenses will change.  But that is hardly stuff to rouse the base.  We need something more personal:

> The Elastic projects were offered under the Apache license. Outside contributors donated time and energy with the understanding that their work was going towards the greater good, the public software commons. Now, instead, their contributions are embedded in a proprietary product. If they want to enjoy the fruits of their own and their co-contributors' labor, they have to agree to a proprietary license or fork.

I haven't seen anything from Elastic claiming they will somehow take away the Apache License grants for previous versions of their projects, as if they'd never been available under those terms.  I've seen the opposite: the change to SSPL is [coming in the 7.11 release, for all maintained branches going forward](https://www.elastic.co/blog/licensing-change). Code folks have already contributed as "Apache code" isn't suddenly becoming "SSPL code" and only SSPL code.  I'm not sure how they could do that, legally.  Nobody's talking license revocation here, as far as I've seen.

If you contributed to a past version of Elastic under Apache 2.0, I don't see any reason why you can't simply download the version you contributed to, or a more recent version released under Apache 2.0, run it, share it, and hack on it as you would any permissively licensed code.  Those are the fruits of your labor---your patches and the functionality they wrought at the time.  Likewise the code that Elastic NV added after yours under the Apache License.

If you want to enjoy the fruits of more Elastic NV labor, however, that's different as of 7.11 to come.  You will need to abide by the SSPL for the new code.  If you'd prefer to put in the labor yourself, perhaps with like-minded colleagues, go right ahead, starting from any Apache-licensed release.  Perhaps you'd stick with the Apache License.  Or perhaps you'd choose a different license, to keep Elastic NV from poaching your work into their SSPL "fork".  It's up to you.

There is nothing more "open" than forking.  When we see the word "fork", we tend to think irresolvable differences in technical direction.  But license-based divergence happens all the time, too. Closed, restricted, and even copyleft forks of permissively licensed projects sprout up willy-nilly, usually to little or no fanfare.

As for turning contributors' work "proprietary", think about permissively licensed software generally.  You release a developer tool under Apache 2.0.  I fork it, add enterprisey features, and sell the result to big companies without giving back.  If you didn't want your work "embedded in a proprietary product", you should have picked a copyleft license that covered the key use cases, or switched to one before releasing new and valuable features or fixes.  Exactly what Elastic is doing now.

Elastic never promised contributors that it would keep its project under the Apache License forever, only that what it did release under the Apache License would remain available under that license.  Contributors never promised to maintain the code they contributed to whenever Elastic called.  Users of the software didn't promise to send patches back to the project.  Everybody got what they got and gave what they gave, right then and there.  That's how standardized open software licensing has always worked to date.  No promises, no service-level agreements, no warranty periods or contractually mandated update schedules, just code and permission to run with it.

If you want the main line of development for Elasticsearch to stay under a particular license in the future, step up, clone the Apache code, rename to avoid trademarks, and do the work to beat Elastic NV and any other comers.  Maybe you've got a lot of free time.  Maybe you've got a mound of cash you want to spend on developers.  Maybe, like Amazon, you've got a business model that makes its money otherwise, and you're willing to lead with a loss to drive sales.  Make your move.

## Deception?

Last OSI quote:

> What a company may not do is claim or imply that software under a license that has not been approved by the Open Source Initiative, much less a license that does not meet the Open Source Definition, is open source software. It’s deception, plain and simple, to claim that the software has all the benefits and promises of open source when it does not.

False.

What a company may not do is claim that a license the Open Source Initiative has not approved is an "[Open Source Initiative Approved License](https://tsdr.uspto.gov/#caseNumber=78813707&caseType=SERIAL_NO&searchType=statusSearch)". That label is proprietary to the Open Source Initiative under United States federal trademark registration number 3514190.  The "Open Source" part alone is _not_ OSI property on its own, however.  Their trademark application, and a prior blog post, specifically say so, as I've pointed out [before](https://writing.kemitchell.com/2020/05/11/Open-Source-Property.html).

This is the first time I remember seeing word from OSI as an organization that all "open source" licenses have to be approved.  OSI's own policies on "license proliferation"---discouraging creation of new open source licenses that are functionally equivalent to existing ones---have long recognized a difference.  So have other concerns, like drafting quality, that led OSI to say, in effect, "it's open source, but we don't approve it".  Meanwhile, there are oodles of open source licenses out there that OSI never got around to even considering for approval.  Blue Oak Council's [list of permissive licenses](https://blueoakcouncil.org/list) names many of them, which are also identified by [SPDX](https://spdx.org).

The bit about deception _isn't_ new.

It's true there are laws against misleading people in business, and not just against infringing trademarks.  But claiming that a company calling its software "open source" when its license wasn't specifically approved by the Open Source Initiative is false or misleading doesn't make any sense.  Unless you assume OSI gets to define "open source" in court, and to define it in terms of its own approval. Somehow.

A court might welcome publications from OSI as _evidence_ in a legal fight about whether "open source" was used in a way that was clearly misleading.  But I don't see why it would ever stop there, ignoring other evidence of plain meaning, common usages, political disputes, and definitional controversies.  OSI has no _authority_ to impose a definition on the legal system, much less case-specific, motivated interpretations of that vague definition in oddly specific ways.  The less clear the meaning, the harder to prove anyone was expecting something else, quite specifically.

Ask a lawyer how to get the control of the phrase "open source" in commerce, they will tell you to register a United States trademark.  Less than $300 and an hour online.  But OSI tried to, failed to, and cannot now register that trademark, because "open source" is a plain and intuitive description of software whose source is open to review, and the law does not permit snatching bits of English out of the common language as trademarks when there is ongoing, public controversy and confusion about meaning and control.

Ask a lawyer what to do from there, and they'll ask about unfair competition claims.  As a kind of legal fallback.  Complaints, the legal documents people file to start lawsuits, include both all the time.  If the relatively hard-and-fast trademark claim fails, the comparatively fuzzy legal standards for the competition claims can keep the lawsuit alive, and convince the other side to settle with a promise to stop saying what you don't want them to say.

I have yet to see OSI back its theory that it can control "open source" via unfair competition claims with legal argument or citations, just vague threats.  I have yet to find precedents to support those threats, when I find time to go looking.  I know for a fact OSI has access to talent that might know better, if indeed there's anything behind this.  But from where I'm standing, I'd bet they see more to gain from uncertainty.
