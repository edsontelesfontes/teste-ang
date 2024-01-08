import { IEmployee } from './../../domain/IEmployee';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-del-modal',
  templateUrl: './del-modal.component.html',
  styleUrls: ['./del-modal.component.css']
})
export class DelModalComponent {
//@Input() employeeModal!: IEmployee;
@Input() employeeModal!: IEmployee;

  closeModal(){
  
    console.log(this.employeeModal)
    const modalDiv = document.getElementById('exampleModalCenter');
    if(modalDiv!=null){
      modalDiv.classList.remove('show')

    }
  }
}
