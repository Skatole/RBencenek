import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  private users = [
    {
      id: 1,
      name: 'Máté',
      gender: 'male'
    },
    {
      id: 2,
      name: 'Feri',
      gender: 'male'
    },
    {
      id: 3,
      name: 'Robi',
      gender: 'male'
    }
  ];

  public getUser() {
    return [...this.users];
  }

  constructor() { }
}
