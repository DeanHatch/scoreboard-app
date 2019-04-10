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
  @Input() topic: String;
	
  top_grouping_name() {
    let g: Grouping;
    g = this.competition.grouping;
    return g.variety
  }
  
}