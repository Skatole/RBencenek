import { Component, Output, ViewChild } from '@angular/core';
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
 


  public one = 1;
  public fruitItem: string;

  @Output() addOne: EventEmitter<number> = new EventEmitter<number>();
  @Output() fruitChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() addFruit: EventEmitter<string> = new EventEmitter<string>();

   

  public addValue() {
    this.addOne.emit(this.one);
  }

  public subValue() {
    this.addOne.emit(-this.one);
  }

  public anotherFruit() {
    this.fruitChange.emit(this.one);
  }

  public passFruitItem() {
    console.log(this.fruitItem);
    this.addFruit.emit(this.fruitItem);
    this.fruitItem = '';
  

  }

}
