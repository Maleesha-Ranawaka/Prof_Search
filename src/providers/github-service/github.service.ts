import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { User} from '../../models/user.interface'
/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  constructor(public http: HttpClient) {
    console.log('Hello GithubServiceProvider Provider');
  }

}
