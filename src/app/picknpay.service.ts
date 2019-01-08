import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { map } from 'rxjs/operators';

import { CustomerModule } from './customer/customer.module'
import { AisleModModule } from './aisle-mod/aisle-mod.module';
import { ProductModModule } from './product-mod/product-mod.module';
import { ItemsModModule } from './items-mod/items-mod.module';

import { from } from 'rxjs';
import { PaymentModModule } from './payment-mod/payment-mod.module';
import { CartModModule } from './cart-mod/cart-mod.module';

@Injectable({
  providedIn: 'root'
})
export class PicknpayService {

  private _url: string = "http://localhost:8080/customers/";
  private _aisle: string = "http://localhost:8080/aisle/";
  private _product: string = "http://localhost:8080/product/";
  private _item: string = "http://localhost:8080/item/";
  private _payment: string = "http://localhost:8080/payment/";
  private _cart: string = "http://localhost:8080/cart/";
  
  constructor(private _http: Http) { }

  setUser(customer: CustomerModule){
    sessionStorage.setItem("user", JSON.stringify(customer)); 
  }

  getUser(){
    return JSON.parse(sessionStorage.getItem("user"));
  }
  
  endUser(){
    sessionStorage.removeItem("user");
  }

  /*Customer service*/
  getCustomers() {
    return this._http.get(this._url);
  }

  getCustomerLogin(email: string, password: string) {
    return this._http.get(this._url + "/login/" + email + "/" + password).pipe(map(this.exractData));
  }

  private exractData(res: Response){
    let body = res.json();
    return body;
  }
 
  postCustomer(customers: CustomerModule){
    return this._http.post(this._url, customers);
  }

  /*Aisle Service*/
  getAisle() {
    return this._http.get(this._aisle);
  }

  setAaisle(aisleMod: AisleModModule){
    localStorage.setItem("aisle", JSON.stringify(aisleMod)); 
  }
  getAaisle(){
    return JSON.parse(localStorage.getItem("aisle"));
  }

  /*Product Service*/
  getProductByFk(fk: number) {
    return this._http.get(this._product+"/fk/"+fk);
  }

  getProductData() {
    return this._http.get(this._product);
  }

  setProduct(prodMod: ProductModModule){
    localStorage.setItem("prod", JSON.stringify(prodMod)); 
  }
  getProduct(){
    return JSON.parse(localStorage.getItem("prod"));
  }

  /*items service*/
  getItemByFk(fk: number) {
    return this._http.get(this._item+"/fk/"+fk);
  }

  getItems() {
    return this._http.get(this._item);
  }

  postItem(item: ItemsModModule) {
    return this._http.post(this._item, item);
  }

  addToTempCart(item: ItemsModModule) {
    return this._http.post(this._item+"/temp", item).pipe(map(this.exractData));
  }

  getTempCart() {
    return this._http.get(this._item+"/temp");
  }

  setCartI(numI: number){
    localStorage.setItem("numI", JSON.stringify(numI)); 
  }

  getCartI(){
    return JSON.parse(localStorage.getItem("numI"));
  }

  updateCart(item: ItemsModModule) {
    return this._http.post(this._item+"/temp/update", item).pipe(map(this.exractData));
  }
  /*cart service*/
  removeItemfromCart(indx: number) {
    return this._http.delete(this._item+"/temp/"+indx);
  }

  /*Item add*/
  setItemAdded(str: string){
    localStorage.setItem("addItem", "Item " + str + " has been added"); 
  }

  getItemAdded(){
    return localStorage.getItem("addItem");
  }

  removegetItemAdded() {
    localStorage.removeItem("addItem");
  }

  /*order*/
  setTotalCost(totCost: Number) {
    localStorage.setItem("totalCost", JSON.stringify(totCost));
  }

  getTotalCost() {
    return localStorage.getItem("totalCost");
  }

  /*Payment*/
  getPayments() {
    return this._http.get(this._payment);
  }

  setPayment(payment: PaymentModModule) {
    return this._http.post(this._payment, payment);
  }

  deletePayment(id){
    return this._http.delete(this._payment+"/"+id);
  }

  /*cart*/
  saveCart(cart: CartModModule) {
    return this._http.post(this._cart, cart);
  }
}