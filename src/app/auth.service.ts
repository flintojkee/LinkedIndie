import {HttpClient, HttpErrorResponse} from "@angular/common/http"
import {Injectable} from "@angular/core"
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import {MatSnackBar} from '@angular/material';
import {catchError} from "rxjs/operators";
import {ErrorObservable} from "rxjs/observable/ErrorObservable";
@Injectable()
export class AuthService {

  TOKEN_KEY = 'token';

  constructor (public http: HttpClient,public snackBar: MatSnackBar){}


  registerUser(registerData){
    this.http.post<any>('/api/register',registerData)
      .pipe(
        catchError(this.handleError)
      )
      .subscribe(res => {
      this.saveToken(res.token);
      this.saveId(res.userId);
      })
  }

  get token() {
    return localStorage.getItem(this.TOKEN_KEY);
  }

  get userId(){
    return localStorage.getItem('userId');
  }

  isTeamLead(teamLeadId){
    let userId = localStorage.getItem('userId');
    return userId === teamLeadId;
  }

  get isAuthenticated(){
    return localStorage.getItem(this.TOKEN_KEY);
  }

  logout(){
    localStorage.removeItem(this.TOKEN_KEY);
    localStorage.removeItem('userId');
  }

  loginUser(loginData){
    console.log(loginData);
    this.http.post<any>('/api/login',loginData)
      .subscribe(res => {
      this.saveToken(res.token);
      this.saveId(res.userId);
    });
  }

  saveToken(token){
    localStorage.setItem(this.TOKEN_KEY, token);
  }
  saveId(userId){
    localStorage.setItem('userId', userId);
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);

    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `reason was: ${error.error.message}`);
    }
    // return an ErrorObservable with a user-facing error message
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };
}
