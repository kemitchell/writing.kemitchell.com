---
title: Speedy Git for Text File Management
tags:
- Software
---

[Git](https://git-scm.com/), the ubiquitous system from tracking changes to computer software source code, works great for tracking changes to other kinds of plain-text files, like notes, lists, and documents, too.  I use it constantly for everything from billing entries in my law practice to project notes, contract templates, to-do lists, address books, and financial records.  Occasionally, it's handy to be able to dig up when, exactly, I made a change to a particular file, such as when I marked a to-do item off a list.  But the main benefit is saving and backing up directories of text files across multiple computers and devices with widely available, scriptable tools.

Some aspects of Git's development-focused standard workflow can be streamlined away for document management.  When working with others, and especially when making sprawling, complex changes across many source code files, thoughtful commit messages can be essential.  But the cost-benefit of drafting them often falls flat when working on text alone.  There's no reason to write a summary for what will be immediately clear from a diff in `git log -p --word-diff`, `git show $COMMIT`, or the like.  If you correct "there" to "their" in `notes.txt`, it's more work to type out "Fixed a type" as commit message than it is to make the change in the first place.

Fortunately, it's possible to use Git without commit messages.  There are command-line flags for that.  To make it easy, add a few aliases to your `$HOME/.gitconfig`:

```
# ~/.gitconfig
[alias]
  empty = commit --allow-empty-message -m ''
  amend = commit --amend -C HEAD --allow-empty-message
```

Now you can run `git empty` whenever you'd otherwise run `git commit`.  To amend your last message-less commit, just run `git amend`.  Git won't open your editor or ask you for a commit message.  It will create and amend your commit without one.

I do most of my plain-text editing in Vim, so it's handy to set up some shortcuts there, too:

```vim
# ~/.vimrc
noremap <leader>c <Esc>:!git add -u && git commit --verbose <CR><CR>
noremap <leader>C <Esc>:!git add -u && git commit --allow-empty-message --message "" <CR><CR>
noremap <leader>p <Esc>:!git push <CR><CR>
```

My `<leader>` key is `,`.  So typing `,u` stages all changed files and opens up an editor for a commit message.  Typing `,U` just commits, without any message.  Typing `,p` pushes the repo to its origin.

In practice, I often use a short shell script to combine these operations.  Add this to `$HOME/bin/save` or another directory on your `$PATH`.  Make sure to `chmod +x` it.

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

Once it's on `$PATH`, you can map a combination to run this in Vim, too:

```vim
# ~/.vimrc
noremap <leader>s <Esc>:!save<CR><CR>
```

There are a few more things you can do to speed things up further.

The first is saving your work to Git remotes on your own servers.  GitHub and GitLab are swell, but it's always fun showing people just how much faster `git push` over SSH can be to a $5 a month virtual Linux box than to github.com.  Folks who've never self-hosted a repository often have no idea how fast Git is designed to be.  And it's perfectly possible to `git push` to a fast private server that backs up or even mirrors to GitHub or GitLab on a regular schedule via  `crontab -e`.  Make the part that you interact with fast.

Second, with recent versions of Git, we can clone just the latest commits in our repositories, rather than their full histories.  This makes cloning faster, reduces space on disk, and helps discourage messing with committed history.  It's easy with another alias:

```
# ~/.gitconfig
[alias]
  shallow = clone --depth 1
```

`git shallow git.example.com:repo` works from there.  If you run `git log` in the resulting repo, you'll see just one commit, even if the origin repository has thousands.  `git push` will still work fine.

One of my most-used scripts leverages this technique to clone a number of repos I use in my law practice:

```zsh
#!/bin/zsh
cd "$HOME" || exit
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

if [ -z "$missing" ]; then
  exit 0
fi

echo "$missing" | parallel --bar --retry-failed git clone --quiet --depth 1 git.example.com:{} &
```

This will ensure that all the listed repositories get cloned if they haven't already, and do the cloning in parallel.
