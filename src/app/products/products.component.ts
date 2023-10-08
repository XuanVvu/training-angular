import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, finalize, map, shareReplay } from 'rxjs';
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
  products: Observable<any> | any;
  constructor(
    private getProductsService: getProductsService,
    private commonService: CommonService,
    private readonly router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.products = this.productsService.getAllProducts();
    this.commonService.currentSearchTerm.subscribe((input: string) => {
      this.products.pipe(
        map((producs :any) =>
          producs.filter((p: { title: string }) => {
            if (!input) {
              return producs;
            }
            return p.title.toLowerCase().includes(input.toLowerCase());
          })
        )
      ).subscribe((data: any[] | undefined) => this.data$ = data);
    });
  }

  handleClick(data: Product) {
    this.router.navigate(['/products', data.id]);
  }
}
