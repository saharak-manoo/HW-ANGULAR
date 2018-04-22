import { Component } from '@angular/core';
import templateString from './first.html';

@Component({
  template: templateString
})
export class FirstComponent {
  private editableText1: string;

  private a01: number;
  private a02: number;
  private a03: number;
  private b01: number;
  private b02: number;
  private b03: number;

  private select1: string;

  private text1s;
  private text2ss;

  constructor() { }

  ngOnInit() {
    this.editableText1 = "Shoujo Shuumatsu Ryokou";

    this.a01 = 1
    this.a02 = 2
    this.a03 = 3
    this.b01 = 11
    this.b02 = 12
    this.b03 = 13

    this.select1 = "02"

    this.text1s = ["Banana", "Papaya", "Panama"]
    this.text2ss = [["a01","a02","a03"],["b01","b02","b03"]]
  }

  button1Click() {
    this.a01 = Math.random()*100;
    this.a02 = Math.random()*100;
    this.a03 = Math.random()*100;
    this.b01 = Math.random()*100;
    this.b02 = Math.random()*100;
    this.b03 = Math.random()*100;
  }

  select1Change(value) {
    alert(value)
  }

  input1Change(value) {
    alert(value)
  }

  checkbox1Change(value) {
    alert(value)
  }
}
