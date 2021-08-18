import { BIP32Interface } from "bip32";
import { ec as EC } from "elliptic";

export class KEYSTORE {
  static getAccount(node: BIP32Interface): string {
    const { privateKey } = node;
    const ec = new EC("secp256k1");
    const keyPair = ec.keyFromPrivate(privateKey as Buffer);
    return keyPair.getPublic().encode("hex", false); // .slice(2);
  }
  /*
  static signTx(node: BIP32Interface, rawTx: RawTx): SignedTx {
    // ...
  }
  */

  /*
  export signMessage(node: BIP32Interface, msg: string) {
    // ...
  }
  */
}
