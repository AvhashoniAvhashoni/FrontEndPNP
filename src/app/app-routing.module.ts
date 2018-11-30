import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterHeaderComponent } from './register-header/register-header.component';
import { RegisterComponent } from './register/register.component';
import { RegisterSmartShopperComponent } from './register-smart-shopper/register-smart-shopper.component';
import { RegisterOnlineComponent } from './register-online/register-online.component';
import { RegisterSmartShopperRegComponent } from './register-smart-shopper-reg/register-smart-shopper-reg.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { AisleComponent } from './aisle/aisle.component';
import { ProductComponent } from './product/product.component';
import { ItemsComponent } from './items/items.component';
import { CartComponent } from './cart/cart.component';

import { from } from 'rxjs';
import { CatalougeComponent } from './catalouge/catalouge.component';
import { CompetitionComponent } from './competition/competition.component';
import { DeliveryComponent } from './delivery/delivery.component';

const routes: Routes = [
  {path:'', pathMatch:'full', redirectTo:'app-home'},
  {path:'app-root', component:AppComponent },
  {path:'app-header', component:HeaderComponent },
  {path: 'app-home', component:HomeComponent },
  {path: 'app-footer', component:FooterComponent },
  {path: 'app-register-header', component:RegisterHeaderComponent },
  {path: 'app-register', component:RegisterComponent },
  {path: 'app-register-smart-shopper', component:RegisterSmartShopperComponent },
  {path: 'app-register-online', component:RegisterOnlineComponent },
  {path: 'app-register-smart-shopper-reg', component:RegisterSmartShopperRegComponent },
  {path: 'app-item', component:ItemComponent },
  {path: 'app-login', component:LoginComponent },
  {path: 'app-login-header', component:LoginHeaderComponent },
  {path: 'app-item', component:ItemComponent },
  {path: 'app-aisle', component:AisleComponent },
  {path: 'app-product', component:ProductComponent },
  {path: 'app-items', component:ItemsComponent },
  {path: 'app-cart', component:CartComponent},
  {path: 'app-catalougue', component:CatalougeComponent},
  {path: 'app-competition', component:CompetitionComponent},
  {path: 'app-delivery', component:DeliveryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
