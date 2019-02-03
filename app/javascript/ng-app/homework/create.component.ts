import { Component } from '@angular/core';
import templateString from './create.html';
import { MyHomeService } from '../my_homework/my_home.service';
import { MyHome } from '../my_homework/my_home';

@Component({
    template: templateString,
    providers: [MyHomeService]
})
export class CreateComponent {
	private myHomes: any;
	private attrs: any
	private newMyHome: MyHome;

	constructor(private myHomeService: MyHomeService) { }

	ngOnInit() {
		this.newMyHome = new MyHome();
	}

	create(newMyHome) {
		this.myHomeService.create(newMyHome.getCreateParam()).subscribe(resp => {
			this.myHomes = resp;
			this.newMyHome = new MyHome();
		}, e => {
				console.log(e);
		})
	}
}
