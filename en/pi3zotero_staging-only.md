---
layout: default
title: PI3 Zotero Library
description: This is a test page for using scripts to display a collection from a Zotero library for the PI3 project.
lang: en
lang-ref: PI3Zotero
---

# Overview
This is a test page for using scripts to display a collection from a Zotero library for the PI3 project.

# Publications in PI3 Annual Reports
<!-- Container where your Zotero citations will appear -->
<div id="zotero-bibliography">
  <p class="zotero-loading">Loading library collections...</p>
</div>

<!-- Basic CSS to match style (Adjust as needed) -->
<style>
  #zotero-bibliography {
    font-family: inherit;
    line-height: 1.6;
  }
  .csl-entry {
    margin-bottom: 1.2em;
    padding-left: 1.5em;
    text-indent: -1.5em; /* Hanging indent style */
  }
  .zotero-loading {
    font-style: italic;
    color: #666;
  }
</style>

<script>
document.addEventListener("DOMContentLoaded", function() {
  // --- CONFIGURATION ---
  // If using a personal library, use 'users'. If using a group library, use 'groups'.
  const libraryType = 'groups'; 
  const libraryId = '5937243'; // Replace with your Zotero User ID or Group ID
  const collectionKey = 'IPMN4UHC'; // Replace with your Zotero Collection Key
  
  // Choose your citation style (e.g., 'apa', 'modern-language-association', 'chicago-author-date')
  const style = 'apa'; 
  
  // Construct the API endpoint URL
  const url = `https://api.zotero.org/${libraryType}/${libraryId}/collections/${collectionKey}/items?format=bib&style=${style}&linkwrap=1`;

  // Fetch the data from Zotero
  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text(); // Zotero returns raw HTML when using format=bib
    })
    .then(htmlData => {
      const container = document.getElementById('zotero-bibliography');
      if (htmlData.trim() === "") {
        container.innerHTML = "<p>No public items found in this collection.</p>";
      } else {
        container.innerHTML = htmlData;
      }
    })
    .catch(error => {
      console.error('Error fetching Zotero library:', error);
      document.getElementById('zotero-bibliography').innerHTML = 
        "<p>Error loading bibliography items. Please check back later.</p>";
    });
});
</script>
