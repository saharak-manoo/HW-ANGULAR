import { Component } from '@angular/core';
import templateString from './first.html';
import { UserService } from '../user/user.service';

@Component({
  template: templateString,
  providers: [ UserService ]
})
export class FirstComponent {
  user = {};

  constructor(private userService: UserService) {
    this.userService.all().subscribe(users => {
      this.user = users[0];
    });
  }
}
