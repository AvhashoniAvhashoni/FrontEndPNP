import { Component, OnInit } from '@angular/core';
import { ItemsModModule } from '../items-mod/items-mod.module';
import { ProductModModule } from '../product-mod/product-mod.module';
import { PicknpayService } from '../picknpay.service';
 @Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public itms: ItemsModModule;
  public prd: ProductModModule;
  public itmz: ItemsModModule;
   constructor(private _itemService: PicknpayService) { }
  
  ngOnInit() {
    this.getCartItems();
    this.getProduct();
    this.getItemData();
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
    var j = 0;
    
    for (let i = 0; i < Object.keys(this.itmz).length; i++) {
      if (this.itmz[i].id == items.id) {
        j = 1;
        break;
      }
    }
     if (j == 1) {
    } else {
      if (j == 0) {
        this._itemService.addToTempCart(items).subscribe((itm) => {
        }, (error) => { });
      }
    }
  }
   getProduct(){
    this.prd = this._itemService.getProduct();
  }
  
  getItemData() {
    this._itemService.getItemByFk(this.prd.id)
      .subscribe((res) => this.itms = JSON.parse(res["_body"]));
  }
}