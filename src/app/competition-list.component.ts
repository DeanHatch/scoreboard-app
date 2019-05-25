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
       // Get All Competitions, across All Organizations
    this.service.getAllCompetitions()
	 .subscribe((data: Competition[]) => this.competitions = data)
	  ;
  }

  selectCompetition(c_id: any) { 
    this.service.getCompetition(c_id).subscribe(selComp=>this.selectionHappened.emit(selComp)); 
    ;
    }
}