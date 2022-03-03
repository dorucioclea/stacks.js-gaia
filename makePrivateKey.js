import { makeECPrivateKey, publicKeyToAddress } from '@stacks/encryption';
import { SECP256K1Client } from 'jsontokens';

// makeECPrivateKey 
const privateKey = makeECPrivateKey();
const publicKey = SECP256K1Client.derivePublicKey(privateKey);
const address = publicKeyToAddress(publicKey);
console.log('\nprivateKey=' + privateKey);
console.log('\npublicKey=' + publicKey);
console.log('\naddress=' + address);


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
