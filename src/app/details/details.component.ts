import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { idishes } from '../idishes';
import { dishes } from '../dishes';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  dish: idishes = {} as idishes;
  id: number = 0;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
    ) {}

    addToCart() {
      window.alert('Your product has been added to the cart!');
      this.cartService.addToCart(this.dish);
    }

    ngOnInit(): void {
      this.route.params.subscribe((params: Params) => {
        this.id =+params['details'];
        this.dish = dishes[this.id];
      });
    }

}
