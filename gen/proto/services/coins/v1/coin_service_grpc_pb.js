// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var services_coins_v1_coin_service_pb = require('../../../services/coins/v1/coin_service_pb.js');
var com_crypto_v1_coin_pb = require('../../../com/crypto/v1/coin_pb.js');

function serialize_services_coins_v1_GetCoinRequest(arg) {
  if (!(arg instanceof services_coins_v1_coin_service_pb.GetCoinRequest)) {
    throw new Error('Expected argument of type services.coins.v1.GetCoinRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_coins_v1_GetCoinRequest(buffer_arg) {
  return services_coins_v1_coin_service_pb.GetCoinRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_coins_v1_GetCoinResponse(arg) {
  if (!(arg instanceof services_coins_v1_coin_service_pb.GetCoinResponse)) {
    throw new Error('Expected argument of type services.coins.v1.GetCoinResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_coins_v1_GetCoinResponse(buffer_arg) {
  return services_coins_v1_coin_service_pb.GetCoinResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CoinServiceService = exports.CoinServiceService = {
  getCoin: {
    path: '/services.coins.v1.CoinService/GetCoin',
    requestStream: false,
    responseStream: false,
    requestType: services_coins_v1_coin_service_pb.GetCoinRequest,
    responseType: services_coins_v1_coin_service_pb.GetCoinResponse,
    requestSerialize: serialize_services_coins_v1_GetCoinRequest,
    requestDeserialize: deserialize_services_coins_v1_GetCoinRequest,
    responseSerialize: serialize_services_coins_v1_GetCoinResponse,
    responseDeserialize: deserialize_services_coins_v1_GetCoinResponse,
  },
};

exports.CoinServiceClient = grpc.makeGenericClientConstructor(CoinServiceService);
