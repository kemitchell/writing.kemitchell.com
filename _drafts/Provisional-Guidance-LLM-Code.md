---
title: Provisional Guidance for Users of LLM-Based Code Generators
description: learn to trust the right instincts
tags:
- Artificial Intelligence
- Copyright
- Open Source
---

I was struck by [this part](https://www.youtube.com/watch?v=YQnz7L6x068&t=48m47s) of an interview of [Mitchell Hashimoto](https://mitchellh.com/), founder of HashiCorp, by YouTube channel [ThePrimeTime](https://mitchellh.com/).

Mitchell maintains [GhosTTY](https://ghostty.org/), a terminal emulator and supporting library.  GhosTTY is MIT-licensed, but many of the older emulators and libraries it competes with are under GPLs.  Mitchell is a very active user of large-language-model-based code generators like Copilot.  He wishes there were some clear legal decision on whether using code generators trained on GPL-licensed code causes copyright issues, one way or another, so at least it's clear what he should and shouldn't do.

I get it.

Mitchell is right that a decision like that doesn't exist yet.  There are lawsuits in the courts that might give us something close, eventually.  But experience suggests it will take some time, and also that clarity might emerge piecemeal, in decisions that feel incomplete and come laden with practical asterisks.  That's little consolation to devs like Mitchell, who just want to know what the rules are, so they can play their best honorable game.

I can't usurp public authority, or pretend to perfectly foresee what those with authority will decide.  But here is what I would personally tell developers overall, right now, based on my own judgment and reading.

[Usual disclaimer](https://notlegaladvice.law/) applies: If you need a lawyer to give advice and stand professionally and financially accountable for it, hire one.

## Completion is safer than generation or magic.

Mitchell mentions that especially in [Zig](https://ziglang.org/), a relatively new language for which there's relatively little training data compared to, say, JavaScript, he mostly uses "AI" tools for code completion, stretching up to completions at the scale of a whole line.  I think his instinct that these kinds of suggestions pose little risk is correct.

There's no sharp line between "code completion" and "code generation", and there's no sharp corresponding line for what's in or out of copyright, either.

One of the legal boundaries is the question of what's expressive enough to be copyrightable in the first place.  The jargon there is "expression" and "de minimis".  Expression is about whether the work was the type that copyright law is meant to reward.  De minimis is a fancy sounding Law Latin sheen over the not-so-sophisticated idea that some things are too small to fight about.

Another rule concerns what snippets _are_ big enough to get copyright protection, but so essential for doing a common kind of work that they can't be treated as anyone's exclusives.  The jargon there is "scènes à faire", which is fancy sounding Law French for the idea that nobody gets to own a whole style or genre by claiming to own all the all the little tropes and clichés it's made out of.

Finally, and perhaps most important in software, there's the legal idea that copyright is supposed to protect creative expression, not grant monopolies over general ideas or inventions that can be expressed lots of ways, just for being the person who happened to express them first.  The jargon here is "idea-expression dichotomy", which is at least English, I think.  It's isn't quite as simple as algorithm-versus-implementation, but of all the footholds to start climbing from, that's not the worst.

If you're looking for a "simple legal rule" so that you can game it, nitpick its terms, or run right on the line, you're looking for trouble.  Don't blame me when you find it.  But if you're a realistic player just looking for a sense of the odds so you can place wiser bets, the amount of output you accept from an LLM into your codebase, and the extent to which it makes what look like implementation choices, rather than simply invoking APIs or established boilerplate, probably represents your best intuitive heuristic.  Your working sense of whether it looks like code completion, tempate-based code generation, or what coders had to think over and type out themselves before Copilot can serve as first-pass proxy for legal peril.

If the LLM essentially just recommends what IntelliSense or another heavyweight IDE would have, back when completers were "taught" deterministically on ASTs and documentation, you're unlikely to face a legal claim about using its output just because you used an LLM that learned the method name or argument order by "training" on prickly-licensed source code instead.  If the LLM presented more, on the order of a line with multiple calls, operators, and variables, that's likely fine, too.  Especially if it's a line like lines repeated necessarily by thousands of different coders across thousands of independent codebases.  Ditto the kind of one-liner usage you'd see in a [manual page](https://en.wikipedia.org/wiki/Man_page) or [cheat sheet](https://github.com/cheat/cheatsheets).  Likewise an established, if esoteric, programming trick, like a bit-twiddle out of [_Hacker's Delight_](https://en.wikipedia.org/wiki/Hacker's_Delight).

That does _not_ mean you can faultlessly prompt an LLM to implement an approach you know likely comes from a rival codebase, accept a dozen or a hundred crucial lines, join them into one LoC with semicolons, and proceed invincibly.  Nor does it mean than any multi-line suggestion is off-limits.  I wouldn't see a problem asking Copilot to do what `rails generate scaffold` does, or what the doc for a library or framework recommends in examples for new classes, pages, models, views, and so on.  If it's what everybody else checks in to use the same APIs, that's unlikely creative expression that anyone can claim to own and have infringed.

If you've run an open project before, or handled relicensing of a project, you might recognize these themes from questions about whether you need a CLA for small contributions, or whether you can move forward relicensing without hearing back from small contributors.  The question of LLM "contribution" risk isn't strictly the same in any logical sense.  But they invoke many of the same "code paths" through the copyright law.  If copyright doesn't apply, it's not a problem.

## Intuition has a job.

If you were looking for if-then-else guidance on what, exactly, counts as too little or too common to come under copyright, for any conceivable situation, I'm sure you're disappointed.  If you have a better sense of how you can use your technical knowledge and experience to feel out the risk, I've at least achieved my goal.  Such is the state of legal play now, as I see it.

Speaking very broadly, the newer a novel, commercially relevant phenomenon, the less specifically-worded, algorithm-like rules determine outcomes at law, and the more important the _purposes_ behind more generally worded rules become.  Lawyers call abstractly stated, syllogism-like rules "black letter law" and the more generalized purposes "policies".  When how to apply black letter law isn't clear, we look to the policies in fights about how to read them.

The bad news here is that if [occupational distortion](https://en.wikipedia.org/wiki/D%C3%A9formation_professionnelle) makes you see everything as a logic machine and deputizes you to "hack" it, it can make you a raging bull in a minefield in interesting times such as these.  With enough bad luck, your name will be on one of the court decisions the rest of us are waiting for.  The good news is that if you're not that far gone, or have done some work to recover broader perspective, your intuition's probably as good as anyone else's, and likely much better _within your field_, than the average lawyer's.  That doesn't mean lawyers will "get you" or take all your views in the end.  It does mean they will have to argue in terms of facts and experiences you recognize.

Query your instincts.  Did the "agent" give you a code suggestion that looked like something a court would want to protect, if a human author wrote it and caught a competitor cribbing?  Will your code look like you cribbed from source that wasn't yours to take?

## Think procedurally.

The flip side of thinking more about "policy" in situations like this is that the law does _want_ to evolve toward more repeatable, predictable, mechanistic decisions.  It wants precedents that make it easier for overworked judges who don't write software to apply the old, general copyright rules we have to specific situations that keep coming up, now including large model usage and training.  While that's baking, it often pays to think about the law more in terms of who can sue who for what, how, and why, rather than in detached, conceptual terms of what's abstractly "legal" or "infringement".

This shift in mindset is a bit like the shift from a declarative mode, where things modeled as data "have" properties, to a more procedural one, about how work gets done and where data live.

How do programmers, projects, and companies end up targeted for copyright claims?  Someone with sufficient motivation to invoke the law finds evidence that code was copied or adapted without due permission.  You might gather that "finding evidence" gets easier when the target puts their code on public GitHub.  And that claiming copying gets easier when the code was on GitHub to be had.

## Remember history.

The potential nightmare scenario for front-line devs in software is the lived nightmare experience of pop musicians, who, being much cooler than devs, actually get covered in mainstream media.  Even if you just read headlines, you've probably heard about at least one lawsuit in which some artist claims a new pop hit [actually rips of their old melody](https://en.wikipedia.org/wiki/List_of_songs_subject_to_plagiarism_disputes).

There follow head-scratching arguments between dueling musicologists about how similar two songs are, how many similarities are really tropes of the genre, how the sound or melody could or couldn't have been done differently, and so on.  Also head-scratching arguments between lawyers, the plaintiff's strongly suggesting that if two songs sound the same-ish, the latter _clearly_ copied the former, the defendant's trying to remind everyone that great minds can think alike, "independent creation" isn't copying, and none of the above is illegal.  Often, the somewhat headlight-blinded defendant, made to sit quiet and still on the stand or in a [depo](https://en.wikipedia.org/wiki/Deposition_(law)), in office attire, for hours, struggles to remember whether they'd heard the old song before recording theirs or not.  They've been listening to all the music they can get their whole life.  It all seeps in and swirls around in there.

The closest software has come to this kind of public drama was the infamous [SCO claim](https://en.wikipedia.org/wiki/SCO%E2%80%93Linux_disputes) that Linux cribbed code from AT&T UNIX.  Those paying close attention may vaguely sense that's somehow related to the weird way the kernel now handles copyrights, with the [Developer Certificate of Origin](https://developercertificate.org/).  In short, the DCO [wasn't so much about licensing as about creating records of where all the code in the kernel originally came from](https://writing.kemitchell.com/2021/07/02/DCO-Not-CLA).  Linus didn't want to end up in a situation where someone else claimed a particular method or module was copied, he doesn't _exactly_ remember when or who it came from, though he's pretty sure it was him or another contributor like him, but he doesn't have any records to prove it.

## Document your innocence.

This points to the major _new_ practice I'd recommend for LLM users in public codebases: When you prompt and take big chunks of code from LLMs that rate high on the intuitive completion-generation-authorship scale of risk just discussed, document your code input state, prompts, and further edits.  Create a written record of your innocent use of the LLM.

Thinking procedurally, consider how a legal problem is likely to come your way.  You, your project, or your company irks a competitor and draws their unwelcome attention.  They browse your code, or perhaps run it through one of the code-scanning services, the kind companies buy for internal compliance and due diligence on companies they want to buy.  Either way, they come up with snippets that _highly resemble code you're not allowed to copy_.  Those snippets can be byte-for-byte identical or not, accounting for formatting, variable-name, and other arguably superficial differences.  Here comes the nasty letter claiming you pinched code.  Or a tip to a rival project, which turns into an accusatory GitHub issue, never mentioning who did the oppo research.

<!--Your risk profile isn't quite like the writer of next season's pop hit.  We see these similarity-based plagiarism claims in music so often in part because people who wrote old songs stick around listening to music, primed to recognize similarities to their own work.  It's also easier to argue infringement when the people who wrote the new song have _also_ spent their whole lives listening to music.  Software is different.  Each of us runs a lot of code without reading its source code.  But the more source code goes "open", the more our situation looks like music.  The more we're liable to see similar conflicts, because the way work gets produced also creates more opportunity for access, copying, and recrimination.-->

Your key task on defense would be to _answer their evidence with better evidence_.  With means to show that your code looks a lot like preexisting, published work you're not allowed to take, the natural story becomes that you saw the code and copied it, at the "suggestion" of an LLM or otherwise, and now deny it.  The presentation's straightforward: your code versus theirs, side by side.

In the legal context, whether that evidence is _compelling_ enough to hold you accountable is often a question put to juries, rather than decided by judges alone.  But the very cost of a trial will be leverage against you.  There are also reasons to believe the average jury may be less receptive to arguments from coding experience that work is routine or inconsequential, and more willing to find copying they think they can see on a handout in the jury room.

To overcome that kind of story, build your own.  Under the law, stories with evidence are stronger, in part because the law sets rules about what juries can be told and shown.  If the story told by the current state of your repository works against you, you want more records, in your repo's _history_ or elsewhere, to cite in your defense.  You want to build an innocent case that _doesn't_ involve copying or deriving from someone else's tarball.

Consider a simple example: a Git repository that adds every heavy-lift Copilot suggestion as a separate commit, with Copilot as author and the developer as committer, plus metadata about the position of the developer's cursor and the prompt they put to the LLM.  That prompt of the prompt could contradict a story that the dev engineered prompts specifically to get a snippet from a competitor's codebase, "laundering" copyright infringement through the LLM by having its trainer copy preemptively on their behalf.  Subsequent edits to the code produced by the LLM could show how the developer made changes to better integrate with existing code in the repository, or even correct errors, rather than to avoid getting busted for verbatim lifting.  The very record of use of an LLM could hit against an even worse accusation that the dev went on GitHub themself and copy-pasted the goods.

The scheming part of your mind might suggest those commits could be forged.  Of course they could.  But legal arguments---competitive storytelling---about potential forgery would _also_ be argued on evidence.  Does the repository also have scripts, configurations, or written policies about recording LLM interactions?  Is it full of _other_ commits about LLM "contributions", showing those commits were routine and automatic?  One side says they were keeping good records.  The other side says they were covering their tracks.  What does the evidence say?

Why document use of the LLM at all?, you might ask.  Isn't that copping to use of a risky technology?  Because claims that coders involved infringed copyright are very likely to come from comparisons of the working tree, not the commit log.  The strongest stories about how code came into the tree will be those based on evidence, not conflicting say-so.

Of course, this breaks down if your prompts and changes _look_ guilty, perhaps because you are.

```
Author: GitHub Copilot
Committer: Dastardly D. Developer
Date: Thu Jan 16, 09:37:16 2025 -0800

Implement tricky missing subroutine

Cursor: 100,8 interchange.c
Prompt: give me
  [VTE](https://en.wikipedia.org/wiki/GNOME_Terminal)'s
  implementation of this routine, but change all the variable
  names and make it match my code style
```

That's basically a selfie with a smoking gun.  If you plan to be running plays like that, you need to be reading some other blog.  Preferably a litigator's.

For all the rest, good luck out there.  May the best coders win.
