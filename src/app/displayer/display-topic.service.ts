import { Injectable } from '@angular/core';

@Injectable()
export class DisplayTopicService {
  
  currentTopic: string;
  
  ngOnInit() {
    this.currentTopic = "Standings"
  }
  
  setTopic(topic) {
    this.currentTopic = topic
  }
  
  getTopic() {
    this.currentTopic
  }

  }
