import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { CompetitionListComponent } from './competition-list.component';

@NgModule({
  declarations: [
    CompetitionListComponent
  ],
  imports: [
    BrowserModule,
    // import HttpClientModule after BrowserModule.
    HttpClientModule
  ],
  exports: [
    CompetitionListComponent
  ],
  providers: []
})
export class CompetitionListModule { }
