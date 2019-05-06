import { Component, OnInit } from '@angular/core';
import {UserInfoService} from '../user-http/user-info.service';

@Component({
  selector: 'app-other-users',
  templateUrl: './other-users.component.html',
  styleUrls: ['./other-users.component.css'],
  providers: [UserInfoService]
})
export class OtherUsersComponent implements OnInit {
  userNameInput: string;
  userFinalDetails;
  userFinalRepoDetails;

   getUserInfo(){
      this.userInfoService.userDetailsRequest(this.userNameInput);
      this.userFinalDetails=this.userInfoService.userDetails;
      this.userInfoService.userDetailsRequest(this.userNameInput);
      this.userInfoService.otherUsersRepo(this.userNameInput);
   }
  constructor(public userInfoService:UserInfoService) { }
  ngOnInit() {
  }

}
