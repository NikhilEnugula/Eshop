import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { HeaderComponent } from './COMPONENTS/header/header.component';

import { LoginComponent } from './PAGES/login/login.component';
import { CheckoutComponent } from './PAGES/checkout/checkout.component';
import { FooterComponent } from './COMPONENTS/footer/footer.component';
import { HomeComponent } from './PAGES/home/home.component';
import { BannerComponent } from './COMPONENTS/banner/banner.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule } from '@angular/common/http';
import { ProductsComponent } from './COMPONENTS/products/products.component';
import { CheckoutSubtotalComponent } from './COMPONENTS/checkout-subtotal/checkout-subtotal.component';
import { CheckoutProductsComponent } from './COMPONENTS/checkout-products/checkout-products.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './PAGES/register/register.component';
import { DeliveryComponent } from './PAGES/delivery/delivery.component';
import { AccountComponent } from './PAGES/account/account.component';
import { PaymentComponent } from './PAGES/payment/payment.component';
import { CompleteComponent } from './PAGES/complete/complete.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    LoginComponent,
    CheckoutComponent,
    FooterComponent,
    HomeComponent,
    BannerComponent,
    ProductsComponent,

    CheckoutSubtotalComponent,
    CheckoutProductsComponent,
    RegisterComponent,
    DeliveryComponent,
    AccountComponent,
    PaymentComponent,
    CompleteComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatSliderModule,
    MatCardModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
