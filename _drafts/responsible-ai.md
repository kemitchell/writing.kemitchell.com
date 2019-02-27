---
title: Responsible AI Licenses
description:
layout: post
---

## End-User License Agreement

> END USER LICENSE AGREEMENT

All-caps aren't legally necessary, and make this harder to read.  Replacing with _italics_ below.

> _Please read this end user license agreement ("Agreement") carefully.  This is a legal agreement.  By clicking "I accept", downloading, installing, logging into, accessing or otherwise using any part of [] ("Company") software-as-aservice product, application, services, or related materials (collectively, the "Product"), or otherwise manifesting your assent to these terms, you are agreeing to be bound by the terms of this Agreement. If you do not unequivocally agree to the terms of this Agreement, click "I do not accept" and do not download, install, access, copy, or otherwise use the Product._

Typo: Use serial commas, or don't.

Typo: "software-as-aservice".  Probably missed because Word disables spell checking in ALL CAPS text by default.

> _In the event you accept this Agreement in error, you are strictly prohibited from using the Product.  Unauthorized use may result in civil or criminal liability.  Use of the Product by you or your agent signifies your agreement to be bound by the terms of this Agreement._

Both of these ALL CAPS paragraphs say essentially the same thing: In order to get a license under these terms, you have to agree to these terms.  Compare the "Acceptance" section of my [API Copyleft License](https://github.com/kemitchell/api-copyleft-license):

```text
In order to receive this license, you must agree to its rules.
Those rules are both obligations under our agreement and
conditions to your license.  You may not do anything with this
software that triggers a rule you cannot or will not follow.
```

Continuing on:

> This Agreement is between Company and any person or entity ("User," "you" or "your") who purchases, downloads, installs, logs into, accesses or otherwise uses the Product.  In the event that User purports to be the agent of, represent or otherwise act on behalf of an entity or any other person, references to "User" shall include such entity or person in addition to such representative.  Company and User each is a "party" and are collectively referred to as the "parties."

If the person accepting the EULA doesn't have authority to bind their company, this EULA's terms can't give them that authority.

> 1\.  License
>
> a.  License.
>
> Subject to the terms of this Agreement, Company hereby grants User a limited, personal, nonexclusive, revocable, nontransferable license to access and use the Product in its original form as delivered by Company only and solely for internal purposes related to your business (and not for service bureau, time-sharing or similar services) in accordance with the terms of this Agreement and all applicable laws, rules, and regulations.

This is awkward in part because "Product" could be an application or a service.  With the exception of any client-side code served, users don't typically need a license to use services.

> User is not permitted to use the Product on behalf of third parties without the written consent of Company.  User shall not exceed the scope of User's license to use the Product, and User shall not provide User's Account information to another User for any reason, including, without limitation, in order for such other User to access additional features of the Product.

Fairly typical no-service-bureau rule, though this one is a tad weak.  If I run a travel agency, and my people use the Product to respond to customer calls, are they using the Product on behalf of third parties?

> Modification, reverse engineering, reverse compiling or disassembly of the Product are expressly prohibited.

Typical no-reverse rule.

> b.  Accessibility of the Product.

When I see "accessibility", I think accessibility for folks with visual and other impairments, [WCAG](https://www.w3.org/WAI/standards-guidelines/wcag/), and so on.  This is actually about _availability_ or _uptime_.

Terms about availability, like other terms that follow, are common in _terms of service_, and not end-user license agreements.  By including such terms, this EULA feels a lot more like terms of service.

> User understands and agrees that from time to time that the Product or certain features or functionality of the Product may be inaccessible or inoperable for any reason,[...]

I would stop here.

> [...] including, without limitation:
>
> (i) equipment or software malfunctions;
>
> (ii) periodic maintenance procedures or repairs which Company may undertake from time to time; or
>
> (iii) causes beyond the control of Company or which are not foreseeable by Company.

Once you show a court these examples, it can't unsee them.  They will affect construction of the terms of the general class, "any reason", which they can only narrow.

> User acknowledges that access to or features and functionality of the Product are provided over various facilities and communications lines, and that information will be transmitted over local exchange and Internet backbone carrier lines and through routers, switches and other devices (collectively, "carrier lines") owned, maintained and serviced by third-party carriers, utilities and Internet service providers, all of whom are beyond Company's control.  Use of the carrier lines to access and use the Product and transmit information is solely at User's risk and is subject to all local, state, federal and international laws.

Again, this is just potentially strangling dress-up on "any reason".

> c.  Equipment.
>
> User shall be solely responsible for providing, maintaining and ensuring the compatibility of all hardware, software, electrical and other physical requirements necessary for User's access to and use of the Product, including, without limitation, telecommunications and Internet access connections and links, web browsers or other equipment, and programs and services required to access and use the Product.

This is very typical.  But does it go without saying?

> 2\.  User Account
>
> a.  Account.
>
> In order to access and use the Product, User may be required to register with Company and select a username and password (a User's "Account").  This Account shall be used only by User, and User may not share or otherwise disclose User's Account information to any other party.

Typical rule against reuse of account credentials.

> User shall be responsible for the security, confidentiality, and integrity of User's Account, any authorized or unauthorized access and use of User's account by any person, and all information that User receives, transmits through or stores using or through the Product.

Typical rule about responsibility for misuse or compromise of account credentials.

> If, at any time, User learns or suspects that User's Account information was disclosed or made known to any person other than User, User agrees to immediately notify Company.

Again, typical.

> User agrees to keep User's Account information current.

Bone-stock.

> User agrees not to access the Product or any other aspect of or information contained on the Product through any technology or means other than through User's Account.

What does this mean?

This seems fairly close to a typical rule against using automated means, or means other than a web browser, to access a web service.  Sometimes those rules get phrased instead as prohibitions on "spidering", "crawling", "scripting", and so on.

> b.  Monitoring.
>
> Company reserves the right to monitor User accounts to
>
> (i) operate the Product properly;
>
> (ii) administer and manage Company's business;
>
> (iii) provide all Users with the highest quality products and services;
>
> (iv) verify compliance with laws or this Agreement;
>
> (v) protect Company and its users; and/or
>
> (vi) satisfy any law, regulation or other government request.

This belongs in a privacy notice.

> c.  Other Users.
>
> User acknowledges that other users have access to the Product and information made available thereby.  The actions of such other users are beyond the control of Company.  Accordingly, Company does not assume any liability for or relating to any impairment of the privacy, security, confidentiality, integrity, availability or restricted use of the Product or any content provided thereby from any other user's actions or omissions.

I can see where this is coming from, but could easily see it overreaching.  For example, isn't it the service provider's responsibility to make sure that access controls effectively segregate different private user information?

> d.          Privacy.
>
> User agrees that Company may collect, store, and use data about Users, User's system, and User's use of the Product.  Company collects, stores, and uses data from Users in accordance with the following privacy policy, located at [Insert Link] (the "Privacy Policy"), which is incorporated herein by this reference.

Company may not be able to give consent on its users's behalf.

> 3\.  Company and User Content
>
> a.  Company Content.
>
> Company allows the access of information, software, photos, video, text, graphics, music, sounds or other material provided by Company or third parties (collectively, "Company Content")[...]

Could we just say "materials", and leave it at that?

> [...]that is protected by copyrights, patents, trademarks, trade secrets or other proprietary rights,[...]

Could we just say "intellectual property" or "proprietary rights"?

> [...]and that these rights are valid and protected in all forms, media and technologies existing now or hereafter developed.

Grammar error with "and that".

> The terms of this Agreement govern User's use of any Company Content.

OK.

> b.  User Content.
>
> Company may allow users to create, post, share, or upload content, including, reviews, comments, photos, videos, graphics, text, or other materials ("User Content").

See comment on "Company Content" above.

> User shall be solely responsible for the posting or provision of User Content.  In connection with the User Content, User affirms, represents and warrants that User owns or has the necessary licenses, rights, consents and permissions to use and authorize Company to use all proprietary rights in and to any and all User Content to enable inclusion and use of the User Content in the manner contemplated by the Product.  User retains all ownership rights in User Content.

Fairly typical right-to-post provision.  But we're lacking any kind of explicit license from User to Company.

> c.  Inaccurate Content.
>
> All User Content (as defined herein) originates from users, and as such, is beyond the control of Company.  Company neither initiates the posting of such User Content nor monitors the specific content or accuracy of the User Content being posted.  Without limiting the generality of any other provision of this Agreement, Company shall have no responsibility for or liability related to the accuracy, content, completeness, suitability, fitness for a particular purpose, or delivery of the User Content provided by any user.  User is responsible for the accuracy, content, completeness, suitability, fitness for a particular purpose, and delivery of the User Content posted by such User, and User warrants that the User Content posted by User is accurate, current and complete.  User shall indemnify Company for any and all losses or damages Company may incur regarding or related to the accuracy, content, currency, completeness or delivery of the User Content furnished by User pursuant to the indemnification provisions of this Agreement.

Pretty typical of terms of service.

> 4\.  Conduct and Prohibitions

> a.  Company Standards and Conduct.
>
> User's privilege to use the Product depends on User's compliance with the standards and conduct guidelines set forth by Company from time to time.  Company may revoke User's privileges or take any other appropriate measures to enforce these guidelines if violations are brought to its attention.

The User gets a _license_ above.

> User agrees not to use the Product to:

This kind of acceptable-use list is right out of terms of service, and out of place in an end-user license agreement.

> i.  "stalk," harass, threaten, or invade the privacy of another User of the Product or engage in predatory behavior towards another User of the Product or any other person; upload, post, email or otherwise transmit any User Content that is unlawful, harmful, threatening, abusive, harassing, tortious, defamatory, libelous, slanderous, vulgar, obscene, pornographic, profane, indecent, sexually explicit, invasive of another's privacy, hateful, or racially, ethnically or otherwise objectionable or intended to offend any person or that is otherwise objectionable to Company in its sole discretion;
>
> ii.  impersonate any person or entity or otherwise misrepresent its affiliation with a person or entity;
>
> iii.  forge headers or otherwise manipulate identifiers in order to disguise the origin of any User Content transmitted through the Product;
>
> xi.  interfere with or disrupt the servers or networks connected to the Product, or disobey any requirements, procedures, policies or regulations of networks connected to the Product;
>
> iv.  upload, post or otherwise transmit any User Content that User does not have a right to transmit under any law or under contractual or fiduciary relationships;
>
> v.  upload, post or otherwise transmit any User Content that infringes any patent, trademark, trade secret, copyright or other proprietary rights of any party;

> vi.  upload, post or otherwise transmit any unsolicited or unauthorized advertising, promotional materials, "junk mail," "spam," "chain letters," "pyramid schemes," multi-level marketing opportunities, franchises or any other form of solicitation;
>
> vii.  upload, post or otherwise transmit any material or User Content that contains software viruses or any other malicious code, files or programs designed to interrupt, disrupt, destroy, damage or limit the functionality of any computer software or hardware or telecommunications equipment or violate the security of any computer network, crack passwords or security encryption codes or otherwise attempt to gain unauthorized access to any other computer system;
>
> viii.  use or launch any automated system, including, without limitation, "robots," "spiders" or "offline readers," that accesses the Product in a manner that sends more request messages to Company or the Product in a given period of time than a human can reasonably produce in the same period by using a conventional online web browser;

Redundant with part of 2(a), as noted above.

> ix.  attempt to cause the traffic levels of the software or other networks to rise without reason or for malicious purpose, including, without limitation, through transmission of large files to people for malicious purposes, "mailbombing," transmissions intended to raise the costs of another's access through excessive traffic levels, denial of service or similar attacks, repeatedly sending the same content to another person for the purpose of harassment or otherwise causing an unreasonable increase in traffic levels or usage of the Product as solely determined by Company;
>
> x.  disrupt the normal flow of dialogue, cause a screen to "scroll" faster than other Users of the Product are able to type or otherwise act in a manner that negatively affects another Users' ability to engage in meaningful exchanges;
>
> xii.  intentionally or unintentionally violate any applicable local, state, national or international law;
>
> xiii.  collect, store or use personal data about other Users;

How will User know who else is a User?

> xiv.  Criminal

Responsible use of AI rules actually begin here.

> a) predict the likelihood that a crime will be committed by a person or other User;
>
> b) predict the likelihood, of a person or other User, being a criminal or having committed a crime;
>
> b) predict the likelihood, of a person or other User, being a criminal, based on the person's facial attributes or the other User's facial attributes;

Typo: Two items with "b)".

> c) predict the likelihood, of a person or other User, having committed a crime, based on the person's facial attributes or the other User's facial attributes;
>
> d) predict the likelihood that a crime will be committed by a person or other User, based on the person's facial attributes or the other User's facial attributes;

Do we need a rule specific to facial recognition?  Isn't that covered by broader rules?

> e) predict a likelihood of a crime being committed by a person or other User, based on via evidence collected, facial and emotion analysis or other such features.
>
> f) use features such as: name, family name, address, gender, sexual orientation, race, religion, age, location (at any geographical level), skin color, society or political affiliations, employment status and/or history, health and medical conditions (including physical, mental), family history, social media and publicly available data, image or video analysis of an individual or a group(s) of individuals, heart-rate, perspiration, breathing, and brain imaging and other metabolic data to predict the likelihood of a person or another User will engage in criminal behavior; and

Again, why risk limiting the generality of your other rules with specific call-outs?

> e) predict the likelihood of a person or another User being a criminal based on the person or other User's facial attributes.

Here ends the [_Minority Report_](https://en.wikipedia.org/wiki/The_Minority_Report) parade of horribles.

> User's privilege to use the Product depends on User's compliance with the guidelines set forth above.

See above on "license" versus "privilege".

> Company may revoke User's privileges or take any other appropriate measures to enforce these guidelines if violations are brought to its attention.  User acknowledges that by providing User with the ability to post User Content, Company or the Product are acting as a passive conduit for such distribution, and Company is not undertaking any obligation or liability relating to any User Content posted or activities undertaken utilizing the Product.
>
> 5\.  Intellectual Property

<!-- TODO: left off here -->

> a.  Ownership.
>
> As between User and Company, User acknowledges that all ownership of the Product belongs to Company and its licensors.  The Product is proprietary to Company and its licensors and is protected by intellectual property laws.  User's access to the Product is licensed and not sold.  Company (for itself or its licensors) hereby reserves all rights not expressly granted to User, including, without limitation, the right to alter, modify, update, enhance, improve or create derivative or collective works incorporating the Product.  The Company Intellectual Property Rights (as defined below) are the valuable, confidential property of Company and its licensors.  United States and international intellectual property laws protect such Company Intellectual Property Rights.  User may use the Product as permitted herein and may not otherwise modify, adapt, translate, or create derivative or collective works based on the Product without the prior written consent of Company.  As between the parties, Company owns all right, title, and interest in and to the Product, with the exception of the User Content, and including, without limitation, all ancillary and interface software, all current and future enhancements, revisions, new releases and updates thereof and any derivative or collective works based thereon and all documentation thereto, all copyrights, trademarks, trade secrets, patents and goodwill therein, and all images, photographs, illustrations, graphics, audio and video created by or for Company therein (collectively, the "Company Intellectual Property Rights").
>
> b.  License to User Content.
>
> By posting or providing User Content to Company, User hereby grants Company a perpetual, irrevocable, worldwide, non-exclusive, royalty-free, sublicenseable and transferable license to use, reproduce, distribute, modify, edit, adapt, publish, translate, incorporate, prepare derivative and collective works utilizing, display and perform the User Content in any form, medium or technology now known or later developed throughout the universe.  In addition, User hereby waives (or warrants that the owner of such User Content has expressly waived) any and all "moral rights" in the User Content as to any of the foregoing rights and licenses granted to Company.  Company reserves the right to remove or disable User Content without prior notice.
>
> c.  Copyright Violations.
>
> Company may terminate access to the Product or the Account of any user who infringes the copyrights of others and to expeditiously remove or disable access to the alleged infringing material or content, including User Content, if Company is given proper notice of the infringement or infringing conduct by the copyright owner.  If User believe any materials or content available on or through the Product infringe User's copyright, User may request removal of those materials from the Product by contacting Company's designated copyright agent (identified below) and providing the following information:
>
> - Identification of the copyrighted work that User believes to be infringed.  Please describe the work and where possible include a copy or the location (e.g., URL) of an authorized version;
>
> - Identification of the material that is claimed to be infringing or to be the subject of infringing activity and that is to be removed or access to which is to be disabled, and information reasonably sufficient to permit Company to locate the material;
>
> - User's name, address, telephone number and (if available) e-mail address.
>
> - A statement that User has a good faith belief that the use of the materials User notifies Company about is not authorized by the copyright owner, its agent or the law.
>
> - A statement that the information that User has supplied is accurate and that "under penalty of perjury" User is the copyright owner or is authorized to act on the copyright owner's behalf.
>
> - A signature or the electronic equivalent from the copyright holder or authorized representative.  Copyright Notices should be submitted to:[Copyright Agent]
>   [Address]
>   [Email]
>   [Phone]
>   [Fax]
>
> d.  Trademarks.
>
> Any trademark or logo owned or controlled by Company, whether or not included in the Product and any logos relating to the foregoing are trademarks or service marks of Company and its licensors (collectively, the "Company Trademarks").  All other trademarks, service marks and logos used in the Product are the trademarks, service marks or logos of their respective owners.
>
> e.  Use of Intellectual Property.
>
> Except as otherwise expressly permitted by Company, User may not copy, reproduce, republish, store, upload, post, transmit, analyze, adapt, reformat, print, distribute, commercially exploit or publicly display the Company Intellectual Property Rights, the Product, the Company Trademarks or the Confidential Information (as defined below) or any portion thereof in any manner whatsoever without the prior written consent of Company.  User may not remove, reproduce, alter, use, display, modify, copy or obscure any copyrighted material, trademark, service mark, legal or other proprietary notices in or on any portions of the Company Intellectual Property Rights, the Product, the Company Trademarks, the Confidential Information or any User Content or any portion thereof.
>
> 6\.  Links
>
> Company, the Product, Users, or other third parties may provide links to other web sites or resources.  Company has no control over such sites and resources, and User acknowledges and agrees that Company does not endorse and is not responsible for any such external sites or resources, the privacy policies and other practices of such sites or resources or for any content, information, advertising, products or other materials on or available from such sites or resources.  User further acknowledges and agrees that Company shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, information, advertising, products or other material available on or through such site or resource.  By using the Product, User expressly relieves Company from any and all liability arising from User's use of any third-party web site.  Company encourages Users to be aware when Users leave the Product or otherwise visit external sites and to read the terms and conditions and privacy policy governing each other web site that User visits.
>
> 7\.  User Representations
>
> User represents and warrants to Company that:
>
> (a) User
>
> (i) has reached the age of majority in the jurisdiction where User resides,
>
> (ii) is an emancipated minor under the laws of User's jurisdiction of domicile or residence,
>
> (iii) possesses legal parental or guardian consent or
>
> (iv) otherwise has the power and authority to enter into and perform User's obligations under this Agreement;
>
> (b) User has provided and will maintain accurate, complete and current registration information with Company, including, without limitation, User's legal name, address, telephone number and email address, and will promptly provide updated information to Company in the event such information changes;
>
> (c) User is an authorized representative of the entity or party on whose behalf User purports to act;
>
> (d) User shall comply with all terms and conditions of this Agreement and any other agreement between the parties;
>
> (e) User's access to or use of the Product does not and will not constitute a breach or violation of any other agreement, contract, terms of use, or similar policy or understanding to which User is or may be subject; and
>
> (f) User will not use the Product to violate any statute, law, rule or regulation or to otherwise violate the legal rights of Company or any other person.
>
> 8\.  Termination
>
> This Agreement is effective upon User's acceptance as set forth herein and shall continue in full force until terminated as set forth herein.  This Agreement will terminate automatically without notice to User from Company if User fails to comply with any provision of this Agreement.  User may terminate this Agreement by terminating access to and removing the Product and all Company Content and notifying Company.  Upon termination, User shall terminate use of the Product and destroy any copies of the Product in User's possession.  Except as expressly granted herein, User shall not be entitled to any refund on any portion of any fees or other charges paid in connection with this Agreement.  Company reserves the right to discontinue or suspend any aspect of or access to the Product at any time.  Company will terminate a User's access to the Product if, under appropriate circumstances, such User is determined to be a repeat infringer of another's intellectual property or other rights.
>
> 9\.  Disclaimer of Warranties
>
> _The Product is provided "as is," and "as available" without warranty of any kind, express or implied.  Use of the Product is at User's sole risk.  Company does not warrant that User's use of the Product will be uninterrupted or error free, nor does Company make any warranty as to the accuracy of any User Content or as to any results that may be obtained by use of the Product.  Company makes no other warranties, express or implied, including, without limitation, any implied warranties of merchantability or fitness for a particular purpose or application, arising by virtue of custom of trade or course of dealing, title, noninfringement or timeliness, suitability, accuracy, or fitness for a particular purpose in relation to the Product or User Content.  User is solely responsible for any and all acts or omissions taken in reliance on the Product or any information or User Content therein, including, without limitation, inaccurate or incomplete information.  Any implied warranties that cannot be disclaimed are limited to the shortest period permitted by applicable law.  Some jurisdictions do not allow the exclusion of implied warranties, so the above exclusions may not apply, and other legal rights may be granted in such jurisdictions._
>
> 10\.  Limitation of Liability
>
> _To the maximum extent permitted by applicable law, neither Company nor any of its licensors, affiliates or subsidiaries will be liable to User or any other person for any indirect, incidental, consequential, special, punitive or exemplary damages for any matter arising from or relating to this Agreement, the Product, the User Content, or the Internet generally, including, without limitation, User's use or inability to use the Product or User Content, any changes to or inaccessibility of the Product, any inaccuracy or incompleteness of the User Content or information contained in the Product, any delay, failure, unauthorized access to or alteration of any transmission or data, any material data sent or received or not sent or received, any transaction or agreement entered into through the Product or any data or material from a third person accessed on or through the Product, whether such liability is asserted on the basis of contract, tort, negligence or otherwise.  To the maximum extent permitted by applicable law, neither Company's nor any of its affiliates or subsidiaries' total liability for direct damages shall exceed the total fees paid, if any, by User to Company hereunder.  If user is dissatisfied with the Product, User's sole and exclusive remedy shall be for User to discontinue use of the Product and terminate this Agreement in accordance with Section 8.  User agrees to assume the risk for:_
>
> (i)  _all liabilities disclaimed by Company contained herein; and_
>
> (ii)  _all alleged damages in excess of the amount, if any, of the limited remedy provided hereunder._
>
> _User specifically acknowledges and agrees that Company shall not be liable for User Content or the defamatory, offensive or illegal conduct of any third party and that the risk of harm or damage from the foregoing is borne solely by User.  Some jurisdictions do not allow the limitation or exclusion of liability for incidental or consequential damages, so the above limitations or exclusions may not apply, and other legal rights may be granted in such jurisdictions._
>
> 11\.  Indemnification
>
> User agrees to indemnify, defend, and hold harmless Company, its licensors, affiliates or subsidiaries and any members, officers, employees and agents of the foregoing, from and against any action, cause, claim, damage, debt, demand or liability, including reasonable costs and attorney's fees, asserted by any person or entity, arising out of or relating to: (a) this Agreement or User's violation of the terms and conditions thereof; (b) User's use of the Product, including any data, User Content, communication or work transmitted or received by User; (c) gross negligence, fraud or any intentional or negligent act or omission of User; (d) User's violation of any third party rights, including, without limitation, any intellectual property or privacy right; and (e) any claim that any User Content posted by User violates the rights of a third party.
>
> 12\.  Miscellaneous
>
> a.  Independent Contractors.
>
> The parties are and shall be independent contractors and neither party by virtue of this Agreement shall have any right, power or authority to act or create any obligation, express or implied, on behalf of the other party.
>
> b.  Amendment.
>
> No amendment or modification of this Agreement will be binding unless in writing and signed by Company.  The terms of this Agreement will govern any upgrades to the Product provided by Company that replace or supplement the original Product, unless such upgrade is accompanied by a separate or substitute agreement in which case the terms of that agreement will govern.
>
> c.  Assignment.
>
> User shall not assign any of its rights, duties or obligations under this Agreement without the prior written consent of Company, and any attempted assignment or delegation without such consent shall be void and of no effect.
>
> d.  Waiver.
>
> No delay or failure to enforce any right under this Agreement will operate as a waiver of Company's right to enforce that or any other right.  No waiver shall be binding unless executed in writing by the party making the waiver.
>
> e.  Severability.
>
> If any provision of this Agreement is declared by a court of competent jurisdiction to be invalid, illegal, or unenforceable, such a provision will be severed from this Agreement and all other provisions will remain in full force and effect.
>
> f.  Law.
>
> The validity, interpretation, and performance of this Agreement shall be controlled by and construed under the internal laws of the State of [______] without regard to its choice of law principles.  The state court located in [___________] shall have exclusive jurisdiction to hear any dispute under this Agreement and venue shall be proper there or, if such court is without subject matter jurisdiction, the United States District Court for the [_____________] shall have exclusive jurisdiction, and venue shall be proper there.
>
> g.  Action.
>
> No action arising under this Agreement may be brought by User more than one (1) year after the cause of action has accrued.
>
> h.  Equitable Relief.  The parties agree that breach of the provisions of this Agreement, including, without limitation, the unauthorized use or duplication of the Product, would cause irreparable harm and significant injury to Company which would be both difficult to ascertain and which would not be compensable by damages alone.  As such, the parties agree that Company has the right to enforce the provisions of this Agreement by injunction (without necessity of posting bond), specific performance or other equitable relief without prejudice to any other rights and remedies Company may have for User's breach of this Agreement.
>
> i.  Attorney's Fees.
>
> If any action in law or in equity or arbitration is necessary to enforce the terms of this Agreement, the prevailing party will be entitled to reasonable fees of attorneys including any costs and expenses, in addition to any other relief to which such prevailing party may be entitled.
>
> j.  Headings.
>
> The captions and headings of this Agreement are included for ease of reference only and will be disregarded in interpreting or construing this Agreement.
>
> k.  Force Majeure.
>
> Neither party shall be responsible or liable for failure to fulfill its obligations under this Agreement (except for payment of any fees) due to any major unforeseeable event beyond the control of, and not caused by the fault or negligence of, such party or its agents, including, without limitation, an act of God, fire, earthquake, flood, explosion, action of the elements, war invasion, terrorism, insurrection, riot, mob violence, sabotage, inability to procure equipment, facilities, materials or supplies in the open market, failure of power, failure of transportation, failure of telecommunications systems or infrastructure, strike, lockout, action of labor unions, condemnation, requisition, law or order of government, civil or military authorities; provided that the party failing to perform in such event shall promptly resume or remedy, as the case may be, the performance of its obligations hereunder as soon as practicable.
>
> l.  Survival.
>
> The terms and provisions of Sections [______], inclusive, shall survive any termination or expiration of this Agreement.
>
> m.  Entire Agreement.
>
> This Agreement, together with any exhibits, constitutes the entire agreement between the parties with respect to the Product and supersedes all prior or contemporaneous oral or written communications, representations, statements or understandings between the parties concerning the Product.
>
> _User has read, understood, and acknowledges the foregoing Agreement and agrees to be bound by all of its terms and conditions.  User has full authority to execute this Agreement.  Please manifest your assent to this Agreement by clicking on the appropriate link below._
>
> I have read and understood and i accept this Agreement _______
>
> I do not accept this Agreement _______

## Source Code License

> Responsible AI Source Code License
>
> Version 1.0, February 12, 2019
>
> http://licenses.ai/
>
> _Terms and Conditions._
>
> The Responsible Artificial Intelligence Source Code License ("License") governs the use of the accompanying software.  If you access or use the software, you accept the License.  If you do not accept the License, do not access or use the software.
>
> 1.  Definitions.
>
> As used in this License, the following capitalized terms have the following meanings:
>
> (i)  "License" means the terms and conditions for use, reproduction, and distribution as defined by Sections one (1) through eight (8) of this document.
>
> (ii)  "Licensor" means the copyright owner or legal entity authorized by the copyright owner that is granting the License.
>
> (iii)  "You" (or "Your") means an individual or legal entity exercising permissions granted by this License.
>
> (iv)  The terms "reproduce", "reproduction", "derivative works", and "distribution" have the same meaning here as under U.S. Copyright Law.
>
> (v)  "Contribution" means the original software, additions to the original software, modifications to the original software, or derivative works of the original software.
>
> (vi)  "Contributor" means any person or Licensor who provides a Contribution.
>
> 2.  Grant of Rights.
>
> Subject to this License, each Contributor grants You a non-exclusive, worldwide, royalty-free copyright license to reproduce its Contribution, prepare derivative works of its Contribution, and distribute its Contribution or any derivative works of its Contribution that You create.
>
> 3.  Restrictions.
>
> 1.  If You distribute any portion of the Contribution, You must include a complete copy of this License with the distribution; and
>
> 2.  You agree that the Contribution, or any derivative work of the Contribution, will not be used by You or any third party subject to Your control, to:
>
> 1.  Surveillance
>
> i.  Detect or infer any legally protected class or aspect of any person, as defined by U.S. Federal Law; and
>
> ii.  Detect or infer aspects and/or features of an identity any person, such as name, family name, address, gender, sexual orientation, race, religion, age, location (at any geographical level), skin color, society or political affiliations, employment status and/or employment history, and health and medical conditions.  Age and medical conditions may be inferred solely for the purpose of improving software/hardware accessibility and such data should not be cached or stored without the explicit and time limited permission of Licensor.
>
> 2.  Computer Generated Media
>
> i.  Synthesize and/or modify audio-realistic and/or video-realistic representations (indistinguishable from photo/video recordings) of people and events, without including a caption, watermark, and/or metadata file indicating that the audio-realistic and/or video-realistic representations were generated using the Contribution.
>
> 3.  Health Care
>
> i.  Predict the likelihood that any person will request to file an insurance claim;
>
> ii.  Determine an insurance premium or deny insurance applications or claims;
>
> iii.  Predict the likelihood that any person request to file an insurance claim based on determining a lifestyle of a person, medical-test reports, demographic details of a person and/or online activity of a person;
>
> iv.  Determine an insurance premium or deny insurance applications or claims based on data determining a lifestyle of a person, medical-test reports, demographic details of a person, and/or online activity of a person;
>
> v.  Deny an insurance claim based on any predicted likelihood of the possibility of insurance fraud; and
>
> vi.  Diagnose a medical condition without human oversight.
>
> 4.  Criminal
>
> i.  Predict the likelihood that a crime will be committed by any person;
>
> ii.  Predict the likelihood, of any person, being a criminal or having committed a crime;
>
> iii.  Predict the likelihood, of any person, being a criminal, based on the person's facial attributes or another person's facial attributes;
>
> iv.  Predict the likelihood, of any person, having committed a crime, based on the person's facial attributes or another person's facial attributes;
>
> v.  Predict the likelihood that a crime will be committed by any person, based on the person's facial attributes or another person's facial attributes;
>
> vi.  Predict a likelihood of a crime being committed by any person, based on evidence collected, facial and emotion analysis, or other such features.
>
> vii.  Use personal data and/or personal characteristics or features such as: name, family name, address, gender, sexual orientation, race, religion, age, location (at any geographical level), skin color, society or political affiliations, employment status and/or history, health and medical conditions (including physical, mental), family history, social media and publicly available data, image or video analysis of an individual or a group(s) of individuals, heart-rate, perspiration, breathing, and brain imaging and other metabolic data to predict the likelihood a person will engage in criminal behavior; and
>
> viii.  Predict the likelihood of a person being a criminal based on the person or other User's facial attributes.
>
> 4.  Termination
>
> Upon the occurrence of any of the restricted uses listed above in "3.  Restrictions", Licensor shall have the right to:
>
> (i)  terminate this License Agreement and disable any Contribution either by pre-installed or then installed disabling instructions, and to take immediate possession of the Contribution and all copies wherever located, without demand or notice;
>
> (ii)  require You to immediately return to Licensor all copies of the Contribution, or upon request by Licensor destroy the Contribution and all copies and certify in writing that they have been destroyed;
>
> (iii)  for a period of 1 year, provide a prominent notice on the Licensor's website indicating that this License was violated by the Licensor;
>
> (iv)  release/delete any and all data collected through use of the Contribution; and
>
> (v)  notify all parties affected by use of the Contribution.  Termination of this License Agreement shall be in addition to and not in lieu of any other remedies available to Licensor.  Licensor expressly reserves the right to pursue all legal and equitable remedies available under the law.
>
> 5.  Disclaimer of Warranty.
>
> Unless required by applicable law or agreed to in writing, Licensor provides any Contribution (and each Contributor provides its Contributions) on an "As-Is" basis, without WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied, including, without limitation, any warranties or conditions of TITLE, NON-INFRINGEMENT, MERCHANTABILITY, or FITNESS FOR A PARTICULAR PURPOSE.  You are solely responsible for determining the appropriateness of using or redistributing a Contribution and assume any risks associated with Your exercise of permissions under this License.
>
> 6.  Limitation of Liability.
>
> In no event and under no legal theory, whether in tort (including negligence), contract, or otherwise, unless required by applicable law (such as deliberate and grossly negligent acts) or agreed to in writing, shall any Contributor be liable to You for damages, including any direct, indirect, special, incidental, or consequential damages of any character arising as a result of this License or out of the use or inability to use any Contribution (including but not limited to damages for loss of goodwill, work stoppage, computer failure or malfunction, or any and all other commercial damages or losses), even if such Contributor has been advised of the possibility of such damages.
>
> 7.  Accepting Warranty or Additional Liability.
>
> While redistributing the Contribution, You may choose to offer, and charge a fee for, acceptance of support, warranty, indemnity, or other liability obligations and/or rights consistent with this License.  However, in accepting such obligations, You may act only on Your own behalf and on Your sole responsibility, not on behalf of any other Contributor, and only if You agree to indemnify, defend, and hold each Contributor harmless for any liability incurred by, or claims asserted against, such Contributor by reason of your accepting any such warranty or additional liability.
>
> _End of Terms and Conditions_
