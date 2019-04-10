import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Competition } from '../models/competition';

import { CompetitionListComponent } from '../competition-list.component';

@Component({
  selector: 'display-top-navigation',
  templateUrl: './display-top-navigation.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayTopNavigationComponent {
  //competition: Competition;
  @Input() competition: Competition;
  @Output() topichaschanged = new EventEmitter<string>();
  topic: String;
  
  newtopic(topic: string) {
    this.topichaschanged.emit(topic);
    this.topic = topic;
  }
	
}