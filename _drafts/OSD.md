This is the second in [a series inspired by MongoDB's Server Side Public License](/series/SSPL.html) and ensuing debate.  It builds on [the first](https://writing.kemitchell.com/2018/10/24/How-to-Speak-Copyleft.html), which sets out a vocabulary of copyleft design and regulation used here.

------

How does the Open Source Definition regulate maintenance of strong copyleft terms in open source licenses?  Sporadically, unhelpfully, and not in ways that help resolve current controversies.  A few Definition criteria set specific limits, but most simply don't say anything about copyleft design choices at all.  Unhelpfully, a few criteria, read out of context, are highly susceptible to readings that prohibit all copyleft generally.  Those misreadings clog up debate about each new strong-copyleft license.

In reading the Definition for copyleft regulation, we can ask three specific questions:

1. Does the Definition prohibit specific language in copyleft implementations?

   For example:  Does the Definition prohibit use of the term "restriction"?

2. Does the Definition prohibit specific copyleft design choices for trigger, reach, licensing, or distribution?

   For example:  Does the Definition prohibit triggering on running software without changes to provide network services?

3. Does the Definition prohibit copyleft design approaches more generally?

   For example:  Does the Definition prohibit designs that trigger on network use and reach beyond derivative works of the licensed software?  Designs that seem too strong, in some other way?

In the end, the Open Source Definition provides neither holistic design-approach regulation, nor regulation for each copyleft design choice.  To establish effective regulation for open source copyleft, we have to look outside the definition.

In a forthcoming post, I'll do that, to offer a usable effective regulatory framework.  This post, however, will cover only what we can glean from the text of the Open Source Definition, its history, and the licenses the Open Source Initiative has approved under it.

## Clear Copyleft Regulations

Three Open Source Definition criteria---3, 8, and 10---clearly regulate copyleft design choices.

### Allow the Same Terms for Derived Works

Criterion 3 of the Definition was brought over from the Debian Free Software Guidelines without change:

> **3. Derived Works**
>
> The license must allow modifications and derived works, and must allow them to be distributed under the same terms as the license of the original software.

Criterion 3 is a clear regulation of licensing copyleft design choices.  An open source copyleft rule must at least allow the same license terms for work within its reach.

It's not clear from the text of the Definition whether the same terms must be the _only_ terms on which "derived works" can be licensed.  That was true of GPLv2, listed first in the "Example Licenses" section of the Debian Free Software Guidelines.  However, there are three strong arguments against requiring the same terms, rather than merely allowing them among other choices.

First, criterion 3 says that the license must "allow" the same terms, not that the license must "require" them.

Second, permissive licenses like BSD, another license listed in the "Example Licenses" section of the Debian Free Software Guidelines, permit distributing "derived works" under any terms.  There's no reason evident from the text of the Definition why permissive licenses should be able to do this, but copyleft licenses should not.

Third, the Open Source Initiative has approved licenses that permit different terms for at least parts of "derived works".  For example, section 13 of GPLv3 and AGPLv3 create a compatibility bridge between them, by allowing licensees to meet their copyleft requirements while keeping GPLv3 and AGPLv3 contributions to a single overall work under their respective licenses.

### No Product-Specific Licensing

Criterion 8 of the Debian Free Software Guidelines had to be generalized for the Open Source Definition:

<blockquote><p><strong>8. License Must Not Be Specific to <del>Debian</del><ins>a Product</ins>.</strong></p><p>The rights attached to the program must not depend on the program’s being part of a <del>Debian system.</del> <ins>particular software distribution.</ins> If the program is extracted from <del>Debian</del> <ins>that distribution</ins> and used or distributed <del>without Debian but otherwise</del> within the terms of the program’s license, all parties to whom the program is redistributed should have the same rights as those that are granted in conjunction with the <del>Debian system.</del> <ins>original software distribution.</ins></p></blockquote>

Criterion 8 is a clear regulation of licensing copyleft design choices.  An open source copyleft rule cannot vary the terms required for parts taken out of the program and parts left with or as a part of it.

### Technology Neutrality

Open Source Definition criterion 10 was not part of the Debian Free Software Guidelines, which included an "Example Licenses" section as number 10, instead.

> **10. License Must Be Technology-Neutral**
> No provision of the license may be predicated on any individual technology or style of interface.

Criterion 8 is a clear regulation of distribution and terms copyleft design choices.  An open source copyleft license cannot require licensees to use a specific technology for licensing or distributing code within its reach.