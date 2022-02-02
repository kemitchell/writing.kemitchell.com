---
title: Can Noncommercial Have a Posse?
---

Could charging business users for open software ever feel like a movement?

Sure, with enough projects taking the leap.  But a leap it would be.  It's easy to imagine a software industry with a norm of fair pay.  It's harder to imagine how we get there from where we stand today.

At least as pitched so far, allowing noncommercial use for free and charging for commercial use marks a pretty lonesome road.  It means veering off from the pack, where there are lots of good feelings and gratuitous Internet points for more MIT-, BSD-, and Apache-licensed work.  But even beyond individual daring-do, noncommercial licensing means leaving behind the collective project of amassing ever more MIT-, BSD-, and Apache-licensed code for devs to play with.  It's not just that your own project is going a different way.  It's that you're no longer part of the greater project of "open source".

Devs care about this not so much because it's a big, fine idea, but because it sounds in their experience.  When a dev finds an MIT-licensed project, they can make more MIT-licensed projects with it.  When a dev finds a GPL-licensed project, they can make more GPL-licensed projects with it.  They don't even have to tell the prior dev what they're doing, much less beg or bargain for permission to do it.

This isn't reciprocity.  There's no guarantee good comes back to the right people.  There are all kinds of problems with keeping devs in the dark about who uses their code.  But growing the pile of MIT-, BSD-, and GPL-licensed projects hasn't been one of them.  There's a nice closed loop from experiencing "permissionless" development to making more of it and feeling good about that.

Contrast noncommercial licensing.  If a dev finds a noncommercial project, they can't really make more noncommercial projects with it, assuming they _also_ want to charge for commercial use.  Selling licenses is a business model.  Business models are "commercial".  So the dev has to start by buying a license for the project they found.  They can't get started until they do.

This isn't "permissionless".  It's closer to "permission first".  Socially, that makes it hard to like feel you're on a team with other noncommercial developers.  The more other noncommercial developers succeed, the more often you find yourself across from them, buying or negotiating licenses so you can get started.

The answer _isn't_ that noncommercial devs should give other noncommercial devs a free pass.  When a business makes money, the devs they rely on should make money, too.  That's the transitive property we want in our industry.  But that can't happen if we gum up the process of software reuse with flaky, unstructured license negotiations as step zero.

We want developers, including developers trying to make money, to take software they find and run with it.  We don't want a regression on the permissionless development experience.  But if and when devs do make money, we want them paying their deps and their toolmakers.  Plant, but share the harvest.

## Permissions

Can a license even _do_ that?  Sure.

Think about how we use software.  We run finished software for its function, like a game.  We use development tools to write, analyze, deploy, and monitor other software.  We ship frameworks and libraries as components of our apps and embedded code.  We use the same to run remote services.

We do these things in different contexts.  As children and parents exploring projects.  As hobbyists, students, and teachers, honing skills.  At universities or other charities, serving the greater good.  At companies and on the job, making money.

Some of these uses, in some of these contexts, we want to make free.  For others we want pay, but we have a choice there: should the user pay upfront, or pay when they get paid?

We can think of it like a permissions field, or an access-control list.  For example:

<table>
  <thead>
    <tr><th rowspan=2>Context</th><th>Use </th>                                    </tr>
    <tr>                          <th>Tool</th><th>Service</th><th>Distributed</th></tr>
  </thead>
  <tbody>
    <tr><td>Kids' Projects   </td><td>Free</td><td>Free   </td><td>Free       </td></tr>
    <tr><td>Noncommercial    </td><td>Free</td><td>Free   </td><td>Free       </td></tr>
    <tr><td>Indie            </td><td>Paid</td><td>Paid   </td><td>Paid       </td></tr>
    <tr><td>Proprietary      </td><td>Paid</td><td>Paid   </td><td>Paid       </td></tr>
  </tbody>
</table>

## From the Top

We want to those making money pay the devs behind work they rely on.  At the same time, there are a bunch of users who can't pay or shouldn't pay, and shouldn't have to.  Either way, working in the open makes better software.  The clearest way to structure all that is open code, a free noncommercial license, and paid licenses for businesses.

Trouble is, as an industry, we're currently reproducing a mindset that pukes at anything not absolutely permissive-open or proprietary-closed.  That pushes projects to one extreme or the other, where many end up less good for less people than they could be, and others bewitch their developers into ritualistic economic and emotional self-sacrifice.

To overcome that mindset and its consequences, we need to run in a pack, not as lone wolves.

Upshot:  There are situations where we want commercial use to start out free, but transition to paid when the project makes money. Not pay-up-front, but pay-when-paid.
