import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject, filter, finalize, map, of, shareReplay } from 'rxjs';
import { getProductsService } from '../api/get-products.service';
import { CommonService } from '../shared/common.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService implements OnInit {
  data$: Observable<any> | undefined;
  isLoading: boolean | undefined;
  data1: Subject<any> = new Subject();
  dataTest: any;

  constructor(
    private commonService: CommonService,
    private getProductsService: getProductsService
  ) {}
  ngOnInit(): void {
    console.log(this.commonService.data);
  }

  getAllProducts() {  
    return this.getProductsService.getAllProducts().pipe(
      finalize(() => this.isLoading = false),
      shareReplay(1),
    )
 
       
  }

  getProductById(id: number) {
    return this.getAllProducts().pipe(
      map((product) => product.find((pr: { id: number; }) => pr.id === id))
    )
  }
}
