import { Component, OnInit } from '@angular/core';
import { Salary } from '../salary';
import { Router } from '@angular/router';
import { SalaryService } from '../salary.service';

@Component({
  selector: 'app-create-salary',
  templateUrl: './create-salary.component.html',
  styleUrls: ['./create-salary.component.css']
})
export class CreateSalaryComponent implements OnInit {

  salary: Salary = new Salary();
  submitted = false;

  constructor(private salaryService: SalaryService,
    private router: Router) { }

  ngOnInit() {
  }

  newSalary(): void {
    this.submitted = false;
    this.salary = new Salary();
  }

  save() {
    this.salaryService.createSalary(this.salary)
      .subscribe(data => console.log(data), error => console.log(error));
    this.salary = new Salary();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/salary']);
  }
}
