import { Component } from '@angular/core';
import templateString from './homework.html';
import { MyHomeService } from '../my_homework/my_home.service';
import { MyHome } from '../my_homework/my_home';

@Component({
  template: templateString,
  providers: [ MyHomeService ]
})
export class HomeworkComponent {
  private myHomes: any;
  private newMyHome: MyHome;

  constructor(private myHomeService: MyHomeService) { }

  ngOnInit() {
    this.getAll();
    this.newMyHome = new MyHome();
  }

  getAll() {
    this.myHomeService.all().subscribe(resp => {
      this.myHomes = resp;
    }, e => {
      console.log(e);
    })
  }

  delete(id) {
    this.myHomeService.delete(id).subscribe(resp => {
      this.myHomes = resp;
    }, e => {
      console.log(e);
    })
  }

}
