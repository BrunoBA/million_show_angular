import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { QuestionCreateComponent } from './question/question-create/question-create.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { QuestionShowComponent } from './question/question-show/question-show.component';
import { AuthGuard } from './middleware/auth-guard.guard';
import { ForceLogoutGuard } from './middleware/force-logout.guard';


const routes: Routes = [
  { path: 'create', component: QuestionCreateComponent, canActivate: [ForceLogoutGuard] },
  { path: 'question/:questionId', component: UserCreateComponent, canActivate: [ForceLogoutGuard] },
  { path: 'question/:questionId/waiting', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'game', component: QuestionShowComponent, canActivate: [AuthGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
