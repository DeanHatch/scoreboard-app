import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Competition } from './models/competition';
import { CompetitionService } from './competition.service';

@Component({
  selector:    'app-competition-list',
  templateUrl: './competition-list.component.html',
  providers:  [ CompetitionService ]
})
export class CompetitionListComponent implements OnInit {
  competitions: Competition[];
  selectedCompetition: Competition;
  
  @Output() selectionHappened: EventEmitter<Competition> = new EventEmitter();
  @Output() selectionOccurred: EventEmitter<number> = new EventEmitter();

  constructor(private service: CompetitionService) { }

  ngOnInit() {
    this.service.getCompetitions()
	 .subscribe((data: Competition[]) => this.competitions = data)
	  ;
  }

  selectComp(event: any) { 
    this.selectionOccurred.emit(event.target.value);
    }

  selectCompetition(competition: Competition) { 
    this.selectedCompetition = competition; 
    this.selectionHappened.emit(competition);
    }
}