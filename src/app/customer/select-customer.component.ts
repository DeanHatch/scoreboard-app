import { Component, OnInit } from '@angular/core';

import { Customer } from './customer';
import { CustomerService } from './customer.service';

@Component({
  selector: 'select-customer',
  templateUrl: './select-customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers: [ CustomerService ]
})
export class SelectCustomerComponent implements OnInit {
  allMyCustomers: Customer[];

  constructor(private custserve: CustomerService) { }

  ngOnInit() {
    this.allMyCustomers = this.custserve.getCustomers()
  }

}
