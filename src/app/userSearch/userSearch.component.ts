import { Component } from '@angular/core';
import {ApiService} from "../api.service"

@Component({
  selector: 'users',
  templateUrl:"userSearch.component.html",
  styleUrls:["../../assets/main.css"]
})
export class UserSearchComponent {
  title = 'app';

  constructor(public apiService: ApiService){}

  ngOnInit(){
    this.apiService.getUsers();
  }
}
