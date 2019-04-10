import { Component, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'score-root',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  providers:  []
})
export class ScoreComponent {
  title = 'Online-Scoreboard.Net for You to Record a Score';
  urlstring: string;
  
  constructor(private activatedRoute: ActivatedRoute) { }
		    
  ngOnInit() {
      this.activatedRoute.url.subscribe(url => this.urlstring = 'hip-hip-hooray - '+url);
  }
}