import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, of, Observable } from 'rxjs';

import { Competition } from './models/competition';
import { Grouping } from './models/grouping';

@Injectable()
export class GroupingService {
  private currentCompetition: Competition;
  private groupings: Grouping[];
  private groupingz: Grouping[] =
	[ { _id: 1, name: 'DEF Grouping', variety: 'Grouping Variety',
 	  scheduleable: true, standingsable: true, bracketable: true, parent_id: null,
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
    if (this.currentCompetition == comp) {
    console.log('We Already Have It: ',this.currentCompetition);
    return of(this.groupings); 
    } else {
    this.currentCompetition = comp;
    console.log('New Current Competition: ',this.currentCompetition);
    this.http.get<Grouping[]>(this.urlFrom(["competitions",comp.id,"groupings"]),
	  { responseType: "json" } ).subscribe((grpngs: Grouping[]) => {this.groupings = grpngs; console.log('X: ',this.groupings)});
    return of(this.groupings); 
	} // end of else...
  }

  getGroupingFor(comp, grp_id) {
    //return this.groupings[0];
    return this.http.get<Grouping>(this.urlFrom(["competitions",comp.id,"groupings",grp_id]),
	  { responseType: "json" } );
  }
}
