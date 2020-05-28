import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {

  numberVar: number;
  @Output() emitter: EventEmitter<number> = new EventEmitter<number>();

  sendValue() {
    this.emitter.emit(this.numberVar);
    this.numberVar = null;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
