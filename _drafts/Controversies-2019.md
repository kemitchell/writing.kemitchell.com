---
title: Free and Open Controversies 2019
description:
tags:
- Open Source
- Free Software
- Politics
---

What are the controversies of the day in free and open licensing?  Here's my view from the trenches.

<h2 id="patents">Patents, Standards, and Reference Implementations</h2>
Patent-driven standards people and largely copyright-driven software people are colliding in standards bodies.  Contributors to standards increasingly want to release reference implementations.  The software people want those reference implementations to be "open source".  But standards and software people have traditionally handled patents in very different ways.

Within standards-setting, the game for many large companies is to influence the standard to require practicing as many of their own exclusive patents as possible.  To prevent companies laying those kinds of traps, standards bodies require companies to commit to licensing any patents they get into the standards on "fair, reasonable, and nondiscriminatory terms", of "FRAND terms", which is almost as vague and saccharine sounding as "open source".  The FRAND compromise enables big companies to collaborate on standards.

FRAND license terms aren't free and open license terms.  Modern open software licenses explicitly cover patents, and grant broad permission totally free of charge.  Worse still, many popular free and open licenses, including MIT and BSD, don't mention patents and arguably don't cover them at all.

The obvious solution to the patents-in-reference-implementations problem, from the patent practice side, was to pick MIT or BSD for the code.  Those licenses are broadly accepted as free and open source, but arguably don't cover patents.  But from the software licensing side, that looks downright deceptive.  There are no guarantees, but the general rule in open licensing has long been that there probably _isn't_ a contributor with patents waiting to charge you a patent license fee.  When it comes to standards developed largely by huge patent holding corporations, the better bet is that there _are_ patents to worry about.

My Take:  Best case, standards and software people get their heads together and seriously revisit _patentleft_: patent licenses that cover free and open implementations.  The life sciences are way ahead of the computer sciences on that front.  Second-best, the standards organizations fly their own flag and come up with a new licenses that clearly signals the patent situation, rather than introducing confusion about old terms like MIT and BSD.

Other Writing:

- [_Standards, Patents, Open Source_](https://writing.kemitchell.com/2019/10/03/Open-Standards.html)

<h2 id="weak">Stronger Weak Copyleft</h2>
[MongoDB](https://mongodb.com), maker of an eponymous database, wrote and adopted a new license, the [Server Side Public License](https://www.mongodb.com/licensing/server-side-public-license), that requires sharing back changes and extensions to the software, as well as infrastructure for offering the database as a service, but not applications built with the database.  They cited weaknesses in AGPLv3 and a fear that competitors like Amazon Web Services will outcompete them in offering MongoDB as a service.

Lots of controversy about SSPL has focused not so much on the license itself, but on the fact that a company like MongoDB wrote and released it.  There is also debate about the limits of copyleft, and whether it can or should reach software like orchestration and "rigging" for turning applications into hosted services.  Finally, some have objected to the specific drafting of SSPL, either because they think the reach of its copyleft could never be determined sufficiently, or because they don't see a fully open cloud offering as viable in the current business environment.

My Take:  Businesses need stronger copyleft licenses.  Starting from that baseline, exceptions to copyleft for applications developed with their software should we welcome.  That was certainly the case at the dawn of "open source" when Netscape pioneered the approach to make its web browser open, permitting closed plugins, to keep it competitive with Internet Explorer without simply handing competitors permission to fork or beat them with their own code.  That kind of license isn't easy to write, and design choices for SSPL, like writing it as a fork of AGPL, all but guaranteed an impenetrable, alienating text.

Other Writing:

- [_The Copyleft Bust-Up_](https://writing.kemitchell.com/2018/11/04/Copyleft-Bust-Up.html)
- [_SSPL Was Not Commons Clause_](https://writing.kemitchell.com/2019/06/13/SSPL-Not-Commons-Clause.html)
- [_Weak or Strong is Wrong_](https://writing.kemitchell.com/2019/03/11/Weak-Strong-Wrong.html)
- [_API Copyleft_](https://writing.kemitchell.com/2019/01/30/API-Copyleft.html)
- [_A Quick Note on SSPLv1_](https://blog.licensezero.com/2018/11/08/ssplv1-note.html)

<h2 id="strong">Stronger Strong Copyleft</h2>
The [Parity Public License](https://paritylicense.com), which I originally wrote for [License Zero](https://licensezero.com), strengthens copyleft by requiring users to share more code back in more scenarios.  My original goal was to make copyleft-based business models, especially dual licensing, available to makers of development tools.  But the license has seen much broader use among all kinds of business and activist developers who want effective copyleft without hard questions about the technicalities of GPL, AGPL, OSL, and so on.

Lots of controversy around the license focused on the business model that motivated its creation, and the fact that it came from a company.  The strength of its copyleft is also controversial.  Reaction to its plain-language drafting has been nearly uniformly good, though some have wondered how language so easy to read can be legally rigorous.

My Take:  Both businesses and activists need stronger copyleft licenses.

Other Writing:

- [_Free to Take Freedom_](https://blog.licensezero.com/2018/09/14/free-to-take-freedom.html)
- [_No Other Terms Before Me_](https://blog.licensezero.com/2018/10/26/no-other-terms.html)
- [_Mapping Open Business Models_](https://blog.licensezero.com/2018/10/17/mapping-models.html)
- [_The Open Source Definition as Copyleft Regulation_](https://writing.kemitchell.com/2018/11/05/OSD-Copyleft-Regulation.html)

<h2 id="ethical">Ethical Licensing</h2>
2019 saw a sudden uptick in proposals for open licenses with various added rules against use for unethical purposes or by specific unethical actors.  The [Responsible AI Licenses](http://licenses.ai/) prohibit a list of troubling use cases.  The [NoHarm License](https://github.com/raisely/NoHarm) is attempting to write out a full moral code.  Various licenses denying permission to United States immigration authorities, Immigration and Customer Enforcement, and their contractors, have tracked protests within and without large technology companies.  [996.ICU](https://996.icu/#/zh_CN), an effort out of China, prohibits use by companies violating labor laws.

My Take:  Free Software licenses began as ethical licenses.  A great deal of code is begin made in the open, or made solo when it could be made collaboratively, because developers can no longer avoid the fact that others are using their work directly against their values, and don't have a set of license terms to express and enforce their working conditions of conscience.  I don't necessarily support the effort to establish new driving ethical concerns as "free software" or "open source".  But I strongly support empowering developers to express their ethics in writing, refine those expressions together, and connect them to the power of their intellectual property rights.  I do wish the folks drafting new terms in moments of passion held on, kept the flame burning, and learned more of the craft of good drafting.

Other Writing:

- [_Talking Points: Ethical Licenses_](https://writing.kemitchell.com/living/Ethical-Licenses-Talking-Points.html)
- [_Ethical Subcommons Starter Kit_](https://writing.kemitchell.com/2019/03/15/Ethical-Subcommons.html)

<h2 id="api">API Derivative Works</h2>
Oracle's lawsuit against Google for infringement of copyright in APIs of the Java programming platform is headed to the Supreme Court.  So far, appellate holdings have favored Oracle and a broader reading of copyright to cover creative API designs.  That spells trouble for activists who oppose software copyright generally.  It also promises ripple effects through several popular copyleft licenses, including GPLv2, that set the reach of copyleft based on the legal definition of "derivative work".

My Take:  Free and open license wonks are notoriously bad at predicting legal outcomes.  They are, after all, a legal counterculture.  When the legal system has to fall back on policy principles to clarify vagueness and ambiguity in the law, they tend to track the policy thrust of ensuring creators compensation for the exploitation of their work, along with a correspondingly expansionist view of what copyright should cover.  That's not all bad for open licensing, especially copyleft.  Copyleft depends on copyright to require sharing back.  The stronger copyleft is, and the clearer that strength becomes, the stronger copyleft can be.  Meanwhile, permissive licenses can waive copyright as effectively after Oracle v. Google as before it.

<h2 id="definition">Definitional Politics</h2>
<!-- "open source" and "free software" -->

<!-- OSD and What is Free Software? -->

<!-- Emke submitting to OSI -->

<!-- trademarks -->

<!-- standards technocracy -->

<!-- proper lexicography -->

<h2 id="governance">Licensing Plus</h2>
<!-- community-driven -->

<h2 id="platforms">Open Source on Closed Platforms</h2>
<!-- Microsoft GitHub -->

<!-- GitLab -->

<!-- sr.ht -->

<!-- plain git, Scuttlebutt -->

<h2 id="data">Data Freedom</h2>
<!-- CAL -->

<!-- GDPR -->

<!-- CCPA -->

<h2 id="figurehead">Figurehead Follies</h2>
<!-- RMS -->

<!-- ESR -->

<!-- Perens? -->
