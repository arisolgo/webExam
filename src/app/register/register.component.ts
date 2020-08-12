import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  constructor(private authService:AuthService, private router:Router) { }

  profile = {name: '', password: '', email: ''}

  ngOnInit() {
  }

  register(){
    console.log(this.profile);
      this.authService.signUp(this.profile).subscribe(result=>{
          console.log('ready');
          this.router.navigateByUrl('/login')
      }, error=>{

      })
  }



}
