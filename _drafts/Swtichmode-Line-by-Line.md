---
title: Switchmode, Line by Line
layout: post
tags:
- Switchmode
- Open Source
- Contracts
---

I've published an open form contract for independent software developers doing a mix of proprietary- and open-style work for clients.

> # Switchmode Developer Agreement

"Switchmode" returns to a [common kind of power supply design](https://en.wikipedia.org/wiki/Switched-mode_power_supply) that produces the direct current electronic devices need by switching a regulator back and forth between open and closed.

> **Company** and **Developer** agree:

The parties are the Company and the Developer.

> ## Published Form<a id="Published_Form"></a>
>
> This is a development draft of the Switchmode Developer Agreement.  See https://github.com/switchmode for license terms and other information.

One benefit of a published contract form is a certain amount of standardization.  Ideally, companies and developers would just _refer_ to Switchmode at a certain version, and know what that reference means, without reading the actual terms yet again.

On the licensing side, Switchmode's license requires those who make changes to remove mention of the form's title---"Switchmode"---from their changed copy.  That's designed to protect the integrity of references to Switchmode.

> ## Purpose<a id="Purpose"></a>
>
> Open software developers and companies approach intellectual property, confidentiality, and other legal matters differently.  The expectations of their user and customer communities differ, too.  The purpose of this agreement is to enable _Developer_ to bridge the gap and do paid work for _Company_ without creating issues either for _Company_ or for _Open Software_ efforts that _Developer_ participates.  This agreement achieves that purpose with intellectual property, confidentiality, and other terms that vary, depending on whether open or proprietary expectations apply to specific work.

Setting out the purpose of the agreement gives the rest of the terms context.  It also makes clear why a new form contract is worthwhile.

> ## Representative<a id="Representative"></a>
>
> _Company_ agrees to appoint a **Technical Representative** by giving _Notice_ of their name, title, and email address before work starts.  _Company_ agrees to appoint a replacement _Technical Representative_ if the current one leaves or becomes unavailable.  If _Company_ or any _Affiliate_ has technical staff, the _Technical Representative_ must be a member of the technical staff.

This provision writes out what I see as de facto practice in outside contractor-developer relationships.  The developer may have contact with high-level management or other reps at the start, but the working relationship usually plays out between the developer and a corresponding technical person at the client.

Switchmode requires the client to appoint a technical rep, and deputizes them to make certain kinds of decisions on the client's behalf.  Some decisions still require company action, by management.

> ## Projects<a id="Projects"></a>
>
> The terms of this agreement apply to each **Project** that _Company_ and _Developer_ write up and cosign in a **Project Summary**.  Each _Project Summary_ must refer to this agreement, say that it's a _Project Summary_, and set out what _Developer_ agrees to do for _Company_ and what _Company_ agrees to pay _Developer_ for the work.

Switchmode adopts the typical "statement of work structure".  In a nutshell, the client and developer sign the Switchmode form, which sets out general terms that apply to any number of projects client and developer may agree to undertake.  They agree to undertake projects by signing project summaries.

> ## Open and Closed<a id="Open_and_Closed"></a>
>
> Some terms of this agreement apply to a _Project_ depending on whether the _Project Summary_ calls it an **Open Project** or a **Closed Project**.  If a _Project Summary_ does not say, the _Project_ is an _Open Project_.

Project summaries set out just the unique details of a project.  The other details---from intellectual property to confidentiality terms---get filled in by the "master" Switchmode contract.

The main innovation of Switchmode, being able to switch back and forth seamlessly between open and proprietary jobs, happens by tagging each project as either "open" or "closed".  The main Switchmode terms fill in different default terms for a project, depending on that label.

> ## Default Project Terms<a id="Default_Project_Terms"></a>
>
> All of these terms apply to each _Project_, unless its _Project Summary_ says otherwise:

A project summary can override any of the main terms, to prevent them from getting filled in.

> ### Fees<a id="Fees"></a>
>
> _Company_ agrees to pay _Developer_ fees for _Project_ work on an hourly basis, in fairly rounded, quarter-hour increments.

Hourly billing is default, but a project summary can specify any other billing method the parties like.

> If the _Project Summary_ doesn't state a rate per hour, _Company_ will pay the first of these hourly rates that can be determined:
> 1.  the rate in the last _Project Summary_ _Company_ and _Developer_ signed that stated a rate
> 2.  _Developer_'s published standard rate
> 3.  _Developer_ and the _Technical Representative_'s joint estimate of the going rate for a developer of similar skill and experience

It's best for developers to go ahead and list their rate on each project summary.  But just in case rate gets left out, these fallbacks help lead the parties to a reasonable answer.

> ### Expenses<a id="Expenses"></a>
>
> _Company_ agrees to reimburse _Developer_ for _Project_ expenses listed in the _Project Summary_, expenses that the _Technical Representative_ preapproves in writing, and travel and accommodation expenses for trips that _Company_ requests and _Developer_ agrees to make.  On _Notice_ of an expense that will likely cost more than _Project_ fees in the same month, _Company_ agrees to pay the expense directly, on _Developer_'s behalf, or to request and pay a separate bill for the expense.  _Company_ agrees to pay _Developer_ all correctly billed expenses of this kind within seven calendar days of receiving each bill.
>
> ### Billing<a id="Billing"></a>
>
> _Developer_ agrees to send _Company_ a bill at the end of each calendar month for fees calculated on an hourly basis.  For fees calculated on any other basis, _Developer_ agrees to send _Company_ a bill on the schedule in the _Project Summary_, or if there isn't any, when the _Project_ is done.  _Developer_ agrees to submit bills via any processing system that _Company_ specifies by advance _Notice_.  _Company_ waives any legal terms that its choice of processing system tries to impose, and agrees to reimburse _Developer_ any costs of using its system.
>
> ### Payment<a id="Payment"></a>
>
> _Company_ agrees to pay _Developer_ all correctly billed amounts within thirty calendar days of receiving each bill.  _Company_ agrees to give _Notice_ of any suspected error on a bill within fourteen calendar days of receiving the bill.
>
> ### Late Payment<a id="Late_Payment"></a>
>
> _Company_ agrees to pay _Developer_ 1.5% interest on late bill payments, compounded monthly.  If the law sets a lower maximum rate of late-payment interest, _Company_ agrees to pay that rate of interest instead.  If _Company_ fails to pay any bill on time, _Developer_ may give _Notice_ and stop any or all work under this agreement until all bills due are paid and all suspected errors are addressed.  Stopping work in this way postpones all deadlines under each _Project_ for as long as work stops.  Retainer and other recurring fees continue to add up.
>
> ### Delivery<a id="Delivery"></a>
>
> _Developer_ will deliver work on the _Project_ to _Company_ by giving the _Technical Representative_ an Internet address from which to download a copy.
>
> ### Intellectual Property<a id="Intellectual_Property"></a>
>
> #### Open Project IP Terms<a id="Open_Project_IP_Terms"></a>
>
> For an _Open Project_:
>
> ##### Developer Retains IP<a id="Developer_Retains_IP"></a>
>
> _Developer_ retains all _Intellectual Property Rights_ in _New Intellectual Property_.
>
> ##### License to Company<a id="License_to_Company"></a>
>
> On _Company_'s full payment of each _Developer_ bill for the _Project_, _Developer_ licenses _New Intellectual Property_ covered by that bill to _Company_.  For _Intellectual Property Rights_ in _Derivatives_ of _Open Software_, the terms of the license are the same terms on which the _Open Software_ is licensed to the public.  For other _Intellectual Property Rights_, the terms are those of a _Separate MIT License_.
>
> ##### Public License<a id="Public_License"></a>
>
> _Developer_ agrees that if _Developer_ makes _New Intellectual Property_ available to the public, _Developer_ will do so under the same terms that _Developer_ licenses it to the _Company_ under [License to Company](#License_to_Company).
>
> #### Closed Project IP Terms<a id="Closed_Project_IP_Terms"></a>
>
> For a _Closed Project_:
>
> ##### Developer Assigns IP<a id="Developer_Assigns_IP"></a>
>
> _Company_ and _Developer_ agree that _New Intellectual Property_ will be "work made for hire" under copyright law, to the extent legally possible.  On _Company_'s full payment of each _Developer_ bill for the _Project_, _Developer_ assigns _New Intellectual Property_ covered by that bill that cannot be "work made for hire" to the _Company_.  Among the rights assigned are:
> 1.  ownership of the _New Intellectual Property_
> 2.  all rights to take _Legal Action_ for _Infringement_ of the _New Intellectual Property_
> 3.  all rights to seek legal remedies for _Infringement_ of the _New Intellectual Property_, such as money damages, injunctions, and other "equitable remedies", as well as any other compensation, benefits, or procedural privileges a court might award
> 4.  all other rights _Developer_ has in the _New Intellectual Property_
>
> ##### Further Steps<a id="Further_Steps"></a>
>
> _Developer_ agrees to do everything necessary to paper assignments in [Developer Assigns IP](#Developer_Assigns_IP), make them legally effective, and help _Company_ enforce the rights assigned.  _Company_ agrees to give _Notice_ of any further steps required, to provide all necessary documentation, and to reimburse _Developer_ for reasonable out-of-pocket expenses.
>
> ##### Company Can Act on Developer's Behalf<a id="Company_Can_Act_on_Developer's_Behalf"></a>
>
> ###### What Company May Do<a id="What_Company_May_Do"></a>
>
> _Company_ may take action under [Further Steps](#Further_Steps) on _Developer_'s behalf if _Company_ can't find _Developer_, if _Developer_ isn't capable of doing so, or if _Developer_ refuses to do so.
>
> ###### Legal Intent<a id="Legal_Intent"></a>
>
> In legal terms of art, _Company_ and _Developer_ intend [What Company May Do](#What_Company_May_Do) to appoint _Company_ as _Developer_'s "attorney in fact with full right of substitution" to act on _Developer_'s behalf under [Further Steps](#Further_Steps).
>
> ##### Open Releases<a id="Open_Releases"></a>
>
> ###### Requesting Open Releases<a id="Requesting_Open_Releases"></a>
>
> No more than once per calendar quarter for a recurring _Project_, or once within thirty calendar days after the _Project_ ends for any other _Project_, _Developer_ may send a written **Open Release Request** to the _Technical Representative_.  Each _Open Release Request_ must identify at least one **Proposed Release**, a discreet, reusable _Software_ component of _New Intellectual Property_ that _Developer_ proposes to publish as _Open Software_.  The _Open Release Request_ must note when a _Proposed Release_ is a _Generic Improvement to Open Source_.
>
> ###### Responding to Open Release Requests<a id="Responding_to_Open_Release_Requests"></a>
>
> _Company_ agrees to task the _Technical Representative_ to respond to each _Open Release Request_:
> 1.  The _Technical Representative_ must discuss each _Proposed Release_ with _Developer_, as needed, and decide whether each _Proposed Release_ is an **Approved Release**.
> 2.  The _Technical Representative_ must send a decision for each _Proposed Release_, in writing, to _Developer_ within fourteen calendar days.
> ###### Approving Open Release Request<a id="Approving_Open_Release_Request"></a>
>
> If the _Technical Representative_ fails to send a decision in time for a _Proposed Release_ that is a _Generic Improvement to Open Source_ and was noted as a _Generic Improvement to Open Source_ in the _Open Release Request_, that _Proposed Release_ becomes an _Approved Release_.  Otherwise, a _Proposed Release_ becomes an _Approved Release_ only if the _Technical Representative_ confirms that decision in writing.
>
> ###### License to Release<a id="License_to_Release"></a>
>
> _Company_ licenses _New Intellectual Property_ in each _Approved Release_ to _Developer_.  The license permits _Developer_ to sublicense the _Approved Release_ to the public.  For an _Approved Release_ that is a _Copyright Derivative_ of _Open Software_, the terms of the public license must be the same terms on which the _Open Software_ is currently licensed to the public.  Otherwise, the terms of the public license must be a _Separate MIT License_.  In either case, unless an executive officer gives _Notice_ of permission to attribute the _Approved Release_ to the _Company_ by name, _Developer_ must replace the standard copyright notice with a statement that _Developer_ sublicenses under a development draft of the Switchmode Developer Agreement.
>
> #### Developer Guarantees<a id="Developer_Guarantees"></a>
>
> _Developer_ guarantees that all of these statements will be true of _New Intellectual Property_ when delivered to _Company_:
> 1.  _Developer_ has all legal rights needed to license the _New Intellectual Property_, if the _Project_ is an _Open Project_, or to assign the _New Intellectual Property_, if the _Project_ is a _Closed Project_.
> 2.  None of the _New Intellectual Property_ has been involved in any _Legal Action_.
> 3.  No one else has claimed any rights in any _New Intellectual Property_.
> 4.  None of the _New Intellectual Property_ has been assigned or exclusively licensed to anyone else under a different agreement.
> 5.  No one else has any lien on or other right to any of the _New Intellectual Property_ that will interfere with or limit the rights _Company_ receives.
> 6.  No employer, client, educational institution, or other organization _Developer_ has been affiliated with has any right to claim ownership of any of the _New Intellectual Property_.
> 7.  If the _New Intellectual Property_ _Utilizes_ others' _Software_, data, or other kinds of work, either the _Project Summary_ or the _Technical Representative_ specifically approved that work, or it is _Open Software_.
>
> #### Disclaimer<a id="Disclaimer"></a>
>
> _Developer_ makes only the guarantees in [Developer Guarantees](#Developer_Guarantees) about _New Intellectual Property_.  Otherwise, _Developer_ provides the _New Intellectual Property_ without any warranty of merchantability, of fitness for a particular purpose, or of any other kind.
>
> ### Open Source Guidelines<a id="Open_Source_Guidelines"></a>
>
> If _Company_ gives _Notice_ of specific _Open Software_ or kinds of _Open License_ that _Company_ permits or prohibits, _Developer_ agrees to follow those guidelines in selecting _Open Software_ that _New Intellectual Property_ for any later _Project_ _Utilizes_.  _Company_ agrees that _Developer_ can rely on LICENSE, COPYING, and similar files, as well as copyright notices, header comments, and package metadata, to determine what license terms apply.
>
> ### Work on Open Releases<a id="Work_on_Open_Releases"></a>
>
> Unless _Company_ and _Developer_ agree to a _Project_ covering the work:
> 1.  _Company_ does not agree to pay _Developer_ for any extra work to prepare any _Approved Release_, or any _New Intellectual Property_ created during work on any _Open Project_, for publication as _Open Software_.
> 2.  _Developer_ does not agree to maintain, provide support for, ensure the availability of, or provide any other kind of service for any _New Intellectual Property_ published as _Open Software_.
>
> ### Limited Damages<a id="Limited_Damages"></a>
>
> If _Company_ takes _Legal Action_ against _Developer_ related to the _New Intellectual Property_, under contract law, tort law, or any other kind of law, the _Company_'s damages from _Developer_ will be capped at the amount of fees _Company_ actually paid _Developer_ for the _Project_.
>
> ### Changes<a id="Changes"></a>
>
> _Company_ and _Developer_ can change any of the terms of a _Project Summary_ by writing out and cosigning an amendment to the _Project Summary_.  _Developer_ and the _Technical Representative_ can change _Project Summary_ terms about the scope of work that _Developer_ will do, and technical standards for that work, by agreeing to changes in writing.
>
> ### Project Term<a id="Project_Term"></a>
>
> If the _Project Summary_ describes recurring work, the _Project_ continues until either _Developer_ or _Company_ gives _Notice_ that it will stop at the end of the next calendar month.  Otherwise, the _Project_ ends when _Developer_ finishes work.  _Company_ and _Developer_ can agree to end a _Project_ early at any time.
>
> ## Confidentiality<a id="Confidentiality"></a>
>
> ### Secrets<a id="Secrets"></a>
>
> The confidentiality obligations of these terms apply to the **Secrets** that the parties share with one another.  _Secrets_ include these kinds of information, when not _Publicly Available_:
> 1.  _Information Marked Confidential_
> 2.  _Business Information_
> 3.  _Personal Information_
> 4.  the fact that _Company_ is _Developer_'s client for work on any _Project_
> 5.  information about any _Closed Project_
> 6.  information about any _Company_ product or service that _Utilizes_ or motivates any _Open Project_
> 7.  information about the _Software_, services, systems, and other tools that _Company_ uses
>
> ### Keeping Secrets<a id="Keeping_Secrets"></a>
>
> With the exceptions in [Work with Open Software Communities](#Work_with_Open_Software_Communities), unless compelled by a _Legal Requirement_, _Company_ and _Developer_ agree not to:
> 1.  disclose each other's _Secrets_ to anyone
> 2.  use each other's _Secrets_ for any purpose but _Project_ work
> 3.  use or disclose each other's _Secrets_ in violation of any _Legal Requirement_
> 4.  help others disclose or use each other's _Secrets_ in these ways
>
> ### Work with Open Software Communities<a id="Work_with_Open_Software_Communities"></a>
>
> #### Publishing Open Software<a id="Publishing_Open_Software"></a>
>
> _Developer_ may publish the _Software_ of any _Approved Release_ or _Open Project_ as _Open Software_, as long as _Developer_ removes all other _Company_ _Secrets_ before publishing.
>
> #### Collaborating with Open Software Developers<a id="Collaborating_with_Open_Software_Developers"></a>
>
> In specific circumstances, _Developer_ may disclose _Company_ _Secrets_ to developers of _Open Software_:
> 1.  _Developer_ may only disclose _Company_ _Secrets_ of a technical nature.
> 2.  _Developer_ may not disclose _Company_ _Secrets_, even of a technical nature, that would prevent or destroy intellectual property protection, such as patentable inventions or trade secrets, or that would afford _Company_ competitors any significant advantage over _Company_ in any line of business.
> 3.  _Developer_ may not disclose _Company_'s identity, any _Information Marked Confidential_, or any _Personal Information_.
> 4.  _Developer_ may disclose _Company_ _Secrets_ only as needed for effective and efficient collaboration with _Open Software_ developers.
> 5.  _Developer_ may disclose _Company_ _Secrets_ only to receive technical support for, report a possible bug in, or to propose or discuss changes to, _Open Software_.
> 6.  The _Open Software_ must be _Software_ that a _Project_ _Utilizes_ or potentially _Utilizes_, or _Open Software_ used or potentially used to operate or develop _Project_ _Software_.
> 7.  _Developer_ may disclose _Company_ _Secrets_ by private message to an _Open Software_ developer, or by message to a public mailing list, bug tracking system, or revision control system.
>
> #### Technical Representative Guidance<a id="Technical_Representative_Guidance"></a>
>
> _Company_ agrees that _Developer_ can rely on written messages from the _Technical Representative_ that disclosing specific information, or sending a specific message, will be allowed under [Collaborating with Open Software Developers](#Collaborating_with_Open_Software_Developers).
>
> ### Copies, Changes, and Disposal<a id="Copies,_Changes,_and_Disposal"></a>
>
> _Company_ and _Developer_ agree to provide copies of, update, or dispose of all copies of materials containing each other's _Secrets_ that they have, on written request.
>
> ### Security Precautions<a id="Security_Precautions"></a>
>
> _Company_ and _Developer_ agree to take good security precautions to keep each other's _Secrets_ confidential.  _Company_ and _Developer_ agree that on _Notice_ of new security requirements, they will either implement the new security requirements or destroy copies of materials containing _Secrets_ covered by the new requirements they will not implement.
>
> ### Leaks and Disclosures<a id="Leaks_and_Disclosures"></a>
>
> _Company_ and _Developer_ agree to give immediate _Notice_ summarizing what _Secrets_ may be affected, who may receive _Secrets_, and any relevant _Legal Requirement_ whenever:
> 1.  they believe a _Leak_ may happen
> 2.  they learn that a _Leak_ has happened
> 3.  they believe a _Legal Requirement_ will force them to disclose _Secrets_, before making the disclosure, if possible
>
> ### Confidentiality Clarifications<a id="Confidentiality_Clarifications"></a>
> 1.  This agreement does not give either _Company_ or _Developer_ any legal rights in the other's _Secrets_, except the permission needed to review and use disclosed _Secrets_ for _Project_ work.
> 2.  This agreement does not require either _Company_ or _Developer_ to disclose any _Secrets_.
> 3.  Neither _Company_ nor _Developer_ makes any guarantee that any _Secrets_ they provide will be complete or reliable.
>
> ### Court Orders<a id="Court_Orders"></a>
>
> Money alone would not fully compensate either _Company_ or _Developer_ for the damage caused by a breach of obligations in [Confidentiality](#Confidentiality).  _Company_ and _Developer_ agree that in addition to other legal remedies, they may request court orders not to breach those obligations, to stop breaching those obligations, or both, without posting any bond.
>
> ## Agreement Term<a id="Agreement_Term"></a>
>
> This agreement will continue until one year has passed since there was any ongoing _Project_.  However, both _Company_ and _Developer_ can end this agreement early by giving _Notice_ when there is no ongoing _Project_.  Obligations in [Confidentiality](#Confidentiality) will continue for five calendar years after this agreement ends.
>
> ## Kind of Working Relationship<a id="Kind_of_Working_Relationship"></a>
>
> ### Independence<a id="Independence"></a>
>
> No matter what any _Project Summary_ says, _Company_ and _Developer_ intend for _Developer_ to decide when, where, and how to do _Project_ work, with the discretion of an independent contractor, rather than as an employee.  _Developer_ agrees that _Developer_ will not receive any employee benefits.
>
> ### Taxes<a id="Taxes"></a>
>
> Both _Company_ and _Developer_ agree to do their respective parts for tax compliance concerning fees and expenses paid to _Developer_ as an independent contractor under this agreement.
>
> ## General Contract Terms<a id="General_Contract_Terms"></a>
>
> ### Law<a id="Law"></a>
>
> The law of the state where _Company_'s headquarters are located governs all rights and duties under this agreement.
>
> ### Lawsuits<a id="Lawsuits"></a>
>
> _Company_ and _Developer_ agree to take _Legal Action_ related to this agreement only in the federal or state courts nearest _Company_'s headquarters, and to pay the other's attorney fees and costs if they lose in court.
>
> ### Whole Agreement<a id="Whole_Agreement"></a>
>
> This agreement and each _Project Summary_ list all the terms that _Company_ and _Developer_ intend to apply to _Project_ work.
>
> ### Assignment<a id="Assignment"></a>
>
> With two exceptions, neither _Company_ nor _Developer_ can assign any right under this agreement without _Notice_ of the other's permission.  Any attempt to assign has no legal effect.  The exceptions are:
> 1.  _Developer_ can assign this agreement, as a whole, to any new business entity that _Developer_ sets up for software contracting or consulting work.
> 2.  _Company_ can assign this agreement, as a whole, to another business entity that acquires its stock or substantially all its assets, or to a new business entity set up to change _Company_'s legal form or jurisdiction.
>
> ### Delegation<a id="Delegation"></a>
>
> If _Developer_ assigns this agreement under [Assignment](#Assignment), the entity _Developer_ assigns to may delegate its obligations to _Developer_.  Otherwise, neither _Company_ nor _Developer_ can delegate any duty under this agreement.  Any attempt to delegate has no legal effect.
>
> ### Unenforceable Terms<a id="Unenforceable_Terms"></a>
>
> If a court decides that any part of this agreement cannot be enforced, for any reason, the rest of this agreement will continue to apply, so long as that wouldn't defeat the purpose of this agreement in [Purpose](#Purpose).
>
> ### Signatures<a id="Signatures"></a>
>
> _Company_ and _Developer_ can sign this agreement and any _Project Summary_ however they like, so long as it creates a written record, accessible to both parties, that shows they agreed.
>
> ## Definitions<a id="Definitions"></a>
> 1.  **Affiliate** means a legal entity that has _Control_ over, is under the _Control_ of, or is under common _Control_ with another legal entity.
> 2.  **Business Information** means information that is not _Publicly Available_ about how and with whom a party or any _Affiliate_ has done, does, or plans to do business.  Information about these terms and _Developer_'s compensation is _Business Information_.  Information about customers, suppliers, employees, consultants, professional service providers, officers, directors, advisers, employees, and contractors is _Business Information_.  Information about transactions, prices, costs, market share, strategy, and financial performance is _Business Information_.
> 3.  **Control** means ownership of substantially all the assets of a legal entity or the power to direct management and policies of a legal entity, such as by vote or by contract.  _Control_ can be direct or indirect.
> 4.  **Copyright Derivative** means the same as "derivative work" under the United States' Copyright Act of 1976.
> 5.  **Derivatives** means _Intellectual Property Rights_ incorporating, improving, or derived from other _Intellectual Property Rights_.
> 6.  **Embodiments** means documents, computer files, and other records that describe, embody, record, or store the subject matter of _New Intellectual Property_.
> 7.  **Generic Improvement to Open Source** means:
>     1.  a _Copyright Derivative_ of _Open Software_
>     2.  that is suitable for submission as a patch to the _Open Software_ project from which it derives
>     3.  that does not contain any _Derivatives_ or _Embodiments_ of any _Company_ _Secrets_
> 8.  **Information Marked Confidential** means information that is not _Publicly Available_ that is disclosed in materials marked or identified in writing as "Secret", "Confidential", "Proprietary", or similar.
> 9.  **Infringement** means infringement of _Intellectual Property Rights_, before or after the date of this agreement.
> 10.  **Intellectual Property Rights** means all of these:
>      1.  copyrights, mask work rights, and moral rights
>      2.  patent rights
>      3.  trade secrets
>      4.  trade names, trademarks, service marks, and rights in trade dress and packaging
>      5.  database rights
>      6.  other kinds of exclusive rights that lawyers typically class as "intellectual property rights"
>      7.  rights in registrations and applications for _Intellectual Property Rights_.
> 11.  **Leak** means unauthorized disclosure or loss of _Secrets_ from or by a party or any other person a party suspects has obligations to keep the _Secrets_ confidential.  A _Leak_ is a _Leak_ whether caused by accident or due to an intentional security breach.
> 12.  **Legal Action** means any legal action or claim, ignoring the historical distinction between actions "in law" and "in equity".
> 13.  **Legal Requirement** means a requirement of a law, regulation, or order from a court, administrative body, or government institution with legal jurisdiction.
> 14.  **New Intellectual Property** means all of these, created by _Developer_ during work on a _Project_, alone or with _Company_ personnel:
>      1.  all _Intellectual Property Rights_ that _Developer_ creates as a result of _Developer_'s work on a _Project_
>      2.  _Derivatives_ of _New Intellectual Property_
>      3.  _Embodiments_ of _New Intellectual Property_
> 15.  **Notice** means an email from one party to the other, delivered to the address provided with their signature, or to another address they specify by _Notice_ after signing.
> 16.  **Open License** means a form public license approved by the Open Source Initiative as an open source license, or the Creative Commons CC0 1.0 Universal form license.
> 17.  **Open Software** means software licensed to the public on the terms of an _Open License_.
> 18.  **Personal Information** means all information subject to laws governing collection, storage, use, transfer, and processing of data about individuals, or implicating personal privacy, broadly understood, about individuals who interact with a party, its products, or its services.  _Personal Information_ is _Personal Information_ no matter how it is stored and whether or not it is attributable to specific individuals by name or other identifier, aggregated, or anonymized.
> 19.  Information is **Publicly Available** in all of these situations:
>      1.  The information became publicly known for some reason other than breach of this agreement.
>      2.  The party disclosing the information has made the same information available to others without obligations to keep it confidential.
>      3.  The party receiving the information received the same information from someone else before, and did not know then that the person providing the information was breaking a confidentiality obligation to the other party.  The party receiving the information must show this is the case with documents created before it disclosed the information.
>      4.  The party receiving the information developed the same information, without any help from the party disclosing the information or using any of its _Secrets_, before receiving it from the other party.  The party receiving the information must show this is the case with documents created when it independently developed the information.
>
>      Information is not _Publicly Available_ just because it synthesizes other information that is _Publicly Available_.
> 20.  **Separate MIT License** means The MIT License, in the form standardized by Software Package Data eXchange with the identifier "MIT", interpreted as an entirely independent legal document, without reference to these terms or the circumstances of _Developer_ and _Company_'s contractor-client relationship.
> 21.  **Software** means computer code and software configuration, whether in source, script, or compiled form, for any software or hardware platform, and stored in any format.
> 22.  _Software_ **Utilizes** another work when it explicitly depends on, installs, configures, invokes, or links to the other work, directly or indirectly.
