import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ManageComponent } from './manage.component';
//import { DisplayGroupingStandingsComponent } from './display-grouping-standings.component';
//import { DisplayGroupingScheduleComponent } from './display-grouping-schedule.component';
//import { DisplayGroupingScoresComponent } from './display-grouping-scores.component';
//import { DisplayGroupingBracketComponent } from './display-grouping-bracket.component';
//import { DisplayTeamContentComponent } from './display-team-content.component';
//import { DisplayCompetitionComponent } from './display-competition.component';
//import { DisplaySelectCompetitionComponent } from './display-select-competition.component';

const manageRoutes: Routes = [
//  {path: 'display/:cid', 
//    component: DisplayCompetitionComponent,
//    children: [
//                    {path: 'group/:gid/standings', component: DisplayCompetitionComponent},
//		    {path: 'group/:gid/schedule', component: DisplayCompetitionComponent},
//		    {path: 'group/:gid/scores', component: DisplayCompetitionComponent},
//		    {path: 'group/:gid/bracket', component: DisplayCompetitionComponent},
//		    {path: 'group/:gid', component: DisplayCompetitionComponent},
//		    {path: 'team/:tid', component: DisplayCompetitionComponent}
//		    ]},
//  {path: 'display', component: DisplaySelectCompetitionComponent}
  {path: '', component: ManageComponent},
  {path: '**', component: ManageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(manageRoutes)],
  exports: [RouterModule]
})
export class ManageRoutingModule { }
