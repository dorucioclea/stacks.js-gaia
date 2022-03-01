//typescript
import { UserSession, AppConfig } from '@stacks/auth';
import { Storage } from '@stacks/storage';

/*
-----------------------------------------
 The GAIATOR by Trubit : The Reader
-----------------------------------------
 To do:
 1. ES6 Typescript proper config/setup.
 2. Function has to work asynchronously.
-----------------------------------------
*/
function readFile(aStorage: Storage, aFileName: string) {
  var fileContent = storage.getFile(aFileName);  //Promise? await? async?
  console.log('\n\n[inside readFile]=' + fileContent);
}

/*
 How to use function readFile()
*/
const privateKey = '2e0f1b1b5b2dd054fcc176d5b8e82e0425cec26e555d108298a7e16a8853e7a9'; //session appPrivateKey
const appConfig = new AppConfig(['store_write', 'publish_data'], 'trubit');
const aFileName = 'dart03/user_data_014.json';

// 1. Create a new app/user session
const userSession = new UserSession({ appConfig }); 

// 2. Set session private key
userSession.store.getSessionData().userData = <any> {appPrivateKey: privateKey,};

// 3. Instantiate and connect to Gaia hub
const storage = new Storage({ userSession });

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
