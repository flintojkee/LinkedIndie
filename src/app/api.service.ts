import {HttpClient} from "@angular/common/http"
import {Injectable} from "@angular/core"

@Injectable()
export class ApiService {
  messages = [];
  users = [];
  teams = [];

  constructor (public http: HttpClient){}

  getMessages(userId){
    this.http.get<any>('http://localhost:80/api/posts/'+userId).subscribe(res => {
      this.messages = res;
    });
  }
  postMessage(message){
    this.http.post('http://localhost:80/api/post', message).subscribe(res => {

    });
  }

  createTeam(teamData){
    this.http.post('http://localhost:80/api/team', teamData).subscribe(res => {

    });
  }

  getUsers(){
    this.http.get<any>('http://localhost:80/api/users').subscribe(res => {
      this.users = res;
    });
  }

  getTeams(){
    this.http.get<any>('http://localhost:80/api/teams').subscribe(res => {
      this.teams = res;
    });
  }

  getProfile(id){
    return this.http.get('http://localhost:80/profile/'+id)
  }

  getTeam(id){
    return this.http.get('http://localhost:80/api/team/'+id)
  }
}
