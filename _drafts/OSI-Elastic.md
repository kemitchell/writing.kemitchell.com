---
title: 
---

This week, Elastic NV, the company behind Elasticsearch, [announced](https://www.elastic.co/blog/licensing-change) they would make future work available under the Server-Side Public License (SSPL) to [prevent Amazon](https://www.elastic.co/blog/why-license-change-AWS) from offering it as a managed service on its proprietary cloud platform.  Elastic joins MongoDB, [author of SSPL](https://www.mongodb.com/licensing/server-side-public-license), in accusing AWS of unfair play and adopting new license terms to stop it.

Also today, the Open Source Initiative released a short post pointedly entitled ["The SSPL Is Not an Open Source License"](https://opensource.org/node/1099), attempting to brand Elastic and SSPL "fauxpen source" and generally throwing as many jabs as possible.  To hear OSI tell it, Elastic has "abandoned their original dedication to the open source community" by falling prey to the "license du jour", making its views known in a post "unironically titled 'Doubling Down on Open'", and hocking what is now a lamentably "proprietary product".

It's a hit piece.

As usual with OSI these days, I don't think Elastic (or MongoDB) will really feel the blow.  The folks at OSI will feel a much greater rush for "taking a stand" than Elastic will feel pain for being "called out" by an increasingly fractured and irrelevant institution.  But the OSI's post included some bad arguments, as well as what I see as self-interested misinformation.

I'm going to talk about that.

## Retreat?

OSI mentions:

> The license du jour is the Server Side Public License. This license was submitted to the Open Source Initiative for approval but later [withdrawn by the license steward](http://lists.opensource.org/pipermail/license-review_lists.opensource.org/2019-March/003989.html) when it became clear that the license would not be approved.

This is literally true.  But it begs to make exactly the wrong impression.  _Why_ did MongoDB walk away from the OSI process?  Was it because they came to understand, at the foot of OSI's wisdom, that their license wasn't open source, but a regrettable heresy?

The opposite.

As I saw it, MongoDB's exit had everything to do with aborting a poorly defined, poorly managed, borderline abusive process than any fatal defect in the license they proposed.  Mongo seems to have come to OSI for the same reason I did, way back when, before I knew what actually goes on there.  They wanted a deep, substantive conversation with the experts about how to write a license to meet an their needs within the bounds of open source practice.

They didn't get that.  Instead, they got a bunch of people who mostly aren't lawyers denouncing them, directly or indirectly. For taking venture capital. For daring to write license terms without consulting them. For touching the sacred text of the GPL, even though they followed the Free Software Foundation's directions for doing that.  Plus long, angry meta conversations about what the approval process was even _supposed_ to be about, whether the Open Source Definition needs revision, and what, if anything, "software freedom" means or should mean to the OSI process.

Eliot Horowitz, who wrote the linked e-mail to OSI's mailing list, tried to strike a conciliatory note on his way out, mentioning that they "learned a lot" from discussions.  One thing they learned was that the problem they aimed to solve is real, not peculiar to MongoDB, and worth pursuing:

> We have already had several discussions with other stakeholders concerned with "SaaS capture" of innovative open source technology.  We are big believers in the importance of open source and we intend to continue to work with these parties to either refine the SSPL or develop an alternative license that addresses this issue in a way that will be accepted by the broader FOSS community.

SSPL is essentially the Affero GPL version 3.0 with the part about services strengthened to require sharing code for services that make up one service, not just libraries and snippets that make up one program.  In practice, Amazon isn't going to share source code for AWS, or even its AWS-ified version of Elastic.  They're a closed platform people use to run a lot of open software, not an open platform.  So the license in effect said "hands off" to AWS, not by saying they _couldn't_ use the code, but by saying that if they did, they'd have to share.  Which they won't.

This is how copyleft works, and copyleft is very much "open source".  MongoDB wanted a straightforward maintenance update to copyleft so it would work with service composition, and not just the copy-and-link-style "linking" and copying that built most software circa 1991.  Thus, in parting:

> We continue to believe that the SSPL complies with the Open Source Definition and the four essential software freedoms.

In other words, they still think it's open source and free software.  Whether OSI, or the people who hang out on OSI's mailing list, said so or not.

## Freedom?

OSI again:

> Fauxpen source licenses allow a user to view the source code but do not allow other highly important rights protected by the Open Source Definition, such as the right to make use of the program for any field of endeavor.  ... Elastic says that it now can "restrict cloud service providers from offering our software as a service" in violation of OSD6.

That is not what Elastic [said](https://www.elastic.co/blog/licensing-change).  They left out the most important bit:

> It [the change to SSPL --- KEM] also protects our continued investment in developing products that we distribute for free and in the open by restricting cloud service providers from offering Elasticsearch and Kibana as a service <mark>without contributing back</mark>. [Emphasis mine --- KEM]

If a license that says you have to contribute back can't be an open source license, because it restricts use in the "field of endeavor" of making closed software, no copyleft license can be an open source license.  They all do that, in at least some situations.  But of course that's absurd.  The most important "open source" license around when OSI started saying that was GPLv2.

Want to build and sell a closed application with a GPLv2 library?  Tough luck.  License violation.  Want to patch an AGPLv3 web application and sell access online without sharing your changes?  Too bad.  License violation.  Want to build a web application with a tweaked version of an Open Software License library, and keep it to yourself?  No can do.  License violation.  And all of those licenses are open source.  They were all approved by OSI.

But wait.  Want to take a copyleft-licensed database, wrap it in a provisioning interface with some monitoring services, offer it as a cloud service, and keep all that code to yourself?  Actually, that was fine.  Because no copyleft license clearly covered that situation.  Not until SSPL.

[SSPL was not Commons Clause.](https://writing.kemitchell.com/2019/06/13/SSPL-Not-Commons-Clause.html)  Commons Clause just said "you can't offer this database as a cloud service".  SSPL says "sure, go ahead and offer this database as a cloud service, but make it open source".  OSI literally chopped a direct quote to help folks confuse that point again.

## Shafted?

OSI:

> The Elastic projects were offered under the Apache license. Outside contributors donated time and energy with the understanding that their work was going towards the greater good, the public software commons. Now, instead, their contributions are embedded in a proprietary product. If they want to enjoy the fruits of their own and their co-contributors' labor, they have to agree to a proprietary license or fork.

I haven't seen anything from Elastic claiming they will somehow take away the Apache License grants for previous versions of their projects, as if they'd never been available under those terms.  I've seen the opposite: the change to SSPL is [coming in the 7.11 release, for all maintained branches going forward](https://www.elastic.co/blog/licensing-change). Code folks have already contributed as "Apache code" isn't suddenly becoming "SSPL code" and only SSPL code.  I'm not sure how they could do that, legally.

If you contributed to a past version of Elastic under Apache 2.0, I don't see any reason why you can't simply download the version you contributed to, or a more recent version released under Apache 2.0, run it, share it, and hack on it as you usually would.  Those are the fruits of your labor---your patches and the functionality they wrought at the time.  Likewise the code that Elastic NV added after yours under the Apache License.

If you want to enjoy the fruits of more _Elastic NV_ labor in the future, however, that's different as of 7.11 to come.  You will need to abide by the SSPL or buy a commercial license, from that point forward.  If you'd prefer to put in the labor yourself, perhaps with like-minded colleagues, go right ahead, starting from an earlier version.  Perhaps you'd choose to stick with the Apache License.  Or perhaps you'd choose a different license, to keep Elastic NV from poaching your work.  It's up to you.

There is nothing more "open" than forking.  When we see the word "fork", we tend to think of differences in technical direction.  But license-based divergence happens all the time, too, with closed, restricted, and even copyleft forks of permissively licensed projects sprouting up all the time, often to little fanfare.

You release a developer tool under Apache 2.0.  I fork it, add enterprisey features, and sell the result to big companies without giving back.  You release a library under MIT.  I use it to build a closed SaaS solution available by subscription.  If you didn't want your work "embedded in a proprietary product", your choice was clear: pick a copyleft license.  Which is exactly what Elastic is getting around to now.

No open source license I'm aware of comes with any promise that the developer will maintain or further develop it, much less under any particular terms.  There are no SLAs, no update obligations, no warranty periods to be found in them.  Elastic never promised contributors that it would keep its project under the Apache License forever.  Contributors never promised to maintain the code they contributed to Elastic whenever called.  Users of the software didn't promise to send their patches back to the project.  You got what you got, here and now.  That's the way opening software has always worked.

Another thing stays the same.  If you want the main line of development for an Elastic project to stay under a particular license, you need to step up and do the work to beat out Elastic NV and all other comers, or recruit developers to do so.  Maybe you've got a lot of free time.  Maybe you've got a mound of cash you want to spend.  Maybe, like Amazon, you've got a business model that gets paid otherwise, and you're willing to lead with a loss to drive sales. Make your move.

## Deception?

Last OSI quote:

> What a company may not do is claim or imply that software under a license that has not been approved by the Open Source Initiative, much less a license that does not meet the Open Source Definition, is open source software. It’s deception, plain and simple, to claim that the software has all the benefits and promises of open source when it does not.

False.  What a company may not do is claim that a license the Open Source Initiative has not approved is an "[Open Source Initiative Approved License](https://tsdr.uspto.gov/#caseNumber=78813707&caseType=SERIAL_NO&searchType=statusSearch)". That label is proprietary to the Open Source Initiative under United States federal trademark registration number 3514190.  The "Open Source" part is _not_ OSI property on its own, however.  Their trademark application, and their own blog, specifically say so, as I've pointed out [before](https://writing.kemitchell.com/2020/05/11/Open-Source-Property.html).

The bit about deception ain't new, either.  There are laws against misleading people in business, and not just against infringing other people's trademarks.  But claiming that a company calling its software "open source" when its license wasn't approved by the Open Source Initiative is automatically false or misleading doesn't make any sense, unless you also assume that OSI gets to define "open source" in court.  A court would certainly welcome word from OSI as _evidence_ in a legal fight about what "open source" means.  But I don't see why it wouldn't look elsewhere, too.

Companies have called their work open source without OSI approval, and continue to do so, much to OSI's chagrin.  Lately, the OSI board has brandished unfair competition and other kinds of very general legal claims, as ways to try to protect what they _present_ as their legal right to control use of the phrase "open source".  It's a kind of fallback.  Ask a lawyer how to get the control OSI wants, they will tell you to register a trademark.  But OSI can't register the trademark, because "open source" is a plain and intuitive description of software whose source you can see, and the law does not permit snatching bits of English out of the common language as trademarks when there is quite literally ongoing, public controversy about meaning and control in the marketplace.

Organizations that hold themselves out as sources of free legal guidance for those who can't afford lawyers shouldn't mislead about their own legal power.  No organization should.  I have yet to see OSI back its theory that it can control "open source" via unfair competition claims with legal argument or authority.  I know for a fact they have just the talent to do the job on the board, if they really saw it that way.