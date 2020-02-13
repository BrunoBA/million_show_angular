import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionCreateComponent } from './question-create/question-create.component';
import { QuestionShowComponent } from './question-show/question-show.component';



@NgModule({
  declarations: [QuestionCreateComponent, QuestionShowComponent],
  imports: [
    CommonModule
  ]
})
export class QuestionModule { }
