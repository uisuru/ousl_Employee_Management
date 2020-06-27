import { Component, OnInit } from '@angular/core';
import { Parent } from '../parent';
import { ActivatedRoute, Router } from '@angular/router';
import { ParentService } from '../parent.service';

@Component({
  selector: 'app-update-parent',
  templateUrl: './update-parent.component.html',
  styleUrls: ['./update-parent.component.css']
})
export class UpdateParentComponent implements OnInit {

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

  updateParent() {
    this.parentService.updateParent(this.id, this.parent)
      .subscribe(data => console.log(data), error => console.log(error));
    this.parent = new Parent();
    this.gotoList();
  }

  onSubmit() {
    this.updateParent();    
  }

  gotoList() {
    this.router.navigate(['/parents']);
  }
}