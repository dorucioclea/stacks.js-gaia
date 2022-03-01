"use strict";
export const __esModule = true;
//typescript
import { AppConfig, UserSession } from "@stacks/auth";
import { Storage } from "@stacks/storage";
/*
-----------------------------------------
 The GAIATOR by Trubit : The Reader
-----------------------------------------
 To do:
 1. ES6 Typescript proper config/setup.
 2. Function has to work asynchronously.
-----------------------------------------
*/
function readFile(aStorage, aFileName) {
    var fileContent = storage.getFile(aFileName); //Promise? await? async?
    console.log('\n\n[inside readFile]=' + fileContent);
}
/*
 How to use function readFile()
*/
var privateKey = '2e0f1b1b5b2dd054fcc176d5b8e82e0425cec26e555d108298a7e16a8853e7a9'; //session appPrivateKey
var appConfig = new AppConfig(['store_write', 'publish_data'], 'trubit');
var aFileName = 'dart03/user_data_014.json';
// 1. Create a new app/user session
var userSession = new UserSession({ appConfig: appConfig });
// 2. Set session private key
userSession.store.getSessionData().userData = { appPrivateKey: privateKey };
// 3. Instantiate and connect to Gaia hub
var storage = new Storage({ userSession: userSession });
//4. Call the gaiaReader. But async/await does not work yet.
var fileContent = await readFile(storage, aFileName);
console.log('\n\n[fileContent]=' + fileContent2);
//----------------------------------------------------
// This works, same code as the readFile() function.
var fileContent2 = await storage.getFile(aFileName);
console.log('\n\n[fileContent2]=' + fileContent2);
//----------------------------------------------------
// Display session data, including app/user Gaia address.
console.log('\n\n[usersession]=' + JSON.stringify(userSession));
