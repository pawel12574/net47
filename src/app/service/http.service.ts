import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Customer} from '../model/customer';
import {User} from '../model/user';
import {HttpInterface} from './http.interface';

@Injectable()
export class HttpService implements HttpInterface {

  constructor(private httpClient: HttpClient) {
  }

  result;
  body;

  login(credintials: User) {
    console.log(credintials);
    // let formData: FormData = new FormData();
    // formData.append('username', credintials.username);
    // formData.append('password', credintials.password);
    // let headers = new Headers();
    // headers.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
    this.body = 'username=' + credintials.username + '&password=' + credintials.password;
    return this.httpClient.post(`http://net47.tsunami.pl/login`, this.body,
      {
        headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8;'},
        responseType: 'text',
        withCredentials: true

      });
  }

  search(parameter: string) {
    this.body = 'term=' + parameter;
    return this.httpClient.post(`http://net47.tsunami.pl/customer/ajaxsearch`, this.body, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8;responseType: text'},
      withCredentials: true
    });
  }

  getById(customerId: number) {
    return this.httpClient.get(`http://net47.tsunami.pl/customer/loginpasswd?CustomerID=` + customerId, {
      withCredentials: true
    });

  }
}
