import { Component, OnInit } from '@angular/core';
import { PicknpayService } from '../picknpay.service';
import { ProductModModule } from '../product-mod/product-mod.module';
import { AisleModModule } from '../aisle-mod/aisle-mod.module';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public prod: ProductModModule;
  public aisle1: AisleModModule;
  constructor(private _productService: PicknpayService) { }

  ngOnInit() {
    this.getAisle();
    this.getProductData();
  }

  getAisle(){
    this.aisle1 = this._productService.getAaisle();
  }

  getProductData(){
    this._productService.getProductByFk(this.aisle1.id)
      .subscribe((resProductData) => this.prod = JSON.parse(resProductData["_body"]));
  }    
}
