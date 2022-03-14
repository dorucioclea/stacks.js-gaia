import { UserSession, AppConfig } from '@stacks/auth';
import { Storage } from '@stacks/storage';
import { getFileList } from './gaiator.js';

/*
-----------------------------------------
 The GAIATOR by Trubit : The Lister
-----------------------------------------
*/

const privateKey = '2e0f1b1b5b2dd054fcc176d5b8e82e0425cec26e555d108298a7e16a8853e7a9'; //session appPrivateKey
const appConfig = new AppConfig(['store_write', 'publish_data'], 'trubit');

// 1. Create a new app/user session
const userSession = new UserSession({ appConfig }); 

// 2. Set session private key
userSession.store.getSessionData().userData = <any> {appPrivateKey: privateKey,};

// 3. Instantiate and connect to Gaia hub
const storage = new Storage({ userSession });

//4. Call the gaiaLister passing storage
console.log('\nGetting file list, hang tight...');
const fileList = await getFileList({aStorage: storage});  //function return includes a Promise object. Need to handle it somehow.
console.log('\nfileList=' + fileList);

//5. Display session data, including app/user Gaia address.
console.log('\n' + JSON.stringify(userSession));

