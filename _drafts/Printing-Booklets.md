---
title: Printing Booklets
description: less paper, easier reading
tags:
- Law Practice
- Legal Technology
---

Legal sources often publish preprint- or printer-proof-style PDFs with large margins and a relatively small text block.  For example, Supreme Court slip opinions and law review articles.  These PDFs often run to many tens of pages or more.  When I print them out, I like to make half-sheet, stapled booklets.

<figure>
<img alt="first page of a Supreme Court slip opinion" src="/images/supreme-court-opinion-example.jpg">
<figcaption>first page of a <a href="https://www.supremecourt.gov/opinions/20pdf/20-366_7647.pdf">recent Supreme Court slip opinion PDF</a></figcaption>
</figure>

Here's how I do it on Linux, using free tools:

```bash
# Install the needed tools.
sudo apt install texlive-extra-utils

# Trim away the large margins around the text blocks.
pdfcrop --margins 20 original.pdf

# Create a PDF with pages paired up and ordered for booklet printing.
pdfbook2 --paper=letterpaper --short-edge --no-crop original-crop.pdf

# Send to the printer with the right duplex setting.
lp -o fit-to-page -o sides=two-sided-long-edge origin-crop-book.pdf
```

Users on Windows with Adobe Acrobat can do this with the page-crop tool and print settings:

<figure>
<img src="/images/acrobat-crop-pages.png" alt="Adobe Acrobat page crop tool">
<figcaption>Adobe Acrobat page crop tool</figcaption>
</figure>

<figure>
<img src="/images/acrobat-print-booklet.png" alt="Adobe Acrobat print settings for a booklet">
<figcaption>Adobe Acrobat print settings for a booklet</figcaption>
</figure>

To bind the booklets along their spines, you'll need a long-reach stapler.  I [picked one up](https://www.amazon.com/dp/B001B0GWKU/) fairly cheap online during law school, and it still works fine.  While I generally prefer flat-clinch staples, I do like standard staplers for booklets, since they're easier to pull when it comes time to recycle.

You could also stitch the binding if you're feeling particularly crafty.  But that may make it more difficult to pull the binding and recycle.
