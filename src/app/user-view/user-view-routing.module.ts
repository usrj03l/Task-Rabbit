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

const routes: Routes = [
  {
    path:"user",component:UserHomeComponent,
    children:[
      {
        path:"",component:UserSearchComponent
      },
      {
        path:"profile",component:UserProfileComponent
      },
      {
        path:"payments",component:UserPaymentsComponent
      },
      {
        path:"appointments",component:UserAppointmentsComponent
      },
      {
        path:"chat",component:UserChatComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserViewRoutingModule { }
