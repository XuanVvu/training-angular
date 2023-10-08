import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-base',
  templateUrl: './input-base.component.html',
  styleUrls: ['./input-base.component.scss']
})
export class InputBaseComponent {
  @Input() mode: string | undefined;
  @Output() data =  new EventEmitter<string>();

  inputValue:string ='';  

  search(data: string) {
    this.data.emit(data)
  }

}
