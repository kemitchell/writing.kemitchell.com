---
title: Open Source Should Come With Warranties
description: (from the companies who use it)
layout: post
series: Killjoy
tags:
- Open Source
- Licensing
---

This is one of a series, [_Killjoy_](/series/Killjoy.html), in which I sketch unorthodox and unwelcome solutions to nagging open source problems.

---

Open source software projects should come with strong warranties. But those warranties should come from the companies relying on the projects, not developers, whether the companies contribute or not.

From one point of view, the whole open source "sustainability" problem boils down to one question:  Who's responsible for the open source, and how can we be sure they'll take care of it?

Misers and nitwits think developers should be responsible, and that developers should magically do their jobs perfectly, for nothing, and be grateful for demanding feedback.  Open source as divine right.

More enlightened company creatures opine that the firms using and relying on open source should look after themselves.  Open source as spontaneous consortium.

Independent open source developers hold that firms raking in the dough should feed the people, and not just their own, but their open source developers, too.  Open source as collaboration.

No one is responsible and no one is on the hook.  It's the [state of nature](https://en.wikipedia.org/wiki/State_of_nature) with open source tossing the occasional bone.  [Figure out how to thump your competitors with the bones, they shall perish, and you shall grow up to have spaceships.](https://en.wikipedia.org/wiki/2001:_A_Space_Odyssey_(film)#Plot)  [I'm](https://en.wikipedia.org/wiki/Elon_Musk#SpaceX) [not](https://en.wikipedia.org/wiki/Blue_Origin) [kidding](https://en.wikipedia.org/wiki/Mark_Shuttleworth#Spaceflight).

I know it to be true, for the license tells me so.

Let's have a good look at MIT.  The MIT License is relatively short, but not simple.  Everyone in open source ought to [spend a little time looking under its hood](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html).  But to put it brutally short:

> Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, ...

This is the part that gives users every kind of permission the lawyer could think of to add features and fix problems for themselves.

> ... subject to the following conditions:
>
> The above copyright notice and this permission notice (including the next paragraph) shall be included in all copies or substantial portions of the Software.

This is the part that tries to make sure all the users get the message.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

This is the part that says _the developer doesn't owe users shit_.  If you want something more, or something goes wrong, see above.  Add it yourself.  Fix it yourself.  Complain to yourself.

Fin.

Nothing in The MIT License requires developers, maintainers, or anyone else to do any work.  There's no support requirement.  No maintenance guarantee.  No uptime service level agreement.  Instead, the license gets rid of---"disclaims", "excludes"---all the basic guarantees and accountability the law usually implies about the stuff on offer not being a rusty bear trap sitting on a land mine sprinkled with hundred dollar bills.  User beware.

Nearly all open source licenses do, or try to do, the same.

Open source license people tell ourselves that open source licenses don't have warranties because open source developers don't want to risk paying out for problems with software they never got paid for in the first place.  And that makes sense, as far as developers go.  But developers aren't the whole story.  Open source can, and [often does](https://redhat.com), come with warranties, not from the developers, but from companies selling things built on open source.  This happens so much that common open source licenses [include special rules about it](https://www.apache.org/licenses/LICENSE-2.0.html#additional), to make sure nobody confuses a company warranty for a developer warranty.

Reality Check:  Software should be good, and good software should come with warranties.  Especially software that many people rely upon.  Open source is not a house of cards, and it shouldn't be papered like one.

We get closer when many companies use an open source project, realize they use the open source project, realize problems with that open source project could be big problems, and invest in contribution accordingly.  Improbable, but possible.  When it does happen, the companies don't underwrite each other's risk of using the software, only their own risk.  But even their individual risk is so high that they have to address it.  This is the enlightened self-interest that [key early open people like Karen Copenhaver preached](https://www.youtube.com/watch?v=L3teKUtGVy0) and [new organizations like Tidelift now peddle](https://tidelift.com/solutions).  Buy insurance.  But instead of paying an insurance company, pay a dev on staff, or pay us and we'll sic one on the problem for you.

It's also a model that assumes---and accelerates---vast enterpriseification of open source.  If some of the developers involved _don't_ work for the companies, the plan simply doesn't account for them.  If smaller companies, especially a lot of smaller companies, also use the open source project, collective action problems stymie their contributions.  Nobody gets a warranty, and nobody's locked in to fund the work that would make a warranty easy to give.

Companies run risk by adopting open source.  But their number, organization, and self-awareness vary widely.  The enlightenment of their self-interest varies likewise.  How do we facilitate and encourage user support of the projects they should be supporting in the first place?  How do we ensure projects the resources they need to cross the chasm from nascent, niche experiment to broadly supported open source paragon?

One answer: make them pay.  Make the features they want closed.  Pick a copyleft license and charge to use in closed software.

But for the same effect, by other means, we could simply shift the risk where it belongs, and let them tell themselves to pay, to whom, how much, and when.

Imagine an open source project that offers all the usual: full permission, full source code, access to build and other configuration, the works.  But add a new rule.  In order to use the software commercially, you have to join other users in financially guaranteeing quality, maintenance, security, and other standard software warranties.  If someone _else_ has an issue with the software, you're on the hook, along with all the other users, to cover their costs.

Incentives crystallize immediately.  Incentives to reduce the risk of a claim against the software.  Incentives to coordinate with other guarantors to do so efficiently.  Incentives to focus on the software, the project, and who can improve it, rather than just on one's own use case, or one's own developers on staff.

Again, we see this in dilute form already.  Companies backing open source projects, and projects themselves, love to slap well known users' logos all over their promo.  The implied message:  These companies have more riding on this software than you will.  They are going to bear the cost of insuring it.  You can ride free.  It's not a warranty.  It's social proof.

But not actually.  New users usually don't know how the big names are using the project, or how broadly.  They don't know whether, when the time comes, they'll actually be able to meaningfully guide development with new contribution, rather than simply be outvoted by larger incumbents.  There's no guarantee of aligned interest at any level.  There's no guarantee for any particular use case.

There could be.
