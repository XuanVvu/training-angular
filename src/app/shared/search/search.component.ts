import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchForm: FormGroup | any;
  constructor( private readonly commonService:CommonService, private fb: FormBuilder) {}

  
  ngOnInit(): void {
    this.searchForm = this.fb.group({
      searchInput: '',
    });
  } 

  search() {
    this.commonService.setSearchData(this.searchForm.value.searchInput)     
       
  }  

}
