import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-http/user-info.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserInfoService]
})
export class UserComponent implements OnInit {
  
  userFinalDetails:User;
  userFinalRepoDetails: Repo;

  constructor(public userInfoService:UserInfoService) { }

  ngOnInit() {
    // this.userInfoService.userDetailsRequest();
    // this.userFinalDetails = this.userInfoService.userDetails;
  }

}
