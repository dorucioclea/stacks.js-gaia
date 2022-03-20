import { Storage } from '@stacks/storage';
export declare function putFileEncrypted({ aStorage, aFileName, aData }: {
    aStorage: Storage;
    aFileName: string;
    aData: string;
}): Promise<string>;
export declare function putFileEncryptedNot({ aStorage, aFileName, aData }: {
    aStorage: Storage;
    aFileName: string;
    aData: string;
}): Promise<string>;
export declare function readFile({ aStorage, aFileName }: {
    aStorage: Storage;
    aFileName: string;
}): Promise<string | ArrayBuffer | null>;
export declare function getFileList({ aStorage }: {
    aStorage: Storage;
}): Promise<any[]>;
export declare function deleteFile({ aStorage, aFileName }: {
    aStorage: Storage;
    aFileName: string;
}): Promise<boolean>;
