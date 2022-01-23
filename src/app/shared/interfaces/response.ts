export interface Name {
  title: string,
  first: string,
  last: string
}

export interface Location {
  street: Object,
  city: string,
  state: string,
  country: string,
  postcode: number,
  coordinates: Object,
  timezone: Object
}

export interface Dob {
  date: string,
  age: number
}

export interface Picture {
  large: string,
  medium: string,
  thumbnail: string
}

export interface UserDTO {
  gender: string,
  name: Name,
  location: Location,
  email: string,
  login: Object,
  dob: Dob,
  registered: Object,
  phone: string,
  cell: string,
  id: Object,
  picture: Picture,
  nat: string
}

export interface UsersDTO {
  results: Array<UserDTO>,
  info: Object
}