import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import { ActivatedRoute } from "@angular/router"
import {AuthService} from "../auth.service";

@Component({
  selector: 'team',
  templateUrl:"team.component.html",
  styleUrls:["../../assets/main.css" ,
            "team.component.css"]
})
export class TeamComponent {
  constructor(public apiService: ApiService, public route: ActivatedRoute, public authService: AuthService){}

  public team:  Team = new Team();
  public teamLead:  TeamLead = new TeamLead();

  ngOnInit(){
  let id = this.route.snapshot.params.id;

    this.apiService.getTeam(id).subscribe(data => {
      this.team = data;
      let teamLeadId = this.team.teamLead;
      this.apiService.getProfile(teamLeadId).subscribe(data => this.teamLead = data);
      for (let request of this.team.requests) {
        this.apiService.getProfile(request.user).subscribe(data => request.userProfile = data);
      }
      console.log(this.team.requests);
    });
  }
  updateTeamRequset(teamId, userId, status){
    let data = {teamId:teamId, userId:userId, status:status};
    this.apiService.updateTeamRequest(data);
    console.log(data);
  }
}

export class Team{
  constructor(public _id?:string,
              public teamTitle?: string,
              public description?: string,
              public teamLead?:string,
              public requests?:Request[]
  ) { }

}

export class Request{
  constructor(public user?:string,
              public status?: boolean,
              public userProfile?: User
  ) { }

}

export class TeamLead {
  constructor(public name?: string) { }
}

export class User {
  constructor(public name?: string,
              public roles?:string[]) { }
}

