import { IEmployee } from './../../domain/IEmployee';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private http: HttpClient) { }

    api = environment.api;
    endpoint = "empregados"


  findAllEmployees(): Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(`${this.api}/${this.endpoint}`).pipe(
      shareReplay()
    );
  }

  deleteEmployee(employee:IEmployee){
    console.log("no delete service", employee.id)
    return this.http.delete(`${this.api}/${this.endpoint}/${employee.id}`);
  }
}
