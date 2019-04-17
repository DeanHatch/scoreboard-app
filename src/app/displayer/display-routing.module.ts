import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DisplayComponent } from './display.component';
//import { DisplayGroupingStandingsComponent } from './display-grouping-standings.component';
//import { DisplayGroupingScheduleComponent } from './display-grouping-schedule.component';
//import { DisplayGroupingScoresComponent } from './display-grouping-scores.component';
//import { DisplayGroupingBracketComponent } from './display-grouping-bracket.component';
//import { DisplayTeamContentComponent } from './display-team-content.component';
import { DisplayCompetitionComponent } from './display-competition.component';
import { DisplaySelectCompetitionComponent } from './display-select-competition.component';

const displayRoutes: Routes = [
  {path: '',
    component: DisplayComponent,
    children: [ {path: '', component: DisplaySelectCompetitionComponent},
                    {path: ':cid', 
		      component: DisplayCompetitionComponent,
		      children: [
		          {path: 'group/:gid/standings', component: DisplayCompetitionComponent},
 		          {path: 'group/:gid/schedule', component: DisplayCompetitionComponent},
			  {path: 'group/:gid/scores', component: DisplayCompetitionComponent},
			  {path: 'group/:gid/bracket', component: DisplayCompetitionComponent},
			  {path: 'group/:gid', component: DisplayCompetitionComponent},
			  {path: 'team/:tid', component: DisplayCompetitionComponent}
		      ]
		      }
                ] },
  {path: '**', component: DisplayComponent}
];

@NgModule({
  imports: [RouterModule.forChild(displayRoutes)],
  exports: [RouterModule]
})
export class DisplayRoutingModule { }
