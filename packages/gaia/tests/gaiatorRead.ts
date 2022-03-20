import { UserSession, AppConfig } from '@stacks/auth';
import { Storage } from '@stacks/storage';
import { readFile } from '../modules/gaiator';

/*
-----------------------------------------
 The GAIATOR by Trubit : The Reader
-----------------------------------------
/*
 How to use function readFile()
*/
const privateKey = '2e0f1b1b5b2dd054fcc176d5b8e82e0425cec26e555d108298a7e16a8853e7a9'; //session appPrivateKey
const appConfig = new AppConfig(['store_write', 'publish_data'], 'trubit');
const aFileName = 'dart03/user_data_105.json';

// 1. Create a new app/user session
const userSession = new UserSession({ appConfig }); 

// 2. Set session private key
userSession.store.getSessionData().userData = <any> {appPrivateKey: privateKey,};

// 3. Instantiate and connect to Gaia hub
const storage = new Storage({ userSession });

//4. Call function readFile() 
var fileContent2 = await readFile({ aStorage: storage, aFileName: aFileName });
console.log('\n[fileContent]=' + fileContent2);

//5. Display session data, including app/user Gaia address.
console.log('\n' + JSON.stringify(userSession));

