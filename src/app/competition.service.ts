import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';

import { Competition } from './models/competition';
import { Grouping } from './models/grouping';

@Injectable()
export class CompetitionService {

  constructor(
	private http: HttpClient
  ) { }

  urlFrom(arr) {
    arr.unshift("http://localhost:3000");
    return arr.join("/");
  }
    
  getAllCompetitions() {
    return this.http.get<Competition[]>(this.urlFrom(["competitions"]),
	  { responseType: "json" } );
  }

  getCompetitionsFor(org_id) {
    return this.http.get<Competition[]>(this.urlFrom(["organizations",org_id,"competitions"]),
	  { responseType: "json" } );
  }

  getCompetition(c_id) {
    return this.http.get<Competition>(this.urlFrom(["competitions",c_id]),
	  { responseType: "json" } );
  }
}
