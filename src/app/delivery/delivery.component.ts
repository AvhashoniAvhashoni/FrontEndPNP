import { Component, OnInit } from '@angular/core';
import { PicknpayService } from '../picknpay.service';
import { RegionModule } from '../region/region.module';
import { StoreModule } from '../store/store.module';

@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent implements OnInit {

  public region: RegionModule;
  public store: StoreModule
  
  selected = 'gauteng';
  selectedId = 3;

  constructor(private _deliveryService: PicknpayService) { 
    this._deliveryService.getStore()
      .subscribe((res) => this.store  = JSON.parse(res["_body"]));
  }

  ngOnInit() {
    this.regions();
    this.selectStore(this.selectedId);
  }

  regions() {
    this._deliveryService.getRegion()
      .subscribe((res) => this.region  = JSON.parse(res["_body"]));
  }
  
  selectStore(id: number) {
    this._deliveryService.getStoreByFk(id)
      .subscribe((res) => this.store = JSON.parse(res["_body"]));
  }
}
