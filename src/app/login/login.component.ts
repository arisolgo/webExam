import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  profile:any = { email: '',
    password: '',}
  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.profile);
    this.authService.logIn(this.profile).subscribe(result=>{
      
      console.log(result);
      this.router.navigateByUrl('/home')
    }, error=>{

    });
  }
  

}
