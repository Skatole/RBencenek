import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user-ser.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  @Input() user: User;
visibility: boolean;
  constructor() { }

  ngOnInit(): void {
    this.visibility = false;
  }
visible() {
  return this.visibility = !this.visibility;
}
}
