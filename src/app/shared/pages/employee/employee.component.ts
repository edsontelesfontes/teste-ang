import { Component, Input, Output, ViewChild } from '@angular/core';
import { EmployeeService } from '../../service/employee/employee.service';
import { ModalService } from '../../service/modal/modal.service';
import { DelModalComponent } from '../../modal/del-modal/del-modal.component';
import { IEmployee } from '../../domain/IEmployee';
import { EmployeeGridComponent } from '../../components/employee-grid/employee-grid.component';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {

//@ViewChild('modal') modalComp!:DelModalComponent;
 @Input() employee!: IEmployee;

constructor(private employeeService: EmployeeService,private modalService:ModalService){
}


abreModal(){
this.modalService.openModal();
console.log(this.employee.endereco);
 console.log(this.employee)
}

buscarEmpregado(){
  console.log(this.employeeService.findAllEmployees());
}
}
