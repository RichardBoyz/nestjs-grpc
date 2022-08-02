import {
  Body,
  Controller,
  Get,
  Header,
  OnModuleInit,
  Param,
  Post,
} from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { AppService } from './app.service';
import { EGrpcService } from './grpc/grpc.interface';
import { microserviceOptions } from './grpc/grpc.options';
import { CreateUserRequest } from './user/create-user-request.dto';

@Controller()
// implements OnModuleInit
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Client(microserviceOptions)
  // private client: ClientGrpc;

  // private grpcService: EGrpcService;

  // onModuleInit() {
  //   this.grpcService = this.client.getService<EGrpcService>('Rpc');
  // }

  @Get()
  // @Header('Content-Type', 'text/html')
  getHello() {
    return this.appService.getHello();
  }

  // @Get(':id')
  // getUser(@Param('id') name: string) {
  //   console.log(name);
  //   return this.grpcService.getUser({ name });
  // }

  // @Post()
  // createUser(@Body() createUserRequest: CreateUserRequest) {
  //   console.log(`${createUserRequest} backend`);
  //   return this.grpcService.addUser(createUserRequest);
  //   // this.appService.createUser(createUserRequest);
  // }
}
