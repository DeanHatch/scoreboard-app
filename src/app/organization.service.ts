import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Organization } from './models/organization';

@Injectable()
export class OrganizationService {

  constructor(
	private http: HttpClient
  ) { }

  urlFrom(arr) {
    arr.unshift("http://localhost:3000");
    return arr.join("/");
  }
    
  getAllOrganizations() {
    return this.http.get<Organization[]>(this.urlFrom(["organizations"]),
	  { responseType: "json" } );
  }

  getOrganizationsFor(cust_id) {
    return this.http.get<Organization[]>(this.urlFrom(["customers",cust_id,"organizations"]),
	  { responseType: "json" } );
  }

  getOrganization(o_id) {
    return this.http.get<Organization>(this.urlFrom(["organizations",o_id]),
	  { responseType: "json" } );
  }
}
