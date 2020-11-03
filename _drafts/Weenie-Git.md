---
title: Weenie Git for Text File Management
---

```
# ~/.gitconfig
# ...
[alias]
  empty = commit --allow-empty-message -m ''
  amend = commit --amend -C HEAD --allow-empty-message
  shallow = clone --depth 1
```

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

```
# ~/.vimrc
noremap <leader>c <Esc>:!git add -u && git commit --verbose <CR>
noremap <leader>C <Esc>:!git add -u && git commit --allow-empty-message --message "" <CR>
noremap <leader>p <Esc>:!git push <CR>
```

`git log -p`
