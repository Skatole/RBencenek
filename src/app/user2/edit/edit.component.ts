import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { UserSerService, User } from '../user-ser.service';
import { Subscription } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  @Input() user: User;
  isUser: boolean;
 @ViewChild('name', {static:true}) public nameInput: string;
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
    if (this.user) {
      this.isUser = true;
      this.nameInput = this.user.name;
     this.age = this.user.age;
      this.address = this.user.address;
      this.gender = this.user.gender;
    }
  }

resetForm(userForm: NgForm)  {
  userForm.reset();
}

addUser(user: User, userForm: NgForm) {
  if (this.user) {
    this.userService.editUser(user);
  } else {
    user = { 
      name: userForm.value.name,
      age: userForm.value.age,
      position: userForm.value.position,
      gender: userForm.value.gender,
      address: userForm.value.address,
      description: userForm.value.description
    }
  }
 
  this.userService.newUser(user);
  userForm.resetForm();
  this.ngOnDestroy();
} 


}
