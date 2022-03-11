---
title: Getting the Most Out of General-Purpose Digital Filing Systems
description: maximum leverage from Dropbox, Google Drive, Box, and others
tags:
- Computing
- Legal Technology
---

Ever more programmers are developing "legal technology".  Many of their offerings address very specific use cases, like litigation case management.  But based on my experience, I suspect most of those same programmers prefer mass-market, general-purpose software for their own organizational needs.  Even though their needs are very "technical".  Because they know the tricks to getting _leverage_ on complex organizational problems with simple computer tools.

Let's take a look at file hosting services in particular.

## Date-First File Naming

Most digital filing systems allow sorting lists of files by name, creation or modification date, and file type.  File types are fixed.  The computer sets (and resets) creation dates and modification dates.  But the remaining aspect, file names, remains entirely within our manual control.  Anticipating how the computer will sort by file name, we can use a naming convention to turn "sort by name" into "sort by date".

The date format for this is [international standard ISO-8601](https://en.wikipedia.org/wiki/ISO-8601), and specifically this version of it: `YYYY-MM-DD`.  For example, `2022-03-11` for March 11, 2022.  Note that the year comes first, and that month and day numbers are _always_ two digits.  For the months January through September and days 1 through 9, add a `0` at the front.  Nerds call this "zero padding".

When the computer sorts by name, it will compare each file's name character by character.  If we're consistent naming our files, the ISO format ensures that the computer will sort first by year, then by month, then by day.  Zero padding ensures correct sorting of single- and double-digit months and days.

## Tagging

Most digital filing systems let you search your files.  Some have search systems that look into the contents of files.  Others simply search the names of files.  Again: we control our files' names.

It's often possible to find files we need just by searching names or words likely to be in the file names we use day to day.  But words and names can appear in multiple contexts.  It's often useful to use file names to explicitly "tag" files in ways that we can search and find rigorously.

Common conventions include adding tags to file names in brackets or parentheses.  For example, we might name a file `2022-04-11 Business Tax Receipt [tax] [federal].pdf`.  We can then search for `[tax]` (or `"[tax]"`) to find just files to which we specifically added that tag.  We can likely also sort our search results by file name, to see them listed chronologically.

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
      - `{date} {Document}.pdf`, e.g. `2022-03-11 Engagement Letter.pdf`
      - `Bills`
        - `{date} {number}.pdf`
    - `Projects`
      - `{name or counterparty}`, e.g. `SomeCo`
        - `{year}-{month} {project or agreement}`, e.g. `2021-11 Master Services Agreement`
          - `{date} {turn description}`, e.g. `2021-12-01 SomeCo Turn`
            - e.g. `MSA.docx`, `Track Changes Redline with Comments.docx`
    - `Forms`
      - `{name}`
        - `{version}`
          - e.g. `MSA 1.0.0.docx`
