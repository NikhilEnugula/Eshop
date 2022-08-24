import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/app/SERVICE/shopping-cart.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() products: any[];
  constructor(public shoppingCart: ShoppingCartService) {}

  ngOnInit(): void {}
  addToCart(p) {
    this.shoppingCart.addProduct(p);
  }
}
