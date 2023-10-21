import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { dishes } from '../dishes';
import { idishes } from '../idishes';
import { CartService } from '../cart.service';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent  implements OnInit{
  dishes:idishes[] = dishes;

  dish: idishes = {} as idishes;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) {}

  addToCart(dishId:number) {
    window.alert('Your product has been added to the cart!');
    this.id = dishId
    this.cartService.addToCart(dishes[this.id]);
  }

  ngOnInit(): void {
    
  }

}
