import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'team',
  templateUrl:"team.component.html",
  styleUrls:["../../assets/main.css"]
})
export class TeamComponent {
  constructor(public apiService: ApiService, public route: ActivatedRoute){}

  team: any;
  teamLead:any;

  ngOnInit(){
    let id = this.route.snapshot.params.id;
    this.apiService.getTeam(id).subscribe(data => {
      this.team = data;
      let teamLeadId = this.team.teamLead;
      this.apiService.getProfile(teamLeadId).subscribe(data => this.teamLead = data);
    });

  }
}
