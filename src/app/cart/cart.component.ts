import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  
  select = "select all";
  collaps = "collepse all";

  constructor() { }

  ngOnInit() {
  }

  slct() {
    if (this.select == "select all") {
      this.select = "deselect all";
      this.select.fontcolor('003359');
    } else {
      this.select="select all";
    }
  }

  clp() {
    if (this.collaps == "collepse all") {
      this.collaps = "expend all";
      this.collaps.fontcolor('B9154A');
    } else {
      this.collaps = "collepse all";
    }
  }

}
