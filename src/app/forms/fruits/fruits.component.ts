import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  id: number;
  name: string;
  fruitForm: NgForm;
  color: string;
  size: string;
  calories: number;
  fruit: {id: number, name: string, color: string, calories: number, size: string};

  constructor() { }

  ngOnInit(): void {
    this.id = 1;
  }
log(fruitForm: NgForm) {
  this.fruit = {id: this.id, name: fruitForm.value.name, color: fruitForm.value.color, 
    calories: fruitForm.value.calories, size: fruitForm.value.size};
  console.log(this.fruit);
  fruitForm.reset();
  this.id++;
}
}
