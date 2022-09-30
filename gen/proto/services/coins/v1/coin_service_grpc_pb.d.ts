// package: services.coins.v1
// file: services/coins/v1/coin_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as services_coins_v1_coin_service_pb from "../../../services/coins/v1/coin_service_pb";
import * as com_crypto_v1_coin_pb from "../../../com/crypto/v1/coin_pb";

interface ICoinServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getCoin: ICoinServiceService_IGetCoin;
}

interface ICoinServiceService_IGetCoin extends grpc.MethodDefinition<services_coins_v1_coin_service_pb.GetCoinRequest, services_coins_v1_coin_service_pb.GetCoinResponse> {
    path: "/services.coins.v1.CoinService/GetCoin";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<services_coins_v1_coin_service_pb.GetCoinRequest>;
    requestDeserialize: grpc.deserialize<services_coins_v1_coin_service_pb.GetCoinRequest>;
    responseSerialize: grpc.serialize<services_coins_v1_coin_service_pb.GetCoinResponse>;
    responseDeserialize: grpc.deserialize<services_coins_v1_coin_service_pb.GetCoinResponse>;
}

export const CoinServiceService: ICoinServiceService;

export interface ICoinServiceServer extends grpc.UntypedServiceImplementation {
    getCoin: grpc.handleUnaryCall<services_coins_v1_coin_service_pb.GetCoinRequest, services_coins_v1_coin_service_pb.GetCoinResponse>;
}

export interface ICoinServiceClient {
    getCoin(request: services_coins_v1_coin_service_pb.GetCoinRequest, callback: (error: grpc.ServiceError | null, response: services_coins_v1_coin_service_pb.GetCoinResponse) => void): grpc.ClientUnaryCall;
    getCoin(request: services_coins_v1_coin_service_pb.GetCoinRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_coins_v1_coin_service_pb.GetCoinResponse) => void): grpc.ClientUnaryCall;
    getCoin(request: services_coins_v1_coin_service_pb.GetCoinRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_coins_v1_coin_service_pb.GetCoinResponse) => void): grpc.ClientUnaryCall;
}

export class CoinServiceClient extends grpc.Client implements ICoinServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getCoin(request: services_coins_v1_coin_service_pb.GetCoinRequest, callback: (error: grpc.ServiceError | null, response: services_coins_v1_coin_service_pb.GetCoinResponse) => void): grpc.ClientUnaryCall;
    public getCoin(request: services_coins_v1_coin_service_pb.GetCoinRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: services_coins_v1_coin_service_pb.GetCoinResponse) => void): grpc.ClientUnaryCall;
    public getCoin(request: services_coins_v1_coin_service_pb.GetCoinRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: services_coins_v1_coin_service_pb.GetCoinResponse) => void): grpc.ClientUnaryCall;
}
