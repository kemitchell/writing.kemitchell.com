---
title: Reproduction of Hierarchy
description: Markdown isn't great for contracts. HTML5 is better.
layout: post
tags:
- Contracts
- Software
- Common Form
---

[Tim Kempf](http://www.kemp59f.info/) recently invited me to explain why Markdown is not a great fit for American-style contracts. I gleefully took up him on the offer, and proceeded, more or less, to belly-flop on hard concrete. Let's try that again...

## Contracts are hierarchical in structure.

Consider this bit of toy contract structure. [Common Form](https://commonform.github.io) is built to express this kind of thing:

~~~
License \\ <Licensee> shall be permitted to

    Use \\ Use the <Software>

    Copy \\ Copy the <Software>

    Distribute \\ Distribute the <Software>

subject to {Prohibited Acts}.
~~~

Drawing the same out as an explicit, tree-like hierarchy:

~~~
Sole Top-Level Section
Heading "License"
|
+- Text beginning "First, some text."
|
+- First Second-Level Section
|  Heading "Use"
|  |
|  +- Text "Use..."
|
+- Second Second-Level Section
|  Heading "Copy"
|  |
|  +- Text "Copy..."
|
+- Third Second-Level Section
|  Heading "Distribute"
|  |
|  +- Text "Distribute..."
|
+- Text beginning "subject to..."
~~~

## In Markdown ... almost

In Markdown:

~~~
# License

_Licensee_ shall be permitted to

## Use

Use the _Software_

## Copy

Copy the _Software_

## Distribute

Distribute the _Software_

subject to ["Prohibited Acts"](#prohibited-acts)
~~~

But this markup doesn't unambiguously show that "subject to..." is within "License", but not within "Distribute". Lawyers see ambiguity crop up all the time as a result of such structural problems---Does Licensee have to use and copy the software subject to "Prohibited Acts", too, or just distribute the software subject to "Prohibited Acts"?

One might try to use some kind of marker to "back up" one level in the hierarchy of the document. For example, a horizontal rule:

~~~
# License

_Licensee_ shall be permitted to

## Use

Use the _Software_

## Copy

Copy the _Software_

## Distribute

Distribute the _Software_

---

subject to ["Prohibited Acts"](#prohibited-acts)
~~~

But this breaks down if the hierarchy is more than one level deep:

~~~
# License

_Licensee_ shall be permitted to

## Use

Use the _Software_

## Copy

Copy the _Software_

## Distribute

Distribute the _Software_ both

### United States

within the United States

### Germany

within Germany

---

subject to ["Prohibited Acts"](#prohibited-acts)
~~~

The obvious solution is to use as many horizontal rules as prior sections you need to close off:

~~~
# License

_Licensee_ shall be permitted to

## Use

Use the _Software_

## Copy

Copy the _Software_

## Distribute

Distribute the _Software_ both

### United States

within the United States

### Germany

within Germany

---

---

subject to ["Prohibited Acts"](#prohibited-acts)
~~~

That's ungainly and ugly. You'll end up scrolling a lot, counting out how many rules you need. And you'll end up with tons of horizontal rules wherever you display your markup.

How about extra headings?

~~~
# License

_Licensee_ shall be permitted to

## Use

Use the _Software_

## Copy

Copy the _Software_

## Distribute

Distribute the _Software_ both

### United States

within the United States

### Germany

within Germany

## Distribute (continued)

subject to ["Prohibited Acts"](#prohibited-acts)
~~~

I like this slightly better. But it's still a pain and a hack.

## Give up on headings.

At this point, you might accept that Markdown's heading syntax is the problem, and kick it to the curb. Markdown's list syntax, based on indenting four spaces (or one tab) at a time, is more flexible:

~~~
1.  **License**

    _Licensee_ shall be permitted to

    1.  Use

        Use the _Software_

    2.  Copy

        Copy the _Software_

    3.  Distribute

        Distribute the _Software_ both

        1.  United States

            within the United States

        2.  Germany

            within Germany

    subject to ["Prohibited Acts"](#prohibited-acts)
~~~

The hierarchy is reproduced, at the expense of using formatting tags to set off headings and the semantics of heading tags, which are a good fit. It's good Markdown, which may be enough if all you want is nice [prose diffs on GitHub](https://github.com/blog/1784-rendered-prose-diffs). It's not good HTML.

## HTML5

All of this just goes to show Markdown's age. It was designed as a human-readable markup language targeting HTML4. HTML4 lacks the HTML5 document-hierarchy tags we really want:

{% highlight html %}
<section>
    <h1>Example</h1>
    <p>First, some text.</p>
    <section>
        <h2>First</h2>
        <p>Alpha</p>
        <section>
            <h3>Still Deeper</h3>
            <p>Beta</p>
            <p>This text is within "Still Deeper".</p>
        </section>
        <p>This text is within "First".</p>
    </section>
    <p>This text is within "Example" alone.</p>
</section>
{% endhighlight %}

Of course, one can fake it in HTML4 with `<div>` tags:

{% highlight html %}
<div class="section">
    <h1>Example</h1>
    <p>First, some text.</p>
    <div class="section">
        <h2>First</h2>
        <p>Alpha</p>
        <div class="section">
            <h3>Still Deeper</h3>
            <p>Beta</p>
            <p>This text is within "Still Deeper".</p>
        </div>
        <p>This text is within "First".</p>
    </div>
    <p>This text is within "Example" alone.</p>
</div>
{% endhighlight %}

But nobody really wants to fake either approach in Markdown:

{% highlight html %}
<section>

# Example

First, some text.

<section>

## First

Alpha

<section>

### Still Deeper

Beta

This text is within "Still Deeper".

</section>

This text is within "First".

</section>

This text is within "Example" alone.

</section>
{% endhighlight %}

This is worse than wrangling horizontal rules, and not all Markdown parsers and renderers will do the right thing.

## Always waiting.

There is even an issue with HTML5: Heading tags only go up to `<h6>`, while legal documents often have hierarchies more than 6 levels deep. Not that they should, but they do.

Inevitably, you fall back on generic tags. Something like `<span class="heading level7">` is easy enough.

---

Thanks once more to [Tim](http://www.kemp59f.info/) for enduring a less refined attempt. Thanks also to [Casey Kuhlman](http://caseykuhlman.com/), cofounder of [Eris Industries](https://erisindustries.com/), whose work on [Legal Markdown](https://github.com/eris-ltd/legalmarkdown) was inspiring.
