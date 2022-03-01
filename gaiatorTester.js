"use strict";
export const __esModule = true;
//typescript
import { AppConfig, UserSession } from "@stacks/auth";
import { Storage } from "@stacks/storage";
/*
-----------------------
 The GAIATOR by Trubit
-----------------------
*/
function getFileList(aStorage) {
    var files = [];
    aStorage.listFiles(function (filename) {
        files.push(filename);
        console.log(filename);
        return true; // return true to continue iterating, until end of list.
    });
    return files;
}
var privateKey = '2e0f1b1b5b2dd054fcc176d5b8e82e0425cec26e555d108298a7e16a8853e7a9'; //session appPrivateKey
var appConfig = new AppConfig(['store_write', 'publish_data'], 'trubit');
// 1. Create a new session for app
var userSession = new UserSession({ appConfig: appConfig });
// 2. Set session private key
userSession.store.getSessionData().userData = { appPrivateKey: privateKey };
// 3. Instantiate and connect to Gaia hub
var storage = new Storage({ userSession: userSession });
//4. Call the gaiaLister
var fileList = await getFileList(storage);
// Display session data
console.log('\n\n' + userSession.store.getSessionData());
console.log('\n\n' + JSON.stringify(userSession));
// Display Gaia folder address
//console.log('[Gaia folder]=' + await storage.getGaiaAddress(userSession.appConfig.appDomain));
// Display file list
console.log(fileList);
