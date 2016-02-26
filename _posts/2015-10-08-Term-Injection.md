---
title: Term Injection
description: Fighting insertion of unexpected terms in automated form contracts
layout: post
tags:
- Contracts
- Security
- Common Form
---

[Common Form][commonform] describes pieces of reusable contract language that can contain fill-in-the-blanks. Any piece of text can be filled into those blanks when creating a ready-to-sign contract. This flexibility comes at a price: It opens Common Forms up to security problems analogous to [code injection][code injection] in software.

<!--jump-->

For example, given a Common Form for this clause:

> As consideration for the Shares, Purchaser shall pay [price].

A sneaky counterparty could instruct Common Form to fill in the blank as follows:

> Fill in the "price" blank with "$1,000 in the form of a promissory note".

Resulting in:

> As consideration for the Shares, Purchaser shall pay $1,000 in the form of a promissory note.

When Seller expected to sell for cash.

Or even:

> Fill in the "price" blank with "$1,000. Seller shall not at any time during the Term enter any new line of business that competes with any Seller line of business.".

Note the period after "$1,000". This results in:

> As consideration for the Shares, Purchaser shall pay $1,000. Seller shall not at any time during the Term enter any new line of business that competes with any Seller line of business.

This is particularly troubling if agreements are being closed with the Common Form in any sense automatically. A human operator should verify that nothing unusual appears in the values to be filled in. That's hard for a computer to do.

There are a few cases computers can handle. Broadly speaking:

1. Computers can check fill-in-the-blank values against a given list of permitted values (a "whitelist").
2. Computers can ensure that fill-in-the-blank values don't appear in a given list of known-bad values (a "blacklist").
3. Computers can ensure that fill-in-the-blank values conform to very discreet patterns, like "only a dollar figure like $100.00" ("validation").
4. Computers can use patterns or other specific rules to remove parts of fill-in-the-blank values ("filtering").

Given a whitelist of valid United States federal court districts, a computer can make sure a blank for exclusive forum in a forum selection clause doesn't contain other, extraneous terms. Discreet patterns for dollar figures, percentages, calendar dates, and even time periods like "30 days" can prevent malicious counterparties from tacking on extra terms after blanks for values of those types.

Some typical contract fill-in-the-blanks might be replaced with blanks more amenable to computable validation. For example, while it's customary to list an entity party by name, jurisdiction, and form of organization in a contract preamble, the same effect could be achieved with jurisdiction of organization, compared to a whitelist, and secretary of state file number, validated against a numeric pattern.

Some norms of current practice just aren't automation safe. Highly custom or even just highly customizable forms all require blanks with more freedom than computable constraints can safely offer. Consider the humble independent contractor agreement, which so frequently includes a gaping hole of a blank for "description of the services to be performed" in recitals or tacked on as a statement of work.

Long story short: Wherever an automated form gives users the full freedom of the English language to complete a document, those users will have full freedom to inject unexpected terms. The only known defenses are constant vigilance and the harsh discipline of treating all counterparty input as untrustworthy. Playing defense is hard. So says every new data-breach headline.

---

This post dedicated to the roving, anonymous band of Turkish [script kiddies][script-kiddie] responsible for the first successful hack of a web app I'd written. I'll never forget it. A [shell injection][shell-injection].

[script-kiddie]: https://en.wikipedia.org/wiki/Script_kiddie
[commonform]: https://commonform.github.io
[code injection]: https://en.wikipedia.org/wiki/Code_injection
[shell-injection]: https://en.wikipedia.org/wiki/Code_injection#Shell_injection
