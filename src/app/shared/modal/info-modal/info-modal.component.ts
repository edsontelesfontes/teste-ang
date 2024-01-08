import { Component, Input } from '@angular/core';
import { IEmployee } from '../../domain/IEmployee';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent {

@Input() employee!: IEmployee

}
