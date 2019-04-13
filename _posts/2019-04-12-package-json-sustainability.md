---
title: Calls to Sustainability Action via package.json
description: a new proposal, schema, and tools
layout: post
tags:
- Open Source
- Sustainability
---

Late yesterday, I [submitted a pull request](https://github.com/npm/cli/pull/187) to the npm package manager to add a new, official property to npm's `package.json` manifest files: `"sustainability"`.

The proposal instructs maintainers to set that property to the URI of a JSON resources that conforms to [a very simple schema](https://www.npmjs.com/package/sustainability-schema).  In a nutshell, the resource maps a project, by URI, to a list of objects about contributors to that project who need or want support.  Contributors can identify themselves by name and homepage, indicate whether they're a person, nonprofit, business, or government entity, and provide URIs for various ways to help, like donating, hiring, buying licenses, or buying services.

Since I've already written a number of tools that recurse `node_modules` and report metadata, I went ahead and wrote a CLI application, [`npm-sustainability`](https://www.npmjs.com/package/npm-sustainability) that fetches, collects, and reports sustainability data referenced from `package.json` files.  The tool is similar to others I've written, including for [License Zero](https://licensezero.com), in that it combines reading data from disk with loading latest data via the Internet to produce an up-to-date report.

For a very simple example of a sustainability record, see [the `sustainability.json` file in the `npm-sustainability` repo](https://github.com/kemitchell/npm-sustainability.js/blob/master/sustainability.json).  Note that `sustainability.json` is _not_ included in the npm package tarball.  Rather, the `"sustainability"` property in `package.json` points to the file as served via raw.githubusercontent.com.  As I update `sustainability.json` on `master`, the information available to `npm-sustainability` and other tools will update, even though `package.json` doesn't change.

Notice also that the `sustainability.json` file for the project includes a URI pointer to a data file about me personally, <https://kemitchell.com/sustainability.json>.  That single level of indirection allows individuals and organizations to drop pointers into the data files for projects they contribute to, and update their information without sending PRs to all those files.

Overall, this proposal fits neatly into the general category of creating new channels over which open software contributors can express their needs and wants to users.  [License Zero](https://licensezero.com) achieves the same effect primarily by tunneling through an existing channel: license terms.  Projects like [Open Collective](http://opencollective.com/) use service-specific `package.json` metadata to show messages on install, and to feed other tooling.  I'd like to see npm throw its weight behind an "official" channel for this vital kind of communication, while still embracing experiment, competition, and diversity of approaches.

Having new data about who needs what won't substitute for a innate drive to right what's wrong in the dynamics of open source, for users' as well as maintainers' sake.  But all that information will be mighty handy informing consciences already engaged with the problem.  In short, I believe we need a richer environment of communication to get beyond merely talking about how bad it all is for maintainers on the producer side, and how bewildering it all is for users, on the consumer side.

I'm looking forward to more thoughts and feedback on the ideas I've put forward here.  Not to thrash on technical details until the light of enthusiasm burns out, but to focus on what minimal, lightweight, actionable new approach we can try to get people communicating, despite the massive many-to-one disparity of software dependencies in the JavaScript era.
