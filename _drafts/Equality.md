Bradley Kuhn just published ["Toward Copyleft Equality for All"](https://sfconservancy.org/blog/2020/jan/06/copyleft-equality/).  Everyone who cares about copyright and my favorite copyleft-based business model, public-private licensing, should read it.

I'd like to share a few thoughts.

## Weaponization

I agree with Bradley that many folks have opportunistically misrepresented the rules of copyleft licenses, especially the GNU copyleft licenses.  It bothers me.

It bothers me when people present GPL or AGPL as a noncommercial license.  That's [PolyForm Noncommercial](https://polyformproject.org/licenses/noncommercial/1.0.0/) or [Prosperity](https://prosperitylicense.com/), not GPL or AGPL.  And it bothers me when people present GPL or AGPL as licenses that require sending patches back or make the code free for open source.  That's [Parity](https://paritylicense.com/).

Watching marketing teams, salespeople, individual developers, and even [companies trying to help open developers](https://blog.licensezero.com/2020/01/02/xscode.html#gpl) get this wrong, over and over again, gives me a reliable case of the sads.  Every misleading post, ad, or product grid they put online makes empowering people with good, usable, consistent information about licenses that much taller a hill to climb.  Frankly, there are just way more folks out there with motives and opportunities to misunderstand, and to spread their misunderstandings, than there are to guide and educate.  I feel it's getting away from us.

But those of us who know better should look also at ourselves.  We've contributed plenty to this mess we're in.

In an ideal world, everyone would read a license carefully, and try to understand it from a contrary point of view, before telling the world what it says and does.  But this isn't an ideal world, and we have no right to expect one.  We would see far less misinformation---innocent and intentional---if the licenses in question weren't fertile breeding grounds for fear, uncertainty, doubt.

On the programming side of open software, we say things like:

> If you have to refer to the documentation every time you use a module, find (or build) a new module.
>
> --- Kenneth Reitz, quoted in [Vladimir Keleshev's classic docopt talk](https://www.youtube.com/watch?v=pXhcPJK5cMc)

We could put that a new way:

> If you have refer to a lawyer or a treatise every time you have a question about a license, find (or write) a new license.

GNU `wc` says the body of the GNU GPL 2.0 runs to nearly 2,500 words.  GPL 3.0 has more than 5,000.  Some of those words intentionally invoke undefined behavior of copyright law, like the scope of "derivative works" of various kinds of code, that not even lawyers understand yet.

If the answer isn't in the license, where is it?  A rough word count of the copyleft.org guide, a great resources to which Bradley has made enormous contributions, piles on:

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

Licenses are important.  Coders and users shouldn't need foundations, treatises, lawyers, or activists to read licenses for them.  If copyleft license terms _invited_ reading, rather than discouraging it, and then _rewarded_ readers with understanding and a sense of autonomy, rather than confusion and impostor syndrome, the herd could immunize itself against misunderstandings, innocent and malicious.  Misunderstandings there would be, regardless.  But they couldn't reach critical mass, and take on lives of their own.  See, e.g., static versus dynamic linking.

MongoDB and Kyle Mitchell aren't the only ones who want a piece of the GPL.  Not by far.  As Bradley mentioned, Richard Fontana wants to patch copyleft to kill a business model.  The fine businesses behind the cooperation commitment want to graft GPLv3 cure into GPLv2 copyleft.  SFC and friends themselves have bones to pick, via their self-imposed enforcement principles, that effectively set license rules that _aren't_ in the licenses.

## Name Calling

FSF-school activists have spent a lot of time hearing RMS [try to undermine things he doesn't like by giving them demaning nicknames](https://www.gnu.org/philosophy/words-to-avoid.html).  As far as I know, none of those has ever caught on outside his immediate, often transient, influence.  But it's exceedingly RMS of him to keep speaking his own langauge, increasingly divorced from common usage, with apparent resolve unto death.  The tactic always reminds me of George Bush the younger, who infamously bestowed petnames on members of his cabinet.  Classic power play ... if you have power.

Bradley has taken a shot at it now, coining a new term, "proprietary relicensing", to bring the business model he wants to banish down a peg.  As far as I know, this is the first time I've ever read the term.  I've never heard it from anyone else in this context.

The business model does have a terminology problem.  The term "dual licensing" has at various times meant both offering a choice of open licenses, as the Rust compiler offers Apache 2.0 or MIT, and also a business model based on offering a single open license, usually a GPL, for free, and also licenses without copyleft for sale.  "Selling exceptions", the term RMS preferred, hasn't really caught on outside his shrinking sphere.

I've taken to calling the business model "public-private licensing" because I believe it's unambiguous and because it's accurate.  Open software licenses are "public licenses".  They give everyone---the public at large---license permission for the software.  Thus the full title of GPL 2.0 is "GNU General Public License 2.0" and Parity 7 is "Parity Public License 7.0.0".  _Private_ licenses, by contrast, give permission to just one company or person.  When a software shop runs the public-private licensing business model, it picks a public software license and offers private licenses to customers.  If they pick a copyleft public license, their private licenses allow use in closed projects.  If they pick a noncommercial public license, their private licenses allow use for commercial purposes.

The name "proprietary relicensing", by contrast, doesn't make sense.  Its only virtue, from what I take to be Bradley's point of view, is that it combines two words with negative valences within the circles he travels.  It's designed to disparage, not to describe or explain.

In the jargon, "proprietary" means "not free or open".  Team "free" and "open" are the good guys, team "proprietary" and "closed" the baddies.  If you want jargonistas to see people and companies running a business model as baddies, even if all the software they write happens to be available under a GPL, it helps to pin the word "proprietary" on them somehow.

"Relicensing" also has a few meanings, but the concrete ones don't make sense in this context.  "Relicensing" typically means replacing one open license with another.  Sometimes projects "relicense" to avoid license-compatibility problems and allow their work to be incorporated into another project.  Other projects "relicense" to upgrade their projects to a new version of their old license, say from GPL 2 to GPL 3.  As a legal technicality, the old license terms may linger around, and still apply to increasingly outdated versions.  But conceptually, new license replaces old.  What was an GPL 2 project is now a GPL 3 project.

The combined implication of "proprietary relicensing" is that companies doing it suck in open code and render it proprietary by some dark pecuniary magic.  That is not the case, and there is no magic.  Code under copyleft is code under copyleft.  Insofar as grants on the terms of copyleft licenses can't be revoked---the GPLs and Parity say as much---permission for versions already released isn't going away.  Code in a GPL project is code under the GPL, for practical purposes indefinitely, whether the project steward is FSF, SFC, a lone-wolf hacker, or your least favorite software company.

The actual difference is that, for the projects Bradley wants to pillory, the individual, group, or company stewarding the work can also sell permission to use it in closed projects.  But as RMS [has written](https://www.fsf.org/blogs/rms/selling-exceptions), if making software available for use in closed projects is unethical, making software available under Blue Oak, MIT, BSD, Apache, or other permissive terms is the same.

In many circumstances, I do believe that permissive licensing is wrong.  But as far as I know I'm still waiting on an FSF-school activist to join me there.  Politically, the FSF school has always wanted to claim permissively licensed programs as part of their thing, apparently more than they wanted to push copyleft.  Fearing a loss of mindshare and momentum, they've been unable to criticize permissive licensing too loudly.  Similarly, the permissive-leaning open source people have been unable to kick copyleft to curb.  That would lay bare their cooptation of the prior movement, which they prefer to style a rebranding.  Both positions make sense politically, at least in the mind of those continuing the status quo.  They don't make any sense objectively, without their baggage.

## Blacklisting

Bradley laments that especially Mongo's use of AGPL led many companies to blacklist software under those terms.  And he reaches for a broader point from there:

> The message of "technically it’s a FOSS license, but don’t use" is too complicated to be meaningful.

In some contexts, I heartily agree.  But not universally.  "Don't use" is specific to a context.  In some contexts, "don't use" is exactly what an activist-motivated copyleft license drafter wants to hear.

If you use copyleft to counteract bad behavior, a key test of your license is whether people practicing bad behavior badmouth and avoid it.  If you use copyleft to counteract bad behavior by companies, a key test is whether bad companies ban it by clear company policy.  If you write a license like AGPL to address something called "the Google problem", and Google _doesn't_ ban the license, then you have a problem.

## copyleft-lonely

...

## Benefits

...