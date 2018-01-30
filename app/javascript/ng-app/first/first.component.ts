import { Component } from '@angular/core';
import templateString from './first.html';
import { UserService } from '../user/user.service';

@Component({
  template: templateString,
  providers: [ UserService ]
})
export class FirstComponent {
  usersColumns = [
    { prop: 'email' },
    { prop: 'role' }
  ];

  constructor(private userService: UserService) {
    this.userService.all().subscribe(users => {
      this.users = users;
    });
  }
}
