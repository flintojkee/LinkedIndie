import {HttpClient} from "@angular/common/http"
import {Injectable} from "@angular/core"

@Injectable()
export class ApiService {
  messages = [];
  users = [];
  teams = [];

  constructor (private http: HttpClient){}

  getMessages(userId){
    this.http.get<any>('http://localhost:8080/api/posts/'+userId).subscribe(res => {
      this.messages = res;
    });
  }
  postMessage(message){
    this.http.post('http://localhost:8080/api/post', message).subscribe(res => {

    });
  }

  createTeam(teamData){
    this.http.post('http://localhost:8080/api/team', teamData).subscribe(res => {

    });
  }

  getUsers(){
    this.http.get<any>('http://localhost:8080/api/users').subscribe(res => {
      this.users = res;
    });
  }

  getTeams(){
    this.http.get<any>('http://localhost:8080/api/teams').subscribe(res => {
      this.teams = res;
    });
  }

  getProfile(id){
    return this.http.get('http://localhost:8080/profile/'+id)
  }

  getTeam(id){
    return this.http.get('http://localhost:8080/api/team/'+id)
  }
}
