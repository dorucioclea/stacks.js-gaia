"use strict";
export const __esModule = true;
//typescript
import { AppConfig, UserSession } from "@stacks/auth";
import { Storage } from "@stacks/storage";
/*
--------------------------------------
 The GAIATOR by Trubit : The Creator
 --------------------------------------
 To do:
 1. ES6 Typescript proper config/setup.
 2. Function has to work asynchronously.
--------------------------------------
*/
function createFile(aStorage, aFileName, aData) {
    var fileUrl = aStorage.putFile(aFileName, aData, {
        encrypt: true,
        dangerouslyIgnoreEtag: true
    });
    console.log('\n\n[fileUrl]=' + fileUrl);
}
/*
 How to use function createFile()
*/
// Constants for simulation.
var privateKey = '2e0f1b1b5b2dd054fcc176d5b8e82e0425cec26e555d108298a7e16a8853e7a9'; //session appPrivateKey
var appConfig = new AppConfig(['store_write', 'publish_data'], 'trubit');
var aFileName = 'dart03/user_data_105.json';
var aData = JSON.stringify({ 'interest': 'skiing', 'age': 22, 'gender': 'male' });
// 1. Create a new app/user session
var userSession = new UserSession({ appConfig: appConfig });
// 2. Set session private key
userSession.store.getSessionData().userData = { appPrivateKey: privateKey };
// 3. Instantiate and connect to Gaia hub
var storage = new Storage({ userSession: userSession });
//4. Call the gaiaCreator. But async/await does not work yet.
var fileUrl = createFile(storage, aFileName, aData);
console.log('\n\n[fileUrl]=' + fileUrl);
//----------------------------------------------------
// This works, same code as the createFile() function.
var fileUrl2 = await storage.putFile((aFileName + '2'), aData, {
    encrypt: true,
    dangerouslyIgnoreEtag: true
});
console.log('\n\n[fileUrl2]=' + fileUrl2);
//----------------------------------------------------
// Display session data, including app/user Gaia address.
console.log('\n\n[usersession]=' + JSON.stringify(userSession));
