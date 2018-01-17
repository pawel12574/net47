import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";
import {HttpInterface} from "./service/http.interface";
import {HttpService} from "./service/http.service";
import { CustomerComponent } from './customer/customer.component';
import {AppRoutingModule} from './app-routing-module';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: 'HttpInterface',
      useClass: HttpService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
