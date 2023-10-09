import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-base',
  templateUrl: './input-base.component.html',
  styleUrls: ['./input-base.component.scss']
})
export class InputBaseComponent {
  @Input() mode: string | undefined;
  @Input() formGroup: FormGroup | any

}
