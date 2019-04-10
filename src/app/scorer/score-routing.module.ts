import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScoreComponent } from './score.component';

const scoreRoutes: Routes = [
  {path: '', component: ScoreComponent},
  {path: '**', component: ScoreComponent}
];

@NgModule({
  imports: [RouterModule.forChild(scoreRoutes)],
  exports: [RouterModule]
})
export class ScoreRoutingModule { }
