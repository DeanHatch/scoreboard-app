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

  urlFrom(arr) {
    arr.unshift("http://localhost:3000");
    return arr.join("/");
  }
  
  getGroupingsFor(comp) {
    return this.http.get<Grouping[]>(this.urlFrom(["competitions",comp.id,"groupings"]),
	  { responseType: "json" } );
  }

  getGroupingFor(comp, grp_id) {
    //return this.groupings[0];
    return this.http.get<Grouping>(this.urlFrom(["competitions",comp.id,"groupings",grp_id]),
	  { responseType: "json" } );
  }
}
