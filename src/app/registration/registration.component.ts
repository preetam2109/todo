import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/service/basic-authentication.service';
import { NgForm } from '@angular/forms';
import { ERole } from '../role';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  @ViewChild('registrationForm') registrationForm!: NgForm; // Reference to the form
  // rolevalue: ERole[] = [];
  // roleValues: string[] = Object.values(ERole).filter(value => typeof value === 'string');
  rolevalue: string[] = Object.values(ERole).filter(value => typeof value === 'string').map(role => role.toString());

  form: any = {
    username: null,
    email: null,
    password: null,
    role: []


  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private router:Router,private basicAuthenticationService: BasicAuthenticationService ){}
  ngOnInit(){
    
  }
  register(): void {
    debugger
    const { username, email, password,role } = this.form;

    this.basicAuthenticationService.register(username, email, password,[role]).subscribe({
      next: data => {
        // debugger
        // alert(data.message);
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/registration'])
        this.registrationForm.reset();
        
      },
      error: err => {
        alert(err.error.message)
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }
}
