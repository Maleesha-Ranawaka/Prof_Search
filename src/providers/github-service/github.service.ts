// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';


import { User} from '../../models/user.interface';
import { USER_LIST} from '../../mocks/user.mocks';
/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {
//public http: HttpClient
  constructor() {
    console.log('Hello GithubServiceProvider');
  }
  result :string;
  /*
    Finding the username from within USER_LIST, equal to the Username passed in.
    Returning the results as an Observable.
  */
  mockGetUserInformation(username: string): Observable<User> {
    //console.log(Observable.of(USER_LIST.filter(user => user.name == username)[0]));
    return Observable.of(USER_LIST.filter(user => user.name == username)[0]);
  }

}
