---
title: NVIDIA Prismer License
description: another noncommercial model license, kind of
series: First Reads
tags:
- Artificial Intelligence
- Licenses
---

[NVIDIA's license for its new Prismer model](https://github.com/NVlabs/prismer/blob/main/LICENSE) is a "noncommercial" software license.  The key term is in 3.3:

> The Work and any derivative works thereof only may be used or intended for use non-commercially.

The phrase "or intended for use" is interesting here.  I don't think I've seen that turn of phrase in a restriction.  But it's similar to what we did with "purpose" in [PolyForm Noncommercial](https://polyformproject.org/licenses/noncommercial/1.0.0/).

> As used herein, "non-commercially" means for research or evaluation purposes only.

Many noncommercial licenses don't define "noncommercial",  [falling back on common usage](https://writing.kemitchell.com/2023/01/30/Law-Does-Not-Require-Legalese#plain-meaning).  From those that do, this might be the shortest definition I've seen.

I like short, but not here.  This license defines "non-commercially" in a surprisingly narrow way.  There are uses I would call "noncommercial" that wouldn't count here.  Education.  Private entertainment.  Charity.  That's potentially misleading.  This is really a "research and eval license".

Again, compare [PolyForm Noncommercial](https://polyformproject.org/licenses/noncommercial/1.0.0/).  There's a potentially surprising _inclusion_ of work by noncommercial orgs regardless of funding obligations.  But it also intentionally uses "noncommercial" without definition as a base, to avoid excluding intuitive use cases.

There's yet another interesting wrinkle:

> Notwithstanding the foregoing, NVIDIA and its affiliates may use the Work and any derivative works commercially.

Clearly NVIDIA can use its own model as it pleases.  It's not going to sue itself for breaking its own rules.  So why is this sentence here?  I could read "derivative works" to reach derivative works _by others_.

"Work" is restricted to Software and derivatives "made available under this License".  But "derivative works" gets defined generally, to track the Copyright Act, minus an [Apache 2.0-style exclusion](https://apache.org/licenses/LICENSE-2.0) of "works that remain separable from, or merely link (or bind by name) to the interfaces of," the work being licensed or its derivatives.  I don't see language limiting "derivative works" to derivative works from NVIDIA.

I could put this all together to say:

- As under the RAILs, follow-on devs can choose whatever terms for their follow-on work, so long as those terms keep the noncommercial use limitation.  See 3.2(a).

- _But NVIDIA can ignore that limitation_, because the license says it can.  See quote above.

That would be a pretty big take!

Or was the intent here just to have NVIDIA waive the use limitation for its own code for its own affiliates, so they get a permissive license where everyone else gets noncommercial, under the same terms?  That would make sense.  But I'm not sure that's what the license says.

A couple loose thoughts to close:

- This is very clearly _just_ a copyright license.  There's no patent permission.  But there is a patent-termination clause, in 3.5.

- There's no process for fixing violations and keeping your license, what lawyers call a "cure provision".  If you break the rules, your license goes poof.  No more model for you.  See 3.6.
