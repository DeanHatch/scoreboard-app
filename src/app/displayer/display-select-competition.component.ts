import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CompetitionListComponent } from '../competition-list.component';

@Component({
  selector: 'display-select-competition',
  templateUrl: './display-select-competition.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplaySelectCompetitionComponent {
  
  constructor(private router: Router) { }

  selectTheOrganization(o_id) {
  }

  selectTheCompetition(c_id) {
    this.router.navigate(['display/'+c_id]);
  }
}