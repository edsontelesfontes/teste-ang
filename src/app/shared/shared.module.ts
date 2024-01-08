import { FooterComponent } from './pages/footer/footer.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './pages/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EmployeeGridComponent } from './components/employee-grid/employee-grid.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { CommonModule } from '@angular/common';
import { DelModalComponent } from './modal/del-modal/del-modal.component';



@NgModule({
  declarations: [FooterComponent,
  HeaderComponent,
  NotFoundComponent,
  EmployeeGridComponent,
  EmployeeComponent,
  DelModalComponent],
  imports: [
     CommonModule
  ],
  exports: [FooterComponent,
  HeaderComponent, EmployeeComponent,DelModalComponent, EmployeeGridComponent],
  providers: [EmployeeGridComponent]
})
export class SharedModule { }
