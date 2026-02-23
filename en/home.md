---
lang: en
lang-ref: home
layout: home
title: Integrated Digitized Biocollections (iDigBio)
description: Making data and images of millions of biological specimens available on the web.
background: "{{ site.data.images.GeckoTokay.src }}"
alt: "{{ site.data.images.GeckoTokay.alt }}"
ignoreThumbor: true
imageLicense: "{{ site.data.images.GeckoTokay.caption }}"
height: 70vh
cta:
  - text: Specimens
    href: /occurrence/search
    isPrimary: true # this will break as it is illegal yaml
  - text: Collections
    href: /collection/search
  - text: Institutions
    href: /institution/search
permalink: /
---

<!-- About iDigBio -->
<figure style="float: right; width: 50%; margin: 0 0 1em 1em; text-align: right;">
  <img src="{{ site.data.images.Template1600x800.src }}" alt="{{ site.data.images.Template1600x800.alt }}" style="width: 100%; height: auto;">
  <figcaption style="font-size: smaller; color: #555;">
    {{ site.data.images.Template1600x800.caption }}
  </figcaption>
</figure>
### The mission of iDigBio is to promote and catalyze digitization, mobilization, and use of data about biodiversity specimens through community capacity building, open data, and innovative uses of these data. We envision a world in which digitized biodiversity and extended specimen data underpin research, policy, and economic decision-making.


<!-- Original setup using sections from Drupal
{% include sections/about_idigbio.html %}
{% include sections/stats.html %}
{% include sections/collections_value.html %}
{% include sections/tiles_data_share_services.html %}
{% include sections/learn_participate.html %}
-->
