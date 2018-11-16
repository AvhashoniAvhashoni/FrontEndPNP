import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
