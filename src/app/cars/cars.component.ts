import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  cars = [];
  carType = '';
  carID: number;
  carManufacturer: string;
  carSeatNum: number;
  givenCarType: string;
  carColor = '';

  displayCars():string[] {
    if (this.carType === 'Family') {
      this.cars = this.carService.getFamilyCars();
      return [...this.cars];
    } else if (this.carType === 'Sport') {
      this.cars = this.carService.getSportCars();
      return [...this.cars];
    } else if (this.carType === 'All') {
      this.cars = this.carService.getAllCars();
      return [...this.cars];
    }
    console.log(this.cars);
  }
  maxNumber: number;
  isThereMaxNumber: boolean;
  constructor(private carService: CarService) { }
  newArray = [];
  displayByNumber():string[] {
    this.newArray = this.displayCars().slice(0, this.maxNumber);
    return this.newArray;
  }
  getPassedValue(num: number):number {
    this.isThereMaxNumber = true;
    return this.maxNumber = num;
  }
  ngOnInit(): void {
    this.displayCars();
  }
  newCar = {};
  addCar() {
    this.newCar = {id: this.carID, manufacturer: this.carManufacturer, 
    seats: this.carSeatNum, type: this.givenCarType, color: this.carColor}; 
    this.carService.addSportCar(this.newCar);
    this.carColor ='';
    this.carID =null;
    this.carManufacturer = '';
    this.carSeatNum = null;
    this.givenCarType = '';
  }


}
