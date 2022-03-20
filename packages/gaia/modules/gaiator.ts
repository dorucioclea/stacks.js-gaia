/*
+-----------------------------------------------------------------------------+
| The GAIATOR by Trubit - a Storage class utility                             |
+-----------------------------------------------------------------------------+
| Functions:                                                                  |
| 1. Create a Gaia file.                                                      |
| 2. Read a Gaia file.                                                        |
| 3. Delete a Gaia file.                                                      |
| 4. Get a list of files.                                                     |
+-----------------------------------------------------------------------------+  
*/

import { Storage } from '@stacks/storage';

/*
+-----------------------------------------------------------------------------+
| putFileEncrypt(), putFileEncryptNot()                                   |
|  - if new file, creates file then store data.                               |
|  - if existing file, overwrites data.                                       |
|  - payload accepts a Storage instance                                       |
|  - returns file url                                                         |
+-----------------------------------------------------------------------------+  
*/
export async function putFileEncrypted({ aStorage, aFileName, aData }: { aStorage: Storage; aFileName: string; aData: string; }) {
  let fileUrl = await aStorage.putFile(aFileName, aData, {
    encrypt: true,                  // encrypt
    dangerouslyIgnoreEtag: true,    // overwrite file if it exists
  });
  return fileUrl;
}

export async function putFileEncryptedNot({ aStorage, aFileName, aData }: { aStorage: Storage; aFileName: string; aData: string; }) {
  let fileUrl = await aStorage.putFile(aFileName, aData, {
    encrypt: false,                  // do not encrypt
    dangerouslyIgnoreEtag: true,     // overwrite file if it exists
  });
  return fileUrl;
}


/*
+-----------------------------------------------------------------------------+
| readFile()                                                                  |
|  - payload accepts a Storage instance and filename to read                  |
|  - returns file content                                                     |
|                                                                             |
| To do : handle file not found, statusCode=404                               |
+-----------------------------------------------------------------------------+  
*/
export async function readFile({ aStorage, aFileName }: { aStorage: Storage; aFileName: string; }) {
  let fileContent = await aStorage.getFile(aFileName);
  return fileContent;
}


/*
+-----------------------------------------------------------------------------+
| getFileList()                                                               |
|  - payload accepts a Storage instance                                       |
|  - returns list of files                                                    |
|                                                                             |
| To do : remove/prevent Promise object from return result                    | 
+-----------------------------------------------------------------------------+  
*/
export async function getFileList( {aStorage }: { aStorage: Storage; }) {
  let files = Array();
  await aStorage.listFiles((filename: string) => {
    files.push(filename);
    return true;            // return true to continue iterating, until end of list.
  });
  return files;             // return array of file names
}


/*
+-----------------------------------------------------------------------------+
| deleteFile()                                                                |
|  - payload accepts a Storage instance and file to delete                    |
|  - returns true if successful delete                                        |
|                                                                             |
| To do : handle file does not exist, statusCode=404                          | 
+-----------------------------------------------------------------------------+  
*/
export async function deleteFile({ aStorage, aFileName }: { aStorage: Storage; aFileName: string; }) {
  await aStorage.deleteFile(aFileName);
  return true;
}