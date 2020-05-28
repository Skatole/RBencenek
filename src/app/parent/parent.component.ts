import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, AfterViewInit {

  public piece: number;
  public fruitArray = ['banana', 'apple', 'peach', 'pear'];
  public arrayIndex = 0;
  constructor() { }
  
  ngOnInit(): void {
    this.piece = 0;
  }
  ngAfterViewInit(): void {
    this.displayFruit();
  }


  @ViewChild('pls', {static:false}) fruitToWrite: ElementRef;
  public displayFruit() {
    console.log(this.fruitToWrite.nativeElement.innerHTML);
  }


  public addOneToPiece(passedValue):number {
    return this.piece += passedValue;
  }
  public substractOne(passedValue):number {
    return this.piece -= passedValue;
  }
  public changeArrayIndex(passedValue):number {
   while (this.arrayIndex !== this.fruitArray.length-1) {
     return this.arrayIndex += passedValue;
   }
   if (this.arrayIndex === this.fruitArray.length-1) {
     return this.arrayIndex = 0;
   }
    
  }
  public addItemToArray(fruit) {
    return this.fruitArray.push(fruit);
  }

  @ViewChild('myc', {static:true}) writeToConsole: ElementRef;
  public writeOnConsole() {
    console.log(this.writeToConsole.nativeElement.value);
    this.writeToConsole.nativeElement.value = '';
  }

}
