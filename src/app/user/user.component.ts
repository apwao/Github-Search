import { Component, OnInit } from '@angular/core';
import { UserInfoService } from '../user-http/user-info.service';
import { User } from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserInfoService]
})
export class UserComponent implements OnInit {
   myFinalDetails:User;
  
  constructor(public userInfoService:UserInfoService) { }

  ngOnInit() {
   
    this.userInfoService.myUserDetailsRequest();
    this.myFinalDetails = this.userInfoService.myUserDetails;
    this.userInfoService.myRepoRequest()
    
  }

}
