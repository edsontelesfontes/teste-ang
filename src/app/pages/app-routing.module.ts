import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { rotas } from './rotas';

const routes: Routes = [
  {path: "", redirectTo: "home", pathMatch: "full"},
  ...rotas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
