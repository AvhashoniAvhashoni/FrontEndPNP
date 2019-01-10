import { Component, OnInit } from '@angular/core';
import { PicknpayService } from '../picknpay.service';
import { Router } from '@angular/router';
import { ItemsModModule } from '../items-mod/items-mod.module';
import * as jsPDF from "jspdf";
import { CustomerModule } from '../customer/customer.module';

@Component({
  selector: 'app-recipt',
  templateUrl: './recipt.component.html',
  styleUrls: ['./recipt.component.css']
})
export class ReciptComponent implements OnInit {

  public items: ItemsModModule;
  public customer: CustomerModule;

  refNum = null;
  numItms = "";
  date = new Date();
  totCost = "";

  constructor(private _reciptService: PicknpayService, private _router: Router) { }

  ngOnInit() {
    
    if (this._reciptService.getRef() != null) {
      this.refNum = this._reciptService.getRef();
      this._reciptService.getTempCart().subscribe((res) => this.items = JSON.parse(res["_body"]));
      this.numItms = this._reciptService.getTotItems();
      this.totCost = this._reciptService.getTotalCost();
    } else {
      this._router.navigate(['/app-home']);
    } 
    this.customer = this._reciptService.getUser();
  }

  signOut() {
    this._reciptService.endUser();
    this._router.navigate(['/app-home']);
  }

  downloadPdf() {
    var name = 'Receipt' + this.customer.name + '.pdf';
    let doc = new jsPDF();
    doc.addHTML(document.getElementsByClassName('recipt'), function() {
      doc.save(name); 
    });
  }
}
