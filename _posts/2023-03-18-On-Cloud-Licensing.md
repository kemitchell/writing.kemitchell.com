---
date: 2023-03-18T11:31:18-07:00
title: On-Cloud Licensing
description: the wheel of software delivery keeps on turning
doublewide: true
tags:
- Business
- Contracts
- Software
- Licenses
- SaaS
---

Noticeable Trend: B2B software-service sales are coming back around from SaaS toward licensing again.

<table class=borders>
  <thead>
    <tr>
      <th>Era</th>
      <th>Development Target</th>
      <th>Base Abstraction</th>
      <th>Management</th>
      <th>Hosting</th>
      <th colspan=2>Buzzwords</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1990s</td>
      <td rowspan=2>Machine / “Core"</td>
      <td rowspan=2>Windows or POSIX UNIX, later Linux</td>
      <td>Vendor</td>
      <td>Vendor</td>
      <td colspan=2><abbr title="Application Service Provider">ASP</abbr></td>
    </tr>
    <tr>
      <td>2000s</td>
      <td>Customer</td>
      <td>Customer</td>
      <td><abbr title="On-Premises Licensing">On-Prem</abbr></td>
      <td rowspan=2>Hybrid SaaS</td>
    </tr>
    <tr>
      <td>2010s</td>
      <td rowspan=3>Platform as a Service (AWS, later GCP and Azure)</td>
      <td rowspan=2>Platform-Specific APIs</td>
      <td>Vendor</td>
      <td>Vendor</td>
      <td><abbr title="Software as a Service">SaaS</abbr></td>
    </tr>
    <tr>
      <td>Late 2010s</td>
      <td>Vendor</td>
      <td>Customer</td>
      <td colspan=2>Subaccount SaaS</td>
    </tr>
    <tr>
      <td>2020s</td>
      <td>Terraform, Kubernetes</td>
      <td>Customer</td>
      <td>Customer</td>
      <td colspan=2>On-Cloud</td>
    </tr>
  </tbody>
</table>

Instead of building apps for machines abstracted by operating systems and handing over copies to install, we're coding for platforms abstracted by container systems and handing over packages for deployment.  The customer literally gets a copy of the software, like back when computers were beige.  But they "install" it on a corporate cloud account, rather than on racks or the mainframe.

We could trace this cycle even further back.  Managed installations.  Service bureaus.

The giveaway that we're headed back to the future is the return of system requirements and performance warranties, even if we're not yet calling them by name.  Customers want to know not how much something is going to cost, not just how much one vendor will charge them for it.  They fear the vendor will skimp on optimization, leaving them with the big AWS bill.  This began already with subaccount SaaS.

Customers also want to know if the app they're buying is portable.  Can they play the Big 3 clouds against each other, like they used to play IBM against Dell?  Or is this mission-critical service really a hook in their lip, with the line running back to Redmond, Mountain View, or Seattle?

Depending on the app, they may also want assurance that the app will "scale".  That's largely a function of software architecture and the cloud configs shipped with the code.  As far as customers are concerned, those are as much a part of "the software" as the ELF headers.

## What's really changed?

Operationally, two main things.

First, the vendor no longer touches customer data.  Instead they provide tech support, relying on customer tickets, logs, and perhaps some custom reports their app's coded to generate.  If vendor personnel qualify in for access to customer systems, they're either subjected to all the security-compliance machinery of in-system contractors, or they're playpenned to dev and staging instances, where only dummy data may appear.  Production may or may not phone home with usage, performance, and other improve-the-service data.  Always sanitized.

Second, at least from what I've seen so far, the customer picks up the cloud tab.  I've not yet seen a deal where the customer demands expense reimbursement from the vendor, treating their fee as all-inclusive.  But I won't be surprised when I do.  Probably depends on who can get the better discount.  Big buyers may drive harder bargains for AWS, GCP, or Azure, especially when the vendor's just a startup.  Even when the customer signs an exclusive deal for their infra, they still want portability, at least in theory, for longer-term leverage.

## Why are things changing?

Like a blind amoeba hungrily flailing its protrusions around, the software blob grasps for morsels while fleeing bright light.

The cookies are ever more tantalizing offerings from precocious B2B software firms.  Easy money let a thousand startups bloom.  Some of their offerings actually afford real competitive benefits.  But "precocious" is the word, as organizationally, they're adolescents.  Even attesting compliance and professing standards compliance, they're not to be trusted to behave like adults.  Buyers know startup incentives.  Those incentives make compliance and security responsibles uneasy.  Especially in "highly regulated industries", which pretty much everyone gets away with telling themself they are.

Speaking of compliance, the pain to avoid grows with every new privacy and security regulation, every new bad headline, every "cyber" insurance premium hike.  Twenty-plus years ago, the public tolerated incredibly busted software.  When it worked, it was magic, and magic is characteristically capricious.  Attempts to legislate staid quality standards, consumer-protection style, got beaten down.  The industry still seemed "young", and was therefore due some coddling.

No longer.  Downtime hurts in proportion to what's computerized.  Breaches hurt in proportion to what's leaked.  Too much is online, and too much has been digitized.  When software fails, congresspeople get letters about it.

## Why can things change?

The industry can twiddle who has data access thanks to the tireless work of nerds, startups, and the desperate heaves of firms getting choked out by Amazon.

Deployment tools like Puppet, Chef, and Ansible evolved toward "infrastructure-as-code".  Startups like Convox and Hashi abstracted over platform APIs, exposing the common "multi-cloud" denominator.  Docker and CoreOS containerized and versioned the operating system.  Ops people automating their jobs made operations more repeatable.  Now even customers can do it.  Those who can't buy online with credit cards.

Rackspace moved on the big picture early with OpenStack, ahead of evolution in the tech, and largely failed strategically.  Hashicorp moved later and found a foothold.  Then came Google, throwing its weight behind Kubernetes to butt its way into a seat at the table for Cloud Platform.

Now the pitches for different clouds all sound a little bit like pitches for Solaris, back in the day.  "Yes we're super standard, but you're super special, and so are we!"  If the value of their distinguishing whiz-bang---TPUs! bigger service menu!---can overcome commodification, they can still lock in customers, at least for a while.  But ever more can be done using what they all offer.

## How are the lawyers handling it?

Giving customers copies of software to install and run maps to a license agreement.  "We won't sue you for doing what would otherwise infringe our IP in the software".  Running software for customers to access over a network maps to a service contract.  "We promise to do these things we wouldn't otherwise be obligated to do for you".

I still negotiate SaaS deals where customers send me software-license forms.  Sometimes someone wrote "cloud" or "SaaS" at the top, instead of "end-user license agreement", but half the sections are scarcely reconsidered license slop.  Bizarrely, the rampant conceptual type errors this used to cause are now spontaneously dissipating.  Their terms have fallen so far behind they actually make sense again.

Of course, we also have the opposite problem.  Would-be SaaS sales on well conceived service terms spontaneously "devolve" into on-cloud license deals.  Second-line buyer reviewers see SaaS at the top and trigger that mental checklist.  Where did all the you-have-our-data terms go?  No sleep lost over warranties or documentation.  Meanwhile, always-be-closing sellers execs forget they're guaranteeing uptime.  They can't even ping the instance, much less shell in.

## How am I handling it?

Venting on the blog, apparently.

Years ago, I released a now very dated software-service contract form called "Slipstream" that made on-prem-or-SaaS an order-form-configurable parameter.  A sale that began as SaaS could switch to on-prem just by ticking a different box.  This happened all the time.

On-prem business among my clients steadily declined.  Several ended up running "forks" of Slipstream with all the license prongs of the `IF` statements removed.

Now we're going back.

If the runaway carousel of my law practice ever stops, I am going into the woods with a laptop to pound out my Grand Unified Terms for Selling Software.  I've long wanted to try those under a freemium model, where anyone can read and link to the terms, but pay by the month for access to line-by-line annotated copies, user guides, and order form generation wizards for all versions, plus access to a private forum.  Perhaps with an option to buy just specific versions a la carte, like e-books.

Try and break the cycle.  Put myself out of a job again.
