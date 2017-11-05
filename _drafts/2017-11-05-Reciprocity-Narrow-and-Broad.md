---
title: Reciprocity, Narrow and Broad
description:
layout: post
tags:
- Open Source
- Sustainability
- Licensing
---

When indie open source software maintainers reach out about the imbalances wearing them down, they often bring a notion of _reciprocity_ to the conversation.  This makes perfect sense.  If the general problem with independent open source today is that it's too much give, and too little get, then the general solution is requiring others to give back.  Redress the imbalance between contributors and users by requiring more from users.

How do we make that general solution specific and usable?  What should indie open source devs require from users, and how?

## Narrow

Historically, open source software communities, and open source licensing, implemented one specific kind of reciprocity: copyleft.  At a high level, copyleft means requiring users of open source software who customize or build on that software to share their work, at least some of the time.  Sharing work under a copyleft license means giving users access to source code, including your new source code, and licensing it under similar copyleft terms.

Activists wrote the early copyleft licenses to protect software freedoms: to run, study, change, share, and share changes to software.  They disliked not just how intellectual property law denied them freedom to work with the source code they had, but also how confidentiality and trade secrecy kept them from getting source code in the first place.  So part of what copyleft licenses do is give broad permission, under intellectual property laws, to work with source code.  But the convenience and simplicity of permission to do pretty much everything is peeled back a bit, and somewhat complicated, by requirements to make source code available to others when you exercise that permission.  A copyleft license tries to ensure that if you get source code and permission, you never give anyone else just source code, or just permission.

Example: Denise publishes software under GPL version 3.0.  PatchCo takes Denise's software, and improves it.  When PatchCo makes its improved version available to a customer, Carl, PatchCo triggers the GPL's copyleft requirement.  PatchCo has to give Carl source code and a license under the terms of the GPL.  If they don't, Denise can sue PatchCo for copyright infringement, since their permission for the software is only good if they meet the copyleft requirements.

This kind of copyleft situation can end up benefiting the original developer.  But copyleft licenses like the GPLs were written to protect user freedoms, not ensure contribution back to developers from their user communities.  Since Carl has source code to PatchCo's improvement, and a GPL license for it, Carl can send the source to Denise, and Denise can incorporate it into her own version.  But nothing in the GPL requires Carl to send code to anyone.

## Broad
