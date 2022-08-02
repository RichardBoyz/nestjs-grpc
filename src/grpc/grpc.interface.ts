import { Observable } from 'rxjs';

export interface EGrpcService {
  addUser(userData: createUserModel): Observable<any>;
  getUser(userData: getUserModel): Observable<any>;
}

interface createUserModel {
  name: string;
  age: number;
}

interface getUserModel {
  name: string;
}
