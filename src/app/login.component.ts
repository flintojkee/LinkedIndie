import { Component } from '@angular/core';
import {AuthService} from "./auth.service";


@Component({
  selector: 'login',
  templateUrl:'login.component.html',
  styleUrls:['../assets/main.css']
})
export class LoginComponent {

  constructor(public authService: AuthService){}
  public loginData: LoginData = new LoginData();
  login(){
    console.log(this.loginData);
    this.authService.loginUser(this.loginData);
  }

  send(){

  }
}

export class LoginData {
  constructor(public email?: string,
              public pwd?: string
  ) { }
}
