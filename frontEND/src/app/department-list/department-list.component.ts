import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { DepartmentService } from "../department.service";
import { Department } from "../department";
import { Router } from '@angular/router';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.css']
})
export class DepartmentListComponent implements OnInit {

  departments: Observable<Department[]>;

  constructor(private departmentService: DepartmentService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.departments = this.departmentService.getDepartmentsList();
  }

  deleteDepartment(id: number) {
    this.departmentService.deleteDepartment(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  departmentDetails(id: number){
    this.router.navigate(['department/details', id]);
  }
}