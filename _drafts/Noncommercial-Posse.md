---
title: Can Noncommercial Have a Posse?
---

Could charging business users for open software ever feel like a movement?

Sure, with enough projects taking the leap.  But a leap it would be.  It's easy to imagine a software industry with strong norms of fair pay.  It's harder to imagine how we get there from the industry we have now.

At least as pitched so far, using noncommercial terms like [Polyform Noncommercial](https://polyformproject.org/licenses/noncommercial/1.0.0) or [Prosperity](https://prosperitylicense.com) and selling exceptions to business marks a pretty lonely road.  It means veering off from the pack, where there are lots of good feelings and gratuitous Internet points, if not dollars, for more good MIT-, BSD-, and Apache-licensed hacking.  But even beyond lone daring-do, noncommercial licensing means leaving the collective project of amassing ever more MIT, BSD, and Apache code for the devs of the world to play with.

If a dev finds an MIT-licensed project, they can make more MIT-licensed projects with it.  If a dev finds a GPL-licensed project, they can make more GPL-licensed projects with it.  They don't even have to tell the prior devs about it, much less beg or bargain for permission.

This isn't reciprocity, though we like to pretend it is.  There's no guarantee that good comes back around in the right way.  And as it turns out, there are all kinds of negative consequences from keeping devs in the dark about who's using their code.  But growing the pile of MIT- and GPL-licensed projects hasn't been one of them.

Contrast noncommercial licensing.  If a dev finds a money making noncommercial project, they can't really make more noncommercial projects with it, assuming they _also_ want to charge for commercial use.  Selling licenses is a business model.  Business models are "commercial".  So the dev has to start by buying a license for the tool, library, or framework they found.  This isn't "permissionless", but "permission first".  Socially, it's hard to see and feel how you're on a team with other noncommercial developers.  The more that team succeeds, the more often you find yourself across from them, buying or negotiating licenses so you can get started.

The answer _isn't_ that noncommercial devs should give other noncommercial devs a free pass.  When a dev makes money, the devs they rely on should make money, too.  That's the transitive property we want in our system.  But that can't happen if we gum up the whole process of software combination with flaky, unstructured license negotiations from the jump.

We want developers, including developers trying to make money, to take software they find and run with it.  We don't want a regression on the permissionless development experience.  But if and when devs do make money, we want them paying their deps and their toolmakers.  Plant, but share the harvest.

## Permissions

Can a license even _do_ that?  Sure.

Think about how we use software.  We run finished software for its function, like a game.  We use development tools to write, analyze, deploy, and monitor other software.  We ship frameworks and libraries as components of our apps and embedded code.  We use the same to run remote services.

We do these things in different contexts.  As children and parents exploring projects.  As hobbyists, students, and teachers, honing skills.  At universities or other charities, serving the greater good.  At companies and on the job, making money.

Some of these uses, in some of these contexts, we want to make free.  For others we want pay, but we have a choice there: should the user pay upfront, or pay when they get paid?

We can think of it like a permissions field, or an access-control list.  For example:

<table>
  <thead>
    <tr><th rowspan=2>Context</th><th>Use </th></tr>
    <tr>                          <th>Tool</th><th>Service</th><th>Distributed</th></tr>
  </thead>
  <tbody>
    <tr><td>Kids' Projects</td>   <td>Free</td><td>Free</td><td>Free</td></tr>
    <tr><td>Noncommercial </td>   <td>Free</td><td>Free</td><td>Free</td></tr>
    <tr><td>Indie         </td>   <td>Paid</td><td>Paid</td><td>Paid</td></tr>
    <tr><td>Proprietary   </td>   <td>Pay Upfront</td><td>Pay Upfront</td><td>Pay Upfront</td></tr>
  </tbody>
</table>


## From the Top

We want to those making money pay the devs behind work they rely on.  At the same time, there are a bunch of users who can't pay or shouldn't pay, and shouldn't have to.  Either way, working in the open makes better software.  The clearest way to structure all that is open code, a free noncommercial license, and paid licenses for businesses.

Trouble is, as an industry, we're currently reproducing a mindset that pukes at anything not absolutely permissive-open or proprietary-closed.  That pushes projects to one extreme or the other, where many end up less good for less people than they could be, and others bewitch their developers into ritualistic economic and emotional self-sacrifice.

To overcome that mindset and its consequences, we need to run in a pack, not as lone wolves.

Upshot:  There are situations where we want commercial use to start out free, but transition to paid when the project makes money. Not pay-up-front, but pay-when-paid.

