import { UserSession, AppConfig } from '@stacks/auth';
import { Storage } from '@stacks/storage';
async function createFile(aStorage, aFileName, aData) {
    let fileUrl = await aStorage.putFile(aFileName, aData, {
        encrypt: true,
        dangerouslyIgnoreEtag: true,
    });
    return fileUrl;
}
const privateKey = '2e0f1b1b5b2dd054fcc176d5b8e82e0425cec26e555d108298a7e16a8853e7a9';
const appConfig = new AppConfig(['store_write', 'publish_data'], 'trubit');
const aFileName = 'dart03/user_data_105.json';
const aData = JSON.stringify({ 'interest': 'skiing', 'age': 22, 'gender': 'male' });
const userSession = new UserSession({ appConfig });
userSession.store.getSessionData().userData = { appPrivateKey: privateKey, };
const storage = new Storage({ userSession });
const newFileUrl = await createFile(storage, aFileName, aData);
console.log('\n[newFileUrl]=' + newFileUrl);
console.log('\n' + JSON.stringify(userSession));
