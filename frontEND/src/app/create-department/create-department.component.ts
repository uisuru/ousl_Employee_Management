import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { Router } from '@angular/router';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-create-department',
  templateUrl: './create-department.component.html',
  styleUrls: ['./create-department.component.css']
})
export class CreateDepartmentComponent implements OnInit {

  department: Department = new Department();
  submitted = false;

  constructor(private departmentService: DepartmentService,
    private router: Router) { }

  ngOnInit() {
  }

  newDepartment(): void {
    this.submitted = false;
    this.department = new Department();
  }

  save() {
    this.departmentService.createDepartment(this.department)
      .subscribe(data => console.log(data), error => console.log(error));
    this.department = new Department();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/department']);
  }
}
