import { FooterComponent } from './pages/footer/footer.component';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './pages/header/header.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EmployeeGridComponent } from './components/employee-grid/employee-grid.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { CommonModule } from '@angular/common';
import { DelModalComponent } from './modal/del-modal/del-modal.component';
import { InfoModalComponent } from './modal/info-modal/info-modal.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeService } from './service/employee/employee.service';
import { AppRoutingModule } from '../pages/app-routing.module';


@NgModule({
  declarations: [FooterComponent,
  HeaderComponent,
  NotFoundComponent,
  EmployeeGridComponent,
  EmployeeComponent,
  DelModalComponent,
  InfoModalComponent
  ],
  imports: [
     CommonModule,
     HttpClientModule,
     BrowserModule,
     AppRoutingModule
  ],
  exports: 
  [FooterComponent,
  HeaderComponent,
   EmployeeComponent,
   DelModalComponent, 
   EmployeeGridComponent,
  InfoModalComponent],
  providers: [EmployeeGridComponent, HttpClientModule, BrowserModule]
})
export class SharedModule { }
