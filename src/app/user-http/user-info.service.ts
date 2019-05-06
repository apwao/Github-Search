import { Injectable } from '@angular/core';
import { User } from '../user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {Repo} from '../repo';

@Injectable({
  providedIn: 'root'
})
export class UserInfoService {
  userDetails: User;
  myUserDetails: User;
  //userRepos: Repo;
  repo;
  

  constructor(public http:HttpClient) { 
    this.userDetails=new User("","","","",0,"");
    this.myUserDetails = new User("","","","",0,"");
    //this.userRepos=new Repo("","");

  }

  
  myUserDetailsRequest(){

      interface SortUserDetails{
        login: string;
        bio: string;
        avatar_url: string;
        repos_url: string;
        public_repos: number;
        name : string;
      }
  
  
  
      let promise = new Promise((resolve,reject)=>{
        this.http.get<SortUserDetails>(environment.myApiUrl).toPromise().then(response=>{
          
          this.myUserDetails.userName=response.login;
          this.myUserDetails.briefDescription= response.bio;
          this.myUserDetails.image= response.avatar_url;
          this.myUserDetails.myReposUrl= response.repos_url;
          this.myUserDetails.myPublicRepos= response.public_repos;
          this.myUserDetails.fullName=response.name;
  
          resolve()
  
        },
        error=>{
          this.myUserDetails.userName="";
          this.myUserDetails.briefDescription="";
          this.myUserDetails.image="";
          this.myUserDetails.myReposUrl="";
          this.myUserDetails.myPublicRepos=0;
          this.myUserDetails.fullName="";
  
          reject(error)
        }
        )
      })
  
        return promise;
  
  
    }
     



  userDetailsRequest(j){

    interface SortUserDetails{
      login: string;
      bio: string;
      avatar_url: string;
      repos_url: string;
      public_repos: number;
      name : string;
    }


     var nameInput = j;
     var finalUrl = environment.userApi1Url + nameInput + environment.userApi2Url
     console.log(finalUrl);


    let promise = new Promise((resolve,reject)=>{
      this.http.get<SortUserDetails>(finalUrl).toPromise().then(response=>{
        
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
   
myRepoRequest(){

    interface sortMyRepoDetails{
      name: string;
      description: any;
      created_at: Date;
      updated_at: Date;
      html_url: string;
      homepage:string;
      license: any;
      forks: number;
    }
    //  var nameInput;
    //  var finalrepoUrl = environment.otherRepoApi1Url + nameInput + environment.otherRepoApi2Url


    let promise = new Promise((resolve,reject)=>{
      this.http.get<sortMyRepoDetails>(environment.myRepoApiUrl).toPromise().then(response=>{
        
        this.repo=response;
        resolve()

      },
      error=>{
        console.log("Error")
        reject(error);
      }
      )
    })

      return promise;
  }

    otherUsersRepo(j){
      interface otherUsersRepo {
        html_url: string;
        description: any;
        name: string;
        created_at: Date;
        updated_at: Date;
        homepage: string;
        license: any;
        forks: number;
      }
      var userNameInput = j;
      let promise = new Promise((resolve, reject)=>{
        this.http.get<otherUsersRepo>(`${environment.otherRepoApi1Url}${userNameInput}${environment.otherRepoApi2Url}`).toPromise().then(response=> {
          this.repo = response;
          resolve();
        },
        error=> {
          console.log("Error")
          reject(error);
        }
        )
      })
      return promise
    }
  

  //   userDetailsRequest(){
  //     interface sortUserDetails{
  //       login: string;
  //       bio:string;
  //       avatar_url: string;
  //       repos_url: string;
  //       public_repos: number;
  //       name: string;
  //     }
      
  //     let promise = new Promise((resolve, reject)=>{
  //       this.http.get<sortUserDetails>(environment.myApiUrl).toPromise().then(response=> {
  //         this.userDetails.userName = response.login;
  //         this.userDetails.briefDescription = response.bio;
  //         this.userDetails.image = response.avatar_url;
  //         this.userDetails.myReposUrl = response.repos_url;
  //         this.userDetails.myPublicRepos = response.public_repos;
  //         this.userDetails.fullName = response.name;
  
  //         resolve()
  //       },
  //        error=>{
  //          this.userDetails.userName = "";
  //         this.userDetails.briefDescription = "";
  //         this.userDetails.image = "";
  //         this.userDetails.myReposUrl = "";
  //         this.userDetails.myPublicRepos = 0;
  //         this.userDetails.fullName = "";
  //         reject(error);
  //        }
  //       )
  //     })
  //     return promise;
  //   }
    
  // }



 }










