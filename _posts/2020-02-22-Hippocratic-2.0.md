---
title: Skimming Hippocratic License Version 2.0
description: text and quick thoughts
tags:
- Licenses
- Ethics
- Ethics Licensing
---

A group coalescing around [firstdonoharm.dev](https://firstdonoharm.dev) has published [version 2.0 of a "Hippocratic License"](https://firstdonoharm.dev/version/2/0/license.html).  I'm not directly involved.  But here's a quick fly-through pass.

[Usual disclaimer applies.](https://writing.kemitchell.com/2019/11/30/Legal-Advice.html)  If you take my comments and run with them, you're on your own.  I won't be held professionally responsible for any ills that may befall you.  Need a lawyer?  Hire one.

> Copyright (YEAR) (COPYRIGHT HOLDER)

MIT and BSD folks are used to copyright notices in licenses, but they're a pain in the butt and old hat.  Compare the [PolyForm](https://polyformproject.org/) licenses, which require preserving copyright info it takes a particular form, or [Blue Oak's model permissive license](https://blueoakcouncil.org/license), which dispenses with copyright notice as a whole, as unnecessary.

> Hippocratic License Version 2.0.

Versioning is good.  I tend to like three-component, `x.y.z` numbers.  But that's just preference.

> Licensor hereby grants permission by this license ("License"),

Legal word salad.  Even "Licensor licenses..." would be redundant.  Throat clearing.

I'd strongly recommend starting the license with a [statement of its general purpose and intent](https://writing.kemitchell.com/2019/01/10/Discipline-Stated-Purpose.html).  Then implement that purpose with more specific terms.

> free of charge, to any person or entity (the "Licensee") obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

MIT-derived.  But [MIT is a crusty old license](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html) with [lots of known issues](https://writing.kemitchell.com/2016/09/21/MIT-License-Line-by-Line.html).  Several of which Hippocratic inherits here.

> * The above copyright notice and this License or a subsequent version published on the Hippocratic License Website (https://firstdonoharm.dev/) shall be included in all copies or substantial portions of the Software.

This seems ill-advised.  Basically, this license is building in the kind of choice people make with "GPL 3.0 or later", to delegate license maintenance to the Free Software Foundation, except Hippocratic delegates to a website rather than any identifiable organization with known governance structure.  Who controls that website?  What assurance do I have about the next version of this license?  Can the answers change?

> Licensee has the option of following the terms and conditions either of the above numbered version of this License or of any subsequent version published on the Hippocratic License Website.

What if version 3.0 intentionally or accidentally allows uses that I find reprehensible?  There's apparently no option to just use Hippocratic 2.0 as written, without delegating change authority to the website.

> * Compliance with Human Rights Laws and Human Rights Principles:
>
>   1. Human Rights Laws. The Software shall not be used by any person or entity for any systems, activities, or other uses that violate any applicable laws, regulations, or rules that protect human, civil, labor, privacy, political, environmental, security, economic, due process, or similar rights (the "Human Rights Laws").

"Any applicable laws" makes specific mention of human rights law functionally unnecessary.  Maybe that emphasis was rhetorically motivated.  But adding more language to legal documents isn't an idempotent, side-effect free operation.  Courts will try to make sense of this section and the license as a whole, under rules of construction that non-lawyers often find bemusing.  For example, courts will try to give each word meaning independent from all the others.

> Where the Human Rights Laws of more than one jurisdiction are applicable to the use of the Software, the Human Rights Laws that are most protective of the individuals or groups harmed shall apply.

This probably seems vague to programmers, but isn't a big deal from a legal point of view.  We do this kind of thing in contract and policy terms for, say, privacy compliance all the time.  That doesn't mean it's bulletproof.

For example, what if relevant laws conflict, rather than simply require different extents of protection?

>   2. Human Rights Principles. Licensee is advised to consult the articles of the United Nations Universal Declaration of Human Rights (https://www.un.org/en/universal-declaration-human-rights/) and the United Nations Global Compact (https://www.unglobalcompact.org/what-is-gc/mission/principles) that define recognized principles of international human rights (the "Human Rights Principles").

Unclear whether this is purely advisory or trying to incorporate those documents definitionally.  There is also the trouble of these broad statements being formulated fundamentally different from rules or codes of permissible conduct, especially from the common-law point of view.

To give a sense, UDHR 16(1) says "Men and women of full age ... have the right to marry and to found a family."  Does the license permit use in classifying marriage applicants, and denying marriage applications for same-sex marriages?  Article 24 reads "Everyone has the right to rest and leisure, including reasonable limitation of working hours and periodic holidays with pay."  How does that apply?

I've [described an approach to formulating consensus around ethical codes of conduct](https://writing.kemitchell.com/2019/03/15/Ethical-Subcommons.html) here on the blog.  I went to the trouble precisely I'm dismayed to see so many writing ethically motivated licenses attempting to draft off problematic and highly generalist declarations, like UDHR, on the one hand, or using proxies for ethical behavior, like cooperative form of organization, on the other.  If I had to distill it all down to a pithy phrase:  Don't incorporate your code of ethics by reference.  It's more important to put hands on that content, and deliberate it, than to rig up the machinery of a license that merely connects existing documents to software.

> It is Licensor's express intent that all use of the Software be consistent with Human Rights Principles.

This is confusing.  Licensor's intent can be relevant for interpreting license terms, but that's not the whole story.  Courts will also consider what license _recipients_ could have reasonably expected the terms to mean.

If this is really a rule requiring compliance with the named principles, that ought to be spelled out as a rule and a condition of the license.  And that should very likely be accompanied by some notion of process for determining or adjudicating whether conduct complies.

> If Licensor receives notification or otherwise learns of an alleged violation of any Human Rights Principles relating to Licensee's use of the Software, Licensor may in its discretion and without obligation

A licensor could waive terms of its license whether those terms said so or not.  This whole provision might be read as `NOP`.

> (i) (a) notify Licensee of such allegation and (b) allow Licensee 90 days from notification under (i)(a) to investigate and respond to Licensor regarding the allegation and (ii) (a) after the earlier of 90 days from notification under (i)(a), or Licensee's response under (i)(b), notify Licensee of License termination and (b) allow Licensee an additional 90 days from notification under (ii)(a) to cease use of the Software.

Out of context, the parts on termination might seem to _restrict_ when licensors can terminate.  But in context ("may in its discretion and without obligation"), I think it's up for debate.

If you put terms in a license, and that license ends up in dispute, you can't unshow the language to the judge that has to decide.  When there's no clear-cut answer, judges will use all the material in the "four corners" of the license text to try to determine meaning.

>   3. Indemnity. Licensee shall hold harmless and indemnify Licensor against all losses, damages, liabilities, deficiencies, claims, actions, judgments, settlements, interest, awards, penalties, fines, costs, or expenses of whatever kind, including Licensor's reasonable attorneys' fees, arising out of or relating to Licensee's non-compliance with this License or use of the Software in violation of Human Rights Laws or Human Rights Principles. 

Something like this is common in commercial license terms.  Indemnities back aren't unheard of in open licenses, either, as in Apache 2.0 or EPL 2.0.  But offhand, I believe this particular kind of indemnity would be new.  Existing indemnities in open licenses typically cover the case where recipients offer more generous terms, like warranties, over and above what the original developer's provide.  Not uses of the software as provided.  We typically think of warranty disclaimers, limits on liability, and damages exclusions addressing those risks.

> * Enforceability: If any portion or provision of this License is determined to be invalid, illegal, or unenforceable by a court of competent jurisdiction, then such invalidity, illegality, or unenforceability shall not affect any other term or provision of this License or invalidate or render unenforceable such term or provision in any other jurisdiction.

There's nothing unusual about this kind of term, which lawyers call a "severability clause".  This one looks like it was copied out of a crusty commercial contract form.

> Upon a determination that any term or provision is invalid, illegal, or unenforceable, to the extent permitted by applicable law, the court may modify this License to affect the original intent of the parties as closely as possible.

Lawyers call this a "savings clause".  They're widely considered boilerplate.  You'll see them in many, many kinds of contracts.

The concept of "intent of the parties" makes less sense in the context of a unilateral license than a negotiated, two-way deal.

> The section headings are for convenience only and are not intended to affect the construction or interpretation of this License.

This is fairly standard contract boilerplate.  But I don't think that means it makes sense.

What's the purpose of including this rule?  Which headings might be misleading?

> Any rule of construction to the effect that ambiguities are to be resolved against the drafting party shall not apply in interpreting this License. The language in this License shall be interpreted as to its fair meaning and not strictly for or against any party.

There is indeed such a rule of construction under typical US contract law.  But considering the reasons for it, I'm not sure how effective this disclaimer can be.  A public license isn't just one-way.  There's usually no opportunity to negotiate it whatever.

> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

Straight out of MIT.  Orthodox legalese, but orthodox isn't necessarily.  Again, compare the Blue Oak Model License and Polyform licenses.
