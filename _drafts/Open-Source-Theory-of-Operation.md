---
title: "Open Source: Theory of Operation"
layout: post
---

This is a short guide to _open source software_ for programmers.  It's designed to be as short, simple, and practical as possible.  It's a guide for the coder on the job, wondering how open source works, what kinds they can utilize, and what they have to do to get away with it.

<!--jump-->

Of course, if your company has an open source policy or approval process, the short answer is that you should do what your company says you should do.  Read your company's policy---I'm serious---and follow it.  If your company doesn't have a policy, or you'd like to better understand, talk about, or perhaps improve the policy it does have, read on.

# Operating Environment

Coders and companies turn software into open source software with legal tools called open source licenses.  Open source licenses override legal defaults, especially default rules of intellectual property law.  In particular, those that otherwise let authors of software sue unauthorized users for lots of money.

When open source licenses work correctly, you, as a user of open source software, get to stop worrying about those dangerous defaults.  But you can't understand how open source licenses work, or decide whether a license flips all the defaults you need to worry about for a particular piece of software, if you don't understand the defaults in the first place.

The United States federal government and all state governments have intellectual property laws.  Intellectual property laws give monopolies over certain kinds of techniques, ideas, symbols, and products of thinking work.  The core idea of these laws---the "policy" behind them---is to reward those risking and investing to create and discover with the right to control, and charge for, use of their results.

Using intellectual property without permission is called _infringement_.  The law allows intellectual property owners to sue infringers to get courts orders to stop infringing---_injunctions_---pay money to the owners---_damages_---or both.  Intellectual property rights eventually expire, but in the meantime, owners can sell or assign their rights to others.

## Copyright

Federal copyright law is a kind of intellectual property law.  Copyright law rewards authors of creative works with rights to stop others from making copies of their work, or using it as a starting point for new work of their own.

Copyright applies to any computer code, documentation, images---almost anything stored in files---that is even a tiny bit creative.  Since copyright damages for even small infringements can be very large, and making sure a piece of work utterly lacks "creativity" as the law understands it is hard and takes legal expertise, most savvy folk treat every bit of code they receive from others as though someone else has copyright.

Copyright applies automatically.  Authors get copyright in their code the moment they write it.  There's no need to file anything with the government or pay any fees, at least until you want to sue.

## Patent

Patent law is also a kind of intellectual property law.  Patent law rewards inventors with the right to stop others from making, using, selling, or importing their useful inventions without permission.

Teaching computers to do something useful with code does not in itself entitled anyone to a patent.  But new inventions that happen to be implemented in code can be patented.  Algorithms, data structures, protocols, and other methods of achieving useful results with software have all been covered by patents.

Unlike copyright, patent protection does not apply automatically.  To receive patent rights, an inventor must apply for a patent.  The application process is technical, detailed, and takes years.  It's possible to apply for and receive a patent without professional help, but a well practiced expert---a patent attorney or patent agent---markedly increases chances of approval and getting a patent that's worded for strength and strategic value.  Good professional time isn't cheap.

## Ownership

By default, copyright and patent rights belong to authors and inventors.  There are exceptions for work done as an employee, under contract, or when contributing a small part of a larger effort.  These exceptions often shift ownership of intellectual property to employers, clients, and those creating overarching work.  Standard form contracts for employees and consultants almost universally assign or license rights from workers to companies.

Depending somewhat on the laws of your state, if you write code in your free time, using your own equipment, that isn't related to your work, copyright in the code belongs to you, and you can apply to patent any inventions in your code.  You can grant licenses to others to use your work, or sell your rights to others.  If you write code during work hours, or using equipment from your employer, copyright and patent rights probably belong to your employer.

Once intellectual property rights are sold or transferred, the old owner can no longer grant permission or sell to anyone else.  With rare exceptions that usually apply to fine artwork, rather than software, a coder that assigns rights in their software to another ends up in the same legal position as anyone else, who didn't write the code.

## Limits

Intellectual property rights are not absolute.  Each major intellectual property law has rules that permit utilizing intellectual property in various ways without fear of losing an infringement lawsuit.

For example, "fair use" is an important limit on copyrights, and "exhaustion" is an important limit on patents.  "Fair use" allows copying materials for criticism, comment, and some other, beneficial purposes.  "Exhaustion" protects using and reselling a product that implements a patented invention, if the patent holder authorized sale of the product.

These limits on intellectual property are very important, but complex, unreliable, and rarely applicable to software.  Expert lawyers can make informed guesses---based on past legal decisions---about whether they protect a particular example of possible infringement.  But that kind of judgment is time-consuming and expensive.  It's usually cheaper and less risky to find an alternative---or build one---than to rely on complex limits of intellectual property rights to protect use of someone else's code.

# Field Guide to Standard Open Source Licenses

|                         | Permissive                      | Copyleft                  |
|-------------------------|---------------------------------|---------------------------|
| Vague or Copyright-Only | MIT, BSD-2-Clause, BSD-3-Clause | GPL-2.0                   |
| Explicit Patent License | Apache-2.0                      | GPL-3.0, MPL-2.0, EPL-1.0 |

# Taxonomy of Common Open-Source Licenses

1.  Permissive Licenses
    - The MIT License Family
      - The MIT License
      - The ISC License
    - The BSD License Family
      - BSD-2-Clause
      - BSD-3-Clause
    - The Artistic License Family
      - Artistic-1.0
      - Artistic-2.0
2.  Copyleft Licenses
    - The GNU General Public License Family
      - The GNU General Public Licenses
          - GPL-2.0
          - GPL-3.0
      - The GNU Lesser General Public License Family
        - LGPL-2.0
        - LGPL-2.1
        - LGPL-3.0
      - AGPL-3.0
    - MPL-2.0
3.  Waivers
    - CC0-1.0
    - The Unlicense
4.  Contrarian Declarations
    - WTFPL

Some kinds of

# Key Reading

There is more to read about open source software than anyone can manage in a lifetime.  Here's the mandatory reading.

- [The Open Source Initiative's annotated Open Source Definition](https://opensource.org/osd-annotated)

- [GNU General Public License, version 2](https://www.gnu.org/licenses/gpl-2.0.en.html)

- [GNU General Public License, version 3](https://www.gnu.org/licenses/gpl-3.0.en.html)
