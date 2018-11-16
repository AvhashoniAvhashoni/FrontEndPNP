import { Component, OnInit } from '@angular/core';
import { PicknpayService } from '../picknpay.service';
import { CustomerModule } from '../customer/customer.module';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public cust: CustomerModule;
  constructor(private _pnpService: PicknpayService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers(){
    this.cust = this._pnpService.getUser();
  }

}