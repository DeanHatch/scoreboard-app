import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'manage-root',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css'],
  providers:  []
})
export class ManageComponent {
  title = 'Online-Scoreboard.Net Manager';
  urlstring: string;
  
  constructor(private activatedRoute: ActivatedRoute) { }
		    
  ngOnInit() {
      this.activatedRoute.url.subscribe(url => this.urlstring = 'hip-hip-hooray - '+url);
  }
}