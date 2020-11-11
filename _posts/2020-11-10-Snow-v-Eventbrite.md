---
title: You Have to Build a Time Machine
description: Eventbrite falls into the terms of service trap
tags:
- Contracts
- Terms of Service
---

It's an occupational hazard of my line of work that I have to read court cases that make me really, really nervous.  So it goes with [_Snow v. Eventbrite_, case number 3:20-cv-03698-WHO in the Northern District of California](https://www.courtlistener.com/docket/17223027/snow-v-eventbrite-inc/).  It's a tech lawyer's recurring nightmare.  You write some strong, protective terms of service to protect your client.  But your client doesn't do what it takes to make those terms actually work for them.

Sherri Snow says she bought some tickets through Eventbrite.  When the events got cancelled or put off due to COVID-19, Sherri says Eventbrite wouldn't process her refunds.  She sued.

Eventbrite responded by trying to drag her out of public court and into private arbitration, based on a clause in its website terms of service that requires arbitration.  But in October of this year, the court denied Eventbrite's move, despite quoting the arbitration clause in full.  Why?  "Eventbrite has not met its burden of showing that the plaintiffs assented to the [terms of service] in the first place."

In other words: Eventbrite had terms of service that required arbitration, but the court wasn't convinced Sherri ever agreed to them.

The court's written opinion includes a lot of details about how folks sign up for Eventbrite: on the web, on mobile, and so on.  It reproduces screenshots of Eventbrite's sign-up pages at different points in time, complete with form fields, buttons, and links to the terms of service.  There's even a nice capsule summary of the rules of evolving law about "browse-wrap", "click-wrap", and "sign-in-wrap" agreements.  Those rules didn't end up mattering.

Problem was, Eventbrite couldn't show for sure what Sherri actually saw when she signed up and bought her tickets.  They didn't have a rigorous record, specific to Sherri's account, showing when she signed up, how she signed up, what the sign-up form looked like at the time, or what the terms of service said.  Instead, they tried to deduce, based on various inexact records of changes to their site, what the relevant parts of their UI would have looked like, and how they would have worked.  In trying to reproduce the mobile sign-up experience, they ran into a still bigger snag: They couldn't actually get pre-2019 versions of their mobile app to run in 2020.  If it happened to be mobile, they couldn't provide so much as a screenshot.

The court called the various statements Eventbrite did make about what Sherri saw on their site "contradictory" and "misleading".  By Hanlon's Razor, I have to suspect Eventbrite probably wasn't concocting artful lies, but simply didn't keep the records to know for sure, and therefore flubbed it.  They did manage to show the court some screenshots of UI the court had to agree _would_ establish their terms of service as legally binding, but they never provided strong, consistent evidence to show that was actually the UI Sherri saw.

We've seen in other cases that courts really don't like enforcing arbitration clauses in website terms of service, and look for reasons to say those terms don't apply.  This court found plenty.

Here, more or less, is what I tell my clients to do when I provide terms of service:

- Track your terms of service page content in Git and automate deployment.  Git automatically saves metadata about date and time of each change.  Don't trash your Git history.  If you start your site from scratch in a new repository, don't delete the old one.

- Call the terms of service page something predictable and familiar, like "legal terms", "terms of use", or "terms of service".  Don't get clever.  Run with the herd.

- Link to your terms of service page from the bottom of every page of your website.  It's okay to link to other pages down there, and not just "legal" pages like your privacy and DMCA policies.  But don't make the terms link tiny or use colors or graphics to deemphasize it.  The page has to be easy to find.

- Add a check box to your sign-up form specifically for accepting the terms of service.  Make sure each user has to tap or click something specifically and only about accepting terms of service to get an account.  Make the text next to that clickable, tapable thing a clear link to the terms of service page.  Again, no font funny business.

- Record the deployment commit hash or terms version number in the database record for the account sign-up.  Back up and archive those records.  Don't delete or overwrite them. Store them separately from your main application database if you prefer.

In short: Pretend you're DocuSign, and make sure you record and save all the records needed to show that users agreed to your terms, what terms they agreed to, and what they saw and did to show that agreement.  Once you make those records, don't lose them.  Keep them forever.  It could be years before someone makes a legal move.  When that happens, you need to be able to pull the name or e-mail address, find their record, and travel back in time to how your service looked when they took action to show they agreed to your terms.

Even all of this is no guarantee.  American courts remain very skeptical about enforcing these kinds of terms, especially when they include important terms that affect the _process_ of holding companies accountable, like arbitration clauses, limits on liability, terms to prevent class actions, and requirements to take legal action in the cities and states where the company, rather than the user, is based.

Reluctant, I think, is how they should be.  Fundamentally, we're talking about terms that one side writes and the other doesn't read.  The default rules under our laws aren't such that responsible webmasters can really do without terms of service.  People don't want to take big legal risk offering information or services on the Web, especially for free.  But the opposite extreme, of letting webmasters set literally whatever rules they can think up, doesn't strike any better balance.  For now, the legal answer is that we have to take steps to put our web visitors on notice that they're agreeing to terms we made up, and likely to one-sided terms they wouldn't like, if they ever bothered to read and understand them.
