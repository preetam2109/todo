import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/service/basic-authentication.service';
import { NgForm } from '@angular/forms';
import { ERole } from '../role';
import { UserDataServiceService } from '../service/data/user-data-service.service';
import { User } from 'User';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  id:number=0;
  // user:User=new User(this.id,'','','',[])
  user!:User
  @ViewChild('registrationForm') registrationForm!: NgForm; // Reference to the form
  // rolevalue: ERole[] = [];
  // roleValues: string[] = Object.values(ERole).filter(value => typeof value === 'string');
  rolevalue: string[] = Object.values(ERole).filter(value => typeof value === 'string').map(role => role.toString());

  form: any = {
    id:null,
    username: null,
    email: null,
    password: null,
    role: []


  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private httpClient:HttpClient,private userDataService:UserDataServiceService,private router:Router,private route:ActivatedRoute,private basicAuthenticationService: BasicAuthenticationService ){}
  ngOnInit(){

    debugger
    this.id = this.route.snapshot.params['id'];

    if (this.id != -1) {
      debugger
      this.userDataService.retrieveUser(this.id)
        .subscribe(res=>{
          //  alert(JSON.stringify(res))
           this.user = res
          this.form.id=res.id
          this.form.username=res.username
          this.form.email=res.email
          this.form.role=res.roles
          this.form.password=res.password
          // this.form.password=res.password


        })}
  }
  // updateUser() {
  //   this.userDataService.updateUser(this.id,this.user).subscribe(res=>{
  //     alert(JSON.stringify(res))
  //     this.isSuccessful = true;
  //     this.isSignUpFailed = false;
  //   })
  //   }
  // updateUser() {
  //   // Check if the form is valid before updating the user
  // debugger
  //     // Map the form data to the user object
  //     this.user.id=this.form.id
  //     this.user.username = this.form.username;
  //     this.user.email = this.form.email;
  //     this.user.roles = [this.form.role];
  //     this.user.password=this.form.password; // Assuming roles is an array
  
  //     // Call the updateUser method with the user object
  //     this.userDataService.updateUser(this.id, this.user).subscribe(res => {
  //       debugger
  //         alert(JSON.stringify(res));
  //         this.isSuccessful = true;
  //         this.isSignUpFailed = false;
  //       },
  //       (error) => {
  //         // console.error(error);
  //         // Handle error
  //       }
  //     );
  
  // }






  updateUser(updatedUser: User) {
    debugger
    this.userDataService.updateUser(updatedUser.id,updatedUser)
      .subscribe(
        response => {
           console.log('User updated successfully:', response);
          this.isSuccessful = true;
        },
        error => {
          console.error('Error updating user:', error);
        }
      );
  }








  
//   register(): void {
//     debugger
//     const { username, email, password,role } = this.form;
   
//     this.basicAuthenticationService.register(username, email, password,[role]).subscribe({
//       next: data => {
//         // debugger
//         // alert(data.message);
//         console.log(data);
//         this.isSuccessful = true;
//         this.isSignUpFailed = false;
//         this.router.navigate(['/registration'])
//         this.registrationForm.reset();
        
//       },
//       error: err => {
//         alert(err.error.message)
//         this.errorMessage = err.error.message;
//         this.isSignUpFailed = true;
//       }
//     });

// }
}
