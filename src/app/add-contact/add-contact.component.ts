import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.scss']
})
export class AddContactComponent implements OnInit {

  profile ={name: '', lastName: '', email:'', telNumber:''};
  constructor(private httpClient:HttpClient, private router:Router) { }

  ngOnInit() {
  }



  addContact(){
    this.httpClient.post("https://webexam-bf71f.firebaseio.com/users.json", this.profile).subscribe(result=>{
      console.log(this.profile);
      this.router.navigateByUrl('/home')
    },
    error=>{

    })
      
  }

  goBack(){
    this.router.navigateByUrl('/home');
  }



}
