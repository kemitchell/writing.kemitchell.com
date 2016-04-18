---
title: The Berneout Pledge
description: Sucks less than CLAs!
layout: post
tags:
- Open Source
- Licensing
---

A whole new generation of open source programmers has snuck up behind me.  They weren't part of the great licensing tiffs of the '90s and '00s.  They never dealt with foundation-administered projects and their rigors.  They're building careers and reputations and consultancies and philosophies with nary a thought to intellectual property or licensing.  They've never read the [Open Source Definition](https://opensource.org/osd), and when you mention it, they don't give a damn.  Is that in the [GitHub help pages](https://opensource.org/osd) somewhere?  No, it isn't.

It's easy to write these hoodlums off as inexperienced, immature, bereft of historical sensibility and significant worldly responsibility.  They live in playpens---universities, high schools, endless successions of seed-funded startups with half-lives in weeks---where the stakes are never high enough for licensing, or, frankly, anything but splash, to matter.  They don't feel the pain, and they don't want no medicine. [And they don't sign no motherfucking contributor license agreements.](https://plus.google.com/u/0/+gregkroahhartman/posts/NstZfwXbAti)

It's easy to pick on them.  It's harder to take their point.  Things are going fine, mostly, despite the current licensing laxity in, say, web development.  Enterprise and enterprisey companies have their own problems---and lots of redundant, ham-handed, paper-bound manpower to sick on them.  The vast majority of open-source projects, like the vast majority of open-source-powered start-up companies, fail fast and totally.  In the early days, you want to be as easy to find, use, adapt, and improve as possible.  You don't want to fail now for any reason you might've fixed later.  Defer, defer, defer.

CLAs suck.  Even if you get used to doing them.  But there was a point to all the licensing brouhaha back in the day---a kernel of point in a shitstorm of politics---and that point shouldn't be lost in the low-stakes churn of open-source-as-social-media.  It's on the "elders"---anyone old or wonkish enough to remember that there was a point---to pick it out.  And to make dealing with it practical again.

Here's an idea: [The Berneout Pledge](http://github.com/berneout/berneout-pledge).

<!--jump-->

The first draft reads:

> The Berneout Pledge
>
> First Edition, First Draft
>
> Contributors to projects published under free-of-charge public licenses, or "free public projects", follow unwritten rules about licensing and contribution.  They expect others to do so, too.  I make this pledge to make those unwritten rules, and the fact that I follow them, explicit.
>
> Unless I specifically say otherwise in a contribution, whenever I make a contribution to a free public project, I license my contribution under the same license terms on which that project is licensed to the public at the time.
>
> I am aware of legal rules, like "work made for hire" rules, that may give employers, clients, and others ownership of intellectual property in work that I do.  I am also aware that legal agreements I make may transfer ownership of intellectual property rights in my work to others.
>
> I pledge not to offer contributions to free public projects that I know may be subject to others' intellectual property rights without their written, legally binding permission.  When I offer a contribution with permission, I pledge to make public, as part of my contribution, who may own rights, the fact they gave permission, and how they gave permission.
>
> This pledge applies to all my contributions for one year, starting at _timestamp_.
>
> I may revoke this pledge earlier by cryptographically signing a copy of The Berneout Pledge Revocation, First Edition, First Draft, with the same private key, and posting it to berneout.org.

I have [signed this pledge](http://berneout.org/pledges/4866-DED9-D6E8-FA79-5EA5-BB5C-CBBF-167E-84DF-DD08/2016-04-18T01:37+0000.txt) with the same cryptographic key I use to sign Git commits.  Software can verify that the same key was almost certainly used to sign the pledge and my commits.  I won't ever remove my signed pledge from berneout.org.  If I want to revoke my pledge I'll sign a revocation like this and post it in the same place:

> The Berneout Pledge Revocation
>
> First Edition, First Draft
>
> As of _timestamp_, I revoke my pledge for contributions to free public projects starting at _timestamp_ under the terms of The Berneout Pledge, First Edition, First Draft.

If a developer offers a contribution of signed Git commits, on GitHub or elsewhere, the project could:

1. Automatically check, by hitting berneout.org, that whoever signed the commits also signed a Berneout Pledge making clear they've done their intellectual property homework and license their work as expected.
2. Automatically check that the pledge covers the commits, based on their timestamps.
3. Automatically check that the signatory hasn't revoked their pledge.
4. Make a copy of the contributor's pledge for their records, if they like.

Obviously, I have a bit of homework in packaging that verification process up in software.  Shouldn't be too bad.

In the meantime, the point is five-fold:

First: Make the unwritten rules of the "open source" world explicit.  Many GitHub-era developers I speak to are surprised to learn that the law doesn't clearly imply ["inbound=outbound"](https://opensource.com/law/11/7/trouble-harmony-part-1)---that contributors license their contributions on the same terms the project is licensed to the public, by default.  The Berneout Pledge makes it clear, even if the `LICENSE` file doesn't.  No need for implication.  No need to fret about how, exactly, [Apache 2.0 section 5](https://www.apache.org/licenses/LICENSE-2.0.html#contributions) and friends are supposed to work, legally speaking.

Second: Start building a case that those unwritten rules should apply whether someone signs a pledge or not.  The law is capable of implying licenses based on community norms and expectations.  We've already seen [some tea leaves that can read that way](https://en.wikipedia.org/wiki/Jacobsen%5fv.%5fKatzer).  A mountain of pledges reciting the norms is a mountain of evidence those norms exist.  Maybe it's also a bridge to [a day when pledges are no longer necessary](https://sfconservancy.org/blog/2014/jun/09/do-not-need-cla/).

Third: Educate developers about ["work made for hire"](http://worksmadeforhire.com/) and related intellectual property provenance issues.  If your employer or client owns the intellectual property in your work, or you assign it to a company you're starting, you personally don't own that intellectual property anymore, and can't license it under open source terms yourself.  The new owner has to do that.  Good community members [don't plant intellectual property land mines in open projects they contribute to](http://www.rosenlaw.com/html/GL14.pdf).  But you don't have to become an intellectual property law expert to recognize situations when you might need a company officer to sign off on a contribution.

Fourth: Avoid proliferation of potentially abusive, duplicative, per-project CLAs that developers do not understand.  If [public pledges not to assert patents](http://www.patent-commons.org/) and [public pledges not to sue under copyright and patent rights](https://www.kernel.org/pub/linux/kernel/COPYING) are good enough for enterprises using Linux, public pledges ought to be good enough for individuals making code contributions.  There shouldn't need to be any [giving a web app access to your GitHub account so it can send you a wall of corporate CLA via DocuSign](https://cla.microsoft.com/) for projects under [familiar, three-paragraph open-source licenses](https://github.com/Microsoft/ChakraCore/blob/master/LICENSE.txt).

Fifth and finally: Put the process of handling intellectual property concerns back in developers' hands, using tools they understand, have installed, and can hack as needed to minimize pain.  Nobody wants to [sign and scan signature pages](https://www.fsf.org/blogs/licensing/fsf-to-begin-accepting-scanned-signatures-for-copyright-assignments-from-india) with [GPG](https://www.gnupg.org) on their `PATH`.  Nobody wants a [pile of waivers in a filing cabinet somewhere](https://www.sqlite.org/copyright.html) when plain-text files on a web server will do.  Nobody wants to register for, obscure, and use a proprietary API key.


As always, I'll be happy to receive your feedback, by [e-mail](mailto:kyle@kemitchell.com) and [on GitHub](https://github.com/berneout/berneout-pledge).

---

Special thanks to [Kris Borchers](https://github.com/kborchers) for excellent feedback on _other_ license-related projects that greatly informed The Berneout Pledge.  Kris hasn't seen The Berneout Pledge before anyone else.  Don't take this thanks to mean he endorses it.
