var siteTheme = gbifReactComponents.themeBuilder.extend({
  baseTheme: 'light', extendWith: {
    primary: themeStyle.colors.primary
  }
});

const iDigBioNetworkKey = '68e8e67a-43e6-44a3-8817-dc0e6b70f973';

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
    },
    {
      "id": "literatureSearch"
    },
    {
      "id": "publisherSearch"
    }
  ],
  "disableInlineTableFilterButtons": false,
  "availableCatalogues": [
    "OCCURRENCE",
    "INSTITUTION",
    "COLLECTION",
    "LITERATURE",
    "PUBLISHER"
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
      "type": "equals",
      "key": "networkKey",
      "value": iDigBioNetworkKey
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
      "machineTagNamespace": "iDigBio.org"
    },
    "excludedFilters": [
      "countrySingleGrSciColl"
    ]
  },
  "institutionSearch": {
    "scope": {
      "displayOnNHCPortal": true,
      "machineTagNamespace": "iDigBio.org"
    },
    "excludedFilters": [
      "country"
    ]
  },
  "datasetSearch": {},
  "publisherSearch": {
        "scope": {
      "type": "equals",
      "key": "networkKey",
      "value": iDigBioNetworkKey
    }
  },
  "literatureSearch": {
    "scope": {
      "type": "equals",
      "key": "gbifNetworkKey",
      "value": iDigBioNetworkKey
    }
  }
};
