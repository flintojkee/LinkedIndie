import { Component } from '@angular/core';
import {ApiService} from './api.service';


@Component({
  selector: 'footer-component',
  template: `
  <mat-toolbar style="z-index:10; bottom: 0; margin-top:10px;">
    <span style="flex: 1 1 auto"></span>
    <div style="color:white;">Contact us: <i class="fab fa-telegram" ></i> <i class="fab fa-discord"></i> <i class="fas fa-envelope"></i>
    </div>
  </mat-toolbar>
    `,
  styleUrls:['../assets/main.css']

})
export class FooterComponent {

  constructor(public apiService: ApiService) {}

  title = 'app';

}
