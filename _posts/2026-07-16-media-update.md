---
title:  "URGENT: ACT NOW to ensure your images and other media are not lost forever!"
date:   2026-03-04 15:00:00 +0500
categories: ["Media", "Images", "Portal"]
lang: en
lang-ref: media-update
background: "{{ site.data.images.Lego404.src }}"
alt: "{{ site.data.images.Lego404.alt }}"
imageLicense: "{{ site.data.images.Lego404.caption }}"
---
iDigBio is permanently shutting down its servers at the University of Florida in August. **All images and media will be permanently deleted. Hence, access to all media and image files currently visible in the [iDigBio Portal](https://portal.idigbio.org/) will terminate on 31 August 2026.**

## Here is what you must do to preserve your images:
1. If your collection records contain links to media/images that are physically stored on iDigBio's servers and those media/images are not moved to another storage resource, **they will be permanently deleted and lost forever**.
2. If your images or other media have been moved to another storage resource but the links/URIs in your specimen records are not updated to the new location, **the images/media will become inaccessible to GBIF and other aggregators**.
3. If your media/images have been moved to another storage resource, the record links/URIs have been updated, but the modified/updated records have not been republished to GBIF and other aggregators, **your images/media will not be accessible**.
4. **If your media/images have been moved to another storage resource, the media record links/URIs have been updated, and the modified/updated records have been republished to GBIF or another aggregator, then your media/images will be accessible as usual. THIS IS THE ONLY WAY TO ENSURE CONTINUED ACCESS TO YOUR MEDIA/IMAGES.**

## What if my images are served in a Symbiota portal?
The Symbiota Support Hub (SSH) team at the University of Kansas (KU) is aware that some active Symbiota portals contain primary media/images that are stored on and/or linked to iDigBio servers. The SSH team will be making every effort over the coming weeks to permanently transfer these media/images to KU infrastructure and update linkages as needed to ensure their long-term accessibility through the Symbiota portals and other aggregators downstream.

### _**&rarr; You must take action now to ensure that your media/image files are not permanently deleted and remain accessible via other aggregators! iDigBio cannot perform these tasks for you! &larr;**_

## What if I have questions?
See the FAQ below or contact Cat Chapman, our Biodiversity Informatics Manager: cchapman@floridamuseum.ufl.edu

---
---
## Frequently Asked Questions

### What is the issue?
Media record URI values and/or image links that include iDigBio in the path will become inaccessible when our servers are shut down at the end of August 2026. Moreover, any media/image files that are physically stored on iDigBio's servers will be permanently deleted and lost forever when our servers are shut down at the end of August 2026. This means that GBIF and other aggregators may be unable to retrieve/display your media/images when accessing records.
 
### Why is this happening?
iDigBio is beginning to wind down its operations as it prepares to enter its final no-cost-extension year. iDigBio storage was never meant to be permanent or archival in nature. Instead, it provided a _temporary_ solution for media/image storage and access while data providers implemented permanent resources.
 
### How do I know if my media/images are affected?
If your data _**are not**_ published on GBIF, then you must search on your own within your collections management system. This would be an excellent time and opportunity to get your data published on GBIF: https://www.gbif.org/become-a-publisher
 
If your data _**are**_ published on GBIF, then you can use the GBIF API to quickly check for references to **api.idigbio.org** or **s.idigbio.org** within your records:
1. As an example, let's assume we want to find records for the Florida Museum. First, we find the collection's ID by searching https://www.gbif.org/publisher/search?q=Florida+Museum, then clicking into the collection page, and then copying the ID from the address bar: **8483a1f0-1032-11db-ae00-b8a03c50a862**
2. Next, we search for occurrence records that contain **api.idigbio.org** or **s.idigbio.org** using the publisher ID from above: https://api.gbif.org/v1/occurrence/search?q=api.idigbio.org&publishingOrg=8483a1f0-1032-11db-ae00-b8a03c50a862 **and** https://api.gbif.org/v1/occurrence/search?q=s.idigbio.org&publishingOrg=8483a1f0-1032-11db-ae00-b8a03c50a862
   * If the Count returns 0, then we should be good.
   * However, if the Count returns a number, then this suggests the number of records that may be affected. We can see the metadata for the affected records in the Results section.
3. You can repeat the above steps for a specific dataset, if needed. For example, the Florida Museum's Lepidoptera Collection dataset ID is f427964f-3b6f-43a3-8639-18005ae6e4bc, so we can search this dataset as follows: https://api.gbif.org/v1/occurrence/search?q=s.idigbio.org&datasetKey=f427964f-3b6f-43a3-8639-18005ae6e4bc
4. VERIFY your results using your collections management system or IPT because false positives can occur in the above searches.
5. **Once you have identified the affected records, move the media/images to permanent storage if needed, update the records in your collections management system or IPT, and then republish them to aggregators.**
 
### What are the consequences of action or inaction on my part?
1. If your collection records contain links to media/images that are physically stored on iDigBio's servers and those media/images are not moved to another storage resource, **they will be permanently deleted and lost forever**.
2. If your media/images have been moved to another storage resource but the links/URIs on records were not updated to the new location, **they will become inaccessible** because GBIF and other aggregators will be unable to retrieve/display the media/images when accessing records.
3. If your media/images have been moved to another storage resource, the record links/URIs have been updated, but the modified/updated records have not bee republished to GBIF or another aggregator, **they will become inaccessible** because it will not be possible to retrieve the media/images when accessing records from GBIF.
4. **If your media/images have been moved to another storage resource, the media record links/URIs have been updated, and the modified/updated records have been republished to GBIF or another aggregator, then the media/images can be accessed as usual. THIS IS THE ONLY WAY TO ENSURE CONTINUED ACCESS.**

### What if I have additional questions?
Please contact Cat Chapman, our Biodiversity Informatics Manager, with any additional questions: cchapman@floridamuseum.ufl.edu 
