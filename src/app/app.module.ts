import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PicknpayService } from './picknpay.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { RegisterComponent } from './register/register.component';
import { RegisterHeaderComponent } from './register-header/register-header.component';
import { RegisterOnlineComponent } from './register-online/register-online.component';
import { RegisterSmartShopperRegComponent } from './register-smart-shopper-reg/register-smart-shopper-reg.component';
import { RegisterSmartShopperComponent } from './register-smart-shopper/register-smart-shopper.component';
import { AisleComponent } from './aisle/aisle.component';
import { ProductComponent } from './product/product.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';
import { CatalougeComponent } from './catalouge/catalouge.component';
import { CompetitionComponent } from './competition/competition.component';
import { DeliveryComponent } from './delivery/delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    ItemComponent,
    LoginComponent,
    LoginHeaderComponent,
    RegisterComponent,
    RegisterHeaderComponent,
    RegisterOnlineComponent,
    RegisterSmartShopperRegComponent,
    RegisterSmartShopperComponent,
    AisleComponent,
    ProductComponent,
    ItemsComponent,
    CartComponent,
    CatalougeComponent,
    CompetitionComponent,
    DeliveryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [PicknpayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
