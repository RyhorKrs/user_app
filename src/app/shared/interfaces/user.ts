import { Dob, Name } from "./response";

export interface User {
  gender: string,
  name: Name,
  city: string,
  country: string,
  email: string,
  dob: Dob,
  phone: string,
  picture: string
}