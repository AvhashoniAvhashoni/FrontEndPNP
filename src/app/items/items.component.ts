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

  constructor(private _itemService: PicknpayService) { }

  ngOnInit() {
    this.getItemsData();
  }


  getItemsData() {
    this._itemService.getItems()
      .subscribe((resItemData) => this.itms = JSON.parse(resItemData["_body"]));
  }
}