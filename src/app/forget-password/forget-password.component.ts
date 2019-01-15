import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PicknpayService } from '../picknpay.service';
import { Router } from '@angular/router';
import { CustomerModule } from '../customer/customer.module';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent implements OnInit {

  public cust: CustomerModule;

  constructor(private _pnpService: PicknpayService, private router: Router) { }

  ngOnInit() {
  }

  userData = new FormGroup({
    email: new FormControl('')
  })

  getPassword() {
    this._pnpService.rstPassword(this.userData.controls['email'].value)
      .subscribe(res => this.router.navigate(["/app-home"]));
  }
}
