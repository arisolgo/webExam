import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';






@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  displayedColumns: string[] = ['name', 'lastName', 'email','phoneNumber',  'buttons'];
  
  users =[];
  constructor(private router:Router, private activatedRoute:ActivatedRoute, private httpClient:HttpClient) { }

  ngOnInit() {
    this.getUsers();
  }

  goToDetail(id){

    this.router.navigate(['../user-detail/'+id], { relativeTo: this.activatedRoute }); 
 
  }

  getUsers(){
    this.users =[];
      this.httpClient.get('https://webexam-bf71f.firebaseio.com/users.json').subscribe(result=>{
      let objArray ={name: '', lastName: '', email: '', telephone:'', id:''}
       let i = 0
          for( let prop in result ){
            this.users.push(result[prop]);
            this.users[i]['id'] = prop;
            i++;

        }


        console.log(this.users);
      })
  }

  deleteContact(id){
    this.httpClient.delete(`https://webexam-bf71f.firebaseio.com/users/${id}.json`).subscribe(result=>{
      console.log(result);
      this.ngOnInit();
  }, error=>{

  })
  
    
  }

  addContact(){
    this.router.navigateByUrl('/add-contact');
  }

}
