import { Component } from '@angular/core';
import {AuthService} from "./auth.service";


@Component({
  selector: 'login',
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>
          <h4>Login</h4>
        </mat-card-title>
      </mat-card-header>
      <mat-card-content style="color: #ffffff;">
        <form>
          <mat-input-container ><input [(ngModel)]="loginData.email" name="email" matInput placeholder="email"
                                      type="email" autocomplete="off"/></mat-input-container>
          <mat-input-container><input [(ngModel)]="loginData.pwd" name="password" matInput placeholder="password"
                                      type="password"/></mat-input-container>
          <button (click)="login()" mat-raised-button color="primary">Login</button>
        </form>
      </mat-card-content>
    </mat-card>`,
  styleUrls:['../assets/main.css']
})
export class LoginComponent {
  loginData = {};
  constructor(private apiService: AuthService){}
  login(){
    console.log(this.loginData);
    this.apiService.loginUser(this.loginData);
  }

  send(){

  }
}
