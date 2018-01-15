import { Component } from '@angular/core';
import templateString from './first';
import { UserService } from '../user/user.service';

@Component({
  template: templateString,
  providers: [ UserService ]
})
export class FirstComponent {
  user = {};

  constructor(private userService: UserService) {
    this.userService.getCurrentUser().subscribe(user => {
      this.user = user;
    });
  }
}
