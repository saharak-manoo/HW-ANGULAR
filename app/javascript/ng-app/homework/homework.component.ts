import { Component } from '@angular/core';
import templateString from './homework.html';
import { MyHomeworkService } from '../my_homework/myHomework.service';
import { MyHomework } from '../my_homework/myhomework';

@Component({
  template: templateString,
  providers: [ MyHomeworkService ]
})
export class HomeworkComponent {
  private myHomeworks: any;
  private attrs: any
  private newMyHomework: MyHomework;

  constructor(private myHomeworkService: MyHomeworkService) { }

  ngOnInit() {
    this.getAll();
    this.newMyHomework = new MyHomework();
  }

  getAll() {
    this.myHomeworkService.all().subscribe(resp => {
      console.log(resp);
      this.myHomeworks = resp;
    }, e => {
      console.log(e);
    })
  }

  update(id, name, sex, age, address, skill, likecode, dead) {
    this.attrs = {
      name: name,
      sex: sex,
      age: age,
      address: address,
      skill: skill,
      likecode: likecode,
      dead: dead

    }
    this.myHomeworkService.update(id, this.attrs).subscribe(resp => {
      console.log(resp);
      this.myHomeworks = resp;
    }, e => {
      console.log(e);
    })
  }

  create(newMyHomework) {
    console.log(newMyHomework.getCreateParam())
    this.myHomeworkService.create(newMyHomework.getCreateParam()).subscribe(resp => {
      console.log(resp);
      this.myHomeworks = resp;
      this.newMyHomework = new MyHomework();
    }, e => {
      console.log(e);
    })
  }

}
