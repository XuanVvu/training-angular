import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map, pipe, pluck, switchMap } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  id: string | undefined;
  product: any;

  constructor(
    private readonly route: ActivatedRoute,
    private productsService: ProductsService
  ) {}
  ngOnInit(): void {
    this.route.params
      .pipe(pluck('id'))
      .subscribe((produc) => (this.product = produc));

    if (this.id) {
      this.productsService
        .getProductById(Number(this.id))
        .subscribe((product) => (this.product = product));
    }

    this.route.params
      .pipe(
        pluck('id'),
        switchMap((id) => this.productsService.getProductById(Number(id))
        ),
      )
      .subscribe(data =>this.product = data)
    
  }
}
