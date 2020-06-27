import { Supervisor } from '../supervisor';
import { Component, OnInit, Input } from '@angular/core';
import { SupervisorService } from '../supervisor.service';
import { SupervisorListComponent } from '../supervisor-list/supervisor-list.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-supervisor-details',
  templateUrl: './supervisor-details.component.html',
  styleUrls: ['./supervisor-details.component.css']
})
export class SupervisorDetailsComponent implements OnInit {

  id: number;
  supervisor: Supervisor;

  constructor(private route: ActivatedRoute,private router: Router,
    private supervisorService: SupervisorService) { }

  ngOnInit() {
    this.supervisor = new Supervisor();

    this.id = this.route.snapshot.params['id'];
    
    this.supervisorService.getSupervisor(this.id)
      .subscribe(data => {
        console.log(data)
        this.supervisor = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['supervisor']);
  }
}
