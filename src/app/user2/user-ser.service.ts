import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserSerService {
  users = [
    {
      name: 'testElek',
      age: 30,
      gender: 'male',
      address: 'somewhere',
      position: 'leader'
    },
    {
      name: 'testElek2',
      age: 20,
      gender: 'female',
      address: 'somewhereOver',
      position: 'manager'
    },
    {
      name: 'testElek3',
      age: 99,
      gender: 'male',
      address: 'somewhereOverTheRainbow',
      position: 'developer'
    },
  ];
  public obs: Observable<User>;
  public passedUser: BehaviorSubject<User>;

  public getUser() {
    this.obs = new Observable<User>(observer => {
      let count = 0;
      while (count !== this.users.length) {
        observer.next(this.users[count]);
        count++;
      }
    })
  }
  public deleteUser(user): User[] {
    [...this.users.splice(this.users.indexOf(user), 1)];
    return this.users;

  }
  public editUser(user) {
    this.passedUser = new BehaviorSubject<User>(user);
  }
  public newUser(user): User[] {
    [this.users.push(user)];
    return this.users;
  }


}

export interface User {
  name: string;
  age: number;
  position: string;
  gender: string;
  address: string;
  description?: string;
}