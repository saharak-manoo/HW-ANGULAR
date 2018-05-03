import { Component } from '@angular/core';
import templateString from './show.html';
import { MyHomeService } from '../my_homework/my_home.service';
import { MyHome } from '../my_homework/my_home';

@Component({
    template: templateString,
    providers: [MyHomeService]
})
export class ShowComponent {
    private myHomes: any;
    private attrs: any
    private newMyHome: MyHome;

    constructor(private myHomeService: MyHomeService) { }

    ngOnInit(id) {
        this.getAll();
        this.newMyHome = new MyHome();
    }

    

    getAll() {
        this.myHomeService.all().subscribe(resp => {
            console.log(resp);
            this.myHomes = resp;
        }, e => {
            console.log(e);
        })
    }
    find(id) {
        this.myHomeService.find(id).subscribe(resp => {
            console.log(resp);
            this.myHomes = resp;
        }, e => {
            console.log(e);
        })
    }

}
