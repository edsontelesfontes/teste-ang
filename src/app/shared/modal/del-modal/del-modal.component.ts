import { EmployeeService } from './../../service/employee/employee.service';
import { IEmployee } from './../../domain/IEmployee';
import { Component, Input } from '@angular/core';
import { ModalService } from '../../service/modal/modal.service';

@Component({
  selector: 'app-del-modal',
  templateUrl: './del-modal.component.html',
  styleUrls: ['./del-modal.component.css']
})
export class DelModalComponent {
//@Input() employeeModal!: IEmployee;
@Input() employeeModal!: IEmployee;

  constructor(private employeeService: EmployeeService,
    private modal: ModalService){}

  closeModal(){
    const modalDiv = document.getElementById('exampleModalCenter');
    if(modalDiv!=null){
      modalDiv.classList.remove('show')
      modalDiv.style.display = 'none'
    }
  }

  async deleteEmployee(){
    console.log("no delete modal", this.employeeModal)
    this.closeModal();
    await this.employeeService.deleteEmployee(this.employeeModal);
    this.modal.openInfoModal();
  }
}
