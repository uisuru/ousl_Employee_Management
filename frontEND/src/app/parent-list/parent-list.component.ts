import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { ParentService } from "../parent.service";
import { Parent } from "../parent";
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrls: ['./parent-list.component.css']
})
export class ParentListComponent implements OnInit {

  parents: Observable<Parent[]>;

  constructor(private parentService: ParentService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.parents = this.parentService.getParentsList();
  }

  deleteParent(id: number) {
    this.parentService.deleteParent(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }
  updateEmployee(id: number){  
    this.parentService.getParent(id)  
      .subscribe(  
        data => {  
          this.router.navigate(['update', id]);
        },  
        error => console.log(error));  
  }

  parentDetails(id: number){
    this.router.navigate(['details', id]);
  }
}