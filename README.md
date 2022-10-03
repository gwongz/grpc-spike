# gRPC and Node / Typescript spike

Sample repo to see how to:
- define and compile protos for Node 
- implement gRPC server
- implement gRPC client

## Prerequisites
- [Buf](https://docs.buf.build/introduction)
- [Protoc](https://grpc.io/docs/protoc-installation/)

```brew install protobuf```

If you run into errors, you might need to try:

```brew install protobuf@3``` 

See this [issue](https://github.com/protocolbuffers/protobuf-javascript/issues/127)

## Install
```npm install```

## Run
```npm run server```

```npm run client``` // in another terminal window

```npm run codegen```

## Suggestions for playing around
- Add a new proto, compile and see the generated output in gen/proto
- Add a new RPC method to the service, compile and see the output in gen/proto
- Implement the new RPC method in the server in src/server/index.ts and call it in src/client/index.ts


