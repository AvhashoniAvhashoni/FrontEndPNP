import { Component, OnInit } from '@angular/core';
import { PicknpayService } from '../picknpay.service';
import { AisleModModule } from '../aisle-mod/aisle-mod.module';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public aisleMod: AisleModModule;
  constructor(public _aisleService: PicknpayService) { }

  ngOnInit() {
    this.getAisleData();
  }

  getAisleData(){
    this._aisleService.getAisle()
      .subscribe((resAisleData) => this.aisleMod = JSON.parse(resAisleData["_body"]));
  }
}
