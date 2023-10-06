import { Injectable, OnInit } from '@angular/core';
import { finalize, map, shareReplay } from 'rxjs';
import { getProductsService } from '../api/get-products.service';
import { CommonService } from '../shared/common.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService implements OnInit {
  data$: any[] | undefined;
  isLoading: boolean | undefined;

  constructor(
    private commonService: CommonService,
    private productsService: getProductsService
  ) {}
  ngOnInit(): void {
    this.getAllProducts()
  }



  getAllProducts() {
    this.commonService.data?.subscribe((input) => {
      this.productsService
        .getAllProducts()
        .pipe(
          finalize(() => (this.isLoading = false)),
          shareReplay(1),
          map((product) =>
            product.filter((p: { title: string }) => {
              if (!input) {
                return product;
              }
              return p.title.toLowerCase().startsWith(input.toLowerCase());
            })
          )
        )
        .subscribe((data) => (this.data$ = data));
    });
    this.commonService.data.next('');

  }
}
