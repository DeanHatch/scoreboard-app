import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './customer.component';
import { SelectCustomerComponent } from './select-customer.component';

import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  declarations: [
         CustomerComponent,
         SelectCustomerComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
