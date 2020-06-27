import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { SalaryService } from "../salary.service";
import { Salary } from "../salary";
import { Router } from '@angular/router';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.css']
})
export class SalaryListComponent implements OnInit {

  salarys: Observable<Salary[]>;

  constructor(private salaryService: SalaryService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.salarys = this.salaryService.getSalarysList();
  }

  deleteSalary(id: number) {
    this.salaryService.deleteSalary(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  salaryDetails(id: number){
    this.router.navigate(['salary/details', id]);
  }
}