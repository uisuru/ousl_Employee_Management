import { Component, OnInit } from '@angular/core';
import { Supervisor } from '../supervisor';
import { Router } from '@angular/router';
import { SupervisorService } from '../supervisor.service';

@Component({
  selector: 'app-create-supervisor',
  templateUrl: './create-supervisor.component.html',
  styleUrls: ['./create-supervisor.component.css']
})
export class CreateSupervisorComponent implements OnInit {

  supervisor: Supervisor = new Supervisor();
  submitted = false;

  constructor(private supervisorService: SupervisorService,
    private router: Router) { }

  ngOnInit() {
  }

  newSuppervisor(): void {
    this.submitted = false;
    this.supervisor = new Supervisor();
  }

  save() {
    this.supervisorService.createSupervisor(this.supervisor)
      .subscribe(data => console.log(data), error => console.log(error));
    this.supervisor = new Supervisor();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/supervisor']);
  }
}
