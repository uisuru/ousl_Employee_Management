import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { Observable } from "rxjs";
import { Department } from '../department';
import { Salary } from '../salary';
import { Supervisor } from '../supervisor';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  departments: Observable<Department[]>;
  salarys: Observable<Salary[]>;
  supervisors: Observable<Supervisor[]>;
  employee: Employee = new Employee();
  submitted = false;

  constructor(private employeeService: EmployeeService,
    private router: Router) { }
   

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.departments = this.employeeService.getDepartmentList();
    this.salarys = this.employeeService.getSalaryList();
    this.supervisors = this.employeeService.getSupervisorList();
  }
  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => console.log(error));
    this.employee = new Employee();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/employees']);
  }
}
