import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PaymentModModule } from '../payment-mod/payment-mod.module';
import { PicknpayService } from '../picknpay.service';
import { Router } from '@angular/router';
import { CartModModule } from '../cart-mod/cart-mod.module';
import { CustomerModule } from '../customer/customer.module';
import { ItemsModModule } from '../items-mod/items-mod.module';

@Component({
  selector: 'app-secure-pay',
  templateUrl: './secure-pay.component.html',
  styleUrls: ['./secure-pay.component.css']
})
export class SecurePayComponent implements OnInit {

  public securePay: PaymentModModule;
  public cart: CartModModule;
  public customer: CustomerModule;
  public items: ItemsModModule;
  totItems = 0;

  constructor(private _paymentService: PicknpayService, private router: Router) { }

  ngOnInit() {
    this._paymentService.getTempCart()
      .subscribe((res) => this.items  = JSON.parse(res["_body"]));
    this.customer = this._paymentService.getUser();

    this._paymentService.getPayments()
          .subscribe((res) => this.cart  = JSON.parse(res["_body"]));
    
    if (this.customer  == null || this._paymentService.getCartI() == null) {
      this.router.navigate(['/app-not-found']);
    }
  }

  payment = new FormGroup ({
    id: new FormControl(''),
    cardnum: new FormControl(''),
    cvv: new FormControl(''),
    exdate: new FormControl(''),
    name: new FormControl(''),
  })


  tempCart: any;

  savePayment() {
    let securePay = this.payment.value;    

    securePay.id = Object.keys(this.cart).length + 1;

    for (let i = 0; i < Object.keys(this.items).length; i++) {
      this.totItems = this.totItems + this.items[i].quantity;
    }

    this._paymentService.setTotItems(this.totItems);

    if (securePay.cvv != "" || securePay.cardnum != "" || securePay.exdate != "" || securePay.name != "")  {
      this.storeCart(securePay.id);
      this._paymentService.setPayment(securePay).subscribe((secPay) => {
        securePay = PaymentModModule,
        this.router.navigate(["/app-recipt"])
      }, (error) => { });
    }
  }

  storeCart(paymentId: number) {
    var ordNum = this._paymentService.getRef();

    if (Object.keys(this.items).length > 0) {
      for (let i = 0; i < Object.keys(this.items).length; i++) {
        this.tempCart = {date: Date(), 
                          quantity: this.items[i].quantity,
                          pid: paymentId,
                          cid: this.customer.id,
                          iid: this.items[i].id,
                          ordernum: ordNum};
        this._paymentService.saveCart(this.tempCart).subscribe((cart) => {
        }, (error) => { });
      }
    }
  }
}
