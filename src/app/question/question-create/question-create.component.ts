import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.scss']
})
export class QuestionCreateComponent implements OnInit {

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit() { }

  createQuestion(): void {
    this.questionService.create().subscribe(response => {
      this.router.navigate(['question', response.data])
    })
  }
}
