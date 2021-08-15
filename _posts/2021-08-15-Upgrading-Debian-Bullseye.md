---
title: Upgrading to Debian Bullseye
description: a couple hurdles jumped
date: 2021-08-15T20:54Z
tags:
- Linux
---

I updated my trusty parts-bin [T420s laptop](https://www.lenovo.com/us/en/laptops/thinkpad/t-series/t420s/) from Debian "Buster" to the new Debian "Bullseye" today.  It was the usual process of replacing codenames in `/etc/apt.sources.list` and `/etc/apt/sources.list.d/*`, `sudo apt update`, `sudo apt upgrade`, and `sudo apt full-upgrade`.  There were just a couple stumbles along the way:

## WiFi

[WICD](http://wicd.sourceforge.net/) stopped working between `sudo apt upgrade` and `sudo apt full-upgrade`.  Calls to `apt` started failing for lack of connectivity to the APT repos.  Running `wicd-curses`, as I usually would to reconnect, led to an error about `/usr/bin/python` being missing.  Running `wicd-curses` with the Python interpreter installed in my user directory yielded only more errors.

I overcame this by moving to [Intel's iNet Wireless Daemon](https://iwd.wiki.kernel.org/), which I'd planned to do anyway, since trying it on some [Arch](http://wicd.sourceforge.net/) installs.  I downloaded the `iwd` Bullseye `.deb` package to a USB drive with another machine, copied it over, installed offline with `sudo dpkg -i`, and enabled with `sudo systemctl enable iwd`.  Then I used `iwctl` to connect to house Wi-Fi---`station wlan0 connect "$SSID"` at the prompt---followed by `sudo dhclient wlan0` to get connected.  I eventually added an `/etc/iwd/main.conf` to enable automatic configuration:

```
[General]
EnableNetworkConfiguration=true

[Network]
EnableIPv6=true
NameResolvingService=systemd
```

## GStreamer Plugin Overwrite

I ran into some `sudo apt full-upgrade` errors with [GStreamer](https://gstreamer.freedesktop.org/) plugin packages trying to overwrite the same file.  `apt` prompted for `apt install --fix-broken` calls to repair the problem, but those simply repeated the error.  The solution turned out to be specifying a `dpkg` flag to `apt`: `sudo apt --fix-broken install -o Dpkg::Options::="--force-overwrite"` just clobbers through the conflict.  I'll see how that holds up in time.

## Overall

After almost twenty years running Debian, you expect quirks.

This wasn't so bad.
