---
title: Prone Blogging Setup
description: how to type when the pain puts you on your back
layout: post
tags:
- Computing
---

Throughout 2018 and 2019 so far, I've suffered repeated bouts of crippling back pain.  In the worst of times, I've been bedridden for days on end, stuck lying in specific positions to escape sciatic torment.  Since I couldn't sit and type at a desk, and I couldn't turn from side to side to read books, I ended up spending a lot of time on an iPad.  Here's the setup I landed on for blogging, after much wincing experiment:

- Sixth Generation iPad
- Working Copy for Git
- iA Writer for editing Markdown
- Jekyll for generating blogs from Markdown
- GitHub for tracking changes and deploying to GitHub pages
- Termius for deploying to other hosting
- Vortexgear Tab60

Working Copy provides Git support on iOS.  I'm particularly fond of the ability to enable empty commit messages, since I rarely write them for small changes to Git repos that I only work on myself.

The empty-commit-message setting is a little tough to find.  It's configured per repository.  Click the repository name, then "Repository", then "Configuration".  You'll see an iOS style toggle switch for it.

iA Writer is a simple, good-looking Markdown editor.  I actually prefer its modal approach to writing and rendering to Typora's, which I use on my Linux laptop.

Termius supports MOSH, which I prefer for connecting to a remote development machine that I have long had on Linode.  For writing.kemitchell.com, which I host on a DigitalOcean server, rather than on GitHub pages, Termius lets me shell into my dev machine and run the deploy script that publishes the Jekyll site to the web server.

The sixth generation iPad has fairly decent dictation support, though the experience is always a little frustrating.  I find myself dictating basically without reading, and then proofing in a separate pass.

When I'm able to find a comfortable position with hands forward, the Bluetooth mechanical keyboard is great.  I'm always a little frustrated by the limited support for keyboard control of the iPad, compared to my Linux systems.  But when it comes to churning out prose, it's much the same experience.

The manuals for Vortexgear boards are notoriously bad.  To pair the Tab60, press and hold `Pn` and the left `Alt` key until the board flashes.  Then press `Pn` and either `J`, `K`, `L`, or `;` to program one of four device slots.  To connect the board, turn it on and press `Pn` and the slot key you programmed.
