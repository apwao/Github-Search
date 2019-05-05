import { Component, OnInit } from '@angular/core';
import {UserInfoService} from '../user-http/user-info.service';

@Component({
  selector: 'app-other-users',
  templateUrl: './other-users.component.html',
  styleUrls: ['./other-users.component.css'],
  providers: [UserInfoService]
})
export class OtherUsersComponent implements OnInit {
  userNameInput: string = "Apwao";
  userFinalDetails;
   getUserInfo(apwao){
    // alert(this.userNameInput)
     this.userInfoService.userDetailsRequest(this.userNameInput);
      this.userFinalDetails=this.userInfoService.userDetails

   }

  constructor(public userInfoService:UserInfoService) { }

  ngOnInit() {
  }

}
