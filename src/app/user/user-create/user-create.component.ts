import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

declare var Pusher: any;

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent implements OnInit {

  username: string = ''

  constructor(private userService: UserService) { }

  ngOnInit() { }

  joinRoom(): void {
    const body = {
      username: this.username,
      questionId: 'b867fafae5152c567c0338cdb8d4eaf7828e340524557e5632f84938f0d77fd3302bfcd0b2c03542e5ab40a2716c7962933b77856a53d1d8757309981509d1602d5df8cb8c807744c3ffd4f3237e215f81aa5b33bcb0128d04e7ff81b399fded7f1ad74a17042164d835dfcc63049b85703d1c1669ccabb1ae30ed5b4e7d415b9daaea9e60'
    }

    this.userService.create(body).subscribe(success => { }, error => { })
  }
}
