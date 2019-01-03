import { Component, OnInit } from '@angular/core';
import { PicknpayService } from '../picknpay.service';
import { ItemsModModule } from '../items-mod/items-mod.module';
import { Router } from '@angular/router';
import { CustomerModule } from '../customer/customer.module';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  public itms: ItemsModModule;
  public cust: CustomerModule;

  select = "select all";
  collaps = "collepse all";

  constructor(private _cartService: PicknpayService, private router: Router) { }

  ngOnInit() {
    this.getfrmItms();
    this.regCust();
  }

  slct() {
    if (this.select == "select all") {
      this.select = "deselect all";
      this.select.fontcolor('003359');
    } else {
      this.select="select all";
    }
  }

  clp() {
    if (this.collaps == "collepse all") {
      this.collaps = "expend all";
      this.collaps.fontcolor('B9154A');
    } else {
      this.collaps = "collepse all";
    }
  }

  getfrmItms() {
    this._cartService.getTempCart().subscribe((res) => this.itms = JSON.parse(res["_body"]));;
  }

  addqty(item: ItemsModModule) {
    var oldPrice = item.price/item.quantity;
    item.quantity++;
    item.price = item.price + (oldPrice);
    this._cartService.updateCart(item).subscribe((itm) => {
    }, (error) => { });
  }

  subqty(item: ItemsModModule) {
    if (item.quantity > 1) {
      var oldPrice = item.price/item.quantity;
      item.quantity--;
      item.price = item.price - (oldPrice);
      this._cartService.updateCart(item).subscribe((itm) => {
      }, (error) => { });
    }
  }

  rmvItem(item: ItemsModModule) {
    for (let i = 0; i < Object.keys(this.itms).length; i++) {
      if (this.itms[i].id == item.id) {
        this._cartService.removeItemfromCart(i).subscribe((res) => {this.getfrmItms(), this.router.navigate(['/app-cart'])});
      }
    }
    this.getfrmItms();
    this._cartService.setCartI(Object.keys(this.itms).length);
  }

  checkout() {
    this.router.navigate(['/app-order'])
  }

  regCust() {
    this.cust = this._cartService.getUser();
    if (this.cust == null) {
      this.router.navigate(['/app-login']);
    }
  }
}
