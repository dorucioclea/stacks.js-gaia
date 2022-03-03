import { UserSession, AppConfig } from '@stacks/auth';
import { Storage } from '@stacks/storage';

/*
--------------------------------------
 The GAIATOR by Trubit : The Creator
--------------------------------------
*/

async function createFile(aStorage: Storage, aFileName: string, aData: string) { 
  let fileUrl = await aStorage.putFile(aFileName, aData, {      
    encrypt: true,
    dangerouslyIgnoreEtag: true,  //overwrite file if it exists
  });
  return fileUrl;
}

/*
 How to use function createFile()
*/

// Constants for simulation.
const privateKey = '2e0f1b1b5b2dd054fcc176d5b8e82e0425cec26e555d108298a7e16a8853e7a9'; //session appPrivateKey
const appConfig = new AppConfig(['store_write', 'publish_data'], 'trubit');
const aFileName = 'dart03/user_data_105.json';
const aData = JSON.stringify({'interest':'skiing', 'age': 22, 'gender': 'male'});

// 1. Create a new app/user session
const userSession = new UserSession({ appConfig }); 

// 2. Set session private key
userSession.store.getSessionData().userData = <any> {appPrivateKey: privateKey,};

// 3. Instantiate and connect to Gaia hub
const storage = new Storage({ userSession });

//4. Call the gaiaCreator. But async/await does not work yet.
const newFileUrl = await createFile(storage, aFileName, aData);
console.log('\n[newFileUrl]=' + newFileUrl);

//5. Display session data, including app/user Gaia address.
console.log('\n' + JSON.stringify(userSession));

