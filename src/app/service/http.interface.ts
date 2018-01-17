import {Customer} from "../model/customer";
import {Observable} from "rxjs/Observable";
import {User} from "../model/user";

export interface HttpInterface {

  getById(customerId: number);
  search(parameter: string);
  login(user: User);
}
