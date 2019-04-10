import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Competition } from './models/competition';
import { Grouping } from './models/grouping';

@Injectable()
export class GroupingService {
  private groupings: Grouping[] =
	[ { _id: 1, name: 'DEF Grouping', variety: 'Grouping Variety',
 	  scheduleable: true, standingsable: true, bracketable: true,
          subgroupings: [], teams: []}
	];

  constructor(
	private http: HttpClient
  ) { }

  getGroupingsFor(comp_id) {
    //return this.groupings;
    return this.http.get<Grouping[]>('http://localhost:3000/competitions/{{comp_id}}/groupings',
	  { responseType: "json" } );
  }

  getGroupingFor(comp_id, grp_id) {
    //return this.groupings[0];
    return this.http.get<Grouping>('http://localhost:3000/competitions/{{comp_id}}/groupings/{{grp_id}}',
	  { responseType: "json" } );
  }
}
