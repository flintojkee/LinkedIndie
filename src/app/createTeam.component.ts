import { Component } from '@angular/core';
import {ApiService} from './api.service';

@Component({
  selector: 'createTeam',
  template: `<mat-card style="width: 850px; margin-left: auto; margin-right: auto; padding-top: 84px;">
    <mat-card-header>
      <mat-card-title>
        <h4>New team</h4>
      </mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <form>
        <mat-input-container><input [(ngModel)]="teamData.teamTitle" name="teamTitle" matInput placeholder="team title"
                                    type="text" autocomplete="name"/></mat-input-container>
        <mat-input-container style="width: 100%"><textarea [(ngModel)]="teamData.description" name="description" matInput placeholder="description">
      </textarea></mat-input-container><br>
  
        <button (click)="createTeam()" mat-raised-button class="red-button">Create team</button>
      </form>
    </mat-card-content>
  </mat-card>
  `
})
export class CreateTeamComponent {
  public teamData:  TeamData = new TeamData();
  constructor(public apiService: ApiService){}
  createTeam() {
    this.apiService.createTeam(this.teamData);
  }
}

export class TeamData{
  constructor(public teamTitle?: string, public description?: string) {}
}
