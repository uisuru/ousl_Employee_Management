import { Salary } from '../salary';
import { Component, OnInit, Input } from '@angular/core';
import { SalaryService } from '../salary.service';
import { SalaryListComponent } from '../salary-list/salary-list.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-salary-details',
  templateUrl: './salary-details.component.html',
  styleUrls: ['./salary-details.component.css']
})
export class SalaryDetailsComponent implements OnInit {

  id: number;
  salary: Salary;

  constructor(private route: ActivatedRoute,private router: Router,
    private salaryService: SalaryService) { }

  ngOnInit() {
    this.salary = new Salary();

    this.id = this.route.snapshot.params['id'];
    
    this.salaryService.getSalary(this.id)
      .subscribe(data => {
        console.log(data)
        this.salary = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['salary']);
  }
}
