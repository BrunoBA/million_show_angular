import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { UserService } from 'src/app/services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/services/user';
import { AuthService } from 'src/app/services/auth.service';
import { Question } from 'src/app/services/question';
import { QuestionService } from 'src/app/services/question.service';

declare var Pusher: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  waiting: boolean = false;
  questions: Array<Question> = [];
  users: Array<User>;
  ready: boolean = false;
  showQuestions: boolean = false;
  colors: Array<string> = [
    'mdl-color--red',
    'mdl-color--pink',
    'mdl-color--purple',
    'mdl-color--deep-purple',
    'mdl-color--indigo',
    'mdl-color--blue',
    'mdl-color--light-blue',
    'mdl-color--cyan',
    'mdl-color--teal',
    'mdl-color--green',
    'mdl-color--light-green',
    'mdl-color--lime',
    'mdl-color--yellow',
    'mdl-color--amber',
    'mdl-color--orange',
    'mdl-color--deep-orange',
    'mdl-color--brown',
    'mdl-color--grey',
    'mdl-color--blue-grey'
  ];
  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private authService: AuthService,
    private questionService: QuestionService
  ) { }

  ngOnInit() {
    this.initPusherObserver();
    this.getAllUsers();
    this.getQuestions();
    //@todo set user like unready
  }

  private initPusherObserver(): void {
    // Pusher.logToConsole = true;
    const pusher = new Pusher('c78e85722776effd2a18', {
      cluster: 'us2',
      forceTLS: true
    });

    const questionId = this.activatedRoute.snapshot.params.questionId;
    const channel = pusher.subscribe(`room-${questionId.slice(0, 4)}`);
    channel.bind('new-user', (data) => {
      this.getAllUsers();
    });

    channel.bind('show-questions', () => this.startGame());
  }

  private getQuestions(): void {
    const questionId = this.activatedRoute.snapshot.params.questionId;
    this.questionService.show(questionId).subscribe((res) => {
      this.questions = res.data;
    });
  }

  private getAllUsers(): void {
    const questionId = this.activatedRoute.snapshot.params.questionId;
    this.userService.getAll(questionId).subscribe(
      response => {
        this.users = response.data;
      },
      err => {
        console.log("Erro");
        this.users = [];
      }
    );
  }

  copyLink() {
    const HOST = window.location.origin;
    const selBox = document.createElement('textarea');
    selBox.style.position = 'fixed';
    selBox.style.left = '0';
    selBox.style.top = '0';
    selBox.style.opacity = '0';
    selBox.value = `${HOST}/question/${this.activatedRoute.snapshot.params.questionId}`;
    document.body.appendChild(selBox);
    selBox.focus();
    selBox.select();
    document.execCommand('copy');
    document.body.removeChild(selBox);
  }

  startGame() {
    console.log(this.questions);
    this.showQuestions = true;
  }

  showReadyFunction(user: User): boolean {
    const moreThanOneQuestion = this.questions.length > 0;
    const sameId = user.id == parseInt(this.authService.getToken());

    return sameId && moreThanOneQuestion;
  }

  changeReadyStatus() {
    const questionId = this.activatedRoute.snapshot.params.questionId;
    const userId = this.authService.getToken();

    this.waiting = !this.waiting;

    this.userService.ready(userId, questionId).subscribe((res) => {
      this.ready = res.data;
    });
  }
}
