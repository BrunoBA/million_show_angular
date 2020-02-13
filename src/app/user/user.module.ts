import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserListComponent } from './user-list/user-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [UserCreateComponent, UserListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ]
})
export class UserModule { }
