//import { doSignaturesMatchPublicKeys } from '@stacks/auth';
//import { makeECPrivateKey } from '@stacks/encryption';
//import { decodeToken, TokenSigner } from 'jsontokens';
//import { decodeToken } from 'jsontokens';  //I NEED TO PEEK INTO THIS ONE. WHAT IS THIS?

//private keys generated makeECPrivateKey()
//2b904c7a48d28d742225d3129b0f434342d210c3280c1feb0cc2e5228af3ddbc
//57dfe28170df72627039d60add8cd74b29f9ba30e80a4d8149fabf2d4d2ebed1
//how do i get public keys of above private keys?  does it always follow that there is one?



import { makeECPrivateKey, publicKeyToAddress } from '@stacks/encryption';
import { SECP256K1Client } from 'jsontokens';

// makeECPrivateKey 
const privateKey = makeECPrivateKey();
const publicKey = SECP256K1Client.derivePublicKey(privateKey);
const address = publicKeyToAddress(publicKey);
console.log('\nprivateKey=' + privateKey);
console.log('\npublicKey=' + publicKey);
console.log('\naddress=' + address);

console.log(SECP256K1Client.derivePublicKey(privateKey));
console.log(SECP256K1Client.derivePublicKey(privateKey));
console.log(SECP256K1Client.derivePublicKey(privateKey));
console.log(publicKeyToAddress(publicKey));
console.log(publicKeyToAddress(publicKey));
console.log(publicKeyToAddress(publicKey));

/*
https://river.com/learn/terms/p/public-key/
Public keys and addresses are often conflated. 
An address is usually a hash of a public key, 
and at present, addresses, not public keys are 
used to directly receive bitcoin. An address 
is merely an abbreviation of a public key used 
for convenience and security; it is the public 
key that is used to verify the signature and 
thus allow the bitcoin to be spent.

Bitcoin wallets are used to generate and 
manage public keys. To do this, a wallet 
first derives a private key, a large random 
number. Next, the private key is used to 
derive the public key. Finally, the public 
key is hashed and a prefix is added, yielding
the address.
*/
/*
privateKey=723b344858d1daf02a00755d3ee7d58e5d36147e75efc52a2f20d412fad60389

publicKey=03dc345b14a61c7171b2f7761d6e8ce560e4aed978d66674e78612a26ca74bb2bc

address=1DR7CyM9E3MovWULvdwSEj5fxdQJc6T5mJ

storage=1DR7CyM9E3MovWULvdwSEj5fxdQJc6T5mJ --> AHA! FINALLY! It is the address from public key of a private key!


myData={"hello":"world","num":1}
[DEBUG] uploadToGaiaHub: uploading user_data_006.json to https://hub.blockstack.org
fileUrl=https://gaia.blockstack.org/hub/1DR7CyM9E3MovWULvdwSEj5fxdQJc6T5mJ/user_data_006.json
dartman@aMacBookhackMes-MacBook-Pro gaia_vanilla % 

/*
 @stacks/encryption

Encryption functions used by Stacks.js packages.

## Installation

```
npm install @stacks/encryption
```

### Encrypt and decrypt string
```typescript
import { encryptECIES, decryptECIES } from '@stacks/encryption';
import { Buffer } from '@stacks/common';

const privateKey = 'a5c61c6ca7b3e7e55edee68566aeab22e4da26baa285c7bd10e8d2218aa3b229';
const publicKey = '027d28f9951ce46538951e3697c62588a87f1f1f295de4a14fdd4c780fc52cfe69';

const testString = 'all work and no play makes jack a dull boy';

// Encrypt string with public key 
const cipherObj = await encryptECIES(publicKey, Buffer.from(testString), true);

// Decrypt the cipher with private key to get the message
const deciphered = await decryptECIES(privateKey, cipherObj)
console.log(deciphered);
```

### Sign content using ECDSA

```typescript
import { signECDSA, verifyECDSA } from '@stacks/encryption';

const privateKey = 'a5c61c6ca7b3e7e55edee68566aeab22e4da26baa285c7bd10e8d2218aa3b229';
const testString = 'all work and no play makes jack a dull boy'

const sigObj = await signECDSA(privateKey, testString)
// Verify content using ECDSA
const result = await verifyECDSA(testString, sigObj.publicKey, sigObj.signature);
console.log(result); // true
```
### EncryptMnemonic and decryptMnemonic

```typescript
import { encryptMnemonic, decryptMnemonic } from '@stacks/encryption';
import { Buffer } from '@stacks/common';

const rawPhrase = 'march eager husband pilot waste rely exclude taste '
   + 'twist donkey actress scene';
const rawPassword = 'rawPassword';
const mockSalt = Buffer.from('ff'.repeat(16), 'hex')

//Encrypt a raw mnemonic phrase to be password protected
const encoded = await encryptMnemonic(rawPhrase, rawPassword, { getRandomBytes: () => mockSalt });

//Decrypt an encrypted mnemonic phrase with a password 
const decoded = await decryptMnemonic(encoded.toString('hex'), rawPassword);

console.log(decoded);
```

### Make EC PrivateKey

```typescript
import { makeECPrivateKey, publicKeyToAddress } from '@stacks/encryption';
import { SECP256K1Client } from 'jsontokens';

// makeECPrivateKey 
const privateKey = makeECPrivateKey();
const publicKey = SECP256K1Client.derivePublicKey(privateKey);
const address = publicKeyToAddress(publicKey);
console.log(address);
```

*/