---
title: FTC 2014 Year in Review
description: What do the FTC’s 2014 privacy and security enforcement actions teach tech companies?
layout: post
tags:
- Law
- Privacy
- Security
- Start-ups
- Federal Trade Commission
---

By my count, the FTC brought 28 significant enforcement actions on the basis of data privacy and security in 2014.[^1]

- Thirteen concerned failure to renew self-certification of compliance with, or change disclosures about, European Union Safe Harbor.
- Six dealt broadly with inadequate data security measures, two of which concerned failure to verify certificates for Transport Layer Security, a data encryption standard, in mobile application for iOS and Android mobile computing devices.
- Five dealt with credit-related personal information under the Fair Credit Reporting Act.
- Two dealt with violations of the Children's Online Privacy Protection Act.
- Two alleged data-related practices well beyond what anyone should expect is legal or ethical.

What should these enforcement actions teach the tech industry?

<!--jump-->

Renew your Safe Harbor self-certification.
------------------------------------------

If you self-certify compliance with Safe Harbor, do not forget to renew your self-certification. If you do not re-certify, update your privacy policy accordingly and remove the Safe Harbor Self-Certification graphic from your website. Or else.

The FTC filed its Safe Harbor complaints for 2014 within a span of three days, in September. The complaints, consent orders, and analyses for review are essentially the same; with a copy of [Doxserá](http://www.theformtool.com/), [export.org's list of Safe Harbor self-certifiers](https://safeharbor.export.gov/list.aspx), and some [intermediate Googling](https://www.google.com/search?q="Safe+Harbor"+intitle%3A"Privacy+Policy"), FTC could bring as many of these actions as it likes. Why so many unlucky targets [were](http://www.ftc.gov/enforcement/cases-proceedings/142-3018/atlanta-falcons-football-club-llc-matter) [football](http://www.ftc.gov/enforcement/cases-proceedings/142-3025/pdb-sports-ltd-dba-denver-broncos-football-club-matter) [teams](http://www.ftc.gov/enforcement/cases-proceedings/142-3032/tennessee-football-inc-matter) I can only speculate. In light of Edward Snowden and related anxiety about American companies handling European data, it might be easier to guess why FTC chose to hammer hard on Safe Harbor at all.

Targets in 2014 ran the gamut from telecommunications giant [Level 3](http://www.ftc.gov/enforcement/cases-proceedings/142-3028/level-3-communications-llc-matter) to stalwart south-of-Market start-up [BitTorrent](http://www.ftc.gov/enforcement/cases-proceedings/142-3020/bittorrent-inc-matter). This kind of thing catches everybody.

Make sure you get the software you pay for.
-------------------------------------------

[Credit Karma](http://www.ftc.gov/enforcement/cases-proceedings/132-3091/credit-karma-inc) was the subject of an enforcement action for allegedly boasting the protection of Secure Sockets Layer, a secure data transmission protocol, while its mobile app software in fact shut a crucial security feature of SSL off.

The FTC plead that Credit Karma's mobile applications were developed by outsource developers. According to the complaint, Credit Karma allowed its developers to disable SSL certificate verification during development, but not in the version of the software delivered for publication. This is a common, if not ideal, practice in the software industry, both because verification isn't needed for testing in development, and because acquiring a certificate that's many kinds of devices can verify takes time and costs money.

Often a company won't know that it needs a certificate before hiring a developer. In most cases the developer should not acquire the certificate, but direct its client to go through the related verification procedures itself.[^2] In the meantime, the developer may ask for a change order under its contract to make clear it can keep working on schedule with verification turned off. Whether or not this was the case with Credit Karma, the company seems to have acted correctly by retaining fully functional SSL in the specification for its final product. An audit—essentially, hiring an additional team of programmers to produce no new code, but only review what had already been written and released—might have been out of the question.

If the security characteristics of your software are particularly important, novel, or complex, a third-party security audit of your developers' work is money wisely spent. Security vulnerabilities can dramatically affect goodwill and acceptance on the part of the public. A public breach or a reputation for laxity can doom a company faster and more effectively than FTC ever could. Reassurance on that front, if not perfect certainty, is something you can buy.

Audit or no audit, companies outsourcing development can push for indemnification for privacy-related liabilities from their developers. Resistance to such an indemnity for issues that flow from breach of the contract, like delivery of out-of-spec software, should be a red flag. So should any squirming about industry-standard secure coding techniques and technologies and admonitions that "we're not a security firm" or ["we use a framework that's totally secure"](http://weblog.rubyonrails.org/2013/1/8/Rails-3-2-11-3-1-10-3-0-19-and-2-3-15-have-been-released/). If your developer isn't a large operation with lots of assets and cash flow, consider adding a contract provision requiring they maintain applicable insurance. Be aware that some of the best consultancies run very lean, and may balk at the cost of a policy if you're the first to propose they take one out.

Finally, it couldn't hurt to schedule a sit-down upon delivery of the software to review the spec, the contract, and any change orders, either. Sometimes developers simply forget to twiddle a line in a configuration file, resulting in a crippled development version going out to the world. A situation like Credit Karma's might be avoided by reminding developers that something out of the ordinary happened during development. That way they don't just repeat the plain-vanilla delivery process they've worked into muscle memory.

Scope your security audits correctly.
-------------------------------------

[Fandango](http://www.ftc.gov/enforcement/cases-proceedings/132-3089/fandango-llc) got a security audit but ended up in the same boat as Credit Karma: SSL certificate verification was allegedly shut off in their mobile apps, too, in part because the auditors were told to focus exclusively on other kinds of problems.

Good security auditors will insist on a statement of scope for their work, in part because security issues vary widely by nature, and can arise from any part or unfortunate combination of parts of a software system. A product typically comprises or relies on hundreds of discernible components, creating a huge universe of possibly vulnerable interactions. Unfortunately, drawing hard lines is error-prone in software as in law; if you can state a perfect bright line rule for what's in and out of a effective audit's scope, you should probably be doing high-dollar audits, not paying to have them done.

For the rest of us mere mortals, there can be no silver bullet. You can add "verify SSL" to your scope description, but that's already out of date, and will age badly as technology further evolves.[^3] Work with your auditor to define a practical scope. Their knowledge and experience, which they have good incentive to keep up-to-date and relevant, should be applied to make sure their efforts on your behalf provide meaningful risk reduction. An auditor who does not understand why their services are worth your business' money is unlikely to provide worthwhile services. A few billable hours determining scope can make subsequent hours more cost effective, plus give you a chance to identify and drop a dud auditor before paying out for a full job.

Keep your privacy policy in sync with reality.
----------------------------------------------

The FTC will read your privacy policy very strictly, and not just once it's started investigating something else and wants to pile on. If you claim to be taking steps to improve data privacy and security—even if you just promise "reasonable measures"—and don't follow through, the FTC may come after you, shame you publicly, and appoint itself your long-term privacy parole officer.

Enforcement actions in 2014 point out a few kinds of discrepancies.

The Commission alleged that [GeneLink](http://www.ftc.gov/enforcement/cases-proceedings/112-3095/genelink-inc-matter) used third party service providers to collect and handle information about customers, including genetic information. FTC claimed that despite stating in their privacy policy that information would only be used by third parties to assist GeneLink and fulfill orders, use in practice was far broader. Finally, FTC alleged the company treated all information the same, security-wise, which unfortunately meant storing it unencrypted, without audit, and failing to police business need for access.

[GMR](http://www.ftc.gov/enforcement/cases-proceedings/122-3095/gmr-transcription-services-inc-matter), an audio transcription service, was hauled in for allegedly misrepresenting that third-party transcriptionists were subject to confidentiality agreements, and that its whole operation was HIPAA compliant. Allegedly, none of the security measures it claimed were in fact enforced or verified among its contractors, and customer data, audio files and all, were left open to the Internet, where a search crawler dutifully found and indexed them for search.

[Snapchat](http://www.ftc.gov/enforcement/cases-proceedings/132-3078/snapchat-inc-matter), a mobile app that let users post photo messages visible only by certain users for a specified amount of time, was upbraided at length. While claiming photos posted were ephemeral, and would disappear forever after posting, the app purportedly stored photos persistently on the user's mobile device, such that they could be ferreted out after their expiration dates with other programs. Its claim to put users in control of how long others could view their posts allegedly faltered against screen shot functionality on phones and the programming interface published by the company itself, though public statements did not reflect this. Finally, the FTC claimed misrepresentation with respect to the app's "find your friends" feature, which collected users' address books in addition to their phone numbers, as well as to statements of data collected and security measures employed more generally in its privacy policy. The complaint goes on and on.

Clients and might-have-been clients often balk when I quote even a heavily discounted fee for a good privacy policy, or when I ask to review their code or talk to their developers. A privacy policy cannot be treated like the filing you made to form your business or a configuration file your developer can write once and forget. A privacy policy that actually provides protection needs to be treated like end-user documentation, evolving with the product and what you know about it. If your policy describes some other product (say, that of your competitor, whose policy you copied), the FTC or another regulator may come calling. Even if your policy describes some bygone or obsolete version of your own product, you may still have problems. What differentiates you from your competitors probably needs to differentiate your privacy policy and terms of use, too. What differentiates the latest and greatest version from a prior iterations should prompt at least a review of your current terms and disclosures.

Take reasonable steps to protect privacy.
-----------------------------------------

If you promise nothing with respect to privacy and do nothing with respect to privacy, you can still be unfair to the public and regulators can come after you. Since its action against the [Wyndham hotel chain](http://www.ftc.gov/enforcement/cases-proceedings/1023142/wyndham-worldwide-corporation) in 2012, the FTC has made clear that it will pursue private companies that fail to implement reasonable security measures for unfair business practices. It continued to do so in 2013, perhaps most notably by hauling [LabMD](http://www.ftc.gov/enforcement/cases-proceedings/102-3099/labmd-inc-matter) to court, and continued in 2014.

A few of the enforcement actions already mentioned, including GeneLink, GMR, and Snapchat, included claims for lax security measures in addition claims for misrepresentations about privacy practices. If your product handles personal information about users, allows them to create accounts that reflect their identities, or especially if your product or service involves potentially sensitive data, like health or financial data, make sure your your processes in code and in the office are designed to secure that data.

A start-up company can die a thousand ways tomorrow. We all know that kind of business has to shove low-probability risks off to a back burner. It's a rational approach, but not when it becomes a reflex, rather than a conscious process; when the pot boils over, it's a weak excuse. Privacy is particularly expensive if you try to do it all at once, later on, after you've paid counsel to diffuse or settle out a legal issue. Even start-ups have the FTC to worry about.

Listen to security researchers.
-------------------------------

The FTC's complaints against both Fandango and Snapchat point to those companies' lack of responsiveness to security researchers' discovery of security holes in their systems. In the case of Fandango, the FTC describes in detail how a security researchers' helpful report was allegedly fed into a customer service system, misclassified as a password reset request by dumb sorting algorithms, and consigned to the digital trash pile. Snapchat earns rebuke on the record for alleged failure to remedy a broadly publicized hole in its privacy model for the better part of a year.

When someone finds a security flaw in your system, there are a few ways they can make it known to you. If you receive a friendly e-mail describing the problem, count yourself very, very lucky. You might have found out from the press. You might have found out from Amazon, by means of a bill reflecting the incremental cost of Bitcoin mining, card data laundering, and a few thousand outbound penis enlargement ads since you were hacked. If you miss one message, you might receive another later.

At a minimum, you should set up a special e-mail address for security issues, perhaps security@yourdomain.com, that forwards to at least two people. More progressive companies establish "bug bounty" programs that not only funnel reports of security vulnerabilities, but offer standing cash payouts for reports, depending on severity. An entire sub-industry of freelance security researchers pay their bills from bounty to bounty, often identifying familiar classes of problems across many sites. You can summon this talent to your aid, zero money down, by establishing a credible bounty program and publicizing payouts and the researchers who've earned them. (Get their permission first.)

If kids use your product, comply with COPPA.
--------------------------------------------

An Internet site or platform need not be "for kids" to fall under the Children's Online Privacy Protection Act. If you know kids use your site and that you are collecting information from or about them, you need to comply with COPPA's additional requirements, or put a stop to use by children.

In 2014, [TinyCo](http://www.ftc.gov/enforcement/cases-proceedings/132-3209/tinyco-inc), a San Francisco-based maker of cutesy mobile freemium games, was targeted by the FTC for failing to address COPPA's requirements in its privacy policy or procedures. [Yelp](http://www.ftc.gov/enforcement/cases-proceedings/132-3066/yelp-inc), a business- and restaurant-review platform also based in San Francisco, also came under fire. Though Yelp is not designed specifically to be used by or appeal to children under 13 years old, Yelp allegedly knew that children used its site and submitted information.

There may be a certain level of online success at which every company has a COPPA problem. When you reach the point where you know kids are using your site, whether according to your posted rules or not, talk to your lawyer and put the right verification and consent procedures in place.

If you sell info on people, know your regulation.
-------------------------------------------------

United States federal law includes a number of industry-specific privacy laws in the areas of finance and banking, background checks, health, movie rentals, children's privacy, and others. If your business does work in a related industry, identify regulations that may apply to you, and understand that the FTC may read the law more broadly than you'd like.

Companies that provide reports on consumers that are used for credit, employment, and other decisions are subject to the Fair Credit Reporting Act. That law and related rules require consumers notices, means to review and correct information, procedures for ensuring information accuracy, written policies, and other measures. [Instant Checkmate](http://www.ftc.gov/enforcement/cases-proceedings/122-3221/instant-checkmate-inc), [Infotrack](http://www.ftc.gov/enforcement/cases-proceedings/122-3092/infotrack-information-services-inc-et-al), and [Telecheck](http://www.ftc.gov/news-events/press-releases/2014/01/telecheck-pay-35-million-fair-credit-reporting-act-violations) allegedly failed to put these requirements into practice. The FTC was not impressed with Instant Checkmate's declaration, in its privacy policy, that the FCRA did not apply to it. In two additional, parallel cases---[Cornerstone and Company, LLC](http://www.ftc.gov/enforcement/cases-proceedings/142-3211/cornerstone-company-llc) and [Bayview Solutions, LLC](http://www.ftc.gov/enforcement/cases-proceedings/142-3226/bayview-solutions-llc)---debt brokers were alleged to have posted unprotected spreadsheets of debt portfolio information, including very intimate personal details of the debtors grouped into the portfolio, to a publicly accessible industry message board.

The FCRA covers more than credit reporting as you might imagine it, extending also to background checks and other dossiers designed to affect consideration for economic opportunities like housing. The Internet, whether a means to aggregate data or deliver consumer reports, does not seem to qualify the FTC's view of who is subject to the FCRA.

Don't do anything nefarious sounding.
-------------------------------------

There are always a few companies that FTC goes out of its way to portray as "the worst of the worst". When the process ends with a consent decree---essentially, a settlement with the FTC---the company neither confirms nor denies the FTC's allegations. It's too early to tell how some of the FTC's accusations in 2014 will pan out in the course of litigation. But it's worth making sure your business can't be portrayed as the next "company that had it coming".

[Jerk, LLC](http://www.ftc.gov/enforcement/cases-proceedings/122-3141/jerk-llc-dba-jerkcom-matter) was pilloried for allegedly running a social network site, illicitly seeded with data scraped from Facebook, where users were pilloried for being "jerks", then cajoled into paying up to be removed from the site. The complaint's accusations are laced with lurid details, from specific harassing messages alleged to have been posted on profile pages to the technical measures Jerk allegedly took to evade limits on the data it could pull out of Facebook, in violation of its developer terms of use. The site was laced with ads, customer service was unresponsive ... the accusations go on and on.

[Sitesearch](http://www.ftc.gov/enforcement/cases-proceedings/142-3192/sitesearch-corporation-doing-business-leaplab), on the other hand, was hauled in for allegedly selling payday loan debtors' personal information, including Social Security Numbers and financial account numbers, to "fraudsters, spammers, and telemarketers". One buyer, Ideal Financial, is alleged to have used the information to rack up millions in unauthorized debits and charges. Sitesearch allegedly knew about all of this.

Only the courts will decide what, if any part, of these accusations is true, and pointing fingers at these businesses as "the kind of operation FTC _should_ be bothering" will never help your company. Instead, take a moment to imagine the story of your company in the worst possible light you can manage. If what you do, maybe just perhaps because it's novel, could be force-fit into the stereotype of a get-rich-or-die tech marauder, then consider what concrete steps you can take to buck that narrative. With the FTC and privacy-conscious media alike on the prowl, those steps are likely to be good investments, in addition to good compliance.

[^1]: I have checked my notes against the FTC's website. If you can think of an action that I've forgotten, please feel free to contact me by e-mail.

[^2]: Your [certificate authority](http://en.wikipedia.org/wiki/Certificate_authority)---the company that sells you a certificate---may require back-and-forth to verify your identity, legal form, jurisdiction, or other attributes before issuing certain kinds of desirable certificates. Your certificate should be particular to your business, not your developer's business. On the other hand, you may want your developer to handle your domain name (yourcompany.com) and the servers that point that domain name to your website (via the [Domain Name System](http://en.wikipedia.org/wiki/Domain_Name_System)). Control of the domain and DNS can be transferred back to you online if you decide to switch developers or bring it in-house.

[^3]: Strangely, the FTC's own documents, including its complaint, never mention [Transport Layer Security, SSL's successor](http://en.wikipedia.org/wiki/Transport_Layer_Security). The TLS standard [emerged in a prior millenium](http://tools.ietf.org/html/rfc2246). Lest the private sector scoff: Don't ask me how many times I've seen a [SAS 70](http://en.wikipedia.org/wiki/Statement_on_Auditing_Standards_No._70:_Service_Organizations) covenant in a commercial deal.
