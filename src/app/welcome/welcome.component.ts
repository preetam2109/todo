import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  message = 'Some Welcome Message'
  welcomeMessageFromService: string = ''
  name = ''

  constructor(private service:WelcomeDataService,private route:ActivatedRoute ){
  
  }

  ngOnInit(){
    console.log(this.route.snapshot.params['name'])
    this.name=this.route.snapshot.params['name']
    // this.age=this.route.snapshot.params['age']
  
  }
  
  getWelcomeMessage() {
    // debugger
    this.service.executeHelloWorldBeanService().subscribe(
      res=>this.handleSuccessfullResponse(res),
      error=>this.handleErrorResponse(error)

    );

  }
  handleErrorResponse(error: any): void {
    this.welcomeMessageFromService=error.error.message 
  }
handleSuccessfullResponse(res:any){
  this.welcomeMessageFromService=res.message


}

getWelcomeMessageWithParameter(){
  // debugger
  try{

    this.service.executeHelloWorldBeanServiceWithPathVariiable(this.name).subscribe(
      res=>this.handleSuccessfullResponse(res),
      error=>this.handleErrorResponse(error)
  
    );
  }
  catch(error){
    throw error;
  }

}



}
