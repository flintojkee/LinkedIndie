import { Component } from '@angular/core';
import {ApiService} from "./api.service";
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'messages-root',
  template: `
    <div *ngFor="let message of apiService.messages">
      <mat-card>{{message.msg}}</mat-card>
    </div>`
})
export class MessagesComponent {

  constructor(public apiService: ApiService, public route: ActivatedRoute){}

  ngOnInit(){
    var userId = this.route.snapshot.params.id;
    this.apiService.getMessages(userId);
  }
}
