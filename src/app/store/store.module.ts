import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class StoreModule { 
  id: number;
  name: string;
  city: string;
  street: string;
  rid: number;
}
