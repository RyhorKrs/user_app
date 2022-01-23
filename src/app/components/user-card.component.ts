import { Component } from '@angular/core';

import { User } from '../shared/interfaces/user';

const MockUser: User = { 
  gender: "female", 
  name: { 
    title: "Mrs", 
    first: "Maxine", 
    last: "Sutton" 
  }, 
  city: "Bendigo", 
  country: "Australia", 
  email: "maxine.sutton@example.com", 
  dob: { 
    date: "1951-06-10T23:56:24.728Z", 
    age: 71 
  }, 
  phone: "08-7297-7614", 
  picture: "https://randomuser.me/api/portraits/women/87.jpg"
}

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'] 
})
export class UserCardComponent {
  public currentUser: User = MockUser;
}
