//typescript
import { UserSession, AppConfig } from '@stacks/auth';
import { Storage } from '@stacks/storage';

/*
-----------------------------------------
 The GAIATOR by Trubit : The Lister
-----------------------------------------
To do:
 1. ES6 Typescript proper config/setup.
 2. Function has to work asynchronously.
-----------------------------------------
*/
function getFileList(aStorage: Storage) {
  const files: Promise<string | undefined | ArrayBuffer | null>[] = [];
  aStorage.listFiles((filename: string) => {
    files.push(filename);
    console.log(filename);  // until callback/async/await works, for now display each file name.
    return true;            // return true to continue iterating, until end of list.
  });
  return files;             // return array of file names. (but does not work yet)
}

/*
 How to use function getFileList()
*/
const privateKey = '2e0f1b1b5b2dd054fcc176d5b8e82e0425cec26e555d108298a7e16a8853e7a9'; //session appPrivateKey
const appConfig = new AppConfig(['store_write', 'publish_data'], 'trubit');

// 1. Create a new app/user session
const userSession = new UserSession({ appConfig }); 

// 2. Set session private key
userSession.store.getSessionData().userData = <any> {appPrivateKey: privateKey,};

// 3. Instantiate and connect to Gaia hub
const storage = new Storage({ userSession });

//4. Call the gaiaLister. But async/await does not work yet.
const fileList = await getFileList(storage);
console.log(fileList);

// Display session data, including app/user Gaia address.
console.log('\n\n' + userSession.store.getSessionData());
console.log('\n\n' + JSON.stringify(userSession));
