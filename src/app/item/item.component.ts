import { Component, OnInit } from '@angular/core';
import { ItemsModModule } from '../items-mod/items-mod.module';
import { PicknpayService } from '../picknpay.service';
import { ProductModModule } from '../product-mod/product-mod.module';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public item: ItemsModModule;
  public prd: ProductModModule;
  
  constructor(private _itemService: PicknpayService) { }

  ngOnInit() {
    this.item = JSON.parse(this._itemService.get1Item());
    this.prd = this._itemService.getProduct();
  }

  i = 1;

  addOn() {
    this.i = this.i + 1;
  }

  subtractOn() {
    if (this.i > 1){
      this.i = this.i - 1;
    }
  }
}
