import { UserSession, AppConfig } from '@stacks/auth';
import { Storage } from '@stacks/storage';

/*
--------------------------------------
 The GAIATOR by Trubit : The Deletor
--------------------------------------
To do : handle file does not exist, statusCode=404
*/

async function delFile(aStorage: Storage, aFileName: string) { 
  await aStorage.deleteFile(aFileName);
  return true;
}

/*
 How to use function createFile()
*/

// Constants for simulation.
const privateKey = '2e0f1b1b5b2dd054fcc176d5b8e82e0425cec26e555d108298a7e16a8853e7a9'; //session appPrivateKey
const appConfig = new AppConfig(['store_write', 'publish_data'], 'trubit');
const aFileName = 'dart03/user_data_105.json';

// 1. Create a new app/user session
const userSession = new UserSession({ appConfig }); 

// 2. Set session private key
userSession.store.getSessionData().userData = <any> {appPrivateKey: privateKey,};

// 3. Instantiate and connect to Gaia hub
const storage = new Storage({ userSession });

//4. Call the gaiaCreator. But async/await does not work yet.
console.log(await delFile(storage, aFileName));

//5. Display session data, including app/user Gaia address.
console.log('\n' + JSON.stringify(userSession));
