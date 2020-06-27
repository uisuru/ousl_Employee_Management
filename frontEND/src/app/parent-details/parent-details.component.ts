import { Parent } from '../parent';
import { Component, OnInit, Input } from '@angular/core';
import { ParentService } from '../parent.service';
import { ParentListComponent } from '../parent-list/parent-list.component';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-parent-details',
  templateUrl: './parent-details.component.html',
  styleUrls: ['./parent-details.component.css']
})
export class ParentDetailsComponent implements OnInit {

  id: number;
  parent: Parent;

  constructor(private route: ActivatedRoute,private router: Router,
    private parentService: ParentService) { }

  ngOnInit() {
    this.parent = new Parent();

    this.id = this.route.snapshot.params['id'];
    
    this.parentService.getParent(this.id)
      .subscribe(data => {
        console.log(data)
        this.parent = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['parents']);
  }
}
