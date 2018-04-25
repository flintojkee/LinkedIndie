import { Component } from '@angular/core';
import {ApiService} from "../api.service"

@Component({
  selector: 'teams',
  /*template: `
    <div *ngFor="let team of apiService.teams">
      <mat-card [routerLink]="['/team', team._id]" style="cursor: pointer;">
        <mat-card-title>{{team.teamTitle}}</mat-card-title>
        <mat-card-content>{{team.description}}</mat-card-content>
        <mat-card-footer>{{team.dateTime}}</mat-card-footer>
      </mat-card>
    </div>`*/
  templateUrl:"teamSearch.component.html",
  styleUrls:["../../assets/main.css"]
})
export class TeamSearchComponent {

  constructor(public apiService: ApiService){}

  ngOnInit(){
    this.apiService.getTeams();
  }
}
