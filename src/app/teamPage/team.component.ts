import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import { ActivatedRoute } from "@angular/router"
import {AuthService} from "../auth.service";
import { takeWhile } from 'rxjs/operators';
import 'rxjs/add/observable/of';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'team',
  templateUrl:"team.component.html",
  styleUrls:["../../assets/main.css" ,
            "team.component.css"]
})
export class TeamComponent {
  constructor(private apiService: ApiService, public route: ActivatedRoute, public authService: AuthService){}

    public team: Team;
    alive: boolean;
    isTeamlead = true;
    requests = [];
    ngOnInit(){
    let id = this.route.snapshot.params.id;
    this.alive = true;
    this.apiService.getTeam(id).pipe(takeWhile(() => this.alive)).subscribe(res => 
      {
        this.team = res
        this.authService.isTeamLead(this.team.teamLead);
        const users = this.team.requests.map(val => {
          return val.user;
        })
        const source = Observable.of(...users);
        const exampleOne = source.concatMap(val => this.apiService.getProfile(val));
        //output: 'Example One: 'Hello World', Example One: 'Goodbye World'
        exampleOne.subscribe(val => {
          this.requests.push(val);
          console.log(this.requests)
        });

      });
  }
  updateTeamRequset(teamId, userId, status){
    let data = {teamId:teamId, userId:userId, status:status};
    this.apiService.updateTeamRequest(data);
    console.log(data);
  }
  ngOnDestroy() {
    this.alive = false;
  }

  getRequests(req: Request[]) {
      const sourceOne = Observable.interval(2000);
      const obs$ = sourceOne
      .map(val => Observable.of(val + 10))
      .concatAll();
      return obs$;
  }
}


export class Team{
  _id:string;
  teamTitle: string;
  description: string;
  teamLead:TeamLead;
  requests:Request[];
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

