import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountComponent } from './PAGES/account/account.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { DeliveryComponent } from './PAGES/delivery/delivery.component';
import { HomeComponent } from './PAGES/home/home.component';
import { ItemComponent } from './PAGES/item/item.component';
import { LoginComponent } from './PAGES/login/login.component';
import { PaymentComponent } from './PAGES/payment/payment.component';
import { RegisterComponent } from './PAGES/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'account', component: AccountComponent },
  { path: 'delivery', component: DeliveryComponent },
  { path: 'item', component: ItemComponent },
  { path: 'payment', component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
