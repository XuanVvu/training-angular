import { Component, OnInit } from '@angular/core';
import { finalize, of } from 'rxjs';
import { getProductsService } from '../api/get-products.service';
import { Product } from '../types/models';

@Component({
  selector: 'app-foods',
  templateUrl: './foods.component.html',
  styleUrls: ['./foods.component.scss'],
})
export class FoodsComponent implements OnInit {
  data: Product[] | undefined;
  isLoading: boolean = true;
  constructor(private foodService: getProductsService) {}

  ngOnInit(): void {
    this.foodService
      .getAllProducts()
      .pipe(finalize(() => (this.isLoading = false)))
      .subscribe((item) => {
        this.data = item;
      });
  }
}
function subscribe() {
  throw new Error('Function not implemented.');
}
