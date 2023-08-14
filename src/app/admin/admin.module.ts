import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { FormsModule } from '@angular/forms';
import { ManageServiceProvidersComponent } from './manage-service-providers/manage-service-providers.component';
import { ManageCatagoriesComponent } from './manage-catagories/manage-catagories.component';


@NgModule({
  declarations: [
    AdminHomeComponent,
    ManageUsersComponent,
    ManageServiceProvidersComponent,
    ManageCatagoriesComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
