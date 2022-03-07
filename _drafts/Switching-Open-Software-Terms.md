---
title: Switching Open Software Terms
description: yes, you can switch from MIT to something else
tags:
- Software Licensing
- Open Source
---

Another tip from the [Artless Devices forum](https://forum.artlessdevices.com) last week put me onto [this podcast interview with Álvaro Trigo](https://www.software-engineering-unlocked.com/money-open-source-software/), developer of [fullpage.js](https://alvarotrigo.com/fullPage/).  Álvaro began releasing and developing fullpage.js under the MIT License, added paid add-ons later on, and eventually moved fullpage.js itself over to GPL, [charging for use without copyleft](https://duallicensing.com/).  He's made enough to quit his full-time job.  But he also expressed some humble uncertainty about his legal foundation.

[I'm not Alvaro's lawyer](https://notlegaladvice.law), but I see no problems here.

## Switching Licenses

There's no inherent legal issue with making new work on a [permissively licensed](https://blueoakcouncil.org/list) project available under a new and different license, be it a GPL, a noncommercial license like [Prosperity](https://prosperitylicense.com), or some other choice.  The problem is going in the other direction.  If the existing project's under copyleft or other terms that impose licensing requirements, and you yourself aren't the one giving that license, its requirements may dictate terms for your further development.

Conceptually, copyright applies to "works", not files or programs or projects as such.  "Work" is how copyright law models software.  Grossly generalizing, copyrightable "work" is any kind of at least mildly creative expression---interesting source code counts---that's put down in concrete form, like a computer file.  Totally new source code can be "work" subject to copyright.  So can sufficiently creative improvements.

The "work" in an existing, permissive-licensed project remains available under the original permissive terms.  But the owner of copyright in new work on the project can choose to license it differently.  The result is a project that combines work made available under different license terms.  To use and share the new versions without infringing copyright, users and distributors need permission for all the work it contains.  So they have to comply with both licenses.

<!--The developer or company owning the new work needn't be the same as developer or company owning the earlier work.  And indeed it's fairly common for developers and companies to offer improvements and add-ons to permissively licensed software they did not write.  With a sufficiently permissive license, users and distributors can more or less treat the code as if they wrote it.  The sole requirement of licenses like MIT and BSD is making sure to include copies of those license terms with copies of the software they apply to.  If you yourself own copyright in the old work, and gave the permissive license for it, you don't have to comply with the terms of your own license.  You can't sue yourself for violating the terms of a license agreement with yourself, or for infringing copyright in a work you yourself own.-->

Theoretically, users could carefully excise old, permissive-licensed work from the new versions, then comply only with the permissive license terms for that work.  But that's a big hassle.  In practice, they'll almost always prefer to just turn back the clock to before the change, and use an old version.

## Old Versions

Old versions released under MIT remain MIT-licensed.  There is no clear way to stop copies of those old versions and their license notices floating around.  Users or distributors could come across copies of the software with copies of the MIT License, and no word about a later change to GPL, for years to come.

I can imagine situations where an open source developer might be able to "take back" their license for published code from a specific user, without them violating the license first.  They would be edge cases.  Even so, my legal view, and the view of the colleagues I've spoken to, is that it would be dubious and difficult at best.  Perhaps practically impossible.

The legal search term here is "license revocation".  Ancient permissive licenses like MIT and BSD don't say anything explicit about it, so the question there is what the background law says.  Rules like [estoppel](https://en.wikipedia.org/wiki/Estoppel) and [consideration](https://en.wikipedia.org/wiki/Consideration) can protect those who rely on assurances given in reasonable ways.  But the rules are pretty general, and specific circumstances could matter a lot.  Which is why modern licenses, like the Blue Oak Model, [avoid these questions altogether](https://blueoakcouncil.org/license/1.0.0#reliability):

> **Reliability**
>
> No contributor can revoke this license.

[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html#copyright) does it too, in more orthodox legalese:

> Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, <mark>irrevocable</mark> copyright license to ...

Upshot:  Generally speaking, the more new work is done on a project under new terms, and the more old versions accumulate bugs, vulns, and compatibility problems, the more meaningfully complete the effect of a license shift becomes.

## Quick Note on Notices

The only meaningful requirement of most old permissive licenses, including MIT and BSD, is "notice".  You have to ensure that people who get copies of the software from you also get copies of its license terms.

When changing license terms for a project for which you and you alone own copyright, you don't have to follow the rules of your own license.  Nobody is going to sue you for infringing your own copyright or breaching a license agreement with yourself.  So you're free to remove the old MIT terms from your `LICENSE` file and replace them with your new terms, even if your old code, in older versions, technically remains available under MIT.  Emphasis on _sole_ ownership here.  If you've taken contributions from others under terms that require notice, those terms for _their_ work continue to require notices, and you aren't exempt from those requirements.  In practice, that means you need to include their copyright lines and license terms, in addition to your own, in `LICENSE`.  It's completely normal to see license terms concatenated there.

There's no hard and fast legal reason why the developer of new, differently licensed work on a permissively licensed project has to be the developer or owner of copyright in that project.  It's quite common for companies to develop and market improvements and add-ons to permissively licensed open projects they themselves did not develop.  Their obligations are much the same as in the situation above, where the developer has taken "outside" contributions.  In addition to whatever terms they choose for their own work, the company following on has to continue giving notice of copyright and terms for the MIT-licensed work of others they retain.

## Withholding

As always, when it comes to license-based business models, we have to keep our eye on how "permissions" set in the license terms line up with the permissions users and customers actually need.

fullpage.js is a front-end library.  To use it, you serve copies to users' web browsers.  So even GPL's old-school, [distribution-based copyleft](https://blueoakcouncil.org/copyleft#strong-copyleft-family) covers the primary use case of the software.  The same's true for [David DeSandro](https://desandro.com/)'s [Metafizzy](https://metafizzy.co/) offerings, which Álvaro named as inspiration.

Users could potentially just accept the GPL's requirement and publish unminified source code for their whole apps under the same terms, without paying.  But many will prefer to avoid dealing with that process, or to avoid thinking about GPL in the first place.  Business aversion to the GPL, a copyleft license, causes it to function as a quasi-noncommercial license, driving users to pay.  But on the flip side, long recognition of GPL as "open source" enables Álvaro and David and others to loudly and proudly fly that flag.

The situation's more complex for back-end code and especially development tools.
