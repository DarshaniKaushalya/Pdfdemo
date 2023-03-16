import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
})
export class EmployeeListComponent implements OnInit {
  //employee array from employee model
  employees: Employee[] = [];
  constructor(private employeesService:EmployeesService, private http:HttpClient) {}
  ngOnInit(): void {
    //add employee to Employee array
    this.employeesService.getAllEmployees()
    .subscribe({
      next:(employees) =>{
        this.employees = employees;
        console.log(employees);
      },
      error:(response) =>{
        console.log(response);
      },
    });    
  }
  GetDownload(MyFileName:string){
    this.employeesService.downloadFile(MyFileName).subscribe(res=>{
      let blob:Blob=res.body as Blob;
      let url=window.URL.createObjectURL(blob);

      let a =document.createElement('a');
      a.download=MyFileName;
      a.href=url;
      a.click();

      //To print pdf
      //window.open(url);
    });
  }  
}


