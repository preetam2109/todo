import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/service/basic-authentication.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  // username="Sneha";
  // password="Gupta";
  username:any;
  password:any;
  errorMessage="Invalid Credential";
  invalidLogin=false;
  constructor(private router:Router,public  hardcodedAuthenticationService:HardcodedAuthenticationService,private basicAuthenticationService: BasicAuthenticationService){
    
  }
  
  handleJWTBasicAuthLogin(){
    // if(this.username=="Sneha" && this.password=="Gupta"){
      debugger
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password).subscribe(res=>{
      console.log(res);
      this.router.navigate(['welcome',this.username])
    
    },
    error=>{
      console.log(error)
      this.invalidLogin=true
    }
    )
    }
  handleBasicAuthLogin(){
// if(this.username=="Sneha" && this.password=="Gupta"){
  debugger
this.basicAuthenticationService.executeAuthenticationService(this.username,this.password).subscribe(res=>{
  console.log(res);
  this.router.navigate(['welcome',this.username])

},
error=>{
  console.log(error)
  this.invalidLogin=true
}
)
}

register() {
  debugger

this.router.navigate(['/registration'])

  }
}
