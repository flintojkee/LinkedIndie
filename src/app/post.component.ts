import { Component } from '@angular/core';
import {ApiService} from "./api.service"

@Component({
  selector: 'post',
  template: `<mat-card>
    <mat-card-header>
      <mat-card-title>
        <h4>New post</h4>
      </mat-card-title>
    </mat-card-header>
    <mat-card-content>
      <form>
        <mat-input-container style="width: 100%"><textarea [(ngModel)]="postMsg" name="postMsg" matInput placeholder="Post message">
      </textarea></mat-input-container><br>
        <button (click)="post()" mat-raised-button color="primary">Post</button>
      </form>
    </mat-card-content>
  </mat-card>
  `
})
export class PostComponent {
  constructor(private apiService: ApiService){}
  postMsg = '';
  post(){
    this.apiService.postMessage({msg: this.postMsg});
  }
}
