export async function putFileEncrypted({ aStorage, aFileName, aData }) {
    let fileUrl = await aStorage.putFile(aFileName, aData, {
        encrypt: true,
        dangerouslyIgnoreEtag: true,
    });
    return fileUrl;
}
export async function putFileEncryptedNot({ aStorage, aFileName, aData }) {
    let fileUrl = await aStorage.putFile(aFileName, aData, {
        encrypt: false,
        dangerouslyIgnoreEtag: true,
    });
    return fileUrl;
}
export async function readFile({ aStorage, aFileName }) {
    let fileContent = await aStorage.getFile(aFileName);
    return fileContent;
}
export async function getFileList({ aStorage }) {
    let files = Array();
    await aStorage.listFiles((filename) => {
        files.push(filename);
        return true;
    });
    return files;
}
export async function deleteFile({ aStorage, aFileName }) {
    await aStorage.deleteFile(aFileName);
    return true;
}
