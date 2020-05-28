import { Component, OnInit, DoCheck } from '@angular/core';
import { User, UserSerService } from '../user-ser.service';
import { Subscription, Subject, BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit, DoCheck {
  users: User[] = [];

  dataSource:  User[] = [];
  subscription$: Subscription[] = [];
  displayedColumns: string[] = ['name', 'age', 'position', 'details'];
  passUser: BehaviorSubject<User>;
  isVisible: boolean;
  editableUser: User;

  constructor(private userService: UserSerService) {
  }

  ngDoCheck(): void {
  }

  ngOnInit(): void {
    this.isVisible = false;
    this.userService.getUser();
    this.subscription$.push(this.userService.obs
      .subscribe(u => {
        this.dataSource.push(u);
      }));
  }
editUser(user: User) {
  this.editableUser = user;
  this.isVisible = true;
  this.passUser = new BehaviorSubject<User>(user);
  this.userService.editUser(user);
}

  delUser(user: User):User[] {
    return this.dataSource  = [...this.userService.deleteUser(user)];
  }
}
