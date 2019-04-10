import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomerComponent } from './customer.component';
import { SelectCustomerComponent } from './select-customer.component';

const customerRoutes: Routes = [
  {path: 'customer/:cid', component: CustomerComponent},
  {path: 'customer', component: SelectCustomerComponent},
  {path: '', component: SelectCustomerComponent}
];

@NgModule({
  imports: [RouterModule.forChild(customerRoutes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
