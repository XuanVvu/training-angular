import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pipe, pluck } from 'rxjs';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  constructor(private readonly route:ActivatedRoute, private productsService:ProductsService){}
  ngOnInit(): void {
    this.route.params.pipe(pluck('slug')).subscribe(console.log)
  
    
  }



}
