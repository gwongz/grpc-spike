import {
  Server,
  ServerCredentials,
  ServerUnaryCall,
  sendUnaryData,
} from '@grpc/grpc-js';

import { Coin } from '../../gen/proto/com/crypto/v1/coin_pb';
import { GetCoinRequest, GetCoinResponse } from '../../gen/proto/services/coins/v1/coin_service_pb';
import { CoinServiceService } from '../../gen/proto/services/coins/v1/coin_service_grpc_pb';

// implement handler for rpc GetCoin
const getCoin = (
  call: ServerUnaryCall<GetCoinRequest, GetCoinResponse>,
  callback: sendUnaryData<GetCoinResponse>
) => {

  const response = new GetCoinResponse();
  const c = new Coin();
  c.setNetwork('mainnet').setChain('ethereum').setAmount(100);
  response.setCoin(c);
  console.info(`Received GetCoinRequest with id ${call.request.getId()}`);

  callback(null, response);
};



const server = new Server();

// add service and bind it to handler
server.addService(CoinServiceService, { getCoin });
server.bindAsync('0.0.0.0:4001', ServerCredentials.createInsecure(), () => {
  server.start();
  
  console.log('server is running on 0.0.0.0.:4001');
});
