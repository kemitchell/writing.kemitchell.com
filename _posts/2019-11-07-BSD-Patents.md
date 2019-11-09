---
title: '"BSD with PATENTS" and "BSD-2-Clause Plus Patent" are Not the Same'
description: similar licenses, very different receptions
tags:
- Open Source
- Licenses
brief: The BSD-2-Clause Plus Patent License is not the license Facebook used for React.
---

Open software people say "BSD plus patents" to mean either of two different sets of software license terms:

1.  the [standard three-clause BSD license](https://github.com/facebook/react/blob/b8ba8c83f318b84e42933f6928f231dc0918f864/LICENSE) that Facebook used in combination with a [separate `PATENTS` file patent license](https://github.com/facebook/react/blob/b8ba8c83f318b84e42933f6928f231dc0918f864/PATENTS) until [relicensing onto MIT terms in September of 2017](https://github.com/facebook/react/commit/b765fb25ebc6e53bb8de2496d2828d9d01c2774b)

2.  [a variant of the two-clause BSD license with additional, explicit patent language](https://spdx.org/licenses/BSD-2-Clause-Patent.html) that McCoy Smith wrote to create a GPLv2-compatible permissive license that clearly covers patents

Some considered the former problematic.  Nearly any software user should welcome the latter.

Facebook's BSD-`PATENTS` combination led to a backlash.  The concerns that actually made sense focused on Facebook's "defensive termination" rule, a license mechanism that says, generally, "If you sue me with your patents, I'm taking my patent license back, so I can sue you with mine."  Facebook's rule [wasn't new in open-source licensing](https://heathermeeker.com/2017/08/19/open-source-community-over-reacts-to-x-rated-code/), but created a shouty panic on social media.  Facebook ended up relicensing onto MIT terms to stop the FUD, reverting to a license without _any_ clear patent permission at all in the process.

McCoy's BSD-2-Clause Plus Patent license has gone largely unnoticed by developers.  However, on the institutional front, it has been [identified by SPDX as `BSD-2-Clause-Patent`](https://spdx.org/licenses/BSD-2-Clause-Patent.html), [approved by the Free Software Foundation as "GPLv2-compatible"](https://lists.opensource.org/pipermail/license-review_lists.opensource.org/2017-March/002989.html), and [approved by the Open Source Initiative as "open source"](https://opensource.org/licenses/BSDplusPatent).  As of this writing, Blue Oak Council [lists `BSD-2-Clause-Patent` as its sole gold-rated license](https://blueoakcouncil.org/list#gold), surpassed only by the council's own [model permissive license](https://blueoakcouncil.org/license/1.0.0), which gives even broader patent assurance.

Both attempts to graft a clear patent license onto BSD terms responded to the [lack of clear patent coverage in that license](https://writing.kemitchell.com/2019/03/09/Deprecation-Notice.html#mit-and-bsd-dont-handle-patents).  Developers trying to address that problem before largely chose [the Apache License Version 2.0](https://www.apache.org/licenses/LICENSE-2.0), but [the Free Software Foundation says Apache 2.0 isn't "compatible" with GPLv2](https://www.gnu.org/licenses/license-list.html#apache2), only GPLv3.  That has caused all manner of licensing issues for a set of terms, Apache 2.0, that aimed to be very permissive and play well with others.  McCoy's BSD-2-Clause Plus Patent License fixes the patent problem while avoiding the GPLv2 issue.

Alas, these different sets of terms enjoyed flashes of limelight very near in time, and ended up going by confusingly similar names in day-to-day conversation.  So at least for now, when you hear "BSD plus patents", you need to ask for clarification or dig deeper.

More generally, we license people really need to stop "patching" the poor old BSD license.  It's a thirty-plus-year-old form, and we ought to put it out to pasture in peace, not keep digging it up and installing new wetware, Frankenstein's monster-style.  I am also guilty here: patching BSD is exactly how I started drafting the first versions of the license for License Zero, which later became [Parity](https://paritylicense.com) and [Prosperity](https://prosperitylicense.com).  BSD retains good street cred, and is built around a list of numbered conditions that seem easy enough to tack onto or pare down.  It's mighty tempting.  But the best possible result is a dated license, likely with a confusing name.

---

Added November 8, 2019:

I recalled after publishing this post that another well known project, the Go programming language, also uses a [BSD-style license](https://golang.org/LICENSE) plus [a separate `PATENTS` grant](https://golang.org/PATENTS).  The defensive-termination rule of Google's `PATENTS` grant for Golang hews close to Apache 2.0's approach, terminating rights only for patent claims against Google's official implementation of Go.  `BSD-2-Clause-Patent` eschews any defensive termination provision at all.
