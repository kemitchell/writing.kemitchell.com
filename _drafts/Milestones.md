---
description: how to feel older all the time, automatically
tags:
- Software
---

Every once in a while, I find myself remembering that UNIX's first target deployment was a law office.  It's truly amazing how adaptable UNIX-style scripts and utilities are to bureaucracy, even personal bureaucracy.  Case in point: how I've started noting anniversaries of milestones in my life.

In a Git repository:

`data.tsv`:
```tsv
Date	Event	Silenced
2013-12-02	admitted to California Bar
2014-10-23	first post to /dev/lawyer
```

`schedule`:
```plain
1 week
2 weeks
3 weeks
1 month
6 weeks
2 months
3 months
6 months
9 months
1 year
2 years
3 years
4 years
5 years
6 years
7 years
8 years
9 years
10 years
12 years
15 years
20 years
25 years
30 years
```

`today`:
```shell
#!/bin/sh
set -e

header="t"
while read -r line; do
  if test "$header" = t; then
    header="f"
    continue
  fi
  silenced=$(echo "$line" | cut -f 3)
  if test -n "$silenced"; then
    continue
  fi
  date=$(echo "$line" | cut -f 1)
  event=$(echo "$line" | cut -f 2)
  while read -r offset; do
    calculated=$(date -d "-$offset" --iso-8601)
    if test "$date" = "$calculated"; then
      printf "%s\t%s\t%s\n" "$event" "$date" "$offset"
    fi
  done < schedule
done < data.tsv
```

`cronjob`:
```shell
set -e

tmp="$(mktemp -d)"
remove_tmp () {
  rm -rf "$tmp"
}
trap remove_tmp EXIT
git clone --depth=1 example.com:milestones "$tmp"
cd "$tmp"

if test -z "$(./today)"; then
echo "No milestones today."
else
msmtp --read-recipients <<MAIL
To: you@example.com
Subject: Milestones
Content-Type: text/html; charset=UTF-8

<style>
td, th {
  text-align: left;
  padding: 0.25rem 0.5rem;
}
</style>
$(./today | ./tsvtohtmltable)
MAIL
fi
```

`tsvtohtmltable`:
```ruby
#!/usr/bin/env ruby
# frozen_string_literal: true

require 'cgi'

delimeter = '\t'

# Parse all the rows.
entries = []
$stdin.each_line do |line|
  line.strip!
  next if line.empty?
  next if line.start_with?('#')

  entries << line.split(delimeter, -1).map { |x| x.nil? ? '' : x }
end

# Print rows.
$stdout.print('<table>')
entries.each do |entry|
  $stdout.print('<tr>')
  entry.each do |value|
    $stdout.print("<td>#{CGI.escapeHTML(value)}</td>")
  end
  $stdout.print('</tr>')
end
$stdout.print('</table>')
$stdout.print("\n")
```

Configure cron to run the script every day.
