import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  filter,
  finalize,
  map,
  Observable,
  of,
  shareReplay,
  switchMap,
} from 'rxjs';
import { getProductsService } from '../api/get-products.service';
import { CommonService } from '../shared/common.service';
import { Product } from '../types/models';
import { ProductsService } from './products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  data$: any[] | undefined;
  isLoading: boolean = true;
  constructor(
    private getProductsService: getProductsService,
    private readonly commonService: CommonService,
    private readonly router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.getProductsService
      .getAllProducts()
      .subscribe((data) => (this.data$ = data));
    if (this.productsService.data$) {
      console.log(this.productsService.data$);
    }

  }

  handleClick(data: Product) {
    this.router.navigate(['/products', data.id]);
  }
}
