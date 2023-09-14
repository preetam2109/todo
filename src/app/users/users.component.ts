import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'User';
import { UserDataServiceService } from '../service/data/user-data-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
users: User[] | undefined;
message: any;
roleNames: any= {};
constructor(private http:HttpClient,private route :Router ,private userDataService:UserDataServiceService){
}
 rolesData = [
  { "id": 1, "name": "ROLE_USER" },
  { "id": 2, "name": "ROLE_MODERATOR" },
  { "id": 3, "name": "ROLE_ADMIN" }
];
// roleNames = this.rolesData.map(role => role.name);

// fetchRolesData() {
//   debugger
//   // Make an HTTP GET request to your API to fetch role data
//   this.http.get<any[]>(`http://localhost:8080/api/auth/users/roles`).subscribe(data => {
//     // Extract role names from the received data
//     this.roleNames = data.map(role => role.name);

//   });
// }

fetchRolesData() {
  debugger
  this.http.get<any[]>(`http://localhost:8080/api/auth/users/roles`).subscribe(data => {
    // Build a mapping of role IDs to role names
    this.roleNames = {};
    data.forEach(role => {
      this.roleNames[role.id] = role.name;
    });
  });
}
mapRoleIdToRoleName(roleId: any) {
  // Use the mapping to return the role name for the given role ID
  return this.roleNames[roleId.id] || 'Unknown Role';
}






ngOnInit(){
this.getUser()
debugger
this.fetchRolesData();
}
  getUser() {
    this.userDataService.retrieveAllUsers().subscribe(res=>{
      // res.roles = res.roles.map((roleId: number) => this.mapRoleName(roleId));

      this.users=res
      console.log(res);
      


    })
  }
addTodo() {
throw new Error('Method not implemented.');
}
deleteTodo(id: any) {
  debugger
  this.userDataService.deleteUser(id).subscribe(res=>{
    alert(JSON.stringify(res))
    this.getUser()
  })
}
updateTodo(id: any) {
  this.route.navigate(['update',id]);
}


}
