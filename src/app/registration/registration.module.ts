import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationRoutingModule } from './registration-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegHomeComponent } from './reg-home/reg-home.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { ServiceProviderLoginComponent } from './service-provider-login/service-provider-login.component';
import { SignUpHomeComponent } from './sign-up-home/sign-up-home.component';
import { ServiceProviderSignupComponent } from './service-provider-signup/service-provider-signup.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    RegHomeComponent,
    ToggleButtonComponent,
    ServiceProviderLoginComponent,
    SignUpHomeComponent,
    ServiceProviderSignupComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FormsModule
  ]
})
export class RegistrationModule { }
