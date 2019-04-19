import { Component, Input } from '@angular/core';

import { Grouping } from '../models/grouping';


@Component({
  selector: 'display-side-navigation',
  templateUrl: './display-side-navigation.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplaySideNavigationComponent {
  //@Input() competition: Competition;
  @Input() groupings: Grouping[];
  @Input() xyzzy: number;
  
  constructor() { }
  
  nozzle(arr) {
    return arr.length+"schnozzle";
  }
  
  swizzle(which) {
    return which.name+"("+which.id+")"
  }
  
}