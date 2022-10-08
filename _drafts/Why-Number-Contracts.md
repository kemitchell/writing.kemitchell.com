---
title: Why Do We Number Contracts?
tags:
- Drafting
- Contracts
---

Why do we number sections of contracts?  So we can refer to them quickly and specifically.

On a phone call, negotiating changes, we can ask the other side:

> Sorry, what section are you talking about?

And they can answer:

> It's 16.2.

Then we can flip pages until we see 16.2.  Unless someone has broken the rules of numbering by marking more than one section "16.2", we know we're looking at the same section.  Unless someone has numbered sections out of order, we can flip to any section by number fairly fast.

The same goes for cross-references in the text.

But cross-references in the text annoy us more than references over the phone.  To figure out what cross-references _mean_, we have to stop reading, flip to the referenced section, then flip back.  We have to remember what we found was referenced and put it back in context where the reference was made.

Some lawyers have felt this annoyance and decided to copy section headings in parentheses after their cross-references:

> Section 16.2 (Payment Obligations)

If we remember what's under "Payment Obligations", we may be able to keep reading through this cross-reference without flipping to section 16.2.  For example:

> The following sections will survive the expiration or termination of this agreement:
> - Section 16.2 (Payment Obligations)
> - Section 20.2 (Governing Law)

This approach makes references easier to read, but also creates risk.  Someone might add, remove, or rearrange sections, affecting numbering, and then forget to update the number in a cross-reference.  Someone might change a heading and then forget to update the heading in a cross-reference.  Someone might reference a section by number but then copy the wrong heading in parentheses.  We could read "Section 16.2 (Payment Obligations)", then flip to 16.2 and find "Billing Disputes" instead.  As with repeated numbers like "sixteen (16)", number-and-heading cross-references make our documents vulnerable to technical errors.

To avoid this, we could just reference by number.  But we could also just reference by heading:

> The following sections will survive the expiration or termination of this agreement:
> - Payment Obligations
> - Governing Law

Referencing by heading also assumes a particular rule.  There can be only one section with a given heading.  There must be a section called "Payment Obligations", but there must also be _just one_.  Otherwise the cross-reference becomes ambiguous.

We've seen two systems, cross-referencing by number and cross-referencing by heading.  We've seen that they offer different advantages for reading, writing, and discussion.  We've also seen that they rely on different rules that pose different risks.  How do they compare, overall?

<table>
  <thead>
    <tr>
      <td></td>
      <th>By Number Only</th>
      <th>By Heading Only</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Rules</th>
      <td>
        <ul>
          <li>Each section must have a unique number.</li>
          <li>Numbers must increase in order from top to bottom.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Any section referenced must have a heading.</li>
          <li>Any heading must be unique to its section.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th>Risks</th>
      <td>
        <ul>
          <li>Someone changes the numbering of a section without updating cross-references to it.</li>
        </ul>
      </td>
      <td>
        <ul>
          <li>Someone changes the heading of a section without updating cross-references to it.</li>
          <li>Someone adds a heading to a section that is already used for another section.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th>Reading</th>
      <td>Cross-references reveal nothing directly about the contents of the sections they refer to.</td>
      <li>Cross-references reveal the headings of the sections they refer to.</li>
    </tr>
  </tbody>
</table>

Comparing means taking account of the technologies of contract wrangling.  For example, working with contracts in a word processing program makes it fast, easy, and reliable to search for any bit of text wherever it appears in a long document.  Using "Find", we can pinpoint a section number, heading, or defined term anywhere and everywhere it appears.  On paper, doing this is slow and difficult.  Even if you take the time to read every page, you may still skip over a miss where your word of phrase appears.

When working with contracts on paper, number-based referencing's rule that numbers must increase from top to bottom helps us flip pages to find numbers more quickly.  Much as we use alphabetical order to find words in print dictionaries, we use numbering schemes to shuffle our way through print contracts.  If you are looking for "16.2" and see "11.1" on the current page, you know you have to flip forward.  If you see "20.7", you know you have to flip back.  You keep flipping and following until you find the page with "16.2".

The downside of number-based referencing is that someone or something has to make sure numbers increase without repeating throughout the entire document.  This is lots of boring, error-prone work for a person to do.  Most word processing programs, including Microsoft Word, can number and update cross-references automatically.  But those "features" are often more finicky and error-prone than we'd hope.  Even Word hot-shots end up fighting automating numbering from time to time.  Even Word hot-shots end up with redlines full of <del>5</del><ins>6</ins>, <del>6</del><ins>, and so on when they insert sections.
