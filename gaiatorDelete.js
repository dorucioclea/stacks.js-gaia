import { UserSession, AppConfig } from '@stacks/auth';
import { Storage } from '@stacks/storage';
async function delFile(aStorage, aFileName) {
    await aStorage.deleteFile(aFileName);
    return true;
}
const privateKey = '2e0f1b1b5b2dd054fcc176d5b8e82e0425cec26e555d108298a7e16a8853e7a9';
const appConfig = new AppConfig(['store_write', 'publish_data'], 'trubit');
const aFileName = 'dart03/user_data_105.json';
const userSession = new UserSession({ appConfig });
userSession.store.getSessionData().userData = { appPrivateKey: privateKey, };
const storage = new Storage({ userSession });
console.log(await delFile(storage, aFileName));
console.log('\n' + JSON.stringify(userSession));
