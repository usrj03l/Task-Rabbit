import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserViewRoutingModule } from './user-view-routing.module';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserSearchComponent } from './user-search/user-search.component';
import { CardComponent } from './card/card.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserTransactionsComponent } from './user-transactions/user-transactions.component';
import { UserBillComponent } from './user-bill/user-bill.component';
import { UserPaymentsComponent } from './user-payments/user-payments.component';
import { UserAppointmentsComponent } from './user-appointments/user-appointments.component';
import { UserChatComponent } from './user-chat/user-chat.component';
import { FormsModule } from '@angular/forms';
import { ServicesInfoComponent } from './services-info/services-info.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [
    UserHomeComponent,
    UserSearchComponent,
    CardComponent,
    UserProfileComponent,
    UserTransactionsComponent,
    UserBillComponent,
    UserPaymentsComponent,
    UserAppointmentsComponent,
    UserChatComponent,
    ServicesInfoComponent,
    
  ],
  imports: [
    CommonModule,
    UserViewRoutingModule,
    SharedComponentsModule,
    FormsModule,
    
    
  ]
})
export class UserViewModule { }
