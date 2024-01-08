import { Router } from '@angular/router';
import { EmployeeService } from './../../service/employee/employee.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../../domain/IEmployee';

@Component({
  selector: 'app-employee-grid',
  templateUrl: './employee-grid.component.html',
  styleUrls: ['./employee-grid.component.css']
})
export class EmployeeGridComponent {
  constructor(private EmployeeServicervice: EmployeeService, private router: Router) { }
  listEmployee$!: Observable<IEmployee[]>;

  //@Output() employeeGrid!: IEmployee;
  @Output() employeeGrid: EventEmitter<any> = new EventEmitter;
  //employeeSelected!: IEmployee;
  
  ngOnInit(): void {
    this.listEmployee$ = this.EmployeeServicervice.findAllEmployees();
  }

  selectionItem(employeeSelected: IEmployee){
    console.log(employeeSelected);
    this.employeeGrid.emit( employeeSelected);
  }
}
