import { Component } from '@angular/core';
import {AuthService} from "./auth.service";



@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar class = "navbar navbar-expand-lg navbar-dark" >
    <img src="../assets/images/logo_fill_xs.png">
      <button mat-button routerLink="/">LinkedIndie</button>
      <button mat-button *ngIf="authService.isAuthenticated" [routerLink]="['/profile', authService.userId]">Profile</button>
      <button mat-button *ngIf="authService.isAuthenticated"  routerLink="/createTeam">Create Team</button>
      <button mat-button="" routerLink="/users">Users</button>
      <button mat-button="" routerLink="/teams">Teams</button>
      <span style="flex: 1 1 auto"></span>
      <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/register">Register</button>
      <button mat-button *ngIf="!authService.isAuthenticated" routerLink="/login">Login</button>
      <button mat-button *ngIf="authService.isAuthenticated" (click)="authService.logout()">Logout</button>
    </mat-toolbar>
    <router-outlet></router-outlet>
    <footer-component></footer-component> 
    `,
  styleUrls:['../assets/main.css']
})

export class AppComponent {

  constructor(public authService: AuthService) {}

  title = 'app';

}
