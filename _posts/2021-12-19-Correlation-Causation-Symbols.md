---
date: 2021-12-19T11:40:24-08:00
title: Correlation and Causation Symbols
description: good shorthand against bad mental shortcuts
---

I accidentally did myself a very good turn when it comes to taking notes.  Using `x→y` for "x causes y" or "x implies y" but `x∝y` for "x correlates with y" or "x is proportional to y" helps remind me to [distinguish causation and correlation](https://en.wikipedia.org/wiki/Correlation_does_not_imply_causation).

<table>
<thead>
  <tr>
    <th>Symbol</th>
    <th>Unicode</th>
    <th>HTML Entity</th>
    <th>Vim Digraph</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th>→</th>
    <td><code>U+9192</code></td>
    <td><code>&amp;rarr;</code></td>
    <td><code>Ctrl+K -></code></td>
  </tr>
  <tr>
    <th>←</th>
    <td><code>U+2190</code></td>
    <td><code>&amp;larr;</code></td>
    <td><code>Ctrl+K <-</code></td>
  </tr>
  <tr>
    <th>∝</th>
    <td><code>U+221D</code></td>
    <td><code>&amp;prop;</code></td>
    <td><code>Ctrl+K 0(</code></td>
  </tr>
</tbody>
</table>

_Inverse_ correlations can also be expressed with &prop;, as correlations to the reciprocal: `x∝⅟y`, `x∝1/y`, or <code>x∝y<sup>-1</sup></code>.  The Unicode `⅟` is `U+215F`.  I don't think there's a default Vim digraph, but you could define one.

I recall using `∴` for _therefore_ and `∵` for _because_ in grade school.  I believe I saw those first in chemistry class.  The arrows used in computer science and formal logic eventually won out in my personal shorthand.

<table>
<thead>
  <tr>
    <th>Symbol</th>
    <th>Unicode</th>
    <th>HTML Entity</th>
    <th>Vim Digraph</th>
  </tr>
</thead>
<tbody>
  <tr>
    <th>∴</th>
    <td><code>U+2234</code></td>
    <td><code>&amp;therefore;</code></td>
    <td><code>Ctrl+K .:</code></td>
  </tr>
  <tr>
    <th>∵</th>
    <td><code>U+2235</code></td>
    <td><code>&amp;because;</code></td>
    <td><code>Ctrl+K :.</code></td>
  </tr>
</tbody>
</table>

It probably helps that legible lines are easier and faster to write by hand than dots.  And that the causal directions of `→` and `←` are obvious.
