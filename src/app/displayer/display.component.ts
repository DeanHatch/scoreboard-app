import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'display-root',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
  providers:  []
})
export class DisplayComponent {
  title = 'Online-Scoreboard.Net for You';
  urlstring: string;
  
  
  constructor(private activatedRoute: ActivatedRoute) { }
		    
  ngOnInit() {
      this.activatedRoute.url.subscribe(url => this.urlstring = ''+url);
  }
}