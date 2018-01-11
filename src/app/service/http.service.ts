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
result
  getById(customerId: number) {
     this.httpClient.get(`http://net47.tsunami.pl/customer/loginpasswd?CustomerID=` + customerId, {
       withCredentials: true
     }).subscribe(data => this.result = data,(err: HttpErrorResponse) => {
       if (err.error instanceof Error) {
         // A client-side or network error occurred. Handle it accordingly.
         console.log('An error occurred:', err.error.message);
       } else {
         // The backend returned an unsuccessful response code.
         // The response body may contain clues as to what went wrong,
         console.log(`Backend returned code ${err.status}, body was: ${err.error}`);
       }
     });
     console.log(this.result);
  }

  login(credintials: User) {
    console.log(credintials);
    // let formData: FormData = new FormData();
    // formData.append('username', credintials.username);
    // formData.append('password', credintials.password);
    // let headers = new Headers();
    // headers.append('Access-Control-Allow-Headers', 'Access-Control-Allow-Origin');
    const body = 'username=' + credintials.username + '&password=' + credintials.password;
    this.httpClient.post(`http://net47.tsunami.pl/login`, body, {
      headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8;responseType: text'},
      withCredentials: true
    }).subscribe(data => console.log(data));
  }

}
