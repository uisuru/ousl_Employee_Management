import { Component, OnInit } from '@angular/core';

import { Observable } from "rxjs";
import { SupervisorService } from "../supervisor.service";
import { Supervisor } from "../supervisor";
import { Router } from '@angular/router';

@Component({
  selector: 'app-supervisor-list',
  templateUrl: './supervisor-list.component.html',
  styleUrls: ['./supervisor-list.component.css']
})
export class SupervisorListComponent implements OnInit {

  supervisors: Observable<Supervisor[]>;

  constructor(private supervisorService: SupervisorService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.supervisors = this.supervisorService.getSupervisorsList();
  }

  deleteSupervisor(id: number) {
    this.supervisorService.deleteSupervisor(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  supervisorDetails(id: number){
    this.router.navigate(['supervisor/details', id]);
  }
}