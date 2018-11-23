import { Component, OnInit } from '@angular/core';
import { PicknpayService } from '../picknpay.service';
import { AisleModModule } from '../aisle-mod/aisle-mod.module';
import { ItemsModModule } from '../items-mod/items-mod.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public aisleMod: AisleModModule;
  public itms: ItemsModModule;
  
  constructor(public _headerService: PicknpayService) { }

  ngOnInit() {
    this.getAisleData();
    this.getfrmItms();
  }

  getAisleData(){
    this._headerService.getAisle()
      .subscribe((resAisleData) => this.aisleMod = JSON.parse(resAisleData["_body"]));
  }

  getfrmItms() {
    this._headerService.getTempCart()
    .subscribe((res) => this.itms = JSON.parse(res["_body"]));
  }
}
