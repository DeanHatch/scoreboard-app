import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Competition } from '../models/competition';
import { Grouping } from '../models/grouping';


@Component({
  selector: 'display-grouping-standings',
  templateUrl: './display-grouping-standings.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayGroupingStandingsComponent {
  //competition: Competition;
  gid: String;
  reanostring: String;
	
    constructor(private router: Router,
                    private activatedRoute: ActivatedRoute) { }
		    
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap=> this.gid=paramMap.get('gid'));
    this.activatedRoute.url.subscribe(url => this.reanostring = 'My URL: '+url);
  }
		    
}