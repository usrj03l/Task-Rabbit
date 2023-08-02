import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponentsRoutingModule } from './shared-components-routing.module';
import { FormValidateComponent } from './form-validate/form-validate.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    FormValidateComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsRoutingModule,
    ReactiveFormsModule
  ],
  exports:[FormValidateComponent]
})
export class SharedComponentsModule { }
