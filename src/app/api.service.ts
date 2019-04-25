import {HttpClient} from "@angular/common/http"
import {Injectable} from "@angular/core"
import { map, tap } from "rxjs/operators";

import { Team } from "./teamPage/team.component";
import { Observable } from "rxjs";

@Injectable()
export class ApiService {
  messages = [];
  users = [];
  teams = [];

  constructor(public http: HttpClient) {
  }

  getMessages(userId) {
    this.http.get<any>('/api/posts/' + userId).subscribe(res => {
      this.messages = res;
    });
  }

  postMessage(message) {
    this.http.post('/api/post', message).subscribe(res => {

    });
  }

  createTeam(teamData) {
    this.http.post('/api/team', teamData).subscribe(res => {

    });
  }

  getUsers() {
    this.http.get<any>('/api/users').subscribe(res => {
      this.users = res;
    });
  }

  getTeams() {
    return this.http.get<any>('/api/teams');
  }

  getProfile(id) {
    return this.http.get('/api/profile/' + id);
  }

  getTeam(id):Observable<Team> {
    return this.http.get<any>('/api/team/' + id).pipe(
      map(res => {
      console.log(res)
      return res
      }
    ))
  }

  sendTeamRequest(teamId){
    this.http.post('/api/sendTeamRequest', teamId).subscribe(res => {
      console.log(res)
    });
  }

  updateTeamRequest(data){
    this.http.put('/api/updateTeamRequest', data).subscribe(res => {
    });
  }
}
