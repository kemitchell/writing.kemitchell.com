---
title: 2020 Oakland Homeless Camp Fires
description: data from public records request
doublewide: true
tags:
- Homelessness
- Oakland
- Fire Safety
---

Oakland's Fire Department started recording homeless camp fires with their own, separate code almost two years ago.  Earlier this summer, I
filed a [public records request to the City of Oakland](https://oaklandca.nextrequest.com/requests/21-4820) for the data for 2020 and 2021 to date.  A couple hours' worth of analysis of the 2020 data:

The department recorded 597 homeless camp fires in 2020.

More fires happen in winter than summer:

<ul class="fourcolumns">
<li>January: <span class="worst">68</span></li>
<li>February: 51</li>
<li>March: 63</li>
<li>April: <span class="best">31</span></li>
<li>May: <span class="best">31</span></li>
<li>June: 42</li>
<li>July: 59</li>
<li>August: 45</li>
<li>September: 47</li>
<li>October: 43</li>
<li>November: 65</li>
<li>December: 52</li>
</ul>

Here's each fire mapped as a point:

<script src="https://embed.github.com/view/geojson/kemitchell/oakland-homeless-fire-data/main/2020.geojson"></script>

And here they are as crude polygons, approximating a heat map:

<script src="https://embed.github.com/view/geojson/kemitchell/oakland-homeless-fire-data/main/2020-heat.geojson"></script>

The raw data from the city lists streets addresses and intersections.  I geolocated first with [Geloky](https://geloky.com/), then by hand.

The main combined data file for 2020 is [here](https://github.com/kemitchell/oakland-homeless-fire-data/blob/main/2020.tsv).
