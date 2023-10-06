import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductsComponent } from './products.component';
import { productsRoutes } from './products.routing';

@NgModule({
  declarations: [ProductsComponent, ProductDetailComponent],
  imports: [CommonModule, RouterModule.forChild(productsRoutes), SharedModule],
})

export class ProductsModule {}
