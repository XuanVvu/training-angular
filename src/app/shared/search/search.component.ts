import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  constructor( private readonly commonService:CommonService) {}
  
  ngOnInit(): void {
    
  } 

  search($event:any) {
    this.commonService.setSearchData($event)     
       
  }  

}
