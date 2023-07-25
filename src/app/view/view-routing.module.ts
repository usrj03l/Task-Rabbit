import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProviderHomeComponent } from './provider-home/provider-home.component';
import { ProviderProfileComponent } from './provider-profile/provider-profile.component';
import { ProviderTransactionComponent } from './provider-transaction/provider-transaction.component';
import { ProviderAppointmentsComponent } from './provider-appointments/provider-appointments.component';
import { ProviderReviewsComponent } from './provider-reviews/provider-reviews.component';
import { ProviderChatComponent } from './provider-chat/provider-chat.component';

const routes: Routes = [
  {
    path:"view", component:ProviderHomeComponent,
    children:[
      {
        path:"",redirectTo:"profile",pathMatch:'full'
      },
      {
        path:"profile",component:ProviderProfileComponent
      },
      {
        path:"transactions",component:ProviderTransactionComponent
      },
      {
        path:"appointments",component:ProviderAppointmentsComponent
      },
      {
        path:"reviews",component:ProviderReviewsComponent
      },
      {
        path:"chat",component:ProviderChatComponent
      }

    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewRoutingModule { }
