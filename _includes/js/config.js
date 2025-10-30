var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

var siteConfig = {
  "version": 3,
  "pages": [
    {
      "id": "occurrenceSearch"
    },
    {
      "id": "collectionKey",
    },
    {
      "id": "institutionKey",
    },
    {
      "id": "institutionSearch"
    },
    {
      "id": "collectionSearch"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "OCCURRENCE",
    "INSTITUTION",
    "COLLECTION"
  ],
  "dataHeader": {
    "enableApiPopup": false,
    "enableInfoPopup": false
  },
  "theme": {
    "primary": themeStyle.colors.primary,
    "borderRadius": 3,
    "stickyOffset": "0px"
  },
  "maps": {
    "mapStyles": {
      "defaultProjection": "MERCATOR",
      "defaultMapStyle": "BRIGHT",
      "options": {
        "ARCTIC": [
          "NATURAL",
          "BRIGHT"
        ],
        "PLATE_CAREE": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ],
        "MERCATOR": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ],
        "ANTARCTIC": [
          "NATURAL",
          "BRIGHT",
          "DARK"
        ]
      }
    }
  },
  "languages": [
    {
      "code": "en",
      "localeCode": "en",
      "label": "English",
      "default": true,
      "textDirection": "ltr",
      "iso3LetterCode": "eng",
      "cmsLocale": "en-GB",
      "gbifOrgLocalePrefix": "",
      "mapTileLocale": "en"
    }
  ],
  "messages": {
    "en": {
      "catalogues.occurrences": "Specimens"
    }
  },
  "occurrenceSearch": {
    "scope": {
      "type": "and",
      "predicates": [
        {
          "type": "or",
          "predicates": [
            {
              "type": "isNotNull",
              "key": "institutionKey"
            },
            {
              "type": "isNotNull",
              "key": "collectionKey"
            }
          ]
        },
        {
          "type": "in",
          "key": "basisOfRecord",
          "values": [
            "PRESERVED_SPECIMEN",
            "FOSSIL_SPECIMEN",
            "MATERIAL_SAMPLE",
            "LIVING_SPECIMEN"
          ]
        },
        {
          "type": "equals",
          "key": "publishingCountry",
          "value": "US"
        }
      ]
    },
    "tabs": [
      "table",
      "gallery",
      "map",
      "dashboard",
      "download"
    ],
    "highlightedFilters": [
      "taxonKey",
      "verbatimScientificName",
      "institutionKey",
      "collectionKey",
      "catalogNumber",
      "recordedBy",
      "identifiedBy"
    ],
    "excludedFilters": [
      "occurrenceStatus",
      "networkKey",
      "hostingOrganizationKey",
      "protocol",
      "publishingCountry",
      "institutionCode",
      "collectionCode"
    ],
    "availableTableColumns": [
      "features",
      "institutionKey",
      "collectionKey",
      "catalogNumber",
      "country",
      "year",
      "recordedBy",
      "identifiedBy"
    ],
    
    "mapSettings": {
      "lat": 0,
      "lng": 0,
      "zoom": 0
    }
  },
  "collectionSearch": {
    "scope": {
      "displayOnNHCPortal": true,
      "country": "US"
    },
    "excludedFilters": [
      "countrySingleGrSciColl"
    ]
  },
  "institutionSearch": {
    "scope": {
      "displayOnNHCPortal": true,
      "country": "US"
    },
    "excludedFilters": [
      "country"
    ]
  },
  "datasetSearch": {},
  "publisherSearch": {},
  "literatureSearch": {}
};
