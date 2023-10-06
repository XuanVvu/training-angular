import { Injectable, OnChanges, SimpleChanges } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { getProductsService } from '../api/get-products.service';

@Injectable({
  providedIn: 'root',
})
export class CommonService  {
  searchName: string | undefined;
  data: Subject<any> = new Subject();
  dataObv: Observable<any> | undefined
  constructor() {}

  dataTest(name:any) {
    return name
  }

    
  }

   