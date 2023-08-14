import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { FormsModule } from '@angular/forms';
import { ManageServiceProvidersComponent } from './manage-service-providers/manage-service-providers.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    ManageUsersComponent,
    ManageServiceProvidersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
