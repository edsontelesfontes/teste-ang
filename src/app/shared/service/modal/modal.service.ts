import { Injectable } from '@angular/core';
import { DelModalComponent } from '../../modal/del-modal/del-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  openModal(){
    const modalDiv = document.getElementById('exampleModalCenter');
    if(modalDiv!=null){
      modalDiv.classList.add("show");
      modalDiv.style.display = 'block';
    }
    
  }

  closeModal(){
    const modalDiv = document.getElementById('exampleModalCenter');
    if(modalDiv!=null){
      modalDiv.classList.remove('show')
      //modalDiv.style.display = 'block';
    }
  }
}
