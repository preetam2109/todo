import { Component } from '@angular/core';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/service/basic-authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  isUserLogedIn:boolean=false;
  constructor(public  hardcodedAuthenticationService:HardcodedAuthenticationService,public basicAuthenticationService:BasicAuthenticationService){

  }

  ngOnInit(){
    // this.isUserLogedIn=this.hardcodedAuthenticationService.isUserLogedIn();
    this.isUserLogedIn=this.basicAuthenticationService.isUserLogedIn();

  }

}
