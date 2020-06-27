import { Component, OnInit } from '@angular/core';
import { Parent } from '../parent';
import { Router } from '@angular/router';
import { ParentService } from '../parent.service';
import { Observable } from "rxjs";
import { Employee } from '../employee';

@Component({
  selector: 'app-create-parent',
  templateUrl: './create-parent.component.html',
  styleUrls: ['./create-parent.component.css']
})
export class CreateParentComponent implements OnInit {

  employees: Observable<Employee[]>;
  parent: Parent = new Parent();
  submitted = false;

  constructor(private parentService: ParentService,
    private router: Router) { }
   

  ngOnInit() {
    this.reloadData();
  }
  reloadData() {
    this.employees = this.parentService.getEmployeeList();
  }
  newParent(): void {
    this.submitted = false;
    this.parent = new Parent();
  }

  save() {
    this.parentService.createParent(this.parent)
      .subscribe(data => console.log(data), error => console.log(error));
    this.parent = new Parent();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/parents']);
  }
}
