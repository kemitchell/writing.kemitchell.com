## Money

I have occasionally met lawyers who seemed to have taken a wrong turn at B School, and wound up in law school by mistake.  Not I.  I've never coveted a business education, because frankly, I can't read the books without my eyes rolling, and I'm afraid they'll get stuck that way.

But people like me have to care about business models.  Nearly everyone I'm supposed to advise has to care about money, though they'd rather not.  I can answer their license questions all day, but the answers won't be any good if I ignore why they're asking in the first place.

The trick is finding models that:

1. Don't encourage bad or crippled work product.

   Any model that contends for most developer time is out.

2. Don't sap the motivation of contributors.

   Any model that makes bank by selling out on core values is out.

3. Work for single developers and small teams, as well as companies.

   Models that require teams of lawyers, salespeople, or separate open and closed development teams are out.

4. Potentially make meaningful money for as many people.

   Swag doesn't cut it.

5. Don't leave them vulnerable to big incumbents with overwhelming structural advantages.

   Support and hosting are out, without proprietary code, infrastructure, or tooling, all crippled-product problems.

6. Don't produce the kinds of network effects that birth big incumbents with overwhelming structural advantages in the first place.

   Reproducing the problem is not a solution.

In simplified terms, my people look for models that scale up, scale down, encourage good code, and send the money back where the code came from.  In value terms, they want free, but also fair more broadly, where free is the only path paved so far.

## Elimination

The original free software business model, payment for copies of software, was broadly fair in free software's formative years.  RMS's nascent Free Software Foundation sold [dead-tree manuals and copies of Emacs on tape](http://web.cecs.pdx.edu/~trent/gnu/bull/16/gnu_bulletin_28.html), which as far as I can tell was all that held him back from full anti-commerce out of the gate.  But the same massive cost shift that made freedom seem crushingly important, the Internet, also gutted distribution as a meaningful moneymaker.  But by then FSF had won the attention-donations lottery, and didn't much have to care.

As I have [mapped out systematically before](https://blog.licensezero.com/2018/10/17/mapping-models.html#purebred-models-overview), that leaves [public-private licensing](https://indieopensource.com/public-private/indies) (AKA dual licensing AKA selling exceptions) and [delayed release](https://blog.sentry.io/2019/11/06/relicensing-sentry/), a species of dual licensing with some licensing choices preset by schedule.  All these models rely on the developer, a company, or [another vehicle](https://xlcollaborative.com/) wielding unique power to ignore the terms of the public license for the code and offer others different terms for a price.

From a broad, multifaceted moral perspective, that kind of unilateral power makes perfect sense.  The maker of a project _is_ morally special with respect to their own work.  When someone other than the maker knowingly profits from their work at their expense, that's wrong.  When project leadership gets run over roughshod by self-serving newcomers, that's wrong.  When resources rather than track record drive development, that's wrong.  When forks and clones steal the limelight of hard-won ideas and innovations, that's wrong.  Unless freedom is all that determines right and wrong.  Creators' unique licensing powers provide leverage against all those wrongs---the missing moral dimensions of the freedom-blinkered view.

## Competitive Lexicography

Giving the developer or group that happened to make the software special powers frustrates those whose goal is to pick the fruits of the work.  The fruits, unlike the software, may be quite scarce and rivalrous.

If you want to move in and outcompete the maker on paid distribution, you can't have them keeping distribution rights or build tooling to themselves.  So projects that do "aren't real open source" even with core code stands free for all to read and use.

If you want to outcompete the maker on support or maintenance services, you can't have them controlling access to documentation or gatekeeping governance.  So projects that do "aren't real open source", as we sometimes hear about Clojure, the foundation of a sprawling, healthy, [shockingly mature](https://www.clojuriststogether.org/) collaborative effort.

If you want to outcompete the maker on hosting, you can't have them requiring you to release your proprietary hosting stack and tooling.  So projects that do "aren't real open source", as we heard about MongoDB's Server Side Public License.

I don't for a minute think that everyone who holds an extended or exclusionary view of "open source" schemes to screw open devs.  There are other, valid reasons to support each of those positions.  But reading history written by commercial stalwarts, and bearing in mind their enormous powers of marketing, recruiting, and lobbying, it's no surprise that "open source" has shifted toward those views that singleton champions of successive open-business-model innovations favor, both as byproduct of corporate involvement and by direct, concerted political action.

Permissive, not copyleft, and certainly not the [scary kind](https://paritylicense.com).  Not just code, but docs, guides, and scripts, too, but not on terms we don't like.  Not just a license, but governance, meetings, foundations, and codes of conduct, but HR-friendly ones, and nothing radical.  Enforcement, but [not the kind that hurts](https://www.fsf.org/licensing/enforcement-principles), and [surrender any weapons you may have](https://gplcc.github.io/gplcc/).
