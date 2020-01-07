Bradley Kuhn just published ["Toward Copyleft Equality for All"](https://sfconservancy.org/blog/2020/jan/06/copyleft-equality/).  Everyone who cares about copyleft and open business models should read it.

I'd like to share a few thoughts.

## Weaponization

I agree with Bradley that many have opportunistically misrepresented the rules of copyleft licenses, especially the GNU copyleft licenses.  It bothers me.

It bothers me when people present GPL or AGPL as a noncommercial license.  That's [PolyForm Noncommercial](https://polyformproject.org/licenses/noncommercial/1.0.0/) or [Prosperity](https://prosperitylicense.com/), not GPL or AGPL.  And it bothers me when people present GPL or AGPL as licenses that require sending patches back or make the code free for open source.  That's [Parity](https://paritylicense.com/).

Watching marketing teams, salespeople, individual developers, and even [companies trying to help support open developers](https://blog.licensezero.com/2020/01/02/xscode.html#gpl) get this wrong, over and over again, gives me a reliable case of the sads.  Every bunk blog post, ad, or product grid they put online makes empowering people with good, usable, consistent information about licenses that much taller a hill to climb.  Frankly, there are just way more folks out there with motives and opportunities to misread, and to spread their conclusions, than there are to guide and educate.  I feel it's getting away from us.

It's easy to pick on marketing teams, salespeople, and lazy people.  But those of us who know better should also take a look at ourselves.  We've contributed plenty to this mess we're in.  It couldn't have got this bad without us.

In an ideal world, everyone would read each license carefully and try to understand it from a contrary point of view before telling the world what it says and how it works.  But this isn't an ideal world, and we haven't any right to expect one.  We would see far less misinformation---innocent and intentional---if the licenses in question weren't such fertile breeding grounds for fear, uncertainty, doubt.  License people sowed the confusion.  Opportunists merely reaped it.

On the programming side of open software, we say things like:

> If you have to refer to the documentation every time you use a module, find (or build) a new module.
>
> --- Kenneth Reitz, quoted in [Vladimir Keleshev's classic docopt talk](https://www.youtube.com/watch?v=pXhcPJK5cMc)

We could put that a new way:

> If you have refer to something or someone else every time you have a question about a license, find (or write) a new license.

GNU `wc` says the body of the GNU GPL 2.0 runs to nearly 2,500 words.  GPL 3.0 has more than 5,000.  Some of those words intentionally invoke undefined behavior, like the scope of "derivative works" of various kinds of code under copyright law.  Lawyers don't know how that will play out, either.  Of Heather Meeker's five most difficult questions in open licensing, [three concern the GPL](https://heathermeeker.com/open-source-faq/what-are-the-most-difficult-questions-in-open-source-licensing/).

If the answers aren't in the license, where are they?  A rough word count of the copyleft.org guide, a great resources to which Bradley has made enormous contributions, piles on:

```shellsession
$ git clone https://k.copyleft.org/guide
$ cd guide
$ texcount $(g ls-files | egrep "\\.tex") | fgrep Words\ in\ text
Words in text: 10863
Words in text: 209
Words in text: 10059
Words in text: 1558
Words in text: 38443
Words in text: 18148
Words in text: 0
Words in text: 372
Words in text: 79652
```

Licenses are important.  Coders and users shouldn't need foundations, treatises, lawyers, or activists to read for them.  After all, it's the _coders'_ rights at stake.

If copyleft license terms _invited_ reading rather than discouraged it and _rewarded_ readers with understanding and a sense of autonomy rather than confusion and impostor syndrome, the herd could immunize itself against misunderstandings, innocent and malicious.  Misunderstandings would still crop up.  But they couldn't reach critical mass and take on lives of their own as they have.  Exhibit One: the blind alley of static-versus-dynamic linking.

Kyle Mitchell and MongoDB aren't the only ones who want a piece of the GPL.  Not by far.  As Bradley mentioned, Richard Fontana wants to patch copyleft to kill a business model, among other things.  That's copyleft-next.  And the businesses behind the cooperation commitment want to backport GPLv3-style forgiveness for license violators into GPLv2.  Even Bradley's Software Freedom Conservancy has bones to pick.  The enforcement principles they self-impose effectively add rules to the licenses that aren't there to begin with.

The question isn't whether we can write better, cleaner, shorter copyleft licenses.  We can do that for my purposes, and we could do that for Bradley's.  The question is whether they would matter.  Did the opportunity to build network effects to advance policy goals die with GPL 2?

## Name Calling

FSF-school activists have spent a lot of time hearing RMS [try to undermine things he doesn't like by giving them demaning nicknames](https://www.gnu.org/philosophy/words-to-avoid.html).  As far as I know, none of those has ever caught on outside his immediate, often transient, influence.  But it's exceedingly RMS of him to keep speaking his own language, increasingly divorced from common usage, with unflagging resolve.

The tactic always reminds me of George Bush the younger, who infamously [bestowed petnames on members of his cabinet, staff, journalists, politicians, and even foreign leaders](https://en.wikipedia.org/wiki/List_of_nicknames_used_by_George_W._Bush).  Classic power play.  If you have power.

Bradley has taken a shot at it now, coining a new term, "proprietary relicensing".  I've never read the term before.  I've never heard it used with this meaning.  If you'd showed it to me _before_ I read Bradley's post, and asked me what I thought it meant, I'd guess either changing the license of proprietary program, which happens all the time, or attempting to revoke the open license for a project to make it proprietary instead, which is usually somewhat dubious, depending on the license and the circumstances.

The business model Bradley's targeting does have a terminology problem.  The "dual licensing" doublet has at various times meant both offering a choice of open licenses, as the Rust compiler offers Apache 2.0 or MIT, and also a business model based on offering a single open license, usually a GPL, for free, and also licenses without copyleft for sale.  "Selling exceptions", the term RMS preferred, and which Bradley tries to distinguish, hasn't really caught on outside his shrinking sphere.

I've taken to calling the business model "public-private licensing" first because it's unambiguous, and second because it's accurate.  Open software licenses are "public licenses".  They give everyone---the public at large---license permission for the software.  Thus the full title of GPL 2.0 is "GNU General Public License 2.0" and Parity 7 is "Parity Public License 7.0.0".  _Private_ licenses, like end user license agreements, by contrast, give permission to just named people or organizations.  When a software shop runs the public-private licensing business model, it picks a public software license and offers private licenses for sale.  If they pick a copyleft public license, their private licenses allow use in closed projects.  If they pick a noncommercial public license, their private licenses allow use for commercial purposes.

The name "proprietary relicensing", by contrast, doesn't make sense.  Its only virtue, from what I take to be Bradley's point of view, is that it combines two words with negative valences within the circles he travels.  It's designed to brand a business model, not to describe or explain it.

In the jargon, "proprietary" means "not free or open".  Team "free" and "open" are the good guys, team "proprietary" and "closed" the baddies, at least as the good guys tell it.  If you want the fellow faithful to see people and companies running a business model as baddies, even if all the software they write happens to be available under a GPL, it helps to pin the word "proprietary" on them somehow.

"Relicensing" also has a few meanings, but the concrete ones don't make sense in context.  "Relicensing" typically means replacing one open license with another.  Sometimes projects "relicense" to avoid license-compatibility problems and allow their work to be incorporated into another project.  Other projects "relicense" to upgrade their projects to a new version of their old license, say from GPL 2 to GPL 3.  As a legal technicality, the old license terms may linger around, and still apply to increasingly outdated versions.  But conceptually, new license replaces old.  What was an GPL 2 project becomes a GPL 3 project.  Relicensed.

The combined implication of "proprietary relicensing" is that companies doing it snag open code into their clutches and render it proprietary by some dark, pecuniary magic.  That is not the case, and there is no magic.  Selling private licenses to build closed software with otherwise copyleft code does not make the code proprietary.  It's still available to everyone under the terms of its public copyleft license.

Code under copyleft is code under copyleft.  Insofar as grants on the terms of copyleft licenses can't be revoked---the GPLs and Parity say as much---permission for versions already released isn't going away.  Code in a GPL project is code under the GPL, for practical purposes indefinitely, whether the project steward is FSF, SFC, a lone-wolf hacker, or your least favorite software megacorp.

The actual difference is that, for the projects Bradley wants to pillory, the individual, group, or company stewarding the work, and only they, can also sell permission to use it in closed projects.  What's wrong with that?  As RMS [has written](https://www.fsf.org/blogs/rms/selling-exceptions), if making software available for use in closed projects is unethical, making software available under Blue Oak, MIT, BSD, Apache, or other permissive terms is the same.

In many circumstances, I believe that permissive licensing is wrong.  But as far as I know, I'm still waiting on an FSF-school activist to join me there.

Politically, the FSF school has always wanted to claim permissively licensed programs as part of their thing, apparently more than they wanted to push copyleft.  Fearing a loss of mindshare and momentum, they've avoided criticizing permissive licensing too directly or too loudly.  Similarly, the permissive-leaning open source people have been unable to kick copyleft to curb.  That would lay bare their cooptation of the prior movement, which they prefer to style a rebranding.  Both positions make sense politically, at least to those choosing to continue the status quo, or simply to let sleeping dogs lie.  But they don't make much of any sense objectively, without all that baggage.

## Blacklisting

Bradley laments that especially Mongo's use of AGPL led many companies to blacklist software under those terms.  And he reaches for a broader point from there:

> The message of "technically it’s a FOSS license, but don’t use" is too complicated to be meaningful.

In some contexts, I heartily agree.  But not universally.  "Don't use" is specific to a context.  In some contexts, "don't use" is exactly what an activism-motivated copyleft license drafter wants to hear.

If you use copyleft to counteract bad behavior, a key test of your license is whether people behaving badly badmouth and avoid it.  If you use copyleft to counteract bad corporate behavior, a key test is seeing your terms on a ban list set by corporate policy.  If you write a license like AGPL to address something called "the Google problem", and Google _doesn't_ ban the license, then you have a problem.  Even if you think patches from Google might be swell.

If there are bad guys, and they have a blacklist, the good guys should be on it.  For whatever definitions of "bad" and "good" the good guys have in mind.

## copyleft-lonely

Bradley rightly celebrates the work Richard Fontana has been doing, on and off for years, on his copyleft-next license.  I agree that Richard's work on license language to prevent public-private licensing qualifies as both innovative and interesting.  But actually adopting it as the norm can and will further weaken support for copyleft licenses.

Permissive licenses have always enjoyed broad support.  Solo hackers like them because they're often shorter, relatively simple, and avoid all the politics and legal complexities of GPL-style copyleft, especially the dread "license compatibility" morass.  Companies and organizations of all stripes value the same, software companies only more so.  Permissive licenses allow software companies to take open software, which they get for free, and use it to make closed software, for which they coax and command all they can.

In the past, copyleft enjoyed similarly broad support.  Of course RMS and the FSF supported copyleft.  To start, it was functional: RMS wanted Emacs patches back from fellow hackers.  And Linus wanted Linux patches back from fellow hackers.  And plenty of developers today want their own codevelopment communes with legal rigor.  In time, RMS and the FSF slathered on a thicker and thicker rhetorical gloss.  Activists attracted to that program supported copyleft to advance that program.  And as Bradley points out, companies also gravitated toward copyleft licenses early on.  Sometimes to keep closed competitors from beating on them with closed versions of their own open code, as with Netscape.  And others, also very early, for public-private licensing, as with Ghostscript, MySQL, Qt, and more.

We could look at copyleft's constituency as comprising several factions.  Hacker pragmatists.  Software freedom activists.  Businesses releasing strategically, in need of defensive moats.  Companies selling private licenses for code published under public copyleft terms.

How many friends are software freedom activists willing to lose?

It was far easier to pretend that GPL required patches back when software was inevitably distributed.  Especially when Linus was running around giving talks and publishing books that said so.

In a network-software world, that's no longer so easy.  Smart developers have been adopting GPLs for patches back, getting none, and [writing new licenses to get the effect they wanted](https://spdx.org/licenses/RPL-1.1.html) for nearly twenty years.  The FSF school has never blessed their efforts.  The only explanation from RMS I've been able to find is an offhand quote to the effect that true patches back licenses might be used for ill.  Full stop.

The word will definitely get around about public-private licensing if brand new sections with heading like "Nullification of ... Dual Licensing" start popping up in their copyleft licenses.  As with patches-back, the FSF position on that model has been consistent.  But the position was laissez faire.  RMS knew plenty well about "selling exceptions" when he published a piece approving the practice.  The organization as a whole knew plenty well about Ghostscript and MySQL and Qt when it published GPL 3.0, and didn't say anything about it.  TiVo got the stick in GPL 3.  Artifex got a new version of GPL, which it adopted, moving eventually to AGPL.

## Benefits

Hyperbole is fair play.  But so is pointing out.  In casting shade over the track record of public-private licensing, Bradley goes too far:

> Meanwhile, proprietary relicensing discourages contributions from a broad community, since any contributor must sign a CLA giving special powers to the vendor to continue the business model.  Neither users nor co-developers benefit from copyleft protection.

CLAs give the Apache Foundation special powers, not to mention the powers copyright _assignments_ give the Free Software Foundation.  Both users and developers benefit from copyleft insofar as copyleft brings new patches into the distribution.  In other words, if anybody's _signing_ a contributor license agreement, it's because they're contributing.  Whether the steward accepts the contribution or not, users and other developers still get the patches under free copyleft terms.

> We've finished the experiment.  After thirty years of proprietary relicensing, beginning with Aladdin and culminating with MongoDB and their SS Public License, we now know that proprietary relicensing does not serve or extend software freedom, and in most cases has the opposite effect.

Public-private licensors have released code that wouldn't otherwise have been released, funded ongoing maintenance and development that may not have happened otherwise, put activist licenses under more eyeballs, afforded those licenses and activists strength of numbers and credibility, and strengthened the network effects of GPL copyleft, including an incentive to license for GPL compatibility, by choosing GPLs as their public licenses.

Postgres is definitely cooler than MySQL these days, at least in the company I keep.  But I'm not the only one who learned SQL in the first place, using MySQL, through Ruby on Rails.  The center of Rails gravity itself shifted to Postgres some years ago.  But MySQL catalyzed its rise.

I practice law on Linux machines.  I read a lot of PDFs, and run both MuPDF and Ghostscript on a daily basis.  Without a native, stable, performant PDF option, I couldn't do business on a free software base.

What's more, by pioneering a new business model, and succeeding with it, dual licensing companies helped to make businesses and businesspeople welcome into free software, and copyleft-licensed free software in particular.  To this day, they stand for the fact the business of free software needn't mean lax permissive terms.  They stand for the fact that business friendliness needn't mean "open source".  It dates back to "free software".

## Purity

I've read all the free and open software history I could find, went at the licenses with a magnifying glass, and studied the law to get the details.

If there's a theme I can find on the free side of free-and-open since the open-side coup, it's a kind of flagellant's zest for new restrictions and self-abnegations.  Those committed to the FSF program seemingly delight in heaping on further strictures, not just in their licenses, but in their processes and policies, the governance of their organizations, and even their personal choices.  Each new concession to doctrine affords new opportunity to delight in one's own righteousness, to set oneself apart from the rest.  GPL, not BSD.  Community-driven, not stewarded.  Charity, not a company.  Ancient ThinkPads.  The Web without JavaScript.  And on and on.

The harsher the discipline, the more pious those submitting seemingly permit themselves to feel.