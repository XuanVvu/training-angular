import { Routes } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products.component';

export const productsRoutes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path:':id',
    component:ProductDetailComponent
  }
];
