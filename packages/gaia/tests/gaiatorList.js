import { UserSession, AppConfig } from '@stacks/auth';
import { Storage } from '@stacks/storage';
import { getFileList } from '../modules/gaiator';
const privateKey = '2e0f1b1b5b2dd054fcc176d5b8e82e0425cec26e555d108298a7e16a8853e7a9';
const appConfig = new AppConfig(['store_write', 'publish_data'], 'trubit');
const userSession = new UserSession({ appConfig });
userSession.store.getSessionData().userData = { appPrivateKey: privateKey, };
const storage = new Storage({ userSession });
console.log('\nGetting file list, hang tight...');
const fileList = await getFileList({ aStorage: storage });
console.log('\nfileList=' + fileList);
console.log('\n' + JSON.stringify(userSession));
