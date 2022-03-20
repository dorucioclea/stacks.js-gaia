import { readFileSync } from 'fs';
import { UserSession, AppConfig } from '@stacks/auth';
import { Storage } from '@stacks/storage';
//import TOML from '@ltd/j-toml';
import { putFileEncrypted, putFileEncryptedNot } from './gaiator.js';

/*
----------------------------------------------------------------------------
Create customer data:
1. Input JSON file : customerFile
2. Output GAIA files : fileEncrypted, fileUnencrypted
----------------------------------------------------------------------------
*/

// Constants for simulating a user session
const privateKey = '2e0f1b1b5b2dd054fcc176d5b8e82e0425cec26e555d108298a7e16a8853e7a9';  //session appPrivateKey
const appConfig = new AppConfig(['store_write', 'publish_data'], 'trubit');
const userSession = new UserSession({ appConfig });                                     // create a new app/user session
userSession.store.getSessionData().userData = <any> {appPrivateKey: privateKey,};       // set session private key

// Target (output) Gaia files
const fileEncrypted   = 'customer_data/sample_01_encrypted.json';
const fileUnencrypted = 'customer_data/sample_01_unencrypted.json';

// Source JSON input file
const customerFile = "../../data/customer/data/customer_data_sample_03.json";

//TBD - Get input/output filenames from TOML config file
//const customerFile = readFileSync('./data_config.toml');
//const rootTable = (TOML.parse(customerFile)).toString() ;
//const customerFileX = (rootTable.path).toString;
//console.log(customerFileX);

//Read customer file into buffer
const customerData = readFileSync(customerFile, "utf8");       //set buffer to utf8

// Instantiate a Gaia Storage and connect to Gaia hub
const storage = new Storage({ userSession });  

// Create unencrypted Gaia file - call gaiator putFileUnencrypted
const urlFileEncrypted = await putFileEncrypted({aStorage: storage, aFileName: fileEncrypted, aData: customerData})
console.log('\n[urlFileEncrypted]=' + urlFileEncrypted);  // newly created Gaia file url

// Create encrypted Gaia file - call gaiator putFileEncrypted
const urlFileEncryptedNot = await putFileEncryptedNot({aStorage: storage, aFileName: fileUnencrypted, aData: customerData})
console.log('\n[urlFileEncryptedNot]=' + urlFileEncryptedNot);  // newly created Gaia file url
