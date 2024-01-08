import { RouterModule, Routes } from "@angular/router";
import {NotFoundComponent} from '../shared/pages/not-found/not-found.component'
import {HomeComponent} from '../shared/pages/home/home.component'
import { EmployeeComponent } from "../shared/pages/employee/employee.component";


export const rotas: Routes = [
    {path:"", redirectTo:'home', pathMatch: "full"},
    {path: 'home', component: HomeComponent},
    {path: 'employee', component: EmployeeComponent},
    {path: '**', component: NotFoundComponent}
];
