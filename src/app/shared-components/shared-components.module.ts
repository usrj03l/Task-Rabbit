import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsRoutingModule } from './shared-components-routing.module';
import { FormValidateComponent } from './form-validate/form-validate.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateModalComponent } from './date-modal/date-modal.component';
import { PaymentModalComponent } from './payment-modal/payment-modal.component';


@NgModule({
  declarations: [
    FormValidateComponent,
    DateModalComponent,
    PaymentModalComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsRoutingModule,
    ReactiveFormsModule,
    FormsModule, 
  ],
  exports:[
    FormValidateComponent ,
     DateModalComponent,
     PaymentModalComponent
    ]
})
export class SharedComponentsModule { }
