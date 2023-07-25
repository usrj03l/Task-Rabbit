import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewRoutingModule } from './view-routing.module';
import { ProviderHomeComponent } from './provider-home/provider-home.component';
import { ProviderProfileComponent } from './provider-profile/provider-profile.component';
import { ProviderTransactionComponent } from './provider-transaction/provider-transaction.component';
import { ProviderAppointmentsComponent } from './provider-appointments/provider-appointments.component';
import { ProviderReviewsComponent } from './provider-reviews/provider-reviews.component';
import { ProviderChatComponent } from './provider-chat/provider-chat.component';


@NgModule({
    declarations: [
        ProviderHomeComponent,
        ProviderProfileComponent,
        ProviderTransactionComponent,
        ProviderAppointmentsComponent,
        ProviderReviewsComponent,
        ProviderChatComponent,
    ],
    imports: [
        CommonModule,
        ViewRoutingModule,
    ]
})
export class ViewModule { }
