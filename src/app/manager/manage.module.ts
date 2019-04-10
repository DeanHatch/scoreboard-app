import { NgModule } from '@angular/core';
//import { BrowserModule } from '@angular/platform-browser';
//import { HttpClientModule } from '@angular/common/http';

import { ManageRoutingModule } from './manage-routing.module';

import { ManageComponent } from './manage.component';

@NgModule({
  declarations: [
    ManageComponent,
  ],
  imports: [
    //BrowserModule,
    // import HttpClientModule *after* BrowserModule.
    //HttpClientModule,
    ManageRoutingModule
  ],
  providers: []
})
export class ManageModule { }
