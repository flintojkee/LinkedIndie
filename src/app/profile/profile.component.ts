import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import { ActivatedRoute } from "@angular/router"

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute){}

  profile;
  ngOnInit(){
    let id = this.route.snapshot.params.id;
    this.apiService.getProfile(id).subscribe(data =>
      this.profile = data
      );
  }
}
