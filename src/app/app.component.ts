import { Component, VERSION, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {

  a;
  b;
  zeroBlock;
  @ViewChild('aBlock', {static: true}) aBlock;
  @ViewChild('bBlock', {static: true}) bBlock;
  @ViewChild('aAndBBlock', {static: true}) aAndBBlock;

  show() {
    if (this.a) {
      this.zeroBlock = this.aBlock;
      console.log('A')
    }
    if (this.b) {
      this.zeroBlock = this.bBlock;
      console.log('B')
    }
    if (this.a && this.b) {
      this.zeroBlock = this.aAndBBlock;
      console.log('A B')
    }
  }

  changeA() {
    this.a = true;
    this.b = false;
  }

  changeB() {
    this.a = false;
    this.b = true;
  }

  changeAB() {
    this.a = true;
    this.b = true;
  }

}
