import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OtherUsersComponent } from './other-users/other-users.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"other_users", component:OtherUsersComponent },
  {path : "user", component:UserComponent},
  {path: "" , redirectTo:"/user", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const routingComponents = [
  OtherUsersComponent, UserComponent
]
