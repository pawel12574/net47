import {Component, Inject} from '@angular/core';
import {Customer} from './model/customer';
import {Observable} from 'rxjs/Observable';
import {HttpInterface} from './service/http.interface';
import {User} from "./model/user";
import {delay, share} from "rxjs/operators";
import {of} from "rxjs/observable/of";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  customer: any = {};

  user = new User();
  isLogged;

  login() {
    this.httpService.login(this.user);
  }

  getCustomer() {
    this.httpService.getById(140);
  }

  getAsyncData() {
    // Fake Slow Async Data
    return of({
      firstName: 'Luke',
      lastName: 'Skywalker',
      age: 65,
      height: 172,
      mass: 77,
      homeworld: 'Tatooine'
    }).pipe(
      delay(2000)
    );
  }
  constructor(@Inject('HttpInterface') private httpService: HttpInterface) {


    // console.log(`Base url: ${route.snapshot.data.env.baseUrl}`);
  }
}
