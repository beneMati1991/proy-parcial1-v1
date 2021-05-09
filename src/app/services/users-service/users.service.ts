import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  allUsers: any = {}

  constructor() { }

  getAllUsers(){
    return this.allUsers = userDetails.slice(0);
  }
}

const userDetails = [
  {"idUser":1, "username":"superadmin", "password": "Azerty?.123", "surname": "ap" , "name": "no", "mail": "a@gmail.com", "operador": "", "rol": "Administrador"},
  {"idUser":2, "username":"user1", "password": "123", "surname": "Matias" , "name": "Benedetto", "mail": "benedettomatias@gmail.com", "operador": "", "rol": "User"}
]