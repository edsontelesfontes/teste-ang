import { Router } from '@angular/router';
import { EmployeeService } from './../../service/employee/employee.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../../domain/IEmployee';
import { ModalService } from '../../service/modal/modal.service';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.css']
})
export class EmployeeGridComponent {
  constructor(private EmployeeServicervice: EmployeeService,
     private router: Router,
     private modal: ModalService) { }
  listEmployee$!: Observable<IEmployee[]>;

  @Output() employeeGrid!: IEmployee;
 // @Output() employeeGrid: EventEmitter<any> = new EventEmitter;
  //employeeSelected!: IEmployee;
  
  ngOnInit(): void {
    this.listEmployee$ = this.EmployeeServicervice.findAllEmployees();
  }

  selectionItem(employeeSelected: IEmployee){
    this.employeeGrid = employeeSelected;
    console.log(employeeSelected);
    this.modal.openModal();
    //this.employeeGrid.emit( employeeSelected);
  }
}
