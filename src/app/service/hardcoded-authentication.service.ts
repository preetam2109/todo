import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardcodedAuthenticationService {

  constructor() { }

  authenticate(username:any,password:any){
if(username=="Sneha" && password=="Gupta"){
  sessionStorage.setItem('authenticaterUser',username);
return true;
  }else{
    return false;
  }


}

 isUserLogedIn() {
  let user= sessionStorage.getItem('authenticaterUser');
return !(user===null)
}
logout(){
  sessionStorage.removeItem('authenticaterUser');

}




}
