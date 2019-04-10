import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

  // Customer will not be comingled with other models
  // but will rather be standalone in this feature.
import { Customer } from './customer';

@Injectable()
export class CustomerService {
    private customers: Customer[]=
         [{id:1, email:'whatever@wherever.com'},
	   {id:2, email:'whoever@whatever.net'}
	  ];

  constructor(
	private http: HttpClient
  ) { }
  
  getCustomers() {
    return this.customers;
    //return this.http.get<Customer[]>('http://localhost:3000/customers',
//	  { responseType: "json" } );
  }

  getCustomer(cust_id) {
    return this.http.get<Customer>("http://localhost:3000/customers/"+cust_id,
	  { responseType: "json" } );
  }
}
