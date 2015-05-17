---
title: The Halliburton Hypothesis
description: Quantifying the negotiating process to mount attacks on the confidentiality of a public contract forms repository
layout: post
tags:
- Law
- Contracts
- Data
---
[Ansel Halliburton][Ansel on Twitter], friend and colleague, is always good for a great conversation.

Sometime back, Ansel and I met at [Giordano Bros.][Giordano Bros.] on Columbus. Ansel had a new baby at home and the tired eyes to prove it. I'd just made the first preview release of the [Common Form][Common Form] command-line tools, and Ansel was kind enough to make time for me. I don't think anyone has helped me think as much about the confidentiality implications of ways to share Common Forms as Ansel.

Among his gems from that conversation (paraphrased):

> In general, across negotiated contracts, the [edit distance][edit distance] between decreases as the parties converge on an agreement.

In lawyer speak, rather than techie talk:

> If you look at records for enough contract negotiations, you'll find, as a general trend, that the amount of red in redlines passed between the parties decreases as they come closer to a deal.

All deal lawyers have done deals where this wasn't the case. The parties may decide to switch to a different structure for the transaction, say from a stock purchase to an asset purchase. Changes in the business deal may require large changes, such as moving from cash compensation to a mix of cash and other assets. But over time, the hypothesis says, the trend is less red as you get closer to a signed deal.

One model for sharing Common Forms is to provide a public repository where anyone can user can add a form. No information is stored about when any form is added to that repository, or who added it. If two successive revisions of a form are added, there isn't any explicit link between them. Their only connection is the fact they share some provisions, the ones that weren't revised, between them. By the nature of Common Forms, they wouldn't contain names of parties, material deal specifics like amounts, dollar figures, dates, or other variable specifics. (Common Forms resemble contracts on EDGAR with [confidential treatment redacted][CTRs].) The repository only allows users to request forms by their fingerprints, a unique code that reflects the content of the form. Riffling through every form in the repository isn't allowed. You have to know what you're looking for and ask for it. Negotiating parties can store successive proposals in the repository and send the fingerprints back and forth via e-mail or some other channel they think is secure.

If a hacker takes control of the repository, however, I can't stop them from riffing through the forms. The attacker might try to discover the particular terms of a deal between parties known to have negotiated with forms stored in the repository by creating a program to riffle through the forms and search for terms or structures they would expect to appear in the targets' agreement. They could then try to cluster agreements by computing the edit distance, or the amount by which one form varies from another, and group those that are most similar to others, then review representative samples of each group to guage the likelihood they were used by the target parties. But even if they could find a number of forms that seem to reflect a negotiation, the repository doesn't store information about when or even in what order those forms were stored.

The larger the repository, the more unlikely any attacker would be able to determine the terms of a specific deal, and the more burdensome that task would be. The confidentiality of the repository thus scales with the number of forms it stores. As a BitTorrent network becomes more efficient with more users, so a public Common Form repository would improve with increased use.

If it holds, the Halliburton Hypothesis is another tool an attacker's disposal. Given a cluster of similar forms that seem like a probable match for the agreement of interest, an attacker might piece together the identities and order of final revisions leading up to signing by looking for small edits. A certain amount of manual work would be required to judge the plausibility of the succession of edits, and conclusions would be educated guesses, at best, but the edit distance heuristic might be enough to make the manual task practical. Not good.

Of course, an attacker might get lucky and find that the substance of the agreement wasn't revised much over the course of negotiation, producing lots of forms in the repository with the same provision of interest. Especially if that provision is highly particular to the transaction the attacker wants to surveil, it may be enough just to riffle through the repository looking for that provision. If the target parties are the only ones who might have added such a provision to the repository, the attacker can conclude that those are the terms their targets used.

On the other hand, there are kinds of information an attacker who has compromised the repository can never find. If the parties use fill-in-the-blank fields as Common Form advises, variable ("dickered") terms like dollar amounts, percentages, exclusive territories, numbers of patents licensed, &c. will never appear in the repository. (Common Form's interface will nag form authors when they include information in form text that looks like it should be a fill-in-the-blank.) All the attacker will see is a blank where the parties filled this information in before signing.

Nonetheless, Ansel's hypothesis gave me pause. I've learned from experience in the privacy space that deidentification, the process of aggregating or redacting personally identifiable information so it can be disclosed without revealing anything about any specific individual, requires time, reflection, and deep, serious thought. The same care is required for confidentiality's sake, and I feel this responsibility very heavily with regard to Common Form.

[Ansel on Twitter]: https://twitter.com/anseljh

[Giordano Bros.]: http://www.giordanobros.com

[Common Form]: https://commonform.github.io

[edit distance]: http://en.wikipedia.org/wiki/Edit_distance

[CTRs]: http://www.sec.gov/cgi-bin/browse-edgar?company=&CIK=&type=ct+order&owner=include&count=40&action=getcurrent
