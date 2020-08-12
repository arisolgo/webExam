import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
 
  constructor(private activatedRoute:ActivatedRoute, private router:Router) { }
  userId = +this.activatedRoute.snapshot.paramMap.get("id");
  ngOnInit() {
  }

  sendMessage(){

    this.router.navigate(['../email/'+this.userId], { relativeTo: this.activatedRoute }); 
 
  }

}
