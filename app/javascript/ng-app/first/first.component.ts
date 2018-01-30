import { Component } from '@angular/core';
import templateString from './first.html';
import { UserService } from '../user/user.service';

@Component({
  template: templateString,
  providers: [ UserService ]
})
export class FirstComponent {
  user: any;
  users: any[];
  usersColumns: any[] = [
    { prop: 'email' },
    { prop: 'role' }
  ];

  constructor(private userService: UserService) {
    this.userService.all().subscribe((users: any[]) => {
      this.users = users;
      this.user = users[0];
    });
  }
}
