import { Component } from '@angular/core';
import {ApiService} from "../api.service"

@Component({
  selector: 'mainPage',
  templateUrl: 'mainPage.component.html',
  
  styleUrls: ['mainPage.component.css']
})

export class MainPageComponent {

  constructor(public apiService: ApiService){}

}
