import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: Array<string> = ['Bruno', 'Willborn', 'outronome']
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
  ]
  constructor() { }

  ngOnInit() {
  }

}
