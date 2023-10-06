import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  inputValue:string | undefined ;


  constructor( private readonly commonService:CommonService) {}
  
  ngOnInit(): void {
    
    
  } 
  OnEnter() {
    this.commonService.data?.next(this.inputValue)

  }

  

}
