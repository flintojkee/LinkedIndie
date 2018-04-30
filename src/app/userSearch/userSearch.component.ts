import { Component } from '@angular/core';
import {ApiService} from "../api.service"

@Component({
  selector: 'users',
  templateUrl:"userSearch.component.html",
  styleUrls:["../../assets/main.css"]
})
export class UserSearchComponent {
  title = 'app';
  foundUser = '';

  users;
  filteredUsers;
  constructor(public apiService: ApiService){}

  ngOnInit(){
    this.apiService.getUsers();
    this.users = this.apiService.users;
    this.filteredUsers = this.apiService.users;
  }

  getAllUsers(){
    this.filteredUsers = this.users;
  }

  performFilter(filter){
    this.filteredUsers = this.users.filter((req:any) => req.roles.indexOf(filter) > -1);
  }

  performNameFilter(){
    console.log(this.foundUser);
    this.filteredUsers = this.users.filter((req:any) => (req.name.includes(this.foundUser)));
  }
}
