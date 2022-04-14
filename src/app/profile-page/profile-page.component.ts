import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent implements OnInit {

  profile: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getProfile()
      .subscribe((data: any) => {
        this.profile = data;
      });
  }

}
