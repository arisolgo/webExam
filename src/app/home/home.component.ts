import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent  {

  displayedColumns: string[] = ['name', 'lastName', 'email','phoneNumber',  'buttons'];
  
  users =[];
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private httpClient:HttpClient) { }

  ngAfterViewInit() {
    this.getUsers();
  }

  goToDetail(id){

    this.router.navigate(['../user-detail/'+id], { relativeTo: this.activatedRoute }); 
 
  }

  getUsers(){
      this.httpClient.get('https://webexam-bf71f.firebaseio.com/users.json').subscribe(result=>{

          for( let prop in result ){
            
            this.users.push(result[prop]);
        }

        console.log(this.users);
      })
  }

}
