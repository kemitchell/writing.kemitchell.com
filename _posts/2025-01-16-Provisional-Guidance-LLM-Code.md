---
date: 2025-01-16T11:38:14-08:00
title: Provisional Guidance for Users of LLM-Based Code Generators
description: available intuition for avoiding big risks
tags:
- Artificial Intelligence
- Copyright
- Open Source
---

I was struck by [this part](https://www.youtube.com/watch?v=YQnz7L6x068&t=48m47s) of an interview of [Mitchell Hashimoto](https://mitchellh.com/), founder of HashiCorp, by YouTube channel [ThePrimeTime](https://www.youtube.com/@ThePrimeTime).

Mitchell maintains [GhosTTY](https://ghostty.org/), a terminal emulator and supporting library.  GhosTTY is MIT-licensed, but many of the older emulators and libraries it competes with are under GPLs.  Mitchell is a very active user of large-language-model-based code generators like Copilot.  He wishes there were some clear legal decision on whether using code generators trained on GPL-licensed code causes copyright issues, one way or another, so at least it's clear what he should and shouldn't do.

I get it.

Mitchell is right that a comprehensive decision like that doesn't exist yet.  There are lawsuits in the courts that might give us something close, eventually.  But experience suggests it will take some time, and also that clarity will likely come piecemeal, in decisions that feel incomplete and come laden with practical asterisks.  That's little consolation to devs like Mitchell, who just want to know what the rules are, so they can play their best honorable game.

I can't usurp public authority, or pretend to perfectly foresee what those in robes will say.  But here is what I would personally tell developers overall, right now, based on my own judgment and reading.

## Completion is safer than generation or magic.

Mitchell mentions that especially in [Zig](https://ziglang.org/), a relatively new language for which there's relatively little training data compared to, say, JavaScript, he mostly uses "AI" tools for code completion, stretching up to completions at the scale of a whole line.  I think his instinct that these kinds of suggestions pose little risk is correct, because a lot of it doesn't qualify for copyright in the first place, and a lot of it's used in ways that don't count as infringement, either.

Alas, there's no sharp line between "code completion", "code generation", and "original work", and there's no sharp corresponding line for what's in or out of copyright or its relevant exceptions.  But it just so happens a lot of the relevant rules are very common-sensical.  Those realities can be rather more obscured and illuminated by our language.

One of the legal boundaries is the question of what's creative and substantial enough to be copyrightable in the first place.  The jargon there is "expression" and "de minimis".  "Expression" is about whether the work product was of the type copyright's meant to reward.  "De minimis" is a fancy sounding Law Latin disguise for the not-so-subtle idea that some things are too small to bother judges about.

Another rule concerns what snippets _are_ big enough to get copyright protection, but so essential for doing a common kind of work that they can't be treated as anybody's exclusives.  The jargon there is "scènes à faire", which is fancy sounding Law French for the idea that nobody gets to own a whole style or genre by claiming to own all the all the little tropes and clichés that make it recognizable.

Finally, and perhaps most important in software, there's the legal idea that copyright is supposed to protect creative expression, not award monopolies on general ideas or inventions just for being the first to express them one possible way.  The jargon here is "idea-expression distinction", which I'm pretty sure is English.  It's isn't quite as simple as algorithm-versus-implementation, which I suspect is also English, but of all the footholds to start climbing from, that's hardly the worst.

If you're looking for a "simple legal rule" so that you can game it, nitpick its terms, or run right up to its line, you're looking for trouble.  Don't blame me when you find it.  But if you're a realistic player just looking for a sense of odds so you can place wiser bets, the amount of output you accept from an LLM into your codebase at once, and the extent to which it makes what look like implementation choices, rather than simply invoking APIs or established boilerplate, probably represents your best intuitive heuristic.  Your working sense of whether it looks like code completion, tempate-based code generation, or what coders used to have to unavoidably think through and type for themselves, before Copilot and the like came around, can serve as first-pass proxy for legal peril.

If the LLM essentially just recommends what IntelliSense or another heavyweight IDE would have, back when completers were "taught" deterministically on ASTs and documentation, I think you're highly unlikely to face a legal claim about using it just because it came from LLM that learned the method name or argument order by "training" on prickly-licensed source code instead.  Note that this is different from the question of whether developers _of the models_ can run around the Web copying all the source they see into into training sets.  We're sticking to end use here.

If the LLM presented more, on the order of a line with multiple calls, operators, and variables, that's likely fine, too.  Especially if it's a line like lines repeated necessarily by thousands of different coders across thousands of independent codebases.  Ditto the kind of one-liner usage you'd see in a [manual page](https://en.wikipedia.org/wiki/Man_page) or [cheat sheet](https://github.com/cheat/cheatsheets), as well as terse, widespread, if perhaps esoteric programming tricks, like bit-twiddles out of [_Hacker's Delight_](https://en.wikipedia.org/wiki/Hacker's_Delight).

That does _not_ mean you can faultlessly prompt an LLM to implement an approach you know likely comes from a rival codebase, accept a dozen or a hundred crucial lines, join them into one LoC with semicolons or whitespace carnage, and proceed invincibly.  Nor does it mean than any multi-line suggestion is off-limits.  I wouldn't see a problem asking Copilot to do what `rails generate scaffold` does, or what the doc for a library or framework recommends in examples for new classes, pages, models, views, and so on.  If it's what everybody else checks in to use the same APIs, that's unlikely creative expression that anyone can claim to own and see infringed.  The more specific, creative routines that go _within_ that boilerplate?  Yes, potentially.  The rigging, patterns, and boilerplate everybody else is filling in, too?  Not so much.

If you've run an open project before, or handled relicensing of a project, you might recognize these themes from questions about whether you need a CLA for small contributions, or whether you can move forward relicensing without hearing back from small contributors.  The question of LLM "contribution" risk isn't strictly identical to those questions in any logical sense.  But these issues walk many of the same paths through copyright, namely the shorter routes toward its exits.  If copyright doesn't apply, it's not a problem.

## Judgment has its lane.

If you were looking for if-then-else guidance on what, exactly, counts as too little or too common to come under copyright, for any conceivable situation, I'm sure you're disappointed.  If you have a better sense of how you can use your technical knowledge and experience to feel out the risk, I've at least achieved my first goal.  Such is the state of legal play now, as I see it.

Speaking very broadly, the newer a novel, commercially relevant phenomenon, the less specifically-worded, algorithm-like rules determine outcomes at law, and the more important the _purposes_ behind more generally worded rules become.  Lawyers call abstractly stated, syllogism-like rules "black letter law" and the more generalized purposes "policies".  When how to apply black letter law isn't clear, we cite and fight about policies in arguing how to read in context.

The bad news here is that if [occupational distortion](https://en.wikipedia.org/wiki/D%C3%A9formation_professionnelle) makes you see everything as a logic machine, then calls you forth to "hack" it, you can end up raging bull in a minefield during times such as these.  With enough bad luck, your name could end up on one of the court decisions the rest of us are waiting to read.

The good news is that if you're not yet that far gone, or have done some work to recover broader perspective, your intuition's probably as good as anyone else's, and likely much better _within your field_ than the average lawyer's.  That doesn't mean lawyers will "get you" or take all your views in the end.  It does mean they will have to argue in terms of facts and experiences you recognize.

Query your instincts.  Did the "agent" give you a code suggestion that looked like something a court would want to protect, if a human author wrote it and caught a competitor cribbing?  Will your code look like you took from source that wasn't yours to take, even if you'd played honest, and purposefully never [peeked in that repo](https://en.wikipedia.org/wiki/Clean-room_design)?

## Think procedurally.

The flip side of thinking more about "policy" in situations like this is that people who do law _want_ to evolve toward more repeatable, predictable, mechanistic decisions that are clear enough to people that they stop clogging up the courts.  Overworked, often elderly judges who don't write software _want_ precedents that make it easy for them to apply the old, general copyright rules we have to specific situations that keep coming up, now including large model usage and training.

While all that's baking, it often pays to think about the law more in terms of who can sue who for what, how, and why, rather than in detached, conceptual terms of what's abstractly "legal" or "infringement".  This shift in mindset is a bit like the shift from a declarative mode, where things modeled as data "have" properties, to a more procedural one, about how work gets done and where information's encoded.

How do programmers, projects, and companies end up targeted for copyright claims?  Someone with sufficient motivation to invoke the law finds evidence that code was copied or adapted without due permission.  You might gather that "finding evidence" gets easier when your target puts their code on public GitHub for review.  And that claiming means and opportunity get easier when you put your own code on public GitHub for the taking.

## Remember history.

The potential nightmare scenario for front-line devs in software is the lived nightmare experience of pop musicians, who, being much cooler than devs, actually get covered in mainstream media.  Even if you just read headlines, you've probably heard about at least one suit by some artist you may not have heard of claiming a new pop hit [actually rips off their old melody](https://en.wikipedia.org/wiki/List_of_songs_subject_to_plagiarism_disputes).

There follow head-scratching arguments between dueling musicologists about how similar two songs are, how many similarities are really tropes of the genre, how the arrangement or melody could or couldn't have been otherwise, and so on.  Sound familiar?  Also follow head-scratching arguments between lawyers, the plaintiff's strongly suggesting that if two songs sound the same-ish, the latter _clearly_ copied the former, the defendant's trying to remind everyone that great minds can think alike, "independent creation" isn't copying, and neither is against the law.

Often, the somewhat headlight-blinded defendant, made to sit quiet and still on the stand or in a [depo](https://en.wikipedia.org/wiki/Deposition_(law)) for hours, struggles to remember whether they'd heard the old song before recording theirs or not.  They've been listening to all the music they could get ahold of their whole damn life.  It all seeps in and swirls around in there.  What do the contemporaneous studio notes of the perpetually stoned producer's assistant imply?  Do you remember if they played the whole record at that party?  Did somebody flip the disc?

The closest software has come to this kind of public drama was the infamous [SCO claim](https://en.wikipedia.org/wiki/SCO%E2%80%93Linux_disputes) that Linux cribbed code from AT&T UNIX.  Those paying close attention may vaguely sense that's somehow related to the weird way the kernel now handles copyrights, with the [Developer Certificate of Origin](https://developercertificate.org/).  In short, the DCO [wasn't so much about licensing as about creating records of where all the code in the kernel originally came from](https://writing.kemitchell.com/2021/07/02/DCO-Not-CLA).  Linus didn't want to end up in a situation where someone else claimed another particular function or module was copied, he doesn't _exactly_ remember when or who it came from, though he's pretty sure it was him or another contributor like him, but he doesn't have any records to prove it.  He was willing to pre-commit to a new administrative chore for decades in order to avoid another run-on slog fest like SCO.

## Document your propriety.

This points to the major _new_ practice I'd recommend for LLM users in public codebases: When you prompt and take big chunks of code from LLMs that rate high on the intuitive completion-generation-authorship scale, document your code input state, prompts, and further edits.  Create a written record of your innocent use of LLMs.

Thinking procedurally, consider how a legal problem is likely to come your way.  You, your project, or your company irks a competitor and draws their attention.  They browse your code, or perhaps run it through one of the code-scanning services, the kind companies buy for internal compliance and to make sure acquisition targets aren't actually pirate ships on the run.  Either way, they come up with snippets that _highly resemble code you're not allowed to copy_.  Those snippets can be byte-for-byte identical or not, accounting for formatting, variable-name, and other arguably superficial differences, even straightforward translations to different languages of similar paradigms.  So here comes the nasty letter claiming you pinched code.  Or the tip to a rival project, which turns into an accusatory GitHub issue, never mentioning who did the [oppo](https://en.wikipedia.org/wiki/Opposition_research).

Your key task on defense would be to _answer their evidence of guilt with better evidence of innocence_.  With means to show that your code looks a lot like preexisting, published work, the natural story becomes that you saw the code and copied it, at the "suggestion" of an LLM or otherwise, and just refuse to admit it.  The presentation's straightforward: your code versus theirs, side by side, formatted so the "diff" is minimal.

In the legal context, whether that evidence is _compelling_ enough to hold you accountable is often a question put to juries, rather than decided by judges.  What's worse, there are reasons to suspect the average jury, pulled from all walks of life, may be less open to nuances of coding experience than "seeing" copying laid out on a handout, alone in a jury room.  The very cost of empanelling that group can be used as leverage against you.  Wouldn't you rather pay up a little to settle than pay a lot more to lawyers, only to take your chance on twelve randos?  If you can't afford the lawyers in the first place, wouldn't you rather give in and move on, right or wrong?

To overcome that kind of story, and get ahead of its threat, prepare to tell your own.  Under the law, stories with evidence stand stronger, in part because the law sets rules about what juries can be told and what evidence can be shown.  If the story told by the current state of your repository works against you, you want more records, in your repo's _history_ or elsewhere, to cite in defense, not just in court, but in response to any threatening letters or public accusations you receive.  You want to build an innocent case that _doesn't_ involve copying or deriving from someone else's repo, flying solo or with "copilot".

Consider a simple example: a Git repository that records every heavy-lift Copilot suggestion as a separate commit, with Copilot as author and the developer as committer, plus metadata about the position of the developer's cursor and the prompt they put to the LLM.  That record of the prompt could swat down claims that the dev engineered prompts specifically to get a snippet from a competitor's codebase, "laundering" copyright infringement through the LLM by having its trainer copy preemptively on their behalf.  Immediately following deltas to the code `blame`d to the LLM could show how the developer made changes to better integrate with existing code in the repository, or even correct errors, rather than to avoid getting busted for verbatim lifting.  The very record of use of an LLM could hit against an even worse accusation that the dev went on GitHub themself and copy-pasted the goods by their own hand.  We're not sure whether infringement-via-LLM will work as any kind of shield under the rules yet, but we can guess how the war of stories would play out.

The scheming part of your mind might suggest those commits could be forged.  Of course they could.  But legal arguments---competitive storytelling---about potential forgery would _also_ be argued on evidence.  Does the repository also have scripts, configurations, or written policies about recording LLM interactions?  Is it full of _other_ commits about LLM "contributions", showing those commits were routine and automatic?  Are _those_ forged, too?  One side says they were keeping good records.  The other side says they were covering their tracks.  Two sides in a lawsuit are known to disagree.  What does the evidence say?

If you were going to code a key part of a project ten years ago, and worried you'd be accusing of plagiarism, the natural advice would've been to document your process.  Don't just phone it in with an "Implemented $foo" commit message.  Write a nice long one, and maybe blog work in progress or keep a "lab notebook", too.  Get ahead of it.

The underlying reasons for that approach haven't changed, and would apply just as readily to hand-coded work in competitive projects today, perhaps in part to document that an LLM that could _potentially_ regurgitate or derive from verboten training data _wasn't_ actually involved.  Conversely, when an LLM _was_ involved, the same principles apply.  When committing work that poses more risk of drawing challenge from a competitor, play it straight and make good records.  Be prepared to _show_ that you competed fairly, not just _say_ you did when they find a way to say you didn't.

## But I thought I was getting away with this.

Why document use of the LLM at all, you might ask.  Isn't that copping to use of a risky technology?  Because claims that coders involved infringed copyright are very likely to come from comparisons of working trees, not commit logs.  The strongest stories about how code came into the tree will be those based on evidence, not conflicting say-so.

Of course, this breaks down if you're not just using LLMs, but intentionally abusing them.  Well recorded prompts and changes could _look_ guilty, especially when they are:

<pre>Author: GitHub Copilot
Committer: Dastardly D. Developer
Date: Thu Jan 16, 09:37:16 2025 -0800

Implement tricky subroutine we've been stuck on

Cursor: 100,8 interchange.c
Prompt: gimme <a href="https://en.wikipedia.org/wiki/GNOME_Terminal">VTE</a>'s version of this sub
  but change all the var names and
  make it match my style</pre>

That's basically a selfie with a smoking gun.  If you plan to be plays ball like that, you need to be reading some other blog.  Preferably a litigator's.

For all the rest, good luck out there.

Now and forever, may the best coders win.
