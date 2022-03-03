# stacks.js-gaia
Gaia with Stacks.js (not micro-stacks)

--------------------------------------
 The GAIATORs by Trubit
--------------------------------------
  - The Creator
  - The Lister
  - The Reader
  - The Deletor
--------------------------------------

----------------------
 A GAIA File Example
----------------------

Complete URL:
https://gaia.blockstack.org/hub/19ipr3aK7BXxy3h4NfJxzoywxHqd8NhkYg/dart03/user_data_105.json

URL dissected:
https://gaia.blockstack.org/hub/     -> Gaia store
19ipr3aK7BXxy3h4NfJxzoywxHqd8NhkYg/  -> address derived from public key (in turn derived from private key)
dart03/user_data_105.json            -> file name

App Config Example
{
  "appConfig":{
    "appDomain":"trubit",
    "scopes":["store_write","publish_data"],
    "redirectPath":"",
    "manifestPath":"/manifest.json",
    "authenticatorURL":"https://browser.blockstack.org/auth"},
  "store":{
      "sessionData":{
          "version":"1.0.0",
          "userData":{
              "appPrivateKey":"2e0f1b1b5b2dd054fcc176d5b8e82e0425cec26e555d108298a7e16a8853e7a9",
              "hubUrl":"https://hub.blockstack.org",
              "gaiaHubConfig":{
                  "url_prefix":"https://gaia.blockstack.org/hub/",
                  "max_file_upload_size_megabytes":20,
                  "address":"19ipr3aK7BXxy3h4NfJxzoywxHqd8NhkYg",
                  "token":"v1:eyJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NksifQ.eyJnYWlhQ2hhbGxlbmdlIjoiW1wiZ2FpYWh1YlwiLFwiMFwiLFwic3RvcmFnZTIuYmxvY2tzdGFjay5vcmdcIixcImJsb2Nrc3RhY2tfc3RvcmFnZV9wbGVhc2Vfc2lnblwiXSIsImh1YlVybCI6Imh0dHBzOi8vaHViLmJsb2Nrc3RhY2sub3JnIiwiaXNzIjoiMDMyZDg2NGFmNGJhNDlhZGEyZTA0Yzg2MTRhYjY0N2NmYzVhOTMzODBiMTUzNWE4ODA4NWQ4MDgwMzljNGIwYjlkIiwic2FsdCI6Ijk3YjFjZTY0NDJhYTQ2MWRmYjkwNzJiMDhlYzJhOWQ4In0.fsrFjPUU-IZuLg6v-Li8wfovpmL48kaW4eX8okheU1nOHTmjtZ1O3c6GV9wI-pqr8LDnmilCVS0JcNniXCaoNg",
                  "server":"https://hub.blockstack.org"
              }
          },
          "etags":{
              "dart03/user_data_105.json":"0x8D9FCA22D180B5E"
          }
      }
  }
}
