---
title: Blind Patches
description: What if open-source contributors could submit patches anonymously and choose to claim credit later?
layout: post
tags:
- Open Source
- Collaboration
- Privacy
---

Imagine a kind of [GitHub pull request][pull requests] that worked as follows:

1. An author generates a private key and signs a Git branch containing their proposals.

2. That Git branch is added to the project repository without attribution. That is to say, new commits on the branch are anonymous, but each new commit on the branch is signed.

3. Collaborators discuss the branch, add their own commits as necessary, and eventually merge a branch containing the anonymously proposed commits.

4. The author later self-identifies by signing a statement with their private key.

Git permits arbitrary, user-defined values for commits, including author name and e-mail. It also permits "signed tags", or annotations to commits that contain signatures to plain text that includes the commit hash. Those facilities can be used to add a commit without author-identifying metadata. Subsequent attribution could be implemented in GitHub, or otherwise in whatever overlay atop Git provides persistent identity independent of information in commits. It could happen in Git's command-line interface, as well.

The upshot is that worthy authors who submit good patches could claim the reputation benefits of contribution without subjecting their proposal to biases that might attach to their person. Would-be contributors who for whatever reason couldn't be seen contributing to the project---due to politics at their current job or other reasons---could also contribute, and plan to claim later if possible.

On the other hand, maintainers could not use reputation as a proxy for pull request quality. If a reputable author submitted work anonymously, collaborators might spend time needlessly reviewing a solid proposal in all its detail. But select groups of contributors, like the maintainers, could create a common private key and sign twice: once personally, and once as a member of the group. Reviewers could verify that the author of the proposal is a member of the group, but not which member.

The effects of this approach on licensing and provenance in open-source projects requires additional thought. Authors could sign a licensing statement in addition to the commits they propose, but showing that one has possession of some copyrightable work and willingness to license it is not the same as proving that the work is original or showing credibly that the author is in a position to license it. It is far more useful to notice that an author works at a certain company, and checking that company against a list of contributors that have already signed contribution agreements.

This contribution model has special potential in legal projects, since lawyers face potential liability if a passerby uses legal resources, like forms, and later sues for bad advice. Attorneys are also subject to advertising regulations that apply when lawyer speech concerns their qualifications and availability for employment. The current solution is lame disclaimers in everything from form books to blog posts and social media comments. But no reasonable person could believe an anonymous contributor (who may or may not be a lawyer) is their attorney or otherwise accountable to them for valid legal advice. An attorney that wished to prove to a specific client that they contributed to a notable open project could still user their private key to show they authored certain commits to specific clients. Even if a foolish would-be client believed they knew the source of an unfortunate contribution, they'd have to sue and compel disclosure of the private key via discovery. Without additional facts, a plaintiff who needs private information from a lawyer to prove they were engaged has a very thin case for malpractice.

Meanwhile, a safe way to contribute useful legal documents and refinements could greatly increase the public availability of quality legal materials, as well as collaboration within the profession.

[pull requests]: https://help.github.com/articles/using-pull-requests/
