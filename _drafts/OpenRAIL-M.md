---
title: BigScience OpenRAIL-M
series: Line by Line
tags:
- Licensing
- Artificial Intelligence
---

## Big-Picture Takeaways

- Competitive leaders in this kind of work have learned they can use licenses to give codes of conduct for users teeth.  Ethical licensing has a home at the cutting edge of this work.

- OpenRAIL-M borrows very directly from existing work on permissive software licenses, specifically The Apache License, Version 2.0.  But it doesn't seem to have been informed much by prior work on stronger-copyleft, noncommercial, or ethically-restricted licenses for software.

## Open Questions

- To what extent does OpenRAIL-M have copyleft-like effects?

- If a licensee _fails_ to pass on OpenRAIL-M's ethical-use rules as required, what can the project steward, users, or people affected by prohibited uses do about it, legally?

## The License

> ## BigScience Open RAIL-M License
>
> dated August 18, 2022
>
> ### Section I: PREAMBLE
>
> This Open RAIL-M License was created by BigScience, a collaborative open innovation project aimed at the responsible development and use of large multilingual datasets and Large Language Models ("LLMs"). While a similar license was originally designed for the BLOOM model, we decided to adapt it and create this license in order to propose a general open and responsible license applicable to other machine learning based AI models (e.g. multimodal generative models).

Very typical story in open licensing.  First a license is written for a specific project.  Then it's tweaked for use with other projects.  GPL, MIT, BSD, and Apache all took this path.

> In short, this license strives for both the open and responsible downstream use of the accompanying model. When it comes to the open character, we took inspiration from open source permissive licenses regarding the grant of IP rights. Referring to the downstream responsible use, we added use-based restrictions not permitting the use of the Model in very specific scenarios, in order for the licensor to be able to enforce the license in case potential misuses of the Model may occur.

The phrase "open and responsible" feels like a good pitch for the purpose here.

> Even though downstream derivative versions of the model could be released under different licensing terms, the latter will always have to include --- at minimum --- the same use-based restrictions as the ones in the original license (this license).

This is likely to be an example of a set of terms where explanatory background or preamble text matter for interpretation of the operative terms that follow.  Which is to say, another example of how the sharp boundary between operative terms and other terms is fiction.

At summary level, this reminds a lot of copyleft and capsule summaries of the GPLs.  But it sounds like their intent is to require other licenses to include their use restrictions, as a kind of part or component of the overall license, rather than require use of this license as a whole.

> The development and use of artificial intelligence ("AI"), does not come without concerns.

Oh, it doesn't now?

> The world has witnessed how AI techniques may, in some instances, become risky for the public in general. These risks come in many forms, from racial discrimination to the misuse of sensitive information. BigScience believes in the intersection between open and responsible AI development; thus, this License aims to strike a balance between both in order to enable responsible open-science in the field of AI.

Repeating the open-and-responsible frame.

> This License governs the use of the model (and its derivatives) and is informed by the model card associated with the model.

None of "use", "model", or "derivatives" is terribly well defined here.  But that's for the operative terms to contend with.

The phrase "informed by" is unusual in legal writing.  To my eye, it doesn't clearly express that the model card's text is _part_ of the license text---"incorporated by reference".  But it could certainly help arguments that the model card is important evidence of what was meant by the terms, if a court determines some term is ambiguous and goes looking for evidence to resolve it.

> NOW THEREFORE, You and Licensor agree as follows:

The drafters seem to have started with the Apache License, Version 2.0 for their terms.  Apache says `TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION.`, which are mostly terms associated with copyright law.  `NOW, THEREFORE` is archaic cruft common in old American-style contract forms, and `agree as follows` is clearly contract language.

> 1\. Definitions

Apache-style, definitions-up-front section.

> (a) "License" means the terms and conditions for use, reproduction, and Distribution as defined in this document.

Clearly based on Apache.

> (b) "Data" means a collection of information and/or content extracted from the dataset used with the Model, including to train, pretrain, or otherwise evaluate the Model.  The Data is not licensed under this License.

I read this as trying to address the "Copilot spat out my source code!" problem.  These models are trained on a bunch of data.  Many of those data encode creative work covered by copyright.  People own those copyrights and potentially other kinds of rights involved.  The AI developers can't license those rights.

The mind-bender here is how the AI developers can both:

1.  give you a dataset that encodes everything you need to spit out copies of copyrighted works
2.  _not_ "reproduce" or "distribute" those works, in copyright terms, such that they'd need a license to do so

> (c) "Output" means the results of operating a Model as embodied in informational content resulting therefrom.

This is extremely vague, and "therefrom" doesn't really help any.  The definition makes "output" targetable.  Remains to be seen what they're going with that.

> (d) "Model" means any accompanying machine-learning based assemblies (including checkpoints), consisting of learnt weights, parameters (including optimizer states), corresponding to the model architecture as embodied in the Complementary Material, that have been trained or tuned, in whole or in part on the Data, using the Complementary Material.

Oh, boy.  Need some structure here.

```javascript
Object.prototype.isModel = function () {
  return this.accompanying(what/* the Model? */) &&
  this instanceof MachineLearningBasedAssemblies /* includes "checkpoints" */ &&
  (
    this.consistingOf(learntWeights) ||
    this.consistingOf(/* learnt? */Parameters/* including "optimizer states" */)
  ) &&
  this.correspondingTo(theModelArchitecture.asEmbodiedIn(theComplementaryMaterial)) &&
  this.trainedOrTunedOn(theData, {inWholOrInPart: true}) &&
  this.trainedOrTunedUsing(theComplementaryMaterial)
}
```

> (e) "Derivatives of the Model" means all modifications to the Model, works based on the Model, or any other model which is created or initialized by transfer of patterns of the weights, parameters, activations or output of the Model, to the other model, in order to cause the other model to perform similarly to the Model, including --- but not limited to --- distillation methods entailing the use of intermediate data representations or methods based on the generation of synthetic data by the Model for training the other model.

Copyright law defines "derivative work", but of all copyrightable works, generically.  It doesn't say anything about what derivative work means specifically for software or more specifically for trained models.

These terms define "Derivative of the Model" for themselves.

Parts of that definition seem point out to copyright law.  Specifically, the phrase "works based on the model" seems to allude to the Copyright Act's definition of "derivative work" as "a work based on one or more preexisting works...".  This could be read to define copyright derivative works of the copyrightable parts of the model into "Derivatives of the Model" throughout the terms of OpenRAIL-M.

Other parts of the definition seem to reach much more broadly.

"Modification" isn't a term with a strongly associated meaning under either copyright or patent law.  A court reading into that term would look to general usage and usage within the AI field.

The last part of the definition is very broad indeed.  The lawyers who've raised the vague and disfavored doctrine of "copyright misuse" against stronger copyleft licenses that don't limit their reach to copyright derivative works could raise the same argument here.  This isn't just copyright derivative works of copyrightable works in the model.  It's explicitly more than that.

> (f) "Complementary Material" means the accompanying source code and scripts used to define, run, load, benchmark or evaluate the Model, and used to prepare data for training or evaluation, if any. This includes any accompanying documentation, tutorials, examples, etc, if any.

In short, all the stuff in the repo that isn't the Model proper.

> (g) "Distribution" means any transmission, reproduction, publication or other sharing of the Model or Derivatives of the Model to a third party, including providing the Model as a hosted service made available by electronic or other remote means --- e.g. API-based or web access.

"Transmission" isn't a word with specific copyright meaning for the kinds of copyright works involved here.  "Reproduction" is, as more or less a synonym for "copy".  "Publication" had a specific meaning under an old version of the Copyright Act, and is often mapped to "distribution...to the public" in the wording of the current Copyright Act.  But here's it's tied to "sharing", which isn't a typical term in either patent or copyright law.

Note that "Distribution" covers things done to "Derivatives of the Model".  These terms are using copyright-like terms, with relationships like those under copyright law, but with far broader meanings all around.

Defining "distribution" to include providing network services is a move we've seen long ago in some less-used "network-copyleft" licenses like the Open Software License.  The GPLs and copyleft licenses inspired by them typically implemented copyleft as triggered by "distribution".  Later licenses looking to plug the "ASP Loophole"---avoiding copyleft by hosting services for users, rather than sending copies of the software to users to run for themselves---sometimes did so by expanding "distribution" in this way.

> (h) "Licensor" means the copyright owner or entity authorized by the copyright owner that is granting the License, including the persons or entities that may have rights in the Model and/or distributing the Model.

> (i) "You" (or "Your") means an individual or Legal Entity exercising permissions granted by this License and/or making use of the Model for whichever purpose and in any field of use, including usage of the Model in an end-use application --- e.g. chatbot, translator, image generator.

Note the two-pronged structure here, _either_:
1. you need this license for permission to do what copyright or patent law would otherwise make infringement
2. you're _using_ the model

> (j) "Third Parties" means individuals or legal entities that are not under common control with Licensor or You.

> (k) "Contribution" means any work of authorship, including the original version of the Model and any modifications or additions to that Model or Derivatives of the Model thereof, that is intentionally submitted to Licensor for inclusion in the Model by the copyright owner or by an individual or Legal Entity authorized to submit on behalf of the copyright owner. For the purposes of this definition, "submitted" means any form of electronic, verbal, or written communication sent to the Licensor or its representatives, including but not limited to communication on electronic mailing lists, source code control systems, and issue tracking systems that are managed by, or on behalf of, the Licensor for the purpose of discussing and improving the Model, but excluding communication that is conspicuously marked or otherwise designated in writing by the copyright owner as "Not a Contribution."

Copied form Apache 2.0 and tweaked.

The phrase "work of authorship" is copyright-speak.  Roughly, it means stuff that could be copyrighted.  But as we saw earlier, modifications to, additions to, or "Derivatives of the Model" range more broadly.  "Including" is a bit confusing here, but in the end the concern is getting license rights from contributors.  Even projects under the Apache Foundation, using the Apache License with these terms, tend to rely on separate contributor license agreements, making this definition and related terms essentially dead code.

> (l) "Contributor" means Licensor and any individual or Legal Entity on behalf of whom a Contribution has been received by Licensor and subsequently incorporated within the Model. Section II: INTELLECTUAL PROPERTY RIGHTS Both copyright and patent grants apply to the Model, Derivatives of the Model and Complementary Material. The Model and Derivatives of the Model are subject to additional terms as described in Section III.

More rigging for Apache-style CLA-style language built into the license.

> 2\. Grant of Copyright License. Subject to the terms and conditions of this License, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable copyright license to reproduce, prepare, publicly display, publicly perform, sublicense, and distribute the Complementary Material, the Model, and Derivatives of the Model.

Apache-style copyright license grant.  Note the scope:
- Model
- Complementary Material
- Derivatives of the Model

That last begs the question: Is this actually a permissive license?  The terms seem to be granting us a license not just for the model, but for further work on it and even other models just loosely based on it, according to the broad definition of "Derivatives of the Model".

The limit here might be "Contributor".  Only Contributors are granting licenses here.  Per the definition of "Contributor", you're only a Contributor---i.e., granting licensees under these terms---if the Licensor has received and "incorporated" a Contribution from you.

That definition of "Contributor" ended with a bunch of terms about the scope of this Section II.  Kind of a surprise seeing them there.  The effect I see is just reinforcing that the license grants in Section II do in fact apply to Derivatives of the Model.  But we've also been promised some wrinkles in Section III.

> 3\. Grant of Patent License. Subject to the terms and conditions of this License and where and as applicable, each Contributor hereby grants to You a perpetual, worldwide, non-exclusive, no-charge, royalty-free, irrevocable (except as stated in this paragraph) patent license to make, have made, use, offer to sell, sell, import, and otherwise transfer the Model and the Complementary Material, where such license applies only to those patent claims licensable by such Contributor that are necessarily infringed by their Contribution(s) alone or by combination of their Contribution(s) with the Model to which such Contribution(s) was submitted. If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the Model and/or Complementary Material or a Contribution incorporated within the Model and/or Complementary Material constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for the Model and/or Work shall terminate as of the date such litigation is asserted or filed.

Apache-2-style patent grant with termination clause, plus some conforming changes.  Apart from covering both Model and Complementary Material, the only substantive change I see is a shorter trigger for termination:

> > If You institute patent litigation against any entity (including a cross-claim or counterclaim in a lawsuit) alleging that the <del>Work</del><ins>Model and/or Complementary Material</ins> or a Contribution incorporated within the <del>Work</del><ins>Model and/or Complementary Material</ins> constitutes direct or contributory patent infringement, then any patent licenses granted to You under this License for <del>that Work</del><ins>the Model and/or Work</ins> shall terminate <mark>as of the date such litigation is <ins>asserted or</ins> filed</mark>.

Small bug to squash here: There's a remaining reference to "Work" here, which isn't a defined term under OpenRAIL-M.  Should have been replaced with "the Model and/or Complementary Material".

> ### Section III: CONDITIONS OF USAGE, DISTRIBUTION AND REDISTRIBUTION

> 4\. Distribution and Redistribution. You may host for Third Party remote access purposes (e.g. software-as-a-service), reproduce and distribute copies of the Model or Derivatives of the Model thereof in any medium, with or without modifications, provided that You meet the following conditions:

Attaching some requirements.

Whether these rules are conditions to copyright or patent licenses, and therefore grounds for infringement lawsuits that can get all the things infringement plaintiffs can get, like minimum "statutory" damages and attorneys' fees, will be open to debate.

> a. Use-based restrictions as referenced in paragraph 5 MUST be included as an enforceable provision by You in any type of legal agreement (e.g. a license) governing the use and/or distribution of the Model or Derivatives of the Model, and You shall give notice to subsequent users You Distribute to, that the Model or Derivatives of the Model are subject to paragraph 5. This provision does not apply to the use of Complementary Material.

This is the crux of the license's attempt to make sure the ethical "use restrictions" at the end of the license follow the software around so they apply to all users.

This language tries to do three things:

1.  Let others choose the license terms for their own model work, but require those terms to include the use restrictions.

2.  Require those others to make anyone _they_ share with aware of the use restrictions.

3.  Require all this for models, but not the other stuff that comes with this model.

A few things jump out.

First, the requirement is to make the use restrictions "an enforceable provision by You", which I'd read as "a provision enforceable by You".  "You" is defined to mean whoever's getting a license under OpenRAIL-M.  I do _not_ see a requirement to make the use restrictions enforceable by the Licensor giving the original, OpenRAIL-M license for the model.  Nor do I see any requirement to make the use restrictions enforceable by end users or people affected by a use in violation of the restrictions.  Enforcing the use restrictions under a different license seems to be entirely up to the people or companies giving that license.  I don't see anything that says they actually have to enforce it.

Second, requiring other people to be made aware of restrictions isn't necessarily the same as making sure they're legally accountable to follow those restrictions.  OpenRAIL-M itself assumes that people and companies need copyright licenses to work with the model as released.  To get those licenses, they have to agree to OpenRAIL-M, which only comes along with the use restrictions.  Depending on the context, that may not be true of the original model plus additions or modifications, or models based on the original model that are covered by the definition of "Derivatives of the Model".

Third, I don't know why the team might be alright allowing use of their Complementary Materials---scripts running, loading, benchmarking, and evaluation, for example---in any of the nefarious ways prohibited by the use restrictions.  Perhaps quality scripts and tools for those tasks are already available or progressing under permissive license terms without restrictions.

> b. You must give any Third Party recipients of the Model or Derivatives of the Model a copy of this License;

This looks mostly like a typical copy-of-the-license requirement under any common permissive license.  But again, the scope of "Derivatives of the Model", as defined, potentially goes far beyond what's license under OpenRAIL-M.  If I create a Derivative of the Model with nothing more than some initial weights from the original Model and release it under my own license terms, incorporating the use restrictions as required, apparently I still have to provide a copy of OpenRAIL-M downstream.  I'd want to add some notes to make clear that only the use restrictions form that copy apply to anything.

> c. You must cause any modified files to carry prominent notices stating that You changed the files;

An annoying but common requirement of many permissive and copyleft licenses.  Straight out of Apache 2.0.

> d. You must retain all copyright, patent, trademark, and attribution notices excluding those notices that do not pertain to any part of the Model, Derivatives of the Model.

Straight out of Apache 2.0, with some adaptation.

> You may add Your own copyright statement to Your modifications and may provide additional or different license terms and conditions --- respecting paragraph 4.a. --- for use, reproduction, or Distribution of Your modifications, or for any such Derivatives of the Model as a whole, provided Your use, reproduction, and Distribution of the Model otherwise complies with the conditions stated in this License.

<!-- TODO: Continue annotating from here. -->

> 5\. Use-based restrictions. The restrictions set forth in Attachment A are considered Use-based restrictions. Therefore You cannot use the Model and the Derivatives of the Model for the specified restricted uses. You may use the Model subject to this License, including only for lawful purposes and in accordance with the License. Use may include creating any content with, finetuning, updating, running, training, evaluating and/or reparametrizing the Model. You shall require all of Your users who use the Model or a Derivative of the Model to comply with the terms of this paragraph (paragraph 5).
>
> 6\. The Output You Generate. Except as set forth herein, Licensor claims no rights in the Output You generate using the Model. You are accountable for the Output you generate and its subsequent uses. No use of the output can contravene any provision as stated in the License.
>
> ### Section IV: OTHER PROVISIONS
>
> 7\. Updates and Runtime Restrictions. To the maximum extent permitted by law, Licensor reserves the right to restrict (remotely or otherwise) usage of the Model in violation of this License, update the Model through electronic means, or modify the Output of the Model based on updates. You shall undertake reasonable efforts to use the latest version of the Model.
>
> 8\. Trademarks and related. Nothing in this License permits You to make use of Licensors' trademarks, trade names, logos or to otherwise suggest endorsement or misrepresent the relationship between the parties; and any rights not expressly granted herein are reserved by the Licensors.
>
> 9\. Disclaimer of Warranty. Unless required by applicable law or agreed to in writing, Licensor provides the Model and the Complementary Material (and each Contributor provides its Contributions) on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE. You are solely responsible for determining the appropriateness of using or redistributing the Model, Derivatives of the Model, and the Complementary Material and assume any risks associated with Your exercise of permissions under this License.
>
> 10\. Limitation of Liability. In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use the Model and the Complementary Material (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.
>
> 11\. Accepting Warranty or Additional Liability. While redistributing the Model, Derivatives of the Model and the Complementary Material thereof, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License. However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.
>
> 12\. If any provision of this License is held to be invalid, illegal or unenforceable, the remaining provisions shall be unaffected thereby and remain valid as if such provision had not been set forth herein.
>
> END OF TERMS AND CONDITIONS

> ## Attachment A<br>Use Restrictions
>
> You agree not to use the Model or Derivatives of the Model:
>
> (a) In any way that violates any applicable national, federal, state, local or international law or regulation;
>
> (b) For the purpose of exploiting, harming or attempting to exploit or harm minors in any way;
>
> (c) To generate or disseminate verifiably false information and/or content with the purpose of harming others;
>
> (d) To generate or disseminate personal identifiable information that can be used to harm an individual;
>
> (e) To generate or disseminate information and/or content (e.g. images, code, posts, articles), and place the information and/or content in any context (e.g. bot generating tweets) without expressly and intelligibly disclaiming that the information and/or content is machine generated;
>
> (f) To defame, disparage or otherwise harass others;
>
> (g) To impersonate or attempt to impersonate (e.g. deepfakes) others without their consent;
>
> (h) For fully automated decision making that adversely impacts an individual's legal rights or otherwise creates or modifies a binding, enforceable obligation;
>
> (i) For any use intended to or which has the effect of discriminating against or harming individuals or groups based on online or offline social behavior or known or predicted personal or personality characteristics;
>
> (j) To exploit any of the vulnerabilities of a specific group of persons based on their age, social, physical or mental characteristics, in order to materially distort the behavior of a person pertaining to that group in a manner that causes or is likely to cause that person or another person physical or psychological harm;
>
> (k) For any use intended to or which has the effect of discriminating against individuals or groups based on legally protected characteristics or categories;
>
> (l) To provide medical advice and medical results interpretation;
>
> (m) To generate or disseminate information for the purpose to be used for administration of justice, law enforcement, immigration or asylum processes, such as predicting an individual will commit fraud/crime commitment (e.g. by text profiling, drawing causal relationships between assertions made in documents, indiscriminate and arbitrarily-targeted use).
