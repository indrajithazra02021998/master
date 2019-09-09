import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';
import { UserProfileComponent} from './user-profile/user-profile.component';
const routes: Routes = [
{
  path:'list',
  component:ListComponent
}
,{
  path:'user_profile',
  component:UserProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
