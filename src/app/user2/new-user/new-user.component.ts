import { Component, OnInit, OnDestroy, Input, ViewChild, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserSerService, User } from '../user-ser.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit, OnDestroy {
  @Input() user: User;
  @Output() 
  isUser: boolean;
  @ViewChild('name', { static: true }) public nameInput: string;
  age: number;
  position: string;
  gender: string;
  address: string;
  description: string;

  constructor(private userService: UserSerService) { }
  subs$: Subscription[] = [];
  userForm: NgForm;

  ngOnDestroy(): void {
    this.subs$.forEach(s => s.unsubscribe);
    this.user = null;
  }

  ngOnInit(): void {
  }

  resetForm(userForm: NgForm) {
    userForm.reset();
  }

  addUser(user: User, userForm: NgForm) {
    user = {
      name: userForm.value.name,
      age: userForm.value.age,
      position: userForm.value.position,
      gender: userForm.value.gender,
      address: userForm.value.address,
      description: userForm.value.description
    }
    this.userService.newUser(user);
    userForm.resetForm();
    this.ngOnDestroy();
  }

}
