import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegHomeComponent } from './reg-home/reg-home.component';
import { SignUpHomeComponent } from './sign-up-home/sign-up-home.component';
import { registrationGuard } from '../guards/registration.guard';

const routes: Routes = [
  {
    path: "registration",
    children: [
      {
        path: "", redirectTo: "login", pathMatch: "full"
      },
      {
        path: "login", component: RegHomeComponent
      },
      {
        path: "signup", component: SignUpHomeComponent
      }
    ],
    canActivate:[registrationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }
