import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { DisplayRoutingModule } from './display-routing.module';

import { Competition } from '../models/competition';
import { CompetitionService } from '../competition.service';
import { Grouping } from '../models/grouping';
import { GroupingService } from '../grouping.service';

import { DisplayTopNavigationComponent } from './display-top-navigation.component';
import { DisplaySideNavigationComponent } from './display-side-navigation.component';
import { DisplaySiteContentComponent } from './display-site-content.component';

@Component({
  selector: 'display-competition',
  templateUrl: './display-competition.component.html',
  styleUrls: ['./display.component.css'],
  providers:  [ CompetitionService, GroupingService ]
})
export class DisplayCompetitionComponent {
  title = 'Online-Scoreboard.Net for You';
  competition: Competition;
  currentgrouping: Grouping;
  groupings: Grouping[];
  deanostring: string;
  currenttopic: string;
  cid: string;
  
  constructor(private compService: CompetitionService,
                    private grpService: GroupingService,
                    private router: Router,
                    private activatedRoute: ActivatedRoute) { }

ngOnInit() {
  //this.activatedRoute.url.subscribe(url => {this.cid = url[0].toString();this.deanostring=this.cid})  ;
  this.activatedRoute.paramMap.subscribe(paramMap=> this.cid=paramMap.get('cid'));
  this.compService.getCompetition(this.cid).subscribe((comp: Competition) =>
                          {this.competition = comp; 
			    this.grpService.getGroupingsFor(this.competition)
			      .subscribe((grps: Grouping[]) =>this.groupings = grps);
			});
  }
  
onTopic(topic: string) {
    this.currenttopic = topic;
      this.activatedRoute.url.subscribe(url => this.deanostring = 'hip-hip-hooray - '+url);
  }
  
}