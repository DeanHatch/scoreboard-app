import { Component, Input } from '@angular/core';

import { Competition } from '../models/competition';
import { Grouping } from '../models/grouping';


@Component({
  selector: 'display-site-content',
  templateUrl: './display-site-content.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplaySiteContentComponent {
  //competition: Competition;
  @Input() competition: Competition;
  @Input() groupings: Grouping[];
  @Input() topic: String;

  
  constructor() { }
  
  
  top_grouping_name() {
    let g: Grouping;
    console.log(this.competition);
    g = this.competition.grouping;
    console.log(this.competition.grouping);
    return g.variety
  }
  
}