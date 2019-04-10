import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //{path: 'welcome' , component: WelcomeComponent},
  {path: 'customer',
            loadChildren: './customer/customer.module#CustomerModule'},
  {path: 'display',
            loadChildren: './displayer/display.module#DisplayModule'},
  {path: 'manage',
            loadChildren: './manager/manage.module#ManageModule'},
  {path: 'score',
            loadChildren: './scorer/score.module#ScoreModule'}
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
