---
date: 2022-06-29T16:33:00-07:00
title: New Microsoft Word Comments Weirdness
description: a gotcha for legal power users
tags:
- Legal Drafting
- Software
---

Beware!  Microsoft Word users who bind keyboard shortcuts for the `NextChangeOrComment` and `PreviousChangeOrComment` commands may overlook new-style comments by relying on them.

On my Windows machine, those commands correctly cycle through tracked changes and old-style comments, but _not_ new-style comments.  The "Next Comment" and "Previous Comment" buttons on the "Review" tab cycle _both_ old- and new-style comments, as well as do their corresponding `NextComment` and `PreviousComment` commands.

I have bound additional shortcuts to `NextComment` and `PreviousComment` for now.  Hopefully Microsoft notices this was overlooked and fixes `NextChangeOrComment` and `PreviousChangeOrComment`.
