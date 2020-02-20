import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-question-show',
  templateUrl: './question-show.component.html',
  styleUrls: ['./question-show.component.scss']
})
export class QuestionShowComponent implements OnInit {

  private timer: number = 30;
  private currentDate = new Date();
  private nextDate: any

  constructor() { }

  ngOnInit() {
    this.nextDate = moment(new Date()).add(3, 's');
    this.initializeTimer();
  }

  initializeTimer() {
    return setInterval(() => {
      let timer = moment(new Date());
      this.timer = Math.ceil(this.nextDate.diff(timer) / 1000)
      if (this.timer < 0) {
        this.timer = 0
        console.log('oi')
      }
    }, 1000)
  }

}
