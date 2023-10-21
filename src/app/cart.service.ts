import { Injectable } from '@angular/core';
import { idishes } from './idishes';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: idishes[] = [];

  constructor() { }

  addToCart(dish:idishes) {
    this.items.push(dish);
  }
  getItems() {
    return this.items;
  }

  clearCart() {
    this.items=[];
    return this.items;
  }

  calcTotal() {
    let total : number = 0;

    this.items.forEach((val) => {
      total += val.price;
    })
    return total;
  }

  
}
