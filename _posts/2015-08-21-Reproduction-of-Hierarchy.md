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

Consider a bit of toy contract structure. [Common Form](https://commonform.github.io) is built for this kind of thing:

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
+- Text "Licensee shall be permitted to"
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

Licensee shall be permitted to

## Use

Use the Software

## Copy

Copy the Software

## Distribute

Distribute the Software

subject to ["Prohibited Acts"](#Prohibited Acts)
~~~

But this markup doesn't unambiguously show that "subject to..." is within "License", but not within "Distribute". Lawyers see these kinds of structures produce ambiguity all the time. Does Licensee have to use and copy the software subject to "Prohibited Acts", too, or just distribute the software subject to "Prohibited Acts"?

You might try to use some kind of marker to "back up" one level in the hierarchy of the document. For example, a horizontal rule:

~~~
# License

Licensee shall be permitted to

## Use

Use the Software

## Copy

Copy the Software

## Distribute

Distribute the Software

---

subject to ["Prohibited Acts"](#Prohibited Acts)
~~~

But this breaks down if the hierarchy is more than one level deep:

~~~
# License

Licensee shall be permitted to

## Use

Use the Software

## Copy

Copy the Software

## Distribute

Distribute the Software both

### United States

within the United States

### Germany

within Germany

---

subject to ["Prohibited Acts"](#Prohibited Acts)
~~~

You might use as many horizontal rules as prior sections you need to close off:

~~~
# License

Licensee shall be permitted to

## Use

Use the Software

## Copy

Copy the Software

## Distribute

Distribute the Software both

### United States

within the United States

### Germany

within Germany

---

---

subject to ["Prohibited Acts"](#Prohibited Acts)
~~~

That's ungainly and ugly. You'll end up scrolling a lot, counting out how many rules you need. And you'll end up with tons of horizontal rules wherever you display your markup.

How about extra headings?

~~~
# License

Licensee shall be permitted to

## Use

Use the Software

## Copy

Copy the Software

## Distribute

Distribute the Software both

### United States

within the United States

### Germany

within Germany

## Distribute (continued)

subject to ["Prohibited Acts"](#Prohibited Acts)
~~~

I like this slightly better. But it's still a pain and a hack.

## Give up on headings.

At this point, you might accept that headings are the problem, and kick them to the curb. Markdown's list syntax, based on indenting four spaces (or one tab) at a time, is more flexible:

~~~
1.  **License**

    Licensee shall be permitted to

    1.  **Use**

        Use the Software

    2.  **Copy**

        Copy the Software

    3.  **Distribute**

        Distribute the Software both

        1.  **United States**

            within the United States

        2.  **Germany**

            within Germany

    subject to ["Prohibited Acts"](#Prohibited Acts)
~~~

It's good Markdown, which may be enough if all you want is nice [prose diffs on GitHub](https://github.com/blog/1784-rendered-prose-diffs). It's not good HTML. But the hierarchy is correctly reproduced.

## HTML5

All of this just goes to show Markdown's age. It was designed as a human-readable markup language targeting HTML4. HTML4 lacks the HTML5 document-hierarchy tags we really want:

```html
<section id=License>
  <h1>License</h1>
  <p>Licensee shall be permitted to</p>
  <section id=Use>
    <h2>Use</h2>
    <p>Use the Software</p>
  </section>
  <section id=Copy>
    <h2>Copy</h2>
    <p>Copy the Software</p>
  </section>
  <section id=Distribute>
    <h2>Distribute</h2>
    <p>Distribute the Software both</p>
    <section id="United States">
      <h2>United States</h2>
      <p>within the United States</p>
    </section>
    <section id=Germany>
      <h2>Germany</h2>
      <p>within Germany</p>
    </section>
  </section>
  <p>subject to <a href="#Prohibited Acts">Prohibited Acts</a></p>
</section>
```

Of course, you can fake it in HTML4 with `<div>` tags:

```html
<div class=section id=License>
  <h1>License</h1>
  <p>Licensee shall be permitted to</p>
  <div class=section id=Use>
    <h2>Use</h2>
    <p>Use the Software</p>
  </div>
  <div class=section id=Copy>
    <h2>Copy</h2>
    <p>Copy the Software</p>
  </div>
  <div class=section id=Distribute>
    <h2>Distribute</h2>
    <p>Distribute the Software both</p>
    <div class=section id="United States">
      <h2>United States</h2>
      <p>within the United States</p>
    </div>
    <div class=section id=Germany>
      <h2>Germany</h2>
      <p>within Germany</p>
    </div>
  </div>
  <p>subject to <a href="#Prohibited Acts">Prohibited Acts</a></p>
</div>
```

But nobody really wants to do either manually in Markdown:

```markdown
<section id=License>

# License

<section id=Use>

## Use

Use the Software

</section>

<section id=Copy>

## Copy

Copy the Software

</section>

<section id=Distribute>

## Distribute

Distribute the Software both

<section id="United States">

## United States

within the United States

</section>

<section id=Germany>

## Germany

within Germany

</section>

</section>

subject to [Prohibited Acts](#Prohibited Acts)

</section>
```

This is worse than wrangling horizontal rules, and not all Markdown parsers and renderers will do the right thing.

## Always waiting.

There is even an issue with HTML5: Heading tags only go up to `<h6>`, while legal documents often have hierarchies more than 6 levels deep. Not that they should, but they do.

Inevitably, you fall back on generic tags. Something like `<span class="heading level7">` is easy enough.

---

Thanks once more to [Tim](http://www.kemp59f.info/) for enduring a less refined attempt. Thanks also to [Casey Kuhlman](http://caseykuhlman.com/), cofounder of [Eris Industries](https://erisindustries.com/), whose work on [Legal Markdown](https://github.com/eris-ltd/legalmarkdown) was inspiring.
