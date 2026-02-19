---
lang-ref: home
layout: home
title: Integrated Digitized Biocollections
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
  - text: Institutions
    href: /institution/search
permalink: /
---

{% include sections/about_idigbio.html %}

{% include sections/stats.html %}

{% include sections/collections_value.html %}

{% include sections/tiles_data_share_services.html %}

{% include sections/learn_participate.html %}
