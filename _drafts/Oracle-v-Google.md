---
title: Oracle v. Google
tags:
- Open Source
- Copyright
- Supreme Court
---

You don't have to be an intellectual property hawk or a clueless non-coder to feel serious misgivings about _Oracle v. Google_.

I grew up programming, reading [Larry Lessig](https://en.wikipedia.org/wiki/Larry_Lessig), and running Linux.  Now I'm a lawyer, and advise a lot on open licensing.  I've read the Supreme Court opinions several times.  If anything, the universal industry-side acclaim for the decision---at least in the corners I haunt---only deepens the queasy feeling I've had since the opinion went up on [supremecourt.gov](https://supremecourt.gov).

On the industry side, I'm not so absolutely sure this was a good result.

On the legal side, I am pretty sure it was a bad decision.

To address the obvious first, a lot of the headlines and comment-section summaries get the decision wrong.  The Supreme Court didn't say application programming interfaces can't be copyrighted.  It assumed they _can_, and let an earlier appeals court decision saying as much stand.  Instead, six out of eight justices hearing the case agreed that fair use, one of the "defenses" that lets you off even if you did commit copyright infringement, lets Android off for copying Java APIs and writing their own implementations.

The lawyers definitely won, after fifteen years and gobs of billable hours.  Google also won, if you don't think too much about the lawyers.  It's less clear who else this decision will be good for, or why.  Especially if you look beyond threatened disruption---remember that word?---to the flow of payments from the Android ecosystem.

It's dangerous to declare the current state of coverage on an issue biased, then set out to restore balance to the universe single-handedly.  That usually leads to something even more unbalanced than any of the individual takes you're complaining about in aggregate, but on the opposite direction.  Inevitably, some people will read just your bit, or take just your bit seriously, and become a monster.

Frankly, though, I think I'm with many of my colleagues here.  Apart from Clarence Thomas' dissent, which I've no interest in gushing over like a fanboy, I've seen some knee-jerk, copyright maximalist takes, and not much more.

I'll bite.

## Fair Use

[Fair use](https://en.wikipedia.org/wiki/Fair_use) at the Supreme Court level is basically [Calvinball](https://en.wikipedia.org/wiki/Calvin_and_Hobbes#Calvinball).  Unless the rest of the government comes along and changes [the fair use section of the Copyright Act](https://www.govinfo.gov/app/details/USCODE-2019-title17/USCODE-2019-title17-chap1-sec107), which was mostly just Congress trying to write out what courts were already doing at the time in the first place, the Supreme Court makes the rules about what is and isn't fair use up as it goes along.  The court doesn't _have_ to hear any particular case about fair use.  So when it does, "fair use" often means something different coming out than it did going in.

The Supreme Court doesn't take that many fair use cases.  That partly explains the problem with fair use: the form of the rule represents the least code-like kind of law we have, and Supremes don't give us many [test vectors](https://en.wikipedia.org/wiki/Test_vector) to check what's going on down below.  Known as a ["factor test" or "balancing test"](https://en.wikipedia.org/wiki/Balancing_test), fair use doesn't boil down to ["bright-line"](https://en.wikipedia.org/wiki/Bright-line_rule), if-then kinds of statements, but to a list of factors, or prompts, that courts are supposed to remember to think about, toss into the pot, sprinkle with a hefty seasoning of judgment, and [stir](https://www.youtube.com/watch?v=AER7cAiN4g0).  Lower court judges are supposed to watch how higher-ups do it, then follow along, under supervision.  When the two sides fighting have the time and money to keep going to trial and filing appeals, as they rarely do, we often see histories like _Oracle v. Google_, where perfectly competent judges, up and down the hierarchy, completely disagree with each other.

For people who aren't federal judges, this makes fair use incredibly hard to rely on.  Especially outside situations that have already come up lots of times in relatively established media, like book reviews quoting novels, or in industries where repeat players and specialists establish their own rules over time, [like film and TV, where insurance companies write policies to cover copyright lawsuits](https://www.amazon.com/Clearance-Copyright-4th-Everything-Television/dp/1935247123).  Even in cases that seem to point strongly one way or the other, the open-endedness of fair use opens the ends of litigation about fair use.  That means court costs, attorneys' fees, and time delays that very few can possibly pay.  It takes a real battle of titans, like Oracle and Google, with a big prize at stake, like all them Android dollars, to make new law on these things.  Any case like this is kind of a freak.

For people who _are_ federal judges, all this unpredictable wishy-wash---"flexible" factor test, "case-by-case" analysis, judicious "balancing"---means that much more of a free hand to make public policy, as opposed to just law.  Especially at the Supreme Court.

The contrast with rules about what can be copyrighted says a lot.  Copyrightability rules _do_ tend to take if-then form, often spelled out explicitly in the Copyright Act.  Even some of the vaguer concepts referenced in those rules, like the requirement that copyrightable work must be "creative", have developed toward more predictability in time.  We lawyers can't say exactly what the threshold for minimum creativity is, in if-then terms.  But we know it's really, really low.  If a person did the creating, rather than, say, a machine or a [monkey](https://en.wikipedia.org/wiki/Monkey_selfie_copyright_dispute), it's probably copyrightable.

I can't help coming away from the Supreme Court's written opinion thinking that at least some justices wanted to say APIs can't be copyrighted, but didn't think they could rationalize that as interpreting the Copyright Law Congress passed, rather than making up their own.  So they looked to the part of copyright law where Congress basically gave them some hints and told them to work it out—fair use—reached the result they wanted that way, then littered their opinion with all kinds of odd caveats that this decision is special and shouldn't really affect the rest of fair use.

Basically, the Supreme Court took copyright law to the rework station, [MacGyvered](https://en.wikipedia.org/wiki/MacGyver) in one ugly hack of a bypass, complete with bare wires and a chip taped to the board, doused it with alcohol, scrubbed away the flux, and potted the bodge in black goo, to keep its heretical emanations away from the rest of the circuit.  Or, if you prefer:

```diff
  def fair_use (work, use_case, context):
+   if work.declaring_code and use_case.androidish:
+     return true
+   else:
+     return old_fair_use(work, use_case)
+
+ def old_fair_use(work, use_case, context):
    # https://copyright.gov/fair-use/fair-index.html
    # 17 U.S.C. 107
    # &c. &c. &c.
```

If it looks like a back door, that's because it is.  Thomas and Alito called their colleagues out on it, because that's what you do when you lose the vote at the meeting, and because holding themselves out as doing just what Congress says is point one of conservative judicial shtick.

The question now is that `if` statement.  Does the rule of this case apply to _all_ declaring code, just declaring code that lots of programmers have invested in learning, just declaring code in programming language standard libraries, just declaring code in Java's?  Does the rule apply to all uses of that declaring code, just uses in arguably novel computing platforms, just Android or very Android-like things?  The folks who think copyright should last forever and crush all beneath it are pushing to frame this as a one-off.  Others have doubtless green-lit projects to yoink their competitor's APIs.  Lawyers gonna get paid.

A couple for those lawyers, while they're waiting:

Name another _kind_ of work where copyright applies, but fair use makes that protection practically irrelevant.

Name another Supreme Court decision where the majority explicitly _assumes_ a prerequisite legal conclusion, then tries to leave the question of whether that conclusion is even legally possible open to debate.

## Bad Metaphors

After the lawyers argued this case at the Supreme Court, I [blogged a list of the many metaphors](https://writing.kemitchell.com/2020/10/12/Oracle-Google-Metaphors.html) bandied from podium and bench.  Competitive analogizing continued in the written opinions.

The majority lobbed a few, some of which we'd heard before:

- an API is like a factory floor stocked with tools
- an API is like the gas pedal in a car
- an API is like the QWERTY keyboard layout on ... a typewriter

Compare Clarence Thomas, in dissent:

> Like many programming languages, Java allows developers to prewrite small subprograms called "methods."  Methods form the building blocks of more complex programs. This process is not unlike what legislatures do with statutes.  To save space and time, legislatures define terms and then use those definitions as a shorthand. For example, the legal definition for "refugee" is more than 300 words long.  [8 U.S.C. § 1101](https://www.govinfo.gov/app/details/USCODE-2019-title8/USCODE-2019-title8-chap12-subchapI-sec1101)(42).  Rather than repeat all those words every time they are relevant, the U.S. Code encapsulates them all with a single term that it then inserts into each relevant section. Java methods work similarly.  Once a method has been defined, a developer need only type a few characters (the method name and relevant inputs) to invoke everything contained in the subprogram.  A programmer familiar with prewritten methods can string many of them together to quickly develop complicated programs without having to write from scratch all the basic subprograms.

And later, addressing programmer familiarity:

> Many other copyrighted works depend on the same.  A Broadway musical script needs actors and singers to invest time learning and rehearsing it.  But a theater cannot copy a script---the rights to which are held by a smaller theater---simply because it wants to entice actors to switch theaters and because copying the script is more efficient than requiring the actors to learn a new one.

I'm no Clarence Thomas fan.  I'm no musical theater aficionado, either, as was [Antonin Scalia](https://en.wikipedia.org/wiki/Antonin_Scalia), Thomas' late tag-team partner.  But I have learned and played a few parts in plays, in a couple of languages.  I've learned a few of programming languages, Java among them, back when Java was new and exciting.  But I have to admit I think Thomas groks it.

I don't think Breyer does.  If he does, he picked some lousy metaphors.  They square with the conclusion he reached, and that his colleagues joined.  Not so much my experience of software.  Or my education in how copyright applies to it.

## Dumbing it Down, Keeping it There

One explanation for the way the majority spun "declaring code", among many, stems from the way those involved in the case chose to explain APIs to judges.  They chose to dumb it down, and never really built up from there.

The majority mentions `java.lang.Math.max`.  The dissent quotes a hypothetical implementation of a similar method in full:

```java
public static int MaxNum (int x, int y, int z) {
  if (x >= y && x >= z) return x;
  else if (y >= x && y >= z) return y;
  else return z;
}
```

The amicus brief of "83 computer scientists" focuses on `sort` for integers.  Probably to say more about different implementations.  But still very basic.

I see no clear sign in the opinions that the Supreme Court justices were led any further.

Certainly, some Java APIs are rather rudimentary, low-level operations on elemental, unboxed types.  And there remain viable legal questions about whether some of those, like `max` of `a` and `b`, are derivative of prior work, or too rote or formulaic for copyright protection.

There are fewer such questions about higher-level and more innovative APIs.  APIs that deal with memory, with process management, with with streams, with reflection.  The way that some APIs build on other APIs, not in implementation, but for types and other abstractions.  They way that aspects of the Java language proper flow through, and were creatively exposed, by core libraries.

`max` and `sort` are nice, day-one, napkin-sketch introductions to Java and `java.lang`.  But stopping there leaves a woefully underdeveloped picture of what APIs are and do, not just in Java, but more generally.  There is very little of the complexity, abstraction, or creativity of API design in `max` and `sort`, apart from that which burbles up from the real and virtual machines.  There is very little more than baseline, copyright-law-minimum creativity.  There is very little sense of what a pure ray of shining light the whole Java package, APIs very much included, represented, especially compared to the carbon-black, accretive cruft that prevailed before it in mainstream programming.

Elements of Java were derivative.  Elements of a new thing always are.  The question is whether there was also something new.  There was.  The whole of Java, as a package, was genius, a monument of technical taste, a rare case of a software achievement that technical people can't help feeling expresses the personality of its architect.

I have to admit I'm with Gosling here.  [Google totally slimed Sun.](http://nighthacks.com/jag/blog/393/index.html)  It's impossible to express just how justified that word feels, and not for any brazen commercial gimmeism, in terms of `max` and `sort`.  Java wasn't Java because of `max`, `sort`, and a hundred more method signatures like them.  That's secular sacrilege.  But it might have been all the Supremes were led to see.

## Inextricable, Extricated

Given how much of the total impression of Java stems from its holism and consistency, it's particularly irksome to see both majority and dissent repeating the idea that Java's declaring code, or API, was "inextricable" from its implementing code.  For one, Google was apparently able to extricate it.  For two, that is the point of an API.

It's not just that you can type `max` as a shorthand for a bunch of `if` statements or `sort` for a fancy loop.  It's that you can use and invoke those shorthands _for functionality_, for intent, with a certain measure of indifference to implementation.  That's especially so in some APIs, like Java's collections APIs, that establish a vocabulary that exposes and abstracts over decisions that cross the intent-implementation line, like `ArrayList` versus `Vector`.  Those choices---what to expose, what to elide, how to describe it---are an author's work.  And a great deal more creative than many Java programs.

It's true that an API without _any_ implementation isn't useful.  Plenty of useless code falls under copyright, and some is a lot more creative than the "business logic" spinning clock cycles day and night.  But the nature of an API, and the crux of an API's role in fostering compatibility, comes precisely from disentangling implementation.  Java written "for Android" today could run on implementations that don't exist yet a few months from now.  Conversely, it's perfectly possible to design and even write out an API before doing any implementation at all.  This is common, and even good practice.

Several of the best JavaScript programmers I know start their packages with drafts of the API, often in `README` or `test.js`.  One of the best bits of advice I got on writing C, way back when, was to sketch the header files for my libraries first.  Sometimes talents and appetites for API design and implementation don't coincide in one person, so one designs the API, and another implements and embellishes, like [Bernie](https://en.wikipedia.org/wiki/Bernie_Taupin) and [Elton](https://en.wikipedia.org/wiki/Elton_John).  Sometimes one kind of talent does both to start, and the next comes along to refine, like [Ayers](https://en.wikipedia.org/wiki/Dick_Ayers) after [Kirby](https://en.wikipedia.org/wiki/Jack_Kirby).

I don't expect the Supreme Court to wax rhapsodic about the lofty heights of the programming experience.  But it saddens me to see the verve of the art so totally missing in action.  I don't see it in the opinions.  It's a stretch to think it affected the decision, but somehow fell beneath mention.

There was evidence and testimony of the creativity of API design in earlier stages of the lawsuit.  Where did it go?

## Bye Bye Business Models

Speaking of art, if we read _Oracle v. Google_ as the copyright _minimalists_ prefer, the Supreme Court just kicked the chair out from under companies trying to compete on API design.  That wouldn't mean no new APIs, or new good ones, any more than we won't have new dishes to eat or new clothes to wear.  I strongly suspect it would mean we'll see more of them from the copycat [H&Ms, Zaras](https://en.wikipedia.org/wiki/Fast_fashion), and famous-name holding-company restaurants and glossy-page cookbook magazines of the world, rather than small shops and independent creators actually coming up with the goods.  And of course from the big, public tech companies, who make gobs of money otherwise, and spend some of it on R&D, largely to herd and coax us in directions that suit their actual business models.

Submit this issue to the [clap-o-meter](https://en.wikipedia.org/wiki/Clap-o-meter) in the court of public coder opinion, I doubt we'll hear much sympathy.  As programmers, we all use more APIs than we create.  We are API consumers more than API creators.  But that is a different question from whether we _implement_ more of other people's APIs than our own.  How often do we invoke APIs for software we're not licensed to use?

While the headlines spoke of APIs generally, to raise the stakes and drive the clicks for each new story on the forever copyright war that kept on giving until this month, it was never clear the Supreme Court would decide anything that broadly, and it still isn't.  I can't for the life of me decide whether the latest Supreme Court decision really addresses the unlicensed _use_ of others' APIs in broader applications, or just competing reimplementation.  The general pattern is that the Supreme Court decides a rather narrow form of the questions put to it.  We all read those decisions like tea leaves, see where it goes in the lower appellate courts, and wait another couple decades for the next round.  Here we go again.

As programmers, and therefore people, we're also preternaturally short-termist, unless we try to be otherwise.  Even though we know better.  It's past the resolution of my crystal ball to tell whether a broad application of _Oracle v. Google_ will accelerate or retard API design.  What if the court had ruled that reuse of handwritten machine code was always fair use?  Would we see a more efficient allocation of money, prestige, and resources to the specialists who write that kind of thing, or not?  Would we see small players, who rely on legal protection in lieu of manpower, capital, and market power, edged out or absorbed into FANG, as salaries employees?

As programmers, an awful lot of us are on salary.  Employment is experienced as a kind of constructed environment, even a playpen, in which copyrights are only experienced as a hindrance from others, because all copyrights for new work created devolve by contract to the employer.  This explains some of what we saw in the briefing for _Oracle v. Google_: big tech companies, allied advocacy groups, salaried R&D group employees, and tenured professors on one side, businesspeople on the other.  Workers who are not also businesspeople don't experience copyrights as assets.  They don't own their work, and they're not paid royalties.  They might get a bonus, if they code what they're supposed to code and it works out well.  But they're more likely concerned about losing their jobs if they don't serve up what's ordered.  Turning that into money is somebody else's job.  It matters to the coders financially, if at all, in dilute form, if they get stock or options, and the value of the company appreciates.

## Mega Stakes or Bust

<!-- not just general purpose languages, but databases, libraries, etc. -->

## Openness

There was nothing stopping us from making APIs "open" before this court decision.  The same old licenses worked on APIs.  The prospect of a broad _Oracle v. Google_ reading is that API developers will be drafted into openness for their work.

Especially FSF-affiliated folks have long brought up legislation mandating that software must be "free" as a talking point, a vision of the kingdom to come.  That's the strong reading of _Oracle v. Google_, not for all software generally, but for the APIs in it specifically.  I don't think this is realistic for APIs, any more than for software.  For languages and other code lower in the stack, the strong reading would preclude some models that the software freedom school would decry.  But in higher level and more specialized software, I suspect we'll see returns to old form.  Maybe I can't stop you from copying my API under copyright law, but I can sell the software under NDA, and prohibit what I want that way.  Copyright was never the whole picture.  Trade secret is also a thing, and the reason copyleft is, too.

As for the open source school, mandatory contribution to the public domain isn't in line with what we've heard from leading lights, either.  Linus has expressed strong, consistent support for the idea that ["if you write your code, it is your choice to pick a license"](https://youtu.be/1Mg5_gxNXTo?t=2963).  Raymond's go-to response for questions about free or open source as communism, which the press loved to tee up for him, emphasize voluntarism.  From [_Revolution OS_](http://revolution-os.com/):

> Interviewer:  People that casually look at open source and free software and think, "well, because you're supposed to share, and do it for people's goodwill, doesn't that seem somewhat communist?" ... what's your response to that?
>
> Raymond:  Absolute nonsense!  It makes me really angry when people do that!  Communism is an ideology that _forces_ people to share.  ... Open source is not communism because it doesn't force people. [Stares.]

A clear legal rule that if you share an API with someone, then you have to share the right to reimplement it, means forcing people to share to an extent they otherwise might not.  Much in the same way that a rule that if you put your source code online, then you have to allow any kind of use, or permit any kinds of changes, is forcing people to take or leave certain kinds of sharing as a package deal.  Some knock-on effects of sharing are inherent in software, human knowledge, and practical realities.  Others come from law.

At various times, Raymond, and not just Raymond, also expressed the view that copyleft licenses like the GPL had become unnecessary, because coders and companies were learning to share whether a license required them to or not, and in any event mandatory sharing does not produce the most enthusiastic, helpful kind of sharers.  The FSF line, in mirror image, was that coders who wanted to share could use the requirement to do so under GPL as leverage to convince their organizations not just to release, but support ongoing participation.

## Assumptions

I can't help mentioning an assertion I've seen repeated constantly in writing about _Oracle v. Google_: the idea that software people have long _assumed_ that APIs can't be copyrighted, and proceeded accordingly.

I've been a programmer since I was a boy.  Longer than I've been a lawyer.  I've also associated with, and worked around, the open side of the spectrum, far more than the closed.  In all that time, I never assimilated any strong view on copyrightability and APIs.  I struggle to think of any other strongly held view of that kind, about an untested and remarkably specific point of legal doctrine, that remotely compares.  Where are programmers meant to have picked up this strong help belief about a fine point of copyright law the courts hadn't reached yet?