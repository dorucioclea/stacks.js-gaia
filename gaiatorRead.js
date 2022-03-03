import { UserSession, AppConfig } from '@stacks/auth';
import { Storage } from '@stacks/storage';
async function readFile(aStorage, aFileName) {
    var fileContent = await aStorage.getFile(aFileName);
    return fileContent;
}
const privateKey = '2e0f1b1b5b2dd054fcc176d5b8e82e0425cec26e555d108298a7e16a8853e7a9';
const appConfig = new AppConfig(['store_write', 'publish_data'], 'trubit');
const aFileName = 'dart03/user_data_105.json';
const userSession = new UserSession({ appConfig });
userSession.store.getSessionData().userData = { appPrivateKey: privateKey, };
const storage = new Storage({ userSession });
var fileContent2 = await readFile(storage, aFileName);
console.log('\n[fileContent]=' + fileContent2);
console.log('\n' + JSON.stringify(userSession));
