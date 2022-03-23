---
date: 2022-03-14T10:59:05-07:00
title: Getting the Most From Common Computer Filing Systems
description: fundamental techniques for Dropbox, Google Drive, Box, and others
tags:
- Computing
- Legal Technology
---

Ever more programmers are developing "legal technology".  Many of their offerings address very specific use cases, like litigation case management.  But based on my experience, I suspect most of those same programmers prefer mass-market, general-purpose software and services for their own organizational needs.  Even though their needs are very "technical".  Because they know the tricks for using relatively simple, general purpose features to build more complex organizational systems.

Let's take a look the most common tricks for file hosting services in particular.  Many of these ideas will be familiar to non-techie users, as well.  But they're worth getting down.

## Date-First File Naming

Most digital filing systems allow sorting lists of files by name, creation date, modification date, and file type.  File types are fixed.  The computer sets and resets creation and modification dates.  But the remaining aspect, file names, remains entirely within our manual control.  Anticipating how the computer will sort by file name, we can use a file naming convention to make "sort by name" work as "sort by date".  The date can be whichever relevant date we choose.  We don't have to worry about the computer "updating" it on us.

The format to learn and use is [international standard ISO-8601](https://en.wikipedia.org/wiki/ISO-8601), and specifically this pattern: `YYYY-MM-DD`.  For example, `2022-03-14` for March 14, 2022.

Note that the year comes first and that month and day numbers are _always_ two digits.  For January through September and days 1 through 9, add a `0` at the start.  For example, type `01` for January and `09` for the ninth.  Nerds call this "zero padding".

When the computer sorts by name, it will compare each file's name character by character, from beginning to end.  If we're consistent naming our files, the ISO format ensures that the computer will sort first by year, then by month, then by day, all in order.

Zero padding ensures correct sorting of single- and double-digit months and days, so that `02` (February) comes before `11` (November).  Without zero padding the `2` for February would be sorted _after_ the `11` for November, since `1` comes before `2`.

Of course, we can also use zero padding without dates.  Say we scan the pages of a book with more than 100 pages, one image file per page.  To ensure we can always sort the pages in order, we pad the page numbers with two zeroes: `Page 001.jpg`, `Page 002.jpg`, and so on.

## Tagging

Most digital filing systems let you search your files.  Some have search systems that look into the contents of files.  Others simply search the names of files.  In many cases, searching just file names can actually be more useful.  Again: we control our files' names.

It's often possible to find files we need just by searching names or words likely to be in the file names we use day to day.  But words and names can appear in multiple contexts.  It's often useful to use file names to explicitly "tag" files in ways that we can search and find rigorously.

Common conventions include adding tags to file names in brackets or parentheses.  For example, we might name a file `2022-04-11 Business Tax Receipt [tax] [federal].pdf`.  We can then search for `[tax]`---or `"[tax]"` in quotes, to make sure the search system doesn't ignore the brackets---to find just files to which we specifically added that tag.  We can likely also sort our search results by file name, to see them listed chronologically.

## Folders

Nearly all digital filing systems allow us to create "folders", and to put files and other folders in those folders.  Using folders in folders, we can create hierarchical organizations of files, for example:

- Personnel
  - Executives
  - Employees
  - Contractors
- Vendors
  - Professional Services
  - Products
  - Technology

We can also sort and search folders.  Which means date-first and tagging conventions also apply to folder names.

Here's the most common convention I use for organizing client files:

- `Clients`
  - `{Client Name}`
    - `Attorney-Client Relationship`
      - `{date} {Document}.pdf`<br>e.g. `2022-03-11 Engagement Letter.pdf`
      - `Bills`
        - `{date} {number}.pdf`
    - `Projects`
      - `{name or counterparty}`<br>e.g. `SomeCo`
        - `{year}-{month} {project or agreement}`<br>e.g. `2021-11 Master Services Agreement`
          - `{date} {turn description}`<br>e.g. `2021-12-01 SomeCo Turn`
            - e.g. `MSA.docx`, `Track Changes Redline with Comments.docx`
    - `Forms`
      - `{name}`
        - `{version}`
          - e.g. `MSA 1.0.0.docx`

So the most recent [redline](https://client.kemitchell.com/lingo#redline) of a vendor contract I'm negotiating might get filed as:

- `Clients`
  - `SomeClient`
    - `Projects`
      - `SomeVendor`
        - `2022-02 MSA`
          - `2022-03-01 SomeVendor Turn`
            - `MSA.docx`

Note that these conventions enable sorting clients by name, projects by rough start date, and negotiation turns by specific date.
