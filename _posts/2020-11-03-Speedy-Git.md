---
title: Speedier Git for Text File Tracking
description: streamlining for small, fast commits to personal records
date: Tue 03 Nov 2020 04:28:30 PM PST
tags:
- Software
---

[Git](https://git-scm.com/), the ubiquitous system for tracking changes to computer software source code, works great for tracking changes to other kinds of plain-text files, too.  I use it constantly for everything from billing entries in my law practice to project notes, contract templates, to-do lists, address books, and financial records, across multiple devices, web apps, and backup systems.  It works great as an immutable, append-only, highly scriptable log of changes to my files.

A few tricks make that use case much more pleasant.

## Empty Commit Messages

When working with others, and especially when making sprawling, complex changes across many source code files, thoughtful commit messages help a ton.  But the cost-benefit of drafting commit messages often falls flat when editing text alone.  If you correct "there" to "their" in one text file, it's more work to type out "Fixed a typo" as a commit message than it is to make the change in the first place.  And there's not much benefit to writing a summary of what will be immediately clear from a diff via `git log -p --word-diff`, `git show $COMMIT`, or the like.  Especially if you only check your Git history every once in a while.

Fortunately, it's possible to make commits to Git repositories without any commit message at all.  The key is the `--allow-empty-message` flag.  To avoid typing that over and over, add a few aliases to `$HOME/.gitconfig`:

```
# ~/.gitconfig
[alias]
  empty = commit --allow-empty-message -m ''
  amend = commit --amend -C HEAD --allow-empty-message
```

Now you can run `git empty` whenever you'd otherwise run `git commit`.  Git won't open your editor or ask you for a commit message.  It will create your commit without one, but include all the other usual metadata, like committer, author, date, and prior commit hash.  To amend a commit with no commit message, just run `git amend`.

I do most of my plain-text editing in Vim, so it's handy to set up some keyboard shortcuts there, too:

```
# ~/.vimrc
noremap <leader>c <Esc>:!git add -u && git commit --verbose <CR><CR>
noremap <leader>C <Esc>:!git add -u && git commit --allow-empty-message --message "" <CR><CR>
noremap <leader>p <Esc>:!git push <CR><CR>
```

Vim will run these commands in Vim's working directory, usually the current directory of the shell where you started `vim`.  My `<leader>` key is `,` (comma).  So typing `,u` stages all changed files and opens up an editor for a commit message.  Typing `,U` just commits, without any message.  Typing `,p` pushes the repo to its origin.

In practice, I often use a short `save` script to combine these operations.  Add this to `$HOME/bin/save` or another directory on your `$PATH`, then make it executable with `chmod +x`.

```bash
#/bin/bash
set -e
if [ -z ".git" ]; then
  echo "No Git repository." >/dev/stderr
  exit 1
fi
git add -u >/dev/null
git empty --quiet
git push origin --quiet
```

Once `save` is on `$PATH`, you can map a combination to run it in Vim, too:

```
# ~/.vimrc
noremap <leader>s <Esc>:!save<CR><CR>
```

## Self-Hosting

GitHub and GitLab are swell, but it's always fun showing people just how much faster `git push` over SSH can be to a $5 virtual Linux box.com.  Even on low-grade WiFi, it can feel almost instant.

If you're nervous about hosting important work yourself, or want to leverage the reliability or redundancy of another Git host, fear not.  It's perfectly possible to `git push` to a fast private server that mirrors to GitHub or GitLab in turn.  I configure servers to do this by generating an SSH key for them, adding to my account on the hosting service, and setting up oft-run cron jobs to `git push --mirror` via `crontab -e`.  You can make the server you push to fast, and mirror from there to other hosts, asynchronously.

## Shallow Cloning

Recent versions of Git can clone just the latest commits in a repository, rather than full commit history.  The result is a "shallow clone".  Shallow cloning completes faster, reduces space on disk, and helps discourage messing with committed history.  It's easy with another alias:

```
# ~/.gitconfig
[alias]
  shallow = clone --depth 1
```

`git shallow git.example.com:repo` works from there.  If you run `git log` in the resulting repo, you'll see just one commit, even if the origin repository has thousands.  `git push` will still work fine.

One of my most-used scripts leverages this technique to clone a number of repos I use every day in my law practice:

```zsh
#!/bin/zsh
cd "$HOME" || exit
# Compile a newline-delimeted list of repos
# that need to be cloned.
missing=""
while read -r repo; do
  if [ ! -d "$repo" ]; then
    if [ -z "$missing" ]; then
      missing="$repo"
    else
      missing="$missing\n$repo"
    fi
  fi
done <<EOS
bills
notes
journal
todo
EOS

# Exit if there are no repos missing.
if [ -z "$missing" ]; then
  exit 0
fi

# Shallow clone missing repos in parallel.
echo "$missing" | parallel --bar --retry-failed git clone --quiet --depth 1 git.example.com:{} &
```

A number of these repos serve essentially as plain text databases for other scripts.  For example, I use scripts to list and create to-do items.  These scripts start off by making sure the repo has been cloned, then create and push commits for any changes they make to the data.
