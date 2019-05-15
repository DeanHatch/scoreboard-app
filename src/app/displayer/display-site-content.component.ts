import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { Competition } from '../models/competition';
import { Grouping } from '../models/grouping';


@Component({
  selector: 'display-site-content',
  templateUrl: './display-site-content.component.html',
  styleUrls: ['./display.component.css'],
  providers:  [ ]
})
export class DisplaySiteContentComponent {
  //competition: Competition;
  @Input() competition: Competition;
  @Input() groupings: Grouping[];
  @Input() topic: String;
  xyzzy: String;
  cid: String;
  gid: String;

  
  constructor(private router: Router,
                    private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    this.activatedRoute.url.subscribe(url => this.xyzzy = 'hip-hip-hooray - '+url);
    this.activatedRoute.paramMap.subscribe(paramMap=> this.gid=paramMap.get('gid'));
  }
  
  swizzle(which) {
    return which.name+"("+which.id+")"
  }
  
  topgroupings() {
    return this.groupings //.filter(grp => grp.parent_id == null)
  }
  
  top_grouping_name() {
    let g: Grouping;
    console.log(this.competition);
    g = this.competition.grouping;
    console.log(this.competition.grouping);
    return g.variety
  }
  
}