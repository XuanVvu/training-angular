import { Injectable, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { getProductsService } from '../api/get-products.service';

@Injectable({
  providedIn: 'root',
})
export class CommonService implements OnInit {
  private searchName: string | undefined;
  data: Subject<any> = new BehaviorSubject<string>('');
  dataObv: Observable<any> | undefined;

  currentSearchTerm = this.data.asObservable()
  
  constructor() {}
  ngOnInit(): void {
    
  }

  setSearchData(data: string): void {
    
    this.data.next(data)
  }
}
