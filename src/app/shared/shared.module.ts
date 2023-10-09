import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputBaseComponent } from './input-base/input-base.component';

@NgModule({
    declarations: [
      HeaderComponent,
      SearchComponent,
      LoaderComponent,
      CardComponent,
      InputBaseComponent,
    ],
  imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent, LoaderComponent, CardComponent, InputBaseComponent],
})
export class SharedModule {}
