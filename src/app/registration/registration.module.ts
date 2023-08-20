import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationRoutingModule } from './registration-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RegHomeComponent } from './reg-home/reg-home.component';
import { ToggleButtonComponent } from './toggle-button/toggle-button.component';
import { ServiceProviderLoginComponent } from './service-provider-login/service-provider-login.component';
import { SignUpHomeComponent } from './sign-up-home/sign-up-home.component';
import { ServiceProviderSignupComponent } from './service-provider-signup/service-provider-signup.component';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';

@NgModule({
  declarations: [
    SignInComponent,
    SignUpComponent,
    RegHomeComponent,
    ToggleButtonComponent,
    ServiceProviderLoginComponent,
    SignUpHomeComponent,
    ServiceProviderSignupComponent,
    AdminLoginComponent
  ],
  imports: [
    CommonModule,
    RegistrationRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedComponentsModule
  ]
})
export class RegistrationModule { }
