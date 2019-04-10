import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Competition } from './models/competition';
import { Grouping } from './models/grouping';

@Injectable()
export class CompetitionService {
  private competitions: Competition[] =
	[ { _id: 11, name: 'Big Time', sport: 'basketball', variety: 'Tournament', organization_id: 1, 
		grouping: new Grouping , venues: []},
	{ _id: 12, name: 'Big League', sport: 'basketball', variety: 'Season', organization_id: 1, 
		grouping: new Grouping , venues: [] },
	{ _id: 13, name: 'Small Time', sport: 'quidditch', variety: 'Tournament', organization_id: 1, 
		grouping: new Grouping , venues: [] },
	{ _id: 14, name: 'Fun', sport: 'basketball', variety: 'Jamboree', organization_id: 1, 
		grouping: new Grouping , venues: [] }
	];

  constructor(
	private http: HttpClient
  ) { }

  getCompetitions() {
    return of(this.competitions)
    //return this.http.get<Competition[]>('http://localhost:3000/competitions',
	//  { responseType: "json" } );
  }

  getCompetition(c_id) {
    return of(this.competitions.find(c => c._id == c_id));
    //return this.http.get<Competition>("http://localhost:3000/competitions/"+c_id,
	//  { responseType: "json" } );
  }
}
