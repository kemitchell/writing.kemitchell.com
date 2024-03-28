---
date: 2024-03-28T10:59:02-07:00
title: Pick-From-a-List Tools
description: my favorite heretical UNIX programs
tags:
- Linux
- Task Management
- Software
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

Putting a user-interface interaction in the middles of shell pipelines breaks some fundamental assumptions of the UNIX-y small-scripts-composition world, even with `selecta` opening `/dev/tty` directly, so the pipelines of standard streams aren't broken.  But that impurity has very often been worthwhile for interactive scripts I run many time a day.  Turning a required argument into an optional argument that the computer can help me fill out correctly lightens the burden on me as I invoke scripts.

For example, I've used a script for years that basically boils down to:

1.  Clone a Git repo with my to-do lists if it's not cloned already.
2.  Show the names of all its files and have me pick one.
3.  Run `$EDITOR` on that file.
4.  When `$EDITOR` quits, commit the changes and push them.

<details markdown="1">
<summary>Runnable Script Example</summary>

```shell
#!/bin/sh
set -e

# Clone the Git repo if it's not cloned already.
repo=~/todo
if ! test -d "$repo"; then
  git clone "you@git.host.com:todo" "$repo"
fi
cd "$repo"

# Pick a file and edit it.
file="$(git ls-files | fzf --no-multi --reverse --bind enter:accept-or-print-query)"
$EDITOR "$file"

# Commit and push.
git add "$file"
git commit --allow-empty-message -m ''
git push
```

Side Note: If you're not already [using Git commits with empty messages](/2020/11/03/Speedy-Git#empty-commit-messages) for personal organization, I'd strongly recommend you consider the possibilities.  I personally define a `git empty` alias in `~/.gitconfig` for `git commit --allow-empty-message -m ''`, and use it a lot.
</details>

Beyond to-do lists, I use pick-from-a-list in many other scripts.  Just a few that come to mind:

- Scripts help me add or edit entries into various personal wikis.
- Scripts to update my list of postal shipments when tracking numbers come in, ETAs get updated, or packages arrive.
- Scripts to help me file "turns", or revisions, of legal documents in my law practice.
- Scripts to help me upload files to cloud storage with [`rclone`](https://rclone.org/).
- Scripts to download and read PDFs from my personal library.
- Scripts to load and copy checklists for various tasks.
- Scripts to mark tasks off my to-do lists.

More recently, I've switched out `selecta` for [`gum`](https://github.com/charmbracelet/gum) and [`fzf`](https://github.com/junegunn/fzf), and even more recently just to `fzf` at the terminal, with either [`dmenu`](https://tools.suckless.org/dmenu/) or [`rofi`](https://github.com/davatorium/rofi) in `dmenu`-mode for scripts in a graphical environment.

The final move to `fzf` came from finding options that allow entering arbitrary input in addition to selecting an option from the list:

```shell
fzf \
  --no-multi \
  --reverse \
  --bind enter:accept-or-print-query
```

This basically means "pick a line from `stdin` or enter a new one", rather than just "pick a line from `stdin`".

I prefer `fzf`'s interface and the way it handles buffered input, so `fzf` with the `--bind` option beat out my last lingering use of `gum filter`:

```shell
gum filter \
  --no-strict \
  --width=0 # As wide as the terminal.
```

I still use `gum` for other kinds of interactive input taking:

```shell
gum input \
  --prompt="" \
  --placeholder="" \
  --value="" \
  --width=0 # As wide as the terminal.
```

Or to answer yes-or-no questions:

```shell
gum confirm "$question"
```

Good tool.

On the GUI side, I've long used the [`dwm`](https://dwm.suckless.org/) tiling window manager with `dmenu` globally bound to `Super+P` as quick command runner.  `dmenu` is, in essence, another pick-from-a-list tool, but one that displays lists graphically.

Sometimes it's handy to run _another_ script that uses a picker from `dmenu`, but there's no displayed interactive terminal when doing so.  So I've tweaked my scripts to check whether they're hooked up to a terminal, then run `fzf` if they are or a graphical picker if they're not:

```shell
have() {
  command -v "$1" >/dev/null
}

if [ -t 0 ]; then
  picker="fzf --no-multi --reverse"
else
  if have rofi; then
    picker="rofi -dmenu -theme arthur -dpi 1 -i"
  elif have dmenu; then
    picker="dmenu -i -l 10"
  else
    notify-send \
      -u critical \
      "Couldn't find rofi or demnu on PATH."
    exit 1
  fi
fi
```

`rofi` is a more broadly-scoped, richly configurable graphical pick-from-a-list tool that also offers a `dmenu` compatibility mode.  I like to use it with a theme that makes it look different from my `dmenu` UI for running commands.

Notice also the use of `notify-send`, from `libnotify` Arch or `libnotify-bin` Debian, to give feedback.  Again, when the script isn't connected to a terminal, we need a way to present messages in the graphical environment instead.

`rofi`'s display also makes it more ideal for tasks like inserting emoji:

```shell
#!/bin/sh
set -e

emoji="$(rofi -show emoji -dpi 1)"
# Copy to primary selection / clipboard.
printf "%s" "$emoji" \
  | xclip -in -selection primary

# Paste from primary selection
# into the active user interface.
sleep 0.1
xdotool key shift+Insert
```

