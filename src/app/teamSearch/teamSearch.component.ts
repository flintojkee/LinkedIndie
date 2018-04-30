import { Component } from '@angular/core';
import {ApiService} from "../api.service"
import {AuthService} from "../auth.service";

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
  foundTeam = '';

  teams;
  filteredTeams;

  constructor(public apiService: ApiService, public authService:AuthService){}

  ngOnInit(){
    this.apiService.getTeams();
    this.teams = this.apiService.teams;
    this.filteredTeams = this.apiService.teams;
    console.log(this.teams);
  }

  performNameFilter(){
    console.log(this.foundTeam);
    this.filteredTeams = this.teams.filter((req:any) => (req.teamTitle.includes(this.foundTeam)));
  }
  sendTeamRequest(teamId,userId){
    this.apiService.sendTeamRequest({teamId:teamId, userId:userId} );
  }
}
