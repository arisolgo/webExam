import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
 
  constructor(private activatedRoute:ActivatedRoute, private router:Router, private httpClient:HttpClient) { }
  contactId = this.activatedRoute.snapshot.paramMap.get("id");
  contact = {};

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

  sendMessage(){
    console.log('ready')
    this.router.navigateByUrl('/email/'+this.contactId);
 
  }

  updateContact(){
    this.httpClient.put(`https://webexam-bf71f.firebaseio.com/users/${this.contactId}.json`, this.contact).subscribe(result=>{
      this.contact = result;
      console.log(result);
  }, error=>{

  })
  
    
  }

  

  goBack(){
    this.router.navigateByUrl('/home')
  }
  

}
