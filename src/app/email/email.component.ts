import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  contactId = this.activatedRoute.snapshot.paramMap.get("id");
  contact = {};
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private httpClient:HttpClient) { }

  ngOnInit() {

   this.getContact();
  }


  getContact(){
    this.httpClient.get(`https://webexam-bf71f.firebaseio.com/users/${this.contactId}.json`).subscribe(result=>{
        this.contact = result;
        console.log(result);
    }, error=>{

    })
}


goBack(){
  this.router.navigateByUrl('/home');
}



}

