import { Component } from '@angular/core';
import templateString from './show.html';
import { MyHomeService } from '../my_homework/my_home.service';
import { MyHome } from '../my_homework/my_home';
import { ActivatedRoute } from '@angular/router';

@Component({
  template: templateString,
  providers: [MyHomeService]
})
export class ShowComponent {
  private myHomes: any;
  private attrs: any;
  private newMyHome: MyHome;
  private ages;

  constructor(private myHomeService: MyHomeService) { }

  ngOnInit() {
    this.find(window.location.href.split('/')[5]);
    this.ages = [10, 11, 12, 13, 14, 15, 16]
  }

  find(id) {
    this.myHomeService.find(id).subscribe(resp => {
      this.myHomes = resp;
      console.log(this.myHomes)
    }, e => {
      console.log(e);
    })
  }

  update(my_homes) {
    this.attrs = {
      name: my_homes.name,
      sex: my_homes.sex,
      age: my_homes.age,
      address: my_homes.address,
      skill: my_homes.skill,
      likecode: my_homes.likecode,
      dead: my_homes.dead
    }
    this.myHomeService.update(my_homes.id, this.attrs).subscribe(resp => {
      this.myHomes = resp;
    }, e => {
      console.log(e);
    })
  }
}
