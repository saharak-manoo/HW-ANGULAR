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
  private id;

  constructor(private route: ActivatedRoute, private myHomeService: MyHomeService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamsMaps) => {
      this.id = params.get('id');
    });
    this.find(this.id);
    this.ages = Array.from(new Array(100),(val, index) => index + 1);
  }

  getAll() {
    this.myHomeService.all().subscribe(resp => {
      this.myHomes = resp;
    }, e => {
      console.log(e);
    })
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
      this.getAll()
    })
  }
}
