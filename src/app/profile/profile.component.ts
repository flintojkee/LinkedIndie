import { Component } from '@angular/core';
import {ApiService} from "../api.service";
import { ActivatedRoute } from "@angular/router"
import { AuthService } from '../auth.service';

@Component({
  selector: 'profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent {
  constructor(public apiService: ApiService, public route: ActivatedRoute, public authService: AuthService) {}

  public profile: Profile = new Profile();
  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.apiService.getProfile(id).subscribe(data =>
      this.profile = data
      );
  }
}
export class Profile {

  constructor(public email?: string,
              public name?:string,
              public roles?:Array<string>,
              public description?:string
  ) { }

}
