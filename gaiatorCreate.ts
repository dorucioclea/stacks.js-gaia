import { UserSession, AppConfig } from '@stacks/auth';
import { Storage } from '@stacks/storage';
import { putFileEncrypted, putFileEncryptedNot } from './gaiator.js';

/*
----------------------------------------------------------------------------
 The GAIATOR by Trubit : create an encrypted file and a not encrypted file
----------------------------------------------------------------------------
*/

// Constants for simulation.
const privateKey = '2e0f1b1b5b2dd054fcc176d5b8e82e0425cec26e555d108298a7e16a8853e7a9'; //session appPrivateKey
const appConfig = new AppConfig(['store_write', 'publish_data'], 'trubit');
const aFileEncrypted = 'dart03/user_data_105_encrypted.json';
const aFileEncryptedNot = 'dart03/user_data_105_encrypted_not.json';
const aData = JSON.stringify({'interest':'skiing', 'age': 22, 'gender': 'male'});

// 1. Create a new app/user session
const userSession = new UserSession({ appConfig }); 

// 2. Set session private key
userSession.store.getSessionData().userData = <any> {appPrivateKey: privateKey,};

// 3. Instantiate and connect to Gaia hub
const storage = new Storage({ userSession });

//4. Call putFileEncrypted
const urlFileEncrypted = await putFileEncrypted({aStorage: storage, aFileName: aFileEncrypted, aData: aData})
console.log('\n[urlFileEncrypted]=' + urlFileEncrypted);

//5. Call putFileEncrypted
const urlFileEncryptedNot = await putFileEncryptedNot({aStorage: storage, aFileName: aFileEncryptedNot, aData: aData})
console.log('\n[urlFileEncryptedNot]=' + urlFileEncryptedNot);

//6. Display session data, including app/user Gaia address.
console.log('\n' + JSON.stringify(userSession));

