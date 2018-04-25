import { Component } from '@angular/core';
import {ApiService} from "./api.service"

@Component({
  selector: 'createTeam',
  template: `<mat-card>
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
        <button (click)="createTeam()" mat-raised-button color="primary">Create team</button>
      </form>
    </mat-card-content>
  </mat-card>
  `
})
export class CreateTeamComponent {
  constructor(public apiService: ApiService){}
  teamData: any;
  createTeam(){
    this.apiService.createTeam(this.teamData);
  }
}
