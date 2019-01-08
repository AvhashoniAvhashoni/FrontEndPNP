import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PaymentModModule } from '../payment-mod/payment-mod.module';
import { PicknpayService } from '../picknpay.service';
import { Router } from '@angular/router';
import { CartModModule } from '../cart-mod/cart-mod.module';

@Component({
  selector: 'app-secure-pay',
  templateUrl: './secure-pay.component.html',
  styleUrls: ['./secure-pay.component.css']
})
export class SecurePayComponent implements OnInit {

  public securePay: PaymentModModule;
  public cart: CartModModule;
  constructor(private _paymentService: PicknpayService, private router: Router) { }

  ngOnInit() {
  }

  payment = new FormGroup ({
    id: new FormControl(''),
    cardnum: new FormControl(''),
    cvv: new FormControl(''),
    exdate: new FormControl(''),
    name: new FormControl(''),
  })

  savePayment() {
    let securePay = this.payment.value;
    if (securePay.cvv != "" || securePay.cardnum != "" || securePay.exdate != "" || securePay.name != ""){
      console.log(securePay);
      
      this._paymentService.setPayment(securePay).subscribe((secPay) => {
        securePay = PaymentModModule;
      }, (error) => { });
    }
  }
}
