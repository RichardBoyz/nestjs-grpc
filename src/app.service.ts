import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserRequest } from './user/create-user-request.dto';
import { CreateUserEvent } from './user/create-user.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor(
    @Inject('COMMUNICATION') private readonly communicationClient: ClientProxy,
  ) {}
  getHello(): { name: string } {
    return { name: 'asdad' };
  }

  createUser(createUserRequest: CreateUserRequest) {
    this.users.push(createUserRequest);
    // this.communicationClient.emit(
    //   'user_created',
    //   new CreateUserEvent(createUserRequest.email),
    // );
  }
}
