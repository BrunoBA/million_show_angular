import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { QuestionCreateComponent } from './question/question-create/question-create.component';


const routes: Routes = [
  { path: 'create', component: QuestionCreateComponent },
  { path: 'room/:questionId', component: UserCreateComponent },
  { path: '**', component: UserCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
