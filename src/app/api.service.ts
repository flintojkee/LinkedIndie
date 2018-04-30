import {HttpClient} from "@angular/common/http"
import {Injectable} from "@angular/core"

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
    this.http.get<any>('/api/teams').subscribe(res => {
      this.teams = res;
    });
  }

  getProfile(id) {
    return this.http.get('/api/profile/' + id);
  }

  getTeam(id) {
    return this.http.get('/api/team/' + id);
  }

  sendTeamRequest(teamId){
    this.http.post('/api/sendTeamRequest', teamId).subscribe(res => {
    });
  }

  updateTeamRequest(data){
    this.http.put('/updateTeamRequest', data).subscribe(res => {
    });
  }
}
