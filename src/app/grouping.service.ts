import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, of, Observable } from 'rxjs';

import { Competition } from './models/competition';
import { Grouping } from './models/grouping';

@Injectable()
export class GroupingService {
	  
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
  }
