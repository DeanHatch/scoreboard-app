import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Organization } from './models/organization';
import { OrganizationService } from './organization.service';

@Component({
  selector:    'app-organization-list',
  templateUrl: './organization-list.component.html',
  providers:  [ OrganizationService ]
})
export class OrganizationListComponent implements OnInit {
  organizations: Organization[];
  selectedOrganization: Organization;
  
  @Output() selectionHappened: EventEmitter<Organization> = new EventEmitter();
  @Output() selectionOccurred: EventEmitter<number> = new EventEmitter();

  constructor(private service: OrganizationService) { }

  ngOnInit() {
       // Get All Organizations, across All Organizations
    this.service.getAllOrganizations()
	 .subscribe((data: Organization[]) => this.organizations = data)
	  ;
  }

  selectOrg(event: any) { 
    this.selectionOccurred.emit(event.target.value);
    }

  selectOrganization(organization: Organization) { 
    this.selectedOrganization = organization; 
    this.selectionHappened.emit(organization);
    }
}