import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  baseApiUrl:string = environment.baseApiUrl;
  constructor(private http:HttpClient) { }

  //call Api|get employees
  getAllEmployees():Observable<Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl+'/api/employees')
  }

  downloadFile(MyFileName:string){
    //return this.http.get<Employee[]>(this.baseApiUrl+'/api/Employees/DownloadFiles')
    return this.http.get('https://localhost:7173/api/Employees/DownloadFile?fileName='+MyFileName, 
    {observe:'response',responseType:'blob'})
  }


  //create service to add employee
  // addEmployee(addEmployeeRequest:Employee):Observable<Employee>{
  //   addEmployeeRequest.id = '00000000-0000-0000-0000-000000000000';
  //   return this.http.post<Employee>(this.baseApiUrl+'/api/Employees/AddEmployees', addEmployeeRequest)
  // }
}
