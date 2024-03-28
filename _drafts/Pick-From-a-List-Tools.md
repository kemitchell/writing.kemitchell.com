---
title: Pick-From-a-List Tools
description: my favorite heretical UNIX programs
doublewide: true
---

I used [Gary Bernhardt's `selecta`](https://github.com/garybernhardt/selecta) script for a long time.  I couldn't summarize it better than the `README`:

> - Pass it a list of choices on stdin.
>
> - It will present a pretty standard fuzzy selection interface to the user (and block until they make a selection or kill it with ^C).
>
> - It will print the user's selection on stdout.
>
> For example, you can say:
>
>     cat $(ls *.txt | selecta)

Putting a user-interface interaction in the middles of shell pipelines breaks some fundamental assumptions of the UNIX-y small-scripts-composition world, even with `selecta` opening `/dev/tty` directly, so the pipelines of standard streams aren't broken.  But that impurity has so often been worthwhile for interactive scripts.

For example, I've used a script for years that basically boils down to:

1.  Clone a Git repo with my to-do lists if it's not cloned already.
2.  List all the list files in that repo and have me pick one.
3.  Run `$EDITOR` on that file.
4.  When `$EDITOR` quits, commit the changes and push them.

<details markdown="1">
<summary>Runnable Script Example</summary>

```shell
#!/bin/sh
set -e

repo=~/todo
if ! test -d "$repo"; then
  git clone "you@git.host.com:todo" "$repo"
fi
cd "$repo"

file="$(git ls-files | fzf --no-multi --reverse --bind enter:accept-or-print-query)"
$EDITOR "$file"

git add "$file"
git commit --allow-empty-message -m ''
git push
```
</details>

There are countless others.  A few that come to mind:

- Scripts help me add or edit entries into various personal wikis.
- Scripts to update my list of postal shipments when tracking numbers come in, ETAs get updated, or packages arrive.
- Scripts to help me file "turns", or revisions, of legal documents in my law practice.
- Scripts to help me upload files to cloud storage with [`rclone`](https://rclone.org/).
- Scripts to download and read PDFs from my personal library.
- Scripts to load and copy checklists for various tasks.
- Scripts to mark tasks off my to-do lists.

More recently, I've switched out `selecta` for [`gum`](https://github.com/charmbracelet/gum) and [`fzf`](https://github.com/junegunn/fzf), and even more recently to `fzf` at the terminal, with either `dmenu` or `rofi` in `dmenu`-mode for scripts invoked in a graphical environment.

The final move to `fzf` came from finding options that allow entering arbitrary input in addition to selecting an option from the list:

```shell
fzf --no-multi --reverse --bind enter:accept-or-print-query
```

That beat out my last lingering use of `gum filter`:

```shell
gum filter --width=0 --no-strict
```

This is just for the special case where you want to allow _both_ selection from the list _and_ free input.  By default, both `fzf` and `gum` expect a choice from the input, exiting non-zero if they don't get one.

By the by, I still use `gum` for other kinds of interactive input taking:

```shell
gum input --prompt="" --placeholder="" --value="" --width=0
```

```shell
gum confirm "$question"
```

Good tool.

On the GUI side, I've long used the [`dwm`](https://dwm.suckless.org/) tiling window manager with the [`dmenu`](https://tools.suckless.org/dmenu/) quick command runner.  Sometimes it's handy to run a script with a picker that way, but there's no displayed interactive terminal when doing so.  So scripts need to check whether they're hooked up to such a terminal, running `fzf` if they are and a graphical tool if they're not:

```shell
if ! test -t 0; then
  if command -v rofi >/dev/null; then
    picker="rofi -dmenu -theme arthur -dpi 1 -i"
  elif command -v dmenu >/dev/null; then
    picker="dmenu -i -l 10"
  else
    notify-send -u critical "Couldn't find rofi or demnu on PATH!"
    exit 1
  fi
else
  picker="fzf --no-multi --reverse"
fi
```
