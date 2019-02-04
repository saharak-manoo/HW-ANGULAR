import { Component } from '@angular/core';
import templateString from './homework.html';
import { MyHomeService } from '../my_homework/my_home.service';
import { MyHome } from '../my_homework/my_home';
import { MatButtonModule } from '@angular/material/button';

@Component({
  template: templateString,
  providers: [ MyHomeService ]
})

export class HomeworkComponent {
  private myHomes: any;
  private attrs: any;
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
      this.getAll();
    })
  }

  clickMethod(myHome) {
    if(confirm("Are you sure to delete" + myHome.name)) {
      this.delete(myHome.id)
    }
  }

  search(search_key) {
    this.myHomeService.search(search_key).subscribe(resp => {
      this.myHomes = resp;
    }, e => {
      this.getAll();
    })
  }

  onKey(event: any) {
    this.search(event.target.value);
  }

  update(id, value) {
    this.attrs = {
      address: value
    }
    this.myHomeService.update(id, this.attrs).subscribe(resp => {
      this.myHomes = resp;
    }, e => {
      this.getAll()
    })
  }

  addressChange(id, value) {
    this.update(id, value)
  }

}
