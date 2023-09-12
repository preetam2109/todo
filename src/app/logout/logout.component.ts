import { Component } from '@angular/core';
import { HardcodedAuthenticationService} from '../service/hardcoded-authentication.service';
import { BasicAuthenticationService } from '../service/service/basic-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {
constructor(private hardcodedAuthenticationService:HardcodedAuthenticationService,private basicAuthenticationService:BasicAuthenticationService){

}
ngOnInit(){
  // this.hardcodedAuthenticationService.logout();
  this.basicAuthenticationService.logout();

}
}
