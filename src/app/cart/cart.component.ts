import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { idishes } from '../idishes';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: idishes[] = [];
  total : number = 0;
  public totalSer: number = 0;
  public calcdiccound: number = 0;
  public dicount: boolean = false;
  public total01: number = 0;

  constructor(private cartService: CartService) {}

    ngOnInit(): void {
      this.items = this.cartService.getItems();
      this.total = this.cartService.calcTotal();
      this.totalSer = this.total/100*10;
      
      this.total01 = (this.total + this.totalSer);
      if (this.total > 40) {
        this.total01 *= 0.85;
        this.calcdiccound = this.total - (this.total/100*85);
        this.dicount = true;
      } 
    }



}
