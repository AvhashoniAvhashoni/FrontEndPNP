import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { PicknpayService } from '../picknpay.service';
import { ItemsModModule } from '../items-mod/items-mod.module';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit{
 
  public itms: ItemsModModule;
  cost = 0;

  constructor(private _ordService: PicknpayService, private router: Router) { }

  ngOnInit() {
    this.getfrmItms();
  }

  getfrmItms() {
    this._ordService.getTempCart().subscribe((res) => this.itms = JSON.parse(res["_body"]));
  }

  totItms() {
    for (var i = 0; i < Object.keys(this.itms).length; i++){
      this.cost = this.cost + this.itms.price;
    }
  }

  checkout() {
    this.router.navigate(["/app-payment"]);
  }

}
