// package: services.coins.v1
// file: services/coins/v1/coin_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as com_crypto_v1_coin_pb from "../../../com/crypto/v1/coin_pb";

export class GetCoinRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): GetCoinRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCoinRequest.AsObject;
    static toObject(includeInstance: boolean, msg: GetCoinRequest): GetCoinRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCoinRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCoinRequest;
    static deserializeBinaryFromReader(message: GetCoinRequest, reader: jspb.BinaryReader): GetCoinRequest;
}

export namespace GetCoinRequest {
    export type AsObject = {
        id: string,
    }
}

export class GetCoinResponse extends jspb.Message { 

    hasCoin(): boolean;
    clearCoin(): void;
    getCoin(): com_crypto_v1_coin_pb.Coin | undefined;
    setCoin(value?: com_crypto_v1_coin_pb.Coin): GetCoinResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): GetCoinResponse.AsObject;
    static toObject(includeInstance: boolean, msg: GetCoinResponse): GetCoinResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: GetCoinResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): GetCoinResponse;
    static deserializeBinaryFromReader(message: GetCoinResponse, reader: jspb.BinaryReader): GetCoinResponse;
}

export namespace GetCoinResponse {
    export type AsObject = {
        coin?: com_crypto_v1_coin_pb.Coin.AsObject,
    }
}
