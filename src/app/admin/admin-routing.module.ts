import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManageServiceProvidersComponent } from './manage-service-providers/manage-service-providers.component';
import { ManageCatagoriesComponent } from './manage-catagories/manage-catagories.component';
import { adminGuard } from '../guards/admin.guard';

const routes: Routes = [
  {
    path:'admin-home',component:AdminHomeComponent,
    children:[
      {
        path:'manage-users',component:ManageUsersComponent
      },
      {
        path:'manage-service-provider',component:ManageServiceProvidersComponent
      },
      {
        path:'manage-catagories',component:ManageCatagoriesComponent
      }
    ],
    canActivate:[adminGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
