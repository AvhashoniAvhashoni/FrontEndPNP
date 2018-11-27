import { Component, OnInit } from '@angular/core';
import { PicknpayService } from '../picknpay.service';
import { ItemsModModule } from '../items-mod/items-mod.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  public itms: ItemsModModule;

  select = "select all";
  collaps = "collepse all";

  constructor(private _cartService: PicknpayService, private router: Router) { }

  ngOnInit() {
    this.getfrmItms();
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
  }

  subqty(item: ItemsModModule) {
    if (item.quantity > 1) {
      var oldPrice = item.price/item.quantity;
      item.quantity--;
      item.price = item.price - (oldPrice);
    }
  }

  rmvItem(item: ItemsModModule) {
    for (let i = 0; i < Object.keys(this.itms).length; i++) {
      if (this.itms[i].id == item.id) {
        this._cartService.removeItemfromCart(i).subscribe((res) => {this.getfrmItms(), this.router.navigate(['/app-cart'])});
      }
    }
  }
}
