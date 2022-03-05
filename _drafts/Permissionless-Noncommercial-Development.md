---
title: Permissionless Noncommercial Development
tags:
- Noncommercial
- Software Licensing
---

I am thinking about noncommercial license terms that allow use on other noncommercial projects that also sell commercial-use licenses, without the need to ask permission.

Apart from the copyleft licenses, none of the licenses I've helped write in response to the funding crisis has reproduced the experience of finding code and reusing it in a new, otherwise independent project without asking permission or making a deal.  None has supported "permissionless development".

Under permissionless development, coders can take permissively licensed code and build more permissively licensed projects, without even telling anyone.  They can take copyleft code and build more copyleft projects, again without telling anyone.  Sending other software developers messages has got a whole lot quicker, cheaper, and easier since the Internet, nearly worldwide.  It might be time to revisit how blind not telling anyone leaves maintainers at risk of burning out or blowing up.  See, e.g., [Scarf](https://about.scarf.sh/).  But this is the permissionless development we inherited from MIT, BSD, and the other pre-Internet license forms, when tracking all the places your software might go, or who would use it, was was laughably impossible.  It certainly has its charm.

There is a kind of solidarity here.  Everyone's capable of giving in the same way they got.  That is _not_ the same as reciprocity, where the same kind of giving necessarily comes back to those who gave.  But a pleasant, cohesion-abetting property, nonetheless.

Contrast noncommercial licensing.  Coders can take, say, [Prosperity](https://prosperitylicense.com)-licensed code and build more Prosperity-licensed projects with it.  So far so good.  But they _can't_ go the extra step of licensing free for noncommercial use _and_ selling commercial-use licenses.  Selling commercial-use licenses is commercial!

I'm constantly surprised by how many people really do just want to put their work out there noncommercial, without making exceptions.  But my own motive working hard on [PolyForm Commercial](https://polyformproject.org/licenses/noncommercial/1.0.0), [Prosperity](https://prosperitylicense.com), and [Big Time](https://bigtimelicense.com) was putting the missing money factor back in public software dev.  The solidarity we want isn't the solidarity of a license.  It's the solidarity of a business model, based on a fair, intuitive deal, only part of which gets implements in a gratis license.

Fundamentally, this is the same insight I had when I first started thinking about evolving License Zero, my fist stab at a turnkey marketplace for dual-licensed software.  Making the point that developers offering work under the new deal also welcome other developers put their own work out under that deal is important.  The software universe isn't made of buyers and sellers, like two disparate castes.  There's just developers, some of whom happen to buy or sell, as suits them, at any given time.  "When you make money with my work, you pay me" helps us transact, settle up, and therefore reflect that reality at a much higher resolution.

The wrinkle is the compensation part.  If I spend a thousand hours on library X and license it noncommercial, I don't want some other dev coming along, spending two hours to make a CLI, licensing that noncommercial, and selling licenses without paying me. So what we really want is permissionless _at a price_, with reassurance around the commercial license terms that price will buy.  We need to decouple permission from compensation.  "Don't ask me.  Just pay me."

[The Big Time Public License](https://bigtimelicense.com) might have the key.  At its core, Big Time is free for noncommercial and small business, with a ["free, reasonable, and nondiscriminatory" licensing commitment](https://en.wikipedia.org/wiki/Reasonable_and_non-discriminatory_licensing) for big business users.  Nestled in the definitions that make that commitment enforceable---especially [as refined in a pending PR](https://github.com/berneout/big-time-public-license/pull/17)---we have some language helping to pin down what "fair" means in specific cases.  In short, if the developer advertises pricing and terms, and somebody has done such a deal, those are fair.  Not because they're necessarily realistic,

Basically, the Internet again.  Communicating pricing and license terms isn't much harder than communicating anything else.  Even _paying_ developers online isn't much harder than harassing them over GitHub.

In the past, License Zero tried to address the development friction problem by making it really quick, simple, and easy---zero friction---to buy a license for any License Zero code you found.  Just go online and buy a license.  One effect of this was requiring developers to buy licenses to develop with License Zero code, as well as customers.  That made sense for developer tools.  But folks seemed to find the way License Zero treated developer-users and potential end-users the same confusion. According to this feedback, the optimum may have looked more like a two-track
