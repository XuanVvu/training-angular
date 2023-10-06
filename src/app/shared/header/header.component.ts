import { Component } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  tabList = [
    {
      label: 'Products',
      url: '/products',
    },
    {
      label: 'Foods',
      url: '/foods',
    },
  
  ];
}
