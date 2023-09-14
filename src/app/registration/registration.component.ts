import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/service/basic-authentication.service';
import { NgForm } from '@angular/forms';
import { ERole } from '../role';
import { UserDataServiceService } from '../service/data/user-data-service.service';
import { User } from 'User';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  id:number | undefined;
  user:User | undefined
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

  constructor(private userDataService:UserDataServiceService,private router:Router,private route:ActivatedRoute,private basicAuthenticationService: BasicAuthenticationService ){}
  ngOnInit(){

    debugger
    this.id = this.route.snapshot.params['id'];

    if (this.id != -1) {
      debugger
      this.userDataService.retrieveUser(this.id)
        .subscribe(res=>{
          // alert(JSON.stringify(res))
           this.user = res
          //  this.form.id=res.id
          this.form.username=res.username
          this.form.email=res.email
          this.form.role.name=res.roles
          // this.form.password=res.password


        })}
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
