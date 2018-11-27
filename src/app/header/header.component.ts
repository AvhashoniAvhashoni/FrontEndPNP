import { Component, OnInit } from '@angular/core';
import { PicknpayService } from '../picknpay.service';
import { AisleModModule } from '../aisle-mod/aisle-mod.module';
import { ItemsModModule } from '../items-mod/items-mod.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public aisleMod: AisleModModule;
  public itms: ItemsModModule;
  
  constructor(public _headerService: PicknpayService, private router: Router) { }

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

  setAisle(aisle1: AisleModModule){
    this._headerService.setAaisle(aisle1);
    this.router.navigate(['/app-product']);
  }
}
