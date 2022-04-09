---
date: 2022-04-08T12:00:14-07:00
title: HTML Scripting Tools
description: a few free packages I've come to use
doublewide: true
tags:
- Programming
---

I wrote a couple scripts this week that got me thinking about all the programs I've found over the years for working with HTML documents on the command line.  Each heading below is the name of the relevant Debian package, which you can install on Debian (and Ubuntu) systems with `sudo apt install $name`.

## libxml2-utils

Here's a snippet from a script that checks the website of the City of Oakland and sends me an e-mail if they've posted a new homeless encampment services schedule:

```sh
url=$(curl --silent -L "https://www.oaklandca.gov/resources/homeless-encampment-cleanup-schedule" | xmllint --html --nowarning --xpath 'string(//a[@aria-label="Access Homeless Encampment Clean Up Schedule"]/@href)' - 2>/dev/null)
```

`curl` fetches the webpage.  `xmllint` has an `--xpath` flag that allows extracting specific content.  Its `--html` flag allows it to parse HTML, even fairly "dirty" HTML, rather than strict XML.  By common convention, `-` as the input path means `/dev/stdin`.

XPath is one of those arcane standard syntaxes that only starts to look normal when you've seen too much of it.  We can read this particular one as "give the string value of the `href` attribute of the `a` element with `aria-label` attribute equal to `Access Homeless Encampment Clean Up Schedule`".  If you right-click the button on the [the source of the City of Oakland webapge](https://www.oaklandca.gov/resources/homeless-encampment-cleanup-schedule) and choose "Inspect", or view the page's source, you'll see they helpfully set Aria attributes to meet government accessibility requirements.

The Chrome and Firefox webpage inspector features also allow searching by XPath.  I often draft my XPaths in the inspector, interactively, and then copy into a script.

## html-xml-utils

Here's a snippet from a script I use to look up words in Russian.  It combines results from two websites, [gramota.ru](https://gramota.ru), which has the latest revision of Kuznetsov's _Big Explanatory Dictionary_, and [Russian Wiktionary](https://ru.wiktionary.org), which has all word forms, with [phonological stress](https://en.wikipedia.org/wiki/Stress_(linguistics)), according to Zaliznyak's morphological dictionary, and a lot more:

```sh
{
# gramota.ru
curl -L -s "http://www.gramota.ru/slovari/dic/?word=$word&all=x" \
  | hxclean \
  | hxextract '.block-content' - \
  | iconv -f cp1251 -t utf8 \
  | sed 's!<span class="accent">\([^<]\+\)</span>!\1\&#x0301;!g' \
  | hxclean \
  | hxremove "script, form"

echo "<hr>"

# Wiktionary
curl -L -s "https://ru.wiktionary.org/wiki/$word" \
  | hxclean \
  | hxextract '.mw-parser-output' - \
  | hxclean \
  | hxremove '.clear, .gap-saver, .toc'
} >> "$tmp"
```

The `hx-` tools all come from the `html-xml-utils` package.  `hxclean` cleans up malformed HTML pages, which are very common.  `hxextract` pulls out particular elements by name or CSS class.  Note that it expects a file path input, where `-` denotes `/dev/stdin`.  `hxremove` removes elements by CSS selector.

`iconv` is often necessary with Russian-language websites written in `cp1251`, the old Windows character encoding for Russian, rather than `utf8`.

If you're scratching your head about that `sed` call: gramota.ru wraps stressed vowels in `<span class="accent">` tags, which are then styled with red text.  That `sed` call replaces them with Unicode combining accent characters.

## lynx

The first part of the dictionary lookup script above compiles an HTML page with snippets from gramota.ru and Wiktionary.  The script then displays that file in the terminal:

```sh
lynx -width=60 -dump "$tmp" | less
```

`lynx` is actually a full-featured, interactive terminal web browser.  Here I'm using the `-dump` flag, so it just displays the HTML file on `/dev/stdout` and quits.  The default display is a bit wide for my taste in terminal size, so `-width=60` tells it to keep to sixty columns.  Dictionary lookups don't tend to fit on one screen, so I pipe to `less` as pager.

## tidy

How about writing HTML?  Here's a `formathtml` script I use to fix up and indent HTML written or edited by hand:

```sh
#!/bin/sh
exec tidy \
  -quiet \
  -indent \
  -utf8 \
  --indent-spaces 2 \
  --wrap 0 \
  --tidy-mark no \
  --show-info no \
  --show-warnings no \
  --show-errors 0
```

In Vim, I bind this to `<leader>f`:

```vimscript
augroup html
  autocmd!
  " ...snip...
  autocmd FileType html noremap <buffer> <leader>f <Esc>mq:%!formathtml<CR>`q
augroup END

autocmd BufNewFile,BufRead *.html set filetype=html
```

When I'm done hacking up an HTML file, I can hit `<leader>f` and have the buffer formatted for me.

## Update: pup

Thanks to [Anton Semjonov](https://semjonov.de/), today I learned that Debian repositories now distribute Eric Chiang's [`pup`](https://github.com/EricChiang/pup) in binary form, so Debian-based distro users can install with `sudo apt install pup`.  I've also used `pup` for many scripts, and expect that many folks would find it easier to work with than the `hx-` tools.

```bash
$ pup -h
Usage
    pup [flags] [selectors] [optional display function]
# ...
```

I hesitated to recommend `pup` in this post if installing `pup` meant installing a Go language build chain.  But that's not longer necessary, at least on Debian-based systems.
