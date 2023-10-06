import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { SearchComponent } from './search/search.component';
import { LoaderComponent } from './loader/loader.component';
import { RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      HeaderComponent,
      SearchComponent,
      LoaderComponent,
      CardComponent,
    ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [HeaderComponent, LoaderComponent, CardComponent],
})
export class SharedModule {}
