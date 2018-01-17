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
  parameter: string;
  customerList: Object[];
  isLogged = false;

  login() {
    this.httpService.login(this.user).subscribe(data => {
      if (data === 'Success') {
        this.isLogged = true;
      }
    });

  }

  search() {
    this.httpService.search(this.parameter).subscribe(data => this.customerList = data);
  }

  // getCustomer() {
  //   this.httpService.getById(140);
  // }


  constructor(@Inject('HttpInterface') private httpService: HttpInterface) {


    // console.log(`Base url: ${route.snapshot.data.env.baseUrl}`);
  }
}
