import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from "@angular/router";
import  {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatListModule,
  MatSelectModule,
  MatSnackBarModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule, HTTP_INTERCEPTORS} from "@angular/common/http"

import { AppComponent } from './app.component';
import {ApiService} from "./api.service";
import {AuthService} from "./auth.service";
import { MessagesComponent } from "./messages.component"
import {RegisterComponent} from "./register/register.component";
import {LoginComponent} from "./login.component";
import {UserSearchComponent} from "./userSearch/userSearch.component";
import {TeamSearchComponent} from "./teamSearch/teamSearch.component";
import {ProfileComponent} from "./profile/profile.component";
import {PostComponent} from "./post.component";
import {CreateTeamComponent} from "./createTeam.component"
import {AuthInterceptorService} from "./authInterceptor.service"
import {TeamComponent} from "./teamPage/team.component";
import {MainPageComponent} from "./mainPage/mainPage.component";
import {FooterComponent} from './footer.component';
import {MatRadioModule} from '@angular/material/radio';

const routes = [
  {path: '', component: MainPageComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'users', component: UserSearchComponent},
  {path: 'teams', component: TeamSearchComponent},
  {path: 'createTeam', component: CreateTeamComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'team/:id', component: TeamComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MessagesComponent,
    RegisterComponent,
    LoginComponent,
    UserSearchComponent,
    TeamSearchComponent,
    TeamComponent,
    ProfileComponent,
    CreateTeamComponent,
    PostComponent,
    MainPageComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatListModule,
    MatSelectModule,
    MatSnackBarModule,
    MatRadioModule
  ],
  providers: [ApiService, AuthService, {
    provide:HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
