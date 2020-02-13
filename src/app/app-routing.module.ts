import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { QuestionCreateComponent } from './question/question-create/question-create.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UserListComponent } from './user/user-list/user-list.component';


const routes: Routes = [
  { path: 'create', component: QuestionCreateComponent },
  { path: 'question/:questionId', component: UserCreateComponent },
  { path: 'question/:questionId/waiting', component: UserListComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
