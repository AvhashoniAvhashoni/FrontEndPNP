import { Component, OnInit } from '@angular/core';
import { ItemsModModule } from '../items-mod/items-mod.module';
import { ProductModModule } from '../product-mod/product-mod.module';
import { PicknpayService } from '../picknpay.service';
import { CustomerModule } from '../customer/customer.module';
import { Router } from '@angular/router';
 @Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public itms: ItemsModModule;
  public prd: ProductModModule;
  public itmz: ItemsModModule;
  public cust: CustomerModule;

  constructor(private _itemService: PicknpayService, private router: Router) { }
  
  ngOnInit() {
    this.getCartItems();
    this.getProduct();
    this.getAItemData();
  }

  setCartI() {
    this._itemService.setCartI(Object.keys(this.itmz).length);
  }

  getCartItems() {
    this._itemService.getTempCart()
      .subscribe((res) => this.itmz = JSON.parse(res["_body"]));
  }

  addQty(item: ItemsModModule) {
    var oldPrice = item.price/item.quantity;
    item.quantity++;
    item.price = item.price + (oldPrice);
  }

  subtractQty(item: ItemsModModule) {
    if (item.quantity > 1) {
      var oldPrice = item.price/item.quantity;
      item.quantity--;
      item.price = item.price - (oldPrice);
    }
  }

  getItemsData() {
    this._itemService.getItems()
      .subscribe((resItemData) => this.itms = JSON.parse(resItemData["_body"]));
  }

  addToTempCart(items: ItemsModModule) {
    this.cust = this._itemService.getUser();
    if (this.cust == null) {
      this.router.navigate(['/app-login']);
    } else {
      var j = 0;

      for (let i = 0; i < Object.keys(this.itmz).length; i++) {
        if (this.itmz[i].id == items.id) {
          j = 1;
          break;
        }
      }
      if (j == 1) {
        this._itemService.updateCart(items).subscribe((itm) => {
          }, (error) => { });
      } else {
        if (j == 0) {
          this._itemService.addToTempCart(items).subscribe((itm) => {
            }, (error) => { });
        }
      }
      
      this.getCartItems();
      this.setCartI();
    }
  }

  getProduct(){
    this.prd = this._itemService.getProduct();
  }
  
  getAItemData() {
    this._itemService.getItemByFk(this.prd.id)
      .subscribe((res) => this.itms = JSON.parse(res["_body"]));
  }
}