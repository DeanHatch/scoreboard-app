import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { DisplayRoutingModule } from './display-routing.module';

import { DisplayComponent } from './display.component';
import { DisplayCompetitionComponent } from './display-competition.component';
import { DisplaySelectCompetitionComponent } from './display-select-competition.component';
import { OrganizationListComponent } from '../organization-list.component';
import { CompetitionListComponent } from '../competition-list.component';
import { DisplayTopNavigationComponent } from './display-top-navigation.component';
import { DisplaySideNavigationComponent } from './display-side-navigation.component';
import { DisplaySiteContentComponent } from './display-site-content.component';
import { DisplayGroupingStandingsComponent } from './display-grouping-standings.component';

@NgModule({
  declarations: [
    DisplayComponent,
    DisplaySelectCompetitionComponent,
    OrganizationListComponent,
    CompetitionListComponent,
    DisplayCompetitionComponent,
    DisplayTopNavigationComponent,
    DisplaySideNavigationComponent,
    DisplaySiteContentComponent,
    DisplayGroupingStandingsComponent,
  ],
  imports: [
    //BrowserModule,
    // import HttpClientModule *after* BrowserModule.
    //HttpClientModule,
    DisplayRoutingModule,
  CommonModule
  ],
  providers: []
})
export class DisplayModule { }
