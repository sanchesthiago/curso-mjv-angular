import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Array <User> =[
    { 
      id: 1,
      name: 'Thiago',
      email:'thiago@gmail.com',
      password: '1234',
      inclusionDate: '30/04/2021',
      validRegistration: true,
      img:'/assets/thiago.png'
  
    },
  
    { 
      id: 2,
      name: 'Rose',
      email:'rose@gmail.com',
      password: '1234',
      inclusionDate: '30/04/2021',
      validRegistration: true,
      img:'/assets/rose.png'
  
    },
  
    { 
      id: 3,
      name: 'Josi',
      email:'josi@gmail.com',
      password: '1234',
      inclusionDate: '30/04/2021',
      validRegistration: true,
      img:'/assets/josi.png'
  
    },
  
    { 
      id: 4,
      name: 'Pedro',
      email:'pedro@gmail.com',
      password: '1234',
      inclusionDate: '30/04/2021',
      validRegistration: true,
      img:'/assets/pedro.png'
  
    },
  
  
  ];

constructor() { }
getUser() {
  return this.users;
}
getUserById(id: number) {
  return this.users.find((user) => user.id === Number(id));
}
getUserByEmailAndPassword(email: string, password: string){
  return this.users.find((user)=> user.email === email && user.password === password);

}

}
