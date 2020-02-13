import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

declare var Pusher: any;

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  username: string = ''

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService
  ) { }

  ngOnInit() { }

  joinRoom(): void {
    const questionId = this.activatedRoute.snapshot.params.questionId
    const body = {
      username: this.username,
      questionId
    }

    this.userService.create(body).subscribe(success => {
      this.authService.setToken(success.data.id)
      this.router.navigate(['question', questionId, 'waiting'])
    }, error => { })
  }
}
