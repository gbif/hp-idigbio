---
lang: en
lang-ref: home
layout: home
preTitle: Digitizing the past and present for the future
title: Integrated Digitized Biocollections (iDigBio)
description: |
    <div class="mt-6">
      <form action="/occurrence/search" type="get">
        <div class="field" style="display: flex;">
          <input type="text" placeholder="Full text search of occurrence records" name="q" class="input" />
          <button type="submit" class="button is-primary ml-4">Search</button>
        </div>
      </form>
    </div>
background: "{{ site.data.images.GeckoTokay.src }}"
alt: "{{ site.data.images.GeckoTokay.alt }}"
ignoreThumbor: true
imageLicense: "{{ site.data.images.GeckoTokay.caption }}"
height: 65vh
cta:
#  - text: Specimens
#    href: /occurrence/search
#    isPrimary: true # this will break as it is illegal yaml
#  - text: Collections
#    href: /collection/search
#  - text: Institutions
#    href: /institution/search
permalink: /
composition:
  - type: heroImage # the block type
  - data: home.stats
    type: stats
  # - type: pageMarkdown # there is currently no text on the page so just ignore this part
  - type: split
    data: home.about
  - type: split
    data: home.explorer
  - type: latestPosts
    data: we_do_not_want_any_header # weird hack as the block layout looks for a data element and falls back to the page if none is present
---

<!-- initial markdown home page structure
<figure style="float: right; width: 35%; margin: 1em 1em 1em 1em; text-align: right;">
  <img src="{{ site.data.images.FishImaging.src }}" alt="{{ site.data.images.FishImaging.alt }}" style="width: 100%; height: auto;">
  <figcaption style="font-size: smaller; color: #555;">
    {{ site.data.images.FishImaging.caption }}
  </figcaption>
</figure>
<span style="font-size: larger;">iDigBio is an <a href="https://www.gbif.org/participant/375">Other Associate Participant Node</a> and <a href="https://www.gbif.org/publisher/a86e9e36-12ec-49a4-a94c-c0c981fffb71">Data Publisher</a> within the <a href="https://www.gbif.org/the-gbif-network">GBIF Network</a>. We promote and catalyze digitization, mobilization, and use of data about biodiversity specimens through community capacity building, open data, and innovative uses of these data. We envision a world in which digitized biodiversity and extended specimen data underpin research, policy, and economic decision-making.</span>
[Learn More](/en/about)
 -->

<!-- Initial setup using sections from Drupal
{% include sections/about_idigbio.html %}
{% include sections/stats.html %}
{% include sections/collections_value.html %}
{% include sections/tiles_data_share_services.html %}
{% include sections/learn_participate.html %}
-->
