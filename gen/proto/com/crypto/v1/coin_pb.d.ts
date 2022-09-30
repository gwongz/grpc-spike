// package: com.crypto.v1
// file: com/crypto/v1/coin.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Coin extends jspb.Message { 
    getNetwork(): string;
    setNetwork(value: string): Coin;
    getChain(): string;
    setChain(value: string): Coin;
    getAmount(): number;
    setAmount(value: number): Coin;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Coin.AsObject;
    static toObject(includeInstance: boolean, msg: Coin): Coin.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Coin, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Coin;
    static deserializeBinaryFromReader(message: Coin, reader: jspb.BinaryReader): Coin;
}

export namespace Coin {
    export type AsObject = {
        network: string,
        chain: string,
        amount: number,
    }
}
