import {Component, Inject, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpService} from '../service/http.service';
import {HttpInterface} from '../service/http.interface';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  @Input() customer: Observable<any>;

  constructor(private route: ActivatedRoute,
              @Inject('HttpInterface') private httpService: HttpInterface,) {
  }

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.httpService.getById(id).subscribe(data => {
      this.customer = data.aaData[0];
      console.log(this.customer);
    });
    console.log(this.customer);
  }

  // goBack(): void {
  //   this.location.back();
  // }

}
