import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICE/shopping-cart.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent implements OnInit {
  items: any[];

  constructor(public shopping_cart: ShoppingCartService) {}

  ngOnInit(): void {
    this.getshoppingcart();
  }
  getshoppingcart() {
    this.items = this.shopping_cart.get_shopping_cart_items();
  }
  deleteEventHandler(p) {
    console.log('event handled');
    this.getshoppingcart();
  }
}
