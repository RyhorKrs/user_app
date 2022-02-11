import { User } from "../interfaces/user";

export const API = 'https://randomuser.me/api?results=20';

export const MockUser: User = { 
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
