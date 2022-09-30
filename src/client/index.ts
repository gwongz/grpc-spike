import { credentials } from '@grpc/grpc-js';
import { GetCoinRequest } from '../../gen/proto/services/coins/v1/coin_service_pb';
import { CoinServiceClient } from '../../gen/proto/services/coins/v1/coin_service_grpc_pb';

const client = new CoinServiceClient('localhost:4001', credentials.createInsecure());

const request = new GetCoinRequest();
request.setId('1');

client.getCoin(request, (error, response) => {
  if (error)  {
    console.error(error);
    process.exit(1);
  }
  const coin = response.getCoin();
  if (coin) {
    console.info(`Got the coin whose network is ${coin.getNetwork()} and chain is ${coin.getChain()} and amount is ${coin.getAmount()}`);
  } else {
    console.info('server did not return a coin')
  }
});
