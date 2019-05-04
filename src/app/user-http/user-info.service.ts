import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from '/src/environments/environment';
import {Repo} from '../repo';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  userDetails: User;
  userRepos: Repo;

  constructor(public http:HttpClient) { 
    this.userDetails=new User("","","","",0,"");
    this.userRepos=new Repo("","");

  }

  userDetailsRequest(){

    interface SortUserDetails{
      login: string;
      bio: string;
      avatar_url: string;
      repos_url: string;
      public_repos: number;
      name : string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<SortUserDetails>(environment.userApiUrl).toPromise().then(response=>{
        
        this.userDetails.userName=response.login;
        this.userDetails.briefDescription= response.bio;
        this.userDetails.image= response.avatar_url;
        this.userDetails.myReposUrl= response.repos_url;
        this.userDetails.myPublicRepos= response.public_repos;
        this.userDetails.fullName=response.name;

        resolve()

      },
      error=>{
        this.userDetails.userName="";
        this.userDetails.briefDescription="";
        this.userDetails.image="";
        this.userDetails.myReposUrl="";
        this.userDetails.myPublicRepos=0;
        this.userDetails.fullName="";

        reject(error)
      }
      )
    })

      return promise;


  }


  otherUsersDetailsRequest(){

    interface SortOtherUserDetails{
      name: string;
      description: string;
    }
    let promise = new Promise((resolve,reject)=>{
      this.http.get<SortOtherUserDetails>(environment.userApiUrl).toPromise().then(response=>{
        
        this.userRepos.repoName=response.name;
        this.userRepos.description= response.description;
        resolve()

      },
      error=>{
        this.userRepos.repoName="";
        this.userRepos.description="";

        reject(error)
      }
      )
    })

      return promise;


  }
}

