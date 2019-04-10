import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http';

import { ScoreRoutingModule } from './score-routing.module';

import { ScoreComponent } from './score.component';

@NgModule({
  declarations: [
    ScoreComponent,
  ],
  imports: [
    //BrowserModule,
    // import HttpClientModule *after* BrowserModule.
    //HttpClientModule,
    ScoreRoutingModule
  ],
  providers: []
})
export class ScoreModule { }
