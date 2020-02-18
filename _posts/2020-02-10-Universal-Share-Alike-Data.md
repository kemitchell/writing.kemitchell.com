---
title: Data Under Universal Share-Alike
description: limits on effective data copyleft
tags:
- Copyleft
- Copyright
- Licensing
- Open Data
- Open Source
---

[Brendan Miller](https://github.com/bmiller59) opened a [very interesting GitHub issue](https://github.com/berneout/universal-share-alike-license/issues/2) on the [Universal Share-Alike License](https://github.com/berneout/universal-share-alike-license) that I announced [late last year](https://writing.kemitchell.com/2019/11/22/universal-share-alike.html).  As quick refresher, Universal Share-Alike is a reciprocal or copyleft license that requires publishing and licensing new work built with old on the same terms, regardless of what form---software, artwork, writing, and so on---that new work takes.

Brendan's issue covers a lot of ground.  If you care about open licensing, have a look.  But I'd like to focus here on one particular theme: data.

From a legal implementer's point of view, data licensing is an awkward corner case.  Other kinds of work that we care to license fall clearly under specific kinds of intellectual property.  Music, blog posts, and software fall under [copyright](https://fieldguide.kemitchell.com/#copyright).  New drugs, mechanical inventions, and many algorithms fall under [patent](https://fieldguide.kemitchell.com/#patent).  Logos, business names, and other kinds of "brand" features fall under [trademark](https://fieldguide.kemitchell.com/#trademark).  Data, in the form of databases, fall under the European Union's [Database Directive](https://en.wikipedia.org/wiki/Database_Directive).  But neither the United States nor a great many other countries have followed the European Union in creating a database-specific intellectual property law.

The European Union thought it needed a new kind of intellectual property for databases because databases full of facts aren't copyrightable.  Only creative _expressions_, which might convey fact, fiction, fantasy, or pure aesthetics, come under copyright.  Even then, only the expression, not the facts they convey, get covered.  Countries like the United States, which don't have special database rights laws, don't give data sets recording facts copyright, and don't offer any special kind of special intellectual property protection for them, either.

The lack of strong intellectual property protection for factual data leads businesses seeking competitive advantage from data to fall back on another kind of intellectual property, [trade secret](https://fieldguide.kemitchell.com/#trade-secret).  Unlike copyright, trade secret _can_ protect exclusive rights in recorded facts.  The archetypal trade secret, a business's customer list, is 100% fact and 0% creative expression.  But also unlike copyright, trade secret law requires the business to keep those facts confidential, and to take security measures to keep them that way.  Where copyright expects work to be published, trade secret requires the opposite.  The archetypal customer list stays locked in the chief executive's wood-paneled office.

If you've ever seen or signed a [nondisclosure agreement](https://creativecommons.org/publicdomain/zero/1.0/), or "NDA", with a company, you've seen trade secret law in action.  The company believed it had trade secrets to protect, or might have them, and took security measures, including requiring you to promise not to share any secrets shared with you.  Those measures preserve its ability to sue anyone who goes after its secrets under trade secret law.

All of this loops back to open licensing and copyleft in two crucial ways:

First, open licensing as we know it doesn't make sense for factual data.  Since at least outside the European Union the only intellectual property right that clearly covers factual data is trade secret, and trade secret requires secrecy, "open trade secret" contradicts itself.  Once you publish data, any trade secret rights you had in it boil off in the disinfecting light of transparency.  There's no exclusive intellectual property left to license.

Second, copyleft as we know it does as much or more about trade secret as copyright.  We think of the GNU General Public License as copyright geekery.  But the key feature of copyleft---requiring others to share their own work---mounts a direct assault on trade secrecy.

In terms of free software mythos, it wasn't just that Stallman didn't have a copyright license to fix the printer driver.  He couldn't get the source for the driver from the printer company in the first place, unless he signed a nondisclosure agreement promising he'd keep it to himself.  Companies hold code back as trade secrets, just as they hold data back.  Even though software also comes under copyright, while factual data don't.  Redundant protection is better protection.

Brendan brought up Van Lindberg's fascinating [Cryptographic Autonomy License](https://github.com/holochain/cryptographic-autonomy-license), and for good reason.  Grossly oversimplifying, the Cryptographic Autonomy License requires folks using the software to make user data available to users, somewhat like the European Union's General Data Protection Regulation, or "GDPR", requires _anyone_ running a service to make user data available.  But it's one thing to declare a rule, and another to enforce it.

The Cryptographic Autonomy License backs its rule about user data up with copyright in the software being licensed.  If you take software under that license, use it to host a service, and refuse to share users' data with them, you run the risk of getting sued for infringing copyright in the software, among other things.  In the same way that the GNU General Public License pivots off of copyright in software to attack secrecy and copyright in other software, the Cryptographic Autonomy License pivots off of copyright in software to attack secrecy and control over data.

Contrast the Cryptographic Autonomy License with "data licenses" that license data, rather than software or other work reliably covered by copyright.  [Open Data Commons](https://opendatacommons.org/licenses/index.html) published some forms.  More recently, [Microsoft stepped into the fray](https://www.microsoft.com/en-us/open-data-initiative).  But the reigning champion of open data release is and has been [Creative Commons' CC0 public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).

That makes a lot of sense.  If you just want to "put data out there", without any rules about credit or sharing alike, publication destroys any trade secret protection for the data, and CC0 licenses any copyrights that happen to apply to creative bits in the release.  The result, in crude terms, is abandonment.  No rules about use of the data, and no basis on which to enforce them.

The trouble comes when we want something back, like credit or reciprocity.  We can write those rules into a license for data.  But what intellectual property right in those data are we licensing, to begin with?  On what legal basis can we enforce our rules?  Unless the European Union's Database Directive applies, giving us a licensable right, what do we pivot off of, legally speaking, to compel credit and sharing of other data?  Apparently nothing.

Much as we can fall back from copyright to trade secret, we can fall back from licensing to contract.  If you do something with my software that requires a copyright license, but you didn't have a license to do so, I can sue you for infringing my copyright.  If I instead grant a public license to everyone, but include rules about credit and sharing back in its terms, and you break those rules, I can sue you for infringement, because the license didn't cover what you did.  But if we agree between us that you'll give credit and share alike, and we meet the requirements of a "contract" under the law, I can sue you for breaching that contract whether there was any intellectual property involved or not.  My basis for doing so isn't intellectual property that I own and you need a license for, but a promise that you broke.

Licenses and contracts frequently overlap.  When companies break the rules of a public license, like the General Public License, owners of the software often sue under United States law for _both_ copyright infringement and breach of contract.  The idea is that the violator both used copyrighted material without permission _and_ that they agreed to a rule about use in order to get a license and then broke that rule.

In the past, Eben Moglen, who was then still at the Free Software Foundation, as well as others from that milieu, insisted that the General Public License was only a copyright license, and not a contract.  I can't pretend to fully understand why.  My best guess is that it was strategic: they were hoping to influence copyright law away from supporting rules about how software is used.

The law went the opposite way, and businesses have successfully enforced the General Public License itself as both license and contract.  The [Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0#acceptance) acknowledges this connection between license and contract explicitly:

> In order to receive this license, you must agree to its rules.  The rules of this license are both obligations under that agreement and conditions to your license.  You must not do anything with this software that triggers a rule that you cannot or will not follow.

The current draft of the Universal Share-Alike License has the same language.  It also explicitly mentions database rights:

> Each contributor licenses you to do everything with this work that would otherwise infringe any other exclusive rights in the content or usefulness of the work that the contributor can license or becomes able to license.  This licenses covers <mark>database rights</mark>, plant variety rights, but not trademarks or service marks.

Because Universal is a copyleft license, this language has two effects.  First, everyone gets a license for any database rights in work under Universal terms.  But second, since Universal requires sharing work alike, it also requires sharing work on terms that license any database rights.

So far so good.  But in cases where there aren't any database rights, such as in the United States, the share-alike rule could end up without any enforcement basis when applied to data.

Say, for example, that I release software under Universal.  You use that software to compile a data set that's entirely factual.  If you fail to publish that data as Universal requires, I can sue you for infringing copyright in my software.  You had a license to compile your data set, but you didn't have a license to compile your data set and keep it to yourself.

Assume that you comply with my Universal license terms just as required.  But then along comes Bob, who extends your data set with additional data.  Bob doesn't share his new work alike.  How can we enforce Universal's rule about sharing his data set?

Assuming that you, Bob, and I all live and work in the United States, there's likely no claim for trade secret misappropriation, and no claim for copyright infringement.  Trade secret doesn't apply, because you published your data set, rather than keep it secret.  Copyright doesn't apply, either, because your data set is entirely factual.  Copyright doesn't apply to it.

What about contract?  Perhaps we could find and cite evidence to show that Bob indicated his agreement to the terms.  But perhaps not.  If the work were software, we'd have Bob in a pincer trap.  Either the license terms apply, and we have him for breaking those terms, or the terms don't apply, and we have him for copyright infringement.  But that doesn't apply here.  Bob has your data set, and he doesn't need a license.  What would Bob gain by legally committing to follow Universal's share-alike rule?  Under an established rule of common law dating back much longer than this country, called "consideration", the law won't usually enforce a contract unless both sides gave something of value, like money or a promise, to make the deal.  We can't force Bob into a contract unilaterally.

Contract looks even less likely if we consider breaches of Universal's rule to keep copies of the license with copies of the work.  If Charlie shares a copy of your data set with Dan, but doesn't include a copy of the license, how can we enforce the rule against Charlie?  We face the same problem as with Bob before.  And if Dan goes on to make an enhanced data set without sharing, how can we enforce the share-alike rule against him?  Dan may not have even seen a copy of the rule requiring him to share.

We have a few options for beefing up the contract basis for enforcing share-alike and other rules, but none of them are particularly "open".  We could limit distribution, in order to preserve trade-secret rights, require everyone who wants the data to come to us, and require them to sign an NDA-like agreement before receiving a copy.  Or we could allow sharing copies of the data outside our control, but under terms that require anyone who wants to share with another to get their agreement to our terms first.

Fundamentally, we're hitting the other side of "no copyleft without copyright".  Copyleft for software works because copyright applies to software even after it's been published.  Those copyrights give copyright owners the power to set and enforce rules, like sharing alike.  We can think of copyright as the operating system, and copyleft as an application for that system.  Without copyright to rely on, we have to reimplement some of the legal structure of copyright for data, so that we can enforce share-alike rules for data.  Without those underpinnings, we can imitate copyright abandonment, so-called "public domain dedication".  But we can't even get as far as permissive licensing, which requires copies of license terms and copyright notices.

We could write a share-alike license that applies to all kinds of work that reimplements that legal structure using contract, and possibly a legal entity like a foundation or service company, as a lowest common denominator for all the kinds of work we want shared alike.  But that would frustrate the lower-friction expectations we've developed for software, artwork, and other copyrighted work we're used to sharing online.  For now, I think the best Universal can do is continue to require publication of data in every case, and licensing of databases when European Union-style database laws apply.
