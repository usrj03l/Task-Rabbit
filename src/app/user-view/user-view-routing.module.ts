import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserTransactionsComponent } from './user-transactions/user-transactions.component';
import { UserBillComponent } from './user-bill/user-bill.component';
import { UserPaymentsComponent } from './user-payments/user-payments.component';
import { UserAppointmentsComponent } from './user-appointments/user-appointments.component';
import { UserChatComponent } from './user-chat/user-chat.component';
import { ServicesInfoComponent } from './services-info/services-info.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { userGuard } from '../guards/user.guard';

const routes: Routes = [
  {
    path:"user",component:UserHomeComponent,
    children:[
      {
        path:"",redirectTo:"search",pathMatch:"full"
      },
      {
        path:"search",component:UserSearchComponent
      },
      {
        path:"profile",component:UserProfileComponent
      },
      {
        path:"edit-profile",component:EditProfileComponent
      },
      {
        path:"payments",component:UserPaymentsComponent
      },
      {
        path:"appointments",component:UserAppointmentsComponent
      },
      {
        path:"chat",component:UserChatComponent
      },
      {
        path:'service-info',component:ServicesInfoComponent
      },
      {
        path:"**",redirectTo:"search",pathMatch:"full"
      }
    ],
    canActivate:[userGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserViewRoutingModule { }
