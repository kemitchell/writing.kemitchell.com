---
title: Templating for Lawyers
description: learn computer templateering in five minutes flat
date: 2021-03-13T18:07Z
tags:
- Law Practice
- Legal Technology
- Drafting
---

The benefits of [using Markdown for legal documents](https://type.commonform.org/) have proved themselves in practice.  In my [own projects](https://projects.kemitchell.com/), public and private.  In collaboration with others, as on [The Blue Oak Model License](https://blueoakcouncil.org/license/1.0.0) and [PolyForm licenses](https://polyformproject.org/licenses).

Once you can read and write legal language in a computer-friendly way, the next step up is computer-friendly _templates_.  You want to express ideas like "only include this section if the client wants an extended warranty" or "say this if the counterparty is a natural person, and this if it's a company" in your documents, so both computers and people can understand them.  When it comes time to prepare a finished document, you want a computer to stitch the pieces together, instantly and faultlessly.

In techie terms, you want a "templating system", a convention for typing if-then into documents that both people and computers can understand.

The system I recommend is called ["Mustache"](https://mustache.github.io/).  You can read about Mustache on [Wikipedia](https://en.wikipedia.org/wiki/Mustache_(template_system)), or even [dive in to the manual yourself](https://mustache.github.io/mustache.5.html).  But we can cover the essentials for legal drafters right here, in just a few examples.

## 80-20 Mustache for Lawyers

Mustache uses {% raw %}{{double curly braces}}{% endraw %} to mark templating instructions off from content.  Hence its name.  The most important templating instructions by far is "if such-and-such, include this next bit, otherwise leave it out".  That looks like this:

```mustache
{% raw %}{{#extended}}

# Extended Warranty

The seller warrants that the software will perform as described in its documentation for one year after delivery.

{{/extended}}{% endraw %}
```

You can read `{% raw %}{{#extended}}{% endraw %}` as "include the following bit if the 'extended' switch is turned on" and `{% raw %}{{/extended}}{% endraw %}` as "here's the end of the bit to include".  Note that the starting instruction uses `#`, while the ending instruction uses `/`.  Every `#` instruction must be followed by a corresponding `/` instruction.

Yes, these instructions look a little weird.  They have to.  If the instructions looked like content, the computer couldn't tell them apart.

If-then instructions aren't limited to adding or removing whole sections.  They also work _within_ paragraphs, lists, headings, and the like.  For example:

```mustache
# Notices to Contractor

All notices to the contractor under this agreement must be sent to {% raw %}{{#individual}}{% endraw %}the contractor's home address{% raw %}{{/individual}}{% endraw %}{% raw %}{{#entity}}{% endraw %}the contractor's corporate headquarters{% raw %}{{/entity}}{% endraw %}.
```

In this example, if the "individual" switch is turned on and the "entity" switch turned off, the result will be:

```mustache
# Notices to Contractor

All notices to the contractor under this agreement must be sent to the contractor's home address.
```

If the "entity" switch is turned on and the "individual" switch is turned off, the result will be:

```mustache
# Notices to Contractor

All notices to the contractor under this agreement must be sent to the contractor's corporate headquarters.
```

Of course, in situations like individual-or-contractor, we don't really need two switches.  If the contactor isn't an individual, we know they're some kind of entity.  In other words, if the "individual" switch is on, the "entity" switch had better be off, and vice-versa.

We can use just one "switch", the "individual" switch, to express the mutually exclusive choice with the `{% raw %}{{^individual}}{% endraw %}` instruction.  We can read that instruction as "if the 'individual' switch is _off_, include this next bit, otherwise leave it out".  Just like `{% raw %}{{#individual}}{% endraw %}`, the `{% raw %}{{^individual}}{% endraw %}` instruction ends with `{% raw %}{{/individual}}{% endraw %}`.

`#` instruction and `^` instructions are commonly used back to back:

```mustache
# Notices to Contractor

All notices to the contractor under this agreement must be sent to {% raw %}{{#individual}}{% endraw %}the contractor's home address{% raw %}{{/individual}}{% endraw %}{% raw %}{{^individual}}{% endraw %}the contractor's corporate headquarters{% raw %}{{/individual}}{% endraw %}.
```

Now, if we turn on the "individual" switch, we'll get "the contractor's home address".  If we turn off the "individual" switch, we'll get "the contractor's corporate headquarters".

Mustache can do some other things, and has a few more instructions.  But in my experience, the ones we've already covered do nearly everything lawyers need in general-purpose legal terms.  Writing a template turns into a two step process:

1.  Identify all the "switches" you'll need for all the variations you want to cover, and give them short, lower-case names.

2.  Write out all the terms you'll need in one big Markdown file.

3.  Add Mustache instructions to mark off the parts that change based on the switches.

## Choice

Now that you _can_ give templating instructions to computers, it's worth remembering to ask whether you should.

In some situations, you will serve clients better by writing your templating instructions in plain English and leaving it up to readers to sort out what applies and what doesn't.  For example:

> If the order form includes an extended warranty, the seller warrants that the software will perform as described in its documentation for one year after delivery.

And for our notice address example:

> If the contractor is an individual, All notices to the contractor under this agreement must be sent to the contractor's home address.  Otherwise, all notices to the contractor under this agreement must be sent to the contractor's corporate headquarters.

In other situations, this approach produces even longer documents stuffed with optional language and variations that simply don't apply to the client.  The client's terms end up hidden in a template.  At that point, the extra step of instructing the computer, rather than the reader, to prepare the finished becomes worthwhile.
