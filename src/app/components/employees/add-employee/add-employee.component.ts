import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent{

  fileForm = new FormGroup({
    emplyeeId: new FormControl(''),
    employeeName: new FormControl(''),
    department: new FormControl(''),
    salary: new FormControl('')
  });
  fileToUpload: any;
  // router: any;
  constructor(private http: HttpClient){
  }
  handleFileInput(e:any){
    this.fileToUpload = e?.target?.files[0];
  }
  baseApiUrl:string = environment.baseApiUrl;
  saveFileInfo(){
    debugger
    const formData:FormData = new FormData();
    formData.append('myFile', this.fileToUpload);
    formData.append('EmplyeeId', this.fileForm.value.emplyeeId!);
    formData.append('EmployeeName', this.fileForm.value.employeeName!);
    formData.append('Department', this.fileForm.value.department!);
    formData.append('Salary', this.fileForm.value.salary!); 
    return this.http.post(this.baseApiUrl+'/api/Employees/AddEmployees',formData,
    {
      headers: new HttpHeaders()})
      .subscribe(()=> alert("File Uploaded"));
  }
  
  successAlert(){
    Swal.fire({
      title: 'Success!!!',
      text: 'Employee Added Successfuly!',
      icon: 'success',
      confirmButtonText: 'OK'
    }).then((result) => {
      if (result.isConfirmed) {
        window.location.href = '/employees';
      }
    });
    
  }
}


